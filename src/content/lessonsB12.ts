import type { Lesson } from './types'

export const LESSONS_B12: Lesson[] = [
  {
    id: 'l_past_perfect',
    skillId: 'past_perfect',
    title: 'Past perfect: had + V3',
    title_tr: 'had + V3 — geçmişte geçmiş',
    explanation_tr:
      'Geçmişte yaşanmış İKİ olaydan hangisinin daha önce olduğunu göstermek için kullanılır. Daha eski olan olay past perfect (had + V3) alır, daha yeni olan past simple kalır: "When I arrived, the film had already started" (önce film başladı, sonra ben geldim). Yapı herkes için aynıdır, kişiye göre değişmez: I/you/he/she/it/we/they + had + V3. Sık kullanılan sinyal kelimeler: already, just, before, after, by the time. Türkler bunu genelde atlayıp iki olayı da past simple ile anlatır, bu da sırayı belirsizleştirir: "When I arrived, the film started" cümlesi "geldiğimde film başladı" (aynı anda) demek, "had started" ise "zaten başlamıştı" (önceden) demektir — anlam farkı büyük.',
    examples: [
      { en: 'When I arrived, the film had already started.', tr: 'Vardığımda film zaten başlamıştı.' },
      { en: 'She had left before I called her.', tr: 'Ben onu aramadan önce o çoktan ayrılmıştı.' },
      { en: 'I had never seen snow before I visited Erzurum.', tr: 'Erzurum\'u ziyaret etmeden önce hiç kar görmemiştim.' },
    ],
    words: [
      { en: 'already', tr: 'zaten, çoktan', example: 'The train had already left.', example_tr: 'Tren zaten kalkmıştı.' },
      { en: 'before', tr: '-den önce', example: 'I had finished before midnight.', example_tr: 'Gece yarısından önce bitirmiştim.' },
      { en: 'by the time', tr: '-dığında (zaman ifadesi)', example: 'By the time he arrived, we had eaten.', example_tr: 'O geldiğinde biz yemiştik.' },
      { en: 'leave (left/left)', tr: 'ayrılmak', example: 'She had left the office.', example_tr: 'Ofisten ayrılmıştı.' },
      { en: 'realize', tr: 'fark etmek', example: 'I realized I had forgotten my keys.', example_tr: 'Anahtarlarımı unuttuğumu fark ettim.' },
    ],
    exercises: [
      { type: 'gap', sentence: 'When I arrived, the meeting ___ already started.', options: ['was', 'had'], answer: 1 },
      { type: 'gap', sentence: 'She ___ left before I got there.', options: ['has', 'had'], answer: 1 },
      { type: 'gap', sentence: 'By the time we arrived, they ___ eaten.', options: ['have', 'had'], answer: 1 },
      { type: 'mc', prompt: 'Hangi olay daha önce oldu? "When I arrived, the film had started."', options: ['Varışım daha önce', 'Film başlaması daha önce', 'Aynı anda'], answer: 1 },
      { type: 'match', pairs: [['go', 'gone'], ['eat', 'eaten'], ['see', 'seen'], ['leave', 'left']] },
      { type: 'order', prompt_tr: 'Tren zaten kalkmıştı.', words: ['had', 'The', 'train', 'already', 'left'], answer: 'The train had already left' },
      { type: 'gap', sentence: 'By ten o\'clock, everyone ___ home.', options: ['went', 'had gone', 'has gone'], answer: 1, explanation_tr: '"by ten o\'clock" = o saatten önce olmuştu → had gone.' },
      { type: 'gap', sentence: 'She ___ never flown before that trip.', options: ['has', 'had', 'was'], answer: 1, explanation_tr: 'Geçmişteki bir olaydan (o gezi) önce → had flown.' },
      { type: 'mc', prompt: 'Hangisi doğru?', options: ['When we got there, the shop had closed.', 'When we got there, the shop has closed.', 'When we got there, the shop had close.'], answer: 0, explanation_tr: 'had + 3. hal: had closed.' },
      { type: 'order', prompt_tr: 'O (kadın) geldiğinde ben zaten gitmiştim.', words: ['When', 'she', 'arrived,', 'I', 'had', 'already', 'gone', 'went'], answer: 'When she arrived, I had already gone' },
    ],
    quiz: [
      {
        id: 'q_ppast_1', mode: 'order', prompt_tr: 'Vardığımda film zaten başlamıştı.', answer_en: 'When I arrived, the film had already started',
        words: ['When', 'I', 'arrived,', 'the', 'film', 'had', 'already', 'started', 'has'],
        error_variants: [
          { text: 'When I arrived, the film already started', tag: 'PASTPERF', explanation_tr: 'Daha önce olan olay: had already started.' },
          { text: 'When I arrived, the film has already started', tag: 'PASTPERF', explanation_tr: 'Geçmişte iki olay karşılaştırılıyor: had, has değil.' },
        ],
      },
      {
        id: 'q_ppast_2', mode: 'free', prompt_tr: 'Ben onu aramadan önce o (kadın) çoktan ayrılmıştı.', answer_en: 'She had left before I called her', accepted: ['She had already left before I called her', 'She\'d left before I called her', 'She left before I called her'],
        error_variants: [
          { text: 'She had leave before I called her', tag: 'PASTPERF', explanation_tr: '"had" dan sonra 3. hal: left.' },
        ],
      },
      {
        id: 'q_ppast_3', mode: 'order', prompt_tr: 'O geldiğinde biz zaten yemiştik.', answer_en: 'By the time he arrived, we had eaten',
        words: ['By', 'the', 'time', 'he', 'arrived,', 'we', 'had', 'eaten', 'have'],
        error_variants: [
          { text: 'By the time he arrived, we have eaten', tag: 'PASTPERF', explanation_tr: 'Geçmişte bir olaydan önce: had eaten.' },
          { text: 'By the time he arrived, we ate', tag: 'PASTPERF', explanation_tr: 'Yemek daha önce bitmişti: had eaten.' },
        ],
      },
      {
        id: 'q_ppast_4', mode: 'free', prompt_tr: 'Erzurum\'u ziyaret etmeden önce hiç kar görmemiştim.', answer_en: 'I had never seen snow before I visited Erzurum', accepted: ['I\'d never seen snow before I visited Erzurum', 'I never saw snow before I visited Erzurum'],
        error_variants: [
          { text: 'I had never see snow before I visited Erzurum', tag: 'PASTPERF', explanation_tr: '"had" dan sonra 3. hal: seen.' },
        ],
      },
      {
        id: 'q_ppast_5', mode: 'order', prompt_tr: 'Anahtarlarımı unuttuğumu fark ettim.', answer_en: 'I realized I had forgotten my keys', accepted: ['I realized I forgot my keys'],
        words: ['realized', 'I', 'I', 'had', 'forgotten', 'my', 'keys', 'forgot'],
        error_variants: [
          { text: 'I realized I had forgot my keys', tag: 'PASTPERF', explanation_tr: '"had" dan sonra 3. hal: forgotten.' },
        ],
      },
      {
        id: 'q_ppast_6', mode: 'free', prompt_tr: 'O (erkek) daha önce hiç uçağa binmemişti.', answer_en: 'He had never been on a plane before', accepted: ["He'd never been on a plane before", 'He had never been on a plane', "He'd never been on a plane", 'He had never flown before', "He'd never flown before"],
        error_variants: [
          { text: 'He has never been on a plane before', tag: 'PASTPERF', explanation_tr: '"binmemişti" geçmişteki bir andan önceyi anlatır: had never been.' },
          { text: 'He had never be on a plane before', tag: 'PASTPERF', explanation_tr: '"had" dan sonra 3. hal: been.' },
        ],
      },
      {
        id: 'q_ppast_7', mode: 'order', prompt_tr: 'Oraya vardığımızda dükkân kapanmıştı.', answer_en: 'When we got there, the shop had closed',
        words: ['When', 'we', 'got', 'there,', 'the', 'shop', 'had', 'closed', 'has'],
        error_variants: [
          { text: 'When we got there, the shop has closed', tag: 'PASTPERF', explanation_tr: 'Geçmişte iki olay: daha önce olan had closed.' },
          { text: 'When we got there, the shop closed', tag: 'PASTPERF', explanation_tr: 'Bu "vardığımızda kapandı" (aynı anda) demek; önceden kapanmıştı: had closed.' },
        ],
      },
      {
        id: 'q_ppast_8', mode: 'free', prompt_tr: 'Ödevimi bitirdikten sonra televizyon izledim.', answer_en: 'After I had finished my homework, I watched TV', accepted: ["After I'd finished my homework, I watched TV", 'After I finished my homework, I watched TV', 'I watched TV after I had finished my homework', 'I watched TV after I finished my homework', "I watched TV after I'd finished my homework", 'After finishing my homework, I watched TV', 'After I had finished my homework, I watched television', 'After I finished my homework, I watched television'],
        error_variants: [
          { text: 'After I had finish my homework, I watched TV', tag: 'PASTPERF', explanation_tr: '"had" dan sonra 3. hal: finished.' },
          { text: 'After I have finished my homework, I watched TV', tag: 'PASTPERF', explanation_tr: 'Geçmişte daha önce olan olay: had finished.' },
        ],
      },
      {
        id: 'q_ppast_9', mode: 'order', prompt_tr: 'Kız kardeşim akşam yemeğini zaten pişirmişti.', answer_en: 'My sister had already cooked dinner',
        words: ['My', 'sister', 'had', 'already', 'cooked', 'dinner', 'has', 'cook'],
        error_variants: [
          { text: 'My sister has already cooked dinner', tag: 'PASTPERF', explanation_tr: '"pişirmişti" geçmişte bir andan önce: had cooked.' },
          { text: 'My sister had already cook dinner', tag: 'PASTPERF', explanation_tr: '"had" dan sonra 3. hal: cooked.' },
        ],
      },
      {
        id: 'q_ppast_10', mode: 'free', prompt_tr: 'Eve geldiğimde herkes uyumuştu.', answer_en: 'When I got home, everyone had fallen asleep', accepted: ['When I came home, everyone had fallen asleep', 'When I got home, everyone had gone to sleep', 'When I came home, everyone had gone to sleep', 'When I got home, everybody had fallen asleep', 'When I got home, everyone had already fallen asleep', 'When I arrived home, everyone had fallen asleep', 'When I got home, everyone had gone to bed', 'When I came home, everyone had gone to bed'],
        error_variants: [
          { text: 'When I got home, everyone had fell asleep', tag: 'PASTPERF', explanation_tr: '"had" dan sonra 3. hal: fallen.' },
          { text: 'When I got home, everyone has fallen asleep', tag: 'PASTPERF', explanation_tr: 'Geçmişte bir andan önce: had fallen.' },
        ],
      },
      {
        id: 'q_ppast_11', mode: 'order', prompt_tr: 'Onu (erkek) daha önce hiç görmemiştim.', answer_en: 'I had never seen him before',
        words: ['I', 'had', 'never', 'seen', 'him', 'before', 'saw'],
        error_variants: [
          { text: 'I had never saw him before', tag: 'PASTPERF', explanation_tr: '"had" dan sonra 3. hal: seen.' },
        ],
      },
      {
        id: 'q_ppast_12', mode: 'free', prompt_tr: 'Tren kalkmadan önce istasyona varmıştık.', answer_en: 'We had arrived at the station before the train left', accepted: ["We'd arrived at the station before the train left", 'We arrived at the station before the train left', 'We had reached the station before the train left', "We'd reached the station before the train left", 'We had got to the station before the train left', 'We had gotten to the station before the train left'],
        error_variants: [
          { text: 'We had arrived to the station before the train left', tag: 'PREP', explanation_tr: 'arrive + at (bir yere varmak): arrived at the station.' },
          { text: 'We had arrive at the station before the train left', tag: 'PASTPERF', explanation_tr: '"had" dan sonra 3. hal: arrived.' },
        ],
      },
    ],
  },
  {
    id: 'l_passive_voice',
    skillId: 'passive_voice',
    title: 'Passive voice: is made / was built',
    title_tr: 'Edilgen çatı: is made / was built',
    explanation_tr:
      'Eylemi KİM yaptığından çok, eylemin NEYE olduğu önemliyse edilgen çatı kullanılır. Yapı: be (zamanına göre) + V3. Geniş zaman: "Coffee is grown in Brazil." Geçmiş zaman: "This house was built in 1990." Fail (yapan kişi) belirtmek istersen "by" ile ekle: "The book was written by Orhan Pamuk." Türkçede edilgen çatı fiile "-il/-in" eki ekleyerek yapılır (yapıldı → yapılmıştır), İngilizcede ise "be" fiili zorunlu ve atlanamaz. En sık hata "be" fiilini unutmak: "This car made in Germany" ✗ → "This car IS made in Germany" ✓. Edilgen çatı özellikle haberlerde, bilimsel metinlerde ve failin önemsiz/bilinmez olduğu durumlarda sık kullanılır.',
    examples: [
      { en: 'This phone was made in China.', tr: 'Bu telefon Çin\'de üretildi.' },
      { en: 'English is spoken in many countries.', tr: 'İngilizce birçok ülkede konuşulur.' },
      { en: 'The Mona Lisa was painted by Leonardo da Vinci.', tr: 'Mona Lisa, Leonardo da Vinci tarafından yapıldı.' },
    ],
    words: [
      { en: 'built', tr: 'inşa edildi (build 3. hal)', example: 'The bridge was built in 2005.', example_tr: 'Köprü 2005\'te inşa edildi.' },
      { en: 'produced', tr: 'üretildi', example: 'These cars are produced in Bursa.', example_tr: 'Bu arabalar Bursa\'da üretiliyor.' },
      { en: 'discovered', tr: 'keşfedildi', example: 'America was discovered in 1492.', example_tr: 'Amerika 1492\'de keşfedildi.' },
      { en: 'invented', tr: 'icat edildi', example: 'The telephone was invented by Bell.', example_tr: 'Telefon Bell tarafından icat edildi.' },
      { en: 'spoken', tr: 'konuşulur (speak 3. hal)', example: 'Spanish is spoken in Mexico.', example_tr: 'İspanyolca Meksika\'da konuşulur.' },
    ],
    exercises: [
      { type: 'gap', sentence: 'This car ___ made in Germany.', options: ['is', 'has', '—'], answer: 0 },
      { type: 'gap', sentence: 'The bridge ___ built in 2005.', options: ['is', 'was'], answer: 1, explanation_tr: '2005 geçmiş → was built.' },
      { type: 'gap', sentence: 'English ___ spoken all over the world.', options: ['is', 'are'], answer: 0, explanation_tr: 'English tekil → is.' },
      { type: 'mc', prompt: 'Hangisi doğru?', options: ['This book wrote by Orhan Pamuk.', 'This book was written by Orhan Pamuk.', 'This book was write by Orhan Pamuk.'], answer: 1 },
      { type: 'match', pairs: [['build', 'built'], ['write', 'written'], ['make', 'made'], ['discover', 'discovered']] },
      { type: 'order', prompt_tr: 'Bu telefon Çin\'de üretildi.', words: ['was', 'This', 'phone', 'made', 'in', 'China'], answer: 'This phone was made in China' },
      { type: 'gap', sentence: 'Football ___ played all over the world.', options: ['is', 'are', 'be'], answer: 0, explanation_tr: 'Football tekil → is played.' },
      { type: 'gap', sentence: 'These cars ___ produced in Bursa.', options: ['is', 'are'], answer: 1, explanation_tr: 'Çoğul özne → are produced.' },
      { type: 'gap', sentence: 'The window ___ broken yesterday.', options: ['is', 'was', 'were'], answer: 1, explanation_tr: '"yesterday" + tekil özne → was broken.' },
      { type: 'mc', prompt: '"Someone stole my bike." edilgen çatıda nasıl olur?', options: ['My bike stole.', 'My bike was stolen.', 'My bike is stole.'], answer: 1, explanation_tr: 'Geçmiş: was + 3. hal (stolen).' },
    ],
    quiz: [
      {
        id: 'q_pv_1', mode: 'order', prompt_tr: 'Bu telefon Çin\'de üretildi.', answer_en: 'This phone was made in China', accepted: ['This phone is made in China'],
        words: ['was', 'This', 'phone', 'made', 'in', 'China', 'is'],
        error_variants: [
          { text: 'This phone made in China', tag: 'PASSIVE', explanation_tr: '"be" fiili eksik: was made.' },
        ],
      },
      {
        id: 'q_pv_2', mode: 'free', prompt_tr: 'İngilizce birçok ülkede konuşulur.', answer_en: 'English is spoken in many countries', accepted: ['English is spoken in a lot of countries'],
        error_variants: [
          { text: 'English speaks in many countries', tag: 'PASSIVE', explanation_tr: 'Fail belirsiz, eyleme odak → is spoken.' },
          { text: 'English is speak in many countries', tag: 'PASSIVE', explanation_tr: '"be" den sonra 3. hal: spoken.' },
        ],
      },
      {
        id: 'q_pv_3', mode: 'order', prompt_tr: 'Mona Lisa, Leonardo da Vinci tarafından yapıldı.', answer_en: 'The Mona Lisa was painted by Leonardo da Vinci',
        words: ['The', 'Mona', 'Lisa', 'was', 'painted', 'by', 'Leonardo', 'da', 'Vinci', 'from'],
        error_variants: [
          { text: 'The Mona Lisa was painted from Leonardo da Vinci', tag: 'PASSIVE', explanation_tr: 'Fail belirtmek için "by": painted by.' },
          { text: 'The Mona Lisa painted by Leonardo da Vinci', tag: 'PASSIVE', explanation_tr: '"be" eksik: was painted.' },
        ],
      },
      {
        id: 'q_pv_4', mode: 'free', prompt_tr: 'Amerika 1492\'de keşfedildi.', answer_en: 'America was discovered in 1492',
        error_variants: [
          { text: 'America discovered in 1492', tag: 'PASSIVE', explanation_tr: '"be" eksik: was discovered.' },
          { text: 'America was discover in 1492', tag: 'PASSIVE', explanation_tr: '"was" dan sonra 3. hal: discovered.' },
        ],
      },
      {
        id: 'q_pv_5', mode: 'order', prompt_tr: 'Bu şarkılar yüzlerce dile çevrildi.', answer_en: 'These songs were translated into hundreds of languages',
        words: ['These', 'songs', 'were', 'translated', 'into', 'hundreds', 'of', 'languages', 'was'],
        error_variants: [
          { text: 'These songs was translated into hundreds of languages', tag: 'PASSIVE', explanation_tr: 'Çoğul özne → were.' },
          { text: 'These songs translated into hundreds of languages', tag: 'PASSIVE', explanation_tr: '"be" eksik: were translated.' },
        ],
      },
      {
        id: 'q_pv_6', mode: 'free', prompt_tr: 'Bu ev 1990\'da inşa edildi.', answer_en: 'This house was built in 1990', accepted: ['The house was built in 1990'],
        error_variants: [
          { text: 'This house built in 1990', tag: 'PASSIVE', explanation_tr: '"be" fiili eksik: was built.' },
          { text: 'This house was build in 1990', tag: 'PASSIVE', explanation_tr: '"was" dan sonra 3. hal: built.' },
        ],
      },
      {
        id: 'q_pv_7', mode: 'order', prompt_tr: 'Kahve Brezilya\'da yetiştirilir.', answer_en: 'Coffee is grown in Brazil',
        words: ['Coffee', 'is', 'grown', 'in', 'Brazil', 'grows', 'are'],
        error_variants: [
          { text: 'Coffee is grow in Brazil', tag: 'PASSIVE', explanation_tr: '"is" den sonra 3. hal: grown.' },
          { text: 'Coffee grown in Brazil', tag: 'PASSIVE', explanation_tr: '"be" fiili eksik: is grown.' },
        ],
      },
      {
        id: 'q_pv_8', mode: 'free', prompt_tr: 'Bisikletim dün çalındı.', answer_en: 'My bike was stolen yesterday', accepted: ['My bicycle was stolen yesterday', 'Yesterday my bike was stolen', 'Yesterday my bicycle was stolen'],
        error_variants: [
          { text: 'My bike stole yesterday', tag: 'PASSIVE', explanation_tr: 'Bisiklet çalmaz, çalınır: was stolen.' },
          { text: 'My bike was stole yesterday', tag: 'PASSIVE', explanation_tr: '"was" dan sonra 3. hal: stolen.' },
        ],
      },
      {
        id: 'q_pv_9', mode: 'order', prompt_tr: 'Telefon Bell tarafından icat edildi.', answer_en: 'The telephone was invented by Bell',
        words: ['The', 'telephone', 'was', 'invented', 'by', 'Bell', 'from'],
        error_variants: [
          { text: 'The telephone was invented from Bell', tag: 'PASSIVE', explanation_tr: 'Fail "by" ile belirtilir: invented by Bell.' },
          { text: 'The telephone invented by Bell', tag: 'PASSIVE', explanation_tr: '"be" fiili eksik: was invented.' },
        ],
      },
      {
        id: 'q_pv_10', mode: 'free', prompt_tr: 'Bu arabalar Almanya\'da üretiliyor.', answer_en: 'These cars are made in Germany', accepted: ['These cars are produced in Germany', 'These cars are manufactured in Germany', 'These cars are being made in Germany', 'These cars are being produced in Germany'],
        error_variants: [
          { text: 'These cars is made in Germany', tag: 'PASSIVE', explanation_tr: 'Çoğul özne → are made.' },
          { text: 'These cars make in Germany', tag: 'PASSIVE', explanation_tr: 'Arabalar üretmez, üretilir: are made.' },
        ],
      },
      {
        id: 'q_pv_11', mode: 'order', prompt_tr: 'Mektuplar dün gönderildi.', answer_en: 'The letters were sent yesterday',
        words: ['The', 'letters', 'were', 'sent', 'yesterday', 'was', 'send'],
        error_variants: [
          { text: 'The letters was sent yesterday', tag: 'PASSIVE', explanation_tr: 'Çoğul özne → were sent.' },
          { text: 'The letters were send yesterday', tag: 'PASSIVE', explanation_tr: '"were" den sonra 3. hal: sent.' },
        ],
      },
      {
        id: 'q_pv_12', mode: 'free', prompt_tr: 'İspanyolca Meksika\'da konuşulur.', answer_en: 'Spanish is spoken in Mexico',
        error_variants: [
          { text: 'Spanish is speaking in Mexico', tag: 'PASSIVE', explanation_tr: 'Edilgen: be + 3. hal: is spoken.' },
          { text: 'Spanish speaks in Mexico', tag: 'PASSIVE', explanation_tr: 'Dil konuşmaz, konuşulur: is spoken.' },
        ],
      },
    ],
  },
  {
    id: 'l_relative_clauses',
    skillId: 'relative_clauses',
    title: 'Relative clauses: who / which / that / whose',
    title_tr: 'who / which / that / whose',
    explanation_tr:
      'İlgi cümlecikleri iki cümleyi tek cümlede birleştirmeyi sağlar, Türkçedeki "-an/-en" sıfat fiil ekinin karşılığıdır. İnsanlar için "who": "the man WHO called you" (seni arayan adam). Nesneler ve hayvanlar için "which" veya "that": "the book WHICH/THAT I read" (okuduğum kitap). İyelik belirtmek için "whose": "the woman WHOSE car is red" (arabası kırmızı olan kadın). Türkçe "-an" ekiyle fiili isimden ÖNCE kullanırken (gelen adam), İngilizce ilgi zamirini isimden SONRA kullanır ve araya cümle sıkıştırır (the man who came). Bu kelime sırası farkı Türklerin en çok zorlandığı noktadır. "that" konuşma dilinde hem insan hem nesne için who/which yerine kullanılabilir.',
    examples: [
      { en: 'The man who called you is my brother.', tr: 'Seni arayan adam kardeşim.' },
      { en: 'This is the book which I told you about.', tr: 'Bu, sana bahsettiğim kitap.' },
      { en: 'That\'s the woman whose car is red.', tr: 'Arabası kırmızı olan kadın o.' },
    ],
    words: [
      { en: 'who', tr: 'ki o (insan)', example: 'The girl who sings well is my cousin.', example_tr: 'İyi şarkı söyleyen kız kuzenim.' },
      { en: 'which', tr: 'ki o (nesne)', example: 'The car which I bought is fast.', example_tr: 'Aldığım araba hızlı.' },
      { en: 'whose', tr: 'ki onun (iyelik)', example: 'The man whose dog barks is my neighbor.', example_tr: 'Köpeği havlayan adam komşum.' },
      { en: 'that', tr: 'ki o (insan/nesne, konuşma dili)', example: 'The pen that I lost was expensive.', example_tr: 'Kaybettiğim kalem pahalıydı.' },
      { en: 'neighbor', tr: 'komşu', example: 'My neighbor, whose son is a doctor, is kind.', example_tr: 'Oğlu doktor olan komşum nazik.' },
    ],
    exercises: [
      { type: 'gap', sentence: 'The man ___ called you is my brother.', options: ['who', 'which'], answer: 0, explanation_tr: 'İnsan → who.' },
      { type: 'gap', sentence: 'This is the book ___ I told you about.', options: ['who', 'which'], answer: 1, explanation_tr: 'Nesne → which.' },
      { type: 'gap', sentence: 'That\'s the woman ___ car is red.', options: ['who', 'whose'], answer: 1, explanation_tr: 'İyelik → whose.' },
      { type: 'mc', prompt: 'Hangisi doğru?', options: ['The man called you is my brother.', 'The man who called you is my brother.', 'The man which called you is my brother.'], answer: 1 },
      { type: 'match', pairs: [['the man ___ called', 'who'], ['the car ___ I bought', 'which'], ['the woman ___ car is red', 'whose'], ['insan veya nesne (konuşma dili)', 'that']] },
      { type: 'order', prompt_tr: 'Seni arayan adam kardeşim.', words: ['The', 'man', 'who', 'called', 'you', 'is', 'my', 'brother'], answer: 'The man who called you is my brother' },
      { type: 'gap', sentence: 'I have a friend ___ lives in Canada.', options: ['who', 'which', 'whose'], answer: 0, explanation_tr: 'İnsan → who.' },
      { type: 'gap', sentence: 'The cake ___ you made was delicious.', options: ['who', 'which', 'whose'], answer: 1, explanation_tr: 'Nesne → which.' },
      { type: 'gap', sentence: 'He is the student ___ father is a pilot.', options: ['who', 'which', 'whose'], answer: 2, explanation_tr: 'İyelik (babası) → whose.' },
      { type: 'order', prompt_tr: 'Aldığım araba hızlı.', words: ['The', 'car', 'which', 'I', 'bought', 'is', 'fast', 'who'], answer: 'The car which I bought is fast' },
    ],
    quiz: [
      {
        id: 'q_rel_1', mode: 'order', prompt_tr: 'Seni arayan adam kardeşim.', answer_en: 'The man who called you is my brother',
        words: ['The', 'man', 'who', 'called', 'you', 'is', 'my', 'brother', 'which'],
        error_variants: [
          { text: 'The man which called you is my brother', tag: 'REL', explanation_tr: 'İnsan için "who": the man who called.' },
          { text: 'The man called you is my brother', tag: 'REL', explanation_tr: 'İlgi zamiri eksik: who called.' },
        ],
      },
      {
        id: 'q_rel_2', mode: 'free', prompt_tr: 'Bu, sana bahsettiğim kitap.', answer_en: 'This is the book which I told you about',
        accepted: ['This is the book that I told you about', 'This is the book I told you about'],
        error_variants: [
          { text: 'This is the book who I told you about', tag: 'REL', explanation_tr: 'Nesne için "which/that": the book which.' },
          { text: 'This is the book I told you about which', tag: 'WORD_ORDER', explanation_tr: 'İlgi zamiri isme hemen bitişik gelir: the book which I told you about.' },
        ],
      },
      {
        id: 'q_rel_3', mode: 'order', prompt_tr: 'Arabası kırmızı olan kadın o.', answer_en: 'That\'s the woman whose car is red',
        words: ['That\'s', 'the', 'woman', 'whose', 'car', 'is', 'red', 'who'],
        error_variants: [
          { text: 'That\'s the woman who car is red', tag: 'REL', explanation_tr: 'İyelik için "whose": whose car.' },
          { text: 'That\'s the woman whose car red', tag: 'TOBE', explanation_tr: '"is" eksik: whose car is red.' },
        ],
      },
      {
        id: 'q_rel_4', mode: 'free', prompt_tr: 'Köpeği havlayan adam komşum.', answer_en: 'The man whose dog barks is my neighbor', accepted: ['The man whose dog barks is my neighbour', 'The man whose dog is barking is my neighbor', 'The man whose dog is barking is my neighbour'],
        error_variants: [
          { text: 'The man who dog barks is my neighbor', tag: 'REL', explanation_tr: 'İyelik için "whose": whose dog.' },
          { text: 'The man whose dog bark is my neighbor', tag: 'SVAGR', explanation_tr: 'dog (he/she/it) → barks.' },
        ],
      },
      {
        id: 'q_rel_5', mode: 'order', prompt_tr: 'İyi şarkı söyleyen kız kuzenim.', answer_en: 'The girl who sings well is my cousin',
        words: ['The', 'girl', 'who', 'sings', 'well', 'is', 'my', 'cousin', 'which'],
        error_variants: [
          { text: 'The girl which sings well is my cousin', tag: 'REL', explanation_tr: 'İnsan için "who": the girl who.' },
          { text: 'The girl who sing well is my cousin', tag: 'SVAGR', explanation_tr: 'the girl (she) → sings.' },
        ],
      },
      {
        id: 'q_rel_6', mode: 'free', prompt_tr: 'Kanada\'da yaşayan bir arkadaşım var.', answer_en: 'I have a friend who lives in Canada', accepted: ['I have a friend that lives in Canada', "I've got a friend who lives in Canada", "I've got a friend that lives in Canada", 'I have got a friend who lives in Canada'],
        error_variants: [
          { text: 'I have a friend which lives in Canada', tag: 'REL', explanation_tr: 'İnsan için "who": a friend who.' },
          { text: 'I have a friend who live in Canada', tag: 'SVAGR', explanation_tr: 'a friend (he/she) → lives.' },
        ],
      },
      {
        id: 'q_rel_7', mode: 'order', prompt_tr: 'Kaybettiğim kalem pahalıydı.', answer_en: 'The pen that I lost was expensive',
        words: ['The', 'pen', 'that', 'I', 'lost', 'was', 'expensive', 'who', 'it'],
        error_variants: [
          { text: 'The pen who I lost was expensive', tag: 'REL', explanation_tr: 'Nesne için "that/which": the pen that.' },
          { text: 'The pen that I lost it was expensive', tag: 'REL', explanation_tr: 'İlgi zamiri nesnenin yerini tutar; ayrıca "it" eklenmez.' },
        ],
      },
      {
        id: 'q_rel_8', mode: 'free', prompt_tr: 'Babası pilot olan öğrenci Ali.', answer_en: 'The student whose father is a pilot is Ali', accepted: ['Ali is the student whose father is a pilot'],
        error_variants: [
          { text: 'The student who father is a pilot is Ali', tag: 'REL', explanation_tr: 'İyelik için "whose": whose father.' },
          { text: 'The student whose father is pilot is Ali', tag: 'ART', explanation_tr: 'Meslekten önce "a": a pilot.' },
        ],
      },
      {
        id: 'q_rel_9', mode: 'order', prompt_tr: 'Bu, dün aldığım elbise.', answer_en: 'This is the dress which I bought yesterday',
        words: ['This', 'is', 'the', 'dress', 'which', 'I', 'bought', 'yesterday', 'who'],
        error_variants: [
          { text: 'This is the dress who I bought yesterday', tag: 'REL', explanation_tr: 'Nesne için "which": the dress which.' },
          { text: 'This is the dress I bought yesterday which', tag: 'WORD_ORDER', explanation_tr: 'İlgi zamiri isme hemen bitişik gelir: the dress which I bought.' },
        ],
      },
      {
        id: 'q_rel_10', mode: 'free', prompt_tr: 'Pizza yapan restoran kapalı.', answer_en: 'The restaurant which makes pizza is closed', accepted: ['The restaurant that makes pizza is closed', 'The restaurant which makes pizzas is closed', 'The restaurant that makes pizzas is closed'],
        error_variants: [
          { text: 'The restaurant who makes pizza is closed', tag: 'REL', explanation_tr: 'Yer/nesne için "which/that": the restaurant which.' },
          { text: 'The restaurant makes pizza is closed', tag: 'REL', explanation_tr: 'İlgi zamiri eksik: which makes.' },
        ],
      },
      {
        id: 'q_rel_11', mode: 'order', prompt_tr: 'Bana yardım eden kadın bir doktordu.', answer_en: 'The woman who helped me was a doctor',
        words: ['The', 'woman', 'who', 'helped', 'me', 'was', 'a', 'doctor', 'which'],
        error_variants: [
          { text: 'The woman which helped me was a doctor', tag: 'REL', explanation_tr: 'İnsan için "who": the woman who.' },
          { text: 'The woman who helped me was doctor', tag: 'ART', explanation_tr: 'Meslekten önce "a": a doctor.' },
        ],
      },
      {
        id: 'q_rel_12', mode: 'free', prompt_tr: 'Arabası çalınan adam polisi aradı.', answer_en: 'The man whose car was stolen called the police', accepted: ['The man whose car had been stolen called the police', 'The man whose car got stolen called the police'],
        error_variants: [
          { text: 'The man who car was stolen called the police', tag: 'REL', explanation_tr: 'İyelik için "whose": whose car.' },
          { text: 'The man whose car stolen called the police', tag: 'PASSIVE', explanation_tr: 'Edilgen çatıda "be" gerekli: was stolen.' },
        ],
      },
    ],
  },
  {
    id: 'l_second_conditional',
    skillId: 'second_conditional',
    title: 'Second conditional: if + past, would',
    title_tr: 'if + past, would — ikinci koşul',
    explanation_tr:
      'Şu anki gerçekliğe AYKIRI, hayali veya gerçekleşmesi çok zayıf ihtimal olan durumları anlatır: "If I had more money, I would travel the world" (ama param yok, hayali durum). Yapı: If + past simple, ... would + fiil(yalın). Dikkat: burada "past simple" geçmişte olduğu anlamına gelmez, sadece "gerçek dışı" olduğunu gösteren bir biçimdir — cümle ŞİMDİKİ zamanı anlatır. En sık ve en kritik Türk hatası "if" cümlesinde "would" kullanmaktır: "If I would have money..." ✗ KESİNLİKLE YANLIŞ. If cümlesinde SADECE past simple olur, "would" sadece sonuç cümlesinde (ana cümlede) kullanılır. "to be" fiili ikinci koşulda genelde "were" olur (was yerine), özellikle resmi İngilizcede: "If I were you, I would apologize."',
    examples: [
      { en: 'If I had more time, I would learn Spanish.', tr: 'Daha fazla zamanım olsa İspanyolca öğrenirdim.' },
      { en: 'If I were you, I would apologize.', tr: 'Senin yerinde olsam özür dilerdim.' },
      { en: 'What would you do if you won the lottery?', tr: 'Piyangoyu kazansan ne yapardın?' },
    ],
    words: [
      { en: 'if I were you', tr: 'senin yerinde olsam', example: 'If I were you, I would rest.', example_tr: 'Senin yerinde olsam dinlenirdim.' },
      { en: 'would', tr: '-ardı, -ecekti (hayali sonuç)', example: 'I would help you.', example_tr: 'Sana yardım ederdim.' },
      { en: 'lottery', tr: 'piyango', example: 'If I won the lottery, I would travel.', example_tr: 'Piyangoyu kazansam seyahat ederdim.' },
      { en: 'apologize', tr: 'özür dilemek', example: 'I would apologize immediately.', example_tr: 'Hemen özür dilerdim.' },
      { en: 'imagine', tr: 'hayal etmek', example: 'Imagine if you could fly.', example_tr: 'Uçabildiğini hayal et.' },
    ],
    exercises: [
      { type: 'gap', sentence: 'If I ___ more time, I would learn Spanish.', options: ['have', 'had', 'will have'], answer: 1 },
      { type: 'gap', sentence: 'If I were you, I ___ apologize.', options: ['would', 'will'], answer: 0 },
      { type: 'gap', sentence: 'What would you do if you ___ the lottery?', options: ['win', 'won'], answer: 1 },
      { type: 'mc', prompt: 'Hangisi doğru?', options: ['If I would have money, I would travel.', 'If I had money, I would travel.', 'If I have money, I would travel.'], answer: 1, explanation_tr: 'If cümlesinde "would" olmaz, "had" gelir.' },
      { type: 'match', pairs: [['if I were you', 'senin yerinde olsam'], ['I would help', 'yardım ederdim'], ['lottery', 'piyango'], ['imagine', 'hayal etmek']] },
      { type: 'order', prompt_tr: 'Daha fazla param olsa seyahat ederdim.', words: ['If', 'I', 'had', 'more', 'money,', 'I', 'would', 'travel'], answer: 'If I had more money, I would travel' },
      { type: 'gap', sentence: 'If she ___ the answer, she would tell us.', options: ['knows', 'knew', 'would know'], answer: 1, explanation_tr: 'If cümlesinde past simple: knew.' },
      { type: 'gap', sentence: 'I would buy a house if I ___ rich.', options: ['am', 'were', 'will be'], answer: 1, explanation_tr: 'Hayali durum: if I were.' },
      { type: 'gap', sentence: 'If we lived by the sea, we ___ swim every day.', options: ['will', 'would', 'are'], answer: 1, explanation_tr: 'Hayali sonuç: would swim.' },
      { type: 'order', prompt_tr: 'Senin yerinde olsam dinlenirdim.', words: ['If', 'I', 'were', 'you,', 'I', 'would', 'rest', 'will'], answer: 'If I were you, I would rest' },
    ],
    quiz: [
      {
        id: 'q_sc_1', mode: 'order', prompt_tr: 'Daha fazla zamanım olsa İspanyolca öğrenirdim.', answer_en: 'If I had more time, I would learn Spanish',
        words: ['If', 'I', 'had', 'more', 'time,', 'I', 'would', 'learn', 'Spanish', 'would have'],
        error_variants: [
          { text: 'If I would have more time, I would learn Spanish', tag: 'COND2', explanation_tr: 'If cümlesinde "would" olmaz: If I had more time.' },
          { text: 'If I have more time, I would learn Spanish', tag: 'COND2', explanation_tr: 'Hayali durum için past simple: If I had.' },
        ],
      },
      {
        id: 'q_sc_2', mode: 'free', prompt_tr: 'Senin yerinde olsam özür dilerdim.', answer_en: 'If I were you, I would apologize', accepted: ['If I were you, I\'d apologize', 'If I were you, I would apologise', 'I would apologize if I were you'],
        error_variants: [
          { text: 'If I was you, I would apologize', tag: 'COND2', explanation_tr: 'Günlük konuşmada "If I was you" da duyulur, ama bu kalıbın standart biçimi "If I were you"dur; yazıda ve sınavda "were" kullan.' },
          { text: 'If I were you, I apologize', tag: 'COND2', explanation_tr: 'Ana cümlede "would" gerekli: I would apologize.' },
        ],
      },
      {
        id: 'q_sc_3', mode: 'order', prompt_tr: 'Piyangoyu kazansan ne yapardın?', answer_en: 'What would you do if you won the lottery',
        words: ['What', 'would', 'you', 'do', 'if', 'you', 'won', 'the', 'lottery', 'will win'],
        error_variants: [
          { text: 'What would you do if you will win the lottery', tag: 'COND2', explanation_tr: 'If cümlesinde past simple: if you won.' },
          { text: 'What will you do if you won the lottery', tag: 'COND2', explanation_tr: 'Ana cümlede "would" gerekli: What would you do.' },
        ],
      },
      {
        id: 'q_sc_4', mode: 'free', prompt_tr: 'Uçabilsem her yere seyahat ederdim.', answer_en: 'If I could fly, I would travel everywhere', accepted: ['If I could fly, I\'d travel everywhere', 'I would travel everywhere if I could fly'],
        error_variants: [
          { text: 'If I can fly, I would travel everywhere', tag: 'COND2', explanation_tr: 'Hayali durum için "could": If I could fly.' },
          { text: 'If I could fly, I will travel everywhere', tag: 'COND2', explanation_tr: 'Hayali sonuç için "would": I would travel.' },
        ],
      },
      {
        id: 'q_sc_5', mode: 'order', prompt_tr: 'Zamanım olsa sana yardım ederdim.', answer_en: 'If I had time, I would help you',
        words: ['If', 'I', 'had', 'time,', 'I', 'would', 'help', 'you', 'have'],
        error_variants: [
          { text: 'If I have time, I would help you', tag: 'COND2', explanation_tr: 'Hayali durum için past simple: If I had time.' },
          { text: 'If I had time, I help you', tag: 'COND2', explanation_tr: 'Ana cümlede "would" gerekli: I would help.' },
        ],
      },
      {
        id: 'q_sc_6', mode: 'free', prompt_tr: 'Zengin olsam büyük bir ev alırdım.', answer_en: 'If I were rich, I would buy a big house', accepted: ["If I were rich, I'd buy a big house", 'If I was rich, I would buy a big house', "If I was rich, I'd buy a big house", 'I would buy a big house if I were rich', 'I would buy a big house if I was rich', "I'd buy a big house if I were rich"],
        error_variants: [
          { text: 'If I would be rich, I would buy a big house', tag: 'COND2', explanation_tr: 'If cümlesinde "would" olmaz: If I were rich.' },
          { text: 'If I were rich, I will buy a big house', tag: 'COND2', explanation_tr: 'Hayali sonuç için "would": I would buy.' },
        ],
      },
      {
        id: 'q_sc_7', mode: 'order', prompt_tr: 'Cevabı bilsem sana söylerdim.', answer_en: 'If I knew the answer, I would tell you',
        words: ['If', 'I', 'knew', 'the', 'answer,', 'I', 'would', 'tell', 'you', 'know'],
        error_variants: [
          { text: 'If I know the answer, I would tell you', tag: 'COND2', explanation_tr: 'Hayali durum için past simple: If I knew.' },
          { text: 'If I knew the answer, I tell you', tag: 'COND2', explanation_tr: 'Ana cümlede "would" gerekli: I would tell.' },
        ],
      },
      {
        id: 'q_sc_8', mode: 'free', prompt_tr: 'Denizin yanında yaşasak her gün yüzerdik.', answer_en: 'If we lived by the sea, we would swim every day', accepted: ["If we lived by the sea, we'd swim every day", 'If we lived near the sea, we would swim every day', "If we lived near the sea, we'd swim every day", 'We would swim every day if we lived by the sea', 'We would swim every day if we lived near the sea'],
        error_variants: [
          { text: 'If we would live by the sea, we would swim every day', tag: 'COND2', explanation_tr: 'If cümlesinde "would" olmaz: If we lived.' },
          { text: 'If we live by the sea, we would swim every day', tag: 'COND2', explanation_tr: 'Hayali durum için past simple: If we lived.' },
        ],
      },
      {
        id: 'q_sc_9', mode: 'order', prompt_tr: 'Araban olsa nereye giderdin?', answer_en: 'Where would you go if you had a car',
        words: ['Where', 'would', 'you', 'go', 'if', 'you', 'had', 'a', 'car', 'have'],
        error_variants: [
          { text: 'Where would you go if you have a car', tag: 'COND2', explanation_tr: 'Hayali durum için past simple: if you had.' },
        ],
      },
      {
        id: 'q_sc_10', mode: 'free', prompt_tr: 'Daha çok çalışsa sınavı geçerdi (erkek).', answer_en: 'If he studied harder, he would pass the exam', accepted: ["If he studied harder, he'd pass the exam", 'He would pass the exam if he studied harder', "He'd pass the exam if he studied harder", 'If he studied more, he would pass the exam', 'He would pass the exam if he studied more'],
        error_variants: [
          { text: 'If he would study harder, he would pass the exam', tag: 'COND2', explanation_tr: 'If cümlesinde "would" olmaz: If he studied.' },
          { text: 'If he studied harder, he will pass the exam', tag: 'COND2', explanation_tr: 'Hayali sonuç için "would": he would pass.' },
        ],
      },
      {
        id: 'q_sc_11', mode: 'order', prompt_tr: 'Yorgun olmasam seninle gelirdim.', answer_en: "If I weren't tired, I would come with you",
        words: ['If', 'I', "weren't", 'tired,', 'I', 'would', 'come', 'with', 'you', 'am'],
        error_variants: [
          { text: "If I weren't tired, I come with you", tag: 'COND2', explanation_tr: 'Ana cümlede "would" gerekli: I would come.' },
        ],
      },
      {
        id: 'q_sc_12', mode: 'free', prompt_tr: 'Uçabilsen nereye giderdin?', answer_en: 'Where would you go if you could fly', accepted: ['If you could fly, where would you go'],
        error_variants: [
          { text: 'Where would you go if you can fly', tag: 'COND2', explanation_tr: 'Hayali durum için "could": if you could fly.' },
          { text: 'Where will you go if you could fly', tag: 'COND2', explanation_tr: 'Hayali sonuç için "would": Where would you go?' },
        ],
      },
    ],
  },
  {
    id: 'l_used_to',
    skillId: 'used_to',
    title: 'used to',
    title_tr: 'used to — eskiden yapılan alışkanlık',
    explanation_tr:
      'Eskiden sürekli yapılan ama artık yapılmayan bir alışkanlık veya durumu anlatır: "I used to smoke" (eskiden sigara içerdim, artık içmiyorum). Yapı: used to + fiil(yalın), kişiye göre değişmez: "She used to live in Paris." Soru ve olumsuzda "did" yardımcı fiili gelir ve "used" "use" olur, "to" kalır: "Did you use to play football?", "I didn\'t use to like coffee." En sık hata: soru/olumsuzda "used" ün "use" olarak değişmesini unutmak ("Did you used to..." ✗) veya "to" yu atlamak. Dikkat: "be used to + -ing" FARKLI bir yapıdır ve "alışkın olmak" anlamına gelir ("I am used to working late" = geç çalışmaya alışkınım), "used to + fiil(yalın)" ile karıştırılmamalı.',
    examples: [
      { en: 'I used to smoke, but I quit two years ago.', tr: 'Eskiden sigara içerdim ama iki yıl önce bıraktım.' },
      { en: 'She used to live in Paris.', tr: 'Eskiden Paris\'te yaşardı.' },
      { en: 'Did you use to play football as a kid?', tr: 'Çocukken futbol oynar mıydın?' },
    ],
    words: [
      { en: 'used to', tr: 'eskiden yapardım (alışkanlık)', example: 'We used to walk to school.', example_tr: 'Eskiden okula yürüyerek giderdik.' },
      { en: 'quit', tr: 'bırakmak', example: 'He quit smoking last year.', example_tr: 'Geçen yıl sigarayı bıraktı.' },
      { en: 'as a kid', tr: 'çocukken', example: 'I used to climb trees as a kid.', example_tr: 'Çocukken ağaca tırmanırdım.' },
      { en: 'habit', tr: 'alışkanlık', example: 'It was a bad habit.', example_tr: 'Kötü bir alışkanlıktı.' },
      { en: 'nowadays', tr: 'günümüzde (karşıt zaman)', example: 'Nowadays I don\'t smoke at all.', example_tr: 'Günümüzde hiç sigara içmiyorum.' },
    ],
    exercises: [
      { type: 'gap', sentence: 'I ___ smoke, but I quit.', options: ['use to', 'used to'], answer: 1 },
      { type: 'gap', sentence: '___ you use to play football?', options: ['Did', 'Used'], answer: 0 },
      { type: 'gap', sentence: 'I didn\'t ___ like coffee.', options: ['use to', 'used to'], answer: 0, explanation_tr: 'Olumsuzda "use to": didn\'t use to.' },
      { type: 'mc', prompt: 'Hangisi doğru?', options: ['She used to lives in Paris.', 'She used to live in Paris.', 'She use to lived in Paris.'], answer: 1 },
      { type: 'match', pairs: [['olumlu', 'used to + fiil'], ['soru', 'Did + use to'], ['olumsuz', "didn't use to"]] },
      { type: 'order', prompt_tr: 'Eskiden okula yürüyerek giderdik.', words: ['We', 'used', 'to', 'walk', 'to', 'school'], answer: 'We used to walk to school' },
      { type: 'gap', sentence: 'My grandfather ___ work in a factory.', options: ['used to', 'use to', 'was used to'], answer: 0 },
      { type: 'gap', sentence: 'Did she ___ have long hair?', options: ['used to', 'use to'], answer: 1, explanation_tr: 'Soruda "did" ile: use to.' },
      { type: 'mc', prompt: 'Hangisi "alışkın olmak" demektir?', options: ['I used to work at night.', 'I am used to working at night.', 'I use to work at night.'], answer: 1, explanation_tr: 'be used to + -ing = alışkın olmak.' },
      { type: 'order', prompt_tr: 'Eskiden bisiklete binerdik.', words: ['We', 'used', 'to', 'ride', 'bikes', 'use'], answer: 'We used to ride bikes' },
    ],
    quiz: [
      {
        id: 'q_ut_1', mode: 'order', prompt_tr: 'Eskiden sigara içerdim ama iki yıl önce bıraktım.', answer_en: 'I used to smoke, but I quit two years ago',
        words: ['I', 'used', 'to', 'smoke,', 'but', 'I', 'quit', 'two', 'years', 'ago', 'use'],
        error_variants: [
          { text: 'I use to smoke, but I quit two years ago', tag: 'USEDTO', explanation_tr: 'Olumlu cümlede "used to": I used to smoke.' },
          { text: 'I used to smoked, but I quit two years ago', tag: 'USEDTO', explanation_tr: '"used to" dan sonra fiil yalın: used to smoke.' },
        ],
      },
      {
        id: 'q_ut_2', mode: 'free', prompt_tr: 'Eskiden Paris\'te yaşardı (kadın).', answer_en: 'She used to live in Paris',
        error_variants: [
          { text: 'She used to lives in Paris', tag: 'USEDTO', explanation_tr: '"used to" dan sonra fiil yalın: used to live.' },
          { text: 'She uses to live in Paris', tag: 'USEDTO', explanation_tr: 'Kalıp değişmez: used to live.' },
        ],
      },
      {
        id: 'q_ut_3', mode: 'order', prompt_tr: 'Çocukken futbol oynar mıydın?', answer_en: 'Did you use to play football as a kid',
        words: ['Did', 'you', 'use', 'to', 'play', 'football', 'as', 'a', 'kid', 'used'],
        error_variants: [
          { text: 'Did you used to play football as a kid', tag: 'USEDTO', explanation_tr: 'Soruda "did" den sonra "use to": Did you use to.' },
          { text: 'Used you to play football as a kid', tag: 'USEDTO', explanation_tr: 'Soru "did" ile kurulur: Did you use to.' },
        ],
      },
      {
        id: 'q_ut_4', mode: 'free', prompt_tr: 'Eskiden kahve sevmezdim.', answer_en: "I didn't use to like coffee", accepted: ['I did not use to like coffee', 'I never used to like coffee', 'I used to not like coffee'],
        error_variants: [
          { text: "I didn't used to like coffee", tag: 'USEDTO', explanation_tr: 'Olumsuzda "use to": didn\'t use to.' },
          { text: "I not used to like coffee", tag: 'NEG', explanation_tr: 'Olumsuzda "did not" gerekli: didn\'t use to.' },
        ],
      },
      {
        id: 'q_ut_5', mode: 'order', prompt_tr: 'Çocukken ağaca tırmanırdım.', answer_en: 'I used to climb trees as a kid',
        words: ['used', 'I', 'to', 'climb', 'trees', 'as', 'a', 'kid', 'use'],
        error_variants: [
          { text: 'I use to climb trees as a kid', tag: 'USEDTO', explanation_tr: 'Olumlu cümlede "used to": I used to climb.' },
          { text: 'I used to climbed trees as a kid', tag: 'USEDTO', explanation_tr: '"used to" dan sonra fiil yalın: used to climb.' },
        ],
      },
      {
        id: 'q_ut_6', mode: 'free', prompt_tr: 'Dedem eskiden bir fabrikada çalışırdı.', answer_en: 'My grandfather used to work in a factory', accepted: ['My grandpa used to work in a factory', 'My grandfather worked in a factory'],
        error_variants: [
          { text: 'My grandfather use to work in a factory', tag: 'USEDTO', explanation_tr: 'Olumlu cümlede "used to".' },
          { text: 'My grandfather used to worked in a factory', tag: 'USEDTO', explanation_tr: '"used to" dan sonra fiil yalın: work.' },
        ],
      },
      {
        id: 'q_ut_7', mode: 'order', prompt_tr: 'Eskiden uzun saçın var mıydı?', answer_en: 'Did you use to have long hair',
        words: ['Did', 'you', 'use', 'to', 'have', 'long', 'hair', 'used'],
        error_variants: [
          { text: 'Did you used to have long hair', tag: 'USEDTO', explanation_tr: 'Soruda "did" den sonra "use to".' },
        ],
      },
      {
        id: 'q_ut_8', mode: 'free', prompt_tr: 'Eskiden çok kitap okurdum ama artık okumuyorum.', answer_en: "I used to read a lot of books, but I don't anymore", accepted: ["I used to read a lot of books, but I do not anymore", "I used to read lots of books, but I don't anymore", "I used to read a lot, but I don't anymore", "I used to read a lot of books, but now I don't", "I used to read many books, but I don't anymore", "I used to read a lot of books, but I don't any more"],
        error_variants: [
          { text: "I use to read a lot of books, but I don't anymore", tag: 'USEDTO', explanation_tr: 'Olumlu cümlede "used to".' },
          { text: "I used to reading a lot of books, but I don't anymore", tag: 'USEDTO', explanation_tr: '"used to" (eskiden) sonrası fiil yalın: read.' },
        ],
      },
      {
        id: 'q_ut_9', mode: 'order', prompt_tr: 'Eskiden burada bir sinema vardı.', answer_en: 'There used to be a cinema here',
        words: ['There', 'used', 'to', 'be', 'a', 'cinema', 'here', 'was', 'is'],
        error_variants: [
          { text: 'There used to is a cinema here', tag: 'USEDTO', explanation_tr: '"used to" dan sonra fiil yalın: be.' },
          { text: 'There used to be cinema here', tag: 'ART', explanation_tr: 'Tekil sayılabilir isim: a cinema.' },
        ],
      },
      {
        id: 'q_ut_10', mode: 'free', prompt_tr: 'O (kadın) eskiden et yemezdi.', answer_en: "She didn't use to eat meat", accepted: ['She did not use to eat meat', 'She never used to eat meat', 'She used not to eat meat'],
        error_variants: [
          { text: "She didn't used to eat meat", tag: 'USEDTO', explanation_tr: 'Olumsuzda "use to": didn\'t use to.' },
          { text: 'She not used to eat meat', tag: 'NEG', explanation_tr: 'Olumsuzda "did not" gerekli: didn\'t use to.' },
        ],
      },
      {
        id: 'q_ut_11', mode: 'order', prompt_tr: 'Gece çalışmaya alışkınım.', answer_en: 'I am used to working at night',
        words: ['I', 'am', 'used', 'to', 'working', 'at', 'night', 'work'],
        error_variants: [
          { text: 'I am used to work at night', tag: 'USEDTO', explanation_tr: '"be used to" (alışkın olmak) -ing ister: used to working.' },
        ],
      },
      {
        id: 'q_ut_12', mode: 'free', prompt_tr: 'Çocukken çok televizyon izlerdik.', answer_en: 'We used to watch a lot of TV as kids', accepted: ['We used to watch a lot of TV when we were kids', 'We used to watch a lot of TV when we were children', 'We used to watch a lot of TV as children', 'We used to watch lots of TV as kids', 'We used to watch a lot of television as kids', 'We used to watch TV a lot as kids', 'We used to watch TV a lot when we were kids', 'We used to watch a lot of television when we were kids'],
        error_variants: [
          { text: 'We use to watch a lot of TV as kids', tag: 'USEDTO', explanation_tr: 'Olumlu cümlede "used to".' },
          { text: 'We used to watched a lot of TV as kids', tag: 'USEDTO', explanation_tr: '"used to" dan sonra fiil yalın: watch.' },
        ],
      },
    ],
  },
]
