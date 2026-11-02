import { useEffect, useMemo, useState, type ReactNode } from 'react'
import { SUBLEVELS, type Reading as ReadingT } from '../content'
import { useStore } from '../store'
import { shuffle } from '../engine/match'
import { checkDictation } from '../engine/recall'
import { canSpeak, hasEnglishVoice, speak, speakAll, stopSpeaking } from '../engine/speech'
import { useLibrary } from '../components/useLibrary'
import { SpeakBtn } from '../components/audio'
import { Button, Callout, Card, Option, Screen, TopBar } from '../components/ui'

export function Readings({ onBack }: { onBack: () => void }) {
  const lib = useLibrary()
  const s = useStore()
  const [open, setOpen] = useState<ReadingT | null>(null)
  const back = <button className="text-brand" onClick={onBack}>‹ Geri</button>

  if (open) return <ReadingView r={open} onBack={() => { stopSpeaking(); setOpen(null) }} />
  if (!lib) return <Screen><TopBar title="Okuma ve dinleme" left={back} /><div className="text-muted">Yükleniyor…</div></Screen>

  const mine = SUBLEVELS.indexOf(s.profile.sublevel)
  const groups = SUBLEVELS.map((sub, idx) => ({ sub, idx, items: lib.READINGS.filter((r) => r.sublevel === sub) })).filter((g) => g.items.length)
  return (
    <Screen>
      <TopBar title="Okuma ve dinleme" left={back} />
      <p className="text-sm text-muted">Dinle, oku, soruları cevapla, dikte yap. Senin seviyen öne çıkar ama hepsi açık.</p>
      {!hasEnglishVoice() && <div className="mt-3"><Callout tone="info" title="Bu cihazda İngilizce ses bulunamadı">Metinleri okuyabilirsin; dinleme ve dikte için cihazın ayarlarından İngilizce ses ekleyebilirsin.</Callout></div>}
      {[...groups].sort((a, b) => Math.abs(a.idx - mine) - Math.abs(b.idx - mine) || a.idx - b.idx).map((g) => (
        <div key={g.sub} className="mt-5">
          <div className="text-sm font-semibold uppercase tracking-wide text-muted">{g.sub}{g.idx === mine ? ' · senin seviyen' : ''}</div>
          <div className="mt-2 flex flex-col gap-1.5">
            {g.items.map((r) => (
              <button key={r.id} onClick={() => setOpen(r)} className="w-full text-left">
                <Card className="flex items-center gap-3 py-3">
                  <span className="text-xl">{r.kind === 'dialogue' ? '💬' : '📖'}</span>
                  <div className="flex-1">
                    <div className="font-semibold">{r.title}</div>
                    <div className="text-xs text-muted">{r.title_tr}</div>
                  </div>
                  {s.readings[r.id] !== undefined && <span className="text-sm font-semibold text-ok">%{Math.round(s.readings[r.id] * 100)}</span>}
                </Card>
              </button>
            ))}
          </div>
        </div>
      ))}
    </Screen>
  )
}

function ReadingView({ r, onBack }: { r: ReadingT; onBack: () => void }) {
  const complete = useStore((s) => s.completeReading)
  const [step, setStep] = useState<'read' | 'quiz' | 'dictation' | 'done'>('read')
  const [showTr, setShowTr] = useState(false)
  const [qi, setQi] = useState(0)
  const [picked, setPicked] = useState<number | null>(null)
  const [right, setRight] = useState(0)
  const back = <button className="text-brand" onClick={onBack}>‹ Geri</button>

  if (step === 'read') {
    return (
      <Screen>
        <TopBar title={r.sublevel} left={back} />
        <h2 className="text-2xl font-bold">{r.title}</h2>
        <div className="text-sm text-muted">{r.title_tr}</div>
        <div className="mt-3 flex gap-2">
          {canSpeak && <Button full={false} variant="secondary" className="py-2 text-sm" onClick={() => speakAll(r.lines.map((l) => l.en))}>▶ Tümünü dinle</Button>}
          <Button full={false} variant="ghost" className="py-2 text-sm" onClick={() => setShowTr(!showTr)}>{showTr ? 'Türkçeyi gizle' : 'Türkçeyi göster'}</Button>
        </div>
        <div className="mt-3 flex flex-col gap-2">
          {r.lines.map((l, k) => (
            <div key={k} className="flex items-start gap-2">
              <SpeakBtn text={l.en} />
              <div className="flex-1">
                <div className="text-base">{l.speaker && <b className="text-brand">{l.speaker}: </b>}{l.en}</div>
                {showTr && <div className="text-sm text-muted">{l.tr}</div>}
              </div>
            </div>
          ))}
        </div>
        <div className="mt-6"><Button onClick={() => { stopSpeaking(); setStep('quiz') }}>Soruları cevapla →</Button></div>
      </Screen>
    )
  }

  if (step === 'quiz') {
    const q = r.questions[qi]
    const checked = picked !== null
    return (
      <Screen>
        <TopBar title={`Anlama · ${qi + 1}/${r.questions.length}`} left={back} progress={qi / r.questions.length} />
        <div className="text-xl font-semibold leading-snug">{q.prompt_tr}</div>
        <div className="mt-4 flex flex-col gap-2">
          {q.options.map((o, k) => (
            <Option key={k} disabled={checked} onClick={() => { setPicked(k); if (k === q.answer) setRight((n) => n + 1) }} state={checked ? (k === q.answer ? 'ok' : k === picked ? 'bad' : 'idle') : 'idle'}>{o}</Option>
          ))}
        </div>
        <div className="flex-1" />
        <Button disabled={!checked} onClick={() => {
          setPicked(null)
          if (qi + 1 < r.questions.length) setQi(qi + 1)
          else { complete(r.id, (right) / r.questions.length); setStep(canSpeak ? 'dictation' : 'done') }
        }}>Devam</Button>
      </Screen>
    )
  }

  if (step === 'dictation') return <Dictation r={r} back={back} onDone={() => setStep('done')} />

  return (
    <Screen>
      <TopBar title={r.sublevel} left={back} progress={1} />
      <div className="mt-6 text-center">
        <div className="text-5xl">{right === r.questions.length ? '🏆' : '📖'}</div>
        <h2 className="mt-2 text-2xl font-bold">{right} / {r.questions.length} doğru</h2>
      </div>
      <div className="flex-1" />
      <Button onClick={onBack}>Listeye dön</Button>
    </Screen>
  )
}

function Dictation({ r, back, onDone }: { r: ReadingT; back: ReactNode; onDone: () => void }) {
  const lines = useMemo(() => shuffle(r.lines.filter((l) => l.en.split(' ').length <= 12), 0.5).slice(0, 3), [r])
  const [i, setI] = useState(0)
  const [text, setText] = useState('')
  const [result, setResult] = useState<boolean | null>(null)
  const line = lines[i]
  useEffect(() => { if (!line) onDone() }, [line, onDone])
  if (!line) return null
  return (
    <Screen>
      <TopBar title={`Dikte · ${i + 1}/${lines.length}`} left={back} progress={i / lines.length} />
      <div className="text-sm font-semibold uppercase tracking-wide text-muted">Dinle ve duyduğunu yaz</div>
      <div className="mt-3 flex gap-2">
        <Button full={false} variant="secondary" onClick={() => speak(line.en)}>🔊 Dinle</Button>
        <Button full={false} variant="secondary" onClick={() => speak(line.en, { rate: 0.7 })}>🐢 Yavaş</Button>
      </div>
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        disabled={result !== null}
        rows={3}
        autoCapitalize="sentences"
        autoCorrect="off"
        spellCheck={false}
        className="mt-4 w-full rounded-2xl border-2 border-slate-200 bg-white px-4 py-3 text-lg outline-none focus:border-brand"
      />
      <div className="flex-1" />
      {result !== null && <Callout tone={result ? 'ok' : 'bad'} title={result ? 'Doğru!' : 'Doğrusu:'}>{line.en}</Callout>}
      <div className="mt-3 grid grid-cols-2 gap-2">
        <Button variant="secondary" onClick={onDone}>Dikteyi atla</Button>
        {result === null ? (
          <Button disabled={!text.trim()} onClick={() => setResult(checkDictation(line.en, text))}>Kontrol et</Button>
        ) : (
          <Button onClick={() => { setText(''); setResult(null); setI(i + 1) }}>Devam</Button>
        )}
      </div>
    </Screen>
  )
}
