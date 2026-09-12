# Martinez East End Tours — tour booking website

A fast, static website for a locally owned tour company on Roatán, Honduras,
built around one idea: **cruise passengers are on a clock.** Every page is
designed to answer "will I make it back to my ship?" before it tries to sell
anything.

No build step, no dependencies, no server. Just open `index.html`.

---

## Pages

| File | What it is |
|---|---|
| `index.html`   | Home — hero, Port Time Planner, three featured tours, how it works |
| `tours.html`   | All 12 tours, filterable by category and by whether they fit your port day |
| `tour.html`    | Single tour detail. Driven by the URL: `tour.html?id=west-bay-beach` |
| `gallery.html` | Every real photo on the site, grouped by tour, filterable by category, with a lightbox |
| `book.html`    | Booking request form → sends via WhatsApp or email |
| `about.html`   | Your story and the team (Jafeth, Oscar, Mireska) |
| `contact.html` | Contact details + 10 FAQs |
| `404.html`     | Not-found page |

---

## ✏️ Things you must change before going live

Open **`assets/js/data.js`** and edit the `SITE` block at the very top.
This one block feeds the whole site — header, footer, every button, the
booking form.

```js
const SITE = {
  name:     "Martinez East End Tours",
  whatsapp: "16892870134",          // Jafeth's number, from your Wix site
  phone:    "+1 689-287-0134",
  email:    "info@martinezeastendtours.com",
  facebook: "", instagram: "", tripadvisor: ""   // leave "" to hide the icon
};
```

Contact details and the team are already filled in. Add your social links
when you have them.

**The booking inbox is `info@martinezeastendtours.com`.** Email forwarding is
free with the domain at Porkbun — point that address at an inbox you actually
read, or booking requests sent by email will bounce.

Then:

1. **Prices.** Every price in `data.js` is a placeholder, not a real
   quote. Go through all 11 attractions and set your actual rates.
2. **Durations.** The `minutes` field on each tour is what the Port Time Planner
   uses to tell a guest whether they'll make it back to their ship. Keep these
   honest — this number is a promise.
3. **Your founding story.** `about.html` is written from your Wix copy. Add the
   part only you can write: who started this, and why.
4. **Reviews.** The reviews section on `index.html` is built from the `REVIEWS`
   list in `assets/js/data.js`, which ships empty. Add *real* guest reviews there
   as you collect them — the field shape is shown in the comment above the list —
   and the section appears on its own. While the list is empty the whole section
   stays hidden, so the page never shows an empty box.
   Never invent a review: it's illegal in many countries and it's the fastest way
   to lose a Tripadvisor listing.

---

## Changing the business name

The name lives in two kinds of place. `SITE.name` in `assets/js/data.js`
drives the header and footer on every page automatically. The rest are
static so that search engines and social previews see them without running
JavaScript:

- `assets/js/data.js` — `SITE.name`
- `<title>` and `og:title` in `about.html`, `book.html`, `contact.html`,
  `tour.html`, `404.html`
- the `<meta name="description">` on `about.html`
- the story paragraph on `about.html` and the matching one on `index.html`
- this README

To find every one of them:

```bash
grep -rn "Martinez East End Tours" --include='*.html' --include='*.js' --include='*.md' .
```

Take care with the Pristine Snorkeling description, which begins "Explore
Roatán's vibrant coral reef" — that is the word explore, not an old brand
name, and should not be swept up in a rename.

## Adding, editing and removing tours

Everything lives in the `TOURS` array in `assets/js/data.js`. The tours page,
the detail pages and the booking dropdown all read from it, so you only edit
in one place.

- **Add a tour** — copy any existing block, change the fields, give it a unique `id`.
- **Remove a tour** — delete its block.
- **Hide a tour temporarily** — set `active: false`. It disappears from the site
  but you keep the content.

Key fields:

| Field | Meaning |
|---|---|
| `id` | Unique, lowercase, no spaces. Becomes the page URL. |
| `minutes` | Total door-to-door time. Drives the Port Time Planner. If a tour runs in several lengths, put the **shortest** here so the planner never rules it out, and say so in `note`. |
| `priceFrom` / `priceTo` | Per person, USD. Set both to `0` for "Ask us" — the site then hides the price instead of showing `$0`. |
| `group` | Free text, e.g. `"Up to 8 guests"`. |
| `art` | Illustration style used when there is no photo: `reef`, `beach`, `jungle`, `adventure`, `wildlife`, `boat`, `culture` |
| `photo` | Optional real photo — see below. |
| `focus` | Optional `object-position` value, e.g. `"center 70%"`, to stop a tall photo being cropped badly in the wide hero. |
| `extra` | Optional second paragraph of story (used on Little French Key, Cultural Getaways, Pigeon Cay). |
| `verdict` | Optional closing pitch, shown in a highlighted box. |

### When you add or remove a tour, update `sitemap.xml`

`sitemap.xml` lists every page for Google, including one line per tour. It is a
plain file, not generated at page load, so a new tour needs a new entry:

```xml
  <url>
    <loc>https://martinezeastendtours.com/tour.html?id=YOUR-NEW-ID</loc>
    <lastmod>2026-09-12</lastmod>
    <priority>0.8</priority>
  </url>
```

Nothing breaks if you forget — the tour still works and is still linked from
the tours page. It just takes Google longer to find it.

### Using real photos

Right now every tour uses a built-in illustration, so nothing is ever broken or
blank. **Real photos will convert far better than illustrations.** To add one:

1. Drop the image in `assets/img/` (e.g. `assets/img/west-bay.jpg`)
2. Set `photo: "west-bay.jpg"` on that tour

Resize to about 1200px wide and save as JPEG at ~80% quality first — a 4MB
phone photo will make the site slow on ship wifi, which is exactly where your
customers are browsing from.

---

## How booking works right now

The form does **not** take payment. It collects the guest's details, builds a
formatted booking request, and hands it off through:

1. **WhatsApp** (primary — how most Roatán operators actually close bookings)
2. **Email** (fallback)
3. **Copy to clipboard**

You then reply to confirm availability and price, and the guest pays on the day.

**How guests pay** is set in the `PAYMENTS` list in `assets/js/data.js` and
renders on the contact and booking pages from that one place. Currently cash
in US dollars or lempiras, Cash App, Venmo, Apple Pay and PayPal.

**No credit or debit cards.** The site wrongly claimed card payment at one
point; if you edit payment copy, keep that claim off it.

This is deliberate for launch: it costs nothing, needs no backend, and matches
how island operators already work. It also means **no booking is ever lost to a
failed payment.**

### If you ever want to take payment online

You'll need three things this static site can't provide on its own:

1. A **payment processor** — Stripe is the usual choice and works in Honduras
   via Stripe Atlas or a partner bank; check current availability for a
   Honduran entity before committing.
2. A **backend** to create charges securely. Card keys can never live in
   frontend code. A serverless function (Netlify, Vercel, Cloudflare Workers)
   is enough and is free at your volume.
3. **Real availability tracking**, so you don't sell fourteen seats in a
   twelve-seat van.

At that point it's worth comparing against a purpose-built tour booking
platform (FareHarbor, Rezdy, Bókun — Bókun feeds Viator/Tripadvisor). They take
a commission but handle payments, availability and OTA distribution for you.
A common path is to keep this site as your storefront and embed their booking
widget on the tour pages.

---

## Publishing it free with GitHub Pages

A deploy workflow is already set up at `.github/workflows/pages.yml`. It
publishes the whole site on every push.

**It needs you to switch Pages on once first** — creating a Pages site requires
repository-admin rights, which an automated token isn't allowed to do. One time,
then never again:

1. Go to **https://github.com/jafethmartinez/Jafeth/settings/pages**
2. Under **Build and deployment → Source**, choose **GitHub Actions**
3. That's it — no other fields to fill in

Then re-run the deploy:

- Go to **https://github.com/jafethmartinez/Jafeth/actions**
- Click **Deploy site to GitHub Pages** → the most recent run → **Re-run all jobs**

Your site is live at:

```
https://martinezeastendtours.com
```

The GitHub-provided address, `https://jafethmartinez.github.io/Jafeth/`,
redirects to it.

From then on it redeploys automatically every time anything is pushed.

### The custom domain

The site is served at **https://martinezeastendtours.com**.

Two things make that work, and both are already in place on the repo side:

- the `CNAME` file at the top of this repo, containing just the domain
- the domain's DNS records, pointed at GitHub (set at the registrar,
  Porkbun)

**DNS records at Porkbun:**

| Type | Host | Answer |
|---|---|---|
| A | *(leave blank)* | `185.199.108.153` |
| A | *(leave blank)* | `185.199.109.153` |
| A | *(leave blank)* | `185.199.110.153` |
| A | *(leave blank)* | `185.199.111.153` |
| CNAME | `www` | `jafethmartinez.github.io` |

The four A records are GitHub's Pages servers and are the same for every
GitHub Pages site. Verify them against GitHub's current documentation if
they ever stop resolving.

Then in **Settings → Pages → Custom domain**, enter the domain and, once
the certificate has been issued, tick **Enforce HTTPS**. The certificate
is free and automatic; it can take up to a day to appear, though it is
usually much faster.

If the domain is ever changed, the `CNAME` file must change with it, or
GitHub will keep serving the old one.

## Local preview

Just open `index.html` in a browser. Or, for a proper local server:

```bash
python3 -m http.server 8000
# then visit http://localhost:8000
```

---

## Notes on what's in here

- **No tracking, no cookies, no analytics.** Nothing to disclose, nothing to
  consent to. Add analytics later if you want it.
- **Accessible** — semantic HTML, keyboard navigable, labeled form fields,
  visible focus rings, skip link, screen-reader friendly.
- **Fast** — one CSS file and two small JS files on every page (`gallery.html`
  loads a third, `gallery.js`, which no other page pays for). Illustrations are
  inline SVG and every gallery photo is lazy-loaded. Loads on bad ship wifi.
- The Port Time Planner remembers a guest's ship times in their own browser
  (`localStorage`) as they move between pages. Nothing is sent anywhere.
