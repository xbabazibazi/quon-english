import { useEffect, useMemo, useRef, useState } from 'react'
import { ERROR_TAG_MAP } from '../content'
import { buildPlan, type SessionPlan } from '../engine/planner'
import { selectTopErrorTags, useStore, type ErrorEvent } from '../store'
import { ADS_ENABLED, hasFeature } from '../billing'
import { dateKey } from '../engine/dates'
import { Button, Callout, Card, Screen, TopBar } from '../components/ui'
import { ExerciseView, QuizQuestion } from '../components/exercises'
import { SpeakBtn } from '../components/audio'

type Step = 'lesson' | 'exercise' | 'quiz' | 'feedback'
const STEP_ORDER: Step[] = ['lesson', 'exercise', 'quiz', 'feedback']
const STEP_TITLE: Record<Step, string> = { lesson: 'Ders', exercise: 'Alıştırma', quiz: 'Sınav', feedback: 'Sonuç' }

const XP = { lesson: 15, exercise: 15, quiz: 30, perfect: 10 }

export function Session({ onExit, onNext }: { onExit: () => void; onNext: () => void }) {
  const store = useStore()
  const plan: SessionPlan = useMemo(
    () =>
      buildPlan({
        skillMastery: store.skillMastery,
        topErrorTags: selectTopErrorTags(store),
        learnedLessonIds: store.sessions.map((s) => s.lessonId),
      }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [],
  )
  const [step, setStep] = useState<Step>('lesson')
  const [i, setI] = useState(0)
  const [exCorrect, setExCorrect] = useState(0)
  const [quizCorrect, setQuizCorrect] = useState(0)
  const [errors, setErrors] = useState<ErrorEvent[]>([])
  const [wrongs, setWrongs] = useState<{ answer: string; expected: string }[]>([])
  const savedRef = useRef(false)

  const stepIdx = STEP_ORDER.indexOf(step)
  const progress = (stepIdx + (step === 'exercise' ? i / plan.exercises.length : step === 'quiz' ? i / plan.quiz.length : 0)) / STEP_ORDER.length

  // Sonuç ekranına gelince seansı bir kere kaydet (StrictMode'da bile tek sefer)
  useEffect(() => {
    if (step !== 'feedback' || savedRef.current) return
    savedRef.current = true
    const total = plan.exercises.length + plan.quiz.length
    const correct = exCorrect + quizCorrect
    const perfect = quizCorrect === plan.quiz.length
    const xp = XP.lesson + XP.exercise + XP.quiz + (perfect ? XP.perfect : 0)
    store.completeSession({ lessonId: plan.lesson.id, skillId: plan.skillId, xp, correct, total, errors }, total ? correct / total : 0)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [step])

  function next(s: Step) {
    setStep(s)
    setI(0)
  }

  // ---- Ders
  if (step === 'lesson') {
    const l = plan.lesson
    return (
      <Screen>
        <TopBar title={STEP_TITLE.lesson} left={<ExitBtn onExit={onExit} />} progress={progress} />
        <div className="text-xs font-semibold uppercase tracking-wide text-brand">{plan.isReinforcement ? 'Pekiştirme' : plan.reason}</div>
        <h2 className="mt-1 text-2xl font-bold">{l.title_tr}</h2>
        <p className="mt-3 text-base leading-relaxed">{l.explanation_tr}</p>
        <div className="mt-4 flex flex-col gap-2">
          {l.examples.map((e) => (
            <Card key={e.en} className="flex items-start gap-2 py-3">
              <div className="flex-1">
                <div className="text-lg font-semibold">{e.en}</div>
                <div className="text-sm text-muted">{e.tr}</div>
              </div>
              <SpeakBtn text={e.en} />
            </Card>
          ))}
        </div>
        <div className="mt-4 text-sm font-semibold uppercase tracking-wide text-muted">Bu dersin kelimeleri</div>
        <div className="mt-2 grid grid-cols-1 gap-1.5">
          {l.words.map((w) => (
            <div key={w.en} className="flex items-center gap-2 rounded-xl bg-white px-3 py-2 border border-slate-200">
              <span className="flex-1 font-semibold">{w.en}</span>
              <span className="text-sm text-muted">{w.tr}</span>
              <SpeakBtn text={w.en} />
            </div>
          ))}
        </div>
        <div className="mt-6">
          <Button onClick={() => { store.addCardsFromLesson(l); next('exercise') }}>Alıştırmaya geç</Button>
        </div>
      </Screen>
    )
  }

  // ---- Alıştırma
  if (step === 'exercise') {
    const ex = plan.exercises[i]
    return (
      <Screen>
        <TopBar title={`${STEP_TITLE.exercise} · ${i + 1}/${plan.exercises.length}`} left={<ExitBtn onExit={onExit} />} progress={progress} />
        <ExerciseView
          key={i}
          ex={ex}
          onDone={(o) => {
            if (o.correct) setExCorrect((c) => c + 1)
            if (i + 1 < plan.exercises.length) setI(i + 1)
            else next('quiz')
          }}
        />
      </Screen>
    )
  }

  // ---- Günün sınavı
  if (step === 'quiz') {
    const q = plan.quiz[i]
    return (
      <Screen>
        <TopBar title={`${STEP_TITLE.quiz} · ${i + 1}/${plan.quiz.length}`} left={<ExitBtn onExit={onExit} />} progress={progress} />
        <QuizQuestion
          key={q.id + i}
          item={q}
          onDone={(o) => {
            if (o.status === 'correct') setQuizCorrect((c) => c + 1)
            else if (o.result.status === 'known_error') {
              const v = o.result.variant
              setErrors((e) => [...e, { date: dateKey(), tag: v.tag, answer: o.answer, expected: q.answer_en, explanation_tr: v.explanation_tr }])
            } else setWrongs((w) => [...w, { answer: o.answer, expected: q.answer_en }])
            if (i + 1 < plan.quiz.length) setI(i + 1)
            else next('feedback')
          }}
        />
      </Screen>
    )
  }

  // ---- Sonuç
  const total = plan.exercises.length + plan.quiz.length
  const correct = exCorrect + quizCorrect
  const perfect = quizCorrect === plan.quiz.length
  const xp = XP.lesson + XP.exercise + XP.quiz + (perfect ? XP.perfect : 0)
  const score = total ? correct / total : 0

  return (
    <Screen>
      <TopBar title={STEP_TITLE.feedback} progress={1} />
      <div className="text-center">
        <div className="text-5xl">{perfect ? '🏆' : score >= 0.7 ? '🎉' : '💪'}</div>
        <h2 className="mt-2 text-2xl font-bold">{perfect ? 'Kusursuz sınav!' : score >= 0.7 ? 'Ders tamam!' : 'Tamamlandı, tekrar edince oturacak'}</h2>
        <div className="mt-1 text-muted">{correct} / {total} doğru</div>
      </div>
      <div className="mt-5 grid grid-cols-2 gap-2 text-center">
        <Card className="py-3"><div className="text-2xl font-bold text-brand">+{xp}</div><div className="text-xs text-muted">XP</div></Card>
        <Card className="py-3"><div className="text-2xl font-bold">{plan.lesson.words.length}</div><div className="text-xs text-muted">yeni kart</div></Card>
      </div>

      {errors.length > 0 && (
        <div className="mt-5">
          <div className="text-sm font-semibold uppercase tracking-wide text-muted">Hataların (Türkçe açıklamayla)</div>
          <div className="mt-2 flex flex-col gap-2">
            {errors.map((e, k) => (
              <Card key={k} className="py-3">
                <div className="flex items-center gap-2">
                  <span className="rounded bg-red-100 px-1.5 py-0.5 text-[11px] font-bold text-bad">{e.tag}</span>
                  <span className="text-sm font-semibold">{ERROR_TAG_MAP[e.tag].title_tr}</span>
                </div>
                <div className="mt-1 text-sm"><s className="text-bad">{e.answer}</s> → <b>{e.expected}</b></div>
                <div className="mt-1 text-sm text-muted">{e.explanation_tr}</div>
              </Card>
            ))}
          </div>
        </div>
      )}
      {wrongs.length > 0 && (
        <div className="mt-4">
          <div className="text-sm font-semibold uppercase tracking-wide text-muted">Diğer yanlışlar</div>
          <div className="mt-2 flex flex-col gap-2">
            {wrongs.map((w, k) => (
              <Card key={k} className="py-3 text-sm"><s className="text-bad">{w.answer}</s> → <b>{w.expected}</b></Card>
            ))}
          </div>
        </div>
      )}

      <div className="mt-5">
        <AdSlot />
      </div>
      <div className="mt-4">
        <Callout tone="info">Bu dersin {plan.lesson.words.length} kelimesi Kelime bölümündeki tekrar listene eklendi.{errors.length ? ` En sık hatan (${errors[0].tag}) sıradaki derslerde öne alınacak.` : ''}</Callout>
      </div>
      <div className="mt-5 flex flex-col gap-2">
        <Button onClick={onNext}>Sıradaki ders →</Button>
        <Button variant="secondary" onClick={onExit}>Ana ekrana dön</Button>
      </div>
    </Screen>
  )
}

function ExitBtn({ onExit }: { onExit: () => void }) {
  return (
    <button className="text-xl text-muted" aria-label="Çık" onClick={() => { if (confirm('Seanstan çıkılsın mı? İlerleme kaydedilmez.')) onExit() }}>
      ✕
    </button>
  )
}

/** Reklam alanı: sadece ders sonuç ekranında. Gerçek reklam kodu (AdSense/AdMob) bağlanana kadar görünmez. */
function AdSlot() {
  const entitlement = useStore((s) => s.entitlement)
  if (!ADS_ENABLED || hasFeature(entitlement, 'no_ads')) return null
  return (
    <div className="flex h-24 items-center justify-center rounded-2xl border-2 border-dashed border-slate-300 text-center text-xs text-muted">
      Reklam alanı — sadece ders sonunda, ders sırasında asla
    </div>
  )
}
