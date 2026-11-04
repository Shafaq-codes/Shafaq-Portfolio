/* All Projects page (opens as a full-screen page at #all-projects).
   To add a project link, paste the URL into the matching `link` field below. */
(() => {
  const PROJECTS = [
    {
      "title": "GIT COMMITBOX",
      "sub": "GitHub contribution studio & pixel matrix designer.",
      "body": "Interactive developer studio and visual pixel designer for GitHub contribution graphs. Create custom commit artwork, design activity heatmaps, and generate automated one-click shell scripts and JSON execution schedules.",
      "tags": [
        "JavaScript",
        "GitHub Matrix",
        "Interactive Canvas",
        "Shell Automation",
        "Vercel"
      ],
      "icon": "fa-solid fa-table-cells",
      "cats": [
        "web"
      ],
      "link": "https://git-commitbox.vercel.app"
    },
    {
      "title": "MAIL-2-GIT",
      "sub": "Cryptographic GitHub profile & commit tracer.",
      "body": "Engineered an automated OSINT intelligence tool that traces, discovers, and cryptographically verifies GitHub profiles, commit histories, and public repositories from a target email address using cryptographic Git signatures.",
      "tags": [
        "Python",
        "FastAPI",
        "Git Signatures",
        "OSINT",
        "Vercel"
      ],
      "icon": "fa-solid fa-envelope-open-text",
      "cats": [
        "python",
        "osint"
      ],
      "logo": "./assets/logos/mail2git.svg",
      "link": "https://mail2git.vercel.app"
    },
    {
      "title": "AKTU NOTES APP",
      "sub": "Centralized academic hub for engineering students.",
      "body": "Fast, responsive academic portal providing structured university study materials, curated subject notes, previous semester question banks, and offline resource caching.",
      "tags": [
        "JavaScript",
        "HTML5 / CSS3",
        "Local Storage",
        "UI Architecture"
      ],
      "icon": "fa-solid fa-book-bookmark",
      "cats": [
        "web"
      ],
      "link": "https://aktu-notes-portal.vercel.app"
    },
    {
      "title": "AKTU RESULT APP",
      "sub": "University result scraping & performance analysis portal.",
      "body": "Automated academic result tracking and evaluation platform for AKTU engineering students, featuring instant SGPA/CGPA computation, subject analytics, and historical score archiving.",
      "tags": [
        "Node.js",
        "Express",
        "Web Scraping",
        "Academic Analytics",
        "Render"
      ],
      "icon": "fa-solid fa-graduation-cap",
      "cats": [
        "web"
      ],
      "link": "https://aktu-result-app.onrender.com"
    },
    {
      "title": "VANTAGE COPILOT",
      "sub": "AI-powered smart copilot & automation workspace.",
      "body": "Next-generation intelligent assistant designed to accelerate creative and developer workflows with context-aware AI interactions, deep tool integrations, and real-time reasoning.",
      "tags": [
        "AI / LLMs",
        "React / Next.js",
        "TailwindCSS",
        "Workflow Automation",
        "Vercel"
      ],
      "icon": "fa-solid fa-wand-magic-sparkles",
      "cats": [
        "ai",
        "web"
      ],
      "link": "https://vantagecopilot.vercel.app"
    },
    {
      "title": "AI CALLING AGENT",
      "sub": "Autonomous conversational voice AI for businesses.",
      "body": "Autonomous voice AI agent capable of holding natural, context-aware two-way voice conversations with custom enterprise knowledge bases and instantaneous audio turnaround.",
      "tags": [
        "AI Voice / LLMs",
        "Node.js",
        "WebSockets",
        "Speech Synthesis",
        "Render"
      ],
      "icon": "fa-solid fa-headset",
      "cats": [
        "ai",
        "web"
      ],
      "link": "https://ai-calling-agent-ord3.onrender.com"
    },
    {
      "title": "AI SEARCH ENGINE",
      "sub": "High-performance cyber intelligence & search console.",
      "body": "High-performance investigative intelligence console and AI search platform designed for digital footprint tracing, cross-platform entity correlation, and deep visual telemetry graphs.",
      "tags": [
        "JavaScript",
        "Node.js",
        "AI Search",
        "Cyber Intelligence",
        "REST APIs"
      ],
      "icon": "fa-solid fa-shield-cat",
      "cats": [
        "ai",
        "osint",
        "web"
      ],
      "link": "https://ai-searchengine.vercel.app"
    },
    {
      "title": "E-BOMBER",
      "sub": "Multi-threaded API load stress & security utility.",
      "body": "High-concurrency testing suite designed for API endpoint stress assessment, throughput resilience benchmarking, and edge-case response telemetry under intense concurrent loads.",
      "tags": [
        "Python",
        "Multi-Threading",
        "Stress Testing",
        "API Security",
        "Vercel"
      ],
      "icon": "fa-solid fa-bolt",
      "cats": [
        "python",
        "web"
      ],
      "link": "https://e-bomber.vercel.app"
    },
    {
      "title": "CYBER ASCII WEB",
      "sub": "Retro-futuristic cyber ASCII terminal & visual engine.",
      "body": "Interactive retro cyber-terminal web experiment featuring ASCII art rendering, matrix telemetry streams, synthwave aesthetics, and real-time shader visual effects.",
      "tags": [
        "JavaScript",
        "Canvas API",
        "WebGL / Shaders",
        "ASCII Engine",
        "Vercel"
      ],
      "icon": "fa-solid fa-terminal",
      "cats": [
        "web",
        "3d"
      ],
      "link": "https://cyber-ascii-web.vercel.app"
    },
    {
      "title": "REPO SCROLL",
      "sub": "Interactive repository showcase & commit stream.",
      "body": "Dynamic developer repository showcase that streams real-time public commit telemetry, branch metrics, and interactive repository insights with hardware-accelerated animations.",
      "tags": [
        "GitHub API",
        "JavaScript (ES6+)",
        "CSS Animations",
        "REST APIs"
      ],
      "icon": "fa-brands fa-github",
      "cats": [
        "web"
      ],
      "logo": "./assets/logos/repo-scroll.svg",
      "link": "https://repo-scroll.vercel.app"
    },
    {
      "title": "JARVIS EXTENSION",
      "sub": "Tony Stark-inspired autonomous AI conversational companion.",
      "body": "Engineered an interactive browser extension modeled after Iron Man's J.A.R.V.I.S., delivering witty, context-aware conversational AI responses, dynamic voice feedback, and autonomous browser workflow assistance.",
      "tags": [
        "Chrome Extension",
        "JavaScript (ES6+)",
        "AI / LLM Integration",
        "Speech Synthesis",
        "Automation"
      ],
      "icon": "fa-solid fa-atom",
      "cats": [
        "ai",
        "web"
      ],
      "logo": "./assets/logos/jarvis.svg",
      "link": "https://jarvis-extension.vercel.app"
    },
    {
      "title": "3D COZY ROOM",
      "sub": "Immersive 3D interactive ambient relaxation space.",
      "body": "Crafted a hardware-accelerated 3D virtual environment designed with warm realistic lighting, atmospheric ambient soundscapes, and calming interactive aesthetics for a peaceful, meditative digital retreat.",
      "tags": [
        "Three.js / WebGL",
        "3D Modeling",
        "Interactive Audio",
        "Lighting & Shaders",
        "Vercel"
      ],
      "icon": "fa-solid fa-couch",
      "cats": [
        "3d"
      ],
      "link": "https://3d-room-black.vercel.app"
    }
  ];
  const COLORS = ['#e5132b', '#ff3d5a', '#d9b46a', '#46e3a8', '#f4f1ec', '#ff6b81', '#e5132b', '#d9b46a', '#ff3d5a', '#46e3a8', '#f4f1ec', '#ff3d5a'];
  const FILTERS = [['all', 'All'], ['web', 'Web'], ['python', 'Python'], ['ai', 'AI'], ['osint', 'OSINT'], ['3d', '3D']];
  const esc = s => String(s).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
  const root = document.createElement('div');
  root.className = 'ap'; root.id = 'allProjects'; root.hidden = true;
  root.setAttribute('role', 'dialog'); root.setAttribute('aria-modal', 'true'); root.setAttribute('aria-label', 'All projects');
  const pad = n => String(n).padStart(2, '0');
  root.innerHTML = `
    <div class="ap-glow ap-g1"></div><div class="ap-glow ap-g2"></div>
    <header class="ap-top"><button type="button" class="ap-back"><i class="fa-solid fa-arrow-left"></i> Back to Portfolio</button><span class="ap-count">${pad(PROJECTS.length)} PROJECTS</span></header>
    <div class="ap-inner">
      <p class="ap-tag"><span class="ap-tag-prefix">//</span> ALL PROJECTS</p>
      <h1 class="ap-title">Everything I've Built.</h1>
      <div class="ap-grid">${PROJECTS.map((p, i) => `
        <article class="ap-card" data-cats="${p.cats.join(' ')}"${p.link ? ` data-href="${esc(p.link)}"` : ''} style="--c:${COLORS[i % COLORS.length]};--i:${i}">
          <span class="ap-n">${pad(i + 1)}</span>
          <div class="ap-ic${p.logo ? ' logo' : ''}">${p.logo ? `<img src="${esc(p.logo)}" alt="${esc(p.title)} logo" width="52" height="52">` : `<i class="${esc(p.icon)}"></i>`}</div>
          <h3 class="ap-name">${esc(p.title)}</h3>
          <p class="ap-sub">${esc(p.sub)}</p>
          <p class="ap-body">${esc(p.body)}</p>
          <div class="ap-tags">${p.tags.map(t => `<span>${esc(t)}</span>`).join('')}</div>
          ${p.link ? `<a class="ap-link" href="${esc(p.link)}" target="_blank" rel="noopener noreferrer">View Project <i class="fa-solid fa-arrow-up-right-from-square"></i></a>` : `<span class="ap-link off"><i class="fa-regular fa-clock"></i> Link coming soon</span>`}
        </article>`).join('')}</div>
    </div>`;
  document.body.appendChild(root);

  let opener = null, pushed = false;
  const HASH = '#all-projects';
  const show = () => {
    if (!root.hidden) return;
    root.hidden = false; root.scrollTop = 0;
    document.documentElement.style.overflow = 'hidden';
    requestAnimationFrame(() => { root.classList.add('open'); root.querySelector('.ap-back').focus({ preventScroll: true }); });
  };
  const hide = () => {
    if (root.hidden) return;
    root.classList.remove('open'); root.hidden = true;
    document.documentElement.style.overflow = '';
    if (opener) { opener.focus({ preventScroll: true }); opener = null; }
  };
  const open = from => {
    opener = from || null;
    show();
    if (location.hash !== HASH) { try { location.hash = HASH; pushed = true; } catch (e) {} }
  };
  const close = () => {
    hide();
    if (location.hash === HASH) {
      if (pushed) { pushed = false; try { history.back(); return; } catch (e) {} }
      try { history.replaceState(null, '', location.pathname + location.search); } catch (e) {}
    }
  };
  window.addEventListener('hashchange', () => { location.hash === HASH ? show() : hide(); });
  document.addEventListener('keydown', e => { if (e.key === 'Escape' && !root.hidden) close(); });
  root.querySelector('.ap-back').addEventListener('click', close);
  const filterWrap = root.querySelector('.ap-filters');
  if (filterWrap) {
    filterWrap.addEventListener('click', e => {
      const b = e.target.closest('.ap-chip'); if (!b) return;
      root.querySelectorAll('.ap-chip').forEach(c => c.classList.toggle('on', c === b));
      const f = b.dataset.f; let n = 0;
      root.querySelectorAll('.ap-card').forEach(c => {
        const ok = f === 'all' || c.dataset.cats.split(' ').includes(f);
        c.hidden = !ok; if (ok) { c.style.setProperty('--i', n++); c.style.animation = 'none'; void c.offsetWidth; c.style.animation = ''; }
      });
    });
  }
  document.addEventListener('click', e => { const b = e.target.closest('[data-open-projects]'); if (b) { e.preventDefault(); open(b); } });
  if (location.hash === HASH) show();

  /* Clicking a project box opens its site in a new tab (Selected Projects slides and All Projects cards) */
  const go = url => { const a = document.createElement('a'); a.href = url; a.target = '_blank'; a.rel = 'noopener noreferrer'; document.body.appendChild(a); a.click(); a.remove(); };
  document.addEventListener('click', e => {
    const c = e.target.closest('.project-slide-card[data-href],.ap-card[data-href]');
    if (c && !e.target.closest('a,button')) go(c.dataset.href);
  });
  document.addEventListener('keydown', e => {
    if (e.key !== 'Enter') return;
    const c = e.target.closest && e.target.closest('.project-slide-card[data-href]');
    if (c) go(c.dataset.href);
  });
})();
