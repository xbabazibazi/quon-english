import { useStore, selectMatureWords } from '../store'
import { APP_NAME } from '../brand'
import { Button, Card, Screen, TopBar } from '../components/ui'

export function Profile({ onBack }: { onBack: () => void }) {
  const s = useStore()
  return (
    <Screen>
      <TopBar title="Profil ve ayarlar" left={<button className="text-brand" onClick={onBack}>‹ Geri</button>} />
      <div className="grid grid-cols-2 gap-2">
        <Card className="py-3"><div className="text-xs text-muted">Seviye</div><div className="text-xl font-bold">{s.profile.sublevel}</div></Card>
        <Card className="py-3"><div className="text-xs text-muted">Tamamlanan ders</div><div className="text-xl font-bold">{s.sessions.length}</div></Card>
        <Card className="py-3"><div className="text-xs text-muted">Kelime (kalıcı)</div><div className="text-xl font-bold">{Object.keys(s.cards).length} ({selectMatureWords(s)})</div></Card>
        <Card className="py-3"><div className="text-xs text-muted">Okuma / konuşma</div><div className="text-xl font-bold">{Object.keys(s.readings).length} / {Object.keys(s.scenarios).length}</div></Card>
      </div>

      <div className="mt-6 text-sm font-semibold uppercase tracking-wide text-muted">Ne kadar sürer?</div>
      <Card className="mt-2 text-sm leading-relaxed">
        Süre sınırı yok, istediğin kadar çalış. Cambridge'in rehber saatlerine göre B2 toplamda yaklaşık 500-600 saatlik çalışma ister: günde 45 dakikayla 2 yıl civarı, günde 20 dakikayla 4-5 yıl. Uygulama dışında İngilizce dinlemek ve konuşmak süreyi kısaltır.
      </Card>

      <div className="mt-6 text-sm font-semibold uppercase tracking-wide text-muted">Hakkında</div>
      <Card className="mt-2 text-sm leading-relaxed text-muted">
        {APP_NAME}, Türkçe konuşanlar için tamamen ücretsiz bir İngilizce uygulamasıdır. Kalp yok, kilit yok. Tüm içerik önceden hazırlanır; uygulama internetsiz çalışır ve verilerin, ses kayıtların dahil, bu cihazda kalır.
        <div className="mt-2 text-xs">A1.1–B2.1 içerik · v0.3</div>
      </Card>
      <div className="quon-soft-imza mt-3 text-center text-[10px] tracking-wider text-muted">bir QUON SOFT ürünüdür</div>

      <div className="mt-8">
        <Button variant="secondary" onClick={() => { if (confirm('Tüm ilerleme silinsin mi?')) s.reset() }}>İlerlemeyi sıfırla</Button>
      </div>
    </Screen>
  )
}
