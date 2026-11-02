import { useEffect, useRef, useState } from 'react'
import { canSpeak, speak } from '../engine/speech'

export function SpeakBtn({ text, label = 'Dinle' }: { text: string; label?: string }) {
  if (!canSpeak) return null
  return (
    <button type="button" aria-label={label} title={label} onClick={(e) => { e.stopPropagation(); speak(text) }} className="shrink-0 rounded-lg px-1.5 text-lg leading-none text-brand active:scale-90">
      🔊
    </button>
  )
}

const canRecord = typeof navigator !== 'undefined' && !!navigator.mediaDevices?.getUserMedia && typeof window !== 'undefined' && 'MediaRecorder' in window

/** Cihazda kaydet ve geri dinle. Kayıt hiçbir yere gönderilmez, sayfa kapanınca silinir. */
export function Recorder() {
  const [state, setState] = useState<'idle' | 'recording' | 'denied'>('idle')
  const [url, setUrl] = useState<string | null>(null)
  const rec = useRef<MediaRecorder | null>(null)

  useEffect(() => () => { if (url) URL.revokeObjectURL(url) }, [url])
  useEffect(() => () => rec.current?.stream.getTracks().forEach((t) => t.stop()), [])

  if (!canRecord) return null

  async function start() {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true })
      const r = new MediaRecorder(stream)
      const chunks: Blob[] = []
      r.ondataavailable = (e) => chunks.push(e.data)
      r.onstop = () => {
        stream.getTracks().forEach((t) => t.stop())
        setUrl(URL.createObjectURL(new Blob(chunks, { type: r.mimeType })))
        setState('idle')
      }
      rec.current = r
      r.start()
      setState('recording')
    } catch {
      setState('denied')
    }
  }

  return (
    <div className="flex flex-wrap items-center gap-2 text-sm">
      {state === 'recording' ? (
        <button type="button" onClick={() => rec.current?.stop()} className="rounded-xl bg-bad px-3 py-2 font-semibold text-white">⏹ Durdur</button>
      ) : (
        <button type="button" onClick={start} className="rounded-xl border-2 border-slate-200 bg-white px-3 py-2 font-semibold">🎙️ Kendini kaydet</button>
      )}
      {url && state !== 'recording' && <audio src={url} controls className="h-9 max-w-full" />}
      {state === 'denied' && <span className="text-muted">Mikrofon izni verilmedi.</span>}
    </div>
  )
}
