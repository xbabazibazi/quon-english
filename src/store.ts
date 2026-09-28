import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'
import type { Cefr, ErrorTag, Lesson } from './content'
import { SKILLS, SUBLEVELS } from './content'
import { isMature, newCard, review, reviveCard, type Grade, type SrsCard } from './engine/srs'
import { dateKey, daysBetween, monthKey } from './engine/dates'

export type Goal = 'work' | 'travel' | 'exam' | 'general'
export type Sublevel = (typeof SUBLEVELS)[number]

export interface Profile {
  onboarded: boolean
  goal: Goal
  cefr: Cefr
  sublevel: Sublevel
  dailyGoal: 1 | 2
  createdAt: string
  levelTestScore?: { A1: number; A2: number; B1: number }
}

export interface CardEntry {
  id: string
  front: string
  back_tr: string
  example: string
  example_tr: string
  lessonId: string
  srs: SrsCard
}

export interface ErrorEvent {
  date: string
  tag: ErrorTag
  answer: string
  expected: string
  explanation_tr: string
}

export interface SessionRecord {
  date: string
  lessonId: string
  skillId: string
  xp: number
  correct: number
  total: number
  errors: ErrorEvent[]
  completedAt: string
  kind: 'daily' | 'second' | 'weekly'
}

export interface Streak {
  current: number
  longest: number
  lastActiveDate: string | null
  freezesLeft: number
  freezeMonth: string
}

interface State {
  profile: Profile
  skillMastery: Record<string, number>
  cards: Record<string, CardEntry>
  sessions: SessionRecord[]
  errorCounts: Partial<Record<ErrorTag, number>>
  totalXp: number
  streak: Streak
  // actions
  completeOnboarding: (p: Omit<Profile, 'onboarded' | 'createdAt'>) => void
  setDailyGoal: (g: 1 | 2) => void
  reviewCard: (id: string, grade: Grade) => void
  addCardsFromLesson: (lesson: Lesson) => void
  completeSession: (r: Omit<SessionRecord, 'completedAt' | 'date'>, masteryScore: number) => void
  reset: () => void
}

const DEFAULT_PROFILE: Profile = {
  onboarded: false,
  goal: 'general',
  cefr: 'A1',
  sublevel: 'A1.1',
  dailyGoal: 1,
  createdAt: '',
}

const DEFAULT_STREAK: Streak = { current: 0, longest: 0, lastActiveDate: null, freezesLeft: 2, freezeMonth: monthKey() }

/** Seviye testinden gelen alt-seviyeye göre önceki becerilere başlangıç yeterliliği yazar. */
function seedMastery(sublevel: Sublevel): Record<string, number> {
  const idx = SUBLEVELS.indexOf(sublevel)
  const m: Record<string, number> = {}
  for (const s of SKILLS) {
    const si = SUBLEVELS.indexOf(s.sublevel as Sublevel)
    m[s.id] = si < idx ? 0.75 : 0
  }
  return m
}

function advanceStreak(s: Streak, today: string): Streak {
  const mk = monthKey()
  const freezesLeft = s.freezeMonth === mk ? s.freezesLeft : 2
  if (s.lastActiveDate === today) return { ...s, freezesLeft, freezeMonth: mk }
  let current = 1
  let left = freezesLeft
  if (s.lastActiveDate) {
    const gap = daysBetween(s.lastActiveDate, today)
    if (gap === 1) current = s.current + 1
    else if (gap === 2 && left > 0) {
      current = s.current + 1
      left -= 1
    }
  }
  return { current, longest: Math.max(s.longest, current), lastActiveDate: today, freezesLeft: left, freezeMonth: mk }
}

export const useStore = create<State>()(
  persist(
    (set) => ({
      profile: DEFAULT_PROFILE,
      skillMastery: {},
      cards: {},
      sessions: [],
      errorCounts: {},
      totalXp: 0,
      streak: DEFAULT_STREAK,

      completeOnboarding: (p) =>
        set({
          profile: { ...p, onboarded: true, createdAt: new Date().toISOString() },
          skillMastery: seedMastery(p.sublevel),
        }),

      setDailyGoal: (g) => set((s) => ({ profile: { ...s.profile, dailyGoal: g } })),

      reviewCard: (id, grade) =>
        set((s) => {
          const c = s.cards[id]
          if (!c) return {}
          return { cards: { ...s.cards, [id]: { ...c, srs: review(c.srs, grade) } } }
        }),

      addCardsFromLesson: (lesson) =>
        set((s) => {
          const cards = { ...s.cards }
          for (const w of lesson.words) {
            const id = `${lesson.id}:${w.en}`
            if (!cards[id]) {
              cards[id] = { id, front: w.en, back_tr: w.tr, example: w.example, example_tr: w.example_tr, lessonId: lesson.id, srs: newCard() }
            }
          }
          return { cards }
        }),

      completeSession: (r, masteryScore) =>
        set((s) => {
          const today = dateKey()
          const old = s.skillMastery[r.skillId] ?? 0
          const mastery = masteryScore >= old ? old * 0.3 + masteryScore * 0.7 : old * 0.5 + masteryScore * 0.5
          const errorCounts = { ...s.errorCounts }
          for (const e of r.errors) errorCounts[e.tag] = (errorCounts[e.tag] ?? 0) + 1
          const record: SessionRecord = { ...r, date: today, completedAt: new Date().toISOString() }
          return {
            sessions: [...s.sessions, record],
            skillMastery: { ...s.skillMastery, [r.skillId]: Math.min(1, mastery) },
            errorCounts,
            totalXp: s.totalXp + r.xp,
            streak: advanceStreak(s.streak, today),
          }
        }),

      reset: () =>
        set({ profile: DEFAULT_PROFILE, skillMastery: {}, cards: {}, sessions: [], errorCounts: {}, totalXp: 0, streak: DEFAULT_STREAK }),
    }),
    {
      name: 'gunde10-v1',
      storage: createJSONStorage(() => localStorage),
      onRehydrateStorage: () => (state) => {
        if (!state) return
        for (const id of Object.keys(state.cards)) state.cards[id].srs = reviveCard(state.cards[id].srs)
      },
    },
  ),
)

// ---- türetilmiş seçiciler ----
export function selectTodaySessions(s: State): SessionRecord[] {
  const t = dateKey()
  return s.sessions.filter((x) => x.date === t)
}

export function selectMatureWords(s: State): number {
  return Object.values(s.cards).filter((c) => isMature(c.srs)).length
}

export function selectTopErrorTags(s: State, n = 3): ErrorTag[] {
  return (Object.entries(s.errorCounts) as [ErrorTag, number][])
    .sort((a, b) => b[1] - a[1])
    .slice(0, n)
    .map(([t]) => t)
}
