# Habit formation, ethical gamification and monetization for a free, ad-supported English PWA for Turkish speakers

Research date: 2 November 2026. This is not legal, tax or financial advice. Items marked **[Lawyer]** or **[Accountant]** need a professional before anyone acts on them.

Evidence labels: **[F]** means the cited page was fetched and read (through a page-summarizing fetch tool). **[S]** means only a search-result excerpt was seen, so treat it as weaker. Where several URLs came from one search summary and the exact match could not be confirmed, both are cited.

## Habit and motivation evidence: streaks, reminders, loss aversion, SDT, L2 Motivational Self System, gamification's effect on learning versus engagement, dark patterns

### Takeaway
Gamification has a positive but heterogeneous effect on learning, and pooled numbers are inflated by weak designs and unpublished theses. Streak and notification evidence is mostly company data showing engagement, not learning. Build on autonomy, low daily bars and forgiving streaks, and measure learning separately from activity.

### Cited Findings

**Gamification and learning**
- General education: Sailer and Homner's meta-analysis (*Educational Psychology Review*, vol. 32, 2020) found positive effects on cognitive, motivational and behavioral learning outcomes. Only the cognitive effect stayed stable in the high-rigor subsplit; the motivational and behavioral effects were less stable. Game fiction and social interaction moderated behavioral outcomes, and competition combined with collaboration may matter for motivational outcomes — [Augsburg repository record](https://opus.bibliothek.uni-augsburg.de/opus4/frontdoor/index/index/docId/109056) [S]
- Foreign language, systematic review: Luo (2023, *Behavioral Sciences* 13(4):331), 21 empirical studies, concludes effectiveness "is mixed". Achievement: 11 positive of 16 studies, with non-positive results also reported. Affective engagement: 8 of 10 positive. Behavioral engagement: 4 of 9 positive, with 3 not reporting. 13 of 21 studies had no control group. The review warns of novelty effects in short studies and of "pointsification" — [Luo 2023, PMC](https://pmc.ncbi.nlm.nih.gov/articles/PMC10135444/) [F]
- That review also notes more behavioral investment did not guarantee better achievement in one study, which is a direct warning against using activity as a proxy for learning — [Luo 2023](https://pmc.ncbi.nlm.nih.gov/articles/PMC10135444/) [F]
- Digital game-based L2 learning (games, not gamification): Dixon, Dixon and Jordan (2022, *Language Learning & Technology*) report d = 0.50 for between-groups designs and d = 0.95 for within-group designs — [LLT](https://www.lltjournal.org/item-detail/1010/) [S]
- Gamification and English proficiency: pooled effect 0.517 (11 studies, N = 610), with master's theses at g = 0.799 against journal articles at g = 0.289. This is a secondary-hosted summary, so check the original — [encyclopedia.pub](https://encyclopedia.pub/entry/history/show/107433) [S]
- A Marmara University thesis pooling 41 studies reports 0.957 for academic achievement. It is a thesis, and it sits well above the journal figure above — [Marmara open access](https://openaccess.marmara.edu.tr/entities/publication/78e3776d-7138-4858-a243-5e17e31be12b) [S]

**Autonomy, rewards and self-determination**
- Hanus and Fox (2015, *Computers & Education* 80:152-161), a longitudinal classroom study with mandatory badges and a leaderboard: gamified students reported lower intrinsic motivation and had lower final exam scores than the non-gamified class. The authors point to the leaderboard or the lack of autonomy rather than game elements as such, and frame this using cognitive evaluation theory (controlling rewards undermine intrinsic motivation; informational ones can support it) — [gamification-research.org summary](https://gamification-research.org/2014/08/gamification-considered-harmful/); [review table](https://pmc.ncbi.nlm.nih.gov/articles/PMC10448467/table/tbl4) [S]
- This was one classroom study with compulsory elements in a graded course. It does not show that optional elements in a voluntary app behave the same way (see Inferences).

**Streaks and loss aversion**
- Duolingo company data (Jan 2022): learners reaching a 7-day streak are 3.6 times more likely to finish their course; allowing two Streak Freezes raised relative daily active learners by +0.38%; a milestone animation raised the 7-day-later activity of new learners by +1.7%. No sample sizes, methods or significance levels are published. The 3.6x figure is correlational and has obvious self-selection — [Duolingo blog](https://blog.duolingo.com/how-duolingo-streak-builds-habit) [F]
- The same post cites a UPenn/UCLA study that "slack" can motivate more than rigid rules, and names loss aversion as the streak mechanism without a specific citation — [Duolingo blog](https://blog.duolingo.com/how-duolingo-streak-builds-habit) [F]
- A claimed Duolingo A/B test (40%+ more people kept a 7-day streak when one lesson sufficed rather than the full daily goal) appears only in secondary sources, and no primary source was found. Treat it as unverified — [Smashing Magazine](https://shop.smashingmagazine.com/2026/02/designing-streak-system-ux-psychology/); [Substack case study](https://softwareandsynapses.substack.com/p/duolingo-an-actionable-case-study) [S]

**Habit formation**
- Lally et al. (2010): 96 undergraduates, 84 days, a cued daily health behavior. Median time to peak automaticity was 66 days, with a range of 18 to a modeled 254 days. The headline figure rests on 39 participants who fit the model, and about half had not reached the habit threshold by day 84. The upper bound is an extrapolation. Lally herself rejects 66 days as a fixed rule — [Behavioral Scientist](https://www.thebehavioralscientist.com/articles/how-long-to-form-a-habit); [University of Surrey](https://www.surrey.ac.uk/news/does-it-really-take-66-days-form-habit-we-asked-expert-dr-pippa-lally) [S]
- Missing one opportunity did not materially affect habit formation, per a secondary summary of Lally — [Morung Express](https://mail.morungexpress.com/habit-streaks-serve-as-an-incentive-for-habit-formation) [S]
- A 2024 meta-analysis reportedly found median habit formation times of 59 to 66 days — [Behavioral Scientist](https://www.thebehavioralscientist.com/articles/how-long-to-form-a-habit) [S]

**Reminders**
- Yancey and Settles (KDD 2020) optimize Duolingo's daily reminders with a "sleeping, recovering" bandit, on the premise that repeated messages lose effect and recover with rest. The published dataset holds 200 million notifications over 35 days, with conversion measured as activity within 2 hours. The outcome is engagement, not learning — [Duolingo Research](https://research.duolingo.com/); [paper listing](https://paperswithcode.com/paper/a-sleeping-recovering-bandit-algorithm-for) [S]

**L2 Motivational Self System**
- Al-Hoorie (2018, SSLLT): first L2MSS meta-analysis, 32 reports, 39 samples, 32,078 learners. Secondary sources say ideal L2 self and L2 learning experience relate positively to achievement while ought-to self shows negative or no effect — [SSLLT](https://pressto.amu.edu.pl/index.php/ssllt/article/view/12295) [S]
- Larger synthesis (Georgetown dissertation, 100 studies, 51,905 participants): intended effort correlates strongly with L2 learning experience (r = .62) and ideal L2 self (r = .61), and less with ought-to self (r = .37). Achievement correlations are small: ideal self r = .24, learning experience r = .27, ought-to self r = .01 — [Georgetown repository](https://repository.digital.georgetown.edu/handle/10822/1064671) [S]

**Dark patterns, with Turkish enforcement**
- Reklam Kurulu (349th meeting, announced 23 Sep 2024) sanctioned these subscription design traps: pre-selected packages or add-ons; emphasizing "accept" over "reject"; interfaces obstructing purchase without an upgrade; "popular" labels without transparent criteria or numbers; and requiring payment details for a free trial — [Ticaret Bakanlığı](https://ticaret.gov.tr/haberler/ticaret-bakanligi-reklam-kurulu-abonelik-hizmetlerine-iliskin-tasarim-tuzaklarina-dikkat-cekiyor) [F]
- The Ministry made dark commercial patterns a main Board agenda item in August 2023, after amending the advertising regulation — [Ticaret Bakanlığı](https://ticaret.gov.tr/haberler/reklam-kurulu-tarafindan-karanlik-ticari-tasarimlar-incelemeye-alindi) [S]
- A law firm's review says the Board's 2025 decisions make dark patterns an enforcement priority for 2026 — [Galá Law](https://blog.galalaw.com/post/102me3h/key-trends-in-advertisement-board-decisions-in-2025) [S]
- Consumer backlash example: Duolingo's energy system (announced July 2025) drains on every exercise rather than only on mistakes, and subscribers get unlimited energy. Critics document user departures, and a petition exists. These are anecdotal signals, not measured churn — [Android Authority](https://www.androidauthority.com/quitting-duolingo-energy-system-3599842/); [PCWorld](https://www.pcworld.com/article/2924235/why-i-fell-out-of-love-with-duolingo.html); [change.org](https://www.change.org/p/duolingo-hearts-not-energy) [S]

### Inferences
- Realistic expectation: gamification is a small-to-moderate aid, not the learning mechanism. Journal-level language figures (about g = 0.3) are a more defensible planning anchor than headline 0.5 to 0.95 values.
- The L2MSS pattern (r about .6 with intended effort, about .25 with achievement) suggests that motivation features can raise willingness to study without producing proportional proficiency gains. Product metrics should include periodic proficiency checks, not just streak and activity counts.
- Design rules that fit the evidence: count one short session as a streak day; offer free, automatic streak repair; never sell streak repair (this would convert loss aversion into revenue and contradict the no-hearts promise); make leaderboards opt-in and not the default for school users; frame messages toward an "ideal English-speaking self" (a job, travel, exams chosen by the user) rather than duty or guilt.
- Reminders: user-chosen time, opt-in after a first success, low frequency with rest periods, and no guilt copy. Web Push on iOS needs an installed PWA, which is background knowledge and not checked here.
- Dark patterns to ban internally: guilt notifications; streak-loss countdowns tied to purchase; paywalls interrupting a lesson; unsupported "most popular" badges; pre-selected annual plans; card-required trials; visually downgraded decline buttons; mid-lesson interstitials; hard-to-find cancel.
- The app's no-hearts stance is a positioning asset: the most visible competitor complaint (energy consumed by correct answers) cannot occur.

### Gaps
- Sailer and Homner's exact effect sizes could not be read because the repository and publisher pages failed. From memory, they are about g = .49 cognitive, .36 motivational and .25 behavioral. **These are not verified here and should be checked against [the DOI](https://doi.org/10.1007/s10648-019-09498-w) before quoting.**
- No independent, peer-reviewed causal study was found showing that streaks produce lasting habits or better L2 outcomes. No independent Duolingo efficacy or dropout study was read.
- Yancey and Settles' lift figures could not be extracted because the PDF was unreadable by the tool.
- Primary self-determination theory papers (Ryan and Deci) and Deterding's critiques were not retrieved. SDT claims here rest on the Hanus and Fox framing.
- No study was found specifically on Turkish learners, school-age app use, or gamification.

## Freemium conversion benchmarks, ad revenue and eCPM for Turkey versus global, AdSense versus AdMob, and ad viability in a PWA

### Takeaway
Subscription benchmarks exist, but are all-country medians skewed to rich markets. No credible Turkey eCPM figure was found, so plan with conservative emerging-market proxies and measure real numbers. AdSense policy explicitly lists Trusted Web Activities as a supported frame, while AdMob needs a native SDK, so ads are viable but likely to produce low revenue at small scale.

### Cited Findings

**Subscriptions**
- RevenueCat State of Subscription Apps 2026 (calendar 2025 data, 115,000+ apps, $16B+ revenue): Education download-to-trial is 6.5% at D30; revenue per install $0.30 median at D14; median prices $44.99/yr (highest of any category) and $9.99/mo; realized LTV per payer after one year $22.82; 50.3% of trials last 5-9 days; 78.5% of trial starts occur on Day 0, the lowest of any category; 28.5% of paid conversions on Day 0, also the lowest — [RevenueCat Education](https://www.revenuecat.com/state-of-subscription-apps-2026-education) [F]
- Same report, all categories: median download-to-paid at D35 is 10.7% for hard paywalls and 2.1% for freemium. No Education-only median was visible on the page — [RevenueCat Education](https://www.revenuecat.com/state-of-subscription-apps-2026-education) [F]
- Education has a median of $3,614 monthly revenue after one year, second after business apps. Survivorship applies because the dataset requires active revenue — [ppc.land](https://ppc.land/the-app-middle-class-is-dying-and-revenuecats-data-shows-exactly-how-fast/); [SaaStr](https://saastr.com/the-top-10-learnings-from-revenuecats-state-of-subscription-apps-how-115000-mobile-apps-deliver-16b-in-revenue-whats-working-whats-quietly-killing-growth) [S]
- Adapty 2026 (16,000+ apps, over $3B): Education trial users generate 50.4% more 12-month LTV than direct buyers; 23.5% of trials start at 31+ days, the highest late-start rate of any category. It gives global median prices of $12.99/mo and $38.42/yr — [Adapty](https://adapty.io/blog/education-app-subscription-benchmarks/) [S]
- Adapty's and RevenueCat's trial-start figures differ (71.3% vs 78.5% on Day 0) because the datasets and windows differ. Neither should be treated as definitive.

**Language-app reference point: Duolingo**
- Paid subscribers 12.7M and DAU 58.7M at Q2 2026 — [Q2 2026 shareholder letter](https://www.sec.gov/Archives/edgar/data/0001562088/000162828026053299/q2fy26duolingo6-30x26share.htm) [S]
- Q4 2025: 12.2M subscribers and 133.1M MAU, which works out to about 9.2% of MAU (my calculation, up from about 8.1% in Q4 2024) — [Q4 2025 letter](https://www.sec.gov/Archives/edgar/data/1562088/000162828026012513/q4fy25duolingo12-31x25shar.htm) [F]. A roundup citing the 10-K gives 9.2% for 2025 and 8.8% for 2024, so the 2024 figures differ by basis — [Voxbooster](https://voxbooster.com/blog/duolingo-statistics-2026) [S]

**Ad rates**
- 2026 "anchor" banner eCPM ranges from an undated marketing glossary: US iOS $0.50-2, US Android $0.30-1.50, India/Brazil Android $0.10-0.50. Turkey is not listed — [MWM](https://mwm.ai/glossary/banner-ad) [F]
- US iOS rewarded video about $10-25 and interstitial $5-15 — [MWM rewarded](https://mwm.ai/glossary/rewarded-video) [S]. Another vendor gives iOS rewarded $10-30 and Android banner $0.25-1.50 — [MonetizeMore](https://www.monetizemore.com/blog/how-much-ad-revenue-can-apps-generate/) [S]
- A March 2026 article's country tables, drawn from Appodeal, do not include Turkey — [Mistplay](https://business.mistplay.com/resources/mobile-ads-ecpm/) [F]
- Appodeal says Russia and Turkey saw "consistent growth", without giving figures in the excerpt seen — [Appodeal](https://ru.appodeal.com/blog/mobile-ecpm-report-app-ad-monetization-worldwide-performance) [S]

**AdSense and AdMob policy in a wrapped PWA**
- AdSense policy prohibits Google ads "integrated into a software application (does not apply to AdMob)", but its section on web content viewing frames lists **Chrome Custom Tabs and Trusted Web Activities** as supported Android frames. On iOS only SFSafariViewController on iOS 9 and 10 is named. WebView use goes through the WebView API for Ads and Google Mobile Ads SDK — [AdSense program policies](https://support.google.com/adsense/answer/48182?hl=en) [F]
- AdMob in-app ads may appear next to a WebView when the Google Mobile Ads SDK is used, with WebView content subject to browser content policy — [AdSense program policies](https://support.google.com/adsense/answer/48182?hl=en) [F]; [AdMob policies](https://support.google.com/admob/answer/48182) [S]

**Ad load has a cost even at scale**
- Duolingo's Q4 2025 letter says friction including increased ad load and upsells contributed to slower DAU growth, states "we've decided to prioritize user growth over monetization", and estimates more than $50M of foregone bookings reinvested in the free experience — [Q4 2025 letter](https://www.sec.gov/Archives/edgar/data/1562088/000162828026012513/q4fy25duolingo12-31x25shar.htm) [F]

### Inferences
- Illustrative scenario only, using India/Brazil as an unverified proxy for Turkey: 1,000 DAU × 6 banner impressions per day × $0.10-0.50 eCPM gives about $0.60-3.00 per day, or $18-90 per month. Replace these inputs with real country reports as soon as the app has traffic.
- Hosting and AI costs could exceed ad income at small scale. This supports keeping AI out of the free core or strictly rate-limited, rather than increasing ad load.
- The hard paywall's 10.7% is not a usable target, since the founding promise rules hard paywalls out. Benchmark on 2.1% freemium and expect less, because the all-country median includes rich markets and Turkey has lower purchasing power (background inference, no Turkey conversion data found). A very generous free core could plausibly convert below median.
- RevenueCat's late conversion pattern for Education implies that a dormant tier should not be pushed during onboarding. It suits offers after sustained use.
- Route recommendation: web PWA and TWA use AdSense with the same codebase. Add AdMob only if a Capacitor build exists. Rewarded ads pay more but need the SDK, and rewards must never gate core content.

### Gaps
- **No reliable Turkey eCPM or RPM figure for AdMob or AdSense was found** in any 2025-26 source. Appodeal's Q4 2024 PDF could not be fetched. The real answer needs a country-filtered AdSense or AdMob report, or the [Appodeal PDF](https://appodeal.com/wp-content/uploads/2025/03/Quarterly_Mobile_eCPM_Report_-_Q4_2024.pdf) checked manually.
- No Turkey-specific subscription conversion rate or language-app-specific freemium conversion rate was found. Education trial-to-paid was not visible in the fetched text (the page was truncated near its end).
- Whether AdSense in an installed iOS or desktop PWA has any special treatment was not found. No official statement separates installed PWAs from ordinary web pages.

## Paid tier features accepted without damaging a free core, and paywalls that backfire

### Takeaway
No controlled evidence was found ranking individual paid features. Practice and the Duolingo reversal suggest charging for removal of ads and for high-marginal-cost AI, while avoiding limits on practice itself. Paywalls that ration effort, sell away manufactured friction or interrupt learning are the ones with documented backlash.

### Cited Findings
- Duolingo's model of giving subscribers unlimited energy, while free users lose energy per exercise, drew visible criticism because even a perfect lesson costs energy — [Android Authority](https://www.androidauthority.com/quitting-duolingo-energy-system-3599842/); [PCWorld](https://www.pcworld.com/article/2924235/why-i-fell-out-of-love-with-duolingo.html); [Duolingo wiki](https://duolingo.fandom.com/wiki/Energy) [S]
- Duolingo's management acknowledged that monetization friction contributed to slowing DAU growth and moved part of the monetization team to growth — [Q4 2025 letter](https://www.sec.gov/Archives/edgar/data/1562088/000162828026012513/q4fy25duolingo12-31x25shar.htm) [F]
- RevenueCat-based reporting says AI apps earn 41% more per user but churn 30% faster. Only the headline was seen, and it is not specific to education — [ppc.land](https://ppc.land/ai-apps-earn-41-more-per-user-but-churn-30-faster-revenuecat-finds/) [S]
- Trial users in Education had 50.4% higher 12-month LTV than direct buyers in Adapty's data. This does not establish causation — [Adapty](https://adapty.io/blog/education-app-subscription-benchmarks/) [S]
- In Turkey, requiring a payment method for a free trial, pre-selecting packages and unsupported popularity labels have drawn administrative sanctions — [Ticaret Bakanlığı](https://ticaret.gov.tr/haberler/ticaret-bakanligi-reklam-kurulu-abonelik-hizmetlerine-iliskin-tasarim-tuzaklarina-dikkat-cekiyor) [F]

### Inferences

These are judgments, not sourced findings.

| Candidate paid feature | Fit with "core stays free" | Note |
|---|---|---|
| No ads | Strong | Direct, easy to explain. Check that the free tier's ads stay tolerable, so payment does not become escape from deliberate annoyance. |
| AI tutor or speaking practice beyond a small free allowance | Strong | Justified by real per-use cost. Keep a modest free taste if budget allows. Watch AI churn. |
| Exam prep (for example YDS, YDT, IELTS mocks) | Conditional | Fine for extra mocks and analytics. Risky if school students' main need is locked, which would raise equity and trust problems. Define it as a clearly separate add-on. |
| Offline packs | Conditional | Risky as a paid feature for lesson text because PWA caching is cheap and low-connectivity students need it most. Keep basic offline free and charge at most for large audio or bulk downloads. |
| Cosmetic items, supporter badge | Strong | No learning impact. A "supporter" framing suits a founder promise, and revenue may be small. |
| Family or classroom reports | Moderate | Possible later, but triggers minors' data duties. |

- Never paid: lessons, placement, core vocabulary and review, progress history, streak repair, data export or deletion, and speech or reading features needed for accessibility.
- Likely to backfire: any new meter on practice; retroactive moves of free content behind payment; mid-lesson paywalls; paying to restore a streak; renewal or trial tricks; and a free tier made worse after launch.
- Dormant tier: keep it invisible, with no empty "Premium" tabs or locked icons, since locked icons would visibly break a "no locks" promise even when nothing is yet for sale.
- Publish a short, specific "free core charter" listing what stays free. Then commit that future paid features are additive, and add a server-side feature flag that lets the tier stay off.

### Gaps
- No A/B or peer-reviewed data was found comparing specific language-app paid features (ads, AI, offline, exam prep) on conversion or free-user retention. The table above is reasoned judgment.
- Current feature lists for Super Duolingo, Duolingo Max, Speak, Busuu and Babbel were not verified in this session.

## Payment technology, store commissions, Turkish tax and e-invoice duties, consumer law, and server-side validation

### Takeaway
Stripe is not on its own list of supported countries for Turkish businesses, so the realistic options are Play Billing in a TWA, Apple IAP via a native wrapper, and iyzico or PayTR on the web. The store rate that appears to apply in Turkey today is 15%. Tax structure is the deciding question: GVK mük. 20/B may let a sole developer earn store and ad income with 15% final withholding, but it has conditions that direct web sales could break. **[Accountant]** All entitlements must be held server-side.

### Cited Findings

**Stripe**
- Stripe's global page lists supported countries and regions. Turkey is absent (checked 2 Nov 2026) — [Stripe](https://stripe.com/global) [F]
- One site claims Stripe supports Turkey directly, which conflicts with Stripe's own list. Treat it as wrong — [LearnWithHasan](https://learnwithhasan.com/payment-gateways/country/turkey/) [S]
- Advice to incorporate in the US, Estonia or the UK is common among vendors with an interest in the outcome — [Manay CPA](https://www.manaycpa.com/tr/?p=69408); [Dodo Payments](https://dodopayments.com/blogs/merchant-of-record-turkey) [S]. This changes the tax position and is excessive for a dormant tier. **[Accountant]**
- A report that Stripe is buying PayPal rests on one uncorroborated article — [Evrensel, 15 Jul 2026](https://www.evrensel.net/haber/5992453/stripe-paypal-i-satin-aliyor-paypal-turkiye-ye-geri-mi-donuyor) [S]. Do not plan on it.

**iyzico and PayTR**
- iyzico documents subscription start via checkout form or NON3D; the page is marked beta and looked over a year old — [iyzico docs](https://docs.iyzico.com/on-hazirliklar/api-reference-beta/abonelik/abonelik/abonelik-baslatma) [S]
- Application documents include tax certificate and signature circular. Those without a legal entity may apply individually for the *Link* product, depending on business model, and whether this extends to subscriptions is unclear — [iyzico help](https://www.iyzico.com/destek/yardim-merkezi/basvuru/gerekli-evraklar) [S]
- Paynet says its services continue under the iyzico brand from 1 January 2026 — [Paynet](https://www.paynet.com.tr/en/standing-orders-make-repeat-payments-easier-to-collect) [S]

**Google Play and TWA**
- Play Billing in a TWA uses the Digital Goods API plus Payment Request API (Chrome 101+). It needs a Play listing, can be enabled with Bubblewrap, and cannot list products by itself. After `show()` resolves, the purchase token must go to your backend for verification and acknowledgement; **an unacknowledged purchase is refunded and revoked after three days**. Docs updated 15 Oct 2026 — [Chrome for Developers](https://developer.chrome.com/docs/android/trusted-web-activity/receive-payments-play-billing) [F]
- Associating purchases with users is your backend's job, because these APIs have no user identity — [Chrome docs](https://developer.chrome.com/docs/android/trusted-web-activity/play-billing) [S]
- Fees: a new structure began 30 June 2026 in the US, EEA and UK, and 30 Sep 2026 in Australia and Japan (10% on subscriptions plus 5% billing fee). **All other markets until global rollout: 15% on the first $1M, and 15% for auto-renewing subscriptions regardless of revenue** — [Play Console Help](https://support.google.com/googleplay/android-developer/answer/112622?hl=en) [F]; [Android Developers Blog, 24 Jun 2026](https://developer.android.com/blog/posts/expanded-billing-choice-and-lower-fees-on-google-play) [F]
- Turkey is not named on either page. Other-market details are promised "soon" — [same blog](https://developer.android.com/blog/posts/expanded-billing-choice-and-lower-fees-on-google-play) [F]

**Apple**
- App Store Small Business Program: 15% for developers with no more than $1M proceeds in the prior and current calendar year. Separately, renewals after a subscriber's first paid year are 15% — [Apple SBP](https://developer.apple.com/app-store/small-business-program/); [Schedule 2 terms, Dec 2025](https://developer.apple.com/support/downloads/terms/schedules/Schedule-2-and-3-English.pdf) [S]
- Turkey's digital services tax fell from 7.5% to 5% on 1 Jan 2026 and is scheduled for 2.5% on 1 Jan 2027 — [EY Tax News](https://taxnews.ey.com/news/2026-0117-turkiye-revises-digital-service-tax-rate-for-2026-and-2027) [S]
- Apple changed Turkish prices and developer proceeds in January 2026 after the reduction — [DonanımHaber](https://www.donanimhaber.com/apple-turkiye-app-store-fiyatlarina-vergi-duzenlemesi-yapti--201476); [LOG](https://www.log.com.tr/?p=993161) [S]

**RevenueCat**
- RevenueCat Billing uses Stripe as its gateway; other web options are Stripe Billing and Paddle. RevenueCat's docs conflict on which are supported by the Web SDK versus Web Purchase Links — [Web overview](https://www.revenuecat.com/docs/web/overview.md); [Web SDK](https://www.revenuecat.com/docs/web/web-billing/web-sdk) [S]
- Web apps using RevenueCat Billing also need a backend access check with a shared customer ID — [RevenueCat Billing docs](https://www.revenuecat.com/docs/web/revenuecat-billing) [S]

**Income tax: GVK mük. 20/B [Accountant]**
- Individuals qualify. Mobile app developers are covered only for income via electronic app sharing and sales platforms. Social content creators and those providing individual courses, education and similar services over the internet are also covered. Conditions are a Turkish bank account, an exemption certificate, and notifying the tax office of the IBAN within one month. All such income must pass **exclusively** through that account. The bank withholds 15% on gross receipts, with no expense deduction; this is final tax if conditions hold — [Fatih Aras](https://fatiharas.com/gvk-madde-mukerrer-20-b-sosyal-icerik-ureticiligi-istisnasi) [F]
- Limit for 2026 is 5,300,000 TL. Exceeding it means annual declaration of the whole amount, with withholding offset. Failing conditions can bring tax-loss penalty and late interest — [Fatih Aras](https://fatiharas.com/gvk-madde-mukerrer-20-b-sosyal-icerik-ureticiligi-istisnasi) [F]. **Conflict:** another guide (Feb 2026) gives an "estimated" 6,500,000 TL, which appears outdated — [Vergi Merkezi](https://vergimerkezi.com.tr/?p=4673) [F]
- VAT: supplies within the exempt scope are VAT-exempt under KDVK 17/4-a, while income outside it follows general VAT rules. Ad income from a personal website with educational videos is given as eligible from 1/1/2024 — [Fatih Aras](https://fatiharas.com/gvk-madde-mukerrer-20-b-sosyal-icerik-ureticiligi-istisnasi) [F]
- A practitioner guide says Apple, Google and AdMob income can use 20/B, Bağ-Kur contributions are mandatory, expenses are not deductible, and a Turkish tax ID should go in Play Console. It also mentions W-8BEN on App Store Connect. Single-source, and the article is internally inconsistent on returns — [Vergi Merkezi](https://vergimerkezi.com.tr/?p=4673) [F]

**VAT and invoicing where 20/B does not apply [Accountant]**
- GİB İstanbul ruling 62030549-125-143061 (30 Jan 2026), to a company selling via Play and App Store: export exemption is available only if used exclusively by foreign customers; apps also used in Turkey do not qualify for that revenue, and aggregate invoicing was referred to the Ministry. It is an individual ruling, and it did not address sole developers or income tax — [Alomaliye](https://www.alomaliye.com/2026/02/18/app-store-ve-google-playden-elde-edilen-gelirler-nasil-vergilendirilir/) [F]
- Accountant columns describe splitting ad revenue by user country: 20% VAT on the Turkish share, export treatment on the foreign share, supported by AdMob/AdSense country reports — [Muhasebe TR](https://www.muhasebetr.com/yazarlarimiz/evrenozmen/0384); [Muhasebe News](https://www.muhasebenews.com/app-store-ve-google-play-gelirlerinin-vergilendirilmesi-2026-mobil-uygulama-abonelik-ve-uygulama-ici-satin-alma-gelirlerinde-kdv-ve-kurumlar-vergisi/) [S]. An older GİB ruling required general-rate VAT on ad services to Google in Turkey — [Lexpera](https://www.lexpera.com.tr/mevzuat/ozelgeler/b-07-1-gib-4-34-19-02-019-01-2377-sayili-ozelge-1) [S]. The two conflict and the rule needs confirmation.
- E-invoice thresholds: commercial blogs conflict. Claims include a 500,000 TL threshold for e-commerce sellers since 2022 and 3M TL general revenue, and 2026 invoice limits vary (none, 12,000 TL, or 3,000 TL for some simple-regime taxpayers) — [IdeaSoft](https://www.ideasoft.com.tr/e-ticaret-icin-e-fatura-zorunlulugu/); [Mükellef](https://mukellef.co/blog/e-fatura-gecis-hadleri/); [Paraşüt](https://www.parasut.com/blog/kagit-fatura-devri-2026-sonunda-bitiyor) [S]. **No official GİB text was read, so none of these should be relied on.**

**Consumer law [Lawyer]**
- Withdrawal: Mesafeli Sözleşmeler Yönetmeliği m.15/1-ğ excepts instantly performed electronic services and instantly delivered intangibles, with clear pre-contract disclosure (m.5/1-h). M.15/1-h excepts services begun within the period with consumer approval, and the seller must prove the approval. Defect rules still apply — [Hukukçular Evi, Jul 2026](https://hukukcularevi.com/mesafeli-sozlesme-cayma-hakki-istisnalari/) [F]
- Digital subscriptions carry a 14-day withdrawal right, which may be lost if performance starts with express consent after proper information — [Bilal Alyar, Sep 2026](https://bilalalyar.av.tr/?p=8883) [F]
- TKHK m.52 as presented by a law firm: fixed-term subscriptions extend only with the consumer's request or approval (52/3); the termination channel must stay open (52/6). Abonelik Sözleşmeleri Yönetmeliği m.2/2 limits non-utility subscriptions to arts. 5-8, 13 and 22-25. The firm also says prepaid unused periods must be refunded, trial-to-paid needs explicit consent, cancelling should be as easy as subscribing, and internet-initiated subscriptions should be cancellable via the same channel — [Bilal Alyar](https://bilalalyar.av.tr/?p=8883) [F]; [Alyar on m.52](https://bilalalyar.av.tr/?p=101463) [S]. These are one firm's reading, not primary text.
- The May 2025 amendment to the distance regulation (RG 32909, effective 1 Jan 2026 for much of it) focuses on other areas such as physical goods, and reports on the electronics carve-out conflict — [Alomaliye](https://www.alomaliye.com/2025/05/24/mesafeli-sozlesmeler-yonetmeliginde-degisiklik-24-05-2025/amp/); [CNN Türk](https://www.cnnturk.com/ekonomi/internet-alisverislerindeki-cayma-hakki-duzenlemesi-ertelendi-1836768) [S]

**Why client-only entitlements are spoofable**
- Google requires verification and acknowledgement on the backend — [Chrome docs](https://developer.chrome.com/docs/android/trusted-web-activity/receive-payments-play-billing) [F]
- Apple recommends verifying JWS signed data, and confirming app and product identifiers, on your server; it treats subscription status as a server-to-server check — [WWDC21](https://developer.apple.com/videos/play/wwdc2021/10174/); [WWDC23](https://developer.apple.com/videos/play/wwdc2023/10143/); [Tech Talk](https://developer.apple.com/videos/play/tech-talks/10887/) [S]
- Google's model is an opaque purchase token verified via `subscriptionsv2` with a service account, plus real-time notifications via Pub/Sub — [RevenueCat engineering](https://www.revenuecat.com/blog/engineering/cross-platform-subscription) [S]

### Inferences
- **Recommended staged path for a dormant tier.** Stage 0, build now: an account system, a server-side `entitlements` table, a feature flag, and no payment SDK. Stage 1, on activation: Play Billing in a TWA. Stage 2: iyzico or PayTR on the web only if a registered business exists. Stage 3: Apple IAP via Capacitor only when an iOS store presence justifies it.
- **RevenueCat fit is partial.** It could unify Play and Apple, but its web engines depend on Stripe or Paddle, and iyzico and PayTR are not listed. A small custom backend may be simpler if only Play and iyzico are used. TWA compatibility must be tested (see Gaps).
- **Tax trap:** the "exclusively through the account" and "via sales platforms" wording could mean direct iyzico subscriptions fall outside the app-developer limb of 20/B. The education/course limb may or may not cover them. Mixing routes without advice could risk the exemption for the whole year. This is a key **[Accountant]** question.
- **Effective take, illustration only:** with a Play subscription at 15% commission and 20/B's 15% applied to what reaches the bank, the developer keeps about 72% of the amount Google treats as price (0.85 × 0.85), before Bağ-Kur and any taxes Google deducts.
- **Trial design conflict:** store trials generally collect a payment method up front, while Reklam Kurulu sanctioned requiring payment data for a free trial in the cases it reviewed. Safest options are no trial, or a card-free in-app trial handled by the server. **[Lawyer]**
- **Entitlement design:**
  - The client's job is display only. A `localStorage` flag or modified JS can be changed by any user, and service-worker caches can be replayed.
  - Enforce AI quotas and paid content at the API.
  - Store the purchase token, product, expiry and state; process store notifications for renewal, refund and revocation; and treat tokens as single-account to limit replay.
  - For offline packs, use short-lived signed entitlements and accept some leakage, because the content is low value.
  - Because the core is free, spoofing costs matter mainly for AI usage, which is exactly where the server must gate.

### Gaps
- **Google's current 2026 fee for Turkey specifically** is inferred from "all other markets"; the page does not name Turkey. Re-check before activation. No availability of alternative billing in Turkey was confirmed. Turkish Competition Board actions on store billing were not researched.
- Apple: whether a Capacitor-wrapped PWA passes App Review (Guideline 4.2 minimum functionality) and the IAP requirement for digital goods (Guideline 3.1.1) are known from background knowledge and were not verified here. Apple's exact Turkish proceeds calculation was not read.
- RevenueCat with TWA (Digital Goods API) and its Capacitor SDK could not be confirmed. Test with a spike or ask support.
- iyzico and PayTR 2026 commission rates, whether subscriptions are open to an unregistered individual, and PayTR's recurring-payment terms could not be verified from official pages. Ask both directly. The iyzico subscription docs may be out of date.
- Paddle or Lemon Squeezy onboarding for Turkish sole traders was not verified.
- Primary texts were not read for TKHK m.52, the Abonelik Sözleşmeleri Yönetmeliği (the Ministry's [PDF](https://sirnak.ticaret.gov.tr/data/5eddf7f713b876697046a145/Abonelik%20S%C3%B6zle%C5%9Fmeleri%20Y%C3%B6netmeli%C4%9Fi.pdf) could not be parsed), Mesafeli Sözleşmeler Yönetmeliği as amended, or the GİB 20/B communiqué. Whether these consumer rules attach to the developer or to Google/Apple when the store is the seller of record was not answered. **[Lawyer]**
- Not answered: whether 20/B holders must issue e-Arşiv invoices; how currency conversion is handled for Play and AdSense payouts; and whether a text-based lesson PWA counts as "mobile app" or "educational content" for 20/B. **[Accountant]**

## KVKK and GDPR implications of ads and analytics, including for minors

### Takeaway
Treat this as the highest-risk area. Advertising and non-exempt analytics cookies need active opt-in. A July 2026 Turkish regulation reportedly bans profiling-based targeted advertising to children, and KVKK sets no clear digital age of consent. The defensible default is contextual, non-personalised ads, or no ads at all, for any user who may be a minor. **[Lawyer]**

### Cited Findings

**Cookies and consent in Turkey**
- KVKK's cookie guide (draft 11 Jan 2022; advisory, not binding) as summarized by a lawyer: online behavioural advertising cookies need explicit consent through an active affirmative act; consent-requiring cookies start inactive; consent cannot be inferred from entering the site or bundled into terms; cookie walls are generally invalid; "Accept", "Reject" and "Preferences" should have equal visual weight — [Hukuki Haber](https://www.hukukihaber.net/kvk-kurumunun-cerez-uygulamalari-hakkinda-yayinladigi-rehber) [F]
- First-party analytics can be exempt when IP is masked, data is used only for anonymous statistics, there is no cross-site tracking, lifetime is reasonable, and there is no third-party sharing. Language-preference, session-login and security cookies can also be exempt — [Hukuki Haber](https://www.hukukihaber.net/kvk-kurumunun-cerez-uygulamalari-hakkinda-yayinladigi-rehber) [F]
- The final published guide is reported in June 2022 — [Alomaliye](https://www.alomaliye.com/2022/06/20/kvkk-cerez-uygulamalari-hakkinda-rehber-yayimladi/) [S]

**Minors**
- A Turkish academic source states that KVKK has no provision on a data subject's age, in contrast to GDPR — [Bilgi University](https://openaccess.bilgi.edu.tr/items/e347cb00-4ca5-4830-bb9e-bcafa3df5d32) [S]. The same work argues parental consent contrary to the child's best interest should not be valid; this is an academic view, not settled law [S].
- A "16 years" rule appears on one website's privacy notice, without a statutory citation. It is not legal authority — [e-yasamrehberi](https://www.e-yasamrehberi.com/kvkk-aydinlatma-metni.html) [S]
- KVKK's TikTok decision (reported 1 Mar 2023): 1,750,000 TL fine under Law 6698 art. 18(1)(b). Findings included that under-13s' data was collected without appropriate parental consent, that risks to this age group were not adequately identified, that explicit consent was not properly obtained including for cookie profiling, and that terms were not provided in Turkish — [Bloomberg HT](https://www.bloomberght.com/kvkk-dan-tiktok-a-ceza-2326124) [F]
- KVKK publicly urged parents to check children's privacy settings before the 2025-26 school year, showing that school-age children's data is on its radar — [Cumhuriyet](https://www.cumhuriyet.com.tr/turkiye/kvkk-den-cocuklarin-kisisel-verileri-icin-uyari-gizlilik-ve-guvenlik-ayarlarini-duzenleyiniz-2431879); [Bengütürk](https://www.benguturk.com/gundem/kvkk-okullarin-acilmasi-oncesi-velilere-cocuklarin-kisisel-verileri-icin-166763h) [S]

**Advertising regulation, 2026**
- Amendments to the Commercial Advertising and Unfair Commercial Practices Regulation (RG 33297, 1 Jul 2026): **targeted advertising directed at children relying on profiling is prohibited**, and advertisers must provide accessible information on targeting criteria and how to change them. The law-firm article is itself inconsistent on the effective date (1 July vs 1 August 2026) — [Legal 500 / Universal Hukuk, 14 Jul 2026](https://www.legal500.com/intelligence/turkey/consumer-protection/dark-patterns-under-turkish-law-a-current-assessment-in-light-of-the-2026-amendments-to-the-regulation-on-commercial-advertising-and-unfair-commercial-practices) [F]

**Under-15 social-network rules**
- Law passed around April 2026; reports say a regulation published 10 Oct 2026 takes effect 1 Nov 2026, with existing accounts to be age-verified by 31 March 2027. Game platforms also face duties. Reports differ on dates, with one saying the ban took effect 1 May 2026 — [NTV](https://ntv.com.tr/turkiye/sosyal-medyaya-15-yas-siniri-yeni-duzenleme-resmi-gazetede-1745607); [TRT Haber](https://www.trthaber.com/haber/ekonomi/sosyal-medyada-yeni-donem-15-yas-siniri-resmi-gazetede-943631.html); [NTV, conflicting](https://www.ntv.com.tr/gundem/15-yas-altina-sosyal-medya-yasagi-yururluge-girdi-1722359) [S]

**Cross-border transfer and registration**
- After changes to KVKK art. 9, KVKK issued a transfer guide covering standard contracts and exceptional transfers. No adequacy list was published per the source, and routine transfers do not count as occasional ones — [EY Türkiye](https://ey.com/content/dam/ey-unified-site/ey-com/tr-tr/services/law/documents/ey-tr-kisisel-verilerin-korunmasi.pdf); [FFK Partner](https://www.ffkpartnerhukuk.com.tr/kvkk-uyum-sureci-nasil-yapilir-2026-guncel-rehber-kvkk-avukati/) [S]. Note that the Amazon decision summarized in the 2022 guide article, requiring consent for transfer, predates these changes — [Hukuki Haber](https://www.hukukihaber.net/kvk-kurumunun-cerez-uygulamalari-hakkinda-yayinladigi-rehber) [F]
- VERBİS thresholds conflict across sources (50 employees; a balance-sheet threshold given as 25M TL, others differ), and exemption principles were clarified 13 Jan 2026 — [Cottgroup](https://cottgroup.com/tr/mevzuat/item/clarification-on-the-application-principles-of-verbis-registration-exemptions); [Eleman.net](https://www.eleman.net/is-rehberi/pratik-bilgiler/verbis-nedir-kimlere-zorunludur-h8127) [S]

**GDPR, if EU users are in scope**
- Art. 8: where consent is the basis for information society services offered directly to a child, the child must be at least 16, or the holder of parental responsibility must consent. Member States may lower this to no less than 13. The controller must make reasonable efforts to verify parental consent — [GDPR Art. 8](https://gdpr-info.eu/art-8-gdpr/) [F]

**Google platform rules**
- Play Families: declare target ages; apps appealing to children and older users must use a neutral age screen; ads to children must come from self-certified SDKs; no personalised ads to children; no AAID or similar from children or users of unknown age. Developers targeting users under 21 must consider whether they are children under local law — [Play Families policy](https://support.google.com/googleplay/android-developer/answer/9893335?hl=en) [S]; [Target audience](https://support.google.com/googleplay/android-developer/answer/9867159) [S]
- AdMob: mixed-audience apps use `tagForAgeTreatment()` for child requests, set maximum content rating, and use Families self-certified SDKs for child or unknown-age requests. Child-only apps set age treatment to CHILD and rating to G on each request. Google says these tools do not relieve legal obligations — [AdMob Help](https://support.google.com/admob/answer/6223431?hl=en) [F]

### Inferences
- **Ad policy for this app:**
  - Non-personalised, contextual ads only, for all users, or at least all users under 18 and of unknown age. Profiling kids is a legal risk, and the revenue uplift from personalisation is likely small at Turkish rates. This should be tested against actual RPM.
  - Consider no ads in any school or class mode.
  - Note that even non-personalised AdSense uses some cookies for frequency capping and fraud; the cookie guide lists these uses among those needing consent. The practical treatment needs **[Lawyer]** review.
- **Age handling:** a neutral age gate that does not coach the user and asks for birth year only; a minors' profile with no ads personalisation, no public leaderboard, no free-text social features, and minimal data; account-free use with local-only progress as the free default if possible.
- **Analytics:** prefer self-hosted, cookieless, first-party analytics with masked IPs, which fits the exemption profile. This avoids consent walls and cross-border transfer questions. Avoid Google Analytics or ad SDKs before consent.
- **School channel:** if schools or teachers ever onboard students, roles (school as controller or the developer as controller) and parental information must be defined first. Do not encourage classroom use of an ad-supported tier until this is clear.
- **Under-15 rules:** a language app is probably not a "social network provider", but friends, profiles, messaging or user-generated content could change the analysis. Stay away from those features. **[Lawyer]**
- **Aydınlatma and consent records:** Turkish-language notices are essential (TikTok decision), separate from consent, and with equal-weight reject. Keep consent logs. Use and document a transfer mechanism for any non-Turkish vendor, including ad and hosting vendors.
- **GDPR:** do not market to EU users until this is reviewed. Turkish-speaking diaspora use may be incidental, and whether it counts as "targeting" is a **[Lawyer]** question. Use a Google-certified CMP if EEA or UK traffic is served ads.

### Gaps
- KVKK's own cookie guide text could not be read from kvkk.gov.tr (the URL tried returned only navigation); the summary relies on a lawyer's article on the draft version. Compare with the final text.
- No binding KVKK age threshold or child-specific guidance was found, and this cannot be stated as confirmed absence. The capacity rules of the Turkish Civil Code for minors' consent were not researched. **[Lawyer]**
- The official text of RG 33297 was not read, nor how it defines "child". The article did not specify penalties.
- The official text and definitions of the under-15 regulation were not read, so the applicability to an education app remains unverified.
- KVKK art. 9 details (including any filing deadline for standard contracts) could not be verified. The current VERBİS balance-sheet threshold is unresolved.
- Google's EU User Consent Policy, AdSense's Families page and any treatment of Turkey in consent tooling were not retrieved. AdSense on web for mixed-age sites remains unverified. Google's Age Signals API status was not found.
