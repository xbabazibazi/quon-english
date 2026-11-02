// Kelime, okuma ve senaryolar ayrı bir parça olarak yüklenir (ekranlarda dinamik import).
import type { Cefr, Reading, Scenario, VocabItem } from './types'
import { VOCAB_A1_1 } from './vocab/vocabA11'
import { VOCAB_A1_2 } from './vocab/vocabA12'
import { VOCAB_A2_1 } from './vocab/vocabA21'
import { VOCAB_A2_2 } from './vocab/vocabA22'
import { VOCAB_B1_1 } from './vocab/vocabB11'
import { VOCAB_B1_2 } from './vocab/vocabB12'
import { VOCAB_B2_1 } from './vocab/vocabB21'
import { VOCAB_B2_2 } from './vocab/vocabB22'
import { READINGS_A } from './readings/readingsA'
import { READINGS_B } from './readings/readingsB'
import { SCENARIOS_A } from './scenarios/scenariosA'
import { SCENARIOS_B } from './scenarios/scenariosB'

const ALL_VOCAB = [VOCAB_A1_1, VOCAB_A1_2, VOCAB_A2_1, VOCAB_A2_2, VOCAB_B1_1, VOCAB_B1_2, VOCAB_B2_1, VOCAB_B2_2].flat()

// Kart anahtarı id'den üretilir; aynı yazılıp farklı anlamlı kelimeler (save: kaydetmek / kurtarmak) ayrı id ile kalır
const seen = new Set<string>()
export const VOCAB: VocabItem[] = ALL_VOCAB.filter((v) => {
  if (seen.has(v.id)) return false
  seen.add(v.id)
  return true
})

export const VOCAB_LEVELS: Cefr[] = ['A1', 'A2', 'B1', 'B2']
export const READINGS: Reading[] = [...READINGS_A, ...READINGS_B]
export const SCENARIOS: Scenario[] = [...SCENARIOS_A, ...SCENARIOS_B]
