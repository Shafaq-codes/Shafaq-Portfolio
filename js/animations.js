/* ===== Motion layer: animations.js (null-safe, independent of main.js) ===== */
(() => {
  const d = document, b = d.body, h = d.documentElement;
  const $ = (s, r = d) => [...r.querySelectorAll(s)], $1 = (s) => d.querySelector(s);
  const rm = matchMedia('(prefers-reduced-motion:reduce)').matches;
  const fine = matchMedia('(pointer:fine)').matches;
  const mk = (t, c) => { const e = d.createElement(t); e.className = c; b.appendChild(e); return e; };

  /* start hero animation once the preloader finishes */
  h.classList.add('m-js');
  const ready = () => h.classList.add('m-ready');
  if (!b.classList.contains('preloader-active')) ready();
  else {
    new MutationObserver((_, o) => { if (!b.classList.contains('preloader-active')) { ready(); o.disconnect(); } })
      .observe(b, { attributes: true, attributeFilter: ['class'] });
    setTimeout(ready, 9000);
  }

  /* hand-drawn oval: draw-on effect */
  $('.hand-drawn-oval path').forEach(p => p.setAttribute('pathLength', 1));

  /* stagger index for tags */
  $('.skill-tags-wrap').forEach(w => $('.tech-tag', w).forEach((t, i) => t.style.setProperty('--i', i)));

  /* scroll reveal + count-up + spotlight + tilt */
  const cards = $('.skill-bento-card,.stat-box,.contact-direct-card,.contact-form-card,.portrait-visual-card,.hl-card,.ct-card');
  cards.forEach(el => {
    if (getComputedStyle(el).position === 'static') el.style.position = 'relative';
    const s = d.createElement('div'); s.className = 'm-spot'; el.appendChild(s);
    el.addEventListener('pointermove', e => {
      const r = el.getBoundingClientRect(), px = (e.clientX - r.left) / r.width, py = (e.clientY - r.top) / r.height;
      el.style.setProperty('--mx', px * 100 + '%'); el.style.setProperty('--my', py * 100 + '%');
      if (fine && !rm && !el.matches('.contact-form-card,.ct-form'))
        el.style.transform = `perspective(900px) rotateX(${(py - .5) * -7}deg) rotateY(${(px - .5) * 7}deg)`;
    });
    el.addEventListener('pointerleave', () => { el.style.transform = ''; });
  });

  /* magnetic buttons */
  if (fine && !rm) {
    $('.btn-primary,.btn-outline,.nav-cta,.ct-social,.ct-send,.brand-logo-link').forEach(el => {
      el.style.transition = 'translate .3s cubic-bezier(.2,.8,.2,1),background-color .3s,color .3s,border-color .3s,box-shadow .3s,transform .3s,opacity .3s';
      el.addEventListener('pointermove', e => {
        const r = el.getBoundingClientRect();
        el.style.translate = `${(e.clientX - r.left - r.width / 2) * .25}px ${(e.clientY - r.top - r.height / 2) * .35}px`;
      });
      el.addEventListener('pointerleave', () => { el.style.translate = ''; });
    });
  }

  /* soft cursor glow (native cursor stays) */
  if (fine && !rm) {
    const g = mk('div', 'm-glow');
    let x = innerWidth / 2, y = innerHeight / 2, gx = x, gy = y;
    addEventListener('pointermove', e => { x = e.clientX; y = e.clientY; }, { passive: true });
    (function f() { gx += (x - gx) * .12; gy += (y - gy) * .12; g.style.translate = `${gx - 200}px ${gy - 200}px`; requestAnimationFrame(f); })();
  }

  /* particle constellation (reacts to mouse) */
  if (!rm) {
    const c = mk('canvas', 'm-canvas'), x = c.getContext('2d'); let W, H, P = [], m = { x: -999, y: -999 };
    const rs = () => { W = c.width = innerWidth; H = c.height = innerHeight; P = Array.from({ length: Math.min(100, innerWidth / 14 | 0) }, () => ({ x: Math.random() * W, y: Math.random() * H, vx: (Math.random() - .5) * .4, vy: (Math.random() - .5) * .4 })); };
    rs(); addEventListener('resize', rs);
    addEventListener('pointermove', e => { m.x = e.clientX; m.y = e.clientY; }, { passive: true });
    (function f() {
      requestAnimationFrame(f); if (d.hidden) return;
      x.clearRect(0, 0, W, H);
      for (const p of P) {
        p.x += p.vx; p.y += p.vy; if (p.x < 0 || p.x > W) p.vx *= -1; if (p.y < 0 || p.y > H) p.vy *= -1;
        const dx = p.x - m.x, dy = p.y - m.y; if (dx * dx + dy * dy < 14400) { p.x += dx * .03; p.y += dy * .03; }
        x.fillStyle = 'rgba(229, 19, 43,.85)'; x.beginPath(); x.arc(p.x, p.y, 1.5, 0, 6.3); x.fill();
      }
      for (let i = 0; i < P.length; i++) for (let j = i + 1; j < P.length; j++) {
        const dx = P[i].x - P[j].x, dy = P[i].y - P[j].y, q = dx * dx + dy * dy;
        if (q < 15000) { x.strokeStyle = `rgba(244, 241, 236,${(1 - q / 15000) * .28})`; x.beginPath(); x.moveTo(P[i].x, P[i].y); x.lineTo(P[j].x, P[j].y); x.stroke(); }
      }
    })();
  }

  /* scroll progress, smart header, portrait parallax */
  const bar = mk('div', 'm-prog'), hd = $1('.top-editorial-bar'), pi = $1('.portrait-visual-card img');
  if (pi) pi.style.scale = '1.12';
  let ly = 0, tk = 0;
  const sc = () => {
    tk = 0; const y = scrollY, mx = h.scrollHeight - innerHeight;
    bar.style.scale = `${mx > 0 ? y / mx : 0} 1`;
    if (hd) { hd.classList.toggle('m-scrolled', y > 40); hd.style.translate = (y > ly && y > 300) ? '0 -110%' : '0 0'; }
    ly = y;
    if (pi) { const r = pi.parentElement.getBoundingClientRect(); if (r.bottom > 0 && r.top < innerHeight) pi.style.translate = `0 ${((r.top + r.height / 2 - innerHeight / 2) * -.06).toFixed(1)}px`; }
  };
  addEventListener('scroll', () => { tk || (tk = requestAnimationFrame(sc)); }, { passive: true }); sc();
})();
