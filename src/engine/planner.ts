import { LESSON_BY_SKILL, LESSON_MAP, SKILLS, SKILL_MAP, SUBLEVELS } from '../content'
import type { Exercise, Lesson, QuizItem, ErrorTag } from '../content'
import type { CardEntry } from '../store'
import { isDue } from './srs'
import { shuffle } from './match'

export interface SessionPlan {
  lesson: Lesson
  skillId: string
  /** Kullanıcı bu beceriyi zaten biliyor ama tekrar ediyor */
  isReinforcement: boolean
  warmup: CardEntry[]
  exercises: Exercise[]
  quiz: QuizItem[]
  reason: string
}

interface PlanInput {
  skillMastery: Record<string, number>
  cards: Record<string, CardEntry>
  topErrorTags: ErrorTag[]
  learnedLessonIds: string[]
  now?: Date
}

const MASTERED = 0.6

/** Saf kod: bugün ne çalışılacağına karar verir. LLM çağrısı yok, çevrimdışı çalışır. */
export function buildPlan(input: PlanInput): SessionPlan {
  const now = input.now ?? new Date()
  const m = (id: string) => input.skillMastery[id] ?? 0

  // 1) Ders seçimi: dersi olan, henüz öğrenilmemiş, ön koşulları tamam beceriler
  const withLesson = SKILLS.filter((s) => s.lessonId && LESSON_MAP[s.lessonId])
  const ready = withLesson.filter((s) => m(s.id) < 0.9 && s.prereqs.every((p) => m(p) >= MASTERED || !SKILL_MAP[p]?.lessonId))
  const order = (id: string) => SUBLEVELS.indexOf(SKILL_MAP[id].sublevel as (typeof SUBLEVELS)[number])
  const hitsTopError = (s: (typeof SKILLS)[number]) => {
    const l = LESSON_BY_SKILL[s.id]
    return l ? l.quiz.some((q) => q.error_variants.some((v) => input.topErrorTags.includes(v.tag))) : false
  }
  ready.sort((a, b) => {
    const ua = m(a.id) < MASTERED ? 0 : 1
    const ub = m(b.id) < MASTERED ? 0 : 1
    if (ua !== ub) return ua - ub // önce hiç öğrenilmemişler
    const ea = hitsTopError(a) ? 0 : 1
    const eb = hitsTopError(b) ? 0 : 1
    if (ea !== eb) return ea - eb // sonra en sık hatayı hedefleyen
    if (order(a.id) !== order(b.id)) return order(a.id) - order(b.id)
    return m(a.id) - m(b.id)
  })

  let skill = ready[0]
  let reason = 'Sıradaki beceri'
  let isReinforcement = false
  if (!skill) {
    // her şey öğrenilmiş: en düşük yeterlilikli dersi pekiştir
    skill = [...withLesson].sort((a, b) => m(a.id) - m(b.id))[0]
    isReinforcement = true
    reason = 'Pekiştirme: bu seviyedeki tüm dersler tamamlandı'
  } else if (m(skill.id) >= MASTERED) {
    isReinforcement = true
    reason = 'Pekiştirme'
  } else if (hitsTopError(skill) && input.topErrorTags.length) {
    reason = 'En sık hatanı hedefliyor'
  }
  const lesson = LESSON_BY_SKILL[skill.id]

  // 2) Isınma: vadesi gelmiş kartlar, en fazla 8
  const warmup = Object.values(input.cards)
    .filter((c) => isDue(c.srs, now))
    .sort((a, b) => new Date(a.srs.due).getTime() - new Date(b.srs.due).getTime())
    .slice(0, 8)

  // 3) Alıştırma: dersin havuzu (en fazla 6)
  const exercises = lesson.exercises.slice(0, 6)

  // 4) Günün sınavı: 3 bugünden + 2 önceki derslerden (en sık hata etiketini hedefleyen), yoksa 5 bugünden
  const seed = now.getTime() / 1e9
  const today = shuffle(lesson.quiz, seed)
  let quiz: QuizItem[] = today.slice(0, 5)
  const others = input.learnedLessonIds
    .filter((id) => id !== lesson.id && LESSON_MAP[id])
    .flatMap((id) => LESSON_MAP[id].quiz)
    .filter((q) => q.error_variants.some((v) => input.topErrorTags.includes(v.tag)))
  if (others.length >= 2 && input.topErrorTags.length) {
    quiz = [...today.slice(0, 3), ...shuffle(others, seed + 1).slice(0, 2)]
  }

  return { lesson, skillId: skill.id, isReinforcement, warmup, exercises, quiz, reason }
}
