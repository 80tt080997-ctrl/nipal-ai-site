---
title: "Schema.org & llms.txt 완전 가이드 — AI가 우리 브랜드를 읽게 만드는 6가지 마크업 패턴"
description: "Google이 _generative AI 검색에 특별한 schema.org 마크업은 없다_고 공식 명시한 시대에 Schema.org와 llms.txt를 왜·어떻게 쓸까. Schema.org 공식 + Google AI optimization guide + SISTRIX TOP 100 + 변호사·세무사 vertical Schema 패턴까지 묶어 — 오늘 적용 가능한 6가지 마크업 패턴을 정리합니다."
date: 2026-05-18 19:00:00 +0900
last_modified_at: 2026-05-18 19:00:00 +0900
author_id: jace
category: 실행 노트
tags: [GEO, AEO, Schema, llms.txt, JSON-LD, structured-data, LegalService, AccountingService]
image: /assets/img/blog/schema-llms-txt-guide/og.png
summary: |
  - Schema.org는 <em>AI가 페이지의 의미를 기계로 읽게 만드는 공통 어휘</em> — **4,500만 도메인 · 4,500억 객체**가 채택한 2011년 Google·Bing·Yahoo·Yandex 공동 표준.
  - 🔥 다만 Google은 <em>생성형 AI 검색에 특별한 schema.org 마크업은 없다</em>고 공식 명시 (2026-05-15) — llms.txt도 동일하게 <em>필요 없다</em>고 적시. Schema·llms.txt는 <em>AI 인용의 보조 인프라</em>이지 <em>전용 패스권</em>이 아니에요.
  - 그럼에도 SISTRIX TOP 100 분석: <em>AI에 인용되는 100대 사이트의 공통점은 JSON-LD 마크업 + 머신 가독성</em> — 인용 적격성의 1차 관문은 여전히 구조화 데이터입니다.
  - 모든 브랜드 공통 3종: `Organization` · `Article` · `FAQPage`. 변호사·세무사는 `LegalService` · `AccountingService` + `Person` + `hasCredential` 패턴 (⚠️ `Attorney` 타입 deprecated).
  - 30분이면 <em>Schema JSON-LD 5종 + llms.txt 1개</em> 적용 가능. 운영 핵심은 <em>분기별 갱신이 아니라 배포 파이프라인과 동기화한 자동 재생성</em>.
---

지난 [5편 — 4 AI 답변 엔진 비교](/blog/4ai-engines-citation-comparison/)에서는 <em>ChatGPT · Perplexity · Gemini · Claude가 인용하는 페이지가 어떻게 다른지</em>를 정리했어요. 한 가지 짚지 않고 넘어간 게 있어요 — 네 엔진 <em>모두에서 인용 적격성의 1차 관문</em>은 같다는 사실. 바로 <em>우리 페이지가 기계가 읽을 수 있게 구조화되어 있는가</em>입니다.

이게 6편의 출발점이에요. 마케터·콘텐츠 운영자가 <em>Schema.org</em>와 <em>llms.txt</em>라는 단어를 한 번쯤 들어봤어도, <em>그래서 우리 페이지의 어디에 무엇을 어떻게 붙여야 하는지</em> 막막한 게 보통입니다. 더 어려운 건 — **Google이 직접 <em>generative AI 검색에 특별한 schema.org 마크업은 없다</em>고 공식 명시한 상황**이라는 거예요 (2026-05-15 갱신). llms.txt에 대해서도 같은 페이지에서 <em>필요 없다</em>고 적습니다. 그러면 Schema·llms.txt는 <em>왜·어떻게</em> 쓸까요?

이 글은 4편의 <em>AI Overview 변화</em> + 5편의 <em>4 엔진 인용 차이</em> 위에 — Schema.org · llms.txt가 <em>기계가 우리 브랜드를 정확히 읽게 만드는 보조 인프라</em>임을 정직하게 풀고, <em>오늘 적용할 수 있는 6가지 마크업 패턴</em>을 복사·붙여넣기 가능한 JSON-LD 코드와 함께 정리합니다. 변호사·세무사·노무사 같은 전문직 사무소를 위한 vertical 패턴도 함께 짚어요 — 다만 `Attorney` 타입이 schema.org에서 deprecated된 사실 같은 <em>잘못 알려진 부분</em>도 같이 바로잡습니다.

출처는 Schema.org 공식 (v30.0), Google Search Central 두 문서(<em>Intro to structured data</em> + <em>AI optimization guide</em>), llmstxt.org 원본 제안, SISTRIX TOP 100 AI 인용 분석, ACL/EMNLP 2025 학술, 그리고 실제 라이브 변호사·회계 사이트 사례까지 묶었습니다. 검증된 1차 자료만 사용했어요.

<style>
/* === NIPAL AI infographics — Schema.org & llms.txt Guide (i19~i22) === */
.gm-infographic { margin: 40px 0; font-family: 'Pretendard', 'Apple SD Gothic Neo', system-ui, sans-serif; color: #111216; }
.gm-infographic *, .gm-infographic *::before, .gm-infographic *::after { box-sizing: border-box; }

/* --- i19 : Schema 없는 페이지 vs Schema 있는 페이지 (AI가 보는 모습) --- */
.gm-i19 { background: #FFFFFF; border: 1px solid #e4e4e5; border-radius: 16px; padding: 32px 28px; box-shadow: 0 4px 16px rgba(17,18,22,0.06); }
.gm-i19__title { font-size: 20px; font-weight: 700; color: #111216; text-align: center; margin: 0 0 4px; }
.gm-i19__subtitle { font-size: 13px; color: #6d7079; text-align: center; margin: 0 0 24px; }
.gm-i19__grid { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; }
.gm-i19__col { border-radius: 12px; padding: 18px 16px; }
.gm-i19__col--before { background: linear-gradient(180deg, #f7f6f3 0%, #ECECEF 100%); border: 1.5px solid #C8C8CE; }
.gm-i19__col--after { background: linear-gradient(180deg, #F0FBF6 0%, #E0F5EC 100%); border: 1.5px solid #10A37F; }
.gm-i19__label { font: 800 11px 'JetBrains Mono','Consolas',monospace; letter-spacing: 0.6px; padding: 4px 10px; border-radius: 999px; display: inline-block; margin-bottom: 12px; }
.gm-i19__col--before .gm-i19__label { background: #6d7079; color: #FFFFFF; }
.gm-i19__col--after .gm-i19__label { background: #10A37F; color: #FFFFFF; }
.gm-i19__page { background: #FFFFFF; border: 1px dashed #C8C8CE; border-radius: 8px; padding: 14px 12px; min-height: 180px; font-size: 12px; line-height: 1.55; color: #202228; }
.gm-i19__col--before .gm-i19__page { font-family: 'Pretendard', sans-serif; }
.gm-i19__col--after .gm-i19__page { font-family: 'JetBrains Mono','Consolas',monospace; font-size: 11.5px; background: #FAFCFB; border-color: #B4E5D0; }
.gm-i19__page-prop { color: #20808D; font-weight: 700; }
.gm-i19__page-val { color: #111216; }
.gm-i19__ai-says { margin-top: 14px; padding: 10px 12px; background: rgba(255,255,255,0.85); border-radius: 8px; font-size: 11.5px; line-height: 1.5; color: #202228; }
.gm-i19__ai-says strong { color: #111216; font-weight: 700; }
.gm-i19__col--after .gm-i19__ai-says { background: rgba(16,163,127,0.08); }
.gm-i19__source { margin: 20px 0 0; padding-top: 14px; border-top: 1px solid #e4e4e5; font-size: 11px; color: #6d7079; font-style: italic; text-align: center; }
.gm-i19__source a { color: inherit; text-decoration: underline; }
@media (max-width: 720px) { .gm-i19__grid { grid-template-columns: 1fr; } }

/* --- i20 : robots.txt · sitemap.xml · llms.txt 역할 비교 --- */
.gm-i20 { background: #FFFFFF; border: 1px solid #e4e4e5; border-radius: 16px; padding: 32px 28px; box-shadow: 0 4px 16px rgba(17,18,22,0.06); }
.gm-i20__title { font-size: 20px; font-weight: 700; color: #111216; text-align: center; margin: 0 0 4px; }
.gm-i20__subtitle { font-size: 13px; color: #6d7079; text-align: center; margin: 0 0 24px; }
.gm-i20__grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 14px; }
.gm-i20__card { border-radius: 12px; padding: 18px 16px; display: flex; flex-direction: column; gap: 10px; }
.gm-i20__card--robots { background: linear-gradient(180deg, #FFF5F0 0%, #FDE6D6 100%); border: 1.5px solid #DA7756; }
.gm-i20__card--sitemap { background: linear-gradient(180deg, #EEF4FE 0%, #DDE9FD 100%); border: 1.5px solid #4285F4; }
.gm-i20__card--llms { background: linear-gradient(180deg, #f0ecfe 0%, #ebedff 100%); border: 1.5px solid #7052f3; }
.gm-i20__icon { font-size: 28px; line-height: 1; }
.gm-i20__file { font: 800 13px 'JetBrains Mono','Consolas',monospace; letter-spacing: 0.4px; }
.gm-i20__card--robots .gm-i20__file { color: #DA7756; }
.gm-i20__card--sitemap .gm-i20__file { color: #4285F4; }
.gm-i20__card--llms .gm-i20__file { color: #7052f3; }
.gm-i20__role { font-size: 14px; font-weight: 700; color: #111216; line-height: 1.4; }
.gm-i20__desc { font-size: 12px; line-height: 1.55; color: #202228; padding: 10px 12px; background: rgba(255,255,255,0.85); border-radius: 8px; }
.gm-i20__desc strong { color: #111216; font-weight: 700; }
.gm-i20__source { margin: 18px 0 0; padding-top: 14px; border-top: 1px solid #e4e4e5; font-size: 11px; color: #6d7079; font-style: italic; text-align: center; }
@media (max-width: 720px) { .gm-i20__grid { grid-template-columns: 1fr; } }

/* --- i21 : 산업별 Schema 타입 매트릭스 --- */
.gm-i21 { background: #FFFFFF; border: 1px solid #e4e4e5; border-radius: 16px; padding: 32px 28px; box-shadow: 0 4px 16px rgba(17,18,22,0.06); }
.gm-i21__title { font-size: 20px; font-weight: 700; color: #111216; text-align: center; margin: 0 0 4px; }
.gm-i21__subtitle { font-size: 13px; color: #6d7079; text-align: center; margin: 0 0 24px; }
.gm-i21__common { background: linear-gradient(135deg, #ebedff 0%, #f0ecfe 100%); border: 1px solid #b3a0f9; border-radius: 12px; padding: 16px 18px; margin-bottom: 16px; }
.gm-i21__common-label { font: 800 11px 'JetBrains Mono','Consolas',monospace; color: #5b40d9; letter-spacing: 0.5px; margin-bottom: 10px; display: block; }
.gm-i21__chips { display: flex; flex-wrap: wrap; gap: 8px; }
.gm-i21__chip { display: inline-flex; align-items: center; padding: 6px 12px; background: #FFFFFF; border: 1px solid #b3a0f9; border-radius: 999px; font: 700 12.5px 'JetBrains Mono','Consolas',monospace; color: #5b40d9; }
.gm-i21__rows { display: flex; flex-direction: column; gap: 10px; }
.gm-i21__row { display: grid; grid-template-columns: 140px 1fr; gap: 14px; align-items: center; padding: 14px 16px; border-radius: 10px; border: 1.5px solid #e4e4e5; background: #f7f6f3; }
.gm-i21__row--legal { border-color: #20808D; background: linear-gradient(90deg, #EFF8FA 0%, #FFFFFF 60%); }
.gm-i21__row--accounting { border-color: #4285F4; background: linear-gradient(90deg, #EEF4FE 0%, #FFFFFF 60%); }
.gm-i21__row--ecommerce { border-color: #DA7756; background: linear-gradient(90deg, #FFF5F0 0%, #FFFFFF 60%); }
.gm-i21__row--local { border-color: #10A37F; background: linear-gradient(90deg, #F0FBF6 0%, #FFFFFF 60%); }
.gm-i21__industry { font-size: 13px; font-weight: 700; color: #111216; }
.gm-i21__row--legal .gm-i21__industry { color: #1A6470; }
.gm-i21__row--accounting .gm-i21__industry { color: #2E5DB5; }
.gm-i21__row--ecommerce .gm-i21__industry { color: #B85B3D; }
.gm-i21__row--local .gm-i21__industry { color: #0A8568; }
.gm-i21__types { display: flex; flex-wrap: wrap; gap: 6px; }
.gm-i21__type { padding: 4px 10px; background: #FFFFFF; border: 1px solid currentColor; border-radius: 6px; font: 600 11.5px 'JetBrains Mono','Consolas',monospace; }
.gm-i21__row--legal .gm-i21__type { color: #20808D; }
.gm-i21__row--accounting .gm-i21__type { color: #4285F4; }
.gm-i21__row--ecommerce .gm-i21__type { color: #DA7756; }
.gm-i21__row--local .gm-i21__type { color: #10A37F; }
.gm-i21__type--warn { background: #FFF1F0; border-color: #E0524C; color: #B73C36 !important; }
.gm-i21__source { margin: 18px 0 0; padding-top: 14px; border-top: 1px solid #e4e4e5; font-size: 11px; color: #6d7079; font-style: italic; text-align: center; }
@media (max-width: 640px) { .gm-i21__row { grid-template-columns: 1fr; gap: 8px; } }

/* --- i22 : llms.txt 좋은 예 vs 나쁜 예 --- */
.gm-i22 { background: #FFFFFF; border: 1px solid #e4e4e5; border-radius: 16px; padding: 32px 28px; box-shadow: 0 4px 16px rgba(17,18,22,0.06); }
.gm-i22__title { font-size: 20px; font-weight: 700; color: #111216; text-align: center; margin: 0 0 4px; }
.gm-i22__subtitle { font-size: 13px; color: #6d7079; text-align: center; margin: 0 0 24px; }
.gm-i22__grid { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; }
.gm-i22__col { border-radius: 12px; padding: 18px 16px; }
.gm-i22__col--bad { background: linear-gradient(180deg, #FFF1F0 0%, #FCDEDC 100%); border: 1.5px solid #E0524C; }
.gm-i22__col--good { background: linear-gradient(180deg, #F0FBF6 0%, #E0F5EC 100%); border: 1.5px solid #10A37F; }
.gm-i22__label { font: 800 11px 'JetBrains Mono','Consolas',monospace; letter-spacing: 0.6px; padding: 4px 10px; border-radius: 999px; display: inline-block; margin-bottom: 12px; color: #FFFFFF; }
.gm-i22__col--bad .gm-i22__label { background: #E0524C; }
.gm-i22__col--good .gm-i22__label { background: #10A37F; }
.gm-i22__code { background: #FFFFFF; border: 1px dashed #C8C8CE; border-radius: 8px; padding: 14px 12px; font: 11.5px/1.6 'JetBrains Mono','Consolas',monospace; color: #202228; min-height: 220px; white-space: pre-wrap; }
.gm-i22__col--bad .gm-i22__code { border-color: #F2A39E; }
.gm-i22__col--good .gm-i22__code { border-color: #B4E5D0; }
.gm-i22__hl-bad { background: #FFE0DE; color: #B73C36; padding: 1px 4px; border-radius: 3px; }
.gm-i22__hl-good { background: #D4F0E2; color: #0A8568; padding: 1px 4px; border-radius: 3px; }
.gm-i22__notes { margin-top: 14px; padding: 10px 12px; background: rgba(255,255,255,0.85); border-radius: 8px; font-size: 11.5px; line-height: 1.55; color: #202228; }
.gm-i22__notes strong { color: #111216; font-weight: 700; }
.gm-i22__source { margin: 20px 0 0; padding-top: 14px; border-top: 1px solid #e4e4e5; font-size: 11px; color: #6d7079; font-style: italic; text-align: center; }
.gm-i22__source a { color: inherit; text-decoration: underline; }
@media (max-width: 720px) { .gm-i22__grid { grid-template-columns: 1fr; } }
</style>

## Schema.org가 뭐고, AI 답변 엔진에 왜 중요한가요?

**Schema.org는 <em>웹 페이지의 의미 구조를 기계가 읽을 수 있도록 표준화한 공통 어휘</em>예요.** 2011년 Google·Bing·Yahoo·Yandex가 공동으로 만든 표준이고, 2024년 기준 **4,500만 개가 넘는 도메인이 4,500억 개 이상의 객체로** 페이지를 마크업하고 있어요. AI 답변 엔진이 등장하기 한참 전에 만들어진 어휘인데, 지금 다시 주목받는 이유는 단순해요 — <em>AI가 페이지를 읽을 때 <strong>회사명·주소·서비스·FAQ·저자</strong>가 무엇인지 단번에 알게 해주는 구조</em>가 바로 Schema거든요.

[Schema.org 공식 홈페이지](https://schema.org/)는 자신을 이렇게 정의해요. *"Schema.org is a collaborative, community activity with a mission to create, maintain, and promote schemas for structured data on the Internet."* — <em>인터넷상의 구조화 데이터를 위한 스키마를 만들고 유지·보급하는 공동 활동</em>이에요. 같은 페이지 하단에 채택 규모도 그대로 적혀 있어요. *"As of 2024, over 45 million web domains markup their web pages with over 450 billion Schema.org objects."*

<figure class="author-figure">
  <a href="https://schema.org/" target="_blank" rel="noopener"><img src="/assets/img/blog/schema-llms-txt-guide/schema_org_home.png" alt="Schema.org 공식 홈페이지"></a>
  <figcaption>Schema.org 공식 홈페이지 — <em>4,500만 도메인 · 4,500억 객체</em> 채택 수치와 함께 현재 버전 v30.0(2026-03-19)이 페이지 하단에 표기됩니다.</figcaption>
</figure>

Schema.org는 세 가지 syntax(문법)를 지원해요. **JSON-LD** · **Microdata** · **RDFa** 세 가지인데, 실무에서는 거의 JSON-LD 한 가지로 수렴했어요. [Google Search Central — <em>Introduction to structured data markup</em>](https://developers.google.com/search/docs/appearance/structured-data/intro-structured-data) 문서가 그 이유를 직접 짚어요. *"JSON-LD is easiest to implement, maintain, and recover from errors."* — <em>구현·유지·오류 복구가 가장 쉽다</em>는 이유로 Google이 공식 권장하는 형식이에요.

<div class="callout callout--tip">
  <div class="callout-title">💡 Schema.org 3가지 syntax — 실무는 JSON-LD 하나</div>
  <div class="callout-body">
    <p><strong>JSON-LD (권장):</strong> <code>&lt;head&gt;</code> 또는 본문에 <code>&lt;script type="application/ld+json"&gt;</code> 블록으로 삽입. 콘텐츠와 마크업이 <em>분리</em>되어 유지·보수가 가장 쉬워요. Google·Bing 모두 1순위.</p>
    <p><strong>Microdata:</strong> HTML 태그 안에 <code>itemscope</code>·<code>itemtype</code> 속성을 직접 추가. 마크업이 콘텐츠와 섞여서 관리가 번거로워요.</p>
    <p><strong>RDFa:</strong> HTML 태그 안에 <code>vocab</code>·<code>typeof</code> 속성. 학술·문서형 사이트에 가끔 보이지만 SEO 실무에서는 거의 사용 X.</p>
  </div>
</div>

여기서 가장 정직하게 짚을 부분이 있어요 — **Google은 <em>생성형 AI 검색에 특별한 schema.org 마크업이 필요하지 않다</em>고 공식 명시했어요.** [Google Search Central — <em>Optimizing your website for generative AI features on Google Search</em>](https://developers.google.com/search/docs/fundamentals/ai-optimization-guide) 문서의 <em>Mythbusting → Overfocusing on structured data</em> 섹션이 그 출처예요 (2026-05-15 갱신). *"Structured data isn't required for generative AI search, and there's no special schema.org markup you need to add."* — <em>구조화 데이터는 생성형 AI 검색에 필수가 아니며, 추가해야 하는 특별한 schema.org 마크업도 없다</em>는 직접 표현입니다.

<figure class="author-figure">
  <a href="https://developers.google.com/search/docs/fundamentals/ai-optimization-guide" target="_blank" rel="noopener"><img src="/assets/img/blog/schema-llms-txt-guide/google_ai_optimization_guide.png" alt="Google AI optimization guide — Overfocusing on structured data 섹션"></a>
  <figcaption>Google Search Central — <em>Optimizing your website for generative AI features on Google Search</em>. <em>Mythbusting → Overfocusing on structured data</em> 섹션에서 <em>no special schema.org markup you need to add</em>가 그대로 표시됩니다 (2026-05-15 갱신).</figcaption>
</figure>

즉, <em>"Schema를 붙이면 AI Overview·AI Mode에서 자동으로 더 잘 인용된다"</em> 같은 단정은 공식 문서 기준으로 과장이에요. 그러면 왜 쓸까요?

답은 [SISTRIX의 <em>The Path to AI Citations — TOP 100 분석</em>](https://www.sistrix.com/blog/the-path-to-ai-citations-what-the-top-100-most-cited-websites-are-doing-right/) (2025-12-04)에 있어요. Google AI Mode에서 가장 많이 인용된 상위 100개 사이트를 분석했더니, 두 가지 공통점이 도드라졌어요. <em>Pillar 2 — authority + recency(권위·최신성), 그리고 그 신호를 JSON-LD로 표현</em>한 것. <em>Pillar 3 — strict machine readability(엄격한 기계 가독성)</em>. 즉 <em>AI에 인용되는 페이지의 절대다수가 JSON-LD를 쓰고 있고, 페이지 자체가 <strong>기계가 읽기 쉬운 구조</strong>로 짜여 있다</em>는 관찰이에요. SISTRIX의 표현이 가장 직접적입니다. *"Web pages that are cited by AIs are not linear texts, they are databases of responses."* — <em>AI에 인용되는 웹페이지는 선형 텍스트가 아니라 응답 데이터베이스다.</em>

검색 성과 쪽에서는 더 정량적인 사례도 있어요. [Google Search Central의 Rakuten Recipe 케이스 스터디](https://developers.google.com/search/case-studies/rakuten-case-study) (2018-05-08, 라이브)는 Recipe Schema를 적용한 결과 <em>검색 유입이 2.7배로 급증했고 평균 세션 지속시간이 1.5배 길어졌다</em>고 보고합니다. *"Traffic to all Rakuten Recipe pages from search engines soared 2.7 times, and the average session duration was now 1.5 times longer than before."* — 다만 이건 <em>검색 성과</em>지 <em>AI 인용 효과</em>가 아니에요. 두 가지는 분리해서 봐야 정직합니다.

Schema.org가 <em>마케터에게 어떻게 보이는지</em> 한 번 짧게 보시면 이해가 더 빨라요. Google Search Central의 Martin Splitt이 <em>Structured Data for beginners</em>에서 _구조화 데이터가 왜·어떻게 작동하는지_를 짧게 풀어줍니다.

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/tYfCjbvaOYg" title="Structured Data for beginners — Martin Splitt (Google Search Central)" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

<div class="gm-infographic">
  <div class="gm-i19">
    <h3 class="gm-i19__title">Schema 없는 페이지 vs Schema 있는 페이지</h3>
    <p class="gm-i19__subtitle">같은 변호사 사무소 페이지를 AI가 어떻게 다르게 읽는가</p>
    <div class="gm-i19__grid">
      <div class="gm-i19__col gm-i19__col--before">
        <span class="gm-i19__label">BEFORE — unstructured</span>
        <div class="gm-i19__page">홍길동 법무법인은 서울 강남구에 위치한 이혼·상속·기업 전문 법무법인입니다. 대표 변호사 홍길동은 서울대 법학과 출신으로 25년 경력의 베테랑이며, 평일 09시-18시 영업합니다. 전화 02-XXXX-XXXX로 문의주세요.</div>
        <div class="gm-i19__ai-says"><strong>AI 시야:</strong> "이게 회사명·주소·서비스·시간·연락처인지 본문에서 <em>유추</em>해야 함 → 추출 정확도 저하."</div>
      </div>
      <div class="gm-i19__col gm-i19__col--after">
        <span class="gm-i19__label">AFTER — JSON-LD</span>
        <div class="gm-i19__page"><span class="gm-i19__page-prop">@type:</span> <span class="gm-i19__page-val">LegalService</span>
<span class="gm-i19__page-prop">name:</span> <span class="gm-i19__page-val">홍길동 법무법인</span>
<span class="gm-i19__page-prop">address:</span> <span class="gm-i19__page-val">서울 강남구</span>
<span class="gm-i19__page-prop">serviceType:</span> <span class="gm-i19__page-val">[이혼, 상속, 기업]</span>
<span class="gm-i19__page-prop">openingHours:</span> <span class="gm-i19__page-val">Mo-Fr 09-18</span>
<span class="gm-i19__page-prop">telephone:</span> <span class="gm-i19__page-val">02-XXXX-XXXX</span></div>
        <div class="gm-i19__ai-says"><strong>AI 시야:</strong> "회사명·주소·서비스·시간·연락처를 <em>구조적으로</em> 즉시 인식 → 인용 적격성 ↑."</div>
      </div>
    </div>
    <p class="gm-i19__source">출처: <a href="https://www.sistrix.com/blog/the-path-to-ai-citations-what-the-top-100-most-cited-websites-are-doing-right/" target="_blank" rel="noopener">SISTRIX TOP 100 분석 (2025-12-04)</a> · <a href="https://schema.org/LegalService" target="_blank" rel="noopener">Schema.org LegalService</a></p>
  </div>
</div>

정리하면 이래요. Schema.org는 <em>AI 인용의 전용 패스권</em>이 아니에요 — Google이 직접 그렇게 말합니다. 하지만 <em>인용 적격성의 1차 관문</em>이긴 해요. <em>기계가 우리 페이지를 정확히 읽을 수 있어야</em> 비로소 AI 답변 엔진의 평가권에 들어가요. SISTRIX TOP 100이 보여준 게 바로 이 지점이에요 — <em>AI에 인용되는 페이지의 공통 인프라</em>가 Schema라는 관찰. 이게 우리가 6편에서 Schema를 다루는 이유예요.

<div class="callout callout--summary">
  <div class="callout-body">
    <p>📌 Schema.org는 4,500만 도메인이 채택한 <em>기계가 읽을 수 있는 공통 어휘</em>. Google이 <em>AI 검색에 필요 없다</em>고 말해도, AI에 인용되는 100대 사이트의 공통점이 JSON-LD라는 SISTRIX 관찰이 그 <em>보조 인프라</em> 가치를 증명해요. <em>전용 패스권</em>은 아니지만 <em>인용 적격성의 1차 관문</em>입니다.</p>
  </div>
</div>

## llms.txt가 뭐고, AI 크롤러가 어떻게 읽나요?

**llms.txt는 <em>AI 크롤러에게 우리 브랜드를 짧게 요약해 안내하는, 사이트 루트에 두는 마크다운 파일</em>이에요.** 2024년 9월 3일 Jeremy Howard(answer.ai 창업자)가 [llmstxt.org](https://llmstxt.org/)에서 처음 제안했고, <em>표준</em>이 아니라 <em>제안(proposal)</em>이라는 점이 원문 첫 문장에 명시돼 있어요. *"A proposal to standardise on using an /llms.txt file to provide information to help LLMs use a website at inference time."* — <em>추론 시점에 LLM이 웹사이트를 활용하도록 돕는 정보를 제공하기 위해 /llms.txt 파일 사용을 표준화하자는 제안</em>입니다.

<figure class="author-figure">
  <a href="https://llmstxt.org/" target="_blank" rel="noopener"><img src="/assets/img/blog/schema-llms-txt-guide/llmstxt_org_home.png" alt="llmstxt.org 공식 페이지"></a>
  <figcaption>llmstxt.org — Jeremy Howard(answer.ai)의 <em>llms.txt 원본 제안 페이지</em>. 첫 문장부터 <em>표준</em>이 아닌 <em>제안(proposal)</em>이라는 점을 명시합니다 (2024-09-03).</figcaption>
</figure>

robots.txt·sitemap.xml과는 역할이 분명히 달라요. robots.txt는 <em>크롤러의 접근을 허용·차단</em>하는 게이트이고, sitemap.xml은 <em>크롤러가 발견해야 할 URL 목록</em>입니다. llms.txt는 그 위에 <em>우리 브랜드를 짧게 요약하면 이렇다 / 핵심 페이지는 이것들이다 / 자체 용어는 이렇게 정의한다</em>는 <em>마케팅 컨텍스트</em>를 얹어주는 레이어예요.

<div class="gm-infographic">
  <div class="gm-i20">
    <h3 class="gm-i20__title">robots.txt · sitemap.xml · llms.txt 역할 비교</h3>
    <p class="gm-i20__subtitle">세 파일은 같은 <em>크롤러</em>를 대상으로 하지만 역할이 분명히 다르다</p>
    <div class="gm-i20__grid">
      <div class="gm-i20__card gm-i20__card--robots">
        <span class="gm-i20__icon">🚪</span>
        <span class="gm-i20__file">robots.txt</span>
        <strong class="gm-i20__role">접근 게이트</strong>
        <p class="gm-i20__desc"><strong>역할:</strong> 크롤러 접근 <em>허용·차단</em>.<br><strong>제어 단위:</strong> user-agent + URL 패턴.<br><strong>OpenAI·Anthropic·Perplexity 공식:</strong> 모두 robots.txt를 1차 제어면으로 명시.</p>
      </div>
      <div class="gm-i20__card gm-i20__card--sitemap">
        <span class="gm-i20__icon">🗺️</span>
        <span class="gm-i20__file">sitemap.xml</span>
        <strong class="gm-i20__role">URL 발견 지도</strong>
        <p class="gm-i20__desc"><strong>역할:</strong> 크롤러가 발견해야 할 <em>URL 목록 안내</em>.<br><strong>제어 단위:</strong> URL + lastmod + priority.<br><strong>실효:</strong> Google·Bing 모두 정식 표준으로 수용.</p>
      </div>
      <div class="gm-i20__card gm-i20__card--llms">
        <span class="gm-i20__icon">📇</span>
        <span class="gm-i20__file">llms.txt</span>
        <strong class="gm-i20__role">브랜드 요약 카드</strong>
        <p class="gm-i20__desc"><strong>역할:</strong> AI 크롤러에게 <em>브랜드 요약·핵심 페이지·자체 용어</em> 안내.<br><strong>제어 단위:</strong> 마크다운 문서 한 파일.<br><strong>실효:</strong> 도입 권고 수준 — 공식 표준 X, Google "필요 없음" 명시.</p>
      </div>
    </div>
    <p class="gm-i20__source">출처: <a href="https://llmstxt.org/" target="_blank" rel="noopener">llmstxt.org 원본 제안</a> (2024-09-03) · <a href="https://developers.google.com/search/docs/fundamentals/ai-optimization-guide" target="_blank" rel="noopener">Google AI optimization guide</a> (2026-05-15)</p>
  </div>
</div>

채택은 빠르게 늘고 있어요. Anthropic(`docs.anthropic.com/llms.txt`), Perplexity(자체 인덱스), Vercel(`llms.txt` + `llms-full.txt` 패턴) 같은 AI·개발자 도구 회사들이 먼저 도입했어요. Vercel은 [Add llms.txt 공식 가이드](https://vercel.com/academy/agent-friendly-apis/add-llms-txt)에서 *"Vercel uses this pattern for their own docs."* 라고 직접 적습니다.

여기서 가장 정직하게 짚을 부분이 있어요. **OpenAI · Anthropic · Perplexity 그 어느 공식 문서에도 <em>제3자 사이트의 llms.txt를 답변 생성에 활용한다</em>는 명시는 없습니다.** 세 회사 모두 <em>robots.txt + user-agent 제어</em>를 공식 메커니즘으로 설명해요.

| 회사 | 공식 봇 구분 | 1차 제어면 | 제3자 llms.txt 활용 명시 |
|---|---|---|---|
| **OpenAI** ([공식](https://developers.openai.com/api/docs/bots)) | `OAI-SearchBot` · `GPTBot` · `ChatGPT-User` | robots.txt + user-agent | ❌ 없음 |
| **Anthropic** ([공식](https://privacy.claude.com/en/articles/8896518)) | `ClaudeBot` · `Claude-User` · `Claude-SearchBot` | robots.txt + user-agent | ❌ 없음 |
| **Perplexity** ([공식](https://docs.perplexity.ai/docs/resources/perplexity-crawlers)) | `PerplexityBot` · `Perplexity-User` | robots.txt + user-agent + WAF | ❌ 없음 (자체 docs에는 인덱스 운영) |

더 직접적인 한계 표시도 있어요. 앞에서 인용한 [Google "AI optimization guide"](https://developers.google.com/search/docs/fundamentals/ai-optimization-guide)는 Schema뿐 아니라 **llms.txt에 대해서도 <em>필요 없다</em>고 공식 명시**해요. *"LLMS.txt files and other 'special' markup: You don't need to create new machine readable files, AI text files, markup, or Markdown to appear in generative AI search."* — <em>생성형 AI 검색에 표시되기 위해 새로운 기계 읽기 파일이나 AI 텍스트 파일을 만들 필요는 없다</em>는 게 Google의 입장입니다.

그러면 왜 도입할까요? 세 가지 이유가 있어요.

<div class="callout callout--note">
  <div class="callout-title">🧭 llms.txt를 도입해야 하는 이유 3가지</div>
  <div class="callout-body">
    <p><strong>1. 도입 비용이 매우 낮습니다.</strong> 마크다운 한 파일. 한 시간이면 작성 가능해요.</p>
    <p><strong>2. 채택 트렌드가 빠릅니다.</strong> Anthropic·Perplexity·Vercel 같은 AI·인프라 회사가 먼저 표준화에 참여 중이고, 비공식 로그 분석에서는 OpenAI 봇이 실제로 <code>/llms.txt</code> 경로를 크롤링한다는 관찰이 보고됩니다.</p>
    <p><strong>3. Perplexity는 <em>자기 자신의 llms.txt 인덱스</em>를 운영합니다.</strong> 문서 사이트 안내에 공식 활용 중이에요. <em>제3자 사이트의 llms.txt를 어떻게 활용하느냐</em>는 명시가 없을 뿐이에요.</p>
  </div>
</div>

즉 llms.txt는 <em>공식 표준이자 검증된 효과 도구</em>가 아니라 <em>도입 권고 수준의 보조 인덱스</em>로 이해하는 게 정직해요. NIPAL AI도 같은 입장에서 자체 사이트에 [라이브 운영](https://nipal-ai.com/llms.txt) 중이고, 작성 방법은 H2-5에서 풀게요.

<div class="callout callout--summary">
  <div class="callout-body">
    <p>📌 llms.txt는 <em>도입 권고 수준의 보조 인덱스</em>예요. Google·OpenAI·Anthropic·Perplexity 공식 문서에 <em>제3자 llms.txt 활용</em> 명시는 없지만, 도입 비용 1시간·채택 트렌드·Perplexity 자체 인덱스 운영을 고려하면 <em>지금 적용</em>이 합리적 선택입니다.</p>
  </div>
</div>

## 우리 브랜드에 꼭 적용해야 할 Schema 타입은?

**모든 브랜드는 <em>3가지 공통 Schema</em>로 시작하면 됩니다 — `Organization` · `Article`(블로그용) · `FAQPage`.** 여기에 산업별로 1~2개를 더하면 AI가 우리 브랜드의 <em>정체·콘텐츠·답변</em>을 정확히 인식할 수 있어요. 산업별 매핑은 아래 표와 같아요.

| 산업 | 필수 추가 Schema | 비고 |
|---|---|---|
| 변호사·로펌 | `LegalService` (사무소) + `Person` + `hasCredential` (개별 변호사) | ⚠️ `Attorney` 타입은 schema.org에서 **deprecated** — <em>LegalService가 더 포괄적이고 덜 모호함</em>이 공식 권고 |
| 세무·회계·노무 | `AccountingService` (사무소) + `Person` + `hasCredential` (개별 전문가) | 회계는 `FinancialService` 계열, 세무는 `AccountingService` 통합 |
| 커머스·이커머스 | `Product` + `Offer` + `BreadcrumbList` | Rich Results 효과가 가장 큰 영역 |
| 로컬 사업 (식당·매장·병원) | `LocalBusiness` + `Place` + `openingHoursSpecification` | NAP(이름·주소·전화) 일관성 필수 |

⚠️ `Attorney` 타입의 deprecated 처리는 본문에서 한 번 더 짚을 가치가 있어요. 외부 SEO 자료 중엔 여전히 <em>개별 변호사 페이지를 `Attorney`로 마크업</em>하라고 안내하는 글이 많은데, [schema.org 공식 페이지](https://schema.org/Attorney)는 정확히 이렇게 적습니다. *"This type is deprecated - LegalService is more inclusive and less ambiguous."* 따라서 <em>법인·사무소는 `LegalService`, 개별 변호사 프로필은 `Person` + `hasCredential` · `alumniOf` · `award` · `knowsAbout` 조합</em>이 현재 공식 정합 패턴이에요.

<figure class="author-figure">
  <a href="https://schema.org/Attorney" target="_blank" rel="noopener"><img src="/assets/img/blog/schema-llms-txt-guide/schema_org_attorney_deprecated.png" alt="Schema.org Attorney deprecated 공식 페이지"></a>
  <figcaption>Schema.org <code>/Attorney</code> 공식 페이지 — <em>"This type is deprecated — LegalService is more inclusive and less ambiguous"</em>가 페이지 상단 부제에 그대로 표시됩니다. 변호사 vertical 자료에서 가장 자주 잘못 알려지는 부분이 이 deprecated 처리예요.</figcaption>
</figure>

실제 라이브 사례도 짚어볼게요. [Dynamis LLP의 Government & Internal Investigations 페이지](https://www.dynamisllp.com/government-and-investigations)는 상단 JSON-LD에 `@type: LegalService`와 `serviceType`·`areaServed`·`provider`를 분리해서 기술해요 — <em>"이 페이지는 무슨 서비스 / 어디 지역 / 누가 제공하는가"</em>를 한 번에 구조화한 패턴이에요. 회계 쪽도 마찬가지예요. [United Accounting의 NJ Paramus 페이지](https://unitedaccountingservices.com/cpa-tax-accountant-paramus-nj)는 `@type: AccountingService`에 `telephone`·`address`·`openingHoursSpecification`·`aggregateRating`까지 한 번에 넣어요. <em>서비스 타입 + 신뢰 신호 + 로컬 실체성</em>이 한 페이지에 결합된 vertical 표준 패턴입니다.

<figure class="author-figure">
  <a href="https://www.dynamisllp.com/government-and-investigations" target="_blank" rel="noopener"><img src="/assets/img/blog/schema-llms-txt-guide/dynamis_llp_legalservice.png" alt="Dynamis LLP — Government Investigations 페이지 (LegalService 라이브 적용)"></a>
  <figcaption>Dynamis LLP의 <em>Government &amp; Internal Investigations</em> 페이지 — 상단 JSON-LD에 <code>@type: LegalService</code>와 <code>serviceType</code>·<code>areaServed</code>·<code>provider</code>를 분리해 기술한 실전 vertical 사례입니다.</figcaption>
</figure>

<div class="gm-infographic">
  <div class="gm-i21">
    <h3 class="gm-i21__title">산업별 Schema 타입 매트릭스</h3>
    <p class="gm-i21__subtitle">공통 3종 + 산업별 1~2종 — 우리 브랜드는 어디에 속하나</p>
    <div class="gm-i21__common">
      <span class="gm-i21__common-label">모든 브랜드 공통 (필수)</span>
      <div class="gm-i21__chips">
        <span class="gm-i21__chip">Organization</span>
        <span class="gm-i21__chip">Article / BlogPosting</span>
        <span class="gm-i21__chip">FAQPage</span>
      </div>
    </div>
    <div class="gm-i21__rows">
      <div class="gm-i21__row gm-i21__row--legal">
        <span class="gm-i21__industry">⚖️ 변호사·로펌</span>
        <div class="gm-i21__types">
          <span class="gm-i21__type">LegalService</span>
          <span class="gm-i21__type">Person</span>
          <span class="gm-i21__type">hasCredential</span>
          <span class="gm-i21__type gm-i21__type--warn">⚠️ Attorney deprecated</span>
        </div>
      </div>
      <div class="gm-i21__row gm-i21__row--accounting">
        <span class="gm-i21__industry">📊 세무·회계·노무</span>
        <div class="gm-i21__types">
          <span class="gm-i21__type">AccountingService</span>
          <span class="gm-i21__type">Person</span>
          <span class="gm-i21__type">hasCredential</span>
        </div>
      </div>
      <div class="gm-i21__row gm-i21__row--ecommerce">
        <span class="gm-i21__industry">🛒 커머스·이커머스</span>
        <div class="gm-i21__types">
          <span class="gm-i21__type">Product</span>
          <span class="gm-i21__type">Offer</span>
          <span class="gm-i21__type">BreadcrumbList</span>
        </div>
      </div>
      <div class="gm-i21__row gm-i21__row--local">
        <span class="gm-i21__industry">📍 로컬 사업·매장</span>
        <div class="gm-i21__types">
          <span class="gm-i21__type">LocalBusiness</span>
          <span class="gm-i21__type">Place</span>
          <span class="gm-i21__type">openingHoursSpecification</span>
        </div>
      </div>
    </div>
    <p class="gm-i21__source">출처: <a href="https://schema.org/" target="_blank" rel="noopener">Schema.org v30.0</a> · <a href="https://www.dynamisllp.com/government-and-investigations" target="_blank" rel="noopener">Dynamis LLP</a> (LegalService 실전) · <a href="https://unitedaccountingservices.com/cpa-tax-accountant-paramus-nj" target="_blank" rel="noopener">United Accounting</a> (AccountingService 실전)</p>
  </div>
</div>

<div class="callout callout--summary">
  <div class="callout-body">
    <p>📌 공통 3종(<code>Organization</code>·<code>Article</code>·<code>FAQPage</code>) + 산업별 1~2종으로 시작. 변호사는 <code>LegalService</code> + <code>Person</code> + <code>hasCredential</code> 조합이 공식 정합 — <code>Attorney</code> 타입은 <em>deprecated</em>라는 점이 자료별로 가장 자주 잘못 알려진 부분입니다.</p>
  </div>
</div>

## 마크업을 어디에 어떻게 적용하나요? — 실제 코드 패턴 5종

**아래 5가지 JSON-LD 코드를 <em>그대로 복사</em>해서 <em>플레이스홀더만 우리 브랜드 정보로 교체</em>하면 오늘 적용 가능합니다.** 모두 `<head>` 또는 본문 끝의 `<script type="application/ld+json">` 블록에 넣고, 적용 후에는 [Rich Results Test](https://search.google.com/test/rich-results)(구조화 데이터가 올바른지 1분 만에 확인해주는 Google 공식 검증 도구)에서 검증할 수 있어요.

<div class="callout callout--tip">
  <div class="callout-title">🆕 JSON-LD를 처음 다루세요? — 4단계면 끝나요</div>
  <div class="callout-body">
    <p><strong>1.</strong> 사이트 HTML의 <code>&lt;head&gt;</code> 영역을 찾거나(권장) 본문 끝에 위치를 잡아요.</p>
    <p><strong>2.</strong> 아래 5가지 코드 중 우리 브랜드에 해당하는 패턴의 <code>&lt;script type="application/ld+json"&gt;</code> 블록을 통째로 붙여넣어요.</p>
    <p><strong>3.</strong> <code>"브랜드명"</code>·<code>"https://example.com"</code>·<code>"02-XXXX-XXXX"</code> 같은 <em>플레이스홀더</em>만 우리 정보로 교체합니다.</p>
    <p><strong>4.</strong> Rich Results Test에 페이지 URL이나 JSON 코드를 직접 입력해서 <em>오류·경고 0개</em>를 확인하면 끝.</p>
  </div>
</div>

코드 5종에 들어가기 전에 Google Search Central의 John Mueller가 짧게 풀어준 <em>JSON-LD를 페이지의 어디에 넣어야 하는지</em> 영상도 같이 보시면 위치 감이 빠르게 잡혀요.

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/lI6EtxjoyDU" title="JSON-LD Structured Data: Where to Insert in a Page? — John Mueller (Google Search Central)" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

### 패턴 1 — `Organization` (사이트 전체)

회사·브랜드 정체성을 <em>사이트 전 페이지에서 동일하게 선언</em>하는 마크업이에요. 보통 `<head>` 안에 넣고, 모든 페이지 공통으로 출력합니다.

```json
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "브랜드명",
  "url": "https://example.com",
  "logo": "https://example.com/logo.png",
  "sameAs": [
    "https://www.facebook.com/your-page",
    "https://www.instagram.com/your-handle",
    "https://www.linkedin.com/company/your-company"
  ],
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+82-10-XXXX-XXXX",
    "contactType": "customer service",
    "areaServed": "KR",
    "availableLanguage": ["Korean", "English"]
  }
}
```

### 패턴 2 — `BlogPosting` (블로그 글마다)

블로그 글 페이지마다 1개씩. 저자·발행일·수정일·이미지를 <em>구조적으로</em> 명시해서, AI가 <em>누가·언제·무엇을</em> 정확히 파악할 수 있게 해요. SISTRIX TOP 100 분석의 <em>Pillar 2 (authority + recency)</em>가 바로 이 영역이에요.

```json
{
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  "headline": "글 제목",
  "image": "https://example.com/og-image.png",
  "datePublished": "2026-05-19T10:00:00+09:00",
  "dateModified": "2026-05-19T15:00:00+09:00",
  "author": {
    "@type": "Person",
    "name": "저자 이름",
    "url": "https://example.com/authors/hong-gildong"
  },
  "publisher": {
    "@type": "Organization",
    "name": "브랜드명",
    "logo": {
      "@type": "ImageObject",
      "url": "https://example.com/logo.png"
    }
  }
}
```

### 패턴 3 — `FAQPage` (FAQ 또는 Q&A H2 패턴)

Q&A 형식의 콘텐츠를 그대로 구조화. <em>시리즈 표준 Q&A H2 패턴</em>이 곧 FAQPage가 돼요. AI 답변 엔진은 FAQPage를 <em>직접 응답 후보</em>로 인식하기 쉬워요.

```json
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Schema.org가 뭐고 왜 중요한가요?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Schema.org는 웹 페이지의 의미 구조를 기계가 읽을 수 있도록 표준화한 공통 어휘로, 2024년 기준 4,500만 도메인이 채택한 공동 표준입니다."
      }
    },
    {
      "@type": "Question",
      "name": "llms.txt가 뭐고 어떻게 작성하나요?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "llms.txt는 사이트 루트에 두는 마크다운 파일로, AI 크롤러에게 브랜드를 짧게 요약 안내하는 역할을 합니다. 2024년 9월 Jeremy Howard가 제안했습니다."
      }
    }
  ]
}
```

### 패턴 4 — `LegalService` 또는 `AccountingService` (전문직 사무소)

변호사·회계·세무·노무 사무소의 <em>서비스 페이지·홈페이지</em>에 적용. `LocalBusiness` 상속 속성(`openingHours`·`address`·`telephone`)도 함께 넣어요.

```json
{
  "@context": "https://schema.org",
  "@type": "LegalService",
  "name": "○○ 법무법인",
  "url": "https://example-law.com",
  "telephone": "+82-2-XXXX-XXXX",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "서울 강남구 ○○로 ○○",
    "addressLocality": "서울",
    "postalCode": "06XXX",
    "addressCountry": "KR"
  },
  "openingHoursSpecification": [{
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    "opens": "09:00",
    "closes": "18:00"
  }],
  "serviceType": ["이혼 소송", "상속 분쟁", "기업 자문"],
  "areaServed": {"@type": "Place", "name": "대한민국"},
  "priceRange": "₩₩₩"
}
```

세무·회계·노무 사무소는 `@type`만 `AccountingService`로 바꾸면 같은 골격이 그대로 적용돼요. `serviceType`을 _세무 신고_·_법인 결산_·_노무 자문_ 등 사무소 특성으로 교체하시면 끝.

### 패턴 5 — `Person` + `hasCredential` (저자·전문가·변호사)

저자·변호사·세무사·회계사 <em>개별 프로필</em> 페이지. EEAT(Experience · Expertise · Authoritativeness · Trustworthiness — Google이 콘텐츠 신뢰도를 판단하는 4가지 기준) 신호의 핵심이에요. <em>학력·자격·수상·전문 분야</em>를 모두 구조화합니다. (⚠️ `Attorney` 타입이 deprecated 처리됐기 때문에 변호사 개인 프로필도 `Person`을 사용해요.)

```json
{
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "홍길동",
  "jobTitle": "대표 변호사",
  "url": "https://example-law.com/attorneys/hong",
  "image": "https://example-law.com/hong.jpg",
  "worksFor": {
    "@type": "LegalService",
    "name": "○○ 법무법인"
  },
  "alumniOf": [
    {"@type": "EducationalOrganization", "name": "서울대학교 법학과"},
    {"@type": "EducationalOrganization", "name": "사법연수원 제○○기"}
  ],
  "hasCredential": [
    {
      "@type": "EducationalOccupationalCredential",
      "credentialCategory": "license",
      "name": "대한민국 변호사"
    }
  ],
  "knowsAbout": ["이혼 소송", "양육권 분쟁", "재산분할"],
  "award": ["○○ 법조타임스 올해의 변호사 (2025)"]
}
```

5종 모두 [Rich Results Test](https://search.google.com/test/rich-results)에서 <em>구문 검증 + Google 인식 가능성</em>을 1분 만에 확인할 수 있어요. 운영 시점에는 [Google "Intro to structured data"](https://developers.google.com/search/docs/appearance/structured-data/intro-structured-data) 문서의 권고처럼 <em>Search Console의 Rich result status reports</em>로 <em>마크업 깨짐 여부</em>를 모니터링하면 안전합니다.

<div class="callout callout--summary">
  <div class="callout-body">
    <p>📌 5종 JSON-LD 코드를 그대로 복사해서 플레이스홀더만 교체하면 오늘 적용 가능. <code>Organization</code>·<code>BlogPosting</code>·<code>FAQPage</code>는 모든 브랜드 공통, <code>LegalService</code>/<code>AccountingService</code>·<code>Person</code>+<code>hasCredential</code>은 전문직 사무소 vertical 직격 패턴입니다.</p>
  </div>
</div>

## llms.txt 작성 — 무엇을 적고 무엇을 빼야 하나요?

**llms.txt는 <em>회사 자랑이 아니라 AI가 우리 브랜드를 정확히 요약·안내할 수 있게 만드는 메타데이터 파일</em>이에요.** llmstxt.org가 제안한 표준 구조는 <em>제목 → TLDR → 핵심 페이지 → 자체 용어 → FAQ</em> 5요소이고, 이게 [NIPAL AI 라이브 llms.txt](https://nipal-ai.com/llms.txt)에 그대로 적용된 모습이에요.

여기서 흥미로운 부수 발견 하나 — 미국 변호사 업계에선 <em>AI에 인용되는 변호사 vs AI 인용으로 징계받는 변호사</em>라는 대비가 만들어지고 있어요. 우리가 본문에서 짚는 <em>AI에 출처로 인용되는 사이트 만들기</em>의 반대편에서, <em>AI가 만든 가짜 판례를 그대로 인용했다가 법원 징계를 받은 변호사 사례</em>가 다수 보고되고 있거든요. 우리 브랜드가 <em>전자</em>가 되려면 llms.txt와 Schema가 <em>기계가 정확히 읽을 정직한 사실</em>을 정리해주는 자료 역할을 해야 해요.

라이브 NIPAL AI llms.txt에서 핵심 구조 5요소를 발췌하면 이래요.

<figure class="author-figure">
  <a href="https://nipal-ai.com/llms.txt" target="_blank" rel="noopener"><img src="/assets/img/blog/schema-llms-txt-guide/nipal_llms_txt_live.png" alt="NIPAL AI 라이브 llms.txt"></a>
  <figcaption>NIPAL AI 라이브 <code>llms.txt</code> — 제목·TLDR·핵심 페이지·자체 용어·FAQ 5요소를 그대로 보여줍니다.</figcaption>
</figure>

```markdown
# NIPAL AI

> AI 답변에서 브랜드가 발견되고 추천·인용되도록 인용 가능한 콘텐츠를 만들고 배포하는 AEO 전문 팀. ChatGPT·Gemini·Perplexity 답변 가시성을 측정하고, 측정 → 진단 → 전략 → 발행 → 재측정의 폐쇄 루프로 운영합니다.

## 핵심 서비스

- **AEO (답변 엔진 최적화)** — ChatGPT·Gemini·Perplexity 3개 AI 답변 엔진에서 브랜드 가시성 측정·진단·개선
- **30초 무료진단** — 3개 AI에 질문 3개씩, 답변 9개와 AI 노출 점수를 30초 안에 확인

## 주요 페이지
- [NIPAL AI 홈](https://nipal-ai.com/)
- [30초 무료진단](https://app.nipal-ai.com/)
- ...

## 자체 용어 사전
- **AEO**: 답변 엔진 최적화 ...
- **AI 노출 점수**: 답변 언급·추천 정도를 100점 만점으로 ...

## 자주 묻는 질문
### Q. AEO와 SEO는 무엇이 다른가요?
SEO는 검색 순위, AEO는 AI가 고르는 소수의 답변 ...
```

5요소만 갖춰도 AI가 우리 브랜드의 <em>정체·서비스·핵심 페이지·전문 용어·자주 묻는 질문</em>을 한 파일에서 다 인식할 수 있어요. 반대로 **잘못 쓰는 패턴 3가지**도 짚어둘게요.

<div class="callout callout--note">
  <div class="callout-title">⚠️ llms.txt 잘못 쓰는 패턴 3가지</div>
  <div class="callout-body">
    <p><strong>1. 회사 자랑만 길게.</strong> <em>업계 최고</em>, <em>혁신적인</em>, <em>차별화된</em> 같은 마케팅 수식어는 AI가 가중치 두지 않아요. <em>정량적 사실</em>(연차·고객 수·특허 출원 번호·연락처)을 적으세요.</p>
    <p><strong>2. TLDR 없이 긴 문서.</strong> llms.txt는 <em>짧은 안내</em>가 핵심이에요. 본문이 길면 AI가 <em>요점</em>을 못 잡고, 차라리 <code>llms-full.txt</code>(상세본)를 별도로 두는 Vercel 패턴을 추천합니다.</p>
    <p><strong>3. 의미 없는 메타데이터.</strong> HTML 메타 태그를 그대로 옮긴 키워드 나열은 <em>현대 LLM에 거의 효과 없음</em>. <em>사람이 읽을 자연스러운 한국어 문장</em>으로 쓰세요.</p>
  </div>
</div>

<div class="gm-infographic">
  <div class="gm-i22">
    <h3 class="gm-i22__title">llms.txt — 잘못 쓴 예 vs 잘 쓴 예</h3>
    <p class="gm-i22__subtitle">같은 회사의 llms.txt를 두 가지 방식으로 작성하면 AI 인식이 어떻게 달라지나</p>
    <div class="gm-i22__grid">
      <div class="gm-i22__col gm-i22__col--bad">
        <span class="gm-i22__label">❌ BAD — 회사 자랑</span>
        <div class="gm-i22__code"># <span class="gm-i22__hl-bad">업계 최고의 혁신적인 마케팅 솔루션</span>

저희는 <span class="gm-i22__hl-bad">차별화된 노하우</span>로
고객 만족을 추구하는
<span class="gm-i22__hl-bad">최고의 파트너</span>입니다.

키워드: marketing, SEO, AEO, GEO,
brand, content, blog, naver, google,
chatgpt, perplexity, ai, optimization
...</div>
        <p class="gm-i22__notes"><strong>문제:</strong> 정량 사실 없음 · TLDR 없음 · 의미 없는 키워드 나열. <strong>AI 시야:</strong> 무엇을 하는 회사인지 추출 불가.</p>
      </div>
      <div class="gm-i22__col gm-i22__col--good">
        <span class="gm-i22__label">✅ GOOD — 5요소 구조</span>
        <div class="gm-i22__code"># NIPAL AI

&gt; <span class="gm-i22__hl-good">AI 답변에서 브랜드가 발견되고
추천·인용되도록 콘텐츠를 만들고
배포하는 AEO 전문 팀.</span>

## 핵심 서비스
- AEO — ChatGPT·Gemini·Perplexity 가시성 측정
- 콘텐츠 5,000편+ 직접 발행 경험

## 주요 페이지
- [NIPAL AI 홈](https://nipal-ai.com/)
- [30초 무료진단](https://app.nipal-ai.com/)
...</div>
        <p class="gm-i22__notes"><strong>장점:</strong> TLDR 1줄로 정체 즉시 전달 · 정량 사실(5,000편+ 발행) · 핵심 페이지 직접 링크. <strong>AI 시야:</strong> 회사 정체·서비스·핵심 페이지를 한 번에 인식.</p>
      </div>
    </div>
    <p class="gm-i22__source">출처: <a href="https://llmstxt.org/" target="_blank" rel="noopener">llmstxt.org 표준 제안</a> · <a href="https://nipal-ai.com/llms.txt" target="_blank" rel="noopener">nipal-ai.com/llms.txt (라이브 사례)</a></p>
  </div>
</div>

<div class="callout callout--summary">
  <div class="callout-body">
    <p>📌 llms.txt 5요소(제목·TLDR·핵심 페이지·자체 용어·FAQ)만 갖추면 충분. 회사 자랑 대신 <em>정량적 사실</em>, 긴 문서 대신 <em>TLDR + llms-full.txt 분리</em>, 키워드 나열 대신 <em>자연스러운 한국어 문장</em>이 핵심이에요.</p>
  </div>
</div>

## Schema · llms.txt 점검·유지 — 30분 체크리스트

**Schema·llms.txt는 <em>한 번 붙이고 끝</em>이 아니라 <em>배포 파이프라인과 동기화한 자동 재생성</em>이 운영 핵심이에요.** <em>분기별 같은 고정 주기 갱신</em>은 어느 공식 문서에도 명시되어 있지 않아요. 대신 <em>템플릿·서비스·문서 IA가 바뀌는 시점</em>에 함께 재생성되도록 빌드 파이프라인에 끼워두는 게 가장 안전합니다.

발행 또는 갱신 시점에 30분이면 끝나는 5단계 체크리스트는 이렇게 짜요.

<div class="callout callout--tip">
  <div class="callout-title">✅ 30분 점검 체크리스트 5단계</div>
  <div class="callout-body">
    <p><strong>1. Schema 구문 검증</strong> — <a href="https://search.google.com/test/rich-results" target="_blank" rel="noopener">Rich Results Test</a>에서 페이지 URL 또는 JSON 코드 직접 입력. 오류·경고 0개 확인.</p>
    <p><strong>2. llms.txt 접근 확인</strong> — <code>https://your-site.com/llms.txt</code> 직접 브라우저에서 열기. 200 OK 응답 + 마크다운 렌더링 확인.</p>
    <p><strong>3. 모바일 노출 확인</strong> — Schema가 <em>데스크톱만</em>이 아니라 <em>모바일 페이지에도 동일하게</em> 출력되는지 모바일 source 확인.</p>
    <p><strong>4. Rich result status reports</strong> — <a href="https://search.google.com/search-console" target="_blank" rel="noopener">Search Console</a>에서 <em>구조화 데이터</em> 섹션 확인. 신규 오류·경고 발생 여부 모니터링.</p>
    <p><strong>5. 배포 파이프라인 동기화</strong> — 사이트 템플릿·서비스 변경·문서 IA 개편 시 Schema·llms.txt가 <em>자동 재생성</em>되도록 빌드 스크립트에 포함.</p>
  </div>
</div>

6편에서 짚은 <em>구조화 데이터 가독성</em>이 우리 브랜드 페이지에 실제로 얼마나 갖춰져 있는지 궁금하시면 [30초 무료진단](https://app.nipal-ai.com/)으로 ChatGPT·Gemini·Perplexity 세 AI 답변 엔진에서 우리 브랜드가 언급되는지 측정해 보실 수 있어요. AI 노출 점수와 3단계 처방을 30초 안에 바로 보여드립니다.

<div class="callout callout--summary">
  <div class="callout-body">
    <p>📌 <em>분기별 갱신</em>은 공식 권고가 없어요. <em>배포 파이프라인 동기화</em>가 운영 핵심. 30분 점검 5단계(Rich Results Test · llms.txt 200 OK · 모바일 source · Search Console · 빌드 스크립트)면 충분히 안정 운영 가능합니다.</p>
  </div>
</div>

<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BlogPosting",
      "headline": "Schema.org & llms.txt 완전 가이드 — AI가 우리 브랜드를 읽게 만드는 6가지 마크업 패턴",
      "datePublished": "2026-05-18T19:00:00+09:00",
      "dateModified": "2026-05-18T19:00:00+09:00",
      "author": {"@type": "Person", "name": "Jace", "jobTitle": "NIPAL AI 대표", "url": "https://nipal-ai.com/"},
      "publisher": {"@type": "Organization", "name": "NIPAL AI", "url": "https://nipal-ai.com", "logo": {"@type": "ImageObject", "url": "https://nipal-ai.com/assets/img/logo.png"}},
      "image": "https://nipal-ai.com/assets/img/blog/schema-llms-txt-guide/og.png",
      "about": [
        {"@type": "Thing", "name": "Schema.org"},
        {"@type": "Thing", "name": "llms.txt"},
        {"@type": "Thing", "name": "Structured Data"},
        {"@type": "Thing", "name": "Generative Engine Optimization"}
      ],
      "mentions": [
        {"@type": "Organization", "name": "Google", "url": "https://google.com"},
        {"@type": "Thing", "name": "Schema.org", "url": "https://schema.org"},
        {"@type": "Person", "name": "Jeremy Howard", "url": "https://llmstxt.org"},
        {"@type": "Organization", "name": "SISTRIX", "url": "https://www.sistrix.com"},
        {"@type": "Organization", "name": "NIPAL AI", "url": "https://nipal-ai.com"}
      ],
      "speakable": {"@type": "SpeakableSpecification", "cssSelector": [".post-summary", ".post-title", ".post-lede"]}
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {"@type": "Question", "name": "Schema.org가 뭐고, AI 답변 엔진에 왜 중요한가요?", "acceptedAnswer": {"@type": "Answer", "text": "Schema.org는 웹 페이지의 의미 구조를 기계가 읽을 수 있도록 표준화한 공통 어휘로, 4,500만 도메인이 채택한 2011년 공동 표준입니다. Google은 생성형 AI 검색에 특별한 schema.org 마크업이 필요 없다고 명시하지만, SISTRIX TOP 100 분석에서 AI에 인용되는 사이트의 공통점은 JSON-LD 마크업이라는 보조 인프라 가치가 관찰됩니다."}},
        {"@type": "Question", "name": "llms.txt가 뭐고, AI 크롤러가 어떻게 읽나요?", "acceptedAnswer": {"@type": "Answer", "text": "llms.txt는 2024년 9월 Jeremy Howard가 제안한 사이트 루트의 마크다운 파일로, AI 크롤러에게 브랜드를 짧게 요약 안내합니다. OpenAI·Anthropic·Perplexity 공식 문서는 활용을 명시하지 않지만, Anthropic·Vercel·Perplexity가 자체 채택 중인 도입 권고 수준의 보조 인덱스입니다."}},
        {"@type": "Question", "name": "우리 브랜드에 꼭 적용해야 할 Schema 타입은?", "acceptedAnswer": {"@type": "Answer", "text": "모든 브랜드 공통 3종(Organization·Article·FAQPage)에 산업별 1~2종을 추가합니다. 변호사·로펌은 LegalService와 Person+hasCredential, 세무·회계·노무는 AccountingService와 Person+hasCredential, 커머스는 Product와 Offer와 BreadcrumbList. Attorney 타입은 schema.org에서 deprecated 처리되었습니다."}},
        {"@type": "Question", "name": "마크업을 어디에 어떻게 적용하나요?", "acceptedAnswer": {"@type": "Answer", "text": "head 또는 본문 끝의 script type application/ld+json 블록에 JSON-LD 코드를 넣습니다. Organization·BlogPosting·FAQPage·LegalService(또는 AccountingService)·Person 5종 코드를 그대로 복사해 플레이스홀더만 우리 브랜드 정보로 교체하면 됩니다. Rich Results Test에서 1분 만에 검증 가능합니다."}},
        {"@type": "Question", "name": "llms.txt 작성 — 무엇을 적고 무엇을 빼야 하나요?", "acceptedAnswer": {"@type": "Answer", "text": "llmstxt.org 표준 구조는 제목·TLDR·핵심 페이지·자체 용어·FAQ 5요소입니다. 회사 자랑이 아니라 정량적 사실, TLDR 필수, 키워드 나열보다 자연스러운 한국어 문장을 권장합니다. NIPAL AI 라이브 llms.txt가 실제 사례입니다."}},
        {"@type": "Question", "name": "Schema·llms.txt 점검·유지 — 30분 체크리스트는?", "acceptedAnswer": {"@type": "Answer", "text": "Schema 구문 검증(Rich Results Test), llms.txt 접근 확인, 모바일 노출, Search Console Rich result reports, 배포 파이프라인 동기화 5단계입니다. 분기별 같은 고정 주기 갱신은 공식 권고가 없으며, 템플릿·서비스·문서 IA 변경 시 자동 재생성이 핵심입니다."}}
      ]
    },
    {
      "@type": "HowTo",
      "name": "Schema·llms.txt 30분 점검 체크리스트",
      "step": [
        {"@type": "HowToStep", "name": "Schema 구문 검증", "text": "Rich Results Test에서 페이지 URL 또는 JSON 코드 직접 입력. 오류·경고 0개 확인.", "url": "https://search.google.com/test/rich-results"},
        {"@type": "HowToStep", "name": "llms.txt 접근 확인", "text": "https://your-site.com/llms.txt 직접 브라우저에서 열기. 200 OK 응답 + 마크다운 렌더링 확인."},
        {"@type": "HowToStep", "name": "모바일 노출 확인", "text": "Schema가 데스크톱과 모바일 페이지에 동일하게 출력되는지 모바일 source 확인."},
        {"@type": "HowToStep", "name": "Rich result status reports", "text": "Search Console 구조화 데이터 섹션에서 신규 오류·경고 발생 여부 모니터링.", "url": "https://search.google.com/search-console"},
        {"@type": "HowToStep", "name": "배포 파이프라인 동기화", "text": "사이트 템플릿·서비스 변경 시 Schema·llms.txt가 자동 재생성되도록 빌드 스크립트에 포함."}
      ]
    }
  ]
}
</script>
