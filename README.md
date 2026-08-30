# Explore Roatán — tour booking website

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
| `book.html`    | Booking request form → sends via WhatsApp or email |
| `about.html`   | Your story (**needs your words — see below**) |
| `contact.html` | Contact details + 10 FAQs |
| `404.html`     | Not-found page |

---

## ✏️ Things you must change before going live

Open **`assets/js/data.js`** and edit the `SITE` block at the very top.
This one block feeds the whole site — header, footer, every button, the
booking form.

```js
const SITE = {
  name:     "Explore Roatán",
  whatsapp: "50400000000",          // ← YOUR number, digits only, no + or spaces
  phone:    "+504 0000-0000",
  email:    "bookings@yourdomain.com",
  facebook: "", instagram: "", tripadvisor: ""   // leave "" to hide the icon
};
```

**The WhatsApp number is the single most important field.** Honduras is country
code 504, so a number like `9999-8888` becomes `50499998888`. Until you change
it, every WhatsApp button on the site goes nowhere.

Then:

1. **Prices.** Every price in `data.js` is a realistic placeholder, not a real
   quote. Go through all 12 tours and set your actual rates.
2. **Durations.** The `minutes` field on each tour is what the Port Time Planner
   uses to tell a guest whether they'll make it back to their ship. Keep these
   honest — this number is a promise.
3. **Your story.** `about.html` has a marked section with placeholder text.
   Replace it with your own words. It's the most valuable writing on the site.
4. **Reviews.** `index.html` has a commented-out reviews section. Fill it in with
   *real* guest reviews once you have them. Never invent them — it's illegal in
   many countries and it's the fastest way to lose a Tripadvisor listing.

---

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
| `minutes` | Total door-to-door time. Drives the Port Time Planner. |
| `price` | Per adult, USD. Set `0` for "quote on request". |
| `kids` | Per child under 12, or `null` if not offered. |
| `art` | Illustration style: `reef`, `beach`, `jungle`, `adventure`, `wildlife`, `boat`, `culture` |
| `photo` | Optional real photo — see below. |

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

This is deliberate for launch: it costs nothing, needs no backend, and matches
how island operators already work. It also means **no booking is ever lost to a
failed payment.**

### When you're ready to take card payments online

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

1. Push this repo to GitHub
2. **Settings → Pages**
3. Source: **Deploy from a branch**, branch **main**, folder **/ (root)**
4. Wait about a minute

Your site will be at `https://<username>.github.io/<repo>/`.

To use your own domain (e.g. `exploreroatan.com`), buy it, add a `CNAME` file
containing just the domain, and point the domain's DNS at GitHub Pages.
It's free apart from the domain itself, which is roughly $12/year.

---

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
- **Accessible** — semantic HTML, keyboard navigable, labelled form fields,
  visible focus rings, skip link, screen-reader friendly.
- **Fast** — one CSS file, two small JS files, illustrations are inline SVG.
  Loads on bad ship wifi.
- The Port Time Planner remembers a guest's ship times in their own browser
  (`localStorage`) as they move between pages. Nothing is sent anywhere.
