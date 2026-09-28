import { ERROR_TAG_MAP, LESSON_BY_SKILL, SKILLS, SUBLEVELS } from '../content'
import { selectMatureWords, selectTodaySessions, selectTopErrorTags, useStore } from '../store'
import { isDue } from '../engine/srs'
import { isSaturday } from '../engine/dates'
import { useMemo } from 'react'
import { Button, Card, Progress, Screen, Stat } from '../components/ui'

export function Home({ onStart, onErrors, onProfile }: { onStart: (kind: 'daily' | 'second') => void; onErrors: () => void; onProfile: () => void }) {
  const s = useStore()
  const today = selectTodaySessions(s)
  const done = today.length
  const goal = s.profile.dailyGoal
  const due = Object.values(s.cards).filter((c) => isDue(c.srs)).length
  const mature = selectMatureWords(s)
  const topErrors = selectTopErrorTags(s)
  const m = (id: string) => s.skillMastery[id] ?? 0

  // alt-seviye ilerlemesi: dersi olan beceriler içinde
  const sub = s.profile.sublevel
  const subSkills = SKILLS.filter((k) => k.sublevel === sub && k.lessonId)
  const subDone = subSkills.filter((k) => m(k.id) >= 0.6).length
  const subProgress = subSkills.length ? subDone / subSkills.length : 0
  const nextSub = SUBLEVELS[SUBLEVELS.indexOf(sub) + 1]

  const hour = useMemo(() => new Date().getHours(), [])
  const streakAtRisk = s.streak.current > 0 && done === 0 && hour >= 21

  return (
    <Screen>
      <div className="flex items-center justify-between pt-2">
        <div className="flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-brand text-sm font-bold text-white">10</div>
          <div className="text-lg font-bold">Günde10</div>
        </div>
        <button onClick={onProfile} className="rounded-xl bg-white px-3 py-1.5 text-sm font-semibold text-muted border border-slate-200">{s.profile.sublevel} · ⚙︎</button>
      </div>

      <div className="mt-4 grid grid-cols-3 gap-2">
        <Stat icon="🔥" value={s.streak.current} label="gün seri" />
        <Stat icon="⭐" value={s.totalXp} label="XP" />
        <Stat icon="📚" value={mature} label="kelime" />
      </div>

      <Card className="mt-4">
        {done < goal ? (
          <>
            <div className="text-xs font-semibold uppercase tracking-wide text-brand">{done === 0 ? 'Bugünkü seansın hazır' : 'İkinci seans'}</div>
            <div className="mt-1 text-xl font-bold">{isSaturday() ? 'Haftalık tekrar' : nextLessonTitle(s.skillMastery)}</div>
            <div className="mt-1 text-sm text-muted">≈10 dk · {due > 0 ? `${due} kart tekrar + ` : ''}ders + alıştırma + günün sınavı</div>
            {streakAtRisk && <div className="mt-2 text-sm font-semibold text-bad">Serin risk altında — 10 dakika yeter.</div>}
            <div className="mt-4">
              <Button onClick={() => onStart(done === 0 ? 'daily' : 'second')}>{done === 0 ? 'Başla' : 'İkinci seansa başla'}</Button>
            </div>
          </>
        ) : (
          <>
            <div className="text-xs font-semibold uppercase tracking-wide text-ok">Bugünkü hedef tamam ✓</div>
            <div className="mt-1 text-xl font-bold">Yarın görüşürüz</div>
            <div className="mt-1 text-sm text-muted">İstersen bir seans daha yapabilirsin; seri için gerekmez.</div>
            <div className="mt-4">
              <Button variant="secondary" onClick={() => onStart('second')}>Ekstra seans</Button>
            </div>
          </>
        )}
        <div className="mt-3 flex items-center gap-2 text-xs text-muted">
          <span>Günlük hedef: {goal} seans</span>
          <div className="flex gap-1">
            {Array.from({ length: goal }).map((_, k) => (
              <span key={k} className={`h-2.5 w-2.5 rounded-full ${k < done ? 'bg-ok' : 'bg-slate-200'}`} />
            ))}
          </div>
        </div>
      </Card>

      <div className="mt-5 flex items-end justify-between">
        <div>
          <div className="text-sm font-semibold uppercase tracking-wide text-muted">Seviye</div>
          <div className="text-lg font-bold">{sub} <span className="text-sm font-medium text-muted">→ {nextSub ?? 'C1'}</span></div>
        </div>
        <div className="text-sm text-muted">{subDone}/{subSkills.length} beceri</div>
      </div>
      <div className="mt-2"><Progress value={subProgress} /></div>

      {topErrors.length > 0 && (
        <button onClick={onErrors} className="mt-5 w-full text-left">
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

      <div className="mt-5 text-sm font-semibold uppercase tracking-wide text-muted">Beceri haritası</div>
      <div className="mt-2 flex flex-col gap-1.5">
        {SKILLS.filter((k) => ['A1.1', 'A1.2', 'A1.3'].includes(k.sublevel)).map((k) => {
          const mastery = m(k.id)
          const hasLesson = !!LESSON_BY_SKILL[k.id]
          const unlocked = k.prereqs.every((p) => m(p) >= 0.6 || !LESSON_BY_SKILL[p])
          const state = !hasLesson ? 'soon' : mastery >= 0.6 ? 'done' : unlocked ? 'open' : 'locked'
          return (
            <div key={k.id} className={`flex items-center gap-3 rounded-xl border px-3 py-2 ${state === 'done' ? 'border-green-200 bg-green-50' : state === 'open' ? 'border-blue-200 bg-blue-50' : 'border-slate-200 bg-white opacity-70'}`}>
              <span className="w-6 text-center">{state === 'done' ? '✅' : state === 'open' ? '🟦' : state === 'soon' ? '🕒' : '🔒'}</span>
              <div className="flex-1">
                <div className="text-sm font-semibold">{k.title_tr}</div>
                <div className="text-[11px] text-muted">{k.sublevel}{state === 'soon' ? ' · içerik yakında' : ''}{hasLesson && mastery > 0 && mastery < 0.6 ? ` · %${Math.round(mastery * 100)}` : ''}</div>
              </div>
            </div>
          )
        })}
      </div>
      <p className="mt-6 text-center text-xs text-muted">Tamamen ücretsiz · kalp yok, kilit yok · çevrimdışı çalışır</p>
    </Screen>
  )
}

function nextLessonTitle(mastery: Record<string, number>): string {
  const m = (id: string) => mastery[id] ?? 0
  const s = SKILLS.find((k) => k.lessonId && m(k.id) < 0.6 && k.prereqs.every((p) => m(p) >= 0.6 || !LESSON_BY_SKILL[p]))
  return s ? s.title_tr : 'Pekiştirme seansı'
}
