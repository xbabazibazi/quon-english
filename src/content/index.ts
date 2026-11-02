import { LESSONS_A11 } from './lessonsA11'
import { LESSONS_A12 } from './lessonsA12'
import { LESSONS_A13 } from './lessonsA13'
import { LESSONS_A21 } from './lessonsA21'
import { LESSONS_A22 } from './lessonsA22'
import { LESSONS_A23 } from './lessonsA23'
import { LESSONS_B11 } from './lessonsB11'
import { LESSONS_B12 } from './lessonsB12'
import { LESSONS_B13 } from './lessonsB13'
import { LESSONS_B21 } from './lessonsB21'
import type { Lesson } from './types'

export { SKILLS, SKILL_MAP, SUBLEVELS } from './skills'
export { ERROR_TAGS, ERROR_TAG_MAP } from './errorTags'
export { LEVEL_QUESTIONS } from './levelTest'
export * from './types'

export const LESSONS: Lesson[] = [
  ...LESSONS_A11,
  ...LESSONS_A12,
  ...LESSONS_A13,
  ...LESSONS_A21,
  ...LESSONS_A22,
  ...LESSONS_A23,
  ...LESSONS_B11,
  ...LESSONS_B12,
  ...LESSONS_B13,
  ...LESSONS_B21,
]
export const LESSON_MAP: Record<string, Lesson> = Object.fromEntries(LESSONS.map((l) => [l.id, l]))
export const LESSON_BY_SKILL: Record<string, Lesson> = Object.fromEntries(LESSONS.map((l) => [l.skillId, l]))
