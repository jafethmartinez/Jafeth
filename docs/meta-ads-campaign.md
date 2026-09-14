# Meta ads — campaign 1: pre-cruise WhatsApp enquiries

**Status: built but not launched.** The campaign shell exists and is PAUSED.
It cannot run until the two blockers below are cleared.

| | |
|---|---|
| Ad account | `171437866271111` (Jafeth Martinez) |
| Campaign ID | `52547232181462` |
| Campaign name | Roatán Shore Excursions — Pre-Cruise WhatsApp Enquiries |
| Objective | `OUTCOME_ENGAGEMENT` |
| Budget | CBO, 130 L/day (~$5 USD) |
| Bid strategy | `LOWEST_COST_WITHOUT_CAP` |
| Status | PAUSED |

---

## Blockers — only Jafeth can clear these

1. **Create a Facebook Page.** facebook.com/pages/create. Every Meta ad
   attaches to a Page; there is no way to run ads without one, and the account
   currently has zero Pages. Name it "Martinez East End Tours".
2. **Add a payment method.** Ads Manager → Billing. The account has none.
3. **Connect the WhatsApp number to the Page** (Page Settings → WhatsApp,
   `+1 689-287-0134`). Required for click-to-WhatsApp ads specifically.

Once the Page exists, put its URL into `SITE.facebook` in `assets/js/data.js`
and the site shows the icon automatically.

---

## Why WhatsApp and not the website

The site has no tracking pixel, by design — the README treats zero cookies and
nothing to disclose as an asset, and adding a Meta pixel would drag a privacy
policy and GDPR cookie consent along with it for European and UK visitors.

Without a pixel, a website campaign can only optimise for raw link clicks: you
pay for clicks and learn nothing about whether any of them wanted a tour. A
WhatsApp conversation is tracked natively inside Meta, needs no pixel, and is
the same channel that already closes bookings. At 130 L/day there is no budget
to waste on unqualified clicks, so buy conversations instead.

**Known risk:** WhatsApp penetration among US travellers is lower than in
Europe or Latin America, so part of the audience cannot respond to this ad at
all. If message volume is thin after two weeks, switch `destination_type` to
`MESSENGER` — a one-setting change, no rebuild. Messenger replies land in the
Page inbox, which then has to be watched.

---

## Ad set (to create once the Page exists)

```
name             Pre-cruise · US+CA · cruise interest
optimization     CONVERSATIONS
destination      WHATSAPP
billing_event    IMPRESSIONS
promoted_object  { "page_id": "<new page id>" }
targeting        geo: US, CA
                 age 30–65+
                 Advantage+ Audience ON (let Meta find them — at this
                 budget, hand-picked interests starve delivery)
```

Do **not** hand-write interest IDs. If interest targeting is added later it
must use real IDs from Meta's targeting search, never guessed numbers.

### On timing

The research doc's Tue–Thu ship peak is **not** the schedule for this campaign.
That pattern is when passengers are physically on the island; this campaign
targets people at home, 3–6 weeks before they sail, which is when independent
shore excursions actually get booked. Run it all week, no day-parting.

Day-parting to ship days belongs to a second, separate campaign that
geo-targets Roatán itself. Do not mix the two in one ad set.

---

## Ad copy

Three angles to test against each other. All are true as written — no price,
no rating, no review, no invented claim. Keep it that way: every price in
`data.js` is still a placeholder and `REVIEWS` is empty.

### A — The clock (lead angle)

> **Primary text**
> Your ship leaves at 5. We have lived here our whole lives, so we know
> exactly how long the road back from the east end takes — and we build every
> tour around getting you to the gangway with time to spare, not just in time.
>
> Message us with your ship and your port day. We will tell you honestly what
> fits and what does not.
>
> **Headline:** Back aboard with time to spare
> **Description:** Roatán shore excursions, family run
> **CTA:** Send WhatsApp Message
> **Creative:** `lfk-aerial.jpg` (1080×1350)

### B — Local family, not a booth at the pier

> **Primary text**
> We are three siblings, born and raised on Roatán. Not a booth at the pier,
> not a call centre — Jafeth, Oscar and Mireska, and a van that shows up where
> we said it would.
>
> Tell us your ship and what you want to see. We will build the day around it.
>
> **Headline:** A local family, not a tour desk
> **Description:** Snorkelling, wildlife, reef, culture
> **CTA:** Send WhatsApp Message
> **Creative:** `family.jpg` (1067×1328)

### C — The distinctive thing

> **Primary text**
> Nurse sharks at Pigeon Cay. Sloths and capuchins you can actually meet. The
> mangrove tunnel most visitors never find because it is not on the ship's
> excursion list.
>
> Twelve tours, all of them ours, all of them on our island. Message us and we
> will tell you which ones fit your port day.
>
> **Headline:** The Roatán the ship does not sell
> **Description:** Reef, jungle, wildlife and culture
> **CTA:** Send WhatsApp Message
> **Creative:** `nurse-shark.jpg` (1200×1600)

### Creative notes

- 4:5 (1200×1600, 1080×1350) is the feed ratio. 9:16 files in `assets/img`
  (`para-flight.jpg`, `lfk-cabanas.jpg`, `animal-sloth-tree.jpg`) suit Reels
  and Stories placements.
- Leave placements automatic. At this budget, restricting placements starves
  delivery.
- Strong alternates if A/B/C fatigue: `lfk-overwater-swing.jpg`,
  `animal-monkey-shoulder.jpg`, `snorkelers-sharks.jpg`, `para-flight.jpg`.

---

## What must NOT go in an ad

- **No price.** Every `priceFrom`/`priceTo` in `data.js` is a placeholder, and
  the research puts five of them wrong against the market. An advertised price
  you then contradict on WhatsApp is the fastest way to lose a booking.
- **No rating, review, testimonial or "rated #1".** `REVIEWS` is empty. There
  are none to quote, and inventing them is illegal in the markets these
  customers come from.
- **No "guarantee."** It is a strong legal word. Until there is a measured
  buffer number and a stated remedy if it is missed, "with time to spare" is
  the honest version and is what the copy uses.
- **No claim about certification, insurance or awards** until Jafeth confirms
  what is actually held.

---

## What to watch, and when to judge it

Give it 14 days before changing anything. At 130 L/day the daily numbers are
too noisy to read.

| Signal | Meaning |
|---|---|
| Cost per conversation started | The only number that matters. Track it against what a booking is worth. |
| Conversations that become bookings | Meta cannot see this. Count it by hand in WhatsApp. |
| Ad A vs B vs C | Kill the weakest after 14 days, not sooner. |
| Frequency above ~3 | Audience too small or creative fatigued — rotate the image first. |

**Meta will not know whether any of this made money.** The booking happens in
WhatsApp and payment happens in cash on the day, so attribution ends at the
message. Keep a manual tally of which enquiries came from the ad, or the spend
cannot be judged at all.

---

## Before spending more than this

Three things make every ad lempira work harder, and none of them are ad
settings:

1. **Set real prices.** See the competitor bands in `market-research.md`.
2. **Collect real reviews.** A Page with no reviews converts badly, and social
   proof beats ad copy. The site's `REVIEWS` array is ready for them.
3. **Confirm insurance.** General + auto + watercraft liability gates the OTA
   channels (Viator, GetYourGuide) that reach far more cruise passengers than
   $5/day of Meta ever will.

Meta ads are the *third* priority behind those two, not the first.
