(() => {
  "use strict";
  const D = window.PORTFOLIO;
  const $ = (s) => document.querySelector(s);
  const esc = (s) => String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  const reduceMotion = matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ---------- icons (inline SVG = zero extra requests) ---------- */
  const ICONS = {
    github: '<svg class="f" viewBox="0 0 16 16"><path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38v-1.49c-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82a7.6 7.6 0 0 1 4 0c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48v2.2c0 .21.15.46.55.38A8 8 0 0 0 16 8c0-4.42-3.58-8-8-8z"/></svg>',
    linkedin: '<svg class="f" viewBox="0 0 24 24"><path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13zM7.12 20.45H3.56V9h3.56v11.45z"/></svg>',
    kaggle: '<svg viewBox="0 0 24 24" stroke-width="2.6"><path d="M7 3v18M16.5 4 8 13M10 11l7.5 10"/></svg>',
    codeforces: '<svg class="f" viewBox="0 0 24 24"><rect x="2" y="10" width="5" height="11" rx="1.2"/><rect x="9.5" y="3" width="5" height="18" rx="1.2"/><rect x="17" y="7" width="5" height="14" rx="1.2"/></svg>',
    medium: '<svg class="f" viewBox="0 0 24 24"><ellipse cx="6.8" cy="12" rx="5.8" ry="6"/><ellipse cx="16.6" cy="12" rx="2.9" ry="5.6"/><ellipse cx="21.6" cy="12" rx="1.1" ry="5.1"/></svg>',
    discord: '<svg class="f" viewBox="0 0 24 24"><path fill-rule="evenodd" d="M19.3 5.3A17 17 0 0 0 15 4l-.5 1.1a15.6 15.6 0 0 0-5 0L9 4a17 17 0 0 0-4.3 1.3C2 9.4 1.3 13.3 1.6 17.2A17.3 17.3 0 0 0 6.9 20l1.1-1.8c-.6-.2-1.2-.5-1.7-.8l.4-.3a12.3 12.3 0 0 0 10.6 0l.4.3c-.5.3-1.1.6-1.7.8l1.1 1.8a17.2 17.2 0 0 0 5.3-2.8c.4-4.5-.7-8.4-3.1-11.9zM8.7 14.8c-1 0-1.9-1-1.9-2.1s.8-2.1 1.9-2.1 1.9 1 1.9 2.1-.8 2.1-1.9 2.1zm6.6 0c-1 0-1.9-1-1.9-2.1s.8-2.1 1.9-2.1 1.9 1 1.9 2.1-.8 2.1-1.9 2.1z"/></svg>',
    dev: '<svg class="f" viewBox="0 0 24 24"><rect x="1" y="4" width="22" height="16" rx="3"/><text x="12" y="15.3" text-anchor="middle" font-size="7.6" font-weight="800" font-family="Arial,sans-serif" style="fill:var(--bg)">DEV</text></svg>',
    ext: '<svg viewBox="0 0 24 24"><path d="M14 4h6v6M20 4l-9 9M18 14v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h5"/></svg>'
  };

  /* ---------- contact + socials ---------- */
  const socialHTML = () => D.socials.map((s) =>
    `<a href="${esc(s.url)}" target="_blank" rel="noopener" aria-label="${esc(s.name)}" title="${esc(s.name)}">${ICONS[s.icon] || ""}</a>`
  ).join("");
  $("#socials-hero").innerHTML = $("#rail-socials").innerHTML = socialHTML();

  /* ---------- experience tabs ---------- */
  const tabs = $("#exp-tabs"), panel = $("#exp-panel");
  tabs.innerHTML = D.experience.map((e, i) =>
    `<button type="button" role="tab" id="tab-${i}" aria-controls="exp-panel" aria-selected="false" tabindex="-1">${esc(e.tab)}</button>`).join("");
  const selectTab = (i, focus) => {
    const e = D.experience[i];
    [...tabs.children].forEach((b, k) => { b.setAttribute("aria-selected", k === i); b.tabIndex = k === i ? 0 : -1; });
    panel.setAttribute("aria-labelledby", "tab-" + i);
    panel.innerHTML = `<h3>${esc(e.role)} <span>@${esc(e.company)}</span></h3>
      <p class="exp-date">${esc(e.period)}</p>
      <ul>${e.points.map((p) => `<li>${esc(p)}</li>`).join("")}</ul>`;
    panel.style.animation = "none"; void panel.offsetWidth; panel.style.animation = ""; // replay fade-in
    if (focus) tabs.children[i].focus();
  };
  tabs.addEventListener("click", (ev) => { const i = [...tabs.children].indexOf(ev.target); if (i > -1) selectTab(i); });
  tabs.addEventListener("keydown", (ev) => { // arrow-key navigation (WAI-ARIA tabs)
    const cur = [...tabs.children].findIndex((b) => b.getAttribute("aria-selected") === "true");
    const n = D.experience.length;
    const map = { ArrowDown: 1, ArrowRight: 1, ArrowUp: -1, ArrowLeft: -1 };
    if (map[ev.key]) { ev.preventDefault(); selectTab((cur + map[ev.key] + n) % n, true); }
  });
  selectTab(0);

  /* ---------- certifications ---------- */
  $("#certs-link").href = D.certificationsUrl;
  $("#cert-grid").innerHTML = D.certifications.map((c) => `
    <a class="cert" href="${esc(c.url || D.certificationsUrl)}" target="_blank" rel="noopener">
      <span class="cert-text"><h3>${esc(c.title)}</h3><p>${esc(c.issuer)}</p><span class="verify">Verify →</span></span>
      <img src="${esc(c.qr || D.qr)}" alt="QR code to verify ${esc(c.title)}" width="96" height="96" loading="lazy" decoding="async">
    </a>`).join("");

  /* ---------- skills ---------- */
  $("#skill-groups").innerHTML = Object.entries(D.skills).map(([g, list]) => `
    <div class="skill-col"><h3>${esc(g)}</h3><ul>${list.map((s) => `<li>${esc(s)}</li>`).join("")}</ul></div>`).join("");

  /* ---------- projects ---------- */
  const projCard = (p) => `
    <article class="proj">
      ${p.image
        ? `<img class="proj-img" src="${esc(p.image)}" alt="${esc(p.title)} preview" width="720" height="405" loading="lazy" decoding="async">`
        : `<div class="proj-img proj-ph" aria-hidden="true">${esc(p.title)}</div>`}
      <div class="proj-body"><h3>${esc(p.title)}</h3><p>${esc(p.desc)}</p>
        <div class="chips">${p.tags.map((t) => `<span class="chip">${esc(t)}</span>`).join("")}</div>
        <div class="proj-links">
          ${p.github ? `<a href="${esc(p.github)}" target="_blank" rel="noopener">${ICONS.github}Code</a>` : ""}
          ${p.live ? `<a href="${esc(p.live)}" target="_blank" rel="noopener">${ICONS.ext}Live</a>` : ""}
          ${p.post ? `<a href="${esc(p.post)}" target="_blank" rel="noopener">${ICONS.linkedin}Post</a>` : ""}
        </div></div>
    </article>`;

  const track = $("#track"), prev = $("#prev"), next = $("#next"), showAll = $("#show-all");
  let expanded = false;
  const updateArrows = () => {
    prev.disabled = track.scrollLeft <= 4;
    next.disabled = track.scrollLeft + track.clientWidth >= track.scrollWidth - 4;
  };
  const renderProjects = () => {
    const list = expanded ? D.projects : D.projects.slice(0, D.projectsOnFront);
    track.innerHTML = list.map(projCard).join("");
    track.classList.toggle("all", expanded);
    showAll.textContent = expanded ? "Show less" : `Show all projects (${D.projects.length})`;
    showAll.hidden = D.projects.length <= D.projectsOnFront;
    prev.parentElement.style.visibility = expanded ? "hidden" : "";
    track.scrollLeft = 0;
    updateArrows();
  };
  const step = () => (track.firstElementChild?.offsetWidth || 300) + 20;
  prev.addEventListener("click", () => track.scrollBy({ left: -step() }));
  next.addEventListener("click", () => track.scrollBy({ left: step() }));
  let ticking = false; // at most one arrow update per frame while scrolling
  track.addEventListener("scroll", () => {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(() => { updateArrows(); ticking = false; });
  }, { passive: true });
  showAll.addEventListener("click", () => {
    expanded = !expanded;
    renderProjects();
    if (!expanded) $("#projects").scrollIntoView();
  });
  renderProjects();

  /* ---------- theme switch ---------- */
  const root = document.documentElement, themeBtn = $("#theme");
  const osDark = matchMedia("(prefers-color-scheme: dark)");
  const isDark = () => (root.dataset.theme || (osDark.matches ? "dark" : "light")) === "dark";
  let onThemeChange = () => {}; // set by the background animation
  const syncSwitch = () => { themeBtn.setAttribute("aria-checked", isDark()); onThemeChange(); };
  themeBtn.addEventListener("click", () => {
    const nt = isDark() ? "light" : "dark";
    root.dataset.theme = nt;
    try { localStorage.setItem("theme", nt); } catch (e) {}
    syncSwitch();
  });
  osDark.addEventListener("change", syncSwitch); // follow OS theme when user hasn't picked one
  syncSwitch();


  /* ---------- neural-network background ----------
     Starts when the browser is idle, caps node count, runs at ~30fps,
     pauses when the tab is hidden, draws one static frame for reduced-motion users. */
  const startBg = () => {
    const cv = $("#bg"), ctx = cv.getContext("2d", { alpha: true });
    const MAX = 150, MAX2 = MAX * MAX;
    let W = 0, H = 0, pts = [], raf, color, odd = false;
    const readColor = () => { color = getComputedStyle(root).getPropertyValue("--accent").trim() || "#e11d48"; };
    const resize = () => {
      const dpr = Math.min(devicePixelRatio || 1, 2), widthChanged = innerWidth !== W;
      W = innerWidth; H = innerHeight;
      cv.width = W * dpr; cv.height = H * dpr; ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      // only rebuild nodes when width changes (mobile URL bar only changes height)
      if (widthChanged || !pts.length) {
        const n = Math.min(60, Math.round((W * H) / 26000));
        pts = Array.from({ length: n }, () => ({ x: Math.random() * W, y: Math.random() * H, vx: (Math.random() - .5) * .5, vy: (Math.random() - .5) * .5, r: Math.random() * 2.2 + 1 }));
      }
    };
    const draw = () => {
      ctx.clearRect(0, 0, W, H);
      ctx.strokeStyle = ctx.fillStyle = color;
      for (let i = 0; i < pts.length; i++) {
        const p = pts[i];
        p.x += p.vx; p.y += p.vy;
        if (p.x < 0 || p.x > W) p.vx *= -1;
        if (p.y < 0 || p.y > H) p.vy *= -1;
        for (let j = i + 1; j < pts.length; j++) {
          const q = pts[j], dx = p.x - q.x, dy = p.y - q.y, d = dx * dx + dy * dy;
          if (d < MAX2) { ctx.globalAlpha = .18 * (1 - Math.sqrt(d) / MAX); ctx.beginPath(); ctx.moveTo(p.x, p.y); ctx.lineTo(q.x, q.y); ctx.stroke(); }
        }
        ctx.globalAlpha = .35; ctx.beginPath(); ctx.arc(p.x, p.y, p.r, 0, 6.283); ctx.fill();
      }
    };
    const loop = () => { if ((odd = !odd)) draw(); raf = requestAnimationFrame(loop); }; // every 2nd frame
    readColor();
    onThemeChange = () => { readColor(); if (reduceMotion) draw(); };
    resize();
    let rt; addEventListener("resize", () => { clearTimeout(rt); rt = setTimeout(() => { resize(); if (reduceMotion) draw(); }, 200); }, { passive: true });
    if (reduceMotion) return draw();
    document.addEventListener("visibilitychange", () => { cancelAnimationFrame(raf); if (!document.hidden) loop(); });
    loop();
  };
  ("requestIdleCallback" in window ? requestIdleCallback : setTimeout)(startBg);
})();
