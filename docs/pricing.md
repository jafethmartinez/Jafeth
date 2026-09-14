# Pricing — a recommended price sheet

Prepared 14 September 2026, for Jafeth to review and approve. **Nothing in this
document is a fact about Martinez East End Tours' actual costs.** Every
"recommended" number is a proposal built from the verified competitor bands in
`docs/market-research.md` §4.2 plus today's research into OTA commission
mechanics. The `priceFrom`/`priceTo` fields in `data.js` are not touched by
this document — that edit is Jafeth's call to make.

This document does not re-derive the competitor bands or re-cite every source
behind them — see `docs/market-research.md` §4.2 for that (all bands below
carry the same **[V]**/**[E]**/**[U]** confidence tags used there). It builds
on that research to answer the two questions it left open: what should the
price actually be, and what happens to that price once a 20–30% OTA
commission comes out of it.

---

## 1. Should you hold one price across channels, or price direct lower?

**Recommendation: hold one price — the same number on the site, in the
WhatsApp quote, and on every OTA listing — for every tour.** Not a menu of
options; this is the call, and here is the reasoning.

1. **GetYourGuide's standard supplier terms include a rate-parity clause: your
   own site cannot show a lower price than GetYourGuide does.** **[V]** —
   <https://otaplaybook.com/getyourguide-commission-rates/> (seen
   2026-09-14). Undercutting a listed GetYourGuide price on WhatsApp or in
   person is not a competitive nuisance, it is a breach of the contract you
   signed to get listed.
2. **Viator is moving the same direction.** Viator's lowest-price positioning
   already pushes operators toward parity, and an August 2026 global supplier
   agreement update gave Viator and its distribution partners more say over
   the final retail price a customer sees. **[V]** —
   <https://skift.com/2026/08/21/viators-updated-operator-agreement-formalizes-a-power-shift-in-experiences-pricing-scoop/>,
   <https://deeparrival.com/news/viator-tour-prices-different-booking-sites-2026/>
   (seen 2026-09-14). The trend is toward less operator pricing freedom over
   time, not more.
3. **Three people answering WhatsApp and driving vans do not have spare
   capacity to run two price sheets without a slip.** A guest who compares a
   Tripadvisor listing to a WhatsApp quote and finds cash is cheaper will ask
   why, in public, on the platform that hosts your only reviews.
4. **The commission is real money, but per market-research §3.1 it is only
   paid on bookings you would not otherwise have had.** The correct response
   to a 20–30% commission is not a lower direct price — it is a single list
   price high enough to survive the worst case (GetYourGuide's 30% default for
   new suppliers) while still sitting inside the verified competitor band.
   Direct/cash guests then pay the same headline price but you keep all of it
   — a better cash margin, not a cheaper cash price.
5. **The alternative (price direct lower) buys a better cash margin at the
   cost of breaching GetYourGuide's terms outright, inviting Viator's parity
   pressure, and training repeat and referred guests to always ask for "the
   real price."** That undermines the party-total quoting market-research §5
   recommends. It is not worth it at this scale.

So every price below is a single number: what you would charge a walk-up
WhatsApp guest, and what you would list on Viator or GetYourGuide, the same
figure. **[E]** — this is my recommendation for Jafeth to approve, not a fact
about the business.

## 2. How to read the arithmetic below, and its biggest weakness

For each tour: the verified competitor band (from `market-research.md` §4.2),
the recommended single list price, and what that price nets after commission
on Viator (25%, the standard rate — see market-research §3.1) and
GetYourGuide (30%, the default new-supplier rate — see market-research §3.2).

**The "cost floor" column is the weakest number in this document, and you
should treat it that way.** I have no visibility into your actual fuel
prices, wages, boat maintenance, insurance premiums or van costs — nobody
outside the business does. Where a tour has a verified third-party entry fee
(Little French Key's island pass, Gumbalimba's gate price) I used that
verified figure as the floor's anchor. Everywhere else the floor is a rough,
labelled **[E]** placeholder built from generic reasoning (a small boat/guide/
van day-cost spread across the group) — good enough to flag a number that is
obviously too thin, not good enough to found a real decision on. **Replace
every floor in this table with your real numbers before you trust the "flag"
column.**

All prices below are **per adult**. None of the twelve tours currently
publishes a child price; several competitors do (market-research §4.2 notes a
$70/$45 adult/child split at Little French Key). That is an open gap, not
addressed here.

---

## 3. Per-tour price sheet

| # | Tour | Verified competitor band | Recommended list price (all channels) | Cost floor **[E]** | Viator net @25% | GetYourGuide net @30% | Flag |
|---|---|---|---|---|---|---|---|
| 1 | Little French Key | Group excursion $70pp; private w/ transport+entry+lunch+2 drinks $118pp; island entry alone $68–238 **[V]** | **$135** | $90 (entry pass $70 + boat/van/guide $20) | $101.25 | **$94.50** | **Thin at GetYourGuide** — only $4.50 above the estimated floor. Verify Little French Key's actual group/operator wholesale rate before listing there; consider withholding this tour from GetYourGuide until the 30% is negotiated down, or raise to $145. |
| 2 | Cultural Getaways (Garifuna) | Private Garifuna/East End $52–75pp **[V]** | **$75** (top of verified band) | $30 (van, driver, museum entry, food tasting) | $56.25 | $52.50 | None — healthy margin both channels. |
| 3 | Glass-Bottom Boat | Standalone $45–65; combos $80–82 **[V]** | **$55** | $15 (fuel, captain, shared across up to 16 guests) | $41.25 | $38.50 | None. |
| 4 | Pristine Snorkeling | Standalone $45–90 **[V]** | **$75** | $22 (boat, captain, guide, gear; capped at 10) | $56.25 | $52.50 | None. |
| 5 | Pigeon Cay nurse sharks | $150–190pp group; private charter ≈$158–180pp **[V]** | **$175** | $60 (longer run to East End, more fuel, multiple guides) | $131.25 | $122.50 | None — this is the correction market-research flagged (old $120 floor was under the $150 market floor). |
| 6 | Mangrove Tunnel Tour | Standalone $30; combo $65–99 **[V]** | **$39** | $12 (panga fuel, captain, guide — shallow calm water) | $29.25 | $27.30 | None. Combo upside noted below. |
| 7 | Animal Encounters | Entry-only $12 self-drive; ~$49 organized w/ transport **[V]** | **$55** | $35 (entry ~$15 wholesale + $20 van/guide) | $41.25 | $38.50 | **Thin at GetYourGuide** — only $3.50 above floor. Verify the sanctuary's real group rate (max group is 14, so true per-head cost may be lower than this estimate) before listing. |
| 8 | Sky-High Parasailing | Standalone $70–80; combos $120–150 **[V]** | **$79** (as a standalone product) | $35 (boat, crew, gear wear, higher insurance load, 6-guest cap) | $59.25 | $55.30 | None, **provided you sell it standalone**. If you ever bundle it with a snorkel stop or island tour, reprice as a combo — see market-research §4.2. |
| 9 | Gumbalimba Park | Park admission $30; canopy $45; zip $55; with transport+guide $60–85 **[E, not independently verified]** | **$75** | $50 (entry $30 verified + $20 van/guide) | $56.25 | $52.50 | **Thin at GetYourGuide, and the whole band is an estimate.** Do not list on any OTA until you confirm Gumbalimba's actual per-person operator/group rate directly with the park. |
| 10 | Exclusive Yacht Tour | Comparable private charters $1,099–$1,450 for a 6-person boat **[V]** | **Keep "Ask us."** Illustrative example only: $1,200 total for a 6-hour private charter, up to 6 guests | $550 (boat day-rate, crew, fuel, snorkel gear, higher insurance load) | $900 | $840 | None on the arithmetic. Recommend not putting this on a fixed OTA price grid at all — use "request to book"/private-tour listing types if you list it anywhere, and prioritise direct and referral channels first (matches market-research's existing call to keep this one quoted, not listed). |
| 11 | Zip Line — Randy's Jungles Top | $45–80; South Shore standalone $75–80; combos to $99 **[V]** | **$69** | $45 (estimated third-party course fee ~$25 + $20 van/guide) | $51.75 | $48.30 | **Thin at GetYourGuide, and the floor is a guess.** If Randy's actual per-guest course fee is closer to $35–40 (plausible — South Shore Adventures' own standalone retail is $75–80), $69 could be unprofitable through GetYourGuide. Confirm the real course fee first. |
| 12 | Tiki Boat Cruise | See tier table below — **no comparable found for a 90-minute product; everything in market is 4–6hr at $140–165 [V]** | See below | See below | See below | See below | See below |

## 4. Tiki Boat — priced per tier, not as one range

Market-research §4.2 flagged this correctly: `$25–150` for a "90-minute" tour
tells a guest nothing, and the tour is actually four different trips (already
named in your own `highlights` field). It needs four prices, not one range.

| Tier | Length | Verified comparable | Recommended list price | Cost floor **[E]** | Viator net @25% | GetYourGuide net @30% | Flag |
|---|---|---|---|---|---|---|---|
| Sunday Funday | 90 min | **None found** — market-research could not locate any 90-minute comparable **[V, absence confirmed]** | **$29** | $12 | $21.75 | $20.30 | **The most estimate-heavy price in this document.** This is cost-plus reasoning with nothing to benchmark against, not a verified market price. Sanity-check it against what the boat actually costs to run per hour — crew wages, fuel and dock time are largely fixed regardless of trip length, so this short tier may cost more per minute than the long ones, not less. |
| Sip N Sail | 150 min | None found (same absence) | **$69** | $22 | $51.75 | $48.30 | Same caveat as above, lower severity — the price sits conservatively above the estimated floor. |
| Snorkel & Chill | 210 min | None found directly; edges toward the low end of the 4–6hr $140–165 band | **$109** | $38 | $81.75 | $76.30 | None. |
| Cruise & Booze | ~300 min | **Matches the verified comparable directly** — all-inclusive 4–6hr trips with open bar and snorkel run $140–165 **[V]** | **$159** | $65 (open bar alcohol cost, 2 snorkel stops, more crew time) | $119.25 | $111.30 | None — this is the one tier resting on real market evidence. |

**If Jafeth approves this**, the `priceFrom`/`priceTo` on the Tiki Boat entry
in `data.js` would become **29 / 159** (down from the current placeholder
25/150 — barely different as a range, but the real fix is publishing all four
tier prices in the copy, not just the two ends of a range).

---

## 5. Summary — what to check before approving

**Thin on GetYourGuide's 30% (verify real costs before listing there):**
Little French Key, Animal Encounters, Gumbalimba Park, Zip Line.

**Resting on an estimate rather than a verified market price (verify the
underlying number, not just the arithmetic):** Gumbalimba Park (whole band is
**[E]**), Tiki Boat's two shortest tiers (no comparable exists at all).

**Corrects an underpricing market-research already flagged:** Pigeon Cay
(floor raised from $120 to a $175 list), Little French Key (floor raised from
$65 — but see the GetYourGuide flag above), Animal Encounters (raised from
$35–45 toward the $49+ going rate), Parasailing (redefined as a standalone
$79 product rather than $90–130 unbundled from a combo).

**Correctly priced already, no change needed beyond a single-number
recommendation:** Cultural Getaways, Glass-Bottom Boat, Pristine Snorkeling,
Mangrove Tunnel.

**Left as "Ask us" on purpose:** Exclusive Yacht Tour — quote per group, do
not put it on a fixed OTA grid.

---

## What this document could not establish

1. **Your real costs.** Every "cost floor" figure above is a labelled
   estimate. Replace them and the "thin" flags may change in either
   direction.
2. **Child pricing.** Not addressed by any current `TOURS` entry; several
   competitors publish a child rate 35–45% below adult.
3. **Whether GetYourGuide's 30% default is negotiable early**, or only after
   the ~1,000-booking/year threshold market-research §3.2 cites. If it is not
   negotiable soon, the tours flagged "thin at GetYourGuide" above are the
   ones to hold off listing there until the cost floors are confirmed.
4. **Gumbalimba's and Randy's Jungles Top's actual per-guest wholesale rates**
   — both feed directly into two of the four "thin" flags above and neither
   is independently verified.

*Companion documents: `docs/market-research.md` (competitor bands and channel
commissions this document builds on) and `docs/insurance.md` (the gate that
decides whether GetYourGuide listing is even possible).*
