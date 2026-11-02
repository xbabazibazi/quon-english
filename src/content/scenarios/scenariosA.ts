import type { Scenario } from '../types'

export const SCENARIOS_A: Scenario[] = [
  {
    id: "s_travel_a1",
    goal: "travel",
    cefr: "A1",
    title_tr: "Kafede sipariş vermek",
    setting_tr: "Londra'da bir kafedesin. Bir şey içmek istiyorsun.",
    npc_name: "Barista",
    start: "start",
    nodes: {
      start: {
        npc: "Hi! What can I get for you?",
        npc_tr: "Merhaba! Size ne verebilirim?",
        replies: [
          { en: "A coffee, please.", tr: "Bir kahve, lütfen.", ok: true, next: "n2" },
          { en: "Can I have a tea, please?", tr: "Bir çay alabilir miyim, lütfen?", ok: true, next: "n2t" },
          { en: "I coffee want.", tr: "Ben kahve istiyorum.", ok: false, feedback_tr: "Fiil özneden hemen sonra gelir: 'I want a coffee.' Daha kibarı: 'A coffee, please.'", next: "start" },
        ],
      },
      n2: {
        npc: "Sure. Small or large?",
        npc_tr: "Tabii. Küçük mü, büyük mü?",
        replies: [
          { en: "Large, please.", tr: "Büyük, lütfen.", ok: true, next: "n3" },
          { en: "A small one, please.", tr: "Küçük olsun, lütfen.", ok: true, next: "n3" },
          { en: "Large is.", tr: "Büyük.", ok: false, feedback_tr: "Burada 'is' gereksiz ve cümle bozuk. Kısa ve kibar cevap: 'Large, please.'", next: "n2" },
        ],
      },
      n2t: {
        npc: "Of course. With milk or lemon?",
        npc_tr: "Tabii. Sütlü mü, limonlu mu?",
        replies: [
          { en: "With lemon, please.", tr: "Limonlu, lütfen.", ok: true, next: "n3" },
          { en: "No milk, thank you.", tr: "Sütsüz, teşekkürler.", ok: true, next: "n3" },
          { en: "I am lemon.", tr: "Ben limonum.", ok: false, feedback_tr: "'I am lemon' = 'Ben limonum' demek. Doğrusu: 'With lemon, please.'", next: "n2t" },
        ],
      },
      n3: {
        npc: "Anything to eat?",
        npc_tr: "Yiyecek bir şey ister misiniz?",
        replies: [
          { en: "Yes, a piece of cake, please.", tr: "Evet, bir dilim kek, lütfen.", ok: true, next: "n4" },
          { en: "No, thank you.", tr: "Hayır, teşekkürler.", ok: true, next: "n4" },
          { en: "Yes, I want a eat.", tr: "Evet, yemek istiyorum.", ok: false, feedback_tr: "'eat' bir fiil, önüne 'a' gelmez. Ne istediğini söyle: 'Yes, a piece of cake, please.'", next: "n3" },
        ],
      },
      n4: {
        npc: "That's eight pounds, please.",
        npc_tr: "Sekiz pound, lütfen.",
        replies: [
          { en: "Can I pay by card?", tr: "Kartla ödeyebilir miyim?", ok: true, next: "n5" },
          { en: "Here you are.", tr: "Buyurun.", ok: true, next: "n5" },
          { en: "Can I to pay by card?", tr: "Kartla ödeyebilir miyim?", ok: false, feedback_tr: "'can'den sonra 'to' gelmez, fiil yalın kalır: 'Can I pay by card?'", next: "n4" },
        ],
      },
      n5: {
        npc: "Thank you. Here's your receipt. Have a nice day!",
        npc_tr: "Teşekkürler. Fişiniz. İyi günler!",
        replies: [
          { en: "Thank you, you too!", tr: "Teşekkürler, size de!", ok: true, next: null },
          { en: "Thanks, bye!", tr: "Teşekkürler, hoşça kalın!", ok: true, next: null },
          { en: "Thank you, me too!", tr: "Teşekkürler, ben de!", ok: false, feedback_tr: "'Me too' = 'ben de'. Karşılık dilerken 'You too!' denir.", next: "n5" },
        ],
      },
    },
  },
  {
    id: "s_travel_a2",
    goal: "travel",
    cefr: "A2",
    title_tr: "Otelde oda sorunu",
    setting_tr: "Otel odanda bir sorun var. Resepsiyona gidiyorsun.",
    npc_name: "Receptionist",
    start: "start",
    nodes: {
      start: {
        npc: "Good evening. How can I help you?",
        npc_tr: "İyi akşamlar. Size nasıl yardımcı olabilirim?",
        replies: [
          { en: "Hi, I'm in room 204. There's a problem with the air conditioning.", tr: "Merhaba, 204 numaralı odadayım. Klimayla ilgili bir sorun var.", ok: true, next: "n2" },
          { en: "Hi, the shower in my room isn't working.", tr: "Merhaba, odamdaki duş çalışmıyor.", ok: true, next: "n2s" },
          { en: "Hi, the air conditioning is not work.", tr: "Merhaba, klima çalışmıyor.", ok: false, feedback_tr: "'is' ile yalın fiil birlikte kullanılmaz. 'It doesn't work' ya da 'It isn't working' de.", next: "start" },
        ],
      },
      n2: {
        npc: "I'm sorry to hear that. What's wrong with it?",
        npc_tr: "Bunu duyduğuma üzüldüm. Nesi var?",
        replies: [
          { en: "It's very noisy and the room is too hot.", tr: "Çok gürültülü ve oda çok sıcak.", ok: true, next: "n3" },
          { en: "It doesn't turn on.", tr: "Açılmıyor.", ok: true, next: "n3" },
          { en: "It very noisy.", tr: "Çok gürültülü.", ok: false, feedback_tr: "'is' eksik. Türkçedeki '-dür' ekinin karşılığı: 'It is very noisy.'", next: "n2" },
        ],
      },
      n2s: {
        npc: "Oh, I'm sorry. Is there no hot water?",
        npc_tr: "Ah, üzgünüm. Sıcak su yok mu?",
        replies: [
          { en: "No, there isn't any hot water.", tr: "Hayır, hiç sıcak su yok.", ok: true, next: "n3" },
          { en: "The water is cold and the pressure is very low.", tr: "Su soğuk ve basınç çok düşük.", ok: true, next: "n3" },
          { en: "No, there isn't some hot water.", tr: "Hayır, hiç sıcak su yok.", ok: false, feedback_tr: "Olumsuz cümlede 'some' değil 'any' kullanılır: 'There isn't any hot water.'", next: "n2s" },
        ],
      },
      n3: {
        npc: "I'll send someone from maintenance. Or would you like to change rooms?",
        npc_tr: "Teknik servisten birini göndereceğim. Ya da oda değiştirmek ister misiniz?",
        replies: [
          { en: "I'd like to change rooms, please.", tr: "Oda değiştirmek istiyorum, lütfen.", ok: true, next: "n4" },
          { en: "Can someone come now? I'm very tired.", tr: "Biri şimdi gelebilir mi? Çok yorgunum.", ok: true, next: "n4b" },
          { en: "I would like change rooms.", tr: "Oda değiştirmek istiyorum.", ok: false, feedback_tr: "'would like'tan sonra 'to' gelir: 'I'd like to change rooms.'", next: "n3" },
        ],
      },
      n4: {
        npc: "No problem. Room 310 is free. It's quieter than your room.",
        npc_tr: "Sorun değil. 310 numaralı oda boş. Sizin odanızdan daha sessiz.",
        replies: [
          { en: "Great, thank you very much.", tr: "Harika, çok teşekkür ederim.", ok: true, next: "n5" },
          { en: "Perfect, thanks. I'll go there now.", tr: "Mükemmel, teşekkürler. Şimdi oraya gideceğim.", ok: true, next: "n5" },
          { en: "Is it more big than my room?", tr: "Benim odamdan daha büyük mü?", ok: false, feedback_tr: "'big' kısa bir sıfat, '-er' alır: 'Is it bigger than my room?' 'more big' olmaz.", next: "n4" },
        ],
      },
      n4b: {
        npc: "Yes, a technician will be there in ten minutes.",
        npc_tr: "Evet, on dakika içinde bir teknisyen orada olacak.",
        replies: [
          { en: "Thank you. I'll wait in my room.", tr: "Teşekkürler. Odamda bekleyeceğim.", ok: true, next: "n5" },
          { en: "OK, thanks. My room is 204.", tr: "Tamam, teşekkürler. Odam 204.", ok: true, next: "n5" },
          { en: "Thank you. I will to wait in my room.", tr: "Teşekkürler. Odamda bekleyeceğim.", ok: false, feedback_tr: "'will'den sonra 'to' gelmez: 'I will wait' ya da kısaca 'I'll wait'.", next: "n4b" },
        ],
      },
      n5: {
        npc: "You're welcome. Sorry again for the trouble. Enjoy your stay!",
        npc_tr: "Rica ederim. Sorun için tekrar özür dileriz. İyi konaklamalar!",
        replies: [
          { en: "Thank you for your help.", tr: "Yardımınız için teşekkürler.", ok: true, next: null },
          { en: "No problem, thanks. Good night.", tr: "Sorun değil, teşekkürler. İyi geceler.", ok: true, next: null },
          { en: "Thank you for your helping.", tr: "Yardımınız için teşekkürler.", ok: false, feedback_tr: "Burada 'help' isim olarak kullanılır: 'Thank you for your help.' ya da 'Thank you for helping me.'", next: "n5" },
        ],
      },
    },
  },
  {
    id: "s_work_a1",
    goal: "work",
    cefr: "A1",
    title_tr: "İşte ilk gün: kendini tanıtmak",
    setting_tr: "Yeni işindeki ilk günün. Bir iş arkadaşı seni karşılıyor.",
    npc_name: "Anna",
    start: "start",
    nodes: {
      start: {
        npc: "Hello! Are you the new engineer?",
        npc_tr: "Merhaba! Yeni mühendis siz misiniz?",
        replies: [
          { en: "Yes, I am. My name is Emre.", tr: "Evet, benim. Adım Emre.", ok: true, next: "n2" },
          { en: "Yes, that's right. I'm Emre Kaya.", tr: "Evet, doğru. Ben Emre Kaya.", ok: true, next: "n2" },
          { en: "Yes, I new engineer.", tr: "Evet, yeni mühendis benim.", ok: false, feedback_tr: "'am' ve artikel eksik: 'Yes, I am the new engineer.'", next: "start" },
        ],
      },
      n2: {
        npc: "Nice to meet you, Emre. I'm Anna. I work in sales.",
        npc_tr: "Tanıştığımıza memnun oldum Emre. Ben Anna. Satışta çalışıyorum.",
        replies: [
          { en: "Nice to meet you too.", tr: "Ben de memnun oldum.", ok: true, next: "n3" },
          { en: "Nice to meet you, Anna.", tr: "Memnun oldum Anna.", ok: true, next: "n3" },
          { en: "Me too nice to meet you.", tr: "Ben de memnun oldum.", ok: false, feedback_tr: "İngilizcede 'too' cümlenin sonuna gelir: 'Nice to meet you too.'", next: "n2" },
        ],
      },
      n3: {
        npc: "Where are you from?",
        npc_tr: "Nerelisin?",
        replies: [
          { en: "I'm from Izmir.", tr: "İzmirliyim.", ok: true, next: "n4" },
          { en: "I'm from Turkey. I'm from Izmir.", tr: "Türkiye'denim. İzmirliyim.", ok: true, next: "n4" },
          { en: "I am Izmir.", tr: "Ben İzmir'im.", ok: false, feedback_tr: "'I am Izmir' = 'Ben İzmir'im' demek. Memleket için 'from' gerekir: 'I'm from Izmir.'", next: "n3" },
        ],
      },
      n4: {
        npc: "Great! Do you live near the office?",
        npc_tr: "Harika! Ofise yakın mı oturuyorsun?",
        replies: [
          { en: "Yes, I do. I live in Kadıköy.", tr: "Evet. Kadıköy'de oturuyorum.", ok: true, next: "n5" },
          { en: "No, I don't. I live far away.", tr: "Hayır. Uzakta oturuyorum.", ok: true, next: "n5b" },
          { en: "Yes, I am live near.", tr: "Evet, yakında oturuyorum.", ok: false, feedback_tr: "Fiilli cümlede 'am' kullanılmaz: 'Yes, I do. I live near the office.'", next: "n4" },
        ],
      },
      n5: {
        npc: "Lucky you! Do you walk to work?",
        npc_tr: "Şanslısın! İşe yürüyerek mi geliyorsun?",
        replies: [
          { en: "Yes, I walk every day.", tr: "Evet, her gün yürüyorum.", ok: true, next: "n6" },
          { en: "No, I take the bus.", tr: "Hayır, otobüse biniyorum.", ok: true, next: "n6" },
          { en: "Yes, I walks every day.", tr: "Evet, her gün yürüyorum.", ok: false, feedback_tr: "'-s' sadece he/she/it ile gelir. 'I' ile fiil yalın: 'I walk every day.'", next: "n5" },
        ],
      },
      n5b: {
        npc: "Oh! How do you come to work?",
        npc_tr: "Ah! İşe nasıl geliyorsun?",
        replies: [
          { en: "I come by metro.", tr: "Metroyla geliyorum.", ok: true, next: "n6" },
          { en: "I drive. It takes one hour.", tr: "Arabayla geliyorum. Bir saat sürüyor.", ok: true, next: "n6" },
          { en: "I come with metro.", tr: "Metroyla geliyorum.", ok: false, feedback_tr: "Ulaşım aracıyla 'with' değil 'by' kullanılır: 'I come by metro.'", next: "n5b" },
        ],
      },
      n6: {
        npc: "OK, let me show you your desk. Welcome to the team!",
        npc_tr: "Tamam, sana masanı göstereyim. Ekibe hoş geldin!",
        replies: [
          { en: "Thank you! I'm happy to be here.", tr: "Teşekkürler! Burada olduğum için mutluyum.", ok: true, next: null },
          { en: "Thanks a lot, Anna.", tr: "Çok teşekkürler Anna.", ok: true, next: null },
          { en: "Thank you! I happy to be here.", tr: "Teşekkürler! Burada olduğum için mutluyum.", ok: false, feedback_tr: "'am' eksik: 'I am happy to be here.' ya da 'I'm happy to be here.'", next: "n6" },
        ],
      },
    },
  },
  {
    id: "s_work_a2",
    goal: "work",
    cefr: "A2",
    title_tr: "Toplantı saati ayarlamak",
    setting_tr: "Bir müşteri seni arıyor ve bu hafta toplantı yapmak istiyor.",
    npc_name: "David",
    start: "start",
    nodes: {
      start: {
        npc: "Hi, it's David from Brightline. Are you free for a meeting this week?",
        npc_tr: "Merhaba, ben Brightline'dan David. Bu hafta toplantı için müsait misiniz?",
        replies: [
          { en: "Hi David. Yes, I'm free on Wednesday.", tr: "Merhaba David. Evet, çarşamba müsaitim.", ok: true, next: "n2" },
          { en: "Hi David. This week is busy, but I'm free next Monday.", tr: "Merhaba David. Bu hafta yoğun ama gelecek pazartesi müsaitim.", ok: true, next: "n2b" },
          { en: "Hi David. Yes, I'm free in Wednesday.", tr: "Merhaba David. Evet, çarşamba müsaitim.", ok: false, feedback_tr: "Günlerle 'in' değil 'on' kullanılır: 'on Wednesday'.", next: "start" },
        ],
      },
      n2: {
        npc: "Great. What time is good for you on Wednesday?",
        npc_tr: "Harika. Çarşamba size saat kaçta uygun?",
        replies: [
          { en: "How about 10 o'clock?", tr: "Saat 10'a ne dersiniz?", ok: true, next: "n3" },
          { en: "Is 2 p.m. OK for you?", tr: "Öğleden sonra 2 size uygun mu?", ok: true, next: "n3" },
          { en: "In 10 o'clock is good.", tr: "Saat 10 iyi.", ok: false, feedback_tr: "Saatle 'in' kullanılmaz, 'at' kullanılır. Basitçe: '10 o'clock is good for me.'", next: "n2" },
        ],
      },
      n2b: {
        npc: "Monday is fine. Morning or afternoon?",
        npc_tr: "Pazartesi uygun. Sabah mı, öğleden sonra mı?",
        replies: [
          { en: "The morning is better for me. How about 9:30?", tr: "Sabah benim için daha iyi. 9.30'a ne dersiniz?", ok: true, next: "n3" },
          { en: "Afternoon, please. At 3 o'clock?", tr: "Öğleden sonra, lütfen. Saat 3'te?", ok: true, next: "n3" },
          { en: "At the morning, please.", tr: "Sabah, lütfen.", ok: false, feedback_tr: "Günün bölümleriyle 'in' kullanılır: 'in the morning'.", next: "n2b" },
        ],
      },
      n3: {
        npc: "That works for me. Will we meet online or at your office?",
        npc_tr: "Bana uyar. Çevrim içi mi görüşeceğiz, yoksa sizin ofiste mi?",
        replies: [
          { en: "Let's meet online. I'll send you a link.", tr: "Çevrim içi görüşelim. Size bir bağlantı göndereceğim.", ok: true, next: "n4" },
          { en: "Can you come to our office? It's in the city centre.", tr: "Ofisimize gelebilir misiniz? Şehir merkezinde.", ok: true, next: "n4" },
          { en: "Let's meet online. I will sending you a link.", tr: "Çevrim içi görüşelim. Size bir bağlantı göndereceğim.", ok: false, feedback_tr: "'will'den sonra fiil yalın gelir: 'I will send' ya da 'I'll send'.", next: "n3" },
        ],
      },
      n4: {
        npc: "Perfect. How long will the meeting be?",
        npc_tr: "Mükemmel. Toplantı ne kadar sürecek?",
        replies: [
          { en: "About one hour.", tr: "Yaklaşık bir saat.", ok: true, next: "n5" },
          { en: "It won't be long, maybe 30 minutes.", tr: "Uzun sürmeyecek, belki 30 dakika.", ok: true, next: "n5" },
          { en: "It will takes one hour.", tr: "Bir saat sürecek.", ok: false, feedback_tr: "'will'den sonra fiil '-s' almaz: 'It will take one hour.'", next: "n4" },
        ],
      },
      n5: {
        npc: "Great. Do I need to bring anything?",
        npc_tr: "Harika. Bir şey getirmem gerekiyor mu?",
        replies: [
          { en: "No, you don't have to bring anything.", tr: "Hayır, bir şey getirmenize gerek yok.", ok: true, next: "n6" },
          { en: "Yes, please bring the new price list.", tr: "Evet, lütfen yeni fiyat listesini getirin.", ok: true, next: "n6" },
          { en: "No, you don't must bring anything.", tr: "Hayır, bir şey getirmenize gerek yok.", ok: false, feedback_tr: "'must' ile 'don't' kullanılmaz. 'Gerek yok' için: 'You don't have to bring anything.'", next: "n5" },
        ],
      },
      n6: {
        npc: "OK, see you then. Have a good day!",
        npc_tr: "Tamam, o zaman görüşürüz. İyi günler!",
        replies: [
          { en: "See you then. Thanks, David.", tr: "Görüşürüz. Teşekkürler David.", ok: true, next: null },
          { en: "Thank you, you too. Bye!", tr: "Teşekkürler, size de. Hoşça kalın!", ok: true, next: null },
          { en: "Thank you, too you. Bye!", tr: "Teşekkürler, size de. Hoşça kalın!", ok: false, feedback_tr: "Kelime sırası ters. Doğrusu: 'You too!'", next: "n6" },
        ],
      },
    },
  },
  {
    id: "s_exam_a1",
    goal: "exam",
    cefr: "A1",
    title_tr: "Derste öğretmene soru sormak",
    setting_tr: "İngilizce dersindesin. Öğretmen derse başlıyor.",
    npc_name: "Ms. Brown",
    start: "start",
    nodes: {
      start: {
        npc: "Good morning, class. Please open your books to page 12.",
        npc_tr: "Günaydın sınıf. Lütfen kitaplarınızın 12. sayfasını açın.",
        replies: [
          { en: "Sorry, which page?", tr: "Pardon, hangi sayfa?", ok: true, next: "n2" },
          { en: "Excuse me, I don't have my book today.", tr: "Affedersiniz, bugün kitabım yanımda değil.", ok: true, next: "n2b" },
          { en: "Sorry, I no have my book.", tr: "Pardon, kitabım yok.", ok: false, feedback_tr: "Olumsuz için 'no' değil 'don't': 'I don't have my book.'", next: "start" },
        ],
      },
      n2: {
        npc: "Page 12. Exercise 3.",
        npc_tr: "12. sayfa. 3. alıştırma.",
        replies: [
          { en: "Thank you. Can you repeat the question, please?", tr: "Teşekkürler. Soruyu tekrar eder misiniz, lütfen?", ok: true, next: "n3" },
          { en: "Thanks. What do we do in this exercise?", tr: "Teşekkürler. Bu alıştırmada ne yapıyoruz?", ok: true, next: "n3" },
          { en: "Thank you. Can you to repeat, please?", tr: "Teşekkürler. Tekrar eder misiniz, lütfen?", ok: false, feedback_tr: "'can'den sonra 'to' gelmez: 'Can you repeat that, please?'", next: "n2" },
        ],
      },
      n2b: {
        npc: "That's OK. You can share with Deniz.",
        npc_tr: "Sorun değil. Deniz'le paylaşabilirsin.",
        replies: [
          { en: "Thank you, Ms. Brown.", tr: "Teşekkürler Ms. Brown.", ok: true, next: "n3" },
          { en: "OK, thank you.", tr: "Tamam, teşekkürler.", ok: true, next: "n3" },
          { en: "Thank you, teacher Brown.", tr: "Teşekkürler Brown Hoca.", ok: false, feedback_tr: "İngilizcede öğretmene 'teacher Brown' denmez. Soyadla hitap edilir: 'Ms. Brown'.", next: "n2b" },
        ],
      },
      n3: {
        npc: "Read the text and answer the questions. Any questions?",
        npc_tr: "Metni okuyun ve soruları cevaplayın. Sorusu olan var mı?",
        replies: [
          { en: "What does 'library' mean?", tr: "'library' ne demek?", ok: true, next: "n4" },
          { en: "How do you spell 'answer'?", tr: "'answer' nasıl yazılıyor?", ok: true, next: "n4s" },
          { en: "What means 'library'?", tr: "'library' ne demek?", ok: false, feedback_tr: "Soruda 'does' gerekir: 'What does library mean?'", next: "n3" },
        ],
      },
      n4: {
        npc: "A library is a place with a lot of books. You can read there.",
        npc_tr: "Kütüphane çok kitabın olduğu bir yer. Orada okuyabilirsin.",
        replies: [
          { en: "Oh, I understand. Thank you.", tr: "Ah, anladım. Teşekkürler.", ok: true, next: "n5" },
          { en: "Ah, 'kütüphane' in Turkish. Thanks!", tr: "Ah, Türkçesi 'kütüphane'. Teşekkürler!", ok: true, next: "n5" },
          { en: "Oh, I am understand.", tr: "Ah, anladım.", ok: false, feedback_tr: "'understand' bir fiil, 'am' almaz: 'I understand.'", next: "n4" },
        ],
      },
      n4s: {
        npc: "A-N-S-W-E-R. The 'w' is silent.",
        npc_tr: "A-N-S-W-E-R. 'w' okunmaz.",
        replies: [
          { en: "Thank you. That's difficult!", tr: "Teşekkürler. Bu zor!", ok: true, next: "n5" },
          { en: "Oh, I see. Thanks.", tr: "Ah, anlıyorum. Teşekkürler.", ok: true, next: "n5" },
          { en: "Thank you. Is difficult!", tr: "Teşekkürler. Zor!", ok: false, feedback_tr: "İngilizcede özne atlanmaz: 'It is difficult!' ya da 'That's difficult!'", next: "n4s" },
        ],
      },
      n5: {
        npc: "Good. You have ten minutes. Start now, please.",
        npc_tr: "Güzel. On dakikanız var. Lütfen şimdi başlayın.",
        replies: [
          { en: "OK. Can I use a dictionary?", tr: "Tamam. Sözlük kullanabilir miyim?", ok: true, next: null },
          { en: "OK, thank you.", tr: "Tamam, teşekkürler.", ok: true, next: null },
          { en: "OK. Can I use dictionary?", tr: "Tamam. Sözlük kullanabilir miyim?", ok: false, feedback_tr: "Tekil sayılabilir isimden önce 'a' gerekir: 'a dictionary'.", next: "n5" },
        ],
      },
    },
  },
  {
    id: "s_exam_a2",
    goal: "exam",
    cefr: "A2",
    title_tr: "Sözlü sınavda kendinden bahsetmek",
    setting_tr: "Bir İngilizce sözlü sınavındasın. Sınav görevlisi sana sorular soruyor.",
    npc_name: "Examiner",
    start: "start",
    nodes: {
      start: {
        npc: "Good afternoon. Can you tell me your name, please?",
        npc_tr: "İyi günler. Adınızı söyler misiniz, lütfen?",
        replies: [
          { en: "Good afternoon. My name is Zeynep Arslan.", tr: "İyi günler. Adım Zeynep Arslan.", ok: true, next: "n2" },
          { en: "Hello. I'm Zeynep Arslan.", tr: "Merhaba. Ben Zeynep Arslan.", ok: true, next: "n2" },
          { en: "Good afternoon. Me name is Zeynep.", tr: "İyi günler. Adım Zeynep.", ok: false, feedback_tr: "'benim' = 'my': 'My name is Zeynep.'", next: "start" },
        ],
      },
      n2: {
        npc: "Thank you. Where do you live, Zeynep?",
        npc_tr: "Teşekkürler. Nerede yaşıyorsunuz Zeynep?",
        replies: [
          { en: "I live in Eskişehir, in the city centre.", tr: "Eskişehir'de, şehir merkezinde yaşıyorum.", ok: true, next: "n3" },
          { en: "I live in a small town near Bursa.", tr: "Bursa yakınlarında küçük bir kasabada yaşıyorum.", ok: true, next: "n3" },
          { en: "I live Eskişehir.", tr: "Eskişehir'de yaşıyorum.", ok: false, feedback_tr: "Şehirden önce 'in' gerekir: 'I live in Eskişehir.'", next: "n2" },
        ],
      },
      n3: {
        npc: "What do you do in your free time?",
        npc_tr: "Boş zamanlarınızda ne yaparsınız?",
        replies: [
          { en: "I like reading and I often play volleyball.", tr: "Okumayı severim ve sık sık voleybol oynarım.", ok: true, next: "n4" },
          { en: "I usually watch films with my friends.", tr: "Genellikle arkadaşlarımla film izlerim.", ok: true, next: "n4m" },
          { en: "I like read books.", tr: "Kitap okumayı severim.", ok: false, feedback_tr: "'like'tan sonra fiil '-ing' alır: 'I like reading books.'", next: "n3" },
        ],
      },
      n4: {
        npc: "How often do you play volleyball?",
        npc_tr: "Ne sıklıkla voleybol oynarsınız?",
        replies: [
          { en: "Twice a week, usually on Tuesdays and Thursdays.", tr: "Haftada iki kez, genellikle salı ve perşembe.", ok: true, next: "n5" },
          { en: "I play every weekend with my team.", tr: "Her hafta sonu takımımla oynarım.", ok: true, next: "n5" },
          { en: "I twice a week play.", tr: "Haftada iki kez oynarım.", ok: false, feedback_tr: "Fiil özneden hemen sonra gelir, sıklık sona: 'I play twice a week.'", next: "n4" },
        ],
      },
      n4m: {
        npc: "What kind of films do you like?",
        npc_tr: "Ne tür filmleri seversiniz?",
        replies: [
          { en: "I like comedies because they're funny.", tr: "Komedileri severim çünkü komikler.", ok: true, next: "n5" },
          { en: "I love action films. They're exciting.", tr: "Aksiyon filmlerine bayılırım. Heyecan vericiler.", ok: true, next: "n5" },
          { en: "I like comedies because they funny.", tr: "Komedileri severim çünkü komikler.", ok: false, feedback_tr: "'are' eksik: 'because they are funny'.", next: "n4m" },
        ],
      },
      n5: {
        npc: "Tell me about your last holiday.",
        npc_tr: "Bana son tatilinizden bahsedin.",
        replies: [
          { en: "Last summer I went to Antalya with my family.", tr: "Geçen yaz ailemle Antalya'ya gittim.", ok: true, next: "n6" },
          { en: "Last year I visited my grandparents in Trabzon.", tr: "Geçen yıl Trabzon'daki büyükannemle büyükbabamı ziyaret ettim.", ok: true, next: "n6" },
          { en: "Last summer I go to Antalya with my family.", tr: "Geçen yaz ailemle Antalya'ya gittim.", ok: false, feedback_tr: "Geçmiş zamanda 'go' → 'went': 'Last summer I went to Antalya.'", next: "n5" },
        ],
      },
      n6: {
        npc: "That sounds nice. Thank you, that's the end of the test.",
        npc_tr: "Kulağa hoş geliyor. Teşekkürler, sınav bitti.",
        replies: [
          { en: "Thank you very much. Goodbye.", tr: "Çok teşekkür ederim. Hoşça kalın.", ok: true, next: null },
          { en: "Thank you. Have a nice day.", tr: "Teşekkürler. İyi günler.", ok: true, next: null },
          { en: "Thanks. Bye bye, teacher!", tr: "Sağ olun. Görüşürüz hocam!", ok: false, feedback_tr: "Sınavda daha resmi ol ve 'teacher' diye hitap etme: 'Thank you very much. Goodbye.'", next: "n6" },
        ],
      },
    },
  },
  {
    id: "s_general_a1",
    goal: "general",
    cefr: "A1",
    title_tr: "Yol sormak",
    setting_tr: "Yabancı bir şehirdesin ve kayboldun. Biri sana yardım etmek istiyor.",
    npc_name: "Kate",
    start: "start",
    nodes: {
      start: {
        npc: "Hi! Can I help you?",
        npc_tr: "Merhaba! Yardım edebilir miyim?",
        replies: [
          { en: "Yes, please. Where is the train station?", tr: "Evet, lütfen. Tren istasyonu nerede?", ok: true, next: "n2" },
          { en: "Yes, please. Is there a pharmacy near here?", tr: "Evet, lütfen. Buralarda eczane var mı?", ok: true, next: "n2p" },
          { en: "Yes, please. Where train station?", tr: "Evet, lütfen. Tren istasyonu nerede?", ok: false, feedback_tr: "'is' ve 'the' eksik: 'Where is the train station?'", next: "start" },
        ],
      },
      n2: {
        npc: "Go straight and turn left at the bank.",
        npc_tr: "Düz gidin ve bankadan sola dönün.",
        replies: [
          { en: "Sorry, can you say that again, please?", tr: "Pardon, tekrar söyler misiniz, lütfen?", ok: true, next: "n3" },
          { en: "Turn left at the bank. OK. Is it far?", tr: "Bankadan sola. Tamam. Uzak mı?", ok: true, next: "n4" },
          { en: "Sorry, you can say again?", tr: "Pardon, tekrar söyler misiniz?", ok: false, feedback_tr: "Soruda 'can' başa gelir: 'Can you say that again, please?'", next: "n2" },
        ],
      },
      n3: {
        npc: "Sure. Go straight. At the bank, turn left. The station is on the right.",
        npc_tr: "Tabii. Düz gidin. Bankada sola dönün. İstasyon sağda.",
        replies: [
          { en: "Thank you. Is it far?", tr: "Teşekkürler. Uzak mı?", ok: true, next: "n4" },
          { en: "Got it, thanks. Can I walk there?", tr: "Anladım, teşekkürler. Oraya yürüyebilir miyim?", ok: true, next: "n4" },
          { en: "Thank you. It is far?", tr: "Teşekkürler. Uzak mı?", ok: false, feedback_tr: "Soruda 'is' başa gelir: 'Is it far?'", next: "n3" },
        ],
      },
      n2p: {
        npc: "Yes, there is. It's next to the supermarket, on Park Street.",
        npc_tr: "Evet, var. Park Sokağı'nda, süpermarketin yanında.",
        replies: [
          { en: "Thank you. Is it far?", tr: "Teşekkürler. Uzak mı?", ok: true, next: "n4" },
          { en: "Great. Can I walk there?", tr: "Harika. Oraya yürüyebilir miyim?", ok: true, next: "n4" },
          { en: "Thank you. There is far?", tr: "Teşekkürler. Uzak mı?", ok: false, feedback_tr: "Uzaklık sorulurken 'there is' kullanılmaz: 'Is it far?'", next: "n2p" },
        ],
      },
      n4: {
        npc: "It's not far. It's about five minutes on foot.",
        npc_tr: "Uzak değil. Yürüyerek yaklaşık beş dakika.",
        replies: [
          { en: "Thank you very much!", tr: "Çok teşekkür ederim!", ok: true, next: "n5" },
          { en: "Great, thanks for your help.", tr: "Harika, yardımınız için teşekkürler.", ok: true, next: "n5" },
          { en: "Thanks for help me.", tr: "Bana yardım ettiğiniz için teşekkürler.", ok: false, feedback_tr: "'for'dan sonra fiil '-ing' alır: 'Thanks for helping me.' ya da 'Thanks for your help.'", next: "n4" },
        ],
      },
      n5: {
        npc: "You're welcome. Have a nice day!",
        npc_tr: "Rica ederim. İyi günler!",
        replies: [
          { en: "You too. Bye!", tr: "Size de. Hoşça kalın!", ok: true, next: null },
          { en: "Thanks, you too!", tr: "Teşekkürler, size de!", ok: true, next: null },
          { en: "Me too. Bye!", tr: "Ben de. Hoşça kalın!", ok: false, feedback_tr: "'Me too' = 'ben de'. Karşılık dilerken 'You too!' denir.", next: "n5" },
        ],
      },
    },
  },
  {
    id: "s_general_a2",
    goal: "general",
    cefr: "A2",
    title_tr: "Arkadaşla hafta sonu planı",
    setting_tr: "Bir arkadaşın sana hafta sonu planını soruyor.",
    npc_name: "Lisa",
    start: "start",
    nodes: {
      start: {
        npc: "Hey! What are you doing this weekend?",
        npc_tr: "Selam! Bu hafta sonu ne yapıyorsun?",
        replies: [
          { en: "Nothing special. Why?", tr: "Özel bir şey yok. Neden?", ok: true, next: "n2" },
          { en: "I'm going to visit my parents on Saturday, but I'm free on Sunday.", tr: "Cumartesi ailemi ziyaret edeceğim ama pazar boşum.", ok: true, next: "n2" },
          { en: "I going to visit my parents on Saturday.", tr: "Cumartesi ailemi ziyaret edeceğim.", ok: false, feedback_tr: "'going to' ile 'am' gerekir: 'I am going to visit my parents.'", next: "start" },
        ],
      },
      n2: {
        npc: "There's a new film at the cinema. Do you want to come?",
        npc_tr: "Sinemada yeni bir film var. Gelmek ister misin?",
        replies: [
          { en: "Sure! What kind of film is it?", tr: "Tabii! Ne tür bir film?", ok: true, next: "n3" },
          { en: "Thanks, but I don't really like going to the cinema. How about a picnic?", tr: "Teşekkürler ama sinemaya gitmeyi pek sevmem. Pikniğe ne dersin?", ok: true, next: "n3p" },
          { en: "Yes, I want come.", tr: "Evet, gelmek istiyorum.", ok: false, feedback_tr: "'want'tan sonra 'to' gelir: 'Yes, I want to come.'", next: "n2" },
        ],
      },
      n3: {
        npc: "It's a comedy. Everyone says it's funnier than the first one.",
        npc_tr: "Bir komedi. Herkes ilkinden daha komik olduğunu söylüyor.",
        replies: [
          { en: "Great! What time does it start?", tr: "Harika! Saat kaçta başlıyor?", ok: true, next: "n4" },
          { en: "Sounds good. I love comedies.", tr: "Kulağa iyi geliyor. Komedilere bayılırım.", ok: true, next: "n4" },
          { en: "Great! What time it starts?", tr: "Harika! Saat kaçta başlıyor?", ok: false, feedback_tr: "Soruda 'does' gerekir: 'What time does it start?'", next: "n3" },
        ],
      },
      n3p: {
        npc: "A picnic? Good idea! If the weather is nice, we can go to the park.",
        npc_tr: "Piknik mi? İyi fikir! Hava güzel olursa parka gidebiliriz.",
        replies: [
          { en: "And if it rains, we'll watch a film at home.", tr: "Yağmur yağarsa da evde film izleriz.", ok: true, next: "n4" },
          { en: "Perfect. I'll bring some sandwiches.", tr: "Mükemmel. Biraz sandviç getiririm.", ok: true, next: "n4" },
          { en: "And if it will rain, we'll watch a film at home.", tr: "Yağmur yağarsa da evde film izleriz.", ok: false, feedback_tr: "'if' cümlesinde 'will' kullanılmaz: 'If it rains, we'll watch a film.'", next: "n3p" },
        ],
      },
      n4: {
        npc: "OK! Let's meet on Sunday at 4 o'clock. Is that OK?",
        npc_tr: "Tamam! Pazar saat 4'te buluşalım. Uygun mu?",
        replies: [
          { en: "Yes, that's perfect. Where shall we meet?", tr: "Evet, mükemmel. Nerede buluşalım?", ok: true, next: "n5" },
          { en: "Can we meet a bit later, at 5?", tr: "Biraz daha geç, 5'te buluşabilir miyiz?", ok: true, next: "n5" },
          { en: "Yes, that's perfect. Where we meet?", tr: "Evet, mükemmel. Nerede buluşalım?", ok: false, feedback_tr: "Soru kelimesinden sonra yardımcı fiil gelir: 'Where shall we meet?'", next: "n4" },
        ],
      },
      n5: {
        npc: "OK, no problem. Let's meet at the bus stop near my house.",
        npc_tr: "Tamam, sorun değil. Evimin yakınındaki otobüs durağında buluşalım.",
        replies: [
          { en: "OK, see you on Sunday!", tr: "Tamam, pazar görüşürüz!", ok: true, next: null },
          { en: "Great. I'll text you when I leave.", tr: "Harika. Çıkınca sana mesaj atarım.", ok: true, next: null },
          { en: "OK, see you at Sunday!", tr: "Tamam, pazar görüşürüz!", ok: false, feedback_tr: "Günlerle 'at' değil 'on' kullanılır: 'See you on Sunday!'", next: "n5" },
        ],
      },
    },
  },
]
