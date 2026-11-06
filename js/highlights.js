(() => {
  const cards = [...document.querySelectorAll('.hl-sc')]; if (!cards.length) return;
  const head = document.querySelector('.hl-s-head'), stack = document.getElementById('hlStack');
  let tk = 0;

  const updateHlh = () => {
    if (head && stack) {
      const headTop = parseFloat(getComputedStyle(head).top) || 64;
      const needed = Math.ceil(headTop + head.offsetHeight + 16);
      stack.style.setProperty('--hlh', `${needed}px`);
    }
  };
  updateHlh();

  const run = () => {
    tk = 0; const vh = innerHeight, topOf = j => parseFloat(getComputedStyle(cards[j]).top) || 0;
    cards.forEach((c, i) => {
      let sum = 0;
      for (let j = i + 1; j < cards.length; j++) {
        const d = cards[j].getBoundingClientRect().top - topOf(j);
        sum += Math.max(0, Math.min(1, 1 - d / (vh * .55)));
      }
      c.style.scale = (1 - .045 * sum).toFixed(4);
      c.style.filter = sum > .01 ? `brightness(${(1 - .16 * sum).toFixed(3)})` : '';
    });
    /* keep the section title pinned while the cards stack;
       once the last card arrives at its resting position (first screenshot) and begins moving up,
       the title scrolls up at the EXACT same rate, so the card NEVER overlaps or goes behind the title! */
    if (head && stack) {
      const last = cards[cards.length - 1];
      const lastStickyTop = topOf(cards.length - 1);
      const lastCurrentTop = last.getBoundingClientRect().top;
      if (lastCurrentTop < lastStickyTop - 0.5) {
        const dy = lastStickyTop - lastCurrentTop;
        head.style.translate = `0 ${(-dy).toFixed(1)}px`;
        const op = Math.max(0, Math.min(1, 1 - dy / 200));
        head.style.opacity = op >= .999 ? '' : op.toFixed(3);
      } else {
        head.style.translate = '';
        head.style.opacity = '';
      }
    }
  };
  addEventListener('scroll', () => { tk || (tk = requestAnimationFrame(run)); }, { passive: true });
  addEventListener('resize', () => { updateHlh(); run(); });
  run();
})();
