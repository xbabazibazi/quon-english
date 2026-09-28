// Uçtan uca duman testi: onboarding → seviye testi → seans → sonuç. `pnpm e2e` ile çalışır.
import { chromium } from '@playwright/test'
import fs from 'node:fs'

const BASE = process.env.BASE_URL ?? 'http://localhost:4173/'
const OUT = process.env.SHOT_DIR ?? 'e2e/shots'
fs.mkdirSync(OUT, { recursive: true })

const browser = await chromium.launch({ executablePath: process.env.CHROME_PATH || undefined })
const page = await browser.newPage({ viewport: { width: 390, height: 844 }, deviceScaleFactor: 2 })
const errors = []
page.on('pageerror', (e) => errors.push(String(e)))
page.on('console', (m) => { if (m.type() === 'error') errors.push(m.text()) })
page.on('dialog', (d) => d.accept())

let n = 0
const shot = async (name) => { await page.screenshot({ path: `${OUT}/${String(++n).padStart(2, '0')}-${name}.png` }) }
const click = async (text) => { await page.getByRole('button', { name: text, exact: false }).first().click() }

try {
await page.goto(BASE)
await page.waitForSelector('text=Günde10')
await shot('welcome')
await click('Başla')
await shot('goal')
await click('İş için')
await click('Devam')
await shot('level-test')

// Seviye testi: 12 soru, hepsinde ilk şıkkı seç (karışık sonuç)
if (process.env.SKIP_TEST) await click('Testi atla')
else for (let i = 0; i < 12; i++) {
  const opts = page.locator('button.w-full.rounded-2xl.border-2')
  await opts.nth(i % 3).click()
  await click('Kontrol et')
  await click('Devam')
}
await page.waitForSelector('text=Tahmini seviyen')
await shot('level-result')
await click('İlk seansım hazır')
await page.waitForSelector('text=Bugünkü seansın hazır')
await shot('home')
await click('Başla')
await page.waitForSelector('text=Bugünün 5 kelimesi')
await shot('lesson')
await click('Alıştırmaya geç')

// Alıştırmalar: tipine göre çöz (rastgele/ilk seçenek), akış ilerlesin yeter
for (let guard = 0; guard < 30; guard++) {
  const title = (await page.locator('div.text-sm.font-semibold.uppercase').first().textContent()) ?? ''
  if (title.includes('Günün sınavı')) break
  if (title.includes('Eşleştir')) {
    // her sol şıkkı sırayla her sağ şıkla dene (deterministik brute force)
    const left = page.locator('div.grid.grid-cols-2 > div').nth(0).locator('button')
    const right = page.locator('div.grid.grid-cols-2 > div').nth(1).locator('button')
    const c = await left.count()
    for (let l = 0; l < c; l++) {
      for (let r = 0; r < c; r++) {
        if (await left.nth(l).isDisabled()) break
        if (await right.nth(r).isDisabled()) continue
        await left.nth(l).click()
        await right.nth(r).click()
        await page.waitForTimeout(400)
      }
    }
    if (guard === 0) await shot('exercise-match')
    await click('Devam')
  } else if (title.includes('Cümleyi kur')) {
    const pool = page.locator('div.flex.flex-wrap.gap-2').nth(1)
    const c = await pool.locator('button').count()
    for (let k = 0; k < c; k++) await pool.locator('button:not([disabled])').first().click()
    await click('Kontrol et')
    await click('Devam')
  } else {
    const opts = page.locator('button.w-full.rounded-2xl.border-2')
    await opts.nth(0).click()
    await click('Kontrol et')
    if (guard === 0) await shot('exercise-choice')
    await click('Devam')
  }
}
await shot('quiz')

// Günün sınavı: 5 soru — order: tüm kelimeleri sırayla seç; free: bilerek tipik Türk hatası yaz
const wrongFree = ['I tired', 'She is doctor', 'I no eat meat', 'She lives at Istanbul', 'They busy']
for (let q = 0; q < 5; q++) {
  const input = page.locator('input[placeholder="İngilizce yaz…"]')
  if (await input.count()) {
    await input.fill(wrongFree[q % wrongFree.length])
  } else {
    const pool = page.locator('div.flex.flex-wrap.gap-2').nth(1)
    const c = await pool.locator('button').count()
    for (let k = 0; k < Math.min(c, 4); k++) await pool.locator('button:not([disabled])').first().click()
  }
  await click('Kontrol et')
  if (q === 0) await shot('quiz-feedback')
  await click('Devam')
}
await page.waitForSelector('text=XP')
await shot('result')
await click('Ana ekrana dön')
await page.waitForSelector('text=Günde10')
await shot('home-after')

// Hata haritası
if (await page.getByText('Hata haritası').count()) {
  await page.getByText('Hata haritası').first().click()
  await shot('error-map')
}

// kalıcılık: yenile, hâlâ onboarded ve seans sayılmış mı?
await page.reload()
await page.waitForSelector('text=Günde10')
const persisted = await page.evaluate(() => JSON.parse(localStorage.getItem('gunde10-v1') ?? '{}'))
console.log('sessions:', persisted.state?.sessions?.length, 'xp:', persisted.state?.totalXp, 'streak:', persisted.state?.streak?.current, 'cards:', Object.keys(persisted.state?.cards ?? {}).length)
console.log('page errors:', errors.length ? errors : 'none')
} catch (e) {
  await shot('ERROR')
  console.error(e)
  await browser.close()
  process.exit(1)
}
await browser.close()
if (errors.length) process.exit(1)
