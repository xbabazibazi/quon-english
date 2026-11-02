import type { Lesson } from './types'

export const LESSONS_B11: Lesson[] = [
  {
    id: 'l_present_perfect',
    skillId: 'present_perfect',
    title: 'Present perfect: have / has + V3',
    title_tr: 'have / has + V3 — present perfect',
    explanation_tr:
      'Türkçede bunun tam karşılığı yok, bu yüzden B1 seviyesinde en çok zorlanılan konulardan biri. Present perfect, geçmişte başlayıp hâlâ devam eden, ya da ZAMANI önemli olmayan olaylar için kullanılır: "I have lived here for 3 years" (hâlâ burada yaşıyorum), "I have read that book" (ne zaman okuduğum önemli değil, önemli olan okumuş olmam). Yapı: have/has + fiilin 3. hali (V3). He/she/it ile "has" gelir. Düzensiz fiillerin 3. hali ezberlenmeli: go→gone, see→seen, eat→eaten. "since" (bir noktadan beri: since 2020) ve "for" (bir süre boyunca: for 3 years) ile sık kullanılır. Türkler bu zamanı sıklıkla past simple ile karıştırır çünkü Türkçede ikisi de "-dı/-mış" gibi hissettirir.',
    examples: [
      { en: 'I have lived in Bursa for 3 years.', tr: '3 yıldır Bursa\'da yaşıyorum.' },
      { en: 'She has already finished her homework.', tr: 'O ödevini çoktan bitirdi.' },
      { en: 'We have never been to Japan.', tr: 'Hiç Japonya\'ya gitmedik.' },
    ],
    words: [
      { en: 'already', tr: 'çoktan, şimdiden', example: 'I have already eaten.', example_tr: 'Çoktan yedim.' },
      { en: 'never', tr: 'hiç', example: 'He has never driven a car.', example_tr: 'O hiç araba kullanmadı.' },
      { en: 'yet', tr: 'henüz (olumsuz/soru)', example: 'Have you finished yet?', example_tr: 'Henüz bitirdin mi?' },
      { en: 'since', tr: '-den beri (bir nokta)', example: 'I have worked here since 2019.', example_tr: '2019\'dan beri burada çalışıyorum.' },
      { en: 'for', tr: '-dir, boyunca (bir süre)', example: 'She has known him for 10 years.', example_tr: 'Onu 10 yıldır tanıyor.' },
    ],
    exercises: [
      { type: 'gap', sentence: 'I ___ already finished the report.', options: ['have', 'has', 'am'], answer: 0 },
      { type: 'gap', sentence: 'She ___ never eaten sushi.', options: ['have', 'has'], answer: 1, explanation_tr: 'she → has.' },
      { type: 'gap', sentence: 'I have lived here ___ 2020.', options: ['for', 'since'], answer: 1, explanation_tr: 'Bir nokta → since 2020.' },
      { type: 'gap', sentence: 'They have been married ___ ten years.', options: ['for', 'since'], answer: 0, explanation_tr: 'Bir süre → for ten years.' },
      { type: 'mc', prompt: 'Hangisi doğru?', options: ['I have see that film.', 'I have seen that film.', 'I has seen that film.'], answer: 1, explanation_tr: '3. hal: seen.' },
      { type: 'order', prompt_tr: 'Hiç Japonya\'ya gitmedik.', words: ['have', 'We', 'never', 'been', 'to', 'Japan'], answer: 'We have never been to Japan' },
      { type: 'gap', sentence: 'Have you ___ your homework yet?', options: ['finished', 'finish', 'finishing'], answer: 0, explanation_tr: 'have + 3. hal: finished.' },
      { type: 'gap', sentence: 'He ___ to London twice.', options: ['has been', 'have been', 'is been'], answer: 0, explanation_tr: 'he → has + been.' },
      { type: 'match', pairs: [['go', 'gone'], ['write', 'written'], ['buy', 'bought'], ['take', 'taken']] },
      { type: 'order', prompt_tr: 'Henüz e-postamı kontrol etmedim.', words: ['I', "haven't", 'checked', 'my', 'email', 'yet', 'check'], answer: "I haven't checked my email yet" },
    ],
    quiz: [
      {
        id: 'q_pp_1', mode: 'order', prompt_tr: '3 yıldır Bursa\'da yaşıyorum.', answer_en: 'I have lived in Bursa for 3 years',
        words: ['have', 'I', 'lived', 'in', 'Bursa', 'for', '3', 'years', 'live'],
        error_variants: [
          { text: 'I live in Bursa for 3 years', tag: 'PPERF', explanation_tr: 'Hâlâ süren durum: present perfect gerekli: have lived.' },
          { text: 'I lived in Bursa for 3 years', tag: 'PPERF', explanation_tr: '"for 3 years" ve hâlâ sürüyor olması present perfect ister, past simple değil.' },
          { text: 'I have live in Bursa for 3 years', tag: 'PPERF', explanation_tr: '"have" dan sonra 3. hal gelir: lived.' },
        ],
      },
      {
        id: 'q_pp_2', mode: 'free', prompt_tr: 'O (kadın) ödevini çoktan bitirdi.', answer_en: 'She has already finished her homework', accepted: ['She has finished her homework already', 'She\'s already finished her homework', 'She already finished her homework'],
        error_variants: [
          { text: 'She have already finished her homework', tag: 'PPERF', explanation_tr: 'she → has.' },
          { text: 'She has already finish her homework', tag: 'PPERF', explanation_tr: '3. hal gerekli: finished.' },
        ],
      },
      {
        id: 'q_pp_3', mode: 'order', prompt_tr: 'Onu 10 yıldır tanıyorum.', answer_en: 'I have known him for 10 years',
        words: ['have', 'I', 'known', 'him', 'for', '10', 'years', 'since'],
        error_variants: [
          { text: 'I have known him since 10 years', tag: 'PPERF', explanation_tr: 'Süre için "for": for 10 years.' },
          { text: 'I know him for 10 years', tag: 'PPERF', explanation_tr: 'Süregelen durum: have known.' },
        ],
      },
      {
        id: 'q_pp_4', mode: 'free', prompt_tr: 'Hiç sushi yemedim.', answer_en: 'I have never eaten sushi', accepted: ['I\'ve never eaten sushi', 'I have never had sushi', 'I\'ve never had sushi'],
        error_variants: [
          { text: 'I have never ate sushi', tag: 'PPERF', explanation_tr: '3. hal: eaten.' },
          { text: 'I never eaten sushi', tag: 'PPERF', explanation_tr: '"have" eksik: I have never eaten.' },
          { text: 'I have never eat sushi', tag: 'PPERF', explanation_tr: '3. hal: eaten.' },
        ],
      },
      {
        id: 'q_pp_5', mode: 'order', prompt_tr: '2019\'dan beri burada çalışıyor.', answer_en: 'He has worked here since 2019',
        words: ['has', 'He', 'worked', 'here', 'since', '2019', 'for'],
        error_variants: [
          { text: 'He has worked here for 2019', tag: 'PPERF', explanation_tr: 'Bir nokta için "since": since 2019.' },
          { text: 'He work here since 2019', tag: 'PPERF', explanation_tr: 'Süregelen durum: has worked.' },
          { text: 'He have worked here since 2019', tag: 'PPERF', explanation_tr: 'he → has.' },
        ],
      },
      {
        id: 'q_pp_6', mode: 'free', prompt_tr: 'Hiç Paris\'e gittin mi?', answer_en: 'Have you ever been to Paris', accepted: ['Have you ever gone to Paris', 'Did you ever go to Paris'],
        error_variants: [
          { text: 'Have you ever went to Paris', tag: 'PPERF', explanation_tr: '"have" dan sonra 3. hal: been (veya gone), went değil.' },
          { text: 'Did you ever been to Paris', tag: 'PPERF', explanation_tr: 'Deneyim sorusu: Have you ever been...?' },
        ],
      },
      {
        id: 'q_pp_7', mode: 'order', prompt_tr: 'Bu sabahtan beri hiçbir şey yemedim.', answer_en: "I haven't eaten anything since this morning",
        words: ['I', "haven't", 'eaten', 'anything', 'since', 'this', 'morning', 'for', 'ate'],
        error_variants: [
          { text: "I haven't eaten anything for this morning", tag: 'PPERF', explanation_tr: 'Bir başlangıç noktası (bu sabah) → since.' },
          { text: "I haven't ate anything since this morning", tag: 'PPERF', explanation_tr: '"have" dan sonra 3. hal: eaten.' },
        ],
      },
      {
        id: 'q_pp_8', mode: 'free', prompt_tr: 'Anahtarlarımı kaybettim (hâlâ bulamadım).', answer_en: 'I have lost my keys', accepted: ["I've lost my keys", 'I lost my keys'],
        error_variants: [
          { text: 'I have lose my keys', tag: 'PPERF', explanation_tr: '"have" dan sonra 3. hal: lost.' },
          { text: 'I have losted my keys', tag: 'PAST', explanation_tr: '"lose" düzensizdir: lose → lost → lost.' },
        ],
      },
      {
        id: 'q_pp_9', mode: 'order', prompt_tr: 'O (erkek) bu filmi üç kez izledi.', answer_en: 'He has watched this film three times',
        words: ['He', 'has', 'watched', 'this', 'film', 'three', 'times', 'have', 'watch'],
        error_variants: [
          { text: 'He have watched this film three times', tag: 'PPERF', explanation_tr: 'he → has.' },
          { text: 'He has watch this film three times', tag: 'PPERF', explanation_tr: '"has" dan sonra 3. hal: watched.' },
        ],
      },
      {
        id: 'q_pp_10', mode: 'free', prompt_tr: '2015\'ten beri arkadaşız.', answer_en: 'We have been friends since 2015', accepted: ["We've been friends since 2015"],
        error_variants: [
          { text: 'We are friends since 2015', tag: 'PPERF', explanation_tr: 'Geçmişte başlayıp süren durum: have been.' },
          { text: 'We have been friends for 2015', tag: 'PPERF', explanation_tr: 'Bir nokta (2015) → since.' },
        ],
      },
      {
        id: 'q_pp_11', mode: 'order', prompt_tr: 'Henüz bitirdin mi?', answer_en: 'Have you finished yet',
        words: ['Have', 'you', 'finished', 'yet', 'Did', 'finish'],
        error_variants: [
          { text: 'Did you finished yet', tag: 'PPERF', explanation_tr: '"yet" ile present perfect: Have you finished yet?' },
          { text: 'Have you finish yet', tag: 'PPERF', explanation_tr: '"have" dan sonra 3. hal: finished.' },
        ],
      },
      {
        id: 'q_pp_12', mode: 'free', prompt_tr: 'Annem hiç uçağa binmedi.', answer_en: 'My mother has never been on a plane', accepted: ['My mom has never been on a plane', 'My mum has never been on a plane', 'My mother has never flown', 'My mother has never taken a plane', "My mother's never been on a plane"],
        error_variants: [
          { text: 'My mother have never been on a plane', tag: 'PPERF', explanation_tr: 'my mother (she) → has.' },
          { text: 'My mother has never be on a plane', tag: 'PPERF', explanation_tr: '"has" dan sonra 3. hal: been.' },
        ],
      },
    ],
  },
  {
    id: 'l_present_perfect_vs_past',
    skillId: 'present_perfect_vs_past',
    title: 'Present perfect vs past simple',
    title_tr: 'Present perfect mi, past simple mi?',
    explanation_tr:
      'Bu iki zaman birbirine en çok karıştırılan çifttir çünkü Türkçede ikisi de "-dı" ekiyle anlatılır. Ayırt etme kuralı basit: cümlede BELİRLİ bir geçmiş zaman ifadesi varsa (yesterday, last week, in 2020, two years ago) → past simple kullanılır: "I visited Paris in 2019." Zaman belirtilmemişse veya olay hâlâ sonuç/bağlantı taşıyorsa (already, yet, just, ever, since, for, hâlâ süren) → present perfect: "I have visited Paris" (ne zaman önemli değil, deneyimim var). Karşılaştır: "I lost my keys yesterday" (geçmişte bitmiş, zaman belli) ile "I have lost my keys" (şu an bulamıyorum, sonucu önemli). Soru kuralı aynı mantıkla işler: "Did you go...?" (belirli zamanda) vs "Have you ever been...?" (deneyim).',
    examples: [
      { en: 'I visited London in 2018.', tr: '2018\'de Londra\'yı ziyaret ettim.' },
      { en: 'I have visited London three times.', tr: 'Londra\'yı üç kere ziyaret ettim.' },
      { en: 'She has just left; she left five minutes ago.', tr: 'O az önce ayrıldı; beş dakika önce ayrıldı.' },
    ],
    words: [
      { en: 'ago', tr: 'önce (past simple ile)', example: 'I called her two hours ago.', example_tr: 'Onu iki saat önce aradım.' },
      { en: 'ever', tr: 'hiç (soru/present perfect)', example: 'Have you ever flown a plane?', example_tr: 'Hiç uçak uçurdun mu?' },
      { en: 'just', tr: 'az önce', example: 'I have just arrived.', example_tr: 'Az önce vardım.' },
      { en: 'last year', tr: 'geçen yıl (past simple ile)', example: 'We moved last year.', example_tr: 'Geçen yıl taşındık.' },
      { en: 'recently', tr: 'son zamanlarda', example: 'He has recently changed jobs.', example_tr: 'Son zamanlarda iş değiştirdi.' },
    ],
    exercises: [
      { type: 'gap', sentence: 'I ___ Paris last summer.', options: ['visited', 'have visited'], answer: 0, explanation_tr: '"last summer" belirli zaman → past simple.' },
      { type: 'gap', sentence: 'I ___ Paris three times so far.', options: ['visited', 'have visited'], answer: 1, explanation_tr: 'Zaman belirtilmemiş, deneyim → present perfect.' },
      { type: 'gap', sentence: '___ you ever been to Rome?', options: ['Did', 'Have'], answer: 1 },
      { type: 'gap', sentence: 'He ___ his car two years ago.', options: ['sold', 'has sold'], answer: 0, explanation_tr: '"two years ago" belirli → sold.' },
      { type: 'mc', prompt: 'Hangisi doğru?', options: ['I have seen that film yesterday.', 'I saw that film yesterday.', 'I saw that film since 2020.'], answer: 1, explanation_tr: '"yesterday" belirli zaman → past simple.' },
      { type: 'order', prompt_tr: 'Az önce vardım.', words: ['have', 'I', 'just', 'arrived', 'arrive'], answer: 'I have just arrived' },
      { type: 'gap', sentence: 'We ___ each other since we were children.', options: ['knew', 'have known'], answer: 1, explanation_tr: '"since" ile süren durum → have known.' },
      { type: 'gap', sentence: 'I ___ him at the party last night.', options: ['have met', 'met'], answer: 1, explanation_tr: '"last night" belirli zaman → met.' },
      { type: 'mc', prompt: 'Hangisi doğru?', options: ['When have you arrived?', 'When did you arrive?', 'When you arrived?'], answer: 1, explanation_tr: '"When" belirli bir zamanı sorar → past simple.' },
      { type: 'match', pairs: [['yesterday', 'dün'], ['ago', 'önce'], ['just', 'az önce'], ['so far', 'şimdiye kadar']] },
    ],
    quiz: [
      {
        id: 'q_ppvp_1', mode: 'order', prompt_tr: '2018\'de Londra\'yı ziyaret ettim.', answer_en: 'I visited London in 2018',
        words: ['I', 'visited', 'London', 'in', '2018', 'have'],
        error_variants: [
          { text: 'I have visited London in 2018', tag: 'PPERF', explanation_tr: 'Belirli yıl verilmiş: past simple gerekir, visited.' },
          { text: 'I have visit London in 2018', tag: 'PPERF', explanation_tr: 'Belirli zaman → past simple: visited.' },
        ],
      },
      {
        id: 'q_ppvp_2', mode: 'free', prompt_tr: 'Şimdiye kadar Londra\'yı üç kere ziyaret ettim.', answer_en: 'I have visited London three times', accepted: ['I\'ve visited London three times', 'I have visited London three times so far', 'I\'ve visited London three times so far', 'So far I have visited London three times'],
        error_variants: [
          { text: 'I visited London three times', tag: 'PPERF', explanation_tr: '"Şimdiye kadar" süren bir dönem: have visited.' },
          { text: 'I have visit London three times', tag: 'PPERF', explanation_tr: '3. hal gerekli: visited.' },
        ],
      },
      {
        id: 'q_ppvp_3', mode: 'order', prompt_tr: 'Hiç uçak uçurdun mu?', answer_en: 'Have you ever flown a plane',
        words: ['you', 'Have', 'ever', 'flown', 'a', 'plane', 'Did'],
        error_variants: [
          { text: 'Did you ever flown a plane', tag: 'PPERF', explanation_tr: 'ever ile soru present perfect ister: Have you ever flown?' },
          { text: 'Have you ever fly a plane', tag: 'PPERF', explanation_tr: '3. hal: flown.' },
        ],
      },
      {
        id: 'q_ppvp_4', mode: 'free', prompt_tr: 'Arabasını iki yıl önce sattı (erkek).', answer_en: 'He sold his car two years ago', accepted: ['He sold his car 2 years ago'],
        error_variants: [
          { text: 'He has sold his car two years ago', tag: 'PPERF', explanation_tr: '"two years ago" belirli zaman → past simple: sold.' },
          { text: 'He sold his car since two years', tag: 'PPERF', explanation_tr: 'Belirli zaman için "ago": two years ago.' },
        ],
      },
      {
        id: 'q_ppvp_5', mode: 'order', prompt_tr: 'Geçen yıl taşındık.', answer_en: 'We moved last year',
        words: ['We', 'moved', 'last', 'year', 'have'],
        error_variants: [
          { text: 'We have moved last year', tag: 'PPERF', explanation_tr: '"last year" belirli zaman, present perfect ile kullanılmaz: moved.' },
          { text: 'We move last year', tag: 'PAST', explanation_tr: 'Geçmiş zaman eki: moved.' },
        ],
      },
      {
        id: 'q_ppvp_6', mode: 'free', prompt_tr: 'Dün gece onu (erkek) partide gördüm.', answer_en: 'I saw him at the party last night', accepted: ['Last night I saw him at the party'],
        error_variants: [
          { text: 'I have seen him at the party last night', tag: 'PPERF', explanation_tr: '"last night" belirli zaman → past simple: saw.' },
          { text: 'I seen him at the party last night', tag: 'PAST', explanation_tr: 'Geçmiş zaman: saw (seen 3. haldir).' },
        ],
      },
      {
        id: 'q_ppvp_7', mode: 'order', prompt_tr: 'Ne zaman vardın?', answer_en: 'When did you arrive',
        words: ['When', 'did', 'you', 'arrive', 'have', 'arrived'],
        error_variants: [
          { text: 'When have you arrived', tag: 'PPERF', explanation_tr: '"When" ile present perfect kullanılmaz: When did you arrive?' },
          { text: 'When did you arrived', tag: 'PAST', explanation_tr: '"did" dan sonra fiil yalın: arrive.' },
        ],
      },
      {
        id: 'q_ppvp_8', mode: 'free', prompt_tr: 'Hiç sushi yedin mi?', answer_en: 'Have you ever eaten sushi', accepted: ['Have you ever had sushi', 'Did you ever eat sushi', 'Did you ever have sushi'],
        error_variants: [
          { text: 'Have you ever ate sushi', tag: 'PPERF', explanation_tr: '"have" dan sonra 3. hal: eaten.' },
          { text: 'Did you ever eaten sushi', tag: 'PPERF', explanation_tr: 'Deneyim sorusu: Have you ever eaten...?' },
        ],
      },
      {
        id: 'q_ppvp_9', mode: 'order', prompt_tr: 'Postacı az önce geldi.', answer_en: 'The postman has just come',
        words: ['The', 'postman', 'has', 'just', 'come', 'came', 'have'],
        error_variants: [
          { text: 'The postman has just came', tag: 'PPERF', explanation_tr: '"has" dan sonra 3. hal: come.' },
          { text: 'The postman have just come', tag: 'PPERF', explanation_tr: 'the postman (he) → has.' },
        ],
      },
      {
        id: 'q_ppvp_10', mode: 'free', prompt_tr: 'Geçen hafta yeni bir telefon aldım.', answer_en: 'I bought a new phone last week', accepted: ['Last week I bought a new phone'],
        error_variants: [
          { text: 'I have bought a new phone last week', tag: 'PPERF', explanation_tr: '"last week" belirli zaman → past simple: bought.' },
          { text: 'I buyed a new phone last week', tag: 'PAST', explanation_tr: '"buy" düzensizdir: bought.' },
        ],
      },
      {
        id: 'q_ppvp_11', mode: 'order', prompt_tr: 'Bu yıl çok kitap okudum (yıl henüz bitmedi).', answer_en: 'I have read a lot of books this year',
        words: ['I', 'have', 'read', 'a', 'lot', 'of', 'books', 'this', 'year', 'readed'],
        error_variants: [
          { text: 'I have readed a lot of books this year', tag: 'PAST', explanation_tr: '"read" düzensizdir: read → read → read.' },
          { text: 'I have read a lot of book this year', tag: 'PLURAL', explanation_tr: '"a lot of" ile sayılabilen isim çoğul: books.' },
        ],
      },
      {
        id: 'q_ppvp_12', mode: 'free', prompt_tr: 'Onunla (kadın) 2019\'da tanıştım.', answer_en: 'I met her in 2019',
        error_variants: [
          { text: 'I have met her in 2019', tag: 'PPERF', explanation_tr: '"in 2019" belirli zaman → past simple: met.' },
          { text: 'I meet her in 2019', tag: 'PAST', explanation_tr: 'Geçmiş zaman: met.' },
        ],
      },
    ],
  },
  {
    id: 'l_quantifiers_advanced',
    skillId: 'quantifiers_advanced',
    title: 'a few / a little / plenty of',
    title_tr: 'a few / a little / plenty of',
    explanation_tr:
      'A2\'de much/many öğrendin; B1\'de daha ince ayrım var. Sayılabilen isimlerle "a few" (birkaç, az ama yeterli): "I have a few friends." Sayılamayan isimlerle "a little" (biraz, az ama yeterli): "I have a little money." Dikkat: "a" olmadan "few" ve "little" kullanılırsa anlam NEGATİF olur — "neredeyse hiç yok" demektir: "I have few friends" (neredeyse hiç arkadaşım yok, üzücü bir anlam). "plenty of" hem sayılabilen hem sayılamayanla kullanılır ve "bol bol, yeterince fazla" anlamına gelir: "We have plenty of time." Bu üçlü günlük konuşmada "some/any"den daha doğal ve kesin miktar hissi verir.',
    examples: [
      { en: 'I have a few friends in Bursa.', tr: 'Bursa\'da birkaç arkadaşım var.' },
      { en: 'There is a little milk left.', tr: 'Biraz süt kalmış.' },
      { en: 'Don\'t worry, we have plenty of time.', tr: 'Merak etme, bolca zamanımız var.' },
    ],
    words: [
      { en: 'a few', tr: 'birkaç (sayılabilen)', example: 'a few books', example_tr: 'birkaç kitap' },
      { en: 'a little', tr: 'biraz (sayılamayan)', example: 'a little sugar', example_tr: 'biraz şeker' },
      { en: 'plenty of', tr: 'bol bol, fazlasıyla', example: 'plenty of water', example_tr: 'bol su' },
      { en: 'hardly any', tr: 'neredeyse hiç', example: 'We have hardly any time.', example_tr: 'Neredeyse hiç zamanımız yok.' },
      { en: 'left', tr: 'kalan', example: 'There is a little bread left.', example_tr: 'Biraz ekmek kalmış.' },
    ],
    exercises: [
      { type: 'gap', sentence: 'I have ___ friends here.', options: ['a few', 'a little'], answer: 0, explanation_tr: 'friends sayılabilir → a few.' },
      { type: 'gap', sentence: 'There is ___ time left.', options: ['a few', 'a little'], answer: 1, explanation_tr: 'time sayılamaz → a little.' },
      { type: 'gap', sentence: 'We have ___ food for the party.', options: ['plenty', 'plenty of'], answer: 1 },
      { type: 'mc', prompt: '"I have few friends" ne anlama gelir?', options: ['Birkaç arkadaşım var (olumlu)', 'Neredeyse hiç arkadaşım yok (olumsuz)', 'Çok arkadaşım var'], answer: 1, explanation_tr: '"a" olmadan negatif anlam.' },
      { type: 'match', pairs: [['a few', 'birkaç (sayılabilen)'], ['a little', 'biraz (sayılamayan)'], ['plenty of', 'bol bol'], ['hardly any', 'neredeyse hiç']] },
      { type: 'order', prompt_tr: 'Bolca zamanımız var.', words: ['have', 'We', 'plenty', 'of', 'time'], answer: 'We have plenty of time' },
      { type: 'gap', sentence: 'Could I have ___ water, please?', options: ['a few', 'a little'], answer: 1, explanation_tr: 'water sayılamaz → a little.' },
      { type: 'gap', sentence: 'Very ___ people came to the meeting. It was almost empty.', options: ['few', 'a few', 'a little'], answer: 0, explanation_tr: '"neredeyse hiç" anlamı ve sayılabilen isim → (very) few.' },
      { type: 'mc', prompt: '"There is little hope" ne anlama gelir?', options: ['Biraz umut var (olumlu)', 'Neredeyse hiç umut yok', 'Çok umut var'], answer: 1, explanation_tr: '"a" olmadan "little" olumsuz anlam taşır.' },
      { type: 'order', prompt_tr: 'Çayı biraz şekerle içerim.', words: ['I', 'drink', 'tea', 'with', 'a', 'little', 'sugar', 'few'], answer: 'I drink tea with a little sugar' },
    ],
    quiz: [
      {
        id: 'q_qa_1', mode: 'order', prompt_tr: 'Bursa\'da birkaç arkadaşım var.', answer_en: 'I have a few friends in Bursa',
        words: ['have', 'I', 'a', 'few', 'friends', 'in', 'Bursa', 'little'],
        error_variants: [
          { text: 'I have a little friends in Bursa', tag: 'QUANT', explanation_tr: 'friends sayılabilir → a few.' },
          { text: 'I have few friends in Bursa', tag: 'QUANT', explanation_tr: '"a" olmadan negatif anlam olur; olumlu için: a few.' },
        ],
      },
      {
        id: 'q_qa_2', mode: 'free', prompt_tr: 'Biraz süt kalmış.', answer_en: 'There is a little milk left', accepted: ['There\'s a little milk left'],
        error_variants: [
          { text: 'There is a few milk left', tag: 'QUANT', explanation_tr: 'milk sayılamaz → a little.' },
          { text: 'There are a little milk left', tag: 'THERE', explanation_tr: 'milk tekil sayılamaz isim → there is.' },
        ],
      },
      {
        id: 'q_qa_3', mode: 'order', prompt_tr: 'Bolca zamanımız var.', answer_en: 'We have plenty of time',
        words: ['have', 'We', 'plenty', 'of', 'time', 'many'],
        error_variants: [
          { text: 'We have plenty time', tag: 'QUANT', explanation_tr: '"plenty" dan sonra "of" gelir: plenty of time.' },
          { text: 'We have plenty of times', tag: 'PLURAL', explanation_tr: '"time" (süre) sayılamaz, çoğul olmaz.' },
        ],
      },
      {
        id: 'q_qa_4', mode: 'free', prompt_tr: 'Neredeyse hiç param yok.', answer_en: 'I have hardly any money', accepted: ['I\'ve got hardly any money', 'I have almost no money'],
        error_variants: [
          { text: 'I have hardly any moneys', tag: 'PLURAL', explanation_tr: '"money" sayılamaz, çoğul olmaz.' },
          { text: 'I have a little any money', tag: 'QUANT', explanation_tr: '"hardly any" tek başına kullanılır.' },
        ],
      },
      {
        id: 'q_qa_5', mode: 'order', prompt_tr: 'Buzdolabında birkaç yumurta var.', answer_en: 'There are a few eggs in the fridge',
        words: ['are', 'There', 'a', 'few', 'eggs', 'in', 'the', 'fridge', 'little'],
        error_variants: [
          { text: 'There are a little eggs in the fridge', tag: 'QUANT', explanation_tr: 'eggs sayılabilir → a few.' },
          { text: 'There is a few eggs in the fridge', tag: 'THERE', explanation_tr: 'Çoğul özne → there are.' },
        ],
      },
      {
        id: 'q_qa_6', mode: 'free', prompt_tr: 'Birkaç sorum var.', answer_en: 'I have a few questions', accepted: ["I've got a few questions", 'I have got a few questions'],
        error_variants: [
          { text: 'I have a little questions', tag: 'QUANT', explanation_tr: 'questions sayılabilir → a few.' },
          { text: 'I have a few question', tag: 'PLURAL', explanation_tr: '"a few" dan sonra isim çoğul: questions.' },
        ],
      },
      {
        id: 'q_qa_7', mode: 'order', prompt_tr: 'Neredeyse hiç zamanımız yok.', answer_en: 'We have hardly any time',
        words: ['We', 'have', 'hardly', 'any', 'time', 'few'],
        error_variants: [
          { text: 'We have hardly any times', tag: 'PLURAL', explanation_tr: '"time" (süre) sayılamaz, çoğul olmaz.' },
          { text: 'We have hardly few time', tag: 'QUANT', explanation_tr: '"neredeyse hiç" = hardly any.' },
        ],
      },
      {
        id: 'q_qa_8', mode: 'free', prompt_tr: 'Toplantıya çok az kişi geldi (neredeyse hiç kimse).', answer_en: 'Very few people came to the meeting', accepted: ['Few people came to the meeting', 'Hardly anyone came to the meeting', 'Hardly anybody came to the meeting'],
        error_variants: [
          { text: 'Very little people came to the meeting', tag: 'QUANT', explanation_tr: 'people sayılabilir → few, little değil.' },
          { text: 'Very a few people came to the meeting', tag: 'QUANT', explanation_tr: '"very" ile "a" kullanılmaz: very few.' },
        ],
      },
      {
        id: 'q_qa_9', mode: 'order', prompt_tr: 'Bardakta biraz su var.', answer_en: 'There is a little water in the glass',
        words: ['There', 'is', 'a', 'little', 'water', 'in', 'the', 'glass', 'are'],
        error_variants: [
          { text: 'There are a little water in the glass', tag: 'THERE', explanation_tr: 'water sayılamaz, tekil → there is.' },
          { text: 'There is a few water in the glass', tag: 'QUANT', explanation_tr: 'water sayılamaz → a little.' },
        ],
      },
      {
        id: 'q_qa_10', mode: 'free', prompt_tr: 'Partide bolca yiyecek vardı.', answer_en: 'There was plenty of food at the party', accepted: ['There was a lot of food at the party', 'There was lots of food at the party'],
        error_variants: [
          { text: 'There was plenty food at the party', tag: 'QUANT', explanation_tr: '"plenty" dan sonra "of" gelir: plenty of food.' },
          { text: 'There were plenty of foods at the party', tag: 'PLURAL', explanation_tr: 'food burada sayılamaz: plenty of food, there was.' },
        ],
      },
      {
        id: 'q_qa_11', mode: 'order', prompt_tr: 'Birkaç dakika bekleyebilir misin?', answer_en: 'Can you wait a few minutes',
        words: ['Can', 'you', 'wait', 'a', 'few', 'minutes', 'little'],
        error_variants: [
          { text: 'Can you wait a little minutes', tag: 'QUANT', explanation_tr: 'minutes sayılabilir → a few.' },
          { text: 'Can you wait a few minute', tag: 'PLURAL', explanation_tr: '"a few" dan sonra isim çoğul: minutes.' },
        ],
      },
      {
        id: 'q_qa_12', mode: 'free', prompt_tr: 'Biraz İngilizce konuşabiliyorum.', answer_en: 'I can speak a little English', accepted: ['I speak a little English'],
        error_variants: [
          { text: 'I can speak a few English', tag: 'QUANT', explanation_tr: 'English (dil) sayılamaz → a little.' },
          { text: 'I can speaks a little English', tag: 'CAN', explanation_tr: '"can" dan sonra fiil yalın: speak.' },
        ],
      },
    ],
  },
  {
    id: 'l_gerund_infinitive',
    skillId: 'gerund_infinitive',
    title: '-ing or to + verb?',
    title_tr: '-ing mi, to + fiil mi?',
    explanation_tr:
      'İngilizcede bir fiilden sonra gelen ikinci fiil bazen -ing (gerund) bazen "to + fiil" (infinitive) alır, kural fiile göre değişir ve ezberlenmesi gerekir. -ing isteyenler: enjoy, finish, avoid, mind, suggest, practice ("I enjoy swimming", "She finished cleaning"). to + fiil isteyenler: want, decide, hope, plan, promise, afford ("I want to travel", "He decided to quit"). Bazı fiiller ikisini de alır ama anlam değişebilir: "stop smoking" (sigarayı bırakmak) ≠ "stop to smoke" (sigara içmek için durmak). Altın kural: EDATTAN (in, at, of, before, after, about) sonra HER ZAMAN -ing gelir, asla "to": "good at swimming", "interested in learning", "before leaving".',
    examples: [
      { en: 'I enjoy reading books.', tr: 'Kitap okumaktan hoşlanırım.' },
      { en: 'She decided to study abroad.', tr: 'Yurt dışında okumaya karar verdi.' },
      { en: 'He is good at playing chess.', tr: 'Satranç oynamakta iyidir.' },
    ],
    words: [
      { en: 'enjoy', tr: 'hoşlanmak (+ -ing)', example: 'I enjoy cooking.', example_tr: 'Yemek yapmaktan hoşlanırım.' },
      { en: 'decide', tr: 'karar vermek (+ to)', example: 'We decided to leave early.', example_tr: 'Erken ayrılmaya karar verdik.' },
      { en: 'avoid', tr: 'kaçınmak (+ -ing)', example: 'Avoid eating late at night.', example_tr: 'Geç saatte yemekten kaçın.' },
      { en: 'afford', tr: 'gücü yetmek (+ to)', example: 'I can\'t afford to buy a new car.', example_tr: 'Yeni araba almaya param yetmez.' },
      { en: 'interested in', tr: 'ilgilenmek (+ -ing)', example: 'She is interested in learning Spanish.', example_tr: 'İspanyolca öğrenmekle ilgileniyor.' },
    ],
    exercises: [
      { type: 'gap', sentence: 'I enjoy ___ to music.', options: ['listen', 'listening', 'to listen'], answer: 1 },
      { type: 'gap', sentence: 'She decided ___ a new job.', options: ['find', 'finding', 'to find'], answer: 2 },
      { type: 'gap', sentence: 'He is good at ___ languages.', options: ['learn', 'learning', 'to learn'], answer: 1, explanation_tr: 'Edattan (at) sonra -ing.' },
      { type: 'gap', sentence: 'We can\'t afford ___ a house right now.', options: ['buying', 'to buy', 'buy'], answer: 1 },
      { type: 'mc', prompt: 'Hangisi doğru?', options: ['I avoid to drink coffee at night.', 'I avoid drinking coffee at night.', 'I avoid drink coffee at night.'], answer: 1 },
      { type: 'order', prompt_tr: 'Kitap okumaktan hoşlanırım.', words: ['enjoy', 'I', 'reading', 'books', 'to read'], answer: 'I enjoy reading books' },
      { type: 'gap', sentence: 'They finished ___ the house last week.', options: ['painting', 'to paint', 'paint'], answer: 0, explanation_tr: '"finish" -ing ister.' },
      { type: 'gap', sentence: 'I hope ___ you again soon.', options: ['seeing', 'to see', 'see'], answer: 1, explanation_tr: '"hope" to + fiil ister.' },
      { type: 'gap', sentence: 'She is interested in ___ photography.', options: ['learn', 'to learn', 'learning'], answer: 2, explanation_tr: 'Edattan (in) sonra -ing.' },
      { type: 'match', pairs: [['avoid', 'kaçınmak'], ['afford', 'gücü yetmek'], ['promise', 'söz vermek'], ['mind', 'sakıncası olmak']] },
    ],
    quiz: [
      {
        id: 'q_gi_1', mode: 'order', prompt_tr: 'Kitap okumaktan hoşlanırım.', answer_en: 'I enjoy reading books',
        words: ['enjoy', 'I', 'reading', 'books', 'to read'],
        error_variants: [
          { text: 'I enjoy to read books', tag: 'GERUND_INF', explanation_tr: '"enjoy" -ing ister: enjoy reading.' },
          { text: 'I enjoy read books', tag: 'GERUND_INF', explanation_tr: '"enjoy" den sonra -ing: reading.' },
        ],
      },
      {
        id: 'q_gi_2', mode: 'free', prompt_tr: 'Yurt dışında okumaya karar verdi (kadın).', answer_en: 'She decided to study abroad',
        error_variants: [
          { text: 'She decided studying abroad', tag: 'GERUND_INF', explanation_tr: '"decide" to + fiil ister: decided to study.' },
          { text: 'She decided study abroad', tag: 'GERUND_INF', explanation_tr: '"to" eksik: decided to study.' },
        ],
      },
      {
        id: 'q_gi_3', mode: 'order', prompt_tr: 'Satranç oynamakta iyidir.', answer_en: 'He is good at playing chess',
        words: ['is', 'He', 'good', 'at', 'playing', 'chess', 'to play'],
        error_variants: [
          { text: 'He is good at to play chess', tag: 'GERUND_INF', explanation_tr: 'Edattan (at) sonra -ing: playing.' },
          { text: 'He is good at play chess', tag: 'GERUND_INF', explanation_tr: 'Edattan sonra -ing: playing.' },
        ],
      },
      {
        id: 'q_gi_4', mode: 'free', prompt_tr: 'Geç saatte yemekten kaçın.', answer_en: 'Avoid eating late at night', accepted: ['Avoid eating late'],
        error_variants: [
          { text: 'Avoid to eat late at night', tag: 'GERUND_INF', explanation_tr: '"avoid" -ing ister: avoid eating.' },
          { text: 'Avoid eat late at night', tag: 'GERUND_INF', explanation_tr: '"avoid" den sonra -ing: eating.' },
        ],
      },
      {
        id: 'q_gi_5', mode: 'order', prompt_tr: 'Yeni araba almaya param yetmez.', answer_en: "I can't afford to buy a new car",
        words: ["can't", 'I', 'afford', 'to', 'buy', 'a', 'new', 'car', 'buying'],
        error_variants: [
          { text: "I can't afford buying a new car", tag: 'GERUND_INF', explanation_tr: '"afford" to + fiil ister: afford to buy.' },
          { text: "I can't afford buy a new car", tag: 'GERUND_INF', explanation_tr: '"to" eksik: afford to buy.' },
        ],
      },
      {
        id: 'q_gi_6', mode: 'free', prompt_tr: 'İspanyolca öğrenmek istiyorum.', answer_en: 'I want to learn Spanish', accepted: ["I'd like to learn Spanish", 'I would like to learn Spanish'],
        error_variants: [
          { text: 'I want learning Spanish', tag: 'GERUND_INF', explanation_tr: '"want" to + fiil ister: want to learn.' },
          { text: 'I want learn Spanish', tag: 'GERUND_INF', explanation_tr: '"to" eksik: want to learn.' },
        ],
      },
      {
        id: 'q_gi_7', mode: 'order', prompt_tr: 'Pencereyi açar mısın? (sakıncası yoksa)', answer_en: 'Do you mind opening the window',
        words: ['Do', 'you', 'mind', 'opening', 'the', 'window', 'to open'],
        error_variants: [
          { text: 'Do you mind to open the window', tag: 'GERUND_INF', explanation_tr: '"mind" -ing ister: mind opening.' },
          { text: 'Do you mind open the window', tag: 'GERUND_INF', explanation_tr: '"mind" dan sonra -ing: opening.' },
        ],
      },
      {
        id: 'q_gi_8', mode: 'free', prompt_tr: 'Akşam yemeğinden sonra yürüyüşe çıkmayı öneririm.', answer_en: 'I suggest going for a walk after dinner', accepted: ['I suggest taking a walk after dinner', 'I suggest we go for a walk after dinner', 'I suggest that we go for a walk after dinner'],
        error_variants: [
          { text: 'I suggest to go for a walk after dinner', tag: 'GERUND_INF', explanation_tr: '"suggest" -ing ister: suggest going.' },
          { text: 'I suggest go for a walk after dinner', tag: 'GERUND_INF', explanation_tr: '"suggest" dan sonra -ing: going.' },
        ],
      },
      {
        id: 'q_gi_9', mode: 'order', prompt_tr: 'Bana yardım edeceğine söz verdi (erkek).', answer_en: 'He promised to help me',
        words: ['He', 'promised', 'to', 'help', 'me', 'helping'],
        error_variants: [
          { text: 'He promised helping me', tag: 'GERUND_INF', explanation_tr: '"promise" to + fiil ister: promised to help.' },
          { text: 'He promised help me', tag: 'GERUND_INF', explanation_tr: '"to" eksik: promised to help.' },
        ],
      },
      {
        id: 'q_gi_10', mode: 'free', prompt_tr: 'Çıkmadan önce ışıkları kapat.', answer_en: 'Turn off the lights before leaving', accepted: ['Turn off the lights before you leave', 'Turn the lights off before leaving', 'Turn the lights off before you leave', 'Switch off the lights before leaving', 'Switch off the lights before you leave'],
        error_variants: [
          { text: 'Turn off the lights before to leave', tag: 'GERUND_INF', explanation_tr: 'Edattan (before) sonra -ing: before leaving.' },
          { text: 'Turn off the lights before leave', tag: 'GERUND_INF', explanation_tr: 'Edattan sonra -ing: before leaving.' },
        ],
      },
      {
        id: 'q_gi_11', mode: 'order', prompt_tr: 'Sigarayı bıraktı (kadın).', answer_en: 'She stopped smoking',
        words: ['She', 'stopped', 'smoking', 'to', 'smoke'],
        error_variants: [
          { text: 'She stopped smoke', tag: 'GERUND_INF', explanation_tr: 'Bırakmak anlamında "stop" -ing ister: stopped smoking.' },
          { text: 'She stopped to smoke', tag: 'GERUND_INF', explanation_tr: 'Dilbilgisi doğru ama anlam farklı: "stop to smoke" = sigara içmek için durmak. Bırakmak: stopped smoking.' },
        ],
      },
      {
        id: 'q_gi_12', mode: 'free', prompt_tr: 'Bilet almayı unuttum.', answer_en: 'I forgot to buy a ticket', accepted: ['I forgot to buy the ticket', 'I forgot to get a ticket', 'I forgot to get the ticket', 'I forgot to buy tickets', 'I forgot to buy the tickets'],
        error_variants: [
          { text: 'I forgot buy a ticket', tag: 'GERUND_INF', explanation_tr: '"forget" (yapmayı unutmak) to + fiil ister: forgot to buy.' },
          { text: 'I forgotten to buy a ticket', tag: 'PAST', explanation_tr: 'Geçmiş zaman: forgot (forgotten 3. haldir).' },
        ],
      },
    ],
  },
  {
    id: 'l_modals_obligation',
    skillId: 'modals_obligation',
    title: 'must / have to / should',
    title_tr: 'must / have to / should farkları',
    explanation_tr:
      'Üç fiil de "yapmalı" gibi çevrilir ama güç derecesi farklıdır. "must" güçlü, içsel bir zorunluluk veya kural bildirir, genelde konuşan kişinin kendi görüşüdür: "I must finish this today" (kendim böyle hissediyorum). "have to" dışarıdan gelen bir zorunluluktur, kural/otorite kaynaklıdır: "I have to wear a uniform at work" (şirket kuralı). Günlük konuşmada ikisi sık yer değiştirir ama olumsuzları TAMAMEN farklıdır: "mustn\'t" = YASAK (yapma!): "You mustn\'t smoke here." "don\'t have to" = GEREK YOK (istersen yap istersen yapma): "You don\'t have to come if you\'re tired." Bu ayrım Türklerin en sık karıştırdığı noktadır. "should" ise sadece tavsiye, zorunluluk yok: "You should see a doctor."',
    examples: [
      { en: 'You must wear a seatbelt.', tr: 'Emniyet kemeri takmalısın (kural/kanun).' },
      { en: 'You don\'t have to come to the meeting.', tr: 'Toplantıya gelmen gerekmiyor (istersen gel).' },
      { en: 'You mustn\'t park here.', tr: 'Buraya park etmen yasak.' },
    ],
    words: [
      { en: 'obligation', tr: 'zorunluluk', example: 'It\'s a legal obligation.', example_tr: 'Bu yasal bir zorunluluk.' },
      { en: 'seatbelt', tr: 'emniyet kemeri', example: 'Wear your seatbelt.', example_tr: 'Emniyet kemerini tak.' },
      { en: 'rule', tr: 'kural', example: 'It\'s a school rule.', example_tr: 'Bu bir okul kuralı.' },
      { en: 'forbidden', tr: 'yasak', example: 'Smoking is forbidden here.', example_tr: 'Burada sigara içmek yasak.' },
      { en: 'necessary', tr: 'gerekli', example: 'It isn\'t necessary to book in advance.', example_tr: 'Önceden rezervasyon yapmak gerekli değil.' },
    ],
    exercises: [
      { type: 'gap', sentence: 'You ___ smoke in the hospital. It\'s forbidden.', options: ['mustn\'t', 'don\'t have to'], answer: 0, explanation_tr: 'Yasak → mustn\'t.' },
      { type: 'gap', sentence: 'You ___ pay now, you can pay later.', options: ['mustn\'t', 'don\'t have to'], answer: 1, explanation_tr: 'Gerek yok → don\'t have to.' },
      { type: 'gap', sentence: 'You ___ see a dentist, your tooth looks bad.', options: ['should', 'must not'], answer: 0, explanation_tr: 'Tavsiye → should.' },
      { type: 'mc', prompt: '"don\'t have to" ne anlama gelir?', options: ['Yasak', 'Gerek yok, isteğe bağlı', 'Kesinlikle yapılmalı'], answer: 1 },
      { type: 'mc', prompt: '"mustn\'t" ne anlama gelir?', options: ['Gerek yok', 'Yasak, yapma', 'Tavsiye edilir'], answer: 1 },
      { type: 'order', prompt_tr: 'Emniyet kemeri takmalısın.', words: ['must', 'You', 'wear', 'a', 'seatbelt'], answer: 'You must wear a seatbelt' },
      { type: 'gap', sentence: 'In Turkey, you ___ drive on the right.', options: ['have to', "don't have to"], answer: 0, explanation_tr: 'Trafik kuralı, dışsal zorunluluk → have to.' },
      { type: 'gap', sentence: "It's Sunday, so I ___ go to work.", options: ["mustn't", "don't have to"], answer: 1, explanation_tr: 'Yasak değil, gerek yok → don\'t have to.' },
      { type: 'mc', prompt: 'Hangisi tavsiye bildirir?', options: ['You must stop.', 'You should rest.', 'You have to pay.'], answer: 1, explanation_tr: 'Tavsiye → should.' },
      { type: 'order', prompt_tr: 'Okulda üniforma giymek zorunda mısın?', words: ['Do', 'you', 'have', 'to', 'wear', 'a', 'uniform', 'at', 'school', 'must'], answer: 'Do you have to wear a uniform at school' },
    ],
    quiz: [
      {
        id: 'q_mo_1', mode: 'order', prompt_tr: 'Burada sigara içmen yasak.', answer_en: 'You mustn\'t smoke here',
        words: ['mustn\'t', 'You', 'smoke', 'here', 'don\'t have to'],
        error_variants: [
          { text: 'You don\'t have to smoke here', tag: 'MODAL', explanation_tr: '"don\'t have to" gerek yok demektir, yasak için "mustn\'t" gerekir.' },
          { text: 'You must not to smoke here', tag: 'MODAL', explanation_tr: 'must/mustn\'t\'dan sonra "to" gelmez: mustn\'t smoke.' },
        ],
      },
      {
        id: 'q_mo_2', mode: 'free', prompt_tr: 'Toplantıya gelmen gerekmiyor, istersen gel.', answer_en: 'You don\'t have to come to the meeting', accepted: ['You do not have to come to the meeting', 'You don\'t need to come to the meeting', 'You do not need to come to the meeting'],
        error_variants: [
          { text: 'You mustn\'t come to the meeting', tag: 'MODAL', explanation_tr: '"mustn\'t" yasak demektir; burada gerek yok anlamı: don\'t have to.' },
          { text: 'You not have to come to the meeting', tag: 'NEG', explanation_tr: 'Olumsuzda "don\'t" gerekli: don\'t have to.' },
        ],
      },
      {
        id: 'q_mo_3', mode: 'order', prompt_tr: 'Bir doktora görünmelisin.', answer_en: 'You should see a doctor',
        words: ['should', 'You', 'see', 'a', 'doctor', 'to see'],
        error_variants: [
          { text: 'You should to see a doctor', tag: 'SHOULD', explanation_tr: '"should" dan sonra "to" gelmez: should see.' },
        ],
      },
      {
        id: 'q_mo_4', mode: 'free', prompt_tr: 'Buraya park etmen yasak.', answer_en: 'You mustn\'t park here', accepted: ['You must not park here', 'You can\'t park here', 'You cannot park here'],
        error_variants: [
          { text: 'You don\'t have to park here', tag: 'MODAL', explanation_tr: 'Yasak için "mustn\'t" gerekir, "don\'t have to" gerek yok demektir.' },
          { text: 'You mustn\'t to park here', tag: 'MODAL', explanation_tr: 'mustn\'t\'dan sonra "to" gelmez: mustn\'t park.' },
        ],
      },
      {
        id: 'q_mo_5', mode: 'order', prompt_tr: 'Her gün erken kalkmak zorundayım.', answer_en: 'I have to get up early every day',
        words: ['have', 'I', 'to', 'get', 'up', 'early', 'every', 'day', 'must to'],
        error_variants: [
          { text: 'I must to get up early every day', tag: 'MODAL', explanation_tr: '"must" dan sonra "to" gelmez; "have to" kullanıyorsan "to" gerekli: have to get up.' },
          { text: 'I has to get up early every day', tag: 'SVAGR', explanation_tr: '"I" ile "have": have to.' },
        ],
      },
      {
        id: 'q_mo_6', mode: 'free', prompt_tr: 'Önceden rezervasyon yapmak zorunda değilsin.', answer_en: "You don't have to book in advance", accepted: ['You do not have to book in advance', "You don't need to book in advance", 'You do not need to book in advance', "You don't have to make a reservation in advance", "You don't need to make a reservation in advance"],
        error_variants: [
          { text: "You mustn't book in advance", tag: 'MODAL', explanation_tr: '"mustn\'t" yasak demektir; gerek yok için: don\'t have to.' },
          { text: "You don't must book in advance", tag: 'MODAL', explanation_tr: '"must" ile "don\'t" kullanılmaz: don\'t have to.' },
        ],
      },
      {
        id: 'q_mo_7', mode: 'order', prompt_tr: 'Bu ilaçla alkol içmemelisin (yasak).', answer_en: "You mustn't drink alcohol with this medicine",
        words: ['You', "mustn't", 'drink', 'alcohol', 'with', 'this', 'medicine', 'to', "don't"],
        error_variants: [
          { text: "You mustn't to drink alcohol with this medicine", tag: 'MODAL', explanation_tr: '"mustn\'t" dan sonra "to" gelmez.' },
          { text: "You don't drink alcohol with this medicine", tag: 'MODAL', explanation_tr: 'Bu cümle dilbilgisi olarak doğru ama yasak değil, bir alışkanlığı anlatır ("içmezsin"). Yasak için: mustn\'t drink.' },
        ],
      },
      {
        id: 'q_mo_8', mode: 'free', prompt_tr: 'Yarın erken kalkmak zorunda mısın?', answer_en: 'Do you have to get up early tomorrow', accepted: ['Do you have to wake up early tomorrow', 'Do you need to get up early tomorrow', 'Do you need to wake up early tomorrow'],
        error_variants: [
          { text: 'Do you must get up early tomorrow', tag: 'MODAL', explanation_tr: '"must" ile "do" kullanılmaz: Do you have to...?' },
          { text: 'Do you have get up early tomorrow', tag: 'HAVE_TO', explanation_tr: '"to" eksik: have to get up.' },
        ],
      },
      {
        id: 'q_mo_9', mode: 'order', prompt_tr: 'Annem her gün çalışmak zorunda.', answer_en: 'My mother has to work every day',
        words: ['My', 'mother', 'has', 'to', 'work', 'every', 'day', 'have'],
        error_variants: [
          { text: 'My mother have to work every day', tag: 'SVAGR', explanation_tr: 'my mother (she) → has to.' },
          { text: 'My mother has to works every day', tag: 'HAVE_TO', explanation_tr: '"has to" dan sonra fiil yalın: work.' },
        ],
      },
      {
        id: 'q_mo_10', mode: 'free', prompt_tr: 'Daha çok su içmelisin (tavsiye).', answer_en: 'You should drink more water', accepted: ['You ought to drink more water'],
        error_variants: [
          { text: 'You should to drink more water', tag: 'SHOULD', explanation_tr: '"should" dan sonra "to" gelmez.' },
          { text: 'You should drinks more water', tag: 'SHOULD', explanation_tr: '"should" dan sonra fiil yalın: drink.' },
        ],
      },
      {
        id: 'q_mo_11', mode: 'order', prompt_tr: 'Dün geç saate kadar çalışmak zorunda kaldım.', answer_en: 'I had to work late yesterday',
        words: ['I', 'had', 'to', 'work', 'late', 'yesterday', 'must'],
        error_variants: [
          { text: 'I must work late yesterday', tag: 'MODAL', explanation_tr: '"must" ün geçmiş hali yok; geçmişte zorunluluk: had to.' },
          { text: 'I have to work late yesterday', tag: 'MODAL', explanation_tr: '"yesterday" geçmiş → had to.' },
        ],
      },
      {
        id: 'q_mo_12', mode: 'free', prompt_tr: 'Müzede fotoğraf çekmek yasak.', answer_en: "You mustn't take photos in the museum", accepted: ['You must not take photos in the museum', "You can't take photos in the museum", 'You cannot take photos in the museum', "You mustn't take pictures in the museum", 'You must not take pictures in the museum', "You can't take pictures in the museum", 'Taking photos is forbidden in the museum', 'Taking photos is not allowed in the museum', 'You are not allowed to take photos in the museum', "You aren't allowed to take photos in the museum"],
        error_variants: [
          { text: "You don't have to take photos in the museum", tag: 'MODAL', explanation_tr: '"don\'t have to" gerek yok demektir; yasak için: mustn\'t.' },
          { text: "You mustn't to take photos in the museum", tag: 'MODAL', explanation_tr: '"mustn\'t" dan sonra "to" gelmez.' },
        ],
      },
    ],
  },
]
