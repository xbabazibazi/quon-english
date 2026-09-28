import type { Lesson } from './types'

export const LESSONS_A12: Lesson[] = [
  {
    id: 'l_present_simple',
    skillId: 'present_simple',
    title: 'Present simple: I work / She works',
    title_tr: 'Geniş zaman: I work / She works',
    explanation_tr:
      'Alışkanlıklar ve genel gerçekler için geniş zaman kullanılır: "I work in Bursa", "The sun rises in the east." Fiil yalın kalır; tek istisna he/she/it: fiil -s alır (works, lives, goes). Türkler bu -s\'yi sık atlar: "She work" ✗. Bir de kelime sırası: Türkçede fiil sonda ("Ben her gün kahve içerim"), İngilizcede özneden hemen sonra: "I drink coffee every day." Zaman ifadesi başa ya da sona gelir, fiilin önüne değil.',
    examples: [
      { en: 'I drink coffee every morning.', tr: 'Her sabah kahve içerim.' },
      { en: 'She works in a hospital.', tr: 'O bir hastanede çalışır.' },
      { en: 'We live in Ankara.', tr: 'Ankara\'da yaşıyoruz.' },
    ],
    words: [
      { en: 'work', tr: 'çalışmak', example: 'He works at night.', example_tr: 'O gece çalışır.' },
      { en: 'live', tr: 'yaşamak', example: 'They live in Izmir.', example_tr: 'İzmir\'de yaşıyorlar.' },
      { en: 'drink', tr: 'içmek', example: 'I drink tea.', example_tr: 'Çay içerim.' },
      { en: 'every day', tr: 'her gün', example: 'She reads every day.', example_tr: 'Her gün okur.' },
      { en: 'hospital', tr: 'hastane', example: 'My wife works in a hospital.', example_tr: 'Eşim hastanede çalışır.' },
    ],
    exercises: [
      { type: 'gap', sentence: 'She ___ in a bank.', options: ['work', 'works'], answer: 1 },
      { type: 'gap', sentence: 'They ___ in Bursa.', options: ['live', 'lives'], answer: 0 },
      { type: 'gap', sentence: 'My father ___ tea every morning.', options: ['drink', 'drinks'], answer: 1, explanation_tr: 'My father = he → drinks.' },
      { type: 'mc', prompt: 'Hangisi doğru sırada?', options: ['I every day coffee drink.', 'I drink coffee every day.', 'I coffee drink every day.'], answer: 1, explanation_tr: 'Özne + fiil + nesne.' },
      { type: 'match', pairs: [['I', 'work'], ['He', 'works'], ['We', 'live'], ['It', 'lives']] },
      { type: 'order', prompt_tr: 'O (kadın) hastanede çalışır.', words: ['works', 'She', 'in', 'a', 'hospital'], answer: 'She works in a hospital' },
    ],
    quiz: [
      {
        id: 'q_ps_1', mode: 'order', prompt_tr: 'Her sabah kahve içerim.', answer_en: 'I drink coffee every morning',
        words: ['I', 'drink', 'coffee', 'every', 'morning', 'drinks'],
        error_variants: [
          { text: 'I every morning coffee drink', tag: 'WORD_ORDER', explanation_tr: 'Fiil özneden sonra: I drink coffee…' },
          { text: 'I coffee drink every morning', tag: 'WORD_ORDER', explanation_tr: 'Özne + fiil + nesne: I drink coffee.' },
          { text: 'I drinks coffee every morning', tag: 'SVAGR', explanation_tr: '-s sadece he/she/it ile: I drink.' },
        ],
      },
      {
        id: 'q_ps_2', mode: 'free', prompt_tr: 'O (kadın) bir bankada çalışır.', answer_en: 'She works in a bank', accepted: ['She works at a bank'],
        error_variants: [
          { text: 'She work in a bank', tag: 'SVAGR', explanation_tr: 'she → works.' },
          { text: 'She works in bank', tag: 'ART', explanation_tr: 'a bank.' },
          { text: 'She is work in a bank', tag: 'AGREE', explanation_tr: 'Geniş zamanda "is" olmaz: She works.' },
          { text: 'He works in a bank', tag: 'GEN', explanation_tr: 'Kadın → she.' },
        ],
      },
      {
        id: 'q_ps_3', mode: 'order', prompt_tr: 'İzmir\'de yaşıyoruz.', answer_en: 'We live in Izmir',
        words: ['We', 'live', 'in', 'Izmir', 'lives', 'at'],
        error_variants: [
          { text: 'We lives in Izmir', tag: 'SVAGR', explanation_tr: 'we → live.' },
          { text: 'We live at Izmir', tag: 'PREP', explanation_tr: 'Şehir için "in".' },
          { text: 'We in Izmir live', tag: 'WORD_ORDER', explanation_tr: 'Fiil özneden sonra: We live in Izmir.' },
        ],
      },
      {
        id: 'q_ps_4', mode: 'free', prompt_tr: 'Babam gece çalışır.', answer_en: 'My father works at night',
        error_variants: [
          { text: 'My father work at night', tag: 'SVAGR', explanation_tr: 'my father = he → works.' },
          { text: 'My father works in night', tag: 'PREP', explanation_tr: '"at night" kalıp.' },
          { text: 'My father at night works', tag: 'WORD_ORDER', explanation_tr: 'Fiil özneden sonra.' },
        ],
      },
      {
        id: 'q_ps_5', mode: 'order', prompt_tr: 'Kardeşim her gün kitap okur.', answer_en: 'My brother reads a book every day',
        words: ['My', 'brother', 'reads', 'a', 'book', 'every', 'day', 'read'],
        error_variants: [
          { text: 'My brother read a book every day', tag: 'SVAGR', explanation_tr: 'my brother = he → reads.' },
          { text: 'My brother every day a book reads', tag: 'WORD_ORDER', explanation_tr: 'Özne + fiil + nesne + zaman.' },
          { text: 'My brother reads book every day', tag: 'ART', explanation_tr: 'a book.' },
        ],
      },
    ],
  },
  {
    id: 'l_do_questions',
    skillId: 'do_questions',
    title: 'Do / Does — questions and negatives',
    title_tr: 'Do / Does ile soru ve olumsuz',
    explanation_tr:
      'Türkçede soru için "mı/mi" eklenir; İngilizcede başa yardımcı fiil gelir: "Do you like tea?" He/she/it için "Does": "Does she work?" ve dikkat, "does" varken fiildeki -s düşer (does she works ✗). Olumsuz da aynı yardımcıyla: "I don\'t like", "She doesn\'t work". "I no like" ✗, "I not like" ✗ Türklerin sık hatasıdır. Kısa cevap: "Yes, I do. / No, I don\'t."',
    examples: [
      { en: 'Do you like coffee? — Yes, I do.', tr: 'Kahve sever misin? — Evet.' },
      { en: 'Does she work here? — No, she doesn\'t.', tr: 'O burada mı çalışıyor? — Hayır.' },
      { en: 'I don\'t eat meat.', tr: 'Et yemem.' },
    ],
    words: [
      { en: 'like', tr: 'sevmek, hoşlanmak', example: 'I like tea.', example_tr: 'Çayı severim.' },
      { en: 'eat', tr: 'yemek', example: 'We eat at 7.', example_tr: '7\'de yeriz.' },
      { en: 'speak', tr: 'konuşmak', example: 'Do you speak English?', example_tr: 'İngilizce konuşuyor musun?' },
      { en: 'here', tr: 'burada', example: 'She works here.', example_tr: 'O burada çalışır.' },
      { en: 'meat', tr: 'et', example: 'I don\'t eat meat.', example_tr: 'Et yemem.' },
    ],
    exercises: [
      { type: 'gap', sentence: '___ you like tea?', options: ['Do', 'Does', 'Are'], answer: 0 },
      { type: 'gap', sentence: '___ she work here?', options: ['Do', 'Does', 'Is'], answer: 1 },
      { type: 'gap', sentence: 'I ___ eat meat.', options: ['no', 'not', "don't"], answer: 2 },
      { type: 'mc', prompt: 'Hangisi doğru?', options: ['Does she works?', 'Does she work?', 'Do she work?'], answer: 1, explanation_tr: '"does" varken -s düşer.' },
      { type: 'match', pairs: [['I', "don't"], ['She', "doesn't"], ['They', "don't"], ['It', "doesn't"]] },
      { type: 'order', prompt_tr: 'İngilizce konuşuyor musun?', words: ['Do', 'you', 'speak', 'English?'], answer: 'Do you speak English?' },
    ],
    quiz: [
      {
        id: 'q_do_1', mode: 'order', prompt_tr: 'Kahve sever misin?', answer_en: 'Do you like coffee?',
        words: ['Do', 'you', 'like', 'coffee?', 'Does', 'Are'],
        error_variants: [
          { text: 'You like coffee?', tag: 'DO_Q', explanation_tr: 'Soru için başa "Do": Do you like coffee?' },
          { text: 'Are you like coffee?', tag: 'DO_Q', explanation_tr: 'Fiilli soruda "do", "are" değil.' },
          { text: 'Does you like coffee?', tag: 'DO_Q', explanation_tr: 'you → do.' },
        ],
      },
      {
        id: 'q_do_2', mode: 'free', prompt_tr: 'Et yemem.', answer_en: "I don't eat meat", accepted: ['I do not eat meat'],
        error_variants: [
          { text: 'I no eat meat', tag: 'NEG', explanation_tr: 'Olumsuz için don\'t: I don\'t eat meat.' },
          { text: 'I not eat meat', tag: 'NEG', explanation_tr: 'don\'t gerekli.' },
          { text: 'I am not eat meat', tag: 'NEG', explanation_tr: 'Fiilli cümlede "am not" değil "don\'t".' },
        ],
      },
      {
        id: 'q_do_3', mode: 'order', prompt_tr: 'O (kadın) burada mı çalışıyor?', answer_en: 'Does she work here?',
        words: ['Does', 'she', 'work', 'here?', 'works', 'Do'],
        error_variants: [
          { text: 'Does she works here?', tag: 'DO_Q', explanation_tr: '"does" varken fiil yalın: work.' },
          { text: 'Do she work here?', tag: 'DO_Q', explanation_tr: 'she → does.' },
          { text: 'She work here?', tag: 'DO_Q', explanation_tr: 'Başa "Does".' },
        ],
      },
      {
        id: 'q_do_4', mode: 'free', prompt_tr: 'O (erkek) çay sevmez.', answer_en: "He doesn't like tea", accepted: ['He does not like tea'],
        error_variants: [
          { text: "He don't like tea", tag: 'NEG', explanation_tr: 'he → doesn\'t.' },
          { text: "He doesn't likes tea", tag: 'NEG', explanation_tr: '"doesn\'t" varken -s düşer: like.' },
          { text: 'He no like tea', tag: 'NEG', explanation_tr: 'doesn\'t gerekli.' },
          { text: "She doesn't like tea", tag: 'GEN', explanation_tr: 'Erkek → he.' },
        ],
      },
      {
        id: 'q_do_5', mode: 'order', prompt_tr: 'İzmir\'de mi yaşıyorlar?', answer_en: 'Do they live in Izmir?',
        words: ['Do', 'they', 'live', 'in', 'Izmir?', 'Are', 'lives'],
        error_variants: [
          { text: 'They live in Izmir?', tag: 'DO_Q', explanation_tr: 'Başa "Do".' },
          { text: 'Are they live in Izmir?', tag: 'DO_Q', explanation_tr: 'Fiilli soruda "do".' },
          { text: 'Do they lives in Izmir?', tag: 'SVAGR', explanation_tr: 'they → live.' },
        ],
      },
    ],
  },
  {
    id: 'l_there_is',
    skillId: 'there_is',
    title: 'There is / There are',
    title_tr: 'There is / There are — "var"',
    explanation_tr:
      'Türkçedeki "var" için İngilizcede "there is / there are" kullanılır: "Odada bir masa var" → "There is a table in the room." Tekil için there is, çoğul için there are. Türkler burada "have" kullanmaya meyilli: "The room has a table" anlaşılır ama doğal değil; "Room have table" ✗ ise yanlış. Olumsuz: there isn\'t / there aren\'t. Soru: Is there…? / Are there…? "Yok" = "There isn\'t."',
    examples: [
      { en: 'There is a bank near here.', tr: 'Yakında bir banka var.' },
      { en: 'There are two chairs in the kitchen.', tr: 'Mutfakta iki sandalye var.' },
      { en: 'Is there a pharmacy here? — No, there isn\'t.', tr: 'Burada eczane var mı? — Hayır, yok.' },
    ],
    words: [
      { en: 'kitchen', tr: 'mutfak', example: 'There is a table in the kitchen.', example_tr: 'Mutfakta bir masa var.' },
      { en: 'chair', tr: 'sandalye', example: 'Two chairs.', example_tr: 'İki sandalye.' },
      { en: 'pharmacy', tr: 'eczane', example: 'Is there a pharmacy near here?', example_tr: 'Yakında eczane var mı?' },
      { en: 'near', tr: 'yakın', example: 'near here', example_tr: 'buraya yakın' },
      { en: 'problem', tr: 'sorun', example: 'There is a problem.', example_tr: 'Bir sorun var.' },
    ],
    exercises: [
      { type: 'gap', sentence: '___ a bank near here.', options: ['There is', 'There are', 'It has'], answer: 0 },
      { type: 'gap', sentence: '___ three chairs in the room.', options: ['There is', 'There are'], answer: 1 },
      { type: 'gap', sentence: '___ a pharmacy here?', options: ['Is there', 'There is', 'Has'], answer: 0 },
      { type: 'mc', prompt: '"Odada bir masa var." nasıl denir?', options: ['The room have a table.', 'There is a table in the room.', 'In the room a table is.'], answer: 1 },
      { type: 'match', pairs: [['a problem', 'there is'], ['two problems', 'there are'], ['some water', 'there is'], ['many people', 'there are']] },
      { type: 'order', prompt_tr: 'Bir sorun var.', words: ['There', 'is', 'a', 'problem'], answer: 'There is a problem' },
    ],
    quiz: [
      {
        id: 'q_th_1', mode: 'order', prompt_tr: 'Mutfakta bir masa var.', answer_en: 'There is a table in the kitchen',
        words: ['There', 'is', 'a', 'table', 'in', 'the', 'kitchen', 'has', 'are'],
        error_variants: [
          { text: 'There are a table in the kitchen', tag: 'THERE', explanation_tr: 'Tekil → there is.' },
          { text: 'The kitchen has a table', tag: 'THERE', explanation_tr: '"var" için there is daha doğal.' },
          { text: 'There is table in the kitchen', tag: 'ART', explanation_tr: 'a table.' },
          { text: 'In the kitchen a table is', tag: 'WORD_ORDER', explanation_tr: 'There is a table in the kitchen.' },
        ],
      },
      {
        id: 'q_th_2', mode: 'free', prompt_tr: 'Yakında bir eczane var mı?', answer_en: 'Is there a pharmacy near here?', accepted: ['Is there a pharmacy nearby?', 'Is there a pharmacy near here'],
        error_variants: [
          { text: 'There is a pharmacy near here?', tag: 'THERE', explanation_tr: 'Soru için "Is there…?"' },
          { text: 'Is there pharmacy near here?', tag: 'ART', explanation_tr: 'a pharmacy.' },
          { text: 'Has a pharmacy near here?', tag: 'THERE', explanation_tr: '"var mı" = Is there…?' },
        ],
      },
      {
        id: 'q_th_3', mode: 'order', prompt_tr: 'Odada iki sandalye var.', answer_en: 'There are two chairs in the room',
        words: ['There', 'are', 'two', 'chairs', 'in', 'the', 'room', 'is', 'chair'],
        error_variants: [
          { text: 'There is two chairs in the room', tag: 'THERE', explanation_tr: 'Çoğul → there are.' },
          { text: 'There are two chair in the room', tag: 'PLURAL', explanation_tr: 'two chairs.' },
        ],
      },
      {
        id: 'q_th_4', mode: 'free', prompt_tr: 'Sorun yok.', answer_en: "There isn't a problem", accepted: ['There is no problem', 'No problem', 'There is not a problem'],
        error_variants: [
          { text: 'There is not problem', tag: 'ART', explanation_tr: "There isn't a problem / There is no problem." },
          { text: 'No have problem', tag: 'THERE', explanation_tr: '"yok" = There isn\'t / There is no.' },
          { text: 'Problem no', tag: 'THERE', explanation_tr: 'There is no problem.' },
        ],
      },
      {
        id: 'q_th_5', mode: 'order', prompt_tr: 'Parkta çok çocuk var.', answer_en: 'There are many children in the park',
        words: ['There', 'are', 'many', 'children', 'in', 'the', 'park', 'is', 'childs'],
        error_variants: [
          { text: 'There is many children in the park', tag: 'THERE', explanation_tr: 'Çoğul → there are.' },
          { text: 'There are many childs in the park', tag: 'PLURAL', explanation_tr: 'children.' },
        ],
      },
    ],
  },
  {
    id: 'l_can',
    skillId: 'can',
    title: 'can / can\'t',
    title_tr: 'can / can\'t — yapabilmek',
    explanation_tr:
      'Yetenek ve izin için "can": "I can swim", "Can I sit here?" Kural iki tane ve ikisi de Türklerin takıldığı yerler: (1) can\'dan sonra fiil YALIN gelir, "to" yok: "I can to swim" ✗. (2) he/she/it ile bile -s gelmez: "She can swims" ✗ → "She can swim" ✓. Olumsuz "can\'t" (cannot), soru için can başa: "Can you help me?"',
    examples: [
      { en: 'I can swim.', tr: 'Yüzebilirim.' },
      { en: 'She can\'t drive.', tr: 'O araba kullanamaz.' },
      { en: 'Can you help me?', tr: 'Bana yardım edebilir misin?' },
    ],
    words: [
      { en: 'swim', tr: 'yüzmek', example: 'I can swim well.', example_tr: 'İyi yüzebilirim.' },
      { en: 'drive', tr: 'araba kullanmak', example: 'Can you drive?', example_tr: 'Araba kullanabiliyor musun?' },
      { en: 'help', tr: 'yardım etmek', example: 'Can I help you?', example_tr: 'Yardımcı olabilir miyim?' },
      { en: 'cook', tr: 'yemek yapmak', example: 'My father can cook.', example_tr: 'Babam yemek yapabilir.' },
      { en: 'well', tr: 'iyi (zarf)', example: 'She speaks English well.', example_tr: 'İngilizceyi iyi konuşur.' },
    ],
    exercises: [
      { type: 'gap', sentence: 'I can ___.', options: ['swim', 'to swim', 'swims'], answer: 0 },
      { type: 'gap', sentence: 'She can ___ well.', options: ['cooks', 'cook', 'to cook'], answer: 1, explanation_tr: 'can + yalın fiil, -s yok.' },
      { type: 'gap', sentence: '___ you drive?', options: ['Do', 'Can', 'Are'], answer: 1 },
      { type: 'mc', prompt: '"O araba kullanamaz." nasıl denir?', options: ["She can't drive.", "She can't to drive.", "She doesn't can drive."], answer: 0 },
      { type: 'match', pairs: [['can', 'swim'], ["can't", 'drive'], ['Can you', 'help me?'], ['Can I', 'sit here?']] },
      { type: 'order', prompt_tr: 'Bana yardım edebilir misin?', words: ['Can', 'you', 'help', 'me?'], answer: 'Can you help me?' },
    ],
    quiz: [
      {
        id: 'q_can_1', mode: 'order', prompt_tr: 'Yüzebilirim.', answer_en: 'I can swim',
        words: ['I', 'can', 'swim', 'to', 'swims'],
        error_variants: [
          { text: 'I can to swim', tag: 'CAN', explanation_tr: 'can + yalın fiil, "to" yok.' },
          { text: 'I can swims', tag: 'CAN', explanation_tr: 'can\'dan sonra -s yok.' },
        ],
      },
      {
        id: 'q_can_2', mode: 'free', prompt_tr: 'O (kadın) araba kullanamaz.', answer_en: "She can't drive", accepted: ['She cannot drive', 'She can not drive'],
        error_variants: [
          { text: "She can't drives", tag: 'CAN', explanation_tr: 'can/can\'t + yalın fiil.' },
          { text: "She can't to drive", tag: 'CAN', explanation_tr: '"to" yok.' },
          { text: "She doesn't can drive", tag: 'CAN', explanation_tr: 'can kendi olumsuzunu yapar: can\'t.' },
          { text: "He can't drive", tag: 'GEN', explanation_tr: 'Kadın → she.' },
        ],
      },
      {
        id: 'q_can_3', mode: 'order', prompt_tr: 'Babam yemek yapabilir.', answer_en: 'My father can cook',
        words: ['My', 'father', 'can', 'cook', 'cooks', 'to'],
        error_variants: [
          { text: 'My father can cooks', tag: 'CAN', explanation_tr: 'can + cook.' },
          { text: 'My father can to cook', tag: 'CAN', explanation_tr: '"to" yok.' },
        ],
      },
      {
        id: 'q_can_4', mode: 'free', prompt_tr: 'Araba kullanabiliyor musun?', answer_en: 'Can you drive?', accepted: ['Can you drive'],
        error_variants: [
          { text: 'Do you can drive?', tag: 'CAN', explanation_tr: 'can soruda başa gelir: Can you drive?' },
          { text: 'You can drive?', tag: 'DO_Q', explanation_tr: 'Soru için can başa.' },
          { text: 'Can you to drive?', tag: 'CAN', explanation_tr: '"to" yok.' },
        ],
      },
      {
        id: 'q_can_5', mode: 'order', prompt_tr: 'Buraya oturabilir miyim?', answer_en: 'Can I sit here?',
        words: ['Can', 'I', 'sit', 'here?', 'Do', 'to'],
        error_variants: [
          { text: 'I can sit here?', tag: 'DO_Q', explanation_tr: 'Soru: Can I…?' },
          { text: 'Can I to sit here?', tag: 'CAN', explanation_tr: '"to" yok.' },
          { text: 'Do I can sit here?', tag: 'CAN', explanation_tr: 'can başa: Can I sit here?' },
        ],
      },
    ],
  },
  {
    id: 'l_prepositions',
    skillId: 'prepositions',
    title: 'in / on / at',
    title_tr: 'in / on / at — yer ve zaman',
    explanation_tr:
      'Türkçedeki tek "-de/-da" eki İngilizcede üçe bölünür, bu yüzden en karıştırılan konudur. IN = bir şeyin içinde veya büyük alanlar: in the box, in the kitchen, in Istanbul, in Turkey; zamanda ay/yıl/mevsim: in May, in 2020. ON = bir yüzeyin üstünde: on the table, on the wall; zamanda günler: on Monday, on Sunday. AT = nokta/adres: at home, at work, at the bus stop; zamanda saat: at 7 o\'clock, at night.',
    examples: [
      { en: 'The keys are on the table.', tr: 'Anahtarlar masanın üstünde.' },
      { en: 'I am at work now.', tr: 'Şu an işteyim.' },
      { en: 'She lives in Istanbul.', tr: 'O İstanbul\'da yaşıyor.' },
    ],
    words: [
      { en: 'table', tr: 'masa', example: 'on the table', example_tr: 'masanın üstünde' },
      { en: 'key', tr: 'anahtar', example: 'Where are my keys?', example_tr: 'Anahtarlarım nerede?' },
      { en: 'at work', tr: 'işte', example: 'He is at work.', example_tr: 'O işte.' },
      { en: 'at home', tr: 'evde', example: 'I am at home.', example_tr: 'Evdeyim.' },
      { en: 'Monday', tr: 'Pazartesi', example: 'on Monday', example_tr: 'Pazartesi günü' },
    ],
    exercises: [
      { type: 'gap', sentence: 'The book is ___ the table.', options: ['in', 'on', 'at'], answer: 1 },
      { type: 'gap', sentence: 'I live ___ Bursa.', options: ['in', 'on', 'at'], answer: 0 },
      { type: 'gap', sentence: 'The meeting is ___ 9 o\'clock.', options: ['in', 'on', 'at'], answer: 2 },
      { type: 'gap', sentence: 'We have class ___ Monday.', options: ['in', 'on', 'at'], answer: 1 },
      { type: 'match', pairs: [['in', 'the box'], ['on', 'the wall'], ['at', 'home'], ['in', '2020']] },
      { type: 'order', prompt_tr: 'Şu an işteyim.', words: ['I', 'am', 'at', 'work', 'now', 'in'], answer: 'I am at work now' },
    ],
    quiz: [
      {
        id: 'q_prep_1', mode: 'order', prompt_tr: 'Anahtarlar masanın üstünde.', answer_en: 'The keys are on the table',
        words: ['The', 'keys', 'are', 'on', 'the', 'table', 'in', 'at', 'is'],
        error_variants: [
          { text: 'The keys are in the table', tag: 'PREP', explanation_tr: 'Üstünde → on the table.' },
          { text: 'The keys are at the table', tag: 'PREP', explanation_tr: 'Yüzey → on.' },
          { text: 'The keys is on the table', tag: 'TOBE', explanation_tr: 'Çoğul + are.' },
        ],
      },
      {
        id: 'q_prep_2', mode: 'free', prompt_tr: 'O (kadın) İstanbul\'da yaşıyor.', answer_en: 'She lives in Istanbul',
        error_variants: [
          { text: 'She lives at Istanbul', tag: 'PREP', explanation_tr: 'Şehir → in.' },
          { text: 'She lives on Istanbul', tag: 'PREP', explanation_tr: 'Şehir → in.' },
          { text: 'She live in Istanbul', tag: 'SVAGR', explanation_tr: 'she → lives.' },
        ],
      },
      {
        id: 'q_prep_3', mode: 'order', prompt_tr: 'Toplantı Pazartesi saat 9\'da.', answer_en: 'The meeting is on Monday at 9',
        words: ['The', 'meeting', 'is', 'on', 'Monday', 'at', '9', 'in'],
        error_variants: [
          { text: 'The meeting is in Monday at 9', tag: 'TIME', explanation_tr: 'Gün → on Monday.' },
          { text: 'The meeting is on Monday in 9', tag: 'TIME', explanation_tr: 'Saat → at 9.' },
          { text: 'The meeting is at Monday on 9', tag: 'TIME', explanation_tr: 'on Monday, at 9.' },
        ],
      },
      {
        id: 'q_prep_4', mode: 'free', prompt_tr: 'Evdeyim.', answer_en: 'I am at home', accepted: ["I'm at home", 'I am home', "I'm home"],
        error_variants: [
          { text: 'I am in home', tag: 'PREP', explanation_tr: '"evde" kalıbı: at home.' },
          { text: 'I am on home', tag: 'PREP', explanation_tr: 'at home.' },
          { text: 'I at home', tag: 'TOBE', explanation_tr: '"am" eksik.' },
        ],
      },
      {
        id: 'q_prep_5', mode: 'order', prompt_tr: 'Telefonum çantada.', answer_en: 'My phone is in the bag',
        words: ['My', 'phone', 'is', 'in', 'the', 'bag', 'on', 'at'],
        error_variants: [
          { text: 'My phone is on the bag', tag: 'PREP', explanation_tr: 'İçinde → in the bag.' },
          { text: 'My phone is at the bag', tag: 'PREP', explanation_tr: 'İçinde → in.' },
          { text: 'My phone in the bag', tag: 'TOBE', explanation_tr: '"is" eksik.' },
        ],
      },
    ],
  },
]
