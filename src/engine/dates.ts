/** Yerel tarih anahtarı: YYYY-MM-DD (kullanıcının saat dilimine göre). Seri hesabı bu anahtarla yapılır. */
export function dateKey(d = new Date()): string {
  const y = d.getFullYear()
  const m = String(d.getMonth() + 1).padStart(2, '0')
  const day = String(d.getDate()).padStart(2, '0')
  return `${y}-${m}-${day}`
}

export function daysBetween(aKey: string, bKey: string): number {
  const a = new Date(aKey + 'T00:00:00')
  const b = new Date(bKey + 'T00:00:00')
  return Math.round((b.getTime() - a.getTime()) / 86400000)
}

export function monthKey(d = new Date()): string {
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}`
}

export function isSaturday(d = new Date()): boolean {
  return d.getDay() === 6
}
