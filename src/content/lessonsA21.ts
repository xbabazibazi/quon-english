import type { Lesson } from './types'

export const LESSONS_A21: Lesson[] = [
  {
    id: 'l_past_simple',
    skillId: 'past_simple',
    title: 'Past simple: worked / went',
    title_tr: 'Geçmiş zaman: worked / went',
    explanation_tr:
      'Geçmişte biten bir eylemi anlatmak için past simple kullanılır. Düzenli fiiller -ed alır: work → worked, play → played. Düzensiz fiiller ezberlenir: go → went, have → had, see → saw, eat → ate. Olumlu cümlede özne ne olursa olsun fiil aynı kalır (he/she/it için -s eklenmez!): "She worked yesterday." Soru ve olumsuzda "did" kullanılır ve asıl fiil YALIN kalır: "Did you go?" ("Did you went?" ✗), "I didn\'t go" ("I didn\'t went" ✗). Türklerin en sık hatası, did kullandıktan sonra fiili yine de geçmiş zamanda bırakmaktır — did zaten geçmişi gösterdiği için fiile dokunulmaz.',
    examples: [
      { en: 'I worked late last night.', tr: 'Dün gece geç saate kadar çalıştım.' },
      { en: 'She went to Izmir last summer.', tr: 'Geçen yaz İzmir\'e gitti.' },
      { en: "Did you see that movie?", tr: 'O filmi gördün mü?' },
    ],
    words: [
      { en: 'yesterday', tr: 'dün', example: 'I called her yesterday.', example_tr: 'Dün onu aradım.' },
      { en: 'last night', tr: 'dün gece', example: 'We watched a film last night.', example_tr: 'Dün gece film izledik.' },
      { en: 'ago', tr: 'önce', example: 'He left two hours ago.', example_tr: 'İki saat önce ayrıldı.' },
      { en: 'went', tr: 'gitti (go)', example: 'They went home early.', example_tr: 'Eve erken gittiler.' },
      { en: 'saw', tr: 'gördü (see)', example: 'I saw Ali at the market.', example_tr: 'Ali\'yi markette gördüm.' },
    ],
    exercises: [
      { type: 'gap', sentence: 'I ___ late last night.', options: ['work', 'worked', 'working'], answer: 1 },
      { type: 'gap', sentence: 'She ___ to Izmir last summer.', options: ['go', 'goed', 'went'], answer: 2, explanation_tr: 'Düzensiz fiil: go → went.' },
      { type: 'gap', sentence: 'Did you ___ that movie?', options: ['saw', 'see', 'seen'], answer: 1, explanation_tr: 'did\'ten sonra fiil yalın: did you see.' },
      { type: 'mc', prompt: 'Hangisi doğru?', options: ["I didn't went.", "I didn't go.", "I not went."], answer: 1 },
      { type: 'match', pairs: [['go', 'went'], ['have', 'had'], ['see', 'saw'], ['eat', 'ate']] },
      { type: 'order', prompt_tr: 'İki saat önce ayrıldı.', words: ['left', 'He', 'two', 'hours', 'ago'], answer: 'He left two hours ago' },
      { type: 'gap', sentence: 'We ___ a film last night.', options: ['watch', 'watched', 'watches'], answer: 1 },
      { type: 'mc', prompt: '"Dün ne yedin?" nasıl denir?', options: ['What did you eat yesterday?', 'What did you ate yesterday?', 'What you ate yesterday?'], answer: 0, explanation_tr: 'did + yalın fiil: did you eat.' },
      { type: 'match', pairs: [['buy', 'bought'], ['come', 'came'], ['make', 'made'], ['take', 'took']] },
      { type: 'order', prompt_tr: 'Dün onu aradım (kadın).', words: ['called', 'I', 'her', 'yesterday'], answer: 'I called her yesterday' },
    ],
    quiz: [
      {
        id: 'q_ps2_1', mode: 'order', prompt_tr: 'Dün gece geç saate kadar çalıştım.', answer_en: 'I worked late last night', accepted: ['Last night I worked late'],
        words: ['I', 'worked', 'late', 'last', 'night', 'work'],
        error_variants: [
          { text: 'I work late last night', tag: 'PAST', explanation_tr: 'Geçmiş zaman eki gerekli: worked.' },
        ],
      },
      {
        id: 'q_ps2_2', mode: 'free', prompt_tr: 'Geçen yaz İzmir\'e gitti (kadın).', answer_en: 'She went to Izmir last summer', accepted: ['Last summer she went to Izmir'],
        error_variants: [
          { text: 'She goed to Izmir last summer', tag: 'PAST', explanation_tr: 'go düzensizdir: went.' },
          { text: 'She go to Izmir last summer', tag: 'PAST', explanation_tr: 'Geçmiş zaman: went.' },
        ],
      },
      {
        id: 'q_ps2_3', mode: 'order', prompt_tr: 'O filmi gördün mü?', answer_en: 'Did you see that movie',
        words: ['Did', 'you', 'see', 'that', 'movie', 'saw'],
        error_variants: [
          { text: 'Did you saw that movie', tag: 'PAST', explanation_tr: 'did\'ten sonra fiil yalın: did you see.' },
          { text: 'You did see that movie', tag: 'DO_Q', explanation_tr: 'Soruda "did" başa gelir: Did you see?' },
        ],
      },
      {
        id: 'q_ps2_4', mode: 'free', prompt_tr: 'Dün onu aramadım (kadın).', answer_en: "I didn't call her yesterday", accepted: ['I did not call her yesterday', "Yesterday I didn't call her"],
        error_variants: [
          { text: "I didn't called her yesterday", tag: 'PAST', explanation_tr: "didn't'tan sonra fiil yalın: didn't call." },
          { text: 'I not called her yesterday', tag: 'NEG', explanation_tr: 'Olumsuz için "didn\'t" gerekli: I didn\'t call.' },
        ],
      },
      {
        id: 'q_ps2_5', mode: 'order', prompt_tr: 'Ali\'yi markette gördüm.', answer_en: 'I saw Ali at the market',
        words: ['I', 'saw', 'Ali', 'at', 'the', 'market', 'see'],
        error_variants: [
          { text: 'I see Ali at the market', tag: 'PAST', explanation_tr: 'Geçmiş: saw.' },
          { text: 'I saw Ali at market', tag: 'ART', explanation_tr: '"the" eksik: at the market.' },
        ],
      },
      {
        id: 'q_ps2_6', mode: 'free', prompt_tr: 'Geçen hafta Ankara\'ya gittik.', answer_en: 'We went to Ankara last week', accepted: ['Last week we went to Ankara'],
        error_variants: [
          { text: 'We goed to Ankara last week', tag: 'PAST', explanation_tr: 'go düzensizdir: went.' },
          { text: 'We go to Ankara last week', tag: 'PAST', explanation_tr: 'Geçmiş zaman: went.' },
        ],
      },
      {
        id: 'q_ps2_7', mode: 'order', prompt_tr: 'Kahvaltıda ne yedin?', answer_en: 'What did you eat for breakfast',
        words: ['What', 'did', 'you', 'eat', 'for', 'breakfast', 'ate'],
        error_variants: [
          { text: 'What did you ate for breakfast', tag: 'PAST', explanation_tr: 'did\'ten sonra fiil yalın: did you eat.' },
          { text: 'What you ate for breakfast', tag: 'DO_Q', explanation_tr: 'Geçmiş zaman sorusunda "did" gerekli: What did you eat?' },
        ],
      },
      {
        id: 'q_ps2_8', mode: 'free', prompt_tr: 'O (erkek) dün işe gelmedi.', answer_en: "He didn't come to work yesterday", accepted: ['He did not come to work yesterday', "Yesterday he didn't come to work", 'Yesterday he did not come to work'],
        error_variants: [
          { text: "He didn't came to work yesterday", tag: 'PAST', explanation_tr: "didn't'tan sonra fiil yalın: didn't come." },
          { text: "He doesn't come to work yesterday", tag: 'PAST', explanation_tr: 'Geçmişte olumsuz için didn\'t: He didn\'t come.' },
        ],
      },
      {
        id: 'q_ps2_9', mode: 'order', prompt_tr: 'Üç yıl önce bir araba aldım.', answer_en: 'I bought a car three years ago', accepted: ['Three years ago I bought a car'],
        words: ['I', 'bought', 'a', 'car', 'three', 'years', 'ago', 'buyed'],
        error_variants: [
          { text: 'I buyed a car three years ago', tag: 'PAST', explanation_tr: 'buy düzensizdir: bought.' },
          { text: 'I bought a car before three years', tag: 'TIME', explanation_tr: '"üç yıl önce" = three years ago; süreden sonra "ago" gelir.' },
        ],
      },
      {
        id: 'q_ps2_10', mode: 'free', prompt_tr: 'Film saat kaçta başladı?', answer_en: 'What time did the film start', accepted: ['What time did the movie start', 'When did the film start', 'When did the movie start'],
        error_variants: [
          { text: 'What time did the film started', tag: 'PAST', explanation_tr: 'did\'ten sonra fiil yalın: did the film start.' },
          { text: 'What time the film started', tag: 'DO_Q', explanation_tr: 'Soruda "did" gerekli: What time did the film start?' },
        ],
      },
      {
        id: 'q_ps2_11', mode: 'order', prompt_tr: 'Dün çok yorgundum.', answer_en: 'I was very tired yesterday', accepted: ['Yesterday I was very tired'],
        words: ['I', 'was', 'very', 'tired', 'yesterday', 'were'],
        error_variants: [
          { text: 'I very tired yesterday', tag: 'TOBE', explanation_tr: 'to be\'nin geçmişi eksik: I was tired.' },
          { text: 'I were very tired yesterday', tag: 'PAST', explanation_tr: 'I ile "was" kullanılır: I was.' },
        ],
      },
      {
        id: 'q_ps2_12', mode: 'free', prompt_tr: 'Dün akşam ne yaptın?', answer_en: 'What did you do last night', accepted: ['What did you do yesterday evening', 'What did you do last evening'],
        error_variants: [
          { text: 'What did you did last night', tag: 'PAST', explanation_tr: 'did\'ten sonra fiil yalın: did you do.' },
          { text: 'What you did last night', tag: 'DO_Q', explanation_tr: 'Soruda "did" gerekli: What did you do?' },
        ],
      },
    ],
  },
  {
    id: 'l_going_to',
    skillId: 'going_to',
    title: 'going to — plans',
    title_tr: 'going to — plan',
    explanation_tr:
      'Önceden karar verilmiş bir planı anlatmak için "be + going to + fiil(yalın)" kullanılır: "I am going to study tonight." Türklerin iki hatası var: birincisi to be\'yi atlamak ("I going to study" ✗), ikincisi "going to" dan sonraki fiili yine -ing yapmak ("I am going to studying" ✗ — fiil mutlaka yalın kalmalı). Olumsuz: be + not + going to ("I\'m not going to go"). Soru: be özneden önce ("Are you going to call her?"). "going to go" tuhaf gelse de doğrudur: "I\'m going to go home" = eve gitmeyi planlıyorum.',
    examples: [
      { en: "I'm going to study tonight.", tr: 'Bu gece ders çalışacağım (plan).' },
      { en: 'They are going to buy a new car.', tr: 'Yeni bir araba alacaklar.' },
      { en: 'Is she going to call you?', tr: 'Seni arayacak mı?' },
    ],
    words: [
      { en: 'plan', tr: 'plan', example: "What's your plan for tomorrow?", example_tr: 'Yarın için planın ne?' },
      { en: 'buy', tr: 'satın almak', example: "We're going to buy a house.", example_tr: 'Bir ev alacağız.' },
      { en: 'visit', tr: 'ziyaret etmek', example: "I'm going to visit my grandmother.", example_tr: 'Büyükannemi ziyaret edeceğim.' },
      { en: 'move', tr: 'taşınmak', example: "They're going to move to Ankara.", example_tr: 'Ankara\'ya taşınacaklar.' },
      { en: 'tonight', tr: 'bu gece', example: "I'm going to sleep early tonight.", example_tr: 'Bu gece erken yatacağım.' },
    ],
    exercises: [
      { type: 'gap', sentence: 'I ___ going to study tonight.', options: ['am', 'is', 'are'], answer: 0 },
      { type: 'gap', sentence: 'They are going to ___ a new car.', options: ['buy', 'buying', 'bought'], answer: 0 },
      { type: 'mc', prompt: 'Hangisi doğru?', options: ['I going to study.', "I'm going to study.", "I'm going to studying."], answer: 1 },
      { type: 'gap', sentence: '___ she going to call you?', options: ['Does', 'Is', 'Do'], answer: 1 },
      { type: 'match', pairs: [['I', "I'm going to"], ['She', "She's going to"], ['They', "They're going to"], ['We', "We're going to"]] },
      { type: 'order', prompt_tr: 'Büyükannemi ziyaret edeceğim.', words: ["I'm", 'going', 'to', 'visit', 'my', 'grandmother'], answer: "I'm going to visit my grandmother" },
      { type: 'gap', sentence: 'We ___ going to visit our grandparents.', options: ['is', 'are', 'am'], answer: 1 },
      { type: 'mc', prompt: 'Hangisi olumsuz ve doğru?', options: ["She isn't going to come.", "She doesn't going to come.", "She isn't going to coming."], answer: 0 },
      { type: 'match', pairs: [["I'm going to buy", 'alacağım'], ["I'm going to visit", 'ziyaret edeceğim'], ["I'm going to move", 'taşınacağım'], ["I'm going to sleep", 'uyuyacağım']] },
      { type: 'order', prompt_tr: 'Bu akşam ne yapacaksın?', words: ['What', 'are', 'you', 'going', 'to', 'do', 'tonight'], answer: 'What are you going to do tonight' },
    ],
    quiz: [
      {
        id: 'q_gt_1', mode: 'order', prompt_tr: 'Bu gece ders çalışacağım.', answer_en: "I'm going to study tonight",
        words: ["I'm", 'going', 'to', 'study', 'tonight', 'studying'],
        error_variants: [
          { text: 'I going to study tonight', tag: 'GOING_TO', explanation_tr: 'to be eksik: I\'m going to study.' },
          { text: "I'm going to studying tonight", tag: 'GOING_TO', explanation_tr: '"going to"dan sonra fiil yalın: going to study.' },
        ],
      },
      {
        id: 'q_gt_2', mode: 'free', prompt_tr: 'Yeni bir araba alacaklar.', answer_en: 'They are going to buy a new car', accepted: ["They're going to buy a new car"],
        error_variants: [
          { text: 'They going to buy a new car', tag: 'GOING_TO', explanation_tr: 'to be eksik: They are going to buy.' },
          { text: 'They are going to buying a new car', tag: 'GOING_TO', explanation_tr: 'Fiil yalın kalmalı: going to buy.' },
        ],
      },
      {
        id: 'q_gt_3', mode: 'order', prompt_tr: 'Seni arayacak mı? (kadın)', answer_en: 'Is she going to call you',
        words: ['Is', 'she', 'going', 'to', 'call', 'you', 'Does'],
        error_variants: [
          { text: 'Does she going to call you', tag: 'GOING_TO', explanation_tr: 'to be sorusu "does" ile değil "is" ile: Is she going to call?' },
          { text: 'She is going to call you', tag: 'WORD_ORDER', explanation_tr: 'Soruda to be başa gelir: Is she going to...?' },
        ],
      },
      {
        id: 'q_gt_4', mode: 'free', prompt_tr: 'Ankara\'ya taşınmayacağız.', answer_en: "We are not going to move to Ankara", accepted: ["We're not going to move to Ankara", "We aren't going to move to Ankara"],
        error_variants: [
          { text: "We don't going to move to Ankara", tag: 'GOING_TO', explanation_tr: 'Olumsuz to be ile kurulur: We are not going to move.' },
          { text: 'We are not going to moving to Ankara', tag: 'GOING_TO', explanation_tr: 'Fiil yalın: going to move.' },
        ],
      },
      {
        id: 'q_gt_5', mode: 'order', prompt_tr: 'Bir ev alacağız.', answer_en: "We are going to buy a house", accepted: ["We're going to buy a house"],
        words: ['We', 'are', 'going', 'to', 'buy', 'a', 'house'],
        error_variants: [
          { text: 'We are going buy a house', tag: 'GOING_TO', explanation_tr: '"to" eksik: going to buy.' },
          { text: 'We going to buy a house', tag: 'GOING_TO', explanation_tr: 'to be eksik: We are going to buy.' },
        ],
      },
      {
        id: 'q_gt_6', mode: 'free', prompt_tr: 'Bu yaz Antalya\'ya gideceğiz.', answer_en: 'We are going to go to Antalya this summer', accepted: ["We're going to go to Antalya this summer", 'We are going to Antalya this summer', "We're going to Antalya this summer", 'This summer we are going to go to Antalya', "This summer we're going to go to Antalya"],
        error_variants: [
          { text: 'We going to go to Antalya this summer', tag: 'GOING_TO', explanation_tr: 'to be eksik: We are going to go.' },
          { text: 'We are going to going to Antalya this summer', tag: 'GOING_TO', explanation_tr: '"going to"dan sonra fiil yalın: going to go.' },
        ],
      },
      {
        id: 'q_gt_7', mode: 'order', prompt_tr: 'Ne zaman taşınacaklar?', answer_en: 'When are they going to move',
        words: ['When', 'are', 'they', 'going', 'to', 'move', 'do'],
        error_variants: [
          { text: 'When they are going to move', tag: 'WH', explanation_tr: 'Soru kelimesinden sonra to be gelir: When are they going to move?' },
          { text: 'When do they going to move', tag: 'GOING_TO', explanation_tr: 'going to sorusu "do" ile değil to be ile kurulur: When are they...?' },
        ],
      },
      {
        id: 'q_gt_8', mode: 'free', prompt_tr: 'O (kadın) doktor olacak.', answer_en: 'She is going to be a doctor', accepted: ["She's going to be a doctor"],
        error_variants: [
          { text: 'She is going to be doctor', tag: 'ART', explanation_tr: 'Meslekten önce "a": a doctor.' },
          { text: 'She going to be a doctor', tag: 'GOING_TO', explanation_tr: 'to be eksik: She is going to be.' },
        ],
      },
      {
        id: 'q_gt_9', mode: 'order', prompt_tr: 'Bugün dışarı çıkmayacağım.', answer_en: "I'm not going to go out today", accepted: ['I am not going to go out today', "Today I'm not going to go out"],
        words: ["I'm", 'not', 'going', 'to', 'go', 'out', 'today', "don't"],
        error_variants: [
          { text: "I don't going to go out today", tag: 'GOING_TO', explanation_tr: 'Olumsuz to be ile kurulur: I\'m not going to go.' },
          { text: "I'm not going to going out today", tag: 'GOING_TO', explanation_tr: 'Fiil yalın kalır: going to go out.' },
        ],
      },
      {
        id: 'q_gt_10', mode: 'free', prompt_tr: 'Akşam yemeğini sen mi pişireceksin?', answer_en: 'Are you going to cook dinner', accepted: ['Are you going to cook dinner tonight', 'Are you going to make dinner'],
        error_variants: [
          { text: 'Do you going to cook dinner', tag: 'GOING_TO', explanation_tr: 'Soru to be ile kurulur: Are you going to cook?' },
          { text: 'Are you going to cooking dinner', tag: 'GOING_TO', explanation_tr: 'Fiil yalın kalır: going to cook.' },
        ],
      },
      {
        id: 'q_gt_11', mode: 'order', prompt_tr: 'Babam yeni bir telefon alacak.', answer_en: 'My father is going to buy a new phone',
        words: ['My', 'father', 'is', 'going', 'to', 'buy', 'a', 'new', 'phone', 'are'],
        error_variants: [
          { text: 'My father are going to buy a new phone', tag: 'TOBE', explanation_tr: 'My father = he → is: My father is going to buy.' },
          { text: 'My father going to buy a new phone', tag: 'GOING_TO', explanation_tr: 'to be eksik: My father is going to buy.' },
        ],
      },
      {
        id: 'q_gt_12', mode: 'free', prompt_tr: 'Yarın erken kalkacağım.', answer_en: "I'm going to get up early tomorrow", accepted: ['I am going to get up early tomorrow', "Tomorrow I'm going to get up early", 'Tomorrow I am going to get up early', "I'm going to wake up early tomorrow", 'I am going to wake up early tomorrow'],
        error_variants: [
          { text: 'I going to get up early tomorrow', tag: 'GOING_TO', explanation_tr: 'to be eksik: I\'m going to get up.' },
          { text: "I'm going to getting up early tomorrow", tag: 'GOING_TO', explanation_tr: 'Fiil yalın kalır: going to get up.' },
        ],
      },
    ],
  },
  {
    id: 'l_comparatives',
    skillId: 'comparatives',
    title: 'bigger / more expensive',
    title_tr: 'Karşılaştırma: bigger / more expensive',
    explanation_tr:
      'İki şeyi karşılaştırırken kısa sıfatlar (1 hece, bazen 2) -er alır: big → bigger, cheap → cheaper, happy → happier (y → i + er). Uzun sıfatlar (2+ hece) "more" ile kullanılır: expensive → more expensive, beautiful → more beautiful. Karşılaştırmanın ikinci tarafı "than" ile bağlanır: "Istanbul is bigger than Bursa." Türklerin klasik hatası ikisini birden kullanmaktır: "more bigger" ✗ — ya -er ya more, ikisi birlikte asla olmaz. Düzensizler ezber: good → better, bad → worse, far → farther/further.',
    examples: [
      { en: 'Istanbul is bigger than Bursa.', tr: 'İstanbul Bursa\'dan büyüktür.' },
      { en: 'This phone is more expensive than that one.', tr: 'Bu telefon o telefondan daha pahalı.' },
      { en: 'My sister is better at math than me.', tr: 'Kız kardeşim matematikte benden daha iyi.' },
    ],
    words: [
      { en: 'cheap', tr: 'ucuz', example: 'This one is cheaper.', example_tr: 'Bu daha ucuz.' },
      { en: 'expensive', tr: 'pahalı', example: 'That car is more expensive.', example_tr: 'O araba daha pahalı.' },
      { en: 'fast', tr: 'hızlı', example: 'The train is faster than the bus.', example_tr: 'Tren otobüsten daha hızlı.' },
      { en: 'beautiful', tr: 'güzel', example: 'Her garden is more beautiful.', example_tr: 'Onun bahçesi daha güzel.' },
      { en: 'far', tr: 'uzak', example: "My house is farther than yours.", example_tr: 'Benim evim seninkinden daha uzak.' },
    ],
    exercises: [
      { type: 'gap', sentence: 'Istanbul is ___ than Bursa.', options: ['big', 'bigger', 'more big'], answer: 1 },
      { type: 'gap', sentence: 'This phone is ___ than that one.', options: ['expensiver', 'more expensive', 'expensive'], answer: 1 },
      { type: 'mc', prompt: 'Hangisi doğru?', options: ['more bigger', 'bigger', 'more big'], answer: 1 },
      { type: 'gap', sentence: 'She is ___ at math than me.', options: ['gooder', 'more good', 'better'], answer: 2, explanation_tr: 'Düzensiz: good → better.' },
      { type: 'match', pairs: [['big', 'bigger'], ['expensive', 'more expensive'], ['good', 'better'], ['happy', 'happier']] },
      { type: 'order', prompt_tr: 'Tren otobüsten daha hızlı.', words: ['faster', 'The', 'train', 'is', 'than', 'the', 'bus'], answer: 'The train is faster than the bus' },
      { type: 'gap', sentence: 'Ankara is ___ than Izmir in winter.', options: ['cold', 'colder', 'more cold'], answer: 1 },
      { type: 'gap', sentence: 'Today is ___ than yesterday.', options: ['hotter', 'hoter', 'more hot'], answer: 0, explanation_tr: 'Tek ünlü + tek ünsüzle biten kısa sıfatta son harf ikilenir: hot → hotter.' },
      { type: 'mc', prompt: 'Hangisi doğru?', options: ['My English is worse than his.', 'My English is badder than his.', 'My English is more bad than his.'], answer: 0, explanation_tr: 'Düzensiz: bad → worse.' },
      { type: 'order', prompt_tr: 'Benim evim seninkinden daha küçük.', words: ['My', 'house', 'is', 'smaller', 'than', 'yours'], answer: 'My house is smaller than yours' },
    ],
    quiz: [
      {
        id: 'q_cmp_1', mode: 'order', prompt_tr: 'İstanbul Bursa\'dan büyüktür.', answer_en: 'Istanbul is bigger than Bursa',
        words: ['Istanbul', 'is', 'bigger', 'than', 'Bursa', 'more'],
        error_variants: [
          { text: 'Istanbul is more bigger than Bursa', tag: 'COMP', explanation_tr: '-er ve more birlikte kullanılmaz: bigger.' },
          { text: 'Istanbul is bigger as Bursa', tag: 'COMP', explanation_tr: 'Karşılaştırmada "than" kullanılır: bigger than.' },
        ],
      },
      {
        id: 'q_cmp_2', mode: 'free', prompt_tr: 'Bu telefon o telefondan daha pahalı.', answer_en: 'This phone is more expensive than that one', accepted: ['This phone is more expensive than that phone'],
        error_variants: [
          { text: 'This phone is expensiver than that one', tag: 'COMP', explanation_tr: 'Uzun sıfat "more" ile: more expensive.' },
          { text: 'This phone is more expensive as that one', tag: 'COMP', explanation_tr: '"than" kullanılır: more expensive than.' },
        ],
      },
      {
        id: 'q_cmp_3', mode: 'order', prompt_tr: 'Kız kardeşim matematikte benden daha iyi.', answer_en: 'My sister is better at math than me',
        words: ['My', 'sister', 'is', 'better', 'at', 'math', 'than', 'me', 'gooder'],
        error_variants: [
          { text: 'My sister is gooder at math than me', tag: 'COMP', explanation_tr: 'Düzensiz sıfat: good → better.' },
          { text: 'My sister is better in math than me', tag: 'PREP', explanation_tr: 'Alanda iyi olmak için "at": good/better at.' },
        ],
      },
      {
        id: 'q_cmp_4', mode: 'free', prompt_tr: 'Bu daha ucuz.', answer_en: 'This one is cheaper', accepted: ['This is cheaper'],
        error_variants: [
          { text: 'This one is more cheap', tag: 'COMP', explanation_tr: 'Kısa sıfat -er alır: cheaper.' },
          { text: 'This one is more cheaper', tag: 'COMP', explanation_tr: 'İkisi birden olmaz: cheaper.' },
        ],
      },
      {
        id: 'q_cmp_5', mode: 'order', prompt_tr: 'Onun (kadın) bahçesi daha güzel.', answer_en: 'Her garden is more beautiful',
        words: ['Her', 'garden', 'is', 'more', 'beautiful', 'beautifuler'],
        error_variants: [
          { text: 'Her garden is beautifuler', tag: 'COMP', explanation_tr: 'Uzun sıfat "more" ile: more beautiful.' },
          { text: 'His garden is more beautiful', tag: 'GEN', explanation_tr: 'Kadın için "her": Her garden.' },
        ],
      },
      {
        id: 'q_cmp_6', mode: 'free', prompt_tr: 'Tren otobüsten daha hızlı.', answer_en: 'The train is faster than the bus', accepted: ['Trains are faster than buses'],
        error_variants: [
          { text: 'The train is more fast than the bus', tag: 'COMP', explanation_tr: 'Kısa sıfat -er alır: faster.' },
          { text: 'The train is faster from the bus', tag: 'COMP', explanation_tr: 'Türkçedeki "-den" eki karşılaştırmada "than" olur: faster than.' },
        ],
      },
      {
        id: 'q_cmp_7', mode: 'order', prompt_tr: 'Bugün dünden daha sıcak.', answer_en: 'Today is hotter than yesterday',
        words: ['Today', 'is', 'hotter', 'than', 'yesterday', 'more'],
        error_variants: [
          { text: 'Today is more hot than yesterday', tag: 'COMP', explanation_tr: 'Kısa sıfat -er alır: hotter.' },
          { text: 'Today is hoter than yesterday', tag: 'COMP', explanation_tr: 'Son harf ikilenir: hot → hotter.' },
        ],
      },
      {
        id: 'q_cmp_8', mode: 'free', prompt_tr: 'Benim çantam seninkinden daha ağır.', answer_en: 'My bag is heavier than yours', accepted: ['My bag is heavier than your bag'],
        error_variants: [
          { text: 'My bag is more heavy than yours', tag: 'COMP', explanation_tr: '-y ile biten kısa sıfat: heavy → heavier.' },
          { text: 'My bag is heavyer than yours', tag: 'COMP', explanation_tr: 'y → i olur: heavier.' },
        ],
      },
      {
        id: 'q_cmp_9', mode: 'order', prompt_tr: 'Onun (erkek) İngilizcesi benimkinden daha kötü.', answer_en: 'His English is worse than mine',
        words: ['His', 'English', 'is', 'worse', 'than', 'mine', 'badder'],
        error_variants: [
          { text: 'His English is badder than mine', tag: 'COMP', explanation_tr: 'Düzensiz: bad → worse.' },
          { text: 'His English is worse than me', tag: 'POSS', explanation_tr: 'İngilizceyi İngilizceyle karşılaştır: mine (benimki).' },
        ],
      },
      {
        id: 'q_cmp_10', mode: 'free', prompt_tr: 'Bu kitap o kitaptan daha ilginç.', answer_en: 'This book is more interesting than that book', accepted: ['This book is more interesting than that one'],
        error_variants: [
          { text: 'This book is interestinger than that book', tag: 'COMP', explanation_tr: 'Uzun sıfat "more" ile: more interesting.' },
          { text: 'This book is more interesting from that book', tag: 'COMP', explanation_tr: 'Karşılaştırmada "than": more interesting than.' },
        ],
      },
      {
        id: 'q_cmp_11', mode: 'order', prompt_tr: 'Ali Mehmet\'ten daha uzun boylu.', answer_en: 'Ali is taller than Mehmet',
        words: ['Ali', 'is', 'taller', 'than', 'Mehmet', 'more'],
        error_variants: [
          { text: 'Ali is more tall than Mehmet', tag: 'COMP', explanation_tr: 'Kısa sıfat -er alır: taller.' },
          { text: 'Ali taller than Mehmet', tag: 'TOBE', explanation_tr: '"is" eksik: Ali is taller.' },
        ],
      },
      {
        id: 'q_cmp_12', mode: 'free', prompt_tr: 'Kahve çaydan daha pahalı.', answer_en: 'Coffee is more expensive than tea', accepted: ['The coffee is more expensive than the tea'],
        error_variants: [
          { text: 'Coffee is expensiver than tea', tag: 'COMP', explanation_tr: 'Uzun sıfat "more" ile: more expensive.' },
          { text: 'Coffee is more expensive as tea', tag: 'COMP', explanation_tr: 'Karşılaştırmada "than": more expensive than.' },
        ],
      },
    ],
  },
  {
    id: 'l_superlatives',
    skillId: 'superlatives',
    title: 'the biggest / the most expensive',
    title_tr: 'Üstünlük: the biggest / the most expensive',
    explanation_tr:
      'Üç veya daha fazla şey arasında "en" olanı anlatırken kısa sıfatlar "the -est" alır: big → the biggest, cheap → the cheapest. Uzun sıfatlar "the most" ile kullanılır: expensive → the most expensive, beautiful → the most beautiful. Comparatives\'tan farkı: burada ikiden fazla şey karşılaştırılır ve başına MUTLAKA "the" gelir — Türkler bu "the"yi sık atlar. Düzensizler ezberlenir: good → the best, bad → the worst. "in" ile bir grup/yer belirtilir: "the biggest city in Turkey."',
    examples: [
      { en: 'Istanbul is the biggest city in Turkey.', tr: 'İstanbul Türkiye\'nin en büyük şehridir.' },
      { en: 'This is the most expensive restaurant in town.', tr: 'Bu, şehirdeki en pahalı restoran.' },
      { en: 'He is the best player on the team.', tr: 'O, takımdaki en iyi oyuncu.' },
    ],
    words: [
      { en: 'city', tr: 'şehir', example: 'the biggest city', example_tr: 'en büyük şehir' },
      { en: 'restaurant', tr: 'restoran', example: 'the most expensive restaurant', example_tr: 'en pahalı restoran' },
      { en: 'team', tr: 'takım', example: 'the best team', example_tr: 'en iyi takım' },
      { en: 'mountain', tr: 'dağ', example: 'the highest mountain', example_tr: 'en yüksek dağ' },
      { en: 'interesting', tr: 'ilginç', example: 'the most interesting book', example_tr: 'en ilginç kitap' },
    ],
    exercises: [
      { type: 'gap', sentence: 'Istanbul is ___ city in Turkey.', options: ['bigger', 'the biggest', 'big'], answer: 1 },
      { type: 'gap', sentence: 'This is ___ restaurant in town.', options: ['the most expensive', 'more expensive', 'expensivest'], answer: 0 },
      { type: 'mc', prompt: 'Hangisi doğru?', options: ['He is best player.', 'He is the best player.', 'He is the goodest player.'], answer: 1 },
      { type: 'gap', sentence: 'Everest is ___ mountain in the world.', options: ['the highest', 'higher', 'the high'], answer: 0 },
      { type: 'match', pairs: [['big', 'the biggest'], ['expensive', 'the most expensive'], ['good', 'the best'], ['bad', 'the worst']] },
      { type: 'order', prompt_tr: 'O, takımdaki en iyi oyuncu.', words: ['He', 'is', 'the', 'best', 'player', 'on', 'the', 'team'], answer: 'He is the best player on the team' },
      { type: 'gap', sentence: 'This is ___ day of my life.', options: ['the happiest', 'the most happy', 'happiest'], answer: 0 },
      { type: 'gap', sentence: 'It is ___ film of the year.', options: ['the worst', 'the baddest', 'worse'], answer: 0, explanation_tr: 'Düzensiz: bad → the worst.' },
      { type: 'mc', prompt: 'Hangisi doğru?', options: ['She is the most beautiful girl in the class.', 'She is most beautiful girl in the class.', 'She is the beautifulest girl in the class.'], answer: 0 },
      { type: 'order', prompt_tr: 'Bu, şehirdeki en ucuz otel.', words: ['This', 'is', 'the', 'cheapest', 'hotel', 'in', 'the', 'city'], answer: 'This is the cheapest hotel in the city' },
    ],
    quiz: [
      {
        id: 'q_sup_1', mode: 'order', prompt_tr: 'İstanbul Türkiye\'nin en büyük şehridir.', answer_en: 'Istanbul is the biggest city in Turkey',
        words: ['Istanbul', 'is', 'the', 'biggest', 'city', 'in', 'Turkey', 'more'],
        error_variants: [
          { text: 'Istanbul is biggest city in Turkey', tag: 'SUPER', explanation_tr: '"the" atlanmaz: the biggest.' },
          { text: 'Istanbul is the more big city in Turkey', tag: 'SUPER', explanation_tr: 'Kısa sıfat -est alır: the biggest.' },
        ],
      },
      {
        id: 'q_sup_2', mode: 'free', prompt_tr: 'Bu, şehirdeki en pahalı restoran.', answer_en: 'This is the most expensive restaurant in town', accepted: ['This is the most expensive restaurant in the city'],
        error_variants: [
          { text: 'This is most expensive restaurant in town', tag: 'SUPER', explanation_tr: '"the" atlanmaz: the most expensive.' },
          { text: 'This is the expensivest restaurant in town', tag: 'SUPER', explanation_tr: 'Uzun sıfat "most" ile: the most expensive.' },
        ],
      },
      {
        id: 'q_sup_3', mode: 'order', prompt_tr: 'O, takımdaki en iyi oyuncu.', answer_en: 'He is the best player on the team',
        words: ['He', 'is', 'the', 'best', 'player', 'on', 'the', 'team', 'goodest'],
        error_variants: [
          { text: 'He is the goodest player on the team', tag: 'SUPER', explanation_tr: 'Düzensiz: good → the best.' },
          { text: 'He is best player on the team', tag: 'SUPER', explanation_tr: '"the" atlanmaz: the best.' },
        ],
      },
      {
        id: 'q_sup_4', mode: 'free', prompt_tr: 'Everest dünyadaki en yüksek dağdır.', answer_en: 'Everest is the highest mountain in the world', accepted: ['Mount Everest is the highest mountain in the world'],
        error_variants: [
          { text: 'Everest is highest mountain in the world', tag: 'SUPER', explanation_tr: '"the" atlanmaz: the highest.' },
          { text: 'Everest is the most high mountain in the world', tag: 'SUPER', explanation_tr: 'Kısa sıfat -est alır: the highest.' },
        ],
      },
      {
        id: 'q_sup_5', mode: 'order', prompt_tr: 'Bu en ilginç kitap.', answer_en: 'This is the most interesting book',
        words: ['This', 'is', 'the', 'most', 'interesting', 'book', 'interestingest'],
        error_variants: [
          { text: 'This is the interestingest book', tag: 'SUPER', explanation_tr: 'Uzun sıfat "the most" ile: the most interesting.' },
          { text: 'This is most interesting book', tag: 'SUPER', explanation_tr: '"the" atlanmaz: the most interesting.' },
        ],
      },
      {
        id: 'q_sup_6', mode: 'free', prompt_tr: 'Bu, hayatımın en mutlu günü.', answer_en: 'This is the happiest day of my life', accepted: ['This is the happiest day in my life', "It's the happiest day of my life", 'It is the happiest day of my life'],
        error_variants: [
          { text: 'This is the most happy day of my life', tag: 'SUPER', explanation_tr: '-y ile biten kısa sıfat: the happiest.' },
          { text: 'This is happiest day of my life', tag: 'SUPER', explanation_tr: '"the" atlanmaz: the happiest.' },
        ],
      },
      {
        id: 'q_sup_7', mode: 'order', prompt_tr: 'Sınıftaki en uzun boylu öğrenci kim?', answer_en: 'Who is the tallest student in the class',
        words: ['Who', 'is', 'the', 'tallest', 'student', 'in', 'the', 'class', 'most'],
        error_variants: [
          { text: 'Who is the most tall student in the class', tag: 'SUPER', explanation_tr: 'Kısa sıfat -est alır: the tallest.' },
          { text: 'Who is tallest student in the class', tag: 'SUPER', explanation_tr: '"the" atlanmaz: the tallest.' },
        ],
      },
      {
        id: 'q_sup_8', mode: 'free', prompt_tr: 'Bu, yılın en kötü filmi.', answer_en: 'This is the worst film of the year', accepted: ['This is the worst movie of the year', 'It is the worst film of the year', "It's the worst film of the year", 'It is the worst movie of the year', "It's the worst movie of the year"],
        error_variants: [
          { text: 'This is the baddest film of the year', tag: 'SUPER', explanation_tr: 'Düzensiz: bad → the worst.' },
          { text: 'This is the worse film of the year', tag: 'SUPER', explanation_tr: '"worse" iki şeyi karşılaştırır; "en kötü" = the worst.' },
        ],
      },
      {
        id: 'q_sup_9', mode: 'order', prompt_tr: 'Ağustos yılın en sıcak ayıdır.', answer_en: 'August is the hottest month of the year',
        words: ['August', 'is', 'the', 'hottest', 'month', 'of', 'the', 'year', 'hotest'],
        error_variants: [
          { text: 'August is the hotest month of the year', tag: 'SUPER', explanation_tr: 'Son harf ikilenir: hot → the hottest.' },
          { text: 'August is the most hot month of the year', tag: 'SUPER', explanation_tr: 'Kısa sıfat -est alır: the hottest.' },
        ],
      },
      {
        id: 'q_sup_10', mode: 'free', prompt_tr: 'O (kadın), ailedeki en genç kişi.', answer_en: 'She is the youngest person in the family', accepted: ["She's the youngest person in the family", 'She is the youngest in the family', "She's the youngest in the family"],
        error_variants: [
          { text: 'She is the most young person in the family', tag: 'SUPER', explanation_tr: 'Kısa sıfat -est alır: the youngest.' },
          { text: 'She is youngest person in the family', tag: 'SUPER', explanation_tr: '"the" atlanmaz: the youngest.' },
        ],
      },
      {
        id: 'q_sup_11', mode: 'order', prompt_tr: 'Bu, menüdeki en pahalı yemek.', answer_en: 'This is the most expensive dish on the menu',
        words: ['This', 'is', 'the', 'most', 'expensive', 'dish', 'on', 'the', 'menu', 'more'],
        error_variants: [
          { text: 'This is the more expensive dish on the menu', tag: 'SUPER', explanation_tr: 'Üstünlükte "the most": the most expensive.' },
          { text: 'This is the most expensive dish in the menu', tag: 'PREP', explanation_tr: 'Menüde = on the menu.' },
        ],
      },
      {
        id: 'q_sup_12', mode: 'free', prompt_tr: 'Bu, şehirdeki en iyi restoran.', answer_en: 'This is the best restaurant in the city', accepted: ['This is the best restaurant in town'],
        error_variants: [
          { text: 'This is the goodest restaurant in the city', tag: 'SUPER', explanation_tr: 'Düzensiz: good → the best.' },
          { text: 'This is the better restaurant in the city', tag: 'SUPER', explanation_tr: '"better" iki şeyi karşılaştırır; "en iyi" = the best.' },
        ],
      },
    ],
  },
]
