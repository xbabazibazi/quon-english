import type { Lesson } from './types'

export const LESSONS_A11: Lesson[] = [
  {
    id: 'l_tobe',
    skillId: 'tobe',
    title: 'I am / You are / She is',
    title_tr: 'Kendini tanıtma: am / is / are',
    explanation_tr:
      'Türkçede "Ben mühendisim" deriz; "-im" eki işi bitirir. İngilizcede bu ek yok, onun yerine araya küçük bir fiil girer: am, is, are. Kural basit: I am, you/we/they are, he/she/it is. Konuşurken kısaltılır: I\'m, you\'re, she\'s. Türklerin en sık hatası bu fiili tamamen atlamak: "I engineer" ✗ → "I am an engineer" ✓.',
    examples: [
      { en: 'I am an engineer.', tr: 'Ben mühendisim.' },
      { en: 'She is from Bursa.', tr: 'O (kadın) Bursalı.' },
      { en: 'We are tired today.', tr: 'Bugün yorgunuz.' },
    ],
    words: [
      { en: 'engineer', tr: 'mühendis', example: 'My brother is an engineer.', example_tr: 'Kardeşim mühendis.' },
      { en: 'tired', tr: 'yorgun', example: 'I am tired.', example_tr: 'Yorgunum.' },
      { en: 'busy', tr: 'meşgul', example: 'They are busy now.', example_tr: 'Şu an meşguller.' },
      { en: 'married', tr: 'evli', example: 'He is married.', example_tr: 'O evli.' },
      { en: 'from', tr: '-den, -li (memleket)', example: 'I am from Istanbul.', example_tr: 'İstanbulluyum.' },
    ],
    exercises: [
      { type: 'gap', sentence: 'I ___ a teacher.', options: ['am', 'is', 'are'], answer: 0 },
      { type: 'gap', sentence: 'They ___ from Ankara.', options: ['is', 'are', 'am'], answer: 1 },
      { type: 'gap', sentence: 'My mother ___ a doctor.', options: ['are', 'am', 'is'], answer: 2, explanation_tr: '"My mother" = she → is.' },
      { type: 'match', pairs: [['I', 'am'], ['She', 'is'], ['We', 'are']] },
      { type: 'mc', prompt: 'Hangisi doğru?', options: ['I engineer.', 'I am engineer.', 'I am an engineer.'], answer: 2, explanation_tr: 'Hem "am" hem "an" gerekli.' },
      { type: 'order', prompt_tr: 'Biz yorgunuz.', words: ['tired', 'are', 'We'], answer: 'We are tired' },
      { type: 'gap', sentence: 'We ___ students.', options: ['am', 'is', 'are'], answer: 2 },
      { type: 'gap', sentence: 'It ___ cold today.', options: ['is', 'are', 'am'], answer: 0 },
      { type: 'mc', prompt: 'Hangisi doğru?', options: ['She is from Izmir.', 'She from Izmir.', 'She are from Izmir.'], answer: 0, explanation_tr: 'she → is; "is" atlanmaz.' },
      { type: 'order', prompt_tr: 'Onlar evli.', words: ['are', 'They', 'married', 'is'], answer: 'They are married' },
    ],
    quiz: [
      {
        id: 'q_tobe_1', mode: 'order', prompt_tr: 'Ben öğretmenim.', answer_en: 'I am a teacher',
        words: ['a', 'am', 'I', 'teacher', 'is'],
        error_variants: [
          { text: 'I a teacher', tag: 'TOBE', explanation_tr: '"am" atlanmış. Türkçedeki "-im" ekinin karşılığı "am": I am a teacher.' },
          { text: 'I am teacher', tag: 'ART', explanation_tr: 'Meslek söylerken "a/an" şart: a teacher.' },
          { text: 'I is a teacher', tag: 'TOBE', explanation_tr: '"I" ile her zaman "am": I am.' },
        ],
      },
      {
        id: 'q_tobe_2', mode: 'order', prompt_tr: 'O (kadın) Bursalı.', answer_en: 'She is from Bursa',
        words: ['She', 'from', 'is', 'Bursa', 'He'],
        error_variants: [
          { text: 'He is from Bursa', tag: 'GEN', explanation_tr: 'Kadın için "she". Türkçedeki "o" cinsiyetsiz ama İngilizce ayırır.' },
          { text: 'She from Bursa', tag: 'TOBE', explanation_tr: '"is" atlanmış: She is from Bursa.' },
        ],
      },
      {
        id: 'q_tobe_3', mode: 'free', prompt_tr: 'Onlar meşgul.', answer_en: 'They are busy', accepted: ["They're busy"],
        error_variants: [
          { text: 'They busy', tag: 'TOBE', explanation_tr: '"are" atlanmış: They are busy.' },
          { text: 'They is busy', tag: 'TOBE', explanation_tr: '"They" ile "are": They are busy.' },
        ],
      },
      {
        id: 'q_tobe_4', mode: 'order', prompt_tr: 'Kardeşim mühendis.', answer_en: 'My brother is an engineer',
        words: ['My', 'engineer', 'is', 'brother', 'an', 'a'],
        error_variants: [
          { text: 'My brother is a engineer', tag: 'ART', explanation_tr: 'Sesli harfle başlayan kelimeden önce "an": an engineer.' },
          { text: 'My brother is engineer', tag: 'ART', explanation_tr: 'Meslekten önce "an" gerekli: an engineer.' },
          { text: 'My brother engineer', tag: 'TOBE', explanation_tr: '"is" atlanmış: My brother is an engineer.' },
        ],
      },
      {
        id: 'q_tobe_5', mode: 'free', prompt_tr: 'Yorgunum.', answer_en: 'I am tired', accepted: ["I'm tired"],
        error_variants: [
          { text: 'I tired', tag: 'TOBE', explanation_tr: '"am" atlanmış: I am tired.' },
          { text: 'Im tired', tag: 'TOBE', explanation_tr: 'Kısaltma kesme işaretiyle: I\'m tired.' },
        ],
      },
      {
        id: 'q_tobe_6', mode: 'order', prompt_tr: 'Biz meşgulüz.', answer_en: 'We are busy',
        words: ['We', 'are', 'busy', 'is', 'am'],
        error_variants: [
          { text: 'We busy', tag: 'TOBE', explanation_tr: '"are" eksik: We are busy.' },
          { text: 'We is busy', tag: 'TOBE', explanation_tr: 'We ile "are": We are busy.' },
        ],
      },
      {
        id: 'q_tobe_7', mode: 'free', prompt_tr: 'O (erkek) evli.', answer_en: 'He is married', accepted: ["He's married"],
        error_variants: [
          { text: 'He married', tag: 'TOBE', explanation_tr: '"is" eksik: He is married. ("He married" = "evlendi" demektir.)' },
          { text: 'She is married', tag: 'GEN', explanation_tr: 'Erkek → he.' },
        ],
      },
      {
        id: 'q_tobe_8', mode: 'order', prompt_tr: 'Annem İzmirli.', answer_en: 'My mother is from Izmir',
        words: ['My', 'mother', 'is', 'from', 'Izmir', 'are', 'in'],
        error_variants: [
          { text: 'My mother from Izmir', tag: 'TOBE', explanation_tr: '"is" eksik: My mother is from Izmir.' },
          { text: 'My mother are from Izmir', tag: 'TOBE', explanation_tr: 'My mother = she → is.' },
        ],
      },
      {
        id: 'q_tobe_9', mode: 'free', prompt_tr: 'Sen öğrencisin.', answer_en: 'You are a student', accepted: ["You're a student"],
        error_variants: [
          { text: 'You a student', tag: 'TOBE', explanation_tr: '"are" eksik: You are a student.' },
          { text: 'You are student', tag: 'ART', explanation_tr: 'Meslek/durum için "a": a student.' },
          { text: 'You is a student', tag: 'TOBE', explanation_tr: 'you ile "are": You are a student.' },
        ],
      },
      {
        id: 'q_tobe_10', mode: 'order', prompt_tr: 'Bugün hava soğuk.', answer_en: 'It is cold today', accepted: ['Today it is cold'],
        words: ['It', 'is', 'cold', 'today', 'are', 'am'],
        error_variants: [
          { text: 'It cold today', tag: 'TOBE', explanation_tr: '"is" eksik: It is cold today.' },
          { text: 'It are cold today', tag: 'TOBE', explanation_tr: 'it ile "is": It is cold today.' },
        ],
      },
      {
        id: 'q_tobe_11', mode: 'free', prompt_tr: 'Ben Türküm.', answer_en: 'I am Turkish', accepted: ["I'm Turkish", 'I am a Turk', "I'm a Turk", 'I am from Turkey', "I'm from Turkey", 'I am from Türkiye', "I'm from Türkiye"],
        error_variants: [
          { text: 'I Turkish', tag: 'TOBE', explanation_tr: '"am" eksik: I am Turkish.' },
          { text: 'I is Turkish', tag: 'TOBE', explanation_tr: 'I ile her zaman "am".' },
        ],
      },
      {
        id: 'q_tobe_12', mode: 'order', prompt_tr: 'Kız kardeşim ve ben öğrenciyiz.', answer_en: 'My sister and I are students',
        words: ['My', 'sister', 'and', 'I', 'are', 'students', 'am', 'student'],
        error_variants: [
          { text: 'My sister and I am students', tag: 'TOBE', explanation_tr: '"Kız kardeşim ve ben" = biz → are.' },
          { text: 'My sister and I are student', tag: 'PLURAL', explanation_tr: 'İki kişi → students.' },
        ],
      },
    ],
  },
  {
    id: 'l_articles',
    skillId: 'articles',
    title: 'a / an',
    title_tr: 'Artikel: a / an',
    explanation_tr:
      'Türkçede artikel yok, o yüzden bu en çok atlanan kelime. İngilizcede tekil ve sayılabilir bir isimden bahsederken önüne "a" gelir: a car, a book. Kelime sesli HARFLE değil sesli SESLE başlıyorsa "an": an apple, an hour (h okunmaz). Meslek söylerken de şart: "She is a nurse." Çoğulda ve sayılamayanlarda a/an olmaz: "cars", "water".',
    examples: [
      { en: 'I have a car.', tr: 'Bir arabam var.' },
      { en: 'She eats an apple every day.', tr: 'Her gün bir elma yer.' },
      { en: 'He is a nurse.', tr: 'O hemşire.' },
    ],
    words: [
      { en: 'apple', tr: 'elma', example: 'An apple a day.', example_tr: 'Günde bir elma.' },
      { en: 'umbrella', tr: 'şemsiye', example: 'Take an umbrella.', example_tr: 'Şemsiye al.' },
      { en: 'nurse', tr: 'hemşire', example: 'My aunt is a nurse.', example_tr: 'Teyzem hemşire.' },
      { en: 'hour', tr: 'saat (süre)', example: 'Wait an hour.', example_tr: 'Bir saat bekle.' },
      { en: 'university', tr: 'üniversite', example: 'a university student', example_tr: 'bir üniversite öğrencisi' },
    ],
    exercises: [
      { type: 'gap', sentence: '___ apple', options: ['a', 'an'], answer: 1 },
      { type: 'gap', sentence: '___ car', options: ['a', 'an'], answer: 0 },
      { type: 'gap', sentence: '___ hour', options: ['a', 'an'], answer: 1, explanation_tr: '"hour" da h okunmaz, "auır" gibi: an hour.' },
      { type: 'gap', sentence: '___ university', options: ['a', 'an'], answer: 0, explanation_tr: '"university" "yu" sesiyle başlar: a university.' },
      { type: 'mc', prompt: 'Hangisi doğru?', options: ['She is nurse.', 'She is a nurse.', 'She is an nurse.'], answer: 1 },
      { type: 'match', pairs: [['a book', 'bir kitap'], ['an egg', 'bir yumurta'], ['a house', 'bir ev'], ['an orange', 'bir portakal']] },
      { type: 'gap', sentence: '___ egg', options: ['a', 'an'], answer: 1 },
      { type: 'gap', sentence: 'She is ___ engineer.', options: ['a', 'an'], answer: 1 },
      { type: 'mc', prompt: 'Hangisi doğru?', options: ['I have a cars.', 'I have cars.', 'I have an cars.'], answer: 1, explanation_tr: 'Çoğulda a/an olmaz.' },
      { type: 'order', prompt_tr: 'Bir elma ve bir muz.', words: ['An', 'apple', 'and', 'a', 'banana', 'an'], answer: 'An apple and a banana' },
    ],
    quiz: [
      {
        id: 'q_art_1', mode: 'order', prompt_tr: 'Bir şemsiyem var.', answer_en: 'I have an umbrella',
        words: ['have', 'an', 'I', 'umbrella', 'a'],
        error_variants: [
          { text: 'I have a umbrella', tag: 'ART', explanation_tr: 'Sesli sesle başlıyor: an umbrella.' },
          { text: 'I have umbrella', tag: 'ART', explanation_tr: 'Tekil sayılabilir isim: an umbrella.' },
        ],
      },
      {
        id: 'q_art_2', mode: 'free', prompt_tr: 'O (erkek) doktor.', answer_en: 'He is a doctor', accepted: ["He's a doctor"],
        error_variants: [
          { text: 'He is doctor', tag: 'ART', explanation_tr: 'Meslekten önce "a": a doctor.' },
          { text: 'She is a doctor', tag: 'GEN', explanation_tr: 'Erkek için "he".' },
          { text: 'He doctor', tag: 'TOBE', explanation_tr: '"is" ve "a" eksik: He is a doctor.' },
        ],
      },
      {
        id: 'q_art_3', mode: 'order', prompt_tr: 'Bir saat bekle.', answer_en: 'Wait an hour',
        words: ['hour', 'an', 'Wait', 'a'],
        error_variants: [
          { text: 'Wait a hour', tag: 'ART', explanation_tr: '"hour" sesli sesle okunur: an hour.' },
          { text: 'Wait hour', tag: 'ART', explanation_tr: '"an" gerekli: an hour.' },
        ],
      },
      {
        id: 'q_art_4', mode: 'free', prompt_tr: 'Bu bir elma.', answer_en: 'This is an apple', accepted: ['It is an apple', "It's an apple"],
        error_variants: [
          { text: 'This is a apple', tag: 'ART', explanation_tr: 'an apple.' },
          { text: 'This is apple', tag: 'ART', explanation_tr: '"an" gerekli: an apple.' },
          { text: 'This an apple', tag: 'TOBE', explanation_tr: '"is" eksik: This is an apple.' },
        ],
      },
      {
        id: 'q_art_5', mode: 'order', prompt_tr: 'Teyzem hemşire.', answer_en: 'My aunt is a nurse',
        words: ['a', 'nurse', 'aunt', 'is', 'My', 'an'],
        error_variants: [
          { text: 'My aunt is nurse', tag: 'ART', explanation_tr: 'a nurse.' },
          { text: 'My aunt is an nurse', tag: 'ART', explanation_tr: '"nurse" sessizle başlar: a nurse.' },
          { text: 'My aunt nurse', tag: 'TOBE', explanation_tr: '"is" eksik.' },
        ],
      },
      {
        id: 'q_art_6', mode: 'order', prompt_tr: 'Bir yumurtam var.', answer_en: 'I have an egg',
        words: ['I', 'have', 'an', 'egg', 'a'],
        error_variants: [
          { text: 'I have a egg', tag: 'ART', explanation_tr: 'Sesli sesle başlıyor: an egg.' },
          { text: 'I have egg', tag: 'ART', explanation_tr: 'Tekil sayılabilir isim: an egg.' },
        ],
      },
      {
        id: 'q_art_7', mode: 'free', prompt_tr: 'O (kadın) mühendis.', answer_en: 'She is an engineer', accepted: ["She's an engineer"],
        error_variants: [
          { text: 'She is a engineer', tag: 'ART', explanation_tr: 'Sesli sesle başlıyor: an engineer.' },
          { text: 'She is engineer', tag: 'ART', explanation_tr: 'Meslekten önce "an": an engineer.' },
          { text: 'He is an engineer', tag: 'GEN', explanation_tr: 'Kadın → she.' },
        ],
      },
      {
        id: 'q_art_8', mode: 'order', prompt_tr: 'Bu bir üniversite.', answer_en: 'This is a university',
        words: ['This', 'is', 'a', 'university', 'an'],
        error_variants: [
          { text: 'This is an university', tag: 'ART', explanation_tr: '"university" "yu" sesiyle başlar: a university.' },
          { text: 'This is university', tag: 'ART', explanation_tr: '"a" gerekli: a university.' },
        ],
      },
      {
        id: 'q_art_9', mode: 'free', prompt_tr: 'Babam şoför.', answer_en: 'My father is a driver', accepted: ["My father's a driver"],
        error_variants: [
          { text: 'My father is driver', tag: 'ART', explanation_tr: 'Meslekten önce "a": a driver.' },
          { text: 'My father driver', tag: 'TOBE', explanation_tr: '"is" ve "a" eksik: My father is a driver.' },
        ],
      },
      {
        id: 'q_art_10', mode: 'order', prompt_tr: 'Bir şemsiye ve bir çanta.', answer_en: 'An umbrella and a bag',
        words: ['An', 'umbrella', 'and', 'a', 'bag', 'A'],
        error_variants: [
          { text: 'A umbrella and a bag', tag: 'ART', explanation_tr: 'Sesli sesle başlıyor: an umbrella.' },
          { text: 'An umbrella and an bag', tag: 'ART', explanation_tr: '"bag" sessizle başlar: a bag.' },
        ],
      },
      {
        id: 'q_art_11', mode: 'free', prompt_tr: 'Bu bir portakal.', answer_en: 'This is an orange', accepted: ['It is an orange', "It's an orange"],
        error_variants: [
          { text: 'This is a orange', tag: 'ART', explanation_tr: 'Sesli sesle başlıyor: an orange.' },
          { text: 'This is orange', tag: 'ART', explanation_tr: '"an" gerekli: an orange. ("This is orange" = "Bu turuncu" olur.)' },
        ],
      },
      {
        id: 'q_art_12', mode: 'order', prompt_tr: 'Erkek kardeşim öğretmen.', answer_en: 'My brother is a teacher',
        words: ['My', 'brother', 'is', 'a', 'teacher', 'an'],
        error_variants: [
          { text: 'My brother is an teacher', tag: 'ART', explanation_tr: '"teacher" sessizle başlar: a teacher.' },
          { text: 'My brother is teacher', tag: 'ART', explanation_tr: 'Meslekten önce "a": a teacher.' },
        ],
      },
    ],
  },
  {
    id: 'l_pronouns',
    skillId: 'pronouns',
    title: 'he / she / it',
    title_tr: 'Zamirler: he / she / it',
    explanation_tr:
      'Türkçede tek bir "o" var: annem de o, kardeşim de o, araba da o. İngilizcede üçe bölünür: erkek → he, kadın → she, nesne/hayvan/kavram → it. Bu yüzden Türkler konuşurken "My mother… he" der; en tanıdık hata budur. Çoğul için hepsi "they". Küçük ipucu: cümleyi kurmadan önce "kim/ne?" diye sor; cevap erkekse he, kadınsa she, ikisi de değilse it.',
    examples: [
      { en: 'My sister is a student. She is 20.', tr: 'Kız kardeşim öğrenci. O 20 yaşında.' },
      { en: 'This is my phone. It is new.', tr: 'Bu benim telefonum. O yeni.' },
      { en: 'Ali is my friend. He is a driver.', tr: 'Ali arkadaşım. O şoför.' },
    ],
    words: [
      { en: 'sister', tr: 'kız kardeş', example: 'My sister is a student.', example_tr: 'Kız kardeşim öğrenci.' },
      { en: 'friend', tr: 'arkadaş', example: 'He is my friend.', example_tr: 'O benim arkadaşım.' },
      { en: 'driver', tr: 'şoför', example: 'She is a taxi driver.', example_tr: 'O taksi şoförü.' },
      { en: 'new', tr: 'yeni', example: 'It is a new phone.', example_tr: 'Bu yeni bir telefon.' },
      { en: 'student', tr: 'öğrenci', example: 'They are students.', example_tr: 'Onlar öğrenci.' },
    ],
    exercises: [
      { type: 'gap', sentence: 'My father is a driver. ___ is 50.', options: ['He', 'She', 'It'], answer: 0 },
      { type: 'gap', sentence: 'This is my car. ___ is red.', options: ['He', 'She', 'It'], answer: 2 },
      { type: 'gap', sentence: 'Ayşe is my sister. ___ is a nurse.', options: ['He', 'She', 'It'], answer: 1 },
      { type: 'match', pairs: [['my mother', 'she'], ['my brother', 'he'], ['the table', 'it'], ['my parents', 'they']] },
      { type: 'mc', prompt: '"Kedi" için hangi zamir?', options: ['he', 'she', 'it'], answer: 2, explanation_tr: 'Hayvanlar genelde "it".' },
      { type: 'order', prompt_tr: 'O (erkek) benim arkadaşım.', words: ['friend', 'is', 'He', 'my'], answer: 'He is my friend' },
      { type: 'gap', sentence: 'My grandmother is 80. ___ is very old.', options: ['He', 'She', 'It'], answer: 1 },
      { type: 'gap', sentence: 'This is my bag. ___ is small.', options: ['He', 'She', 'It'], answer: 2 },
      { type: 'gap', sentence: 'My parents are teachers. ___ are in Ankara.', options: ['He', 'They', 'It'], answer: 1 },
      { type: 'order', prompt_tr: 'O (kadın) benim arkadaşım.', words: ['She', 'is', 'my', 'friend', 'He'], answer: 'She is my friend' },
    ],
    quiz: [
      {
        id: 'q_pron_1', mode: 'order', prompt_tr: 'Annem öğretmen. O 45 yaşında.', answer_en: 'My mother is a teacher. She is 45',
        words: ['My', 'mother', 'is', 'a', 'teacher.', 'She', 'is', '45', 'He'],
        error_variants: [
          { text: 'My mother is a teacher. He is 45', tag: 'GEN', explanation_tr: 'Anne kadın → she.' },
          { text: 'My mother is teacher. She is 45', tag: 'ART', explanation_tr: 'a teacher.' },
        ],
      },
      {
        id: 'q_pron_2', mode: 'free', prompt_tr: 'Bu benim telefonum. O yeni.', answer_en: 'This is my phone. It is new', accepted: ["This is my phone. It's new"],
        error_variants: [
          { text: 'This is my phone. He is new', tag: 'GEN', explanation_tr: 'Nesne için "it".' },
          { text: 'This is my phone. She is new', tag: 'GEN', explanation_tr: 'Nesne için "it".' },
          { text: 'This is my phone. It new', tag: 'TOBE', explanation_tr: '"is" eksik: It is new.' },
        ],
      },
      {
        id: 'q_pron_3', mode: 'order', prompt_tr: 'Ali şoför. O evli.', answer_en: 'Ali is a driver. He is married',
        words: ['Ali', 'is', 'a', 'driver.', 'He', 'is', 'married', 'She'],
        error_variants: [
          { text: 'Ali is a driver. She is married', tag: 'GEN', explanation_tr: 'Ali erkek → he.' },
          { text: 'Ali is driver. He is married', tag: 'ART', explanation_tr: 'a driver.' },
        ],
      },
      {
        id: 'q_pron_4', mode: 'free', prompt_tr: 'Kız kardeşim öğrenci.', answer_en: 'My sister is a student',
        error_variants: [
          { text: 'My sister is student', tag: 'ART', explanation_tr: 'a student.' },
          { text: 'My sister student', tag: 'TOBE', explanation_tr: '"is" eksik.' },
        ],
      },
      {
        id: 'q_pron_5', mode: 'order', prompt_tr: 'Onlar öğrenci.', answer_en: 'They are students',
        words: ['They', 'students', 'are', 'student', 'is'],
        error_variants: [
          { text: 'They are student', tag: 'PLURAL', explanation_tr: 'Onlar → çoğul: students.' },
          { text: 'They is students', tag: 'TOBE', explanation_tr: 'They + are.' },
          { text: 'They students', tag: 'TOBE', explanation_tr: '"are" eksik.' },
        ],
      },
      {
        id: 'q_pron_6', mode: 'order', prompt_tr: 'Babam şoför. O 50 yaşında.', answer_en: 'My father is a driver. He is 50',
        words: ['My', 'father', 'is', 'a', 'driver.', 'He', 'is', '50', 'She'],
        error_variants: [
          { text: 'My father is a driver. She is 50', tag: 'GEN', explanation_tr: 'Baba erkek → he.' },
          { text: 'My father is driver. He is 50', tag: 'ART', explanation_tr: 'a driver.' },
        ],
      },
      {
        id: 'q_pron_7', mode: 'free', prompt_tr: 'Bu benim arabam. O kırmızı.', answer_en: 'This is my car. It is red', accepted: ["This is my car. It's red"],
        error_variants: [
          { text: 'This is my car. He is red', tag: 'GEN', explanation_tr: 'Nesne için "it".' },
          { text: 'This is my car. She is red', tag: 'GEN', explanation_tr: 'Nesne için "it".' },
          { text: 'This is my car. It red', tag: 'TOBE', explanation_tr: '"is" eksik: It is red.' },
        ],
      },
      {
        id: 'q_pron_8', mode: 'order', prompt_tr: 'Ayşe hemşire. O evli.', answer_en: 'Ayşe is a nurse. She is married',
        words: ['Ayşe', 'is', 'a', 'nurse.', 'She', 'is', 'married', 'He'],
        error_variants: [
          { text: 'Ayşe is a nurse. He is married', tag: 'GEN', explanation_tr: 'Ayşe kadın → she.' },
          { text: 'Ayşe is nurse. She is married', tag: 'ART', explanation_tr: 'a nurse.' },
        ],
      },
      {
        id: 'q_pron_9', mode: 'free', prompt_tr: 'Annemle babam İzmir\'de. Onlar mutlu.', answer_en: 'My parents are in Izmir. They are happy', accepted: ["My parents are in Izmir. They're happy", 'My mother and father are in Izmir. They are happy', "My mother and father are in Izmir. They're happy", 'My mom and dad are in Izmir. They are happy', "My mom and dad are in Izmir. They're happy"],
        error_variants: [
          { text: 'My parents is in Izmir. They are happy', tag: 'TOBE', explanation_tr: 'Çoğul özne + are.' },
          { text: 'My parents are in Izmir. He is happy', tag: 'GEN', explanation_tr: '"Onlar" = they.' },
        ],
      },
      {
        id: 'q_pron_10', mode: 'order', prompt_tr: 'O (erkek) yorgun.', answer_en: 'He is tired',
        words: ['He', 'is', 'tired', 'She', 'are'],
        error_variants: [
          { text: 'She is tired', tag: 'GEN', explanation_tr: 'Erkek → he.' },
          { text: 'He tired', tag: 'TOBE', explanation_tr: '"is" eksik: He is tired.' },
        ],
      },
      {
        id: 'q_pron_11', mode: 'free', prompt_tr: 'Ali ve Elif benim arkadaşlarım. Onlar öğrenci.', answer_en: 'Ali and Elif are my friends. They are students', accepted: ["Ali and Elif are my friends. They're students"],
        error_variants: [
          { text: 'Ali and Elif are my friends. They are student', tag: 'PLURAL', explanation_tr: 'Onlar → çoğul: students.' },
          { text: 'Ali and Elif is my friends. They are students', tag: 'TOBE', explanation_tr: 'İki kişi → are.' },
        ],
      },
      {
        id: 'q_pron_12', mode: 'order', prompt_tr: 'Telefonum eski. O yavaş.', answer_en: 'My phone is old. It is slow',
        words: ['My', 'phone', 'is', 'old.', 'It', 'is', 'slow', 'He'],
        error_variants: [
          { text: 'My phone is old. He is slow', tag: 'GEN', explanation_tr: 'Nesne için "it".' },
          { text: 'My phone is old. It slow', tag: 'TOBE', explanation_tr: '"is" eksik: It is slow.' },
        ],
      },
    ],
  },
  {
    id: 'l_plural',
    skillId: 'plural',
    title: 'Plurals: -s / -es',
    title_tr: 'Çoğul: -s / -es',
    explanation_tr:
      'Türkçede sayıdan sonra isim tekil kalır: "üç araba". İngilizcede çoğul eki düşmez: "three cars". Bu yüzden "three car" Türklerin klasik hatasıdır. Kural: çoğunluk -s alır (car → cars), -s/-sh/-ch/-x ile bitenler -es (bus → buses, watch → watches), sessiz + y ise -ies (city → cities). Düzensizler ezber: man → men, woman → women, child → children, person → people. Çoğul isimden önce a/an gelmez.',
    examples: [
      { en: 'I have two cars.', tr: 'İki arabam var.' },
      { en: 'There are five children in the park.', tr: 'Parkta beş çocuk var.' },
      { en: 'Two buses and three taxis.', tr: 'İki otobüs ve üç taksi.' },
    ],
    words: [
      { en: 'child / children', tr: 'çocuk / çocuklar', example: 'Three children.', example_tr: 'Üç çocuk.' },
      { en: 'man / men', tr: 'adam / adamlar', example: 'Two men.', example_tr: 'İki adam.' },
      { en: 'city / cities', tr: 'şehir / şehirler', example: 'Big cities.', example_tr: 'Büyük şehirler.' },
      { en: 'bus / buses', tr: 'otobüs / otobüsler', example: 'Buses are late.', example_tr: 'Otobüsler geç.' },
      { en: 'people', tr: 'insanlar', example: 'Many people.', example_tr: 'Çok insan.' },
    ],
    exercises: [
      { type: 'gap', sentence: 'three ___', options: ['car', 'cars'], answer: 1 },
      { type: 'gap', sentence: 'two ___', options: ['bus', 'buses', 'buss'], answer: 1 },
      { type: 'gap', sentence: 'five ___', options: ['childs', 'children', 'child'], answer: 1, explanation_tr: 'Düzensiz: children.' },
      { type: 'match', pairs: [['man', 'men'], ['city', 'cities'], ['watch', 'watches'], ['book', 'books']] },
      { type: 'mc', prompt: 'Hangisi doğru?', options: ['I have two brother.', 'I have two brothers.', 'I have a two brothers.'], answer: 1 },
      { type: 'order', prompt_tr: 'Büyük şehirler.', words: ['cities', 'Big', 'city'], answer: 'Big cities' },
      { type: 'gap', sentence: 'four ___', options: ['box', 'boxes', 'boxs'], answer: 1, explanation_tr: '-x ile bitenler -es alır: boxes.' },
      { type: 'gap', sentence: 'two ___', options: ['woman', 'women', 'womans'], answer: 1, explanation_tr: 'Düzensiz: woman → women.' },
      { type: 'mc', prompt: 'Hangisi doğru?', options: ['two citys', 'two cities', 'two city'], answer: 1, explanation_tr: 'Sessiz + y → -ies.' },
      { type: 'order', prompt_tr: 'İki kadın ve üç adam.', words: ['Two', 'women', 'and', 'three', 'men', 'woman', 'mans'], answer: 'Two women and three men' },
    ],
    quiz: [
      {
        id: 'q_pl_1', mode: 'order', prompt_tr: 'İki arabam var.', answer_en: 'I have two cars',
        words: ['have', 'two', 'cars', 'I', 'car'],
        error_variants: [
          { text: 'I have two car', tag: 'PLURAL', explanation_tr: 'Sayıdan sonra çoğul: two cars.' },
          { text: 'I two cars have', tag: 'WORD_ORDER', explanation_tr: 'Fiil ortada: I have two cars.' },
        ],
      },
      {
        id: 'q_pl_2', mode: 'free', prompt_tr: 'Üç çocuğum var.', answer_en: 'I have three children',
        error_variants: [
          { text: 'I have three childs', tag: 'PLURAL', explanation_tr: 'Düzensiz çoğul: children.' },
          { text: 'I have three child', tag: 'PLURAL', explanation_tr: 'Çoğul: children.' },
        ],
      },
      {
        id: 'q_pl_3', mode: 'order', prompt_tr: 'Otobüsler geç.', answer_en: 'The buses are late',
        words: ['The', 'are', 'late', 'buses', 'bus', 'is'],
        error_variants: [
          { text: 'The bus are late', tag: 'PLURAL', explanation_tr: 'Otobüsler → buses.' },
          { text: 'The buses is late', tag: 'TOBE', explanation_tr: 'Çoğul özne + are.' },
        ],
      },
      {
        id: 'q_pl_4', mode: 'free', prompt_tr: 'Parkta çok insan var.', answer_en: 'There are many people in the park', accepted: ['There are a lot of people in the park'],
        error_variants: [
          { text: 'There are many peoples in the park', tag: 'PLURAL', explanation_tr: '"people" zaten çoğul; -s almaz.' },
          { text: 'There is many people in the park', tag: 'THERE', explanation_tr: 'Çoğul → there are.' },
          { text: 'Park has many people', tag: 'THERE', explanation_tr: '"var" için there is/are.' },
        ],
      },
      {
        id: 'q_pl_5', mode: 'order', prompt_tr: 'İki adam ve bir kadın.', answer_en: 'Two men and a woman',
        words: ['Two', 'men', 'and', 'a', 'woman', 'mans', 'women'],
        error_variants: [
          { text: 'Two mans and a woman', tag: 'PLURAL', explanation_tr: 'man → men.' },
          { text: 'Two men and a women', tag: 'PLURAL', explanation_tr: 'Tekil kadın: woman.' },
          { text: 'Two men and woman', tag: 'ART', explanation_tr: 'a woman.' },
        ],
      },
      {
        id: 'q_pl_6', mode: 'order', prompt_tr: 'Üç kedim var.', answer_en: 'I have three cats',
        words: ['I', 'have', 'three', 'cats', 'cat', 'a'],
        error_variants: [
          { text: 'I have three cat', tag: 'PLURAL', explanation_tr: 'Sayıdan sonra çoğul: three cats.' },
          { text: 'I have a three cats', tag: 'ART', explanation_tr: 'Çoğulda "a" olmaz.' },
        ],
      },
      {
        id: 'q_pl_7', mode: 'free', prompt_tr: 'İki otobüs ve bir taksi.', answer_en: 'Two buses and a taxi',
        error_variants: [
          { text: 'Two bus and a taxi', tag: 'PLURAL', explanation_tr: 'Sayıdan sonra çoğul: two buses.' },
          { text: 'Two buss and a taxi', tag: 'PLURAL', explanation_tr: '-s ile bitenler -es alır: buses.' },
          { text: 'Two buses and taxi', tag: 'ART', explanation_tr: 'Tekil: a taxi.' },
        ],
      },
      {
        id: 'q_pl_8', mode: 'order', prompt_tr: 'Şehirler büyük.', answer_en: 'The cities are big',
        words: ['The', 'cities', 'are', 'big', 'citys', 'is'],
        error_variants: [
          { text: 'The citys are big', tag: 'PLURAL', explanation_tr: 'Sessiz + y → -ies: cities.' },
          { text: 'The cities is big', tag: 'TOBE', explanation_tr: 'Çoğul özne + are.' },
        ],
      },
      {
        id: 'q_pl_9', mode: 'free', prompt_tr: 'Beş kitabım var.', answer_en: 'I have five books',
        error_variants: [
          { text: 'I have five book', tag: 'PLURAL', explanation_tr: 'Sayıdan sonra çoğul: five books.' },
          { text: 'I five books have', tag: 'WORD_ORDER', explanation_tr: 'Fiil ortada: I have five books.' },
        ],
      },
      {
        id: 'q_pl_10', mode: 'order', prompt_tr: 'İki çocuk ve bir kadın.', answer_en: 'Two children and a woman',
        words: ['Two', 'children', 'and', 'a', 'woman', 'childs', 'women'],
        error_variants: [
          { text: 'Two childs and a woman', tag: 'PLURAL', explanation_tr: 'Düzensiz çoğul: children.' },
          { text: 'Two children and a women', tag: 'PLURAL', explanation_tr: 'Tekil kadın: woman.' },
        ],
      },
      {
        id: 'q_pl_11', mode: 'free', prompt_tr: 'Üç arkadaşım var.', answer_en: 'I have three friends',
        error_variants: [
          { text: 'I have three friend', tag: 'PLURAL', explanation_tr: 'Sayıdan sonra çoğul: three friends.' },
          { text: 'I have a three friends', tag: 'ART', explanation_tr: 'Çoğulda "a" olmaz.' },
        ],
      },
      {
        id: 'q_pl_12', mode: 'order', prompt_tr: 'Kızlar öğrenci.', answer_en: 'The girls are students',
        words: ['The', 'girls', 'are', 'students', 'student', 'is'],
        error_variants: [
          { text: 'The girls are student', tag: 'PLURAL', explanation_tr: 'Çoğul özne → students.' },
          { text: 'The girls is students', tag: 'TOBE', explanation_tr: 'Çoğul özne + are.' },
        ],
      },
    ],
  },
  {
    id: 'l_possessive',
    skillId: 'possessive',
    title: 'my / your / his / her',
    title_tr: 'İyelik: my / your / his / her',
    explanation_tr:
      'Türkçede iyelik ek olarak sona gelir: araba-m, araba-n. İngilizcede başa ayrı bir kelime gelir: my car, your car. Liste: my (benim), your (senin/sizin), his (onun-erkek), her (onun-kadın), its (onun-nesne), our (bizim), their (onların). Dikkat: "his/her" de he/she gibi cinsiyete göre seçilir; "annemin arabası" = her car. Bir isimle iyelik için \'s: Ali\'s car (Ali\'nin arabası).',
    examples: [
      { en: 'This is my house.', tr: 'Bu benim evim.' },
      { en: 'Her name is Elif.', tr: 'Onun (kadın) adı Elif.' },
      { en: "Ali's car is red.", tr: "Ali'nin arabası kırmızı." },
    ],
    words: [
      { en: 'house', tr: 'ev', example: 'Our house is small.', example_tr: 'Evimiz küçük.' },
      { en: 'name', tr: 'isim', example: 'What is your name?', example_tr: 'Adın ne?' },
      { en: 'job', tr: 'iş, meslek', example: 'His job is hard.', example_tr: 'Onun işi zor.' },
      { en: 'phone', tr: 'telefon', example: 'Her phone is new.', example_tr: 'Onun telefonu yeni.' },
      { en: 'parents', tr: 'anne-baba', example: 'Their parents are in Izmir.', example_tr: 'Anne babaları İzmir\'de.' },
    ],
    exercises: [
      { type: 'gap', sentence: 'I have a car. ___ car is white.', options: ['My', 'Your', 'His'], answer: 0 },
      { type: 'gap', sentence: 'She is a nurse. ___ job is hard.', options: ['His', 'Her', 'Its'], answer: 1 },
      { type: 'gap', sentence: 'We live in Bursa. ___ house is small.', options: ['Their', 'Our', 'Your'], answer: 1 },
      { type: 'match', pairs: [['I', 'my'], ['he', 'his'], ['she', 'her'], ['they', 'their']] },
      { type: 'mc', prompt: '"Ali\'nin telefonu" nasıl denir?', options: ['Ali phone', "Ali's phone", 'the phone of Ali'], answer: 1 },
      { type: 'order', prompt_tr: 'Onun (kadın) adı Elif.', words: ['name', 'Her', 'is', 'Elif', 'His'], answer: 'Her name is Elif' },
      { type: 'gap', sentence: 'They have a car. ___ car is new.', options: ['Their', 'They', 'Them'], answer: 0 },
      { type: 'gap', sentence: 'He is a doctor. ___ name is Can.', options: ['Her', 'His', 'He'], answer: 1 },
      { type: 'mc', prompt: '"Elif\'in telefonu" nasıl denir?', options: ['Elif phone', "Elif's phone", 'Elifs phone'], answer: 1, explanation_tr: "İsimle iyelik için 's." },
      { type: 'order', prompt_tr: 'Bizim evimiz küçük.', words: ['Our', 'house', 'is', 'small', 'We'], answer: 'Our house is small' },
    ],
    quiz: [
      {
        id: 'q_poss_1', mode: 'order', prompt_tr: 'Bu benim evim.', answer_en: 'This is my house',
        words: ['This', 'is', 'my', 'house', 'me', 'I'],
        error_variants: [
          { text: 'This is me house', tag: 'POSS', explanation_tr: '"benim" = my.' },
          { text: 'This is I house', tag: 'POSS', explanation_tr: '"benim" = my.' },
          { text: 'This my house', tag: 'TOBE', explanation_tr: '"is" eksik.' },
        ],
      },
      {
        id: 'q_poss_2', mode: 'free', prompt_tr: 'Annemin arabası kırmızı.', answer_en: "My mother's car is red",
        error_variants: [
          { text: 'My mother car is red', tag: 'POSS', explanation_tr: "İsimle iyelik için 's: mother's car." },
          { text: 'My mothers car is red', tag: 'POSS', explanation_tr: "Kesme işareti: mother's." },
          { text: 'My mother car red', tag: 'TOBE', explanation_tr: "\"is\" ve 's eksik." },
        ],
      },
      {
        id: 'q_poss_3', mode: 'order', prompt_tr: 'Onun (erkek) işi zor.', answer_en: 'His job is hard',
        words: ['His', 'job', 'is', 'hard', 'Her', 'He'],
        error_variants: [
          { text: 'Her job is hard', tag: 'GEN', explanation_tr: 'Erkek → his.' },
          { text: 'He job is hard', tag: 'POSS', explanation_tr: '"onun" (erkek) = his.' },
        ],
      },
      {
        id: 'q_poss_4', mode: 'free', prompt_tr: 'Adın ne?', answer_en: 'What is your name', accepted: ["What's your name", 'What is your name?', "What's your name?"],
        error_variants: [
          { text: 'What is you name', tag: 'POSS', explanation_tr: '"senin" = your.' },
          { text: 'What your name', tag: 'TOBE', explanation_tr: '"is" eksik: What is your name?' },
          { text: 'Your name what', tag: 'WORD_ORDER', explanation_tr: 'Soru kelimesi başa: What is your name?' },
        ],
      },
      {
        id: 'q_poss_5', mode: 'order', prompt_tr: 'Anne babaları İzmir\'de.', answer_en: 'Their parents are in Izmir',
        words: ['Their', 'parents', 'are', 'in', 'Izmir', 'They', 'is'],
        error_variants: [
          { text: 'They parents are in Izmir', tag: 'POSS', explanation_tr: '"onların" = their.' },
          { text: 'Their parents is in Izmir', tag: 'TOBE', explanation_tr: 'Çoğul + are.' },
          { text: 'Their parents are Izmir', tag: 'PREP', explanation_tr: 'Şehir için "in": in Izmir.' },
        ],
      },
      {
        id: 'q_poss_6', mode: 'order', prompt_tr: 'Onun (kadın) arabası beyaz.', answer_en: 'Her car is white',
        words: ['Her', 'car', 'is', 'white', 'His', 'She'],
        error_variants: [
          { text: 'His car is white', tag: 'GEN', explanation_tr: 'Kadın → her.' },
          { text: 'She car is white', tag: 'POSS', explanation_tr: '"onun" (kadın) = her.' },
        ],
      },
      {
        id: 'q_poss_7', mode: 'free', prompt_tr: 'Benim adım Mehmet.', answer_en: 'My name is Mehmet', accepted: ["My name's Mehmet", 'I am Mehmet', "I'm Mehmet"],
        error_variants: [
          { text: 'Me name is Mehmet', tag: 'POSS', explanation_tr: '"benim" = my.' },
          { text: 'My name Mehmet', tag: 'TOBE', explanation_tr: '"is" eksik: My name is Mehmet.' },
        ],
      },
      {
        id: 'q_poss_8', mode: 'order', prompt_tr: 'Onların evi büyük.', answer_en: 'Their house is big',
        words: ['Their', 'house', 'is', 'big', 'They', 'are'],
        error_variants: [
          { text: 'They house is big', tag: 'POSS', explanation_tr: '"onların" = their.' },
          { text: 'Their house are big', tag: 'TOBE', explanation_tr: '"house" tekil → is.' },
        ],
      },
      {
        id: 'q_poss_9', mode: 'free', prompt_tr: "Ali'nin işi zor.", answer_en: "Ali's job is hard", accepted: ["Ali's job is difficult"],
        error_variants: [
          { text: 'Ali job is hard', tag: 'POSS', explanation_tr: "İsimle iyelik için 's: Ali's job." },
          { text: "Ali's job hard", tag: 'TOBE', explanation_tr: '"is" eksik.' },
        ],
      },
      {
        id: 'q_poss_10', mode: 'order', prompt_tr: 'Senin telefonun yeni.', answer_en: 'Your phone is new',
        words: ['Your', 'phone', 'is', 'new', 'You', 'are'],
        error_variants: [
          { text: 'You phone is new', tag: 'POSS', explanation_tr: '"senin" = your.' },
          { text: 'Your phone new', tag: 'TOBE', explanation_tr: '"is" eksik.' },
        ],
      },
      {
        id: 'q_poss_11', mode: 'free', prompt_tr: 'Öğretmenimiz İzmirli.', answer_en: 'Our teacher is from Izmir',
        error_variants: [
          { text: 'We teacher is from Izmir', tag: 'POSS', explanation_tr: '"bizim" = our.' },
          { text: 'Our teacher from Izmir', tag: 'TOBE', explanation_tr: '"is" eksik.' },
        ],
      },
      {
        id: 'q_poss_12', mode: 'order', prompt_tr: 'Kız kardeşimin adı Zeynep.', answer_en: "My sister's name is Zeynep",
        words: ['My', "sister's", 'name', 'is', 'Zeynep', 'sister', 'her'],
        error_variants: [
          { text: 'My sister name is Zeynep', tag: 'POSS', explanation_tr: "İsimle iyelik için 's: my sister's name." },
          { text: "My sister's name Zeynep", tag: 'TOBE', explanation_tr: '"is" eksik.' },
        ],
      },
    ],
  },
]
