import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'
import type { Cefr, ErrorTag, Goal, Lesson, VocabItem } from './content'
import { SKILLS, SUBLEVELS } from './content'
import { isMature, newCard, review, reviveCard, type Grade, type SrsCard } from './engine/srs'
import { dateKey } from './engine/dates'
import { FREE_ENTITLEMENT, type Entitlement } from './billing'

export type { Goal }
export type Sublevel = (typeof SUBLEVELS)[number]

export interface Profile {
  onboarded: boolean
  goal: Goal
  cefr: Cefr
  sublevel: Sublevel
  createdAt: string
  levelTestScore?: { A1: number; A2: number; B1: number; B2: number }
}

export interface CardEntry {
  id: string
  front: string
  back_tr: string
  example: string
  example_tr: string
  /** Dersten gelen kartta ders id'si, kelime omurgasından gelende 'vocab' */
  lessonId: string
  accepted?: string[]
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
}

const STORAGE_KEY = 'quon-english-v1'
const LEGACY_STORAGE_KEY = 'gunde10-v1'

// Uygulamanın eski adıyla (Günde10) kaydedilmiş ilerlemeyi bir kez yeni anahtara taşı
try {
  const legacy = localStorage.getItem(LEGACY_STORAGE_KEY)
  if (legacy && !localStorage.getItem(STORAGE_KEY)) localStorage.setItem(STORAGE_KEY, legacy)
  if (legacy) localStorage.removeItem(LEGACY_STORAGE_KEY)
} catch {
  // depolama kapalıysa (gizli mod vb.) taşınacak bir şey de yoktur
}

export const XP_READING = 20
export const XP_SCENARIO = 30
export const XP_NEW_WORDS = 10

interface State {
  profile: Profile
  skillMastery: Record<string, number>
  cards: Record<string, CardEntry>
  sessions: SessionRecord[]
  errorCounts: Partial<Record<ErrorTag, number>>
  totalXp: number
  /** okuma id → son anlama puanı (0-1) */
  readings: Record<string, number>
  /** senaryo id → tamamlanma tarihi */
  scenarios: Record<string, string>
  entitlement: Entitlement
  // actions
  setEntitlement: (e: Entitlement) => void
  completeOnboarding: (p: Omit<Profile, 'onboarded' | 'createdAt'>) => void
  reviewCard: (id: string, grade: Grade) => void
  addCardsFromLesson: (lesson: Lesson) => void
  addVocabCards: (items: VocabItem[]) => void
  completeSession: (r: Omit<SessionRecord, 'completedAt' | 'date'>, masteryScore: number) => void
  completeReading: (id: string, score: number) => void
  completeScenario: (id: string) => void
  reset: () => void
}

const DEFAULT_PROFILE: Profile = {
  onboarded: false,
  goal: 'general',
  cefr: 'A1',
  sublevel: 'A1.1',
  createdAt: '',
}

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

/** Alt seviyedeki tüm beceriler öğrenildiyse sıradaki alt seviyeye geçirir. */
function advanceLevel(profile: Profile, mastery: Record<string, number>): Profile {
  let idx = SUBLEVELS.indexOf(profile.sublevel)
  while (idx < SUBLEVELS.length - 1 && SKILLS.filter((k) => k.sublevel === SUBLEVELS[idx]).every((k) => (mastery[k.id] ?? 0) >= 0.6)) idx++
  const sublevel = SUBLEVELS[idx]
  return { ...profile, sublevel, cefr: sublevel.slice(0, 2) as Cefr }
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
      readings: {},
      scenarios: {},
      entitlement: FREE_ENTITLEMENT,

      setEntitlement: (e) => set({ entitlement: e }),

      completeOnboarding: (p) =>
        set({
          profile: { ...p, onboarded: true, createdAt: new Date().toISOString() },
          skillMastery: seedMastery(p.sublevel),
        }),

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

      addVocabCards: (items) =>
        set((s) => {
          const cards = { ...s.cards }
          for (const v of items) {
            const id = `v:${v.id}`
            if (!cards[id]) {
              cards[id] = { id, front: v.en, back_tr: v.tr, example: v.example, example_tr: v.example_tr, lessonId: 'vocab', accepted: v.accepted, srs: newCard() }
            }
          }
          return { cards, totalXp: s.totalXp + XP_NEW_WORDS }
        }),

      completeSession: (r, masteryScore) =>
        set((s) => {
          const old = s.skillMastery[r.skillId] ?? 0
          const mastery = masteryScore >= old ? old * 0.3 + masteryScore * 0.7 : old * 0.5 + masteryScore * 0.5
          const errorCounts = { ...s.errorCounts }
          for (const e of r.errors) errorCounts[e.tag] = (errorCounts[e.tag] ?? 0) + 1
          const record: SessionRecord = { ...r, date: dateKey(), completedAt: new Date().toISOString() }
          const skillMastery = { ...s.skillMastery, [r.skillId]: Math.min(1, mastery) }
          return {
            profile: advanceLevel(s.profile, skillMastery),
            sessions: [...s.sessions, record],
            skillMastery,
            errorCounts,
            totalXp: s.totalXp + r.xp,
          }
        }),

      completeReading: (id, score) =>
        set((s) => ({ readings: { ...s.readings, [id]: Math.max(score, s.readings[id] ?? 0) }, totalXp: s.totalXp + XP_READING })),

      completeScenario: (id) => set((s) => ({ scenarios: { ...s.scenarios, [id]: dateKey() }, totalXp: s.totalXp + XP_SCENARIO })),

      // entitlement bilerek sıfırlanmaz: ilerlemeyi silmek satın alımı silmemeli
      reset: () =>
        set({ profile: DEFAULT_PROFILE, skillMastery: {}, cards: {}, sessions: [], errorCounts: {}, totalXp: 0, readings: {}, scenarios: {} }),
    }),
    {
      name: STORAGE_KEY,
      storage: createJSONStorage(() => localStorage),
      onRehydrateStorage: () => (state) => {
        if (!state) return
        for (const id of Object.keys(state.cards)) state.cards[id].srs = reviveCard(state.cards[id].srs)
      },
    },
  ),
)

// ---- türetilmiş seçiciler ----
export function selectMatureWords(s: State): number {
  return Object.values(s.cards).filter((c) => isMature(c.srs)).length
}

export function selectTopErrorTags(s: State, n = 3): ErrorTag[] {
  return (Object.entries(s.errorCounts) as [ErrorTag, number][])
    .sort((a, b) => b[1] - a[1])
    .slice(0, n)
    .map(([t]) => t)
}
