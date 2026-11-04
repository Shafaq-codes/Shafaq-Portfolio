(() => {
  const pre = document.getElementById('preloader'), word = document.getElementById('preloaderWord'), wrap = pre && pre.querySelector('.preloader-center-wrap');
  if (!pre || !word || !wrap) return;
  const O = 'viewBox="0 0 520 240" aria-hidden="true"';
  const scenes = {
    plan: `<svg class="pl-scene plan" ${O} style="--pc:#e63946"><defs><pattern id="plg" width="20" height="20" patternUnits="userSpaceOnUse"><circle cx="1" cy="1" r="1" fill="#e63946" opacity=".3"/></pattern></defs><rect class="pl-fade" width="520" height="240" fill="url(#plg)"/>
<rect class="pl-draw" x="20" y="92" width="120" height="56" rx="12"/><text class="pl-t" x="80" y="125" style="--d:.4s">IDEA</text>
<path class="pl-draw" d="M140 120H196" style="--d:.35s"/><polygon class="pl-pop" points="194,113 206,120 194,127" fill="#e63946" style="--d:.7s"/>
<polygon class="pl-draw" points="260,76 322,120 260,164 198,120" style="--d:.5s"/><text class="pl-t" x="260" y="125" style="--d:.9s">SCOPE</text>
<path class="pl-draw" d="M322 120H376" style="--d:.9s"/><polygon class="pl-pop" points="374,113 386,120 374,127" fill="#e63946" style="--d:1.2s"/>
<rect class="pl-draw" x="380" y="92" width="120" height="56" rx="12" style="--d:1s"/><text class="pl-t" x="440" y="125" style="--d:1.4s">DESIGN</text>
<path class="pl-draw" d="M60 208H460" style="--d:1.2s"/>
<circle class="pl-pop" cx="60" cy="208" r="6" fill="#e63946" style="--d:1.3s"/><circle class="pl-pop" cx="193" cy="208" r="6" fill="#e63946" style="--d:1.5s"/><circle class="pl-pop" cx="327" cy="208" r="6" fill="#e63946" style="--d:1.7s"/><circle class="pl-pop" cx="460" cy="208" r="6" fill="#e63946" style="--d:1.9s"/>
<text class="pl-t" x="260" y="40" style="--d:.2s">BLUEPRINT</text></svg>`,
    build: `<svg class="pl-scene build" ${O} style="--pc:#f1f5f9">
<rect class="pl-draw" x="30" y="30" width="270" height="180" rx="14"/><path class="pl-draw" d="M30 62H300" style="--d:.3s"/>
<circle class="pl-pop" cx="52" cy="46" r="5" fill="#e63946" style="--d:.4s"/><circle class="pl-pop" cx="70" cy="46" r="5" fill="#f1f5f9" style="--d:.5s"/><circle class="pl-pop" cx="88" cy="46" r="5" fill="#ff6b6b" style="--d:.6s"/>
<rect class="pl-gx" x="52" y="82" width="110" height="8" rx="4" fill="#f1f5f9" style="--d:.5s"/><rect class="pl-gx" x="52" y="104" width="170" height="8" rx="4" fill="#e63946" style="--d:.7s"/>
<rect class="pl-gx" x="72" y="126" width="90" height="8" rx="4" fill="#ff6b6b" style="--d:.9s"/><rect class="pl-gx" x="72" y="148" width="140" height="8" rx="4" fill="#f1f5f9" style="--d:1.1s"/>
<rect class="pl-gx" x="52" y="170" width="70" height="8" rx="4" fill="#e63946" style="--d:1.3s"/><rect class="pl-blink" x="130" y="166" width="8" height="16" fill="#fff"/>
<g class="pl-drop" style="--d:.5s"><rect class="pl-draw" x="340" y="164" width="150" height="40" rx="10" style="--d:.5s"/><text class="pl-t" x="415" y="189" style="--d:.9s">DATABASE</text></g>
<g class="pl-drop" style="--d:.9s"><rect class="pl-draw" x="340" y="112" width="150" height="40" rx="10" style="--d:.9s"/><text class="pl-t" x="415" y="137" style="--d:1.3s">API</text></g>
<g class="pl-drop" style="--d:1.3s"><rect class="pl-draw" x="340" y="60" width="150" height="40" rx="10" style="--d:1.3s"/><text class="pl-t" x="415" y="85" style="--d:1.7s">UI</text></g></svg>`,
    ship: `<svg class="pl-scene ship" ${O} style="--pc:#8dbf9c">
<line class="pl-streak" x1="110" y1="20" x2="110" y2="44"/><line class="pl-streak" x1="190" y1="10" x2="190" y2="38" style="--d:.2s"/><line class="pl-streak" x1="330" y1="14" x2="330" y2="42" style="--d:.35s"/><line class="pl-streak" x1="410" y1="24" x2="410" y2="48" style="--d:.1s"/>
<ellipse class="pl-fade" cx="260" cy="222" rx="110" ry="12" fill="#fff" opacity=".1"/><ellipse class="pl-fade" cx="200" cy="216" rx="50" ry="10" fill="#fff" style="--d:.2s;opacity:.08"/><ellipse class="pl-fade" cx="320" cy="216" rx="55" ry="10" fill="#fff" style="--d:.3s"/>
<g transform="translate(260 120)"><g class="pl-rise">
<ellipse class="pl-flame" cx="0" cy="40" rx="9" ry="20" fill="#e63946"/><ellipse class="pl-flame" cx="0" cy="38" rx="4" ry="11" fill="#fff"/>
<path d="M-14 20L-34 48L-12 38Z" fill="#8dbf9c"/><path d="M14 20L34 48L12 38Z" fill="#8dbf9c"/>
<path d="M0 -62C22 -38 22 8 15 36H-15C-22 8 -22 -38 0 -62Z" fill="#0b1f1a" stroke="#8dbf9c" stroke-width="3"/><circle cx="0" cy="-16" r="9" fill="#8dbf9c"/><circle cx="-3" cy="-19" r="3" fill="#fff" opacity=".7"/></g></g>
<g class="pl-pop" style="--d:1.1s"><rect x="370" y="168" width="120" height="36" rx="18" fill="none" stroke="#8dbf9c" stroke-width="2"/><text class="pl-t" x="430" y="191" style="--d:1.2s">✓ LIVE</text></g>
<text class="pl-t" x="90" y="190" style="--d:.3s">DEPLOY</text></svg>`,
    scale: `<svg class="pl-scene scale" ${O} style="--pc:#e63946">
<path class="pl-draw" d="M40 206H480"/>
<rect class="pl-grow" x="70" y="176" width="44" height="30" rx="6" fill="#e63946" opacity=".85"/><rect class="pl-grow" x="150" y="148" width="44" height="58" rx="6" fill="#e63946" opacity=".85" style="--d:.15s"/>
<rect class="pl-grow" x="230" y="116" width="44" height="90" rx="6" fill="#e63946" opacity=".85" style="--d:.3s"/><rect class="pl-grow" x="310" y="78" width="44" height="128" rx="6" fill="#e63946" opacity=".85" style="--d:.45s"/>
<rect class="pl-grow" x="390" y="36" width="44" height="170" rx="6" fill="#e63946" opacity=".85" style="--d:.6s"/>
<polyline class="pl-draw" points="92,160 172,132 252,100 332,62 412,20" fill="none" stroke="#fff" style="--d:.9s;stroke-width:3"/>
<circle class="pl-pop" cx="92" cy="160" r="5" fill="#fff" style="--d:1s"/><circle class="pl-pop" cx="172" cy="132" r="5" fill="#fff" style="--d:1.15s"/><circle class="pl-pop" cx="252" cy="100" r="5" fill="#fff" style="--d:1.3s"/><circle class="pl-pop" cx="332" cy="62" r="5" fill="#fff" style="--d:1.45s"/>
<polygon class="pl-pop" points="402,28 428,12 426,38" fill="#fff" style="--d:1.6s"/>
<text class="pl-t" x="460" y="60" style="--d:1.5s">GROWTH</text></svg>`
  };
  const box = document.createElement('div'); box.className = 'pl-visual'; box.setAttribute('aria-hidden', 'true');
  box.innerHTML = Object.values(scenes).join('');
  box.querySelectorAll('.pl-draw').forEach(e => e.setAttribute('pathLength', 1));
  const tag = wrap.querySelector('.preloader-brand-tag');
  tag ? tag.after(box) : wrap.prepend(box);
  const sync = () => { const w = word.textContent.trim().toUpperCase(); if (pre.dataset.w !== w) pre.dataset.w = w; };
  new MutationObserver(sync).observe(word, { childList: true, characterData: true, subtree: true });
  sync();
})();
