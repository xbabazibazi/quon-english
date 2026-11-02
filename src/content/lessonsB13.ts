import type { Lesson } from './types'

export const LESSONS_B13: Lesson[] = [
  {
    id: 'l_reported_speech',
    skillId: 'reported_speech',
    title: 'Reported speech: said / told',
    title_tr: 'Dolaylı anlatım: said / told',
    explanation_tr:
      'Başkasının söylediğini aktarırken İngilizce zamanı genelde bir adım geriye kaydırır: present simple → past simple, present continuous → past continuous, present perfect → past perfect, can → could, will → would. "I am tired" dedi → "She said she was tired." Türkçede böyle bir kayma yok; en güvenli yol zamanı geri kaydırmaktır. Söylenen şey hâlâ doğruysa kaydırmamak da doğrudur ("She said she is tired" — hâlâ yorgunsa), ama durum değiştiyse ya da geçmişte kaldıysa kaydırma zorunludur: "Yesterday she said she was tired, but today she feels fine." Ayrıca "say" ve "tell" karışır: tell kişi ister (tell + kişi: "He told me…"), say doğrudan kişi almaz ("He said me" ✗). "tell to me" gibi bir kalıp yoktur.',
    examples: [
      { en: 'He said he was busy.', tr: 'Meşgul olduğunu söyledi.' },
      { en: 'She told me she would call later.', tr: 'Bana daha sonra arayacağını söyledi.' },
      { en: 'They said they had already eaten.', tr: 'Zaten yemiş olduklarını söylediler.' },
    ],
    words: [
      { en: 'tell', tr: 'söylemek (birine)', example: 'He told me the truth.', example_tr: 'Bana gerçeği söyledi.' },
      { en: 'say', tr: 'söylemek', example: 'She said nothing.', example_tr: 'Hiçbir şey söylemedi.' },
      { en: 'admit', tr: 'itiraf etmek', example: 'He admitted he was wrong.', example_tr: 'Yanıldığını itiraf etti.' },
      { en: 'claim', tr: 'iddia etmek', example: 'She claimed she knew nothing.', example_tr: 'Hiçbir şey bilmediğini iddia etti.' },
      { en: 'explain', tr: 'açıklamak', example: 'He explained he was late because of traffic.', example_tr: 'Trafik yüzünden geç kaldığını açıkladı.' },
    ],
    exercises: [
      { type: 'gap', sentence: 'Yesterday she said she ___ tired, but today she feels fine.', options: ['is', 'was', 'be'], answer: 1, explanation_tr: 'Durum değişti (bugün iyi), zaman geri kayar: was.' },
      { type: 'gap', sentence: 'He told ___ he would help.', options: ['me', 'I', 'my'], answer: 0, explanation_tr: '"tell" nesne alır: tell me.' },
      { type: 'mc', prompt: 'Hangisi doğru?', options: ['She said me she was busy.', 'She said she was busy.', 'She said she busy.'], answer: 1, explanation_tr: '"say" kişi almaz ve "was" atlanmaz.' },
      { type: 'gap', sentence: 'They said they ___ already finished.', options: ['have', 'had', 'has'], answer: 1, explanation_tr: 'present perfect → past perfect: had finished.' },
      { type: 'match', pairs: [['I am tired', 'She said she was tired'], ['I will call', 'He said he would call'], ['I can swim', 'She said she could swim'], ['I have finished', 'He said he had finished']] },
      { type: 'order', prompt_tr: 'Yorgun olduğunu söyledi (erkek).', words: ['He', 'said', 'he', 'was', 'tired', 'is'], answer: 'He said he was tired' },
      { type: 'gap', sentence: 'Last week Ali said he ___ busy that day.', options: ['is', 'was', 'be'], answer: 1, explanation_tr: '"that day" geçmişte kaldı, zaman bir adım geri kayar: was.' },
      { type: 'match', pairs: [['today', 'that day'], ['tomorrow', 'the next day'], ['here', 'there'], ['now', 'then']] },
      { type: 'mc', prompt: 'Hangisi doğru?', options: ['He said me the answer.', 'He told me the answer.', 'He told to me the answer.'], answer: 1, explanation_tr: 'tell + kişi: told me. "said me" ve "told to me" olmaz.' },
      { type: 'order', prompt_tr: 'Bana yorgun olduğunu söyledi (kadın).', words: ['She', 'told', 'me', 'she', 'was', 'tired', 'said'], answer: 'She told me she was tired' },
    ],
    quiz: [
      {
        id: 'q_rep_1', mode: 'order', prompt_tr: 'Meşgul olduğunu söyledi (o, erkek).', answer_en: 'He said he was busy', accepted: ['He said he is busy'],
        words: ['He', 'said', 'he', 'was', 'busy', 'me'],
        error_variants: [
          { text: 'He said me he was busy', tag: 'REPORTED', explanation_tr: '"say" doğrudan kişi almaz: He said he was busy ya da He told me he was busy.' },
          { text: 'He said he busy', tag: 'TOBE', explanation_tr: '"was" atlanmış: he was busy.' },
        ],
      },
      {
        id: 'q_rep_2', mode: 'free', prompt_tr: 'Bana geç kalacağını söyledi (kadın).', answer_en: 'She told me she would be late', accepted: ['She told me that she would be late', 'She told me she\'d be late', 'She said she would be late', 'She told me she will be late', "She told me she'll be late", 'She told me that she will be late'],
        error_variants: [
          { text: 'She said me she would be late', tag: 'REPORTED', explanation_tr: '"say" kişi almaz; kişi varsa "tell": She told me.' },
          { text: 'She tell me she would be late', tag: 'PAST', explanation_tr: 'Aktarma fiili de geçmiş zamanda olmalı: told, not tell.' },
        ],
      },
      {
        id: 'q_rep_3', mode: 'order', prompt_tr: 'Zaten yemiş olduklarını söylediler.', answer_en: 'They said they had already eaten',
        accepted: ['They said they have already eaten'],
        words: ['They', 'said', 'they', 'had', 'already', 'eaten', 'ate'],
        error_variants: [
          { text: 'They said they had already ate', tag: 'PAST', explanation_tr: '"had" dan sonra V3: eaten, ate değil.' },
          { text: 'They said they had already eat', tag: 'PAST', explanation_tr: '"had" dan sonra V3: eaten, not eat.' },
        ],
      },
      {
        id: 'q_rep_4', mode: 'free', prompt_tr: 'Yanıldığını itiraf etti (erkek).', answer_en: 'He admitted he was wrong', accepted: ['He admitted that he was wrong', 'He admitted he had been wrong', 'He admitted that he had been wrong'],
        error_variants: [
          { text: 'He admitted he wrong', tag: 'TOBE', explanation_tr: '"was" atlanmış: he was wrong.' },
          { text: 'He admitted he were wrong', tag: 'SVAGR', explanation_tr: '"he" ile "was": he was wrong.' },
        ],
      },
      {
        id: 'q_rep_5', mode: 'order', prompt_tr: 'Yüzebileceğini söyledi (kadın).', answer_en: 'She said she could swim', accepted: ['She said she can swim'],
        words: ['She', 'said', 'she', 'could', 'swim', 'me'],
        error_variants: [
          { text: 'She said me she could swim', tag: 'REPORTED', explanation_tr: '"say" kişi almaz: She said she could swim ya da She told me she could swim.' },
          { text: 'She said she could swims', tag: 'CAN', explanation_tr: 'can/could\'tan sonra fiil yalın: could swim.' },
        ],
      },
      {
        id: 'q_rep_6', mode: 'free', prompt_tr: 'Hasta olduğunu söyledi (erkek).', answer_en: 'He said he was ill',
        accepted: ['He said that he was ill', 'He said he was sick', 'He said that he was sick', 'He said he is ill', 'He said that he is ill', 'He said he is sick', 'He said that he is sick'],
        error_variants: [
          { text: 'He said me he was ill', tag: 'REPORTED', explanation_tr: '"say" doğrudan kişi almaz: He said he was ill ya da He told me he was ill.' },
          { text: 'He said he ill', tag: 'TOBE', explanation_tr: '"was" eksik: he was ill.' },
        ],
      },
      {
        id: 'q_rep_7', mode: 'order', prompt_tr: 'Bana gerçeği söyledi (erkek).', answer_en: 'He told me the truth',
        words: ['He', 'told', 'me', 'the', 'truth', 'said'],
        error_variants: [
          { text: 'He said me the truth', tag: 'REPORTED', explanation_tr: 'Kişi varsa "tell" kullanılır: told me.' },
          { text: 'He told the truth me', tag: 'WORD_ORDER', explanation_tr: 'tell + kişi + söylenen: told me the truth.' },
        ],
      },
      {
        id: 'q_rep_8', mode: 'free', prompt_tr: 'Bize yardım edeceklerini söylediler.', answer_en: 'They told us they would help',
        accepted: ['They told us that they would help', "They told us they'd help", "They told us that they'd help", 'They told us they would help us', 'They told us that they would help us', "They told us they'd help us", "They told us that they'd help us", 'They told us they will help', 'They told us that they will help', "They told us they'll help", "They told us that they'll help", 'They told us they will help us', 'They told us that they will help us', "They told us they'll help us", "They told us that they'll help us"],
        error_variants: [
          { text: 'They said us they would help', tag: 'REPORTED', explanation_tr: '"say" kişi almaz; kişi varsa "tell": told us.' },
          { text: 'They told us they would helped', tag: 'WILL', explanation_tr: '"would" dan sonra fiil yalın: would help.' },
        ],
      },
      {
        id: 'q_rep_9', mode: 'order', prompt_tr: 'Hata yaptığını itiraf etti (kadın).', answer_en: 'She admitted she had made a mistake',
        accepted: ['She admitted she made a mistake', 'She admitted that she had made a mistake', 'She admitted that she made a mistake'],
        words: ['She', 'admitted', 'she', 'had', 'made', 'a', 'mistake', 'did'],
        error_variants: [
          { text: 'She admitted she did a mistake', tag: 'MAKE_DO', explanation_tr: '"hata yapmak" = make a mistake: made a mistake.' },
          { text: 'She admitted she had did a mistake', tag: 'PAST', explanation_tr: '"had" dan sonra V3 gelir ve "hata yapmak" make ile kurulur: had made.' },
        ],
      },
      {
        id: 'q_rep_10', mode: 'free', prompt_tr: 'Ona (erkeğe) telefonumu kaybettiğimi söyledim.', answer_en: 'I told him I had lost my phone',
        accepted: ['I told him that I had lost my phone', "I told him I'd lost my phone", "I told him that I'd lost my phone", 'I told him I lost my phone', 'I told him that I lost my phone', 'I told him I have lost my phone', 'I told him that I have lost my phone', "I told him I've lost my phone", "I told him that I've lost my phone"],
        error_variants: [
          { text: 'I said him I had lost my phone', tag: 'REPORTED', explanation_tr: 'Kişi varsa "tell": I told him.' },
          { text: 'I told he I had lost my phone', tag: 'OBJPRON', explanation_tr: 'tell\'den sonra nesne zamiri: him.' },
        ],
      },
      {
        id: 'q_rep_11', mode: 'order', prompt_tr: 'Bize İngilizce konuşabildiğini söyledi (erkek).', answer_en: 'He told us he could speak English',
        accepted: ['He told us he can speak English'],
        words: ['He', 'told', 'us', 'he', 'could', 'speak', 'English', 'said'],
        error_variants: [
          { text: 'He said us he could speak English', tag: 'REPORTED', explanation_tr: '"say" kişi almaz; kişi varsa "tell": told us.' },
          { text: 'He told us he could speaks English', tag: 'CAN', explanation_tr: '"could" dan sonra fiil yalın: could speak.' },
        ],
      },
      {
        id: 'q_rep_12', mode: 'free', prompt_tr: 'Bana sınavı geçtiğini söyledi (erkek).', answer_en: 'He told me he had passed the exam',
        accepted: ['He told me that he had passed the exam', "He told me he'd passed the exam", "He told me that he'd passed the exam", 'He told me he passed the exam', 'He told me that he passed the exam', 'He told me he has passed the exam', 'He told me that he has passed the exam', "He told me he's passed the exam", "He told me that he's passed the exam"],
        error_variants: [
          { text: 'He said me he had passed the exam', tag: 'REPORTED', explanation_tr: 'Kişi varsa "tell": He told me.' },
          { text: 'He told me he had pass the exam', tag: 'PAST', explanation_tr: '"had" dan sonra V3: had passed.' },
        ],
      },
    ],
  },
  {
    id: 'l_modals_deduction',
    skillId: 'modals_deduction',
    title: "must / can't / might for deduction",
    title_tr: "must / can't / might — çıkarım yapma",
    explanation_tr:
      'Elimizdeki kanıta göre bir şeyin doğru olduğunu düşünüyorsak must kullanılır: "The lights are off, he must be asleep" (eminim uyuyordur). Bir şeyin imkansız olduğunu düşünüyorsak can\'t: "He can\'t be at work, his car is here" (eminim işte değil). Emin olmadığımız ama mümkün gördüğümüz durumlar için might/could/may: "She might be stuck in traffic" (belki trafikte kalmıştır). Dikkat: bu kullanım "yapabilmek" anlamındaki can/could ile karıştırılmamalı; burada konu tahmin/çıkarım.',
    examples: [
      { en: 'The lights are off. They must be asleep.', tr: 'Işıklar sönük. Uyuyor olmalılar.' },
      { en: "He can't be hungry, he just ate.", tr: 'Aç olamaz, az önce yemek yedi.' },
      { en: 'She might be at the gym.', tr: 'Belki spor salonundadır.' },
    ],
    words: [
      { en: 'asleep', tr: 'uykuda', example: 'The baby is asleep.', example_tr: 'Bebek uykuda.' },
      { en: 'exhausted', tr: 'bitkin', example: 'He must be exhausted after the trip.', example_tr: 'Yolculuktan sonra bitkin olmalı.' },
      { en: 'stuck', tr: 'sıkışmış, takılmış', example: 'She might be stuck in traffic.', example_tr: 'Belki trafikte kalmıştır.' },
      { en: 'certain', tr: 'emin', example: 'I am certain he is right.', example_tr: 'Haklı olduğundan eminim.' },
      { en: 'impossible', tr: 'imkansız', example: "It can't be true, it's impossible.", example_tr: 'Doğru olamaz, imkansız.' },
    ],
    exercises: [
      { type: 'gap', sentence: 'He ___ be tired, he worked all night.', options: ['must', "mustn't", "can't"], answer: 0 },
      { type: 'gap', sentence: 'She ___ be at home, I just saw her at the office.', options: ['must', "can't", 'might'], answer: 1, explanation_tr: 'imkansız → can\'t.' },
      { type: 'mc', prompt: 'Hangisi "belki" anlamı taşır?', options: ['must', "can't", 'might'], answer: 2 },
      { type: 'gap', sentence: 'Everyone has an umbrella. It ___ be raining.', options: ['must', "can't", "mustn't"], answer: 0 },
      { type: 'match', pairs: [['eminim öyle', 'must'], ['eminim değil', "can't"], ['belki', 'might']] },
      { type: 'order', prompt_tr: 'Uykuda olmalılar.', words: ['They', 'must', 'be', 'asleep', 'are'], answer: 'They must be asleep' },
      { type: 'gap', sentence: 'Her phone is off. She ___ be on the plane.', options: ['must', "mustn't", 'can'], answer: 0, explanation_tr: 'Kanıta dayalı güçlü tahmin: must. "mustn\'t" yasak bildirir.' },
      { type: 'mc', prompt: 'Hangisi "imkansız, eminim değil" anlamı taşır?', options: ['might not', "can't", 'must'], answer: 1, explanation_tr: 'might not = belki değil; can\'t = kesinlikle değil.' },
      { type: 'match', pairs: [['He must be rich', 'Eminim zengindir'], ["He can't be rich", 'Zengin olamaz'], ['He might be rich', 'Belki zengindir'], ['He might not be rich', 'Belki zengin değildir']] },
      { type: 'order', prompt_tr: 'Belki hastadır (erkek).', words: ['He', 'might', 'be', 'ill', 'is'], answer: 'He might be ill' },
    ],
    quiz: [
      {
        id: 'q_ded_1', mode: 'order', prompt_tr: 'Evde olamaz (erkek).', answer_en: "He can't be at home",
        words: ['He', "can't", 'be', 'at', 'home', "isn't"],
        error_variants: [
          { text: "He isn't be at home", tag: 'DEDUCTION', explanation_tr: "Çıkarımda \"can't be\": He can't be at home." },
          { text: "He can't to be at home", tag: 'CAN', explanation_tr: '"can\'t" tan sonra "to" gelmez: can\'t be.' },
        ],
      },
      {
        id: 'q_ded_2', mode: 'free', prompt_tr: 'Çok yorgun olmalı (erkek).', answer_en: 'He must be very tired', accepted: ['He must be so tired'],
        error_variants: [
          { text: 'He must is very tired', tag: 'DEDUCTION', explanation_tr: '"must" tan sonra fiil yalın: must be, "is" gelmez.' },
          { text: 'He must very tired', tag: 'TOBE', explanation_tr: '"be" eksik: must be tired.' },
        ],
      },
      {
        id: 'q_ded_3', mode: 'order', prompt_tr: 'Belki ofistedir (kadın).', answer_en: 'She might be at the office',
        words: ['She', 'might', 'be', 'at', 'the', 'office', 'is'],
        error_variants: [
          { text: 'She might is at the office', tag: 'DEDUCTION', explanation_tr: '"might" tan sonra fiil yalın: might be.' },
          { text: 'She might at the office', tag: 'TOBE', explanation_tr: '"be" eksik: might be.' },
        ],
      },
      {
        id: 'q_ded_4', mode: 'free', prompt_tr: 'Doğru olamaz.', answer_en: "It can't be true", accepted: ['It cannot be true', "That can't be true", 'That cannot be true', "This can't be true"],
        error_variants: [
          { text: "It isn't can true", tag: 'DEDUCTION', explanation_tr: 'Doğru yapı: It can\'t be true.' },
          { text: "It don't can be true", tag: 'DEDUCTION', explanation_tr: "Modal'lerle do/does kullanılmaz: It can't be true." },
        ],
      },
      {
        id: 'q_ded_5', mode: 'order', prompt_tr: 'Eminim evdedir (ışıklar yanıyor).', answer_en: 'He must be at home',
        words: ['He', 'must', 'be', 'at', 'home', 'is'],
        error_variants: [
          { text: 'He must be at home is', tag: 'WORD_ORDER', explanation_tr: 'Fazladan "is" var: He must be at home.' },
          { text: 'He must at home', tag: 'TOBE', explanation_tr: '"be" eksik: must be at home.' },
        ],
      },
      {
        id: 'q_ded_6', mode: 'free', prompt_tr: 'Şaka yapıyor olmalısın.', answer_en: 'You must be joking',
        accepted: ['You must be kidding'],
        error_variants: [
          { text: 'You must joking', tag: 'TOBE', explanation_tr: '"be" eksik: must be joking.' },
          { text: 'You must are joking', tag: 'DEDUCTION', explanation_tr: '"must" tan sonra fiil yalın: must be.' },
        ],
      },
      {
        id: 'q_ded_7', mode: 'order', prompt_tr: 'Bu onun arabası olamaz (erkek).', answer_en: "This can't be his car",
        accepted: ['This cannot be his car', "That can't be his car", 'That cannot be his car', "It can't be his car", 'It cannot be his car'],
        words: ['This', "can't", 'be', 'his', 'car', "isn't", 'he'],
        error_variants: [
          { text: "This isn't be his car", tag: 'DEDUCTION', explanation_tr: "İmkansızlık için can't be: This can't be his car." },
          { text: "This can't be he car", tag: 'POSS', explanation_tr: '"onun" (erkek) = his.' },
        ],
      },
      {
        id: 'q_ded_8', mode: 'free', prompt_tr: 'Belki trafiktedirler.', answer_en: 'They might be in traffic',
        accepted: ['They may be in traffic', 'They could be in traffic', 'They might be stuck in traffic', 'They may be stuck in traffic', 'They could be stuck in traffic'],
        error_variants: [
          { text: 'They might are in traffic', tag: 'DEDUCTION', explanation_tr: '"might" tan sonra fiil yalın: might be.' },
          { text: 'They might in traffic', tag: 'TOBE', explanation_tr: '"be" eksik: might be in traffic.' },
        ],
      },
      {
        id: 'q_ded_9', mode: 'order', prompt_tr: 'Aç olmalısın.', answer_en: 'You must be hungry',
        words: ['You', 'must', 'be', 'hungry', 'are'],
        error_variants: [
          { text: 'You must are hungry', tag: 'DEDUCTION', explanation_tr: '"must" tan sonra fiil yalın: must be.' },
          { text: 'You must hungry', tag: 'TOBE', explanation_tr: '"be" eksik: must be hungry.' },
        ],
      },
      {
        id: 'q_ded_10', mode: 'free', prompt_tr: 'Ali hasta olamaz.', answer_en: "Ali can't be ill",
        accepted: ['Ali cannot be ill', "Ali can't be sick", 'Ali cannot be sick'],
        error_variants: [
          { text: "Ali mustn't be ill", tag: 'DEDUCTION', explanation_tr: "\"mustn't\" yasak bildirir; imkansızlık için can't: Ali can't be ill." },
          { text: "Ali can't ill", tag: 'TOBE', explanation_tr: "\"be\" eksik: can't be ill." },
        ],
      },
      {
        id: 'q_ded_11', mode: 'order', prompt_tr: 'Belki evde değildir (kadın).', answer_en: 'She might not be at home',
        accepted: ['She may not be at home'],
        words: ['She', 'might', 'not', 'be', 'at', 'home', "isn't"],
        error_variants: [
          { text: "She might isn't at home", tag: 'DEDUCTION', explanation_tr: '"might" tan sonra fiil yalın: might not be.' },
          { text: 'She might not at home', tag: 'TOBE', explanation_tr: '"be" eksik: might not be at home.' },
        ],
      },
      {
        id: 'q_ded_12', mode: 'free', prompt_tr: 'Çok pahalı olmalı.', answer_en: 'It must be very expensive',
        accepted: ['It must be so expensive', 'That must be very expensive', 'That must be so expensive', 'This must be very expensive', 'This must be so expensive'],
        error_variants: [
          { text: 'It must very expensive', tag: 'TOBE', explanation_tr: '"be" eksik: must be very expensive.' },
          { text: 'It must is very expensive', tag: 'DEDUCTION', explanation_tr: '"must" tan sonra fiil yalın: must be.' },
        ],
      },
    ],
  },
  {
    id: 'l_phrasal_verbs',
    skillId: 'phrasal_verbs',
    title: 'Phrasal verbs: give up, look for, find out',
    title_tr: "Sık kullanılan phrasal verb'ler",
    explanation_tr:
      'Phrasal verb, bir fiil ile bir ya da iki edatın birleşip tamamen farklı bir anlam kazanmasıdır: "give up" (vazgeçmek) kelime anlamıyla "vermek + yukarı" değildir. Türkçede karşılığı tek bir fiil olduğu için öğrenciler bunları genelde tahmin etmeye çalışır ve yanlış edat seçer. Bazı phrasal verb\'ler ayrılabilir (nesne araya girebilir), bazıları ayrılmaz ("look for the keys", "look the keys for" olmaz). En güvenli yol: her phrasal verb\'ü bütün bir kelime gibi, cümle içinde ezberlemek.',
    examples: [
      { en: 'I need to find out the truth.', tr: 'Gerçeği öğrenmem gerekiyor.' },
      { en: 'She gave up smoking last year.', tr: 'Geçen yıl sigarayı bıraktı.' },
      { en: 'He ran into an old friend yesterday.', tr: 'Dün eski bir arkadaşına rastladı.' },
    ],
    words: [
      { en: 'give up', tr: 'vazgeçmek, bırakmak', example: "Don't give up on your dreams.", example_tr: 'Hayallerinden vazgeçme.' },
      { en: 'look for', tr: 'aramak', example: 'I am looking for my keys.', example_tr: 'Anahtarlarımı arıyorum.' },
      { en: 'find out', tr: 'öğrenmek, keşfetmek', example: 'We found out the truth.', example_tr: 'Gerçeği öğrendik.' },
      { en: 'get on with', tr: 'iyi anlaşmak', example: 'She gets on well with her colleagues.', example_tr: 'İş arkadaşlarıyla iyi anlaşıyor.' },
      { en: 'run into', tr: 'rastlamak, tesadüfen karşılaşmak', example: 'I ran into my teacher at the mall.', example_tr: "AVM'de öğretmenime rastladım." },
    ],
    exercises: [
      { type: 'gap', sentence: 'I can\'t find my phone. I am looking ___ it.', options: ['for', 'at', 'on'], answer: 0 },
      { type: 'gap', sentence: 'He gave ___ smoking.', options: ['up', 'out', 'on'], answer: 0 },
      { type: 'mc', prompt: '"find out" ne demek?', options: ['bulmak (yerde)', 'öğrenmek', 'dışarı atmak'], answer: 1 },
      { type: 'gap', sentence: 'She gets ___ well with everyone.', options: ['on', 'up', 'into'], answer: 0 },
      { type: 'match', pairs: [['give up', 'vazgeçmek'], ['look for', 'aramak'], ['find out', 'öğrenmek'], ['run into', 'rastlamak']] },
      { type: 'order', prompt_tr: 'Sigarayı bıraktı (kadın).', words: ['She', 'gave', 'up', 'smoking', 'out'], answer: 'She gave up smoking' },
      { type: 'gap', sentence: 'I ran ___ my old teacher at the station.', options: ['into', 'out', 'up'], answer: 0, explanation_tr: 'run into = tesadüfen karşılaşmak.' },
      { type: 'mc', prompt: '"Sigarayı bıraktım" nasıl denir?', options: ['I gave up smoking.', 'I gave out smoking.', 'I gave smoking up to.'], answer: 0 },
      { type: 'match', pairs: [['turn on', 'açmak (cihaz, ışık)'], ['turn off', 'kapatmak (cihaz, ışık)'], ['get up', 'yataktan kalkmak'], ['wake up', 'uyanmak']] },
      { type: 'order', prompt_tr: 'Doğruyu öğrenmek istiyorum.', words: ['I', 'want', 'to', 'find', 'out', 'the', 'truth', 'for'], answer: 'I want to find out the truth' },
    ],
    quiz: [
      {
        id: 'q_phr_1', mode: 'order', prompt_tr: 'Anahtarlarımı arıyorum.', answer_en: 'I am looking for my keys',
        words: ['I', 'am', 'looking', 'for', 'my', 'keys', 'at'],
        error_variants: [
          { text: 'I am looking at my keys', tag: 'PHRASAL', explanation_tr: '"aramak" = look for, "bakmak" = look at.' },
          { text: 'I looking for my keys', tag: 'TOBE', explanation_tr: '"am" eksik: I am looking.' },
        ],
      },
      {
        id: 'q_phr_2', mode: 'free', prompt_tr: 'Gerçeği öğrendik.', answer_en: 'We found out the truth', accepted: ['We learned the truth', 'We learnt the truth'],
        error_variants: [
          { text: 'We find out the truth', tag: 'PAST', explanation_tr: 'Geçmiş zaman: found, not find.' },
          { text: 'We found out of the truth', tag: 'PHRASAL', explanation_tr: 'Fazladan "of" var: found out the truth.' },
        ],
      },
      {
        id: 'q_phr_3', mode: 'order', prompt_tr: 'Eski bir arkadaşıma rastladım.', answer_en: 'I ran into an old friend',
        words: ['I', 'ran', 'into', 'an', 'old', 'friend', 'run'],
        error_variants: [
          { text: 'I run into an old friend', tag: 'PAST', explanation_tr: 'Geçmiş zaman: ran, not run.' },
          { text: 'I ran in an old friend', tag: 'PHRASAL', explanation_tr: 'Doğru edat: run into, run in değil.' },
        ],
      },
      {
        id: 'q_phr_4', mode: 'free', prompt_tr: 'Hayallerinden vazgeçme.', answer_en: "Don't give up on your dreams", accepted: ["Don't give up your dreams", 'Do not give up on your dreams', 'Do not give up your dreams'],
        error_variants: [
          { text: 'Not give up on your dreams', tag: 'NEG', explanation_tr: "Emir cümlesinde olumsuzluk: Don't + fiil." },
          { text: "Don't give on your dreams", tag: 'PHRASAL', explanation_tr: 'Doğru phrasal verb: give up on.' },
        ],
      },
      {
        id: 'q_phr_5', mode: 'order', prompt_tr: 'İş arkadaşlarıyla iyi anlaşıyor (kadın).', answer_en: 'She gets on well with her colleagues',
        words: ['She', 'gets', 'on', 'well', 'with', 'her', 'colleagues', 'get'],
        error_variants: [
          { text: 'She get on well with her colleagues', tag: 'SVAGR', explanation_tr: 'she ile -s: gets.' },
          { text: 'She gets well on with her colleagues', tag: 'WORD_ORDER', explanation_tr: 'Doğru sıra: gets on well with.' },
        ],
      },
      {
        id: 'q_phr_6', mode: 'free', prompt_tr: 'Işığı kapat.', answer_en: 'Turn off the light',
        accepted: ['Turn the light off', 'Switch off the light', 'Switch the light off', 'Turn off the lights', 'Turn the lights off', 'Switch off the lights', 'Switch the lights off', 'Please turn off the light', 'Please turn the light off'],
        error_variants: [
          { text: 'Close the light', tag: 'PHRASAL', explanation_tr: 'Işık/cihaz için turn off kullanılır; close kapı, pencere içindir.' },
          { text: 'Turn of the light', tag: 'PHRASAL', explanation_tr: '"of" değil "off": turn off.' },
        ],
      },
      {
        id: 'q_phr_7', mode: 'order', prompt_tr: 'Işığı açar mısın?', answer_en: 'Can you turn on the light',
        accepted: ['Could you turn on the light', 'Can you turn the light on', 'Could you turn the light on'],
        words: ['Can', 'you', 'turn', 'on', 'the', 'light', 'open'],
        error_variants: [
          { text: 'Can you open the light', tag: 'PHRASAL', explanation_tr: 'Işık/cihaz için turn on kullanılır; open kapı, pencere içindir.' },
          { text: 'Can you turn the light', tag: 'PHRASAL', explanation_tr: '"on" eksik: turn on the light.' },
        ],
      },
      {
        id: 'q_phr_8', mode: 'free', prompt_tr: 'Her sabah yedide kalkarım.', answer_en: 'I get up at seven every morning',
        accepted: ['I get up at 7 every morning', 'Every morning I get up at seven', 'Every morning I get up at 7', "I get up at seven o'clock every morning", "I get up at 7 o'clock every morning", "Every morning I get up at seven o'clock"],
        error_variants: [
          { text: 'I get up in seven every morning', tag: 'TIME', explanation_tr: 'Saat için "at": at seven.' },
          { text: 'I gets up at seven every morning', tag: 'SVAGR', explanation_tr: '"I" ile -s gelmez: I get up.' },
        ],
      },
      {
        id: 'q_phr_9', mode: 'order', prompt_tr: 'Annemle iyi anlaşırım.', answer_en: 'I get on well with my mother',
        accepted: ['I get along well with my mother', 'I get on well with my mom', 'I get on well with my mum'],
        words: ['I', 'get', 'on', 'well', 'with', 'my', 'mother', 'gets'],
        error_variants: [
          { text: 'I gets on well with my mother', tag: 'SVAGR', explanation_tr: '"I" ile -s gelmez: I get on.' },
          { text: 'I get well on with my mother', tag: 'WORD_ORDER', explanation_tr: 'Doğru sıra: get on well with.' },
        ],
      },
      {
        id: 'q_phr_10', mode: 'free', prompt_tr: 'Sınav sonuçlarını öğrendin mi?', answer_en: 'Did you find out the exam results',
        accepted: ['Did you find out the results of the exam', 'Have you found out the exam results', 'Have you found out the results of the exam', 'Did you find out the test results', 'Have you found out the test results', 'Did you learn the exam results', 'Did you learn the results of the exam', 'Did you find out the results', 'Have you found out the results'],
        error_variants: [
          { text: 'Did you found out the exam results', tag: 'PAST', explanation_tr: '"did" den sonra fiil yalın: find out.' },
          { text: 'Did you find the exam results', tag: 'PHRASAL', explanation_tr: 'find = bulmak; öğrenmek = find out.' },
        ],
      },
      {
        id: 'q_phr_11', mode: 'order', prompt_tr: 'Asla pes etme!', answer_en: 'Never give up',
        accepted: ["Don't ever give up", "Don't give up"],
        words: ['Never', 'give', 'up', 'out', 'gives'],
        error_variants: [
          { text: 'Never give out', tag: 'PHRASAL', explanation_tr: 'Pes etmek = give up; give out = dağıtmak.' },
          { text: 'Never gives up', tag: 'SVAGR', explanation_tr: 'Emir cümlesinde fiil yalın: give up.' },
        ],
      },
      {
        id: 'q_phr_12', mode: 'free', prompt_tr: 'Telefonumu arıyorum ama bulamıyorum.', answer_en: "I am looking for my phone but I can't find it",
        accepted: ["I'm looking for my phone but I can't find it", 'I am looking for my phone but I cannot find it', "I'm looking for my phone but I cannot find it", "I'm looking for my phone but can't find it", "I am looking for my phone but can't find it"],
        error_variants: [
          { text: "I am looking my phone but I can't find it", tag: 'PHRASAL', explanation_tr: '"aramak" = look for: looking for my phone.' },
          { text: "I am looking for my phone but I can't find", tag: 'OBJPRON', explanation_tr: '"find" nesne ister: find it.' },
        ],
      },
    ],
  },
  {
    id: 'l_question_tags',
    skillId: 'question_tags',
    title: "Question tags: isn't it, don't you",
    title_tr: "Question tags: isn't it, don't you",
    explanation_tr:
      'Question tag, cümlenin sonuna eklenen küçük bir soru parçasıdır ve onay almak için kullanılır: "You are tired, aren\'t you?" Kural basit ama Türkçede karşılığı yok: ana cümle olumluysa etiket olumsuz olur, ana cümle olumsuzsa etiket olumlu olur. Etiket ana cümledeki yardımcı fiili (am/is/are, do/does/did, have/has, can, will…) tekrar eder; ana fiilde yardımcı fiil yoksa do/does/did kullanılır: "She works here, doesn\'t she?" Zamir her zaman özneyle eşleşir.',
    examples: [
      { en: "You are a teacher, aren't you?", tr: 'Öğretmensin, değil mi?' },
      { en: "She doesn't like coffee, does she?", tr: 'Kahveyi sevmiyor, değil mi?' },
      { en: "They have finished, haven't they?", tr: 'Bitirdiler, değil mi?' },
    ],
    words: [
      { en: 'surprising', tr: 'şaşırtıcı', example: "That's surprising, isn't it?", example_tr: 'Bu şaşırtıcı, değil mi?' },
      { en: 'confirm', tr: 'onaylamak, doğrulamak', example: 'Can you confirm that?', example_tr: 'Bunu doğrulayabilir misin?' },
      { en: 'expensive', tr: 'pahalı', example: "This car is expensive, isn't it?", example_tr: 'Bu araba pahalı, değil mi?' },
      { en: 'ready', tr: 'hazır', example: "You are ready, aren't you?", example_tr: 'Hazırsın, değil mi?' },
      { en: 'married', tr: 'evli', example: "He is married, isn't he?", example_tr: 'O evli, değil mi?' },
    ],
    exercises: [
      { type: 'gap', sentence: 'You are tired, ___?', options: ["aren't you", "don't you", "isn't you"], answer: 0 },
      { type: 'gap', sentence: 'She works here, ___?', options: ["doesn't she", "isn't she", "don't she"], answer: 0 },
      { type: 'mc', prompt: 'Ana cümle olumsuzsa etiket nasıl olur?', options: ['olumsuz', 'olumlu', 'fark etmez'], answer: 1 },
      { type: 'gap', sentence: "They haven't called, ___?", options: ['have they', "haven't they", "didn't they"], answer: 0 },
      { type: 'match', pairs: [['You are busy', "aren't you"], ['She likes tea', "doesn't she"], ['He can swim', "can't he"], ['They went home', "didn't they"]] },
      { type: 'order', prompt_tr: 'Bu pahalı, değil mi?', words: ['This', 'is', 'expensive', "isn't", 'it'], answer: "This is expensive, isn't it" },
      { type: 'gap', sentence: "It's a nice day, ___?", options: ["isn't it", "doesn't it", 'is it'], answer: 0 },
      { type: 'mc', prompt: 'Hangisi doğru?', options: ["He went home, didn't he?", "He went home, wasn't he?", "He went home, doesn't he?"], answer: 0, explanation_tr: 'Geçmiş zamanlı fiil (went) → etikette did: didn\'t he.' },
      { type: 'match', pairs: [['She is a doctor', "isn't she"], ["You don't smoke", 'do you'], ['He will come', "won't he"], ["We can't stay", 'can we']] },
      { type: 'order', prompt_tr: 'Gelecek, değil mi (erkek)?', words: ['He', 'will', 'come', "won't", 'he', "doesn't"], answer: "He will come, won't he" },
    ],
    quiz: [
      {
        id: 'q_tag_1', mode: 'order', prompt_tr: 'Sen öğretmensin, değil mi?', answer_en: "You are a teacher, aren't you",
        words: ['You', 'are', 'a', 'teacher', "aren't", 'you', "isn't"],
        error_variants: [
          { text: "You are a teacher, isn't you", tag: 'TAGQ', explanation_tr: 'Zamir "you" ile eşleşmeli: aren\'t you.' },
          { text: "You are a teacher, don't you", tag: 'TAGQ', explanation_tr: 'Ana cümlede "are" var, etiket de "be" fiiliyle olmalı: aren\'t you.' },
        ],
      },
      {
        id: 'q_tag_2', mode: 'free', prompt_tr: 'Kahve sevmiyor, değil mi (kadın)?', answer_en: "She doesn't like coffee, does she", accepted: ['She does not like coffee, does she'],
        error_variants: [
          { text: "She doesn't like coffee, doesn't she", tag: 'TAGQ', explanation_tr: 'Ana cümle olumsuz → etiket olumlu: does she.' },
          { text: "She don't like coffee, does she", tag: 'SVAGR', explanation_tr: '"she" ile: doesn\'t, not don\'t.' },
        ],
      },
      {
        id: 'q_tag_3', mode: 'order', prompt_tr: 'Bitirdiler, değil mi?', answer_en: "They have finished, haven't they",
        words: ['They', 'have', 'finished', "haven't", 'they', "don't"],
        error_variants: [
          { text: "They have finished, don't they", tag: 'TAGQ', explanation_tr: 'Ana cümlede "have" var, etiket de have ile: haven\'t they.' },
          { text: "They has finished, haven't they", tag: 'SVAGR', explanation_tr: '"They" ile: have, not has.' },
        ],
      },
      {
        id: 'q_tag_4', mode: 'free', prompt_tr: 'Yüzebiliyor, değil mi (erkek)?', answer_en: "He can swim, can't he",
        error_variants: [
          { text: "He can swim, doesn't he", tag: 'TAGQ', explanation_tr: 'Ana cümlede "can" var, etiket de can ile: can\'t he.' },
          { text: "He can swims, can't he", tag: 'CAN', explanation_tr: 'can\'tan sonra fiil yalın: can swim.' },
        ],
      },
      {
        id: 'q_tag_5', mode: 'order', prompt_tr: 'Evde değiller, değil mi?', answer_en: "They aren't at home, are they",
        words: ['They', "aren't", 'at', 'home', 'are', 'they', "don't"],
        error_variants: [
          { text: "They aren't at home, aren't they", tag: 'TAGQ', explanation_tr: 'Ana cümle olumsuz → etiket olumlu: are they.' },
          { text: "They don't at home, are they", tag: 'TOBE', explanation_tr: '"to be" cümlesinde do/does kullanılmaz: aren\'t at home.' },
        ],
      },
      {
        id: 'q_tag_6', mode: 'free', prompt_tr: 'Bugün hava soğuk, değil mi?', answer_en: "It's cold today, isn't it",
        accepted: ["It is cold today, isn't it", 'It is cold today, is it not', "Today it's cold, isn't it", "Today it is cold, isn't it"],
        error_variants: [
          { text: "It's cold today, doesn't it", tag: 'TAGQ', explanation_tr: 'Ana cümlede "is" var, etiket de be ile: isn\'t it.' },
          { text: "It cold today, isn't it", tag: 'TOBE', explanation_tr: '"is" eksik: It is cold.' },
        ],
      },
      {
        id: 'q_tag_7', mode: 'order', prompt_tr: 'Dün geldiler, değil mi?', answer_en: "They came yesterday, didn't they",
        words: ['They', 'came', 'yesterday', "didn't", 'they', "don't", "weren't"],
        error_variants: [
          { text: "They came yesterday, don't they", tag: 'TAGQ', explanation_tr: 'Geçmiş zaman → etikette did: didn\'t they.' },
          { text: "They came yesterday, weren't they", tag: 'TAGQ', explanation_tr: 'Ana fiil "came", yardımcı fiil yok → did: didn\'t they.' },
        ],
      },
      {
        id: 'q_tag_8', mode: 'free', prompt_tr: 'Sigara içmiyorsun, değil mi?', answer_en: "You don't smoke, do you",
        accepted: ['You do not smoke, do you'],
        error_variants: [
          { text: "You don't smoke, don't you", tag: 'TAGQ', explanation_tr: 'Ana cümle olumsuz → etiket olumlu: do you.' },
          { text: "You don't smoke, are you", tag: 'TAGQ', explanation_tr: 'Ana cümlede "do" var, etiket de do ile: do you.' },
        ],
      },
      {
        id: 'q_tag_9', mode: 'order', prompt_tr: 'O doktor, değil mi (kadın)?', answer_en: "She is a doctor, isn't she",
        accepted: ["She's a doctor, isn't she"],
        words: ['She', 'is', 'a', 'doctor', "isn't", 'she', 'her'],
        error_variants: [
          { text: "She is a doctor, isn't her", tag: 'TAGQ', explanation_tr: 'Etikette özne zamiri kullanılır: isn\'t she.' },
          { text: "She is doctor, isn't she", tag: 'ART', explanation_tr: 'Meslekten önce "a": a doctor.' },
        ],
      },
      {
        id: 'q_tag_10', mode: 'free', prompt_tr: 'Kalamayız, değil mi?', answer_en: "We can't stay, can we",
        accepted: ['We cannot stay, can we'],
        error_variants: [
          { text: "We can't stay, can't we", tag: 'TAGQ', explanation_tr: 'Ana cümle olumsuz → etiket olumlu: can we.' },
          { text: "We can't stay, do we", tag: 'TAGQ', explanation_tr: 'Ana cümlede "can" var, etiket de can ile: can we.' },
        ],
      },
      {
        id: 'q_tag_11', mode: 'order', prompt_tr: 'Bitirmedin, değil mi?', answer_en: "You haven't finished, have you",
        accepted: ["You didn't finish, did you"],
        words: ['You', "haven't", 'finished', 'have', 'you', "didn't"],
        error_variants: [
          { text: "You haven't finished, didn't you", tag: 'TAGQ', explanation_tr: 'Ana cümlede "have" var, etiket de have ile ve olumlu: have you.' },
          { text: "You didn't finished, have you", tag: 'PAST', explanation_tr: '"didn\'t" ten sonra fiil yalın olur; burada have ile kur: You haven\'t finished, have you.' },
        ],
      },
      {
        id: 'q_tag_12', mode: 'free', prompt_tr: 'Yardım edeceksin, değil mi?', answer_en: "You will help, won't you",
        accepted: ["You'll help, won't you", "You will help me, won't you", "You'll help me, won't you", 'You will help, will you not', "You will help us, won't you", "You'll help us, won't you"],
        error_variants: [
          { text: "You will help, don't you", tag: 'TAGQ', explanation_tr: 'Ana cümlede "will" var, etiket de will ile: won\'t you.' },
          { text: "You will help, aren't you", tag: 'TAGQ', explanation_tr: 'Ana cümlede "will" var, etiket de will ile: won\'t you.' },
        ],
      },
    ],
  },
  {
    id: 'l_comparative_structures',
    skillId: 'comparative_structures',
    title: 'as...as, less...than',
    title_tr: 'as...as, less...than',
    explanation_tr:
      'İki şeyin eşit olduğunu söylemek için "as + sıfat + as" kullanılır: "She is as tall as her brother" (kardeşi kadar uzun). Eşit olmadığını vurgulamak için "not as…as" ya da "less…than": "This book is not as interesting as that one" / "This book is less interesting than that one." Türkler genelde "as" yerine "like" kullanma eğilimindedir ya da "as" ı bir kez unutur: "She is tall as her brother" ✗. "less" ile "more" karıştırılmamalı: less = daha az, more = daha fazla.',
    examples: [
      { en: 'He is as tall as his father.', tr: 'Babası kadar uzun.' },
      { en: 'This city is not as crowded as Istanbul.', tr: 'Bu şehir İstanbul kadar kalabalık değil.' },
      { en: 'The new phone is less expensive than the old one.', tr: 'Yeni telefon eskisinden daha az pahalı.' },
    ],
    words: [
      { en: 'crowded', tr: 'kalabalık', example: 'The train is crowded.', example_tr: 'Tren kalabalık.' },
      { en: 'fit', tr: 'formda', example: 'She is as fit as an athlete.', example_tr: 'Bir sporcu kadar formda.' },
      { en: 'intelligent', tr: 'zeki', example: 'He is as intelligent as his sister.', example_tr: 'Kız kardeşi kadar zeki.' },
      { en: 'quickly', tr: 'hızlıca', example: 'She runs as quickly as him.', example_tr: 'Onun kadar hızlı koşar.' },
      { en: 'reliable', tr: 'güvenilir', example: 'This car is less reliable than mine.', example_tr: 'Bu araba benimkinden daha az güvenilir.' },
    ],
    exercises: [
      { type: 'gap', sentence: 'She is ___ tall as her mother.', options: ['as', 'so', 'like'], answer: 0 },
      { type: 'gap', sentence: 'This test is not ___ difficult as the last one.', options: ['as', 'so much', 'more'], answer: 0 },
      { type: 'mc', prompt: 'Hangisi doğru?', options: ['He is tall as me.', 'He is as tall as me.', 'He is as tall like me.'], answer: 1 },
      { type: 'gap', sentence: 'My phone is ___ expensive than yours.', options: ['less', 'as', 'more as'], answer: 0 },
      { type: 'match', pairs: [['eşit', 'as...as'], ['daha az', 'less...than'], ['daha fazla', 'more...than']] },
      { type: 'order', prompt_tr: 'Kardeşi kadar zeki (erkek).', words: ['He', 'is', 'as', 'intelligent', 'as', 'his', 'brother'], answer: 'He is as intelligent as his brother' },
      { type: 'gap', sentence: "My brother isn't as old ___ me.", options: ['as', 'than', 'like'], answer: 0 },
      { type: 'mc', prompt: 'Hangisi "daha az kalabalık" demek?', options: ['more crowded', 'less crowded', 'as crowded'], answer: 1 },
      { type: 'match', pairs: [['as expensive as', 'kadar pahalı'], ['less expensive than', '-den daha az pahalı'], ['more expensive than', '-den daha pahalı'], ['not as expensive as', 'kadar pahalı değil']] },
      { type: 'order', prompt_tr: 'Bu film kitap kadar iyi değil.', words: ['This', 'film', 'is', 'not', 'as', 'good', 'as', 'the', 'book', 'than'], answer: 'This film is not as good as the book' },
    ],
    quiz: [
      {
        id: 'q_asas_1', mode: 'order', prompt_tr: 'Babası kadar uzun (erkek).', answer_en: 'He is as tall as his father',
        words: ['He', 'is', 'as', 'tall', 'as', 'his', 'father', 'like'],
        error_variants: [
          { text: 'He is as tall like his father', tag: 'ASAS', explanation_tr: 'Doğru yapı "as...as": as tall as.' },
          { text: 'He is tall as his father', tag: 'ASAS', explanation_tr: 'İlk "as" unutulmuş: as tall as.' },
        ],
      },
      {
        id: 'q_asas_2', mode: 'free', prompt_tr: 'Bu şehir İstanbul kadar kalabalık değil.', answer_en: 'This city is not as crowded as Istanbul', accepted: ["This city isn't as crowded as Istanbul", 'This city is less crowded than Istanbul'],
        error_variants: [
          { text: 'This city is not so crowded than Istanbul', tag: 'ASAS', explanation_tr: '"as...as" yapısında "than" olmaz: not as crowded as.' },
          { text: 'This city not is as crowded as Istanbul', tag: 'WORD_ORDER', explanation_tr: '"is" özneden hemen sonra: city is not.' },
        ],
      },
      {
        id: 'q_asas_3', mode: 'order', prompt_tr: 'Yeni telefon eskisinden daha az pahalı.', answer_en: 'The new phone is less expensive than the old one',
        words: ['The', 'new', 'phone', 'is', 'less', 'expensive', 'than', 'the', 'old', 'one', 'more'],
        error_variants: [
          { text: 'The new phone is more expensive than the old one', tag: 'ASAS', explanation_tr: '"daha az" = less, "daha fazla" = more; burada less gerekli.' },
          { text: 'The new phone is less expensive as the old one', tag: 'ASAS', explanation_tr: 'less ile "than" kullanılır, "as" değil.' },
        ],
      },
      {
        id: 'q_asas_4', mode: 'free', prompt_tr: 'Onun kadar hızlı koşar (kadın).', answer_en: 'She runs as quickly as him', accepted: ['She runs as quickly as he does', 'She runs as fast as him', 'She runs as fast as he does', 'She runs as fast as her', 'She runs as quickly as her'],
        error_variants: [
          { text: 'She runs as quickly than him', tag: 'ASAS', explanation_tr: '"as...as" yapısında "than" olmaz: as quickly as.' },
          { text: 'She run as quickly as him', tag: 'SVAGR', explanation_tr: 'she ile -s: runs.' },
        ],
      },
      {
        id: 'q_asas_5', mode: 'order', prompt_tr: 'Bu araba benimkinden daha az güvenilir.', answer_en: 'This car is less reliable than mine',
        words: ['This', 'car', 'is', 'less', 'reliable', 'than', 'mine', 'more'],
        error_variants: [
          { text: 'This car is less reliable as mine', tag: 'ASAS', explanation_tr: 'less...than: as değil than.' },
          { text: 'This car is less reliable than my', tag: 'POSS', explanation_tr: '"benimki" = mine (my değil).' },
        ],
      },
      {
        id: 'q_asas_6', mode: 'free', prompt_tr: 'Kız kardeşim benim kadar uzun.', answer_en: 'My sister is as tall as me',
        accepted: ['My sister is as tall as I am', 'My sister is as tall as I', "My sister's as tall as me", "My sister's as tall as I am"],
        error_variants: [
          { text: 'My sister is tall as me', tag: 'ASAS', explanation_tr: 'İlk "as" unutulmuş: as tall as.' },
          { text: 'My sister is as tall than me', tag: 'ASAS', explanation_tr: '"as...as" yapısında "than" olmaz: as tall as.' },
        ],
      },
      {
        id: 'q_asas_7', mode: 'order', prompt_tr: 'Bu ev o ev kadar büyük değil.', answer_en: 'This house is not as big as that house',
        accepted: ["This house isn't as big as that house", 'This house is not as big as that one', "This house isn't as big as that one"],
        words: ['This', 'house', 'is', 'not', 'as', 'big', 'as', 'that', 'house', 'bigger'],
        error_variants: [
          { text: 'This house is not as bigger as that house', tag: 'ASAS', explanation_tr: '"as...as" arasında sıfat yalın: as big as.' },
          { text: 'This house is not big as that house', tag: 'ASAS', explanation_tr: 'İlk "as" unutulmuş: as big as.' },
        ],
      },
      {
        id: 'q_asas_8', mode: 'free', prompt_tr: 'Otobüs tren kadar hızlı değil.', answer_en: 'The bus is not as fast as the train',
        accepted: ["The bus isn't as fast as the train", 'The bus is slower than the train', 'Buses are not as fast as trains', "Buses aren't as fast as trains", "The bus's not as fast as the train"],
        error_variants: [
          { text: 'The bus is not as fast than the train', tag: 'ASAS', explanation_tr: '"as...as" yapısında "than" olmaz: as fast as.' },
          { text: 'The bus not as fast as the train', tag: 'TOBE', explanation_tr: '"is" eksik: The bus is not.' },
        ],
      },
      {
        id: 'q_asas_9', mode: 'order', prompt_tr: 'Bu kitap o kitaptan daha az ilginç.', answer_en: 'This book is less interesting than that book',
        accepted: ['This book is less interesting than that one', 'This book is not as interesting as that book', "This book isn't as interesting as that book"],
        words: ['This', 'book', 'is', 'less', 'interesting', 'than', 'that', 'book', 'as'],
        error_variants: [
          { text: 'This book is less interesting as that book', tag: 'ASAS', explanation_tr: 'less ile "than" kullanılır: less interesting than.' },
          { text: 'This book is less interesting that book', tag: 'ASAS', explanation_tr: '"than" eksik: less interesting than.' },
        ],
      },
      {
        id: 'q_asas_10', mode: 'free', prompt_tr: 'Ben de senin kadar yorgunum.', answer_en: 'I am as tired as you',
        accepted: ["I'm as tired as you", 'I am as tired as you are', "I'm as tired as you are", "I'm just as tired as you", 'I am just as tired as you', "I'm just as tired as you are", 'I am just as tired as you are'],
        error_variants: [
          { text: 'I am tired as you', tag: 'ASAS', explanation_tr: 'İlk "as" unutulmuş: as tired as.' },
          { text: 'I as tired as you', tag: 'TOBE', explanation_tr: '"am" eksik: I am as tired as you.' },
        ],
      },
      {
        id: 'q_asas_11', mode: 'order', prompt_tr: 'Babası kadar hızlı koşmuyor (erkek).', answer_en: "He doesn't run as fast as his father",
        accepted: ['He does not run as fast as his father'],
        words: ['He', "doesn't", 'run', 'as', 'fast', 'as', 'his', 'father', 'runs'],
        error_variants: [
          { text: "He doesn't runs as fast as his father", tag: 'SVAGR', explanation_tr: '"doesn\'t" tan sonra fiil yalın: run.' },
          { text: "He doesn't run fast as his father", tag: 'ASAS', explanation_tr: 'İlk "as" unutulmuş: as fast as.' },
        ],
      },
      {
        id: 'q_asas_12', mode: 'free', prompt_tr: 'İstanbul Ankara kadar sakin değil.', answer_en: 'Istanbul is not as quiet as Ankara',
        accepted: ["Istanbul isn't as quiet as Ankara", 'Istanbul is not as calm as Ankara', "Istanbul isn't as calm as Ankara", 'Istanbul is less quiet than Ankara', 'Istanbul is less calm than Ankara', 'Istanbul is noisier than Ankara'],
        error_variants: [
          { text: 'Istanbul is not as quiet than Ankara', tag: 'ASAS', explanation_tr: '"as...as" yapısında "than" olmaz: as quiet as.' },
          { text: 'Istanbul is not quiet as Ankara', tag: 'ASAS', explanation_tr: 'İlk "as" unutulmuş: as quiet as.' },
        ],
      },
    ],
  },
]
