import { LEVEL_QUESTIONS } from '../content'
import type { Cefr, LevelQuestion } from '../content'
import type { Sublevel } from '../store'
import { shuffle } from './match'

const LADDER: Cefr[] = ['A1', 'A2', 'B1']
export const TEST_LENGTH = 12

export interface TestState {
  level: number // LADDER indeksi
  asked: string[]
  correctBy: Record<Cefr, number>
  askedBy: Record<Cefr, number>
  pools: Record<string, LevelQuestion[]>
}

export function startTest(seed = Math.random()): TestState {
  const pools: Record<string, LevelQuestion[]> = {}
  for (const l of LADDER) pools[l] = shuffle(LEVEL_QUESTIONS.filter((q) => q.cefr === l), seed)
  return {
    level: 0,
    asked: [],
    correctBy: { A1: 0, A2: 0, B1: 0, B2: 0, C1: 0 },
    askedBy: { A1: 0, A2: 0, B1: 0, B2: 0, C1: 0 },
    pools,
  }
}

/** Sıradaki soru: mevcut seviyeden sorulmamış bir soru. */
export function nextQuestion(t: TestState): LevelQuestion | null {
  if (t.asked.length >= TEST_LENGTH) return null
  const lvl = LADDER[t.level]
  const q = t.pools[lvl].find((x) => !t.asked.includes(x.id))
  return q ?? null
}

/** Basit adaptif kural: doğruysa bir üst seviyeden, yanlışsa bir alttan sor. */
export function answer(t: TestState, q: LevelQuestion, correct: boolean): TestState {
  const level = correct ? Math.min(LADDER.length - 1, t.level + 1) : Math.max(0, t.level - 1)
  return {
    ...t,
    level,
    asked: [...t.asked, q.id],
    correctBy: { ...t.correctBy, [q.cefr]: t.correctBy[q.cefr] + (correct ? 1 : 0) },
    askedBy: { ...t.askedBy, [q.cefr]: t.askedBy[q.cefr] + 1 },
  }
}

export interface TestResult {
  cefr: Cefr
  sublevel: Sublevel
  score: { A1: number; A2: number; B1: number }
}

/** Sonuç: her seviyedeki doğruluk oranına göre alt-seviye tahmini. */
export function finishTest(t: TestState): TestResult {
  const ratio = (l: Cefr) => (t.askedBy[l] ? t.correctBy[l] / t.askedBy[l] : 0)
  const score = { A1: t.correctBy.A1, A2: t.correctBy.A2, B1: t.correctBy.B1 }
  if (t.askedBy.B1 >= 3 && ratio('B1') >= 0.6) return { cefr: 'B1', sublevel: 'B1.1', score }
  if (t.askedBy.A2 >= 3 && ratio('A2') >= 0.6) return { cefr: 'A2', sublevel: ratio('A2') >= 0.85 ? 'A2.2' : 'A2.1', score }
  if (t.askedBy.A1 >= 3 && ratio('A1') >= 0.7) return { cefr: 'A1', sublevel: 'A1.3', score }
  if (t.askedBy.A1 >= 2 && ratio('A1') >= 0.5) return { cefr: 'A1', sublevel: 'A1.2', score }
  return { cefr: 'A1', sublevel: 'A1.1', score }
}
