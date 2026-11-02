import type { Skill } from './types'

/** Beceri grafiği (DAG). A1.1 → B2.1 tam müfredat (CEFR hizalı). */
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
  // A1.3
  { id: 'have_got', cefr: 'A1', sublevel: 'A1.3', type: 'grammar', title_tr: 'have got — sahip olmak', prereqs: ['do_questions'], lessonId: 'l_have_got' },
  { id: 'present_continuous', cefr: 'A1', sublevel: 'A1.3', type: 'grammar', title_tr: 'Şimdiki zaman: I am working', prereqs: ['present_simple'], lessonId: 'l_present_continuous' },
  { id: 'like_ing', cefr: 'A1', sublevel: 'A1.3', type: 'grammar', title_tr: 'like / love / hate + -ing', prereqs: ['present_simple'], lessonId: 'l_like_ing' },
  { id: 'adverbs_freq', cefr: 'A1', sublevel: 'A1.3', type: 'grammar', title_tr: 'always / usually / never', prereqs: ['present_simple'], lessonId: 'l_adverbs_freq' },
  { id: 'wh_questions', cefr: 'A1', sublevel: 'A1.3', type: 'grammar', title_tr: 'What / Where / When soruları', prereqs: ['do_questions'], lessonId: 'l_wh_questions' },
  { id: 'time', cefr: 'A1', sublevel: 'A1.3', type: 'function', title_tr: 'Saat ve günler', prereqs: ['prepositions'], lessonId: 'l_time' },
  // A2.1
  { id: 'past_simple', cefr: 'A2', sublevel: 'A2.1', type: 'grammar', title_tr: 'Geçmiş zaman: worked / went', prereqs: ['do_questions', 'time'], lessonId: 'l_past_simple' },
  { id: 'going_to', cefr: 'A2', sublevel: 'A2.1', type: 'grammar', title_tr: 'going to — plan', prereqs: ['present_simple'], lessonId: 'l_going_to' },
  { id: 'comparatives', cefr: 'A2', sublevel: 'A2.1', type: 'grammar', title_tr: 'bigger / more expensive', prereqs: ['plural'], lessonId: 'l_comparatives' },
  { id: 'superlatives', cefr: 'A2', sublevel: 'A2.1', type: 'grammar', title_tr: 'the biggest / the most expensive', prereqs: ['comparatives'], lessonId: 'l_superlatives' },
  // A2.2
  { id: 'past_continuous', cefr: 'A2', sublevel: 'A2.2', type: 'grammar', title_tr: 'was / were + -ing — geçmişte sürerken', prereqs: ['past_simple'], lessonId: 'l_past_continuous' },
  { id: 'have_to', cefr: 'A2', sublevel: 'A2.2', type: 'grammar', title_tr: 'have to / don\'t have to — zorunluluk', prereqs: ['can'], lessonId: 'l_have_to' },
  { id: 'some_any', cefr: 'A2', sublevel: 'A2.2', type: 'grammar', title_tr: 'some / any / no', prereqs: ['plural'], lessonId: 'l_some_any' },
  { id: 'much_many', cefr: 'A2', sublevel: 'A2.2', type: 'grammar', title_tr: 'much / many / a lot of', prereqs: ['plural'], lessonId: 'l_much_many' },
  { id: 'object_pronouns', cefr: 'A2', sublevel: 'A2.2', type: 'grammar', title_tr: 'me / him / her / them — nesne zamirleri', prereqs: ['pronouns'], lessonId: 'l_object_pronouns' },
  // A2.3
  { id: 'future_will', cefr: 'A2', sublevel: 'A2.3', type: 'grammar', title_tr: 'will — tahmin ve anlık karar', prereqs: ['going_to'], lessonId: 'l_future_will' },
  { id: 'first_conditional', cefr: 'A2', sublevel: 'A2.3', type: 'grammar', title_tr: 'if + geniş zaman, will — birinci koşul', prereqs: ['future_will'], lessonId: 'l_first_conditional' },
  { id: 'should_advice', cefr: 'A2', sublevel: 'A2.3', type: 'grammar', title_tr: 'should / shouldn\'t — tavsiye', prereqs: ['can'], lessonId: 'l_should_advice' },
  { id: 'adjective_order', cefr: 'A2', sublevel: 'A2.3', type: 'grammar', title_tr: 'Sıfat sırası: büyük kırmızı araba', prereqs: ['comparatives'], lessonId: 'l_adjective_order' },
  { id: 'make_do', cefr: 'A2', sublevel: 'A2.3', type: 'vocab', title_tr: 'make / do ayrımı', prereqs: ['past_simple'], lessonId: 'l_make_do' },
  // B1.1
  { id: 'present_perfect', cefr: 'B1', sublevel: 'B1.1', type: 'grammar', title_tr: 'have / has + V3 — present perfect', prereqs: ['past_simple'], lessonId: 'l_present_perfect' },
  { id: 'present_perfect_vs_past', cefr: 'B1', sublevel: 'B1.1', type: 'grammar', title_tr: 'Present perfect mi, past simple mi?', prereqs: ['present_perfect'], lessonId: 'l_present_perfect_vs_past' },
  { id: 'quantifiers_advanced', cefr: 'B1', sublevel: 'B1.1', type: 'grammar', title_tr: 'a few / a little / plenty of', prereqs: ['much_many'], lessonId: 'l_quantifiers_advanced' },
  { id: 'gerund_infinitive', cefr: 'B1', sublevel: 'B1.1', type: 'grammar', title_tr: '-ing mi, to + fiil mi?', prereqs: ['like_ing'], lessonId: 'l_gerund_infinitive' },
  { id: 'modals_obligation', cefr: 'B1', sublevel: 'B1.1', type: 'grammar', title_tr: 'must / have to / should farkları', prereqs: ['have_to', 'should_advice'], lessonId: 'l_modals_obligation' },
  // B1.2
  { id: 'past_perfect', cefr: 'B1', sublevel: 'B1.2', type: 'grammar', title_tr: 'had + V3 — geçmişte geçmiş', prereqs: ['present_perfect'], lessonId: 'l_past_perfect' },
  { id: 'passive_voice', cefr: 'B1', sublevel: 'B1.2', type: 'grammar', title_tr: 'Edilgen çatı: is made / was built', prereqs: ['past_simple'], lessonId: 'l_passive_voice' },
  { id: 'relative_clauses', cefr: 'B1', sublevel: 'B1.2', type: 'grammar', title_tr: 'who / which / that / whose', prereqs: ['present_perfect'], lessonId: 'l_relative_clauses' },
  { id: 'second_conditional', cefr: 'B1', sublevel: 'B1.2', type: 'grammar', title_tr: 'if + past, would — ikinci koşul', prereqs: ['first_conditional'], lessonId: 'l_second_conditional' },
  { id: 'used_to', cefr: 'B1', sublevel: 'B1.2', type: 'grammar', title_tr: 'used to — eskiden yapılan alışkanlık', prereqs: ['past_simple'], lessonId: 'l_used_to' },
  // B1.3
  { id: 'reported_speech', cefr: 'B1', sublevel: 'B1.3', type: 'grammar', title_tr: 'Dolaylı anlatım: said / told', prereqs: ['past_simple'], lessonId: 'l_reported_speech' },
  { id: 'modals_deduction', cefr: 'B1', sublevel: 'B1.3', type: 'grammar', title_tr: 'must / can\'t / might — çıkarım', prereqs: ['modals_obligation'], lessonId: 'l_modals_deduction' },
  { id: 'phrasal_verbs', cefr: 'B1', sublevel: 'B1.3', type: 'vocab', title_tr: 'Sık kullanılan phrasal verb\'ler', prereqs: ['present_perfect'], lessonId: 'l_phrasal_verbs' },
  { id: 'question_tags', cefr: 'B1', sublevel: 'B1.3', type: 'grammar', title_tr: 'Question tags: isn\'t it, don\'t you', prereqs: ['do_questions'], lessonId: 'l_question_tags' },
  { id: 'comparative_structures', cefr: 'B1', sublevel: 'B1.3', type: 'grammar', title_tr: 'as...as, less...than', prereqs: ['comparatives', 'superlatives'], lessonId: 'l_comparative_structures' },
  // B2.1
  { id: 'third_conditional', cefr: 'B2', sublevel: 'B2.1', type: 'grammar', title_tr: 'if + past perfect, would have — üçüncü koşul', prereqs: ['second_conditional', 'past_perfect'], lessonId: 'l_third_conditional' },
  { id: 'passive_advanced', cefr: 'B2', sublevel: 'B2.1', type: 'grammar', title_tr: 'İleri edilgen: modal + passive, perfect passive', prereqs: ['passive_voice'], lessonId: 'l_passive_advanced' },
  { id: 'wish_if_only', cefr: 'B2', sublevel: 'B2.1', type: 'grammar', title_tr: 'wish / if only — keşke yapıları', prereqs: ['second_conditional'], lessonId: 'l_wish_if_only' },
  { id: 'linking_words', cefr: 'B2', sublevel: 'B2.1', type: 'grammar', title_tr: 'although / however / despite', prereqs: ['first_conditional'], lessonId: 'l_linking_words' },
  { id: 'modals_perfect', cefr: 'B2', sublevel: 'B2.1', type: 'grammar', title_tr: 'should have / could have / might have', prereqs: ['modals_deduction', 'past_perfect'], lessonId: 'l_modals_perfect' },
]

export const SKILL_MAP: Record<string, Skill> = Object.fromEntries(SKILLS.map((s) => [s.id, s]))

export const SUBLEVELS = ['A1.1', 'A1.2', 'A1.3', 'A2.1', 'A2.2', 'A2.3', 'B1.1', 'B1.2', 'B1.3', 'B2.1'] as const
export type Sublevel = (typeof SUBLEVELS)[number]
