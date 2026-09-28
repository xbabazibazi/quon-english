import { ERROR_TAGS } from '../content'
import type { ErrorTag } from '../content'
import { useStore } from '../store'
import { Card, Screen, TopBar } from '../components/ui'

export function ErrorMap({ onBack }: { onBack: () => void }) {
  const s = useStore()
  const rows = ERROR_TAGS.map((t) => ({ ...t, count: s.errorCounts[t.code] ?? 0 })).sort((a, b) => b.count - a.count)
  const max = Math.max(1, ...rows.map((r) => r.count))
  const recent = s.sessions.flatMap((x) => x.errors).slice(-10).reverse()
  return (
    <Screen>
      <TopBar title="Hata haritası" left={<button className="text-brand" onClick={onBack}>‹ Geri</button>} />
      <p className="text-sm text-muted">Türkçe konuşanların İngilizcede yaptığı 20 sistematik hata. Senin yaptıkların üstte; sıradaki dersler en sık hatanı öne alır.</p>
      <div className="mt-4 flex flex-col gap-1.5">
        {rows.map((r) => (
          <div key={r.code} className="rounded-xl bg-white px-3 py-2 border border-slate-200">
            <div className="flex items-center justify-between">
              <div className="text-sm font-semibold"><span className="mr-2 rounded bg-slate-100 px-1.5 py-0.5 text-[11px] font-bold">{r.code}</span>{r.title_tr}</div>
              <div className={`text-sm font-bold ${r.count ? 'text-bad' : 'text-muted'}`}>{r.count}</div>
            </div>
            {r.count > 0 && (
              <>
                <div className="mt-1.5 h-1.5 w-full rounded-full bg-slate-100"><div className="h-full rounded-full bg-bad" style={{ width: `${(r.count / max) * 100}%` }} /></div>
                <div className="mt-1.5 text-xs text-muted">{r.explanation_tr}</div>
              </>
            )}
          </div>
        ))}
      </div>
      {recent.length > 0 && (
        <>
          <div className="mt-6 text-sm font-semibold uppercase tracking-wide text-muted">Son hataların</div>
          <div className="mt-2 flex flex-col gap-2">
            {recent.map((e, k) => (
              <Card key={k} className="py-2 text-sm">
                <span className="mr-2 rounded bg-red-100 px-1.5 py-0.5 text-[11px] font-bold text-bad">{e.tag as ErrorTag}</span>
                <s className="text-bad">{e.answer}</s> → <b>{e.expected}</b>
              </Card>
            ))}
          </div>
        </>
      )}
    </Screen>
  )
}
