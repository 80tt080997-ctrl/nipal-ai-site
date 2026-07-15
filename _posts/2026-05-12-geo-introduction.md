---
title: "GEO란 무엇인가 — AI가 인용하는 회사가 되는 법"
description: "Generative Engine Optimization(GEO)의 정의, SEO와의 차이, 한국 기업이 지금 시작해야 하는 이유를 9개 1차 출처와 함께 정리합니다."
date: 2026-05-12 10:00:00 +0900
last_modified_at: 2026-05-14 11:00:00 +0900
author_id: nipal
category: GEO 입문
tags: [GEO, AEO, AI 검색, ChatGPT, SEO]
image: /assets/img/blog/geo-introduction/og.png
summary: |
  - AI 검색이 늘면서 **전통 검색 볼륨은 2026년까지 25%, 브랜드 오가닉 트래픽은 2028년까지 50% 이상 줄어들 전망**입니다 (Gartner).
  - **검색 결과에 AI Overview가 뜨면 1위 페이지의 클릭이 AI Overview가 없을 때보다 34.5% 줄어들고, 2026년 들어 그 격차는 58%까지 벌어졌습니다** (Ahrefs).
  - 한국 인터넷 이용자의 **생성형 AI 경험률은 1년 만에 17.6% → 33.3%로 두 배**, 가장 많이 쓰는 용도는 **단순 정보검색(81.9%)** 입니다 (NIA).
  - 게임의 룰이 바뀐 만큼, 오늘 가장 먼저 점검할 두 가지는 **Schema.org Organization 마크업**과 **llms.txt 파일**입니다.
---

3년 동안 한국 브랜드 블로그를 누적 5,000편 운영하면서 SEO만 잘하면 충분하다고 믿었어요. 그런데 2024년부터 이상한 신호가 잡혔습니다. **ChatGPT가 추천하는 브랜드**와 **Google 1위에 노출되는 브랜드**가 점점 달라지기 시작한 거예요.

직접 해보시면 바로 느껴집니다. ChatGPT를 켜고 내 회사가 속한 카테고리의 추천 회사를 물어보세요. 그 답변에 **우리 회사 이름**이 나오던가요?

검색의 룰이 조용히 바뀌고 있어요. SEO가 사라지는 건 아니지만, 그 위에 새로운 게임이 얹히는 중입니다. 이 글에서는 GEO(Generative Engine Optimization)가 무엇이고, 왜 지금 한국 기업이 챙겨야 하는지, 그리고 오늘 당장 무엇부터 시작할 수 있는지 정리해볼게요.

<style>
/* === NIPAL AI infographics (scoped to this post) === */
.gm-infographic { margin: 40px 0; font-family: 'Pretendard', 'Apple SD Gothic Neo', system-ui, sans-serif; color: #111216; }
.gm-infographic *, .gm-infographic *::before, .gm-infographic *::after { box-sizing: border-box; }

/* --- 1번 : Bar chart + supplementary stat --- */
.gm-i1 { background: #FFFFFF; border: 1px solid #e4e4e5; border-radius: 16px; padding: 32px 28px 24px; box-shadow: 0 4px 16px rgba(17,18,22,0.06); }
.gm-i1__head { display: flex; align-items: center; justify-content: space-between; gap: 16px; flex-wrap: wrap; margin-bottom: 18px; }
.gm-i1__title { font-size: 18px; font-weight: 700; color: #111216; margin: 0; }
.gm-i1__delta { background: #ebedff; color: #7052f3; font-size: 13px; font-weight: 700; padding: 6px 14px; border-radius: 999px; border: 1px solid #7052f3; white-space: nowrap; }
.gm-i1__chart { padding-top: 12px; }
.gm-i1__bars { display: flex; align-items: flex-end; justify-content: center; gap: 60px; height: 260px; padding: 0 20px; }
.gm-i1__bar { flex: 0 0 130px; display: flex; flex-direction: column; align-items: center; height: 100%; justify-content: flex-end; }
.gm-i1__bar-value { font-size: 26px; font-weight: 700; color: #111216; margin-bottom: 8px; line-height: 1; }
.gm-i1__bar--primary .gm-i1__bar-value { color: #4d57f5; }
.gm-i1__bar-fill { width: 100%; background: #9699a2; border-radius: 8px 8px 0 0; }
.gm-i1__bar--primary .gm-i1__bar-fill { background: linear-gradient(180deg, #4d57f5 0%, #6d76f7 100%); }
.gm-i1__bar-year { margin-top: 12px; font-size: 13px; color: #6d7079; font-weight: 500; }
.gm-i1__extra { margin: 20px 0 0; padding: 14px 18px; background: #f7f6f3; border-radius: 10px; display: flex; align-items: center; gap: 12px; flex-wrap: wrap; }
.gm-i1__extra-tag { font: 700 10px 'JetBrains Mono','Consolas',monospace; letter-spacing: 0.6px; color: #7052f3; padding: 5px 10px; background: #f0ecfe; border-radius: 999px; flex: 0 0 auto; }
.gm-i1__extra-text { font-size: 13px; color: #202228; line-height: 1.5; }
.gm-i1__extra-text strong { font-weight: 700; color: #111216; }
.gm-i1__source { margin: 14px 0 0; padding-top: 14px; border-top: 1px solid #e4e4e5; font-size: 11px; color: #6d7079; font-style: italic; text-align: left; }
.gm-i1__source a { color: inherit; text-decoration: underline; }

/* --- 2번 : 3 signal cards + direction --- */
.gm-i2 { background: #FFFFFF; border: 1px solid #e4e4e5; border-radius: 16px; padding: 32px 24px; box-shadow: 0 4px 16px rgba(17,18,22,0.06); }
.gm-i2__title { font-size: 20px; font-weight: 700; color: #111216; margin: 0 0 4px; text-align: center; }
.gm-i2__subtitle { font-size: 13px; color: #6d7079; margin: 0 0 28px; text-align: center; }
.gm-i2__grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 18px; }
.gm-i2__card { background: #FFFFFF; border-radius: 14px; overflow: hidden; box-shadow: 0 4px 16px rgba(17,18,22,0.08); display: flex; flex-direction: column; }
.gm-i2__top { padding: 22px 16px 20px; text-align: center; color: #FFFFFF; }
.gm-i2__card--c1 .gm-i2__top { background: linear-gradient(135deg, #4d57f5 0%, #6d76f7 100%); }
.gm-i2__card--c2 .gm-i2__top { background: linear-gradient(135deg, #7052f3 0%, #9179f7 100%); }
.gm-i2__card--c3 .gm-i2__top { background: linear-gradient(135deg, #E64A4A 0%, #FF6B6B 100%); }
.gm-i2__tag { display: block; font-size: 11px; font-weight: 700; letter-spacing: 0.6px; font-family: 'JetBrains Mono','Consolas',monospace; opacity: 0.9; margin-bottom: 8px; }
.gm-i2__big { display: block; font-size: 38px; font-weight: 700; line-height: 1.05; }
.gm-i2__donut { --pct: 0; --c: #4d57f5; width: 108px; height: 108px; border-radius: 50%; background: conic-gradient(var(--c) calc(var(--pct) * 1%), #e4e4e5 0); display: flex; flex-direction: column; align-items: center; justify-content: center; margin: 18px auto 14px; position: relative; }
.gm-i2__donut::before { content: ''; position: absolute; inset: 14px; background: #FFFFFF; border-radius: 50%; z-index: 0; }
.gm-i2__donut > span, .gm-i2__donut > small { position: relative; z-index: 1; text-align: center; line-height: 1.2; }
.gm-i2__donut > span { font-size: 15px; font-weight: 700; color: #111216; }
.gm-i2__donut > small { font-size: 10px; color: #6d7079; margin-top: 2px; }
.gm-i2__name { font-size: 14px; font-weight: 700; color: #111216; text-align: center; margin: 0 16px 10px; line-height: 1.4; }
.gm-i2__body { font-size: 12px; color: #202228; text-align: center; margin: 0 16px 12px; line-height: 1.55; flex: 1; }
.gm-i2__direction { display: flex; align-items: center; justify-content: center; gap: 8px; margin: 0 16px 12px; padding: 7px 12px; background: #f7f6f3; border-radius: 999px; font-size: 11px; font-weight: 600; color: #202228; }
.gm-i2__direction-arrow { font-size: 16px; font-weight: 700; line-height: 1; }
.gm-i2__card--c1 .gm-i2__direction-arrow,
.gm-i2__card--c2 .gm-i2__direction-arrow { color: #E64A4A; }
.gm-i2__card--c3 .gm-i2__direction-arrow { color: #4d57f5; }
.gm-i2__source { margin: 0 16px 16px; padding-top: 10px; border-top: 1px solid #e4e4e5; font-size: 10.5px; color: #6d7079; font-style: italic; text-align: center; }

/* --- 3번 : SEO vs GEO comparison --- */
.gm-i3 { background: #FFFFFF; border: 1px solid #e4e4e5; border-radius: 16px; padding: 32px 28px; box-shadow: 0 4px 16px rgba(17,18,22,0.06); }
.gm-i3__title { font-size: 20px; font-weight: 700; color: #111216; text-align: center; margin: 0 0 4px; }
.gm-i3__subtitle { font-size: 13px; color: #6d7079; text-align: center; margin: 0 0 24px; }
.gm-i3__cols { display: grid; grid-template-columns: 1fr auto 1fr; gap: 28px; align-items: stretch; }
.gm-i3__col { background: #FFFFFF; border: 1px solid #e4e4e5; border-radius: 12px; display: flex; flex-direction: column; overflow: hidden; }
.gm-i3__chip { padding: 18px 16px 14px; text-align: center; color: #FFFFFF; }
.gm-i3__col--seo .gm-i3__chip { background: linear-gradient(135deg, #4d57f5 0%, #6d76f7 100%); }
.gm-i3__col--geo .gm-i3__chip { background: linear-gradient(135deg, #7052f3 0%, #9179f7 100%); }
.gm-i3__chip strong { display: block; font-size: 18px; font-weight: 700; margin-bottom: 2px; }
.gm-i3__chip span { display: block; font-size: 12px; opacity: 0.92; }
.gm-i3__items { list-style: none; margin: 0; padding: 16px 20px 12px; flex: 1; }
.gm-i3__items li { padding: 8px 0; font-size: 14px; color: #202228; border-bottom: 1px dashed #e4e4e5; }
.gm-i3__items li:last-child { border-bottom: 0; }
.gm-i3__q { margin: 0; padding: 14px 18px 16px; border-top: 1px solid #e4e4e5; font-size: 13px; color: #202228; }
.gm-i3__col--seo .gm-i3__q { background: #ebedff; }
.gm-i3__col--geo .gm-i3__q { background: #f0ecfe; }
.gm-i3__q-tag { display: block; font-size: 10px; font-weight: 700; letter-spacing: 0.6px; font-family: 'JetBrains Mono','Consolas',monospace; margin-bottom: 6px; }
.gm-i3__col--seo .gm-i3__q-tag { color: #4d57f5; }
.gm-i3__col--geo .gm-i3__q-tag { color: #7052f3; }
.gm-i3__q-text { font-style: italic; }
.gm-i3__bridge { align-self: center; background: linear-gradient(135deg, #ebedff 0%, #f0ecfe 100%); border: 1.5px solid #7052f3; border-radius: 14px; padding: 20px 22px; text-align: center; position: relative; min-width: 150px; box-shadow: 0 6px 18px rgba(112,82,243,0.18); }
.gm-i3__bridge::before, .gm-i3__bridge::after { content: ''; position: absolute; top: 50%; width: 28px; height: 2px; background: linear-gradient(90deg, #4d57f5 0%, #7052f3 100%); transform: translateY(-50%); }
.gm-i3__bridge::before { left: -28px; }
.gm-i3__bridge::after { right: -28px; }
.gm-i3__bridge-tag { display: block; font-size: 10px; font-weight: 700; font-family: 'JetBrains Mono','Consolas',monospace; letter-spacing: 0.6px; color: #7052f3; margin-bottom: 8px; }
.gm-i3__bridge strong { display: block; font-size: 13px; color: #6d7079; margin-bottom: 4px; font-weight: 600; }
.gm-i3__bridge-asset { display: block; font-size: 17px; font-weight: 700; color: #111216; }

/* --- 4번 : Page → Chunks --- */
.gm-i4 { background: #FFFFFF; border: 1px solid #e4e4e5; border-radius: 16px; padding: 32px 28px 24px; box-shadow: 0 4px 16px rgba(17,18,22,0.06); }
.gm-i4__title { font-size: 20px; font-weight: 700; color: #111216; text-align: center; margin: 0 0 4px; }
.gm-i4__subtitle { font-size: 13px; color: #6d7079; text-align: center; margin: 0 0 24px; }
.gm-i4__layout { display: grid; grid-template-columns: 220px 110px 1fr; gap: 20px; align-items: stretch; }
.gm-i4__page { background: #f7f6f3; border: 1px solid #e4e4e5; border-radius: 10px; padding: 18px; min-height: 380px; }
.gm-i4__page-tag { font: 700 10px 'JetBrains Mono','Consolas',monospace; color: #9699a2; letter-spacing: 0.6px; }
.gm-i4__page-url { display: block; font: 600 12px 'JetBrains Mono','Consolas',monospace; color: #6d7079; margin-top: 6px; padding-bottom: 12px; border-bottom: 1px solid #e4e4e5; }
.gm-i4__page-lines { margin-top: 14px; display: flex; flex-direction: column; gap: 7px; }
.gm-i4__page-lines span { display: block; height: 6px; background: #D4D4DA; border-radius: 2px; }
.gm-i4__arrow { display: flex; flex-direction: column; align-items: center; justify-content: center; padding: 20px 0; }
.gm-i4__arrow-line { font-size: 32px; color: #7052f3; line-height: 1; font-weight: 700; }
.gm-i4__arrow-label { display: block; font-size: 13px; font-weight: 700; color: #7052f3; margin-top: 10px; text-align: center; }
.gm-i4__arrow-sub { display: block; font-size: 11px; color: #6d7079; margin-top: 4px; text-align: center; line-height: 1.3; }
.gm-i4__chunks { display: flex; flex-direction: column; gap: 8px; }
.gm-i4__chunk { padding: 12px 16px; border-radius: 10px; }
.gm-i4__chunk--pass { background: #ebedff; border: 1.5px solid #4d57f5; }
.gm-i4__chunk--fail { background: #f7f6f3; border: 1px solid #e4e4e5; }
.gm-i4__chunk-head { display: flex; justify-content: space-between; align-items: center; }
.gm-i4__chunk-tag { font: 700 10px 'JetBrains Mono','Consolas',monospace; letter-spacing: 0.6px; }
.gm-i4__chunk--pass .gm-i4__chunk-tag { color: #4d57f5; }
.gm-i4__chunk--fail .gm-i4__chunk-tag { color: #9699a2; }
.gm-i4__check, .gm-i4__x { width: 22px; height: 22px; border-radius: 50%; display: inline-flex; align-items: center; justify-content: center; font-weight: 700; font-size: 12px; line-height: 1; }
.gm-i4__check { background: #4d57f5; color: #FFFFFF; }
.gm-i4__x { background: #e4e4e5; color: #9699a2; }
.gm-i4__chunk-body { margin: 6px 0 0; font-size: 13px; color: #202228; line-height: 1.5; }
.gm-i4__chunk--fail .gm-i4__chunk-body { color: #9699a2; }
.gm-i4__note { margin: 18px 0 0; padding-top: 14px; border-top: 1px solid #e4e4e5; font-size: 12px; color: #202228; text-align: center; }
.gm-i4__note strong { color: #4d57f5; }

/* --- Color overrides : defeat .post-body strong/h{2..} darkening on colored bands --- */
.post-body .gm-i2__top,
.post-body .gm-i2__top * { color: #FFFFFF; }
.post-body .gm-i3__chip,
.post-body .gm-i3__chip * { color: #FFFFFF; }

/* --- Author figure (image-only + 1-line source caption, no box) --- */
.author-figure { margin: 14px 0 0; }
.author-figure a { display: block; border-radius: 12px; overflow: hidden; transition: transform 0.15s, box-shadow 0.15s; }
.author-figure a:hover { transform: translateY(-1px); box-shadow: 0 8px 24px rgba(17,18,22,0.10); }
.author-figure img { width: 100%; height: auto; display: block; }
.author-figure figcaption { margin: 8px 0 0; padding: 0; background: transparent; border: none; font-size: 12.5px; color: #6d7079; line-height: 1.5; text-align: center; font-style: normal; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
.author-figure figcaption a { color: inherit; text-decoration: underline; }

/* --- Responsive --- */
@media (max-width: 640px) {
  .gm-i1 { padding: 24px 18px 18px; }
  .gm-i1__bars { gap: 32px; height: 220px; padding: 0; }
  .gm-i1__bar { flex: 0 0 96px; }
  .gm-i1__bar-value { font-size: 22px; }
  .gm-i1__delta { font-size: 11px; padding: 5px 12px; }
  .gm-i1__extra { flex-direction: column; align-items: flex-start; gap: 8px; }
  .gm-i2 { padding: 24px 16px; }
  .gm-i2__grid { grid-template-columns: 1fr; gap: 14px; }
  .gm-i2__big { font-size: 34px; }
  .gm-i3 { padding: 24px 16px; }
  .gm-i3__cols { grid-template-columns: 1fr; gap: 14px; }
  .gm-i3__bridge::before, .gm-i3__bridge::after { display: none; }
  .gm-i3__bridge { width: 100%; }
  .gm-i4 { padding: 24px 16px 18px; }
  .gm-i4__layout { grid-template-columns: 1fr; gap: 16px; }
  .gm-i4__page { min-height: auto; }
  .gm-i4__arrow { padding: 4px 0; flex-direction: row; gap: 10px; }
  .gm-i4__arrow-line { transform: rotate(90deg); }
  .gm-i4__arrow-label, .gm-i4__arrow-sub { margin: 0; }
}
</style>

<figure class="gm-infographic gm-i1">
  <div class="gm-i1__head">
    <h4 class="gm-i1__title">한국 인터넷 이용자의 생성형 AI 경험률</h4>
    <span class="gm-i1__delta">1년 만에 약 2배 · +15.7%p</span>
  </div>
  <div class="gm-i1__chart">
    <div class="gm-i1__bars">
      <div class="gm-i1__bar">
        <span class="gm-i1__bar-value">17.6%</span>
        <div class="gm-i1__bar-fill" style="height:44%"></div>
        <span class="gm-i1__bar-year">2023년</span>
      </div>
      <div class="gm-i1__bar gm-i1__bar--primary">
        <span class="gm-i1__bar-value">33.3%</span>
        <div class="gm-i1__bar-fill" style="height:83%"></div>
        <span class="gm-i1__bar-year">2024년</span>
      </div>
    </div>
  </div>
  <div class="gm-i1__extra">
    <span class="gm-i1__extra-tag">사용 분야 1위</span>
    <span class="gm-i1__extra-text">단순 정보검색이 <strong>81.9%</strong> — 한국인은 이미 AI를 검색처럼 쓰고 있어요.</span>
  </div>
  <figcaption class="gm-i1__source">출처: <a href="https://www.nia.or.kr/site/nia_kor/ex/bbs/View.do?cbIdx=99870&bcIdx=27869&parentSeq=27869" target="_blank" rel="noopener">NIA·과학기술정보통신부, 「2024 인터넷이용실태조사」 (2025-03)</a> · 대상: 만 12세 이상 인터넷 이용자</figcaption>
</figure>

## GEO가 도대체 뭔가요?

GEO는 *Generative Engine Optimization*, 한국어로는 생성형 엔진 최적화라고 해요. 한 문장으로 정리하면 — **AI가 답변을 만들 때 우리 회사의 콘텐츠를 출처로 인용하게 만드는 일**, 이게 GEO의 본질이에요.

<div class="callout callout--quote">
  <div class="callout-title">📚 GEO 학술 원전</div>
  <div class="callout-body">
    <p>Aggarwal 외(Princeton 외, KDD 2024)는 GEO 프레임워크가 생성형 엔진 응답에서의 가시성을 <strong>최대 40%까지 끌어올릴 수 있다</strong>고 보고했어요.</p>
    <blockquote>
      <p>"Through rigorous evaluation, we demonstrate that GEO can boost visibility by up to 40% in generative engine responses."</p>
      <p>— Aggarwal et al., <a href="https://arxiv.org/abs/2311.09735" target="_blank" rel="noopener">GEO: Generative Engine Optimization (arXiv:2311.09735)</a></p>
    </blockquote>
  </div>
</div>
<figure class="author-figure">
  <a href="https://pranjal2041.github.io/" target="_blank" rel="noopener"><img src="/assets/img/blog/geo-introduction/aggarwal_hero.png" alt="Pranjal Aggarwal — Carnegie Mellon University PhD Student 개인 사이트" /></a>
  <figcaption>출처: pranjal2041.github.io</figcaption>
</figure>

ChatGPT가 직접 어떻게 작동하는지 궁금하다면, OpenAI가 ChatGPT Search 기능을 처음 공개했던 영상을 한 번 보시는 걸 추천해요. AI가 답을 만들 때 어떤 출처를 어떻게 가져오는지 시연으로 잘 보여줍니다.

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/OzgNJJ2ErEE" title="Search—12 Days of OpenAI: Day 8" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

<figure class="gm-infographic gm-i3">
  <h4 class="gm-i3__title">SEO와 GEO는 무엇이 같고, 무엇이 다른가</h4>
  <p class="gm-i3__subtitle">같은 사이트에서 두 게임이 동시에 진행됩니다. 평가 기준이 다를 뿐.</p>
  <div class="gm-i3__cols">
    <article class="gm-i3__col gm-i3__col--seo">
      <header class="gm-i3__chip">
        <strong>SEO</strong>
        <span>전통 검색 최적화</span>
      </header>
      <ul class="gm-i3__items">
        <li>검색어 매칭</li>
        <li>백링크 · DA</li>
        <li>기술 SEO</li>
        <li>1순위 랭킹</li>
        <li>클릭당 트래픽</li>
      </ul>
      <div class="gm-i3__q">
        <span class="gm-i3__q-tag">SEO의 게임</span>
        <span class="gm-i3__q-text">“우리 페이지가 1순위에 가는가?”</span>
      </div>
    </article>

    <aside class="gm-i3__bridge">
      <span class="gm-i3__bridge-tag">COMMON</span>
      <strong>공통 자산</strong>
      <span class="gm-i3__bridge-asset">좋은 콘텐츠</span>
    </aside>

    <article class="gm-i3__col gm-i3__col--geo">
      <header class="gm-i3__chip">
        <strong>GEO / AEO</strong>
        <span>답변 엔진 최적화</span>
      </header>
      <ul class="gm-i3__items">
        <li>청크 적합도</li>
        <li>entity 신호</li>
        <li>권위 출처</li>
        <li>답변 인용</li>
        <li>AI 답변 노출</li>
      </ul>
      <div class="gm-i3__q">
        <span class="gm-i3__q-tag">GEO/AEO의 게임</span>
        <span class="gm-i3__q-text">“AI 답변에 우리 단락이 들어가는가?”</span>
      </div>
    </article>
  </div>
</figure>

조금 더 풀어볼게요. 우리가 알던 검색은 10개의 파란 링크였어요. 사용자가 직접 클릭해서 우리 사이트로 들어와야 마케팅이 시작됐죠. AI 검색은 다릅니다. ChatGPT · Perplexity · Gemini · Claude 같은 생성형 엔진이 답을 직접 만들어내고, 그 답 안에 어떤 회사·서비스를 인용할지를 결정해요. 사용자가 우리 사이트에 들어오기 전에 의사결정의 큰 부분이 이미 끝나는 거죠.

즉, GEO의 목표는 한 줄로 — **"검색되는 회사"에서 "AI가 인용하는 회사"로 옮겨가는 것**입니다.

## SEO랑 뭐가 다른가요?

SEO와 GEO를 완전히 다른 게임으로 묘사하는 글이 많은데, 저는 그 표현이 살짝 위험하다고 봐요. 연속선상으로 보는 게 더 정확합니다. Lily Ray는 최근 글에서 이렇게 말했어요.

<div class="callout callout--quote">
  <div class="callout-body">
    <blockquote>
      <p>"It worked every time because LLMs use search engines, and the articles were quickly indexed and ranked well in web search."</p>
      <p>— LLM은 결국 검색엔진을 사용하고, 우리 글이 빠르게 색인되고 검색에서 상위노출됐기 때문에 매번 작동했다.</p>
      <p>Lily Ray, <a href="https://lilyraynyc.substack.com/p/a-reflection-on-seo-and-ai-search" target="_blank" rel="noopener"><em>A Reflection on SEO, GEO & AI Search in 2025</em></a></p>
    </blockquote>
  </div>
</div>
<figure class="author-figure">
  <a href="https://www.amsive.com/insights/author/lily-ray/" target="_blank" rel="noopener"><img src="/assets/img/blog/geo-introduction/lily_ray_amsive.png" alt="Lily Ray — Amsive VP, SEO Strategy & Research 공식 작가 페이지" /></a>
  <figcaption>출처: amsive.com</figcaption>
</figure>

실제로 [Similarweb 2025 Generative AI Report](https://www.similarweb.com/corp/reports/2025-generative-ai-landscape/) 분석에 따르면 **ChatGPT 사용자의 약 95%는 여전히 Google을 병행 사용**해요. SEO 기반은 살아 있고, GEO는 그 위에 새로운 층을 얹는 작업에 가깝습니다.

다만 새 층은 분명히 다른 규칙으로 움직여요.

| 항목 | SEO | GEO |
|---|---|---|
| 측정 단위 | 페이지·키워드 순위 | **청크** — 문단·표·정의 한 덩어리 |
| 평가 주체 | 구글 검색 알고리즘 | ChatGPT · Perplexity · Gemini · Claude |
| 성공의 모습 | 1페이지 상위노출 → 클릭 | AI 답변 안에 **인용** |
| 측정 도구 | GA · 서치콘솔 · 키워드 도구 | 아직 표준 부재 — 직접 측정 필요 |

<figure class="gm-infographic gm-i4">
  <h4 class="gm-i4__title">AI는 페이지가 아니라 청크 단위로 인용합니다</h4>
  <p class="gm-i4__subtitle">한 페이지가 200~500자 단위 청크로 잘리고, 그중 답변 적합도가 높은 청크만 인용됩니다.</p>
  <div class="gm-i4__layout">
    <div class="gm-i4__page">
      <span class="gm-i4__page-tag">PAGE</span>
      <span class="gm-i4__page-url">/booking/mice-package</span>
      <div class="gm-i4__page-lines">
        <span style="width:92%"></span>
        <span style="width:78%"></span>
        <span style="width:88%"></span>
        <span style="width:60%"></span>
        <span style="width:84%"></span>
        <span style="width:90%"></span>
        <span style="width:72%"></span>
        <span style="width:86%"></span>
        <span style="width:55%"></span>
        <span style="width:80%"></span>
        <span style="width:94%"></span>
        <span style="width:68%"></span>
      </div>
    </div>
    <div class="gm-i4__arrow">
      <span class="gm-i4__arrow-line">→</span>
      <span class="gm-i4__arrow-label">청크 분리</span>
      <span class="gm-i4__arrow-sub">H2/H3 + 의미 단위</span>
    </div>
    <div class="gm-i4__chunks">
      <article class="gm-i4__chunk gm-i4__chunk--pass">
        <div class="gm-i4__chunk-head">
          <span class="gm-i4__chunk-tag">CHUNK 01 · 점수 82</span>
          <span class="gm-i4__check">✓</span>
        </div>
        <p class="gm-i4__chunk-body">Q: MICE 50인 패키지 가격은? · A: 5만원/인, 회의실 6시간 포함…</p>
      </article>
      <article class="gm-i4__chunk gm-i4__chunk--pass">
        <div class="gm-i4__chunk-head">
          <span class="gm-i4__chunk-tag">CHUNK 02 · 점수 71</span>
          <span class="gm-i4__check">✓</span>
        </div>
        <p class="gm-i4__chunk-body">표: 회의실 5종 비교 (200석 · 동시통역 · 빔프로젝터 등)</p>
      </article>
      <article class="gm-i4__chunk gm-i4__chunk--fail">
        <div class="gm-i4__chunk-head">
          <span class="gm-i4__chunk-tag">CHUNK 03 · 점수 28</span>
          <span class="gm-i4__x">×</span>
        </div>
        <p class="gm-i4__chunk-body">"그것은 다음과 같이 진행됩니다…" (지시어 시작 · 주어 누락)</p>
      </article>
      <article class="gm-i4__chunk gm-i4__chunk--fail">
        <div class="gm-i4__chunk-head">
          <span class="gm-i4__chunk-tag">CHUNK 04 · 점수 35</span>
          <span class="gm-i4__x">×</span>
        </div>
        <p class="gm-i4__chunk-body">긴 한 문단 · 표 리스트 없음 · 직답 없음</p>
      </article>
      <article class="gm-i4__chunk gm-i4__chunk--pass">
        <div class="gm-i4__chunk-head">
          <span class="gm-i4__chunk-tag">CHUNK 05 · 점수 65</span>
          <span class="gm-i4__check">✓</span>
        </div>
        <p class="gm-i4__chunk-body">Q: 노바스테이 광화문 주차 가능? · A: 지하 60대, 투숙객 무료</p>
      </article>
    </div>
  </div>
  <p class="gm-i4__note"><strong>점수 50점 이상</strong> 청크만 AI 답변에 인용됩니다. 5개 청크 중 3개만 인용 적격이에요.</p>
</figure>

같은 페이지라도 AI에게는 하나의 글이 아니라 수십 개의 청크로 보여요. AI는 질문에 답할 때 문단 단위로 후보를 추리고, 그중 가장 직답에 가까운 청크를 골라 인용해요. 그래서 GEO에서는 페이지를 잘 만드는 것보다 **청크 하나하나를 잘 만드는 것**이 더 중요해집니다.

여기서 SEO 시대의 상위노출 1위가 가지던 의미도 바뀌어요. Ahrefs는 30만 키워드를 비교 분석해서, **검색 결과 상단에 AI Overview가 노출되면 1위 페이지가 가져가던 클릭이 AI Overview가 없는 동급 키워드 대비 34.5% 줄어든다**고 발표했어요 ([Ahrefs, 2025-04](https://ahrefs.com/blog/ai-overviews-reduce-clicks/)). 2026년 2월 업데이트에서는 그 격차가 **58%까지** 벌어졌습니다 ([Ahrefs Update, 2026-02](https://ahrefs.com/blog/ai-overviews-reduce-clicks-update/)). 1위 자리는 그대로 있는데, AI Overview가 위에 떠 있으면 1위가 가져가던 클릭이 절반 가까이 사라지는 거죠.

<div class="callout callout--note">
  <div class="callout-title">📝 핵심 한 줄</div>
  <div class="callout-body">
    <p>GEO는 SEO의 대체가 아니라 <strong>확장</strong>이에요. SEO 기반이 약하면 GEO는 더 약합니다.</p>
  </div>
</div>

## 왜 지금이어야 하나요?

세 가지 신호가 같은 방향을 가리키고 있어요.

<figure class="gm-infographic gm-i2">
  <h4 class="gm-i2__title">지금 GEO를 시작해야 하는 3가지 신호</h4>
  <p class="gm-i2__subtitle">같은 방향을 가리키는 데이터 — 검색 감소 · 클릭 감소 · 한국 AI 확산</p>
  <div class="gm-i2__grid">
    <article class="gm-i2__card gm-i2__card--c1">
      <div class="gm-i2__top">
        <span class="gm-i2__tag">SIGNAL 01</span>
        <span class="gm-i2__big">25%</span>
      </div>
      <div class="gm-i2__donut" style="--pct:25;--c:#4d57f5">
        <span>25%</span>
        <small>감소 전망</small>
      </div>
      <h5 class="gm-i2__name">전통 검색 볼륨 감소 전망</h5>
      <p class="gm-i2__body">2026년까지 전통 검색 엔진 볼륨이 25% 줄어들 것으로 전망</p>
      <div class="gm-i2__direction"><span class="gm-i2__direction-arrow">↘</span><span>전통 검색 감소</span></div>
      <p class="gm-i2__source">출처: Gartner Predicts (2024-02)</p>
    </article>
    <article class="gm-i2__card gm-i2__card--c2">
      <div class="gm-i2__top">
        <span class="gm-i2__tag">SIGNAL 02</span>
        <span class="gm-i2__big">58.5%</span>
      </div>
      <div class="gm-i2__donut" style="--pct:58.5;--c:#7052f3">
        <span>58.5%</span>
        <small>제로클릭</small>
      </div>
      <h5 class="gm-i2__name">미국 Google 검색의 제로클릭</h5>
      <p class="gm-i2__body">2024년 미국 Google 검색의 58.5%가 제로클릭으로 종료 (EU는 59.7%)</p>
      <div class="gm-i2__direction"><span class="gm-i2__direction-arrow">↘</span><span>오픈웹 클릭 감소</span></div>
      <p class="gm-i2__source">출처: SparkToro 2024 Zero-Click Study</p>
    </article>
    <article class="gm-i2__card gm-i2__card--c3">
      <div class="gm-i2__top">
        <span class="gm-i2__tag">SIGNAL 03</span>
        <span class="gm-i2__big">33.3%</span>
      </div>
      <div class="gm-i2__donut" style="--pct:33.3;--c:#E64A4A">
        <span>33.3%</span>
        <small>경험률</small>
      </div>
      <h5 class="gm-i2__name">한국인의 생성형 AI 경험률</h5>
      <p class="gm-i2__body">한국 인터넷 이용자의 경험률이 1년 만에 17.6% → 33.3%로 2배</p>
      <div class="gm-i2__direction"><span class="gm-i2__direction-arrow">↗</span><span>AI 사용 확산</span></div>
      <p class="gm-i2__source">출처: NIA 2024 인터넷이용실태조사</p>
    </article>
  </div>
</figure>

**신호 1 — 전통 검색 자체가 줄고 있어요.**
Gartner는 **2026년까지 전통 검색 엔진 볼륨이 25% 감소**할 것으로 전망했어요 ([Gartner Predicts, 2024-02](https://www.gartner.com/en/newsroom/press-releases/2024-02-19-gartner-predicts-search-engine-volume-will-drop-25-percent-by-2026-due-to-ai-chatbots-and-other-virtual-agents)). 검색 마케팅이 챗봇·AI 에이전트에게 시장 점유율을 내준다는 분석입니다. 한 발 더 가서, **2028년까지 브랜드의 오가닉 검색 트래픽이 50% 이상 감소**할 수 있다는 예측도 같이 내놨어요 ([Gartner Predicts, 2023-12](https://www.gartner.com/en/newsroom/press-releases/2023-12-14-gartner-predicts-fifty-percent-of-consumers-will-significantly-limit-their-interactions-with-social-media-by-2025)). SEO에 의존하던 마케팅의 절반이 구조적으로 흔들리는 시나리오입니다.

**신호 2 — 검색이 일어나도 클릭은 줄고 있어요.**
SparkToro의 2024년 조사에서는 **미국 Google 검색의 58.5%, EU의 59.7%가 제로클릭**으로 끝났어요. 1,000번 검색해도 오픈웹으로 향한 클릭은 **미국 374회, EU 360회**에 불과했죠 ([SparkToro 2024 Zero-Click Search Study](https://sparktoro.com/blog/2024-zero-click-search-study-for-every-1000-us-google-searches-only-374-clicks-go-to-the-open-web-in-the-eu-its-360/)). AI 답변·요약·지식 그래프가 클릭 없이 답을 끝내고 있는 거예요.

**신호 3 — 한국 사용자도 이미 AI로 정보를 검색하고 있어요.**
한국 정부 공식 통계(2024 인터넷이용실태조사)에 따르면 만 12세 이상 인터넷 이용자의 **생성형 AI 경험률은 2023년 17.6%에서 2024년 33.3%로 1년 만에 약 2배**가 됐어요. 그리고 사용 분야 1위가 **단순 정보검색(81.9%)** 입니다 ([NIA 2024 인터넷이용실태조사](https://www.nia.or.kr/site/nia_kor/ex/bbs/View.do?cbIdx=99870&bcIdx=27869&parentSeq=27869)). 한국 사용자가 이미 AI를 검색처럼 쓰고 있다는 뜻이에요.

세 신호를 합치면 답은 분명해요. **전통 검색은 줄고, 남은 검색도 클릭은 줄고, 사용자는 AI로 옮겨갔다.** GEO는 내년에 시작할 일이 아니라 작년에 시작했어야 할 일입니다.

## 한국 기업이 특히 약한 이유는?

한국 시장에는 몇 가지 특수한 조건이 있어요.

**약점 1 — 네이버 의존 + 한국어 콘텐츠가 AI에 덜 학습됨.**
StatCounter 기준 2026년 4월 한국 검색엔진 점유율은 **Google 47.36%, Naver 42.39%, Bing 6.15%, Daum 1.37%** 입니다 ([StatCounter Korea](https://gs.statcounter.com/search-engine-market-share/all/south-korea)). 네이버 의존도가 여전히 절반에 가까운 시장이에요. 문제는 AI가 학습한 한국어 콘텐츠의 상당 부분이 네이버 안에 갇혀 있다는 점이에요. 네이버 블로그·카페·뉴스는 외부 크롤러 접근이 제한적이라, 글로벌 AI 모델들은 한국 기업의 실체를 잘 모르는 상태가 많습니다.

**약점 2 — 자사몰·자체 사이트의 AI 친화도가 낮아요.**
컨슈머인사이트가 2025년 하반기 14세 이상 휴대폰 이용자 3,148명을 조사한 결과 AI 서비스 이용 경험률은 **74%**, 서비스별로는 **ChatGPT 54% · Gemini 30% · 에이닷 17% · 뤼튼 13%**로 나타났어요 ([컨슈머인사이트 2025 하반기](https://www.consumerinsight.co.kr/boardView?no=3832&id=ins02_list&schFlag=0)). 사용자는 이미 4개 이상 AI를 동시에 쓰고 있는데, 정작 한국 기업 자사몰은 Schema 마크업·llms.txt·구조화된 FAQ 같은 AI가 읽기 좋은 형식이 거의 적용돼 있지 않아요.

**약점 3 — 콘텐츠가 페이지 단위로 만들어졌어요.**
한국 마케팅 콘텐츠는 상세페이지, 브랜드 스토리, 보도자료 같이 완성된 페이지 형태로 제작돼 왔어요. AI는 그걸 청크로 다시 자르는데, 청크 단위로 보면 정의 한 줄·표·Q&A 같은 직답 형태가 거의 없다는 점이 드러납니다. 한 페이지에 정보가 잘 들어 있어도, AI가 인용할 만한 청크 한 덩어리가 없는 경우가 많아요.

<div class="callout callout--note">
  <div class="callout-title">📝 3중 약점</div>
  <div class="callout-body">
    <p>정리하면 — <strong>네이버 의존 + AI 미인식 + 청크 부재</strong> 3중 약점. 그래서 한국 기업의 GEO는 글로벌 평균보다 더 큰 격차에서 시작해요. 동시에 그게 <strong>기회</strong>이기도 합니다. 먼저 움직이는 회사가 카테고리 인용 자리를 가져갑니다.</p>
  </div>
</div>

## 오늘 뭐부터 해야 해요?

학습은 여기까지 충분해요. 진짜 중요한 건 내일이 아니라 오늘 뭘 할 수 있느냐죠. 두 가지만 짚을게요.

**① Schema.org Organization 마크업 — AI에게 회사 정체성 알려주기**

AI가 우리 회사가 누구인지를 인식하는 가장 빠른 방법은 구조화된 데이터예요. 홈페이지에 아래 JSON-LD를 한 블록 넣는 것만으로 시작할 수 있어요.

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "회사명",
  "url": "https://yourcompany.com",
  "logo": "https://yourcompany.com/logo.png",
  "description": "한 줄 회사 설명 (AI가 그대로 인용할 정의문)",
  "sameAs": [
    "https://www.linkedin.com/company/yourcompany",
    "https://www.youtube.com/@yourcompany",
    "https://www.instagram.com/yourcompany"
  ]
}
</script>
```

여기서 가장 중요한 건 **`sameAs`** 배열이에요. AI가 "이 회사 = 저 회사 = 또 저기 그 회사" 라는 **엔티티 연결**을 만들 때 결정적인 신호가 됩니다.

**② llms.txt — AI 크롤러에게 사이트 안내문 주기**

`/llms.txt` 파일은 robots.txt의 AI 버전이에요. 사이트 루트에 한 장 올려두면 LLM 기반 크롤러가 우리 사이트의 핵심 페이지·구조·정책을 빠르게 파악합니다.

```
# 회사명

> 한 줄 회사 소개 — AI에게 보여줄 핵심 정체성

## 핵심 페이지
- [회사 소개](https://yourcompany.com/about): 우리는 누구인가
- [서비스](https://yourcompany.com/service): 무엇을 하는가
- [블로그](https://yourcompany.com/blog): 최신 인사이트

## 정책
- AI 학습·인용 허용 여부, 출처 표기 요청 사항 등
```

<div class="callout callout--tip">
  <div class="callout-title">💡 실행 우선순위</div>
  <div class="callout-body">
    <p>이 두 가지는 <strong>오늘 1시간이면</strong> 적용할 수 있어요. 그리고 그 1시간이, 다음 1년 동안 ChatGPT·Perplexity가 우리 회사를 인용할 가능성을 <strong>0에서 시작 가능 상태로</strong> 바꿔놓습니다.</p>
  </div>
</div>

공식 문서가 궁금하시면 [Schema.org Organization](https://schema.org/Organization)과 [llms.txt 표준 제안 (llmstxt.org)](https://llmstxt.org/)을 같이 보시면 좋아요.

## 우리 회사는, 지금 어디쯤일까?

여기까지 읽고 한 번쯤 던져보고 싶은 질문이 생기실 거예요.

> **우리 회사는, 지금 어디쯤일까?**

이 질문에 답하는 가장 빠른 방법은 직접 측정해보는 것이에요. 지금 바로 ChatGPT에 "OO 분야 추천 회사 알려줘" 라고 물어보세요. 우리 회사가 답변에 등장하면 시작 지점이 좋은 편이고, 등장하지 않으면 바로 그 자리에서 GEO가 필요해진 신호예요.

직접 측정이 어렵거나, 어떤 청크를 어떻게 고쳐야 인용될지가 막막하면 [30초 무료진단](https://app.nipal-ai.com/)으로 한 번 물어봐주세요. ChatGPT · Gemini · Perplexity 세 AI에 질문을 3개씩 동시에 던져서 답변 9개와 AI 노출 점수를 30초 안에 보여드려요 — 가입도 결제도 없어요 🙂

[다음 글에서는 그 4축 — **EEAT · 토픽 권위도 · 엔티티 현저성 · 청크 적합도** — 가 무엇이고 어떻게 9 KPI로 합쳐지는지](/blog/geo-4axis/) 정리해두었어요.

<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "FAQPage",
      "@id": "https://nipal-ai.com/blog/geo-introduction/#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "GEO가 도대체 뭔가요?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "GEO는 Generative Engine Optimization, 한국어로는 생성형 엔진 최적화입니다. 한 문장으로 정리하면 AI가 답변을 만들 때 우리 회사의 콘텐츠를 출처로 인용하게 만드는 일입니다. Aggarwal 외(Princeton 외, KDD 2024)는 GEO 프레임워크가 생성형 엔진 응답에서의 가시성을 최대 40%까지 끌어올릴 수 있다고 보고했습니다."
          }
        },
        {
          "@type": "Question",
          "name": "SEO랑 뭐가 다른가요?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "SEO는 페이지·키워드 순위 게임이고 GEO는 청크 단위로 AI 답변에 인용되는 게임입니다. 두 게임이 같은 사이트에서 동시에 진행되며 공통 자산은 좋은 콘텐츠지만 평가 기준이 다릅니다. Similarweb 분석에 따르면 ChatGPT 사용자의 약 95%는 여전히 Google을 병행 사용하므로 SEO 기반은 살아 있고 GEO는 그 위에 새로운 층을 얹는 작업에 가깝습니다."
          }
        },
        {
          "@type": "Question",
          "name": "왜 지금이어야 하나요?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "세 가지 신호가 같은 방향을 가리킵니다. 첫째 Gartner는 2026년까지 전통 검색 엔진 볼륨이 25% 감소하고 2028년까지 브랜드 오가닉 검색 트래픽이 50% 이상 감소할 것으로 전망합니다. 둘째 SparkToro 2024년 조사에서 미국 Google 검색의 58.5%, EU의 59.7%가 제로클릭으로 끝났습니다. 셋째 한국 인터넷 이용자의 생성형 AI 경험률이 1년 만에 17.6%에서 33.3%로 두 배가 됐고 사용 1순위는 단순 정보검색(81.9%)입니다."
          }
        },
        {
          "@type": "Question",
          "name": "한국 기업이 특히 약한 이유는?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "한국 시장의 3중 약점 때문입니다. 첫째 StatCounter 기준 2026년 4월 한국 검색엔진 점유율은 Google 47.36%, Naver 42.39%로 네이버 의존도가 절반에 가깝고 네이버 콘텐츠는 외부 크롤러 접근 제한으로 글로벌 AI 모델 학습 누락 비율이 높습니다. 둘째 한국 기업 자사몰의 Schema·llms.txt·구조화 FAQ 같은 AI 친화 형식 적용률이 매우 낮습니다. 셋째 콘텐츠가 페이지 단위로 만들어져 AI 청크 분할 시 정의·표·Q&A 같은 직답 형태가 부족합니다."
          }
        },
        {
          "@type": "Question",
          "name": "오늘 뭐부터 해야 해요?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "두 가지를 오늘 1시간 안에 적용할 수 있습니다. 첫째 Schema.org Organization 마크업을 홈페이지에 JSON-LD로 삽입하고 sameAs 배열에 회사의 공식 채널(LinkedIn·YouTube·Instagram 등) 4개 이상을 연결합니다. 둘째 robots.txt의 AI 버전인 /llms.txt 파일을 사이트 루트에 만들어 LLM 기반 크롤러가 우리 사이트의 핵심 페이지·구조·정책을 빠르게 파악하게 합니다."
          }
        },
        {
          "@type": "Question",
          "name": "우리 회사는 지금 어디쯤일까?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "직접 측정해보는 것이 가장 빠릅니다. ChatGPT에 자사 카테고리 추천을 물어 답변에 회사가 등장하는지 확인합니다. 등장하지 않으면 GEO가 필요한 신호이며 NIPAL AI 무료진단으로 ChatGPT·Gemini·Perplexity 세 AI에 질문 3개씩 동시 측정해 AI 노출 점수와 어떤 브랜드가 대신 추천되는지 30초 안에 확인할 수 있습니다."
          }
        }
      ]
    },
    {
      "@type": "HowTo",
      "@id": "https://nipal-ai.com/blog/geo-introduction/#howto",
      "name": "AI가 우리 회사를 인용하게 만드는 오늘의 두 단계",
      "description": "Schema.org Organization 마크업과 llms.txt 파일 적용으로 AI 검색 엔진의 회사 인식을 시작합니다.",
      "totalTime": "PT1H",
      "step": [
        {
          "@type": "HowToStep",
          "position": 1,
          "name": "Schema.org Organization 마크업 적용",
          "text": "홈페이지 head 섹션에 JSON-LD 형식으로 Organization Schema를 삽입합니다. name·url·logo·description과 함께 sameAs 배열에 회사의 공식 채널(LinkedIn·YouTube·Instagram 등) 4개 이상을 연결합니다. AI 크롤러가 회사 엔티티를 인식하는 가장 빠른 신호입니다.",
          "url": "https://schema.org/Organization"
        },
        {
          "@type": "HowToStep",
          "position": 2,
          "name": "llms.txt 파일 생성",
          "text": "사이트 루트에 /llms.txt 파일을 추가해 LLM 기반 크롤러에게 핵심 페이지·구조·정책을 안내합니다. robots.txt의 AI 버전 역할을 합니다.",
          "url": "https://llmstxt.org/"
        }
      ]
    },
    {
      "@type": "BlogPosting",
      "@id": "https://nipal-ai.com/blog/geo-introduction/#article",
      "headline": "GEO란 무엇인가 — AI가 인용하는 회사가 되는 법",
      "description": "Generative Engine Optimization(GEO)의 정의, SEO와의 차이, 한국 기업이 지금 시작해야 하는 이유를 9개 1차 출처와 함께 정리합니다.",
      "datePublished": "2026-05-12T10:00:00+09:00",
      "dateModified": "2026-05-14T11:00:00+09:00",
      "author": {
        "@type": "Organization",
        "name": "NIPAL AI",
        "url": "https://nipal-ai.com/"
      },
      "publisher": {
        "@type": "Organization",
        "name": "NIPAL AI",
        "url": "https://nipal-ai.com",
        "logo": {"@type": "ImageObject", "url": "https://nipal-ai.com/assets/img/logo.png"}
      },
      "inLanguage": "ko",
      "image": "https://nipal-ai.com/assets/img/blog/geo-introduction/og.png",
      "mainEntityOfPage": "https://nipal-ai.com/blog/geo-introduction/",
      "about": [
        {"@type": "Thing", "name": "Generative Engine Optimization", "sameAs": "https://en.wikipedia.org/wiki/Generative_engine_optimization"},
        {"@type": "Thing", "name": "Answer Engine Optimization"},
        {"@type": "Thing", "name": "AI Search"},
        {"@type": "Thing", "name": "Search Engine Optimization", "sameAs": "https://en.wikipedia.org/wiki/Search_engine_optimization"}
      ],
      "mentions": [
        {"@type": "Thing", "name": "ChatGPT", "sameAs": "https://chatgpt.com/"},
        {"@type": "Thing", "name": "Gemini", "sameAs": "https://gemini.google.com/"},
        {"@type": "Thing", "name": "Claude", "sameAs": "https://claude.ai/"},
        {"@type": "Thing", "name": "Perplexity", "sameAs": "https://www.perplexity.ai/"},
        {"@type": "Organization", "name": "Gartner", "sameAs": "https://www.gartner.com/"},
        {"@type": "Organization", "name": "Ahrefs", "sameAs": "https://ahrefs.com/"},
        {"@type": "Organization", "name": "SparkToro", "sameAs": "https://sparktoro.com/"},
        {"@type": "Organization", "name": "Similarweb", "sameAs": "https://www.similarweb.com/"},
        {"@type": "Organization", "name": "한국지능정보사회진흥원", "sameAs": "https://www.nia.or.kr/"},
        {"@type": "Person", "name": "Lily Ray", "sameAs": "https://www.amsive.com/insights/author/lily-ray/"},
        {"@type": "Person", "name": "Pranjal Aggarwal", "sameAs": "https://pranjal2041.github.io/"},
        {"@type": "ScholarlyArticle", "name": "GEO: Generative Engine Optimization", "sameAs": "https://arxiv.org/abs/2311.09735"}
      ],
      "speakable": {
        "@type": "SpeakableSpecification",
        "cssSelector": [".post-summary", ".post-title", ".post-lede"]
      }
    }
  ]
}
</script>
