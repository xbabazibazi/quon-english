export type Cefr = 'A1' | 'A2' | 'B1' | 'B2' | 'C1'

/** Türkçe konuşanların İngilizcede yaptığı sistematik hata etiketleri */
export type ErrorTag =
  | 'TOBE' // "I engineer" — to be atlanır
  | 'ART' // a/an/the eksik veya fazla
  | 'GEN' // he/she/it karışır
  | 'PLURAL' // çoğul -s düşer
  | 'WORD_ORDER' // Türkçe SOV sırası
  | 'SVAGR' // he/she/it + -s uyumu
  | 'DO_Q' // do/does ile soru kuramama
  | 'NEG' // don't/doesn't / isn't yerine "no"
  | 'PREP' // in/on/at karışır
  | 'THERE' // there is/are yerine "have"
  | 'CAN' // can + to / can + -s
  | 'POSS' // my/your / 's karışır
  | 'AGREE' // "I am agree"
  | 'MAKE_DO'
  | 'PPERF'
  | 'PAST'
  | 'SOME_ANY'
  | 'MUCH_MANY'
  | 'ING'
  | 'TIME'
  | 'PRESCONT'
  | 'HAVE_GOT'
  | 'FREQ'
  | 'WH'
  | 'GOING_TO'
  | 'COMP'
  | 'SUPER'
  | 'PASTCONT'
  | 'HAVE_TO'
  | 'OBJPRON'
  | 'WILL'
  | 'COND1'
  | 'SHOULD'
  | 'ADJORDER'
  | 'QUANT'
  | 'GERUND_INF'
  | 'MODAL'
  | 'PASTPERF'
  | 'PASSIVE'
  | 'REL'
  | 'COND2'
  | 'USEDTO'
  | 'REPORTED'
  | 'DEDUCTION'
  | 'PHRASAL'
  | 'TAGQ'
  | 'ASAS'
  | 'COND3'
  | 'WISH'
  | 'LINK'
  | 'PERFMODAL'

export interface ErrorTagDef {
  code: ErrorTag
  title_tr: string
  explanation_tr: string
}

export interface Skill {
  id: string
  cefr: Cefr
  sublevel: string // A1.1, A1.2 ...
  type: 'grammar' | 'function' | 'vocab'
  title_tr: string
  prereqs: string[]
  lessonId?: string
}

export interface Word {
  en: string
  tr: string
  example: string
  example_tr: string
}

export type Exercise =
  | { type: 'mc'; prompt: string; options: string[]; answer: number; explanation_tr?: string }
  | { type: 'gap'; sentence: string; options: string[]; answer: number; explanation_tr?: string }
  | { type: 'match'; pairs: [string, string][] }
  | { type: 'order'; prompt_tr: string; words: string[]; answer: string }

export interface ErrorVariant {
  text: string
  tag: ErrorTag
  explanation_tr: string
}

export interface QuizItem {
  id: string
  /** 'order' = kelimeleri sırala (kapalı küme), 'free' = serbest yazım */
  mode: 'order' | 'free'
  prompt_tr: string
  answer_en: string
  accepted?: string[]
  /** order modunda gösterilecek kelimeler (doğru + çeldirici), karışık */
  words?: string[]
  error_variants: ErrorVariant[]
  hint?: string
}

export interface Lesson {
  id: string
  skillId: string
  title: string
  title_tr: string
  explanation_tr: string
  examples: { en: string; tr: string }[]
  words: Word[]
  exercises: Exercise[]
  quiz: QuizItem[]
}

export type Goal = 'work' | 'travel' | 'exam' | 'general'

export interface VocabItem {
  id: string
  en: string
  tr: string
  pos: 'n' | 'v' | 'adj' | 'adv' | 'phr' | 'other'
  cefr: Cefr
  topic: string
  example: string
  example_tr: string
  /** Türkçeden İngilizceye yazarken kabul edilen diğer doğru karşılıklar */
  accepted?: string[]
}

export interface ReadingLine {
  speaker?: string
  en: string
  tr: string
}

export interface Reading {
  id: string
  sublevel: string
  kind: 'text' | 'dialogue'
  title: string
  title_tr: string
  lines: ReadingLine[]
  questions: { prompt_tr: string; options: string[]; answer: number }[]
}

export interface ScenarioReply {
  en: string
  tr: string
  ok: boolean
  /** ok=false ise neden uygun olmadığı; ok=true ise isteğe bağlı ipucu */
  feedback_tr?: string
  /** null = senaryo biter */
  next: string | null
}

export interface ScenarioNode {
  npc: string
  npc_tr: string
  replies: ScenarioReply[]
}

export interface Scenario {
  id: string
  goal: Goal
  cefr: Cefr
  title_tr: string
  setting_tr: string
  npc_name: string
  start: string
  nodes: Record<string, ScenarioNode>
}

export interface LevelQuestion {
  id: string
  cefr: Cefr
  prompt: string
  options: string[]
  answer: number
}
