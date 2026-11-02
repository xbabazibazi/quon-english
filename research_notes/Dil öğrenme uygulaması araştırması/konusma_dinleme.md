# Teaching speaking, listening and pronunciation in an offline-first English-learning PWA

All live pages (prices, browser tables, docs) were checked on 2026-11-02 unless stated otherwise. Publication dates are given for every source; "date not shown" means the page carries none. Effect sizes are Hedges' g or Cohen's d as reported. Figures labelled "my arithmetic" are calculations from the cited inputs, not published numbers. Several papers were read through an automated full-page extraction or abstract listing, not line by line, and this is noted where it matters.

## Evidence on app-based speaking practice, AI conversation partners and automated corrective feedback on pronunciation

### Takeaway
Pooled effects are medium (g about 0.6-0.7), but they rest on small, heterogeneous, mostly pre-LLM studies with probable publication bias. For a solo app, the most useful signals are that very short use showed almost no ASR benefit, solo practice gained less than peer or teacher practice, explicit feedback beat indirect feedback, and goal-oriented dialogue beat form-focused dialogue.

### Cited Findings
**ASR-based pronunciation feedback**
- Ngo, Chen & Lai, ReCALL 36(1), online 13 Apr 2023, issue Jan 2024: 15 studies, 38 effect sizes (2008-2021); overall g = 0.69, 95% CI [0.31, 1.08]; heterogeneity substantial (Q = 227.70) — [ReCALL meta-analysis](https://www.cambridge.org/core/journals/recall/article/effectiveness-of-automatic-speech-recognition-in-eslefl-pronunciation-a-metaanalysis/A915444CF252B61D14961D2FE733822D)
- Same paper, moderators: explicit corrective feedback g = 0.86 vs indirect g = 0.50; segmental g = 0.82 vs suprasegmental g = 0.37; 1-4 weeks g = 0.07, 5-8 weeks g = 1.01, 9+ weeks g = 0.72; alone g = 0.44, with peers g = 0.89, with teacher g = 1.24 (only two studies) — [ReCALL meta-analysis](https://www.cambridge.org/core/journals/recall/article/effectiveness-of-automatic-speech-recognition-in-eslefl-pronunciation-a-metaanalysis/A915444CF252B61D14961D2FE733822D)
- Stated limits: few primary studies; publication bias not tested; no delayed post-tests, so retention is unknown; beginners and advanced learners are underrepresented (the beginner g = 1.33 rests on two studies); ASR is weaker on children's speech and on suprasegmentals — [ReCALL meta-analysis](https://www.cambridge.org/core/journals/recall/article/effectiveness-of-automatic-speech-recognition-in-eslefl-pronunciation-a-metaanalysis/A915444CF252B61D14961D2FE733822D)
- A 2024 review of mobile-assisted pronunciation training found results varying from large effects to negligible, non-significant gains — [Languages, Jul 2024, DOAJ record](https://doaj.org/article/de74fb67773241559297bf066053c144)

**Dialogue systems and AI conversation partners**
- Hou & Min, ReCALL 38(1), online 14 Jul 2025, issue Jan 2026: 16 studies, 89 effect sizes, speaking outcomes only; overall g = 0.61, 95% CI [0.34, 0.89] — [ReCALL three-level meta-analysis](https://www.cambridge.org/core/product/31847710516602398819C5E594038E7B)
- Same paper, moderators: goal-oriented systems large effect, reactive medium, form-focused small and non-significant; mixed multimodal systems large, voice-only small; large effects for task completion, vocabulary and fluency; pronunciation g = 0.58; grammatical accuracy not significant — [ReCALL three-level meta-analysis](https://www.cambridge.org/core/product/31847710516602398819C5E594038E7B)
- Same paper, limits: systems were "mostly rule-based", not generative; 15 of 16 studies had fewer than 60 learners; funnel plot asymmetrical; authors call the field preliminary — [ReCALL three-level meta-analysis](https://www.cambridge.org/core/product/31847710516602398819C5E594038E7B)
- Earlier synthesis: Bibauw et al. report d = 0.58 on L2 proficiency for dialogue-based CALL — [Language Learning & Technology, 2022](https://www.lltjournal.org/item-detail/1035)
- A 2026 EUROCALL work by Wang, Bibauw, Noreillie & Desmet covers 67 studies (2011-2025), 237 effect sizes, g = 0.61, CI [0.48, 0.74]; it is seemingly a conference presentation and provisional. I saw this through a search summary only — [UCLouvain record, "Hype or hope?"](https://research.dial.uclouvain.be/entities/publication/29791a54-111b-40eb-bacb-346494980619)
- Generative AI evidence is mainly affective and of weaker design: a structural model (Frontiers in Psychology, Jan 2026) is correlational and finds speaking enjoyment and anxiety have comparatively modest effects on willingness to communicate with GenAI — [Tang et al.](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC12883774/)
- A 2024 study in System compared GenAI chatbot formats on willingness, anxiety and perceived competence and favoured human-like avatars; randomization not confirmed — [XJTLU record](https://scholar.xjtlu.edu.cn/en/publications/the-impact-of-different-conversational-generative-ai-chatbots-on-)
- A 2025 small study reports that ChatGPT voice encouraged more speaking practice and willingness to communicate — [ELTIN journal](https://e-journal.stkipsiliwangi.ac.id/index.php/eltin/article/view/7154)

**Pronunciation instruction as a baseline**
- Lee, Jang & Plonsky, Applied Linguistics 36(3), 2015: d = 0.89 within-group and d = 0.80 between-group — [NAU record](https://experts.nau.edu/en/publications/the-effectiveness-of-second-language-pronunciation-instruction-a-/). A replication paper calls the between-group value medium and describes 86 studies, so size labels differ between sources — [Language Teaching replication, date not checked](https://www.cambridge.org/core/product/295A0BD9437FFB55980836BE9EAA3520/core-reader)
- Saito & Plonsky, Language Learning 69(3), 2019: 77 studies (1982-2017); instruction is most effective when it targets monitored production of specific features, so outcome measures shape the conclusion — [NAU record](https://experts.nau.edu/en/publications/effects-of-second-language-pronunciation-teaching-revisited-a-pro/)

### Inferences
- Plan for at least 5 weeks of spaced practice; a 1-2 week trial is unlikely to show ASR benefit. This is an observational moderator, not a dose-response experiment.
- The most defensible offline conversation substitute is scripted, goal-oriented, branching tasks rather than form drills, since rule-based systems produced the pooled effects. This fits the no-runtime-LLM constraint.
- The g = 0.61 figure should not be presented as evidence for LLM conversation partners, or as evidence against them. It mostly measures older systems.
- A solo app should expect something closer to the "alone" estimate (g = 0.44), not the headline 0.69. Optional peer exchange could matter, but that is a hypothesis.

### Gaps
- I found no confirmed large RCT of LLM voice partners and no independent controlled trials of commercial products such as Duolingo, Speak or ELSA. A 2021 ELSA study appeared only as a small single study.
- Durable effects of automated feedback are essentially unmeasured: the ASR meta-analysis had no delayed post-tests.
- Evidence specific to Turkish L1 learners was not searched.
- Wang et al. (2026) and a related Guo meta-analysis (reported g = 0.608, 31 studies) were seen only in search summaries, so their moderators were not verified.

## Evidence for high-variability phonetic training, shadowing, dictation and listening instruction

### Takeaway
HVPT has the strongest evidence and is the best fit for an offline PWA, because it needs only audio and tap responses and no speech recognition. Its perception gains are robust, but transfer to production on untrained items is weak. Shadowing has promising narrative evidence but no located meta-analysis. Dictation as a training method has almost no synthesis evidence.

### Cited Findings
**HVPT**
- Uchihara, Karas & Thomson, SSLA 47(3), online 4 Jun 2025: 79 studies; pre-post g = 0.92, adjusted to 0.71 after trim-and-fill; treatment-control g = 0.67; delayed vs pretest g = 0.98 (0.73 adjusted); posttest to delayed g = -0.08 over a mean of about 2.3 months — [SSLA meta-analysis](https://www.cambridge.org/core/journals/studies-in-second-language-acquisition/article/high-variability-phonetic-training-hvpt-a-metaanalysis-of-l2-perceptual-training-studies/6ABB8C1F32D88D53EA8D05A4565E76F6/core-reader)
- Same paper: total time predicts gains up to a plateau around 400 minutes; time per session non-significant; number of talkers not significant overall, though higher-proficiency learners benefited up to about six talkers and lower-proficiency learners showed no significant benefit; most studies used four talkers; training setting (lab, participant-controlled, classroom) non-significant; generalization to new items and talkers broadly maintained (g -0.17 to -0.26 from posttest) — [SSLA meta-analysis](https://www.cambridge.org/core/journals/studies-in-second-language-acquisition/article/high-variability-phonetic-training-hvpt-a-metaanalysis-of-l2-perceptual-training-studies/6ABB8C1F32D88D53EA8D05A4565E76F6/core-reader)
- Same paper, limits: mean n = 17.2 per group; only one study reported test reliability; control groups gained g = 0.19; the extraction flagged inconsistent k values for the treatment-control contrast (92 vs 32) — [SSLA meta-analysis](https://www.cambridge.org/core/journals/studies-in-second-language-acquisition/article/high-variability-phonetic-training-hvpt-a-metaanalysis-of-l2-perceptual-training-studies/6ABB8C1F32D88D53EA8D05A4565E76F6/core-reader)
- Production transfer: Uchihara, Karas & Thomson, Applied Psycholinguistics 45(4), online 18 Sep 2024: 31 studies; within g = 0.49, between g = 0.66; trained items g = 0.61 vs new items g = 0.20 (p = .091); raw gains 10.5% vs 4.5%; pre-to-delayed g = 0.26 (p = .053); gains highest around 20-30 min per session; phonetic information g = 0.94 vs 0.45 without; written prompts g = 0.62 vs auditory-only g = 0.19 — [Applied Psycholinguistics](https://www.cambridge.org/core/product/E38D8F5CE65DC708137B0E95F97C6BC7)
- Same paper, limits: average n about 17; mostly controlled production tasks, so spontaneous speech is largely untested; several moderators are marginal or small-k — [Applied Psycholinguistics](https://www.cambridge.org/core/product/E38D8F5CE65DC708137B0E95F97C6BC7)
- Counterpoint on the variability ingredient: Zhang, Cheng & Zhang, JSLHR 64(12), 2021: 18 studies, 549 participants, immediate g = 0.46 [0.08, 0.84], falling to g = -0.04 [-0.46, 0.37] after outlier removal and bias correction; production gains non-significant; generalization g = 0.72; retention g = 1.09 — [UMN record](https://experts.umn.edu/en/publications/the-role-of-talker-variability-in-nonnative-phonetic-learning-a-s/)

**Shadowing**
- Whitworth & Rose (2025), a systematic review of shadowing for pronunciation, appears in Research Synthesis in Applied Linguistics per its reference list; a blog names a different journal, so verify via DOI 10.1080/29984475.2025.2546827. I did not read the published text — [reference via Oxford thesis record](https://ora.ox.ac.uk/objects/uuid:3104cae1-3a6b-400a-b173-de44384238d2)
- The underlying Oxford MSc thesis (2024) concludes shadowing can help comprehensibility, intelligibility, accentedness and suprasegmental control such as fluency and prosody, with segmental effects inconclusive — [Oxford ORA](https://ora.ox.ac.uk/objects/uuid:3104cae1-3a6b-400a-b173-de44384238d2)
- Shadowing is mostly framed as a bottom-up listening technique. An earlier RELC Journal review reported no summative review existed at that time — [RELC Journal, online 2018-19](https://journals.sagepub.com/doi/10.1177/0033688218771380)
- A 2025 narrative review addresses shadowing for EFL learners' bottom-up listening — [NJLTL, El Moussaoui](https://journal.uia.no/index.php/NJLTL/article/view/1139)

**Listening instruction and dictation**
- Dalman & Plonsky, Language Teaching Research (online about 2022; print 29(3), 2025 per bibliographic listings): 45 studies, 51 samples, listening strategy instruction d = 0.69, with moderators present — [NAU record](https://experts.nau.edu/en/publications/the-effectiveness-of-second-language-listening-strategy-instructi/)
- A Chinese-language meta-analysis reports g = 0.709, metacognitive instruction most effective and university students benefiting more than school students; seen in a search summary, and the record's exact identity is not verified — [todoele listing, date not shown](https://todoele.net/bibliografia-temas/comprension-oral)
- Transcription as an outcome measure in HVPT production studies gave g = 1.14 but only k = 4. This concerns testing, not dictation as training — [Applied Psycholinguistics](https://www.cambridge.org/core/product/E38D8F5CE65DC708137B0E95F97C6BC7)

### Inferences
- Treat HVPT as a first audio feature: identification tasks with immediate feedback, roughly 4-6 voices for higher levels and fewer for beginners, 20-30 minute maximum sessions, about 400 total minutes per program at most, and written labels plus brief phonetic explanation.
- Do not promise a speaking improvement from listening drills alone. Pair them with production practice and measure untrained items.
- Zhang (2021) and Uchihara (2025) together suggest that "many voices" is not proven to be the active ingredient. Perceptual training with feedback and adequate time may matter more, so a large voice library is not a justified expense yet.
- Dictation is a cheap, fully offline task with local scoring by text comparison. It is justified as a diagnostic and for noticing, not by strong evidence of training effects.
- Strategy-instruction evidence supports brief metacognitive guidance such as prediction and post-listening review, not just audio exposure. Most of those studies were classroom-based, so app transfer is untested.

### Gaps
- I could not retrieve Sakai & Moorman's (2018) effect sizes.
- I found no meta-analysis of shadowing and no controlled synthesis of dictation. A blog's claim of a "44 study" 2025 review could not be confirmed.
- I found no study testing HVPT with TTS or synthetic voices rather than recorded talkers. This matters directly for a TTS-only audio pipeline and needs a pilot.
- HVPT moderator results specific to self-paced app delivery were not located.

## Intelligibility versus native-accent goals (Levis, Jenkins' Lingua Franca Core)

### Takeaway
The scholarly direction favours intelligibility over nativeness as the default goal, but the Lingua Franca Core is a contested guide, not a validated syllabus. Vendor scores often embed a native benchmark, so they should not be displayed as "how native you sound".

### Cited Findings
- Levis (2005) contrasts the Nativeness Principle, native pronunciation that is unlikely to be achieved and unnecessary for effective communication, with the Intelligibility Principle, helping learners be understood — [Iowa State record of Levis's later paper, which restates the framing](https://dr.lib.iastate.edu/entities/publication/e55f539c-a8ef-4e1b-9628-44714d64a6b5/full)
- Levis's 2020 revisit in Journal of Second Language Pronunciation 6(3) continues to argue for intelligibility. I saw only a listing and abstract-level text — [JSLP](https://www.jbe-platform.com/content/journals/10.1075/jslp.20050.lev)
- Commentary: intelligibility must be sensitive to context and interlocutor, making it harder to operationalize. This came from a search summary and I could not confirm which result it belongs to, so check before quoting — [Levis (2020) listing, likely context](https://www.jbe-platform.com/content/journals/2215194x/6/3)
- Hancock's practitioner essay argues the Core (Jenkins 2000) was widely misread as a fixed list, notes it excludes TH sounds and weak forms, distinguishes productive and receptive goals, and proposes process-oriented goals around accommodation, which was already central in Jenkins's book — [Hancock, IATEFL Speak Out 60, year not shown](https://www.hancockmcdonald.com/sites/hancockmcdonald.com/files/file-downloads/Beyond%20Dogma%20and%20Denial.pdf)
- Empirical support appears partial: a Haslam & Zetterholm study on initial consonant clusters supports part of the claim but finds epenthesis position changes the outcome. This comes from a search summary and the exact link mapping was not verified — [PSLLT proceedings](https://iastatedigitalpress.com/psllt/article/15383/galley/13542/view)
- Azure's documentation defines Fluency as how closely speech matches a native speaker's use of silent breaks — [Microsoft Learn, updated 5 Jun 2026](https://learn.microsoft.com/en-us/azure/ai-services/speech-service/pronunciation-assessment-tool)
- Shadowing and instruction outcome measures can differ: comprehensibility and accentedness are reported as separate constructs — [Oxford ORA, 2024](https://ora.ox.ac.uk/objects/uuid:3104cae1-3a6b-400a-b173-de44384238d2)

### Inferences
- Productive goals could prioritize contrasts that cause word confusion, while receptive practice should expose learners to varied accents, including features they need not produce, such as weak forms and TH variants.
- UI copy should say "clear" or "understood", not "native-like", and vendor scores should be mapped to task outcomes such as whether the target word was recognized.
- Accent variety in audio supports the receptive goal, but non-native accented voices in synthetic TTS need checking.

### Gaps
- I could not read Jenkins (2000) directly. The full LFC feature list and sample limitations are not verified here, and this note should not be used as a syllabus source.
- I could not retrieve the Levis texts in full (HTTP 403). Quantified functional-load evidence was not researched.
- No validated intelligibility priority list for Turkish L1 learners was searched.

## Technical options as of 2026

### Takeaway
There is no single speech-input path that covers both Android and installed iOS PWAs offline. Web Speech recognition is usually server-based and unreliable or unavailable in iOS home-screen mode. Whisper in the browser is feasible on WebGPU devices at 40-290 MB but returns text, not pronunciation scores. Pre-generated audio is the cheapest, most reliable base layer, and phoneme scoring in practice needs a server API.

### Cited Findings
**Web Speech API recognition (checked 2026-11-02)**
- MDN marks SpeechRecognition "Limited availability" and warns that on browsers such as Chrome audio is sent to a web service, so it does not work offline — [MDN, modified 19 Aug 2026](https://developer.mozilla.org/en-US/docs/Web/API/SpeechRecognition)
- caniuse: Chrome partial 25-159; Chrome Android 156 partial; Safari partial from 14.1; iOS Safari partial from 14.5 through 27.2; Samsung Internet partial 4-30; Firefox disabled by default; Firefox Android 159 unsupported; Edge listed unsupported. It does not explain "partial" — [caniuse](https://caniuse.com/speech-recognition)
- iOS installed mode: WebKit's 2021 engineer comment says the API is not available in SafariViewController and home-screen apps; the bug is RESOLVED LATER, with the last comment 1 Mar 2025 adding no fix — [WebKit bug 225298](https://bugs.webkit.org/show_bug.cgi?id=225298)
- Feature detection can mislead: Firtman reported the API is detectable in standalone mode but nothing happens — [firt.dev, Apr 2021](https://firt.dev/ios-14.5/). A later forum report matches — [Apple Developer Forums, date not checked](https://developer.apple.com/forums/thread/748048)
- iOS 26 opens sites added to the Home Screen as web apps by default, which expands exposure to this limitation (Safari 26 released 15 Sep 2025) — [Safari 26 release notes](https://developer.apple.com/documentation/safari-release-notes/safari-26-release-notes.md)
- A lower-authority blog reports recognition hanging after `<audio>` playback, including in PWAs; unverified — [TechNetExperts, date not shown](https://www.technetexperts.com/ios-safari-web-speech-api-bug-fix/)

**On-device Web Speech**
- Setting `processLocally = true` requires a language pack; `SpeechRecognition.available()` and `install()` manage it; without the pack, `start()` fails with `language-not-supported`; shorter commands are supported by more hardware than dictation — [MDN guide, modified 31 Aug 2026](https://developer.mozilla.org/en-US/docs/Web/API/Web_Speech_API/Using_the_Web_Speech_API)
- `processLocally` is marked experimental — [MDN, modified 30 Sep 2025](https://developer.mozilla.org/en-US/docs/Web/API/SpeechRecognition/processLocally)
- Edge documentation requires Canary or Dev with a flag for the local model, as seen in a search summary — [Microsoft Learn, date not checked](https://learn.microsoft.com/en-us/microsoft-edge/web-platform/speech-recognition-api)

**Whisper via WebGPU or WASM**
- caniuse WebGPU: Chrome Android 156 yes; iOS Safari 26.0+ yes (17.4-18.7 disabled by default); Samsung Internet 24+; Firefox and Firefox Android disabled by default — [caniuse](https://caniuse.com/webgpu)
- Actual ONNX file sizes: whisper-tiny.en encoder 10.1 MB (int8), 32.9 MB (full); merged decoder 30.7 MB (int8), 119 MB (full) — [Hugging Face, whisper-tiny.en](https://huggingface.co/onnx-community/whisper-tiny.en/tree/main/onnx)
- whisper-base: encoder 23.2 MB (int8), 18.8 MB (q4), 82.5 MB (full); merged decoder 53.7 MB (int8), 124 MB (q4), 209 MB (full) — [Hugging Face, whisper-base](https://huggingface.co/onnx-community/whisper-base/tree/main/onnx)
- Conflict: LogRocket states about 40 MB for whisper-base at q4, degrading to WASM without WebGPU — [LogRocket, date not checked](https://blog.logrocket.com/voice-ai-agent-browser/). The file listing above does not support 40 MB for base q4. A demo cites about 200 MB — [Hugging Face Space](https://sagicc-webgpu-whisper-sr.static.hf.space)
- Whisper on L2 speech: off-the-shelf WER on the Speak & Improve set was Small 10.7%, Medium 10.4%, Large V3 9.5%, and verbatim transcription of hesitations required tuning — [arXiv 2506.04076v2, 25 Jul 2025](https://arxiv.org/html/2506.04076v2)
- On L2-ARCTIC read speech, Whisper's mean match error rate was 0.054 — [McGuire, arXiv 2503.06924, 2025](https://arxiv.org/abs/2503.06924v2)
- In a French-learner study, Whisper medium's transcripts converged on what a native listener understands, while tiny yielded alternates that were plausible learner error candidates — [ICNLSP 2023](https://aclanthology.org/2023.icnlsp-1.30.pdf)

**TTS (pre-generated or local)**
- Kokoro-82M: Apache-2.0 weights; v1.0 (27 Jan 2025) has 8 languages and 54 voices; API market rates under $1 per 1M characters; about 1,000 characters per output minute (page figures as of Apr 2025). Training data included CC BY datasets and synthetic audio from closed providers' TTS models — [Hugging Face, hexgrad/Kokoro-82M](https://huggingface.co/hexgrad/Kokoro-82M)
- Kokoro in browser: smallest variant 86 MB vs 326 MB original; WASM or WebGPU, fp32 recommended on WebGPU — [kokoro-js npm, v1.2.0](https://www.npmjs.com/package/kokoro-js)
- Piper: current OHF-Voice/piper1-gpl is GPL-3.0, while the old rhasspy repo was archived under MIT in Oct 2025; voice licences vary by model card. These come from secondary sources — [GitHub releases](https://github.com/OHF-Voice/piper1-gpl/releases); [PromptQuorum review, date not checked](https://www.promptquorum.com/power-local-llm/piper-tts-review)
- OpenAI: tts-1 $15 per 1M characters; gpt-4o-mini-tts $0.60 per 1M text tokens plus $12 per 1M audio tokens — [OpenAI pricing, checked 2026-11-02](https://developers.openai.com/api/docs/pricing?no_head=1)
- ElevenLabs API: third-party reports of $50-100 per 1M characters and another of $80 per 1M for v4, dated Jul-Oct 2026; not confirmed on the vendor page — [InVideo comparison, Aug 2026](https://invideo.io/blog/ai-voice-model-pricing/); [Smallest.ai, 2026](https://smallest.ai/blog/elevenlabs-pricing-plans-cost-what-you-get-in-2026)
- Azure Neural TTS free tier: 0.5M characters per month. Paid prices were masked in the page text — [Azure pricing, checked 2026-11-02](https://azure.microsoft.com/en-us/pricing/details/cognitive-services/speech-services/)

**Caching audio**
- Opus in `<audio>`: iOS Safari fully supported from 18.4, partial 11-18.3; Chrome Android 156 yes; containers are not addressed — [caniuse](https://caniuse.com/opus)
- 24 kbps speech is about 180 KB per minute (24 x 60 / 8), though the site is a weak source and this is simple arithmetic — [converter comparison, date not shown](https://kaijuconverter.com.servidor3000.lucusvirtual.es/compare/opus-vs-spx)
- Workbox: media must be cached in advance rather than at runtime, the service worker needs range-request handling, and media elements need `crossorigin` — [Chrome for Developers, updated 7 Dec 2021](https://developer.chrome.com/docs/workbox/serving-cached-audio-and-video)
- Storage: Chromium up to 60% of disk per origin; Safari browser apps and Home Screen apps about 60% on iOS 17+; `navigator.storage.persist()` is available; Safari's 7-day eviction applies without user interaction, and the article does not state whether installed apps are exempt — [MDN, modified 5 Jan 2026](https://developer.mozilla.org/en-US/docs/Web/API/Storage_API/Storage_quotas_and_eviction_criteria)

**Pronunciation assessment APIs**
- Azure: phoneme, syllable, word and text-level accuracy; miscues; scripted and unscripted modes; content scores and prosody en-US only; recommended unscripted length 15 s to 10 min — [Microsoft Learn, updated 5 Jun 2026](https://learn.microsoft.com/en-us/azure/ai-services/speech-service/pronunciation-assessment-tool)
- Azure pricing structure: baseline costs the same as speech-to-text; prosody is an add-on; free tier 5 audio hours per month — [Microsoft Learn](https://learn.microsoft.com/en-us/azure/ai-services/speech-service/pronunciation-assessment-tool); [Azure pricing, masked amounts](https://azure.microsoft.com/en-us/pricing/details/cognitive-services/speech-services/)
- Azure amounts (not vendor-confirmed): $1.32/hr, US East, Nov 2025, per a volunteer moderator — [Microsoft Q&A, 4 Nov 2025](https://learn.microsoft.com/en-us/answers/questions/5608069/pricing-and-usage-of-pronunciation-assessment-feat). Another source gives $1/hr plus $0.30/hr add-on, roughly consistent — [DevelopersDigest, date not checked](https://www.developersdigest.tech/models/speech/azure)
- Speechace vendor plans: Basic $40/mo for 5,000 15-second requests (30 s max); Pro $80 for 10,000 (45 s); Premium $125 for 10,000 (2 min); $0.008 per 15 s, Premium $0.0125 — [Speechace, undated, checked 2026-11-02](https://www.speechace.com/api-plans/). Conflict: a third party lists Pro at $250 for 30,000 calls — [FitGap, date not checked](https://us.fitgap.com/products/speechace-api)
- Open-source: OpenPronounce (Wav2Vec2 + DTW, Python/Docker, English calibrated) and pronounce-assess (Python, wav2vec2 CTC) are server-style tools; neither was shown as browser-ready — [OpenPronounce](https://github.com/Halleck45/OpenPronounce); [pronounce-assess, PyPI](https://pypi.org/project/pronounce-assess/)

### Inferences
- Plausible download totals, assuming encoder plus merged decoder (my arithmetic): tiny.en int8 about 41 MB; base int8 about 77 MB; base q4 about 143 MB; base full about 292 MB. The "200 MB" demos are near full encoder plus q4 decoder (about 207 MB), but that pairing is my guess.
- Whisper's language model bias means it can transcribe the intended word despite a mispronunciation, so a matching transcript is weak evidence of correct pronunciation. The French study supports this only indirectly.
- Web Speech should be at most an optional enhancement. It returns transcripts without pronunciation scoring, and feature detection cannot confirm functionality on iOS, so the app needs a live functional probe and a graceful fallback.
- Build order: pre-generated audio first, then record-and-compare with waveform playback, then Whisper as opt-in download, then server scoring as a paid or online add-on.
- Prefer permissive engines for shipped code. Because audio is pre-generated at build time, the GPL engine question differs from shipping GPL code in the client, but legal review of each voice's model card is needed.

### Gaps
- **Not verified on a device:** whether SpeechRecognition, getUserMedia and MediaRecorder work in iOS 26/27 standalone mode. Safari 26 notes confirm MediaRecorder ALAC and PCM additions, but I found no standalone microphone statement. A real-device test is required.
- Chrome's first version for on-device recognition and Chrome Android language-pack availability could not be verified. A Nov 2025 Google/Mozilla slide deck said Firefox was behind a flag and "shipping soon", and current status was not confirmed.
- No credible mobile latency, RAM or battery benchmarks for Whisper or Kokoro in browser were found. LogRocket's 1-1.5 GB VRAM warning covers Whisper plus an LLM together.
- No browser-ready phoneme scorer (GOP, wav2vec2 on ONNX Runtime Web, sherpa-onnx, Vosk) was verified. Azure embedded speech was not checked. Treat offline phoneme scoring as unverified R&D, not an available option.
- Official Azure dollar amounts were unavailable because of masked page text and an empty retail API query. Google Cloud TTS prices could not be retrieved, and I do not report them.
- Commercial TTS terms on storing and redistributing generated audio and AI-voice disclosure were not read. Check them before shipping.
- Opus-in-container behaviour on iOS Safari (Ogg, WebM, CAF, MP4) was not confirmed. AAC or MP3 fallback should be tested.

## What works fully offline, what needs a server, and approximate per-user cost

### Takeaway
Listening, HVPT, dictation, shadowing with self-comparison and scripted role-play can all run fully offline at nearly zero marginal per-user cost. Automated scoring costs roughly $0.10-3.20 per active user per month, and live conversation costs more and is unverified at the token-to-minute level.

### Cited Findings
| Feature | Offline? | Server? | Cost basis | Source |
|---|---|---|---|---|
| Pre-generated audio playback, HVPT, dictation | Yes, after caching | Only for first download | One-off generation plus hosting bandwidth | [Workbox, 2021](https://developer.chrome.com/docs/workbox/serving-cached-audio-and-video) |
| Web Speech recognition, default | No on Chrome | Vendor-run | No direct fee found; audio goes to web service | [MDN, Aug 2026](https://developer.mozilla.org/en-US/docs/Web/API/SpeechRecognition) |
| Web Speech on-device | Conditional on language pack and browser support | Pack download | Experimental | [MDN, Aug 2026](https://developer.mozilla.org/en-US/docs/Web/API/Web_Speech_API/Using_the_Web_Speech_API) |
| Whisper in browser | Yes, after model download, if browser and device cope | Model hosting | 41-292 MB download; no API fee | [HF tiny.en](https://huggingface.co/onnx-community/whisper-tiny.en/tree/main/onnx), [HF base](https://huggingface.co/onnx-community/whisper-base/tree/main/onnx) |
| Kokoro in browser | Yes, after download | Model hosting | 86 MB+ | [kokoro-js](https://www.npmjs.com/package/kokoro-js) |
| Cloud transcription | No | Yes | $0.003/min gpt-4o-mini-transcribe; $0.006/min Whisper | [OpenAI, checked 2026-11-02](https://developers.openai.com/api/docs/pricing?no_head=1) |
| Azure pronunciation assessment | No in the checked cloud route | Yes | About $1.32/hr, not vendor-confirmed | [MS Q&A, Nov 2025](https://learn.microsoft.com/en-us/answers/questions/5608069/pricing-and-usage-of-pronunciation-assessment-feat) |
| Speechace | No | Yes | $0.008 per 15 s | [Speechace, undated](https://www.speechace.com/api-plans/) |
| Realtime voice conversation | No | Yes | gpt-realtime-mini audio $10 in, $20 out per 1M tokens; gpt-realtime $32 and $64 | [OpenAI, checked 2026-11-02](https://developers.openai.com/api/docs/pricing?no_head=1) |

### Inferences
**Per-user scoring cost, my arithmetic using the rates above.** Moderate user: 20 utterances per day, 5 s each, 20 days per month = 400 utterances or 33.3 min. Heavy user: 100 min per month.

| Service | Moderate | Heavy | Note |
|---|---|---|---|
| Azure at $1.32/hr | $0.73 | $2.20 | 5 free hours a month cover only about 9 moderate users |
| Speechace at $0.008 per 15 s | $1.07 pro rata; $3.20 if each short clip bills a full unit | $3.20 | Rounding rule not verified; $40 monthly minimum applies |
| gpt-4o-mini-transcribe, text only | $0.10 | $0.30 | No pronunciation scores |
| Whisper-1 API, text only | $0.20 | $0.60 | No pronunciation scores |

- These exclude backend hosting, payment fees and free-user dilution. Free-tier users using scoring would require a cap.
- **Content generation example:** 10,000 lines at 60 characters = 600,000 characters, about 600 minutes by Kokoro's rule of thumb. This costs about $9 on tts-1, $30-60 on ElevenLabs by third-party rates, or under $0.60 at Kokoro hosted rates. It comes to about 108 MB at 24 kbps. These are one-off, not per-user.
- **HVPT example:** 40 minimal pairs x 2 words x 6 voices = 480 clips, about 8 minutes at 1 s each and about 1.4 MB at 24 kbps. Storage is not the constraint.
- Split audio into lazily precached unit packs rather than one bundle, and call `navigator.storage.persist()`, but design for re-download since persistence is not guaranteed.
- Scoring belongs behind a paid tier or strict quota. A $0.73-3.20 monthly cost could be significant against Turkish-market subscription prices, which I did not research.

### Gaps
- Realtime conversation per-minute cost is not officially verified. From unverified memory of OpenAI guidance, about 600 input and 1,200 output audio tokens per minute would imply roughly $0.006/min input and $0.024/min output on mini. That gives about $0.45 for 30 minutes split evenly, before context re-billing and text tokens. Treat this only as a rough order of magnitude, and it conflicts with the no-runtime-LLM core unless it is a separate online add-on.
- CDN bandwidth prices and Turkish-market willingness to pay were not researched.
- Azure commitment-tier prices were masked, so volume discounts are unknown.

## Privacy issues of voice recording under KVKK and GDPR

### Takeaway
Voice recordings are personal data, and they become special-category biometric data when processed to uniquely identify a person, though KVKK's recent language treats voice timbre as a biometric example, so a cautious stance is warranted. Local-only processing removes the largest obligations. Sending audio to foreign APIs brings Turkish cross-border transfer duties, and Web Speech can do so implicitly.

### Cited Findings
**GDPR and EDPB**
- EDPB Guidelines 02/2021 on virtual voice assistants, final version 7 Jul 2021: Recital 51's logic on photographs applies to voice, so data is biometric only when processed through specific technical means allowing unique identification or authentication; identification use requires an Article 9 exemption as well as an Article 6 basis (para 36, section 3.8) — [EDPB](https://www.edpb.europa.eu/our-work-tools/our-documents/guidelines/guidelines-022021-virtual-voice-assistants_en)
- Same guidelines: consent under ePrivacy Article 5(3) is not needed where processing is strictly necessary to execute the user's request, but is needed for other purposes; improving machine-learning models is treated as a distinct purpose; keeping data until a user requests deletion does not meet storage limitation; retention must be tied to each purpose; controllers should ask whether storing all recordings is necessary (paras 95-97) — [EDPB](https://www.edpb.europa.eu/our-work-tools/our-documents/guidelines/guidelines-022021-virtual-voice-assistants_en)
- Belgian DPA, on Antwerp sound sensors: biometric data fall under Article 9 only when processed specifically to identify an individual — [PwC Legal Belgium, date not checked](https://www.pwclegal.be/en/news/voices-as-personal-data--belgian-dpa-challenges-antwerp-s-noise-.html)
- A law-firm commentary treats voice alone as personal data — [Morgan Lewis, Jul 2024](https://www.morganlewis.com/blogs/sourcingatmorganlewis/2024/07/rise-of-text-to-speech-ai-models-part-2-data-protection-issues)

**KVKK**
- The KVKK biometric guide (2021) adopts the GDPR-style definition with two conditions: traits extracted by specific processing and enabling identification or verification. Biometric data is special category under Article 6. The extract I read does not mention voice — [Alomaliye reproduction, 16 Sep 2021](https://www.alomaliye.com/2021/09/16/biyometrik-verilerin-islenmesinde-dikkat-edilecek-hususlara-iliskin-rehber/)
- KVKK Board decision 2026/921 of 29 Apr 2026, on workplace time tracking, Official Gazette 2 Jun 2026, cites voice timbre ("ses tınısı") as an example of behavioural biometric data — [Alomaliye, 2 Jun 2026](https://www.alomaliye.com/2026/06/02/mesai-takibinde-biyometrik-veri-islenmesine-yeni-ilke-karari-kvkk/amp/)
- Law 7499 changed KVKK Article 9, in force 1 Jun 2024; explicit consent as a transfer basis is limited to incidental transfers from 1 Sep 2024 — [EY Turkey, date not checked](https://www.ey.com/tr_tr/insights/law/kvkk-degisikliginin-yurt-disi-veri-aktarimina-etkisi)
- The Board published standard contracts, reported as decision 2024/959 with four transfer types — [KVKK notice, 2024](https://www.kvkk.gov.tr/Icerik/7938/Standart-Sozlesmeler-ve-Baglayici-Sirket-Kurallarina-Iliskin-Dokumanlar-Hakkinda-Kamuoyu-Duyurusu); notification module announced Oct 2024 — [KVKK notice](https://www.kvkk.gov.tr/Icerik/8043/Standart-Sozlesme-Bildirim-Modulu-Hakkinda-Kamuoyu-Duyurusu)
- A signed standard contract must be notified within 5 business days; fines cited at TL 90,308-1,806,377 for 2026 — [Cott Group, posted 18 Nov 2024, figures labelled 2026](https://www.cottgroup.com/en/blog/item/standart-sozlesme-bildirim-yukumlulugu-ve-yaptirimlari)

**Vendor flows**
- Chrome-style Web Speech sends audio to a web service — [MDN, Aug 2026](https://developer.mozilla.org/en-US/docs/Web/API/SpeechRecognition)
- Vendor commentary: each speech vendor in the pipeline is a processor requiring a data processing agreement, and international transfers need separate safeguards; this is non-authoritative — [Voice glossary, date not shown](https://voice-web-p4os.onrender.com/glossary/gdpr)

### Inferences
- **Lowest-risk default:** process and store audio only on the device, in memory or origin storage, and upload nothing. An offline recording feature likely creates far fewer controller duties, though this needs legal confirmation.
- **Pronunciation scoring** does not aim to identify a person, so by EDPB and Belgian reasoning it is plausibly not Article 9 processing. It is still personal data. KVKK's "ses tınısı" reference comes from a different context, so do not assume the same outcome in Turkey without counsel.
- **Do not build voiceprints** or speaker verification. Do not use recordings for model training by default, and require separate consent for it.
- **If server scoring is used:** explicit opt-in before first upload; transient processing with no retention, or a short, stated period; vendor retention and training settings documented; a data processing agreement; for Turkish users, a compliant Article 9 mechanism, likely standard contracts plus the 5-day notification, because consent alone is not a basis for ongoing transfers.
- **Web Speech is a hidden transfer:** the app starts audio flowing to a browser vendor it has no contract with. The privacy notice must disclose it, and legal counsel should say who bears controller duties. Avoiding it for KVKK-sensitive flows is the simple course.
- **UX:** visible recording indicator, delete-all control, no background capture and a note about bystanders' voices.

### Gaps
- I did not find an official KVKK text directly saying whether an ordinary voice recording, not used for identification, is biometric. The full 2026/921 text and full 2021 guide were not read, and the extract came from a reproduction.
- A reported KVKK cross-border transfer guide dated 2 Jan 2025 was seen only through a search summary. Whether audio going through an EU data centre changes the analysis was not researched.
- Rules for minors' voice data, Azure and Speechace retention terms, and whether their standard terms satisfy KVKK contracts were not researched.
- EDPB guidance concerns voice assistants, so its application to language apps is by analogy. These notes are not legal advice.
