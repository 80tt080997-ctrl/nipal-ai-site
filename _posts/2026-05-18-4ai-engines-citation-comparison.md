---
title: "4 AI 답변 엔진 비교 — ChatGPT · Perplexity · Gemini · Claude는 어떤 콘텐츠를 인용하나"
description: "각 사 공식 문서(OpenAI · Perplexity · Google · Anthropic) + Profound · Peec AI · ACL 학술 + 와이즈앱 한국 4사 사용자 수를 묶어 — 같은 질문에 네 엔진이 어떻게 다르게 답하고 어디부터 측정해야 하는지 정리합니다."
date: 2026-05-18 10:00:00 +0900
last_modified_at: 2026-05-15 15:00:00 +0900
author_id: nipal
category: 실행 노트
tags: [GEO, AEO, ChatGPT, Perplexity, Gemini, Claude, citation]
image: /assets/img/blog/4ai-engines-citation-comparison/og.png
summary: |
  - 네 엔진은 모두 <em>출처 표시</em>를 말하지만, **구현 철학이 달라요** — ChatGPT는 inline citations + Sources 패널, Perplexity는 <em>every answer = direct links</em>, Gemini는 groundingMetadata 메타데이터 구조, Claude는 cited_text 토큰 별도 회계.
  - 출처 성향도 갈립니다 — **ChatGPT는 Wikipedia 7.8%** 최다, **Perplexity는 Reddit 6.6%** + Social 19.4%(ChatGPT의 4배), **Gemini는 Brand 73%**, **Claude는 brand+media 혼합형**.
  - 한국 시장은 **ChatGPT 2,293만 명**이 압도적 1위 (와이즈앱 2026-02). 다만 <em>4사 모두 측정</em>해야 답변 엔진 가시성 절반 이상 확보.
  - Peec AI 3천만 소스 분석 — AI 검색 전체 상위 도메인은 **Reddit · YouTube · LinkedIn · Wikipedia · Forbes · G2 · Yelp · Facebook · Medium · TechRadar**.
  - 학술 결론(ACL NAACL 2025): <em>sentence-level citation</em>이 90% accuracy로 가장 신뢰 가능한 단위 — 청크 단위 처방과 정확히 같은 방향.
---

지난 [4편 — AI Overview · AI Mode 등장 후 SEO](/blog/ai-overview-and-seo/)에서는 <em>AI 검색 시대의 SEO 변화</em>를 다뤘어요. 한 가지 짚지 않고 넘어간 게 있어요 — <em>AI 답변 엔진은 한 곳이 아니라 네 곳</em>이라는 사실입니다.

같은 질문 <em>"서울 강북에서 50인 회의실 어디가 좋아?"</em> 를 ChatGPT · Perplexity · Gemini · Claude 네 엔진에 던지면 <em>완전히 다른 출처</em>를 인용해요. ChatGPT는 위키·블로그 매체 위주, Perplexity는 Reddit·G2 같은 커뮤니티·리뷰형, Gemini는 브랜드 사이트, Claude는 권위 매체. 같은 정보를 찾는데도 <em>어떤 페이지가 답변에 들어가느냐</em>가 엔진마다 다른 거예요.

이 차이가 마케터에게 중요한 이유는 단순해요 — **우리 브랜드는 <em>어떤 엔진</em>에서 <em>어떤 종류의 페이지</em>로 인용되는지** 알아야 <em>어디부터 측정·최적화할지</em> 결정할 수 있거든요. 한국 시장은 ChatGPT 사용자가 2,293만 명으로 압도적 1위인데, 그럼에도 <em>4사 모두</em> 측정해야 하는 이유도 이 글에서 짚어볼게요.

이 글에서는 4 엔진 각 사 공식 문서(OpenAI · Perplexity · Google · Anthropic), 산업 표준 비교 리포트(Profound · Peec AI), ACL NAACL 2025 학술 자료, 그리고 와이즈앱의 한국 4사 사용자 수까지 묶어서 — 네 엔진의 인용 행태 차이를 정리하고, 한국 시장에서 우리 브랜드는 어떤 엔진을 우선 측정해야 하는지 결론까지 짚습니다.

<style>
/* === NIPAL AI infographics — 4 AI Engine Comparison (i15~i18) === */
.gm-infographic { margin: 40px 0; font-family: 'Pretendard', 'Apple SD Gothic Neo', system-ui, sans-serif; color: #111216; }
.gm-infographic *, .gm-infographic *::before, .gm-infographic *::after { box-sizing: border-box; }

/* --- i15 : 4 AI 처리 흐름 비교 (Query → Retrieval → Citation) --- */
.gm-i15 { background: #FFFFFF; border: 1px solid #e4e4e5; border-radius: 16px; padding: 32px 28px; box-shadow: 0 4px 16px rgba(17,18,22,0.06); }
.gm-i15__title { font-size: 20px; font-weight: 700; color: #111216; text-align: center; margin: 0 0 4px; }
.gm-i15__subtitle { font-size: 13px; color: #6d7079; text-align: center; margin: 0 0 28px; }
.gm-i15__grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 12px; }
.gm-i15__col { background: #f7f6f3; border: 1.5px solid #e4e4e5; border-radius: 12px; padding: 18px 14px 16px; display: flex; flex-direction: column; gap: 10px; }
.gm-i15__col--chatgpt { border-color: #10A37F; background: linear-gradient(180deg, #F0FBF6 0%, #E5F7EF 100%); }
.gm-i15__col--perplexity { border-color: #20808D; background: linear-gradient(180deg, #EFF8FA 0%, #DFF1F4 100%); }
.gm-i15__col--gemini { border-color: #4285F4; background: linear-gradient(180deg, #EEF4FE 0%, #DDE9FD 100%); }
.gm-i15__col--claude { border-color: #DA7756; background: linear-gradient(180deg, #FCF1EB 0%, #F8E3D6 100%); }
.gm-i15__head { display: flex; align-items: center; gap: 8px; }
.gm-i15__brand { font: 800 13px 'JetBrains Mono','Consolas',monospace; letter-spacing: 0.4px; }
.gm-i15__col--chatgpt .gm-i15__brand { color: #10A37F; }
.gm-i15__col--perplexity .gm-i15__brand { color: #20808D; }
.gm-i15__col--gemini .gm-i15__brand { color: #4285F4; }
.gm-i15__col--claude .gm-i15__brand { color: #DA7756; }
.gm-i15__feature { font-size: 12px; color: #202228; line-height: 1.55; padding: 8px 10px; background: rgba(255,255,255,0.85); border-radius: 6px; }
.gm-i15__feature strong { color: #111216; font-weight: 700; }
.gm-i15__metric { font: 800 18px/1 'JetBrains Mono','Consolas',monospace; }
.gm-i15__col--chatgpt .gm-i15__metric { color: #10A37F; }
.gm-i15__col--perplexity .gm-i15__metric { color: #20808D; }
.gm-i15__col--gemini .gm-i15__metric { color: #4285F4; }
.gm-i15__col--claude .gm-i15__metric { color: #DA7756; }
.gm-i15__metric-label { font-size: 11px; color: #6d7079; font-weight: 600; margin-top: 2px; }
.gm-i15__source { margin: 18px 0 0; padding-top: 14px; border-top: 1px solid #e4e4e5; font-size: 11px; color: #6d7079; font-style: italic; text-align: center; }
.gm-i15__source a { color: inherit; text-decoration: underline; }
@media (max-width: 920px) { .gm-i15__grid { grid-template-columns: 1fr 1fr; } }
@media (max-width: 520px) { .gm-i15__grid { grid-template-columns: 1fr; } }

/* --- i16 : Peec Top 10 + 플랫폼별 상위 매트릭스 --- */
.gm-i16 { background: #FFFFFF; border: 1px solid #e4e4e5; border-radius: 16px; padding: 32px 28px; box-shadow: 0 4px 16px rgba(17,18,22,0.06); }
.gm-i16__title { font-size: 20px; font-weight: 700; color: #111216; text-align: center; margin: 0 0 4px; }
.gm-i16__subtitle { font-size: 13px; color: #6d7079; text-align: center; margin: 0 0 24px; }
.gm-i16__top { background: linear-gradient(135deg, #f0ecfe 0%, #ebedff 100%); border: 1px solid #b3a0f9; border-radius: 12px; padding: 16px 18px; margin-bottom: 18px; }
.gm-i16__top-label { font: 700 11px 'JetBrains Mono','Consolas',monospace; color: #5b40d9; letter-spacing: 0.5px; margin-bottom: 10px; display: block; }
.gm-i16__top-row { display: flex; flex-wrap: wrap; gap: 8px; }
.gm-i16__chip { display: inline-flex; align-items: center; gap: 6px; padding: 6px 12px; background: #FFFFFF; border: 1px solid #e4e4e5; border-radius: 999px; font-size: 12.5px; font-weight: 600; color: #111216; }
.gm-i16__chip-rank { font: 800 10px 'JetBrains Mono','Consolas',monospace; color: #7052f3; }
.gm-i16__cols { display: grid; grid-template-columns: repeat(3, 1fr); gap: 12px; }
.gm-i16__col { border: 1.5px solid #e4e4e5; border-radius: 12px; padding: 16px 14px; }
.gm-i16__col--chatgpt { border-color: #10A37F; }
.gm-i16__col--gemini { border-color: #4285F4; }
.gm-i16__col--perplexity { border-color: #20808D; }
.gm-i16__col-head { display: flex; align-items: center; justify-content: space-between; margin-bottom: 10px; }
.gm-i16__col-name { font: 800 12px 'JetBrains Mono','Consolas',monospace; letter-spacing: 0.4px; }
.gm-i16__col--chatgpt .gm-i16__col-name { color: #10A37F; }
.gm-i16__col--gemini .gm-i16__col-name { color: #4285F4; }
.gm-i16__col--perplexity .gm-i16__col-name { color: #20808D; }
.gm-i16__list { margin: 0; padding: 0; list-style: none; display: flex; flex-direction: column; gap: 6px; }
.gm-i16__item { display: flex; align-items: center; gap: 8px; font-size: 12.5px; color: #111216; padding: 5px 8px; background: #f7f6f3; border-radius: 6px; }
.gm-i16__item-rank { font: 800 10px 'JetBrains Mono','Consolas',monospace; color: #6d7079; width: 14px; flex: 0 0 auto; }
.gm-i16__source { margin: 16px 0 0; padding-top: 14px; border-top: 1px solid #e4e4e5; font-size: 11px; color: #6d7079; font-style: italic; text-align: center; }
.gm-i16__source a { color: inherit; text-decoration: underline; }
@media (max-width: 720px) { .gm-i16__cols { grid-template-columns: 1fr; } }

/* --- i17 : Profound 4 AI 카테고리 분포 --- */
.gm-i17 { background: #FFFFFF; border: 1px solid #e4e4e5; border-radius: 16px; padding: 32px 28px; box-shadow: 0 4px 16px rgba(17,18,22,0.06); }
.gm-i17__title { font-size: 20px; font-weight: 700; color: #111216; text-align: center; margin: 0 0 4px; }
.gm-i17__subtitle { font-size: 13px; color: #6d7079; text-align: center; margin: 0 0 24px; }
.gm-i17__chart { display: flex; flex-direction: column; gap: 14px; }
.gm-i17__row { display: grid; grid-template-columns: 110px 1fr; gap: 14px; align-items: center; }
.gm-i17__brand { display: flex; align-items: center; gap: 8px; font: 800 12px 'JetBrains Mono','Consolas',monospace; letter-spacing: 0.3px; }
.gm-i17__row--chatgpt .gm-i17__brand { color: #10A37F; }
.gm-i17__row--gemini .gm-i17__brand { color: #4285F4; }
.gm-i17__row--perplexity .gm-i17__brand { color: #20808D; }
.gm-i17__row--claude .gm-i17__brand { color: #DA7756; }
.gm-i17__stacked { display: flex; height: 32px; border-radius: 6px; overflow: hidden; border: 1px solid #e4e4e5; background: #f7f6f3; }
.gm-i17__seg { display: flex; align-items: center; justify-content: center; font: 700 11px 'JetBrains Mono','Consolas',monospace; color: #FFFFFF; min-width: 0; padding: 0 2px; }
.gm-i17__seg--brand { background: linear-gradient(135deg, #4d57f5 0%, #6d76f7 100%); }
.gm-i17__seg--media { background: linear-gradient(135deg, #7052f3 0%, #9179f7 100%); }
.gm-i17__seg--institution { background: linear-gradient(135deg, #b3a0f9 0%, #cfc2fb 100%); color: #5b40d9; }
.gm-i17__seg--social { background: linear-gradient(135deg, #FF8C42 0%, #FFB07A 100%); }
.gm-i17__legend { display: flex; flex-wrap: wrap; gap: 14px; justify-content: center; margin: 20px 0 0; padding: 14px 18px; background: #f7f6f3; border-radius: 10px; }
.gm-i17__legend-item { display: flex; align-items: center; gap: 6px; font-size: 12px; color: #202228; }
.gm-i17__legend-dot { width: 12px; height: 12px; border-radius: 3px; }
.gm-i17__legend-dot--brand { background: linear-gradient(135deg, #4d57f5 0%, #6d76f7 100%); }
.gm-i17__legend-dot--media { background: linear-gradient(135deg, #7052f3 0%, #9179f7 100%); }
.gm-i17__legend-dot--institution { background: linear-gradient(135deg, #b3a0f9 0%, #cfc2fb 100%); }
.gm-i17__legend-dot--social { background: linear-gradient(135deg, #FF8C42 0%, #FFB07A 100%); }
.gm-i17__highlight { margin: 16px 0 0; padding: 12px 18px; background: linear-gradient(135deg, #FFF5EE 0%, #FFE8D6 100%); border: 1px solid #FF8C42; border-radius: 10px; font-size: 12.5px; color: #202228; line-height: 1.55; text-align: center; }
.gm-i17__highlight strong { color: #C45A1F; font-weight: 800; }
.gm-i17__source { margin: 14px 0 0; padding-top: 14px; border-top: 1px solid #e4e4e5; font-size: 11px; color: #6d7079; font-style: italic; text-align: center; }
.gm-i17__source a { color: inherit; text-decoration: underline; }
@media (max-width: 720px) {
  .gm-i17__row { grid-template-columns: 90px 1fr; gap: 10px; }
  .gm-i17__brand { font-size: 11px; }
  .gm-i17__seg { font-size: 10px; }
}

/* --- i18 : 한국 4사 사용자 수 + 결정 가이드 --- */
.gm-i18 { background: #FFFFFF; border: 1px solid #e4e4e5; border-radius: 16px; padding: 32px 28px; box-shadow: 0 4px 16px rgba(17,18,22,0.06); }
.gm-i18__title { font-size: 20px; font-weight: 700; color: #111216; text-align: center; margin: 0 0 4px; }
.gm-i18__subtitle { font-size: 13px; color: #6d7079; text-align: center; margin: 0 0 24px; }
.gm-i18__bars { display: flex; flex-direction: column; gap: 10px; margin-bottom: 18px; }
.gm-i18__bar-row { display: grid; grid-template-columns: 110px 1fr 80px; gap: 12px; align-items: center; }
.gm-i18__bar-brand { font: 800 12px 'JetBrains Mono','Consolas',monospace; letter-spacing: 0.3px; }
.gm-i18__bar-row--chatgpt .gm-i18__bar-brand { color: #10A37F; }
.gm-i18__bar-row--grok .gm-i18__bar-brand { color: #000000; }
.gm-i18__bar-row--perplexity .gm-i18__bar-brand { color: #20808D; }
.gm-i18__bar-row--wrtn .gm-i18__bar-brand { color: #654ae4; }
.gm-i18__bar-row--gemini .gm-i18__bar-brand { color: #4285F4; }
.gm-i18__bar-track { height: 26px; background: #f7f6f3; border-radius: 4px; overflow: hidden; border: 1px solid #e4e4e5; }
.gm-i18__bar-fill { height: 100%; border-radius: 4px 0 0 4px; transition: width 0.3s; }
.gm-i18__bar-row--chatgpt .gm-i18__bar-fill { background: linear-gradient(90deg, #10A37F 0%, #1FC79A 100%); }
.gm-i18__bar-row--grok .gm-i18__bar-fill { background: linear-gradient(90deg, #000000 0%, #444444 100%); }
.gm-i18__bar-row--perplexity .gm-i18__bar-fill { background: linear-gradient(90deg, #20808D 0%, #2DA5B3 100%); }
.gm-i18__bar-row--wrtn .gm-i18__bar-fill { background: linear-gradient(90deg, #654ae4 0%, #8168f5 100%); }
.gm-i18__bar-row--gemini .gm-i18__bar-fill { background: linear-gradient(90deg, #4285F4 0%, #5BA0FF 100%); }
.gm-i18__bar-value { font: 800 13px/1 'JetBrains Mono','Consolas',monospace; color: #111216; text-align: right; }
.gm-i18__note { padding: 12px 16px; background: linear-gradient(135deg, #ebedff 0%, #f0ecfe 100%); border-radius: 10px; font-size: 12px; color: #202228; line-height: 1.55; }
.gm-i18__note strong { color: #5b40d9; font-weight: 700; }
.gm-i18__source { margin: 14px 0 0; padding-top: 14px; border-top: 1px solid #e4e4e5; font-size: 11px; color: #6d7079; font-style: italic; text-align: center; }
.gm-i18__source a { color: inherit; text-decoration: underline; }
@media (max-width: 640px) {
  .gm-i18__bar-row { grid-template-columns: 90px 1fr 70px; gap: 8px; }
  .gm-i18__bar-brand { font-size: 11px; }
  .gm-i18__bar-value { font-size: 11px; }
}
</style>

## ChatGPT는 어떻게 답변하고 출처를 보여주나요?

**ChatGPT는 <em>질문을 받으면 필요할 때 웹을 검색해서 답변에 인라인 인용(inline citations — 본문 안에 직접 출처 마크를 다는 방식)과 Sources 패널을 함께 붙이는</em> 방식이에요.** OpenAI가 2024년 10월에 ChatGPT Search를 정식 발표한 이후의 표준 동작입니다.

OpenAI는 [<em>Introducing ChatGPT search</em> (2024-10-31)](https://openai.com/index/introducing-chatgpt-search/)에서 이렇게 짚어요. *"ChatGPT can now search the web in a much better way than before. You can get fast, timely answers with links to relevant web sources, which you would have previously needed to go to a search engine for."* — 검색 엔진을 따로 가는 대신 ChatGPT 안에서 <em>답변 + 출처 링크</em>를 한 번에 받는다는 뜻이에요. 이 발표에서 Associated Press · Reuters · The Atlantic · Financial Times · Time 등 **14개 출판사 제휴**도 공개됐습니다.

<figure class="author-figure">
  <a href="https://openai.com/index/introducing-chatgpt-search/" target="_blank" rel="noopener"><img src="/assets/img/blog/4ai-engines-citation-comparison/openai_chatgpt_search.png" alt="OpenAI — ChatGPT 검색 소개 (2024년 10월 31일)"></a>
  <figcaption>OpenAI 공식 발표 페이지 — <em>ChatGPT 검색 소개</em> (2024-10-31). _Get fast, timely answers with links to relevant web sources_ 한 줄과 함께 검색 도구 아이콘이 보입니다.</figcaption>
</figure>


출처 노출 UI는 OpenAI Help Center가 더 구체적이에요. [<em>ChatGPT search for Enterprise and Edu</em> 문서](https://help.openai.com/en/articles/10093903-chatgpt-search-for-enterprise-and-edu)는 *"ChatGPT responses that use search **will contain** inline citations"* 라고 명시합니다. <em>will contain</em> — 검색을 쓴 답변에는 인라인 인용이 <em>포함된다</em>는 단정적 표현이에요. UI는 세 층으로 작동해요.

<div class="callout callout--tip">
  <div class="callout-title">💡 ChatGPT 출처 노출 UI 3층</div>
  <div class="callout-body">
    <p><strong>1층 인라인 인용:</strong> 답변 본문 안에 직접 출처 마크 표시.</p>
    <p><strong>2층 호버 정보:</strong> 인용 위에 마우스를 올리면 출처 정보 미리보기.</p>
    <p><strong>3층 Sources 패널:</strong> 답변 끝 <em>Sources</em> 버튼을 누르면 모든 인용 출처가 펼쳐짐.</p>
  </div>
</div>

2025년 10월에는 [ChatGPT Atlas](https://help.openai.com/en/articles/12591856-chatgpt-atlas-release-notes)도 출시됐어요. *"ChatGPT Atlas is a new web browser with ChatGPT built in."* — ChatGPT가 브라우저 안에 내장된 형태로, 사이드바에 <em>Ask ChatGPT</em> · Agent Mode · 브라우저 메모리 기능을 갖습니다. 답변의 인용 UI 자체는 ChatGPT Search 문서의 패턴을 따라요.

여기서 마케터 시점으로 옮기면 한 가지 핵심이 나옵니다 — **ChatGPT는 <em>출처 링크를 답변에 표시하는 것을 표준 동작으로 설계</em>했어요.** 즉 <em>우리 페이지가 답변 안에 인용되면 사용자가 클릭해서 들어올 수 있는 경로가 자동으로 생긴다</em>는 뜻입니다. 지난 글에서 짚은 Seer 데이터(<em>AI Overview에 인용된 페이지는 organic 클릭이 +35%</em>)와 정확히 같은 메커니즘이에요.

ChatGPT가 어떤 출처를 우선 인용하는지는 아래 네 엔진 비교 단락에서 자세히 짚어볼게요. 짧게 미리 짚으면, **ChatGPT의 최다 인용 도메인은 Wikipedia**(Profound 측정에서 <em>전체 인용의 7.8%</em>, <em>상위 10개 출처 중 47.9%</em>) — 백과·기관형 출처에 대한 신뢰가 가장 큰 엔진입니다.

ChatGPT Search가 어떻게 작동하는지 OpenAI 공식 채널의 짧은 데모로 한 번 보시면 이해가 더 빨라요. _12 Days of OpenAI: Day 8_에서 Kevin Weil 팀이 출처 노출 방식까지 라이브로 보여줍니다.

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/OzgNJJ2ErEE" title="Search — 12 Days of OpenAI: Day 8 (OpenAI 공식 채널)" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

## Perplexity는 어떻게 답변하고 어떻게 인용하나요?

**Perplexity는 <em>모든 답변에 출처 링크를 기본 전제로 붙이는</em> 답변 엔진(answer engine)이에요.** ChatGPT가 <em>필요할 때 검색을 켜는</em> 어시스턴트에 가깝다면, Perplexity는 <em>검색이 곧 답변 생성의 일부</em>인 구조로 처음부터 설계된 게 차이예요.

[Perplexity 공식 정의](https://www.perplexity.ai/help-center/en/articles/10354917-what-is-an-answer-engine-and-how-does-perplexity-work-as-one)는 한 문장으로 정리돼요. *"Perplexity serves as an answer engine by searching the web, identifying trusted sources, and synthesizing information into clear, up-to-date responses. Unlike traditional search engines, which make you sift through a list of links, Perplexity delivers the insights you're looking for in one place."* — 전통 검색이 <em>링크 목록을 보여주는 것</em>과 달리, Perplexity는 <em>신뢰할 출처를 식별해서 정보를 종합한 답변</em>을 한곳에 내놓는다는 입장이에요.

핵심 동작 원칙은 [<em>What is Pro Search?</em> 문서](https://www.perplexity.ai/help-center/en/articles/10352903-what-is-pro-search)에서 가장 직접적으로 드러납니다. *"Every answer includes direct links to the original sources, allowing you to verify facts or explore further."* — **모든 답변에 원 출처로 가는 직접 링크가 포함된다**는 원칙. Standard Search와 Pro Search의 차이도 같은 문서에서 분명히 짚어요.

| 항목 | Standard Search | Pro Search |
|---|---|---|
| 검색 깊이 | <em>Surface-level</em> | <em>Comprehensive</em> |
| 출처 수 | 1~2 sources | dozens of sources |
| 인용 형태 | Basic citations | Extensive, direct source links |

마케터 시점에서 이건 중요한 차이예요. **Perplexity Pro는 <em>수십 개 출처</em>를 동시에 활용한다**는 뜻이고, 즉 <em>한 페이지만 잘 만든다고 인용이 보장되지 않아요</em>. <em>여러 권위 있는 출처에 같은 정보 패턴이 함께 등장</em>해야 Pro Search 답변에 들어갈 가능성이 올라가요.

<figure class="author-figure">
  <a href="https://www.perplexity.ai/help-center/en/articles/10352903-what-is-pro-search" target="_blank" rel="noopener"><img src="/assets/img/blog/4ai-engines-citation-comparison/perplexity_pro_search.png" alt="Perplexity Help Center — What is Pro Search? 페이지 상단"></a>
  <figcaption>Perplexity Help Center — <em>What is Pro Search?</em>. _advanced search feature, designed to deliver nuanced, thorough answers_ 정의와 함께 Step-by-step process(Model Selection · Web Crawling …)가 한 페이지에 정리돼 있어요. _OpenAI's GPT-5, Claude Sonnet 4.6, Gemini 3.1 Pro_ 모델 선택 옵션도 본문에서 직접 확인됩니다.</figcaption>
</figure>

출처 성향도 ChatGPT와 완전히 달라요. Perplexity의 최다 인용 도메인은 **Reddit (6.6%)** — 커뮤니티·UGC형 출처를 가장 신뢰합니다. 아래 비교 단락에서 정확히 살펴볼게요.

## Gemini는 어떻게 답변하고 Google Search와 어떻게 연결되나요?

**Gemini는 <em>Google Search를 직접 호출해서 그 결과를 인용하는 grounding(AI가 실시간 웹 콘텐츠와 연결되어 답변을 만드는 메커니즘) 방식</em>으로 답변해요.** Gemini API에서 인용은 <em>구조화된 메타데이터</em> — 즉 _텍스트와 출처를 1:1로 매핑한 데이터_ — 로 반환된다는 점에서 다른 세 엔진과 가장 구조적으로 다른 차이를 보입니다.

[Google AI for Developers의 <em>Grounding with Google Search</em> 문서](https://ai.google.dev/gemini-api/docs/google-search)가 핵심이에요. *"Grounding with Google Search connects the Gemini model to real-time web content and works with all available languages. This allows Gemini to provide more accurate answers and cite verifiable sources beyond its knowledge cutoff."* — <em>Gemini 모델을 실시간 웹 콘텐츠와 연결해서 검증 가능한 출처를 인용하게 만드는 기능</em>입니다.

작동 방식은 단순해요. `google_search` 도구를 켜면 *"the model handles the entire workflow of searching, processing, and citing information automatically"* — 모델이 검색·처리·인용을 <em>자동으로</em> 수행합니다. 응답에는 세 메타데이터 필드가 포함돼요.

<div class="callout callout--note">
  <div class="callout-title">🔧 Gemini 응답 메타데이터 3필드</div>
  <div class="callout-body">
    <p><strong>groundingMetadata:</strong> grounding 작업 전체에 대한 메타데이터 컨테이너.</p>
    <p><strong>groundingChunks:</strong> 인용 대상 콘텐츠 청크 집합 — <em>어떤 출처에서 가져왔나</em>.</p>
    <p><strong>groundingSupports:</strong> 모델 출력 텍스트와 근거 소스의 1:1 매핑 — <em>어느 문장이 어느 출처에서 왔나</em>.</p>
  </div>
</div>

다른 세 엔진은 <em>문장 안에 인라인 마크</em> 또는 <em>Sources 패널</em>로 인용을 <em>UI 차원</em>에서 보여주지만, **Gemini API는 <em>텍스트와 출처를 구조적으로 매핑한 데이터</em>를 반환**해요. 마케터 입장에서 이건 <em>Gemini를 통해 만든 콘텐츠·답변에서 어떤 청크가 어떤 출처에 매핑됐는지</em> 추적·분석이 가장 정교하게 가능하다는 뜻이에요.

Gemini와 Google Search의 관계는 더 깊습니다. [Google Blog 2025-05-20 발표](https://blog.google/products-and-platforms/products/search/google-search-ai-mode-update/)에 따르면 *"Starting this week, we're bringing a custom version of Gemini 2.5, our most intelligent model, into Search for both AI Mode and AI Overviews in the U.S."* — **Gemini 2.5의 맞춤형 버전이 Google Search의 AI Mode와 AI Overviews에 직접 투입**돼요. 즉 <em>Gemini 앱</em>에서 받는 답변과 <em>Google SERP의 AI 답변 레이어</em>가 모델 계층에서 긴밀히 연결된다는 뜻이에요. 다만 사용자가 보는 <em>UI는 별개</em> — Gemini 앱은 챗 UI, Google SERP은 AI Overview·AI Mode UI로 분리돼 있어요.

출처 성향은 다른 엔진과도 또 달라요. Profound 측정에서 **Gemini는 brand 비중이 73%로 가장 높았어요** — 광고주·사업자 사이트 같은 <em>브랜드 출처</em>를 가장 자주 인용하는 엔진입니다.

<figure class="author-figure">
  <a href="https://ai.google.dev/gemini-api/docs/google-search" target="_blank" rel="noopener"><img src="/assets/img/blog/4ai-engines-citation-comparison/google_grounding.png" alt="Google AI for Developers — Grounding with Google Search 공식 문서"></a>
  <figcaption>Google AI for Developers — <em>Grounding with Google Search</em> 공식 문서. _Gemini를 실시간 웹 콘텐츠에 연결_하는 기능 정의와 응답 메타데이터 구조(groundingMetadata · groundingChunks · groundingSupports)가 한 페이지에 정리돼 있어요.</figcaption>
</figure>

Google AI Studio가 같은 grounding 기능을 어떻게 발표했는지 공식 영상으로 보면 응답 메타데이터 구조가 한눈에 잡혀요.

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/cLXa82DSUOA" title="Introducing Grounding with Google Search (Google AI 공식 채널)" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

## Claude는 어떻게 답변하고 어떻게 인용하나요?

**Claude는 <em>문서·검색 결과 블록에 대한 정교한 citation pointers</em>와 <em>토큰 비용·구조 정책</em>을 가장 명시적으로 분리해 설명하는 엔진이에요.** Anthropic 공식 문서가 다른 세 엔진보다 <em>개발자 입장에서 가장 구체적</em>인 점이 특징입니다.

[Anthropic Citations 문서](https://docs.anthropic.com/en/docs/build-with-claude/citations)는 두 가지 정책을 짚어요. 첫째, <em>토큰 회계</em>. *"The cited_text field is provided for convenience and does not count towards output tokens. When passed back in subsequent conversation turns, cited_text is also not counted towards input tokens."* — 인용된 원문(`cited_text` — _인용 출처에서 발췌한 텍스트 필드_)은 <em>출력 토큰에도 입력 토큰에도 포함되지 않아요</em>. 같은 인용을 반복 표시해도 토큰 비용 부담이 없다는 뜻이에요.

둘째, **Citations와 Structured Outputs는 함께 쓸 수 없어요**. <em>Structured Outputs</em>는 <em>JSON 같은 구조화 형식으로 출력하라는 옵션</em>이고, Citations와 함께 켜면 *"Citations cannot be used together with Structured Outputs. If you enable citations on any user-provided document... and also include the output_config.format parameter (or the deprecated output_format parameter), the API will return a 400 error."* — 두 기능을 동시에 켜면 <em>400 에러</em>가 발생합니다. 이건 다른 세 엔진 공식 문서에서는 명시되지 않은 정책 레벨 제약이에요.

<div class="callout callout--note">
  <div class="callout-title">⚠️ Claude Citations 정책 2가지</div>
  <div class="callout-body">
    <p><strong>토큰 회계:</strong> <code>cited_text</code>는 출력 토큰 · 다음 턴 입력 토큰 모두에 포함되지 않음 — 인용을 반복 표시해도 비용 부담 없음.</p>
    <p><strong>Structured Outputs 비호환:</strong> JSON 같은 구조화 출력과 함께 켜면 <em>400 에러</em> — 자동화 파이프라인에서는 인용 단계와 구조화 단계를 분리해야 함.</p>
  </div>
</div>

실시간 검색은 [Web search tool 문서](https://docs.anthropic.com/en/docs/build-with-claude/tool-use/web-search-tool)가 책임집니다. *"At the end of its turn, Claude provides a final response with cited sources."* — 검색 도구를 활성화하면 Claude가 <em>언제 검색할지</em> 스스로 결정하고, <em>턴의 끝에서 인용 출처가 포함된 최종 응답</em>을 제공해요. 비용도 명확합니다 — **웹 검색은 1,000 검색당 $10**로 별도 과금됩니다. 최신 버전 `web_search_20260209`에서는 <em>dynamic filtering</em>이 가능한데, <em>code execution tool을 함께 활성화해야</em> 작동하고 <em>Vertex AI에서는 미지원</em>입니다.

마케터 시점에서 Claude의 차별점은 두 가지예요. 첫째, <em>구조화 출력(JSON 등)과 인용을 동시에 못 쓰는</em> 제약 때문에, <em>Claude를 자동화 파이프라인에 쓸 때 인용 부분은 별도 단계로 분리</em>해야 해요. 둘째, <em>토큰 회계가 가장 정교</em>하다는 건 <em>긴 문서를 반복 인용해도 비용 증가가 통제</em>된다는 뜻이고, 즉 <em>Claude는 깊이 있는 출처 활용에 가장 안정적</em>인 엔진이에요.

출처 성향은 <em>brand + media 혼합형</em> — 광고주 사이트와 권위 매체를 균형 있게 인용해요. 아래 비교 단락에서 정확한 수치로 확인할게요.

<figure class="author-figure">
  <a href="https://docs.anthropic.com/en/docs/build-with-claude/citations" target="_blank" rel="noopener"><img src="/assets/img/blog/4ai-engines-citation-comparison/anthropic_citations.png" alt="Anthropic Claude API Docs — Citations 공식 문서"></a>
  <figcaption>Anthropic Claude API Docs — <em>Citations</em> 공식 문서. ZDR(Zero Data Retention) 자격, 활성 모델 지원 범위, Python·cURL·CLI·Java 예시까지 같은 페이지에 있어요.</figcaption>
</figure>

## 네 엔진을 비교하면 인용 행태에 어떤 차이가 있나요?

**네 엔진은 <em>모두 출처 표시를 말하지만 어떤 종류의 출처를 우선 인용하느냐는 매우 다르게 갈려요.</em>** Profound · Peec AI 두 산업 측정사의 분석 결과를 겹쳐 보면 <em>각 엔진의 출처 성향</em>이 한눈에 잡힙니다.

먼저 가장 자주 인용되는 4사 비교 데이터입니다. [Profound <em>Enhanced Citation Categories</em> (2026-01-08)](https://www.tryprofound.com/blog/enhanced-citation-categories)는 출처를 **Brand · Media · Institution · Social** 네 카테고리로 분류한 결과를 발표했어요. 핵심 메시지는 한 문장으로 정리돼요 — *"Perplexity cites social at 19.4% compared to ChatGPT at 5.3%."* — **Perplexity는 Social형(Reddit · 커뮤니티) 출처 비중이 19.4%로, ChatGPT의 5.3%의 거의 4배**입니다.

<figure class="gm-infographic gm-i17">
  <h4 class="gm-i17__title">4 AI 엔진의 출처 카테고리 분포</h4>
  <p class="gm-i17__subtitle">Brand · Media · Institution · Social — 같은 답변에 어떤 종류의 출처가 들어가는지가 엔진마다 달라요 (Profound 측정사 발표 기준)</p>
  <div class="gm-i17__chart">
    <div class="gm-i17__row gm-i17__row--chatgpt">
      <span class="gm-i17__brand">CHATGPT</span>
      <div class="gm-i17__stacked">
        <div class="gm-i17__seg gm-i17__seg--brand" style="width:54%">54</div>
        <div class="gm-i17__seg gm-i17__seg--media" style="width:25%">25</div>
        <div class="gm-i17__seg gm-i17__seg--institution" style="width:15%">15</div>
        <div class="gm-i17__seg gm-i17__seg--social" style="width:5%">5</div>
      </div>
    </div>
    <div class="gm-i17__row gm-i17__row--gemini">
      <span class="gm-i17__brand">GEMINI</span>
      <div class="gm-i17__stacked">
        <div class="gm-i17__seg gm-i17__seg--brand" style="width:73%">73</div>
        <div class="gm-i17__seg gm-i17__seg--media" style="width:18%">18</div>
        <div class="gm-i17__seg gm-i17__seg--institution" style="width:6%">6</div>
        <div class="gm-i17__seg gm-i17__seg--social" style="width:2%">2</div>
      </div>
    </div>
    <div class="gm-i17__row gm-i17__row--perplexity">
      <span class="gm-i17__brand">PERPLEXITY</span>
      <div class="gm-i17__stacked">
        <div class="gm-i17__seg gm-i17__seg--brand" style="width:57%">57</div>
        <div class="gm-i17__seg gm-i17__seg--media" style="width:19%">19</div>
        <div class="gm-i17__seg gm-i17__seg--institution" style="width:5%">5</div>
        <div class="gm-i17__seg gm-i17__seg--social" style="width:19%">19</div>
      </div>
    </div>
    <div class="gm-i17__row gm-i17__row--claude">
      <span class="gm-i17__brand">CLAUDE</span>
      <div class="gm-i17__stacked">
        <div class="gm-i17__seg gm-i17__seg--brand" style="width:66%">66</div>
        <div class="gm-i17__seg gm-i17__seg--media" style="width:24%">24</div>
        <div class="gm-i17__seg gm-i17__seg--institution" style="width:7%">7</div>
        <div class="gm-i17__seg gm-i17__seg--social" style="width:3%">3</div>
      </div>
    </div>
  </div>
  <div class="gm-i17__legend">
    <span class="gm-i17__legend-item"><span class="gm-i17__legend-dot gm-i17__legend-dot--brand"></span> Brand · 광고주·사업자</span>
    <span class="gm-i17__legend-item"><span class="gm-i17__legend-dot gm-i17__legend-dot--media"></span> Media · 매체</span>
    <span class="gm-i17__legend-item"><span class="gm-i17__legend-dot gm-i17__legend-dot--institution"></span> Institution · 위키·공공</span>
    <span class="gm-i17__legend-item"><span class="gm-i17__legend-dot gm-i17__legend-dot--social"></span> Social · 커뮤니티·UGC</span>
  </div>
  <p class="gm-i17__highlight"><strong>핵심:</strong> Perplexity는 Social 19.4%로 ChatGPT 5.3%의 거의 4배. Gemini는 Brand 73%로 가장 높음. Claude는 Brand+Media 혼합형.</p>
  <p class="gm-i17__source">출처: <a href="https://www.tryprofound.com/blog/enhanced-citation-categories" target="_blank" rel="noopener">Profound — Who Shapes AI Answers? Enhanced Citation Categories</a> (2026-01-08, 27M citations 분석). 정확한 4-bucket 수치는 측정사 발표 기준.</p>
</figure>

각 엔진별 최다 인용 도메인도 [Profound <em>AI Platform Citation Patterns</em> (2025-06-04)](https://www.tryprofound.com/blog/ai-platform-citation-patterns)에서 확인돼요. *"Wikipedia serves as ChatGPT's most cited source at 7.8% of total citations. Reddit emerges as the leading source for both Google AI Overviews (2.2%) and Perplexity (6.6%)."* — **ChatGPT 1위는 Wikipedia(7.8%), Perplexity 1위는 Reddit(6.6%), Google AI Overviews 1위도 Reddit(2.2%)**. 한 가지 추가로 짚을 점은 <em>Wikipedia 7.8%</em>가 <em>전체 인용의 비율</em>이고, <em>상위 10개 출처 중에서는 47.9%</em>로 더 압도적이라는 사실 — ChatGPT가 <em>Wikipedia에 얼마나 의존하는지</em>가 두 지표 모두에서 드러나요.

전체 풍경은 [Peec AI 3천만 소스 분석 (2026-03-31)](https://peec.ai/blog/top-domains-cited-by-ai-search-analysis-based-on-30m-sources)이 가장 넓게 잡습니다. 여기서 _UGC_는 _User-Generated Content_, 즉 _사용자가 직접 올린 콘텐츠(Reddit · YouTube 댓글 · 카페·블로그 글 등)_를 가리켜요.

<figure class="author-figure">
  <a href="https://peec.ai/blog/top-domains-cited-by-ai-search-analysis-based-on-30m-sources" target="_blank" rel="noopener"><img src="/assets/img/blog/4ai-engines-citation-comparison/peec_top_domains.png" alt="Peec AI — Top domains cited by AI search: Analysis based on 30M sources (2026-03-31)"></a>
  <figcaption>Peec AI — <em>Top domains cited by AI search: Analysis based on 30M sources</em> (2026-03-31, Tomek Rudzki). Reddit·YouTube·LinkedIn·Wikipedia 4대 도메인이 페이지 상단 시각화에 함께 보입니다.</figcaption>
</figure>


<figure class="gm-infographic gm-i16">
  <h4 class="gm-i16__title">AI 검색에서 가장 많이 인용되는 도메인 (Peec 3천만 소스 분석)</h4>
  <p class="gm-i16__subtitle">전체 상위 10개 + 플랫폼별 상위 5개 — UGC · 권위 매체 · 비교·평판형의 혼합 패턴</p>
  <div class="gm-i16__top">
    <span class="gm-i16__top-label">TOP 10 OVERALL (ChatGPT · Gemini · Perplexity · AI Mode · AI Overviews 합산)</span>
    <div class="gm-i16__top-row">
      <span class="gm-i16__chip"><span class="gm-i16__chip-rank">1</span> Reddit</span>
      <span class="gm-i16__chip"><span class="gm-i16__chip-rank">2</span> YouTube</span>
      <span class="gm-i16__chip"><span class="gm-i16__chip-rank">3</span> LinkedIn</span>
      <span class="gm-i16__chip"><span class="gm-i16__chip-rank">4</span> Wikipedia</span>
      <span class="gm-i16__chip"><span class="gm-i16__chip-rank">5</span> Forbes</span>
      <span class="gm-i16__chip"><span class="gm-i16__chip-rank">6</span> G2</span>
      <span class="gm-i16__chip"><span class="gm-i16__chip-rank">7</span> Yelp</span>
      <span class="gm-i16__chip"><span class="gm-i16__chip-rank">8</span> Facebook</span>
      <span class="gm-i16__chip"><span class="gm-i16__chip-rank">9</span> Medium</span>
      <span class="gm-i16__chip"><span class="gm-i16__chip-rank">10</span> TechRadar</span>
    </div>
  </div>
  <div class="gm-i16__cols">
    <article class="gm-i16__col gm-i16__col--chatgpt">
      <header class="gm-i16__col-head"><span class="gm-i16__col-name">CHATGPT</span></header>
      <ol class="gm-i16__list">
        <li class="gm-i16__item"><span class="gm-i16__item-rank">1</span> Wikipedia</li>
        <li class="gm-i16__item"><span class="gm-i16__item-rank">2</span> Reddit</li>
        <li class="gm-i16__item"><span class="gm-i16__item-rank">3</span> Forbes</li>
        <li class="gm-i16__item"><span class="gm-i16__item-rank">4</span> TechRadar</li>
        <li class="gm-i16__item"><span class="gm-i16__item-rank">5</span> LinkedIn</li>
      </ol>
    </article>
    <article class="gm-i16__col gm-i16__col--gemini">
      <header class="gm-i16__col-head"><span class="gm-i16__col-name">GEMINI</span></header>
      <ol class="gm-i16__list">
        <li class="gm-i16__item"><span class="gm-i16__item-rank">1</span> Reddit</li>
        <li class="gm-i16__item"><span class="gm-i16__item-rank">2</span> YouTube</li>
        <li class="gm-i16__item"><span class="gm-i16__item-rank">3</span> Wikipedia</li>
        <li class="gm-i16__item"><span class="gm-i16__item-rank">4</span> Medium</li>
        <li class="gm-i16__item"><span class="gm-i16__item-rank">5</span> PCMag / Forbes</li>
      </ol>
    </article>
    <article class="gm-i16__col gm-i16__col--perplexity">
      <header class="gm-i16__col-head"><span class="gm-i16__col-name">PERPLEXITY</span></header>
      <ol class="gm-i16__list">
        <li class="gm-i16__item"><span class="gm-i16__item-rank">1</span> Reddit</li>
        <li class="gm-i16__item"><span class="gm-i16__item-rank">2</span> YouTube</li>
        <li class="gm-i16__item"><span class="gm-i16__item-rank">3</span> LinkedIn</li>
        <li class="gm-i16__item"><span class="gm-i16__item-rank">4</span> Wikipedia</li>
        <li class="gm-i16__item"><span class="gm-i16__item-rank">5</span> G2</li>
      </ol>
    </article>
  </div>
  <p class="gm-i16__source">출처: <a href="https://peec.ai/blog/top-domains-cited-by-ai-search-analysis-based-on-30m-sources" target="_blank" rel="noopener">Peec AI — Top domains cited by AI search</a> (2026-03-31, 30M sources). Claude 별도 집계는 Peec 데이터 범위 외.</p>
</figure>

<div class="callout callout--note">
  <div class="callout-title">⚖️ 네 엔진 출처 성향 한 줄 비교</div>
  <div class="callout-body">
    <p><strong>ChatGPT (Brand 54% · Institution 15%):</strong> Wikipedia 최다(7.8%) — 백과·기관형 출처를 가장 신뢰.</p>
    <p><strong>Perplexity (Social 19.4%):</strong> Reddit 최다(6.6%) — 커뮤니티·UGC형 출처 비중이 ChatGPT의 4배.</p>
    <p><strong>Gemini (Brand 73%):</strong> 4 엔진 중 광고주·사업자 사이트 비중이 가장 큼.</p>
    <p><strong>Claude (Brand 66% + Media 24%):</strong> 광고주 + 권위 매체 혼합형, 토큰 회계가 가장 정교.</p>
  </div>
</div>

마지막으로 학술 단위의 이야기도 짚을게요. [ACL NAACL 2025 ReClaim 논문](https://aclanthology.org/2025.findings-naacl.55/)은 *"ReClaim provides sentence-level citations in long-form question-answering tasks."* — **문장 단위 인용**이 <em>passage-level(단락 단위) · paragraph-level(문단 단위)</em> 인용보다 검증 가능성이 높고, <em>90% citation accuracy</em>를 달성했다고 보고했어요. 이건 시리즈 3편 [<em>청크 단위 처방</em>](/blog/chunk-prescription/)의 결론(<em>AI는 청크 단위로 인용한다</em>)과 정확히 같은 방향이에요. 즉 <em>4 엔진 모두</em> 학술적으로도 <em>작은 단위의 검증 가능한 청크</em>를 인용 대상으로 삼는다는 합의가 있어요.

마케터에게 이 분석의 의미를 한 줄로 모으면 이렇습니다 — **같은 페이지를 만들어도 어떤 엔진에서 인용될지는 엔진마다 다르고, 그 차이는 <em>우리 페이지가 어떤 카테고리(Brand · Media · Institution · Social)에 속하는지</em>에 크게 좌우돼요.** 자사몰 페이지(Brand)에 집중한 브랜드는 Gemini에 강하고, 권위 매체 PR을 잘 쌓은 브랜드는 ChatGPT에 강하고, Reddit·커뮤니티에 노출 잘 되는 브랜드는 Perplexity에 강합니다.

## 한국 시장에서 우리 브랜드는 어떤 엔진을 우선 측정해야 하나요?

**한국에서 우선순위는 분명해요 — ChatGPT가 압도적 1위입니다.** 와이즈앱이 2026년 2월 기준으로 측정한 한국 4사 사용자 수가 결정적인 증거예요.

<figure class="gm-infographic gm-i18">
  <h4 class="gm-i18__title">한국 생성형 AI 앱 사용자 수 (2026-02 기준)</h4>
  <p class="gm-i18__subtitle">와이즈앱 측정 — 한국 스마트폰 이용자 중 생성형 AI 앱 사용 비율 48.7%(2,494만 명) 안에서의 분포</p>
  <div class="gm-i18__bars">
    <div class="gm-i18__bar-row gm-i18__bar-row--chatgpt">
      <span class="gm-i18__bar-brand">CHATGPT</span>
      <div class="gm-i18__bar-track"><div class="gm-i18__bar-fill" style="width:100%"></div></div>
      <span class="gm-i18__bar-value">2,293만</span>
    </div>
    <div class="gm-i18__bar-row gm-i18__bar-row--grok">
      <span class="gm-i18__bar-brand">GROK AI</span>
      <div class="gm-i18__bar-track"><div class="gm-i18__bar-fill" style="width:6.7%"></div></div>
      <span class="gm-i18__bar-value">153만</span>
    </div>
    <div class="gm-i18__bar-row gm-i18__bar-row--perplexity">
      <span class="gm-i18__bar-brand">PERPLEXITY</span>
      <div class="gm-i18__bar-track"><div class="gm-i18__bar-fill" style="width:6.6%"></div></div>
      <span class="gm-i18__bar-value">152만</span>
    </div>
    <div class="gm-i18__bar-row gm-i18__bar-row--wrtn">
      <span class="gm-i18__bar-brand">뤼튼</span>
      <div class="gm-i18__bar-track"><div class="gm-i18__bar-fill" style="width:5.9%"></div></div>
      <span class="gm-i18__bar-value">135만</span>
    </div>
    <div class="gm-i18__bar-row gm-i18__bar-row--gemini">
      <span class="gm-i18__bar-brand">GEMINI</span>
      <div class="gm-i18__bar-track"><div class="gm-i18__bar-fill" style="width:1.9%"></div></div>
      <span class="gm-i18__bar-value">44만</span>
    </div>
  </div>
  <p class="gm-i18__note"><strong>주의:</strong> Claude는 별도 집계가 미공개 (단 2026-03 와이즈앱 보도에서 <strong>+134만 명 증가</strong>로 확인). Gemini는 Google 앱 내부 사용 제외 기준이라 실제 도달은 더 넓을 가능성. 1인당 월평균 사용시간 <strong>2시간 15분</strong>(+41%), 평균 실행 횟수 <strong>67.4회</strong>(+64%) — 한국인의 AI 앱 사용 강도가 빠르게 깊어지고 있어요.</p>
  <p class="gm-i18__source">출처: <a href="https://www.wiseapp.co.kr/insight/detail/955/2026-generative-ai-app-trend-chatgpt-grok-perplexity-claude-gemini" target="_blank" rel="noopener">와이즈앱·리테일 — 2026 생성형 AI 앱 트렌드 (955호)</a> · 연합뉴스 2026-03-25 교차검증.</p>
</figure>

ChatGPT 2,293만 명이라는 숫자는 <em>2위 Grok 153만 명</em>의 15배. <em>Perplexity 152만 + 뤼튼 135만 + Gemini 44만을 모두 합쳐도 480만 명</em>으로, 여전히 ChatGPT의 1/5에 못 미쳐요. 한국 마케터가 <em>AI 답변 엔진 가시성</em>을 측정·최적화한다면 **ChatGPT가 1순위, 그것도 압도적 1순위**입니다.

그런데 그게 끝이 아니에요. 앞서 본 <em>4 엔진의 출처 카테고리 분포</em>가 결정적입니다. **ChatGPT에서 잘 인용되는 페이지의 특성(Brand 54% · Media 25% · Institution 15% · Social 5%)이 Perplexity의 특성(57/19/5/19)과 <em>정확히 같지 않아요</em>.** 즉 <em>ChatGPT에 잘 인용되는 페이지가 Perplexity에서도 같은 강도로 인용된다는 보장이 없어요</em>.

특히 <em>Social(Reddit · 커뮤니티 · 평판형)</em> 카테고리의 비중 차이(ChatGPT 5% vs Perplexity 19%)는 <em>브랜드 운영 방식 자체</em>에 영향을 줘요. ChatGPT만 최적화한 마케팅 팀은 <em>Reddit · 디시인사이드 · 클리앙</em> 같은 한국 UGC 플랫폼에서의 평판을 챙기지 않을 수 있고, 그러면 <em>Perplexity 답변에 들어갈 가능성이 줄어들어요</em>.

여기에 한 가지 더 — [Google Korea Blog <em>검색어로 돌아본 대한민국의 2025년</em> (2025-12-04)](https://blog.google/intl/ko-kr/products/explore-get-answers/year-in-search-2025-kr/)이 짚은 한국 검색 행태 변화도 함께 봐야 해요. *"구글의 'AI 개요(AI Overview)'에 이어 도입된 'AI 모드(AI Mode)'는 이용자들이 가장 자연스럽다고 느끼는 언어로 복잡한 질문을 던지고, 꼬리에 꼬리를 무는 후속 질문을 통해 대화하듯 답을 찾아가는 새로운 경험을 제공합니다."* — 미국 기준으로는 AI Mode 도입 후 <em>탐색형 질문 +70%</em>, <em>자연어 실행형 +25%</em> 증가가 관찰됐다고도 짚었어요. 즉 **Google SERP에서의 AI 답변(Gemini 기반)도 한국에서 실사용 단계**예요.

그래서 **한국 마케터의 답변 엔진 측정 우선순위**는 이렇게 정리할 수 있어요.

1. **ChatGPT 우선 측정** — 한국 사용자 절대 다수 (2,293만 명)
2. **Perplexity · Grok 함께 측정** — 한국 2~3위, 그러나 ChatGPT와 <em>다른 출처 카테고리</em> 선호
3. **Gemini는 Google SERP의 AI Overview · AI Mode를 통해 <em>간접 측정</em>** — 한국어 SERP에서 이미 노출 중
4. **Claude는 글로벌·영문 콘텐츠가 있다면 우선 추가** — 한국 단독 사용자 수는 작지만 <em>깊이 있는 분석</em>에 강해 영문 콘텐츠 보유 시 우선순위 상승
5. **4사 동시 측정으로 우선순위 검증** — <em>같은 질의를 4사에 던져 인용 도메인 차이</em>를 직접 확인해야 <em>ChatGPT 1위 가정</em>이 우리 산업·키워드에서도 유효한지 확정 가능

직접 적용 결과가 궁금하시면 [30초 무료진단](https://app.nipal-ai.com/)으로 <em>ChatGPT · Gemini · Perplexity 세 모델에서 우리 브랜드가 동시에 어떻게 언급되는지</em> 측정하실 수 있어요. 질문 3개씩 답변 9개와 AI 노출 점수, 3단계 처방을 30초 안에 보여드립니다.

다음 글에서는 한 발 더 들어가서, **[Schema.org & llms.txt 완전 가이드](/blog/schema-llms-txt-guide/)** — AI 크롤러가 우리 브랜드 엔티티와 청크 구조를 <em>기계적으로 읽을 수 있게</em> 만드는 마크업 패턴을 정리했어요. 4 엔진 모두에서 <em>구조화 데이터</em>가 인용 적격성을 끌어올리는 공통 레버라는 점이 6편의 출발점이고, Google이 직접 <em>generative AI 검색에 특별한 schema.org 마크업은 없다</em>고 공식 명시한 시대에 Schema·llms.txt를 <em>왜·어떻게</em> 쓸지 정직하게 풀고 변호사·세무사 같은 전문직 vertical 패턴까지 짚었어요.

같은 질문, 다른 답변 — <em>4 엔진은 각자 다른 출처 철학을 가진 서로 다른 답변 엔진</em>이에요. 우리 브랜드가 <em>어느 엔진에서 어떤 출처로 인용되는지</em>가 마케팅의 새 단위입니다.

<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "FAQPage",
      "@id": "https://nipal-ai.com/blog/4ai-engines-citation-comparison/#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "ChatGPT는 어떻게 답변하고 출처를 보여주나요?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "ChatGPT는 질문을 받으면 필요할 때 웹을 검색해서 답변에 인라인 인용(inline citations)과 Sources 패널을 함께 붙이는 방식입니다. OpenAI의 ChatGPT Search 공식 문서는 'ChatGPT responses that use search will contain inline citations'라고 명시합니다. UI는 인라인 인용 마크, 호버 시 출처 정보, Sources 버튼으로 펼치는 패널 세 층으로 작동합니다. 2024년 10월 출시 시 AP·Reuters·Financial Times·Time 등 14개 출판사와 제휴를 발표했고, 2025년 10월에는 ChatGPT Atlas 브라우저로 확장됐습니다. 최다 인용 도메인은 Wikipedia(전체 인용의 7.8%, 상위 10 출처 중 47.9%)입니다."
          }
        },
        {
          "@type": "Question",
          "name": "Perplexity는 어떻게 답변하고 어떻게 인용하나요?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Perplexity는 모든 답변에 출처 링크를 기본 전제로 붙이는 답변 엔진(answer engine)입니다. 공식 문서는 'Perplexity serves as an answer engine by searching the web, identifying trusted sources, and synthesizing information'라고 정의합니다. Pro Search는 'Every answer includes direct links to the original sources' 원칙으로 수십 개 출처를 동시 활용합니다. Standard Search는 surface-level 1~2 sources, Pro Search는 comprehensive dozens of sources로 차이가 분명합니다. 최다 인용 도메인은 Reddit(6.6%)으로 ChatGPT와 정반대로 커뮤니티·UGC형 출처를 가장 신뢰합니다. Social 카테고리 비중은 19.4%로 ChatGPT의 5.3%의 거의 4배입니다."
          }
        },
        {
          "@type": "Question",
          "name": "Gemini는 어떻게 답변하고 Google Search와 어떻게 연결되나요?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Gemini는 Google Search를 직접 호출해서 그 결과를 인용하는 grounding 메커니즘으로 답변합니다. Google AI for Developers의 Grounding with Google Search 문서는 'Grounding with Google Search connects the Gemini model to real-time web content'라고 명시합니다. google_search 도구를 켜면 모델이 검색·처리·인용을 자동 수행하고, 응답에 groundingMetadata·groundingChunks·groundingSupports 세 메타데이터 필드가 포함됩니다. 2025년 5월 발표에서 Gemini 2.5의 맞춤형 버전이 Google Search의 AI Mode와 AI Overviews에 직접 투입됐습니다. Brand 카테고리 비중이 73%로 4 엔진 중 가장 높습니다."
          }
        },
        {
          "@type": "Question",
          "name": "Claude는 어떻게 답변하고 어떻게 인용하나요?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Claude는 문서·검색 결과 블록에 대한 정교한 citation pointers와 토큰 비용·구조 정책을 가장 명시적으로 분리해 설명하는 엔진입니다. Anthropic Citations 문서는 cited_text 필드가 출력 토큰과 다음 턴 입력 토큰 모두에 포함되지 않는다고 명시합니다. Citations와 Structured Outputs는 함께 쓸 수 없고 동시 활성화 시 400 에러가 발생합니다. Web search tool은 1,000 검색당 $10로 별도 과금되고, 최신 버전 web_search_20260209은 code execution tool을 함께 활성화하면 dynamic filtering도 가능합니다. 출처 성향은 Brand 66% + Media 24%로 혼합형입니다."
          }
        },
        {
          "@type": "Question",
          "name": "네 엔진을 비교하면 인용 행태에 어떤 차이가 있나요?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Profound Enhanced Citation Categories(2026-01-08, 27M citations)는 출처를 Brand/Media/Institution/Social로 분류한 결과, ChatGPT 54/25/15/5, Gemini 73/18/6/2, Perplexity 57/19/5/19, Claude 66/24/7/3 분포를 보고했습니다. 가장 큰 차이는 Perplexity의 Social 19.4%로 ChatGPT 5.3%의 거의 4배입니다. Peec AI 3천만 소스 분석에서 AI 검색 전체 상위 10 도메인은 Reddit·YouTube·LinkedIn·Wikipedia·Forbes·G2·Yelp·Facebook·Medium·TechRadar 순입니다. 학술적으로는 ACL NAACL 2025 ReClaim 논문이 sentence-level citation이 90% accuracy로 가장 신뢰 가능한 단위라고 보고했고, 이는 청크 단위 처방의 결론과 정확히 같은 방향입니다."
          }
        },
        {
          "@type": "Question",
          "name": "한국 시장에서 우리 브랜드는 어떤 엔진을 우선 측정해야 하나요?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "한국에서 우선순위는 분명합니다 — ChatGPT가 압도적 1위입니다. 와이즈앱 2026년 2월 측정에서 한국 사용자 수는 ChatGPT 2,293만, Grok 153만, Perplexity 152만, 뤼튼 135만, Gemini 44만 명이었습니다. 1인당 월평균 사용시간 2시간 15분(+41%), 평균 실행 횟수 67.4회(+64%). 측정 우선순위는 (1) ChatGPT 우선, (2) Perplexity·Grok 함께 — 다른 출처 카테고리 선호, (3) Gemini는 Google SERP의 AI Overview·AI Mode를 통해 간접 측정, (4) Claude는 글로벌·영문 콘텐츠 시 우선 추가, (5) 4사 동시 측정으로 우선순위 검증입니다."
          }
        }
      ]
    },
    {
      "@type": "HowTo",
      "@id": "https://nipal-ai.com/blog/4ai-engines-citation-comparison/#howto",
      "name": "한국 마케터의 4 AI 답변 엔진 측정 우선순위 5단계",
      "description": "ChatGPT·Perplexity·Gemini·Claude 네 엔진을 어떤 순서로 측정·최적화할지 결정하는 5단계 가이드",
      "step": [
        {"@type": "HowToStep", "position": 1, "name": "ChatGPT 우선 측정", "text": "한국 사용자 2,293만 명으로 압도적 1위. 한국 답변 엔진 가시성의 가장 큰 기반."},
        {"@type": "HowToStep", "position": 2, "name": "Perplexity·Grok 함께 측정", "text": "한국 2~3위(각 152만/153만 명). ChatGPT와 다른 출처 카테고리(Social 19.4%)를 선호하므로 ChatGPT만 최적화하면 누락 위험."},
        {"@type": "HowToStep", "position": 3, "name": "Gemini는 Google SERP 통해 간접 측정", "text": "Gemini 2.5의 맞춤형 버전이 Google AI Overview·AI Mode에 투입됐으므로 한국어 SERP에서 이미 노출 중."},
        {"@type": "HowToStep", "position": 4, "name": "Claude는 글로벌·영문 콘텐츠 시 우선 추가", "text": "한국 단독 사용자는 작지만 깊이 있는 분석과 토큰 회계가 정교해 영문 콘텐츠 보유 브랜드는 우선순위 상승."},
        {"@type": "HowToStep", "position": 5, "name": "4사 동시 측정으로 우선순위 검증", "text": "같은 질의를 4사에 던져 인용 도메인 차이를 직접 확인해야 ChatGPT 1위 가정이 우리 산업·키워드에서도 유효한지 확정 가능."}
      ]
    },
    {
      "@type": "BlogPosting",
      "@id": "https://nipal-ai.com/blog/4ai-engines-citation-comparison/#post",
      "headline": "4 AI 답변 엔진 비교 — ChatGPT · Perplexity · Gemini · Claude는 어떤 콘텐츠를 인용하나",
      "description": "각 사 공식 문서(OpenAI · Perplexity · Google · Anthropic) + Profound · Peec AI · ACL 학술 + 와이즈앱 한국 4사 사용자 수를 묶어 — 같은 질문에 네 엔진이 어떻게 다르게 답하고 어디부터 측정해야 하는지 정리합니다.",
      "datePublished": "2026-05-18T10:00:00+09:00",
      "dateModified": "2026-05-15T15:00:00+09:00",
      "author": {"@type": "Organization", "name": "NIPAL AI", "url": "https://nipal-ai.com/"},
      "publisher": {"@type": "Organization", "name": "NIPAL AI", "url": "https://nipal-ai.com/", "logo": {"@type": "ImageObject", "url": "https://nipal-ai.com/assets/img/logo.png"}},
      "image": "https://nipal-ai.com/assets/img/blog/4ai-engines-citation-comparison/og.png",
      "mainEntityOfPage": "https://nipal-ai.com/blog/4ai-engines-citation-comparison/",
      "about": [
        {"@type": "Thing", "name": "Generative Engine Optimization", "sameAs": "https://en.wikipedia.org/wiki/Generative_engine_optimization"},
        {"@type": "Thing", "name": "Answer Engine Optimization"},
        {"@type": "Thing", "name": "AI Citations"}
      ],
      "mentions": [
        {"@type": "Thing", "name": "ChatGPT"},
        {"@type": "Thing", "name": "Perplexity"},
        {"@type": "Thing", "name": "Gemini"},
        {"@type": "Thing", "name": "Claude"},
        {"@type": "Organization", "name": "OpenAI", "sameAs": "https://openai.com/"},
        {"@type": "Organization", "name": "Anthropic", "sameAs": "https://www.anthropic.com/"},
        {"@type": "Organization", "name": "Google", "sameAs": "https://www.google.com/"},
        {"@type": "Organization", "name": "Perplexity AI", "sameAs": "https://www.perplexity.ai/"},
        {"@type": "Organization", "name": "Profound", "sameAs": "https://www.tryprofound.com/"},
        {"@type": "Organization", "name": "Peec AI", "sameAs": "https://peec.ai/"},
        {"@type": "Organization", "name": "와이즈앱·리테일", "sameAs": "https://www.wiseapp.co.kr/"}
      ],
      "speakable": {
        "@type": "SpeakableSpecification",
        "cssSelector": [".post-summary", ".post-title", ".post-lede"]
      }
    }
  ]
}
</script>
