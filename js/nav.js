(() => {
  const wrap = document.querySelector('.nav-links-wrap'); if (!wrap) return;
  const links = [...wrap.querySelectorAll('.nav-link')];
  const ind = document.createElement('span'); ind.className = 'nav-indicator'; wrap.prepend(ind);
  const place = el => {
    if (!el || !el.offsetWidth) { ind.style.opacity = 0; return; }
    const cta = el.classList.contains('nav-cta');
    if (cta) { ind.style.opacity = 0; return; }
    ind.style.opacity = 1; ind.style.left = (el.offsetLeft + 12) + 'px'; ind.style.top = (el.offsetTop + el.offsetHeight - 4) + 'px';
    ind.style.width = (el.offsetWidth - 24) + 'px';
  };
  const sync = () => place(links.find(l => l.classList.contains('active')));
  links.forEach(l => { l.addEventListener('mouseenter', () => place(l)); l.addEventListener('focus', () => place(l)); });
  wrap.addEventListener('mouseleave', sync);
  new MutationObserver(sync).observe(wrap, { subtree: true, attributes: true, attributeFilter: ['class'] });
  addEventListener('resize', sync);
  if (document.fonts) document.fonts.ready.then(sync);
  sync(); setTimeout(sync, 400);
})();
