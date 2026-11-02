import type { Lesson } from './types'

export const LESSONS_A22: Lesson[] = [
  {
    id: 'l_past_continuous',
    skillId: 'past_continuous',
    title: 'Past continuous: I was sleeping',
    title_tr: 'was / were + -ing — geçmişte sürerken',
    explanation_tr:
      'Geçmişte belli bir anda SÜRMEKTE olan bir eylemi anlatır: "Dün saat 10\'da uyuyordum" = "I was sleeping at 10 yesterday." Kural: was/were + fiil-ing. I/he/she/it → was, you/we/they → were. En sık kullanım şekli: uzun süren bir eylem (past continuous) kısa bir eylem (past simple) tarafından kesilir: "I was sleeping when you called." Türkler burada iki hata yapar: was/were\'i atlamak ("I sleeping" ✗) ve hangi zamanın "kesen", hangisinin "kesilen" olduğunu karıştırmak. İpucu: "-ken, -irken" anlamı varsa past continuous, ani/tek seferlik olay varsa past simple.',
    examples: [
      { en: 'I was watching TV when the phone rang.', tr: 'Telefon çaldığında televizyon izliyordum.' },
      { en: 'They were having dinner at 8 pm.', tr: 'Saat 8\'de akşam yemeği yiyorlardı.' },
      { en: 'She was driving to work when it started to rain.', tr: 'İşe giderken yağmur başladı.' },
    ],
    words: [
      { en: 'ring (rang)', tr: 'çalmak (telefon/zil)', example: 'The phone rang twice.', example_tr: 'Telefon iki kez çaldı.' },
      { en: 'happen', tr: 'olmak, gerçekleşmek', example: 'What was happening?', example_tr: 'Ne oluyordu?' },
      { en: 'interrupt', tr: 'kesmek, bölmek', example: 'Sorry to interrupt you.', example_tr: 'Sözünü kestiğim için üzgünüm.' },
      { en: 'while', tr: '-iken (süreç)', example: 'While I was cooking, he arrived.', example_tr: 'Ben yemek yaparken o geldi.' },
      { en: 'meanwhile', tr: 'bu arada', example: 'Meanwhile, she was waiting outside.', example_tr: 'Bu arada o dışarıda bekliyordu.' },
    ],
    exercises: [
      { type: 'gap', sentence: 'I ___ TV when you called.', options: ['watched', 'was watching', 'am watching'], answer: 1 },
      { type: 'gap', sentence: 'They ___ dinner at 8 pm.', options: ['was having', 'were having', 'had'], answer: 1, explanation_tr: '"They" → were.' },
      { type: 'gap', sentence: 'She ___ when it started to rain.', options: ['was driving', 'driving', 'drives'], answer: 0 },
      { type: 'mc', prompt: 'Hangisi doğru?', options: ['I sleeping at 10.', 'I was sleeping at 10.', 'I am sleeping at 10 yesterday.'], answer: 1, explanation_tr: 'Geçmişte sürme: was + fiil-ing.' },
      { type: 'match', pairs: [['I work', 'I was working'], ['we work', 'we were working'], ['he works', 'he was working'], ['they work', 'they were working']] },
      { type: 'order', prompt_tr: 'Yağmur yağarken eve yürüyordum.', words: ['was', 'walking', 'I', 'home', 'while', 'it', 'was', 'raining'], answer: 'I was walking home while it was raining' },
      { type: 'gap', sentence: 'At 9 o\'clock last night we ___ football.', options: ['were playing', 'was playing', 'are playing'], answer: 0 },
      { type: 'gap', sentence: 'What ___ you doing at 7 pm yesterday?', options: ['was', 'were', 'did'], answer: 1 },
      { type: 'mc', prompt: 'Hangisi doğru?', options: ['She was cooking when I arrived.', 'She cooking when I arrived.', 'She was cook when I arrived.'], answer: 0 },
      { type: 'order', prompt_tr: 'Otobüsü beklerken Ali\'yi gördüm.', words: ['I', 'saw', 'Ali', 'while', 'I', 'was', 'waiting', 'for', 'the', 'bus'], answer: 'I saw Ali while I was waiting for the bus' },
    ],
    quiz: [
      {
        id: 'q_pc_1', mode: 'order', prompt_tr: 'Sen aradığında televizyon izliyordum.', answer_en: 'I was watching TV when you called',
        words: ['I', 'was', 'watching', 'TV', 'when', 'you', 'called', 'watch'],
        error_variants: [
          { text: 'I watching TV when you called', tag: 'PASTCONT', explanation_tr: '"was" atlanmış: I was watching.' },
          { text: 'I was watch TV when you called', tag: 'PASTCONT', explanation_tr: 'Fiil -ing almalı: was watching.' },
          { text: 'I was watching TV when you were calling', tag: 'PASTCONT', explanation_tr: 'Kısa, kesen eylem past simple olur: when you called.' },
        ],
      },
      {
        id: 'q_pc_2', mode: 'free', prompt_tr: 'Saat 8\'de akşam yemeği yiyorlardı.', answer_en: 'They were having dinner at 8 pm', accepted: ['They were eating dinner at 8 pm', 'They were having dinner at 8', 'They were eating dinner at 8'],
        error_variants: [
          { text: 'They was having dinner at 8 pm', tag: 'PASTCONT', explanation_tr: '"They" ile "were" kullanılır, "was" değil.' },
          { text: 'They having dinner at 8 pm', tag: 'PASTCONT', explanation_tr: '"were" atlanmış.' },
        ],
      },
      {
        id: 'q_pc_3', mode: 'order', prompt_tr: 'Ben yemek yaparken o geldi.', answer_en: 'He arrived while I was cooking', accepted: ['While I was cooking he arrived'],
        words: ['He', 'arrived', 'while', 'I', 'was', 'cooking', 'were'],
        error_variants: [
          { text: 'He arrived while I were cooking', tag: 'PASTCONT', explanation_tr: '"I" ile "was": I was cooking.' },
          { text: 'He was arriving while I was cooking', tag: 'PASTCONT', explanation_tr: 'Ani/tek eylem past simple: He arrived.' },
        ],
      },
      {
        id: 'q_pc_4', mode: 'free', prompt_tr: 'O (kadın) işe giderken yağmur başladı.', answer_en: 'It started to rain while she was driving to work', accepted: ['It started raining while she was driving to work', 'While she was driving to work it started to rain', 'While she was driving to work it started raining', 'She was driving to work when it started to rain', 'She was going to work when it started to rain', 'It started to rain while she was going to work', 'While she was going to work it started to rain'],
        error_variants: [
          { text: 'It was starting to rain while she was driving to work', tag: 'PASTCONT', explanation_tr: 'Ani başlangıç → past simple: It started.' },
          { text: 'It started to rain while she drove to work', tag: 'PASTCONT', explanation_tr: 'Süren eylem için past continuous: she was driving.' },
        ],
      },
      {
        id: 'q_pc_5', mode: 'order', prompt_tr: 'Ne oluyordu?', answer_en: 'What was happening',
        words: ['What', 'was', 'happening', 'happen', 'were'],
        error_variants: [
          { text: 'What happening', tag: 'PASTCONT', explanation_tr: '"was" eksik: What was happening?' },
          { text: 'What were happening', tag: 'PASTCONT', explanation_tr: '"What" tekil özne gibi davranır: was happening.' },
        ],
      },
      {
        id: 'q_pc_6', mode: 'free', prompt_tr: 'Dün saat 10\'da uyuyordum.', answer_en: 'I was sleeping at 10 yesterday', accepted: ['I was sleeping at ten yesterday', 'I was sleeping at 10 o\'clock yesterday', 'Yesterday at 10 I was sleeping', 'At 10 yesterday I was sleeping', 'I was asleep at 10 yesterday', 'I was sleeping at 10 pm yesterday', 'I was sleeping at 10 last night'],
        error_variants: [
          { text: 'I sleeping at 10 yesterday', tag: 'PASTCONT', explanation_tr: '"was" atlanmış: I was sleeping.' },
          { text: 'I am sleeping at 10 yesterday', tag: 'PASTCONT', explanation_tr: 'Geçmişte sürme: am değil was: I was sleeping.' },
        ],
      },
      {
        id: 'q_pc_7', mode: 'order', prompt_tr: 'Sen geldiğinde ne yapıyorlardı?', answer_en: 'What were they doing when you arrived',
        words: ['What', 'were', 'they', 'doing', 'when', 'you', 'arrived', 'was'],
        error_variants: [
          { text: 'What was they doing when you arrived', tag: 'PASTCONT', explanation_tr: '"they" ile "were": What were they doing?' },
          { text: 'What they were doing when you arrived', tag: 'WH', explanation_tr: 'Soru kelimesinden sonra were gelir: What were they doing?' },
        ],
      },
      {
        id: 'q_pc_8', mode: 'free', prompt_tr: 'Ben duş alırken telefon çaldı.', answer_en: 'The phone rang while I was having a shower', accepted: ['The phone rang while I was taking a shower', 'While I was having a shower the phone rang', 'While I was taking a shower the phone rang', 'The phone rang when I was having a shower', 'The phone rang when I was taking a shower'],
        error_variants: [
          { text: 'The phone was ringing while I had a shower', tag: 'PASTCONT', explanation_tr: 'Ani olay past simple, süren eylem past continuous: The phone rang while I was having a shower.' },
          { text: 'The phone rang while I having a shower', tag: 'PASTCONT', explanation_tr: '"was" atlanmış: while I was having.' },
        ],
      },
      {
        id: 'q_pc_9', mode: 'order', prompt_tr: 'Çocuklar bahçede oynuyordu.', answer_en: 'The children were playing in the garden',
        words: ['The', 'children', 'were', 'playing', 'in', 'the', 'garden', 'was'],
        error_variants: [
          { text: 'The children was playing in the garden', tag: 'PASTCONT', explanation_tr: '"children" çoğul: were playing.' },
          { text: 'The children playing in the garden', tag: 'PASTCONT', explanation_tr: '"were" atlanmış: were playing.' },
        ],
      },
      {
        id: 'q_pc_10', mode: 'free', prompt_tr: 'Sen aradığında yemek yapıyordum.', answer_en: 'I was cooking when you called', accepted: ['When you called I was cooking', 'I was making dinner when you called', 'When you called I was making dinner'],
        error_variants: [
          { text: 'I cooked when you called', tag: 'PASTCONT', explanation_tr: 'Süren eylem past continuous: I was cooking.' },
          { text: 'I was cooking when you were calling', tag: 'PASTCONT', explanation_tr: 'Kısa, kesen eylem past simple: when you called.' },
        ],
      },
      {
        id: 'q_pc_11', mode: 'order', prompt_tr: 'Dışarı çıktığımızda kar yağıyordu.', answer_en: 'It was snowing when we went out', accepted: ['When we went out it was snowing'],
        words: ['It', 'was', 'snowing', 'when', 'we', 'went', 'out', 'were'],
        error_variants: [
          { text: 'It snowing when we went out', tag: 'PASTCONT', explanation_tr: '"was" atlanmış: It was snowing.' },
          { text: 'It was snow when we went out', tag: 'PASTCONT', explanation_tr: 'Fiil -ing almalı: was snowing.' },
        ],
      },
      {
        id: 'q_pc_12', mode: 'free', prompt_tr: 'Ders sırasında konuşmuyorduk.', answer_en: "We weren't talking during the lesson", accepted: ['We were not talking during the lesson', "We weren't speaking during the lesson", 'We were not speaking during the lesson'],
        error_variants: [
          { text: "We wasn't talking during the lesson", tag: 'PASTCONT', explanation_tr: '"We" ile "weren\'t": We weren\'t talking.' },
          { text: "We didn't talking during the lesson", tag: 'PASTCONT', explanation_tr: 'Past continuous olumsuzu was/were + not ile: We weren\'t talking.' },
        ],
      },
    ],
  },
  {
    id: 'l_have_to',
    skillId: 'have_to',
    title: 'have to / don\'t have to',
    title_tr: 'have to / don\'t have to — zorunluluk',
    explanation_tr:
      '"have to" dışarıdan gelen bir kural veya zorunluluğu anlatır: "I have to wear a uniform at work" (işveren öyle istiyor). Geniş zamanda normal fiil gibi davranır: he/she/it ile "has to" olur, soru ve olumsuzda do/does kullanılır: "Do you have to work on Sundays?", "She doesn\'t have to come." Türklerin en sık hatası fiilden önce fazladan "to" koymak: "I have to to go" ✗. Dikkat: "don\'t have to" = "gerek yok, zorunlu değil" demektir, "mustn\'t" (yasak) ile KARIŞTIRILMAMALI: "You don\'t have to pay" (ödemene gerek yok) ≠ "You mustn\'t pay" (ödemen yasak).',
    examples: [
      { en: 'I have to finish this report today.', tr: 'Bu raporu bugün bitirmem lazım.' },
      { en: 'She has to wake up early every day.', tr: 'Her gün erken kalkması gerekiyor.' },
      { en: 'You don\'t have to bring anything; we have everything.', tr: 'Bir şey getirmene gerek yok; her şeyimiz var.' },
    ],
    words: [
      { en: 'report', tr: 'rapor', example: 'I have to write a report.', example_tr: 'Bir rapor yazmam lazım.' },
      { en: 'uniform', tr: 'üniforma', example: 'We have to wear a uniform.', example_tr: 'Üniforma giymemiz lazım.' },
      { en: 'rule', tr: 'kural', example: 'This is an important rule.', example_tr: 'Bu önemli bir kural.' },
      { en: 'bring', tr: 'getirmek', example: 'You don\'t have to bring your laptop.', example_tr: 'Laptopunu getirmene gerek yok.' },
      { en: 'pay', tr: 'ödemek', example: 'Do I have to pay now?', example_tr: 'Şimdi ödemem gerekiyor mu?' },
    ],
    exercises: [
      { type: 'gap', sentence: 'You ___ wear a helmet on a motorbike.', options: ['have to', 'has to', 'have'], answer: 0 },
      { type: 'gap', sentence: 'She ___ work on Saturdays.', options: ['have to', 'has to', 'has'], answer: 1, explanation_tr: 'She → has to.' },
      { type: 'gap', sentence: 'You ___ pay; it\'s free.', options: ['don\'t have to', 'doesn\'t have to', 'mustn\'t'], answer: 0 },
      { type: 'mc', prompt: 'Hangisi doğru?', options: ['I have to to go now.', 'I have to go now.', 'I has to go now.'], answer: 1, explanation_tr: 'Fiilden önce fazladan "to" olmaz.' },
      { type: 'match', pairs: [['zorunlu (I/you/we/they)', 'have to'], ['zorunlu (he/she/it)', 'has to'], ['gerek yok (I/you/we/they)', 'don\'t have to'], ['gerek yok (he/she/it)', 'doesn\'t have to']] },
      { type: 'order', prompt_tr: 'Bu raporu bugün bitirmem lazım.', words: ['I', 'have', 'to', 'finish', 'this', 'report', 'today'], answer: 'I have to finish this report today' },
      { type: 'gap', sentence: '___ he have to work tomorrow?', options: ['Do', 'Does', 'Has'], answer: 1 },
      { type: 'gap', sentence: 'We ___ wear a uniform at school.', options: ['have to', 'has to', 'having to'], answer: 0 },
      { type: 'mc', prompt: '"Gelmene gerek yok" hangisi?', options: ["You don't have to come.", "You mustn't come.", "You haven't to come."], answer: 0, explanation_tr: '"mustn\'t" yasak demek; "gerek yok" = don\'t have to.' },
      { type: 'order', prompt_tr: 'Pazar günleri çalışmak zorunda mısın?', words: ['Do', 'you', 'have', 'to', 'work', 'on', 'Sundays'], answer: 'Do you have to work on Sundays' },
    ],
    quiz: [
      {
        id: 'q_hto_1', mode: 'order', prompt_tr: 'Her gün erken kalkması gerekiyor.', answer_en: 'She has to wake up early every day',
        words: ['She', 'has', 'to', 'wake', 'up', 'early', 'every', 'day', 'have'],
        error_variants: [
          { text: 'She have to wake up early every day', tag: 'HAVE_TO', explanation_tr: '"She" ile "has to" kullanılır.' },
          { text: 'She has to to wake up early every day', tag: 'HAVE_TO', explanation_tr: 'Fazladan "to": has to wake up.' },
        ],
      },
      {
        id: 'q_hto_2', mode: 'free', prompt_tr: 'Bir şey getirmene gerek yok.', answer_en: 'You don\'t have to bring anything', accepted: ['You do not have to bring anything', 'You don\'t need to bring anything', 'You do not need to bring anything'],
        error_variants: [
          { text: 'You mustn\'t bring anything', tag: 'HAVE_TO', explanation_tr: '"mustn\'t" = yasak demek. "Gerek yok" için don\'t have to.' },
          { text: 'You don\'t have to to bring anything', tag: 'HAVE_TO', explanation_tr: 'Fazladan "to" olmaz.' },
        ],
      },
      {
        id: 'q_hto_3', mode: 'order', prompt_tr: 'Şimdi ödemem gerekiyor mu?', answer_en: 'Do I have to pay now',
        words: ['Do', 'I', 'have', 'to', 'pay', 'now', 'Have'],
        error_variants: [
          { text: 'Have I to pay now', tag: 'HAVE_TO', explanation_tr: 'Soru için do/does gerekir: Do I have to…?' },
          { text: 'I have to pay now', tag: 'DO_Q', explanation_tr: 'Soru için başa "Do" gelmeli.' },
        ],
      },
      {
        id: 'q_hto_4', mode: 'free', prompt_tr: 'Motosiklette kask takman lazım.', answer_en: 'You have to wear a helmet on a motorbike', accepted: ['You have to wear a helmet on a motorcycle', 'You must wear a helmet on a motorbike', 'You must wear a helmet on a motorcycle', 'You need to wear a helmet on a motorbike', 'You need to wear a helmet on a motorcycle'],
        error_variants: [
          { text: 'You have to wearing a helmet on a motorbike', tag: 'HAVE_TO', explanation_tr: 'have to\'dan sonra fiil yalın gelir: wear.' },
          { text: 'You have wear a helmet on a motorbike', tag: 'HAVE_TO', explanation_tr: '"to" eksik: have to wear.' },
        ],
      },
      {
        id: 'q_hto_5', mode: 'order', prompt_tr: 'Her gün erken kalkmam gerekmiyor.', answer_en: 'I don\'t have to get up early every day',
        words: ['I', 'don\'t', 'have', 'to', 'get', 'up', 'early', 'every', 'day', 'doesn\'t'],
        error_variants: [
          { text: 'I doesn\'t have to get up early every day', tag: 'HAVE_TO', explanation_tr: '"I" ile "don\'t" kullanılır.' },
          { text: 'I don\'t has to get up early every day', tag: 'HAVE_TO', explanation_tr: 'don\'t\'tan sonra fiil yalın: have to.' },
        ],
      },
      {
        id: 'q_hto_6', mode: 'free', prompt_tr: 'Babam her sabah 6\'da kalkmak zorunda.', answer_en: 'My father has to get up at 6 every morning', accepted: ['My father has to get up at six every morning', 'My father has to wake up at 6 every morning', 'My father has to wake up at six every morning', 'Every morning my father has to get up at 6', 'Every morning my father has to get up at six'],
        error_variants: [
          { text: 'My father have to get up at 6 every morning', tag: 'HAVE_TO', explanation_tr: 'My father = he → has to.' },
          { text: 'My father has to gets up at 6 every morning', tag: 'HAVE_TO', explanation_tr: 'has to\'dan sonra fiil yalın: has to get up.' },
        ],
      },
      {
        id: 'q_hto_7', mode: 'order', prompt_tr: 'O (kadın) cumartesi çalışmak zorunda değil.', answer_en: "She doesn't have to work on Saturday", accepted: ['She does not have to work on Saturday', "She doesn't have to work on Saturdays"],
        words: ['She', "doesn't", 'have', 'to', 'work', 'on', 'Saturday', "don't"],
        error_variants: [
          { text: "She don't have to work on Saturday", tag: 'HAVE_TO', explanation_tr: '"She" ile "doesn\'t": She doesn\'t have to.' },
          { text: "She doesn't has to work on Saturday", tag: 'HAVE_TO', explanation_tr: 'doesn\'t\'tan sonra fiil yalın: have to.' },
        ],
      },
      {
        id: 'q_hto_8', mode: 'free', prompt_tr: 'Bu akşam annemi aramam lazım.', answer_en: 'I have to call my mother tonight', accepted: ['I have to call my mother this evening', 'Tonight I have to call my mother', 'This evening I have to call my mother', 'I need to call my mother tonight', 'I need to call my mother this evening', 'I must call my mother tonight'],
        error_variants: [
          { text: 'I have to to call my mother tonight', tag: 'HAVE_TO', explanation_tr: 'Fazladan "to" olmaz: have to call.' },
          { text: 'I have call my mother tonight', tag: 'HAVE_TO', explanation_tr: '"to" eksik: have to call.' },
        ],
      },
      {
        id: 'q_hto_9', mode: 'order', prompt_tr: 'Bilet almamız gerekiyor mu?', answer_en: 'Do we have to buy tickets',
        words: ['Do', 'we', 'have', 'to', 'buy', 'tickets', 'Have'],
        error_variants: [
          { text: 'Have we to buy tickets', tag: 'HAVE_TO', explanation_tr: 'Soru için do gerekir: Do we have to…?' },
          { text: 'Do we have buy tickets', tag: 'HAVE_TO', explanation_tr: '"to" eksik: have to buy.' },
        ],
      },
      {
        id: 'q_hto_10', mode: 'free', prompt_tr: 'Acele etmene gerek yok.', answer_en: "You don't have to hurry", accepted: ['You do not have to hurry', "You don't need to hurry", 'You do not need to hurry'],
        error_variants: [
          { text: "You mustn't hurry", tag: 'HAVE_TO', explanation_tr: '"mustn\'t" = yasak. "Gerek yok" için don\'t have to.' },
          { text: "You don't have to hurrying", tag: 'HAVE_TO', explanation_tr: 'have to\'dan sonra fiil yalın: have to hurry.' },
        ],
      },
      {
        id: 'q_hto_11', mode: 'order', prompt_tr: 'Öğrenciler üniforma giymek zorunda.', answer_en: 'The students have to wear a uniform', accepted: ['The students have to wear uniforms', 'Students have to wear a uniform', 'Students have to wear uniforms'],
        words: ['The', 'students', 'have', 'to', 'wear', 'a', 'uniform', 'has'],
        error_variants: [
          { text: 'The students has to wear a uniform', tag: 'HAVE_TO', explanation_tr: 'Çoğul özne: have to.' },
          { text: 'The students have to wearing a uniform', tag: 'HAVE_TO', explanation_tr: 'have to\'dan sonra fiil yalın: have to wear.' },
        ],
      },
      {
        id: 'q_hto_12', mode: 'free', prompt_tr: 'Ali neden erken gitmek zorunda?', answer_en: 'Why does Ali have to leave early', accepted: ['Why does Ali have to go early'],
        error_variants: [
          { text: 'Why does Ali has to leave early', tag: 'HAVE_TO', explanation_tr: 'does\'tan sonra fiil yalın: does Ali have to.' },
          { text: 'Why Ali has to leave early', tag: 'WH', explanation_tr: 'Soru kelimesinden sonra does gelir: Why does Ali have to leave?' },
        ],
      },
    ],
  },
  {
    id: 'l_some_any',
    skillId: 'some_any',
    title: 'some / any / no',
    title_tr: 'some / any / no',
    explanation_tr:
      'Belirsiz miktar belirtirken: olumlu cümlede "some" (I have some money), soru ve olumsuzda "any" (Do you have any money? / I don\'t have any money). Rica veya teklif eden sorularda "some" kullanılır: "Would you like some tea?" "no" ise "not any" anlamına gelir ve olumlu cümlede kullanılır: "I have no money" = "I don\'t have any money." Türklerin hatası: soruda/olumsuzda "some" kullanmaya devam etmek veya "no" ile "not" birlikte kullanmak ("I don\'t have no money" ✗ — çifte olumsuzluk İngilizcede yanlıştır).',
    examples: [
      { en: 'I have some questions for you.', tr: 'Sana birkaç sorum var.' },
      { en: 'Do you have any brothers or sisters?', tr: 'Kardeşin var mı?' },
      { en: 'There is no milk in the fridge.', tr: 'Buzdolabında hiç süt yok.' },
    ],
    words: [
      { en: 'question', tr: 'soru', example: 'I have some questions.', example_tr: 'Birkaç sorum var.' },
      { en: 'fridge', tr: 'buzdolabı', example: 'There is no milk in the fridge.', example_tr: 'Buzdolabında süt yok.' },
      { en: 'sugar', tr: 'şeker', example: 'Do you want any sugar?', example_tr: 'Şeker ister misin?' },
      { en: 'advice', tr: 'tavsiye', example: 'Can you give me some advice?', example_tr: 'Bana tavsiye verebilir misin?' },
      { en: 'nobody', tr: 'hiç kimse', example: 'There is nobody here.', example_tr: 'Burada kimse yok.' },
    ],
    exercises: [
      { type: 'gap', sentence: 'I don\'t have ___ money.', options: ['some', 'any', 'no'], answer: 1 },
      { type: 'gap', sentence: 'I have ___ good news.', options: ['some', 'any'], answer: 0 },
      { type: 'gap', sentence: 'The fridge is empty. There is ___ milk.', options: ['some', 'any', 'no'], answer: 2, explanation_tr: '"hiç yok" için "no" + olumlu fiil.' },
      { type: 'mc', prompt: 'Hangisi doğru?', options: ['I don\'t have no money.', 'I don\'t have any money.', 'I don\'t have some money.'], answer: 1, explanation_tr: 'Çifte olumsuzluk olmaz: don\'t + any.' },
      { type: 'match', pairs: [['olumlu', 'some'], ['soru / olumsuz', 'any'], ['hiç yok', 'no'], ['hiç kimse', 'nobody']] },
      { type: 'order', prompt_tr: 'Sana birkaç sorum var.', words: ['I', 'have', 'some', 'questions', 'for', 'you', 'any'], answer: 'I have some questions for you' },
      { type: 'gap', sentence: 'There aren\'t ___ eggs in the fridge.', options: ['some', 'any'], answer: 1 },
      { type: 'gap', sentence: 'I\'d like ___ water, please.', options: ['some', 'any'], answer: 0, explanation_tr: 'Rica ederken "some".' },
      { type: 'mc', prompt: 'Hangisi doğru?', options: ['There is no bread.', 'There isn\'t no bread.', 'There is any bread.'], answer: 0 },
      { type: 'order', prompt_tr: 'Hiç sorun var mı?', words: ['Are', 'there', 'any', 'problems', 'some'], answer: 'Are there any problems' },
    ],
    quiz: [
      {
        id: 'q_sa_1', mode: 'order', prompt_tr: 'Kardeşin var mı?', answer_en: 'Do you have any brothers or sisters',
        words: ['Do', 'you', 'have', 'any', 'brothers', 'or', 'sisters', 'some'],
        error_variants: [
          { text: 'Do you have some brothers or sisters', tag: 'SOME_ANY', explanation_tr: 'Soruda "any": Do you have any…?' },
          { text: 'You have any brothers or sisters', tag: 'DO_Q', explanation_tr: 'Soru için başa "Do" gelmeli.' },
        ],
      },
      {
        id: 'q_sa_2', mode: 'free', prompt_tr: 'Buzdolabında hiç süt yok.', answer_en: 'There is no milk in the fridge', accepted: ['There isn\'t any milk in the fridge', 'There is not any milk in the fridge'],
        error_variants: [
          { text: 'There isn\'t no milk in the fridge', tag: 'SOME_ANY', explanation_tr: 'Çifte olumsuzluk olmaz: there is no / there isn\'t any.' },
          { text: 'There is any milk in the fridge', tag: 'SOME_ANY', explanation_tr: 'Olumlu cümlede "no" veya olumsuzda "any": there isn\'t any.' },
        ],
      },
      {
        id: 'q_sa_3', mode: 'order', prompt_tr: 'Sana birkaç tavsiyem var.', answer_en: 'I have some advice for you',
        words: ['I', 'have', 'some', 'advice', 'for', 'you', 'any'],
        error_variants: [
          { text: 'I have any advice for you', tag: 'SOME_ANY', explanation_tr: 'Olumlu cümlede "some" kullanılır.' },
        ],
      },
      {
        id: 'q_sa_4', mode: 'free', prompt_tr: 'Burada hiç kimse yok.', answer_en: 'There is nobody here', accepted: ['There isn\'t anybody here', 'There isn\'t anyone here', 'There is no one here', 'Nobody is here', 'No one is here', 'There is not anybody here', 'There is not anyone here'],
        error_variants: [
          { text: 'There isn\'t nobody here', tag: 'SOME_ANY', explanation_tr: 'Çifte olumsuzluk olmaz: there is nobody / there isn\'t anybody.' },
        ],
      },
      {
        id: 'q_sa_5', mode: 'order', prompt_tr: 'Şeker ister misin?', answer_en: 'Would you like some sugar',
        words: ['Would', 'you', 'like', 'some', 'sugar', 'any'],
        error_variants: [
          { text: 'Would you like any sugar', tag: 'SOME_ANY', explanation_tr: 'Teklif eden sorularda "some" kullanılır.' },
        ],
      },
      {
        id: 'q_sa_6', mode: 'free', prompt_tr: 'Hiç param yok.', answer_en: "I don't have any money", accepted: ['I do not have any money', 'I have no money', "I haven't got any money", 'I have not got any money'],
        error_variants: [
          { text: "I don't have no money", tag: 'SOME_ANY', explanation_tr: 'Çifte olumsuzluk olmaz: I don\'t have any / I have no money.' },
          { text: "I don't have some money", tag: 'SOME_ANY', explanation_tr: 'Olumsuzda "any": I don\'t have any money.' },
        ],
      },
      {
        id: 'q_sa_7', mode: 'order', prompt_tr: 'Masada birkaç elma var.', answer_en: 'There are some apples on the table',
        words: ['There', 'are', 'some', 'apples', 'on', 'the', 'table', 'any'],
        error_variants: [
          { text: 'There are any apples on the table', tag: 'SOME_ANY', explanation_tr: 'Olumlu cümlede "some".' },
          { text: 'There is some apples on the table', tag: 'THERE', explanation_tr: 'Çoğul isim: there are.' },
        ],
      },
      {
        id: 'q_sa_8', mode: 'free', prompt_tr: 'Odada hiç sandalye var mı?', answer_en: 'Are there any chairs in the room',
        error_variants: [
          { text: 'Is there any chairs in the room', tag: 'THERE', explanation_tr: 'Çoğul isim: Are there any chairs?' },
          { text: 'Are there any chair in the room', tag: 'PLURAL', explanation_tr: 'any + sayılabilen isim çoğul olur: any chairs.' },
        ],
      },
      {
        id: 'q_sa_9', mode: 'order', prompt_tr: 'Biraz çay ister misin?', answer_en: 'Would you like some tea',
        words: ['Would', 'you', 'like', 'some', 'tea', 'any'],
        error_variants: [
          { text: 'Would you like any tea', tag: 'SOME_ANY', explanation_tr: 'Teklif eden sorularda "some".' },
          { text: 'Would you like some teas', tag: 'PLURAL', explanation_tr: '"tea" burada sayılamaz, -s almaz.' },
        ],
      },
      {
        id: 'q_sa_10', mode: 'free', prompt_tr: 'Bugün hiç e-posta almadım.', answer_en: "I didn't get any emails today", accepted: ['I did not get any emails today', "I didn't receive any emails today", 'I did not receive any emails today', 'I got no emails today', 'I received no emails today', "I didn't get any email today", "Today I didn't get any emails"],
        error_variants: [
          { text: "I didn't get no emails today", tag: 'SOME_ANY', explanation_tr: 'Çifte olumsuzluk olmaz: didn\'t + any.' },
          { text: "I didn't get some emails today", tag: 'SOME_ANY', explanation_tr: 'Olumsuzda "any": didn\'t get any.' },
        ],
      },
      {
        id: 'q_sa_11', mode: 'order', prompt_tr: 'Bu sokakta hiç dükkan yok.', answer_en: 'There are no shops on this street', accepted: ["There aren't any shops on this street", 'There are no shops in this street'],
        words: ['There', 'are', 'no', 'shops', 'on', 'this', 'street', 'any'],
        error_variants: [
          { text: "There aren't no shops on this street", tag: 'SOME_ANY', explanation_tr: 'Çifte olumsuzluk olmaz: there are no / there aren\'t any.' },
          { text: 'There are any shops on this street', tag: 'SOME_ANY', explanation_tr: '"hiç yok" için olumlu fiil + no: There are no shops.' },
        ],
      },
      {
        id: 'q_sa_12', mode: 'free', prompt_tr: 'Biraz ekmek alabilir miyim?', answer_en: 'Can I have some bread', accepted: ['Could I have some bread', 'May I have some bread', 'Can I get some bread', 'Could I get some bread'],
        error_variants: [
          { text: 'Can I have any bread', tag: 'SOME_ANY', explanation_tr: 'Rica eden sorularda "some".' },
          { text: 'Can I have some breads', tag: 'PLURAL', explanation_tr: '"bread" sayılamaz, -s almaz.' },
        ],
      },
    ],
  },
  {
    id: 'l_much_many',
    skillId: 'much_many',
    title: 'much / many / a lot of',
    title_tr: 'much / many / a lot of',
    explanation_tr:
      'Miktar sorarken ve belirtirken isim sayılabilir mi değil mi önemli. Sayılabilen çoğul isimlerle "many" (many books, many friends), sayılamayan isimlerle "much" (much water, much time). Olumlu cümlede ikisi yerine günlük konuşmada genelde "a lot of" tercih edilir — hem sayılabilir hem sayılamaz isimle çalışır: "I have a lot of friends / a lot of time." "much" olumlu cümlede biraz resmi durur, soru ve olumsuzda daha doğaldır: "How much time do you have?" Türklerin hatası: sayılabilir isimle "much" kullanmak ("much books" ✗) veya tam tersi.',
    examples: [
      { en: 'How much time do you have?', tr: 'Ne kadar vaktin var?' },
      { en: 'She has many friends in Izmir.', tr: 'İzmir\'de çok arkadaşı var.' },
      { en: 'We don\'t have a lot of money.', tr: 'Çok paramız yok.' },
    ],
    words: [
      { en: 'time', tr: 'zaman, vakit', example: 'I don\'t have much time.', example_tr: 'Fazla vaktim yok.' },
      { en: 'friend', tr: 'arkadaş', example: 'She has many friends.', example_tr: 'Çok arkadaşı var.' },
      { en: 'information', tr: 'bilgi', example: 'There isn\'t much information.', example_tr: 'Fazla bilgi yok.' },
      { en: 'people', tr: 'insanlar', example: 'How many people came?', example_tr: 'Kaç kişi geldi?' },
      { en: 'water', tr: 'su', example: 'Drink a lot of water.', example_tr: 'Çok su iç.' },
    ],
    exercises: [
      { type: 'gap', sentence: 'How ___ sugar do you want?', options: ['many', 'much', 'a lot'], answer: 1 },
      { type: 'gap', sentence: 'How ___ brothers do you have?', options: ['many', 'much'], answer: 0 },
      { type: 'gap', sentence: 'I have ___ books.', options: ['much', 'many', 'a lot'], answer: 1 },
      { type: 'mc', prompt: 'Hangisi doğru?', options: ['much books', 'many books', 'much of books'], answer: 1, explanation_tr: 'Sayılabilen isim: many books.' },
      { type: 'match', pairs: [['kitaplar (sayılabilen)', 'many books'], ['zaman (sayılamayan)', 'much time'], ['para (olumlu cümle)', 'a lot of money'], ['kaç tane?', 'How many']] },
      { type: 'order', prompt_tr: 'Ne kadar vaktin var?', words: ['How', 'much', 'time', 'do', 'you', 'have', 'many'], answer: 'How much time do you have' },
      { type: 'gap', sentence: 'There aren\'t ___ people here today.', options: ['much', 'many'], answer: 1 },
      { type: 'gap', sentence: 'How ___ water do you drink every day?', options: ['many', 'much'], answer: 1 },
      { type: 'mc', prompt: 'Hangisi doğru?', options: ['I don\'t have many money.', 'I don\'t have much money.', 'I don\'t have a lot money.'], answer: 1, explanation_tr: '"money" sayılamaz: much. "a lot" ise "of" ister.' },
      { type: 'order', prompt_tr: 'Kaç çocuğun var?', words: ['How', 'many', 'children', 'do', 'you', 'have', 'much'], answer: 'How many children do you have' },
    ],
    quiz: [
      {
        id: 'q_mm_1', mode: 'order', prompt_tr: 'İzmir\'de çok arkadaşı var.', answer_en: 'She has many friends in Izmir',
        words: ['She', 'has', 'many', 'friends', 'in', 'Izmir', 'much'],
        error_variants: [
          { text: 'She has much friends in Izmir', tag: 'MUCH_MANY', explanation_tr: '"friends" sayılabilir: many friends.' },
        ],
      },
      {
        id: 'q_mm_2', mode: 'free', prompt_tr: 'Çok paramız yok.', answer_en: 'We don\'t have a lot of money', accepted: ['We don\'t have much money', 'We do not have a lot of money', 'We do not have much money'],
        error_variants: [
          { text: 'We don\'t have many money', tag: 'MUCH_MANY', explanation_tr: '"money" sayılamaz: much money.' },
        ],
      },
      {
        id: 'q_mm_3', mode: 'order', prompt_tr: 'Fazla vaktim yok.', answer_en: 'I don\'t have much time',
        words: ['I', 'don\'t', 'have', 'much', 'time', 'many'],
        error_variants: [
          { text: 'I don\'t have many time', tag: 'MUCH_MANY', explanation_tr: '"time" sayılamaz: much time.' },
        ],
      },
      {
        id: 'q_mm_4', mode: 'free', prompt_tr: 'Kaç kişi geldi?', answer_en: 'How many people came', accepted: ['How many people came?'],
        error_variants: [
          { text: 'How much people came', tag: 'MUCH_MANY', explanation_tr: '"people" sayılabilir: many people.' },
          { text: 'How many people comes', tag: 'PAST', explanation_tr: 'Geçmiş zaman: came.' },
        ],
      },
      {
        id: 'q_mm_5', mode: 'order', prompt_tr: 'Fazla bilgi yok.', answer_en: 'There isn\'t much information',
        words: ['There', 'isn\'t', 'much', 'information', 'many'],
        error_variants: [
          { text: 'There isn\'t many information', tag: 'MUCH_MANY', explanation_tr: '"information" sayılamaz: much information.' },
        ],
      },
      {
        id: 'q_mm_6', mode: 'free', prompt_tr: 'Ne kadar şeker istiyorsun?', answer_en: 'How much sugar do you want', accepted: ['How much sugar would you like'],
        error_variants: [
          { text: 'How many sugar do you want', tag: 'MUCH_MANY', explanation_tr: '"sugar" sayılamaz: How much sugar.' },
          { text: 'How much sugar you want', tag: 'DO_Q', explanation_tr: 'Soruda "do" gerekli: How much sugar do you want?' },
        ],
      },
      {
        id: 'q_mm_7', mode: 'order', prompt_tr: 'Bu şehirde çok turist var.', answer_en: 'There are a lot of tourists in this city', accepted: ['There are many tourists in this city'],
        words: ['There', 'are', 'a', 'lot', 'of', 'tourists', 'in', 'this', 'city', 'much'],
        error_variants: [
          { text: 'There are much tourists in this city', tag: 'MUCH_MANY', explanation_tr: '"tourists" sayılabilir: many / a lot of.' },
          { text: 'There is a lot of tourists in this city', tag: 'THERE', explanation_tr: 'Çoğul isim: there are.' },
        ],
      },
      {
        id: 'q_mm_8', mode: 'free', prompt_tr: 'Kaç dil konuşuyorsun?', answer_en: 'How many languages do you speak', accepted: ['How many languages can you speak'],
        error_variants: [
          { text: 'How much languages do you speak', tag: 'MUCH_MANY', explanation_tr: '"languages" sayılabilir: How many.' },
          { text: 'How many languages you speak', tag: 'DO_Q', explanation_tr: 'Soruda "do" gerekli: How many languages do you speak?' },
        ],
      },
      {
        id: 'q_mm_9', mode: 'order', prompt_tr: 'Bugün fazla işim yok.', answer_en: "I don't have much work today", accepted: ["I don't have a lot of work today", "Today I don't have much work", 'I do not have much work today'],
        words: ['I', "don't", 'have', 'much', 'work', 'today', 'many'],
        error_variants: [
          { text: "I don't have many work today", tag: 'MUCH_MANY', explanation_tr: '"work" (iş) sayılamaz: much work.' },
          { text: "I don't have much works today", tag: 'PLURAL', explanation_tr: '"work" (iş) sayılamaz, -s almaz.' },
        ],
      },
      {
        id: 'q_mm_10', mode: 'free', prompt_tr: 'Çok su iç.', answer_en: 'Drink a lot of water', accepted: ['Drink lots of water', 'Drink plenty of water'],
        error_variants: [
          { text: 'Drink many water', tag: 'MUCH_MANY', explanation_tr: '"water" sayılamaz; olumlu cümlede a lot of: Drink a lot of water.' },
          { text: 'Drink a lot water', tag: 'MUCH_MANY', explanation_tr: '"of" eksik: a lot of water.' },
        ],
      },
      {
        id: 'q_mm_11', mode: 'order', prompt_tr: 'Partide çok insan yoktu.', answer_en: "There weren't many people at the party", accepted: ['There were not many people at the party', "There weren't a lot of people at the party"],
        words: ['There', "weren't", 'many', 'people', 'at', 'the', 'party', 'much'],
        error_variants: [
          { text: "There weren't much people at the party", tag: 'MUCH_MANY', explanation_tr: '"people" sayılabilir: many people.' },
          { text: "There wasn't many people at the party", tag: 'THERE', explanation_tr: 'Çoğul isim: there weren\'t.' },
        ],
      },
      {
        id: 'q_mm_12', mode: 'free', prompt_tr: 'O (kadın) çok kitap okur.', answer_en: 'She reads a lot of books', accepted: ['She reads many books', 'She reads lots of books'],
        error_variants: [
          { text: 'She reads much books', tag: 'MUCH_MANY', explanation_tr: '"books" sayılabilir: many / a lot of books.' },
          { text: 'She reads a lot books', tag: 'MUCH_MANY', explanation_tr: '"of" eksik: a lot of books.' },
        ],
      },
    ],
  },
  {
    id: 'l_object_pronouns',
    skillId: 'object_pronouns',
    title: 'Object pronouns: me / him / her',
    title_tr: 'me / him / her / them — nesne zamirleri',
    explanation_tr:
      'Özne zamirleri (I, you, he, she, it, we, they) fiilden ÖNCE; nesne zamirleri (me, you, him, her, it, us, them) fiilden ya da edattan SONRA gelir. Türkçede zamir ek alarak değişir (ben → beni, bana); İngilizcede ise ayrı bir kelimeye dönüşür: "I" → "me". "Give me the book" (bana ver), "I love her" (onu seviyorum), "Listen to them" (onları dinle). Türklerin en sık hatası nesne konumunda özne zamirini kullanmak: "Give I the book" ✗, "Listen to they" ✗.',
    examples: [
      { en: 'Can you help me, please?', tr: 'Bana yardım edebilir misin lütfen?' },
      { en: 'I saw her at the market yesterday.', tr: 'Dün onu pazarda gördüm.' },
      { en: 'This gift is for them.', tr: 'Bu hediye onlar için.' },
    ],
    words: [
      { en: 'help', tr: 'yardım etmek', example: 'Can you help me?', example_tr: 'Bana yardım edebilir misin?' },
      { en: 'gift', tr: 'hediye', example: 'This gift is for her.', example_tr: 'Bu hediye onun için.' },
      { en: 'listen (to)', tr: 'dinlemek', example: 'Listen to him carefully.', example_tr: 'Onu dikkatlice dinle.' },
      { en: 'invite', tr: 'davet etmek', example: 'We invited them to the party.', example_tr: 'Onları partiye davet ettik.' },
      { en: 'tell', tr: 'söylemek', example: 'Tell us the truth.', example_tr: 'Bize gerçeği söyle.' },
    ],
    exercises: [
      { type: 'gap', sentence: 'Can you help ___?', options: ['I', 'me'], answer: 1 },
      { type: 'gap', sentence: 'I saw ___ at the market.', options: ['she', 'her'], answer: 1 },
      { type: 'gap', sentence: 'This gift is for ___.', options: ['they', 'them'], answer: 1 },
      { type: 'mc', prompt: 'Hangisi doğru?', options: ['Give I the book.', 'Give me the book.', 'Give my the book.'], answer: 1 },
      { type: 'match', pairs: [['I', 'me'], ['he', 'him'], ['she', 'her'], ['they', 'them']] },
      { type: 'order', prompt_tr: 'Onu dikkatlice dinle.', words: ['Listen', 'to', 'him', 'carefully', 'he'], answer: 'Listen to him carefully' },
      { type: 'gap', sentence: 'Please call ___ tomorrow.', options: ['we', 'us'], answer: 1 },
      { type: 'gap', sentence: 'Where is my phone? I can\'t find ___.', options: ['it', 'him', 'them'], answer: 0, explanation_tr: 'Nesne için "it".' },
      { type: 'mc', prompt: 'Hangisi doğru?', options: ['She loves he.', 'She loves him.', 'She loves his.'], answer: 1 },
      { type: 'order', prompt_tr: 'Onları partiye davet et.', words: ['Invite', 'them', 'to', 'the', 'party', 'they'], answer: 'Invite them to the party' },
    ],
    quiz: [
      {
        id: 'q_op_1', mode: 'order', prompt_tr: 'Bana yardım edebilir misin lütfen?', answer_en: 'Can you help me please',
        words: ['Can', 'you', 'help', 'me', 'please', 'I'],
        error_variants: [
          { text: 'Can you help I please', tag: 'OBJPRON', explanation_tr: 'Fiilden sonra nesne zamiri: help me.' },
        ],
      },
      {
        id: 'q_op_2', mode: 'free', prompt_tr: 'Dün onu (kadın) pazarda gördüm.', answer_en: 'I saw her at the market yesterday', accepted: ['Yesterday I saw her at the market', 'I saw her in the market yesterday', 'Yesterday I saw her in the market'],
        error_variants: [
          { text: 'I saw she at the market yesterday', tag: 'OBJPRON', explanation_tr: 'Fiilden sonra nesne zamiri: saw her.' },
          { text: 'I see her at the market yesterday', tag: 'PAST', explanation_tr: '"yesterday" → past simple: saw.' },
        ],
      },
      {
        id: 'q_op_3', mode: 'order', prompt_tr: 'Bu hediye onlar için.', answer_en: 'This gift is for them',
        words: ['This', 'gift', 'is', 'for', 'them', 'they'],
        error_variants: [
          { text: 'This gift is for they', tag: 'OBJPRON', explanation_tr: 'Edattan sonra nesne zamiri: for them.' },
        ],
      },
      {
        id: 'q_op_4', mode: 'free', prompt_tr: 'Onları partiye davet ettik.', answer_en: 'We invited them to the party',
        error_variants: [
          { text: 'We invited they to the party', tag: 'OBJPRON', explanation_tr: 'Fiilden sonra nesne zamiri: invited them.' },
          { text: 'We invite them to the party', tag: 'PAST', explanation_tr: 'Geçmiş zaman: invited.' },
        ],
      },
      {
        id: 'q_op_5', mode: 'order', prompt_tr: 'Bize gerçeği söyle.', answer_en: 'Tell us the truth',
        words: ['Tell', 'us', 'the', 'truth', 'we'],
        error_variants: [
          { text: 'Tell we the truth', tag: 'OBJPRON', explanation_tr: 'Fiilden sonra nesne zamiri: tell us.' },
        ],
      },
      {
        id: 'q_op_6', mode: 'free', prompt_tr: 'Onu (erkek) tanıyor musun?', answer_en: 'Do you know him',
        error_variants: [
          { text: 'Do you know he', tag: 'OBJPRON', explanation_tr: 'Fiilden sonra nesne zamiri: know him.' },
          { text: 'Do you know his', tag: 'OBJPRON', explanation_tr: '"his" iyeliktir (onun …). "Onu" = him.' },
        ],
      },
      {
        id: 'q_op_7', mode: 'order', prompt_tr: 'O (kadın) bize bir hediye verdi.', answer_en: 'She gave us a gift', accepted: ['She gave a gift to us'],
        words: ['She', 'gave', 'us', 'a', 'gift', 'we'],
        error_variants: [
          { text: 'She gave we a gift', tag: 'OBJPRON', explanation_tr: 'Fiilden sonra nesne zamiri: gave us.' },
          { text: 'She give us a gift', tag: 'PAST', explanation_tr: 'Geçmiş zaman: gave.' },
        ],
      },
      {
        id: 'q_op_8', mode: 'free', prompt_tr: 'Lütfen bana bir e-posta gönder.', answer_en: 'Please send me an email', accepted: ['Send me an email please', 'Please send an email to me', 'Please send me an e-mail', 'Send me an e-mail please'],
        error_variants: [
          { text: 'Please send I an email', tag: 'OBJPRON', explanation_tr: 'Fiilden sonra nesne zamiri: send me.' },
          { text: 'Please send me a email', tag: 'ART', explanation_tr: 'Sesli sesle başlıyor: an email.' },
        ],
      },
      {
        id: 'q_op_9', mode: 'order', prompt_tr: 'Onlarla konuşmak istiyorum.', answer_en: 'I want to talk to them', accepted: ['I want to talk with them'],
        words: ['I', 'want', 'to', 'talk', 'to', 'them', 'they'],
        error_variants: [
          { text: 'I want to talk to they', tag: 'OBJPRON', explanation_tr: 'Edattan sonra nesne zamiri: to them.' },
          { text: 'I want talk to them', tag: 'GERUND_INF', explanation_tr: 'want + to + fiil: want to talk.' },
        ],
      },
      {
        id: 'q_op_10', mode: 'free', prompt_tr: 'Anahtarlarımı bulamıyorum. Onları gördün mü?', answer_en: "I can't find my keys. Did you see them", accepted: ['I cannot find my keys. Did you see them', "I can't find my keys. Have you seen them", 'I cannot find my keys. Have you seen them'],
        error_variants: [
          { text: "I can't find my keys. Did you see they", tag: 'OBJPRON', explanation_tr: 'Fiilden sonra nesne zamiri: see them.' },
          { text: "I can't find my keys. Did you see it", tag: 'OBJPRON', explanation_tr: '"keys" çoğul: them.' },
        ],
      },
      {
        id: 'q_op_11', mode: 'order', prompt_tr: 'Bizi bekle!', answer_en: 'Wait for us',
        words: ['Wait', 'for', 'us', 'we'],
        error_variants: [
          { text: 'Wait for we', tag: 'OBJPRON', explanation_tr: 'Edattan sonra nesne zamiri: for us.' },
          { text: 'Wait us', tag: 'PREP', explanation_tr: '"beklemek" = wait for: Wait for us.' },
        ],
      },
      {
        id: 'q_op_12', mode: 'free', prompt_tr: 'Onu (kadın) seviyor musun?', answer_en: 'Do you love her', accepted: ['Do you like her'],
        error_variants: [
          { text: 'Do you love she', tag: 'OBJPRON', explanation_tr: 'Fiilden sonra nesne zamiri: love her.' },
          { text: 'Do you love him', tag: 'GEN', explanation_tr: 'Kadın için "her".' },
        ],
      },
    ],
  },
]
