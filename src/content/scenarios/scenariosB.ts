import type { Scenario } from '../types'

export const SCENARIOS_B: Scenario[] = [
  {
    id: 's_work_b1',
    goal: 'work',
    cefr: 'B1',
    title_tr: 'İş görüşmesi',
    setting_tr: 'Bir şirkette satış/pazarlama pozisyonu için yüz yüze görüşmedesin. Karşında İK müdürü Ms. Carter var.',
    npc_name: 'Ms. Carter',
    start: 'start',
    nodes: {
      start: {
        npc: 'Good morning. Thanks for coming in. Please, have a seat. How are you today?',
        npc_tr: 'Günaydın. Geldiğiniz için teşekkürler. Lütfen oturun. Bugün nasılsınız?',
        replies: [
          { en: "I'm fine, thank you. Thanks for inviting me.", tr: 'İyiyim, teşekkür ederim. Davetiniz için teşekkürler.', ok: true, next: 'about' },
          { en: "Very well, thanks. It's nice to meet you.", tr: 'Çok iyiyim, teşekkürler. Tanıştığımıza memnun oldum.', ok: true, next: 'about' },
          { en: "Fine. Let's start.", tr: 'İyi. Başlayalım.', ok: false, feedback_tr: 'Dil bilgisi doğru ama görüşmede fazla kuru ve aceleci duruyor. Kısa bir teşekkür ekle: "I\'m fine, thank you. Thanks for inviting me."', next: 'start' },
        ],
      },
      about: {
        npc: 'So, tell me a little about yourself.',
        npc_tr: 'Peki, bize biraz kendinizden bahseder misiniz?',
        replies: [
          { en: "I've worked as a sales assistant for three years, and I'm good at dealing with customers.", tr: 'Üç yıldır satış danışmanı olarak çalışıyorum ve müşterilerle ilgilenmekte iyiyim.', ok: true, next: 'exp' },
          { en: "I graduated from university last year, and since then I've been doing an internship in marketing.", tr: 'Geçen yıl üniversiteden mezun oldum ve o zamandan beri pazarlamada staj yapıyorum.', ok: true, next: 'intern' },
          { en: 'I am working as a sales assistant since three years.', tr: 'Üç yıldır satış danışmanı olarak çalışıyorum.', ok: false, feedback_tr: 'Geçmişte başlayıp hâlâ süren durum için present perfect gerekir; süre için "since" değil "for": "I have worked as a sales assistant for three years."', next: 'about' },
        ],
      },
      exp: {
        npc: 'That sounds useful. What did you learn in that job?',
        npc_tr: 'Faydalı görünüyor. O işte ne öğrendiniz?',
        replies: [
          { en: 'I learned how to stay calm when customers complained.', tr: 'Müşteriler şikâyet ettiğinde sakin kalmayı öğrendim.', ok: true, next: 'why' },
          { en: 'I have learned it last year how to stay calm.', tr: 'Geçen yıl sakin kalmayı öğrendim.', ok: false, feedback_tr: '"last year" gibi belirli bir geçmiş zaman varsa present perfect kullanılmaz, past simple gerekir: "I learned how to stay calm last year."', next: 'exp' },
          { en: 'I learned to deal with customers who they complain.', tr: 'Şikâyet eden müşterilerle başa çıkmayı öğrendim.', ok: false, feedback_tr: '"who" zaten özne görevinde; arkasına "they" eklenmez: "customers who complain".', next: 'exp' },
        ],
      },
      intern: {
        npc: 'And what have you done during your internship?',
        npc_tr: 'Peki stajınız boyunca neler yaptınız?',
        replies: [
          { en: "I've helped the team plan social media campaigns.", tr: 'Ekibin sosyal medya kampanyalarını planlamasına yardım ettim.', ok: true, next: 'why' },
          { en: "I've written reports and prepared presentations for clients.", tr: 'Raporlar yazdım ve müşteriler için sunumlar hazırladım.', ok: true, next: 'why' },
          { en: 'I did helped the team with campaigns.', tr: 'Ekibe kampanyalarda yardım ettim.', ok: false, feedback_tr: 'Olumlu cümlede "did" kullanılmaz ve fiil zaten geçmiş zamanda. Staj hâlâ sürdüğü için: "I\'ve helped the team with campaigns."', next: 'intern' },
        ],
      },
      why: {
        npc: 'Why do you want to work for our company?',
        npc_tr: 'Neden şirketimizde çalışmak istiyorsunuz?',
        replies: [
          { en: "Because I'm interested in your products and I'd like to develop my skills.", tr: 'Çünkü ürünlerinizle ilgileniyorum ve becerilerimi geliştirmek istiyorum.', ok: true, next: 'weak' },
          { en: "Because your salary is high. That's all.", tr: 'Çünkü maaşınız yüksek. Hepsi bu.', ok: false, feedback_tr: 'Dil bilgisi doğru ama görüşmede çok olumsuz bir izlenim bırakır. Şirkete ve gelişimine duyduğun ilgiyi anlat.', next: 'why' },
          { en: 'Because I am interesting in your products.', tr: 'Çünkü ürünlerinizle ilgileniyorum.', ok: false, feedback_tr: '"interesting" = ilginç (bir şeyin özelliği), "interested" = ilgilenen (kişinin hissi): "I am interested in your products."', next: 'why' },
        ],
      },
      weak: {
        npc: 'What would you say is your biggest weakness?',
        npc_tr: 'En büyük zayıf yönünüz nedir sizce?',
        replies: [
          { en: "Sometimes I spend too much time on details, but I'm learning to manage my time better.", tr: 'Bazen ayrıntılara fazla zaman harcıyorum ama zamanımı daha iyi yönetmeyi öğreniyorum.', ok: true, next: 'q' },
          { en: "I don't have any weaknesses. I'm perfect.", tr: 'Hiç zayıf yönüm yok. Mükemmelim.', ok: false, feedback_tr: 'Görüşmede kibirli ve samimiyetsiz görünür. Küçük bir zayıflık söyle ve onu nasıl geliştirdiğini anlat.', next: 'weak' },
          { en: 'Sometimes I spend too much time to details.', tr: 'Bazen ayrıntılara fazla zaman harcıyorum.', ok: false, feedback_tr: '"spend time" kalıbı "on" ile kullanılır: "spend too much time on details". Türkçedeki "-e" hâli seni "to"ya yönlendiriyor.', next: 'weak' },
        ],
      },
      q: {
        npc: 'Thank you. Do you have any questions for us?',
        npc_tr: 'Teşekkürler. Bize sormak istediğiniz bir şey var mı?',
        replies: [
          { en: 'Yes. Could you tell me what a typical day looks like in this role?', tr: 'Evet. Bu pozisyonda tipik bir günün nasıl geçtiğini anlatır mısınız?', ok: true, next: null },
          { en: 'When can I expect to hear from you?', tr: 'Sizden ne zaman haber bekleyebilirim?', ok: true, next: null },
          { en: 'Could you tell me what does a typical day look like?', tr: 'Tipik bir günün nasıl geçtiğini anlatır mısınız?', ok: false, feedback_tr: 'Dolaylı soruda soru sırası bozulur, "does" kullanılmaz: "Could you tell me what a typical day looks like?"', next: 'q' },
        ],
      },
    },
  },
  {
    id: 's_work_b2',
    goal: 'work',
    cefr: 'B2',
    title_tr: 'Müşteriyle gecikmeyi müzakere etmek',
    setting_tr: 'Şirketinin teslimatı bir hafta gecikti. Sinirli müşterin Mr. Lewis seni telefonla aradı; ilişkiyi koruyarak bir çözüm bulman gerekiyor.',
    npc_name: 'Mr. Lewis',
    start: 'start',
    nodes: {
      start: {
        npc: "I'll be honest with you — we were expecting the delivery last Friday. What's going on?",
        npc_tr: 'Açık konuşacağım: teslimatı geçen cuma bekliyorduk. Neler oluyor?',
        replies: [
          { en: "I completely understand your frustration, and I apologise. There's been a problem with one of our suppliers.", tr: 'Hayal kırıklığınızı çok iyi anlıyorum ve özür dilerim. Tedarikçilerimizden biriyle bir sorun yaşandı.', ok: true, next: 'when' },
          { en: "It's not our fault. The supplier is late.", tr: 'Bu bizim hatamız değil. Tedarikçi gecikti.', ok: false, feedback_tr: 'Suçu başkasına atmak müşteriyi daha çok kızdırır. Önce anlayış göster ve özür dile, sonra nedeni açıkla.', next: 'start' },
          { en: 'Sorry, we have had a problem last week with the supplier.', tr: 'Özür dileriz, geçen hafta tedarikçiyle bir sorun yaşadık.', ok: false, feedback_tr: '"last week" belirli bir geçmiş zaman; present perfect ile kullanılmaz: "we had a problem with the supplier last week".', next: 'start' },
        ],
      },
      when: {
        npc: "That's not really my problem, though. When can you deliver?",
        npc_tr: 'Ama bu pek benim sorunum değil. Ne zaman teslim edebilirsiniz?',
        replies: [
          { en: 'If everything goes to plan, we should be able to deliver by next Wednesday.', tr: 'Her şey plana göre giderse önümüzdeki çarşambaya kadar teslim edebiliriz.', ok: true, next: 'offer' },
          { en: "I'd rather not promise a date I can't keep, but I can confirm it by tomorrow morning.", tr: 'Tutamayacağım bir tarih vermek istemem ama yarın sabaha kadar kesinleştirebilirim.', ok: true, next: 'confirm' },
          { en: 'If everything will go well, we deliver on Wednesday.', tr: 'Her şey yolunda giderse çarşamba teslim ederiz.', ok: false, feedback_tr: '"if" cümlesinde "will" kullanılmaz, ana cümlede gelecek bildiren yapı gerekir: "If everything goes well, we will deliver on Wednesday."', next: 'when' },
        ],
      },
      confirm: {
        npc: "Tomorrow morning? We have a launch event on Thursday. That's cutting it very fine.",
        npc_tr: 'Yarın sabah mı? Perşembe günü lansmanımız var. Bu çok sıkışık olur.',
        replies: [
          { en: 'I appreciate that. Would it help if we sent part of the order earlier?', tr: 'Bunu anlıyorum. Siparişin bir kısmını daha erken göndersek işinize yarar mı?', ok: true, next: 'offer' },
          { en: 'Then you should change your launch event.', tr: 'O zaman lansmanınızı değiştirmelisiniz.', ok: false, feedback_tr: 'Sorunu müşteriye yüklemek kaba ve ilişkiye zarar verir. Kendi tarafında bir çözüm öner.', next: 'confirm' },
          { en: 'I appreciate that. Would it help if we would send part of the order earlier?', tr: 'Bunu anlıyorum. Siparişin bir kısmını daha erken göndersek işinize yarar mı?', ok: false, feedback_tr: '"if" cümlesinde "would" tekrarlanmaz; varsayımsal durumda past simple gelir: "Would it help if we sent part of the order earlier?"', next: 'confirm' },
        ],
      },
      offer: {
        npc: 'And what are you going to do to make up for this delay?',
        npc_tr: 'Peki bu gecikmeyi telafi etmek için ne yapacaksınız?',
        replies: [
          { en: "We'd be happy to cover the express shipping costs, and we can offer a five percent discount on this order.", tr: 'Hızlı kargo masraflarını memnuniyetle karşılarız ve bu siparişte yüzde beş indirim yapabiliriz.', ok: true, next: 'discount' },
          { en: 'Despite of the delay, the price must stay the same.', tr: 'Gecikmeye rağmen fiyat aynı kalmalı.', ok: false, feedback_tr: '"despite" yanına "of" almaz ("despite the delay" ya da "in spite of the delay"). Ayrıca bu cevap müşteriye hiçbir şey önermiyor.', next: 'offer' },
          { en: "We can't do anything. Those are the rules.", tr: 'Hiçbir şey yapamayız. Kurallar bu.', ok: false, feedback_tr: 'Müzakerede kapıyı kapatmak müşteriyi kaybettirir. Küçük de olsa somut bir telafi öner.', next: 'offer' },
        ],
      },
      discount: {
        npc: 'Five percent seems low, considering the trouble this has caused us.',
        npc_tr: 'Bunun bize yaşattığı sıkıntı düşünülürse yüzde beş az görünüyor.',
        replies: [
          { en: "I see your point. I'm not authorised to go above five percent, but I could speak to my manager this afternoon.", tr: 'Ne demek istediğinizi anlıyorum. Yüzde beşin üstüne çıkma yetkim yok ama bu öğleden sonra müdürümle konuşabilirim.', ok: true, next: 'manager' },
          { en: "That's fair. How about seven percent, provided the rest of the contract stays the same?", tr: 'Haklısınız. Sözleşmenin geri kalanı aynı kalmak şartıyla yüzde yediye ne dersiniz?', ok: true, next: 'close' },
          { en: 'Five percent is enough. Take it or leave it.', tr: 'Yüzde beş yeterli. İster kabul edin ister etmeyin.', ok: false, feedback_tr: '"Take it or leave it" (ya kabul et ya git) çok sert; zaten sinirli bir müşteriyle kullanılmaz. Anlayış göster ve bir ara yol öner.', next: 'discount' },
        ],
      },
      manager: {
        npc: 'All right, please do. But I need an answer today.',
        npc_tr: 'Tamam, lütfen konuşun. Ama bugün bir cevaba ihtiyacım var.',
        replies: [
          { en: "Absolutely. I'll get back to you by 5 p.m. at the latest.", tr: 'Elbette. En geç saat 5\'e kadar size dönüş yapacağım.', ok: true, next: 'close' },
          { en: "Absolutely. I'll get back you by 5 p.m.", tr: 'Elbette. Saat 5\'e kadar size dönüş yapacağım.', ok: false, feedback_tr: '"get back to someone" (birine dönüş yapmak) kalıbında "to" düşmez: "I\'ll get back to you by 5 p.m."', next: 'manager' },
          { en: "Absolutely. I'll turn you down by 5 p.m.", tr: 'Elbette. Saat 5\'e kadar sizi reddedeceğim.', ok: false, feedback_tr: '"turn someone down" = birini reddetmek! Kastettiğin "get back to you" (dönüş yapmak).', next: 'manager' },
        ],
      },
      close: {
        npc: "Fine. I just hope this doesn't happen again.",
        npc_tr: 'Peki. Umarım bu bir daha yaşanmaz.',
        replies: [
          { en: "It won't. We've already found a second supplier, so we'll be prepared next time.", tr: 'Yaşanmayacak. İkinci bir tedarikçi bulduk bile, bir dahaki sefere hazırlıklı olacağız.', ok: true, next: null },
          { en: "If we would have had a second supplier, this wouldn't have happened.", tr: 'İkinci bir tedarikçimiz olsaydı bu yaşanmazdı.', ok: false, feedback_tr: 'Üçüncü koşulda "if" cümlesinde "would have" kullanılmaz, past perfect gelir: "If we had had a second supplier, this wouldn\'t have happened." Ayrıca müşteri bir güvence bekliyor.', next: 'close' },
          { en: 'We already found a second supplier since last month.', tr: 'Geçen aydan beri ikinci bir tedarikçimiz var.', ok: false, feedback_tr: '"since" ile süregelen durum anlatılır ve present perfect gerekir: "We\'ve had a second supplier since last month." ya da "We\'ve already found a second supplier."', next: 'close' },
        ],
      },
    },
  },
  {
    id: 's_travel_b1',
    goal: 'travel',
    cefr: 'B1',
    title_tr: 'Havalimanında kayıp bavul',
    setting_tr: 'Londra\'ya indin ama bavulun bant üzerinde çıkmadı. Havayolunun kayıp bagaj ofisindesin.',
    npc_name: 'Airline agent',
    start: 'start',
    nodes: {
      start: {
        npc: 'Hello, how can I help you?',
        npc_tr: 'Merhaba, size nasıl yardımcı olabilirim?',
        replies: [
          { en: "Hi. My suitcase didn't arrive. I was on the flight from Istanbul.", tr: 'Merhaba. Bavulum gelmedi. İstanbul uçağındaydım.', ok: true, next: 'tag' },
          { en: "Hi. My suitcase hasn't arrived yesterday.", tr: 'Merhaba. Bavulum dün gelmedi.', ok: false, feedback_tr: '"yesterday" belirli bir geçmiş zaman; present perfect ile kullanılmaz: "My suitcase didn\'t arrive yesterday." Bugün indiysen sadece "My suitcase hasn\'t arrived."', next: 'start' },
          { en: 'Hi. I lost my suitcase. Find it.', tr: 'Merhaba. Bavulumu kaybettim. Bulun onu.', ok: false, feedback_tr: 'Emir kipiyle konuşmak kaba duyulur. Durumu açıkla ve kibarca yardım iste.', next: 'start' },
        ],
      },
      tag: {
        npc: "I'm sorry to hear that. Can I see your boarding pass and baggage tag, please?",
        npc_tr: 'Bunu duyduğuma üzüldüm. Biniş kartınızı ve bagaj etiketinizi görebilir miyim?',
        replies: [
          { en: 'Of course. Here you are.', tr: 'Tabii. Buyurun.', ok: true, next: 'describe' },
          { en: 'Of course. Here is.', tr: 'Tabii. Buyurun.', ok: false, feedback_tr: 'Bir şey uzatırken kalıp ifade "Here you are." ya da "Here it is." "Here is" tek başına eksik kalır.', next: 'tag' },
          { en: "I'm afraid I threw away it.", tr: 'Korkarım onu attım.', ok: false, feedback_tr: 'Phrasal verb\'de nesne zamir ise araya girer: "I threw it away." ("threw away it" yanlış)', next: 'tag' },
        ],
      },
      describe: {
        npc: 'Thank you. Can you describe your suitcase?',
        npc_tr: 'Teşekkürler. Bavulunuzu tarif edebilir misiniz?',
        replies: [
          { en: "It's a large black suitcase with a red ribbon on the handle.", tr: 'Sapında kırmızı kurdele olan büyük siyah bir bavul.', ok: true, next: 'contents' },
          { en: "It's a small blue one with wheels and my name on a label.", tr: 'Tekerlekli, küçük mavi bir bavul; üzerinde adımın yazdığı bir etiket var.', ok: true, next: 'contents' },
          { en: "It's a black large suitcase.", tr: 'Büyük siyah bir bavul.', ok: false, feedback_tr: 'Sıfat sırasında boyut renkten önce gelir: "a large black suitcase".', next: 'describe' },
        ],
      },
      contents: {
        npc: 'And is there anything valuable inside?',
        npc_tr: 'İçinde değerli bir şey var mı?',
        replies: [
          { en: 'Just clothes and a few books, but my medicine is in there too.', tr: 'Sadece kıyafetler ve birkaç kitap ama ilacım da içinde.', ok: true, next: 'medicine' },
          { en: 'No, nothing valuable. Mostly clothes.', tr: 'Hayır, değerli bir şey yok. Çoğunlukla kıyafet.', ok: true, next: 'address' },
          { en: 'There is many clothes and a camera.', tr: 'Bir sürü kıyafet ve bir fotoğraf makinesi var.', ok: false, feedback_tr: 'Çoğul isimle "there are" kullanılır: "There are a lot of clothes and a camera." ("many clothes" de olur ama "there is" ile değil.)', next: 'contents' },
        ],
      },
      medicine: {
        npc: "I see. If you need the medicine urgently, you can buy it and we'll refund you. Please keep the receipt.",
        npc_tr: 'Anlıyorum. İlaca acil ihtiyacınız varsa satın alabilirsiniz, parasını iade ederiz. Lütfen fişi saklayın.',
        replies: [
          { en: "Thank you, that's very helpful. I'll keep the receipt.", tr: 'Teşekkürler, çok yardımcı oldunuz. Fişi saklayacağım.', ok: true, next: 'address' },
          { en: 'Thank you. If I will buy it, will you pay?', tr: 'Teşekkürler. Satın alırsam siz mi ödeyeceksiniz?', ok: false, feedback_tr: '"if" cümlesinde "will" kullanılmaz: "If I buy it, will you pay me back?"', next: 'medicine' },
          { en: "Thanks. I'll keep on the receipt.", tr: 'Teşekkürler. Fişi saklayacağım.', ok: false, feedback_tr: '"keep on" = devam etmek. Saklamak için sadece "keep": "I\'ll keep the receipt."', next: 'medicine' },
        ],
      },
      address: {
        npc: "Where are you staying? We'll deliver the suitcase to you when it arrives.",
        npc_tr: 'Nerede kalıyorsunuz? Bavul gelince size teslim edeceğiz.',
        replies: [
          { en: "I'm staying at the Park Hotel until Sunday. Here's the address.", tr: 'Pazara kadar Park Hotel\'de kalıyorum. Adres bu.', ok: true, next: 'end' },
          { en: 'I stay in the Park Hotel since Friday.', tr: 'Cumadan beri Park Hotel\'de kalıyorum.', ok: false, feedback_tr: '"since" ile süregelen durum için present perfect gerekir; otel için genelde "at": "I\'ve been staying at the Park Hotel since Friday."', next: 'address' },
          { en: "I'm staying at the Park Hotel for two days ago.", tr: 'İki gündür Park Hotel\'de kalıyorum.', ok: false, feedback_tr: '"ago" geçmişte bir anı gösterir, süre bildirmez. "İki gündür" için: "I\'ve been staying at the Park Hotel for two days."', next: 'address' },
        ],
      },
      end: {
        npc: 'Most bags arrive within 24 hours. Is there anything else I can do for you?',
        npc_tr: 'Bavulların çoğu 24 saat içinde gelir. Sizin için yapabileceğim başka bir şey var mı?',
        replies: [
          { en: "No, that's everything. Thanks for your help.", tr: 'Hayır, hepsi bu. Yardımınız için teşekkürler.', ok: true, next: null },
          { en: 'Could you give me a reference number, please?', tr: 'Bana bir takip numarası verebilir misiniz lütfen?', ok: true, next: null },
          { en: "No, that's all. Thank you for your helps.", tr: 'Hayır, bu kadar. Yardımlarınız için teşekkürler.', ok: false, feedback_tr: '"help" sayılamayan bir isimdir, çoğul eki almaz: "Thank you for your help."', next: 'end' },
        ],
      },
    },
  },
  {
    id: 's_travel_b2',
    goal: 'travel',
    cefr: 'B2',
    title_tr: 'Kiralık araç anlaşmazlığı',
    setting_tr: 'Kiraladığın arabayı teslim ediyorsun. Görevli Daniel arka kapıda bir çizik olduğunu ve bunun için ücret alacaklarını söylüyor. Kibar ama kararlı olmalısın.',
    npc_name: 'Daniel',
    start: 'start',
    nodes: {
      start: {
        npc: "Welcome back. Let me just check the car... I'm afraid there's a scratch on the rear door that wasn't there before.",
        npc_tr: 'Tekrar hoş geldiniz. Arabaya bir bakayım... Maalesef arka kapıda daha önce olmayan bir çizik var.',
        replies: [
          { en: "I'm quite sure that scratch was already there when I picked the car up.", tr: 'O çiziğin arabayı aldığımda zaten orada olduğundan oldukça eminim.', ok: true, next: 'proof' },
          { en: "No, it wasn't me. You're lying.", tr: 'Hayır, ben yapmadım. Yalan söylüyorsunuz.', ok: false, feedback_tr: 'Karşı tarafı yalancılıkla suçlamak tartışmayı büyütür. Kibar ama net konuş: "I\'m quite sure it was already there."', next: 'start' },
          { en: "I'm sure that scratch has already been there when I picked up the car.", tr: 'O çiziğin arabayı aldığımda zaten orada olduğundan eminim.', ok: false, feedback_tr: '"when I picked up the car" geçmişte belirli bir an; present perfect ile kullanılmaz: "it was already there when I picked up the car."', next: 'start' },
        ],
      },
      proof: {
        npc: 'Our records show the car was in perfect condition. Do you have any evidence?',
        npc_tr: 'Kayıtlarımıza göre araba kusursuz durumdaydı. Elinizde bir kanıt var mı?',
        replies: [
          { en: 'Actually, I took photos of the car before I drove off. Would you like to see them?', tr: 'Aslında yola çıkmadan önce arabanın fotoğraflarını çektim. Görmek ister misiniz?', ok: true, next: 'photos' },
          { en: "I don't have photos, but I'm sure it was there — I only drove on the motorway.", tr: 'Fotoğrafım yok ama orada olduğundan eminim; sadece otoyolda sürdüm.', ok: true, next: 'nophoto' },
          { en: "I should have take photos, but I didn't.", tr: 'Fotoğraf çekmeliydim ama çekmedim.', ok: false, feedback_tr: '"should have" yapısından sonra fiilin üçüncü hâli gelir: "I should have taken photos."', next: 'proof' },
        ],
      },
      photos: {
        npc: "Hmm. The quality isn't great. It's hard to say whether that's the same mark.",
        npc_tr: 'Hmm. Kalitesi pek iyi değil. Aynı iz olup olmadığını söylemek zor.',
        replies: [
          { en: 'I understand, but if you zoom in, you can see it clearly on the rear door.', tr: 'Anlıyorum ama yakınlaştırırsanız arka kapıda açıkça görebilirsiniz.', ok: true, next: 'manager' },
          { en: 'Look again. Are you blind?', tr: 'Tekrar bakın. Kör müsünüz?', ok: false, feedback_tr: 'Hakaret içeriyor; haklı olsan bile davanı zayıflatır. Kibarca neye bakması gerektiğini göster.', next: 'photos' },
          { en: "Even the quality isn't great, you can still see it.", tr: 'Kalitesi iyi olmasa bile yine de görebilirsiniz.', ok: false, feedback_tr: '"even" tek başına bağlaç değildir; cümle bağlamak için "even though" ya da "although" gerekir: "Even though the quality isn\'t great, you can still see it."', next: 'photos' },
        ],
      },
      nophoto: {
        npc: "Without photos, I'm afraid we'll have to charge you 250 euros.",
        npc_tr: 'Fotoğraf olmadan maalesef sizden 250 avro almak zorundayız.',
        replies: [
          { en: "I'd like to dispute that. Could I speak to the manager, please?", tr: 'Buna itiraz etmek istiyorum. Müdürle görüşebilir miyim lütfen?', ok: true, next: 'manager' },
          { en: "That's too expensive. I won't pay. Goodbye.", tr: 'Bu çok pahalı. Ödemeyeceğim. Hoşça kalın.', ok: false, feedback_tr: 'Konuşmayı kesip gitmek sorunu çözmez, ücret kartından yine çekilebilir. Resmi olarak itiraz et.', next: 'nophoto' },
          { en: "Despite I have no photos, I didn't do it.", tr: 'Fotoğrafım olmasa da bunu ben yapmadım.', ok: false, feedback_tr: '"despite" arkasından tam cümle almaz; cümleyle "although" kullanılır: "Although I have no photos, I didn\'t do it." (ya da "Despite having no photos...")', next: 'nophoto' },
        ],
      },
      manager: {
        npc: "The manager isn't available right now. Could you put your complaint in writing?",
        npc_tr: 'Müdür şu anda müsait değil. Şikâyetinizi yazılı olarak iletebilir misiniz?',
        replies: [
          { en: "Certainly. I'd also like a copy of the check-out report I signed.", tr: 'Elbette. İmzaladığım teslim alma raporunun bir kopyasını da istiyorum.', ok: true, next: 'report' },
          { en: 'Certainly. I will write down it now.', tr: 'Elbette. Hemen yazıyorum.', ok: false, feedback_tr: 'Nesne zamir ise phrasal verb\'ün arasına girer: "I\'ll write it down now."', next: 'manager' },
          { en: "Certainly, but I'd rather you to call me.", tr: 'Elbette ama beni aramanızı tercih ederim.', ok: false, feedback_tr: '"would rather" + kişi + past simple kullanılır, "to" gelmez: "I\'d rather you called me."', next: 'manager' },
        ],
      },
      report: {
        npc: "Here's the report. Oh — it does mention a 'minor scratch, rear left'.",
        npc_tr: "İşte rapor. Aa, burada gerçekten 'küçük çizik, arka sol' yazıyor.",
        replies: [
          { en: "So it was already recorded. In that case, I assume there won't be a charge?", tr: 'Demek zaten kayda geçmiş. Bu durumda bir ücret alınmayacağını varsayıyorum?', ok: true, next: 'close' },
          { en: 'So it was recorded. You should have checked it before you blame me.', tr: 'Demek kayda geçmiş. Beni suçlamadan önce kontrol etmeliydiniz.', ok: false, feedback_tr: 'Zaman uyumu bozuk ("before you blamed me" ya da "before blaming me") ve ton suçlayıcı. Haklı çıktığında sakin kal, sonucu netleştir.', next: 'report' },
          { en: 'I told you! You must apologise me now.', tr: 'Size söylemiştim! Şimdi benden özür dilemelisiniz.', ok: false, feedback_tr: '"apologise" nesneyi "to" ile alır: "apologise to me". Ayrıca talepkâr ton gereksiz; kibar kalmak daha etkili.', next: 'report' },
        ],
      },
      close: {
        npc: "You're right. I apologise for the confusion — there won't be any charge.",
        npc_tr: 'Haklısınız. Karışıklık için özür dilerim, herhangi bir ücret alınmayacak.',
        replies: [
          { en: 'Thank you. I appreciate you checking it so carefully.', tr: 'Teşekkürler. Bu kadar dikkatli kontrol etmeniz için minnettarım.', ok: true, next: null },
          { en: 'No problem. Mistakes happen.', tr: 'Sorun değil. Hatalar olur.', ok: true, next: null },
          { en: 'Thank you. I appreciate you to check it.', tr: 'Teşekkürler. Kontrol etmenizi takdir ediyorum.', ok: false, feedback_tr: '"appreciate" arkasından -ing alır: "I appreciate you checking it." ("you to check" yanlış)', next: 'close' },
        ],
      },
    },
  },
  {
    id: 's_exam_b1',
    goal: 'exam',
    cefr: 'B1',
    title_tr: 'IELTS Speaking Part 1',
    setting_tr: 'IELTS konuşma sınavının ilk bölümündesin. Sınav görevlisi kendin, işin ya da okulun ve memleketin hakkında kısa sorular soruyor. Tek kelimelik değil, gerekçeli cevaplar ver.',
    npc_name: 'Examiner',
    start: 'start',
    nodes: {
      start: {
        npc: 'Good afternoon. Can you tell me your full name, please?',
        npc_tr: 'İyi günler. Tam adınızı söyler misiniz lütfen?',
        replies: [
          { en: 'My full name is Elif Kaya.', tr: 'Tam adım Elif Kaya.', ok: true, next: 'work' },
          { en: "Yes, it's Mehmet Demir.", tr: 'Tabii, Mehmet Demir.', ok: true, next: 'work' },
          { en: 'My name Elif Kaya.', tr: 'Adım Elif Kaya.', ok: false, feedback_tr: '"is" eksik. Türkçedeki "-dır/-im" ekinin karşılığı İngilizcede ayrı bir fiil: "My name is Elif Kaya."', next: 'start' },
        ],
      },
      work: {
        npc: 'Do you work or are you a student?',
        npc_tr: 'Çalışıyor musunuz yoksa öğrenci misiniz?',
        replies: [
          { en: "I'm a student. I'm studying engineering at a university in Ankara.", tr: 'Öğrenciyim. Ankara\'da bir üniversitede mühendislik okuyorum.', ok: true, next: 'study' },
          { en: 'I work as an accountant for a small company.', tr: 'Küçük bir şirkette muhasebeci olarak çalışıyorum.', ok: true, next: 'job' },
          { en: 'I am study engineering.', tr: 'Mühendislik okuyorum.', ok: false, feedback_tr: '"am" ile fiil yalın kullanılmaz. Şu an süren durum için "I am studying engineering", genel durum için "I study engineering".', next: 'work' },
        ],
      },
      study: {
        npc: 'Why did you choose that subject?',
        npc_tr: 'Neden bu bölümü seçtiniz?',
        replies: [
          { en: "I've always been interested in how machines work, and engineers can usually find jobs easily.", tr: 'Makinelerin nasıl çalıştığı hep ilgimi çekti, ayrıca mühendisler genelde kolayca iş bulabiliyor.', ok: true, next: 'home' },
          { en: 'Because I am interesting in machines.', tr: 'Çünkü makinelerle ilgileniyorum.', ok: false, feedback_tr: 'Kişinin hissi için "interested": "I am interested in machines." ("interesting" = ilginç)', next: 'study' },
          { en: 'Because my father wanted that I study it.', tr: 'Çünkü babam onu okumamı istedi.', ok: false, feedback_tr: '"want" + kişi + "to" + fiil: "My father wanted me to study it." Türkçedeki "-mamı istedi" yapısı İngilizcede "that" ile kurulmaz.', next: 'study' },
        ],
      },
      job: {
        npc: 'What do you like most about your job?',
        npc_tr: 'İşinizde en çok neyi seviyorsunuz?',
        replies: [
          { en: 'I enjoy working with numbers, and my colleagues are very friendly.', tr: 'Rakamlarla çalışmaktan keyif alıyorum, iş arkadaşlarım da çok samimi.', ok: true, next: 'home' },
          { en: 'I enjoy to work with numbers.', tr: 'Rakamlarla çalışmaktan keyif alıyorum.', ok: false, feedback_tr: '"enjoy" arkasından -ing alır: "I enjoy working with numbers."', next: 'job' },
          { en: 'I like most the people there.', tr: 'En çok oradaki insanları seviyorum.', ok: false, feedback_tr: 'Nesne fiilden hemen sonra gelir, zarf sona: "I like the people there most." ya da "What I like most is the people."', next: 'job' },
        ],
      },
      home: {
        npc: "Let's talk about your hometown. Where is it, and what is it like?",
        npc_tr: 'Biraz memleketinizden konuşalım. Nerede ve nasıl bir yer?',
        replies: [
          { en: "I'm from Trabzon, a city on the Black Sea coast. It's green and quite rainy.", tr: 'Trabzonluyum, Karadeniz kıyısında bir şehir. Yeşil ve oldukça yağmurlu.', ok: true, next: 'change' },
          { en: "I'm from Trabzon. It's a city at the Black Sea.", tr: 'Trabzonluyum. Karadeniz\'de bir şehir.', ok: false, feedback_tr: 'Kıyıda olmak için "on" kullanılır: "a city on the Black Sea (coast)".', next: 'home' },
          { en: 'Trabzon. Green.', tr: 'Trabzon. Yeşil.', ok: false, feedback_tr: 'Sınavda tek kelimelik cevap puan kaybettirir. Tam cümle kur ve bir-iki ayrıntı ekle.', next: 'home' },
        ],
      },
      change: {
        npc: 'How has your hometown changed in recent years?',
        npc_tr: 'Memleketiniz son yıllarda nasıl değişti?',
        replies: [
          { en: 'It has become much busier, and a lot of new buildings have been built.', tr: 'Çok daha kalabalık oldu ve birçok yeni bina yapıldı.', ok: true, next: 'future' },
          { en: 'It became much busier in recent years.', tr: 'Son yıllarda çok daha kalabalık oldu.', ok: false, feedback_tr: '"in recent years" şimdiye kadar süren bir dönemi gösterir, present perfect ister: "It has become much busier in recent years."', next: 'change' },
          { en: 'It has became much busier.', tr: 'Çok daha kalabalık oldu.', ok: false, feedback_tr: '"have/has" sonrası fiilin üçüncü hâli gelir; "become"ın üçüncü hâli yine "become": "It has become much busier."', next: 'change' },
        ],
      },
      future: {
        npc: 'Would you like to live there in the future?',
        npc_tr: 'Gelecekte orada yaşamak ister misiniz?',
        replies: [
          { en: 'Maybe. If I found a good job there, I would move back.', tr: 'Belki. Orada iyi bir iş bulsam geri dönerdim.', ok: true, next: null },
          { en: "Probably not, because I'd prefer to live in a bigger city.", tr: 'Muhtemelen hayır, çünkü daha büyük bir şehirde yaşamayı tercih ederim.', ok: true, next: null },
          { en: 'If I would find a good job there, I would move back.', tr: 'Orada iyi bir iş bulsam geri dönerdim.', ok: false, feedback_tr: 'İkinci koşulda "if" cümlesinde "would" kullanılmaz, past simple gelir: "If I found a good job there, I would move back."', next: 'future' },
        ],
      },
    },
  },
  {
    id: 's_exam_b2',
    goal: 'exam',
    cefr: 'B2',
    title_tr: 'IELTS Speaking Part 3: teknoloji tartışması',
    setting_tr: 'IELTS konuşma sınavının üçüncü bölümündesin. Sınav görevlisi teknoloji ve eğitim üzerine soyut sorular soruyor. Fikrini gerekçelendir, iki tarafı da tart.',
    npc_name: 'Examiner',
    start: 'start',
    nodes: {
      start: {
        npc: "We've been talking about technology. Do you think technology has made people's lives easier?",
        npc_tr: 'Teknoloji hakkında konuşuyorduk. Sizce teknoloji insanların hayatını kolaylaştırdı mı?',
        replies: [
          { en: 'On the whole, yes. It has made communication much faster, although it has also made us more stressed.', tr: 'Genel olarak evet. İletişimi çok hızlandırdı ama bizi daha stresli de yaptı.', ok: true, next: 'why' },
          { en: 'Yes, absolutely. Technology is good.', tr: 'Evet, kesinlikle. Teknoloji iyidir.', ok: false, feedback_tr: 'Part 3\'te bu kadar kısa ve gerekçesiz cevap puan kaybettirir. Fikrini bir örnek veya karşı görüşle geliştir.', next: 'start' },
          { en: 'Yes, despite it has some disadvantages.', tr: 'Evet, bazı dezavantajları olsa da.', ok: false, feedback_tr: '"despite" arkasından cümle almaz. "although it has some disadvantages" ya da "despite its disadvantages".', next: 'start' },
        ],
      },
      why: {
        npc: 'Why do you think it might make people more stressed?',
        npc_tr: 'Sizce neden insanları daha stresli yapıyor olabilir?',
        replies: [
          { en: "Well, people are expected to be available all the time, so it's hard to switch off.", tr: 'İnsanlardan her an ulaşılabilir olmaları bekleniyor, bu yüzden kafayı boşaltmak zor.', ok: true, next: 'work' },
          { en: 'Partly because social media encourages us to compare ourselves with others.', tr: 'Kısmen sosyal medya bizi kendimizi başkalarıyla kıyaslamaya teşvik ettiği için.', ok: true, next: 'social' },
          { en: 'Because people expect to answer emails all the time.', tr: 'Çünkü insanlardan sürekli e-postalara cevap vermeleri bekleniyor.', ok: false, feedback_tr: 'Bu cümle "insanlar cevap vermeyi bekliyor" demek. Beklenti başkasından geliyorsa edilgen gerekir: "people are expected to answer emails all the time."', next: 'why' },
        ],
      },
      work: {
        npc: 'Should companies limit how often employees are contacted after working hours?',
        npc_tr: 'Şirketler mesai sonrasında çalışanlara ne sıklıkla ulaşıldığını sınırlamalı mı?',
        replies: [
          { en: "I think they should. Some countries have already introduced laws that protect workers' free time.", tr: 'Bence sınırlamalılar. Bazı ülkeler çalışanların boş zamanını koruyan yasalar çıkardı bile.', ok: true, next: 'future' },
          { en: 'I think they should to do it.', tr: 'Bence bunu yapmalılar.', ok: false, feedback_tr: '"should" arkasından "to" gelmez: "I think they should do it."', next: 'work' },
          { en: 'Yes. Workers must not to answer after six.', tr: 'Evet. Çalışanlar altıdan sonra cevap vermemeli.', ok: false, feedback_tr: '"must not" arkasından fiil yalın gelir: "must not answer". Ayrıca Part 3\'te fikrini gerekçelendir.', next: 'work' },
        ],
      },
      social: {
        npc: 'Do you think young people should spend less time on social media?',
        npc_tr: 'Sizce gençler sosyal medyada daha az zaman geçirmeli mi?',
        replies: [
          { en: 'Ideally, yes, but rather than banning it, it might be better to teach them to use it wisely.', tr: 'İdeal olarak evet ama yasaklamak yerine onlara bilinçli kullanmayı öğretmek daha iyi olabilir.', ok: true, next: 'future' },
          { en: 'Yes. Social media is very bad and it must be banned completely.', tr: 'Evet. Sosyal medya çok kötü ve tamamen yasaklanmalı.', ok: false, feedback_tr: 'Dil bilgisi doğru ama tek yönlü, aşırı genelleme yapan bir cevap B2 sınavda zayıf kalır. Bir gerekçe ve karşı görüş ekle.', next: 'social' },
          { en: 'Yes, if they used it less, they would have been happier.', tr: 'Evet, daha az kullansalar daha mutlu olurlardı.', ok: false, feedback_tr: 'Şimdiki/genel bir durum için ana cümle "would + fiil" olmalı: "If they used it less, they would be happier."', next: 'social' },
        ],
      },
      future: {
        npc: 'How do you think technology will change education in the next twenty years?',
        npc_tr: 'Sizce teknoloji önümüzdeki yirmi yılda eğitimi nasıl değiştirecek?',
        replies: [
          { en: 'I imagine lessons will be more personalised, so students will be able to learn at their own pace.', tr: 'Bence dersler daha kişiselleşecek, böylece öğrenciler kendi hızlarında öğrenebilecek.', ok: true, next: 'teacher' },
          { en: 'I think students will can learn at their own pace.', tr: 'Bence öğrenciler kendi hızlarında öğrenebilecek.', ok: false, feedback_tr: 'İki modal yan yana gelmez ("will can"). Gelecekte yetenek için: "students will be able to learn".', next: 'future' },
          { en: 'In twenty years, students learn everything online.', tr: 'Yirmi yıl içinde öğrenciler her şeyi çevrimiçi öğrenecek.', ok: false, feedback_tr: 'Gelecek tahmini için geniş zaman değil "will" gerekir: "In twenty years, students will learn everything online."', next: 'future' },
        ],
      },
      teacher: {
        npc: 'So do you think teachers will become less important?',
        npc_tr: 'Yani sizce öğretmenler daha az önemli hâle mi gelecek?',
        replies: [
          { en: 'Not at all. Teachers will probably be needed even more, mainly to motivate students and guide them.', tr: 'Hiç sanmıyorum. Muhtemelen öğretmenlere daha da çok ihtiyaç duyulacak, özellikle öğrencileri motive edip yönlendirmek için.', ok: true, next: 'reflect' },
          { en: "Their role may change, but I doubt they'll ever be replaced completely.", tr: 'Rolleri değişebilir ama tamamen yerlerinin doldurulacağından şüpheliyim.', ok: true, next: 'reflect' },
          { en: "I don't think so. Teachers will never been replaced.", tr: 'Sanmıyorum. Öğretmenlerin yeri asla doldurulmayacak.', ok: false, feedback_tr: 'Gelecekte edilgen: will + be + V3. "Teachers will never be replaced." ("been" yanlış)', next: 'teacher' },
        ],
      },
      reflect: {
        npc: 'Looking back, is there anything you wish you had learned differently at school?',
        npc_tr: 'Geriye dönüp baktığınızda, okulda farklı öğrenmiş olmayı dilediğiniz bir şey var mı?',
        replies: [
          { en: 'Yes. I wish we had done more speaking practice instead of just memorising grammar rules.', tr: 'Evet. Keşke sadece dil bilgisi kuralı ezberlemek yerine daha çok konuşma pratiği yapsaydık.', ok: true, next: null },
          { en: 'Yes. I wish we did more speaking practice at school.', tr: 'Evet. Keşke okulda daha çok konuşma pratiği yapsaydık.', ok: false, feedback_tr: 'Geçmişle ilgili pişmanlıkta "wish" + past perfect gelir: "I wish we had done more speaking practice."', next: 'reflect' },
          { en: 'Yes. I should have practise speaking more.', tr: 'Evet. Daha çok konuşma pratiği yapmalıydım.', ok: false, feedback_tr: '"should have" arkasından fiilin üçüncü hâli gelir: "I should have practised speaking more."', next: 'reflect' },
        ],
      },
    },
  },
  {
    id: 's_general_b1',
    goal: 'general',
    cefr: 'B1',
    title_tr: 'Komşuyla gürültü sorunu',
    setting_tr: 'Üst kattaki komşun Tom dün gece saat 2\'ye kadar yüksek sesle müzik dinledi. Kapısını çalıyorsun; ilişkiyi bozmadan durumu konuşmak istiyorsun.',
    npc_name: 'Tom',
    start: 'start',
    nodes: {
      start: {
        npc: 'Oh, hi! Can I help you?',
        npc_tr: 'Aa, merhaba! Yardımcı olabilir miyim?',
        replies: [
          { en: "Hi, sorry to bother you. I live in the flat below. Have you got a minute?", tr: 'Merhaba, rahatsız ettiğim için kusura bakma. Alt kattaki dairede oturuyorum. Bir dakikan var mı?', ok: true, next: 'issue' },
          { en: 'Hi. Your music is too loud. Stop it.', tr: 'Merhaba. Müziğin çok yüksek. Kes şunu.', ok: false, feedback_tr: 'Doğrudan emir vermek komşuyu savunmaya iter. Önce kendini tanıt ve kibarca konuşmak iste.', next: 'start' },
          { en: 'Hi, sorry for disturb you.', tr: 'Merhaba, rahatsız ettiğim için özür dilerim.', ok: false, feedback_tr: 'Edattan ("for") sonra fiil -ing alır: "sorry for disturbing you" ya da "sorry to disturb you".', next: 'start' },
        ],
      },
      issue: {
        npc: "Sure. What's up?",
        npc_tr: 'Tabii. Ne oldu?',
        replies: [
          { en: "Well, the music was quite loud last night, and I couldn't sleep until 2 a.m.", tr: 'Şey, dün gece müzik epey yüksekti ve saat 2\'ye kadar uyuyamadım.', ok: true, next: 'reaction' },
          { en: 'Well, the music has been very loud last night.', tr: 'Şey, dün gece müzik çok yüksekti.', ok: false, feedback_tr: '"last night" belirli bir geçmiş zaman; present perfect ile kullanılmaz: "the music was very loud last night".', next: 'issue' },
          { en: 'Well, you were making a party until 2 a.m.', tr: 'Şey, saat 2\'ye kadar parti yapıyordun.', ok: false, feedback_tr: 'Parti için "make" kullanılmaz: "you were having a party" ya da "you were throwing a party".', next: 'issue' },
        ],
      },
      reaction: {
        npc: "Oh no, I'm really sorry. It was my birthday. I didn't realise it was so loud.",
        npc_tr: 'Eyvah, gerçekten çok özür dilerim. Doğum günümdü. Bu kadar yüksek olduğunu fark etmemiştim.',
        replies: [
          { en: "Don't worry, and happy birthday! I just have to get up early for work.", tr: 'Dert etme, doğum günün kutlu olsun! Sadece iş için erken kalkmam gerekiyor.', ok: true, next: 'solution' },
          { en: "That's OK. It doesn't happen often, but I wanted to let you know.", tr: 'Sorun değil. Sık olmuyor ama haberin olsun istedim.', ok: true, next: 'future' },
          { en: "Don't worry. I must to get up early for work.", tr: 'Dert etme. İş için erken kalkmam gerekiyor.', ok: false, feedback_tr: '"must" arkasından "to" gelmez: "I must get up early" ya da "I have to get up early".', next: 'reaction' },
        ],
      },
      solution: {
        npc: 'Would it help if I told you before I have a party next time?',
        npc_tr: 'Bir dahaki sefere parti vermeden önce sana haber versem işine yarar mı?',
        replies: [
          { en: "Yes, that would be great. Then I could plan to stay at a friend's place.", tr: 'Evet, harika olur. O zaman bir arkadaşımda kalmayı planlayabilirim.', ok: true, next: 'future' },
          { en: 'Yes, that would be great, if you will tell me.', tr: 'Evet, bana haber verirsen harika olur.', ok: false, feedback_tr: '"if" cümlesinde "will" kullanılmaz: "if you tell me". Burada en doğalı: "Yes, that would be great."', next: 'solution' },
          { en: 'Yes, it would help if you told to me.', tr: 'Evet, bana söylersen işime yarar.', ok: false, feedback_tr: '"tell" doğrudan nesne alır, "to" gelmez: "if you told me".', next: 'solution' },
        ],
      },
      future: {
        npc: 'Is there anything else I can do?',
        npc_tr: 'Yapabileceğim başka bir şey var mı?',
        replies: [
          { en: 'Maybe you could turn the music down after 11 p.m.?', tr: 'Belki saat 11\'den sonra müziğin sesini kısabilirsin?', ok: true, next: 'close' },
          { en: 'Maybe you could turn the music up after 11 p.m.?', tr: 'Belki saat 11\'den sonra müziğin sesini açabilirsin?', ok: false, feedback_tr: '"turn up" sesi açmak demek! Kısmak için "turn down": "turn the music down".', next: 'future' },
          { en: 'You should not to play music after 11.', tr: '11\'den sonra müzik çalmamalısın.', ok: false, feedback_tr: '"should not" arkasından "to" gelmez: "You shouldn\'t play music after 11." Ayrıca öneri biçiminde ("Maybe you could...") daha kibar olur.', next: 'future' },
        ],
      },
      close: {
        npc: 'Of course. Thanks for being so nice about it.',
        npc_tr: 'Tabii ki. Bu konuda bu kadar anlayışlı olduğun için teşekkürler.',
        replies: [
          { en: 'No problem. Enjoy the rest of your birthday!', tr: 'Sorun değil. Doğum gününün geri kalanının tadını çıkar!', ok: true, next: null },
          { en: 'Thanks for understanding. See you around!', tr: 'Anlayışın için teşekkürler. Görüşürüz!', ok: true, next: null },
          { en: "No problem. I'm agree with you.", tr: 'Sorun değil. Sana katılıyorum.', ok: false, feedback_tr: '"agree" bir fiildir, "am" almaz: "I agree with you." (Burada zaten anlamca da uymuyor; "Thanks for understanding" daha doğal.)', next: 'close' },
        ],
      },
    },
  },
  {
    id: 's_general_b2',
    goal: 'general',
    cefr: 'B2',
    title_tr: 'Arkadaşla kibarca fikir ayrılığı',
    setting_tr: 'Arkadaşın Sam tüm birikimini yeni bir arabaya harcamaya karar verdiğini söylüyor. Kararına saygı göstererek ama dürüstçe endişelerini anlatmak istiyorsun.',
    npc_name: 'Sam',
    start: 'start',
    nodes: {
      start: {
        npc: "I've finally decided — I'm going to spend all my savings on a new car!",
        npc_tr: 'Sonunda karar verdim: tüm birikimimi yeni bir arabaya harcayacağım!',
        replies: [
          { en: "Wow, that's a big decision! What made you decide?", tr: 'Vay, bu büyük bir karar! Seni karar vermeye ne itti?', ok: true, next: 'reason' },
          { en: "That's a terrible idea. Don't do it.", tr: 'Bu berbat bir fikir. Yapma.', ok: false, feedback_tr: 'Doğrudan reddetmek karşındakini savunmaya iter. Önce merakla sor, sonra endişeni yumuşakça dile getir.', next: 'start' },
          { en: 'Wow! Since when are you deciding this?', tr: 'Vay! Ne zamandan beri buna karar vermeye çalışıyorsun?', ok: false, feedback_tr: '"since when" süregelen durum ister; ama burada en doğalı geçmiş zamanla sormak: "When did you decide?" ya da "What made you decide?"', next: 'start' },
        ],
      },
      reason: {
        npc: "Well, the buses are always late, and I'm tired of waiting.",
        npc_tr: 'Şey, otobüsler hep gecikiyor ve beklemekten bıktım.',
        replies: [
          { en: "I can see why that's frustrating. Have you thought about how much it'll cost to run, though?", tr: 'Bunun neden sinir bozucu olduğunu anlıyorum. Ama masraflarının ne kadar tutacağını düşündün mü?', ok: true, next: 'costs' },
          { en: 'That makes sense. But are you sure you want to spend all of your savings on it?', tr: 'Mantıklı. Ama tüm birikimini buna harcamak istediğinden emin misin?', ok: true, next: 'savings' },
          { en: 'I see, but you should had thought about the costs.', tr: 'Anlıyorum ama masrafları düşünmeliydin.', ok: false, feedback_tr: '"should" arkasından "have + V3" gelir: "you should have thought about the costs". Ayrıca karar henüz verilmediği için "Have you thought about the costs?" daha uygun ve kibar.', next: 'reason' },
        ],
      },
      costs: {
        npc: 'Not really. Insurance, fuel... is it that expensive?',
        npc_tr: 'Pek değil. Sigorta, yakıt... o kadar pahalı mı?',
        replies: [
          { en: 'It can be. Insurance alone might cost more than you expect, especially for a new car.', tr: 'Olabilir. Özellikle yeni bir araba için sadece sigorta bile beklediğinden fazla tutabilir.', ok: true, next: 'savings' },
          { en: 'It can be. Insurance alone is more expensive as you expect.', tr: 'Olabilir. Sadece sigorta bile beklediğinden pahalı.', ok: false, feedback_tr: 'Karşılaştırmada "-er/more" ile "than" kullanılır: "more expensive than you expect". "as" yalnız "as ... as" yapısında.', next: 'costs' },
          { en: 'Yes. You must be crazy to buy one.', tr: 'Evet. Bir tane almak için deli olmalısın.', ok: false, feedback_tr: 'Yapı doğru ("must be" = kesin çıkarım) ama arkadaşına "deli" demek kırıcı. Bilgi ver, yargılama.', next: 'costs' },
        ],
      },
      savings: {
        npc: "Hmm. You think I shouldn't do it, then?",
        npc_tr: 'Hmm. Yani yapmamam gerektiğini mi düşünüyorsun?',
        replies: [
          { en: "I'm not saying you shouldn't. I just think it might be worth keeping some money aside for emergencies.", tr: 'Yapmamalısın demiyorum. Sadece acil durumlar için biraz para ayırmaya değer olabilir diye düşünüyorum.', ok: true, next: 'alt' },
          { en: "Exactly, you shouldn't. It's a stupid decision.", tr: 'Aynen, yapmamalısın. Aptalca bir karar.', ok: false, feedback_tr: '"stupid" kırıcı ve tartışmayı bitirir. Kararın sahibinin o olduğunu kabul edip endişeni yumuşat.', next: 'savings' },
          { en: "I'm not saying you shouldn't, but I'd rather you to keep some money.", tr: 'Yapmamalısın demiyorum ama biraz para tutmanı tercih ederim.', ok: false, feedback_tr: '"would rather" + kişi + past simple: "I\'d rather you kept some money aside." ("you to keep" yanlış)', next: 'savings' },
        ],
      },
      alt: {
        npc: 'What would you do if you were me?',
        npc_tr: 'Benim yerimde olsan ne yapardın?',
        replies: [
          { en: "If I were you, I'd buy a good second-hand car and save the rest.", tr: 'Senin yerinde olsam iyi bir ikinci el araba alır, kalanını biriktirirdim.', ok: true, next: 'agree' },
          { en: 'If I would be you, I would buy a second-hand car.', tr: 'Senin yerinde olsam ikinci el bir araba alırdım.', ok: false, feedback_tr: '"if" cümlesinde "would" kullanılmaz: "If I were you, I would buy a second-hand car."', next: 'alt' },
          { en: "If I were you, I'd buy a second-hand car, however I'd save the rest.", tr: 'Senin yerinde olsam ikinci el bir araba alırdım, ama kalanını biriktirirdim.', ok: false, feedback_tr: '"however" iki cümleyi virgülle bağlayamaz ve burada zıtlık da yok. "and" yeterli: "...buy a second-hand car and save the rest."', next: 'alt' },
        ],
      },
      agree: {
        npc: "That's actually not a bad idea. I hadn't thought of that.",
        npc_tr: 'Aslında fena fikir değil. Bunu hiç düşünmemiştim.',
        replies: [
          { en: "Of course, it's your decision in the end. I just wanted you to consider all the options.", tr: 'Tabii ki sonuçta karar senin. Sadece tüm seçenekleri düşünmeni istedim.', ok: true, next: null },
          { en: 'Glad I could help! I can come with you to look at some cars, if you like.', tr: 'Yardımcı olabildiysem ne mutlu! İstersen araba bakmaya seninle gelebilirim.', ok: true, next: null },
          { en: "Of course, it's your decision. I just wanted that you consider all the options.", tr: 'Tabii ki karar senin. Sadece tüm seçenekleri düşünmeni istedim.', ok: false, feedback_tr: '"want" + kişi + "to" + fiil: "I just wanted you to consider all the options." ("wanted that you" yanlış)', next: 'agree' },
        ],
      },
    },
  },
]
