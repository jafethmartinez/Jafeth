/* =====================================================================
   Roatán Island Tours — site logic
   Depends on data.js (SITE, TOURS, PICKUPS) being loaded first.
   ===================================================================== */
(function () {
  "use strict";

  /* ---------- small helpers ---------- */
  const $  = (s, r) => (r || document).querySelector(s);
  const $$ = (s, r) => Array.from((r || document).querySelectorAll(s));
  const esc = (s) => String(s == null ? "" : s)
    .replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;").replace(/'/g, "&#39;");

  const money = (n) => "$" + Number(n).toLocaleString("en-US");

  function dur(min) {
    const h = Math.floor(min / 60), m = min % 60;
    return m ? h + " h " + m + " m" : h + " hours";
  }

  const liveTours = () => TOURS.filter((t) => t.active !== false);
  const byId = (id) => TOURS.find((t) => t.id === id);

  function priceLabel(t) {
    return t.price > 0 ? money(t.price) : "Quote";
  }

  /* ---------- icons ---------- */
  const ICON = {
    clock: '<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3.2 2"/>',
    users: '<path d="M16 19v-1.6a3.4 3.4 0 0 0-3.4-3.4H6.4A3.4 3.4 0 0 0 3 17.4V19"/><circle cx="9.5" cy="7.5" r="3.2"/><path d="M21 19v-1.6a3.4 3.4 0 0 0-2.6-3.3"/><path d="M15.5 4.5a3.2 3.2 0 0 1 0 6"/>',
    ship: '<path d="M3 17.5c1.6 0 1.6 1.3 3.2 1.3s1.6-1.3 3.2-1.3 1.6 1.3 3.2 1.3 1.6-1.3 3.2-1.3 1.6 1.3 3.2 1.3"/><path d="M5 17V9.5l7-3 7 3V17"/><path d="M12 6.5V3"/>',
    shield: '<path d="M12 3l7.5 3v5.5c0 4.5-3.1 8.3-7.5 9.5-4.4-1.2-7.5-5-7.5-9.5V6z"/><path d="M9 12l2.2 2.2L15.5 10"/>',
    pin: '<path d="M12 21s7-5.6 7-11a7 7 0 1 0-14 0c0 5.4 7 11 7 11z"/><circle cx="12" cy="10" r="2.6"/>',
    heart: '<path d="M12 20s-7.2-4.6-7.2-9.5A4.3 4.3 0 0 1 12 7.7a4.3 4.3 0 0 1 7.2 2.8C19.2 15.4 12 20 12 20z"/>',
    chat: '<path d="M21 12a8 8 0 0 1-11.6 7.1L4 20.5l1.4-5.2A8 8 0 1 1 21 12z"/>',
    mail: '<rect x="3" y="5" width="18" height="14" rx="2.4"/><path d="M3.4 6.5 12 12.8l8.6-6.3"/>',
    star: '<path d="M12 3.6l2.6 5.3 5.8.9-4.2 4.1 1 5.8-5.2-2.8-5.2 2.8 1-5.8L3.6 9.8l5.8-.9z"/>',
    calendar: '<rect x="3.5" y="5" width="17" height="15.5" rx="2.4"/><path d="M3.5 10h17M8.5 3v4M15.5 3v4"/>',
    check: '<circle cx="12" cy="12" r="9"/><path d="M8.2 12.3l2.6 2.6 5-5.4"/>'
  };
  function svgIcon(name, size, stroke) {
    return '<svg width="' + (size || 18) + '" height="' + (size || 18) + '" viewBox="0 0 24 24" fill="none" ' +
      'stroke="' + (stroke || "currentColor") + '" stroke-width="1.7" stroke-linecap="round" ' +
      'stroke-linejoin="round" aria-hidden="true">' + ICON[name] + "</svg>";
  }

  /* ---------- built-in illustrations ---------- */
  /* Used when a tour has no photo, so the site never shows a broken image. */
  const SKY = {
    reef:      ["#0a4f63", "#0d7d90"],
    beach:     ["#5ec8dd", "#a9ece5"],
    jungle:    ["#7fd3c0", "#cdeccd"],
    adventure: ["#4fb9c9", "#9fe3d8"],
    wildlife:  ["#8ed6c4", "#dcefc4"],
    boat:      ["#63c6e0", "#b6ebe4"],
    culture:   ["#ffc36b", "#ffe3a8"]
  };
  const MOTIF = {
    /* fish + coral */
    reef: '<g opacity=".92"><path d="M120 250c22-16 46-16 62 0-16 16-40 16-62 0z" fill="#ffb703"/><circle cx="168" cy="248" r="3.4" fill="#06232e"/><path d="M182 250l16-11v22z" fill="#f2603c"/><path d="M250 268c9-7 20-7 27 0-7 7-18 7-27 0z" fill="#fff" opacity=".85"/><path d="M60 300c8-30 4-52-2-64 16 6 28 22 30 46 10-16 24-24 38-24-6 16-6 32 2 42z" fill="#f2603c" opacity=".9"/><path d="M330 300c-6-24-3-42 2-52-13 5-23 18-24 37-8-13-19-19-31-19 5 13 5 26-2 34z" fill="#ff8f6b" opacity=".85"/></g>',
    /* palm + sand */
    beach: '<g><path d="M300 300V196" stroke="#7a4a24" stroke-width="9" stroke-linecap="round"/><path d="M300 198c-26-24-56-26-74-14 20-4 44 4 60 20z" fill="#1f8a5c"/><path d="M300 198c26-24 56-26 74-14-20-4-44 4-60 20z" fill="#2aa06c"/><path d="M300 196c-8-30-30-46-52-48 18 12 34 32 40 54z" fill="#26996a"/><path d="M300 196c10-30 32-44 54-46-18 12-36 30-42 52z" fill="#1f8a5c"/><circle cx="292" cy="200" r="6" fill="#8a5a2a"/><circle cx="308" cy="203" r="6" fill="#8a5a2a"/></g>',
    /* jungle canopy */
    jungle: '<g opacity=".95"><path d="M40 300c0-40 26-72 60-72s60 32 60 72z" fill="#1f7a52"/><path d="M120 300c0-52 32-92 76-92s76 40 76 92z" fill="#25915f"/><path d="M240 300c0-36 24-64 54-64s54 28 54 64z" fill="#1f7a52"/><path d="M196 300V214" stroke="#5c3a1e" stroke-width="7"/><path d="M100 300v-58" stroke="#5c3a1e" stroke-width="6"/></g>',
    /* zipline */
    adventure: '<g><path d="M30 120L370 210" stroke="#06232e" stroke-width="4" stroke-linecap="round"/><path d="M186 165v26" stroke="#06232e" stroke-width="4"/><circle cx="186" cy="163" r="9" fill="#ffb703" stroke="#06232e" stroke-width="3"/><path d="M186 191c-11 4-15 16-11 26 4 9 16 12 24 6" stroke="#f2603c" stroke-width="9" fill="none" stroke-linecap="round"/><circle cx="186" cy="200" r="11" fill="#f2603c"/><path d="M40 300c0-34 22-60 50-60s50 26 50 60z" fill="#1f7a52" opacity=".9"/><path d="M260 300c0-30 20-54 46-54s46 24 46 54z" fill="#25915f" opacity=".9"/></g>',
    /* monkey silhouette on a branch */
    wildlife: '<g><path d="M40 172h250" stroke="#5c3a1e" stroke-width="10" stroke-linecap="round"/><g transform="translate(178 176)"><path d="M0 0c-16 0-28 13-28 30 0 20 12 34 28 34s28-14 28-34C28 13 16 0 0 0z" fill="#6b4227"/><circle cx="0" cy="26" r="17" fill="#c99a6b"/><circle cx="-6" cy="22" r="2.6" fill="#26160c"/><circle cx="6" cy="22" r="2.6" fill="#26160c"/><path d="M-4 33q4 4 8 0" stroke="#26160c" stroke-width="2" fill="none" stroke-linecap="round"/><circle cx="-24" cy="6" r="9" fill="#6b4227"/><circle cx="24" cy="6" r="9" fill="#6b4227"/><path d="M14 56c22 6 34 22 30 40" stroke="#6b4227" stroke-width="7" fill="none" stroke-linecap="round"/></g><path d="M60 300c0-32 20-56 46-56s46 24 46 56z" fill="#25915f" opacity=".55"/></g>',
    /* boat */
    boat: '<g><path d="M108 262h188l-24 34H132z" fill="#f7f3e8"/><path d="M108 262h188l-6 9H114z" fill="#d9d2c0"/><path d="M198 250V150" stroke="#8a5a2a" stroke-width="7" stroke-linecap="round"/><path d="M204 158l64 84h-64z" fill="#f2603c"/><path d="M192 168l-52 74h52z" fill="#fff" opacity=".93"/></g>',
    /* drum + palms (culture) */
    culture: '<g><path d="M158 200h84v76a42 12 0 0 1-84 0z" fill="#8a5a2a"/><ellipse cx="200" cy="200" rx="42" ry="13" fill="#f0dcbc"/><path d="M158 214l84 22M242 214l-84 22" stroke="#5c3a1e" stroke-width="3.5"/><path d="M78 300V212" stroke="#7a4a24" stroke-width="8" stroke-linecap="round"/><path d="M78 214c-20-18-44-20-58-11 16-3 34 3 46 15z" fill="#1f8a5c"/><path d="M78 214c20-18 44-20 58-11-16-3-34 3-46 15z" fill="#2aa06c"/><path d="M330 300V222" stroke="#7a4a24" stroke-width="8" stroke-linecap="round"/><path d="M330 224c-18-16-40-18-52-10 14-3 30 3 41 14z" fill="#1f8a5c"/><path d="M330 224c18-16 40-18 52-10-14-3-30 3-41 14z" fill="#2aa06c"/></g>'
  };

  function art(kind) {
    const k = SKY[kind] ? kind : "beach";
    const [a, b] = SKY[k];
    const uid = "g" + Math.random().toString(36).slice(2, 8);
    return (
      '<svg viewBox="0 0 400 300" preserveAspectRatio="xMidYMid slice" role="img" aria-hidden="true">' +
      '<defs><linearGradient id="' + uid + '" x1="0" y1="0" x2="0" y2="1">' +
      '<stop offset="0" stop-color="' + a + '"/><stop offset="1" stop-color="' + b + '"/></linearGradient></defs>' +
      '<rect width="400" height="300" fill="url(#' + uid + ')"/>' +
      '<circle cx="326" cy="60" r="30" fill="#ffd166" opacity=".85"/>' +
      '<path d="M0 232q50-16 100 0t100 0 100 0 100 0v68H0z" fill="#0d7d90" opacity=".55"/>' +
      '<path d="M0 252q50-14 100 0t100 0 100 0 100 0v48H0z" fill="#0a4f63" opacity=".5"/>' +
      (MOTIF[k] || "") +
      "</svg>"
    );
  }

  function media(t) {
    const first = t.photo || (t.gallery && t.gallery.length ? t.gallery[0] : "");
    if (first) {
      // `focus` frames a tall photo inside the wide hero/card box. Without it
      // the browser centres the crop, which can slice the subject in half.
      const pos = t.focus ? ' style="object-position:' + esc(t.focus) + '"' : "";
      return '<img class="tour-img" data-art="' + esc(t.art) + '" src="assets/img/' + esc(first) +
             '" alt="' + esc(t.name) + '"' + pos + ' loading="lazy" width="400" height="250">';
    }
    return art(t.art);
  }

  /* Photo gallery + video for a tour detail page */
  function galleryBlock(t) {
    let out = "";
    const shots = (t.gallery || []).filter((g) => g !== t.photo);
    if (shots.length) {
      out += '<div class="shots">' + shots.map((g) =>
        '<a class="shots__i" href="assets/img/' + esc(g) + '" target="_blank" rel="noopener">' +
        '<img class="shot-img" src="assets/img/' + esc(g) + '" alt="' + esc(t.name) +
        '" loading="lazy"></a>').join("") +
        "</div>";
    }
    // videos: either a single `video` string, or a `videos` array of
    // { file, caption, poster }. preload="metadata" means nothing is
    // downloaded until a visitor actually presses play.
    const clips = (t.videos && t.videos.length)
      ? t.videos
      : (t.video ? [{ file: t.video, caption: t.videoCaption, poster: t.photo }] : []);

    if (clips.length) {
      out += '<div class="vids">' + clips.map((v) =>
        '<figure class="vid">' +
          '<video controls preload="metadata" playsinline' +
          (v.poster ? ' poster="assets/img/' + esc(v.poster) + '"' : "") + '>' +
          '<source src="assets/video/' + esc(v.file) + '" type="video/mp4">' +
          "Your browser can't play this video." +
          "</video>" +
          (v.caption ? "<figcaption>" + esc(v.caption) + "</figcaption>" : "") +
        "</figure>").join("") + "</div>";
    }
    return out;
  }

  /* =====================================================================
     PORT TIME PLANNER
     Cruise guests care about one thing above all: making it back to the
     ship. We store their times so every page can answer that question.
     ===================================================================== */
  const BUFFER = 60; // minutes reserved for disembarking + a safety margin
  const KEY = "rit-plan";

  function loadPlan() {
    try {
      const raw = localStorage.getItem(KEY);
      return raw ? JSON.parse(raw) : null;
    } catch (e) { return null; }
  }
  function savePlan(p) {
    try { localStorage.setItem(KEY, JSON.stringify(p)); } catch (e) { /* private mode */ }
  }
  function clearPlan() {
    try { localStorage.removeItem(KEY); } catch (e) {}
  }

  const toMin = (hhmm) => {
    const m = /^(\d{1,2}):(\d{2})$/.exec(hhmm || "");
    return m ? (+m[1]) * 60 + (+m[2]) : null;
  };

  /* Minutes of actual touring time available, or null if we can't tell. */
  function windowFor(plan) {
    if (!plan) return null;
    const a = toMin(plan.arrive), b = toMin(plan.aboard);
    if (a == null || b == null) return null;
    const raw = b - a;
    if (raw <= 0) return 0;
    return Math.max(0, raw - BUFFER);
  }

  /* "fits" | "tight" | "no" | null (no plan set) */
  function fitOf(tour, avail) {
    if (avail == null) return null;
    if (tour.minutes <= avail) return "fits";
    if (tour.minutes <= avail + 30) return "tight";
    return "no";
  }

  /* ---------- tour card ---------- */
  function card(t, avail) {
    const fit = fitOf(t, avail);
    let badge = "";
    if (fit === "fits")  badge = '<span class="badge badge--fit">Fits your port time</span>';
    if (fit === "tight") badge = '<span class="badge badge--tight">Cutting it close</span>';
    if (fit === "no")    badge = '<span class="badge badge--no">Too long for your day</span>';

    const priceBlock = t.price > 0
      ? '<div class="price">' + money(t.price) + "<small>per adult</small></div>"
      : '<div class="price">Quote<small>per group</small></div>';

    return (
      '<article class="card' + (fit === "no" ? " is-dim" : "") + '">' +
        '<div class="card__media">' + media(t) +
          '<div class="card__badges"><span class="badge">' + esc(t.category) + "</span>" + badge + "</div>" +
        "</div>" +
        '<div class="card__body">' +
          '<h3><a href="tour.html?id=' + esc(t.id) + '">' + esc(t.name) + "</a></h3>" +
          '<p class="card__tag">' + esc(t.tagline) + "</p>" +
          '<div class="card__meta">' +
            "<span>" + svgIcon("clock", 15) + dur(t.minutes) + "</span>" +
            "<span>" + svgIcon("users", 15) + esc(t.group) + "</span>" +
          "</div>" +
          '<div class="card__foot">' + priceBlock +
            '<a class="btn btn--primary btn--sm" href="tour.html?id=' + esc(t.id) + '">View details</a>' +
          "</div>" +
        "</div>" +
      "</article>"
    );
  }

  /* If a photo file is missing, quietly fall back to the built-in
     illustration rather than showing a broken image. */
  function wireImageFallbacks(root) {
    $$("img.tour-img", root || document).forEach((img) => {
      if (img.dataset.fbWired) return;
      img.dataset.fbWired = "1";
      img.addEventListener("error", () => {
        const holder = img.parentElement;
        if (holder) holder.innerHTML = art(img.getAttribute("data-art") || "beach");
      });
    });
    $$("img.shot-img", root || document).forEach((img) => {
      if (img.dataset.fbWired) return;
      img.dataset.fbWired = "1";
      img.addEventListener("error", () => {
        const a = img.closest(".shots__i");
        if (a) a.remove();
      });
    });
  }

  /* =====================================================================
     PAGE: shared header/footer hydration
     ===================================================================== */
  function waLink(text) {
    const msg = text || ("Hi " + SITE.name + "! I'd like to ask about a tour in Roatán.");
    return "https://wa.me/" + SITE.whatsapp + "?text=" + encodeURIComponent(msg);
  }

  function hydrateSite() {
    $$("[data-site]").forEach((el) => {
      const v = SITE[el.getAttribute("data-site")];
      if (v) el.textContent = v;
    });
    $$("[data-wa]").forEach((el) => { el.href = waLink(el.getAttribute("data-wa") || ""); });
    $$("[data-mailto]").forEach((el) => {
      el.href = "mailto:" + SITE.email;
      if (!el.textContent.trim()) el.textContent = SITE.email;
    });
    $$("[data-tel]").forEach((el) => {
      el.href = "tel:" + SITE.phone.replace(/[^\d+]/g, "");
      if (!el.textContent.trim()) el.textContent = SITE.phone;
    });
    const yr = $("#year"); if (yr) yr.textContent = new Date().getFullYear();

    // Hide social links that haven't been configured yet
    $$("[data-social]").forEach((el) => {
      const url = SITE[el.getAttribute("data-social")];
      if (url) el.href = url; else el.remove();
    });

    // Mobile nav
    const tog = $(".navtoggle"), nav = $(".nav");
    if (tog && nav) {
      tog.addEventListener("click", () => {
        const open = nav.getAttribute("data-open") === "true";
        nav.setAttribute("data-open", String(!open));
        tog.setAttribute("aria-expanded", String(!open));
      });
    }
  }

  /* =====================================================================
     PAGE: planner widget (appears on home + tours)
     ===================================================================== */
  function initPlanner(onChange) {
    const form = $("#planner");
    if (!form) return;

    const out = $("#plannerOut");
    const saved = loadPlan();
    if (saved) {
      if (saved.pickup) form.pickup.value = saved.pickup;
      if (saved.arrive) form.arrive.value = saved.arrive;
      if (saved.aboard) form.aboard.value = saved.aboard;
    }

    function apply(persist) {
      const plan = {
        pickup: form.pickup.value,
        arrive: form.arrive.value,
        aboard: form.aboard.value
      };
      const avail = windowFor(plan);

      if (avail == null) {
        out.setAttribute("data-show", "false");
      } else if (avail <= 0) {
        out.className = "planner__out is-warn";
        out.setAttribute("data-show", "true");
        out.innerHTML = "Those times don't leave any room for a tour — double-check your " +
          "arrival and all-aboard times. All-aboard should be later in the day than arrival.";
      } else {
        const n = liveTours().filter((t) => fitOf(t, avail) === "fits").length;
        out.className = "planner__out";
        out.setAttribute("data-show", "true");
        out.innerHTML = "You have roughly <strong>" + dur(avail) + " of tour time</strong> " +
          "(we've already set aside an hour for getting off the ship and getting back). " +
          "<strong>" + n + " of our " + liveTours().length + " tours</strong> fit comfortably in that window.";
      }
      if (persist) savePlan(plan);
      if (onChange) onChange(avail);
    }

    form.addEventListener("input", () => apply(true));
    form.addEventListener("submit", (e) => { e.preventDefault(); apply(true); });
    const reset = $("#plannerReset");
    if (reset) reset.addEventListener("click", () => {
      form.reset(); clearPlan();
      out.setAttribute("data-show", "false");
      if (onChange) onChange(null);
    });

    apply(false);
  }

  /* =====================================================================
     PAGE: home
     ===================================================================== */
  function initHome() {
    const grid = $("#featured");
    if (!grid) return;
    const picks = ["little-french-key", "nurse-sharks", "animal-encounters"];

    function draw(avail) {
      grid.innerHTML = picks.map(byId).filter(Boolean).map((t) => card(t, avail)).join("");
      wireImageFallbacks(grid);
    }
    initPlanner(draw);
    draw(windowFor(loadPlan()));
  }

  /* =====================================================================
     Travel tips + team (rendered wherever their container exists)
     ===================================================================== */
  function initTips() {
    const el = $("#tips");
    if (!el || typeof TIPS === "undefined") return;
    el.innerHTML = TIPS.map((t, i) =>
      '<div class="tip"><span class="tip__n">' + String(i + 1).padStart(2, "0") + "</span>" +
      "<h3>" + esc(t.title) + "</h3><p>" + esc(t.body) + "</p></div>").join("");
  }

  function initTeam() {
    const el = $("#team");
    if (!el || typeof TEAM === "undefined") return;
    el.innerHTML = TEAM.map((m) => {
      const digits = m.phone.replace(/[^\d]/g, "");
      return '<div class="member">' +
        (m.photo
          ? '<img class="member__photo" src="assets/img/' + esc(m.photo) + '" alt="' + esc(m.name) + '" loading="lazy">'
          : '<div class="member__photo member__photo--none">' + esc(m.name.split(" ").map((w) => w[0]).join("").slice(0, 2)) + "</div>") +
        "<h3>" + esc(m.name) + "</h3>" +
        '<p class="member__role">' + esc(m.role) + "</p>" +
        '<p class="member__contact"><a href="tel:' + digits + '">' + esc(m.phone) + "</a>" +
        (m.note ? '<span class="member__note">' + esc(m.note) + "</span>" : "") +
        (m.email ? '<a href="mailto:' + esc(m.email) + '">' + esc(m.email) + "</a>" : "") +
        "</p></div>";
    }).join("");
  }

  /* =====================================================================
     PAGE: tours listing
     ===================================================================== */
  function initTours() {
    const grid = $("#tourGrid");
    if (!grid) return;

    const countEl = $("#count");
    const sortEl  = $("#sort");
    const fitEl   = $("#fitOnly");
    let cat = "All";

    const cats = ["All"].concat([...new Set(liveTours().map((t) => t.category))]);
    $("#cats").innerHTML = cats.map((c) =>
      '<button type="button" class="chip" data-cat="' + esc(c) + '" aria-pressed="' +
      (c === "All") + '">' + esc(c) + "</button>").join("");

    function draw() {
      const avail = windowFor(loadPlan());
      let list = liveTours();

      if (cat !== "All") list = list.filter((t) => t.category === cat);
      if (fitEl.checked && avail != null) list = list.filter((t) => fitOf(t, avail) !== "no");

      const s = sortEl.value;
      list = list.slice().sort((a, b) => {
        if (s === "price-asc")  return (a.price || 1e9) - (b.price || 1e9);
        if (s === "price-desc") return (b.price || 0) - (a.price || 0);
        if (s === "short")      return a.minutes - b.minutes;
        if (s === "long")       return b.minutes - a.minutes;
        // default: tours that fit the guest's day float to the top
        const rank = { fits: 0, tight: 1, no: 2, null: 0 };
        return (rank[fitOf(a, avail)] ?? 0) - (rank[fitOf(b, avail)] ?? 0);
      });

      countEl.innerHTML = "<b>" + list.length + "</b> tour" + (list.length === 1 ? "" : "s") +
        (cat === "All" ? "" : " in " + esc(cat));

      grid.innerHTML = list.length
        ? list.map((t) => card(t, avail)).join("")
        : '<div class="empty"><h3>No tours match those filters</h3>' +
          "<p>Try clearing the filters, or message us and we'll build something that fits your day.</p>" +
          '<a class="btn btn--wa" data-wa="" href="#">Message us on WhatsApp</a></div>';

      $$("[data-wa]", grid).forEach((el) => { el.href = waLink(); });
      wireImageFallbacks(grid);
    }

    $("#cats").addEventListener("click", (e) => {
      const b = e.target.closest("[data-cat]");
      if (!b) return;
      cat = b.getAttribute("data-cat");
      $$("#cats .chip").forEach((c) => c.setAttribute("aria-pressed", String(c === b)));
      draw();
    });
    sortEl.addEventListener("change", draw);
    fitEl.addEventListener("change", draw);

    initPlanner(draw);
    draw();
  }

  /* =====================================================================
     PAGE: single tour
     ===================================================================== */
  function initTour() {
    const root = $("#tourDetail");
    if (!root) return;

    const id = new URLSearchParams(location.search).get("id");
    const t = byId(id);

    if (!t || t.active === false) {
      root.innerHTML = '<div class="empty"><h3>We couldn\'t find that tour</h3>' +
        "<p>It may have been renamed or is no longer running.</p>" +
        '<a class="btn btn--primary" href="tours.html">See all tours</a></div>';
      return;
    }

    document.title = t.name + " — " + SITE.name;
    const meta = $('meta[name="description"]');
    if (meta) meta.setAttribute("content", t.blurb.slice(0, 155));

    const avail = windowFor(loadPlan());
    const fit = fitOf(t, avail);

    let fitNote = "";
    if (fit === "fits") {
      fitNote = '<div class="note" style="background:#e4f7f3;border-color:#16b9ae;color:#04443c">' +
        "<strong>This fits your port day.</strong> Based on the times you entered, you'd be back " +
        "with " + dur(avail - t.minutes) + " to spare on top of the hour we already reserve.</div>";
    } else if (fit === "tight") {
      fitNote = '<div class="note"><strong>This one is tight for your port day.</strong> ' +
        "It's still doable, but message us first so we can start you early.</div>";
    } else if (fit === "no") {
      fitNote = '<div class="note"><strong>Heads up — this is longer than your port day allows.</strong> ' +
        "Have a look at our shorter tours, or ask us about a private version we can compress.</div>";
    }

    const list = (arr, cls) => "<ul class=\"ticks" + (cls || "") + "\">" +
      arr.map((x) => "<li>" + esc(x) + "</li>").join("") + "</ul>";

    const priceRow = t.price > 0
      ? '<div class="price">' + money(t.price) + "<small>per adult</small></div>"
      : '<div class="price">Custom<small>quoted per group</small></div>';

    root.innerHTML =
      '<div class="detail">' +
        "<div>" +
          '<div class="detail__media">' + media(t) + "</div>" +
          galleryBlock(t) +
          fitNote +
          '<div class="speclist">' +
            '<div><div class="spec__k">Duration</div><div class="spec__v">' + dur(t.minutes) + "</div></div>" +
            '<div><div class="spec__k">Group size</div><div class="spec__v">' + esc(t.group) + "</div></div>" +
            '<div><div class="spec__k">Category</div><div class="spec__v">' + esc(t.category) + "</div></div>" +
            '<div><div class="spec__k">Adult price</div><div class="spec__v">' + priceLabel(t) + "</div></div>" +
          "</div>" +
          "<p class=\"lede\">" + esc(t.blurb) + "</p>" +
          (t.extra ? "<p>" + esc(t.extra) + "</p>" : "") +
          (t.note ? '<div class="note"><strong>Good to know:</strong> ' + esc(t.note) + "</div>" : "") +
          "<h2>What you'll do</h2>" + list(t.highlights) +
          "<h2>Your day, step by step</h2>" +
          '<ul class="timeline">' + t.itinerary.map((s) => "<li>" + esc(s) + "</li>").join("") + "</ul>" +
          "<h2>What's included</h2>" +
          '<div class="twocol"><div>' + list(t.includes) + "</div>" +
          "<div><p class=\"label\" style=\"margin-bottom:.7em\">Not included</p>" +
          list(t.excludes, " ticks--x") + "</div></div>" +
          "<h2>What to bring</h2>" + list(t.bring) +
          "<h2>Who this suits</h2>" + list(t.good) +
          (t.verdict ? '<div class="verdict"><h3>The verdict</h3><p>' + esc(t.verdict) + "</p></div>" : "") +
        "</div>" +
        "<aside>" +
          '<div class="bookbox">' + priceRow +
            (t.priceNote ? '<p class="hint" style="margin:.6em 0 0">' + esc(t.priceNote) + "</p>" : "") +
            '<dl style="margin:18px 0">' +
              '<div class="bookbox__row"><dt>Duration</dt><dd>' + dur(t.minutes) + "</dd></div>" +
              '<div class="bookbox__row"><dt>Group</dt><dd>' + esc(t.group) + "</dd></div>" +
              (t.kids ? '<div class="bookbox__row"><dt>Children (under 12)</dt><dd>' + money(t.kids) + "</dd></div>" : "") +
              '<div class="bookbox__row"><dt>Pickup</dt><dd>Ship, hotel or airport</dd></div>' +
            "</dl>" +
            '<a class="btn btn--primary btn--block btn--lg" href="book.html?tour=' + esc(t.id) + '">Request this tour</a>' +
            '<a class="btn btn--wa btn--block" style="margin-top:10px" id="tourWa" href="#">Ask a question on WhatsApp</a>' +
            '<p class="hint" style="margin:14px 0 0;text-align:center">No payment now — we confirm by message first.</p>' +
          "</div>" +
        "</aside>" +
      "</div>";

    wireImageFallbacks(root);

    $("#tourWa").href = waLink("Hi " + SITE.name + "! I have a question about the \"" + t.name + "\" tour.");
  }

  /* =====================================================================
     PAGE: booking request
     ===================================================================== */
  function initBook() {
    const form = $("#bookForm");
    if (!form) return;

    /* Populate the tour dropdown from the same data as everything else */
    const sel = form.tour;
    sel.innerHTML = '<option value="">Choose a tour…</option>' +
      liveTours().map((t) =>
        '<option value="' + esc(t.id) + '">' + esc(t.name) +
        (t.price > 0 ? " — " + money(t.price) + " pp" : " — quoted") + "</option>").join("");

    const pk = form.pickup;
    pk.innerHTML = '<option value="">Where should we meet you?</option>' +
      PICKUPS.map((p) => '<option value="' + esc(p.id) + '">' + esc(p.label) + "</option>").join("");

    /* Prefill from the tour page link and from a saved port plan */
    const qs = new URLSearchParams(location.search);
    if (qs.get("tour") && byId(qs.get("tour"))) sel.value = qs.get("tour");

    const plan = loadPlan();
    if (plan) {
      if (plan.pickup) pk.value = plan.pickup;
      if (plan.aboard) form.aboard.value = plan.aboard;
      if (plan.pickup === "mahogany" || plan.pickup === "coxen") form.arrivalBy.value = "cruise";
    }

    /* Show only the fields that apply to how they're arriving */
    function toggleConditional() {
      const mode = form.arrivalBy.value;
      $("#cruiseFields").classList.toggle("hide", mode !== "cruise");
      $("#hotelFields").classList.toggle("hide", mode === "cruise");
      form.ship.required = mode === "cruise";
      form.aboard.required = mode === "cruise";
    }
    form.arrivalBy.addEventListener("change", () => { toggleConditional(); recalc(); });
    toggleConditional();

    /* Live price estimate */
    function recalc() {
      const t = byId(sel.value);
      const adults = Math.max(0, parseInt(form.adults.value, 10) || 0);
      const kids = Math.max(0, parseInt(form.kids.value, 10) || 0);

      $("#sumTour").textContent  = t ? t.name : "—";
      $("#sumDate").textContent  = form.date.value || "—";
      $("#sumGuests").textContent = adults + kids > 0
        ? adults + " adult" + (adults === 1 ? "" : "s") + (kids ? ", " + kids + " child" + (kids === 1 ? "" : "ren") : "")
        : "—";
      $("#sumDur").textContent = t ? dur(t.minutes) : "—";

      const totalEl = $("#sumTotal"), noteEl = $("#sumNote");
      if (!t) {
        totalEl.textContent = "—";
        noteEl.textContent = "Pick a tour to see an estimate.";
      } else if (t.price === 0) {
        totalEl.textContent = "Quote";
        noteEl.textContent = "Private tours are priced per group — send the request and we'll reply with a price.";
      } else {
        const total = adults * t.price + kids * (t.kids != null ? t.kids : t.price);
        totalEl.textContent = money(total);
        noteEl.textContent = "Estimate only. Nothing is charged now — we confirm availability and the final price by message.";
      }

      /* Warn if their ship time can't accommodate the tour they picked */
      const warn = $("#fitWarn");
      const avail = windowFor({ arrive: form.arrive.value, aboard: form.aboard.value });
      if (t && avail != null && avail > 0 && form.arrivalBy.value === "cruise") {
        const f = fitOf(t, avail);
        warn.classList.toggle("hide", f === "fits");
        if (f === "tight") warn.innerHTML = "<strong>Tight fit.</strong> " + esc(t.name) + " runs " + dur(t.minutes) +
          " and you have about " + dur(avail) + ". We can usually make it work with an early start — we'll confirm when we reply.";
        if (f === "no") warn.innerHTML = "<strong>This tour is longer than your port day.</strong> " + esc(t.name) +
          " runs " + dur(t.minutes) + " but you only have about " + dur(avail) + " ashore. " +
          "Send the request anyway and we'll suggest a shorter option, or pick one from the tours page.";
      } else {
        warn.classList.add("hide");
      }
    }
    form.addEventListener("input", recalc);
    sel.addEventListener("change", recalc);

    /* Validation + message assembly */
    function fail(name, msg) {
      const f = form.querySelector('[name="' + name + '"]');
      if (!f) return;
      const wrap = f.closest(".field");
      if (!wrap) return;
      wrap.classList.add("field--err");
      const e = wrap.querySelector(".err");
      if (e) e.textContent = msg;
    }

    form.addEventListener("submit", (e) => {
      e.preventDefault();
      $$(".field--err", form).forEach((w) => w.classList.remove("field--err"));

      const t = byId(sel.value);
      let ok = true;
      if (!t) { fail("tour", "Please choose a tour."); ok = false; }
      if (!form.date.value) { fail("date", "Please pick a date."); ok = false; }
      if (!form.name.value.trim()) { fail("name", "Please tell us your name."); ok = false; }
      if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(form.email.value.trim())) {
        fail("email", "Please enter a valid email address."); ok = false;
      }
      if ((parseInt(form.adults.value, 10) || 0) < 1) { fail("adults", "At least one adult is required."); ok = false; }
      if (form.arrivalBy.value === "cruise" && !form.ship.value.trim()) {
        fail("ship", "Which ship are you sailing on?"); ok = false;
      }
      if (!ok) {
        const first = $(".field--err", form);
        if (first) { first.scrollIntoView({ block: "center", behavior: "smooth" }); const i = $("input,select,textarea", first); if (i) i.focus(); }
        return;
      }

      const adults = parseInt(form.adults.value, 10) || 0;
      const kids = parseInt(form.kids.value, 10) || 0;
      const pickup = PICKUPS.find((p) => p.id === form.pickup.value);
      const est = t.price === 0 ? "To be quoted"
        : money(adults * t.price + kids * (t.kids != null ? t.kids : t.price));

      const L = [];
      L.push("BOOKING REQUEST — " + SITE.name);
      L.push("");
      L.push("Tour: " + t.name);
      L.push("Date: " + form.date.value);
      L.push("Guests: " + adults + " adult(s)" + (kids ? ", " + kids + " child(ren)" : ""));
      L.push("Estimated total: " + est);
      L.push("");
      L.push("Name: " + form.name.value.trim());
      L.push("Email: " + form.email.value.trim());
      if (form.phone.value.trim()) L.push("Phone/WhatsApp: " + form.phone.value.trim());
      L.push("");
      if (form.arrivalBy.value === "cruise") {
        L.push("Arriving by: Cruise ship");
        L.push("Ship: " + form.ship.value.trim());
        if (form.arrive.value) L.push("Ship docks: " + form.arrive.value);
        if (form.aboard.value) L.push("All aboard: " + form.aboard.value);
      } else if (form.arrivalBy.value === "flight") {
        L.push("Arriving by: Flight");
        if (form.hotel.value.trim()) L.push("Hotel: " + form.hotel.value.trim());
      } else {
        L.push("Already on the island");
        if (form.hotel.value.trim()) L.push("Hotel: " + form.hotel.value.trim());
      }
      if (pickup) L.push("Pickup: " + pickup.label);
      if (form.notes.value.trim()) { L.push(""); L.push("Notes: " + form.notes.value.trim()); }

      const msg = L.join("\n");

      $("#sentMsg").textContent = msg;
      $("#waSend").href = "https://wa.me/" + SITE.whatsapp + "?text=" + encodeURIComponent(msg);
      $("#mailSend").href = "mailto:" + SITE.email +
        "?subject=" + encodeURIComponent("Booking request: " + t.name + " on " + form.date.value) +
        "&body=" + encodeURIComponent(msg);

      $("#formStage").classList.add("hide");
      $("#sentStage").classList.remove("hide");
      window.scrollTo({ top: $("#sentStage").offsetTop - 100, behavior: "smooth" });

      const copy = $("#copyBtn");
      copy.onclick = () => {
        navigator.clipboard.writeText(msg).then(
          () => { copy.textContent = "Copied!"; setTimeout(() => (copy.textContent = "Copy request"), 1800); },
          () => { copy.textContent = "Press Ctrl+C to copy"; }
        );
      };
    });

    /* No dates in the past */
    const today = new Date().toISOString().slice(0, 10);
    form.date.min = today;

    recalc();
  }

  /* ---------- boot ---------- */
  document.addEventListener("DOMContentLoaded", function () {
    hydrateSite();
    initTips();
    initTeam();
    initHome();
    initTours();
    initTour();
    initBook();
  });
})();
