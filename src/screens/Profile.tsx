import { useStore, selectMatureWords } from '../store'
import { Button, Card, Option, Screen, TopBar } from '../components/ui'

export function Profile({ onBack }: { onBack: () => void }) {
  const s = useStore()
  const words = Object.keys(s.cards).length
  return (
    <Screen>
      <TopBar title="Profil ve ayarlar" left={<button className="text-brand" onClick={onBack}>‹ Geri</button>} />
      <div className="grid grid-cols-2 gap-2">
        <Card className="py-3"><div className="text-xs text-muted">Seviye</div><div className="text-xl font-bold">{s.profile.sublevel}</div></Card>
        <Card className="py-3"><div className="text-xs text-muted">En uzun seri</div><div className="text-xl font-bold">🔥 {s.streak.longest}</div></Card>
        <Card className="py-3"><div className="text-xs text-muted">Toplam seans</div><div className="text-xl font-bold">{s.sessions.length}</div></Card>
        <Card className="py-3"><div className="text-xs text-muted">Kartlar (olgun)</div><div className="text-xl font-bold">{words} ({selectMatureWords(s)})</div></Card>
      </div>

      <div className="mt-6 text-sm font-semibold uppercase tracking-wide text-muted">Günlük hedef</div>
      <div className="mt-2 flex flex-col gap-2">
        <Option state={s.profile.dailyGoal === 1 ? 'selected' : 'idle'} onClick={() => s.setDailyGoal(1)}>
          <div className="font-semibold">Rahat · 1 seans / gün</div>
          <div className="text-sm text-muted">≈10 dk · bir seviye ≈ 2–3 yıl</div>
        </Option>
        <Option state={s.profile.dailyGoal === 2 ? 'selected' : 'idle'} onClick={() => s.setDailyGoal(2)}>
          <div className="font-semibold">Hızlı · 2 seans / gün</div>
          <div className="text-sm text-muted">≈20 dk · bir seviye ≈ 1 yıl</div>
        </Option>
      </div>

      <div className="mt-6 text-sm font-semibold uppercase tracking-wide text-muted">Seri dondurma</div>
      <Card className="mt-2 py-3 text-sm">Bu ay kalan: <b>{s.streak.freezesLeft}</b> · Bir gün kaçırırsan otomatik kullanılır, serin bozulmaz.</Card>

      <div className="mt-6 text-sm font-semibold uppercase tracking-wide text-muted">Hakkında</div>
      <Card className="mt-2 text-sm leading-relaxed text-muted">
        Günde10, Türkçe konuşanlar için tamamen ücretsiz bir İngilizce uygulamasıdır. Kalp yok, kilit yok. Tüm içerik önceden hazırlanır; uygulama internetsiz çalışır ve verilerin bu cihazda kalır. Gelir yalnız seans sonundaki reklamdan gelir.
        <div className="mt-2 text-xs">Demo sürüm · A1.1–A1.2 içerik · v0.1</div>
      </Card>

      <div className="mt-8">
        <Button variant="secondary" onClick={() => { if (confirm('Tüm ilerleme silinsin mi?')) s.reset() }}>İlerlemeyi sıfırla</Button>
      </div>
    </Screen>
  )
}
