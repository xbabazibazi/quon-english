import { useMemo, useState, type ReactNode } from 'react'
import type { Cefr, VocabItem } from '../content'
import { useStore, type CardEntry } from '../store'
import { isDue, type Grade } from '../engine/srs'
import { checkRecall } from '../engine/recall'
import { normalize } from '../engine/match'
import { useLibrary } from '../components/useLibrary'
import { SpeakBtn } from '../components/audio'
import { Button, Callout, Card, Chip, Progress, Screen, TopBar } from '../components/ui'

const BATCH = 10

export function Vocab({ onBack }: { onBack: () => void }) {
  const lib = useLibrary()
  const s = useStore()
  const [level, setLevel] = useState<Cefr>(s.profile.cefr === 'C1' ? 'B2' : s.profile.cefr)
  const [mode, setMode] = useState<'menu' | 'learn' | 'review'>('menu')
  const [batch, setBatch] = useState<VocabItem[]>([])
  const [queue, setQueue] = useState<CardEntry[]>([])

  const due = Object.values(s.cards).filter((c) => isDue(c.srs))
  const back = <button className="text-brand" onClick={mode === 'menu' ? onBack : () => setMode('menu')}>‹ Geri</button>

  if (!lib) return <Screen><TopBar title="Kelime" left={back} /><div className="text-muted">Yükleniyor…</div></Screen>

  const levelWords = lib.VOCAB.filter((v) => v.cefr === level)
  const learned = levelWords.filter((v) => s.cards[`v:${v.id}`]).length
  const fresh = levelWords.filter((v) => !s.cards[`v:${v.id}`])

  if (mode === 'learn') {
    return (
      <Screen>
        <TopBar title={`Yeni kelimeler · ${level}`} left={back} />
        <div className="flex flex-col gap-2">
          {batch.map((v) => (
            <Card key={v.id} className="py-3">
              <div className="flex items-start justify-between gap-2">
                <div>
                  <div className="text-lg font-bold">{v.en} <span className="text-xs font-medium text-muted">{v.pos}</span></div>
                  <div className="text-brand">{v.tr}</div>
                </div>
                <SpeakBtn text={v.en} />
              </div>
              <div className="mt-2 flex items-start gap-1 text-sm">
                <div className="flex-1">{v.example}<div className="text-muted">{v.example_tr}</div></div>
                <SpeakBtn text={v.example} label="Örneği dinle" />
              </div>
            </Card>
          ))}
        </div>
        <div className="mt-5">
          <Button onClick={() => {
            s.addVocabCards(batch)
            setQueue(batch.map((v) => useStore.getState().cards[`v:${v.id}`]))
            setMode('review')
          }}>Şimdi kendini sına →</Button>
        </div>
      </Screen>
    )
  }

  if (mode === 'review') {
    return <Review cards={queue} onDone={() => setMode('menu')} back={back} />
  }

  return (
    <Screen>
      <TopBar title="Kelime" left={back} />
      <p className="text-sm text-muted">Türkçesini görürsün, İngilizcesini yazarsın. Unuttuklarını uygulama daha sık, bildiklerini daha seyrek sorar.</p>

      <Card className="mt-4">
        <div className="text-xs font-semibold uppercase tracking-wide text-muted">Tekrar</div>
        <div className="mt-1 text-xl font-bold">{due.length ? `${due.length} kart bekliyor` : 'Bekleyen tekrar yok'}</div>
        <div className="mt-3">
          <Button disabled={!due.length} onClick={() => { setQueue([...due].sort((a, b) => new Date(a.srs.due).getTime() - new Date(b.srs.due).getTime())); setMode('review') }}>Tekrar et</Button>
        </div>
      </Card>

      <div className="mt-5 text-sm font-semibold uppercase tracking-wide text-muted">Yeni kelime öğren</div>
      <div className="mt-2 flex gap-2">
        {lib.VOCAB_LEVELS.map((l) => <Chip key={l} selected={l === level} onClick={() => setLevel(l)}>{l}</Chip>)}
      </div>
      <Card className="mt-3">
        <div className="flex items-baseline justify-between">
          <div className="font-semibold">{level} kelimeleri</div>
          <div className="text-sm text-muted">{learned} / {levelWords.length}</div>
        </div>
        <div className="mt-2"><Progress value={levelWords.length ? learned / levelWords.length : 0} /></div>
        <div className="mt-4">
          <Button disabled={!fresh.length} onClick={() => { setBatch(fresh.slice(0, BATCH)); setMode('learn') }}>
            {fresh.length ? `${Math.min(BATCH, fresh.length)} yeni kelime` : 'Bu seviyedeki tüm kelimeler eklendi'}
          </Button>
        </div>
      </Card>
    </Screen>
  )
}

function Review({ cards, onDone, back }: { cards: CardEntry[]; onDone: () => void; back: ReactNode }) {
  const reviewCard = useStore((s) => s.reviewCard)
  const [i, setI] = useState(0)
  const [text, setText] = useState('')
  const [result, setResult] = useState<boolean | null>(null)
  const [right, setRight] = useState(0)
  const card = cards[i]
  const hint = useMemo(() => (card ? card.front.split('/')[0].trim() : ''), [card])

  if (!card) {
    return (
      <Screen>
        <TopBar title="Tekrar" left={back} progress={1} />
        <div className="mt-6 text-center">
          <div className="text-5xl">{right === cards.length ? '🏆' : '💪'}</div>
          <h2 className="mt-2 text-2xl font-bold">{right} / {cards.length} doğru</h2>
          <p className="mt-1 text-muted">Yanlış yaptıkların yakında tekrar gelecek.</p>
        </div>
        <div className="flex-1" />
        <Button onClick={onDone}>Tamam</Button>
      </Screen>
    )
  }

  function grade(g: Grade) {
    reviewCard(card.id, g)
    setText('')
    setResult(null)
    setI(i + 1)
  }

  function check() {
    const ok = checkRecall(card, text)
    if (ok) setRight((r) => r + 1)
    setResult(ok)
  }

  return (
    <Screen>
      <TopBar title={`Tekrar · ${i + 1}/${cards.length}`} left={back} progress={i / cards.length} />
      <div className="text-sm font-semibold uppercase tracking-wide text-muted">İngilizcesini yaz</div>
      <div className="mt-2 text-3xl font-bold">{card.back_tr}</div>
      <div className="mt-1 text-sm text-muted">{card.example_tr}</div>
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        onKeyDown={(e) => { if (e.key === 'Enter' && result === null && normalize(text)) check() }}
        disabled={result !== null}
        autoCapitalize="none"
        autoCorrect="off"
        spellCheck={false}
        placeholder="İngilizce…"
        className="mt-4 w-full rounded-2xl border-2 border-slate-200 bg-white px-4 py-3.5 text-lg outline-none focus:border-brand"
      />
      {result === null && <button type="button" className="mt-2 self-start text-sm font-medium text-brand" onClick={() => setText(hint.slice(0, 1))}>İlk harfi göster</button>}
      <div className="flex-1" />
      {result !== null && (
        <Callout tone={result ? 'ok' : 'bad'} title={result ? 'Doğru!' : `Doğrusu: ${card.front}`}>
          <span className="flex items-center gap-1">{card.example}<SpeakBtn text={card.example} /></span>
        </Callout>
      )}
      <div className="mt-3">
        {result === null ? (
          <div className="grid grid-cols-2 gap-2">
            <Button variant="secondary" onClick={() => setResult(false)}>Bilmiyorum</Button>
            <Button disabled={!normalize(text)} onClick={check}>Kontrol et</Button>
          </div>
        ) : result ? (
          <div className="grid grid-cols-3 gap-2">
            <Button variant="secondary" className="px-2" onClick={() => grade('hard')}>Zordu</Button>
            <Button variant="ok" className="px-2" onClick={() => grade('good')}>İyi</Button>
            <Button variant="secondary" className="px-2" onClick={() => grade('easy')}>Kolaydı</Button>
          </div>
        ) : (
          <Button variant="bad" onClick={() => grade('again')}>Devam</Button>
        )}
      </div>
    </Screen>
  )
}
