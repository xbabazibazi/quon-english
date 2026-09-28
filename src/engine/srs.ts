import { createEmptyCard, fsrs, generatorParameters, Rating, type Card } from 'ts-fsrs'

/** FSRS — Anki'nin modern aralıklı tekrar algoritması. Tamamen istemcide çalışır. */
const scheduler = fsrs(generatorParameters({ enable_fuzz: false, request_retention: 0.9 }))

export type SrsCard = Card

export function newCard(now = new Date()): SrsCard {
  return createEmptyCard(now)
}

export type Grade = 'again' | 'hard' | 'good' | 'easy'

const GRADE = { again: Rating.Again, hard: Rating.Hard, good: Rating.Good, easy: Rating.Easy } as const

export function review(card: SrsCard, grade: Grade, now = new Date()): SrsCard {
  return scheduler.next(card, now, GRADE[grade]).card
}

export function isDue(card: SrsCard, now = new Date()): boolean {
  return new Date(card.due).getTime() <= now.getTime()
}

/** Kart "olgun" sayılır: kararlılık (gün) 21'i geçti. Profildeki "öğrenilen kelime" sayacı bunu sayar. */
export function isMature(card: SrsCard): boolean {
  return card.stability >= 21
}

/** Kart tarih alanlarını JSON'dan geri yüklerken Date'e çevir. */
export function reviveCard(raw: SrsCard): SrsCard {
  return { ...raw, due: new Date(raw.due), last_review: raw.last_review ? new Date(raw.last_review) : undefined }
}
