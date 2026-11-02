// Cihazın kendi İngilizce sesi (Web Speech sentezi). Ses kalitesi cihaza göre değişir; ses yoksa düğmeler gizlenir.
export const canSpeak = typeof window !== 'undefined' && 'speechSynthesis' in window

let voice: SpeechSynthesisVoice | null = null

function pickVoice() {
  const vs = speechSynthesis.getVoices().filter((v) => v.lang.toLowerCase().startsWith('en'))
  voice = vs.find((v) => v.lang === 'en-US' && v.localService) ?? vs.find((v) => v.localService) ?? vs[0] ?? null
}

if (canSpeak) speechSynthesis.addEventListener('voiceschanged', pickVoice)

/** Metni okur. queue=false önceki okumayı keser. */
export function speak(text: string, { rate = 0.95, queue = false } = {}) {
  if (!canSpeak) return
  if (!queue) speechSynthesis.cancel()
  if (!voice) pickVoice()
  const u = new SpeechSynthesisUtterance(text)
  u.lang = voice?.lang ?? 'en-US'
  if (voice) u.voice = voice
  u.rate = rate
  speechSynthesis.speak(u)
}

/** false: ses listesi yüklendi ama İngilizce ses yok. Liste henüz yüklenmediyse true döner. */
export function hasEnglishVoice(): boolean {
  if (!canSpeak) return false
  const vs = speechSynthesis.getVoices()
  return vs.length === 0 || vs.some((v) => v.lang.toLowerCase().startsWith('en'))
}

export function speakAll(lines: string[]) {
  if (!canSpeak) return
  speechSynthesis.cancel()
  for (const l of lines) speak(l, { queue: true })
}

export function stopSpeaking() {
  if (canSpeak) speechSynthesis.cancel()
}
