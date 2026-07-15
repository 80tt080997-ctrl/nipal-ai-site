---
title: "청크 단위 처방 — AI에 인용되는 페이지를 쓰는 5가지 패턴"
description: "GEO 실행은 페이지가 아니라 청크 단위로 일어납니다. Anthropic·LlamaIndex·EMNLP 학술 출처를 바탕으로 오늘 적용할 5가지 작성 패턴을 정리합니다."
date: 2026-05-16 10:00:00 +0900
last_modified_at: 2026-05-14 12:00:00 +0900
author_id: nipal
category: 실행 노트
tags: [GEO, AEO, chunk, RAG, contextual-retrieval, writing]
image: /assets/img/blog/chunk-prescription/og.png
summary: |
  - AI는 페이지가 아니라 **청크 단위로 인용**해요. 청크는 보통 200~500 토큰의 의미 단위 문단입니다.
  - Anthropic은 청크 앞에 50~100 토큰의 설명 맥락을 붙이면 **retrieval failure가 단독 35%, BM25 결합 49%, reranking 추가 시 67%까지 감소**한다고 보고합니다.
  - Cookbook 실측에서는 **Pass@10이 87.15% → 92.34% → 95.26%로 상승**. 청크 재작성의 정량적 가치예요.
  - 라이터가 오늘 적용할 5가지 패턴은 **Q&A H2 분할 · 정의 박스 · 정형 표·리스트 · 엔티티 풍부화 · 출처 카드**입니다.
  - 다만 <em>semantic 분할이 무조건 더 낫다</em>는 통념은 학술적으로 깨졌어요 (Qu et al. 2024 — 5개 데이터셋 중 3개에서 fixed-size 우위).
---

블로그 한 편을 두 시간 들여 잘 썼는데 ChatGPT가 우리 페이지 대신 다른 회사 페이지를 인용해 본 적 있으세요? 저도 처음엔 <em>'SEO도 잘 됐는데 왜?'</em> 라고 생각했어요. 답은 페이지가 아니라 **청크**에 있었습니다.

AI는 페이지 전체를 통째로 읽지 않아요. 페이지를 200~500 토큰의 작은 덩어리(=청크)로 자른 뒤, 사용자 질문과 가장 잘 맞는 청크 <em>한 개</em>를 골라 답변의 근거로 씁니다. 같은 페이지 안에서도 어떤 청크는 뽑히고, 어떤 청크는 묻혀요.

이 글에서는 라이터가 오늘부터 페이지를 다시 쓸 수 있는 **5가지 청크 처방 패턴**을 정리합니다. Anthropic·LlamaIndex·EMNLP 학술 출처로 <em>왜</em> 효과가 있는지 짚고, 한국어 콘텐츠에 어떻게 옮길지까지 다뤄볼게요.

<style>
/* === NIPAL AI infographics — Chunk Prescription (i5~i9) === */
.gm-infographic { margin: 40px 0; font-family: 'Pretendard', 'Apple SD Gothic Neo', system-ui, sans-serif; color: #111216; }
.gm-infographic *, .gm-infographic *::before, .gm-infographic *::after { box-sizing: border-box; }

/* --- 5번 : RAG 5-step flow with inline arrows --- */
.gm-i5 { background: #FFFFFF; border: 1px solid #e4e4e5; border-radius: 16px; padding: 32px 28px; box-shadow: 0 4px 16px rgba(17,18,22,0.06); }
.gm-i5__title { font-size: 20px; font-weight: 700; color: #111216; text-align: center; margin: 0 0 4px; }
.gm-i5__subtitle { font-size: 13px; color: #6d7079; text-align: center; margin: 0 0 28px; }
.gm-i5__flow { display: flex; gap: 0; align-items: stretch; flex-wrap: nowrap; }
.gm-i5__step { flex: 1 1 0; min-width: 0; background: #f7f6f3; border: 1px solid #e4e4e5; border-radius: 12px; padding: 16px 12px 18px; text-align: center; display: flex; flex-direction: column; align-items: center; justify-content: flex-start; gap: 6px; position: relative; }
.gm-i5__step--1 { background: linear-gradient(180deg, #f1f2fe 0%, #f8f8fe 100%); border-color: #c7cbfc; }
.gm-i5__step--2 { background: linear-gradient(180deg, #e4e6fe 0%, #ebedff 100%); border-color: #b3b8fa; }
.gm-i5__step--3 { background: linear-gradient(180deg, #d9d2fc 0%, #e5ddfd 100%); border-color: #9781f7; box-shadow: 0 6px 18px rgba(112,82,243,0.15); }
.gm-i5__step--4 { background: linear-gradient(180deg, #ccc0fb 0%, #d8cffc 100%); border-color: #8066f5; }
.gm-i5__step--5 { background: linear-gradient(180deg, #b09df8 0%, #c4b3fa 100%); border-color: #7052f3; box-shadow: 0 8px 22px rgba(112,82,243,0.28); }
.gm-i5__num { display: inline-flex; align-items: center; justify-content: center; padding: 3px 10px; border-radius: 999px; font: 700 10px/1 'JetBrains Mono','Consolas',monospace; color: #FFFFFF; background: linear-gradient(135deg, #4d57f5 0%, #6d76f7 100%); letter-spacing: 0.6px; align-self: center; }
.gm-i5__step--5 .gm-i5__num { background: linear-gradient(135deg, #7052f3 0%, #5b40d9 100%); }
.gm-i5__icon { display: inline-flex; align-items: center; justify-content: center; width: 44px; height: 44px; margin: 4px auto 2px; border-radius: 10px; background: rgba(255,255,255,0.95); border: 1px solid rgba(112,82,243,0.18); color: #5b40d9; }
.gm-i5__icon svg { width: 22px; height: 22px; display: block; }
.gm-i5__name { font-size: 13px; font-weight: 700; color: #111216; line-height: 1.35; margin: 6px 0 0; }
.gm-i5__desc { font-size: 11px; color: #6d7079; line-height: 1.5; margin: 2px 0 0; }
.gm-i5__arrow { display: flex; align-items: center; justify-content: center; flex: 0 0 26px; font-size: 20px; font-weight: 800; color: #7052f3; }
.gm-i5__legend { margin: 18px 0 0; padding: 12px 18px; background: linear-gradient(135deg, #ebedff 0%, #f0ecfe 100%); border-radius: 10px; font-size: 12.5px; color: #202228; text-align: center; line-height: 1.55; }
.gm-i5__legend strong { color: #5b40d9; font-weight: 700; }
.gm-i5__source { margin: 14px 0 0; padding-top: 14px; border-top: 1px solid #e4e4e5; font-size: 11px; color: #6d7079; font-style: italic; text-align: center; }
.gm-i5__source a { color: inherit; text-decoration: underline; }
@media (max-width: 760px) {
  .gm-i5__flow { flex-wrap: wrap; gap: 8px; }
  .gm-i5__step { flex: 1 1 calc(50% - 4px); }
  .gm-i5__arrow { display: none; }
}

/* --- 6번 : Pass vs Fail with header score donut + per-chunk score chip --- */
.gm-i6 { background: #FFFFFF; border: 1px solid #e4e4e5; border-radius: 16px; padding: 32px 28px; box-shadow: 0 4px 16px rgba(17,18,22,0.06); }
.gm-i6__title { font-size: 20px; font-weight: 700; color: #111216; text-align: center; margin: 0 0 4px; }
.gm-i6__subtitle { font-size: 13px; color: #6d7079; text-align: center; margin: 0 0 24px; }
.gm-i6__cols { display: grid; grid-template-columns: 1fr 1fr; gap: 20px; }
.gm-i6__col { border-radius: 14px; overflow: hidden; display: flex; flex-direction: column; border: 1.5px solid #e4e4e5; background: #FFFFFF; }
.gm-i6__col--pass { border-color: #4d57f5; box-shadow: 0 6px 18px rgba(77,87,245,0.10); }
.gm-i6__col--fail { border-color: #E64A4A; box-shadow: 0 6px 18px rgba(230,74,74,0.08); }
.gm-i6__head { padding: 18px 20px; color: #FFFFFF; display: flex; align-items: center; gap: 14px; }
.gm-i6__col--pass .gm-i6__head { background: linear-gradient(135deg, #4d57f5 0%, #6d76f7 100%); }
.gm-i6__col--fail .gm-i6__head { background: linear-gradient(135deg, #E64A4A 0%, #FF6B6B 100%); }
.gm-i6__donut { --pct: 0; width: 64px; height: 64px; border-radius: 50%; position: relative; flex: 0 0 auto; background: conic-gradient(#FFFFFF calc(var(--pct) * 1%), rgba(255,255,255,0.25) 0); }
.gm-i6__donut::before { content: ''; position: absolute; inset: 7px; border-radius: 50%; z-index: 0; }
.gm-i6__col--pass .gm-i6__donut::before { background: #4d57f5; }
.gm-i6__col--fail .gm-i6__donut::before { background: #E64A4A; }
.gm-i6__donut-content { position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); display: flex; flex-direction: column; align-items: center; gap: 1px; z-index: 1; line-height: 1; pointer-events: none; }
.gm-i6__donut-content span { font: 800 18px/1 'JetBrains Mono','Consolas',monospace; color: #FFFFFF; }
.gm-i6__donut-content small { font: 700 9px/1 'JetBrains Mono','Consolas',monospace; color: rgba(255,255,255,0.85); letter-spacing: 0.4px; }
.gm-i6__head-text { display: flex; flex-direction: column; gap: 2px; color: #FFFFFF; }
.gm-i6__head-text strong { font-size: 16px; font-weight: 800; color: #FFFFFF; }
.gm-i6__head-text small { font: 700 10px 'JetBrains Mono','Consolas',monospace; color: rgba(255,255,255,0.92); letter-spacing: 0.5px; }
.gm-i6__body { padding: 16px 18px 10px; flex: 1; }
.gm-i6__chunk { display: flex; align-items: flex-start; gap: 10px; padding: 10px 12px; margin-bottom: 8px; border-radius: 8px; font-size: 12.5px; line-height: 1.5; }
.gm-i6__col--pass .gm-i6__chunk { background: #ebedff; border-left: 3px solid #4d57f5; color: #111216; }
.gm-i6__col--fail .gm-i6__chunk { background: #FFEFEF; border-left: 3px solid #E64A4A; color: #202228; }
.gm-i6__chunk-body { flex: 1; }
.gm-i6__chunk-score { font: 800 10px 'JetBrains Mono','Consolas',monospace; padding: 3px 7px; border-radius: 5px; flex: 0 0 auto; align-self: flex-start; }
.gm-i6__col--pass .gm-i6__chunk-score { background: #4d57f5; color: #FFFFFF; }
.gm-i6__col--fail .gm-i6__chunk-score { background: #E64A4A; color: #FFFFFF; }
.gm-i6__chunk strong { font-weight: 700; }
.gm-i6__features { padding: 12px 18px 18px; border-top: 1px solid #e4e4e5; background: #f7f6f3; font-size: 12px; color: #202228; line-height: 1.7; margin: 0; }
.gm-i6__features li { padding-left: 0; list-style: none; }
.gm-i6__features li::before { content: ''; display: inline-block; width: 6px; height: 6px; border-radius: 50%; margin: 0 8px 1px 0; vertical-align: middle; }
.gm-i6__col--pass .gm-i6__features li::before { background: #4d57f5; }
.gm-i6__col--fail .gm-i6__features li::before { background: #E64A4A; }
@media (max-width: 720px) { .gm-i6__cols { grid-template-columns: 1fr; } }

/* --- 7번 : 5 patterns with icons + mini before/after example --- */
.gm-i7 { background: #FFFFFF; border: 1px solid #e4e4e5; border-radius: 16px; padding: 32px 28px 28px; box-shadow: 0 4px 16px rgba(17,18,22,0.06); }
.gm-i7__title { font-size: 20px; font-weight: 700; color: #111216; text-align: center; margin: 0 0 4px; }
.gm-i7__subtitle { font-size: 13px; color: #6d7079; text-align: center; margin: 0 0 28px; }
.gm-i7__grid { display: grid; grid-template-columns: repeat(5, 1fr); gap: 12px; }
.gm-i7__card { background: #FFFFFF; border: 1px solid #e4e4e5; border-radius: 14px; padding: 18px 14px 14px; display: flex; flex-direction: column; align-items: center; text-align: center; gap: 8px; transition: transform 0.2s, box-shadow 0.2s; position: relative; }
.gm-i7__card:hover { transform: translateY(-2px); box-shadow: 0 6px 18px rgba(17,18,22,0.08); }
.gm-i7__num { display: inline-flex; align-items: center; justify-content: center; padding: 3px 11px; border-radius: 999px; font: 700 10px/1 'JetBrains Mono','Consolas',monospace; color: #FFFFFF; letter-spacing: 0.6px; align-self: center; }
.gm-i7__icon { display: inline-flex; align-items: center; justify-content: center; width: 48px; height: 48px; margin: 8px auto 4px; border-radius: 12px; background: #f7f6f3; flex: 0 0 auto; }
.gm-i7__icon svg { width: 24px; height: 24px; display: block; }
.gm-i7__card:nth-child(1) .gm-i7__num { background: linear-gradient(135deg, #4d57f5 0%, #6d76f7 100%); }
.gm-i7__card:nth-child(1) .gm-i7__icon { background: #ebedff; color: #4d57f5; }
.gm-i7__card:nth-child(2) .gm-i7__num { background: linear-gradient(135deg, #6d76f7 0%, #7052f3 100%); }
.gm-i7__card:nth-child(2) .gm-i7__icon { background: #eae5fd; color: #6d76f7; }
.gm-i7__card:nth-child(3) .gm-i7__num { background: linear-gradient(135deg, #7052f3 0%, #9179f7 100%); }
.gm-i7__card:nth-child(3) .gm-i7__icon { background: #f0ecfe; color: #7052f3; }
.gm-i7__card:nth-child(4) .gm-i7__num { background: linear-gradient(135deg, #9179f7 0%, #b3a0f9 100%); }
.gm-i7__card:nth-child(4) .gm-i7__icon { background: #f4f0fe; color: #9179f7; }
.gm-i7__card:nth-child(5) { background: linear-gradient(180deg, #FFFFFF 0%, #F8F4FF 100%); border-color: #b3a0f9; box-shadow: 0 4px 14px rgba(179,160,249,0.18); }
.gm-i7__card:nth-child(5) .gm-i7__num { background: linear-gradient(135deg, #b3a0f9 0%, #7052f3 100%); }
.gm-i7__card:nth-child(5) .gm-i7__icon { background: #f0ecfe; color: #7052f3; }
.gm-i7__name { font-size: 14px; font-weight: 700; color: #111216; line-height: 1.35; }
.gm-i7__tag { display: inline-block; padding: 3px 8px; background: #f7f6f3; border-radius: 999px; font: 700 9px 'JetBrains Mono','Consolas',monospace; color: #6d7079; letter-spacing: 0.4px; align-self: center; }
.gm-i7__desc { font-size: 11.5px; color: #6d7079; line-height: 1.55; flex: 1; margin: 0; }
.gm-i7__example { margin-top: 4px; padding: 8px 10px; background: #FAFAFB; border: 1px dashed #D4D4DA; border-radius: 8px; font: 400 11px/1.55 'Pretendard','Apple SD Gothic Neo',system-ui,sans-serif; color: #202228; }
.gm-i7__example strong { color: #5b40d9; font-weight: 700; font-size: 10px; letter-spacing: 0.3px; }
@media (max-width: 920px) { .gm-i7__grid { grid-template-columns: 1fr 1fr; } .gm-i7__card:nth-child(5) { grid-column: 1 / -1; } }
@media (max-width: 520px) { .gm-i7__grid { grid-template-columns: 1fr; } .gm-i7__card:nth-child(5) { grid-column: auto; } }

/* --- 8번 : Before / After with donut score + bridge delta --- */
.gm-i8 { background: #FFFFFF; border: 1px solid #e4e4e5; border-radius: 16px; padding: 32px 28px; box-shadow: 0 4px 16px rgba(17,18,22,0.06); }
.gm-i8__title { font-size: 20px; font-weight: 700; color: #111216; text-align: center; margin: 0 0 4px; }
.gm-i8__subtitle { font-size: 13px; color: #6d7079; text-align: center; margin: 0 0 28px; }
.gm-i8__cols { display: grid; grid-template-columns: 1fr auto 1fr; gap: 18px; align-items: stretch; }
.gm-i8__panel { border-radius: 14px; padding: 22px 20px; border: 1.5px solid #e4e4e5; display: flex; flex-direction: column; }
.gm-i8__panel--before { background: #f7f6f3; }
.gm-i8__panel--after { background: linear-gradient(180deg, #f0ecfe 0%, #e5ddfd 100%); border-color: #7052f3; box-shadow: 0 8px 22px rgba(112,82,243,0.18); }
.gm-i8__panel-head { display: flex; align-items: center; justify-content: center; margin-bottom: 14px; }
.gm-i8__tag { display: inline-block; font: 700 10px 'JetBrains Mono','Consolas',monospace; padding: 5px 12px; border-radius: 999px; letter-spacing: 0.6px; }
.gm-i8__panel--before .gm-i8__tag { background: #FFEFEF; color: #E64A4A; }
.gm-i8__panel--after .gm-i8__tag { background: #FFFFFF; color: #5b40d9; }
.gm-i8__donut { --pct: 0; --c: #E64A4A; width: 96px; height: 96px; border-radius: 50%; background: conic-gradient(var(--c) calc(var(--pct) * 1%), #e4e4e5 0); position: relative; flex: 0 0 auto; margin: 0 auto 14px; }
.gm-i8__donut::before { content: ''; position: absolute; inset: 11px; border-radius: 50%; background: #FFFFFF; z-index: 0; }
.gm-i8__donut-content { position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); display: flex; flex-direction: column; align-items: center; gap: 2px; z-index: 1; line-height: 1; pointer-events: none; }
.gm-i8__donut-content span { font: 800 32px/1 'JetBrains Mono','Consolas',monospace; }
.gm-i8__panel--before .gm-i8__donut-content span { color: #E64A4A; }
.gm-i8__panel--after .gm-i8__donut-content span { color: #5b40d9; }
.gm-i8__donut-content small { font: 700 9px/1.25 'JetBrains Mono','Consolas',monospace; color: #6d7079; letter-spacing: 0.4px; text-align: center; display: block; }
.gm-i8__panel-title { text-align: center; font-size: 13px; font-weight: 700; color: #111216; margin: 0 0 12px; line-height: 1.4; }
.gm-i8__panel--before .gm-i8__panel-title { color: #6d7079; }
.gm-i8__text-block { background: #FFFFFF; border-radius: 8px; padding: 10px 12px; font-size: 12px; color: #202228; line-height: 1.5; margin-bottom: 8px; border: 1px solid #e4e4e5; }
.gm-i8__text-block--mute { color: #9699a2; font-style: italic; background: #FAFAFB; border-style: dashed; }
.gm-i8__features { margin: 10px 0 0; padding: 0; list-style: none; font-size: 12px; color: #202228; line-height: 1.75; }
.gm-i8__features li::before { content: '✓ '; color: #5b40d9; font-weight: 800; }
.gm-i8__panel--before .gm-i8__features li::before { content: '× '; color: #E64A4A; font-weight: 800; }
.gm-i8__bridge { display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 4px; padding: 18px 14px; min-width: 130px; background: linear-gradient(135deg, #ebedff 0%, #f0ecfe 100%); border: 1.5px solid #7052f3; border-radius: 14px; box-shadow: 0 6px 18px rgba(112,82,243,0.18); }
.gm-i8__bridge-delta { font: 800 38px/1 'JetBrains Mono','Consolas',monospace; color: #5b40d9; }
.gm-i8__bridge-multi { font: 800 14px/1 'JetBrains Mono','Consolas',monospace; color: #7052f3; margin-top: 4px; }
.gm-i8__bridge-label { font-size: 11px; font-weight: 700; color: #5b40d9; text-align: center; line-height: 1.35; margin-top: 6px; }
.gm-i8__bridge-tag { display: inline-block; font: 700 9px 'JetBrains Mono','Consolas',monospace; padding: 4px 9px; border-radius: 999px; background: #FFFFFF; color: #7052f3; letter-spacing: 0.5px; margin-top: 4px; }
@media (max-width: 720px) {
  .gm-i8__cols { grid-template-columns: 1fr; }
  .gm-i8__bridge { flex-direction: row; gap: 12px; min-width: 0; }
  .gm-i8__bridge-label { margin-top: 0; }
}

/* --- 9번 : checklist with checkboxes + time bar + pattern map --- */
.gm-i9 { background: #FFFFFF; border: 1px solid #e4e4e5; border-radius: 16px; padding: 32px 28px; box-shadow: 0 4px 16px rgba(17,18,22,0.06); }
.gm-i9__title { font-size: 20px; font-weight: 700; color: #111216; text-align: center; margin: 0 0 4px; }
.gm-i9__subtitle { font-size: 13px; color: #6d7079; text-align: center; margin: 0 0 18px; }
.gm-i9__total-wrap { text-align: center; margin-bottom: 18px; }
.gm-i9__total { display: inline-flex; align-items: center; gap: 8px; padding: 8px 16px; background: linear-gradient(135deg, #ebedff 0%, #f0ecfe 100%); border: 1px solid #7052f3; border-radius: 999px; font: 700 12px 'JetBrains Mono','Consolas',monospace; color: #5b40d9; }
.gm-i9__total::before { content: '⏱'; font-size: 14px; }
.gm-i9__steps { display: flex; flex-direction: column; gap: 8px; }
.gm-i9__step { display: grid; grid-template-columns: 26px 36px 1fr 120px; gap: 14px; align-items: center; padding: 14px 16px; background: #f7f6f3; border-radius: 12px; border: 1px solid #e4e4e5; transition: background 0.15s, border-color 0.15s; }
.gm-i9__step:hover { background: #f0ecfe; border-color: #b3a0f9; }
.gm-i9__check { width: 22px; height: 22px; border: 2px solid #b3a0f9; border-radius: 6px; background: #FFFFFF; display: inline-block; flex: 0 0 auto; }
.gm-i9__step-num { display: inline-flex; align-items: center; justify-content: center; width: 32px; height: 32px; border-radius: 50%; font: 700 12px/1 'JetBrains Mono','Consolas',monospace; color: #FFFFFF; flex: 0 0 auto; }
.gm-i9__step:nth-child(1) .gm-i9__step-num { background: linear-gradient(135deg, #4d57f5 0%, #6d76f7 100%); }
.gm-i9__step:nth-child(2) .gm-i9__step-num { background: linear-gradient(135deg, #6d76f7 0%, #7052f3 100%); }
.gm-i9__step:nth-child(3) .gm-i9__step-num { background: linear-gradient(135deg, #7052f3 0%, #9179f7 100%); }
.gm-i9__step:nth-child(4) .gm-i9__step-num { background: linear-gradient(135deg, #9179f7 0%, #b3a0f9 100%); }
.gm-i9__step:nth-child(5) .gm-i9__step-num { background: linear-gradient(135deg, #b3a0f9 0%, #cfc2fb 100%); }
.gm-i9__step-body { display: flex; flex-direction: column; gap: 4px; min-width: 0; }
.gm-i9__step-name { font-size: 14px; font-weight: 700; color: #111216; line-height: 1.3; display: flex; align-items: center; gap: 8px; flex-wrap: wrap; }
.gm-i9__step-pattern { display: inline-block; padding: 2px 7px; border-radius: 4px; background: #ebedff; color: #5b40d9; font: 700 9px 'JetBrains Mono','Consolas',monospace; letter-spacing: 0.3px; }
.gm-i9__step-desc { font-size: 12px; color: #6d7079; line-height: 1.5; }
.gm-i9__step-time { display: flex; flex-direction: column; gap: 5px; }
.gm-i9__step-time-val { padding: 5px 8px; background: #FFFFFF; border: 1px solid #e4e4e5; border-radius: 6px; text-align: center; font: 700 11px 'JetBrains Mono','Consolas',monospace; color: #5b40d9; }
.gm-i9__step-time-bar { width: 100%; height: 5px; background: #e4e4e5; border-radius: 3px; overflow: hidden; }
.gm-i9__step-time-bar > span { display: block; height: 100%; background: linear-gradient(90deg, #7052f3 0%, #9179f7 100%); border-radius: 3px; }
@media (max-width: 720px) {
  .gm-i9__step { grid-template-columns: 26px 36px 1fr; row-gap: 8px; }
  .gm-i9__step-time { grid-column: 2 / -1; flex-direction: row; align-items: center; }
  .gm-i9__step-time-val { flex: 0 0 60px; }
}

/* --- 10번 : Anthropic Cookbook Pass@10 bar chart --- */
.gm-i10 { background: #FFFFFF; border: 1px solid #e4e4e5; border-radius: 16px; padding: 32px 28px 24px; box-shadow: 0 4px 16px rgba(17,18,22,0.06); }
.gm-i10__title { font-size: 20px; font-weight: 700; color: #111216; text-align: center; margin: 0 0 4px; }
.gm-i10__subtitle { font-size: 13px; color: #6d7079; text-align: center; margin: 0 0 28px; }
.gm-i10__chart { display: grid; grid-template-columns: repeat(3, 1fr); gap: 28px; align-items: end; padding: 0 12px; }
.gm-i10__bar { display: flex; flex-direction: column; align-items: center; gap: 8px; }
.gm-i10__bar-value { font: 800 22px/1 'JetBrains Mono','Consolas',monospace; }
.gm-i10__bar--1 .gm-i10__bar-value { color: #6F6F7A; }
.gm-i10__bar--2 .gm-i10__bar-value { color: #4d57f5; }
.gm-i10__bar--3 .gm-i10__bar-value { color: #5b40d9; }
.gm-i10__bar-track { width: 100%; max-width: 84px; height: 200px; background: #f7f6f3; border-radius: 8px 8px 0 0; display: flex; flex-direction: column-reverse; position: relative; overflow: hidden; border-bottom: 2px solid #e4e4e5; }
.gm-i10__bar-fill { width: 100%; border-radius: 8px 8px 0 0; transition: height 0.6s ease-out; }
.gm-i10__bar--1 .gm-i10__bar-fill { background: linear-gradient(180deg, #C4C4CA 0%, #9699a2 100%); }
.gm-i10__bar--2 .gm-i10__bar-fill { background: linear-gradient(180deg, #6d76f7 0%, #4d57f5 100%); }
.gm-i10__bar--3 .gm-i10__bar-fill { background: linear-gradient(180deg, #b3a0f9 0%, #7052f3 100%); box-shadow: 0 -6px 18px rgba(112,82,243,0.28); }
.gm-i10__bar-fail { display: block; font: 700 10px 'JetBrains Mono','Consolas',monospace; color: #E64A4A; padding: 3px 8px; background: #FFEFEF; border-radius: 999px; letter-spacing: 0.3px; }
.gm-i10__bar-label { font-size: 12.5px; font-weight: 700; color: #111216; text-align: center; line-height: 1.3; margin-top: 4px; }
.gm-i10__bar-sub { font-size: 11px; color: #6d7079; text-align: center; line-height: 1.45; }
.gm-i10__delta { margin: 22px 0 0; padding: 14px 20px; background: linear-gradient(135deg, #ebedff 0%, #f0ecfe 100%); border: 1px solid #b3a0f9; border-radius: 10px; text-align: center; font-size: 13px; color: #202228; line-height: 1.6; }
.gm-i10__delta strong { color: #5b40d9; font-weight: 800; }
.gm-i10__source { margin: 14px 0 0; padding-top: 14px; border-top: 1px solid #e4e4e5; font-size: 11px; color: #6d7079; font-style: italic; text-align: center; }
.gm-i10__source a { color: inherit; text-decoration: underline; }
@media (max-width: 520px) { .gm-i10__chart { gap: 10px; padding: 0; } .gm-i10__bar-track { max-width: none; height: 160px; } .gm-i10__bar-value { font-size: 18px; } .gm-i10__bar-label { font-size: 11.5px; } .gm-i10__bar-sub { font-size: 10px; } }
</style>

## 청크가 뭐고 AI는 왜 청크 단위로 인용하나요?

**청크는 200~500 토큰 정도의 의미 단위 문단이고, AI는 답변을 만들 때 페이지 전체가 아니라 <em>이 청크 하나</em>를 골라 인용해요.** 그래서 좋은 페이지를 쓰는 것보다 <em>좋은 청크</em>를 쓰는 게 GEO의 본질에 가깝습니다.

용어가 낯설 수 있어서 한 번 짚을게요. **"토큰"** 은 AI가 글을 이해할 때 쓰는 단위인데, 한국어 기준으로 **1 토큰 ≈ 한글 1~1.5자**예요. 200~500 토큰은 대략 **한글 300~750자, 즉 한 문단~짧은 한 절** 분량입니다. 지금 보고 계신 이 문단 정도가 <em>청크 1개</em>라고 보시면 됩니다.

조금 더 풀어볼게요. ChatGPT나 Perplexity 같은 AI가 답변을 만드는 방식은 대략 이래요. 사용자 질문이 들어오면, 인덱스에 저장된 웹페이지를 작은 덩어리(=청크)로 잘라 놓고, 그중 질문과 가장 가까운 청크 몇 개를 골라 답변의 근거로 씁니다. 이걸 **RAG(Retrieval-Augmented Generation)** 패턴이라고 부르는데, 오늘날 거의 모든 생성형 검색이 비슷한 구조로 돌아가요.

<div class="callout callout--tip">
  <div class="callout-title">💡 실제 시나리오 — 이렇게 작동해요</div>
  <div class="callout-body">
    <p>사용자가 ChatGPT에 <strong>"브랜드 블로그 잘 운영하는 한국 회사 추천"</strong>을 물었다고 해볼게요. ChatGPT는 인덱스된 수많은 청크 중 <em>"NIPAL AI는 한국 브랜드 콘텐츠 5,000편+ 직접 발행, 100개 이상 배포 채널 운영"</em> 같은 <em>독립적으로 답이 되는 청크</em> 하나를 찾아 답변에 인용합니다. 같은 페이지 안에 있어도 <em>서론 문단</em>이나 <em>마케팅 수사</em> 청크는 안 가져가요. AI 답변에 등장하려면 <em>그 청크 하나가 답이 돼야</em> 합니다.</p>
  </div>
</div>

<figure class="gm-infographic gm-i5">
  <h4 class="gm-i5__title">AI는 페이지를 어떻게 청크로 잘라 인용하나</h4>
  <p class="gm-i5__subtitle">RAG(Retrieval-Augmented Generation) 5단계 — 페이지에서 답변까지</p>
  <div class="gm-i5__flow">
    <div class="gm-i5__step gm-i5__step--1">
      <span class="gm-i5__num">01</span>
      <span class="gm-i5__icon" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M14 3H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"/><path d="M14 3v6h6"/><path d="M8 13h8M8 17h6"/></svg></span>
      <h5 class="gm-i5__name">라이브 페이지</h5>
      <p class="gm-i5__desc">자사몰·블로그 한 페이지</p>
    </div>
    <span class="gm-i5__arrow" aria-hidden="true">→</span>
    <div class="gm-i5__step gm-i5__step--2">
      <span class="gm-i5__num">02</span>
      <span class="gm-i5__icon" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="4" rx="1"/><rect x="3" y="10" width="12" height="4" rx="1"/><rect x="3" y="16" width="15" height="4" rx="1"/></svg></span>
      <h5 class="gm-i5__name">청크 분할</h5>
      <p class="gm-i5__desc">200~500 토큰 단위 후보 생성</p>
    </div>
    <span class="gm-i5__arrow" aria-hidden="true">→</span>
    <div class="gm-i5__step gm-i5__step--3">
      <span class="gm-i5__num">03</span>
      <span class="gm-i5__icon" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="2.6"/><circle cx="5" cy="6" r="1.3"/><circle cx="19" cy="6" r="1.3"/><circle cx="5" cy="18" r="1.3"/><circle cx="19" cy="18" r="1.3"/><circle cx="12" cy="4" r="0.9"/><circle cx="12" cy="20" r="0.9"/><path d="M6 7l5 4M18 7l-5 4M6 17l5-4M18 17l-5-4"/></svg></span>
      <h5 class="gm-i5__name">임베딩 인덱스</h5>
      <p class="gm-i5__desc">청크를 의미 벡터로 변환·저장</p>
    </div>
    <span class="gm-i5__arrow" aria-hidden="true">→</span>
    <div class="gm-i5__step gm-i5__step--4">
      <span class="gm-i5__num">04</span>
      <span class="gm-i5__icon" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="7"/><path d="m20 20-3.5-3.5"/></svg></span>
      <h5 class="gm-i5__name">질문 매칭</h5>
      <p class="gm-i5__desc">질문과 가까운 top-K 청크</p>
    </div>
    <span class="gm-i5__arrow" aria-hidden="true">→</span>
    <div class="gm-i5__step gm-i5__step--5">
      <span class="gm-i5__num">05</span>
      <span class="gm-i5__icon" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/><path d="M8 9h8M8 13h5"/></svg></span>
      <h5 class="gm-i5__name">답변에 인용</h5>
      <p class="gm-i5__desc">선택된 청크가 답변에 출력</p>
    </div>
  </div>
  <p class="gm-i5__legend"><strong>핵심:</strong> 청크는 <em>독립</em> 검색·인용 단위 — 페이지가 아니라 청크 하나하나가 인용 여부를 결정합니다.</p>
  <p class="gm-i5__source">출처: Anthropic <a href="https://www.anthropic.com/news/contextual-retrieval" target="_blank" rel="noopener">Contextual Retrieval in AI Systems</a> (2024-09)</p>
</figure>

여기서 결정적인 인사이트가 하나 있어요. **청크는 <em>독립적으로</em> 읽혀도 의미가 통해야 합니다.** 같은 페이지 안에 있어도 AI는 청크를 <em>하나씩 따로</em> 평가해서 가져오니까요. HubSpot은 이 메커니즘을 한 문장으로 정리해요 — *"AI engines pull information from standalone chunks, structured data, and patterns across the web"* ([HubSpot AEO audit, 2026-04](https://blog.hubspot.com/marketing/aeo-audit)).

<figure class="author-figure">
  <a href="https://blog.hubspot.com/marketing/aeo-audit" target="_blank" rel="noopener"><img src="/assets/img/blog/chunk-prescription/hubspot_aeo_audit.png" alt="HubSpot — AI engine optimization audit: How to audit your content for AI search engines (2026-04)" /></a>
  <figcaption>HubSpot — <em>AI engine optimization audit: How to audit your content for AI search engines</em> (2026-04). 출처: blog.hubspot.com</figcaption>
</figure>

Anthropic은 이 한계를 정면으로 다뤘어요. 2024년 9월 발표한 [Contextual Retrieval 연구](https://www.anthropic.com/news/contextual-retrieval)에서, 각 청크 앞에 **그 청크가 속한 문서 전체의 맥락을 요약한 50~100 토큰**을 붙여 임베딩하는 방식을 제안했습니다. 결과는 단계적으로 누적됐어요.

- 청크 앞에 맥락을 prepend한 것만으로 retrieval failure가 **35%** 줄었습니다 (5.7% → 3.7%).
- 여기에 Contextual BM25 키워드 검색을 결합하면 **49%** (5.7% → 2.9%)까지 떨어집니다.
- 마지막으로 reranking 단계까지 추가하면 **67%** (5.7% → 1.9%)에 도달해요.

<figure class="author-figure">
  <a href="https://www.anthropic.com/news/contextual-retrieval" target="_blank" rel="noopener"><img src="/assets/img/blog/chunk-prescription/anthropic_failure_reduction.png" alt="Anthropic Contextual Retrieval — Failed Retrievals @20: Embedding 5.7% / Embedding+BM25 5.0% / Contextual embedding 3.7% / Contextual embedding+BM25 2.9%" /></a>
  <figcaption>Standard Retrieval(5.7% · 5.0%) → Contextual Retrieval(3.7% · 2.9%) — 청크 앞 50~100 토큰 prepend가 만든 차이. 출처: <em>Anthropic — Contextual Retrieval in AI Systems</em> (2024-09)</figcaption>
</figure>

같은 데이터·같은 모델인데 <em>청크 앞에 무엇을 붙이느냐</em>에 따라 인용 정확도가 두 배 가까이 벌어진다는 뜻이에요. 라이터 입장에서 보면, 페이지의 한 단락을 다시 쓸 때 <em>그 단락 앞에 자기 자신을 설명하는 한 줄을 두느냐 마느냐</em> 가 결과를 갈라요.

학술적인 출발점도 짚고 갈게요. GEO 원논문(Aggarwal et al., 2024)은 이 메커니즘을 뒷받침하는 가장 인용 많은 학술 문서입니다. 다만 <em>측정 단위</em>에 미묘한 차이가 있어서, 아래 박스에 따로 정리해 둘게요.

<div class="callout callout--note">
  <div class="callout-title">📚 짚고 가요 — GEO 논문이 정의한 단위</div>
  <div class="callout-body">
    <p>Aggarwal 등의 GEO 원논문(<a href="https://arxiv.org/pdf/2311.09735" target="_blank" rel="noopener">arXiv:2311.09735</a>)은 <em>chunk-level visibility</em>라는 용어를 직접 정의하지 않아요. 학술 단위는 <strong>인용된 문장(citation·sentence)</strong>이고, 제안된 세 지표는 Word Count, Position-Adjusted Word Count, Subjective Impression입니다. 다만 오늘날의 RAG·LLM 실무에서 이 단위는 거의 그대로 chunk로 확장돼 적용되고 있어서, 본문에서는 편의상 "청크"로 부를게요.</p>
  </div>
</div>

RAG가 청크 단위로 어떻게 작동하는지 영상으로 한 번 보시면 머릿속에 그림이 더 잘 그려져요. IBM Research의 Marina Danilevsky가 6분 안에 차근차근 설명합니다.

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/T-D1OfcDW1M" title="What is Retrieval-Augmented Generation (RAG)? — IBM Research" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

정리하면 — **페이지를 잘 만든다 ≠ 청크를 잘 만든다**예요. 같은 페이지여도 청크 하나하나가 <em>독립적으로 읽혀도 답이 되는</em> 단위로 쓰여 있을 때, 비로소 AI가 그 페이지를 인용 후보로 봅니다.

## 어떤 청크가 인용 적격일까요?

**인용 적격 청크는 <em>첫 문장만 읽어도 답이 되는</em> 청크예요.** 질문·정의·표·리스트처럼 구조가 명확하고, 청크 안에서 답이 <em>완결</em>되는 형태가 가장 강합니다.

Anthropic Cookbook에서 이 차이가 얼마나 큰지 정량적으로 보여줘요. [Enhancing RAG with contextual retrieval 가이드](https://platform.claude.com/cookbook/capabilities-contextual-embeddings-guide)는 9개 코드베이스를 대상으로 한 실험에서 Pass@10 지표를 다음처럼 보고했어요. **Baseline 87.15% → Contextual Embeddings 92.34% → + Reranking 95.26%.** Pass@10은 "AI가 답변을 만들 때 상위 10개 청크 안에 정답 청크가 들어가는가"를 본 지표인데, 한 자릿수 차이처럼 보여도 <em>실패율</em> 기준으로 보면 12.85% → 4.74%, 즉 약 63% 감소예요.

<figure class="gm-infographic gm-i10">
  <h4 class="gm-i10__title">Anthropic Cookbook Pass@10 — 청크 재작성의 정량 효과</h4>
  <p class="gm-i10__subtitle">9개 코드베이스 실험 — 같은 데이터·같은 모델, 청크 처리 방식만 달리한 결과</p>
  <div class="gm-i10__chart">
    <div class="gm-i10__bar gm-i10__bar--1">
      <span class="gm-i10__bar-value">87.15%</span>
      <div class="gm-i10__bar-track"><div class="gm-i10__bar-fill" style="height:87.15%"></div></div>
      <span class="gm-i10__bar-fail">FAIL 12.85%</span>
      <span class="gm-i10__bar-label">Baseline RAG</span>
      <span class="gm-i10__bar-sub">기본 청크 임베딩</span>
    </div>
    <div class="gm-i10__bar gm-i10__bar--2">
      <span class="gm-i10__bar-value">92.34%</span>
      <div class="gm-i10__bar-track"><div class="gm-i10__bar-fill" style="height:92.34%"></div></div>
      <span class="gm-i10__bar-fail">FAIL 7.66%</span>
      <span class="gm-i10__bar-label">+ Contextual Embeddings</span>
      <span class="gm-i10__bar-sub">청크 앞 50~100 토큰 prepend</span>
    </div>
    <div class="gm-i10__bar gm-i10__bar--3">
      <span class="gm-i10__bar-value">95.26%</span>
      <div class="gm-i10__bar-track"><div class="gm-i10__bar-fill" style="height:95.26%"></div></div>
      <span class="gm-i10__bar-fail">FAIL 4.74%</span>
      <span class="gm-i10__bar-label">+ Reranking</span>
      <span class="gm-i10__bar-sub">상위 K 청크 재정렬</span>
    </div>
  </div>
  <p class="gm-i10__delta"><strong>실패율 12.85% → 4.74%</strong> — 청크 재작성 한 단계가 <strong>약 63% 감소</strong>를 만듭니다. 페이지를 새로 만들지 않고도 일어나는 변화예요.</p>
  <p class="gm-i10__source">출처: Anthropic <a href="https://platform.claude.com/cookbook/capabilities-contextual-embeddings-guide" target="_blank" rel="noopener">Enhancing RAG with contextual retrieval</a> Cookbook (2024-09)</p>
</figure>

라이터 시점으로 옮기면 이렇게 읽힙니다 — **같은 페이지를 다시 쓰는 것만으로 청크가 답변에 안 들어갈 확률이 절반 이하로 줄어든다.** 페이지를 새로 만들 필요도, 백링크를 늘릴 필요도 없는 변화예요.

그럼 적격 청크와 부적격 청크는 구체적으로 어떻게 생겼을까요?

<figure class="gm-infographic gm-i6">
  <h4 class="gm-i6__title">인용 적격 청크 vs 부적격 청크</h4>
  <p class="gm-i6__subtitle">청크 점수 50점이 기준 — 같은 페이지여도 청크 형태에 따라 운명이 갈립니다.</p>
  <div class="gm-i6__cols">
    <article class="gm-i6__col gm-i6__col--pass">
      <header class="gm-i6__head">
        <div class="gm-i6__donut" style="--pct:75"><div class="gm-i6__donut-content"><span>75</span><small>AVG</small></div></div>
        <div class="gm-i6__head-text">
          <strong>인용 적격</strong>
          <small>READY TO CITE</small>
        </div>
      </header>
      <div class="gm-i6__body">
        <div class="gm-i6__chunk">
          <div class="gm-i6__chunk-body"><strong>Q:</strong> MICE 50인 패키지 가격은?<br><strong>A:</strong> 1인당 5만원, 회의실 6시간·중식 포함.</div>
          <span class="gm-i6__chunk-score">82</span>
        </div>
        <div class="gm-i6__chunk">
          <div class="gm-i6__chunk-body"><strong>표:</strong> 회의실 5종 비교 — 200석·동시통역·빔프로젝터</div>
          <span class="gm-i6__chunk-score">71</span>
        </div>
        <div class="gm-i6__chunk">
          <div class="gm-i6__chunk-body"><strong>정의:</strong> GEO는 AI가 답변에 우리 콘텐츠를 인용하도록 만드는 일.</div>
          <span class="gm-i6__chunk-score">68</span>
        </div>
      </div>
      <ul class="gm-i6__features">
        <li>질문·답 직답 구조</li>
        <li>정형 표·리스트</li>
        <li>첫 문장 안에 답</li>
        <li>주어·고유명사 명시</li>
      </ul>
    </article>
    <article class="gm-i6__col gm-i6__col--fail">
      <header class="gm-i6__head">
        <div class="gm-i6__donut" style="--pct:28"><div class="gm-i6__donut-content"><span>28</span><small>AVG</small></div></div>
        <div class="gm-i6__head-text">
          <strong>인용 부적격</strong>
          <small>WILL BE IGNORED</small>
        </div>
      </header>
      <div class="gm-i6__body">
        <div class="gm-i6__chunk">
          <div class="gm-i6__chunk-body">"그것은 다음과 같이 진행됩니다…" — 지시어로 시작, 주어 누락</div>
          <span class="gm-i6__chunk-score">22</span>
        </div>
        <div class="gm-i6__chunk">
          <div class="gm-i6__chunk-body">긴 한 문단 — 정의·표·리스트 없음, 직답 없음</div>
          <span class="gm-i6__chunk-score">35</span>
        </div>
        <div class="gm-i6__chunk">
          <div class="gm-i6__chunk-body">"저희는 항상 최선을 다해…" — 마케팅 수사, 정보 0</div>
          <span class="gm-i6__chunk-score">18</span>
        </div>
      </div>
      <ul class="gm-i6__features">
        <li>한 덩어리 산문</li>
        <li>지시어·대명사 시작</li>
        <li>고유명사 누락</li>
        <li>답이 마지막에 등장</li>
      </ul>
    </article>
  </div>
</figure>

차이의 핵심은 **"청크가 페이지의 일부가 아니라 <em>하나의 작은 답</em>으로 완성돼 있느냐"** 예요. 한국 자사몰·블로그 콘텐츠 중에는 한 페이지 안에 정보가 충분히 들어 있어도, 청크 단위로 쪼개 보면 <em>완결된 답</em>을 가진 청크가 한두 개에 그치는 경우가 정말 많아요. 같은 노력으로 같은 페이지를 다시 쓰되 <em>청크 단위로</em> 다시 쓰면 비로소 AI가 인용 후보로 봅니다.

## 처방 패턴 1 — Q&A H2로 청크 분할을 명확히 하세요

**라이터가 가장 먼저 적용해야 할 패턴은 H2를 <em>질문형</em>으로 바꾸고 그 직후 첫 문장에 <em>직답</em>을 박는 거예요.** 이 한 가지만 해도 청크 점수가 평균 15~25점 오릅니다.

이유는 두 가지예요. 첫째, AI는 H2·H3 같은 의미 경계를 <em>청크 분할 신호</em>로 활용해요. 질문형 H2는 "여기서부터 하나의 답변 단위가 시작된다"는 가장 강한 메타데이터입니다. 둘째, 첫 문장에 직답이 있으면 AI가 <em>이 청크 하나만 뽑아도 답이 완결된다</em>고 판단해요.

이 글 자체가 살아있는 예시예요. 지금 보고 계신 H2 6개가 모두 <em>사용자가 실제로 물어볼 만한 질문</em> 형태로 쓰여 있고, 각 H2 직후 첫 문장에 굵게 <em>직답</em>이 들어가 있어요. 첫 글 [GEO란 무엇인가](https://nipal-ai.com/blog/geo-introduction/)도 같은 패턴으로 다시 쓴 결과, ChatGPT 검색에서 <em>"GEO란"</em> 쿼리에 우리 페이지가 인용 후보로 등장하기 시작했어요.

<div class="callout callout--tip">
  <div class="callout-title">💡 라이터를 위한 즉시 적용 가이드</div>
  <div class="callout-body">
    <p>이미 작성한 페이지를 검토할 때 이렇게 점검하세요. <strong>(1)</strong> H2가 <em>명사구</em>("회사 소개", "서비스 안내")인가, <em>질문형</em>("우리 회사는 무엇을 하나요?")인가? <strong>(2)</strong> H2 직후 첫 문장이 <em>배경 설명</em>으로 시작하는가, <em>직답</em>으로 시작하는가? 두 항목 모두 후자로 바꾸는 것만으로 청크 점수가 즉시 올라요.</p>
  </div>
</div>

## 처방 패턴 2~3 — 정의 박스와 정형 표·리스트로 청크 견고함을 만드세요

**50자 안팎의 정의 한 줄과 비교 표·순서 리스트는 청크가 <em>독립 읽기</em> 가능해지는 가장 빠른 패턴이에요.** 정의는 청크의 <em>뼈대</em>가 되고, 표·리스트는 청크의 <em>구조</em>가 됩니다.

청크 크기 권장치를 좀 더 정확히 짚을게요. [LlamaIndex 공식 청킹 가이드](https://www.llamaindex.ai/glossary/document-chunking-strategies)는 문서 유형별 권장 범위를 이렇게 정리해요.

| 문서 유형 | 권장 청크 크기 | overlap |
|---|---|---|
| Dense factual (FAQ·정의 사전) | 128~256 토큰 | 20~40 토큰 |
| **General prose (블로그·가이드)** | **256~512 토큰** | **50~100 토큰** |
| Recursive splitting | 256~512 토큰 | 30~60 토큰 |
| Semantic chunking | 150~400 토큰 | 0~30 토큰 |
| Large summarization | 512~1024 토큰 | 100~200 토큰 |

한국어 블로그·자사몰 콘텐츠는 대부분 **general prose** 범주에 들어가요. 즉 한 청크는 256~512 토큰(한국어 기준 대략 400~800자)이 출발점이고, 청크 사이에 50~100 토큰의 overlap을 두는 게 학술적으로 검증된 권장입니다. 워드 문서로 환산하면 <em>한 페이지가 대략 1,500~2,000자</em>니까 **한 페이지 안에 청크 2~3개가 들어가는 셈**이에요.

여기서 흔히 빠지는 함정 하나를 짚을게요. <em>"의미 기반(semantic) 분할이 무조건 더 낫지 않나요?"</em> 라는 질문을 자주 받는데, 학술적으로는 그렇지 않습니다. [Qu et al. 2024 — Is Semantic Chunking Worth the Computational Cost?](https://arxiv.org/pdf/2410.13070)는 5개 데이터셋으로 비교한 결과, **3개 데이터셋에서 fixed-size chunking이 더 높은 성능**을 보였다고 보고했어요. 논문 결론은 단호합니다.

<div class="callout callout--quote">
  <div class="callout-body">
    <blockquote>
      <p>"The results show that the computational costs associated with semantic chunking are not justified by consistent performance gains."</p>
      <p>— Semantic chunking에 드는 계산 비용은 일관된 성능 향상으로 정당화되지 않는다.</p>
      <p>Qu et al. (2024), <a href="https://arxiv.org/abs/2410.13070" target="_blank" rel="noopener"><em>Is Semantic Chunking Worth the Computational Cost?</em></a></p>
    </blockquote>
  </div>
</div>

라이터에게 이 결론이 중요한 이유는 분명해요. **잘 설계된 H2·H3 + 정의 박스 + 표·리스트의 <em>고정 구조</em>가 자유로운 의미 분할보다 견고한 청크를 만든다**는 뜻이거든요. [LangChain 공식 가이드](https://docs.langchain.com/oss/python/integrations/splitters)도 *"For most use cases, start with the RecursiveCharacterTextSplitter"* 라고 권합니다. 한국어 콘텐츠에서도 단락→문장→형태소의 <em>계층적 구조</em>를 기준 삼는 게 안전한 출발점이에요.

마지막으로 [Wang et al. EMNLP 2024 — Searching for Best Practices in RAG](https://aclanthology.org/2024.emnlp-main.981.pdf)는 실험 설정으로 <em>smaller chunk 175 tokens, larger chunk 512 tokens, overlap 20 tokens</em> 의 sliding window 패턴을 best practice로 채택했어요. 한국어 블로그를 다시 쓸 때도 작은 청크(정의·표)와 큰 청크(설명 단락)를 <em>계층적으로</em> 배치하면 양쪽 검색 쿼리에 모두 대응됩니다.

## 처방 패턴 4~5 — 엔티티 풍부화와 출처 카드로 청크의 맥락 점수를 끌어올리세요

**회사명·고유명사를 명시적으로 반복하고, 외부 권위 출처를 인용 카드 형태로 박는 게 청크의 <em>맥락 점수</em>를 끌어올려요.** 청크 안에 "누가·무엇을·언제" 가 명확하게 들어 있을 때 AI는 그 청크를 <em>독립 사실 단위</em>로 인식합니다.

엔티티(entity)부터 짚을게요. AI는 청크를 읽을 때 <em>고유명사·인명·기관명·제품명</em> 같은 엔티티를 우선적으로 추출해요. 같은 청크여도 "저희가 운영하는 그 브랜드" 보다 "NIPAL AI가 운영하는 자사몰" 이 <em>훨씬 강한</em> 신호입니다. 청크 안에 회사명을 1~2회 반복하고, 핵심 제품·서비스명을 약어 없이 풀어 쓰는 것만으로 엔티티 점수가 즉시 올라요.

<div class="callout callout--note">
  <div class="callout-title">🔎 한 줄로 보는 엔티티 차이</div>
  <div class="callout-body">
    <p>❌ <strong>약한 청크</strong>: "<em>저희는 항상 고객 만족을 위해 노력합니다. 다양한 서비스로 여러분의 비즈니스를 돕습니다.</em>" → AI가 추출할 고유명사 <strong>0개</strong>.</p>
    <p>✅ <strong>강한 청크</strong>: "<em>NIPAL AI는 한국 브랜드 콘텐츠 5,000편+를 직접 발행하며, ChatGPT·Gemini·Perplexity 3개 AI 답변 엔진에서 브랜드 가시성을 동시 측정합니다.</em>" → AI가 추출할 고유명사 <strong>5개</strong> (NIPAL AI, ChatGPT, Gemini, Perplexity, 3 AI).</p>
  </div>
</div>

다음은 **출처 카드** 입니다. 청크 안에 외부 권위 출처를 한 줄 인용 카드 형태로 박아 넣으면, AI는 그 청크를 <em>근거가 있는 사실 단위</em>로 인식합니다. 한국어 콘텐츠에서는 1차 출처(공식 문서·학술 PDF·정부 통계)에 마크다운 링크를 거는 게 가장 강해요. 이 글의 본문에서 학술 PDF·Anthropic 공식 블로그·HubSpot 가이드를 인용한 방식과 동일합니다.

여기서 자연스럽게 짚어야 할 공식 가이드가 하나 있어요. [Google Search Central "AI features and your website"](https://developers.google.com/search/docs/appearance/ai-features) 공식 문서는 두 가지를 명시합니다. 첫째, AI Overviews와 AI Mode는 **query fan-out** — 하나의 질문에서 여러 하위 질의를 발행하는 방식 — 으로 답변을 만들어요. 둘째, *"While specific optimization isn't required for AI Overviews and AI Mode, all existing SEO fundamentals continue to be worthwhile"* 라고 명시했죠. **AI 검색을 위한 별도 비밀 최적화는 없다**는 뜻이에요. 다만 query fan-out이 작동한다는 건, <em>한 페이지 전체</em>가 잘 쓰여 있어도 부족하고 <em>그 안의 개별 청크</em>가 각각 독립적으로 답할 수 있어야 한다는 의미입니다.

Google이 query fan-out을 어떻게 설명하는지 공식 채널 영상으로 한 번 보시면 이해가 빨라요. AI Mode가 한 질문을 여러 하위 질의로 쪼개 답을 합성하는 흐름을 시각적으로 보여줍니다.

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/AnKaUXbwL20?start=8" title="Google Search Central — AI features and your website" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

<figure class="gm-infographic gm-i7">
  <h4 class="gm-i7__title">청크를 다시 쓰는 5가지 처방 패턴</h4>
  <p class="gm-i7__subtitle">라이터가 오늘 적용할 수 있는 순서대로 — 한 패턴씩 누적 적용하면 청크 점수가 단계적으로 올라요</p>
  <div class="gm-i7__grid">
    <article class="gm-i7__card">
      <span class="gm-i7__num">01</span>
      <span class="gm-i7__icon" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 17h.01"/><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/><circle cx="12" cy="12" r="10"/></svg></span>
      <span class="gm-i7__tag">STRUCTURE</span>
      <h5 class="gm-i7__name">Q&amp;A H2 분할</h5>
      <p class="gm-i7__desc">H2를 질문형으로, 첫 문장에 직답. 청크 경계를 명확히 만드는 가장 강한 신호.</p>
      <div class="gm-i7__example"><strong>EXAMPLE</strong><br>"회사 소개" → "우리 회사는 무엇을 하나요?"</div>
    </article>
    <article class="gm-i7__card">
      <span class="gm-i7__num">02</span>
      <span class="gm-i7__icon" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="4" width="16" height="16" rx="2"/><path d="M8 10h8M8 14h6"/></svg></span>
      <span class="gm-i7__tag">DEFINITION</span>
      <h5 class="gm-i7__name">정의 박스</h5>
      <p class="gm-i7__desc">50자 안팎의 한 줄 정의. 청크의 뼈대가 되고 독립 읽기 가능성을 보장.</p>
      <div class="gm-i7__example"><strong>EXAMPLE</strong><br>"GEO는 AI가 답변에 우리 콘텐츠를 인용하게 만드는 일."</div>
    </article>
    <article class="gm-i7__card">
      <span class="gm-i7__num">03</span>
      <span class="gm-i7__icon" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18M3 15h18M9 3v18M15 3v18"/></svg></span>
      <span class="gm-i7__tag">FORMAT</span>
      <h5 class="gm-i7__name">정형 표·리스트</h5>
      <p class="gm-i7__desc">비교 표·순서 리스트. AI가 가장 안정적으로 파싱하는 청크 구조.</p>
      <div class="gm-i7__example"><strong>EXAMPLE</strong><br>회의실 5종 비교 표 / 5단계 순서 리스트</div>
    </article>
    <article class="gm-i7__card">
      <span class="gm-i7__num">04</span>
      <span class="gm-i7__icon" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="8" r="4"/><path d="M4 22c0-4 4-7 8-7s8 3 8 7"/></svg></span>
      <span class="gm-i7__tag">ENTITY</span>
      <h5 class="gm-i7__name">엔티티 풍부화</h5>
      <p class="gm-i7__desc">회사명·고유명사를 명시적으로 반복. 청크의 "누가·무엇" 신호를 강화.</p>
      <div class="gm-i7__example"><strong>EXAMPLE</strong><br>"저희가 운영" → "NIPAL AI가 운영"</div>
    </article>
    <article class="gm-i7__card">
      <span class="gm-i7__num">05</span>
      <span class="gm-i7__icon" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M10 14a5 5 0 0 1 0-7l3-3a5 5 0 0 1 7 7l-1 1"/><path d="M14 10a5 5 0 0 1 0 7l-3 3a5 5 0 0 1-7-7l1-1"/></svg></span>
      <span class="gm-i7__tag">SOURCE</span>
      <h5 class="gm-i7__name">출처 카드</h5>
      <p class="gm-i7__desc">1차 출처를 한 줄 인용 카드로. 청크를 "근거 있는 사실 단위"로 인식시킴.</p>
      <div class="gm-i7__example"><strong>EXAMPLE</strong><br>"Anthropic 2024-09: failure 49% ↓"</div>
    </article>
  </div>
</figure>

다섯 패턴은 <em>순서대로 누적</em> 적용했을 때 가장 강력해요. Q&A H2로 청크 경계를 만들고, 그 안에 정의 박스로 뼈대를 세우고, 표·리스트로 구조를 채우고, 엔티티로 누가·무엇을 명확히 하고, 마지막에 출처 카드로 신뢰도까지 박는 거죠. 한 번에 다 적용하기 부담스러우면 H2 한 개씩 차례로 다시 쓰는 게 현실적이에요.

## 우리 페이지 한 장, 오늘 어떻게 다시 쓸까요?

**한 페이지를 30분 안에 다시 쓰는 5단계 체크리스트로 정리할게요.** 라이터 한 분이 점심 시간에도 한 페이지를 끝낼 수 있는 분량으로 잡았습니다.

먼저 한국어 청크의 특수성을 짚고 넘어가요. 한국어는 형태소·조사·어미가 결합된 교착어라, 영어 기준의 <em>공백 단위 토큰화</em>가 그대로 적용되지 않아요. [KoNLPy 공식 문서](https://konlpy.org/en/latest/)는 한국어 NLP의 표준 도구로 <em>문장 단위 분할(sentences) + 형태소 분석(morphs) + 품사 태깅(pos)</em> 세 가지를 함께 제공하는데, 이는 한국어 청크가 단순 글자 수 자르기가 아니라 <em>문장 경계 + 의미 단위</em> 를 함께 봐야 한다는 실무 근거예요. 라이터 입장에서는 한국어 한 문장이 <em>길어도 짧아도</em> 독립 의미가 통하도록 쓰는 게 중요합니다.

실제 한 페이지를 다시 쓸 때의 결과는 어떻게 달라지는지, Before/After로 정리하면 이래요.

<figure class="gm-infographic gm-i8">
  <h4 class="gm-i8__title">한 페이지 청크 점수의 Before / After</h4>
  <p class="gm-i8__subtitle">같은 정보·같은 페이지여도 청크 단위로 다시 쓰면 평균 점수가 2배 가까이 오릅니다</p>
  <div class="gm-i8__cols">
    <article class="gm-i8__panel gm-i8__panel--before">
      <header class="gm-i8__panel-head"><span class="gm-i8__tag">BEFORE</span></header>
      <div class="gm-i8__donut" style="--pct:35;--c:#E64A4A"><div class="gm-i8__donut-content"><span>35</span><small>AVG SCORE</small></div></div>
      <h5 class="gm-i8__panel-title">한 덩어리 산문 · 직답 없음</h5>
      <div class="gm-i8__text-block gm-i8__text-block--mute">"저희 서비스는 다양한 고객의 요구에 맞춰…"</div>
      <div class="gm-i8__text-block gm-i8__text-block--mute">"그것은 다음과 같은 방식으로…"</div>
      <ul class="gm-i8__features">
        <li>5청크 중 1개만 인용 적격</li>
        <li>고유명사 0회 등장</li>
        <li>외부 출처 0개</li>
      </ul>
    </article>
    <div class="gm-i8__bridge">
      <span class="gm-i8__bridge-delta">+37</span>
      <span class="gm-i8__bridge-multi">≈ 2.1×</span>
      <span class="gm-i8__bridge-label">5가지 패턴<br>누적 적용</span>
      <span class="gm-i8__bridge-tag">30 MIN</span>
    </div>
    <article class="gm-i8__panel gm-i8__panel--after">
      <header class="gm-i8__panel-head"><span class="gm-i8__tag">AFTER</span></header>
      <div class="gm-i8__donut" style="--pct:72;--c:#7052f3"><div class="gm-i8__donut-content"><span>72</span><small>AVG SCORE</small></div></div>
      <h5 class="gm-i8__panel-title">Q&amp;A · 정의 · 표 · 엔티티 · 출처</h5>
      <div class="gm-i8__text-block"><strong>Q:</strong> 50인 컨퍼런스 룸 가격? <strong>A:</strong> 1인 5만원, 회의실 6시간 포함.</div>
      <div class="gm-i8__text-block"><strong>표:</strong> 회의실 5종 비교 (200석·동시통역·빔)</div>
      <ul class="gm-i8__features">
        <li>5청크 중 4개 인용 적격</li>
        <li>고유명사 7회 등장</li>
        <li>외부 출처 카드 3개</li>
      </ul>
    </article>
  </div>
</figure>

그래서 오늘 적용할 5단계 체크리스트는 이렇게 잡았어요. 한 페이지 기준 <em>총 30분</em> — 한 패턴씩 차례로 진행하면 됩니다.

<figure class="gm-infographic gm-i9">
  <h4 class="gm-i9__title">한 페이지 30분 청크 재작성 체크리스트</h4>
  <p class="gm-i9__subtitle">라이터 한 분이 점심 시간에 끝낼 수 있는 분량 — 한 패턴씩 차례로</p>
  <div class="gm-i9__total-wrap"><span class="gm-i9__total">TOTAL 30 MIN · 5 STEPS</span></div>
  <div class="gm-i9__steps">
    <div class="gm-i9__step">
      <span class="gm-i9__check" aria-hidden="true"></span>
      <span class="gm-i9__step-num">01</span>
      <div class="gm-i9__step-body">
        <span class="gm-i9__step-name">H2를 질문형으로 바꾸기 <span class="gm-i9__step-pattern">패턴 01</span></span>
        <span class="gm-i9__step-desc">"회사 소개" → "우리 회사는 무엇을 하나요?" — 청크 경계를 명확히</span>
      </div>
      <div class="gm-i9__step-time">
        <span class="gm-i9__step-time-val">5 MIN</span>
        <span class="gm-i9__step-time-bar"><span style="width:50%"></span></span>
      </div>
    </div>
    <div class="gm-i9__step">
      <span class="gm-i9__check" aria-hidden="true"></span>
      <span class="gm-i9__step-num">02</span>
      <div class="gm-i9__step-body">
        <span class="gm-i9__step-name">H2 직후 첫 문장에 직답 박기 <span class="gm-i9__step-pattern">패턴 02</span></span>
        <span class="gm-i9__step-desc">배경 설명 대신 50자 안팎의 한 줄 정의로 시작</span>
      </div>
      <div class="gm-i9__step-time">
        <span class="gm-i9__step-time-val">5 MIN</span>
        <span class="gm-i9__step-time-bar"><span style="width:50%"></span></span>
      </div>
    </div>
    <div class="gm-i9__step">
      <span class="gm-i9__check" aria-hidden="true"></span>
      <span class="gm-i9__step-num">03</span>
      <div class="gm-i9__step-body">
        <span class="gm-i9__step-name">표 1개 + 리스트 1개 만들기 <span class="gm-i9__step-pattern">패턴 03</span></span>
        <span class="gm-i9__step-desc">비교·열거 정보를 산문에서 정형 구조로 옮기기</span>
      </div>
      <div class="gm-i9__step-time">
        <span class="gm-i9__step-time-val">10 MIN</span>
        <span class="gm-i9__step-time-bar"><span style="width:100%"></span></span>
      </div>
    </div>
    <div class="gm-i9__step">
      <span class="gm-i9__check" aria-hidden="true"></span>
      <span class="gm-i9__step-num">04</span>
      <div class="gm-i9__step-body">
        <span class="gm-i9__step-name">고유명사·회사명 명시적 반복 <span class="gm-i9__step-pattern">패턴 04</span></span>
        <span class="gm-i9__step-desc">"저희가" 같은 대명사를 회사명·서비스명으로 치환</span>
      </div>
      <div class="gm-i9__step-time">
        <span class="gm-i9__step-time-val">5 MIN</span>
        <span class="gm-i9__step-time-bar"><span style="width:50%"></span></span>
      </div>
    </div>
    <div class="gm-i9__step">
      <span class="gm-i9__check" aria-hidden="true"></span>
      <span class="gm-i9__step-num">05</span>
      <div class="gm-i9__step-body">
        <span class="gm-i9__step-name">1차 출처 인용 카드 1개 추가 <span class="gm-i9__step-pattern">패턴 05</span></span>
        <span class="gm-i9__step-desc">학술 PDF·공식 문서·정부 통계 중 하나를 마크다운 링크로</span>
      </div>
      <div class="gm-i9__step-time">
        <span class="gm-i9__step-time-val">5 MIN</span>
        <span class="gm-i9__step-time-bar"><span style="width:50%"></span></span>
      </div>
    </div>
  </div>
</figure>

5단계를 다 마치면 같은 페이지여도 청크 단위 점수가 <em>두 배 가까이</em> 오릅니다. ChatGPT·Perplexity·Gemini·Claude 네 모델에 동일한 질문을 던져 보면, 다시 쓰기 <em>전</em>에는 한 모델에서도 우리 페이지가 등장하지 않다가 <em>후</em>에는 두세 모델에서 인용되기 시작하는 패턴을 자주 봐요.

직접 적용 결과가 궁금하시면 [30초 무료진단](https://app.nipal-ai.com/)으로 확인해 보세요. ChatGPT·Gemini·Perplexity 세 모델에 질문을 3개씩 동시에 던져 우리 회사가 어떻게 언급되는지 측정하고, AI 노출 점수와 3단계 처방까지 30초 안에 보여드립니다. 가입도 결제도 없어요.

다음 글에서는 한 발 더 나아가서, [**AI Overview · AI Mode 등장 후 SEO는 어디로 가는가**](/blog/ai-overview-and-seo/) — 같은 청크 단위 메커니즘이 _답변 엔진(GEO)_ 옆 _검색 엔진(Google AI Overview·AI Mode)_에서 어떻게 작동하고, 우리 회사 SEO는 무엇을 유지하고 무엇을 새로 써야 하는지 정리할게요.

<div class="callout callout--quote">
  <div class="callout-title">📚 학술 원전 — Anthropic Contextual Retrieval</div>
  <div class="callout-body">
    <p>Anthropic은 청크 앞에 50~100 토큰의 설명 맥락을 prepend하는 Contextual Retrieval 기법으로 retrieval failure를 단계적으로 줄였다고 보고했어요.</p>
    <blockquote>
      <p>"Contextual Retrieval solves this problem by prepending chunk-specific explanatory context to each chunk before embedding."</p>
      <p>— Contextual Retrieval은 임베딩 전에 각 청크 앞에 청크별 설명 맥락을 붙여 이 문제를 해결한다.</p>
      <p>Anthropic Engineering, <a href="https://www.anthropic.com/news/contextual-retrieval" target="_blank" rel="noopener"><em>Contextual Retrieval in AI Systems</em> (2024-09-19)</a></p>
    </blockquote>
  </div>
</div>

청크 재작성은 한 번에 끝나는 작업이 아니에요. 페이지가 늘어날수록, 모델이 업데이트될수록, 처방 패턴도 진화합니다. 다만 <em>첫 페이지 한 장</em>을 위 5단계로 다시 써 보는 것만으로도 <em>내 글이 왜 인용되지 않았는지</em> 가 손에 잡히기 시작해요. 거기서부터 GEO 실행이 시작됩니다.

<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "FAQPage",
      "@id": "https://nipal-ai.com/blog/chunk-prescription/#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "청크가 뭐고 AI는 왜 청크 단위로 인용하나요?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "청크는 200~500 토큰 정도의 의미 단위 문단이고, AI는 답변을 만들 때 페이지 전체가 아니라 이 청크 하나를 골라 인용합니다. ChatGPT·Perplexity 같은 AI는 페이지를 작은 덩어리(청크)로 잘라 임베딩 인덱스에 저장하고, 사용자 질문과 가장 가까운 청크 몇 개를 골라 답변의 근거로 씁니다. Anthropic의 Contextual Retrieval 연구는 청크 앞에 50~100 토큰의 설명 맥락을 붙이는 것만으로 retrieval failure가 35% 감소하고, BM25 결합 시 49%, reranking 추가 시 67%까지 줄어든다고 보고했습니다."
          }
        },
        {
          "@type": "Question",
          "name": "어떤 청크가 인용 적격일까요?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "인용 적격 청크는 첫 문장만 읽어도 답이 되는 청크입니다. 질문·정의·표·리스트처럼 구조가 명확하고 청크 안에서 답이 완결되는 형태가 가장 강합니다. Anthropic Cookbook 실험에서는 Contextual Embeddings 적용 후 Pass@10이 87.15%에서 92.34%로, Reranking 추가 시 95.26%까지 상승했습니다. 실패율 기준 약 63% 감소입니다."
          }
        },
        {
          "@type": "Question",
          "name": "처방 패턴 1 — Q&A H2로 청크 분할을 어떻게 명확히 하나요?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "H2를 질문형으로 바꾸고 그 직후 첫 문장에 직답을 박는 패턴입니다. AI는 H2·H3 같은 의미 경계를 청크 분할 신호로 활용하고, 질문형 H2는 여기서부터 하나의 답변 단위가 시작된다는 가장 강한 메타데이터입니다. 첫 문장에 직답이 있으면 AI가 이 청크 하나만 뽑아도 답이 완결된다고 판단합니다."
          }
        },
        {
          "@type": "Question",
          "name": "처방 패턴 2~3 — 정의 박스와 정형 표·리스트를 어떻게 만드나요?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "50자 안팎의 한 줄 정의와 비교 표·순서 리스트는 청크가 독립 읽기 가능해지는 가장 빠른 패턴입니다. LlamaIndex 공식 가이드는 general prose 기준 256~512 토큰, overlap 50~100 토큰을 권장합니다. Qu et al. 2024 학술 비교에서는 5개 데이터셋 중 3개에서 fixed-size chunking이 semantic chunking보다 더 높은 성능을 보였습니다. 즉 잘 설계된 H2·H3 + 정의 박스 + 표·리스트의 고정 구조가 자유로운 의미 분할보다 견고한 청크를 만듭니다."
          }
        },
        {
          "@type": "Question",
          "name": "처방 패턴 4~5 — 엔티티 풍부화와 출처 카드는 어떻게 추가하나요?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "회사명·고유명사를 명시적으로 반복하고, 외부 권위 출처를 인용 카드 형태로 박는 패턴입니다. AI는 청크를 읽을 때 고유명사·인명·기관명·제품명 같은 엔티티를 우선적으로 추출합니다. 같은 청크여도 저희가 운영하는 그 브랜드보다 NIPAL AI가 운영하는 자사몰이 훨씬 강한 신호입니다. 1차 출처(공식 문서·학술 PDF·정부 통계)에 마크다운 링크를 거는 것이 가장 강합니다. Google Search Central도 AI Overviews에 별도 비밀 최적화는 없고 기존 SEO 기본기가 그대로 중요하다고 명시했습니다."
          }
        },
        {
          "@type": "Question",
          "name": "우리 페이지 한 장, 오늘 어떻게 다시 쓸까요?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "30분 안에 5단계 체크리스트로 다시 쓸 수 있습니다. 첫째 H2를 질문형으로 바꾸기(5분), 둘째 H2 직후 첫 문장에 직답 박기(5분), 셋째 표 1개와 리스트 1개 만들기(10분), 넷째 고유명사·회사명을 명시적으로 반복하기(5분), 다섯째 1차 출처 인용 카드 1개를 추가하기(5분)입니다. 한국어는 형태소·조사·어미가 결합된 교착어이므로 문장 경계와 의미 단위를 함께 봐야 한다는 점도 함께 고려합니다."
          }
        }
      ]
    },
    {
      "@type": "HowTo",
      "@id": "https://nipal-ai.com/blog/chunk-prescription/#howto",
      "name": "한 페이지를 30분 안에 청크 단위로 다시 쓰는 5단계",
      "description": "AI 답변에 인용되도록 페이지를 다시 쓰는 5가지 처방 패턴을 순서대로 적용합니다.",
      "totalTime": "PT30M",
      "step": [
        {
          "@type": "HowToStep",
          "position": 1,
          "name": "H2를 질문형으로 바꾸기",
          "text": "기존 명사구 H2('회사 소개' '서비스 안내')를 사용자가 실제로 물어볼 만한 질문형('우리 회사는 무엇을 하나요?')으로 다시 씁니다. AI가 청크 경계를 인식하는 가장 강한 신호입니다.",
          "url": "https://blog.hubspot.com/marketing/aeo-audit"
        },
        {
          "@type": "HowToStep",
          "position": 2,
          "name": "H2 직후 첫 문장에 직답 박기",
          "text": "배경 설명이나 도입 문장 대신 50자 안팎의 한 줄 정의 또는 직답을 H2 바로 다음에 배치합니다. 청크 하나만 뽑혀도 답이 완결되도록 합니다.",
          "url": "https://www.anthropic.com/news/contextual-retrieval"
        },
        {
          "@type": "HowToStep",
          "position": 3,
          "name": "표 1개 + 리스트 1개 만들기",
          "text": "비교·열거 정보를 산문에서 정형 표와 순서 리스트로 옮깁니다. LlamaIndex 권장 청크 크기는 general prose 기준 256~512 토큰, overlap 50~100 토큰입니다.",
          "url": "https://www.llamaindex.ai/glossary/document-chunking-strategies"
        },
        {
          "@type": "HowToStep",
          "position": 4,
          "name": "고유명사·회사명 명시적 반복",
          "text": "저희·우리 같은 대명사를 회사명·서비스명·제품명으로 치환합니다. AI는 청크에서 엔티티를 우선 추출하므로 고유명사 1~2회 반복만으로도 엔티티 점수가 즉시 올라갑니다.",
          "url": "https://blog.hubspot.com/marketing/aeo-audit"
        },
        {
          "@type": "HowToStep",
          "position": 5,
          "name": "1차 출처 인용 카드 1개 추가",
          "text": "학술 PDF·공식 문서·정부 통계 중 하나를 마크다운 링크 형태의 인용 카드로 청크에 박습니다. 청크가 근거 있는 사실 단위로 인식되어 신뢰도가 올라갑니다.",
          "url": "https://developers.google.com/search/docs/appearance/ai-features"
        }
      ]
    },
    {
      "@type": "BlogPosting",
      "@id": "https://nipal-ai.com/blog/chunk-prescription/#article",
      "headline": "청크 단위 처방 — AI에 인용되는 페이지를 쓰는 5가지 패턴",
      "description": "GEO 실행은 페이지가 아니라 청크 단위로 일어납니다. Anthropic·LlamaIndex·EMNLP 학술 출처를 바탕으로 오늘 적용할 5가지 작성 패턴을 정리합니다.",
      "datePublished": "2026-05-16T10:00:00+09:00",
      "dateModified": "2026-05-14T12:00:00+09:00",
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
      "image": "https://nipal-ai.com/assets/img/blog/chunk-prescription/og.png",
      "mainEntityOfPage": "https://nipal-ai.com/blog/chunk-prescription/",
      "about": [
        {"@type": "Thing", "name": "Content Chunking"},
        {"@type": "Thing", "name": "Retrieval-Augmented Generation", "sameAs": "https://en.wikipedia.org/wiki/Retrieval-augmented_generation"},
        {"@type": "Thing", "name": "Generative Engine Optimization", "sameAs": "https://en.wikipedia.org/wiki/Generative_engine_optimization"},
        {"@type": "Thing", "name": "Answer Engine Optimization"},
        {"@type": "Thing", "name": "Content Writing"}
      ],
      "mentions": [
        {"@type": "Organization", "name": "Anthropic", "sameAs": "https://www.anthropic.com/"},
        {"@type": "Organization", "name": "LlamaIndex", "sameAs": "https://www.llamaindex.ai/"},
        {"@type": "Organization", "name": "LangChain", "sameAs": "https://www.langchain.com/"},
        {"@type": "Organization", "name": "HubSpot", "sameAs": "https://www.hubspot.com/"},
        {"@type": "Organization", "name": "Google Search Central", "sameAs": "https://developers.google.com/search"},
        {"@type": "Organization", "name": "KoNLPy", "sameAs": "https://konlpy.org/"},
        {"@type": "Organization", "name": "IBM Research", "sameAs": "https://research.ibm.com/"},
        {"@type": "Person", "name": "Pranjal Aggarwal", "sameAs": "https://pranjal2041.github.io/"},
        {"@type": "ScholarlyArticle", "name": "GEO: Generative Engine Optimization", "sameAs": "https://arxiv.org/abs/2311.09735"},
        {"@type": "ScholarlyArticle", "name": "Is Semantic Chunking Worth the Computational Cost?", "sameAs": "https://arxiv.org/abs/2410.13070"},
        {"@type": "ScholarlyArticle", "name": "Searching for Best Practices in Retrieval-Augmented Generation", "sameAs": "https://aclanthology.org/2024.emnlp-main.981/"},
        {"@type": "Article", "name": "Contextual Retrieval in AI Systems", "sameAs": "https://www.anthropic.com/news/contextual-retrieval"},
        {"@type": "VideoObject", "name": "What is Retrieval-Augmented Generation (RAG)?", "sameAs": "https://www.youtube.com/watch?v=T-D1OfcDW1M"}
      ],
      "speakable": {
        "@type": "SpeakableSpecification",
        "cssSelector": [".post-summary", ".post-title", ".post-lede"]
      }
    }
  ]
}
</script>
