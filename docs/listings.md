# Free listings — ready to paste

Prepared 14 September 2026. For Jafeth, Oscar and Mireska. Covers the three free,
zero-commission listings that put you in front of cruise passengers who are
already searching: Google Business Profile, Tripadvisor, and Instagram.

**Method note, same as `market-research.md`:** the research environment's egress
proxy blocked direct fetches of `support.google.com`, `tripadvisor.com`,
`localfalcon.com`, `rezdy.com` and `instagram.com`. Every claim below about how
a platform's signup flow, limits or verification actually works is therefore
**[V, via search-engine summary]** — a real, dated citation, but read from a
search snippet rather than the live page. Two consequences: (1) before you
click "Get Started" on any of these, the live flow may differ slightly from
what's below — this is a script, not a guarantee; (2) I did **not** verify
Instagram handle availability at all, since instagram.com itself was
unreachable. That's flagged where it matters.

Nothing here touches the website. No git command was run that changes
anything.

---

## Before you start: one thing to settle first

The site currently gives your location as **"Roatán, Bay Islands, Honduras"**
(`SITE.base` in `assets/js/data.js`, and the same in the `LocalBusiness`
schema on `index.html`). But the logo reads **"PUNTA GORDA · ROATÁN"**, and
`about.html` says outright that Punta Gorda — the Garífuna village — is where
your family is from.

All three listings below ask for a real base location, and Google in
particular wants a real address on file even though it won't be shown
publicly (see §1). **I have not assumed Punta Gorda is your operating base**
— it might be where the family is from without being where the vans, gear or
office actually are. Confirm this before filling in any address field. See
the checklist at the end.

---

## 1. Google Business Profile

The highest-value one. It is what puts you on Google Maps and in "things to
do in Roatán" / "Roatan shore excursions" search results, and it's the
listing your competitors already lean on — Discover Roatán and several others
put "licensed and insured" right on their public profile
(`docs/market-research.md` §4.1).

### Sign-up route

Go to **business.google.com** and sign in with an account the three of you
will keep control of — not a personal Gmail one person might lose access to.
Search for "Martinez East End Tours" first; if a profile already exists
(sometimes one gets auto-created from a map edit or a review), claim that one
rather than creating a duplicate — duplicates get suppressed or merged and
cost you history. **[V]**, general GBP claim-first guidance —
<https://www.brightlocal.com/learn/how-to-add-or-claim-your-tripadvisor-listing/>
(this is the Tripadvisor version of the same rule; the "search before you
create" principle is standard practice for both platforms) — seen 2026-09-14.

### Business name

Enter exactly **`Martinez East End Tours`** — nothing appended. Google's
guidelines prohibit keyword-stuffed names ("Martinez East End Tours — Roatan
Shore Excursions & Snorkeling"); profiles that do this get suspended. Match
what's on your WhatsApp, your van signage if any, and the site header.

### Service-area business, not a storefront

You have no shopfront, so set this up as a **service-area business**:

- During setup, when asked "Do you serve customers at your business address?"
  answer **No**.
- Google will still ask for a real business address internally — this is used
  for verification and is **never shown publicly** once you mark the profile
  service-area. It cannot be a PO box or a virtual office; it needs to be a
  real address you operate from. **[V, via search summary]** —
  <https://www.localfalcon.com/blog/how-to-set-up-google-business-profile-for-servicearea-businesses>,
  <https://rankai.ai/articles/service-area-business-google-business-profile-guide>
  (seen 2026-09-14; direct page unreachable, summary only)
- **Service areas** — you can list up to 20, by city/neighborhood or postal
  code. **[V, via search summary]**, same sources. Suggested list, in order of
  priority:
  - Roatán (the island — enter this first, broadest)
  - Coxen Hole
  - Punta Gorda
  - West Bay
  - West End
  - Sandy Bay
  - French Harbour
  - French Cay (for Little French Key pickups, if selectable)
  - Isla Tropicale / Dixon Cove (try both names — the terminal was renamed in
    2026 and Google's own geocoding may still be catching up)

### Category

Primary: **`Tour operator`**. This category exists in Google's live category
picker per multiple current guides. **[V, via search summary]** —
<https://tourismmarketing.agency/how-optimize-google-my-business-tour-operators/>
(seen 2026-09-14).

Secondary categories — I could not verify the exact current dropdown options
without reaching the live picker, so these are candidates to type into the
picker and select only if Google offers them as an exact match (do not force
a near-match, it hurts more than it helps): `Boat tour agency`,
`Sightseeing tour agency`, `Excursion agency`. Pick whichever two or three
actually appear and actually fit — snorkeling and shore excursions are the
core, not, say, adventure sports.

### Description (748 characters — under Google's 750 cap)

Google shows roughly the first 250 characters before truncating to "More," so
the opening sentence carries the weight. **[V]** on the 750-character limit
and ~250-character preview — <https://bulkpublish.com/blog/google-business-character-limit>,
<https://www.brightlocal.com/learn/google-business-profile-description/>
(seen 2026-09-14).

Paste-ready:

> Martinez East End Tours is a family-run tour operator on Roatan, Honduras, run by siblings Jafeth, Oscar and Mireska Martinez. We meet cruise guests at Isla Tropicale and the Port of Roatan (Coxen Hole), plus hotels and the airport, and plan every tour around your ship's clock so you get back to the gangway on time. Tours include reef snorkeling, a nurse-shark snorkel at remote Pigeon Cay, mangrove tunnels by panga boat, Little French Key, animal encounters, parasailing, zip-lining, a glass-bottom boat, a tiki boat cruise, and a visit to Punta Gorda, the Garifuna village our family is from. Pay by cash, Cash App, Venmo, Apple Pay or PayPal on the day -- no cards, no deposit. Message us on WhatsApp to check availability for your port day.

No price, no rating, no guarantee, no certification claim. It leads with the
family and both terminals — the two things inside the visible 250-character
window — which is exactly what's true and distinctive about you.

### Attributes

Available attributes depend on the category you pick and can't be fully
predicted from here, but check the picker for these:

- **Identifies as** → look for a **family-owned** option, if Google offers
  one for your category. This is true and worth checking — I'm not assuming
  it exists, just flagging it as worth ticking if it's there.
- **Languages spoken** — English, Spanish, and Garífuna if that's genuinely
  a language your guides speak on tour and you want to say so. Confirm with
  Mireska/Oscar rather than guessing.
- **Accessibility** (wheelchair-accessible entrance/seating/parking) — do not
  tick any of these without an honest answer. A guest who shows up expecting
  step-free boat access and doesn't get it will leave the review that sinks
  you. Leave unticked until someone checks.
- **Service options / appointment attributes** — if a "requires appointment"
  or similar attribute is offered, enable it (see Hours below).

### Opening hours — the question that matters for you specifically

You don't run fixed daily hours; you run around whichever ships are in that
day (`market-research.md` §1.2 — some days no ship calls at all, Tue–Thu
peak). Google's own current guidance for exactly this situation:

**Set hours to "Open — no main hours,"** rather than picking fixed daily
hours you can't honor, and use the business description plus an
"appointment required"-type attribute (if offered for your category) to say
bookings are by WhatsApp. **[V, via search summary]** —
<https://sitelinx.us/how-do-i-set-google-business-hours-to-by-appointment-only/>,
Google Business Profile Community threads on appointment-only hours (seen
2026-09-14).

Add the booking link field pointing at
**`https://martinezeastendtours.com/book.html`**, so "Book online" on the
profile sends people straight to the form that hands off to WhatsApp.

### Verification

Without a public storefront, postcard verification (mail to the address on
file) can be slow or unavailable, and **video verification has become the
common route for service-area businesses**: a short (Google recommends
roughly 1–2 minutes, minimum 30 seconds), single unbroken recording showing
the business — for you, that would plausibly be the van/boat with any
signage or branding, and gear you use on tour, filmed continuously with no
cuts, no narration, no people other than what naturally appears. **[V, via
search summary]** — <https://wiremo.co/blog/google-business-profile-video-verification/>,
<https://gmbapi.com/news/google-business-profile-video-verification-guide/>
(seen 2026-09-14). Reported review time: commonly under 3 days, up to 5
business days if manual review is needed. Same sources.

**What Jafeth needs to decide before recording:** which vehicle/boat to film,
whether it has any Martinez East End Tours branding on it at all (if not,
that's worth adding cheaply before verification, since it also helps the
Tripadvisor listing in §2), and where the "real address on file" actually is.

---

## 2. Tripadvisor

`docs/market-research.md` (§3.1, §6 of the recommendations) already makes the
case: this is the free move to do before anything paid, because you currently
have **zero public reviews anywhere**, and it's the same account that Viator
bookings (via Bókun, a later step, not this one) would eventually flow
through.

### Sign-up route

Go to **tripadvisor.com/Owners** and search for "Martinez East End Tours,
Roatán" first. If a listing already exists — which can happen automatically
the first time any guest reviews you, even without your involvement — claim
it via "Claim Your Business" instead of creating a new one. If nothing comes
up, use the Management Center's "Add a business" flow, select **Attraction**
as the business type (not hotel or restaurant), then search the category
field for **Tours** and pick the closest of "Tour operator" or "Outdoor
activities" once you see the live options. **[V, via search summary]** —
<https://www.peekpro.com/blog/tripadvisor-business-listing>,
<https://www.xola.com/articles/how-to-list-your-tours-and-experiences-on-tripadvisor/>
(seen 2026-09-14).

### What the listing requires — the proof-of-operator problem

This is the part to plan for, not just click through. Tripadvisor will not
list a business as a **tour company** unless it can confirm the business
actually operates tours. It accepts either:

1. **A government-issued tour operator license**, from Honduras' tourism
   ministry / relevant authority, or
2. **Photos as proof** — a vehicle displaying the company's logo, or a guide
   photographed while guiding, wearing the company logo on clothing or a
   badge.

**[V, via search summary]** —
<https://www.tripadvisor.com/ShowTopic-g1-i12105-k11758034-o10-I_want_to_register_my_Tour_Operator_business_on_Tripadvisor-Tripadvisor_Support.html>
(seen 2026-09-14; this is Tripadvisor's own support forum, read via search
snippet since the domain itself was unreachable — worth reading directly once
you're at a computer with normal internet access, to confirm current wording).

This is the same insurance/licensing gate `market-research.md` §3.6 flags for
GetYourGuide and every reseller relationship — **what you currently hold in
the way of a license, registration, or insurance is unverified by me and
needs Jafeth's answer** (see checklist). If there's no formal license, option
2 is real and achievable: a photo of the van or boat with your logo, or a
guide wearing branded clothing, is enough by this account. If nothing is
currently branded, that's a cheap, useful thing to fix regardless of this
listing.

### Approval time

Commonly cited as **3–5 business days** for a new listing; if it involves
phone verification specifically, that step alone can take up to 5 days.
**[V, via search summary]** —
<https://www.brightlocal.com/learn/how-to-add-or-claim-your-tripadvisor-listing/>
(seen 2026-09-14).

### Description to paste

No published character cap was found for the business description field
(distinct from the review character limits, which don't apply here) — I
could not verify one, so treat this as an estimate-free zone and keep it
tight regardless:

> Martinez East End Tours is a family-run tour operator on Roatán, run by siblings Jafeth, Oscar and Mireska Martinez. We pick up cruise passengers at both Isla Tropicale and the Port of Roatán (Coxen Hole), as well as area hotels and the airport, and we build every tour around your ship's schedule. Our tours cover the East End of Roatán and beyond: snorkeling on the Mesoamerican Barrier Reef, a nurse-shark snorkel at remote Pigeon Cay, mangrove tunnels by traditional panga boat, the beaches of Little French Key, animal encounters with the island's sloths and monkeys, parasailing over West Bay, zip-lining, a glass-bottom boat tour, a floating tiki bar cruise, and a visit to Punta Gorda — the oldest Garífuna settlement in Honduras, and where our own family is from. Payment is cash, Cash App, Venmo, Apple Pay or PayPal, on the day. Message us on WhatsApp to check what fits your port time.

### "Tour entries"

A free Tripadvisor business listing is a **single attraction-level profile**,
not twelve separate bookable products — separate, bookable product listings
are the paid Viator/Experiences path via Bókun that `market-research.md`
covers in §3.1 and §6, and that is explicitly not this pass. What you can and
should do inside the one free listing:

- List your tour names as the "things to do" / activity tags if the listing
  form offers that field — use the `TOURS` names verbatim from `data.js`:
  Little French Key, Cultural Getaways (Punta Gorda), Glass-Bottom Boat,
  Pristine Snorkeling, Pigeon Cay: Snorkeling with Nurse Sharks, Mangrove
  Tunnel Tour, Animal Encounters, Sky-High Parasailing, Gumbalimba Park,
  Exclusive Yacht Tour, Zip Line — Randy's Jungle Top, Tiki Boat Cruise.
- Upload photos. Use real ones from `assets/img/` — see §3 below for the
  strongest set, the same selection works here.
- Link the website: `https://martinezeastendtours.com`.

### Reviews — read this before you post anything, and before you ask anyone else to

Per `market-research.md` §3.4, Cruise Critic's rules explicitly forbid an
operator promoting itself on their roll-call forums — "One-Post Wonders" get
removed and **the company's own name can be censored from the forums without
notice**. **[V]** — <https://boards.cruisecritic.com/guidelines/> (seen
2026-09-12 in the original research; re-confirmed by search 2026-09-14).

The same caution applies to Tripadvisor itself, more directly: **never post,
edit, or ask a guest to copy-paste a review on the company's behalf.** Ask
guests, on the day, in their own words, to leave a review — a card in the
van or a line at the end of the tour saying "if you had a good time, a
Tripadvisor review helps us more than you know" is the entire playbook.
`README.md` and `data.js` already say this plainly for the site's own
`REVIEWS` array; it applies with equal force here, and Tripadvisor is
explicitly named in the code comment as a platform where fake reviews get a
listing removed.

---

## 3. Instagram

### Setup

1. Create the account (or convert an existing personal one) and switch it to
   a **professional / Business account**: Settings → Account type and tools
   → Switch to professional account → Business. **[V, via search summary]**
   — <https://www.shopify.com/blog/how-to-create-an-instagram-business-account>
   (seen 2026-09-14).
2. Link it to the Facebook Page (**Martinez East End Tours**, id
   `1344799685382219`, already live per `SITE.facebook`): from Instagram,
   Edit profile → Public business information → Page → Connect, then sign in
   with an account that has admin rights on that Facebook Page. **[V, via
   search summary]**, same source. Whoever set up the Facebook Page needs to
   do this step, or grant Page admin access to whoever does.
3. Category: pick the closest match in Instagram's own category field —
   likely "Tour agency" or "Tourist attraction," whichever the live picker
   actually offers.
4. Contact options: WhatsApp number (`+1 689-287-0134`), and the website
   link `https://martinezeastendtours.com`.
5. Bio — short, no price, no rating claim:

   > Family-run tours on Roatán 🇭🇳 Jafeth, Oscar & Mireska Martinez
   > Both cruise terminals + hotel/airport pickup
   > Book → link below

6. **Handle — not verified.** I could not reach instagram.com to check
   availability. Suggested first choice: `@martinezeastendtours`. If taken,
   `@eastendtoursroatan` is a reasonable fallback that still reads clearly.
   Check both before committing anywhere else (business cards, the site
   footer) to the handle.

### Opening grid — specific files, in order

Instagram still shows a 3×3 (or 3-wide) grid as the first impression on a
profile. These nine, in this order, mix the things that are actually true
and distinctive — aerials, the family, and the one experience (nurse sharks)
nobody else in the market photographs as well as you already have:

1. `assets/img/pigeon-cay-drone.jpg` — the remote cay from the air; nothing
   else in the market looks like this
2. `assets/img/family.jpg` — the Martinez family; the thing no reseller can
   claim
3. `assets/img/nurse-shark.jpg` — the single most distinctive product you
   sell
4. `assets/img/lfk-aerial.jpg` — Little French Key from the air
5. `assets/img/cultural-arrival-day.jpg` — Punta Gorda, Garífuna Arrival Day;
   the cultural credibility nobody else can borrow
6. `assets/img/tiki-aerial.jpg` — the tiki boat from the air, colorful and
   distinctive
7. `assets/img/animal-sloth-hold.jpg` — a guest holding a sloth; consistently
   the highest-engagement image type for wildlife tours generally
8. `assets/img/para-solo-air.jpg` — parasailing over West Bay, motion and
   color
9. `assets/img/snorkelers-sharks.jpg` — snorkelers in the water with the
   nurse sharks; the payoff shot for #3

All nine are real, already-shot photos already in the repository — nothing
new to source. Re-check `gumbalimba-*.jpg` before ever posting those:
`data.js` notes they were "supplied by Gumbalimba Park; the owners confirmed
permission to use them" — fine for the website, but confirm that permission
explicitly covers Instagram reposting too before using any of them there.

### What to post going forward

- Real trips, dated. A short clip of the actual tiki boat, actual mangrove
  tunnel, actual guide — video performs best and you already have several
  short clips in `assets/img/*.mp4` used on the site (`cultural-dance.mp4`,
  `tiki-boat.mp4`, `nurse-sharks.mp4`, `mangrove-tunnel.mp4`, etc.) that can
  be reused directly.
- Never post a guest's face without asking them first, on the day, in
  person — the same consent standard as any review request.
- No claims here that aren't already true on the site: no price in a caption
  unless it's a real, current price from `data.js`, no "best in Roatán," no
  invented guarantee.

---

## What Jafeth must supply — nothing above should be filled in without these

1. **Confirm the real base location.** Is Punta Gorda actually where the
   vans/boats/office are, or is that only the family's heritage village? This
   decides what goes in the "real address on file" field for Google (hidden
   from the public but still required) and what the Tripadvisor listing's
   location should say.
2. **Insurance and licensing status.** `market-research.md` §3.6 already
   flags this as unverified and gating everything commercial. It specifically
   gates the Tripadvisor "tour operator" proof requirement in §2 above — if
   there's a real Honduran tour-operator license, that's the clean path; if
   not, branded-vehicle or branded-guide photos are the fallback, and you'd
   need to confirm those exist or get them taken.
3. **A short verification video for Google** (§1) — the van or boat, any
   signage, filmed continuously, no people talking, 30 seconds to 2 minutes.
4. **Branding check.** Do any vehicles or boats currently carry the company
   name or logo? If not, that's worth fixing before Tripadvisor verification
   and the Google video, since both lean on it.
5. **Facebook Page admin access** for whoever will link Instagram to it —
   confirm who currently administers Page id `1344799685382219`.
6. **Language claims.** Confirm which languages guides genuinely speak on
   tour (English, Spanish, Garífuna?) before ticking any "languages spoken"
   attribute.
7. **Accessibility claims.** Confirm real wheelchair/mobility access on
   vehicles and boats before ticking any Google accessibility attribute —
   default to leaving these blank until someone checks.
8. **Instagram handle choice**, once availability is checked directly (I
   could not reach instagram.com from here).
9. **Gumbalimba Park photo permission** — confirm it extends to Instagram
   reposting, not just the website, before posting any `gumbalimba-*.jpg`
   there.
10. **Reviews and prices, as always** — nothing above invents either. Once
    real reviews exist (Tripadvisor, Google, or Facebook), they go into
    `REVIEWS` in `data.js` per the existing process in `README.md`; once real
    prices are set, they go into `TOURS`. Neither listing should be filled
    with placeholders from `data.js` treated as final.

---

## Sources

All seen 2026-09-14 via search-engine extraction (direct fetches of
`support.google.com`, `tripadvisor.com`, `instagram.com`, `localfalcon.com`
and `rezdy.com` were blocked by this environment's network policy — open
these yourself before treating any process detail as final):

- <https://www.localfalcon.com/blog/how-to-set-up-google-business-profile-for-servicearea-businesses>
- <https://rankai.ai/articles/service-area-business-google-business-profile-guide>
- <https://tourismmarketing.agency/how-optimize-google-my-business-tour-operators/>
- <https://bulkpublish.com/blog/google-business-character-limit>
- <https://www.brightlocal.com/learn/google-business-profile-description/>
- <https://sitelinx.us/how-do-i-set-google-business-hours-to-by-appointment-only/>
- <https://wiremo.co/blog/google-business-profile-video-verification/>
- <https://gmbapi.com/news/google-business-profile-video-verification-guide/>
- <https://www.peekpro.com/blog/tripadvisor-business-listing>
- <https://www.xola.com/articles/how-to-list-your-tours-and-experiences-on-tripadvisor/>
- <https://www.tripadvisor.com/ShowTopic-g1-i12105-k11758034-o10-I_want_to_register_my_Tour_Operator_business_on_Tripadvisor-Tripadvisor_Support.html>
- <https://www.brightlocal.com/learn/how-to-add-or-claim-your-tripadvisor-listing/>
- <https://boards.cruisecritic.com/guidelines/>
- <https://www.shopify.com/blog/how-to-create-an-instagram-business-account>
- `docs/market-research.md` §1, §3, §4.1, §6 (this repo — already-verified
  figures reused above rather than re-derived)

Companion documents: `README.md`, `assets/js/data.js`, `docs/market-research.md`.
