import type { Lesson } from './types'

export const LESSONS_A23: Lesson[] = [
  {
    id: 'l_future_will',
    skillId: 'future_will',
    title: 'will — prediction and decisions',
    title_tr: 'will — tahmin ve anlık karar',
    explanation_tr:
      '"will" iki durumda kullanılır: (1) geleceğe dair bir TAHMİN: "It will rain tomorrow", (2) konuşma anında verilen ANLIK bir karar: "I\'m thirsty. I will get some water." (plan önceden yapılmamış, o an karar verilmiş). Kural: will + fiil(yalın), "to" gelmez, he/she/it ile de -s almaz: "She will go" ("will goes" ✗, "will to go" ✗). Kısaltma: I\'ll, you\'ll, she\'ll. Olumsuz: won\'t (will not). "going to" ile farkı: going to önceden yapılmış plan için, will anlık karar/tahmin için kullanılır.',
    examples: [
      { en: 'I think it will rain tomorrow.', tr: 'Sanırım yarın yağmur yağacak.' },
      { en: 'I\'m tired. I\'ll go to bed early.', tr: 'Yorgunum. Erken yatacağım.' },
      { en: 'She won\'t be at the meeting tomorrow.', tr: 'Yarın toplantıda olmayacak.' },
    ],
    words: [
      { en: 'tomorrow', tr: 'yarın', example: 'I will call you tomorrow.', example_tr: 'Yarın seni ararım.' },
      { en: 'probably', tr: 'muhtemelen', example: 'It will probably rain.', example_tr: 'Muhtemelen yağmur yağacak.' },
      { en: 'thirsty', tr: 'susamış', example: 'I\'m thirsty. I\'ll drink water.', example_tr: 'Susadım. Su içeceğim.' },
      { en: 'meeting', tr: 'toplantı', example: 'The meeting will start at 9.', example_tr: 'Toplantı 9\'da başlayacak.' },
      { en: 'future', tr: 'gelecek', example: 'Nobody knows the future.', example_tr: 'Kimse geleceği bilmez.' },
    ],
    exercises: [
      { type: 'gap', sentence: 'It ___ rain tomorrow.', options: ['will', 'will to', 'wills'], answer: 0 },
      { type: 'gap', sentence: 'She ___ be at the meeting.', options: ['will', 'wills', 'is will'], answer: 0 },
      { type: 'gap', sentence: 'I\'m hungry. I ___ make a sandwich.', options: ['am', 'will', 'do'], answer: 1, explanation_tr: 'Anlık karar: will.' },
      { type: 'mc', prompt: 'Hangisi doğru?', options: ['She will goes home.', 'She will go home.', 'She wills go home.'], answer: 1 },
      { type: 'match', pairs: [['I', 'I\'ll'], ['she', 'she\'ll'], ['will not', 'won\'t'], ['they', 'they\'ll']] },
      { type: 'order', prompt_tr: 'Yarın seni ararım.', words: ['I', 'will', 'call', 'you', 'tomorrow', 'calling'], answer: 'I will call you tomorrow' },
      { type: 'gap', sentence: 'They ___ be late, I promise.', options: ['won\'t', 'don\'t', 'aren\'t'], answer: 0 },
      { type: 'gap', sentence: 'The phone is ringing. I ___ answer it.', options: ['will', 'am', 'do'], answer: 0, explanation_tr: 'Anlık karar: will.' },
      { type: 'mc', prompt: 'Hangisi doğru?', options: ['Will you help me?', 'Do you will help me?', 'Will you to help me?'], answer: 0 },
      { type: 'order', prompt_tr: 'Bu akşam sana yardım edeceğim.', words: ['I', 'will', 'help', 'you', 'this', 'evening', 'helps'], answer: 'I will help you this evening' },
    ],
    quiz: [
      {
        id: 'q_will_1', mode: 'order', prompt_tr: 'Sanırım yarın yağmur yağacak.', answer_en: 'I think it will rain tomorrow',
        words: ['I', 'think', 'it', 'will', 'rain', 'tomorrow', 'rains'],
        error_variants: [
          { text: 'I think it will rains tomorrow', tag: 'WILL', explanation_tr: 'will\'den sonra fiil yalın: will rain.' },
          { text: 'I think it will to rain tomorrow', tag: 'WILL', explanation_tr: '"to" fazladan: will rain.' },
        ],
      },
      {
        id: 'q_will_2', mode: 'free', prompt_tr: 'Yorgunum. Erken yatacağım.', answer_en: 'I\'m tired. I will go to bed early', accepted: ['I\'m tired. I\'ll go to bed early', 'I am tired. I will go to bed early', 'I am tired. I\'ll go to bed early', 'I\'m tired. I will sleep early', 'I\'m tired. I\'ll sleep early', 'I am tired. I will sleep early'],
        error_variants: [
          { text: 'I\'m tired. I will goes to bed early', tag: 'WILL', explanation_tr: 'will\'den sonra -s olmaz: will go.' },
        ],
      },
      {
        id: 'q_will_3', mode: 'order', prompt_tr: 'Yarın toplantıda olmayacak.', answer_en: 'She will not be at the meeting tomorrow', accepted: ['She won\'t be at the meeting tomorrow'],
        words: ['She', 'will', 'not', 'be', 'at', 'the', 'meeting', 'tomorrow', 'wills'],
        error_variants: [
          { text: 'She wills not be at the meeting tomorrow', tag: 'WILL', explanation_tr: '"will" değişmez, -s almaz.' },
        ],
      },
      {
        id: 'q_will_4', mode: 'free', prompt_tr: 'Susadım. Su içeceğim.', answer_en: 'I\'m thirsty. I will drink water', accepted: ['I\'m thirsty. I\'ll drink water', 'I am thirsty. I will drink water', 'I am thirsty. I\'ll drink water', 'I\'m thirsty. I will drink some water', 'I\'m thirsty. I\'ll drink some water'],
        error_variants: [
          { text: 'I\'m thirsty. I will to drink water', tag: 'WILL', explanation_tr: '"to" fazladan: will drink.' },
        ],
      },
      {
        id: 'q_will_5', mode: 'order', prompt_tr: 'Toplantı 9\'da başlayacak.', answer_en: 'The meeting will start at 9',
        words: ['The', 'meeting', 'will', 'start', 'at', '9', 'starts'],
        error_variants: [
          { text: 'The meeting will starts at 9', tag: 'WILL', explanation_tr: 'will\'den sonra fiil yalın: will start.' },
          { text: 'The meeting will start in 9', tag: 'PREP', explanation_tr: 'Saat için "at": at 9.' },
        ],
      },
      {
        id: 'q_will_6', mode: 'free', prompt_tr: 'Bence sınavı geçeceksin.', answer_en: 'I think you will pass the exam', accepted: ["I think you'll pass the exam"],
        error_variants: [
          { text: 'I think you will passed the exam', tag: 'WILL', explanation_tr: 'will\'den sonra fiil yalın: will pass.' },
          { text: 'I think you will to pass the exam', tag: 'WILL', explanation_tr: '"to" fazladan: will pass.' },
        ],
      },
      {
        id: 'q_will_7', mode: 'order', prompt_tr: 'Kapıyı ben açarım.', answer_en: "I'll open the door", accepted: ['I will open the door'],
        words: ["I'll", 'open', 'the', 'door', 'opening'],
        error_variants: [
          { text: "I'll to open the door", tag: 'WILL', explanation_tr: '"to" fazladan: I\'ll open.' },
          { text: "I'll opening the door", tag: 'WILL', explanation_tr: 'will\'den sonra fiil yalın: I\'ll open.' },
        ],
      },
      {
        id: 'q_will_8', mode: 'free', prompt_tr: 'Yarın kar yağacak mı?', answer_en: 'Will it snow tomorrow', accepted: ['Is it going to snow tomorrow'],
        error_variants: [
          { text: 'Does it will snow tomorrow', tag: 'WILL', explanation_tr: 'Soruda "will" başa gelir: Will it snow?' },
          { text: 'Will it snows tomorrow', tag: 'WILL', explanation_tr: 'will\'den sonra fiil yalın: will it snow.' },
        ],
      },
      {
        id: 'q_will_9', mode: 'order', prompt_tr: 'Merak etme, kimseye söylemeyeceğim.', answer_en: "Don't worry I won't tell anyone", accepted: ["Don't worry I will not tell anyone", "Don't worry I won't tell anybody"],
        words: ["Don't", 'worry', 'I', "won't", 'tell', 'anyone', 'nobody'],
        error_variants: [
          { text: "Don't worry I don't will tell anyone", tag: 'WILL', explanation_tr: 'Olumsuz: won\'t (will not).' },
          { text: "Don't worry I won't tell nobody", tag: 'NEG', explanation_tr: 'Çifte olumsuzluk olmaz: won\'t tell anyone.' },
        ],
      },
      {
        id: 'q_will_10', mode: 'free', prompt_tr: 'Gelecek yıl 30 yaşında olacağım.', answer_en: 'I will be 30 next year', accepted: ["I'll be 30 next year", 'Next year I will be 30', "Next year I'll be 30", 'I will be thirty next year', "I'll be thirty next year"],
        error_variants: [
          { text: 'I will have 30 next year', tag: 'TOBE', explanation_tr: 'Yaş to be ile söylenir: I will be 30.' },
          { text: 'I will 30 next year', tag: 'TOBE', explanation_tr: '"be" eksik: I will be 30.' },
        ],
      },
      {
        id: 'q_will_11', mode: 'order', prompt_tr: 'O (kadın) muhtemelen geç kalacak.', answer_en: 'She will probably be late', accepted: ["She'll probably be late"],
        words: ['She', 'will', 'probably', 'be', 'late', 'is'],
        error_variants: [
          { text: 'She will probably late', tag: 'TOBE', explanation_tr: '"be" eksik: will probably be late.' },
          { text: 'She will probably is late', tag: 'WILL', explanation_tr: 'will\'den sonra fiil yalın: will be.' },
        ],
      },
      {
        id: 'q_will_12', mode: 'free', prompt_tr: 'Çok sıcak. Pencereyi açacağım.', answer_en: "It's very hot. I will open the window", accepted: ["It's very hot. I'll open the window", 'It is very hot. I will open the window', "It is very hot. I'll open the window"],
        error_variants: [
          { text: "It's very hot. I will opening the window", tag: 'WILL', explanation_tr: 'will\'den sonra fiil yalın: will open.' },
          { text: "It's very hot. I will to open the window", tag: 'WILL', explanation_tr: '"to" fazladan: will open.' },
        ],
      },
    ],
  },
  {
    id: 'l_first_conditional',
    skillId: 'first_conditional',
    title: 'First conditional: if + present, will',
    title_tr: 'if + geniş zaman, will — birinci koşul',
    explanation_tr:
      'Gerçekleşmesi muhtemel, gerçekçi bir şart ve onun sonucunu anlatır: "If it rains, I will stay home" (yağarsa, evde kalacağım). Yapı sabit: IF + geniş zaman (present simple), ... WILL + fiil(yalın). En kritik kural: if cümleciğinde "will" KULLANILMAZ, geniş zaman kullanılır — bu Türklerin en sık hatasıdır çünkü Türkçede "yağarsa" gelecek gibi hissettirir: "If it will rain" ✗ → "If it rains" ✓. İki cümlecik yer değiştirebilir: "I will stay home if it rains" (virgülsüz).',
    examples: [
      { en: 'If it rains, I will stay home.', tr: 'Yağmur yağarsa evde kalacağım.' },
      { en: 'If you study hard, you will pass the exam.', tr: 'Sıkı çalışırsan sınavı geçeceksin.' },
      { en: 'She will be angry if you are late.', tr: 'Geç kalırsan kızacak.' },
    ],
    words: [
      { en: 'pass (an exam)', tr: '(sınavı) geçmek', example: 'You will pass if you study.', example_tr: 'Çalışırsan geçeceksin.' },
      { en: 'angry', tr: 'kızgın', example: 'She will be angry.', example_tr: 'Kızacak.' },
      { en: 'late', tr: 'geç', example: 'If you are late, call me.', example_tr: 'Geç kalırsan beni ara.' },
      { en: 'finish', tr: 'bitirmek', example: 'If I finish early, I will call you.', example_tr: 'Erken bitirirsem seni ararım.' },
      { en: 'miss (the bus)', tr: '(otobüsü) kaçırmak', example: 'If you run, you won\'t miss the bus.', example_tr: 'Koşarsan otobüsü kaçırmazsın.' },
    ],
    exercises: [
      { type: 'gap', sentence: 'If it ___, I will stay home.', options: ['rains', 'will rain', 'rain'], answer: 0 },
      { type: 'gap', sentence: 'If you study hard, you ___ pass.', options: ['will', 'would', 'pass'], answer: 0 },
      { type: 'gap', sentence: 'She will be angry if you ___ late.', options: ['will be', 'are', 'were'], answer: 1 },
      { type: 'mc', prompt: 'Hangisi doğru?', options: ['If it will rain, I will stay home.', 'If it rains, I will stay home.', 'If it rain, I will stay home.'], answer: 1 },
      { type: 'match', pairs: [['if cümlesi', 'present simple'], ['sonuç cümlesi', 'will'], ['Koşarsan,', 'If you run,'], ['Bitirirsem,', 'If I finish,']] },
      { type: 'order', prompt_tr: 'Sıkı çalışırsan sınavı geçeceksin.', words: ['If', 'you', 'study', 'hard', 'you', 'will', 'pass', 'the', 'exam', 'will study'], answer: 'If you study hard you will pass the exam' },
      { type: 'gap', sentence: 'If you ___ me, I will help you.', options: ['call', 'will call', 'called'], answer: 0 },
      { type: 'gap', sentence: 'We will be late if we ___ now.', options: ["don't leave", "won't leave", "didn't leave"], answer: 0 },
      { type: 'mc', prompt: 'Hangisi doğru?', options: ['If she comes, I will be happy.', 'If she will come, I will be happy.', 'If she come, I will be happy.'], answer: 0 },
      { type: 'order', prompt_tr: 'Acıkırsan sana sandviç yaparım.', words: ['If', 'you', 'are', 'hungry', 'I', 'will', 'make', 'you', 'a', 'sandwich'], answer: 'If you are hungry I will make you a sandwich' },
    ],
    quiz: [
      {
        id: 'q_c1_1', mode: 'order', prompt_tr: 'Yağmur yağarsa evde kalacağım.', answer_en: 'If it rains I will stay home', accepted: ['I will stay home if it rains'],
        words: ['If', 'it', 'rains', 'I', 'will', 'stay', 'home', 'will rain'],
        error_variants: [
          { text: 'If it will rain I will stay home', tag: 'COND1', explanation_tr: 'if cümleciğinde will kullanılmaz: if it rains.' },
          { text: 'If it rain I will stay home', tag: 'COND1', explanation_tr: 'Geniş zamanda he/she/it + -s: if it rains.' },
        ],
      },
      {
        id: 'q_c1_2', mode: 'free', prompt_tr: 'Koşarsan otobüsü kaçırmazsın.', answer_en: 'If you run, you won\'t miss the bus', accepted: ['If you run, you will not miss the bus', 'You won\'t miss the bus if you run', 'You will not miss the bus if you run'],
        error_variants: [
          { text: 'If you will run, you won\'t miss the bus', tag: 'COND1', explanation_tr: 'if cümleciğinde will olmaz: if you run.' },
        ],
      },
      {
        id: 'q_c1_3', mode: 'order', prompt_tr: 'Geç kalırsan kızacak.', answer_en: 'She will be angry if you are late', accepted: ['If you are late she will be angry'],
        words: ['She', 'will', 'be', 'angry', 'if', 'you', 'are', 'late', 'will be'],
        error_variants: [
          { text: 'She will be angry if you will be late', tag: 'COND1', explanation_tr: 'if cümleciğinde present simple: if you are late.' },
        ],
      },
      {
        id: 'q_c1_4', mode: 'free', prompt_tr: 'Erken bitirirsem seni ararım.', answer_en: 'If I finish early, I will call you', accepted: ['If I finish early, I\'ll call you', 'I will call you if I finish early', 'I\'ll call you if I finish early'],
        error_variants: [
          { text: 'If I will finish early, I will call you', tag: 'COND1', explanation_tr: 'if cümleciğinde will olmaz: if I finish.' },
          { text: 'If I finish early, I call you', tag: 'COND1', explanation_tr: 'Sonuç cümleciğinde "will" gerekir.' },
        ],
      },
      {
        id: 'q_c1_5', mode: 'order', prompt_tr: 'Sıkı çalışırsan sınavı geçeceksin.', answer_en: 'If you study hard you will pass the exam', accepted: ['You will pass the exam if you study hard'],
        words: ['If', 'you', 'study', 'hard', 'you', 'will', 'pass', 'the', 'exam', 'will study'],
        error_variants: [
          { text: 'If you will study hard you will pass the exam', tag: 'COND1', explanation_tr: 'if cümleciğinde will olmaz: if you study.' },
        ],
      },
      {
        id: 'q_c1_6', mode: 'free', prompt_tr: 'Ali gelirse ona söylerim.', answer_en: 'If Ali comes, I will tell him', accepted: ["If Ali comes, I'll tell him", 'I will tell him if Ali comes', "I'll tell him if Ali comes"],
        error_variants: [
          { text: 'If Ali will come, I will tell him', tag: 'COND1', explanation_tr: 'if cümleciğinde will olmaz: if Ali comes.' },
          { text: 'If Ali come, I will tell him', tag: 'SVAGR', explanation_tr: 'Ali = he → comes.' },
        ],
      },
      {
        id: 'q_c1_7', mode: 'order', prompt_tr: 'Acele etmezsek treni kaçıracağız.', answer_en: "If we don't hurry we will miss the train", accepted: ["We will miss the train if we don't hurry", 'If we do not hurry we will miss the train', 'We will miss the train if we do not hurry'],
        words: ['If', 'we', "don't", 'hurry', 'we', 'will', 'miss', 'the', 'train', "won't"],
        error_variants: [
          { text: "If we won't hurry we will miss the train", tag: 'COND1', explanation_tr: 'if cümleciğinde will olmaz: if we don\'t hurry.' },
          { text: "If we don't hurry we miss the train", tag: 'COND1', explanation_tr: 'Sonuç cümleciğinde "will" gerekir: we will miss.' },
        ],
      },
      {
        id: 'q_c1_8', mode: 'free', prompt_tr: 'Yarın hava güzel olursa pikniğe gideceğiz.', answer_en: 'If the weather is nice tomorrow, we will go on a picnic', accepted: ["If the weather is nice tomorrow, we'll go on a picnic", 'We will go on a picnic if the weather is nice tomorrow', "We'll go on a picnic if the weather is nice tomorrow", 'If the weather is good tomorrow, we will go on a picnic', "If the weather is good tomorrow, we'll go on a picnic"],
        error_variants: [
          { text: 'If the weather will be nice tomorrow, we will go on a picnic', tag: 'COND1', explanation_tr: 'if cümleciğinde will olmaz: if the weather is nice.' },
          { text: 'If the weather is nice tomorrow, we go on a picnic', tag: 'COND1', explanation_tr: 'Sonuç cümleciğinde "will" gerekir: we will go.' },
        ],
      },
      {
        id: 'q_c1_9', mode: 'order', prompt_tr: 'Bu ilacı alırsan kendini daha iyi hissedeceksin.', answer_en: 'If you take this medicine you will feel better', accepted: ['You will feel better if you take this medicine'],
        words: ['If', 'you', 'take', 'this', 'medicine', 'you', 'will', 'feel', 'better', 'took'],
        error_variants: [
          { text: 'If you will take this medicine you will feel better', tag: 'COND1', explanation_tr: 'if cümleciğinde will olmaz: if you take.' },
          { text: 'If you took this medicine you will feel better', tag: 'COND1', explanation_tr: 'Gerçekçi şartta if + geniş zaman: if you take.' },
        ],
      },
      {
        id: 'q_c1_10', mode: 'free', prompt_tr: 'Beni ararsan gelirim.', answer_en: 'If you call me, I will come', accepted: ["If you call me, I'll come", 'I will come if you call me', "I'll come if you call me"],
        error_variants: [
          { text: 'If you will call me, I will come', tag: 'COND1', explanation_tr: 'if cümleciğinde will olmaz: if you call.' },
          { text: 'If you call I, I will come', tag: 'OBJPRON', explanation_tr: 'Fiilden sonra nesne zamiri: call me.' },
        ],
      },
      {
        id: 'q_c1_11', mode: 'order', prompt_tr: 'Şimdi çıkmazsan geç kalacaksın.', answer_en: "You will be late if you don't leave now", accepted: ["If you don't leave now you will be late", 'You will be late if you do not leave now', 'If you do not leave now you will be late'],
        words: ['You', 'will', 'be', 'late', 'if', 'you', "don't", 'leave', 'now', "won't"],
        error_variants: [
          { text: "You will be late if you won't leave now", tag: 'COND1', explanation_tr: 'if cümleciğinde will olmaz: if you don\'t leave.' },
          { text: "You will late if you don't leave now", tag: 'TOBE', explanation_tr: '"be" eksik: will be late.' },
        ],
      },
      {
        id: 'q_c1_12', mode: 'free', prompt_tr: 'Sınavı geçerse çok mutlu olacak (kadın).', answer_en: 'If she passes the exam, she will be very happy', accepted: ["If she passes the exam, she'll be very happy", 'She will be very happy if she passes the exam', "She'll be very happy if she passes the exam"],
        error_variants: [
          { text: 'If she will pass the exam, she will be very happy', tag: 'COND1', explanation_tr: 'if cümleciğinde will olmaz: if she passes.' },
          { text: 'If she pass the exam, she will be very happy', tag: 'SVAGR', explanation_tr: 'she → passes.' },
        ],
      },
    ],
  },
  {
    id: 'l_should_advice',
    skillId: 'should_advice',
    title: 'should / shouldn\'t — advice',
    title_tr: 'should / shouldn\'t — tavsiye',
    explanation_tr:
      '"should" tavsiye vermek için kullanılır: "You should sleep more" (daha çok uyumalısın). Tüm özneler için aynı kalır, -s almaz, fiilden önce "to" gelmez: "She should rest" ("should to rest" ✗, "shoulds" ✗). Olumsuz: shouldn\'t (should not): "You shouldn\'t smoke." Soru can/will gibi başa gelir: "Should I call her?" "must" kadar kesin/zorunlu değildir — sadece öneridir, yapmasan da olur.',
    examples: [
      { en: 'You should drink more water.', tr: 'Daha çok su içmelisin.' },
      { en: 'He shouldn\'t work so much.', tr: 'Bu kadar çok çalışmamalı.' },
      { en: 'Should I tell her the truth?', tr: 'Ona gerçeği söylemeli miyim?' },
    ],
    words: [
      { en: 'rest', tr: 'dinlenmek', example: 'You should rest today.', example_tr: 'Bugün dinlenmelisin.' },
      { en: 'smoke', tr: 'sigara içmek', example: 'You shouldn\'t smoke.', example_tr: 'Sigara içmemelisin.' },
      { en: 'apologize', tr: 'özür dilemek', example: 'You should apologize to her.', example_tr: 'Ondan özür dilemelisin.' },
      { en: 'worry', tr: 'endişelenmek', example: 'You shouldn\'t worry so much.', example_tr: 'Bu kadar endişelenmemelisin.' },
      { en: 'ask', tr: 'sormak', example: 'You should ask the doctor.', example_tr: 'Doktora sormalısın.' },
    ],
    exercises: [
      { type: 'gap', sentence: 'You ___ drink more water.', options: ['should', 'should to', 'shoulds'], answer: 0 },
      { type: 'gap', sentence: 'He ___ work so much.', options: ['shouldn\'t', 'doesn\'t should'], answer: 0 },
      { type: 'gap', sentence: '___ I tell her the truth?', options: ['Should', 'Do should', 'Am should'], answer: 0 },
      { type: 'mc', prompt: 'Hangisi doğru?', options: ['You should to rest.', 'You should rest.', 'You shoulds rest.'], answer: 1 },
      { type: 'match', pairs: [['yapmalısın (tavsiye)', 'you should'], ['yapmamalısın', 'you shouldn\'t'], ['yapmalı mıyım?', 'should I?'], ['yapman şart (zorunlu)', 'you must']] },
      { type: 'order', prompt_tr: 'Bugün dinlenmelisin.', words: ['You', 'should', 'rest', 'today', 'to rest'], answer: 'You should rest today' },
      { type: 'gap', sentence: 'You look tired. You ___ go to bed.', options: ['should', 'shouldn\'t'], answer: 0 },
      { type: 'gap', sentence: 'Sugar is bad for you. You ___ eat so much of it.', options: ['should', 'shouldn\'t'], answer: 1 },
      { type: 'mc', prompt: '"Ne yapmalıyım?" hangisi?', options: ['What should I do?', 'What I should do?', 'What do I should do?'], answer: 0 },
      { type: 'order', prompt_tr: 'Doktora gitmelisin.', words: ['You', 'should', 'go', 'to', 'the', 'doctor', 'goes'], answer: 'You should go to the doctor' },
    ],
    quiz: [
      {
        id: 'q_sh_1', mode: 'order', prompt_tr: 'Daha çok su içmelisin.', answer_en: 'You should drink more water',
        words: ['You', 'should', 'drink', 'more', 'water', 'to drink'],
        error_variants: [
          { text: 'You should to drink more water', tag: 'SHOULD', explanation_tr: '"to" fazladan: should drink.' },
          { text: 'You shoulds drink more water', tag: 'SHOULD', explanation_tr: '"should" -s almaz.' },
        ],
      },
      {
        id: 'q_sh_2', mode: 'free', prompt_tr: 'Bu kadar çok çalışmamalı (erkek).', answer_en: 'He shouldn\'t work so much', accepted: ['He should not work so much', 'He shouldn\'t work that much', 'He should not work that much'],
        error_variants: [
          { text: 'He doesn\'t should work so much', tag: 'SHOULD', explanation_tr: 'Olumsuz direkt: shouldn\'t.' },
          { text: 'He shouldn\'t to work so much', tag: 'SHOULD', explanation_tr: '"to" fazladan.' },
        ],
      },
      {
        id: 'q_sh_3', mode: 'order', prompt_tr: 'Ona gerçeği söylemeli miyim?', answer_en: 'Should I tell her the truth',
        words: ['Should', 'I', 'tell', 'her', 'the', 'truth', 'Do I should'],
        error_variants: [
          { text: 'Do I should tell her the truth', tag: 'SHOULD', explanation_tr: 'Soru için "should" başa gelir: Should I...?' },
        ],
      },
      {
        id: 'q_sh_4', mode: 'free', prompt_tr: 'Ondan (kadın) özür dilemelisin.', answer_en: 'You should apologize to her', accepted: ['You should apologise to her'],
        error_variants: [
          { text: 'You should apologize she', tag: 'OBJPRON', explanation_tr: 'Edattan sonra nesne zamiri: to her.' },
          { text: 'You should to apologize to her', tag: 'SHOULD', explanation_tr: '"to" fazladan: should apologize.' },
        ],
      },
      {
        id: 'q_sh_5', mode: 'order', prompt_tr: 'Bu kadar endişelenmemelisin.', answer_en: 'You shouldn\'t worry so much',
        words: ['You', 'shouldn\'t', 'worry', 'so', 'much', 'to worry'],
        error_variants: [
          { text: 'You shouldn\'t to worry so much', tag: 'SHOULD', explanation_tr: '"to" fazladan.' },
        ],
      },
      {
        id: 'q_sh_6', mode: 'free', prompt_tr: 'Daha çok sebze yemelisin.', answer_en: 'You should eat more vegetables',
        error_variants: [
          { text: 'You should to eat more vegetables', tag: 'SHOULD', explanation_tr: '"to" fazladan: should eat.' },
          { text: 'You should eat more vegetable', tag: 'PLURAL', explanation_tr: 'Genel anlamda sayılabilen isim çoğul: vegetables.' },
        ],
      },
      {
        id: 'q_sh_7', mode: 'order', prompt_tr: 'Bu kadar geç yatmamalısın.', answer_en: "You shouldn't go to bed so late", accepted: ['You should not go to bed so late', "You shouldn't go to bed that late"],
        words: ['You', "shouldn't", 'go', 'to', 'bed', 'so', 'late', "don't"],
        error_variants: [
          { text: "You don't should go to bed so late", tag: 'SHOULD', explanation_tr: 'Olumsuz doğrudan: shouldn\'t.' },
          { text: "You shouldn't to go to bed so late", tag: 'SHOULD', explanation_tr: '"to" fazladan: shouldn\'t go.' },
        ],
      },
      {
        id: 'q_sh_8', mode: 'free', prompt_tr: 'Ne yapmalıyım?', answer_en: 'What should I do',
        error_variants: [
          { text: 'What I should do', tag: 'WH', explanation_tr: 'Soru kelimesinden sonra should gelir: What should I do?' },
          { text: 'What do I should do', tag: 'SHOULD', explanation_tr: 'Soruda "do" kullanılmaz: What should I do?' },
        ],
      },
      {
        id: 'q_sh_9', mode: 'order', prompt_tr: 'O (erkek) sigarayı bırakmalı.', answer_en: 'He should stop smoking', accepted: ['He should quit smoking', 'He should give up smoking'],
        words: ['He', 'should', 'stop', 'smoking', 'shoulds'],
        error_variants: [
          { text: 'He shoulds stop smoking', tag: 'SHOULD', explanation_tr: '"should" -s almaz.' },
          { text: 'He should to stop smoking', tag: 'SHOULD', explanation_tr: '"to" fazladan: should stop.' },
        ],
      },
      {
        id: 'q_sh_10', mode: 'free', prompt_tr: 'Onu (erkek) aramalı mıyız?', answer_en: 'Should we call him',
        error_variants: [
          { text: 'Do we should call him', tag: 'SHOULD', explanation_tr: 'Soruda "should" başa gelir: Should we call him?' },
          { text: 'Should we call he', tag: 'OBJPRON', explanation_tr: 'Fiilden sonra nesne zamiri: call him.' },
        ],
      },
      {
        id: 'q_sh_11', mode: 'order', prompt_tr: 'Gece geç saatte kahve içmemelisin.', answer_en: "You shouldn't drink coffee late at night", accepted: ['You should not drink coffee late at night'],
        words: ['You', "shouldn't", 'drink', 'coffee', 'late', 'at', 'night', 'drinks'],
        error_variants: [
          { text: "You shouldn't drinks coffee late at night", tag: 'SHOULD', explanation_tr: 'should\'dan sonra fiil yalın: shouldn\'t drink.' },
          { text: "You shouldn't drink coffee late in night", tag: 'PREP', explanation_tr: 'Gece için "at night".' },
        ],
      },
      {
        id: 'q_sh_12', mode: 'free', prompt_tr: 'Bence o işi kabul etmelisin.', answer_en: 'I think you should accept that job', accepted: ['I think you should take that job', 'I think you should accept the job', 'I think you should take the job'],
        error_variants: [
          { text: 'I think you should to accept that job', tag: 'SHOULD', explanation_tr: '"to" fazladan: should accept.' },
          { text: 'I think you should accepting that job', tag: 'SHOULD', explanation_tr: 'should\'dan sonra fiil yalın: should accept.' },
        ],
      },
    ],
  },
  {
    id: 'l_adjective_order',
    skillId: 'adjective_order',
    title: 'Adjective order',
    title_tr: 'Sıfat sırası: büyük kırmızı araba',
    explanation_tr:
      'Türkçede birden fazla sıfat kullanırken sıra oldukça esnektir, ama İngilizcede belli bir sıra vardır: görüş/kanaat (beautiful) → boyut (big) → yaş (old) → şekil (round) → renk (red) → köken (Turkish) → malzeme (wooden) + İSİM. Kısa cümlede en çok 2-3 sıfat kullanılır: "a beautiful big old red Turkish car." En sık hata: rengi boyuttan önce söylemek. İpucu: boyut ve yaş renkten önce gelir: "a red big car" ✗ → "a big red car" ✓.',
    examples: [
      { en: 'She has a beautiful old house.', tr: 'Güzel, eski bir evi var.' },
      { en: 'He bought a big red car.', tr: 'Büyük kırmızı bir araba aldı.' },
      { en: 'I saw a small black cat.', tr: 'Küçük siyah bir kedi gördüm.' },
    ],
    words: [
      { en: 'beautiful', tr: 'güzel', example: 'a beautiful old house', example_tr: 'güzel eski bir ev' },
      { en: 'round', tr: 'yuvarlak', example: 'a small round table', example_tr: 'küçük yuvarlak bir masa' },
      { en: 'wooden', tr: 'ahşap', example: 'an old wooden chair', example_tr: 'eski bir ahşap sandalye' },
      { en: 'Turkish', tr: 'Türk, Türkiye\'ye ait', example: 'a famous Turkish actor', example_tr: 'ünlü bir Türk aktör' },
      { en: 'cat', tr: 'kedi', example: 'a small black cat', example_tr: 'küçük siyah bir kedi' },
    ],
    exercises: [
      { type: 'gap', sentence: 'He bought a ___ car.', options: ['red big', 'big red'], answer: 1 },
      { type: 'gap', sentence: 'She has a ___ house.', options: ['beautiful old', 'old beautiful'], answer: 0, explanation_tr: 'Görüş sıfatı (beautiful) boyut/yaştan önce gelir.' },
      { type: 'gap', sentence: 'I saw a ___ cat.', options: ['black small', 'small black'], answer: 1 },
      { type: 'mc', prompt: 'Hangisi doğru sırada?', options: ['a Turkish old actor', 'an old Turkish actor', 'a old Turkish actor'], answer: 1 },
      { type: 'match', pairs: [['görüş', 'beautiful'], ['boyut', 'big'], ['renk', 'red'], ['köken', 'Turkish']] },
      { type: 'order', prompt_tr: 'Büyük kırmızı bir araba aldı.', words: ['He', 'bought', 'a', 'big', 'red', 'car'], answer: 'He bought a big red car' },
      { type: 'gap', sentence: 'They live in a ___ house.', options: ['small white', 'white small'], answer: 0 },
      { type: 'gap', sentence: 'She wore a ___ dress.', options: ['long beautiful', 'beautiful long'], answer: 1, explanation_tr: 'Görüş (beautiful) boyuttan (long) önce gelir.' },
      { type: 'mc', prompt: 'Hangisi doğru sırada?', options: ['a round small table', 'a small round table', 'a table small round'], answer: 1 },
      { type: 'order', prompt_tr: 'Eski, ahşap bir kapı.', words: ['An', 'old', 'wooden', 'door', 'A'], answer: 'An old wooden door' },
    ],
    quiz: [
      {
        id: 'q_ao_1', mode: 'order', prompt_tr: 'Büyük kırmızı bir araba aldı.', answer_en: 'He bought a big red car',
        words: ['He', 'bought', 'a', 'big', 'red', 'car'],
        error_variants: [
          { text: 'He bought a red big car', tag: 'ADJORDER', explanation_tr: 'Boyut renkten önce gelir: big red car.' },
        ],
      },
      {
        id: 'q_ao_2', mode: 'free', prompt_tr: 'Güzel, eski bir evi var (kadın).', answer_en: 'She has a beautiful old house',
        error_variants: [
          { text: 'She has an old beautiful house', tag: 'ADJORDER', explanation_tr: 'Görüş sıfatı (beautiful) boyut/yaştan önce gelir.' },
          { text: 'She has a house beautiful old', tag: 'WORD_ORDER', explanation_tr: 'Sıfatlar isimden önce gelir.' },
        ],
      },
      {
        id: 'q_ao_3', mode: 'order', prompt_tr: 'Küçük siyah bir kedi gördüm.', answer_en: 'I saw a small black cat',
        words: ['I', 'saw', 'a', 'small', 'black', 'cat'],
        error_variants: [
          { text: 'I saw a black small cat', tag: 'ADJORDER', explanation_tr: 'Boyut (small) renkten önce gelir.' },
        ],
      },
      {
        id: 'q_ao_4', mode: 'free', prompt_tr: 'Eski bir ahşap sandalye.', answer_en: 'An old wooden chair',
        error_variants: [
          { text: 'A wooden old chair', tag: 'ADJORDER', explanation_tr: 'Yaş (old) malzemeden önce gelir.' },
          { text: 'A old wooden chair', tag: 'ART', explanation_tr: '"old" sesli harfle başlar: an old.' },
        ],
      },
      {
        id: 'q_ao_5', mode: 'order', prompt_tr: 'Ünlü bir Türk aktör.', answer_en: 'A famous Turkish actor',
        words: ['A', 'famous', 'Turkish', 'actor', 'An'],
        error_variants: [
          { text: 'A Turkish famous actor', tag: 'ADJORDER', explanation_tr: 'Görüş (famous) kökenden önce gelir.' },
        ],
      },
      {
        id: 'q_ao_6', mode: 'free', prompt_tr: 'Küçük beyaz bir evde yaşıyorlar.', answer_en: 'They live in a small white house',
        error_variants: [
          { text: 'They live in a white small house', tag: 'ADJORDER', explanation_tr: 'Boyut (small) renkten önce gelir.' },
          { text: 'They live in small white house', tag: 'ART', explanation_tr: 'Tekil sayılabilen isim: a small white house.' },
        ],
      },
      {
        id: 'q_ao_7', mode: 'order', prompt_tr: 'Uzun, güzel bir elbise giydi (kadın).', answer_en: 'She wore a beautiful long dress',
        words: ['She', 'wore', 'a', 'beautiful', 'long', 'dress', 'an'],
        error_variants: [
          { text: 'She wore a long beautiful dress', tag: 'ADJORDER', explanation_tr: 'Görüş (beautiful) boyuttan (long) önce gelir.' },
          { text: 'She wore beautiful long dress', tag: 'ART', explanation_tr: '"a" eksik: a beautiful long dress.' },
        ],
      },
      {
        id: 'q_ao_8', mode: 'free', prompt_tr: 'Büyük yuvarlak bir masamız var.', answer_en: 'We have a big round table', accepted: ["We've got a big round table", 'We have got a big round table', 'We have a large round table'],
        error_variants: [
          { text: 'We have a round big table', tag: 'ADJORDER', explanation_tr: 'Boyut (big) şekilden (round) önce gelir.' },
          { text: 'We have big round table', tag: 'ART', explanation_tr: '"a" eksik: a big round table.' },
        ],
      },
      {
        id: 'q_ao_9', mode: 'order', prompt_tr: 'Yeni siyah bir telefon aldım.', answer_en: 'I bought a new black phone',
        words: ['I', 'bought', 'a', 'new', 'black', 'phone', 'an'],
        error_variants: [
          { text: 'I bought a black new phone', tag: 'ADJORDER', explanation_tr: 'Yaş (new) renkten önce gelir.' },
          { text: 'I bought new black phone', tag: 'ART', explanation_tr: '"a" eksik: a new black phone.' },
        ],
      },
      {
        id: 'q_ao_10', mode: 'free', prompt_tr: 'Güzel, küçük bir köpekleri var.', answer_en: 'They have a beautiful little dog', accepted: ['They have a nice little dog', 'They have a lovely little dog', 'They have a beautiful small dog', 'They have a nice small dog', "They've got a beautiful little dog", 'They have got a beautiful little dog'],
        error_variants: [
          { text: 'They have a little beautiful dog', tag: 'ADJORDER', explanation_tr: 'Görüş (beautiful) boyuttan (little) önce gelir.' },
          { text: 'They have a small beautiful dog', tag: 'ADJORDER', explanation_tr: 'Görüş (beautiful) boyuttan (small) önce gelir.' },
        ],
      },
      {
        id: 'q_ao_11', mode: 'order', prompt_tr: 'Eski bir İtalyan arabası.', answer_en: 'An old Italian car',
        words: ['An', 'old', 'Italian', 'car', 'A'],
        error_variants: [
          { text: 'An Italian old car', tag: 'ADJORDER', explanation_tr: 'Yaş (old) kökenden (Italian) önce gelir.' },
          { text: 'A old Italian car', tag: 'ART', explanation_tr: '"old" sesli harfle başlar: an old.' },
        ],
      },
      {
        id: 'q_ao_12', mode: 'free', prompt_tr: 'Büyük mavi gözleri var (kadın).', answer_en: 'She has big blue eyes', accepted: ["She's got big blue eyes", 'She has got big blue eyes', 'She has large blue eyes'],
        error_variants: [
          { text: 'She has blue big eyes', tag: 'ADJORDER', explanation_tr: 'Boyut (big) renkten önce gelir.' },
          { text: 'She has a big blue eyes', tag: 'ART', explanation_tr: 'Çoğul isimden önce "a" gelmez: big blue eyes.' },
        ],
      },
    ],
  },
  {
    id: 'l_make_do',
    skillId: 'make_do',
    title: 'make / do',
    title_tr: 'make / do ayrımı',
    explanation_tr:
      'Türkçedeki "yapmak" İngilizcede iki ayrı fiile bölünür. "make" bir şey ÜRETMEK/YARATMAK anlamındadır: make coffee, make a cake, make a decision, make a mistake, make money. "do" bir İŞ veya GÖREV yapmaktır, somut bir ürün ortaya çıkmaz: do homework, do the housework, do sport, do business, do a favor. Kesin kural yoktur, bu kalıplar EZBERLENİR. Türklerin hatası ikisini birbirinin yerine kullanmak: "do a mistake" ✗ (make a mistake ✓), "make homework" ✗ (do homework ✓).',
    examples: [
      { en: 'I need to do my homework tonight.', tr: 'Bu gece ödevimi yapmam gerekiyor.' },
      { en: 'She made a delicious cake for the party.', tr: 'Parti için nefis bir kek yaptı.' },
      { en: 'He always does the housework on Sundays.', tr: 'Pazar günleri hep ev işlerini yapar.' },
    ],
    words: [
      { en: 'mistake', tr: 'hata', example: 'Everyone makes mistakes.', example_tr: 'Herkes hata yapar.' },
      { en: 'decision', tr: 'karar', example: 'We need to make a decision.', example_tr: 'Bir karar vermemiz lazım.' },
      { en: 'homework', tr: 'ev ödevi', example: 'Did you do your homework?', example_tr: 'Ödevini yaptın mı?' },
      { en: 'favor', tr: 'iyilik', example: 'Can you do me a favor?', example_tr: 'Bana bir iyilik yapabilir misin?' },
      { en: 'housework', tr: 'ev işi', example: 'I do the housework every weekend.', example_tr: 'Her hafta sonu ev işlerini yaparım.' },
    ],
    exercises: [
      { type: 'gap', sentence: 'I need to ___ my homework.', options: ['make', 'do'], answer: 1 },
      { type: 'gap', sentence: 'She ___ a cake for the party.', options: ['made', 'did'], answer: 0 },
      { type: 'gap', sentence: 'Everyone ___ mistakes.', options: ['makes', 'does'], answer: 0 },
      { type: 'mc', prompt: 'Hangisi doğru?', options: ['do a mistake', 'make a mistake', 'make mistake'], answer: 1 },
      { type: 'match', pairs: [['kahve yapmak', 'make coffee'], ['ödev yapmak', 'do homework'], ['karar vermek', 'make a decision'], ['spor yapmak', 'do sport']] },
      { type: 'order', prompt_tr: 'Bana bir iyilik yapabilir misin?', words: ['Can', 'you', 'do', 'me', 'a', 'favor', 'make'], answer: 'Can you do me a favor' },
      { type: 'gap', sentence: 'I usually ___ the shopping on Saturdays.', options: ['do', 'make'], answer: 0 },
      { type: 'gap', sentence: 'Let\'s ___ some coffee.', options: ['make', 'do'], answer: 0 },
      { type: 'mc', prompt: 'Hangisi doğru?', options: ['I do sport every day.', 'I make sport every day.', 'I make sports every day.'], answer: 0 },
      { type: 'order', prompt_tr: 'Çok para kazanıyor (erkek).', words: ['He', 'makes', 'a', 'lot', 'of', 'money', 'does'], answer: 'He makes a lot of money' },
    ],
    quiz: [
      {
        id: 'q_md_1', mode: 'order', prompt_tr: 'Bu gece ödevimi yapmam gerekiyor.', answer_en: 'I need to do my homework tonight',
        words: ['I', 'need', 'to', 'do', 'my', 'homework', 'tonight', 'make'],
        error_variants: [
          { text: 'I need to make my homework tonight', tag: 'MAKE_DO', explanation_tr: 'homework ile "do" kullanılır: do homework.' },
        ],
      },
      {
        id: 'q_md_2', mode: 'free', prompt_tr: 'Parti için nefis bir kek yaptı (kadın).', answer_en: 'She made a delicious cake for the party', accepted: ['She baked a delicious cake for the party'],
        error_variants: [
          { text: 'She did a delicious cake for the party', tag: 'MAKE_DO', explanation_tr: 'cake üretilen bir şey: make a cake.' },
        ],
      },
      {
        id: 'q_md_3', mode: 'order', prompt_tr: 'Pazar günleri hep ev işlerini yapar.', answer_en: 'He always does the housework on Sundays',
        words: ['He', 'always', 'does', 'the', 'housework', 'on', 'Sundays', 'makes'],
        error_variants: [
          { text: 'He always makes the housework on Sundays', tag: 'MAKE_DO', explanation_tr: 'housework ile "do" kullanılır.' },
          { text: 'He does always the housework on Sundays', tag: 'FREQ', explanation_tr: 'Sıklık zarfı fiilden önce: always does.' },
        ],
      },
      {
        id: 'q_md_4', mode: 'free', prompt_tr: 'Herkes hata yapar.', answer_en: 'Everyone makes mistakes', accepted: ['Everybody makes mistakes'],
        error_variants: [
          { text: 'Everyone does mistakes', tag: 'MAKE_DO', explanation_tr: 'mistake ile "make" kullanılır: make mistakes.' },
        ],
      },
      {
        id: 'q_md_5', mode: 'order', prompt_tr: 'Bir karar vermemiz lazım.', answer_en: 'We need to make a decision',
        words: ['We', 'need', 'to', 'make', 'a', 'decision', 'do'],
        error_variants: [
          { text: 'We need to do a decision', tag: 'MAKE_DO', explanation_tr: 'decision ile "make" kullanılır: make a decision.' },
        ],
      },
      {
        id: 'q_md_6', mode: 'free', prompt_tr: 'Bana bir iyilik yapabilir misin?', answer_en: 'Can you do me a favor', accepted: ['Can you do me a favour', 'Could you do me a favor', 'Could you do me a favour'],
        error_variants: [
          { text: 'Can you make me a favor', tag: 'MAKE_DO', explanation_tr: 'favor ile "do" kullanılır: do me a favor.' },
          { text: 'Can you do a favor me', tag: 'WORD_ORDER', explanation_tr: 'Kişi önce gelir: do me a favor.' },
        ],
      },
      {
        id: 'q_md_7', mode: 'order', prompt_tr: 'Her sabah kahvaltı hazırlarım.', answer_en: 'I make breakfast every morning', accepted: ['Every morning I make breakfast'],
        words: ['I', 'make', 'breakfast', 'every', 'morning', 'do'],
        error_variants: [
          { text: 'I do breakfast every morning', tag: 'MAKE_DO', explanation_tr: 'Yemek hazırlamak "make": make breakfast.' },
          { text: 'I make every morning breakfast', tag: 'WORD_ORDER', explanation_tr: 'Nesne fiilden hemen sonra: make breakfast every morning.' },
        ],
      },
      {
        id: 'q_md_8', mode: 'free', prompt_tr: 'Dün ödevini yaptın mı?', answer_en: 'Did you do your homework yesterday', accepted: ['Yesterday did you do your homework'],
        error_variants: [
          { text: 'Did you make your homework yesterday', tag: 'MAKE_DO', explanation_tr: 'homework ile "do": do your homework.' },
          { text: 'Did you did your homework yesterday', tag: 'PAST', explanation_tr: 'did\'ten sonra fiil yalın: did you do.' },
        ],
      },
      {
        id: 'q_md_9', mode: 'order', prompt_tr: 'Bir hata yaptım.', answer_en: 'I made a mistake',
        words: ['I', 'made', 'a', 'mistake', 'did'],
        error_variants: [
          { text: 'I did a mistake', tag: 'MAKE_DO', explanation_tr: 'mistake ile "make": made a mistake.' },
          { text: 'I made mistake', tag: 'ART', explanation_tr: '"a" eksik: a mistake.' },
        ],
      },
      {
        id: 'q_md_10', mode: 'free', prompt_tr: 'Haftada üç kez spor yaparım.', answer_en: 'I do sport three times a week', accepted: ['I do sports three times a week', 'I exercise three times a week', 'I do exercise three times a week'],
        error_variants: [
          { text: 'I make sport three times a week', tag: 'MAKE_DO', explanation_tr: 'sport ile "do": do sport.' },
          { text: 'I three times a week do sport', tag: 'WORD_ORDER', explanation_tr: 'Fiil özneden hemen sonra: I do sport three times a week.' },
        ],
      },
      {
        id: 'q_md_11', mode: 'order', prompt_tr: 'Gürültü yapmayın!', answer_en: "Don't make noise", accepted: ["Don't make a noise", 'Do not make noise', 'Do not make a noise'],
        words: ["Don't", 'make', 'noise', 'do'],
        error_variants: [
          { text: "Don't do noise", tag: 'MAKE_DO', explanation_tr: 'noise ile "make": make noise.' },
          { text: 'No make noise', tag: 'NEG', explanation_tr: 'Olumsuz emir "Don\'t" ile: Don\'t make noise.' },
        ],
      },
      {
        id: 'q_md_12', mode: 'free', prompt_tr: 'Yatağını topladın mı?', answer_en: 'Did you make your bed', accepted: ['Have you made your bed'],
        error_variants: [
          { text: 'Did you do your bed', tag: 'MAKE_DO', explanation_tr: 'Yatak toplamak kalıbı: make your bed.' },
          { text: 'Did you made your bed', tag: 'PAST', explanation_tr: 'did\'ten sonra fiil yalın: did you make.' },
        ],
      },
    ],
  },
]
