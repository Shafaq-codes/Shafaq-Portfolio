(() => {
  const cards = [...document.querySelectorAll('.hl-sc')]; if (!cards.length) return;
  const head = document.querySelector('.hl-s-head'), stack = document.getElementById('hlStack');
  let tk = 0;

  const updateHlh = () => {
    if (head && stack) {
      const headTop = parseFloat(getComputedStyle(head).top) || 68;
      const needed = Math.ceil(headTop + head.offsetHeight + 24);
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
    /* keep the section title pinned while the cards stack; fade it out once all cards are done and the stack starts leaving */
    if (head && stack) {
      const last = cards[cards.length - 1], padB = parseFloat(getComputedStyle(stack).paddingBottom) || 0;
      const rel = (stack.getBoundingClientRect().bottom - padB) - (topOf(cards.length - 1) + last.offsetHeight);
      const op = Math.max(0, Math.min(1, rel / 110));
      head.style.opacity = op >= .999 ? '' : op.toFixed(3);
      head.style.translate = op >= .999 ? '' : `0 ${(-(1 - op) * 24).toFixed(1)}px`;
      head.style.visibility = op <= .01 ? 'hidden' : '';
    }
  };
  addEventListener('scroll', () => { tk || (tk = requestAnimationFrame(run)); }, { passive: true });
  addEventListener('resize', () => { updateHlh(); run(); });
  run();
})();
