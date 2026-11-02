import { LESSON_BY_SKILL, LESSON_MAP, SKILLS, SKILL_MAP, SUBLEVELS } from '../content'
import type { Exercise, Lesson, QuizItem, ErrorTag } from '../content'
import { shuffle } from './match'

export interface SessionPlan {
  lesson: Lesson
  skillId: string
  /** Kullanıcı bu beceriyi zaten biliyor ama tekrar ediyor */
  isReinforcement: boolean
  exercises: Exercise[]
  quiz: QuizItem[]
  reason: string
}

interface PlanInput {
  skillMastery: Record<string, number>
  topErrorTags: ErrorTag[]
  learnedLessonIds: string[]
  now?: Date
}

const MASTERED = 0.6
const EXERCISES = 8
const QUIZ = 8

/** Saf kod: sıradaki dersi seçer. LLM çağrısı yok, çevrimdışı çalışır. */
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

  // 2) Alıştırma ve sınav havuzdan karışık seçilir: tekrar eden seanslarda cümleler değişir
  const seed = (now.getTime() % 1e9) / 1e9
  const exercises = shuffle(lesson.exercises, seed).slice(0, EXERCISES)

  // 3) Sınav: bu dersten + önceki derslerden en sık hata etiketini hedefleyen 2 soru
  const today = shuffle(lesson.quiz, seed + 0.1)
  let quiz: QuizItem[] = today.slice(0, QUIZ)
  const others = input.learnedLessonIds
    .filter((id) => id !== lesson.id && LESSON_MAP[id])
    .flatMap((id) => LESSON_MAP[id].quiz)
    .filter((q) => q.error_variants.some((v) => input.topErrorTags.includes(v.tag)))
  if (others.length >= 2 && input.topErrorTags.length) {
    quiz = [...today.slice(0, QUIZ - 2), ...shuffle(others, seed + 0.2).slice(0, 2)]
  }

  return { lesson, skillId: skill.id, isReinforcement, exercises, quiz, reason }
}
