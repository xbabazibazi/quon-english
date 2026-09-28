import { LESSONS_A11 } from './lessonsA11'
import { LESSONS_A12 } from './lessonsA12'
import type { Lesson } from './types'

export { SKILLS, SKILL_MAP, SUBLEVELS } from './skills'
export { ERROR_TAGS, ERROR_TAG_MAP } from './errorTags'
export { LEVEL_QUESTIONS } from './levelTest'
export * from './types'

export const LESSONS: Lesson[] = [...LESSONS_A11, ...LESSONS_A12]
export const LESSON_MAP: Record<string, Lesson> = Object.fromEntries(LESSONS.map((l) => [l.id, l]))
export const LESSON_BY_SKILL: Record<string, Lesson> = Object.fromEntries(LESSONS.map((l) => [l.skillId, l]))
