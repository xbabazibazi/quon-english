import { useMemo } from 'react'
import { ERROR_TAG_MAP, LESSON_BY_SKILL, SKILLS, SUBLEVELS } from '../content'
import { selectMatureWords, selectTopErrorTags, useStore } from '../store'
import { buildPlan } from '../engine/planner'
import { isDue } from '../engine/srs'
import { APP_LOGO, APP_NAME } from '../brand'
import type { Route } from '../App'
import { Button, Card, Progress, Screen, Stat } from '../components/ui'

export function Home({ onStart, onGo }: { onStart: () => void; onGo: (r: Route) => void }) {
  const s = useStore()
  const due = Object.values(s.cards).filter((c) => isDue(c.srs)).length
  const mature = selectMatureWords(s)
  const topErrors = selectTopErrorTags(s)
  const m = (id: string) => s.skillMastery[id] ?? 0
  const next = useMemo(
    () => buildPlan({ skillMastery: s.skillMastery, topErrorTags: topErrors, learnedLessonIds: [] }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [s.skillMastery],
  )

  const sub = s.profile.sublevel
  const subSkills = SKILLS.filter((k) => k.sublevel === sub && k.lessonId)
  const subDone = subSkills.filter((k) => m(k.id) >= 0.6).length
  const nextSub = SUBLEVELS[SUBLEVELS.indexOf(sub) + 1]

  return (
    <Screen>
      <div className="flex items-center justify-between pt-2">
        <div className="flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-brand text-sm font-bold text-white">{APP_LOGO}</div>
          <div className="text-lg font-bold">{APP_NAME}</div>
        </div>
        <button onClick={() => onGo('profile')} className="rounded-xl bg-white px-3 py-1.5 text-sm font-semibold text-muted border border-slate-200">{sub} · ⚙︎</button>
      </div>

      <div className="mt-4 grid grid-cols-3 gap-2">
        <Stat icon="⭐" value={s.totalXp} label="XP" />
        <Stat icon="📚" value={Object.keys(s.cards).length} label="kelime" />
        <Stat icon="🧠" value={mature} label="kalıcı" />
      </div>

      <Card className="mt-4">
        <div className="text-xs font-semibold uppercase tracking-wide text-brand">{next.isReinforcement ? 'Pekiştirme' : 'Sıradaki ders'}</div>
        <div className="mt-1 text-xl font-bold">{next.lesson.title_tr}</div>
        <div className="mt-1 text-sm text-muted">Anlatım + {next.exercises.length} alıştırma + {next.quiz.length} soruluk sınav</div>
        <div className="mt-4"><Button onClick={onStart}>Derse başla</Button></div>
      </Card>

      <div className="mt-3 grid grid-cols-1 gap-2">
        <Tile icon="🃏" title="Kelime" desc={due ? `${due} kart tekrar bekliyor` : 'Yeni kelime öğren, yazarak tekrar et'} onClick={() => onGo('vocab')} badge={due || undefined} />
        <Tile icon="🎧" title="Okuma ve dinleme" desc="Seviyeli metinler, anlama soruları, dikte" onClick={() => onGo('readings')} />
        <Tile icon="🗣️" title="Konuşma senaryoları" desc="Gerçek durumlar, seç-söyle-kaydet" onClick={() => onGo('scenarios')} />
      </div>

      <div className="mt-5 flex items-end justify-between">
        <div>
          <div className="text-sm font-semibold uppercase tracking-wide text-muted">Seviye</div>
          <div className="text-lg font-bold">{sub}{nextSub && <span className="text-sm font-medium text-muted"> → {nextSub}</span>}</div>
        </div>
        <div className="text-sm text-muted">{subDone}/{subSkills.length} beceri</div>
      </div>
      <div className="mt-2"><Progress value={subSkills.length ? subDone / subSkills.length : 0} /></div>

      {topErrors.length > 0 && (
        <button onClick={() => onGo('errors')} className="mt-5 w-full text-left">
          <Card>
            <div className="flex items-center justify-between">
              <div className="text-sm font-semibold uppercase tracking-wide text-muted">En sık hataların</div>
              <span className="text-sm text-brand">Hata haritası ›</span>
            </div>
            <div className="mt-2 flex flex-wrap gap-2">
              {topErrors.map((t) => (
                <span key={t} className="rounded-lg bg-red-50 px-2 py-1 text-xs font-semibold text-bad">{t} · {ERROR_TAG_MAP[t].title_tr} · {s.errorCounts[t]}</span>
              ))}
            </div>
          </Card>
        </button>
      )}

      <div className="mt-5 text-sm font-semibold uppercase tracking-wide text-muted">Beceri haritası · {s.profile.cefr}</div>
      <div className="mt-2 flex flex-col gap-1.5">
        {SKILLS.filter((k) => k.cefr === s.profile.cefr).map((k) => {
          const mastery = m(k.id)
          const unlocked = k.prereqs.every((p) => m(p) >= 0.6 || !LESSON_BY_SKILL[p])
          const state = mastery >= 0.6 ? 'done' : unlocked ? 'open' : 'later'
          return (
            <div key={k.id} className={`flex items-center gap-3 rounded-xl border px-3 py-2 ${state === 'done' ? 'border-green-200 bg-green-50' : state === 'open' ? 'border-blue-200 bg-blue-50' : 'border-slate-200 bg-white opacity-70'}`}>
              <span className="w-6 text-center">{state === 'done' ? '✅' : state === 'open' ? '🟦' : '⏳'}</span>
              <div className="flex-1">
                <div className="text-sm font-semibold">{k.title_tr}</div>
                <div className="text-[11px] text-muted">{k.sublevel}{state === 'later' ? ' · önce önceki konular' : ''}{mastery > 0 && mastery < 0.6 ? ` · %${Math.round(mastery * 100)}` : ''}</div>
              </div>
            </div>
          )
        })}
      </div>
      <p className="mt-6 text-center text-xs text-muted">Tamamen ücretsiz · kalp yok, kilit yok · çevrimdışı çalışır</p>
    </Screen>
  )
}

function Tile({ icon, title, desc, onClick, badge }: { icon: string; title: string; desc: string; onClick: () => void; badge?: number }) {
  return (
    <button onClick={onClick} className="w-full text-left">
      <Card className="flex items-center gap-3 py-3">
        <span className="text-2xl">{icon}</span>
        <div className="flex-1">
          <div className="font-semibold">{title}</div>
          <div className="text-sm text-muted">{desc}</div>
        </div>
        {badge !== undefined && <span className="rounded-full bg-brand px-2 py-0.5 text-xs font-bold text-white">{badge}</span>}
        <span className="text-muted">›</span>
      </Card>
    </button>
  )
}
