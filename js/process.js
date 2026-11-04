(() => {
  const sec = document.getElementById('process'); if (!sec) return;
  const track = sec.querySelector('.pr-track'), steps = [...sec.querySelectorAll('.pr-step')];
  let tk = 0;
  const run = () => {
    tk = 0;
    const r = sec.getBoundingClientRect(), vh = innerHeight;
    const p = Math.max(0, Math.min(1, (vh * .78 - r.top) / (vh * .55)));
    track.style.setProperty('--p', p.toFixed(3));
    steps.forEach((s, i) => s.classList.toggle('on', p >= i / (steps.length - 1) - .001 && p > 0.02));
  };
  addEventListener('scroll', () => { tk || (tk = requestAnimationFrame(run)); }, { passive: true });
  addEventListener('resize', run); run();
})();
