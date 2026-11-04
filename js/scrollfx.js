/* Scroll-linked reveal: fades/pops in slowly when entering, fades out while leaving through the top, and returns when scrolling back up. */
(() => {
  if (matchMedia('(prefers-reduced-motion:reduce)').matches) return;
  const $$ = s => [...document.querySelectorAll(s)];
  const clamp = v => Math.max(0, Math.min(1, v)), sm = v => v * v * (3 - 2 * v);
  const inPinned = el => el.closest('.horizontal-sticky-viewport,.hl-sticky,.hl-s-head');
  const items = [];
  const SEL = '.section-tag,.section-title,.section-lead,.portrait-visual-card,.stat-box,.stack-tabs,.stack-stage,.ct-head,.ct-card';
  $$(SEL).filter(el => !inPinned(el) && !el.parentElement.closest(SEL)).forEach(el => items.push({ el, kind: 'box', cur: null, done: false }));
  [['.horizontal-works-section', '.horizontal-sticky-viewport'], ['.hl-h', '.hl-sticky']].forEach(([s, f]) => {
    const sec = document.querySelector(s), el = document.querySelector(f);
    if (sec && el) items.push({ el, sec, kind: 'sec', cur: null });
  });
  const countUp = box => {
    const n = box.querySelector('.stat-box-number'); if (!n) return;
    const m = n.textContent.trim().match(/^(\d+)(%?)$/); if (!m || +m[1] < 10) return;
    const t0 = performance.now(), v = +m[1];
    (function f(t) { const k = Math.min(1, (t - t0) / 1600); n.textContent = Math.round(v * (1 - Math.pow(1 - k, 3))) + m[2]; if (k < 1) requestAnimationFrame(f); })(t0);
  };
  const target = it => {
    const vh = innerHeight;
    if (it.kind === 'sec') {
      if (innerWidth <= 900) return { f: 1, ty: 0 };
      const r = it.sec.getBoundingClientRect();
      const en = sm(clamp((vh * .95 - r.top) / (vh * .55))), ex = sm(clamp((r.bottom - vh * .05) / (vh * .5)));
      return { f: Math.min(en, ex), ty: (1 - en) * 60 - (1 - ex) * 40, blur: 0 };
    }
    const r = it.el.getBoundingClientRect();
    const en = sm(clamp((vh * .95 - r.top) / (vh * .32))), ex = it.el.closest('.ct') ? 1 : sm(clamp((r.bottom - vh * .04) / (vh * .3)));
    return { f: Math.min(en, ex), ty: (1 - en) * 70 - (1 - ex) * 50, blur: 5 };
  };
  const apply = (it, t) => {
    const f = it.cur, s = it.el.style;
    s.opacity = f >= .998 ? '' : f.toFixed(3);
    s.translate = f >= .998 ? '' : `0 ${(t.ty * (1 - f * .0)).toFixed(1)}px`;
    s.scale = f >= .998 ? '' : (.9 + .1 * f).toFixed(3);
    s.filter = (t.blur && f < .998) ? `blur(${((1 - f) * t.blur).toFixed(1)}px)` : '';
    s.willChange = f < .998 ? 'opacity,translate,scale' : '';
    if (it.el.classList.contains('stat-box') && !it.done && f > .7) { it.done = true; countUp(it.el); }
  };
  let raf = 0, tg = new Map();
  const step = () => {
    raf = 0; let busy = false;
    items.forEach(it => {
      const t = tg.get(it) || target(it);
      if (it.cur === null) it.cur = t.f;
      const d = t.f - it.cur;
      if (Math.abs(d) > .002) { it.cur += d * .12; busy = true; } else it.cur = t.f;
      apply(it, t);
    });
    if (busy) raf = requestAnimationFrame(step);
  };
  const update = () => { items.forEach(it => tg.set(it, target(it))); if (!raf) raf = requestAnimationFrame(step); };
  items.forEach(it => { const t = target(it); it.cur = t.f; tg.set(it, t); apply(it, t); });
  addEventListener('scroll', update, { passive: true });
  addEventListener('resize', update);
})();
