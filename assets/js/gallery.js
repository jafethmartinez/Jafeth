/* =====================================================================
   Martinez East End Tours — photo gallery page

   Progressive enhancement, on purpose. Every photo on gallery.html is
   plain HTML: a thumbnail wrapped in a link to the full-size image. With
   JavaScript off the page still works — you see all of the photos and
   clicking one opens it. This file only adds the two things that need
   script: the category filter and the lightbox.

   Loaded only by gallery.html, so no other page pays for it.
   ===================================================================== */
(function () {
  "use strict";

  const $  = (s, r) => (r || document).querySelector(s);
  const $$ = (s, r) => Array.from((r || document).querySelectorAll(s));

  const groups = $$(".gal");
  if (!groups.length) return;

  const tools   = $("#galTools");
  const catsEl  = $("#galCats");
  const countEl = $("#galCount");
  const emptyEl = $("#galEmpty");

  /* Every thumbnail, in document order. The lightbox walks this list,
     skipping anything the current filter has hidden. */
  const shots = $$(".shots__i").map((a) => ({
    link: a,
    img:  $("img", a),
    src:  a.getAttribute("href"),
    alt:  $("img", a).getAttribute("alt") || "",
    group: a.closest(".gal")
  }));

  /* ---------------------------------------------------------------
     Category filter
     --------------------------------------------------------------- */
  const cats = ["All"].concat(
    groups.map((g) => g.getAttribute("data-cat"))
          .filter((c, i, all) => c && all.indexOf(c) === i)
  );
  let cat = "All";

  catsEl.innerHTML = cats.map((c) =>
    '<button type="button" class="chip" data-cat="' + c + '" aria-pressed="' +
    (c === "All") + '">' + c + "</button>").join("");

  function visibleShots() {
    return shots.filter((s) => !s.group.hidden && !s.link.hidden);
  }

  /* If a photo file ever goes missing, drop that tile quietly rather than
     leaving a broken image on the page. */
  shots.forEach((s) => {
    s.img.addEventListener("error", () => { s.link.hidden = true; draw(); });
  });

  function draw() {
    let tours = 0;
    groups.forEach((g) => {
      const show = cat === "All" || g.getAttribute("data-cat") === cat;
      g.hidden = !show;
      if (show) tours++;
    });

    const n = visibleShots().length;
    emptyEl.hidden = n > 0;
    countEl.innerHTML = "<b>" + n + "</b> photo" + (n === 1 ? "" : "s") +
      (cat === "All"
        ? " across " + tours + " tours"
        : " in " + cat + " (" + tours + " tour" + (tours === 1 ? "" : "s") + ")");
  }

  catsEl.addEventListener("click", (e) => {
    const b = e.target.closest("[data-cat]");
    if (!b) return;
    cat = b.getAttribute("data-cat");
    $$(".chip", catsEl).forEach((c) => c.setAttribute("aria-pressed", String(c === b)));
    draw();
  });

  tools.hidden = false;   // the controls only exist once the script runs
  draw();

  /* ---------------------------------------------------------------
     Lightbox
     Keyboard: Escape closes, left/right arrows move, Home/End jump,
     Tab is trapped inside the dialog, and focus returns to the
     thumbnail you opened it from.
     --------------------------------------------------------------- */
  const lb      = $("#lb");
  const lbImg   = $("#lbImg");
  const lbCap   = $("#lbCap");
  const lbCount = $("#lbCount");
  const lbClose = $("#lbClose");
  const lbPrev  = $("#lbPrev");
  const lbNext  = $("#lbNext");

  let list = [];        // the shots the lightbox can currently walk
  let at = 0;           // index within `list`
  let opener = null;    // thumbnail to hand focus back to

  function show(i) {
    if (!list.length) return;
    at = (i + list.length) % list.length;
    const s = list[at];
    lbImg.setAttribute("src", s.src);
    /* The full-size image repeats the thumbnail's description, so it is
       announced once: as the figure caption, not twice over. */
    lbImg.setAttribute("alt", "");
    lbCap.textContent = s.alt;
    lbCount.textContent = "Photo " + (at + 1) + " of " + list.length;
    const single = list.length < 2;
    lbPrev.hidden = single;
    lbNext.hidden = single;
  }

  /* Hide the page behind the dialog from screen readers while it is open,
     so a reader can't wander out of the viewer it thinks is modal. */
  const behind = ["header.hdr", "main", "footer.ftr", ".wafloat"]
    .map((s) => $(s)).filter(Boolean);
  function setBehindHidden(on) {
    behind.forEach((el) => {
      if (on) el.setAttribute("aria-hidden", "true");
      else el.removeAttribute("aria-hidden");
    });
  }

  function open(shot) {
    list = visibleShots();
    const i = list.indexOf(shot);
    if (i < 0) return;
    opener = shot.link;
    lb.hidden = false;
    document.body.classList.add("lb-open");
    setBehindHidden(true);
    show(i);
    lbClose.focus();
  }

  function close() {
    lb.hidden = true;
    document.body.classList.remove("lb-open");
    setBehindHidden(false);
    lbImg.setAttribute("src", "");
    if (opener) opener.focus();
    opener = null;
  }

  shots.forEach((s) => {
    s.link.addEventListener("click", (e) => {
      /* Let modifier-clicks and middle-clicks open the image normally. */
      if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || e.button !== 0) return;
      e.preventDefault();
      open(s);
    });
  });

  lbClose.addEventListener("click", close);
  lbPrev.addEventListener("click", () => show(at - 1));
  lbNext.addEventListener("click", () => show(at + 1));

  /* Clicking the backdrop — but not the photo or the buttons — closes. */
  lb.addEventListener("click", (e) => {
    if (e.target === lb || e.target.classList.contains("lb__stage") ||
        e.target.classList.contains("lb__bar")) close();
  });

  document.addEventListener("keydown", (e) => {
    if (lb.hidden) return;

    if (e.key === "Escape")     { e.preventDefault(); close(); return; }
    if (e.key === "ArrowLeft")  { e.preventDefault(); show(at - 1); return; }
    if (e.key === "ArrowRight") { e.preventDefault(); show(at + 1); return; }
    if (e.key === "Home")       { e.preventDefault(); show(0); return; }
    if (e.key === "End")        { e.preventDefault(); show(list.length - 1); return; }

    if (e.key === "Tab") {
      /* Focus trap: cycle through whichever of the three buttons are shown. */
      const stops = [lbClose, lbPrev, lbNext].filter((b) => !b.hidden);
      const i = stops.indexOf(document.activeElement);
      const next = e.shiftKey
        ? (i <= 0 ? stops.length - 1 : i - 1)
        : (i === -1 || i === stops.length - 1 ? 0 : i + 1);
      e.preventDefault();
      stops[next].focus();
    }
  });
})();
