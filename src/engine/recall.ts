import { normalize } from './match'

const strip = (s: string) => normalize(s).replace(/^(to|a|an|the) /, '')

/** Türkçeden İngilizceye yazılan kelime cevabını kontrol eder. "child / children" gibi girdilerde her parça kabul edilir. */
export function checkRecall(card: { front: string; accepted?: string[] }, input: string): boolean {
  const u = strip(input)
  if (!u) return false
  return [card.front, ...(card.accepted ?? [])].flatMap((a) => a.split('/')).some((a) => strip(a) === u)
}

/** Dikte: noktalama ve büyük-küçük harf farkı sayılmaz. */
export function checkDictation(expected: string, input: string): boolean {
  return normalize(expected) === normalize(input)
}
