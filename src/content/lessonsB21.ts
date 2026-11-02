import type { Lesson } from './types'

export const LESSONS_B21: Lesson[] = [
  {
    id: 'l_third_conditional',
    skillId: 'third_conditional',
    title: 'Third conditional: If I had studied, I would have passed',
    title_tr: 'if + past perfect, would have — üçüncü koşul',
    explanation_tr:
      'Üçüncü koşul, geçmişte gerçekleşmemiş bir durumu ve onun hayali sonucunu anlatır: geçmişi değiştiremeyiz, sadece "keşke böyle olsaydı" diye hayal ederiz. Yapı: If + past perfect (had + V3), ... would have + V3. "If I had studied, I would have passed the exam" (çalışmadım, bu yüzden geçmedim). Türkler sık sık "would have" yerine sadece "would" kullanır ya da if cümlesinde past perfect yerine past simple bırakır: "If I had studied, I would pass" ✗ (bu ikinci koşulun yapısı, üçüncüde "would have passed" gerekir).',
    examples: [
      { en: 'If I had known, I would have told you.', tr: 'Bilseydim sana söylerdim.' },
      { en: 'She would have passed if she had studied.', tr: 'Çalışsaydı geçerdi.' },
      { en: "If it hadn't rained, we would have gone out.", tr: 'Yağmur yağmasaydı dışarı çıkardık.' },
    ],
    words: [
      { en: 'regret', tr: 'pişman olmak', example: 'I regret not studying harder.', example_tr: 'Daha çok çalışmadığıma pişmanım.' },
      { en: 'miss', tr: 'kaçırmak', example: "If I had left earlier, I wouldn't have missed the bus.", example_tr: 'Daha erken çıksaydım otobüsü kaçırmazdım.' },
      { en: 'warn', tr: 'uyarmak', example: 'If you had warned me, I would have been careful.', example_tr: 'Beni uyarsaydın dikkatli olurdum.' },
      { en: 'succeed', tr: 'başarmak', example: 'She would have succeeded if she had tried.', example_tr: 'Deneseydi başarırdı.' },
      { en: 'avoid', tr: 'önlemek, kaçınmak', example: 'We could have avoided the accident.', example_tr: 'Kazayı önleyebilirdik.' },
    ],
    exercises: [
      { type: 'gap', sentence: 'If I ___ known, I would have told you.', options: ['had', 'have', 'has'], answer: 0 },
      { type: 'gap', sentence: 'She would ___ passed if she had studied.', options: ['have', 'has', 'had'], answer: 0 },
      { type: 'mc', prompt: 'Hangisi doğru üçüncü koşul?', options: ['If I had money, I would travel.', 'If I had had money, I would have traveled.', 'If I have money, I will travel.'], answer: 1 },
      { type: 'gap', sentence: "If it hadn't rained, we ___ gone out.", options: ['would have', 'will have', 'would'], answer: 0 },
      { type: 'match', pairs: [['If I had known', 'Bilseydim'], ['I would have told you', 'Sana söylerdim'], ["If it hadn't rained", 'Yağmur yağmasaydı'], ['we would have gone out', 'Dışarı çıkardık']] },
      { type: 'order', prompt_tr: 'Bilseydim sana söylerdim.', words: ['If', 'I', 'had', 'known', 'I', 'would', 'have', 'told', 'you'], answer: 'If I had known I would have told you' },
      { type: 'gap', sentence: 'If you had asked me, I ___ have helped you.', options: ['would', 'will', 'had'], answer: 0 },
      { type: 'mc', prompt: 'Hangisi doğru?', options: ['If she had taken the bus, she would have arrived on time.', 'If she took the bus, she would have arrived on time.', 'If she had taken the bus, she will arrive on time.'], answer: 0, explanation_tr: 'if + had + V3, would have + V3.' },
      { type: 'match', pairs: [['If I had seen you', 'Seni görseydim'], ['we would have gone', 'Giderdik'], ["he wouldn't have come", 'Gelmezdi'], ["we wouldn't have been late", 'Geç kalmazdık']] },
      { type: 'order', prompt_tr: 'Erken kalksaydım treni yakalardım.', words: ['If', 'I', 'had', 'got', 'up', 'early', 'I', 'would', 'have', 'caught', 'the', 'train', 'catch'], answer: 'If I had got up early I would have caught the train' },
    ],
    quiz: [
      {
        id: 'q_c3_1', mode: 'order', prompt_tr: 'Çalışsaydım geçerdim.', answer_en: 'If I had studied I would have passed', accepted: ['I would have passed if I had studied'],
        words: ['If', 'I', 'had', 'studied', 'I', 'would', 'have', 'passed', 'pass'],
        error_variants: [
          { text: 'If I had studied I would pass', tag: 'COND3', explanation_tr: 'Üçüncü koşulda sonuç cümlesi "would have + V3": would have passed.' },
          { text: 'If I studied I would have passed', tag: 'COND3', explanation_tr: 'if cümlesinde past perfect gerekli: had studied.' },
        ],
      },
      {
        id: 'q_c3_2', mode: 'free', prompt_tr: 'Beni uyarsaydın dikkatli olurdum.', answer_en: 'If you had warned me I would have been careful', accepted: ['If you had warned me I\'d have been careful', 'I would have been careful if you had warned me'],
        error_variants: [
          { text: 'If you warned me I would have been careful', tag: 'COND3', explanation_tr: 'if cümlesinde past perfect: had warned.' },
          { text: 'If you had warned me I would be careful', tag: 'COND3', explanation_tr: 'Sonuç cümlesinde "would have been" gerekli: geçmiş sonuç.' },
        ],
      },
      {
        id: 'q_c3_3', mode: 'order', prompt_tr: 'Yağmur yağmasaydı dışarı çıkardık.', answer_en: "If it hadn't rained we would have gone out", accepted: ["We would have gone out if it hadn't rained"],
        words: ['If', 'it', "hadn't", 'rained', 'we', 'would', 'have', 'gone', 'out', "didn't"],
        error_variants: [
          { text: "If it didn't rain we would have gone out", tag: 'COND3', explanation_tr: "if cümlesinde past perfect olumsuz: hadn't rained." },
          { text: "If it hadn't rained we would have went out", tag: 'PAST', explanation_tr: '"have" dan sonra V3: gone, not went.' },
        ],
      },
      {
        id: 'q_c3_4', mode: 'free', prompt_tr: 'Daha erken çıksaydım otobüsü kaçırmazdım.', answer_en: "If I had left earlier I wouldn't have missed the bus", accepted: ['If I had left earlier I would not have missed the bus', "I wouldn't have missed the bus if I had left earlier", 'I would not have missed the bus if I had left earlier'],
        error_variants: [
          { text: "If I left earlier I wouldn't have missed the bus", tag: 'COND3', explanation_tr: 'if cümlesinde past perfect: had left.' },
          { text: "If I had left earlier I wouldn't miss the bus", tag: 'COND3', explanation_tr: 'Geçmiş sonuç: wouldn\'t have missed.' },
        ],
      },
      {
        id: 'q_c3_5', mode: 'order', prompt_tr: 'Deneseydi başarırdı (kadın).', answer_en: 'She would have succeeded if she had tried', accepted: ['If she had tried she would have succeeded'],
        words: ['She', 'would', 'have', 'succeeded', 'if', 'she', 'had', 'tried', 'try'],
        error_variants: [
          { text: 'She would succeed if she had tried', tag: 'COND3', explanation_tr: 'Sonuç cümlesi: would have succeeded.' },
          { text: 'She would have succeeded if she tried', tag: 'COND3', explanation_tr: 'if cümlesi: had tried.' },
        ],
      },
      {
        id: 'q_c3_6', mode: 'free', prompt_tr: 'Seni görseydim selam verirdim.', answer_en: 'If I had seen you I would have said hello',
        accepted: ["If I'd seen you I would have said hello", "If I had seen you I'd have said hello", "If I'd seen you I'd have said hello", 'I would have said hello if I had seen you', "I'd have said hello if I'd seen you", "I would have said hello if I'd seen you", "I'd have said hello if I had seen you", 'If I had seen you I would have said hi', 'If I had seen you I would have greeted you', 'I would have greeted you if I had seen you'],
        error_variants: [
          { text: 'If I saw you I would have said hello', tag: 'COND3', explanation_tr: 'Geçmiş için if cümlesinde past perfect: had seen.' },
          { text: 'If I had seen you I would say hello', tag: 'COND3', explanation_tr: 'Geçmiş sonuç: would have said.' },
        ],
      },
      {
        id: 'q_c3_7', mode: 'order', prompt_tr: 'Bizi davet etselerdi giderdik.', answer_en: 'If they had invited us we would have gone',
        accepted: ['We would have gone if they had invited us'],
        words: ['If', 'they', 'had', 'invited', 'us', 'we', 'would', 'have', 'gone', 'went'],
        error_variants: [
          { text: 'If they had invited us we would have went', tag: 'PAST', explanation_tr: '"have" dan sonra V3: gone, not went.' },
          { text: 'If they invited us we would have gone', tag: 'COND3', explanation_tr: 'if cümlesinde past perfect: had invited.' },
        ],
      },
      {
        id: 'q_c3_8', mode: 'free', prompt_tr: 'Hasta olmasaydı işe gelirdi (erkek).', answer_en: "If he hadn't been ill he would have come to work",
        accepted: ['If he had not been ill he would have come to work', "If he hadn't been sick he would have come to work", 'If he had not been sick he would have come to work', "He would have come to work if he hadn't been ill", "He would have come to work if he hadn't been sick", 'He would have come to work if he had not been ill', 'He would have come to work if he had not been sick', "If he hadn't been ill he'd have come to work", "If he hadn't been sick he'd have come to work"],
        error_variants: [
          { text: "If he wasn't ill he would have come to work", tag: 'COND3', explanation_tr: "Geçmiş için if cümlesinde past perfect: hadn't been." },
          { text: "If he hadn't been ill he would have came to work", tag: 'PAST', explanation_tr: '"have" dan sonra V3: come, not came.' },
        ],
      },
      {
        id: 'q_c3_9', mode: 'order', prompt_tr: 'Taksiye binseydik geç kalmazdık.', answer_en: "If we had taken a taxi we wouldn't have been late",
        accepted: ["We wouldn't have been late if we had taken a taxi", 'If we had taken a taxi we would not have been late'],
        words: ['If', 'we', 'had', 'taken', 'a', 'taxi', 'we', "wouldn't", 'have', 'been', 'late', 'took'],
        error_variants: [
          { text: "If we had took a taxi we wouldn't have been late", tag: 'PAST', explanation_tr: '"had" dan sonra V3: taken.' },
          { text: "If we took a taxi we wouldn't have been late", tag: 'COND3', explanation_tr: 'if cümlesinde past perfect: had taken.' },
        ],
      },
      {
        id: 'q_c3_10', mode: 'free', prompt_tr: 'Bana söyleseydin yardım ederdim.', answer_en: 'If you had told me I would have helped',
        accepted: ['If you had told me I would have helped you', "If you'd told me I would have helped", "If you'd told me I'd have helped", "If you had told me I'd have helped", "If you'd told me I would have helped you", "If you'd told me I'd have helped you", "If you had told me I'd have helped you", 'I would have helped if you had told me', 'I would have helped you if you had told me', "I'd have helped you if you'd told me", "I would have helped you if you'd told me", "I'd have helped if you had told me", "I'd have helped you if you had told me", "I would have helped if you'd told me", "I'd have helped if you'd told me"],
        error_variants: [
          { text: 'If you told me I would have helped', tag: 'COND3', explanation_tr: 'if cümlesinde past perfect: had told.' },
          { text: 'If you would have told me I would have helped', tag: 'COND3', explanation_tr: 'if cümlesinde "would" kullanılmaz: If you had told me.' },
        ],
      },
      {
        id: 'q_c3_11', mode: 'order', prompt_tr: 'Haritaya baksaydık kaybolmazdık.', answer_en: "If we had checked the map we wouldn't have got lost",
        accepted: ["We wouldn't have got lost if we had checked the map", "If we had checked the map we wouldn't have gotten lost", 'If we had checked the map we would not have got lost', "If we had looked at the map we wouldn't have got lost"],
        words: ['If', 'we', 'had', 'checked', 'the', 'map', 'we', "wouldn't", 'have', 'got', 'lost', 'get'],
        error_variants: [
          { text: "If we had checked the map we wouldn't have get lost", tag: 'PAST', explanation_tr: '"have" dan sonra V3: got (ya da gotten).' },
          { text: "If we checked the map we wouldn't have got lost", tag: 'COND3', explanation_tr: 'if cümlesinde past perfect: had checked.' },
        ],
      },
      {
        id: 'q_c3_12', mode: 'free', prompt_tr: 'Daha dikkatli olsaydı kaza olmazdı (erkek).', answer_en: "If he had been more careful the accident wouldn't have happened",
        accepted: ['If he had been more careful the accident would not have happened', "If he'd been more careful the accident wouldn't have happened", "If he'd been more careful the accident would not have happened", "The accident wouldn't have happened if he had been more careful", 'The accident would not have happened if he had been more careful', "The accident wouldn't have happened if he'd been more careful", "If he had been more careful there wouldn't have been an accident", 'If he had been more careful there would not have been an accident'],
        error_variants: [
          { text: "If he was more careful the accident wouldn't have happened", tag: 'COND3', explanation_tr: 'Geçmiş için if cümlesinde past perfect: had been.' },
          { text: "If he had been more careful the accident wouldn't happen", tag: 'COND3', explanation_tr: "Geçmiş sonuç: wouldn't have happened." },
        ],
      },
    ],
  },
  {
    id: 'l_passive_advanced',
    skillId: 'passive_advanced',
    title: 'Advanced passive: modal + passive, perfect passive',
    title_tr: 'İleri edilgen: modal + passive, perfect passive',
    explanation_tr:
      'Modal fiillerle edilgen: modal + be + V3: "The work must be finished today." Perfect yapılarla edilgen: have/has/had + been + V3: "The report has been sent." Edilgen çatıda her zaman bir "be" formu olmalı; Türkler genelde "be" yi atlar ya da modal\'den sonra "to" ekler: "must to be finished" ✗. Kim yaptığı önemliyse "by" ile belirtilir: "The email was sent by the manager."',
    examples: [
      { en: 'The bridge must be repaired soon.', tr: 'Köprü yakında onarılmalı.' },
      { en: 'The report has been sent to all departments.', tr: 'Rapor tüm departmanlara gönderildi.' },
      { en: 'This decision should be made carefully.', tr: 'Bu karar dikkatle verilmeli.' },
    ],
    words: [
      { en: 'repair', tr: 'onarmak', example: 'The car needs to be repaired.', example_tr: 'Araba onarılmalı.' },
      { en: 'deliver', tr: 'teslim etmek', example: 'The package will be delivered tomorrow.', example_tr: 'Paket yarın teslim edilecek.' },
      { en: 'approve', tr: 'onaylamak', example: 'The project must be approved first.', example_tr: 'Önce proje onaylanmalı.' },
      { en: 'cancel', tr: 'iptal etmek', example: 'The meeting has been cancelled.', example_tr: 'Toplantı iptal edildi.' },
      { en: 'announce', tr: 'duyurmak', example: 'The results will be announced soon.', example_tr: 'Sonuçlar yakında duyurulacak.' },
    ],
    exercises: [
      { type: 'gap', sentence: 'The work must ___ finished today.', options: ['be', 'is', 'to be'], answer: 0 },
      { type: 'gap', sentence: 'The report has ___ sent.', options: ['been', 'be', 'was'], answer: 0 },
      { type: 'mc', prompt: 'Hangisi doğru?', options: ['It must to be done.', 'It must be done.', 'It must is done.'], answer: 1 },
      { type: 'gap', sentence: 'The meeting has already ___ cancelled.', options: ['been', 'be', 'was'], answer: 0 },
      { type: 'match', pairs: [['must be + V3', 'zorunlu edilgen'], ['has been + V3', 'tamamlanmış edilgen'], ['will be + V3', 'gelecek edilgen']] },
      { type: 'order', prompt_tr: 'Proje onaylanmalı.', words: ['The', 'project', 'must', 'be', 'approved', 'approve'], answer: 'The project must be approved' },
      { type: 'gap', sentence: 'The documents should ___ signed by the manager.', options: ['be', 'been', 'to be'], answer: 0 },
      { type: 'mc', prompt: '"Araba çalındı" nasıl denir?', options: ['The car has been stolen.', 'The car has stolen.', 'The car has been steal.'], answer: 0, explanation_tr: 'has been + V3: has been stolen.' },
      { type: 'match', pairs: [['will be + V3', 'yapılacak'], ['can be + V3', 'yapılabilir'], ['should be + V3', 'yapılmalı (tavsiye)'], ['had been + V3', 'daha önce yapılmıştı']] },
      { type: 'order', prompt_tr: 'Bu sorun çözülebilir.', words: ['This', 'problem', 'can', 'be', 'solved', 'solve'], answer: 'This problem can be solved' },
    ],
    quiz: [
      {
        id: 'q_pas2_1', mode: 'order', prompt_tr: 'Köprü onarılmalı.', answer_en: 'The bridge must be repaired',
        words: ['The', 'bridge', 'must', 'be', 'repaired', 'is'],
        error_variants: [
          { text: 'The bridge must to be repaired', tag: 'PASSIVE', explanation_tr: 'Modal\'den sonra "to" gelmez: must be repaired.' },
          { text: 'The bridge must repaired', tag: 'PASSIVE', explanation_tr: '"be" eksik: must be repaired.' },
        ],
      },
      {
        id: 'q_pas2_2', mode: 'free', prompt_tr: 'Rapor tüm departmanlara gönderildi.', answer_en: 'The report has been sent to all departments', accepted: ['The report was sent to all departments'],
        error_variants: [
          { text: 'The report has sent to all departments', tag: 'PASSIVE', explanation_tr: '"been" eksik: has been sent.' },
          { text: 'The report has been send to all departments', tag: 'PASSIVE', explanation_tr: '"been" den sonra V3: sent, not send.' },
        ],
      },
      {
        id: 'q_pas2_3', mode: 'order', prompt_tr: 'Toplantı iptal edildi.', answer_en: 'The meeting has been cancelled', accepted: ['The meeting was cancelled'],
        words: ['The', 'meeting', 'has', 'been', 'cancelled', 'was'],
        error_variants: [
          { text: 'The meeting has cancelled', tag: 'PASSIVE', explanation_tr: '"been" eksik: has been cancelled.' },
          { text: 'The meeting was been cancelled', tag: 'PASSIVE', explanation_tr: '"has/have been" ya da "was" kullanılır, ikisi birden olmaz.' },
        ],
      },
      {
        id: 'q_pas2_4', mode: 'free', prompt_tr: 'Paket yarın teslim edilecek.', answer_en: 'The package will be delivered tomorrow', accepted: ['The parcel will be delivered tomorrow', 'The package is going to be delivered tomorrow'],
        error_variants: [
          { text: 'The package will delivered tomorrow', tag: 'PASSIVE', explanation_tr: '"be" eksik: will be delivered.' },
          { text: 'The package will be deliver tomorrow', tag: 'PASSIVE', explanation_tr: '"be" den sonra V3: delivered.' },
        ],
      },
      {
        id: 'q_pas2_5', mode: 'order', prompt_tr: 'Sonuçlar yakında duyurulacak.', answer_en: 'The results will be announced soon',
        words: ['The', 'results', 'will', 'be', 'announced', 'soon', 'announce'],
        error_variants: [
          { text: 'The results will be announce soon', tag: 'PASSIVE', explanation_tr: '"be" den sonra V3: announced.' },
          { text: 'The results will announced soon', tag: 'PASSIVE', explanation_tr: '"be" eksik: will be announced.' },
        ],
      },
      {
        id: 'q_pas2_6', mode: 'free', prompt_tr: 'Belgeler müdür tarafından imzalanmalı.', answer_en: 'The documents must be signed by the manager',
        accepted: ['The documents should be signed by the manager', 'The documents have to be signed by the manager', 'The documents need to be signed by the manager', 'The papers must be signed by the manager', 'The papers should be signed by the manager', 'The documents must be signed by the director'],
        error_variants: [
          { text: 'The documents must be sign by the manager', tag: 'PASSIVE', explanation_tr: '"be" den sonra V3: signed.' },
          { text: 'The documents must signed by the manager', tag: 'PASSIVE', explanation_tr: '"be" eksik: must be signed.' },
        ],
      },
      {
        id: 'q_pas2_7', mode: 'order', prompt_tr: 'Arabam çalındı.', answer_en: 'My car has been stolen',
        accepted: ['My car was stolen'],
        words: ['My', 'car', 'has', 'been', 'stolen', 'stole', 'is'],
        error_variants: [
          { text: 'My car has been stole', tag: 'PASSIVE', explanation_tr: '"been" den sonra V3: stolen.' },
          { text: 'My car has stolen', tag: 'PASSIVE', explanation_tr: '"been" eksik; bu haliyle "arabam (bir şey) çaldı" demek olur: has been stolen.' },
        ],
      },
      {
        id: 'q_pas2_8', mode: 'free', prompt_tr: 'Yeni hastane gelecek yıl açılacak.', answer_en: 'The new hospital will be opened next year',
        accepted: ['The new hospital is going to be opened next year', 'The new hospital will open next year', 'The new hospital is going to open next year'],
        error_variants: [
          { text: 'The new hospital will opened next year', tag: 'PASSIVE', explanation_tr: '"be" eksik: will be opened.' },
          { text: 'The new hospital will been opened next year', tag: 'PASSIVE', explanation_tr: '"will" dan sonra "be": will be opened.' },
        ],
      },
      {
        id: 'q_pas2_9', mode: 'order', prompt_tr: 'Pencereler her gün temizlenmeli.', answer_en: 'The windows should be cleaned every day',
        accepted: ['The windows must be cleaned every day'],
        words: ['The', 'windows', 'should', 'be', 'cleaned', 'every', 'day', 'clean'],
        error_variants: [
          { text: 'The windows should cleaned every day', tag: 'PASSIVE', explanation_tr: '"be" eksik: should be cleaned.' },
          { text: 'The windows should clean every day', tag: 'PASSIVE', explanation_tr: 'Pencereler temizlenir, temizlemez: edilgen should be cleaned.' },
        ],
      },
      {
        id: 'q_pas2_10', mode: 'free', prompt_tr: 'Bütün biletler satıldı.', answer_en: 'All the tickets have been sold',
        accepted: ['All tickets have been sold', 'All the tickets were sold', 'All tickets were sold', 'All of the tickets have been sold', 'All of the tickets were sold', 'All the tickets have been sold out', 'All tickets have been sold out', 'The tickets have all been sold'],
        error_variants: [
          { text: 'All the tickets has been sold', tag: 'SVAGR', explanation_tr: 'Çoğul özne ile "have": have been sold.' },
          { text: 'All the tickets have been sell', tag: 'PASSIVE', explanation_tr: '"been" den sonra V3: sold.' },
        ],
      },
      {
        id: 'q_pas2_11', mode: 'order', prompt_tr: 'E-posta müdür tarafından gönderildi.', answer_en: 'The email was sent by the manager',
        accepted: ['The email has been sent by the manager'],
        words: ['The', 'email', 'was', 'sent', 'by', 'the', 'manager', 'send'],
        error_variants: [
          { text: 'The email was send by the manager', tag: 'PASSIVE', explanation_tr: '"was" dan sonra V3: sent.' },
          { text: 'The email sent by the manager', tag: 'PASSIVE', explanation_tr: '"was" eksik: was sent.' },
        ],
      },
      {
        id: 'q_pas2_12', mode: 'free', prompt_tr: 'Bu ilaç çocuklara verilmemeli.', answer_en: "This medicine shouldn't be given to children",
        accepted: ['This medicine should not be given to children', "This medicine mustn't be given to children", 'This medicine must not be given to children', "This drug shouldn't be given to children", 'This drug should not be given to children', "This medication shouldn't be given to children", 'This medication should not be given to children'],
        error_variants: [
          { text: "This medicine shouldn't be give to children", tag: 'PASSIVE', explanation_tr: '"be" den sonra V3: given.' },
          { text: "This medicine shouldn't given to children", tag: 'PASSIVE', explanation_tr: "\"be\" eksik: shouldn't be given." },
        ],
      },
    ],
  },
  {
    id: 'l_wish_if_only',
    skillId: 'wish_if_only',
    title: 'wish / if only',
    title_tr: 'wish / if only — keşke yapıları',
    explanation_tr:
      'Şimdiki durumdan memnun olmadığımızı anlatmak için "wish + past simple" kullanılır: "I wish I had more time" (şu an zamanım yok, keşke olsaydı). Geçmişte yapmadığımız/yapamadığımız bir şeye pişmanlık için "wish + past perfect": "I wish I had studied harder" (çalışmadım, pişmanım). "if only" aynı yapıları kullanır, sadece daha güçlü bir duygu katar. Türkler genelde "wish" den sonra present tense bırakır: "I wish I have more time" ✗.',
    examples: [
      { en: 'I wish I had more free time.', tr: 'Keşke daha fazla boş zamanım olsa.' },
      { en: 'I wish I had studied harder at school.', tr: 'Keşke okulda daha çok çalışsaydım.' },
      { en: 'If only she were here now.', tr: 'Keşke o şimdi burada olsaydı.' },
    ],
    words: [
      { en: 'regret', tr: 'pişmanlık duymak', example: 'I regret my decision.', example_tr: 'Kararıma pişmanım.' },
      { en: 'afford', tr: 'gücü yetmek', example: 'I wish I could afford a new car.', example_tr: 'Keşke yeni bir araba alacak param olsa.' },
      { en: 'patient', tr: 'sabırlı', example: 'I wish I were more patient.', example_tr: 'Keşke daha sabırlı olsam.' },
      { en: 'fluent', tr: 'akıcı (dil)', example: 'I wish I spoke English fluently.', example_tr: 'Keşke İngilizceyi akıcı konuşabilsem.' },
      { en: 'apologize', tr: 'özür dilemek', example: 'I wish I had apologized sooner.', example_tr: 'Keşke daha önce özür dileseydim.' },
    ],
    exercises: [
      { type: 'gap', sentence: 'I wish I ___ more time.', options: ['have', 'had', 'has'], answer: 1 },
      { type: 'gap', sentence: 'I wish I ___ studied harder.', options: ['have', 'had', 'has'], answer: 1, explanation_tr: 'Geçmiş pişmanlık: wish + had + V3.' },
      { type: 'mc', prompt: 'Hangisi doğru?', options: ['I wish I have a car.', 'I wish I had a car.', 'I wish I has a car.'], answer: 1 },
      { type: 'gap', sentence: 'If only she ___ here now.', options: ['is', 'were', 'be'], answer: 1, explanation_tr: '"wish/if only" ile "were" herkes için tercih edilir.' },
      { type: 'match', pairs: [['şimdiki istek', 'wish + past simple'], ['geçmiş pişmanlık', 'wish + past perfect']] },
      { type: 'order', prompt_tr: 'Keşke daha sabırlı olsam.', words: ['I', 'wish', 'I', 'were', 'more', 'patient', 'am'], answer: 'I wish I were more patient' },
      { type: 'gap', sentence: 'I wish I ___ speak French.', options: ['could', 'can', 'will'], answer: 0, explanation_tr: '"wish" ten sonra can → could.' },
      { type: 'mc', prompt: '"Keşke dün gece erken yatsaydım" nasıl denir?', options: ['I wish I went to bed early last night.', 'I wish I had gone to bed early last night.', 'I wish I have gone to bed early last night.'], answer: 1, explanation_tr: 'Geçmiş pişmanlık: wish + had + V3.' },
      { type: 'match', pairs: [['I wish I knew', 'Keşke bilsem'], ['I wish I had known', 'Keşke bilseydim'], ['If only I could', 'Keşke yapabilsem'], ['I wish I were taller', 'Keşke daha uzun olsam']] },
      { type: 'order', prompt_tr: 'Keşke daha fazla arkadaşım olsa.', words: ['I', 'wish', 'I', 'had', 'more', 'friends', 'have'], answer: 'I wish I had more friends' },
    ],
    quiz: [
      {
        id: 'q_wish_1', mode: 'order', prompt_tr: 'Keşke daha fazla param olsa.', answer_en: 'I wish I had more money',
        words: ['I', 'wish', 'I', 'had', 'more', 'money', 'have'],
        error_variants: [
          { text: 'I wish I have more money', tag: 'WISH', explanation_tr: '"wish" den sonra past simple: had more money.' },
          { text: 'I wish I had more moneys', tag: 'PLURAL', explanation_tr: '"money" sayılamaz, çoğul almaz.' },
        ],
      },
      {
        id: 'q_wish_2', mode: 'free', prompt_tr: 'Keşke okulda daha çok çalışsaydım.', answer_en: 'I wish I had studied harder at school', accepted: ['If only I had studied harder at school', 'I wish I had studied more at school'],
        error_variants: [
          { text: 'I wish I studied harder at school', tag: 'WISH', explanation_tr: 'Geçmiş pişmanlık: wish + past perfect: had studied.' },
          { text: 'I wish I have studied harder at school', tag: 'WISH', explanation_tr: '"have" değil "had": had studied.' },
        ],
      },
      {
        id: 'q_wish_3', mode: 'order', prompt_tr: 'Keşke o şimdi burada olsaydı (kadın).', answer_en: 'If only she were here now',
        words: ['If', 'only', 'she', 'were', 'here', 'now', 'her'],
        error_variants: [
          { text: 'If only her were here now', tag: 'OBJPRON', explanation_tr: 'Özne zamiri gerekli: she, not her.' },
          { text: 'If only she were here now is', tag: 'WORD_ORDER', explanation_tr: 'Fazladan "is" var: If only she were here now.' },
        ],
      },
      {
        id: 'q_wish_4', mode: 'free', prompt_tr: 'Keşke yeni bir araba alacak param olsa.', answer_en: 'I wish I could afford a new car', accepted: ['If only I could afford a new car', 'I wish I had enough money to buy a new car', 'I wish I had money to buy a new car'],
        error_variants: [
          { text: 'I wish I can afford a new car', tag: 'WISH', explanation_tr: '"wish" den sonra geçmiş modal: could.' },
          { text: 'I wish I could afford to a new car', tag: 'WISH', explanation_tr: '"afford" dan sonra doğrudan nesne gelir, "to" gerekmez: afford a new car.' },
        ],
      },
      {
        id: 'q_wish_5', mode: 'order', prompt_tr: 'Keşke daha önce özür dileseydim.', answer_en: 'I wish I had apologized sooner',
        words: ['I', 'wish', 'I', 'had', 'apologized', 'sooner', 'apologize'],
        error_variants: [
          { text: 'I wish I apologized sooner', tag: 'WISH', explanation_tr: 'Geçmiş pişmanlık: had apologized.' },
          { text: 'I wish I had apologize sooner', tag: 'PAST', explanation_tr: '"had" dan sonra V3: apologized.' },
        ],
      },
      {
        id: 'q_wish_6', mode: 'free', prompt_tr: 'Keşke İngilizceyi akıcı konuşabilsem.', answer_en: 'I wish I could speak English fluently',
        accepted: ['If only I could speak English fluently', 'I wish I spoke English fluently', 'If only I spoke English fluently', 'I wish I could speak fluent English', 'If only I could speak fluent English', 'I wish I spoke fluent English'],
        error_variants: [
          { text: 'I wish I can speak English fluently', tag: 'WISH', explanation_tr: '"wish" ten sonra can → could.' },
          { text: 'I wish I could spoke English fluently', tag: 'CAN', explanation_tr: '"could" dan sonra fiil yalın: could speak.' },
        ],
      },
      {
        id: 'q_wish_7', mode: 'order', prompt_tr: 'Keşke burada olsan.', answer_en: 'I wish you were here',
        accepted: ['If only you were here'],
        words: ['I', 'wish', 'you', 'were', 'here', 'are'],
        error_variants: [
          { text: 'I wish you are here', tag: 'WISH', explanation_tr: '"wish" ten sonra geçmiş biçim: were.' },
          { text: 'I wish you here', tag: 'TOBE', explanation_tr: '"were" eksik: you were here.' },
        ],
      },
      {
        id: 'q_wish_8', mode: 'free', prompt_tr: 'Keşke o filmi izlemeseydim.', answer_en: "I wish I hadn't watched that film",
        accepted: ['I wish I had not watched that film', "I wish I hadn't watched that movie", 'I wish I had not watched that movie', "If only I hadn't watched that film", "If only I hadn't watched that movie", 'If only I had not watched that film', 'If only I had not watched that movie', "I wish I hadn't seen that film", "I wish I hadn't seen that movie", 'I wish I had not seen that film', 'I wish I had not seen that movie'],
        error_variants: [
          { text: "I wish I didn't watch that film", tag: 'WISH', explanation_tr: "Geçmiş pişmanlık: wish + past perfect: hadn't watched." },
          { text: "I wish I haven't watched that film", tag: 'WISH', explanation_tr: "\"haven't\" değil \"hadn't\": hadn't watched." },
        ],
      },
      {
        id: 'q_wish_9', mode: 'order', prompt_tr: 'Keşke daha uzun boylu olsam.', answer_en: 'I wish I were taller',
        accepted: ['I wish I was taller', 'If only I were taller'],
        words: ['I', 'wish', 'I', 'were', 'taller', 'am', 'more'],
        error_variants: [
          { text: 'I wish I am taller', tag: 'WISH', explanation_tr: '"wish" ten sonra geçmiş biçim: were.' },
          { text: 'I wish I were more taller', tag: 'COMP', explanation_tr: '"taller" zaten karşılaştırma; "more" eklenmez.' },
        ],
      },
      {
        id: 'q_wish_10', mode: 'free', prompt_tr: 'Keşke anahtarlarımı kaybetmeseydim.', answer_en: "I wish I hadn't lost my keys",
        accepted: ['I wish I had not lost my keys', "If only I hadn't lost my keys", 'If only I had not lost my keys'],
        error_variants: [
          { text: "I wish I didn't lose my keys", tag: 'WISH', explanation_tr: "Geçmiş pişmanlık: wish + past perfect: hadn't lost." },
          { text: "I wish I hadn't lose my keys", tag: 'PAST', explanation_tr: '"had" dan sonra V3: lost.' },
        ],
      },
      {
        id: 'q_wish_11', mode: 'order', prompt_tr: 'Keşke onun (kadının) numarasını bilsem.', answer_en: 'I wish I knew her number',
        accepted: ['If only I knew her number'],
        words: ['I', 'wish', 'I', 'knew', 'her', 'number', 'know', 'she'],
        error_variants: [
          { text: 'I wish I know her number', tag: 'WISH', explanation_tr: '"wish" ten sonra past simple: knew.' },
          { text: 'I wish I knew she number', tag: 'POSS', explanation_tr: '"onun" (kadın) = her.' },
        ],
      },
      {
        id: 'q_wish_12', mode: 'free', prompt_tr: 'Keşke o işi kabul etseydim.', answer_en: 'I wish I had accepted that job',
        accepted: ['I wish I had taken that job', "I wish I'd accepted that job", "I wish I'd taken that job", 'If only I had accepted that job', 'If only I had taken that job', "If only I'd accepted that job", "If only I'd taken that job", 'I wish I had accepted the job', 'I wish I had taken the job'],
        error_variants: [
          { text: 'I wish I accepted that job', tag: 'WISH', explanation_tr: 'Geçmiş pişmanlık: wish + had + V3: had accepted.' },
          { text: 'I wish I had accept that job', tag: 'PAST', explanation_tr: '"had" dan sonra V3: accepted.' },
        ],
      },
    ],
  },
  {
    id: 'l_linking_words',
    skillId: 'linking_words',
    title: 'Linking words: although, however, despite',
    title_tr: 'although / however / despite',
    explanation_tr:
      'Zıtlık bildiren bağlaçlar farklı şekillerde kullanılır. "Although/though/even though" bir cümleyi bağlar: "Although it was raining, we went out." "Despite/in spite of" ise bir isim ya da -ing alır, cümle almaz: "Despite the rain, we went out." / "Despite being tired, we went out." "However" ise genelde ayrı bir cümlenin başında, virgülle kullanılır: "It was raining. However, we went out." En sık hata: despite\'tan sonra doğrudan cümle (özne + fiil) getirmek: "Despite it was raining" ✗.',
    examples: [
      { en: 'Although it was raining, we went for a walk.', tr: 'Yağmur yağmasına rağmen yürüyüşe çıktık.' },
      { en: 'Despite the traffic, we arrived on time.', tr: 'Trafiğe rağmen zamanında vardık.' },
      { en: 'He failed the exam. However, he stayed positive.', tr: 'Sınavı geçemedi. Yine de pozitif kaldı.' },
    ],
    words: [
      { en: 'although', tr: 'rağmen, -e karşın (cümle ile)', example: 'Although he is young, he is very wise.', example_tr: 'Genç olmasına rağmen çok bilge.' },
      { en: 'despite', tr: 'rağmen (isim/-ing ile)', example: 'Despite his age, he runs every day.', example_tr: 'Yaşına rağmen her gün koşuyor.' },
      { en: 'however', tr: 'yine de, ancak', example: 'The plan was good. However, it failed.', example_tr: 'Plan iyiydi. Ancak başarısız oldu.' },
      { en: 'in spite of', tr: 'rağmen (isim/-ing ile)', example: 'In spite of the cost, they bought the house.', example_tr: 'Maliyete rağmen evi aldılar.' },
      { en: 'even though', tr: 'her ne kadar (cümle ile)', example: 'Even though she was tired, she finished the race.', example_tr: 'Yorgun olmasına rağmen yarışı bitirdi.' },
    ],
    exercises: [
      { type: 'gap', sentence: '___ the rain, we went out.', options: ['Although', 'Despite', 'However'], answer: 1 },
      { type: 'gap', sentence: '___ it was raining, we went out.', options: ['Although', 'Despite', 'In spite of'], answer: 0 },
      { type: 'mc', prompt: 'Hangisinden sonra isim/-ing gelir?', options: ['although', 'despite', 'even though'], answer: 1 },
      { type: 'gap', sentence: 'He is rich. ___, he is not happy.', options: ['Although', 'However', 'Despite'], answer: 1 },
      { type: 'match', pairs: [['although', '+ cümle'], ['despite', '+ isim/-ing'], ['however', 'ayrı cümle başı']] },
      { type: 'order', prompt_tr: 'Trafiğe rağmen zamanında vardık.', words: ['Despite', 'the', 'traffic', 'we', 'arrived', 'on', 'time', 'although'], answer: 'Despite the traffic we arrived on time' },
      { type: 'gap', sentence: '___ being tired, she finished the race.', options: ['Despite', 'Although', 'However'], answer: 0, explanation_tr: '-ing ile despite: Despite being tired.' },
      { type: 'mc', prompt: 'Hangisi doğru?', options: ['Even though it was cold, we swam.', 'Despite it was cold, we swam.', 'However it was cold, we swam.'], answer: 0 },
      { type: 'match', pairs: [['although', '-e rağmen (cümleyle)'], ['in spite of', '-e rağmen (isimle)'], ['however', 'ancak, yine de'], ['because', 'çünkü']] },
      { type: 'order', prompt_tr: 'Hasta olmasına rağmen işe gitti (kadın).', words: ['Although', 'she', 'was', 'ill', 'she', 'went', 'to', 'work', 'despite'], answer: 'Although she was ill she went to work' },
    ],
    quiz: [
      {
        id: 'q_link_1', mode: 'order', prompt_tr: 'Yağmur yağmasına rağmen yürüyüşe çıktık.', answer_en: 'Although it was raining we went for a walk', accepted: ['We went for a walk although it was raining'],
        words: ['Although', 'it', 'was', 'raining', 'we', 'went', 'for', 'a', 'walk', 'despite'],
        error_variants: [
          { text: 'Despite it was raining we went for a walk', tag: 'LINK', explanation_tr: '"despite" dan sonra cümle gelmez; cümle için "although".' },
          { text: 'Although it raining we went for a walk', tag: 'LINK', explanation_tr: '"was" eksik: it was raining.' },
        ],
      },
      {
        id: 'q_link_2', mode: 'free', prompt_tr: 'Maliyete rağmen evi aldılar.', answer_en: 'In spite of the cost they bought the house', accepted: ['Despite the cost they bought the house', 'They bought the house in spite of the cost', 'They bought the house despite the cost'],
        error_variants: [
          { text: 'In spite of the cost was high they bought the house', tag: 'LINK', explanation_tr: '"in spite of" dan sonra isim gelir, cümle değil.' },
          { text: 'Although of the cost they bought the house', tag: 'LINK', explanation_tr: '"although" dan sonra "of" gelmez; isim için "despite the cost" kullanılır.' },
        ],
      },
      {
        id: 'q_link_3', mode: 'order', prompt_tr: 'Yaşına rağmen her gün koşuyor (erkek).', answer_en: 'Despite his age he runs every day', accepted: ['He runs every day despite his age'],
        words: ['Despite', 'his', 'age', 'he', 'runs', 'every', 'day', 'although'],
        error_variants: [
          { text: 'Although his age he runs every day', tag: 'LINK', explanation_tr: '"although" dan sonra isim değil cümle gelir; isim için "despite".' },
          { text: 'Despite his age he run every day', tag: 'SVAGR', explanation_tr: 'he ile -s: runs.' },
        ],
      },
      {
        id: 'q_link_4', mode: 'free', prompt_tr: 'Plan iyiydi. Ancak başarısız oldu.', answer_en: 'The plan was good. However, it failed', accepted: ['The plan was good but it failed'],
        error_variants: [
          { text: 'The plan was good. Despite, it failed', tag: 'LINK', explanation_tr: 'Ayrı cümle başında "however" kullanılır, "despite" değil.' },
          { text: 'The plan was good. However it fail', tag: 'PAST', explanation_tr: 'Geçmiş zaman: failed, not fail.' },
        ],
      },
      {
        id: 'q_link_5', mode: 'order', prompt_tr: 'Genç olmasına rağmen çok bilge (erkek).', answer_en: 'Although he is young he is very wise', accepted: ['He is very wise although he is young'],
        words: ['Although', 'he', 'is', 'young', 'he', 'is', 'very', 'wise', 'despite'],
        error_variants: [
          { text: 'Despite he is young he is very wise', tag: 'LINK', explanation_tr: '"despite" dan sonra cümle gelmez; cümle için "although".' },
          { text: 'Although he young he is very wise', tag: 'TOBE', explanation_tr: '"is" eksik: he is young.' },
        ],
      },
      {
        id: 'q_link_6', mode: 'free', prompt_tr: 'Gürültüye rağmen uyudum.', answer_en: 'Despite the noise I slept',
        accepted: ['In spite of the noise I slept', 'Despite the noise I fell asleep', 'In spite of the noise I fell asleep', 'I slept despite the noise', 'I slept in spite of the noise', 'I fell asleep despite the noise', 'I fell asleep in spite of the noise', 'Although it was noisy I slept', 'Although it was noisy I fell asleep', 'Even though it was noisy I slept', 'Even though it was noisy I fell asleep'],
        error_variants: [
          { text: 'Although the noise I slept', tag: 'LINK', explanation_tr: '"although" isim değil cümle alır; isim için despite: Despite the noise.' },
          { text: 'Despite of the noise I slept', tag: 'LINK', explanation_tr: '"despite of" diye bir yapı yok: despite ya da in spite of.' },
        ],
      },
      {
        id: 'q_link_7', mode: 'order', prompt_tr: 'Zengin. Ancak mutlu değil (erkek).', answer_en: 'He is rich. However, he is not happy',
        accepted: ["He is rich. However, he isn't happy", "He's rich. However, he isn't happy", "He's rich. However, he is not happy", 'He is rich but he is not happy'],
        words: ['He', 'is', 'rich', 'However', 'he', 'is', 'not', 'happy', 'Despite'],
        error_variants: [
          { text: 'He is rich. Despite, he is not happy', tag: 'LINK', explanation_tr: 'Yeni cümlenin başında "however" kullanılır; despite isim/-ing ister.' },
          { text: 'He is rich. However, he not happy', tag: 'TOBE', explanation_tr: '"is" eksik: he is not happy.' },
        ],
      },
      {
        id: 'q_link_8', mode: 'free', prompt_tr: 'Çok çalışmasına rağmen sınavı geçemedi (erkek).', answer_en: 'Although he studied hard he failed the exam',
        accepted: ['Even though he studied hard he failed the exam', 'Though he studied hard he failed the exam', 'Despite studying hard he failed the exam', 'In spite of studying hard he failed the exam', 'He failed the exam although he studied hard', 'He failed the exam even though he studied hard', 'He failed the exam despite studying hard', 'He failed the exam in spite of studying hard', "Although he studied hard he didn't pass the exam", "Even though he studied hard he didn't pass the exam", "Despite studying hard he didn't pass the exam", 'Although he studied a lot he failed the exam', 'Although he had studied hard he failed the exam'],
        error_variants: [
          { text: 'Despite he studied hard he failed the exam', tag: 'LINK', explanation_tr: '"despite" tan sonra cümle gelmez: Although he studied ya da Despite studying.' },
          { text: 'Although he studied hard but he failed the exam', tag: 'LINK', explanation_tr: '"although" ile "but" birlikte kullanılmaz; birini seç.' },
        ],
      },
      {
        id: 'q_link_9', mode: 'order', prompt_tr: 'Pahalı olmasına rağmen o arabayı aldık.', answer_en: 'Although it was expensive we bought that car',
        accepted: ['We bought that car although it was expensive'],
        words: ['Although', 'it', 'was', 'expensive', 'we', 'bought', 'that', 'car', 'despite', 'but'],
        error_variants: [
          { text: 'Although it was expensive but we bought that car', tag: 'LINK', explanation_tr: '"although" ile "but" birlikte kullanılmaz.' },
          { text: 'Despite it was expensive we bought that car', tag: 'LINK', explanation_tr: '"despite" tan sonra cümle gelmez; cümle için although.' },
        ],
      },
      {
        id: 'q_link_10', mode: 'free', prompt_tr: 'Yağmura rağmen maç devam etti.', answer_en: 'Despite the rain the match continued',
        accepted: ['In spite of the rain the match continued', 'The match continued despite the rain', 'The match continued in spite of the rain', 'Despite the rain the game continued', 'In spite of the rain the game continued', 'The game continued despite the rain', 'The game continued in spite of the rain', 'Although it was raining the match continued', 'Even though it was raining the match continued', 'Although it was raining the game continued', 'Even though it was raining the game continued', 'Despite the rain the match went on', 'The match went on despite the rain'],
        error_variants: [
          { text: 'Although the rain the match continued', tag: 'LINK', explanation_tr: '"although" cümle alır; isim için despite: Despite the rain.' },
          { text: 'Despite of the rain the match continued', tag: 'LINK', explanation_tr: '"despite of" diye bir yapı yok: despite ya da in spite of.' },
        ],
      },
      {
        id: 'q_link_11', mode: 'order', prompt_tr: 'Yorgun olmasına rağmen çalışmaya devam etti (erkek).', answer_en: 'Despite being tired he kept working',
        accepted: ['He kept working despite being tired'],
        words: ['Despite', 'being', 'tired', 'he', 'kept', 'working', 'was', 'work'],
        error_variants: [
          { text: 'Despite he was tired he kept working', tag: 'LINK', explanation_tr: '"despite" tan sonra cümle gelmez: Despite being tired.' },
          { text: 'Despite being tired he kept work', tag: 'GERUND_INF', explanation_tr: '"keep" ten sonra -ing: kept working.' },
        ],
      },
      {
        id: 'q_link_12', mode: 'free', prompt_tr: 'Hava güzeldi. Yine de evde kaldık.', answer_en: 'The weather was nice. However, we stayed at home',
        accepted: ['The weather was nice. However, we stayed home', 'The weather was good. However, we stayed at home', 'The weather was good. However, we stayed home', 'The weather was beautiful. However, we stayed at home', 'The weather was beautiful. However, we stayed home', 'The weather was nice but we stayed at home', 'The weather was nice but we stayed home', 'The weather was nice. Still, we stayed at home', 'The weather was nice. Still, we stayed home', 'The weather was nice. Nevertheless, we stayed at home', 'Although the weather was nice we stayed at home', 'Although the weather was nice we stayed home'],
        error_variants: [
          { text: 'The weather was nice. Despite, we stayed at home', tag: 'LINK', explanation_tr: 'Yeni cümlenin başında "however" kullanılır; despite isim/-ing ister.' },
          { text: 'The weather was nice. Although, we stayed at home', tag: 'LINK', explanation_tr: '"although" tek başına cümle başında virgülle kullanılmaz; however kullan.' },
        ],
      },
    ],
  },
  {
    id: 'l_modals_perfect',
    skillId: 'modals_perfect',
    title: 'should have / could have / might have',
    title_tr: 'should have / could have / might have — geçmişe yönelik modal',
    explanation_tr:
      'Geçmişte yapılmayan ama yapılması gereken bir şey için "should have + V3" kullanılır ve genelde pişmanlık anlamı taşır: "You should have called me" (aramalıydın ama aramadın). Geçmişte mümkün olup yapılmayan bir şey için "could have + V3": "I could have helped you" (yardım edebilirdim ama etmedim). Geçmiş hakkında belirsiz bir tahmin için "might have + V3": "She might have forgotten" (belki unutmuştur). Türkler "have" yi atlayıp doğrudan V3 ya da V2 kullanma eğilimindedir: "should called" ✗, "should have call" ✗.',
    examples: [
      { en: 'You should have told me earlier.', tr: 'Bana daha önce söylemeliydin.' },
      { en: 'I could have helped if you had asked.', tr: 'Sorsaydın yardım edebilirdim.' },
      { en: 'She might have missed the bus.', tr: 'Belki otobüsü kaçırmıştır.' },
    ],
    words: [
      { en: 'warn', tr: 'uyarmak', example: 'You should have warned me.', example_tr: 'Beni uyarmalıydın.' },
      { en: 'forget', tr: 'unutmak', example: 'She might have forgotten the meeting.', example_tr: 'Belki toplantıyı unutmuştur.' },
      { en: 'ignore', tr: 'görmezden gelmek', example: "He shouldn't have ignored the warning.", example_tr: 'Uyarıyı görmezden gelmemeliydi.' },
      { en: 'ask', tr: 'sormak', example: 'I could have asked for help.', example_tr: 'Yardım isteyebilirdim.' },
      { en: 'miss', tr: 'kaçırmak', example: 'They might have missed the train.', example_tr: 'Belki treni kaçırmışlardır.' },
    ],
    exercises: [
      { type: 'gap', sentence: 'You should ___ told me.', options: ['have', 'has', 'had'], answer: 0 },
      { type: 'gap', sentence: 'I could ___ helped you.', options: ['have', 'has', 'to'], answer: 0 },
      { type: 'mc', prompt: 'Hangisi "belki yapmıştır" anlamı taşır?', options: ['should have', 'might have', 'could have'], answer: 1 },
      { type: 'gap', sentence: "He shouldn't ___ ignored the warning.", options: ['have', 'has', 'had'], answer: 0 },
      { type: 'match', pairs: [['keşke yapsaydım', 'should have'], ['yapabilirdim ama etmedim', 'could have'], ['belki yapmıştır', 'might have']] },
      { type: 'order', prompt_tr: 'Bana daha önce söylemeliydin.', words: ['You', 'should', 'have', 'told', 'me', 'earlier', 'tell'], answer: 'You should have told me earlier' },
      { type: 'gap', sentence: 'I failed the exam. I ___ have studied more.', options: ['should', 'might', 'must'], answer: 0, explanation_tr: 'Geçmişte yapılması gereken: should have.' },
      { type: 'mc', prompt: '"Sana yardım edebilirdim (ama etmedim)" nasıl denir?', options: ['I could have helped you.', 'I should have helped you.', 'I might help you.'], answer: 0 },
      { type: 'match', pairs: [['You should have come', 'Gelmeliydin'], ['You could have come', 'Gelebilirdin'], ['She might have left', 'Belki gitmiştir'], ["You shouldn't have come", 'Gelmemeliydin']] },
      { type: 'order', prompt_tr: 'Daha dikkatli olmalıydık.', words: ['We', 'should', 'have', 'been', 'more', 'careful', 'be', 'was'], answer: 'We should have been more careful' },
    ],
    quiz: [
      {
        id: 'q_pm_1', mode: 'order', prompt_tr: 'Beni uyarmalıydın.', answer_en: 'You should have warned me',
        words: ['You', 'should', 'have', 'warned', 'me', 'warn'],
        error_variants: [
          { text: 'You should warned me', tag: 'PERFMODAL', explanation_tr: '"have" eksik: should have warned.' },
          { text: 'You should have warn me', tag: 'PERFMODAL', explanation_tr: '"have" den sonra V3: warned.' },
        ],
      },
      {
        id: 'q_pm_2', mode: 'free', prompt_tr: 'Sorsaydın yardım edebilirdim.', answer_en: 'I could have helped if you had asked', accepted: ['I could have helped you if you had asked', 'If you had asked I could have helped', 'If you had asked I could have helped you'],
        error_variants: [
          { text: 'I could helped if you had asked', tag: 'PERFMODAL', explanation_tr: '"have" eksik: could have helped.' },
          { text: 'I could have helped if you asked', tag: 'COND3', explanation_tr: 'Geçmiş koşulda past perfect gerekir: had asked.' },
        ],
      },
      {
        id: 'q_pm_3', mode: 'order', prompt_tr: 'Belki toplantıyı unutmuştur (kadın).', answer_en: 'She might have forgotten the meeting',
        words: ['She', 'might', 'have', 'forgotten', 'the', 'meeting', 'forget'],
        error_variants: [
          { text: 'She might forgot the meeting', tag: 'PERFMODAL', explanation_tr: '"have" eksik: might have forgotten.' },
          { text: 'She might have forget the meeting', tag: 'PERFMODAL', explanation_tr: '"have" den sonra V3: forgotten.' },
        ],
      },
      {
        id: 'q_pm_4', mode: 'free', prompt_tr: 'Uyarıyı görmezden gelmemeliydi (erkek).', answer_en: "He shouldn't have ignored the warning", accepted: ['He should not have ignored the warning'],
        error_variants: [
          { text: "He shouldn't ignored the warning", tag: 'PERFMODAL', explanation_tr: '"have" eksik: shouldn\'t have ignored.' },
          { text: "He didn't should have ignored the warning", tag: 'MODAL', explanation_tr: "Modal'ler do/does ile olumsuz yapılmaz: shouldn't have." },
        ],
      },
      {
        id: 'q_pm_5', mode: 'order', prompt_tr: 'Belki treni kaçırmışlardır.', answer_en: 'They might have missed the train',
        words: ['They', 'might', 'have', 'missed', 'the', 'train', 'miss'],
        error_variants: [
          { text: 'They might missed the train', tag: 'PERFMODAL', explanation_tr: '"have" eksik: might have missed.' },
          { text: 'They might have miss the train', tag: 'PERFMODAL', explanation_tr: '"have" den sonra V3: missed.' },
        ],
      },
      {
        id: 'q_pm_6', mode: 'free', prompt_tr: 'Daha erken çıkmalıydım.', answer_en: 'I should have left earlier',
        accepted: ["I should've left earlier", 'I should have gone out earlier', "I should've gone out earlier", 'I should have left sooner', 'I should have set off earlier'],
        error_variants: [
          { text: 'I should left earlier', tag: 'PERFMODAL', explanation_tr: '"have" eksik: should have left.' },
          { text: 'I should have leave earlier', tag: 'PERFMODAL', explanation_tr: '"have" den sonra V3: left.' },
        ],
      },
      {
        id: 'q_pm_7', mode: 'order', prompt_tr: 'Bana yardım edebilirdin.', answer_en: 'You could have helped me',
        words: ['You', 'could', 'have', 'helped', 'me', 'help', 'I'],
        error_variants: [
          { text: 'You could helped me', tag: 'PERFMODAL', explanation_tr: '"have" eksik: could have helped.' },
          { text: 'You could have helped I', tag: 'OBJPRON', explanation_tr: 'Fiilden sonra nesne zamiri: me.' },
        ],
      },
      {
        id: 'q_pm_8', mode: 'free', prompt_tr: 'Belki anahtarlarını evde unutmuştur (erkek).', answer_en: 'He might have left his keys at home',
        accepted: ['He may have left his keys at home', 'He could have left his keys at home', 'He might have forgotten his keys at home', 'He may have forgotten his keys at home', 'He could have forgotten his keys at home', 'Maybe he left his keys at home', 'Perhaps he left his keys at home', 'Maybe he forgot his keys at home', 'Perhaps he forgot his keys at home'],
        error_variants: [
          { text: 'He might left his keys at home', tag: 'PERFMODAL', explanation_tr: '"have" eksik: might have left.' },
          { text: 'He might have leave his keys at home', tag: 'PERFMODAL', explanation_tr: '"have" den sonra V3: left.' },
        ],
      },
      {
        id: 'q_pm_9', mode: 'order', prompt_tr: 'O kadar çok yememeliydin.', answer_en: "You shouldn't have eaten so much",
        accepted: ['You should not have eaten so much', "You shouldn't have eaten that much"],
        words: ['You', "shouldn't", 'have', 'eaten', 'so', 'much', 'ate', 'many'],
        error_variants: [
          { text: "You shouldn't have ate so much", tag: 'PERFMODAL', explanation_tr: '"have" den sonra V3: eaten.' },
          { text: "You shouldn't have eaten so many", tag: 'MUCH_MANY', explanation_tr: 'Miktar (yemek) için much: so much.' },
        ],
      },
      {
        id: 'q_pm_10', mode: 'free', prompt_tr: 'Kazayı önleyebilirdik.', answer_en: 'We could have avoided the accident',
        accepted: ['We could have prevented the accident', "We could've avoided the accident", "We could've prevented the accident"],
        error_variants: [
          { text: 'We could avoided the accident', tag: 'PERFMODAL', explanation_tr: '"have" eksik: could have avoided.' },
          { text: 'We could have avoid the accident', tag: 'PERFMODAL', explanation_tr: '"have" den sonra V3: avoided.' },
        ],
      },
      {
        id: 'q_pm_11', mode: 'order', prompt_tr: 'Belki kaybolmuştur (kadın).', answer_en: 'She might have got lost',
        accepted: ['She may have got lost', 'She might have gotten lost', 'She may have gotten lost', 'She could have got lost'],
        words: ['She', 'might', 'have', 'got', 'lost', 'get', 'is'],
        error_variants: [
          { text: 'She might have get lost', tag: 'PERFMODAL', explanation_tr: '"have" den sonra V3: got.' },
          { text: 'She might got lost', tag: 'PERFMODAL', explanation_tr: '"have" eksik: might have got lost.' },
        ],
      },
      {
        id: 'q_pm_12', mode: 'free', prompt_tr: 'Bana yalan söylememeliydin.', answer_en: "You shouldn't have lied to me",
        accepted: ['You should not have lied to me'],
        error_variants: [
          { text: "You shouldn't lied to me", tag: 'PERFMODAL', explanation_tr: "\"have\" eksik: shouldn't have lied." },
          { text: "You shouldn't have lie to me", tag: 'PERFMODAL', explanation_tr: '"have" den sonra V3: lied.' },
        ],
      },
    ],
  },
]
