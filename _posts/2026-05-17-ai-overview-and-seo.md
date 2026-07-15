---
title: "AI Overview · AI Mode 등장 후 SEO는 어디로 가는가 — 6가지 변화와 우리 브랜드 조정 전략"
description: "Ahrefs·Semrush·Seer·BrightEdge 4개 측정사 데이터, Google·NAVER 공식 가이드, SISTRIX 100대 분석을 묶어 — AI 검색 시대의 SEO가 실제로 어떻게 바뀌고 있는지, 오늘부터 무엇을 조정해야 하는지 정리합니다."
date: 2026-05-17 10:00:00 +0900
last_modified_at: 2026-05-15 12:00:00 +0900
author_id: jace
category: 트렌드
tags: [SEO, AEO, GEO, AI-Overview, AI-Mode, query-fan-out, search]
image: /assets/img/blog/ai-overview-and-seo/og.png
summary: |
  - AI Overview는 **검색 결과 위에 직접 답을 합성**하는 새 레이어예요. 2024-05 정식 출시 후 **10억 명 이상**이 사용 중입니다.
  - **CTR 압력은 분명**합니다 — Ahrefs는 1위 결과 CTR이 **34.5%** 낮아진다고 보고했고, BrightEdge는 <em>노출 +49%, CTR -30%</em> 라고 짚었어요.
  - 다만 **AIO에 인용된 페이지**는 손실이 절반 가까이 작아져요 — Seer 측정에서 <em>인용 시 organic clicks +35%, paid clicks +91%</em>.
  - 인용되는 콘텐츠의 공통점은 <em>주제·예산이 아니라 구조</em> — SISTRIX 100대 분석은 <em>"databases of responses"</em> 라는 한 문장으로 정리했어요.
  - SEO 기본기는 살아 있되 **측정·인용 단위가 페이지에서 응답 블록으로 이동**합니다. 한국 시장은 <em>네이버 AI탭</em> + <em>AI 앱 대중화</em>(48.7%)가 먼저 읽혀요.
---

네이버 블로그를 운영하는 마케터라면 최근 1~2년 사이 <em>방문자 수가 눈에 띄게 줄어드는</em> 경험을 했을 거예요. 검색량 자체가 줄어든 게 아니라, 같은 키워드를 검색해도 <em>AI가 답변을 SERP(검색 결과 페이지) 위에서 직접 보여주기 시작한</em> 변화입니다. 네이버는 2026년 4월 AI탭 베타를 출시했고, 구글은 2024년 5월부터 AI Overview를 정식 노출하고 있어요.

같은 흐름은 자사몰 트래픽에서도 보입니다. 한 K뷰티 자사몰의 검색 트래픽이 6개월 사이 30% 줄었는데, 같은 6개월 동안 <em>AI Overview에 인용된</em> 페이지는 오히려 클릭률이 35% 더 높았다는 보고도 나왔어요.

같은 검색 결과에서 <em>어떤 페이지는 답변에 포함되고, 어떤 페이지는 클릭조차 잃는다</em> — 2024년 5월 AI Overview 정식 출시 이후의 새 풍경이에요. <em>SEO는 죽었는가, 진화하는가</em> 논쟁의 핵심도 여기에 있습니다.

이 글에서는 산업 표준 측정사 4곳(Ahrefs · Semrush · Seer · BrightEdge)의 데이터, Google 공식 가이드, SISTRIX 100대 인용 분석, 그리고 한국 시장에서 시작된 네이버 AI탭까지 묶어서 — AI Overview · AI Mode 시대의 SEO가 실제로 어떻게 바뀌고 있는지, 그리고 우리 브랜드는 오늘부터 무엇을 조정해야 하는지 6가지로 정리합니다.

<style>
/* === NIPAL AI infographics — AI Overview & SEO (i11~i14) === */
.gm-infographic { margin: 40px 0; font-family: 'Pretendard', 'Apple SD Gothic Neo', system-ui, sans-serif; color: #111216; }
.gm-infographic *, .gm-infographic *::before, .gm-infographic *::after { box-sizing: border-box; }

/* --- i11 : AI Overview · AI Mode · 일반 SERP 비교 --- */
.gm-i11 { background: #FFFFFF; border: 1px solid #e4e4e5; border-radius: 16px; padding: 32px 28px; box-shadow: 0 4px 16px rgba(17,18,22,0.06); }
.gm-i11__title { font-size: 20px; font-weight: 700; color: #111216; text-align: center; margin: 0 0 4px; }
.gm-i11__subtitle { font-size: 13px; color: #6d7079; text-align: center; margin: 0 0 28px; }
.gm-i11__cols { display: grid; grid-template-columns: repeat(3, 1fr); gap: 14px; }
.gm-i11__col { background: #f7f6f3; border: 1px solid #e4e4e5; border-radius: 12px; padding: 20px 16px; display: flex; flex-direction: column; gap: 10px; }
.gm-i11__col--ai { background: linear-gradient(180deg, #f0ecfe 0%, #e5ddfd 100%); border-color: #9781f7; box-shadow: 0 6px 18px rgba(112,82,243,0.15); }
.gm-i11__col--mode { background: linear-gradient(180deg, #d9d2fc 0%, #c4b3fa 100%); border-color: #7052f3; box-shadow: 0 8px 22px rgba(112,82,243,0.22); }
.gm-i11__tag { display: inline-block; padding: 4px 11px; border-radius: 999px; font: 700 10px/1 'JetBrains Mono','Consolas',monospace; letter-spacing: 0.6px; align-self: flex-start; }
.gm-i11__col--classic .gm-i11__tag { background: #FFFFFF; color: #6d7079; border: 1px solid #e4e4e5; }
.gm-i11__col--ai .gm-i11__tag { background: #FFFFFF; color: #5b40d9; }
.gm-i11__col--mode .gm-i11__tag { background: #FFFFFF; color: #5b40d9; }
.gm-i11__name { font-size: 15px; font-weight: 800; color: #111216; line-height: 1.3; margin: 4px 0 0; }
.gm-i11__output { font-size: 12.5px; color: #202228; line-height: 1.6; padding: 10px 12px; background: rgba(255,255,255,0.9); border-radius: 8px; }
.gm-i11__output strong { color: #5b40d9; font-weight: 700; }
.gm-i11__col--classic .gm-i11__output strong { color: #202228; }
.gm-i11__features { margin: 0; padding: 0 0 0 14px; font-size: 11.5px; color: #6d7079; line-height: 1.7; }
.gm-i11__source { margin: 18px 0 0; padding-top: 14px; border-top: 1px solid #e4e4e5; font-size: 11px; color: #6d7079; font-style: italic; text-align: center; }
.gm-i11__source a { color: inherit; text-decoration: underline; }
.gm-i11__icon { display: inline-flex; align-items: center; justify-content: center; width: 56px; height: 56px; border-radius: 14px; background: rgba(255,255,255,0.95); border: 1px solid rgba(112,82,243,0.18); color: #5b40d9; flex: 0 0 auto; align-self: center; margin: 4px auto 2px; }
.gm-i11__icon svg { width: 28px; height: 28px; display: block; }
.gm-i11__col--classic .gm-i11__icon { color: #6d7079; border-color: #e4e4e5; background: #FFFFFF; }
.gm-i11__col--mode .gm-i11__icon { background: rgba(255,255,255,0.95); border-color: rgba(91,64,217,0.35); }
@media (max-width: 760px) { .gm-i11__cols { grid-template-columns: 1fr; } }

/* --- i12 : 4개 측정사 비교 카드 --- */
.gm-i12 { background: #FFFFFF; border: 1px solid #e4e4e5; border-radius: 16px; padding: 32px 28px; box-shadow: 0 4px 16px rgba(17,18,22,0.06); }
.gm-i12__title { font-size: 20px; font-weight: 700; color: #111216; text-align: center; margin: 0 0 4px; }
.gm-i12__subtitle { font-size: 13px; color: #6d7079; text-align: center; margin: 0 0 28px; }
.gm-i12__grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 12px; }
.gm-i12__card { background: #FFFFFF; border: 1.5px solid #e4e4e5; border-radius: 12px; padding: 18px 14px; display: flex; flex-direction: column; gap: 8px; transition: transform 0.18s, box-shadow 0.18s; }
.gm-i12__card:hover { transform: translateY(-2px); box-shadow: 0 8px 20px rgba(17,18,22,0.08); }
.gm-i12__card--1 { border-color: #4d57f5; }
.gm-i12__card--2 { border-color: #6d76f7; }
.gm-i12__card--3 { border-color: #7052f3; }
.gm-i12__card--4 { border-color: #9179f7; }
.gm-i12__head { display: flex; align-items: center; justify-content: space-between; gap: 6px; }
.gm-i12__brand { font: 800 12px 'JetBrains Mono','Consolas',monospace; letter-spacing: 0.5px; }
.gm-i12__year { font: 700 9px 'JetBrains Mono','Consolas',monospace; padding: 3px 8px; border-radius: 999px; background: #f7f6f3; color: #6d7079; letter-spacing: 0.4px; flex: 0 0 auto; }
.gm-i12__card--1 .gm-i12__brand { color: #4d57f5; }
.gm-i12__card--2 .gm-i12__brand { color: #6d76f7; }
.gm-i12__card--3 .gm-i12__brand { color: #7052f3; }
.gm-i12__card--4 .gm-i12__brand { color: #9179f7; }
.gm-i12__metric { font: 800 26px/1 'JetBrains Mono','Consolas',monospace; color: #111216; margin: 4px 0 2px; }
.gm-i12__metric-unit { font-size: 14px; color: #6d7079; font-weight: 600; }
.gm-i12__label { font-size: 12px; color: #202228; font-weight: 700; line-height: 1.35; }
.gm-i12__caveat { font-size: 11px; color: #6d7079; line-height: 1.5; padding-top: 8px; border-top: 1px dashed #e4e4e5; margin-top: 4px; }
.gm-i12__note { margin: 18px 0 0; padding: 14px 18px; background: linear-gradient(135deg, #ebedff 0%, #f0ecfe 100%); border-radius: 10px; font-size: 12.5px; color: #202228; line-height: 1.6; text-align: center; }
.gm-i12__note strong { color: #5b40d9; font-weight: 700; }
@media (max-width: 920px) { .gm-i12__grid { grid-template-columns: 1fr 1fr; } }
@media (max-width: 520px) { .gm-i12__grid { grid-template-columns: 1fr; } }

/* --- i13 : AI Mode TOP 도메인 분포 --- */
.gm-i13 { background: #FFFFFF; border: 1px solid #e4e4e5; border-radius: 16px; padding: 32px 28px; box-shadow: 0 4px 16px rgba(17,18,22,0.06); }
.gm-i13__title { font-size: 20px; font-weight: 700; color: #111216; text-align: center; margin: 0 0 4px; }
.gm-i13__subtitle { font-size: 13px; color: #6d7079; text-align: center; margin: 0 0 28px; }
.gm-i13__board { display: grid; grid-template-columns: 1fr 1fr; gap: 18px; }
.gm-i13__group { background: #f7f6f3; border: 1px solid #e4e4e5; border-radius: 12px; padding: 18px 18px 14px; }
.gm-i13__group--upset { background: linear-gradient(180deg, #f0ecfe 0%, #e5ddfd 100%); border-color: #9781f7; }
.gm-i13__group-title { font-size: 13px; font-weight: 800; color: #111216; margin: 0 0 4px; }
.gm-i13__group-sub { font-size: 11.5px; color: #6d7079; margin: 0 0 14px; line-height: 1.5; }
.gm-i13__group--upset .gm-i13__group-sub { color: #5b40d9; }
.gm-i13__list { margin: 0; padding: 0; list-style: none; display: flex; flex-direction: column; gap: 7px; }
.gm-i13__item { display: flex; align-items: center; gap: 10px; font-size: 13px; color: #111216; }
.gm-i13__rank { display: inline-flex; align-items: center; justify-content: center; width: 22px; height: 22px; border-radius: 50%; font: 700 10px/1 'JetBrains Mono','Consolas',monospace; color: #FFFFFF; background: linear-gradient(135deg, #6d7079 0%, #202228 100%); flex: 0 0 auto; }
.gm-i13__group--upset .gm-i13__rank { background: linear-gradient(135deg, #7052f3 0%, #5b40d9 100%); }
.gm-i13__badge { display: inline-flex; align-items: center; justify-content: center; width: 26px; height: 26px; border-radius: 6px; background: #FFFFFF; border: 1px solid #e4e4e5; padding: 3px; flex: 0 0 auto; box-shadow: 0 1px 2px rgba(17,18,22,0.04); }
.gm-i13__badge img { width: 100%; height: 100%; object-fit: contain; display: block; }
.gm-i13__domain { font-weight: 700; }
.gm-i13__note { margin: 18px 0 0; padding-top: 14px; border-top: 1px solid #e4e4e5; font-size: 11.5px; color: #6d7079; line-height: 1.6; }
.gm-i13__note strong { color: #5b40d9; font-weight: 700; }
.gm-i13__source { margin: 8px 0 0; font-size: 11px; color: #6d7079; font-style: italic; }
.gm-i13__source a { color: inherit; text-decoration: underline; }
@media (max-width: 720px) { .gm-i13__board { grid-template-columns: 1fr; } }

/* --- i14 : 5단계 SEO 조정 체크리스트 (3번 글 i9 패턴 재활용) --- */
.gm-i14 { background: #FFFFFF; border: 1px solid #e4e4e5; border-radius: 16px; padding: 32px 28px; box-shadow: 0 4px 16px rgba(17,18,22,0.06); }
.gm-i14__title { font-size: 20px; font-weight: 700; color: #111216; text-align: center; margin: 0 0 4px; }
.gm-i14__subtitle { font-size: 13px; color: #6d7079; text-align: center; margin: 0 0 18px; }
.gm-i14__total-wrap { text-align: center; margin-bottom: 18px; }
.gm-i14__total { display: inline-flex; align-items: center; gap: 8px; padding: 8px 16px; background: linear-gradient(135deg, #ebedff 0%, #f0ecfe 100%); border: 1px solid #7052f3; border-radius: 999px; font: 700 12px 'JetBrains Mono','Consolas',monospace; color: #5b40d9; }
.gm-i14__steps { display: flex; flex-direction: column; gap: 8px; }
.gm-i14__step { display: grid; grid-template-columns: 26px 36px 36px 1fr; gap: 14px; align-items: flex-start; padding: 16px 18px; background: #f7f6f3; border-radius: 12px; border: 1px solid #e4e4e5; transition: background 0.15s, border-color 0.15s; }
.gm-i14__step-icon { display: inline-flex; align-items: center; justify-content: center; width: 36px; height: 36px; border-radius: 8px; background: #FFFFFF; border: 1px solid #e4e4e5; color: #5b40d9; flex: 0 0 auto; margin-top: 2px; }
.gm-i14__step-icon svg { width: 20px; height: 20px; display: block; }
.gm-i14__step:hover .gm-i14__step-icon { border-color: #b3a0f9; }
.gm-i14__step:hover { background: #f0ecfe; border-color: #b3a0f9; }
.gm-i14__check { width: 22px; height: 22px; border: 2px solid #b3a0f9; border-radius: 6px; background: #FFFFFF; display: inline-block; flex: 0 0 auto; margin-top: 4px; }
.gm-i14__step-num { display: inline-flex; align-items: center; justify-content: center; width: 32px; height: 32px; border-radius: 50%; font: 700 12px/1 'JetBrains Mono','Consolas',monospace; color: #FFFFFF; flex: 0 0 auto; margin-top: 2px; }
.gm-i14__step:nth-child(1) .gm-i14__step-num { background: linear-gradient(135deg, #4d57f5 0%, #6d76f7 100%); }
.gm-i14__step:nth-child(2) .gm-i14__step-num { background: linear-gradient(135deg, #6d76f7 0%, #7052f3 100%); }
.gm-i14__step:nth-child(3) .gm-i14__step-num { background: linear-gradient(135deg, #7052f3 0%, #9179f7 100%); }
.gm-i14__step:nth-child(4) .gm-i14__step-num { background: linear-gradient(135deg, #9179f7 0%, #b3a0f9 100%); }
.gm-i14__step:nth-child(5) .gm-i14__step-num { background: linear-gradient(135deg, #b3a0f9 0%, #cfc2fb 100%); }
.gm-i14__step-body { display: flex; flex-direction: column; gap: 4px; min-width: 0; }
.gm-i14__step-name { font-size: 14.5px; font-weight: 700; color: #111216; line-height: 1.4; }
.gm-i14__step-desc { font-size: 12.5px; color: #6d7079; line-height: 1.6; }
.gm-i14__step-source { font-size: 11px; color: #5b40d9; font-weight: 600; margin-top: 2px; }
@media (max-width: 720px) {
  .gm-i14__step { grid-template-columns: 22px 32px 32px 1fr; gap: 10px; padding: 14px 14px; }
  .gm-i14__step-icon { width: 32px; height: 32px; }
  .gm-i14__step-icon svg { width: 18px; height: 18px; }
}
</style>

## AI Overview와 AI Mode가 뭐고, 일반 검색과 어떻게 다른가요?

**AI Overview와 AI Mode는 모두 <em>검색 결과 위에 직접 답을 합성</em>하는 Google 검색의 새 레이어예요.** 쉽게 비유하면, <em>검색 결과 맨 위에 작은 위키백과 페이지가 매번 자동으로 만들어지는 느낌</em>입니다. 일반 SERP가 <em>링크 10개</em>를 보여주는 것과 다르게, AI Overview는 <em>질문에 대한 답을 한 번에 만들어서</em> 사용자가 클릭하기 전에 노출해요.

한국어 검색에서는 어떻게 보이는지 <em>GEO란?</em> 이라는 질의를 직접 던져 보면 가장 빨라요.

<figure class="author-figure">
  <img src="/assets/img/blog/ai-overview-and-seo/google_ai_overview.png" alt="구글에서 'GEO란?' 검색 시 SERP 상단에 노출되는 AI 개요 — 합성 답변, 인용 출처 카드, 추가 펼치기 버튼">
  <figcaption>구글에서 <em>GEO란?</em> 검색 시 노출되는 AI 개요 — 한국 구글에서는 AI Overview를 <em>AI 개요</em>라고 부르고, 합성 답변·인용 출처 카드·추가 펼치기 버튼이 함께 등장합니다.</figcaption>
</figure>

두 기능의 관계는 [Google 공식 발표(2025-03-05)](https://blog.google/products-and-platforms/products/search/ai-mode-search/)가 명확하게 짚어요. *"AI Mode. This new Search mode expands what AI Overviews can do with more advanced reasoning."* — AI Mode는 별도 제품이 아니라 <em>AI Overview의 확장판</em>이라는 뜻이에요. 둘 다 **query fan-out** — 하나의 질문이 여러 하위 질의로 쪼개져 처리되는 방식 — 으로 답을 만듭니다. (NIPAL AI 블로그 [<em>청크 단위 처방</em>](/blog/chunk-prescription/)에서 짚었던 그 메커니즘과 동일해요.)

사용 규모는 이미 작지 않아요. Google은 같은 발표에서 AI Overview를 **10억 명 이상이 사용**한다고 밝혔고, 2025년 5월 I/O 발표에서는 *"AI Overviews is driving over 10% increase in usage"* — <em>AI Overview가 표시되는 질의군에서 미국·인도 같은 주요 시장의 Google 사용량이 10% 이상 증가했다</em>고 보고했습니다 ([Google Blog, 2025-05-20](https://blog.google/products-and-platforms/products/search/google-search-ai-mode-update/)).

이 발표를 영상으로 보고 싶으시면 Google 공식 채널의 _Search ｜ I/O 2025 Keynote_가 가장 빠른 자료예요. AI Overview 사용량 증가 · AI Mode 미국 일반 출시 · query fan-out 메커니즘이 한 영상에 모여 있습니다.

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/stnSRel03e8" title="Search ｜ I/O 2025 Keynote — Google" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

<div class="callout callout--tip">
  <div class="callout-title">📌 AI Overview · AI Mode 한 줄 차이</div>
  <div class="callout-body">
    <p><strong>AI Overview:</strong> SERP 상단에 합성 답변을 노출 (2024-05 정식, 10억+ 사용자).</p>
    <p><strong>AI Mode:</strong> AI Overview의 확장판 — 추론·multimodal·복합 비교 (2025-05 미국 일반 출시).</p>
    <p><strong>공통:</strong> query fan-out — 한 질문이 N개 하위 질의로 자동 쪼개져 처리됨.</p>
  </div>
</div>

<figure class="gm-infographic gm-i11">
  <h4 class="gm-i11__title">AI Overview · AI Mode · 일반 SERP 비교</h4>
  <p class="gm-i11__subtitle">같은 질문이 세 가지 다른 형태로 처리됩니다 — 사용자가 보는 화면도, 우리 페이지가 노출되는 방식도 다 다릅니다</p>
  <div class="gm-i11__cols">
    <article class="gm-i11__col gm-i11__col--classic">
      <span class="gm-i11__tag">CLASSIC SERP</span>
      <span class="gm-i11__icon" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M8 6h13M8 12h13M8 18h13"/><circle cx="3.5" cy="6" r="1"/><circle cx="3.5" cy="12" r="1"/><circle cx="3.5" cy="18" r="1"/></svg></span>
      <h5 class="gm-i11__name">일반 검색 결과</h5>
      <div class="gm-i11__output"><strong>출력:</strong> 링크 10개 + 광고 + 답변 스니펫</div>
      <ul class="gm-i11__features">
        <li>순위에 따른 CTR</li>
        <li>한 페이지 = 한 결과</li>
        <li>page-level ranking</li>
      </ul>
    </article>
    <article class="gm-i11__col gm-i11__col--ai">
      <span class="gm-i11__tag">AI OVERVIEW</span>
      <span class="gm-i11__icon" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3l1.8 4.5 4.7 1.8-4.7 1.8L12 15.6l-1.8-4.5-4.7-1.8 4.7-1.8z"/><path d="M19 15l1 2.4 2.4 1-2.4 1-1 2.4-1-2.4-2.4-1 2.4-1z"/></svg></span>
      <h5 class="gm-i11__name">AI Overview</h5>
      <div class="gm-i11__output"><strong>출력:</strong> SERP 상단에 합성 답변 + 출처 카드 (2024-05 정식 출시)</div>
      <ul class="gm-i11__features">
        <li>답변 안에 인용되어야 노출</li>
        <li>chunk-level inclusion</li>
        <li>10억+ 사용자</li>
      </ul>
    </article>
    <article class="gm-i11__col gm-i11__col--mode">
      <span class="gm-i11__tag">AI MODE</span>
      <span class="gm-i11__icon" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8z"/><path d="M12 8.5l1 2.2 2.2 1-2.2 1-1 2.2-1-2.2-2.2-1 2.2-1z"/></svg></span>
      <h5 class="gm-i11__name">AI Mode</h5>
      <div class="gm-i11__output"><strong>출력:</strong> 대화형 검색 + 추론·multimodal·복합 비교 (2025-05 미국 일반 사용자)</div>
      <ul class="gm-i11__features">
        <li>query fan-out</li>
        <li>embedding alignment</li>
        <li>AI Overview의 확장</li>
      </ul>
    </article>
  </div>
  <p class="gm-i11__source">출처: <a href="https://developers.google.com/search/docs/appearance/ai-features" target="_blank" rel="noopener">Google Search Central — AI features and your website</a> (2025-12 업데이트), <a href="https://blog.google/products-and-platforms/products/search/ai-mode-search/" target="_blank" rel="noopener">Google Blog</a> (2025-03·2025-05)</p>
</figure>

AI 시대 SEO의 시작점은 그래서 <em>'우리 페이지가 AI Overview·AI Mode 안에 어떻게 보이는가'</em> 라는 질문이에요. 클릭이 일어나기 전 단계에서 답변이 합성된다는 사실 자체가 SEO 게임 룰을 바꿉니다.

## AI Overview가 나온 뒤 트래픽과 CTR은 실제로 어떻게 변했나요?

**1년 치 데이터가 모이면서 결론은 <em>CTR 하락 압력은 분명하다, 다만 측정 단위에 따라 결론은 다르다</em>로 모이고 있어요.** 산업 표준 측정사 4곳이 <em>서로 다른 방법론</em>으로 같은 현상을 측정했고, 네 결과를 <em>겹쳐 봐야</em> 전체 풍경이 드러납니다.

가장 자주 인용되는 수치는 [Ahrefs 분석](https://ahrefs.com/blog/ai-overviews-reduce-clicks/)이에요. 30만 키워드와 집계형 Google Search Console 데이터를 비교한 결과, *"the presence of an AI Overview… correlated with a 34.5% lower average clickthrough rate (CTR) for the top-ranking page"* — <em>AI Overview의 존재가 1위 결과의 CTR을 약 34.5% 낮춘다</em>고 보고했어요. 구체적으로 AIO 키워드군 1위 CTR은 2024년 3월 0.073에서 2025년 3월 0.026으로 떨어졌습니다.

같은 변화를 **zero-click**(<em>검색했지만 아무 사이트도 클릭하지 않고 SERP에서 답만 보고 끝내는 행동</em>) 관점에서 본 [Semrush 2025-12 리포트](https://www.semrush.com/blog/semrush-ai-overviews-study/)는 다른 결론을 짚어요 (Semrush 측정사 발표 기준). 같은 키워드를 AIO 도입 전후로 비교했더니 *zero-click 비율이 33.75%에서 31.53%로 오히려 감소*했고, 2025년 11월 기준 AI Overview 트리거 비율은 <em>15.69%</em>, 산업별로는 Science 25.96%, Computers & Electronics 17.92%가 가장 높았습니다.

결정적인 통찰은 [Seer Interactive 2025-11 데이터](https://www.seerinteractive.com/insights/aio-impact-on-google-ctr-september-2025-update)에서 나옵니다. 3,119개 검색어 · 42개 조직 · 2,510만 organic impressions를 분석한 결과, <em>AIO가 있지만 우리 사이트가 인용되지 않은 경우 organic CTR 0.52%</em>, <em>AIO에 인용된 경우 0.70%</em>였어요. Seer는 이걸 *"When you are cited in an AIO, you get 35% more organic clicks and 91% more paid clicks compared to when you are not cited at all"* — <em>인용 시 organic 클릭 +35%, paid 클릭 +91%</em>로 정리했습니다. <em>전년 대비로는</em> 비인용 -65.2%, 인용 -49.4% — **인용된 경우 손실이 절반 가까이 작아지는 셈**이에요.

산업 분화는 [BrightEdge 2025-05 리포트](https://videos.brightedge.com/assets/SGE-Guide/BrightEdge%20Report%20-%20AIO%20Overviews%20One%20Year%20Review%20Research%20Paper%20and%20Deep%20Dive%20.pdf)가 가장 선명하게 짚어요. *"total search impressions on Google have increased by over 49%… CTRs declined by nearly 30%"* — <em>Google 전체 검색 노출은 49% 이상 증가했지만 CTR은 거의 30% 하락</em>했고, 산업별로는 Healthcare · Education · B2B Tech · Insurance에서 AIO 커버리지가 우세, 반대로 <em>E-commerce AIO Growth Remains Flat</em> — 커머스는 평탄했습니다.

<figure class="gm-infographic gm-i12">
  <h4 class="gm-i12__title">측정사 4곳이 보는 AI Overview의 영향</h4>
  <p class="gm-i12__subtitle">측정 단위가 다르면 결론도 달라요 — 네 데이터를 겹쳐 봐야 전체 풍경이 보입니다</p>
  <div class="gm-i12__grid">
    <article class="gm-i12__card gm-i12__card--1">
      <header class="gm-i12__head"><span class="gm-i12__brand">AHREFS</span><span class="gm-i12__year">2025-04</span></header>
      <span class="gm-i12__metric">−34.5<span class="gm-i12__metric-unit">%</span></span>
      <span class="gm-i12__label">1위 결과 CTR 감소</span>
      <span class="gm-i12__caveat">30만 키워드 · 집계형 GSC<br>비인용 informational 1위 기준</span>
    </article>
    <article class="gm-i12__card gm-i12__card--2">
      <header class="gm-i12__head"><span class="gm-i12__brand">SEMRUSH</span><span class="gm-i12__year">2025-12</span></header>
      <span class="gm-i12__metric">33.75<span class="gm-i12__metric-unit">→31.53%</span></span>
      <span class="gm-i12__label">동일 키워드 zero-click 변화</span>
      <span class="gm-i12__caveat">10M+ 키워드 · 11K 도메인<br>AIO 트리거 15.69%</span>
    </article>
    <article class="gm-i12__card gm-i12__card--3">
      <header class="gm-i12__head"><span class="gm-i12__brand">SEER</span><span class="gm-i12__year">2025-11</span></header>
      <span class="gm-i12__metric">+35<span class="gm-i12__metric-unit">%</span></span>
      <span class="gm-i12__label">AIO 인용 시 organic 클릭</span>
      <span class="gm-i12__caveat">3,119 검색어 · 25.1M imp<br>비인용 -65.2% / 인용 -49.4% YoY</span>
    </article>
    <article class="gm-i12__card gm-i12__card--4">
      <header class="gm-i12__head"><span class="gm-i12__brand">BRIGHTEDGE</span><span class="gm-i12__year">2025-05</span></header>
      <span class="gm-i12__metric">+49<span class="gm-i12__metric-unit">% / −30%</span></span>
      <span class="gm-i12__label">검색 노출 ↑ / CTR ↓</span>
      <span class="gm-i12__caveat">Healthcare·Edu·B2BTech 우세<br>E-commerce는 평탄</span>
    </article>
  </div>
  <p class="gm-i12__note">핵심: <strong>CTR 하락 압력은 분명, 다만 AIO에 인용된 페이지는 손실이 절반 가까이 작아져요.</strong> 새 게임 룰의 핵심은 <em>순위</em>가 아니라 <em>답변 안에 들어가느냐</em>입니다.</p>
</figure>

<div class="callout callout--note">
  <div class="callout-title">📊 측정사 4곳의 같은 변화, 다른 결론 한 줄</div>
  <div class="callout-body">
    <p><strong>Ahrefs (2025-04):</strong> 1위 결과 CTR -34.5% — 상위 CTR 손실 분명.</p>
    <p><strong>Semrush (2025-12):</strong> 같은 키워드 zero-click 33.75 → 31.53% — 단위가 다르면 결론도 달라짐.</p>
    <p><strong>Seer (2025-11):</strong> AIO 인용 시 organic 클릭 +35%, 비인용 -65.2% YoY — 인용 여부가 손실 폭을 결정.</p>
    <p><strong>BrightEdge (2025-05):</strong> 노출 +49% / CTR -30% / E-commerce 평탄 — 산업 분화 진행.</p>
  </div>
</div>

마케터 시점으로 옮기면 이렇게 읽힙니다 — **단순한 <em>순위 사수</em>가 아니라 <em>답변에 인용될 청크를 만드는 일</em>이 새 SEO 작업의 첫 줄이에요.** 그리고 페이지 한 장을 새로 만드는 것보다 <em>기존 페이지의 청크를 재배치</em>하는 것이 훨씬 빠른 효과를 봅니다.

이유는 세 가지예요. 첫째, 기존 페이지는 이미 <em>크롤 · 인덱스 · 내부 링크 · 백링크</em>가 쌓여 있어요. 새 페이지를 만들면 이 신뢰 기반을 처음부터 다시 쌓아야 합니다. 둘째, AI는 <em>같은 페이지여도 답변 블록 단위</em>로 인용 적격성을 평가하니, 같은 정보를 <em>Q&amp;A H2 · 정의 박스 · 표 · 리스트</em>로 분절하기만 해도 인용 후보가 즉시 늘어나요. 셋째, 청크 재작성은 <em>한 페이지당 30분</em> 분량이지만 새 페이지 + 신뢰 빌드는 보통 수 주 ~ 수 개월 걸립니다. <em>같은 시간 같은 인력</em>으로 가장 큰 변화를 만드는 작업이 청크 재배치인 셈이에요.

## AI Overview에 인용되는 콘텐츠는 어떤 구조인가요?

**AI Overview에 인용되는 페이지는 <em>선형 텍스트가 아니라 응답의 데이터베이스</em> 처럼 쓰여 있어요.** SISTRIX가 AI Mode에서 가장 많이 인용된 100개 웹사이트를 분석한 결과, 공통점은 <em>주제나 예산이 아니라 구조</em>였습니다.

[SISTRIX 2025-12-03 분석](https://www.sistrix.com/blog/the-path-to-ai-citations-what-the-top-100-most-cited-websites-are-doing-right/)이 짚은 세 기둥은 이래요. 첫째 **answer-centric content design** — 작은 응답 블록, 명확한 리스트·튜토리얼·FAQ 구조. 둘째 **authority & recency** — 권위 + 최신성 신호 + JSON-LD 구조화 데이터. 셋째 **strict machine readability** — 목차·앵커 연결로 <em>기계가 한 블록씩 떼어 읽을 수 있는</em> 페이지.

<div class="callout callout--quote">
  <div class="callout-title">📚 학술 원전 — SISTRIX TOP 100 분석</div>
  <div class="callout-body">
    <blockquote>
      <p>"Web pages that are cited by AIs are not linear texts, they are <strong>databases of responses</strong>."</p>
      <p>— AI에 인용되는 웹페이지는 선형 텍스트가 아니라 응답의 데이터베이스에 가깝다.</p>
      <p>SISTRIX, <a href="https://www.sistrix.com/blog/the-path-to-ai-citations-what-the-top-100-most-cited-websites-are-doing-right/" target="_blank" rel="noopener"><em>The Path to AI Citations</em> (2025-12-03)</a></p>
    </blockquote>
  </div>
</div>

<figure class="author-figure">
  <a href="https://www.sistrix.com/blog/the-path-to-ai-citations-what-the-top-100-most-cited-websites-are-doing-right/" target="_blank" rel="noopener"><img src="/assets/img/blog/ai-overview-and-seo/sistrix_top100.png" alt="SISTRIX — The Path to AI Citations: What the Top 100 Most Cited Websites are Doing Right (2025-12-03) — 제목·intro·3 Pillars 목차"></a>
  <figcaption>SISTRIX 원문 페이지 상단 — _Google AI Mode가 10개 파란 링크를 하나의 합성 답변으로 대체한다_는 도입과 함께, 본문의 3 Pillars(answer-centric · authority+recency · machine readability) 목차가 보입니다.</figcaption>
</figure>

이 결론은 NIPAL AI 블로그 [<em>청크 단위 처방</em>](/blog/chunk-prescription/)에서 짚은 <em>AI는 페이지가 아니라 청크 단위로 인용한다</em>는 메커니즘과 정확히 일치해요. 같은 페이지 안에서도 <em>답변 블록 단위로</em> 잘 분절된 청크가 인용 확률을 높입니다. 산업 측정사의 결론과 RAG 학술 결과가 같은 방향을 가리킨다는 점이 중요해요.

어떤 도메인이 이 구조를 잘 만들고 있을까요? [SISTRIX 2025-07-02 미국 AI Mode 1만 키워드 분석](https://www.sistrix.com/blog/top-domains-in-the-new-ai-mode-usa/)이 좋은 지도를 그려 줍니다.

<figure class="gm-infographic gm-i13">
  <h4 class="gm-i13__title">미국 AI Mode에서 가장 많이 인용되는 도메인</h4>
  <p class="gm-i13__subtitle">SISTRIX 1만 키워드 분석 — 권위 백과 + 플랫폼 UGC + 비교·평판형 도메인의 혼합</p>
  <div class="gm-i13__board">
    <article class="gm-i13__group">
      <h5 class="gm-i13__group-title">TOP 6 — 일반 검색에서도 강한 도메인</h5>
      <p class="gm-i13__group-sub">"As in the classic web search…"</p>
      <ol class="gm-i13__list">
        <li class="gm-i13__item"><span class="gm-i13__rank">1</span> <span class="gm-i13__badge"><img src="/assets/img/blog/ai-overview-and-seo/favicons/wikipedia.png" alt="" loading="lazy"></span> <span class="gm-i13__domain">Wikipedia</span></li>
        <li class="gm-i13__item"><span class="gm-i13__rank">2</span> <span class="gm-i13__badge"><img src="/assets/img/blog/ai-overview-and-seo/favicons/youtube.png" alt="" loading="lazy"></span> <span class="gm-i13__domain">YouTube</span></li>
        <li class="gm-i13__item"><span class="gm-i13__rank">3</span> <span class="gm-i13__badge"><img src="/assets/img/blog/ai-overview-and-seo/favicons/imdb.png" alt="" loading="lazy"></span> <span class="gm-i13__domain">IMDb</span></li>
        <li class="gm-i13__item"><span class="gm-i13__rank">4</span> <span class="gm-i13__badge"><img src="/assets/img/blog/ai-overview-and-seo/favicons/britannica.png" alt="" loading="lazy"></span> <span class="gm-i13__domain">Britannica</span></li>
        <li class="gm-i13__item"><span class="gm-i13__rank">5</span> <span class="gm-i13__badge"><img src="/assets/img/blog/ai-overview-and-seo/favicons/reddit.png" alt="" loading="lazy"></span> <span class="gm-i13__domain">Reddit</span></li>
        <li class="gm-i13__item"><span class="gm-i13__rank">6</span> <span class="gm-i13__badge"><img src="/assets/img/blog/ai-overview-and-seo/favicons/yahoo.png" alt="" loading="lazy"></span> <span class="gm-i13__domain">Yahoo</span></li>
      </ol>
    </article>
    <article class="gm-i13__group gm-i13__group--upset">
      <h5 class="gm-i13__group-title">AI Mode에서 <em>상대적으로</em> 더 강한 도메인</h5>
      <p class="gm-i13__group-sub">"They achieve significantly better rankings in AI Mode results."</p>
      <ol class="gm-i13__list">
        <li class="gm-i13__item"><span class="gm-i13__rank">↑</span> <span class="gm-i13__badge"><img src="/assets/img/blog/ai-overview-and-seo/favicons/fandom.png" alt="" loading="lazy"></span> <span class="gm-i13__domain">Fandom</span></li>
        <li class="gm-i13__item"><span class="gm-i13__rank">↑</span> <span class="gm-i13__badge"><img src="/assets/img/blog/ai-overview-and-seo/favicons/yelp.png" alt="" loading="lazy"></span> <span class="gm-i13__domain">Yelp</span></li>
        <li class="gm-i13__item"><span class="gm-i13__rank">↑</span> <span class="gm-i13__badge"><img src="/assets/img/blog/ai-overview-and-seo/favicons/quora.png" alt="" loading="lazy"></span> <span class="gm-i13__domain">Quora</span></li>
      </ol>
    </article>
  </div>
  <p class="gm-i13__note"><strong>패턴:</strong> 권위 백과(Wikipedia·Britannica) + 플랫폼 UGC(YouTube·Reddit·Quora) + 비교·평판형(IMDb·Yelp). 세 종류의 도메인이 <em>답변 블록 구조</em>를 공통적으로 갖고 있어 AI 인용에 유리해요.</p>
  <p class="gm-i13__source">출처: <a href="https://www.sistrix.com/blog/top-domains-in-the-new-ai-mode-usa/" target="_blank" rel="noopener">SISTRIX — Top domains in the new AI Mode (USA)</a> (2025-07-02)</p>
</figure>

마케터 입장에서 이 분석은 <em>안도와 압박</em>을 동시에 줍니다. 안도 — 새 비밀 SEO가 따로 있는 게 아니라 <em>구조와 명확성</em>이라는 같은 원리예요. 압박 — <em>페이지 한 장을 통째로 잘 쓴 것</em>으로는 부족하고 <em>그 안의 모든 청크가 답변 후보로 완성</em>되어 있어야 한다는 점입니다.

## SEO는 죽었나요, 진화하는 건가요?

**현장 전문가들의 답은 <em>죽지 않았다, 다만 토대가 같다는 점에서 진화한다</em>로 모입니다.** 다만 <em>얼마나 빠르게 진화하는가</em>에 대한 강도 차이가 있어요. 세 진영을 한 줄씩 보면 이렇습니다.

[Aleyda Solis 2025-06-02 칼럼](https://www.aleydasolis.com/en/search-engine-optimization/seo-vs-geo-optimizing-for-traditional-vs-ai-search/)이 균형 잡힌 출발점이에요. *"There's a high overlap in the optimization principles for traditional search and LLMs."* — 전통 검색과 LLM 최적화 원칙 사이에는 <em>높은 중첩</em>이 있다. 단 차이도 분명하다고 짚어요: query fan-out, 개인화 깊이, 문맥 중심 최적화, <em>응답 내 인용·포함</em> 중심 KPI.

<figure class="author-figure">
  <a href="https://www.aleydasolis.com/en/search-engine-optimization/seo-vs-geo-optimizing-for-traditional-vs-ai-search/" target="_blank" rel="noopener"><img src="/assets/img/blog/ai-overview-and-seo/aleyda_seo_vs_geo.png" alt="Aleyda Solis — SEO VS GEO: Optimizing for Traditional vs AI Search (Updated June 2, 2025) — 원문 상단"></a>
  <figcaption>Aleyda Solis — <em>SEO VS GEO: Optimizing for Traditional vs AI Search</em> (2025-06-02). 원문 페이지 상단의 _전통 검색과 AI 검색의 중첩_ 분석 도입부.</figcaption>
</figure>


[Lily Ray 2025-11-11 발표(Amsive)](https://www.amsive.com/insights/seo/geo-aeo-llmo-separating-fact-from-fiction-how-to-win-in-ai-search/)는 더 보수적 톤이에요. *"AI search is expanding traditional search, not replacing it. In fact, data shows that 95% of ChatGPT users still rely on Google, and AI search currently drives less than 1% of total site traffic."* — AI 검색은 <em>전통 검색을 대체하는 게 아니라 확장한다</em>, ChatGPT 사용자의 95%가 여전히 Google에 의존하고, <em>AI 검색이 차지하는 사이트 트래픽은 1~2% 수준</em>이라는 입장입니다.

본문에 인용한 Lily Ray의 발언은 MozCon 2025 발표 그 자체에 있어요. 보수적 톤의 근거(트래픽 1~2%, 95% 여전히 Google)를 영상으로 직접 확인할 수 있습니다.

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/2nJkT8zOzcM" title="Lily Ray — GEO, AEO, LLMO: Separating Fact from Fiction & How to Win in AI Search (MozCon 2025)" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

반대편에는 [Mike King 2025-05 분석(iPullRank)](https://ipullrank.com/how-ai-mode-works)이 있어요. AI Mode는 <em>확률적 · 개인화 · embedding alignment(우리 페이지가 AI의 의미 공간 안 어디에 위치하는지) · passage selection(한 페이지 안에서 어느 단락을 답변에 인용할지 고르는 과정)</em>의 문제로, <em>고전적 순위 추적은 급격히 약해진다</em>는 강한 변화론. *"AI Mode rewrites the rules. This isn't just about ranking anymore."*

<div class="callout callout--note">
  <div class="callout-title">⚖️ 세 입장 한 줄 비교</div>
  <div class="callout-body">
    <p><strong>Aleyda Solis (균형):</strong> "high overlap" — 원칙은 같다, 다만 KPI가 <em>응답 내 인용·포함</em>으로 이동.</p>
    <p><strong>Lily Ray (보수적):</strong> "expanding, not replacing" — AI 검색이 트래픽의 1~2% 수준, 토대는 그대로.</p>
    <p><strong>Mike King (변화론):</strong> "AI Mode rewrites the rules" — 확률적·개인화 환경에서 <em>ranking</em> 개념 자체가 약해진다.</p>
  </div>
</div>

세 입장을 한 줄로 모으면 이렇게 됩니다 — **SEO 기본기는 살아 있다, 다만 <em>측정·인용 단위</em>가 페이지에서 응답 블록으로 이동한다.** 결론은 <em>SEO 종말이 아니라 단위 재정의</em>예요. 페이지 100장을 새로 만드는 게 아니라 <em>기존 페이지의 청크를 답변 블록 단위로 다시 쓰는 일</em>이 첫 번째 작업입니다.

## 한국 시장은 어디까지 왔나요?

**한국 시장은 <em>Google AI Overview 침투율</em>보다 <em>네이버 AI 검색 전환</em>과 <em>AI 앱 사용 대중화</em>가 먼저 읽혀요.** 한국어 콘텐츠로 사업하는 브랜드라면 이 두 변화부터 봐야 합니다.

2026년 4월 27일, 네이버는 [AI탭 베타](https://www.navercorp.com/media/pressReleasesDetail?seq=34984)를 네이버플러스 멤버십 사용자 대상으로 출시했어요. 최수연 대표는 발표에서 *"AI탭은 탐색에서 실행으로 자연스럽게 확장되는 네이버 검색 패러다임의 전환점"*이라고 짚었습니다. AI탭은 <em>통합검색·쇼핑·플레이스·블로그·카페</em>를 연결한 <em>대화형 AI 검색 서비스</em>로 정의되고, 2026년 상반기 내 전체 사용자로 확대될 계획이에요.

<figure class="author-figure">
  <a href="https://www.navercorp.com/media/pressReleasesDetail?seq=34984" target="_blank" rel="noopener"><img src="/assets/img/blog/ai-overview-and-seo/naver_aitab.png" alt="NAVER 공식 보도자료 — 네이버, AI 검색 서비스 'AI탭' 베타 출시 (2026-04-28)"></a>
  <figcaption>NAVER 공식 보도자료 — <em>네이버, AI 검색 서비스 'AI탭' 베타 출시… '에이전틱 검색 경험의 시작'</em> (2026-04-28). 검색 경험 확장·버티컬 생태계 연계·상반기 전체 사용자 확대 3가지가 본문 첫 줄에 정리되어 있어요.</figcaption>
</figure>


함께 짚어야 할 것이 **AI 브리핑**입니다. 네이버는 [공식 서비스 소개](https://www.navercorp.com/service/search)에서 AI 브리핑을 *"생성형 AI를 활용하여 사용자의 검색 의도와 맥락을 이해하여, 요약된 답변과 출처 정보, 관련 질문 등을 함께 확인할 수 있도록 검색 결과를 제공"*한다고 정의해요. <em>Google AIO와 구조적으로 비교 가능한 한국형 검색 레이어</em>라고 볼 수 있습니다.

<figure class="author-figure">
  <img src="/assets/img/blog/ai-overview-and-seo/naver_ai_briefing.png" alt="네이버에서 'GEO란?' 검색 시 노출되는 AI 브리핑 — 요약 답변, 출처 정보, 관련 질문">
  <figcaption>네이버에서 <em>GEO란?</em> 검색 시 노출되는 AI 브리핑 — 요약 답변·출처 정보·관련 질문을 함께 보여주는 한국형 검색 레이어로, Google AI 개요와 구조적으로 비교 가능합니다.</figcaption>
</figure>

사용자 측 변화도 빠릅니다. 2026년 2월 기준 [와이즈앱 인사이트](https://www.wiseapp.co.kr/insight/detail/953) 발표에 따르면 **한국인의 48.7%(약 2,494만 명)가 생성형 AI 앱을 사용**해요 (와이즈앱 발표 기준). 2025년 6월 동향 리포트에서는 *월간 사용자 수 1위 AI 앱이 ChatGPT 1,844만 명, 이어 네이버 파파고 1,261만 명, Gemini 219만 명*으로 측정됐습니다 ([와이즈앱 2025-08-06](https://www.wiseapp.co.kr/insight/detail/812/2025-ai-app-trend-chatbot-translation-recording-avatar-photo) 발표 기준).

<figure class="author-figure">
  <a href="https://www.wiseapp.co.kr/insight/detail/953" target="_blank" rel="noopener"><img src="/assets/img/blog/ai-overview-and-seo/wiseapp_kor_ai.png" alt="와이즈앱·리테일 인사이트 — 생성형 AI 앱, 한국인 10명 중 5명 사용! (2026-03-25)"></a>
  <figcaption>와이즈앱·리테일 인사이트 — <em>생성형 AI 앱, 한국인 10명 중 5명 사용!</em> (2026-03-25). 본문에는 설치자 수·사용자 수·1인당 평균 사용시간·조사 방법까지 4개 인덱스로 정리되어 있어요.</figcaption>
</figure>


<div class="callout callout--tip">
  <div class="callout-title">🇰🇷 한국 시장 한눈에 — 2026-05 시점</div>
  <div class="callout-body">
    <p>• <strong>네이버 AI탭 베타 출시</strong> (2026-04-27) — 멤버십 대상, 상반기 내 전체 확대 / "탐색에서 실행으로"</p>
    <p>• <strong>네이버 AI 브리핑</strong> — 요약 답변 + 출처 + 관련 질문, Google AIO와 구조적으로 비교 가능</p>
    <p>• <strong>한국인 48.7%(2,494만 명)</strong>가 생성형 AI 앱 사용 (와이즈앱 2026-02)</p>
    <p>• <strong>ChatGPT MAU 1,844만 / 파파고 1,261만 / Gemini 219만</strong> (와이즈앱 2025-06)</p>
  </div>
</div>

한국어로 사업하는 브랜드 입장에서 이건 <em>Google AIO가 한국 SERP에 얼마나 노출되는가</em>라는 좁은 질문보다 훨씬 큰 변화예요. **이미 한국인 절반이 <em>기존 검색 외에 AI 답변 엔진을 일상적으로</em> 쓴다는 뜻**이거든요. GEO·AEO 전략을 짤 때 <em>4 AI 답변 엔진</em>(ChatGPT · Perplexity · Gemini · Claude)을 함께 고려해야 하는 이유가 여기 있습니다.

## 우리 브랜드 SEO, 오늘부터 어떻게 조정할까요?

**우리 브랜드 SEO는 <em>기존 기본기를 유지하면서, 청크 단위로 다시 쓰고, 4 AI 답변 엔진을 동시에 추적</em>하는 5단계로 조정하면 됩니다.** 페이지 100장을 새로 만드는 게 아니라 <em>측정·작성 단위</em>만 바꿔도 절반은 시작돼요.

<figure class="gm-infographic gm-i14">
  <h4 class="gm-i14__title">AI 검색 시대 SEO 조정 — 5단계 체크리스트</h4>
  <p class="gm-i14__subtitle">한 브랜드 기준 — 한 단계씩 차례로 적용하면 새 게임 룰에 맞게 정렬됩니다</p>
  <div class="gm-i14__total-wrap"><span class="gm-i14__total">5 STEPS · 페이지 100장 새로 만들지 않아도 OK</span></div>
  <div class="gm-i14__steps">
    <div class="gm-i14__step">
      <span class="gm-i14__check" aria-hidden="true"></span>
      <span class="gm-i14__step-num">01</span>
      <span class="gm-i14__step-icon" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="M9 12l2 2 4-4"/></svg></span>
      <div class="gm-i14__step-body">
        <span class="gm-i14__step-name">기존 SEO 기본기는 그대로 유지</span>
        <span class="gm-i14__step-desc">E-E-A-T(경험·전문성·권위·신뢰) · 기술적 SEO · 내부 링킹 · 구조화 데이터는 AI 시대에 더 중요해져요</span>
        <span class="gm-i14__step-source">출처: Google Search Central — "no additional requirements to appear in AI Overviews or AI Mode"</span>
      </div>
    </div>
    <div class="gm-i14__step">
      <span class="gm-i14__check" aria-hidden="true"></span>
      <span class="gm-i14__step-num">02</span>
      <span class="gm-i14__step-icon" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M3 3v18h18"/><rect x="7" y="13" width="3" height="5"/><rect x="12" y="9" width="3" height="9"/><rect x="17" y="6" width="3" height="12"/></svg></span>
      <div class="gm-i14__step-body">
        <span class="gm-i14__step-name">Search Console에서 AI 검색 트래픽 별도 추적</span>
        <span class="gm-i14__step-desc">AI Overview·AI Mode 성과가 Web 검색 타입에 합산 집계됩니다 — 기존 GSC가 그대로 측정 도구예요</span>
        <span class="gm-i14__step-source">출처: Google Search Central — "performance data is reported under Web search type"</span>
      </div>
    </div>
    <div class="gm-i14__step">
      <span class="gm-i14__check" aria-hidden="true"></span>
      <span class="gm-i14__step-num">03</span>
      <span class="gm-i14__step-icon" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="6" cy="6" r="3"/><circle cx="6" cy="18" r="3"/><path d="M20 4L8.12 15.88"/><path d="M14.47 14.48L20 20"/><path d="M8.12 8.12L12 12"/></svg></span>
      <div class="gm-i14__step-body">
        <span class="gm-i14__step-name">페이지를 청크 단위로 다시 쓰기</span>
        <span class="gm-i14__step-desc">Q&amp;A H2 분할 · 정의 박스 · 정형 표·리스트 · 엔티티 풍부화 · 출처 카드 — 5가지 처방 패턴 그대로</span>
        <span class="gm-i14__step-source">참고: NIPAL AI 블로그 "청크 단위 처방"</span>
      </div>
    </div>
    <div class="gm-i14__step">
      <span class="gm-i14__check" aria-hidden="true"></span>
      <span class="gm-i14__step-num">04</span>
      <span class="gm-i14__step-icon" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M16 18l6-6-6-6"/><path d="M8 6l-6 6 6 6"/><path d="M14 4l-4 16"/></svg></span>
      <div class="gm-i14__step-body">
        <span class="gm-i14__step-name">Schema·JSON-LD 마크업 강화</span>
        <span class="gm-i14__step-desc">FAQPage · HowTo · BlogPosting · Article · Product 중 적합한 타입을 페이지마다 명시</span>
        <span class="gm-i14__step-source">출처: SISTRIX TOP 100 분석 — Pillar 2 authority &amp; recency, Pillar 3 machine readability</span>
      </div>
    </div>
    <div class="gm-i14__step">
      <span class="gm-i14__check" aria-hidden="true"></span>
      <span class="gm-i14__step-num">05</span>
      <span class="gm-i14__step-icon" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M2 12h20"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg></span>
      <div class="gm-i14__step-body">
        <span class="gm-i14__step-name">4 AI 답변 엔진을 동시에 추적</span>
        <span class="gm-i14__step-desc">Google AIO 외에 ChatGPT · Perplexity · Gemini · Claude 인용 여부를 함께 측정 — 한국 시장은 이미 한국인 절반이 AI 앱 사용</span>
        <span class="gm-i14__step-source">참고: 와이즈앱 — 한국인 48.7%(2,494만 명) 생성형 AI 앱 사용</span>
      </div>
    </div>
  </div>
</figure>

다섯 단계 모두 <em>측정과 작성 단위 재정렬</em>이지 <em>콘텐츠 폐기와 재작성</em>이 아니에요. 첫 페이지 한 장을 위 단계 그대로 다시 써 보면 <em>내 페이지가 왜 AI 답변에 안 들어갔는지</em>가 손에 잡히기 시작합니다.

직접 적용 결과가 궁금하시면 [30초 무료진단](https://app.nipal-ai.com/)으로 확인해 보세요. ChatGPT · Gemini · Perplexity 세 답변 엔진에 질문을 3개씩 동시에 던져 <em>같은 질의가 던져졌을 때 우리 브랜드가 언급되는지</em>를 측정하고, AI 노출 점수와 3단계 처방까지 30초 안에 보여드립니다.

다음 글에서는 한 발 더 들어가서, [**4 AI 답변 엔진 비교 — ChatGPT · Perplexity · Gemini · Claude는 어떤 콘텐츠를 인용하나**](/blog/4ai-engines-citation-comparison/) — 같은 질문을 네 엔진에 던지면 어떤 콘텐츠를 어떻게 인용하는지, 우리 브랜드는 어떤 엔진을 우선 측정·최적화해야 하는지 결정 가이드를 정리했어요.

SEO는 죽지 않았어요. <em>답변 단위로 다시 쓰여야</em> 할 뿐입니다. 첫 페이지 한 장 — 이 글의 5단계 그대로 — 다시 써 보는 것이 AI 검색 시대 SEO의 출발점이에요.

<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "FAQPage",
      "@id": "https://nipal-ai.com/blog/ai-overview-and-seo/#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "AI Overview와 AI Mode가 뭐고, 일반 검색과 어떻게 다른가요?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "AI Overview는 검색 결과 상단에 합성 답변을 보여주는 Google의 새 레이어로 2024년 5월 정식 출시 이후 10억 명 이상이 사용 중입니다. AI Mode는 AI Overview의 확장판으로 추론·multimodal·복합 비교를 결합하며, 둘 다 query fan-out(하나의 질문을 여러 하위 질의로 쪼개는 방식)으로 답을 만듭니다. 2025년 5월 I/O 발표에서 Google은 AI Overview가 표시되는 질의군에서 사용량이 10% 이상 증가했다고 밝혔습니다."
          }
        },
        {
          "@type": "Question",
          "name": "AI Overview가 나온 뒤 트래픽과 CTR은 실제로 어떻게 변했나요?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "CTR 하락 압력은 분명하지만 측정 단위에 따라 결론은 다릅니다. Ahrefs는 1위 결과 CTR이 34.5% 낮아진다고 보고했고, Semrush는 동일 키워드 zero-click이 33.75%에서 31.53%로 감소했다고 측정했습니다. BrightEdge는 검색 노출 49% 증가와 CTR 30% 하락을 동시에 보고했습니다. 가장 중요한 발견은 Seer Interactive 데이터로, AIO에 인용된 페이지는 비인용 대비 organic 클릭 35%, paid 클릭 91% 더 얻는다는 점입니다."
          }
        },
        {
          "@type": "Question",
          "name": "AI Overview에 인용되는 콘텐츠는 어떤 구조인가요?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "SISTRIX가 AI Mode에서 가장 많이 인용된 100개 웹사이트를 분석한 결과, 공통점은 주제나 예산이 아니라 구조였습니다. 세 기둥은 answer-centric content design(작은 응답 블록, FAQ·리스트·튜토리얼), authority & recency(권위 + 최신성 + JSON-LD), strict machine readability(목차·앵커 연결)입니다. SISTRIX는 이를 'Web pages that are cited by AIs are not linear texts, they are databases of responses'라고 정리했습니다. 미국 AI Mode 1만 키워드 분석에서는 Wikipedia가 1위, YouTube·IMDb·Britannica·Reddit·Yahoo가 강세였고 Fandom·Yelp·Quora는 AI Mode에서 상대적으로 더 강했습니다."
          }
        },
        {
          "@type": "Question",
          "name": "SEO는 죽었나요, 진화하는 건가요?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "현장 전문가들의 답은 죽지 않았다, 다만 진화한다로 모입니다. Aleyda Solis는 'There's a high overlap in the optimization principles for traditional search and LLMs' — 원칙은 같다고 짚었고, Lily Ray는 'AI search is expanding traditional search, not replacing it' — AI 검색이 차지하는 사이트 트래픽은 1~2% 수준이라고 보수적으로 봅니다. Mike King은 'AI Mode rewrites the rules' — 확률적·개인화 환경에서 ranking 개념 자체가 약해진다는 변화론입니다. 세 입장 모두 SEO 기본기는 살아 있되 측정·인용 단위가 페이지에서 응답 블록으로 이동한다고 합의합니다."
          }
        },
        {
          "@type": "Question",
          "name": "한국 시장은 어디까지 왔나요?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "한국은 Google AI Overview 침투율보다 네이버 AI 검색 전환과 AI 앱 사용 대중화가 먼저 읽힙니다. 네이버는 2026년 4월 27일 AI탭 베타를 출시하면서 '탐색에서 실행으로 자연스럽게 확장되는 검색 패러다임의 전환점'이라고 정의했고, AI 브리핑은 요약 답변 + 출처 + 관련 질문을 제공하는 한국형 검색 레이어로 자리잡았습니다. 와이즈앱 측정에 따르면 2026년 2월 기준 한국인 48.7%(약 2,494만 명)가 생성형 AI 앱을 사용하며, 2025년 6월 ChatGPT MAU는 1,844만 명, 파파고 1,261만 명, Gemini 219만 명이었습니다."
          }
        },
        {
          "@type": "Question",
          "name": "우리 브랜드 SEO, 오늘부터 어떻게 조정해야 하나요?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "5단계 체크리스트로 정리합니다. (1) 기존 SEO 기본기 유지 — Google 공식 가이드는 'no additional requirements'라고 명시합니다. (2) Search Console에서 AI 검색 트래픽 별도 추적 — AI Overview·AI Mode 성과가 Web 검색 타입에 합산됩니다. (3) 페이지를 청크 단위로 다시 쓰기 — Q&A H2 분할, 정의 박스, 정형 표·리스트, 엔티티 풍부화, 출처 카드 5가지 패턴. (4) Schema·JSON-LD 마크업 강화 — FAQPage·HowTo·BlogPosting 적합한 타입 명시. (5) 4 AI 답변 엔진 동시 추적 — Google AIO 외에 ChatGPT·Perplexity·Gemini·Claude 인용 여부 측정."
          }
        }
      ]
    },
    {
      "@type": "HowTo",
      "@id": "https://nipal-ai.com/blog/ai-overview-and-seo/#howto",
      "name": "AI 검색 시대 SEO 조정 5단계",
      "description": "AI Overview·AI Mode 등장 이후 우리 브랜드 SEO를 어떻게 조정할지 5단계 체크리스트",
      "step": [
        {"@type": "HowToStep", "position": 1, "name": "기존 SEO 기본기 유지", "text": "E-E-A-T·기술적 SEO·내부 링킹·구조화 데이터는 AI 시대에 더 중요해집니다. Google 공식 가이드도 'no additional requirements'라고 명시합니다."},
        {"@type": "HowToStep", "position": 2, "name": "Search Console에서 AI 검색 트래픽 별도 추적", "text": "AI Overview·AI Mode 성과는 Search Console의 Web 검색 타입에 합산 집계됩니다. 기존 GSC가 그대로 측정 도구입니다."},
        {"@type": "HowToStep", "position": 3, "name": "페이지를 청크 단위로 다시 쓰기", "text": "Q&A H2 분할, 정의 박스, 정형 표·리스트, 엔티티 풍부화, 출처 카드 — 5가지 처방 패턴으로 청크 점수를 올립니다."},
        {"@type": "HowToStep", "position": 4, "name": "Schema·JSON-LD 마크업 강화", "text": "FAQPage·HowTo·BlogPosting·Article·Product 중 적합한 타입을 페이지마다 명시합니다. SISTRIX TOP 100 분석의 Pillar 2·3 결론과 일치합니다."},
        {"@type": "HowToStep", "position": 5, "name": "4 AI 답변 엔진 동시 추적", "text": "Google AIO 외에 ChatGPT·Perplexity·Gemini·Claude 인용 여부를 함께 측정합니다. 한국 시장은 이미 한국인 절반이 AI 앱을 사용 중입니다."}
      ]
    },
    {
      "@type": "BlogPosting",
      "@id": "https://nipal-ai.com/blog/ai-overview-and-seo/#post",
      "headline": "AI Overview · AI Mode 등장 후 SEO는 어디로 가는가 — 6가지 변화와 우리 브랜드 조정 전략",
      "description": "Ahrefs·Semrush·Seer·BrightEdge 4개 측정사 데이터, Google·NAVER 공식 가이드, SISTRIX 100대 분석을 묶어 AI 검색 시대의 SEO 변화와 조정 전략을 정리합니다.",
      "datePublished": "2026-05-17T10:00:00+09:00",
      "dateModified": "2026-05-15T12:00:00+09:00",
      "author": {"@type": "Person", "name": "Jace", "jobTitle": "NIPAL AI 대표", "url": "https://nipal-ai.com/"},
      "publisher": {"@type": "Organization", "name": "NIPAL AI", "url": "https://nipal-ai.com/", "logo": {"@type": "ImageObject", "url": "https://nipal-ai.com/assets/img/logo.png"}},
      "image": "https://nipal-ai.com/assets/img/blog/ai-overview-and-seo/og.png",
      "mainEntityOfPage": "https://nipal-ai.com/blog/ai-overview-and-seo/",
      "about": [
        {"@type": "Thing", "name": "AI Overview"},
        {"@type": "Thing", "name": "AI Mode"},
        {"@type": "Thing", "name": "Search Engine Optimization", "sameAs": "https://en.wikipedia.org/wiki/Search_engine_optimization"},
        {"@type": "Thing", "name": "Generative Engine Optimization", "sameAs": "https://en.wikipedia.org/wiki/Generative_engine_optimization"},
        {"@type": "Thing", "name": "Query fan-out"}
      ],
      "mentions": [
        {"@type": "Organization", "name": "Google", "sameAs": "https://www.google.com/"},
        {"@type": "Organization", "name": "Ahrefs", "sameAs": "https://ahrefs.com/"},
        {"@type": "Organization", "name": "Semrush", "sameAs": "https://www.semrush.com/"},
        {"@type": "Organization", "name": "Seer Interactive", "sameAs": "https://www.seerinteractive.com/"},
        {"@type": "Organization", "name": "BrightEdge", "sameAs": "https://www.brightedge.com/"},
        {"@type": "Organization", "name": "SISTRIX", "sameAs": "https://www.sistrix.com/"},
        {"@type": "Organization", "name": "NAVER", "sameAs": "https://www.navercorp.com/"},
        {"@type": "Person", "name": "Aleyda Solis", "sameAs": "https://www.aleydasolis.com/"},
        {"@type": "Person", "name": "Lily Ray", "sameAs": "https://www.amsive.com/"},
        {"@type": "Person", "name": "Mike King", "sameAs": "https://ipullrank.com/"},
        {"@type": "Article", "name": "AI features and your website", "sameAs": "https://developers.google.com/search/docs/appearance/ai-features"},
        {"@type": "Article", "name": "The Path to AI Citations", "sameAs": "https://www.sistrix.com/blog/the-path-to-ai-citations-what-the-top-100-most-cited-websites-are-doing-right/"}
      ],
      "speakable": {
        "@type": "SpeakableSpecification",
        "cssSelector": [".post-summary", ".post-title", ".post-lede"]
      }
    }
  ]
}
</script>
