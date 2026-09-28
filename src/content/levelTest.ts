import type { LevelQuestion } from './types'

/** Adaptif seviye testi havuzu. Demo: A1 / A2 / B1. Sonraki paketle B2, C1 eklenir. */
export const LEVEL_QUESTIONS: LevelQuestion[] = [
  // A1
  { id: 'lt_a1_1', cefr: 'A1', prompt: 'I ___ a student.', options: ['am', 'is', 'are'], answer: 0 },
  { id: 'lt_a1_2', cefr: 'A1', prompt: 'She ___ from Izmir.', options: ['am', 'is', 'are'], answer: 1 },
  { id: 'lt_a1_3', cefr: 'A1', prompt: 'This is ___ apple.', options: ['a', 'an', '—'], answer: 1 },
  { id: 'lt_a1_4', cefr: 'A1', prompt: 'I have three ___.', options: ['car', 'cars', 'a car'], answer: 1 },
  { id: 'lt_a1_5', cefr: 'A1', prompt: 'My mother is a nurse. ___ works at night.', options: ['He', 'She', 'It'], answer: 1 },
  { id: 'lt_a1_6', cefr: 'A1', prompt: '___ you like coffee?', options: ['Do', 'Does', 'Are'], answer: 0 },
  { id: 'lt_a1_7', cefr: 'A1', prompt: 'There ___ two chairs in the room.', options: ['is', 'are', 'have'], answer: 1 },
  { id: 'lt_a1_8', cefr: 'A1', prompt: 'The keys are ___ the table.', options: ['in', 'on', 'at'], answer: 1 },
  { id: 'lt_a1_9', cefr: 'A1', prompt: 'She can ___ very well.', options: ['swims', 'to swim', 'swim'], answer: 2 },
  { id: 'lt_a1_10', cefr: 'A1', prompt: 'He ___ in a bank.', options: ['work', 'works', 'is work'], answer: 1 },
  // A2
  { id: 'lt_a2_1', cefr: 'A2', prompt: 'Yesterday I ___ to Ankara.', options: ['go', 'went', 'goed'], answer: 1 },
  { id: 'lt_a2_2', cefr: 'A2', prompt: 'We ___ visit my parents next week.', options: ['going to', 'are going to', 'go to'], answer: 1 },
  { id: 'lt_a2_3', cefr: 'A2', prompt: 'Istanbul is ___ than Bursa.', options: ['big', 'bigger', 'more big'], answer: 1 },
  { id: 'lt_a2_4', cefr: 'A2', prompt: 'I ___ TV when you called.', options: ['watched', 'was watching', 'am watching'], answer: 1 },
  { id: 'lt_a2_5', cefr: 'A2', prompt: 'You ___ wear a helmet on a motorbike.', options: ['have to', 'has to', 'have'], answer: 0 },
  { id: 'lt_a2_6', cefr: 'A2', prompt: 'Do you have ___ money?', options: ['some', 'any', 'a'], answer: 1 },
  { id: 'lt_a2_7', cefr: 'A2', prompt: 'How ___ sugar do you want?', options: ['many', 'much', 'a lot'], answer: 1 },
  { id: 'lt_a2_8', cefr: 'A2', prompt: 'She is good ___ swimming.', options: ['in', 'at', 'on'], answer: 1 },
  { id: 'lt_a2_9', cefr: 'A2', prompt: 'If it rains, we ___ at home.', options: ['stay', 'will stay', 'stayed'], answer: 1 },
  { id: 'lt_a2_10', cefr: 'A2', prompt: 'I ___ my homework every evening.', options: ['make', 'do', 'have'], answer: 1 },
  // B1
  { id: 'lt_b1_1', cefr: 'B1', prompt: 'I ___ here since 2020.', options: ['live', 'have lived', 'lived'], answer: 1 },
  { id: 'lt_b1_2', cefr: 'B1', prompt: 'If I ___ more time, I would learn Spanish.', options: ['have', 'had', 'will have'], answer: 1 },
  { id: 'lt_b1_3', cefr: 'B1', prompt: 'She said she ___ tired.', options: ['is', 'was', 'be'], answer: 1 },
  { id: 'lt_b1_4', cefr: 'B1', prompt: 'When I arrived, the meeting ___.', options: ['already started', 'had already started', 'has already started'], answer: 1 },
  { id: 'lt_b1_5', cefr: 'B1', prompt: 'The report ___ by Friday.', options: ['will finish', 'will be finished', 'is finishing'], answer: 1 },
  { id: 'lt_b1_6', cefr: 'B1', prompt: 'I\'m not used ___ early.', options: ['to get up', 'to getting up', 'getting up'], answer: 1 },
  { id: 'lt_b1_7', cefr: 'B1', prompt: 'He ___ be at work; his car is outside.', options: ['must', 'can\'t', 'might not'], answer: 0 },
  { id: 'lt_b1_8', cefr: 'B1', prompt: 'The man ___ lives next door is a doctor.', options: ['which', 'who', 'whose'], answer: 1 },
  { id: 'lt_b1_9', cefr: 'B1', prompt: 'I wish I ___ speak English fluently.', options: ['can', 'could', 'will'], answer: 1 },
  { id: 'lt_b1_10', cefr: 'B1', prompt: 'Despite ___ hard, he failed.', options: ['work', 'working', 'to work'], answer: 1 },
]
