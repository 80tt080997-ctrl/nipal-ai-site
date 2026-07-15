/* ==========================================================================
   GeoMoment Blog — TOC auto-build + Share + Reading helpers
   ========================================================================== */

(function () {
  // ===== 1) Auto TOC from .post-body h2, h3, h4 =====
  const tocList = document.querySelector('.post-toc-list');
  let tocHeadings = [];
  if (tocList) {
    tocHeadings = Array.from(document.querySelectorAll('.post-body h2, .post-body h3, .post-body h4'));
    if (tocHeadings.length === 0) {
      const tocBox = document.querySelector('.post-toc');
      if (tocBox) tocBox.style.display = 'none';
    } else {
      tocHeadings.forEach((h, i) => {
        if (!h.id) {
          const slug = h.textContent
            .toLowerCase()
            .replace(/[^\w가-힣\s-]/g, '')
            .replace(/\s+/g, '-');
          h.id = slug || ('sec-' + i);
        }
        const li = document.createElement('li');
        li.className = 'toc-item toc-' + h.tagName.toLowerCase();
        const a = document.createElement('a');
        a.href = '#' + h.id;
        a.textContent = h.textContent;
        li.appendChild(a);
        tocList.appendChild(li);
      });

      // 스크롤 시 현재 섹션 강조
      const tocLinks = tocList.querySelectorAll('a');
      const onScroll = () => {
        let current = '';
        const scrollY = window.scrollY + 120;
        tocHeadings.forEach((h) => {
          if (h.offsetTop <= scrollY) current = h.id;
        });
        tocLinks.forEach((a) => {
          a.classList.toggle('is-active', a.getAttribute('href') === '#' + current);
        });
      };
      window.addEventListener('scroll', onScroll, { passive: true });
      onScroll();
    }
  }

  // ===== 1.5) Reading progress widget (도넛 카드) =====
  const widget = document.querySelector('[data-reading-widget]');
  if (widget) {
    const arc = widget.querySelector('.reading-widget-arc');
    const pctEl = widget.querySelector('[data-reading-pct]');
    const topBtn = widget.querySelector('[data-reading-top]');
    const article = document.querySelector('.blog-post .post-body') || document.querySelector('.blog-post');
    const circumference = 94.25; // 2 * PI * 15

    if (article && arc && pctEl) {
      const onProgress = () => {
        const rect = article.getBoundingClientRect();
        const articleTop = rect.top + window.scrollY;
        const total = article.offsetHeight - window.innerHeight;
        const viewportBottom = window.scrollY + window.innerHeight;
        const scrolled = viewportBottom - articleTop - window.innerHeight;
        let pct = total > 0 ? (scrolled / total) * 100 : 0;
        pct = Math.max(0, Math.min(100, pct));

        // Arc 채우기
        const offset = circumference - (circumference * pct) / 100;
        arc.style.strokeDashoffset = offset;
        pctEl.textContent = Math.round(pct) + '%';

        // 일정 스크롤 후 widget 보이기 (hero 영역 지나면)
        const showThreshold = articleTop - 100;
        if (window.scrollY > showThreshold) {
          widget.classList.add('is-visible');
        } else {
          widget.classList.remove('is-visible');
        }
      };
      window.addEventListener('scroll', onProgress, { passive: true });
      window.addEventListener('resize', onProgress, { passive: true });
      onProgress();
    }

    if (topBtn) {
      topBtn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        if (window.gtag) window.gtag('event', 'scroll_to_top', { article: document.title });
      });
    }
  }

  // ===== 2) Share buttons =====
  document.querySelectorAll('[data-share]').forEach((btn) => {
    btn.addEventListener('click', async (e) => {
      e.preventDefault();
      const type = btn.dataset.share;
      const url = encodeURIComponent(window.location.href);
      const title = encodeURIComponent(document.title);

      // Link copy (only share method now)
      if (type === 'copy') {
        try {
          await navigator.clipboard.writeText(window.location.href);
          const orig = btn.textContent;
          btn.textContent = '✓ 복사됨';
          setTimeout(() => { btn.textContent = orig; }, 1800);
          if (window.gtag) window.gtag('event', 'share', { method: 'copy_link' });
        } catch (err) {
          alert('복사 실패. URL을 직접 복사해주세요.');
        }
        return;
      }
    });
  });
})();
