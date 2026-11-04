(() => {
  const sec = document.querySelector('.stack-h');
  const tabs = [...document.querySelectorAll('.stack-tab')], panels = [...document.querySelectorAll('.stack-panel')];
  if (!sec || !tabs.length) return;
  const n = tabs.length, clamp = v => Math.max(0, Math.min(1, v));
  let cur = -1, allDone = false, tk = 0;
  const dist = () => sec.getBoundingClientRect().height - innerHeight;
  const paint = (i, all, frac) => {
    const idx = Math.min(i, n - 1);
    if (idx !== cur || all !== allDone) {
      cur = idx; allDone = all;
      tabs.forEach((t, k) => { t.classList.toggle('active', k === idx); t.classList.toggle('done', k < idx || all); t.setAttribute('aria-selected', k === idx); });
      panels.forEach((p, k) => p.classList.toggle('active', k === idx));
    }
    tabs[idx].style.setProperty('--tp', all ? 1 : frac.toFixed(3));
  };
  const run = () => {
    tk = 0;
    const r = sec.getBoundingClientRect(), d = r.height - innerHeight;
    const p = d > 0 ? clamp(-r.top / d) : 0, seg = p * (n + 1), i = Math.floor(seg);
    paint(i, i >= n, seg - i);
  };
  addEventListener('scroll', () => { tk || (tk = requestAnimationFrame(run)); }, { passive: true });
  addEventListener('resize', run);
  tabs.forEach((t, k) => t.addEventListener('click', () => {
    const top = scrollY + sec.getBoundingClientRect().top;
    scrollTo({ top: top + dist() * ((k + .5) / (n + 1)), behavior: 'smooth' });
  }));
  run();
})();
