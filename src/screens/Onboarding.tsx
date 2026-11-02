import { useState } from 'react'
import { useStore, type Goal } from '../store'
import { answer, finishTest, nextQuestion, startTest, TEST_LENGTH, type TestResult, type TestState } from '../engine/levelTest'
import { Button, Callout, Option, Screen, TopBar } from '../components/ui'
import { APP_LOGO, APP_NAME, APP_TAGLINE } from '../brand'

const GOALS: { id: Goal; title: string; desc: string; icon: string }[] = [
  { id: 'work', title: 'İş için', desc: 'Toplantı, e-posta, müşteri', icon: '💼' },
  { id: 'travel', title: 'Seyahat için', desc: 'Otel, restoran, yol tarifi', icon: '✈️' },
  { id: 'exam', title: 'Sınav için', desc: 'YDS, IELTS, okul', icon: '📝' },
  { id: 'general', title: 'Genel', desc: 'Dizi, oyun, günlük hayat', icon: '🌍' },
]

export function Onboarding() {
  const complete = useStore((s) => s.completeOnboarding)
  const [step, setStep] = useState<'welcome' | 'goal' | 'test' | 'result'>('welcome')
  const [goal, setGoal] = useState<Goal>('general')
  const [test, setTest] = useState<TestState>(() => startTest())
  const [picked, setPicked] = useState<number | null>(null)
  const [checked, setChecked] = useState(false)
  const [result, setResult] = useState<TestResult | null>(null)

  if (step === 'welcome') {
    return (
      <Screen className="justify-center">
        <div className="mb-6 flex items-center gap-3">
          <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-brand text-2xl font-bold text-white">{APP_LOGO}</div>
          <div>
            <div className="text-2xl font-bold">{APP_NAME}</div>
            <div className="text-sm text-muted">{APP_TAGLINE}</div>
          </div>
        </div>
        <h1 className="text-3xl font-bold leading-tight">Türkler için yapılmış, tamamen ücretsiz İngilizce.</h1>
        <ul className="mt-5 space-y-3 text-base">
          <li className="flex gap-3"><span>❤️</span><span><b>Kalp yok, kilit yok.</b> Her ders, her gün açık.</span></li>
          <li className="flex gap-3"><span>🇹🇷</span><span><b>Hatalarını Türkçe anlatır.</b> "I am agree" neden yanlış, bir cümlede.</span></li>
          <li className="flex gap-3"><span>🎧</span><span><b>A1'den B2'ye tam kurs.</b> Dilbilgisi, 3.000 kelime, dinleme, konuşma senaryoları.</span></li>
          <li className="flex gap-3"><span>📴</span><span><b>İnternetsiz çalışır.</b> Metroda, uçakta, her yerde.</span></li>
        </ul>
        <div className="flex-1" />
        <Button onClick={() => setStep('goal')}>Başla</Button>
        <p className="mt-3 text-center text-xs text-muted">Kayıt gerekmez. İlerlemen bu cihazda saklanır.</p>
      </Screen>
    )
  }

  if (step === 'goal') {
    return (
      <Screen>
        <TopBar title="1 / 3" left={<button className="text-brand" onClick={() => setStep('welcome')}>‹ Geri</button>} progress={0.33} />
        <h2 className="text-2xl font-bold">İngilizceyi ne için istiyorsun?</h2>
        <p className="mt-1 text-muted">Konuşma senaryoları buna göre öne çıkar.</p>
        <div className="mt-5 flex flex-col gap-2">
          {GOALS.map((g) => (
            <Option key={g.id} state={goal === g.id ? 'selected' : 'idle'} onClick={() => setGoal(g.id)}>
              <div className="flex items-center gap-3">
                <span className="text-2xl">{g.icon}</span>
                <div>
                  <div className="font-semibold">{g.title}</div>
                  <div className="text-sm text-muted">{g.desc}</div>
                </div>
              </div>
            </Option>
          ))}
        </div>
        <div className="flex-1" />
        <Button onClick={() => setStep('test')}>Devam</Button>
      </Screen>
    )
  }

  if (step === 'test') {
    const q = nextQuestion(test)
    if (!q) return null
    const n = test.asked.length + 1
    const correct = picked === q.answer
    return (
      <Screen>
        <TopBar title={`Seviye testi · ${n} / ${TEST_LENGTH}`} progress={0.33 + (0.5 * (n - 1)) / TEST_LENGTH} />
        <div className="text-xs font-semibold uppercase tracking-wide text-muted">{q.cefr} seviyesi</div>
        <div className="mt-2 text-2xl font-semibold leading-snug">{q.prompt.replace('___', '____')}</div>
        <div className="mt-5 flex flex-col gap-2">
          {q.options.map((o, i) => (
            <Option key={o} disabled={checked} onClick={() => setPicked(i)} state={checked ? (i === q.answer ? 'ok' : i === picked ? 'bad' : 'idle') : picked === i ? 'selected' : 'idle'}>
              {o}
            </Option>
          ))}
        </div>
        <div className="flex-1" />
        {checked && <Callout tone={correct ? 'ok' : 'bad'} title={correct ? 'Doğru' : `Doğrusu: ${q.options[q.answer]}`} />}
        {!checked ? (
          <Button disabled={picked === null} onClick={() => setChecked(true)}>Kontrol et</Button>
        ) : (
          <Button
            variant={correct ? 'ok' : 'bad'}
            onClick={() => {
              const t2 = answer(test, q, correct)
              setPicked(null)
              setChecked(false)
              if (t2.asked.length >= TEST_LENGTH || !nextQuestion(t2)) {
                setResult(finishTest(t2))
                setStep('result')
              } else setTest(t2)
            }}
          >
            Devam
          </Button>
        )}
        <button className="mt-3 text-center text-sm text-muted" onClick={() => { setResult({ cefr: 'A1', sublevel: 'A1.1', score: { A1: 0, A2: 0, B1: 0, B2: 0 } }); setStep('result') }}>
          Testi atla, en baştan başla
        </button>
      </Screen>
    )
  }

  const r = result!
  return (
    <Screen>
      <TopBar title="3 / 3" progress={1} />
      <div className="mt-4 text-center">
        <div className="text-sm font-semibold uppercase tracking-wide text-muted">Tahmini seviyen</div>
        <div className="mt-2 text-6xl font-black text-brand">{r.sublevel}</div>
        <div className="mt-2 text-muted">
          {r.cefr === 'A1' && 'Başlangıç — temel kalıpları birlikte kuracağız.'}
          {r.cefr === 'A2' && 'Temel — günlük işleri hallediyorsun, şimdi akıcılık.'}
          {r.cefr === 'B1' && 'Orta — tanıdık konularda idare ediyorsun.'}
          {r.cefr === 'B2' && 'Orta-üstü — karmaşık konularda akıcı konuşuyorsun, şimdi inceliği.'}
        </div>
      </div>
      <div className="mt-6 grid grid-cols-4 gap-2 text-center text-sm">
        {(['A1', 'A2', 'B1', 'B2'] as const).map((l) => (
          <div key={l} className="rounded-xl bg-white p-3 border border-slate-200">
            <div className="text-xs text-muted">{l}</div>
            <div className="font-bold">{r.score[l]} doğru</div>
          </div>
        ))}
      </div>
      <div className="flex-1" />
      <p className="mb-3 text-center text-xs text-muted">Bu, yazılı bir testten yapılan kaba bir tahmin; dinleme ve konuşmayı ölçmez.</p>
      <Button onClick={() => complete({ goal, cefr: r.cefr, sublevel: r.sublevel, levelTestScore: r.score })}>Başlayalım →</Button>
    </Screen>
  )
}
