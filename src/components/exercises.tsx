import { useMemo, useState } from 'react'
import type { Exercise, QuizItem } from '../content'
import { matchAnswer, normalize, shuffle, type MatchResult } from '../engine/match'
import { Button, Callout, Chip, Option } from './ui'

export interface ExerciseOutcome {
  correct: boolean
}

/** Çoktan seçmeli ve boşluk doldurma (seçenekli) */
export function ChoiceExercise({ ex, onDone }: { ex: Extract<Exercise, { type: 'mc' | 'gap' }>; onDone: (o: ExerciseOutcome) => void }) {
  const [picked, setPicked] = useState<number | null>(null)
  const [checked, setChecked] = useState(false)
  const prompt = ex.type === 'gap' ? ex.sentence.replace('___', '____') : ex.prompt
  const correct = picked === ex.answer
  return (
    <div className="flex flex-1 flex-col gap-3">
      <div className="text-sm font-semibold uppercase tracking-wide text-muted">{ex.type === 'gap' ? 'Boşluğu doldur' : 'Doğru olanı seç'}</div>
      <div className="text-2xl font-semibold leading-snug">{prompt}</div>
      <div className="mt-2 flex flex-col gap-2">
        {ex.options.map((o, i) => (
          <Option
            key={o}
            disabled={checked}
            onClick={() => setPicked(i)}
            state={checked ? (i === ex.answer ? 'ok' : i === picked ? 'bad' : 'idle') : picked === i ? 'selected' : 'idle'}
          >
            {o}
          </Option>
        ))}
      </div>
      <div className="flex-1" />
      {checked && (
        <Callout tone={correct ? 'ok' : 'bad'} title={correct ? 'Doğru!' : `Doğrusu: ${ex.options[ex.answer]}`}>
          {ex.explanation_tr}
        </Callout>
      )}
      {!checked ? (
        <Button disabled={picked === null} onClick={() => setChecked(true)}>Kontrol et</Button>
      ) : (
        <Button variant={correct ? 'ok' : 'bad'} onClick={() => onDone({ correct })}>Devam</Button>
      )}
    </div>
  )
}

/** Eşleştirme: soldan bir, sağdan bir seç */
export function MatchExercise({ ex, onDone }: { ex: Extract<Exercise, { type: 'match' }>; onDone: (o: ExerciseOutcome) => void }) {
  const left = useMemo(() => shuffle(ex.pairs.map((p, i) => ({ text: p[0], i })), 0.3), [ex])
  const right = useMemo(() => shuffle(ex.pairs.map((p, i) => ({ text: p[1], i })), 0.7), [ex])
  const [selL, setSelL] = useState<number | null>(null)
  const [selR, setSelR] = useState<number | null>(null)
  const [done, setDone] = useState<Set<number>>(new Set())
  const [mistakes, setMistakes] = useState(0)
  const [flash, setFlash] = useState<'ok' | 'bad' | null>(null)

  function tryPair(l: number | null, r: number | null) {
    if (l === null || r === null) return
    if (l === r) {
      const d = new Set(done)
      d.add(l)
      setDone(d)
      setFlash('ok')
    } else {
      setMistakes((m) => m + 1)
      setFlash('bad')
    }
    setTimeout(() => {
      setFlash(null)
      setSelL(null)
      setSelR(null)
    }, 350)
  }
  const finished = done.size === ex.pairs.length
  return (
    <div className="flex flex-1 flex-col gap-3">
      <div className="text-sm font-semibold uppercase tracking-wide text-muted">Eşleştir</div>
      <div className="grid grid-cols-2 gap-2">
        <div className="flex flex-col gap-2">
          {left.map((it) => (
            <Option key={it.i} disabled={done.has(it.i)} state={done.has(it.i) ? 'ok' : selL === it.i ? (flash === 'bad' ? 'bad' : 'selected') : 'idle'} onClick={() => { setSelL(it.i); tryPair(it.i, selR) }}>
              {it.text}
            </Option>
          ))}
        </div>
        <div className="flex flex-col gap-2">
          {right.map((it) => (
            <Option key={it.i} disabled={done.has(it.i)} state={done.has(it.i) ? 'ok' : selR === it.i ? (flash === 'bad' ? 'bad' : 'selected') : 'idle'} onClick={() => { setSelR(it.i); tryPair(selL, it.i) }}>
              {it.text}
            </Option>
          ))}
        </div>
      </div>
      <div className="flex-1" />
      {finished && <Callout tone={mistakes === 0 ? 'ok' : 'info'} title={mistakes === 0 ? 'Hepsi doğru!' : `Tamamlandı, ${mistakes} yanlış deneme`} />}
      <Button disabled={!finished} variant={finished ? 'ok' : 'primary'} onClick={() => onDone({ correct: mistakes <= 1 })}>Devam</Button>
    </div>
  )
}

/** Kelimeleri sıralayarak cümle kur (alıştırma sürümü: tek doğru cevap) */
export function OrderExercise({ ex, onDone }: { ex: Extract<Exercise, { type: 'order' }>; onDone: (o: ExerciseOutcome) => void }) {
  const item: QuizItem = useMemo(() => ({ id: 'ex', mode: 'order', prompt_tr: ex.prompt_tr, answer_en: ex.answer, words: ex.words, error_variants: [] }), [ex])
  return <QuizQuestion item={item} label="Cümleyi kur" onDone={(r) => onDone({ correct: r.status === 'correct' })} />
}

export function ExerciseView({ ex, onDone }: { ex: Exercise; onDone: (o: ExerciseOutcome) => void }) {
  if (ex.type === 'mc' || ex.type === 'gap') return <ChoiceExercise ex={ex} onDone={onDone} />
  if (ex.type === 'match') return <MatchExercise ex={ex} onDone={onDone} />
  return <OrderExercise ex={ex} onDone={onDone} />
}

// ---------- Günün sınavı ----------

export interface QuizOutcome {
  status: MatchResult['status']
  answer: string
  result: MatchResult
}

export function QuizQuestion({ item, label = 'Günün sınavı', onDone }: { item: QuizItem; label?: string; onDone: (o: QuizOutcome) => void }) {
  const pool = useMemo(() => shuffle(item.words ?? item.answer_en.split(' '), 0.42).map((w, i) => ({ w, i })), [item])
  const [chosen, setChosen] = useState<number[]>([])
  const [text, setText] = useState('')
  const [hint, setHint] = useState(false)
  const [result, setResult] = useState<MatchResult | null>(null)

  const answer = item.mode === 'order' ? chosen.map((i) => pool[i].w).join(' ') : text
  const canCheck = item.mode === 'order' ? chosen.length > 0 : normalize(text).length > 0

  function check() {
    setResult(matchAnswer(item, answer))
  }

  const firstWord = item.answer_en.split(' ')[0]

  return (
    <div className="flex flex-1 flex-col gap-3">
      <div className="text-sm font-semibold uppercase tracking-wide text-muted">{label} · İngilizceye çevir</div>
      <div className="text-2xl font-semibold leading-snug">{item.prompt_tr}</div>

      {item.mode === 'order' ? (
        <>
          <div className="mt-2 min-h-14 rounded-2xl border-2 border-dashed border-slate-300 bg-white p-2">
            <div className="flex flex-wrap gap-2">
              {chosen.map((i, k) => (
                <Chip key={k} selected onClick={() => !result && setChosen(chosen.filter((_, j) => j !== k))}>{pool[i].w}</Chip>
              ))}
              {chosen.length === 0 && <span className="px-2 py-2 text-sm text-muted">Kelimelere dokunarak cümleyi kur</span>}
            </div>
          </div>
          <div className="flex flex-wrap gap-2">
            {pool.map((p) => (
              <Chip key={p.i} disabled={chosen.includes(p.i) || !!result} onClick={() => setChosen([...chosen, p.i])}>{p.w}</Chip>
            ))}
          </div>
        </>
      ) : (
        <input
          value={text}
          onChange={(e) => setText(e.target.value)}
          onKeyDown={(e) => { if (e.key === 'Enter' && canCheck && !result) check() }}
          disabled={!!result}
          autoCapitalize="sentences"
          autoCorrect="off"
          spellCheck={false}
          placeholder="İngilizce yaz…"
          className="mt-2 w-full rounded-2xl border-2 border-slate-200 bg-white px-4 py-3.5 text-lg outline-none focus:border-brand"
        />
      )}

      {!result && item.mode === 'free' && (
        <button type="button" className="self-start text-sm font-medium text-brand" onClick={() => setHint(true)}>
          {hint ? `İpucu: "${firstWord}…"` : 'İpucu göster'}
        </button>
      )}

      <div className="flex-1" />

      {result?.status === 'correct' && <Callout tone="ok" title="Doğru!" />}
      {result?.status === 'known_error' && (
        <Callout tone="bad" title={`Doğrusu: ${item.answer_en}`}>
          <span className="mr-1 rounded bg-red-200 px-1.5 py-0.5 text-[11px] font-bold">{result.variant.tag}</span>
          {result.variant.explanation_tr}
        </Callout>
      )}
      {result?.status === 'wrong' && <Callout tone="bad" title={`Doğrusu: ${item.answer_en}`}>Senin cevabın: “{answer}”</Callout>}

      {!result ? (
        <Button disabled={!canCheck} onClick={check}>Kontrol et</Button>
      ) : (
        <Button variant={result.status === 'correct' ? 'ok' : 'bad'} onClick={() => onDone({ status: result.status, answer, result })}>Devam</Button>
      )}
    </div>
  )
}
