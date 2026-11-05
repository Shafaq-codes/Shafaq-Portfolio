(() => {
  const sec = document.getElementById('process');
  if (!sec) return;
  const track = sec.querySelector('.pr-track');
  const steps = [...sec.querySelectorAll('.pr-step')];
  if (!track || !steps.length) return;

  const clamp = (v, min = 0, max = 1) => Math.max(min, Math.min(max, v));
  let tk = 0;

  const run = () => {
    tk = 0;
    if (innerWidth <= 860) {
      track.style.setProperty('--p', '1');
      steps.forEach(s => s.classList.add('on'));
      return;
    }

    const r = sec.getBoundingClientRect();
    const vh = innerHeight;
    const d = r.height - vh;
    if (d <= 0) return;

    // raw fraction of pinned scroll: 0 when sticky section reaches top, 1 when sticky finishes
    const raw = -r.top / d;

    if (raw <= 0) {
      // User is scrolling into the section from above: only Step 1 is active, timeline at 0
      track.style.setProperty('--p', '0');
      steps.forEach((s, i) => s.classList.toggle('on', i === 0));
      return;
    }

    if (raw >= 1) {
      // User scrolled past: all steps remain on
      track.style.setProperty('--p', '1');
      steps.forEach(s => s.classList.add('on'));
      return;
    }

    // Allocate 0 to 0.88 of pinned scroll travel to sequentially fill the timeline and load cards
    // 0.88 to 1.0 is a resting hold buffer so all 4 cards remain fully visible before exiting
    const fillP = clamp(raw / 0.88);
    track.style.setProperty('--p', fillP.toFixed(3));

    // Step 01 is always on
    // Step 02 activates when fill line reaches column 2 center (~0.33)
    // Step 03 activates when fill line reaches column 3 center (~0.66)
    // Step 04 activates when fill line reaches column 4 center (~1.00)
    steps.forEach((s, i) => {
      let active = false;
      if (i === 0) active = true;
      else if (i === 1) active = fillP >= 0.30;
      else if (i === 2) active = fillP >= 0.63;
      else if (i === 3) active = fillP >= 0.95;
      s.classList.toggle('on', active);
    });
  };

  addEventListener('scroll', () => { tk || (tk = requestAnimationFrame(run)); }, { passive: true });
  addEventListener('resize', run);
  run();
})();
