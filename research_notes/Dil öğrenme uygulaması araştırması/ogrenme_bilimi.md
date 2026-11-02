# Learning science for a 10-minute-a-day English app for Turkish speakers

Research date: 2026-11-02. Every source carries its publication date.

Evidence tags used on each finding:
- **[STRONG]**: meta-analysis or large dataset, consistent direction.
- **[MODERATE]**: meta-analysis with real caveats, or several primary studies that mostly agree.
- **[WEAK]**: few or small studies, single institution, or conflicting results.
- **[POPULAR]**: widely repeated claim that I could not support to the stated degree.
- **[GUIDANCE]**: institutional or expert guidance, not an empirical result.

Access note: many journal pages returned 403 or a paywall. Where I read a figure only in a later paper that cites the original, the entry says "via". Treat those as second-hand until checked against the original table. Figures I recall but could not verify are in the Gaps sections, never in Cited Findings.

## 1. Spaced repetition and retrieval practice: L2 effect sizes, FSRS vs SM-2, desired retention, spacing grammar vs vocabulary

### Takeaway
Spacing has a medium-to-large L2 effect, but that effect sits almost entirely in vocabulary (g = 0.76 to 1.15) and is close to nil in grammar (g = 0.11 to 0.14). Do not assume an SRS queue teaches grammar. FSRS predicts recall better than SM-2, but I found no evidence that it produces better L2 learning outcomes, because the benchmark measures prediction, not learning.

### Cited Findings

**Spacing, overall L2**
- **[STRONG, via]** Kim & Webb (2022), meta-analysis of L2 spacing: spacing beats massing at g = 0.58 on immediate posttests and g = 0.80 on delayed posttests. Read via the citation in [Zheng, Nakata, Clenton & Boutorwick, SSLLT, June 2026](https://pressto.amu.edu.pl/index.php/ssllt/article/view/49487). The original (Language Learning 72(1), 269-319, 2022, DOI 10.1111/lang.12479) returned 403.
- **[MODERATE, via]** By learning target, Kim & Webb report stronger spacing effects for vocabulary (g = 0.76 to 1.15) than for grammar (g = 0.11 to 0.14). Same citing source: [Zheng et al., June 2026](https://pressto.amu.edu.pl/index.php/ssllt/article/view/49487). Tag is moderate because the grammar estimate rests on few studies; [Serrano (2022)](https://dx.doi.org/10.14746/ssllt.2022.12.3.2) says some of the meta-analysis findings are inconclusive because of low study and participant numbers.
- **[MODERATE, via]** Lag (short vs long spacing): no significant difference on immediate posttests (g = -0.15), and longer spacing slightly better on delayed posttests (g = 0.40) — [Zheng et al., June 2026, citing Kim & Webb 2022](https://pressto.amu.edu.pl/index.php/ssllt/article/view/49487).
- **[WEAK]** The 2026 replication with 69 Japanese learners of English and 48 pseudowords found spacing improved explicit vocabulary knowledge, while neither schedule produced implicit knowledge on semantic priming tasks — [Zheng et al., June 2026](https://pressto.amu.edu.pl/index.php/ssllt/article/view/49487).
- **[WEAK, conflicting]** A synthesis of 32 word-card studies reports larger effects for massed than spaced use, and larger effects for paper than digital cards — [Lei & Reynolds, Frontiers in Psychology, 2022](https://pmc.ncbi.nlm.nih.gov/articles/PMC9485613). This conflicts with Kim & Webb on massing. It is a vote-count-style synthesis of mixed designs, so I weight Kim & Webb more.

**Spacing grammar**
- **[WEAK]** Massed vs spaced grammar has very little research. The review concludes distributed practice looks better for long-term grammar learning. Miles (2014, Korean university students): no difference at immediate posttest, spaced group better at delayed posttest — [Serrano, SSLLT, 2022](https://dx.doi.org/10.14746/ssllt.2022.12.3.2).
- **[WEAK, conflicting]** Grammar lag results point in different directions, per [Serrano (2022)](https://dx.doi.org/10.14746/ssllt.2022.12.3.2):
  - Longer lag better: Bird 2010 (3 vs 14 days; English tense and aspect, adult EFL, advantage only at 60 days); Rogers 2015 (2.25 vs 7 days).
  - No difference: Kasprowicz et al. 2019 (3.5 vs 7 days, children learning French).
  - Shorter lag better: Suzuki & DeKeyser 2017a (1 vs 7 days; faster performance at 28 days, same accuracy); Suzuki 2017 (3.3 vs 7 days; accuracy); Suzuki 2018 (automatization).
- **[MODERATE]** Serrano's conclusion: spacing findings transfer best to conditions like rote vocabulary learning from lists. Declarative rule knowledge benefits from more than one session. It is unclear that more space is always better, and evidence runs the other way for fluent, proceduralized production — [Serrano, 2022](https://dx.doi.org/10.14746/ssllt.2022.12.3.2).

**Retrieval practice (testing effect)**
- **[STRONG, general memory, not L2-specific]** Testing vs restudy: g = 0.50, CI [0.42, 0.58] — [Rowland, Psychological Bulletin, 2014](https://courseware.epfl.ch/assets/courseware/v1/fdde2f0aa590bf3b1324077a6bf1540c/asset-v1%3AEPFL%2BDEMO%2B2020%2Btype%40asset%2Bblock/Rowland2014-meta-analysis.pdf). Moderators from its table, all from the same source:
  - Feedback: g = 0.73 with, g = 0.39 without.
  - Initial test type: cued recall g = 0.61, free recall g = 0.29, recognition g = 0.29.
  - No feedback with initial test performance of 50% or lower: g = 0.03. With performance above 75%: g = 0.56.
  - Retention interval, two categories (a one-day cut-off; the comparison symbols were lost in text extraction, so read the shorter-delay and longer-delay labels from the original): g = 0.41 and g = 0.69.
  - Foreign-language word pairs are among the included materials, but I did not find a separate L2 moderator.
- **[MODERATE, secondary]** Practice tests overall: g = 0.61 (fixed effects), g = 0.70 (random effects) in Adesope, Trevisan & Sundararajan (2017, Review of Educational Research), read via [a Frontiers paper, 2018](https://www.frontiersin.org/articles/10.3389/fpsyg.2018.02412/pdf). The primary paper was not opened.

**FSRS vs other schedulers**
- **[STRONG for prediction]** The benchmark uses 9,999 Anki collections and 349,923,850 reviews (no same-day reviews). Log loss / RMSE (bins) / AUC, lower-lower-higher better — [open-spaced-repetition/srs-benchmark, README, read Nov 2026, no date on page](https://github.com/open-spaced-repetition/srs-benchmark):
  - FSRS-6: 0.3460 / 0.0653 / 0.7034
  - FSRS-5: 0.3561 / 0.0742 / 0.7010
  - FSRS-4.5: 0.3625 / 0.0764 / 0.6891
  - HLR: 0.4694 / 0.1275 / 0.6369
  - Ebisu v2: 0.4989 / 0.1627 / 0.6051
- **[STRONG for prediction]** FSRS-6 with recency weighting has lower log loss than Anki SM-2 for 99.6% of users. The same author warns that SM-2 was not designed to output probabilities, so no comparison is fully fair, and that all SRS algorithms have rather unimpressive AUC — [Expertium benchmark write-up, undated, community source](https://expertium.github.io/Benchmark.html). The SM-2 metric values appear only in images there and are not in the README tables I could read.
- Limitation for this app: the benchmark comes from general Anki users, not L2 learners specifically, and scores recall prediction — [srs-benchmark](https://github.com/open-spaced-repetition/srs-benchmark).

**Desired retention**
- **[GUIDANCE]** Anki's default is 90%. The manual says workload rises very quickly above 90%, can be overwhelming above 97%, and recommends staying below 97% — [Anki Manual, deck options, current version, read Nov 2026](https://docs.ankiweb.net/deck-options.html).
- **[WEAK]** The "minimum recommended retention" tool (CMRR) is reported by forum users and a developer as problematic under FSRS-6, often returning 70%, with a workload graph planned as a replacement — [Anki forums, thread on CMRR, 2025](https://forums.ankiweb.net/t/replace-cmrr-with-workload-vs-dr-graph-more/63234?page=2). This is community discussion, not documentation. Whether it has since shipped was not checked.

### Inferences
- Use FSRS (or a comparable probabilistic model) for vocabulary and chunks. The case is better prediction and hence better use of a fixed 10-minute budget. Say "better calibrated", not "learn X% more".
- Start desired retention near 0.85 to 0.90. A fixed daily budget will likely favor the lower end, because the 10-minute cap is the binding constraint. This is my inference; run FSRS's own simulator on real logs rather than relying on it.
- Do not put grammar rules on flashcards and expect transfer. A grammar point needs varied production items drawn from a pool, not a repeat of one item. Revisit points at short lags (1 to 7 days) early, then widen. Evidence for a specific schedule is weak, so make it an A/B-testable parameter.
- Use recall formats (typed or spoken) rather than multiple choice wherever possible, and always give feedback. Rowland's numbers support both. Keep initial success rates reasonably high, because retrieval without feedback at 50% success gave g = 0.03.

### Gaps
- **The "FSRS needs 20 to 30% fewer reviews than SM-2" figure is unverified.** My search for it failed and I found no primary source. Treat as [POPULAR] until reproduced with a simulation.
- No RCT found comparing FSRS and SM-2 on L2 learning outcomes.
- No optimal desired retention specific to L2 or to a capped daily-time budget.
- Kim & Webb's grammar subgroup size and CIs are not available to me (paywall). A related [thesis by Kim (Western University, 2022)](https://ir.lib.uwo.ca/etd/8600/) reports 98 effect sizes from 48 experiments (N = 3,411); the link now redirects and I could not open it, so its relation to the journal article is unconfirmed.
- No L2-specific retrieval-practice meta-analysis with effect sizes was found. A 2023 Nakatsukasa synthesis appeared only in a reference list.

## 2. Comprehensible input, extensive reading and listening, the output hypothesis, Nation's four strands

### Takeaway
Input-based learning is real but low-yield per encounter (about 13 to 17% of targets learned), and extensive reading's benefit shrinks when study quality is controlled. Both comprehension-based and production-based instruction work; production holds up better on delayed production tests. "Input alone is enough" is not supported as a general claim, and the four-strands 25% split is expert guidance, not a tested dose.

### Cited Findings
- **[STRONG]** Incidental vocabulary gains from meaning-focused input (24 studies, 29 effect sizes, N = 2,771), proportion of targets learned, immediate / delayed: reading 17% / 15%, listening 15% / 13%, reading while listening 13% / 17%, viewing 7% / 5% — [Webb, Uchihara & Yanagisawa, Language Teaching, 2023](https://www.cambridge.org/core/product/E38E3468FD2090B1FA3051051DE8E70C).
- **[MODERATE]** Moderators from the same paper: L2-learner materials g = 1.56 vs L1-user materials g = 0.71; narrative g = 1.43 vs expository g = 0.61; spaced input g = 1.71 vs massed g = 0.58 on delayed tests; studies without pre-knowledge control g = 0.27 vs pseudowords g = 1.90 — [Webb et al., 2023](https://www.cambridge.org/core/product/E38E3468FD2090B1FA3051051DE8E70C). The g values and the percentage gains describe different things: g values are large but absolute gains are modest.
- **[MODERATE]** Repetition relates positively to incidental word learning, with a larger effect for university students than younger learners — Uchihara, Webb & Yanagisawa (2019, Language Learning 69(3), 559-599), via a [replication report, 2021](https://nottingham-repository.worktribe.com/OutputFile/26531735). I could not verify a pooled correlation.
- **[MODERATE]** Extensive reading, Jeon & Day (2016; 71 samples, 49 studies, N = 5,919): small-to-medium effects, higher for adults than for children and adolescents, higher in EFL than ESL — [ScholarSpace record, 2016](https://scholarspace.manoa.hawaii.edu/items/b52a5591-ec04-4026-816f-434361a4e899). Search-result summary; full text not read.
- **[MODERATE, secondary]** Nakanishi (2015; 36 studies, N = 3,942): overall group-contrast d = 0.46; reading rate d = 0.98, comprehension d = 0.63, vocabulary d = 0.18. From a search-result summary of [a TEFLIN Journal paper](https://journal.teflin.org/index.php/journal/article/download/724/315/1643) or a neighboring result; exact attribution unconfirmed, so check the original before quoting.
- **[MODERATE]** Quality correction: restricting to equivalent groups and adjusting for selection bias, the one-semester comprehension estimate fell from d = 0.55 to d = 0.37 — [Hamada, Frontiers in Psychology, April 2020](https://www.frontiersin.org/articles/10.3389/fpsyg.2020.00617/pdf). Paper identity confirmed; figures from a search summary.
- **[MODERATE, via]** Comprehension-based vs production-based grammar instruction (Shintani, Li & Ellis 2013; 35 experiments): comprehension-based better on immediate comprehension tests (d = 1.09 as used for a power analysis), advantage gone on delayed tests; no production difference immediately, production-based better on delayed production — via [Keppenne, Hopman & Jackson, Applied Psycholinguistics, 2021](https://www.cambridge.org/core/product/75C18FC9EAFD5FFB402A3E95B38354E2/core-reader). Both types had large effects overall, per [a conference abstract listing](https://www2.kansai-u.ac.jp/shintani/conference/index.html).
- **[WEAK]** Production-based training gave an advantage even for comprehension of German grammatical gender, unlike Shintani et al. — [Keppenne et al., 2021](https://www.cambridge.org/core/product/75C18FC9EAFD5FFB402A3E95B38354E2/core-reader).
- **[GUIDANCE]** Four strands (meaning-focused input, meaning-focused output, language-focused learning, fluency development), each about a quarter of time, per descriptions in [JALT 2013 featured-speaker article](https://jalt-publications.org/tlt/articles/3148-jalt2013-featured-speaker-articles) and [Yamagishi, Kanda working paper, 2021](https://kuis.kandagaigo.ac.jp/eli/publications/wp-content/uploads/2022/03/Yamagishi_Autumn_2021.pdf). I found no experiment testing the 25% split.
- **[WEAK, secondary]** Critiques of Krashen: comprehensible input and i+1 are poorly defined, and the theory neglects output, per [teaching-oriented lecture material, undated](https://elearning.univ-msila.dz/moodle/mod/resource/view.php?id=52532). Low source quality; the critique itself is standard.

### Inferences
- Input should be in the session but needs support, because 15% yield per target word is low and 10 minutes yields little exposure. Graded L2-learner material, narrative where possible, with key words pre-seeded in SRS and re-encountered across days. All three choices follow Webb et al.'s moderators.
- Audio with transcript is defensible as a default: reading while listening matches reading on delayed gains and trains listening too. Do not expect video to teach vocabulary at the same rate.
- Include short production in every session (typed or spoken recall, sentence-level). Delayed production is where production practice wins.
- The four strands are best applied over a week, not within 10 minutes, since 2.5 minutes per strand is too fragmented. This is my judgment. Fluency work is the strand a card-based app most easily drops, so plan for it explicitly.

### Gaps
- No study of input dose at 10 minutes per day found.
- The Lichtman & VanPatten (2021) "Was Krashen right?" arguments were not retrieved, only a [podcast listing](https://music.amazon.com/podcasts/eaf574af-fc9f-4f6b-83cd-d689f96beb13/episodes/3506f0ed-038f-473c-b2e7-d681f33b01c9/world-language-classroom-the-origins-of-ci-krashen's-input-hypothesis).
- No published vocabulary-specific comprehension-vs-production meta-analysis was found; [Shintani's AAAL 2013 talk](https://www2.kansai-u.ac.jp/shintani/conference/index.html) is listed without results.
- I did not find a meta-analytic effect for Swain's output hypothesis as such.

## 3. Explicit vs implicit grammar, L1-based explanation, corrective feedback

### Takeaway
Explicit instruction has outperformed implicit in most meta-analyses, though one later analysis found only a minor difference, and outcome-measure bias is a live criticism. Corrective feedback has a durable medium overall effect; prompts beat recasts in classrooms. L1-based contrastive teaching for Turkish speakers is plausible but has little direct experimental evidence.

### Cited Findings
- **[STRONG for direction]** Norris & Ortega (2000, 49 unique samples): focused instruction gives large gains, and explicit beats implicit — [abstract record, 2000](https://www.deepdyve.com/lp/wiley/does-type-of-instruction-make-a-difference-substantive-findings-from-a-9dzVAhpcHv/). Critics note that only 49 of about 250 identified studies were included, per [a later commentary](https://testplatform.openjournals.nl/dujal/article/download/9361/12389/22029).
- **[STRONG for direction]** The Norris & Ortega update (Goo, Granena, Yilmaz & Novella; 34 unique samples comparing explicit and implicit) again favors explicit — [book chapter record](https://www.degruyterbrill.com/document/doi/10.1075/sibil.48.18goo/html). The date is conflicting in my notes (2012 in one summary, the volume seems to be 2015). Check before citing.
- **[MODERATE, secondary]** Spada & Tomita (2010, 41 studies): larger effects for explicit than implicit on both simple and complex English features; secondary reports add longer-lasting delayed gains — [secondary description](https://testplatform.openjournals.nl/dujal/article/download/9361/12389/22029). Exact d values not retrieved.
- **[MODERATE, conflicting]** "Thirty-five years of ISLA on form-focused instruction" (54 studies, N = 5,051, 1980 to 2015, six journals): overall g = 1.06, CI 0.84 to 1.29, with only a minor explicit-vs-implicit difference — [Figshare collection, 2019](https://figshare.com/collections/Thirty-five_years_of_ISLA_on_form-focused_instruction_A_meta-analysis/4163639) (search snippet; page itself returned 403). Author list not shown there.
- **[STRONG]** Corrective feedback: Li (2010; 33 primary studies, 22 articles plus 11 dissertations): medium overall effect, maintained over time; implicit feedback's effects better maintained than explicit's; published studies not larger than dissertations; lab larger than classroom; shorter treatments larger than longer; foreign-language contexts larger than second-language contexts — [abstract record, Language Learning, 2010](https://synapsesocial.com/papers/W1660961223).
- **[STRONG]** Lyster & Saito (2010; 15 classroom studies, N = 827): significant and durable effects; prompts larger than recasts, mostly on free constructed-response measures; long treatments better than short-to-medium; younger learners benefit more — [Studies in Second Language Acquisition, 2010](https://www.cambridge.org/core/product/4999EE1C8379B2BF026B148EAF373CA1). A later commentary reports medium effects for recasts and large for prompts, per [a search result in the same set](https://files.eric.ed.gov/fulltext/EJ1306453.pdf); numbers not verified.
- Note the contradiction: Li found larger effects for shorter treatments, Lyster & Saito for long ones. Their inclusion criteria and analyses differ, per [a later commentary](https://resolve.cambridge.org/core/books/cambridge-handbook-of-corrective-feedback-in-second-language-learning-and-teaching/contexts-of-corrective-feedback-and-their-effects/7599AA39E9CD9E872103BDC477BC2D68).
- **[WEAK]** L1 glosses: L1 glossing's relative advantage over L2 glosses was supported mainly on immediate rather than delayed vocabulary tests — Kim, Lee & Lee meta-analysis, Language Teaching Research, 2024, found through a search summary; [related listing](https://www.todoele.net/node/317461), exact URL unconfirmed.
- **[WEAK]** A 2010 conference paper says empirical evidence on the effectiveness of L1 use is surprisingly lacking — [Macaro, Hennebry & Rogers, BAAL 2010](https://cronfa.swansea.ac.uk/Record/cronfa12349).
- **[WEAK]** A small study of early-adolescent EFL learners found teacher codeswitching beat English-only for vocabulary, persisting at two weeks — [Iranian TESL study](https://tesl.shirazu.ac.ir/article_7871.html). A master's dissertation found it more efficient but with worse long-term retention — [Nilsen, Birmingham, 2017](https://www.teachingenglish.org.uk/sites/teacheng/files/mda2017_university_of_birmingham_john_nilsen.pdf). Mixed.
- **[WEAK, Turkish-specific]** In an error analysis of 30 Turkish university students, the top errors were articles, word choice, prepositions, word order and subject-verb agreement, with L1 interference the most common cause — [Karabük study, undated in my record](https://oalib-perpustakaan.upi.edu/Record/doaj_d6c3cb9e5247484b810aef5d80f6c14e/Details). One small institution.
- **[WEAK, Turkish-specific]** Explicit instruction on possessives for beginner Turkish learners found L1 can both help and hinder — [ELT Research Journal study](https://dergipark.org.tr/en/pub/eltrj/article/74398). A corpus study of Turkish learners' exam scripts challenged the universal morpheme order — [SSLLT, 2021](https://avesis.erciyes.edu.tr/yayin/30b48397-c971-40f2-a3ae-bd19d47d8901/accuracy-order-in-l2-grammatical-morphemes-corpus-evidence-from-different-proficiency-levels-of-turkish-learners-of-english).

### Inferences
- Give short explicit rules in Turkish, then move fast to practice. The combination has the best support. Turkish explanations also cut time spent decoding, which matters in 10 minutes, though that last reason is my reasoning rather than a tested result.
- Contrastive notes on known problem areas (articles, prepositions, word order, third-person -s) are a sensible use of L1. Treat them as hypothesis-driven and test them in-app.
- Feedback flow: first a prompt ("try again, check the verb"), then the correct form. This is a machine analogue of prompts and is extrapolated from classroom teacher-learner research; effects may not transfer to automated correction.
- Prefer specific error tagging over a generic "wrong". Rowland's feedback effect and the CF literature both support feedback, but the exact format is untested in this context.

### Gaps
- **Unverified numbers, do not quote:** my recollection of Norris & Ortega (explicit d about 1.13, implicit about 0.54), Li (d about 0.61), Plonsky & Oswald's L2 benchmarks (d = .40 / .70 / 1.00 for small/medium/large). The last paper exists and argues Cohen's benchmarks underestimate L2 effects — [Plonsky & Oswald, Language Learning, 2014](https://experts.nau.edu/en/publications/how-big-is-big-interpreting-effect-sizes-in-l2-research/) — but I did not see the thresholds in a source.
- Lyster & Saito's d values are behind a paywall. The written CF meta-analyses (Kang & Han 2015; Brown, Liu & Norouzian 2023, Language Teaching Research) were [found as listings only](https://todoele.net/bibliografia/effectiveness-written-corrective-feedback-developing-l2-accuracy-bayesian-meta), with no figures.
- No meta-analysis of L1 explanation vs L2-only grammar teaching was found. Laufer & Girsai (2008) on contrastive analysis was not retrieved.
- No experiment found comparing contrastive and non-contrastive instruction for Turkish L1 English article learning.
- No meta-analysis of automated app feedback found. AI-generated feedback in particular was not covered by this run.

## 4. Vocabulary: frequency lists, words per CEFR level, text coverage, incidental vs deliberate, collocations

### Takeaway
A high-frequency core of about 2,800 words gives roughly 92% coverage by the list's own claim, and deliberate flashcard study is the efficient way to learn it. But 98% coverage needs 6,000 to 9,000 word families, and published per-CEFR vocabulary sizes disagree substantially, so any "X words = B2" statement needs a named source and counting unit.

### Cited Findings

**Vocabulary size per CEFR level (these do not agree)**

| CEFR | Milton & Alexiou 2020 (X_Lex, recognition, adapted from Milton 2009) | Nation's suggested size (2022 document) |
|---|---|---|
| A1 | under 1,500 | 120 words and phrases (survival vocabulary) |
| A2 | 1,500 to 2,500 | most frequent 1,000 word families |
| B1 | 2,500 to 3,250 | most frequent 2,000 to 3,000 words |
| B2 | 3,250 to 3,750 | about 4,000 (2,000 to 3,000 high-frequency plus 1,000 to 2,000 relevant technical) |
| C1 | 3,750 to 4,500 | 5,000 to 6,000 |
| C2 | 4,500 to 5,000 | 7,000 to 9,000 |

Source for the table: [Nation, "Vocabulary, the CEFR levels, and word family size", document created Aug 2022](https://wgtn.ac.nz/lals/resources/paul-nations-resources/vocabulary-lists/vocabulary-cefr-and-word-family-size/vocabulary-and-the-cefr-docx). The same document notes that Laufer (2020) suggests B1 involves 4,000 words, and that Nation's own figures rest on BNC/COCA lists and differ in the counting unit by level.
- **[MODERATE]** Empirical ranges come from learner test scores; they are correlates, not requirements. Nation's are expert suggestions. **[POPULAR]** Consumer sites give much higher and inconsistent numbers, e.g. [italki's list](https://www.italki.com/en/blog/english-vocabulary-words-to-learn) and [hacecuentas](https://hacecuentas.com/en/vocabulary-active-words-language-level). Do not use them.

**Lists**
- **[GUIDANCE, publisher claim]** NGSL core: 2,809 words, "roughly 92% of everyday English" — [newgeneralservicelist.com, open since 2013, read Nov 2026](https://www.newgeneralservicelist.com/). A related paper reports 2,368 word families covering 90.34% of a 273-million-word corpus, vs 84.24% for the GSL's 1,964 families — [Browne, Korea TESOL section, undated](https://mail.koreatesol.org/sites/default/files/TEC-Special-Conf-Section.pdf). Other counts are 2,818 and 2,801, so version differences exist. I found no independent replication of the 92%.
- **[GUIDANCE]** Oxford 3000 covers A1 to B2; Oxford 5000 adds about 2,000 words at B2 to C1; levels attach to word and part of speech ("book" noun A1, verb A2); a separate Phrase List has 650 phrases at A1 to C1 — [Oxford Learner's Dictionaries, wordlists, read Nov 2026](https://www.oxfordlearnersdictionaries.com/about/wordlists/) (search snippet; a direct page fetch returned 403).

**Text coverage**
- **[STRONG for 95 to 98% threshold, debated on detail]** Written text: about 4,000 word families plus proper nouns for 95%, and 8,000 to 9,000 for 98%. Spoken: about 3,000 for 95%, and 6,000 to 7,000 for 98% (Nation 2006). van Zeeland & Schmitt (2012) suggest 95% may suffice for listening, at 2,000 to 3,000 families. All via [Schmitt, Cobb, Horst & Schmitt, Language Teaching, 2015](https://www.cambridge.org/core/journals/language-teaching/article/how-much-vocabulary-is-needed-to-use-english-replication-of-van-zeeland-schmitt-2012-nation-2006-and-cobb-2007/1D217A56A2E0056E67802A6A8360FDDE). The authors say larger corpora might lower the figures, and note that families overstate what learners actually know, so a lemma list may suit pedagogy better.
- **[MODERATE]** 98% coverage corresponded to a 71% comprehension score in Hu & Nation (2000), per a [secondary source](https://www.lextutor.ca/cv/laufer_cobb_2019.pdf); not opened in full.

**Incidental vs deliberate**
- **[MODERATE, secondary]** Webb, Yanagisawa & Uchihara (2020; Modern Language Journal 104(4), 715-738; 22 studies): flashcards and word lists gave relatively large gains; writing and fill-in-the-blank gave relatively small gains; minutes per word did not significantly influence learning; advanced learners learned more; only treatments up to one day were included — via [Lei & Reynolds, 2022](https://pmc.ncbi.nlm.nih.gov/articles/PMC9485613).
- **[STRONG]** Incidental gains are 13 to 17% for the reading and listening modes — [Webb et al., 2023](https://www.cambridge.org/core/product/E38E3468FD2090B1FA3051051DE8E70C).

**Collocations and chunks**
- **[WEAK]** No meta-analysis of collocation or multiword-unit learning was found. Vu, Noreillie & Peters (2023, Language Teaching Research) studied incidental collocation learning through reading while listening and captioned TV, listed in [todoele's bibliography](https://todoele.net/bibliografia-temas/aprendizaje-incidental-del-vocabulario); results not read. Snoder (2017) found no significant difference for verb-noun collocations between an expanding schedule (days 1, 7, 16) and an intensive one (days 1, 2, 4), via [Serrano's review, 2022](https://dx.doi.org/10.14746/ssllt.2022.12.3.2).
- **[POPULAR]** Formulaic sequences are believed to help fluency (Pawley & Syder 1983; Kjellmer 1990), but identifying them is hard because frequency alone is an unreliable test — [secondary, Scribd chapter](https://www.scribd.com/document/748602877/Chapter-28). The claim is plausible; the strength is theoretical rather than experimental in what I found.

### Inferences
- Use NGSL or Oxford 3000 as the backbone for frequency, with word sense at CEFR level (Oxford's part-of-speech level tagging is a useful model). Check licensing separately; I did not review list licenses.
- Pick lemma (or flemma) as the counting unit and state it. Turkish learners' morphology habits may not map to English families, so don't assume family knowledge.
- Teach chunks as card items ("make a decision", "depend on"). Evidence is weak but the cost is low, because a chunk also delivers its words.
- Don't rely on sentence-writing tasks for new-word gains in a 10-minute budget. Use cards and short recall, and save writing for consolidation.

### Gaps
- English Vocabulary Profile level counts were not retrieved, and COCA list details were not reviewed beyond Nation's mention of BNC/COCA.
- Oxford 3000 per-level counts were not found.
- No Turkish-English cognate or loanword data found. This is a design opportunity left unresearched here.
- I could not obtain Webb et al. 2020's percentage gains by activity.

## 5. CEFR: guided hours per level, Can-Do descriptors, and whether 10 minutes a day can reach B2

### Takeaway
No, not on 10 minutes alone in a normal timeframe. At perfect daily adherence, Cambridge's B2 guidance takes about 8 to 10 years, and A2 takes about 3 years. An honest promise is solid A1 to A2 skills plus a much larger vocabulary, with B2 reachable only if the app is one part of a larger study or exposure diet.

### Cited Findings
- **[GUIDANCE]** Cambridge guided learning hours, cumulative from beginner: A1 about 90 to 100; A2 about 180 to 200; B1 about 350 to 400; B2 about 500 to 600; C1 about 700 to 800; C2 about 1,000 to 1,200. Hours include time in lessons and tasks set. Same Cambridge help article also gives "approximately 200 hours per level" as a rule of thumb, which does not match the table — [Cambridge English Support, undated](https://support.cambridgeenglish.org/hc/en-gb/articles/202838506-Guided-learning-hours). Read via search snippet; direct fetch returned 403.
- **[GUIDANCE]** Other bodies differ: a third-party site cites [600 to 650 hours to B2 (EC English, undated)](https://ecenglish.com/en/blog/english/how-long-to-learn-english-to-b2-level/). Alliance Française for French gives A2 160 to 200, B1 360 to 400, B2 560 to 650, per [the same search](https://students.studyinireland.ie/ja/?p=12099) (exact page unconfirmed).
- **[GUIDANCE]** The CEFR Companion Volume updates the 2001 scales, adds mediation descriptors and Pre-A1, and enriches A1 and C-level descriptions — [Council of Europe via CEFR Companion reference, 2020](https://www.ecml.at/Portals/1/News%20articles/Liubliana_30June_Stathopoulou.pdf). Descriptors are stand-alone Can-Do statements, not primarily intended for assessment, per the [same search set](https://riviste.unimi.it/index.php/promoitals/article/download/19566/17435/57927).
- **[MODERATE, potentially important]** Serrano concludes that, from program-evaluation evidence, "long spacing of small L2 doses is probably not recommended" and that L2 learning likely needs high doses, while noting more program-level research is needed — [Serrano, 2022](https://dx.doi.org/10.14746/ssllt.2022.12.3.2). Intensive vs regular program studies she reviews are about much larger doses (for example, 400 ESL hours in Grade 6 children, where concentrated instruction gave greater overall proficiency with minimal differences on most measures), so they do not directly test a 10-minute app.
- **[WEAK, industry-affiliated]** Duolingo studies:
  - 245 learners who completed through A2 content exceeded the expected Intermediate Mid level in reading and listening — [Jiang et al., Foreign Language Annals, 2021](https://journal.equinoxpub.com/Calico/article/view/26704). Related listing; verify the exact URL.
  - Spanish independent learners (n = 48) significantly improved after about 27 hours over three months — [Smith, Jiang & Peters, Language Learning & Technology, Sept 2024](https://www.lltjournal.org/item/1152/). Details from a search summary.
  - Critiques: 90% of one study's Duolingo group had university degrees, and selection bias is flagged — [IAFOR WorldCALL paper, 2023](https://papers.iafor.org/wp-content/uploads/papers/worldcall2023/WorldCALL2023_73369.pdf). Jiang and Smith are described as Duolingo-affiliated in that search summary.
- **[WEAK]** Loewen et al. (2020): Babbel improved oral proficiency, grammar and vocabulary among 54 university students, via [a search summary](https://callej.org/index.php/journal/article/download/419/347/1013).

### Inferences: the arithmetic (my calculation from Cambridge's table)
- 10 min × 365 days = 3,650 min = **60.8 hours per year** at perfect adherence.
- 5 days per week (about 71% adherence): 10 min × 260 days = **43.3 hours per year**.

| Target (cumulative GLH) | Years at 7 days/week | Years at 5 days/week |
|---|---|---|
| A1 (90 to 100) | 1.5 to 1.6 | 2.1 to 2.3 |
| A2 (180 to 200) | 3.0 to 3.3 | 4.2 to 4.6 |
| B1 (350 to 400) | 5.8 to 6.6 | 8.1 to 9.2 |
| B2 (500 to 600) | 8.2 to 9.9 | 11.5 to 13.8 |

- Daily minutes required for B2 (500 to 600 hours): in 2 years, 41 to 49 min per day; in 3 years, 27 to 33 min; in 5 years, 16 to 20 min.
- Caveats on applying this arithmetic:
  - GLH describe classroom-style hours, including tasks. App minutes are not proven equivalent. They could be more efficient (high retrieval density, no class overhead) or less (no conversation, little output). The ratio is unknown, so do not claim one.
  - Adult English learners in Turkey do get outside exposure, and it would reduce these years. The size of that effect is unknown.
  - Real long-run adherence over 8 years is almost certainly far below 71%. I found no retention data to give a number.
- Vocabulary is not the bottleneck. At 5 new words a day, the 2,809-word NGSL takes 562 days (about 1.5 years) and Milton's B2 midpoint of 3,500 words takes 700 days (about 1.9 years). So a learner can plausibly reach B2-range vocabulary recognition long before B2 skills. The app can honestly promise vocabulary milestones and should not imply a matching CEFR level.
- Review budget, illustration only (assumptions, not data): 600 s per session at an assumed 8 s per item gives about 75 items a day. If each new card needs an assumed 8 reviews in its first year, 5 new words per day produce about 40 reviews a day at steady state, which leaves about 35 slots (roughly 280 s) for grammar, input and output. Measure this with FSRS simulation; do not ship on my assumed values.
- Product positioning: use Can-Do milestones ("can order food", "can follow a short story") rather than a B2 guarantee. Offer a credible optional step up, such as 20 to 30 minutes, or pair with out-of-app input.

### Gaps
- **No study found of 10 minutes per day sustained over years toward a CEFR level.** All extrapolation here is mine.
- The direct Council of Europe PDF was not opened; my statement that the CEFR itself does not assign hours to levels is unverified. I found no Council of Europe hour figures.
- Provenance of Cambridge's hours is not stated in what I read, and I found no empirical validation of them.
- No GLH data for Turkish L1 learners. Turkish is typologically distant from English, which could lengthen time, but I found no data.
- No attrition data retrieved for language apps. [Shortt et al. (2023)](https://papers.iafor.org/wp-content/uploads/papers/worldcall2023/WorldCALL2023_73369.pdf), a Duolingo systematic review, appears only as a citation; I did not read it.

## 6. Interleaving, desirable difficulties, testing effect, sleep, session length

### Takeaway
Interleaving is not a universal win. Across domains, blocking beat interleaving for word learning (g = -0.39), while small grammar studies favor interleaving contrasting forms on delayed tests. Sleep likely helps new-word consolidation, but L2-specific effect sizes are missing. I found no direct evidence on an optimal L2 session length.

### Cited Findings
- **[STRONG, general, not L2-specific]** Brunmair & Richter (2019; 59 studies, 238 effect sizes): mathematics g = 0.34 for interleaving; expository texts and tastes nonsignificant; words **g = -0.39, favoring blocking**. Interleaving helped more with high between-category and low within-category similarity. The authors urge caution with expository texts and words — [Psychological Bulletin, 2019](https://www.psychologie.uni-wuerzburg.de/fileadmin/06020400/2019/Brunmair_Richter_in_press__2019_META-ANALYSIS_OF_INTERLEAVED_LEARNING.pdf).
- **[MODERATE]** Pan et al. (2019): four experiments on Spanish preterite and imperfect. Earlier experiments gave a numerically higher blocked group or equivalence; a later one found interleaving substantially better on a one-week test. So it is not a clean result — [preprint record, 2018](https://discovery-imamu.kwaretech.com/EdsRecord/edsbas,edsbas.988BAC9D).
- **[WEAK]** Trade-off: with Chinese learners of French, blocked practice gave greater fluency in training and posttest, while interleaving gave greater accuracy at the expense of fluency — [Studies in Second Language Acquisition](https://www.cambridge.org/core/journals/studies-in-second-language-acquisition/article/dynamic-interplay-between-practice-type-and-practice-schedule-in-a-second-language/C01D682D82EDBD00AF29965FCA57BAF3). English relative clauses (60 learners): interleaving was more accurate on immediate and delayed posttests — [Sage Figshare record](https://sage.figshare.com/collections/The_role_of_working_memory_in_blocked_and_interleaved_grammar_practice_Proceduralization_of_L2_syntax/4925595). Both from a search summary; attribution of specific findings to these exact URLs should be checked.
- **Unverified:** Nakata & Suzuki (2019, Modern Language Journal 103(3), 629-647). Its title says mixing grammar exercises facilitates long-term retention, but I read no results. Seen only as a citation, e.g. in [Zheng et al., 2026](https://pressto.amu.edu.pl/index.php/ssllt/article/view/49487).
- **[STRONG for spacing and testing, see section 1]** Testing and spacing are the best-supported desirable difficulties. Difficulty is not beneficial in itself: retrieval without feedback at 50% or lower success gave g = 0.03 — [Rowland, 2014](https://courseware.epfl.ch/assets/courseware/v1/fdde2f0aa590bf3b1324077a6bf1540c/asset-v1%3AEPFL%2BDEMO%2B2020%2Btype%40asset%2Bblock/Rowland2014-meta-analysis.pdf). Serrano adds that benefits of more spacing may reverse for proceduralized production or learners with difficulties — [Serrano, 2022](https://dx.doi.org/10.14746/ssllt.2022.12.3.2). A framework paper exists (Suzuki, Nakata & DeKeyser, 2019), seen only in reference lists.
- **[MODERATE, adjacent population]** Sleep: a meta-analysis on children's overnight integration of new words found existing vocabulary associated with new-word consolidation — [James, Gaskell, Weighall & Henderson, Neuroscience & Biobehavioral Reviews, 2017](https://eprints.whiterose.ac.uk/id/eprint/113350/). Not an adult L2 sample.
- **[WEAK]** Adult and L2 sleep studies:
  - Sleep helps word-definition learning in a native language — [Kurdziel & Spencer](https://www.merrimack.edu/wp-content/uploads/Sleep-and-Word-Learning.pdf).
  - A daytime nap study showed improvement on learned words — [Heim et al., Frontiers in Psychology, 2017](https://www.frontiersin.org/journals/psychology/articles/10.3389/fpsyg.2017.00665/full).
  - Sleep-stage theory for L2 grammar is untested directly, per [a 2015 review](https://pmc.ncbi.nlm.nih.gov/articles/PMC4568164) (attribution of this point to this URL is unconfirmed).
- **[POPULAR, reject]** A "2023 Oxford meta-analysis" claim about sleep learning (38% fewer words) on a mirror site could not be verified — [te-dev.travis-ci.com page](https://te-dev.travis-ci.com/confirmed-can-you-learn-a-ukbr.html). Do not cite. Likewise there is no support here for learning through audio during sleep.
- **[MODERATE]** Distribution and intensity: massed vocabulary introduction was better immediately but extensive-program students retained more after three months (Spanish study), and the review details 47 studies on distributing L2 hours — [Serrano, 2022](https://dx.doi.org/10.14746/ssllt.2022.12.3.2).
- **[WEAK]** Session length: in intentional vocabulary activities, minutes per word did not significantly predict gains (only up to one-day treatments) — via [Lei & Reynolds, 2022](https://pmc.ncbi.nlm.nih.gov/articles/PMC9485613). Time on cards correlated weakly and non-significantly (rs = .396, p = .161, n = 14) in the same paper. This is not a test of session length.

### Inferences
- New words: don't force interleaving. Block very briefly at introduction, then let spacing mix them through later reviews. Grammar: mix only after a brief first exposure, and interleave forms that contrast and get confused (a/an/the; past simple vs present perfect). This fits Brunmair & Richter's similarity pattern, which is my extrapolation to L2.
- Expect interleaved and spaced sessions to feel harder and yield lower in-session scores. Don't optimize for in-session accuracy alone; include delayed checks as the product metric.
- Keep success in a range that stays motivating and informative (for example, about 80 to 90%). This range is a design heuristic suggested by Rowland's success moderator and is not a tested target.
- Sleep: an evening review prompt could be tested as a low-cost experiment. Do not make scientific claims for it.
- Streak and notification mechanics are outside the evidence reviewed here.

### Gaps
- **No direct evidence on 10-minute vs other session lengths for L2**, and none on one 10-minute block vs two 5-minute blocks. Within-session spacing is mentioned by [Zheng et al., 2026](https://pressto.amu.edu.pl/index.php/ssllt/article/view/49487) but not quantified here.
- No L2-specific meta-analysis of interleaving or sleep found. Berres & Erdfelder (2021) and Schimke et al. (2021), which I searched for by name, did not appear, so I cannot confirm that they say what I searched for.
- Pronunciation and speaking practice were not investigated in this run beyond the reference to Li & DeKeyser (2019) in Serrano.
