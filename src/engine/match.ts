import type { ErrorVariant, QuizItem } from '../content/types'

/** Kullanıcı cevabını karşılaştırma için normalize eder: küçük harf, noktalama ve kesme işareti yok, tek boşluk. */
export function normalize(text: string): string {
  return text
    .toLowerCase()
    .replace(/[’‘`´]/g, "'")
    .replace(/[.?!,;:"()]/g, ' ')
    .replace(/'/g, '')
    .replace(/\s+/g, ' ')
    .trim()
}

export type MatchResult =
  | { status: 'correct' }
  | { status: 'known_error'; variant: ErrorVariant }
  | { status: 'wrong' }

/** Cevabı doğru cevap, kabul edilen varyantlar ve önceden üretilmiş hata varyantlarıyla eşleştirir. Sıfır çalışma zamanı maliyeti. */
export function matchAnswer(item: QuizItem, userText: string): MatchResult {
  const u = normalize(userText)
  if (!u) return { status: 'wrong' }
  const good = [item.answer_en, ...(item.accepted ?? [])].map(normalize)
  if (good.includes(u)) return { status: 'correct' }
  for (const v of item.error_variants) {
    if (normalize(v.text) === u) return { status: 'known_error', variant: v }
  }
  // Aynı kelimeler, yanlış sıra → kelime sırası hatası (Türkçe SOV etkisi)
  const sorted = (s: string) => s.split(' ').sort().join(' ')
  if (sorted(u) === sorted(good[0])) {
    return {
      status: 'known_error',
      variant: { text: userText, tag: 'WORD_ORDER', explanation_tr: 'Kelimeler doğru, sıra yanlış. İngilizcede fiil özneden hemen sonra gelir: Özne + Fiil + Nesne.' },
    }
  }
  return { status: 'wrong' }
}

/** Basit karışıklık: deterministik değil, seans planlanırken bir kere karıştırılır. */
export function shuffle<T>(arr: T[], seed = Math.random()): T[] {
  const a = [...arr]
  let s = Math.floor(seed * 2 ** 31) || 1
  const rnd = () => {
    s = (s * 1103515245 + 12345) & 0x7fffffff
    return s / 0x7fffffff
  }
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(rnd() * (i + 1))
    ;[a[i], a[j]] = [a[j], a[i]]
  }
  return a
}
