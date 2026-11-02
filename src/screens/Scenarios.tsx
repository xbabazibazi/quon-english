import { useEffect, useState } from 'react'
import type { Goal, Scenario, ScenarioReply } from '../content'
import { useStore } from '../store'
import { speak, stopSpeaking } from '../engine/speech'
import { useLibrary } from '../components/useLibrary'
import { Recorder, SpeakBtn } from '../components/audio'
import { Button, Callout, Card, Option, Screen, TopBar } from '../components/ui'

const GOAL_TITLE: Record<Goal, string> = { work: '💼 İş', travel: '✈️ Seyahat', exam: '📝 Sınav', general: '🌍 Günlük hayat' }
const LEVELS = ['A1', 'A2', 'B1', 'B2', 'C1']

export function Scenarios({ onBack }: { onBack: () => void }) {
  const lib = useLibrary()
  const s = useStore()
  const [open, setOpen] = useState<Scenario | null>(null)
  const back = <button className="text-brand" onClick={onBack}>‹ Geri</button>

  if (open) return <ScenarioView sc={open} onBack={() => { stopSpeaking(); setOpen(null) }} />
  if (!lib) return <Screen><TopBar title="Konuşma" left={back} /><div className="text-muted">Yükleniyor…</div></Screen>

  const goals = (Object.keys(GOAL_TITLE) as Goal[]).sort((a, b) => (a === s.profile.goal ? -1 : b === s.profile.goal ? 1 : 0))
  return (
    <Screen>
      <TopBar title="Konuşma senaryoları" left={back} />
      <p className="text-sm text-muted">Gerçek bir durumda ne diyeceğini seç, sonra yüksek sesle söyleyip kendini kaydet. Kayıt yalnız bu cihazda kalır.</p>
      {goals.map((g) => (
        <div key={g} className="mt-5">
          <div className="text-sm font-semibold uppercase tracking-wide text-muted">{GOAL_TITLE[g]}{g === s.profile.goal ? ' · hedefin' : ''}</div>
          <div className="mt-2 flex flex-col gap-1.5">
            {lib.SCENARIOS.filter((x) => x.goal === g).sort((a, b) => LEVELS.indexOf(a.cefr) - LEVELS.indexOf(b.cefr)).map((x) => (
              <button key={x.id} onClick={() => setOpen(x)} className="w-full text-left">
                <Card className="flex items-center gap-3 py-3">
                  <span className="rounded-lg bg-slate-100 px-2 py-1 text-xs font-bold">{x.cefr}</span>
                  <div className="flex-1">
                    <div className="font-semibold">{x.title_tr}</div>
                    <div className="text-xs text-muted">{x.setting_tr}</div>
                  </div>
                  {s.scenarios[x.id] && <span className="text-ok">✓</span>}
                </Card>
              </button>
            ))}
          </div>
        </div>
      ))}
    </Screen>
  )
}

interface Turn { who: 'npc' | 'me'; en: string; tr: string }

function ScenarioView({ sc, onBack }: { sc: Scenario; onBack: () => void }) {
  const complete = useStore((s) => s.completeScenario)
  const [nodeId, setNodeId] = useState<string | null>(sc.start)
  const [log, setLog] = useState<Turn[]>([])
  const [wrong, setWrong] = useState<ScenarioReply | null>(null)
  const [said, setSaid] = useState<ScenarioReply | null>(null)
  const [showTr, setShowTr] = useState(false)
  const node = nodeId ? sc.nodes[nodeId] : null
  const back = <button className="text-brand" onClick={onBack}>‹ Geri</button>

  useEffect(() => { if (node) speak(node.npc) }, [node])

  function pick(r: ScenarioReply) {
    if (!r.ok) { setWrong(r); return }
    setWrong(null)
    setSaid(r)
  }

  function next() {
    if (!node || !said) return
    setLog((l) => [...l, { who: 'npc', en: node.npc, tr: node.npc_tr }, { who: 'me', en: said.en, tr: said.tr }])
    setSaid(null)
    if (said.next === null) complete(sc.id)
    setNodeId(said.next)
  }

  return (
    <Screen>
      <TopBar title={`${sc.cefr} · ${sc.title_tr}`} left={back} right={<button className="text-sm text-brand" onClick={() => setShowTr(!showTr)}>{showTr ? 'TR gizle' : 'TR'}</button>} />
      <Callout tone="info">{sc.setting_tr}</Callout>
      <div className="mt-4 flex flex-col gap-2">
        {log.map((t, k) => <Bubble key={k} t={t} name={sc.npc_name} showTr={showTr} />)}
        {node && <Bubble t={{ who: 'npc', en: node.npc, tr: node.npc_tr }} name={sc.npc_name} showTr={showTr} />}
      </div>

      {node && !said && (
        <>
          <div className="mt-4 text-sm font-semibold uppercase tracking-wide text-muted">Ne dersin?</div>
          <div className="mt-2 flex flex-col gap-2">
            {node.replies.map((r, k) => (
              <Option key={k} onClick={() => pick(r)} state={wrong === r ? 'bad' : 'idle'}>
                {r.en}
                {showTr && <div className="text-sm font-normal text-muted">{r.tr}</div>}
              </Option>
            ))}
          </div>
          {wrong && <div className="mt-3"><Callout tone="bad" title="Bu olmaz">{wrong.feedback_tr}</Callout></div>}
        </>
      )}

      {node && said && (
        <div className="mt-4 flex flex-col gap-3">
          <Callout tone="ok" title="Güzel seçim">{said.feedback_tr}</Callout>
          <Card className="py-3">
            <div className="text-sm font-semibold text-muted">Şimdi yüksek sesle söyle:</div>
            <div className="mt-1 flex items-start gap-1 text-lg font-semibold">{said.en}<SpeakBtn text={said.en} /></div>
            <div className="mt-3"><Recorder /></div>
          </Card>
          <Button onClick={next}>Devam</Button>
        </div>
      )}

      {!node && (
        <div className="mt-6 text-center">
          <div className="text-5xl">🎉</div>
          <h2 className="mt-2 text-2xl font-bold">Konuşma tamam!</h2>
          <div className="mt-6"><Button onClick={onBack}>Listeye dön</Button></div>
        </div>
      )}
    </Screen>
  )
}

function Bubble({ t, name, showTr }: { t: Turn; name: string; showTr: boolean }) {
  const me = t.who === 'me'
  return (
    <div className={`flex ${me ? 'justify-end' : 'justify-start'}`}>
      <div className={`max-w-[85%] rounded-2xl px-3.5 py-2.5 ${me ? 'bg-brand text-white' : 'border border-slate-200 bg-white'}`}>
        {!me && <div className="text-xs font-semibold text-muted">{name}</div>}
        <div className="flex items-start gap-1">{t.en}{!me && <SpeakBtn text={t.en} />}</div>
        {showTr && <div className={`text-sm ${me ? 'text-blue-100' : 'text-muted'}`}>{t.tr}</div>}
      </div>
    </div>
  )
}
