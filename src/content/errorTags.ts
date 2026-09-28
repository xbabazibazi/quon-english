import type { ErrorTagDef, ErrorTag } from './types'

export const ERROR_TAGS: ErrorTagDef[] = [
  { code: 'TOBE', title_tr: '"to be" eksik', explanation_tr: 'Türkçede "Ben mühendisim" deriz ama İngilizcede araya am/is/are girmek zorunda: "I am an engineer."' },
  { code: 'ART', title_tr: 'a / an / the', explanation_tr: 'Türkçede artikel yok. İngilizcede tekil sayılabilir isimlerin önünde a/an olur: "a car", "an apple".' },
  { code: 'GEN', title_tr: 'he / she / it', explanation_tr: 'Türkçede "o" cinsiyetsiz. İngilizcede erkek için he, kadın için she, nesne ve hayvan için it kullanılır.' },
  { code: 'PLURAL', title_tr: 'Çoğul -s', explanation_tr: 'Türkçede "üç araba" deriz ama İngilizcede sayıdan sonra isim çoğul olur: "three cars".' },
  { code: 'WORD_ORDER', title_tr: 'Kelime sırası', explanation_tr: 'Türkçede fiil sonda, İngilizcede ortada: Özne + Fiil + Nesne. "I coffee drink" değil, "I drink coffee".' },
  { code: 'SVAGR', title_tr: 'he/she/it + -s', explanation_tr: 'Geniş zamanda he, she, it ile fiil -s alır: "She works", "He goes".' },
  { code: 'DO_Q', title_tr: 'do / does ile soru', explanation_tr: 'Geniş zamanda soru için başa do/does gelir: "Do you like tea?", "Does she work?"' },
  { code: 'NEG', title_tr: 'Olumsuz cümle', explanation_tr: '"I no like" olmaz. Fiilli cümlede don\'t/doesn\'t, to be ile isn\'t/aren\'t: "I don\'t like", "It isn\'t cold".' },
  { code: 'PREP', title_tr: 'in / on / at', explanation_tr: 'Türkçedeki -de/-da için İngilizcede üç ayrı edat var: in (içinde: in the box, in Istanbul), on (üstünde: on the table, on Monday), at (noktada: at home, at 5 o\'clock).' },
  { code: 'THERE', title_tr: 'there is / there are', explanation_tr: '"Odada bir masa var" için "have" değil "there is" kullanılır: "There is a table in the room."' },
  { code: 'CAN', title_tr: 'can kullanımı', explanation_tr: '"can" dan sonra fiil yalın gelir, "to" ve "-s" olmaz: "She can swim." ("can to swim" ✗, "can swims" ✗)' },
  { code: 'POSS', title_tr: 'İyelik', explanation_tr: '"Benim arabam" = "my car" (my + isim). İsimle iyelik için \'s: "Ali\'s car".' },
  { code: 'AGREE', title_tr: '"I am agree"', explanation_tr: '"agree" bir fiildir, to be almaz: "I agree." Aynı şekilde "I am understand" değil "I understand".' },
  { code: 'MAKE_DO', title_tr: 'make / do', explanation_tr: 'Türkçedeki "yapmak" iki fiile ayrılır: make (üretmek: make coffee, make a mistake), do (iş/görev: do homework, do sport).' },
  { code: 'PPERF', title_tr: 'Present perfect', explanation_tr: 'Türkçede karşılığı yok. Geçmişte başlayıp hâlâ süren veya zamanı söylenmeyen şeyler için: "I have lived here for 3 years."' },
  { code: 'PAST', title_tr: 'Geçmiş zaman -ed', explanation_tr: 'Geçmiş zamanda düzenli fiil -ed alır, düzensizler değişir: "worked", "went", "had".' },
  { code: 'SOME_ANY', title_tr: 'some / any', explanation_tr: 'Olumlu cümlede some, soru ve olumsuzda any: "I have some money." / "Do you have any money?"' },
  { code: 'MUCH_MANY', title_tr: 'much / many', explanation_tr: 'Sayılabilenle many (many cars), sayılamayanla much (much water).' },
  { code: 'ING', title_tr: 'Edattan sonra -ing', explanation_tr: 'Edattan (in, at, of, before…) sonra fiil -ing alır: "good at swimming", "before leaving".' },
  { code: 'TIME', title_tr: 'Zaman ifadeleri', explanation_tr: 'Saat için at (at 7), gün için on (on Monday), ay/yıl için in (in May, in 2020).' },
]

export const ERROR_TAG_MAP: Record<ErrorTag, ErrorTagDef> = Object.fromEntries(
  ERROR_TAGS.map((t) => [t.code, t]),
) as Record<ErrorTag, ErrorTagDef>
