import type { Lesson } from './types'

export const LESSONS_A13: Lesson[] = [
  {
    id: 'l_present_continuous',
    skillId: 'present_continuous',
    title: 'Present continuous: I am working',
    title_tr: 'Şimdiki zaman: I am working',
    explanation_tr:
      'Türkçede "çalışıyorum" tek kelime: fiil + "-yor" + kişi eki. İngilizcede bu "-yor" iki parçaya ayrılır: am/is/are + fiil-ing. "I am working", "She is reading", "They are playing". Türklerin en sık hatası parçalardan birini atlamak: "I working" ✗ (am yok) ya da "I am work" ✗ (-ing yok). Olumsuzda not araya girer: "I am not working"; soruda am/is/are başa geçer: "Are you working?" (do/does gelmez). Yazım: sondaki e düşer (make → making), kısa fiilde son harf ikilenir (sit → sitting, run → running). Bu zaman ŞU AN olanı anlatır; her gün olan için geniş zaman kullanılır: "I work every day" ama "I am working now". know, like, want gibi durum fiilleri -ing almaz: "I know" ✓, "I am knowing" ✗.',
    examples: [
      { en: 'I am cooking dinner now.', tr: 'Şu an akşam yemeği pişiriyorum.' },
      { en: 'She is not watching TV.', tr: 'O (kadın) televizyon izlemiyor.' },
      { en: 'Are they waiting for the bus?', tr: 'Otobüsü mü bekliyorlar?' },
    ],
    words: [
      { en: 'now', tr: 'şimdi, şu an', example: 'I am busy now.', example_tr: 'Şu an meşgulüm.' },
      { en: 'cook', tr: 'pişirmek, yemek yapmak', example: 'My father is cooking.', example_tr: 'Babam yemek yapıyor.' },
      { en: 'wait', tr: 'beklemek', example: 'We are waiting for you.', example_tr: 'Seni bekliyoruz.' },
      { en: 'rain', tr: 'yağmur yağmak', example: 'It is raining today.', example_tr: 'Bugün yağmur yağıyor.' },
      { en: 'listen', tr: 'dinlemek', example: 'Are you listening to me?', example_tr: 'Beni dinliyor musun?' },
    ],
    exercises: [
      { type: 'gap', sentence: 'I ___ working now.', options: ['am', 'is', 'are'], answer: 0 },
      { type: 'gap', sentence: 'They ___ playing football.', options: ['is', 'are', 'am'], answer: 1 },
      { type: 'gap', sentence: 'She is ___ a letter.', options: ['write', 'writing', 'writes'], answer: 1, explanation_tr: 'am/is/are\'den sonra fiil -ing alır; write → writing (sondaki e düşer).' },
      { type: 'gap', sentence: 'We are ___ on the floor.', options: ['siting', 'sitting', 'sit'], answer: 1, explanation_tr: 'sit kısa bir fiil: son harf ikilenir → sitting.' },
      { type: 'mc', prompt: 'Hangisi doğru?', options: ['I am knowing the answer.', 'I know the answer.', 'I knowing the answer.'], answer: 1, explanation_tr: 'know bir durum fiili, -ing almaz: I know.' },
      { type: 'mc', prompt: '"Ali şu an uyuyor." Hangisi?', options: ['Ali is sleep.', 'Ali is sleeping.', 'Ali sleeping.'], answer: 1, explanation_tr: 'İki parça gerekli: is + sleeping.' },
      { type: 'match', pairs: [['make', 'making'], ['sit', 'sitting'], ['read', 'reading'], ['write', 'writing']] },
      { type: 'match', pairs: [['I', 'am cooking'], ['He', 'is cooking'], ['We', 'are cooking']] },
      { type: 'order', prompt_tr: 'Şu an yemek yiyoruz.', words: ['eating', 'We', 'now', 'are'], answer: 'We are eating now' },
      { type: 'order', prompt_tr: 'O (kadın) telefonda mı konuşuyor?', words: ['she', 'the', 'Is', 'phone', 'talking', 'on'], answer: 'Is she talking on the phone' },
    ],
    quiz: [
      {
        id: 'q_prc_1', mode: 'order', prompt_tr: 'Şu an çalışıyorum.', answer_en: 'I am working now',
        words: ['working', 'I', 'now', 'am', 'work', 'is'],
        error_variants: [
          { text: 'I working now', tag: 'TOBE', explanation_tr: '"am" atlanmış. "-yor" iki parça ister: am + working.' },
          { text: 'I am work now', tag: 'PRESCONT', explanation_tr: 'Fiil -ing almalı: I am working.' },
          { text: 'I is working now', tag: 'TOBE', explanation_tr: '"I" ile her zaman "am": I am working.' },
        ],
      },
      {
        id: 'q_prc_2', mode: 'free', prompt_tr: 'O (kadın) şu an kitap okuyor.', answer_en: 'She is reading a book now',
        accepted: ["She's reading a book now", 'She is reading a book', "She's reading a book", 'She is reading a book right now', "She's reading a book right now", 'Now she is reading a book', "Now she's reading a book"],
        error_variants: [
          { text: 'She reading a book now', tag: 'TOBE', explanation_tr: '"is" atlanmış: She is reading.' },
          { text: 'She is read a book now', tag: 'PRESCONT', explanation_tr: 'Fiil -ing almalı: is reading.' },
          { text: 'She reads a book now', tag: 'PRESCONT', explanation_tr: 'Şu an olan eylem için şimdiki zaman: She is reading.' },
        ],
      },
      {
        id: 'q_prc_3', mode: 'order', prompt_tr: 'Onlar televizyon izlemiyor.', answer_en: 'They are not watching TV',
        words: ['not', 'They', 'TV', 'are', 'watching', 'do', 'watch'],
        error_variants: [
          { text: "They don't watching TV", tag: 'NEG', explanation_tr: 'Şimdiki zamanda olumsuz "don\'t" ile değil, "are not" ile yapılır.' },
          { text: 'They not watching TV', tag: 'TOBE', explanation_tr: '"are" atlanmış: They are not watching.' },
          { text: 'They are not watch TV', tag: 'PRESCONT', explanation_tr: 'Fiil -ing almalı: are not watching.' },
        ],
      },
      {
        id: 'q_prc_4', mode: 'free', prompt_tr: 'Ne yapıyorsun?', answer_en: 'What are you doing',
        accepted: ['What are you doing now', 'What are you doing right now'],
        error_variants: [
          { text: 'What you are doing', tag: 'WH', explanation_tr: 'Soruda "are" özneden önce gelir: What are you doing?' },
          { text: 'What are you do', tag: 'PRESCONT', explanation_tr: 'Fiil -ing almalı: What are you doing?' },
          { text: 'What do you doing', tag: 'DO_Q', explanation_tr: 'Şimdiki zamanda soru do ile değil, are ile kurulur.' },
        ],
      },
      {
        id: 'q_prc_5', mode: 'order', prompt_tr: 'Yağmur yağıyor.', answer_en: 'It is raining',
        words: ['raining', 'It', 'is', 'rain', 'are'],
        error_variants: [
          { text: 'It raining', tag: 'TOBE', explanation_tr: '"is" atlanmış: It is raining.' },
          { text: 'It is rain', tag: 'PRESCONT', explanation_tr: 'Fiil -ing almalı: It is raining.' },
        ],
      },
      {
        id: 'q_prc_6', mode: 'free', prompt_tr: 'Annem yemek yapıyor.', answer_en: 'My mother is cooking',
        accepted: ["My mother's cooking", 'My mom is cooking', "My mom's cooking", 'My mum is cooking', "My mum's cooking", 'My mother is cooking now', 'My mother is making food'],
        error_variants: [
          { text: 'My mother cooking', tag: 'TOBE', explanation_tr: '"is" atlanmış: My mother is cooking.' },
          { text: 'My mother are cooking', tag: 'TOBE', explanation_tr: '"My mother" tekil (she): is cooking.' },
          { text: 'My mother is cook', tag: 'PRESCONT', explanation_tr: 'Fiil -ing almalı: is cooking.' },
        ],
      },
      {
        id: 'q_prc_7', mode: 'order', prompt_tr: 'Beni dinlemiyorsun!', answer_en: 'You are not listening to me', accepted: ["You aren't listening to me", "You're not listening to me"],
        words: ['not', 'You', 'me', 'listening', 'are', 'to', 'do', 'listen'],
        error_variants: [
          { text: "You don't listening to me", tag: 'NEG', explanation_tr: 'Olumsuz "are not" ile: You are not listening.' },
          { text: 'You not listening to me', tag: 'TOBE', explanation_tr: '"are" atlanmış: You are not listening.' },
          { text: 'You are not listening me', tag: 'PREP', explanation_tr: '"listen" bir kişiyle "to" ister: listening to me.' },
        ],
      },
      {
        id: 'q_prc_8', mode: 'free', prompt_tr: 'Otobüsü bekliyoruz.', answer_en: 'We are waiting for the bus',
        accepted: ["We're waiting for the bus", 'We are waiting for a bus', "We're waiting for a bus"],
        error_variants: [
          { text: 'We are waiting the bus', tag: 'PREP', explanation_tr: '"wait" bir şeyle "for" ister: waiting for the bus.' },
          { text: 'We waiting for the bus', tag: 'TOBE', explanation_tr: '"are" atlanmış: We are waiting.' },
          { text: 'We are wait for the bus', tag: 'PRESCONT', explanation_tr: 'Fiil -ing almalı: are waiting.' },
        ],
      },
      {
        id: 'q_prc_9', mode: 'order', prompt_tr: 'O (erkek) şu an uyuyor mu?', answer_en: 'Is he sleeping now',
        words: ['sleeping', 'he', 'Is', 'now', 'Does', 'sleep'],
        error_variants: [
          { text: 'Does he sleeping now', tag: 'DO_Q', explanation_tr: 'Şimdiki zamanda soru does ile değil, is ile kurulur: Is he sleeping?' },
          { text: 'Is he sleep now', tag: 'PRESCONT', explanation_tr: 'Fiil -ing almalı: Is he sleeping?' },
        ],
      },
      {
        id: 'q_prc_10', mode: 'free', prompt_tr: 'Ali ders çalışıyor.', answer_en: 'Ali is studying',
        accepted: ["Ali's studying", 'Ali is studying now', "Ali's studying now"],
        error_variants: [
          { text: 'Ali studying', tag: 'TOBE', explanation_tr: '"is" atlanmış: Ali is studying.' },
          { text: 'Ali is studing', tag: 'PRESCONT', explanation_tr: 'study + -ing = studying (y kalır).' },
          { text: 'Ali are studying', tag: 'TOBE', explanation_tr: 'Ali tekil (he): is studying.' },
        ],
      },
      {
        id: 'q_prc_11', mode: 'order', prompt_tr: 'Her gün çalışırım ama bugün çalışmıyorum.', answer_en: 'I work every day but today I am not working',
        words: ['work', 'today', 'I', 'every', 'am', 'but', 'not', 'day', 'I', 'working', 'works', 'do'],
        error_variants: [
          { text: 'I am working every day but today I am not working', tag: 'PRESCONT', explanation_tr: '"Her gün" bir alışkanlık: geniş zaman (I work every day). Şimdiki zaman yalnız "bugün" için.' },
          { text: 'I work every day but today I not working', tag: 'TOBE', explanation_tr: '"am" atlanmış: I am not working.' },
          { text: "I work every day but today I don't working", tag: 'NEG', explanation_tr: 'Şimdiki zamanda olumsuz "am not" ile: I am not working.' },
        ],
      },
      {
        id: 'q_prc_12', mode: 'free', prompt_tr: 'Bebek ağlıyor.', answer_en: 'The baby is crying',
        accepted: ["The baby's crying", 'The baby is crying now', "The baby's crying now", 'A baby is crying'],
        error_variants: [
          { text: 'The baby crying', tag: 'TOBE', explanation_tr: '"is" atlanmış: The baby is crying.' },
          { text: 'The baby is cry', tag: 'PRESCONT', explanation_tr: 'Fiil -ing almalı: is crying.' },
          { text: 'Baby is crying', tag: 'ART', explanation_tr: 'Belirli bebek için "the": The baby is crying.' },
        ],
      },
    ],
  },
  {
    id: 'l_have_got',
    skillId: 'have_got',
    title: "have got / haven't got",
    title_tr: 'have got — sahip olmak',
    explanation_tr:
      'İngilizler günlük konuşmada "sahip olmak" için "have" yerine sıklıkla "have got" kullanır — ikisi de aynı anlama gelir: "I have a car" = "I\'ve got a car." Fark, soru ve olumsuz kurarken ortaya çıkar: normal "have" ile do/does gerekirken, "have got" kendi başına yardımcı fiil gibi davranır. Soru: "Have you got a car?" (Do you have a car? de doğru ama bu farklı bir yapı). Olumsuz: "I haven\'t got a car." Türkler burada iki hata yapar: ya "have" kısmını atlar ("I got a car" ✗, bu "aldım" demektir) ya da "haven\'t got" yerine "don\'t have got" gibi ikisini birden kullanır. Konuşmada kısaltma çok yaygın: I\'ve got, she\'s got, haven\'t got.',
    examples: [
      { en: "I've got a new phone.", tr: 'Yeni bir telefonum var.' },
      { en: "Have you got any brothers or sisters?", tr: 'Erkek veya kız kardeşin var mı?' },
      { en: "She hasn't got a car.", tr: 'Onun (kadın) arabası yok.' },
    ],
    words: [
      { en: 'brother', tr: 'erkek kardeş', example: "I've got one brother.", example_tr: 'Bir erkek kardeşim var.' },
      { en: 'pet', tr: 'evcil hayvan', example: "Have you got a pet?", example_tr: 'Evcil hayvanın var mı?' },
      { en: 'spare time', tr: 'boş zaman', example: "I haven't got much spare time.", example_tr: 'Fazla boş zamanım yok.' },
      { en: 'headache', tr: 'baş ağrısı', example: "She's got a headache.", example_tr: 'Onun başı ağrıyor.' },
      { en: 'appointment', tr: 'randevu', example: "I've got an appointment at 5.", example_tr: 'Saat 5\'te randevum var.' },
    ],
    exercises: [
      { type: 'gap', sentence: "I ___ got a new car.", options: ['have', 'has', 'am'], answer: 0 },
      { type: 'gap', sentence: "___ you got a pet?", options: ['Do', 'Have', 'Are'], answer: 1 },
      { type: 'gap', sentence: "She ___ got any brothers.", options: ["hasn't", "doesn't", "isn't"], answer: 0, explanation_tr: '"have got" olumsuzu: haven\'t/hasn\'t got.' },
      { type: 'mc', prompt: 'Hangisi doğru?', options: ["I don't have got a car.", "I haven't got a car.", "I not have got a car."], answer: 1 },
      { type: 'match', pairs: [['I', "I've got"], ['She', "She's got"], ['They', "They've got"], ['He', "He's got"]] },
      { type: 'order', prompt_tr: 'Senin erkek kardeşin var mı?', words: ['you', 'got', 'Have', 'a', 'brother'], answer: 'Have you got a brother' },
      { type: 'gap', sentence: 'He ___ got a headache.', options: ['has', 'have', 'is'], answer: 0 },
      { type: 'gap', sentence: 'We ___ got a car.', options: ["haven't", "hasn't", "don't"], answer: 0 },
      { type: 'mc', prompt: '"Kedin var mı?" nasıl denir?', options: ['Have you got a cat?', 'Do you have got a cat?', 'Are you got a cat?'], answer: 0 },
      { type: 'order', prompt_tr: 'Bugün vaktim yok.', words: ['I', "haven't", 'got', 'time', 'today', "don't"], answer: "I haven't got time today" },
    ],
    quiz: [
      {
        id: 'q_hg_1', mode: 'order', prompt_tr: 'Yeni bir arabam var.', answer_en: "I've got a new car",
        words: ["I've", 'got', 'a', 'new', 'car', 'have'],
        error_variants: [
          { text: 'I have got new car', tag: 'ART', explanation_tr: 'Tekil sayılabilir isimden önce "a": a new car.' },
          { text: 'I got a new car', tag: 'HAVE_GOT', explanation_tr: '"have/\'ve" atlanmış: I\'ve got a new car.' },
        ],
      },
      {
        id: 'q_hg_2', mode: 'free', prompt_tr: 'Senin evcil hayvanın var mı?', answer_en: 'Have you got a pet', accepted: ['Have you got a pet?', 'Do you have a pet', 'Do you have a pet?'],
        error_variants: [
          { text: 'Do you have got a pet', tag: 'HAVE_GOT', explanation_tr: '"have got" kendi başına yardımcı fiildir, "do" ile birlikte kullanılmaz: Have you got a pet?' },
          { text: 'You have got a pet', tag: 'DO_Q', explanation_tr: 'Soruda "have" başa gelir: Have you got...?' },
        ],
      },
      {
        id: 'q_hg_3', mode: 'order', prompt_tr: 'Onun (kadın) arabası yok.', answer_en: "She hasn't got a car",
        words: ["She", "hasn't", 'got', 'a', 'car', "haven't"],
        error_variants: [
          { text: "She haven't got a car", tag: 'HAVE_GOT', explanation_tr: 'she/he/it ile "hasn\'t got": She hasn\'t got a car.' },
          { text: "She doesn't got a car", tag: 'HAVE_GOT', explanation_tr: '"have got" olumsuzu "doesn\'t" ile değil "hasn\'t" ile: She hasn\'t got a car.' },
        ],
      },
      {
        id: 'q_hg_4', mode: 'free', prompt_tr: 'Onun (erkek) başı ağrıyor.', answer_en: "He's got a headache", accepted: ['He has got a headache', 'He has a headache'],
        error_variants: [
          { text: 'He has headache', tag: 'ART', explanation_tr: 'Tekil isimden önce "a": a headache.' },
          { text: 'He got a headache', tag: 'HAVE_GOT', explanation_tr: '"has/\'s" atlanmış: He\'s got a headache.' },
        ],
      },
      {
        id: 'q_hg_5', mode: 'order', prompt_tr: 'Saat 5\'te randevum var.', answer_en: "I've got an appointment at 5",
        words: ["I've", 'got', 'an', 'appointment', 'at', '5', 'a'],
        error_variants: [
          { text: "I've got a appointment at 5", tag: 'ART', explanation_tr: 'Sesli sesle başlar: an appointment.' },
          { text: "I've got an appointment in 5", tag: 'PREP', explanation_tr: 'Saat için "at": at 5.' },
        ],
      },
      {
        id: 'q_hg_6', mode: 'order', prompt_tr: 'İki erkek kardeşim var.', answer_en: "I've got two brothers", accepted: ['I have got two brothers', 'I have two brothers'],
        words: ["I've", 'got', 'two', 'brothers', 'brother', 'a'],
        error_variants: [
          { text: "I've got two brother", tag: 'PLURAL', explanation_tr: 'Sayıdan sonra çoğul: two brothers.' },
          { text: 'I got two brothers', tag: 'HAVE_GOT', explanation_tr: '"have/\'ve" atlanmış: I\'ve got two brothers.' },
        ],
      },
      {
        id: 'q_hg_7', mode: 'free', prompt_tr: 'Arabam yok.', answer_en: "I haven't got a car", accepted: ['I have not got a car', "I don't have a car", 'I do not have a car'],
        error_variants: [
          { text: "I don't have got a car", tag: 'HAVE_GOT', explanation_tr: '"have got" ile "do" birlikte kullanılmaz: I haven\'t got a car.' },
          { text: "I haven't got car", tag: 'ART', explanation_tr: 'Tekil isimden önce "a": a car.' },
        ],
      },
      {
        id: 'q_hg_8', mode: 'order', prompt_tr: 'Onun (erkek) bir köpeği var.', answer_en: "He's got a dog", accepted: ['He has got a dog', 'He has a dog'],
        words: ["He's", 'got', 'a', 'dog', "She's", 'an'],
        error_variants: [
          { text: "She's got a dog", tag: 'GEN', explanation_tr: 'Erkek → he.' },
          { text: 'He got a dog', tag: 'HAVE_GOT', explanation_tr: '"has/\'s" atlanmış: He\'s got a dog.' },
        ],
      },
      {
        id: 'q_hg_9', mode: 'free', prompt_tr: 'Arabanız var mı?', answer_en: 'Have you got a car', accepted: ['Do you have a car'],
        error_variants: [
          { text: 'Do you have got a car', tag: 'HAVE_GOT', explanation_tr: '"have got" ile "do" birlikte kullanılmaz: Have you got a car?' },
          { text: 'You have got a car', tag: 'DO_Q', explanation_tr: 'Soruda "have" başa gelir: Have you got...?' },
        ],
      },
      {
        id: 'q_hg_10', mode: 'order', prompt_tr: 'Onların büyük bir evi var.', answer_en: "They've got a big house", accepted: ['They have got a big house', 'They have a big house'],
        words: ["They've", 'got', 'a', 'big', 'house', 'has'],
        error_variants: [
          { text: "They've got big house", tag: 'ART', explanation_tr: 'Tekil isimden önce "a": a big house.' },
          { text: 'They got a big house', tag: 'HAVE_GOT', explanation_tr: '"have/\'ve" atlanmış: They\'ve got a big house.' },
        ],
      },
      {
        id: 'q_hg_11', mode: 'free', prompt_tr: 'Onun (kadın) bugün sınavı var.', answer_en: "She's got an exam today", accepted: ['She has got an exam today', 'She has an exam today', "Today she's got an exam", 'Today she has got an exam', 'Today she has an exam'],
        error_variants: [
          { text: "She's got a exam today", tag: 'ART', explanation_tr: 'Sesli sesle başlıyor: an exam.' },
          { text: 'She got an exam today', tag: 'HAVE_GOT', explanation_tr: '"has/\'s" atlanmış: She\'s got an exam.' },
        ],
      },
      {
        id: 'q_hg_12', mode: 'order', prompt_tr: 'Bir sorunumuz yok.', answer_en: "We haven't got a problem", accepted: ['We have not got a problem', "We don't have a problem"],
        words: ['We', "haven't", 'got', 'a', 'problem', "hasn't", "don't"],
        error_variants: [
          { text: "We hasn't got a problem", tag: 'HAVE_GOT', explanation_tr: 'we ile "haven\'t got".' },
          { text: "We don't have got a problem", tag: 'HAVE_GOT', explanation_tr: '"have got" ile "do" birlikte kullanılmaz.' },
        ],
      },
    ],
  },
  {
    id: 'l_like_ing',
    skillId: 'like_ing',
    title: 'like / love / hate + -ing',
    title_tr: 'like / love / hate + -ing',
    explanation_tr:
      'Türkçede "yüzmeyi severim" derken fiil "-mek/-mak" ile isim gibi kullanılır. İngilizcede like/love/hate/enjoy gibi fiillerden sonra ikinci fiil "-ing" alır: "I like swimming", "She hates waiting." Türklerin en sık hatası buraya "to" koymak ("I like to swimming" gibi karışık bir biçim) ya da fiili hiç değiştirmemek ("I like swim" ✗). Not: "like to + fiil" de dilbilgisel olarak doğrudur (I like to swim) ama bu derste -ing biçimine odaklanıyoruz çünkü günlük konuşmada daha yaygın ve Türklerin kurduğu karışık biçimleri önlüyor. Olumsuzda don\'t/doesn\'t unutulmamalı: "I don\'t like waiting."',
    examples: [
      { en: 'I like playing football.', tr: 'Futbol oynamayı severim.' },
      { en: 'She loves cooking Turkish food.', tr: 'Türk yemeği pişirmeyi çok sever.' },
      { en: "We hate waiting in traffic.", tr: 'Trafikte beklemekten nefret ederiz.' },
    ],
    words: [
      { en: 'cook', tr: 'pişirmek', example: 'I like cooking.', example_tr: 'Pişirmeyi severim.' },
      { en: 'wait', tr: 'beklemek', example: 'He hates waiting.', example_tr: 'O beklemekten nefret eder.' },
      { en: 'dance', tr: 'dans etmek', example: 'They love dancing.', example_tr: 'Dans etmeyi çok severler.' },
      { en: 'travel', tr: 'seyahat etmek', example: 'She likes traveling.', example_tr: 'Seyahat etmeyi sever.' },
      { en: 'traffic', tr: 'trafik', example: "I hate sitting in traffic.", example_tr: 'Trafikte oturmaktan nefret ederim.' },
    ],
    exercises: [
      { type: 'gap', sentence: 'I like ___ football.', options: ['play', 'playing', 'to playing'], answer: 1 },
      { type: 'gap', sentence: 'She loves ___ Turkish food.', options: ['cook', 'cooking', 'cooks'], answer: 1 },
      { type: 'gap', sentence: 'We hate ___ in traffic.', options: ['wait', 'waiting', 'waits'], answer: 1 },
      { type: 'mc', prompt: 'Hangisi doğru?', options: ['I like to swimming.', 'I like swim.', 'I like swimming.'], answer: 2 },
      { type: 'match', pairs: [['like', 'sevmek'], ['love', 'çok sevmek'], ['hate', 'nefret etmek'], ['enjoy', 'keyif almak']] },
      { type: 'order', prompt_tr: 'Dans etmeyi çok severler.', words: ['love', 'They', 'dancing'], answer: 'They love dancing' },
      { type: 'gap', sentence: 'He enjoys ___ books.', options: ['read', 'reading', 'reads'], answer: 1 },
      { type: 'gap', sentence: "I don't like ___ early.", options: ['get up', 'getting up', 'gets up'], answer: 1 },
      { type: 'mc', prompt: 'Hangisi doğru?', options: ['She hates cleaning.', 'She hates clean.', 'She hate cleaning.'], answer: 0 },
      { type: 'order', prompt_tr: 'Kitap okumayı severim.', words: ['I', 'like', 'reading', 'books', 'read'], answer: 'I like reading books' },
    ],
    quiz: [
      {
        id: 'q_li_1', mode: 'order', prompt_tr: 'Futbol oynamayı severim.', answer_en: 'I like playing football',
        words: ['I', 'like', 'playing', 'football', 'play'],
        error_variants: [
          { text: 'I like play football', tag: 'ING', explanation_tr: 'like\'tan sonra fiil -ing alır: like playing.' },
          { text: 'I like to playing football', tag: 'ING', explanation_tr: '"to" ve "-ing" birlikte olmaz: like playing veya like to play.' },
        ],
      },
      {
        id: 'q_li_2', mode: 'free', prompt_tr: 'O (kadın) Türk yemeği pişirmeyi çok sever.', answer_en: 'She loves cooking Turkish food', accepted: ['She loves to cook Turkish food'],
        error_variants: [
          { text: 'She love cooking Turkish food', tag: 'SVAGR', explanation_tr: 'she ile fiil -s alır: loves.' },
          { text: 'She loves cook Turkish food', tag: 'ING', explanation_tr: 'loves\'tan sonra -ing: loves cooking.' },
        ],
      },
      {
        id: 'q_li_3', mode: 'order', prompt_tr: 'Trafikte beklemekten nefret ederiz.', answer_en: 'We hate waiting in traffic',
        words: ['We', 'hate', 'waiting', 'in', 'traffic', 'wait'],
        error_variants: [
          { text: 'We hate wait in traffic', tag: 'ING', explanation_tr: 'hate\'ten sonra -ing: hate waiting.' },
          { text: 'We hate waiting on traffic', tag: 'PREP', explanation_tr: '"trafikte" için "in": in traffic.' },
        ],
      },
      {
        id: 'q_li_4', mode: 'free', prompt_tr: 'Seyahat etmeyi sevmem.', answer_en: "I don't like traveling", accepted: ["I don't like travelling", 'I do not like traveling', 'I do not like travelling', "I don't like to travel", 'I do not like to travel'],
        error_variants: [
          { text: "I don't like travel", tag: 'ING', explanation_tr: 'like\'tan sonra -ing: like traveling.' },
          { text: 'I no like traveling', tag: 'NEG', explanation_tr: 'Olumsuzda don\'t gerekli: I don\'t like.' },
        ],
      },
      {
        id: 'q_li_5', mode: 'order', prompt_tr: 'Erken kalkmayı sever misin?', answer_en: 'Do you like getting up early',
        words: ['Do', 'you', 'like', 'getting', 'up', 'early', 'get'],
        error_variants: [
          { text: 'Do you like get up early', tag: 'ING', explanation_tr: 'like\'tan sonra -ing: like getting up.' },
          { text: 'You like getting up early', tag: 'DO_Q', explanation_tr: 'Soruda başa "do" gelir: Do you like...?' },
        ],
      },
      {
        id: 'q_li_6', mode: 'order', prompt_tr: 'Yüzmeyi çok severim.', answer_en: 'I love swimming', accepted: ['I love to swim'],
        words: ['I', 'love', 'swimming', 'swim', 'to'],
        error_variants: [
          { text: 'I love swim', tag: 'ING', explanation_tr: 'love\'dan sonra -ing: love swimming.' },
          { text: 'I love to swimming', tag: 'ING', explanation_tr: '"to" ve "-ing" birlikte olmaz.' },
        ],
      },
      {
        id: 'q_li_7', mode: 'free', prompt_tr: 'O (erkek) beklemekten nefret eder.', answer_en: 'He hates waiting', accepted: ['He hates to wait'],
        error_variants: [
          { text: 'He hate waiting', tag: 'SVAGR', explanation_tr: 'he ile fiil -s alır: hates.' },
          { text: 'He hates wait', tag: 'ING', explanation_tr: 'hates\'ten sonra -ing: hates waiting.' },
        ],
      },
      {
        id: 'q_li_8', mode: 'order', prompt_tr: 'Yemek yapmayı sever misin?', answer_en: 'Do you like cooking', accepted: ['Do you like to cook'],
        words: ['Do', 'you', 'like', 'cooking', 'cook', 'Are'],
        error_variants: [
          { text: 'Are you like cooking', tag: 'DO_Q', explanation_tr: 'Fiilli soruda "do": Do you like cooking?' },
          { text: 'Do you like cook', tag: 'ING', explanation_tr: 'like\'tan sonra -ing: like cooking.' },
        ],
      },
      {
        id: 'q_li_9', mode: 'free', prompt_tr: 'Dans etmeyi sevmeyiz.', answer_en: "We don't like dancing", accepted: ['We do not like dancing', "We don't like to dance", 'We do not like to dance'],
        error_variants: [
          { text: "We don't like dance", tag: 'ING', explanation_tr: 'like\'tan sonra -ing: like dancing.' },
          { text: 'We no like dancing', tag: 'NEG', explanation_tr: 'Olumsuzda don\'t gerekli.' },
        ],
      },
      {
        id: 'q_li_10', mode: 'order', prompt_tr: 'Kız kardeşim seyahat etmeyi çok sever.', answer_en: 'My sister loves traveling', accepted: ['My sister loves travelling', 'My sister loves to travel'],
        words: ['My', 'sister', 'loves', 'traveling', 'love', 'travel'],
        error_variants: [
          { text: 'My sister love traveling', tag: 'SVAGR', explanation_tr: 'my sister = she → loves.' },
          { text: 'My sister loves travel', tag: 'ING', explanation_tr: 'loves\'tan sonra -ing: loves traveling.' },
        ],
      },
      {
        id: 'q_li_11', mode: 'free', prompt_tr: 'Erken kalkmaktan nefret ederim.', answer_en: 'I hate getting up early', accepted: ['I hate to get up early', 'I hate waking up early', 'I hate to wake up early'],
        error_variants: [
          { text: 'I hate get up early', tag: 'ING', explanation_tr: 'hate\'ten sonra -ing: hate getting up.' },
          { text: 'I hate to getting up early', tag: 'ING', explanation_tr: '"to" ve "-ing" birlikte olmaz.' },
        ],
      },
      {
        id: 'q_li_12', mode: 'order', prompt_tr: 'Babam futbol izlemeyi sever.', answer_en: 'My father likes watching football', accepted: ['My father likes to watch football'],
        words: ['My', 'father', 'likes', 'watching', 'football', 'watch', 'like'],
        error_variants: [
          { text: 'My father like watching football', tag: 'SVAGR', explanation_tr: 'my father = he → likes.' },
          { text: 'My father likes watch football', tag: 'ING', explanation_tr: 'likes\'tan sonra -ing: likes watching.' },
        ],
      },
    ],
  },
  {
    id: 'l_adverbs_freq',
    skillId: 'adverbs_freq',
    title: 'always / usually / often / never',
    title_tr: 'Sıklık zarfları: always / usually / never',
    explanation_tr:
      'Bir şeyin ne sıklıkta olduğunu anlatan kelimeler: always (her zaman), usually (genellikle), often (sık sık), sometimes (bazen), rarely (nadiren), never (asla). Türkçede bu kelimeler cümlenin herhangi bir yerine serbestçe gelebilir, ama İngilizcede yerleri sabittir: to be fiilinden (am/is/are) SONRA, diğer bütün fiillerden ÖNCE gelir. "I am always late" ✓ ama "I always am late" ✗. "She usually drinks tea" ✓ ama "She drinks usually tea" ✗ (usually/often/sometimes cümle başına veya sonuna da gelebilir, always/never gelmez). Türklerin en sık hatası bu zarfı fiilden sonra veya cümle sonuna koymak.',
    examples: [
      { en: 'I am always tired on Mondays.', tr: 'Pazartesileri her zaman yorgunum.' },
      { en: 'She usually drinks tea in the morning.', tr: 'Genellikle sabahları çay içer.' },
      { en: 'We never eat fast food.', tr: 'Asla fast food yemeyiz.' },
    ],
    words: [
      { en: 'always', tr: 'her zaman', example: 'I am always busy.', example_tr: 'Her zaman meşgulüm.' },
      { en: 'usually', tr: 'genellikle', example: 'He usually walks to work.', example_tr: 'Genellikle işe yürür.' },
      { en: 'sometimes', tr: 'bazen', example: 'They sometimes travel abroad.', example_tr: 'Bazen yurt dışına seyahat ederler.' },
      { en: 'rarely', tr: 'nadiren', example: 'She rarely watches TV.', example_tr: 'Nadiren televizyon izler.' },
      { en: 'never', tr: 'asla, hiç', example: 'I never smoke.', example_tr: 'Hiç sigara içmem.' },
    ],
    exercises: [
      { type: 'gap', sentence: 'I am ___ late.', options: ['always', 'am always', 'always am'], answer: 0 },
      { type: 'gap', sentence: 'She ___ drinks coffee.', options: ['usually', 'drinks usually', 'usually drinks'], answer: 0 },
      { type: 'mc', prompt: 'Hangisi doğru?', options: ['I always am tired.', 'I am always tired.', 'Always I am tired.'], answer: 1 },
      { type: 'gap', sentence: 'We ___ eat fast food.', options: ['never', 'eat never', 'not never'], answer: 0 },
      { type: 'match', pairs: [['100%', 'always'], ['0%', 'never'], ['~80%', 'usually'], ['~20%', 'rarely']] },
      { type: 'order', prompt_tr: 'Genellikle işe yürür.', words: ['usually', 'He', 'walks', 'to', 'work'], answer: 'He usually walks to work' },
      { type: 'gap', sentence: 'They ___ late for work.', options: ['are never', 'never are'], answer: 0, explanation_tr: 'to be\'den sonra: are never.' },
      { type: 'gap', sentence: 'I ___ walk to school.', options: ['sometimes', 'am sometimes'], answer: 0 },
      { type: 'mc', prompt: 'Hangisi doğru?', options: ['He watches often TV.', 'He often watches TV.', 'He often watch TV.'], answer: 1 },
      { type: 'order', prompt_tr: 'Her zaman meşgulüm.', words: ['I', 'always', 'am', 'busy', 'never'], answer: 'I am always busy' },
    ],
    quiz: [
      {
        id: 'q_fr_1', mode: 'order', prompt_tr: 'Pazartesileri her zaman yorgunum.', answer_en: 'I am always tired on Mondays',
        words: ['I', 'am', 'always', 'tired', 'on', 'Mondays', 'in'],
        error_variants: [
          { text: 'I always am tired on Mondays', tag: 'FREQ', explanation_tr: 'Sıklık zarfı to be\'den sonra gelir: I am always.' },
          { text: 'I am always tired in Mondays', tag: 'PREP', explanation_tr: 'Gün isminden önce "on": on Mondays.' },
        ],
      },
      {
        id: 'q_fr_2', mode: 'free', prompt_tr: 'Genellikle sabahları çay içer (kadın).', answer_en: 'She usually drinks tea in the morning', accepted: ['She usually drinks tea in the mornings'],
        error_variants: [
          { text: 'She drinks usually tea in the morning', tag: 'FREQ', explanation_tr: 'Sıklık zarfı fiilden önce gelir: usually drinks.' },
          { text: 'She usually drink tea in the morning', tag: 'SVAGR', explanation_tr: 'she ile fiil -s alır: drinks.' },
        ],
      },
      {
        id: 'q_fr_3', mode: 'order', prompt_tr: 'Asla fast food yemeyiz.', answer_en: 'We never eat fast food',
        words: ['We', 'never', 'eat', 'fast', 'food', 'eats'],
        error_variants: [
          { text: 'We eat never fast food', tag: 'FREQ', explanation_tr: 'Sıklık zarfı fiilden önce: never eat.' },
          { text: 'We never eats fast food', tag: 'SVAGR', explanation_tr: 'we ile fiil yalın kalır: eat.' },
        ],
      },
      {
        id: 'q_fr_4', mode: 'free', prompt_tr: 'Nadiren televizyon izler (kadın).', answer_en: 'She rarely watches TV', accepted: ['She rarely watches television'],
        error_variants: [
          { text: 'She watches rarely TV', tag: 'FREQ', explanation_tr: 'Sıklık zarfı fiilden önce: rarely watches.' },
          { text: 'She rarely watch TV', tag: 'SVAGR', explanation_tr: 'she ile fiil -s alır: watches.' },
        ],
      },
      {
        id: 'q_fr_5', mode: 'order', prompt_tr: 'Bazen yurt dışına seyahat ederler.', answer_en: 'They sometimes travel abroad', accepted: ['Sometimes they travel abroad'],
        words: ['They', 'sometimes', 'travel', 'abroad', 'travels'],
        error_variants: [
          { text: 'They travels sometimes abroad', tag: 'SVAGR', explanation_tr: 'they ile fiil yalın kalır: travel.' },
          { text: 'They travel sometimes abroad', tag: 'FREQ', explanation_tr: 'Sıklık zarfı fiilden önce: sometimes travel.' },
        ],
      },
      {
        id: 'q_fr_6', mode: 'order', prompt_tr: 'O (erkek) genellikle işe yürür.', answer_en: 'He usually walks to work', accepted: ['Usually he walks to work'],
        words: ['He', 'usually', 'walks', 'to', 'work', 'walk'],
        error_variants: [
          { text: 'He walks usually to work', tag: 'FREQ', explanation_tr: 'Sıklık zarfı fiilden önce: usually walks.' },
          { text: 'He usually walk to work', tag: 'SVAGR', explanation_tr: 'he ile fiil -s alır: walks.' },
        ],
      },
      {
        id: 'q_fr_7', mode: 'free', prompt_tr: 'Asla sigara içmem.', answer_en: 'I never smoke',
        error_variants: [
          { text: 'I smoke never', tag: 'FREQ', explanation_tr: 'Sıklık zarfı fiilden önce: never smoke.' },
          { text: "I don't never smoke", tag: 'NEG', explanation_tr: '"never" zaten olumsuz; don\'t ile birlikte kullanılmaz.' },
        ],
      },
      {
        id: 'q_fr_8', mode: 'order', prompt_tr: 'Onlar her zaman geç kalır.', answer_en: 'They are always late',
        words: ['They', 'are', 'always', 'late', 'is'],
        error_variants: [
          { text: 'They always are late', tag: 'FREQ', explanation_tr: 'to be\'den sonra: are always.' },
          { text: 'They is always late', tag: 'TOBE', explanation_tr: 'they ile "are".' },
        ],
      },
      {
        id: 'q_fr_9', mode: 'free', prompt_tr: 'Bazen kitap okurum.', answer_en: 'I sometimes read books', accepted: ['Sometimes I read books', 'I read books sometimes', 'I sometimes read a book', 'Sometimes I read a book'],
        error_variants: [
          { text: 'I read sometimes books', tag: 'FREQ', explanation_tr: 'Sıklık zarfı fiilden önce: sometimes read.' },
          { text: 'I sometimes reads books', tag: 'SVAGR', explanation_tr: 'I ile fiil yalın: read.' },
        ],
      },
      {
        id: 'q_fr_10', mode: 'order', prompt_tr: 'O (kadın) annesini sık sık ziyaret eder.', answer_en: 'She often visits her mother',
        words: ['She', 'often', 'visits', 'her', 'mother', 'visit'],
        error_variants: [
          { text: 'She visits often her mother', tag: 'FREQ', explanation_tr: 'Sıklık zarfı fiilden önce: often visits.' },
          { text: 'She often visit her mother', tag: 'SVAGR', explanation_tr: 'she ile fiil -s alır: visits.' },
        ],
      },
      {
        id: 'q_fr_11', mode: 'free', prompt_tr: 'O (erkek) asla geç kalmaz.', answer_en: 'He is never late', accepted: ["He's never late"],
        error_variants: [
          { text: 'He never is late', tag: 'FREQ', explanation_tr: 'to be\'den sonra: is never.' },
          { text: "He isn't never late", tag: 'NEG', explanation_tr: '"never" zaten olumsuz: He is never late.' },
        ],
      },
      {
        id: 'q_fr_12', mode: 'order', prompt_tr: 'Genellikle saat 7\'de kalkarız.', answer_en: 'We usually get up at 7', accepted: ['Usually we get up at 7'],
        words: ['We', 'usually', 'get', 'up', 'at', '7', 'gets', 'in'],
        error_variants: [
          { text: 'We get up usually at 7', tag: 'FREQ', explanation_tr: 'Sıklık zarfı fiilden önce: usually get up.' },
          { text: 'We usually get up in 7', tag: 'TIME', explanation_tr: 'Saat → at 7.' },
        ],
      },
    ],
  },
  {
    id: 'l_wh_questions',
    skillId: 'wh_questions',
    title: 'What / Where / When / Who / Why',
    title_tr: 'Wh- soruları: What / Where / When / Who / Why',
    explanation_tr:
      'Bilgi almak için kullanılan soru kelimeleri her zaman cümlenin EN BAŞINA gelir, sonra do/does/is/are: "Where do you live?", "What is your name?", "Why does she work at night?" Türkçede soru kelimesi cümlenin ortasında ya da sonunda olabilir ("Sen nerede yaşıyorsun?"), bu yüzden Türkler sık sık "You live where?" gibi yanlış sıralar kurar. Fiil cümlesi ile to be cümlesini karıştırmamak önemli: fiil cümlesinde do/does gerekir ("Where do you work?"), to be cümlesinde do/does gerekmez ("Where is she?"). Who bazen öznenin kendisi olduğunda do/does almaz: "Who lives here?"',
    examples: [
      { en: 'Where do you live?', tr: 'Nerede yaşıyorsun?' },
      { en: 'What is your favorite color?', tr: 'En sevdiğin renk ne?' },
      { en: 'Why does she work at night?', tr: 'O (kadın) neden gece çalışıyor?' },
    ],
    words: [
      { en: 'favorite', tr: 'en sevilen', example: 'What is your favorite food?', example_tr: 'En sevdiğin yemek ne?' },
      { en: 'live', tr: 'yaşamak', example: 'Where do you live?', example_tr: 'Nerede yaşıyorsun?' },
      { en: 'birthday', tr: 'doğum günü', example: 'When is your birthday?', example_tr: 'Doğum günün ne zaman?' },
      { en: 'because', tr: 'çünkü', example: 'I am late because of traffic.', example_tr: 'Trafikten dolayı geciktim.' },
      { en: 'meet', tr: 'tanışmak, buluşmak', example: 'Where do we meet?', example_tr: 'Nerede buluşuyoruz?' },
    ],
    exercises: [
      { type: 'gap', sentence: '___ do you live?', options: ['What', 'Where', 'Who'], answer: 1 },
      { type: 'gap', sentence: '___ is your name?', options: ['What', 'Where', 'When'], answer: 0 },
      { type: 'mc', prompt: 'Hangisi doğru?', options: ['You live where?', 'Where you live?', 'Where do you live?'], answer: 2 },
      { type: 'gap', sentence: '___ does she work at night?', options: ['Why', 'What', 'Who'], answer: 0 },
      { type: 'match', pairs: [['What', 'ne'], ['Where', 'nerede'], ['When', 'ne zaman'], ['Why', 'neden']] },
      { type: 'order', prompt_tr: 'Doğum günün ne zaman?', words: ['is', 'When', 'your', 'birthday'], answer: 'When is your birthday' },
      { type: 'gap', sentence: '___ is the bathroom?', options: ['Where', 'Who', 'Why'], answer: 0 },
      { type: 'gap', sentence: 'Where ___ she work?', options: ['do', 'does', 'is'], answer: 1 },
      { type: 'mc', prompt: 'Hangisi doğru?', options: ['What time you get up?', 'What time do you get up?', 'What time you do get up?'], answer: 1 },
      { type: 'order', prompt_tr: 'Nerede buluşuyoruz?', words: ['Where', 'do', 'we', 'meet', 'are'], answer: 'Where do we meet' },
    ],
    quiz: [
      {
        id: 'q_wh_1', mode: 'order', prompt_tr: 'Nerede yaşıyorsun?', answer_en: 'Where do you live',
        words: ['Where', 'do', 'you', 'live', 'are'],
        error_variants: [
          { text: 'You live where', tag: 'WH', explanation_tr: 'Soru kelimesi en başa gelir: Where do you live?' },
          { text: 'Where you live', tag: 'DO_Q', explanation_tr: 'Fiil cümlesinde soru için "do" gerekli: Where do you live?' },
        ],
      },
      {
        id: 'q_wh_2', mode: 'free', prompt_tr: 'En sevdiğin renk ne?', answer_en: 'What is your favorite color', accepted: ["What's your favorite color", 'What is your favourite colour', "What's your favourite colour"],
        error_variants: [
          { text: 'Your favorite color what is', tag: 'WH', explanation_tr: 'Soru kelimesi en başa gelir: What is...?' },
          { text: 'What your favorite color', tag: 'TOBE', explanation_tr: '"is" eksik: What is your favorite color?' },
        ],
      },
      {
        id: 'q_wh_3', mode: 'order', prompt_tr: 'O (kadın) neden gece çalışıyor?', answer_en: 'Why does she work at night',
        words: ['Why', 'does', 'she', 'work', 'at', 'night', 'works'],
        error_variants: [
          { text: 'Why she works at night', tag: 'DO_Q', explanation_tr: 'Soruda "does" başa gelir, fiil yalın kalır: Why does she work?' },
          { text: 'She works why at night', tag: 'WH', explanation_tr: 'Soru kelimesi en başa gelir: Why does she work?' },
        ],
      },
      {
        id: 'q_wh_4', mode: 'free', prompt_tr: 'Nerede çalışıyorsun?', answer_en: 'Where do you work', accepted: ['Where are you working'],
        error_variants: [
          { text: 'You work where', tag: 'WH', explanation_tr: 'Soru kelimesi en başa gelir: Where do you work?' },
          { text: 'Where you work', tag: 'DO_Q', explanation_tr: 'Fiil cümlesinde soru için "do" gerekli: Where do you work?' },
        ],
      },
      {
        id: 'q_wh_5', mode: 'order', prompt_tr: 'Doğum günün ne zaman?', answer_en: 'When is your birthday',
        words: ['When', 'is', 'your', 'birthday', 'are'],
        error_variants: [
          { text: 'Your birthday when is', tag: 'WH', explanation_tr: 'Soru kelimesi en başa gelir: When is your birthday?' },
          { text: 'When are your birthday', tag: 'TOBE', explanation_tr: '"birthday" tekil: is.' },
        ],
      },
      {
        id: 'q_wh_6', mode: 'order', prompt_tr: 'O (erkek) nerede çalışıyor?', answer_en: 'Where does he work', accepted: ['Where is he working'],
        words: ['Where', 'does', 'he', 'work', 'works', 'do'],
        error_variants: [
          { text: 'Where he works', tag: 'DO_Q', explanation_tr: 'Soruda "does" gerekli: Where does he work?' },
          { text: 'Where does he works', tag: 'DO_Q', explanation_tr: '"does" varken fiil yalın: work.' },
        ],
      },
      {
        id: 'q_wh_7', mode: 'free', prompt_tr: 'Nerelisin?', answer_en: 'Where are you from', accepted: ['Where do you come from'],
        error_variants: [
          { text: 'You are from where', tag: 'WH', explanation_tr: 'Soru kelimesi en başa gelir: Where are you from?' },
          { text: 'Where you are from', tag: 'WH', explanation_tr: 'Soru kelimesinden sonra "are" özneden önce gelir: Where are you from?' },
        ],
      },
      {
        id: 'q_wh_8', mode: 'order', prompt_tr: 'Kahvaltıda ne yersin?', answer_en: 'What do you eat for breakfast',
        words: ['What', 'do', 'you', 'eat', 'for', 'breakfast', 'in', 'does'],
        error_variants: [
          { text: 'What you eat for breakfast', tag: 'DO_Q', explanation_tr: 'Fiil cümlesinde soru için "do": What do you eat?' },
          { text: 'What do you eat in breakfast', tag: 'PREP', explanation_tr: '"kahvaltıda" = for breakfast.' },
        ],
      },
      {
        id: 'q_wh_9', mode: 'free', prompt_tr: 'Neden yorgunsun?', answer_en: 'Why are you tired',
        error_variants: [
          { text: 'Why you are tired', tag: 'WH', explanation_tr: 'Soru kelimesinden sonra "are" özneden önce gelir: Why are you tired?' },
          { text: 'Why do you tired', tag: 'TOBE', explanation_tr: 'Sıfatla to be kullanılır: Why are you tired?' },
        ],
      },
      {
        id: 'q_wh_10', mode: 'order', prompt_tr: 'Öğretmenin kim?', answer_en: 'Who is your teacher',
        words: ['Who', 'is', 'your', 'teacher', 'are', 'you'],
        error_variants: [
          { text: 'Your teacher is who', tag: 'WH', explanation_tr: 'Soru kelimesi en başa gelir: Who is your teacher?' },
          { text: 'Who are your teacher', tag: 'TOBE', explanation_tr: '"teacher" tekil: is.' },
        ],
      },
      {
        id: 'q_wh_11', mode: 'free', prompt_tr: 'Ders ne zaman başlıyor?', answer_en: 'When does the class start', accepted: ['When does the lesson start', 'What time does the class start', 'What time does the lesson start'],
        error_variants: [
          { text: 'When the class starts', tag: 'DO_Q', explanation_tr: 'Soruda "does" gerekli: When does the class start?' },
          { text: 'When does the class starts', tag: 'DO_Q', explanation_tr: '"does" varken fiil yalın: start.' },
        ],
      },
      {
        id: 'q_wh_12', mode: 'order', prompt_tr: 'Ailen nerede yaşıyor?', answer_en: 'Where does your family live',
        words: ['Where', 'does', 'your', 'family', 'live', 'lives', 'you'],
        error_variants: [
          { text: 'Where your family lives', tag: 'DO_Q', explanation_tr: 'Soruda "does" gerekli: Where does your family live?' },
          { text: 'Where does your family lives', tag: 'DO_Q', explanation_tr: '"does" varken fiil yalın: live.' },
        ],
      },
    ],
  },
  {
    id: 'l_time',
    skillId: 'time',
    title: 'Telling the time, days and months',
    title_tr: 'Saat, günler ve aylar',
    explanation_tr:
      'Saat sorarken "What time is it?" denir, cevap "It is..." ile başlar: "It\'s seven o\'clock" (tam saat), "It\'s half past seven" (buçuk, 7:30), "It\'s quarter past seven" (7:15), "It\'s quarter to eight" (7:45, "sekize çeyrek var"). "past" geçen dakikaları, "to" kalan dakikaları anlatır — Türkçedeki "-e çeyrek var/geçiyor" mantığının tersten İngilizce karşılığı. Gün isimleri (Monday, Tuesday...) ve ay isimleri (January, February...) HER ZAMAN büyük harfle başlar — Türkçede böyle bir kural yok, bu yüzden Türkler küçük harfle yazmaya meyillidir. Saatten önce "at" (at 7 o\'clock), günden önce "on" (on Monday) kullanılır.',
    examples: [
      { en: "It's half past seven.", tr: 'Saat yedi buçuk.' },
      { en: 'My birthday is in May.', tr: 'Doğum günüm Mayıs\'ta.' },
      { en: 'The meeting is on Monday at 9.', tr: 'Toplantı Pazartesi saat 9\'da.' },
    ],
    words: [
      { en: "o'clock", tr: 'tam saat', example: "It's six o'clock.", example_tr: 'Saat altı.' },
      { en: 'half past', tr: 'buçuk', example: "It's half past three.", example_tr: 'Saat üç buçuk.' },
      { en: 'quarter', tr: 'çeyrek (15 dakika)', example: "It's quarter to nine.", example_tr: 'Dokuza çeyrek var.' },
      { en: 'month', tr: 'ay', example: 'January is the first month.', example_tr: 'Ocak ilk aydır.' },
      { en: 'weekend', tr: 'hafta sonu', example: 'See you on the weekend.', example_tr: 'Hafta sonu görüşürüz.' },
    ],
    exercises: [
      { type: 'gap', sentence: 'The meeting is ___ 9 o\'clock.', options: ['at', 'on', 'in'], answer: 0 },
      { type: 'gap', sentence: 'My birthday is ___ May.', options: ['at', 'on', 'in'], answer: 2 },
      { type: 'gap', sentence: 'We meet ___ Monday.', options: ['at', 'on', 'in'], answer: 1 },
      { type: 'mc', prompt: '7:15 nasıl denir?', options: ["It's quarter to seven.", "It's quarter past seven.", "It's half past seven."], answer: 1 },
      { type: 'match', pairs: [['January', 'Ocak'], ['Monday', 'Pazartesi'], ['7:30', 'half past seven'], ['7:45', 'quarter to eight']] },
      { type: 'order', prompt_tr: 'Saat yedi buçuk.', words: ["It's", 'half', 'past', 'seven'], answer: "It's half past seven" },
      { type: 'gap', sentence: "It's half ___ six.", options: ['past', 'to'], answer: 0 },
      { type: 'gap', sentence: 'School starts ___ September.', options: ['in', 'on', 'at'], answer: 0 },
      { type: 'mc', prompt: '8:45 nasıl denir?', options: ["It's quarter past eight.", "It's quarter to nine.", "It's half past eight."], answer: 1 },
      { type: 'order', prompt_tr: 'Saat kaç?', words: ['What', 'time', 'is', 'it', 'are'], answer: 'What time is it' },
    ],
    quiz: [
      {
        id: 'q_tm_1', mode: 'order', prompt_tr: 'Saat yedi buçuk.', answer_en: "It's half past seven",
        words: ["It's", 'half', 'past', 'seven', 'to'],
        error_variants: [
          { text: "It's half to seven", tag: 'TIME', explanation_tr: 'Buçuk için "past": half past seven.' },
          { text: "It's seven half past", tag: 'WORD_ORDER', explanation_tr: 'Sıra: It\'s half past seven.' },
        ],
      },
      {
        id: 'q_tm_2', mode: 'free', prompt_tr: 'Doğum günüm Mayıs\'ta.', answer_en: 'My birthday is in May',
        error_variants: [
          { text: 'My birthday is on May', tag: 'TIME', explanation_tr: 'Ay isminden önce "in": in May.' },
          { text: 'My birthday is at May', tag: 'TIME', explanation_tr: 'Ay isminden önce "in": in May.' },
        ],
      },
      {
        id: 'q_tm_3', mode: 'order', prompt_tr: 'Toplantı Pazartesi saat 9\'da.', answer_en: 'The meeting is on Monday at 9',
        words: ['The', 'meeting', 'is', 'on', 'Monday', 'at', '9', 'in'],
        error_variants: [
          { text: 'The meeting is at Monday at 9', tag: 'TIME', explanation_tr: 'Gün isminden önce "on": on Monday.' },
          { text: 'The meeting is on Monday in 9', tag: 'TIME', explanation_tr: 'Saatten önce "at": at 9.' },
        ],
      },
      {
        id: 'q_tm_4', mode: 'free', prompt_tr: 'Dokuza çeyrek var.', answer_en: "It's quarter to nine", accepted: ["It's a quarter to nine", 'It is quarter to nine', 'It is a quarter to nine'],
        error_variants: [
          { text: "It's quarter past nine", tag: 'TIME', explanation_tr: '"-e çeyrek var" için "to": quarter to nine.' },
          { text: "It's nine quarter to", tag: 'WORD_ORDER', explanation_tr: 'Sıra: It\'s quarter to nine.' },
        ],
      },
      {
        id: 'q_tm_5', mode: 'order', prompt_tr: 'Hafta sonu görüşürüz.', answer_en: 'See you on the weekend', accepted: ['See you at the weekend'],
        words: ['See', 'you', 'on', 'the', 'weekend', 'in'],
        error_variants: [
          { text: 'See you in the weekend', tag: 'TIME', explanation_tr: '"hafta sonu" için "on/at": on the weekend.' },
          { text: 'See you the weekend', tag: 'PREP', explanation_tr: 'Edat eksik: on the weekend.' },
        ],
      },
      {
        id: 'q_tm_6', mode: 'order', prompt_tr: 'Saat sekiz.', answer_en: "It's eight o'clock", accepted: ["It is eight o'clock", "It's eight"],
        words: ["It's", 'eight', "o'clock", 'hour'],
        error_variants: [
          { text: "It's eight hour", tag: 'TIME', explanation_tr: 'Tam saat için "o\'clock": eight o\'clock.' },
          { text: "Eight o'clock is", tag: 'WORD_ORDER', explanation_tr: 'Saat "It\'s" ile başlar: It\'s eight o\'clock.' },
        ],
      },
      {
        id: 'q_tm_7', mode: 'free', prompt_tr: 'Saat üçü çeyrek geçiyor.', answer_en: "It's quarter past three", accepted: ["It's a quarter past three", 'It is quarter past three', 'It is a quarter past three'],
        error_variants: [
          { text: "It's quarter to three", tag: 'TIME', explanation_tr: '"geçiyor" için "past": quarter past three.' },
          { text: "It's three quarter past", tag: 'WORD_ORDER', explanation_tr: 'Sıra: It\'s quarter past three.' },
        ],
      },
      {
        id: 'q_tm_8', mode: 'order', prompt_tr: 'Cuma günü çalışmam.', answer_en: "I don't work on Friday", accepted: ["I don't work on Fridays", 'I do not work on Friday', 'I do not work on Fridays'],
        words: ['I', "don't", 'work', 'on', 'Friday', 'in'],
        error_variants: [
          { text: "I don't work in Friday", tag: 'TIME', explanation_tr: 'Gün → on Friday.' },
          { text: "I don't work Friday in", tag: 'WORD_ORDER', explanation_tr: 'Edat ismin önünde: on Friday.' },
        ],
      },
      {
        id: 'q_tm_9', mode: 'free', prompt_tr: 'Okul Eylül\'de başlar.', answer_en: 'School starts in September', accepted: ['The school starts in September', 'School begins in September', 'The school begins in September'],
        error_variants: [
          { text: 'School starts on September', tag: 'TIME', explanation_tr: 'Ay → in September.' },
          { text: 'School start in September', tag: 'SVAGR', explanation_tr: 'school = it → starts.' },
        ],
      },
      {
        id: 'q_tm_10', mode: 'order', prompt_tr: 'Film saat dokuzda.', answer_en: 'The film is at nine', accepted: ['The movie is at nine'],
        words: ['The', 'film', 'is', 'at', 'nine', 'in', 'on'],
        error_variants: [
          { text: 'The film is in nine', tag: 'TIME', explanation_tr: 'Saat → at nine.' },
          { text: 'The film is on nine', tag: 'TIME', explanation_tr: 'Saat → at nine.' },
        ],
      },
      {
        id: 'q_tm_11', mode: 'free', prompt_tr: 'Saat kaç?', answer_en: 'What time is it', accepted: ["What's the time", 'What is the time'],
        error_variants: [
          { text: 'What time it is', tag: 'WH', explanation_tr: 'Soruda "is" özneden önce: What time is it?' },
          { text: 'How much time is it', tag: 'TIME', explanation_tr: '"Saat kaç?" kalıbı: What time is it?' },
        ],
      },
      {
        id: 'q_tm_12', mode: 'order', prompt_tr: 'Hafta sonu çalışmam.', answer_en: "I don't work at the weekend", accepted: ["I don't work on the weekend", "I don't work on weekends", 'I do not work at the weekend', 'I do not work on the weekend'],
        words: ['I', "don't", 'work', 'at', 'the', 'weekend', 'in'],
        error_variants: [
          { text: "I don't work in the weekend", tag: 'TIME', explanation_tr: '"hafta sonu" için "at/on": at the weekend.' },
          { text: "I don't work the weekend", tag: 'PREP', explanation_tr: 'Edat eksik: at the weekend.' },
        ],
      },
    ],
  },
]
