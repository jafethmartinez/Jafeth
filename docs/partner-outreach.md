# B2B partner outreach — Martinez East End Tours

Referral and commission partners on Roatán, with sourced contacts.
Prepared 12 September 2026. Companion to `market-research.md`.

**Nothing in this document has been sent to anyone.** It is a research list and two draft
templates for Jafeth, Oscar and Mireska to review and approve one at a time.

---

## Read this first: you are not set up to send outreach email yet

This is a prerequisite, not a footnote. **Do not send a single outreach email until this
is fixed**, because the cost of getting it wrong is losing bookings, not losing a
campaign.

### The specific risk

`info@martinezeastendtours.com` is your **booking inbox**. Per the README it is a free
Porkbun **forwarding** address, not a real mailbox. Two problems compound:

1. **Any cold-send volume from that address puts your booking mail at risk.** Providers
   judge a domain by its sending behaviour. A run of unsolicited mail that gets marked as
   spam damages the reputation of `martinezeastendtours.com` itself — and then a guest's
   genuine booking confirmation lands in Gmail's spam folder. You would never know why
   the bookings stopped.
2. **Forwarding makes it worse.** A forwarded address is for *receiving*. It is not an
   authenticated sending identity, and forwarding routinely breaks the alignment checks
   that decide whether mail is trusted.

### What a legitimate setup requires, in order

- **A separate sending domain or subdomain.** Keep `martinezeastendtours.com` for
  bookings, and send outreach from something distinct — e.g. a `partners.` subdomain or a
  separate domain. This isolates the risk: a problem on the outreach sender does not touch
  your booking mail. **[V]**
  — <https://growleads.io/blog/subdomain-for-cold-email-protect-main-domain/>,
  <https://aiemaily.com/blog/separate-domains-for-cold-email> (seen 2026-09-12)
- **SPF, DKIM and DMARC on the sending subdomain specifically.** These are no longer
  optional: major providers now hard-reject mail from domains without them, so it does not
  reach a spam folder — it is rejected outright. **Subdomains do not inherit the parent
  domain's SPF record**; each sending subdomain needs its own. Move DMARC toward
  `p=quarantine` and then `p=reject` over time. **[V]**
  — <https://www.unifygtm.com/explore/cold-email-domain-setup>,
  <https://leadhaste.com/blog/spf-dkim-dmarc-cold-email> (seen 2026-09-12)
- **A real mailbox, warmed gradually, at low volume.** A new sending domain that starts
  at volume looks exactly like a spammer. **[V]** — same sources.
- **CAN-SPAM compliance on every message.** US law permits B2B cold email without prior
  opt-in, but requires **accurate headers, a valid physical postal address, and a working
  opt-out** — and opt-outs must be honoured promptly and recorded in a suppression list. **[V]**
  — <https://leadhaste.com/blog/cold-email-compliance-laws> (seen 2026-09-12)
  Note the templates below include both the address line and the opt-out line. Do not
  remove them.

### The cheaper alternative, which is probably better

**On a small island, walking in beats email.** Most of the businesses below are a short
drive from Coxen Hole, and a concierge referral relationship is built by a person turning
up with business cards, not by a cold email from a domain nobody recognises. Oscar or
Mireska visiting six West Bay front desks in an afternoon will out-perform any email
sequence, needs no DNS records, and carries none of the deliverability risk above.

**My recommendation: treat email as the follow-up to an in-person or WhatsApp
introduction, not as the opening move.** That way you may never need the sending
infrastructure at all — and when you do, it is for people who already know you.

### Sourcing rules applied to every contact below

- Only addresses a business **publishes for inbound business enquiries** — its own contact
  page, or a business listing.
- **Nothing from a forum, social group or review site.** Nothing scraped. No guessed
  address patterns.
- Where no published address was found, the entry says **"no published contact found"**.
  I have not invented one.
- **⚠ Verification limit, which applies to every address in this document.** The research
  environment blocked direct page fetches, so each address is what a search engine
  extracted from the cited page on 12 September 2026 — I could not open the page to
  confirm it. **Open the contact page and confirm the address before you send.** A bounced
  cold email is itself a deliverability hit.

---

## 1. Hotels and resorts — West Bay, West End, Sandy Bay, Coxen Hole

The best-fit category. Your `PICKUPS` array already offers hotel pickup in "West Bay, West
End, Sandy Bay and Coxen Hole", so the pitch needs no invention: their guest asks the
front desk what to do, the front desk has someone reliable to call, and you pay for the
referral.

| Business | Area | Published contact | Source (seen 2026-09-12) |
|---|---|---|---|
| **Infinity Bay Spa & Beach Resort** | West Bay | `reservations@infinitybay.com` · +504 2407-2253 · offers concierge services | <https://www.infinitybay.com/contact> · <https://www.successfulmeetings.com/Meeting-Event-Venues/Roatan-Honduras/Convention-Hotel/Infinity-Bay-Spa-Beach-Resort-p5657754> |
| **Kimpton Grand Roatán Resort + Spa** | West Bay | `talktous@grandroatanresortandspa.com` (reservations) · `sales@grandroatanresortandspa.com` (sales) · front desk +504 2405-1001 | <https://www.grandroatanresortandspa.com/us/en/contact-us/> |
| **Mayan Princess Beach & Dive Resort** | West Bay | `reservations@mayanprincess.com` · +504 2445-5050 · toll-free 877-587-4131 · concierge services | <https://www.mayanprincesshotel.com/contact-us/> · <https://www.mayanprincess.com/> |
| **Anthony's Key Resort** | Sandy Bay | `info@anthonyskey.com` (general) · `reservations@anthonyskey.com` · `frontdesk@anthonyskey.com` · +504 2407-2244 | <https://anthonyskey.com/contact-us/> |
| **Paradise Beach Hotel / Resort & Dive Center** | West Bay | **No published email found.** Phone +504 2408-4670 · toll-free 800-407-1854. Contact page exists. | <https://www.paradisehotels.com/contact> |
| **Bananarama Dive & Beach Resort** | West Bay | **No published email found.** Phone +504 2445-5005. | <https://www.padi.com/dive-center/honduras/bananarama-resort-dive-center/> |
| **Caribe Tesoro** | West Bay | **No published contact found** in this research. | Named as a West Bay resort at <https://www.tripadvisor.com/Hotels-g944573-zff10-West_Bay_Roatan_Bay_Islands-Hotels.html> |
| **Ibagari Boutique Hotel** | West Bay | **No published contact found** in this research. | as above |
| Coxen Hole hotels | Coxen Hole | **None identified with a published business contact.** Coxen Hole is the terminal town rather than a resort strip; the accommodation there is small and largely not web-published. | — |

**Notes on this list.**

- **Sales and front-desk addresses are the right doors.** `sales@grandroatanresortandspa.com`
  is published for business enquiries and is a better target than a reservations inbox.
  `frontdesk@anthonyskey.com` is the concierge function itself.
- **Bananarama is a double opportunity.** It already sells a **West Bay beach day pass as
  a cruise excursion** through a reseller
  (<https://shoreexcursioneer.com/roatan/west-bay-beach-day.html>, seen 2026-09-12), so it
  understands cruise-day logistics and is a natural partner for a combined beach + tour
  day. Phone only — so phone, or call in.
- **Infinity Bay is already inside a competitor's product**: the Infinity Bay Beach Resort
  "Silver Package" sells at **$85 pp** including transport and beach access
  (<https://shoreexcursioneer.com/roatan/west-bay-beach-day.html>, seen 2026-09-12). That
  is both proof the model works and proof somebody got there before you.
- **Caribe Tesoro and Ibagari:** listed deliberately with nothing attached. Both are real
  West Bay properties; I could not verify a published business enquiry address. Find it on
  their own site before contacting them.

---

## 2. Dive shops, beach clubs and restaurants

These businesses field "what should we do today?" constantly and have no competing land-tour
product. A dive shop's customer is diving in the morning and idle in the afternoon.

| Business | Area | Published contact | Source (seen 2026-09-12) |
|---|---|---|---|
| **Coconut Tree Divers** | West End (Half Moon Bay) | `coconuttreedivers@gmail.com` — published for reservations by email | <https://coconuttreedivers.com/contact/> |
| **Sun Divers Roatan** | West End (Half Moon Bay) | `info@sundiversroatan.com` | <https://sundiversroatan.com/contact-us/> |
| **Native Sons Water Sports** | West End | **No published email found.** Site and PADI listing exist; one of the original Roatán dive shops (~35 years). | <https://www.roatandivingnativesons.com/> · <https://www.padi.com/dive-center/honduras/native-sons-water-sports/> |
| **Roatan Divers** | West End | **No published contact found** in this research. | <https://roatandivers.com/> |
| **Bananarama Resort & Dive Center** | West Bay | see §1 — phone only | as §1 |
| **Anthony's Key Resort dive operation** | Sandy Bay | see §1 — `info@anthonyskey.com` | as §1 |
| **Sundowners Beach Bar** | West End (Half Moon Bay) | **No published business email found.** Listed in island directories with location details only. | <https://www.roatanyp.com/restaurant-bars/sundowners-beach-bar/> · <https://roatan.network/restaurants/sundowners/> |
| **Blue Marlin** | West End | **No published business email found.** | <https://reefgliders.com/blue-marlin> |

**A caution specific to this section.** During the search, an address of the form
`xbalanqueresort@gmail.com` surfaced for a West Bay property on Tamarind Drive, but
**without a clear published source I could attribute it to**. I am not listing it as a
contact. If you want to approach that property, find the address on their own site first.

**Practical note.** Restaurants and beach bars on Roatán largely operate through Facebook
pages and phone, not published business email — which is exactly why §"the cheaper
alternative" above matters. For this whole category, **walk in with cards**. Email is the
wrong instrument.

---

## 3. Villa, Airbnb and vacation-rental managers

Property managers are the highest-leverage category per conversation: one manager
represents many villas, their guests stay a week (not 8 hours), and unlike a hotel they
have **no concierge desk** — so a reliable tour contact solves a real problem for them.

| Business | Area | Published contact | Source (seen 2026-09-12) |
|---|---|---|---|
| **Roatan Life Vacation Rentals** | Island-wide | `reservations@roatanvacationrentals.com` · (970) 300-4078 | <https://www.roatanlifevacationrentals.com/contact-us/> |
| **Roatan Property Management S.A.** | West End | **No published email found.** Phone: US 305-748-4325 · Honduras 011 (504) 2445-4117 | <https://www.roatanpropertymanagement.com/contact.htm> |
| **Roatan Life Real Estate** (same group as above rentals) | Island-wide | Contact page published; **no address surfaced.** | <https://www.roatanlife.com/contact-roatan-life/> |
| **Roatan Island Real Estate** — property management team | Island-wide | **No published contact found** in this research. | <https://roatanislandrealestate.com/meet-the-team/property-management/> |
| **Island House Roatan** | Island-wide | **No published contact found** in this research. | <https://www.islandhouseroatan.com/> |

**Individual Airbnb and Vrbo hosts: deliberately excluded.** Airbnb does not publish host
email addresses, and a host's contact details reached through a booking platform are not
"published for inbound business enquiries" — using them for outreach would breach the
platform's terms and the sourcing rules at the top of this document. The legitimate route
to individual hosts is **through the property managers above**, or by being recommended by
a guest.

**Note that Roatan Life Vacation Rentals also publishes a dining guide**
(<https://www.roatanlifevacationrentals.com/dining/>, seen 2026-09-12) — they already
curate recommendations for guests, which is precisely the slot you want to occupy.

---

## 4. Travel agents and cruise-specialist agencies

Weaker fit than hotels, and worth being clear-eyed about why: a travel agent earns
commission on the **cruise fare**, and selling a third-party shore excursion adds
liability without much revenue. Per §3.3 of `market-research.md`, agent-side commissions in
this segment run **8–12%** — small money for them, so the pitch has to be about their
client's day going well, not about their margin.

| Route | Published contact | Source (seen 2026-09-12) |
|---|---|---|
| **CLIA "Find a Travel Agent" directory** | The legitimate way to identify CLIA-certified cruise specialists. A directory, not a contact list. | <https://cruising.org/find-travel-agent> |
| **Vincent Vacations** (IATAN/CLIA/ASTA/IATA accredited, sells Carnival and Celebrity Caribbean) | Published business phone: 1 (888) 883-0460. **No supplier-partnership email found.** | <https://www.vincentvacations.com/cruise/carnival-cruise-line> |
| **Direct Line Cruises** (Caribbean specialist, advertises shore excursion discounts) | Published business phone: 1-800-352-8088. **No supplier-partnership email found.** | <https://directlinecruises.com/> |

**Important sourcing note.** The CLIA directory lists **individual agents**. Harvesting it
to cold-email named people is the pattern most likely to get you reported as spam, and it
is against the spirit of the rules above. Use it to *identify* agencies, then approach the
**agency's published business number or enquiry address**. **Phone is the right channel
for this category** — all three routes above published a phone number and none published a
partnership email.

**Realistically: rank this last.** Your effort is better spent on §1 and §3.

---

## 5. Cruise line shore-excursion procurement, and what vetting requires

### The honest position on contacts

**I found no published shore-excursion procurement or operator-application address for
Carnival, Royal Caribbean, NCL or MSC.** **[U]** These lines do not publish an operator
intake channel; onboarding runs through port agents, destination managers and existing
relationships. I am not going to guess at an address — and a guessed address at a
corporation of that size is exactly how a domain gets blocklisted.

**The doors that are actually open**, all verified (seen 2026-09-12):

| Route | Contact | Source |
|---|---|---|
| **Shore Excursioneer** — open operator registration; explicitly courts local operators in cruise ports | Operator register/login page | <https://www.shoreexcursioneer.com/operators> |
| **Venture Ashore** — vets operators "through direct relationships and industry referrals"; no open sign-up, so this needs a referral | Partners page | <https://www.ventureashore.com/partners> |
| **Shore Excursions Group** — already sells Roatán Garifuna/East End tours that overlap your Cultural Getaways | Published agent/affiliate pages; **operator net rate is not published [U]** | <https://www.shoreexcursionsgroup.com/travel-affiliates> · <https://www.shoreexcursionsgroup.com/tour/punta-gorda-and-garifuna-east-end/caropuntagord> |
| **Roatán Tourism Bureau** — the island body that publishes the weekly cruise schedule; the natural local route to port-level relationships | Organisation site | <https://roatantourismbureau.com/cruise-schedule> |

**Start with Shore Excursioneer.** It is the only one of the four with a door that opens
from the outside.

### What the vetting actually requires — and where you stand

A cruise line has a duty to conduct a reasonable background check on the operators it
recommends and sells. **[V]**
— <https://www.lawfuel.com/are-cruise-lines-liable-for-off-ship-accidents-what-every-2026-traveler-needs-to-know/>

Cruise lines will only accept operators demonstrating: **contingent general liability**
(third-party bodily injury and property damage to guests in your care, custody and
control); **contingent auto liability** (excess over local compulsory motor insurance,
covering owned, hired and non-owned vehicles); and **contingent watercraft liability**
(owned, hired and non-owned motorised craft carrying passengers for hire). The industry
position is that this cover "is not optional... because cruise lines refuse to advertise
companies that work without one". **[V]**
— <https://excursioninsurance.com/frequent-asked-questions/>,
<https://excursioninsurance.com/blog/why-you-need-tour-operator-liability-insurance-for-your-excursion> (seen 2026-09-12)

**Where you plausibly already stand:**

| Requirement | Assessment |
|---|---|
| **Return-to-ship discipline** | ✅ **Already your strongest asset.** The whole site is built on it, and the Port Time Planner is a real system, not a slogan. Competitors publish a specific buffer (1 to 1.5 hours before departure) — publish yours and you meet the bar. **[E]** |
| **Stated capacity per tour** | ✅ **Already documented.** The `group` field on every tour ("Up to 8 guests", "Up to 12", "Up to 14", "Private charter") is exactly the capacity declaration a vetting form asks for. |
| **Honest durations** | ✅ **Already a stated policy.** The README treats `minutes` as "a promise". That is the right posture for a safety review. |
| **Bilingual guides, local ownership, named team** | ✅ Three named owners, `includes` lists a bilingual guide on tours. Local ownership is a positive in this vetting, not a negative. |
| **Registered business** | ❓ **[U]** — not visible to me. Required by GetYourGuide, and assumed by every reseller. |
| **General / auto / watercraft liability insurance** | ❓ **[U] — the likely blocker, and the one to resolve first.** Six of your twelve tours involve boats and all involve vehicles, so all three cover types apply. A direct competitor already advertises "licensed & insured" on its shopfront (<https://discoverroatan.net/>, seen 2026-09-12). |
| **Online payment / prepayment** | ❌ **Not met, and it is a real gap for this category.** Cash on the day is fine for direct guests and is required by Cruise Critic roll-call rules — but resellers and cruise lines settle on account. Be upfront about it rather than discovering it in a contract. |

**Summary: you meet the operational bar and probably not the paperwork bar.** Insurance
and business registration are the two things standing between you and this entire
category — and the same two things gate GetYourGuide listing and every hotel referral
conversation in §1. It is one fix that unlocks several channels.

---

## 6. Draft outreach templates

For a **hotel or resort concierge / front desk** (§1). Review and approve each send
individually. Nothing is sent by me.

**Before you use either one:**
- Replace `[PROPERTY]` and `[NAME]` — a template sent visibly untailored reads as spam.
- Keep the **postal address** and the **opt-out line**. They are CAN-SPAM requirements,
  not decoration. **[V]** — <https://leadhaste.com/blog/cold-email-compliance-laws> (seen 2026-09-12)
- Fill in the real postal address. Do not send with a placeholder.
- Send from the **separate sending subdomain**, not from `info@martinezeastendtours.com`.
- **Decide your referral rate before you send.** "We'll discuss" invites nothing. The
  market frame from `market-research.md` §3: OTAs take 20–30%, cruise-line resellers pay
  agents 8–12%. **A 10–15% concierge referral is credible and affordable. [E]**

### Template A — intro

> **Subject:** Local tour operator in Coxen Hole — referral arrangement for [PROPERTY] guests
>
> Hi [NAME],
>
> I'm Jafeth Martinez. My brother Oscar, my sister Mireska and I run Martinez East End
> Tours — a three-person, family-owned tour operation based here on Roatán. We already
> collect guests from hotels in West Bay, West End, Sandy Bay and Coxen Hole.
>
> I'm writing because your guests ask your front desk what to do today, and I'd like to be
> a name you can give them without worrying about it.
>
> What we do: snorkelling on the barrier reef, the East End mangrove tunnels, the Garifuna
> community at Punta Gorda, Pigeon Cay, glass-bottom boat, Gumbalimba, zip line. Small
> groups — 8 to 14 people, often a single family. Bilingual guides. We're built around
> getting people back on time: our whole website is a port-time planner, because most of
> our guests are on a ship's clock and that's the thing they're actually anxious about.
>
> Being straight with you about what we are, because I'd rather you hear it from me:
> there are three of us, we don't take card payments yet, and guests pay cash or by app on
> the day of the tour. It means nothing is charged up front and no booking is ever lost to
> a failed payment — but it does mean we're a small operation, not a big one.
>
> I'd like to propose a straightforward referral arrangement: [X]% of the tour price back
> to [PROPERTY] on any guest you send us, paid however suits your accounting. No exclusivity
> asked for, no cost to you, and I'll give you a direct WhatsApp number so your desk can
> check availability in a minute rather than an afternoon.
>
> Could I drop by with some cards and introduce myself properly? I'm happy to work around
> your quiet hours.
>
> Thank you for your time,
>
> Jafeth Martinez
> Martinez East End Tours, Roatán, Bay Islands, Honduras
> WhatsApp / iMessage +1 689-287-0134 · martinezeastendtours.com
> [FULL POSTAL ADDRESS]
>
> *If you'd rather not hear from us again, reply with "no thanks" and I won't contact you
> further.*

### Template B — follow-up (send once, 7–10 days later, only if no reply)

> **Subject:** Re: Local tour operator in Coxen Hole — referral arrangement for [PROPERTY] guests
>
> Hi [NAME],
>
> Just once more in case my note got buried — no reply needed if it isn't for you.
>
> Short version: family-run tour operator here on Roatán, small groups, bilingual guides,
> built around getting guests back to their ship on time. [X]% referral back to [PROPERTY]
> on anything you send us. Nothing for you to set up, no exclusivity.
>
> If it's easier, WhatsApp me on +1 689-287-0134 and I'll come to you.
>
> Jafeth Martinez
> Martinez East End Tours, Roatán, Bay Islands, Honduras
> martinezeastendtours.com
> [FULL POSTAL ADDRESS]
>
> *Reply "no thanks" and this is the last you'll hear from me.*

**One follow-up, then stop.** A third email to a non-responder is what gets a sender
reported, and a spam report from a business in your own market costs more than the
booking was worth.

---

## Suggested order of work

1. **Resolve insurance and business registration.** **[U]** in `market-research.md` §3.6
   and §5 above. It gates §1, §3, §4 and §5 of this document.
2. **Decide your referral percentage.** 10–15% **[E]**. The templates do not work without it.
3. **Walk in, don't email.** Cards to the six West Bay and West End properties in §1 and
   §2 that have physical front desks. No infrastructure needed; highest conversion.
4. **Email the four property managers and dive shops in §2 and §3 that publish an address** —
   after confirming each address on the business's own contact page.
5. **Register with Shore Excursioneer** (§5). Free, one form, correct audience.
6. **Only if steps 3–5 justify it**, build the sending subdomain with SPF/DKIM/DMARC and
   run a low-volume sequence. Not before.

---

## Sources

All seen **12 September 2026**, all via search-engine extraction rather than direct page
retrieval — **confirm every address on the business's own contact page before sending.**

**Hotels and resorts** — <https://www.infinitybay.com/contact> ·
<https://www.successfulmeetings.com/Meeting-Event-Venues/Roatan-Honduras/Convention-Hotel/Infinity-Bay-Spa-Beach-Resort-p5657754> ·
<https://www.grandroatanresortandspa.com/us/en/contact-us/> ·
<https://www.mayanprincesshotel.com/contact-us/> · <https://www.mayanprincess.com/> ·
<https://anthonyskey.com/contact-us/> · <https://www.paradisehotels.com/contact> ·
<https://www.padi.com/dive-center/honduras/bananarama-resort-dive-center/> ·
<https://www.tripadvisor.com/Hotels-g944573-zff10-West_Bay_Roatan_Bay_Islands-Hotels.html>

**Dive shops, beach clubs, restaurants** — <https://coconuttreedivers.com/contact/> ·
<https://sundiversroatan.com/contact-us/> · <https://www.roatandivingnativesons.com/> ·
<https://www.padi.com/dive-center/honduras/native-sons-water-sports/> ·
<https://roatandivers.com/> · <https://www.roatanyp.com/restaurant-bars/sundowners-beach-bar/> ·
<https://roatan.network/restaurants/sundowners/> · <https://reefgliders.com/blue-marlin>

**Vacation rentals and property management** — <https://www.roatanlifevacationrentals.com/contact-us/> ·
<https://www.roatanlifevacationrentals.com/dining/> ·
<https://www.roatanpropertymanagement.com/contact.htm> ·
<https://www.roatanlife.com/contact-roatan-life/> ·
<https://roatanislandrealestate.com/meet-the-team/property-management/> ·
<https://www.islandhouseroatan.com/>

**Travel agents** — <https://cruising.org/find-travel-agent> ·
<https://www.cruisecritic.com/articles/finding-a-cruise-travel-agent> ·
<https://www.vincentvacations.com/cruise/carnival-cruise-line> · <https://directlinecruises.com/>

**Resellers, procurement and vetting** — <https://www.shoreexcursioneer.com/operators> ·
<https://shoreexcursioneer.com/roatan/west-bay-beach-day.html> ·
<https://www.ventureashore.com/partners> · <https://www.shoreexcursionsgroup.com/travel-affiliates> ·
<https://www.shoreexcursionsgroup.com/tour/punta-gorda-and-garifuna-east-end/caropuntagord> ·
<https://roatantourismbureau.com/cruise-schedule> ·
<https://excursioninsurance.com/frequent-asked-questions/> ·
<https://excursioninsurance.com/blog/why-you-need-tour-operator-liability-insurance-for-your-excursion> ·
<https://www.lawfuel.com/are-cruise-lines-liable-for-off-ship-accidents-what-every-2026-traveler-needs-to-know/> ·
<https://discoverroatan.net/>

**Email infrastructure and compliance** — <https://growleads.io/blog/subdomain-for-cold-email-protect-main-domain/> ·
<https://aiemaily.com/blog/separate-domains-for-cold-email> ·
<https://www.unifygtm.com/explore/cold-email-domain-setup> ·
<https://leadhaste.com/blog/spf-dkim-dmarc-cold-email> ·
<https://leadhaste.com/blog/cold-email-compliance-laws> ·
<https://saleshive.com/blog/b2b-avoid-spam-filters-email-campaigns>
