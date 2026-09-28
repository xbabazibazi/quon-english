import type { Skill } from './types'

/** Beceri grafiği (DAG). Demo: A1.1 ve A1.2 tam, A1.3+ iskelet (ders yok → kilitli görünür). */
export const SKILLS: Skill[] = [
  // A1.1
  { id: 'tobe', cefr: 'A1', sublevel: 'A1.1', type: 'grammar', title_tr: 'am / is / are — kendini tanıtma', prereqs: [], lessonId: 'l_tobe' },
  { id: 'articles', cefr: 'A1', sublevel: 'A1.1', type: 'grammar', title_tr: 'a / an — artikel', prereqs: ['tobe'], lessonId: 'l_articles' },
  { id: 'pronouns', cefr: 'A1', sublevel: 'A1.1', type: 'grammar', title_tr: 'he / she / it — zamirler', prereqs: ['tobe'], lessonId: 'l_pronouns' },
  { id: 'plural', cefr: 'A1', sublevel: 'A1.1', type: 'grammar', title_tr: 'Çoğul: -s / -es', prereqs: ['articles'], lessonId: 'l_plural' },
  { id: 'possessive', cefr: 'A1', sublevel: 'A1.1', type: 'grammar', title_tr: 'my / your / his / her — iyelik', prereqs: ['pronouns'], lessonId: 'l_possessive' },
  // A1.2
  { id: 'present_simple', cefr: 'A1', sublevel: 'A1.2', type: 'grammar', title_tr: 'Geniş zaman: I work / She works', prereqs: ['pronouns', 'plural'], lessonId: 'l_present_simple' },
  { id: 'do_questions', cefr: 'A1', sublevel: 'A1.2', type: 'grammar', title_tr: 'Do / Does ile soru ve olumsuz', prereqs: ['present_simple'], lessonId: 'l_do_questions' },
  { id: 'there_is', cefr: 'A1', sublevel: 'A1.2', type: 'grammar', title_tr: 'There is / There are', prereqs: ['plural', 'articles'], lessonId: 'l_there_is' },
  { id: 'can', cefr: 'A1', sublevel: 'A1.2', type: 'grammar', title_tr: 'can / can\'t — yapabilmek', prereqs: ['present_simple'], lessonId: 'l_can' },
  { id: 'prepositions', cefr: 'A1', sublevel: 'A1.2', type: 'grammar', title_tr: 'in / on / at — yer ve zaman', prereqs: ['there_is'], lessonId: 'l_prepositions' },
  // A1.3 (iskelet — içerik sonraki paketle gelir)
  { id: 'have_got', cefr: 'A1', sublevel: 'A1.3', type: 'grammar', title_tr: 'have got — sahip olmak', prereqs: ['do_questions'] },
  { id: 'like_ing', cefr: 'A1', sublevel: 'A1.3', type: 'grammar', title_tr: 'like / love / hate + -ing', prereqs: ['present_simple'] },
  { id: 'adverbs_freq', cefr: 'A1', sublevel: 'A1.3', type: 'grammar', title_tr: 'always / usually / never', prereqs: ['present_simple'] },
  { id: 'wh_questions', cefr: 'A1', sublevel: 'A1.3', type: 'grammar', title_tr: 'What / Where / When soruları', prereqs: ['do_questions'] },
  { id: 'time', cefr: 'A1', sublevel: 'A1.3', type: 'function', title_tr: 'Saat ve günler', prereqs: ['prepositions'] },
  // A2.1 (iskelet)
  { id: 'past_simple', cefr: 'A2', sublevel: 'A2.1', type: 'grammar', title_tr: 'Geçmiş zaman: worked / went', prereqs: ['do_questions', 'time'] },
  { id: 'going_to', cefr: 'A2', sublevel: 'A2.1', type: 'grammar', title_tr: 'going to — plan', prereqs: ['present_simple'] },
  { id: 'comparatives', cefr: 'A2', sublevel: 'A2.1', type: 'grammar', title_tr: 'bigger / more expensive', prereqs: ['plural'] },
]

export const SKILL_MAP: Record<string, Skill> = Object.fromEntries(SKILLS.map((s) => [s.id, s]))

export const SUBLEVELS = ['A1.1', 'A1.2', 'A1.3', 'A2.1', 'A2.2', 'A2.3', 'B1.1', 'B1.2', 'B1.3', 'B2.1'] as const
export type Sublevel = (typeof SUBLEVELS)[number]
