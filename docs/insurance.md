# Insurance — the gate

Prepared 14 September 2026. Insurance decides whether Viator, GetYourGuide and
cruise-line access are even possible (`docs/market-research.md` §3.6 already
established this — this document builds on that finding rather than repeating
it) and, because six of the twelve tours in `TOURS` involve boats, it is not
optional infrastructure. It is the single blocker in front of every channel
in `market-research.md` §3 that isn't Cruise Critic word-of-mouth.

## A note on how this was researched, before anything else

**The egress proxy blocked every direct page fetch attempted for this
document** — `operatorresources.viator.com` and `www.aserosainsurance.com`
both returned `EGRESS_BLOCKED` when fetched directly. This is the same
limitation `market-research.md` documented on 12 September 2026, and it
applies here too: **every figure below is what a search engine extracted from
a page, not what I read on the page myself.** That is enough to establish
which coverages are asked for and who might sell them. It is not enough to
quote a coverage limit or a premium back to an insurer or a platform as fact.
**Open the source pages yourself, and get everything below confirmed in
writing by an actual broker, before this becomes the basis of a purchase.**

Confidence tags match `market-research.md`: **[V]** verified (a specific claim
attributed to a named source, with URL and date seen), **[E]** my inference,
**[U]** looked for it and could not confirm it.

---

## 1. What the OTAs and cruise lines actually require

### Viator

- Viator requires public liability insurance (PLI) for "high-risk" products,
  explicitly defined to include **any product involving transportation by air
  or water** — which is six of your twelve tours. PLI is "strongly
  encouraged" for every product type, high-risk or not. **[V]** —
  <https://operatorresources.viator.com/experience-host-compliance-licensing-liability-insurance/>
  (seen via search extraction, 2026-09-14; direct fetch blocked, see note above)
- **One secondary source cites a specific figure — USD $3 million per claim
  and in the aggregate per year** — but Viator's own supplier-facing page, as
  extracted, does not publish a minimum coverage number itself. **[U] for the
  exact figure; treat $3M as a plausible but unconfirmed number, not a
  contractual fact.** —
  <https://www.sigtn.com/utils/ghf.cfm?ft=0A4302F8> (seen 2026-09-14)

### GetYourGuide

- Requires general liability insurance "for an appropriate value in light of
  the nature of the services" — no flat minimum published for general
  liability. **[V]** —
  <https://www.getyourguide.com/c/supplier-terms-and-conditions/>,
  <https://supply.getyourguide.support/hc/en-us/articles/13980980265373-Safety-Ethical-and-Legal-Standards-at-GetYourGuide>
  (seen 2026-09-14) — corroborates market-research §3.2's finding that
  GetYourGuide requires liability insurance and a registered business to list
  at all.
- Where a specific number does exist, it is for **auto liability in the US,
  Canada and Australia: not less than US$1 million combined single limit per
  accident**, with GetYourGuide named as an additional insured. **[V]** — same
  sources, seen 2026-09-14. **Whether this specific figure or process extends
  to a Honduran supplier is [U]** — the published detail is US/Canada/
  Australia-specific; nothing found states the equivalent requirement for
  operators based elsewhere.
- The policy must be **primary and non-contributory**, extend to cover
  GetYourGuide's indemnification, and be **maintained for at least two years
  after the last booking is fulfilled** — a tail requirement, not just a
  point-in-time certificate. **[V]** — same sources.

### Cruise lines directly (Carnival, Royal Caribbean)

- Royal Caribbean states its shore excursions are offered by **insured tour
  operators acting as independent contractors**, and publishes a formal Tour
  Operator Agreement. **[V]** —
  <https://www.royalcaribbeangroup.com/generalterms/tour-operator/>,
  <https://www.royalcaribbean.com/gbr/en/faq/questions/are-shore-excursions-offered-by-insured-tour-operators>
  (seen 2026-09-14). **Neither page, as extracted, states a specific coverage
  figure. [U]**
- Carnival's shore-excursion vendor pages confirm the general requirement to
  carry insurance but likewise do not publish coverage limits in what search
  extraction surfaced. **[V] for the requirement existing, [U] for numbers** —
  <https://www.carnival.com/shore-excursions> (seen 2026-09-14)
- This matches, and does not add a new number beyond, the three-part
  structure `market-research.md` §3.6 already established: **contingent
  general liability, contingent auto liability, and contingent watercraft
  liability** — cover that responds *in addition to* whatever the operator's
  own primary policies pay, specifically because the cruise line is being
  sued as a co-defendant, not because the operator's cover is inadequate on
  its own. **[V, already cited there]** —
  <https://excursioninsurance.com/frequent-asked-questions/> (seen 2026-09-12
  in market-research; re-confirmed via the same search-extraction method
  2026-09-14).

### General industry baseline, for context only — not Honduras-specific

- US industry guidance generally treats **$1 million per occurrence / $2
  million aggregate** as the standard minimum for low-risk tours (walking,
  food, sightseeing), rising sharply for higher-risk or watercraft-involved
  operations. **[V, US baseline]** —
  <https://www.insureon.com/entertainment-recreation-business-insurance/tour-operators>,
  <https://gondola.travel/tour-operator-insurance/>,
  <https://atlasperk.com/guides/operations-compliance-for-travel/tour-operator-insurance/>
  (seen 2026-09-14). **This is a US figure, offered only as a sense of scale.
  No Honduras-specific minimum was found — see §3.**

---

## 2. Who writes this cover in or for Honduras, and rough cost

### A Roatán-based broker

- **ASEROSA** is a licensed insurance brokerage based in Roatán/the Bay
  Islands that, per search extraction, serves "hotels, restaurants, dive
  shops and tourism operators" with business insurance. **[V, from search
  snippet only — the page itself was blocked on direct fetch, see the note at
  the top]** — <https://www.aserosainsurance.com/> (seen 2026-09-14). **No
  pricing surfaced.** This is the single most directly relevant lead in this
  document and the first phone call to make.

### National Honduran insurers

- **MAPFRE Honduras** sells a "seguro de responsabilidad civil" (general
  liability) line and a separate "seguro de transportes" (transport/cargo)
  line, both regulated products in-country. **[V]** —
  <https://www.mapfre.com.hn/seguros-danos/responsabilidad-civil/>,
  <https://www.mapfre.com.hn/seguros-danos/transportes/> (seen 2026-09-14).
  Nothing found is specific to tour operators or watercraft; would need a
  direct enquiry to confirm applicability.
- **Ficohsa Seguros** sells a general "seguros de daños" (property/casualty)
  line. **[V]** — <https://www.ficohsaseguros.hn/seguros-danos> (seen
  2026-09-14). Same caveat — no tour-operator-specific product surfaced.
- **Seguros Atlántida** issues auto policies in Honduras (conditions document
  found), and boat/yacht insurance specifically for Honduras is sold through
  a dedicated broker, **honduras-boat-insurance.com**. **[V]** —
  <https://segurosatlantida.com/pdf/condiciones-generales-poliza-autos-condicionado.pdf>,
  <https://www.honduras-boat-insurance.com/es/> (seen 2026-09-14). The
  boat-insurance broker page states boat insurance is effectively mandatory
  at most Honduran ports and marinas because of legal liability exposure, and
  covers everything from motor yachts to jet skis. **[V]** — same source.
- **No premium figure in lempiras or dollars was found for any of these,
  for a Honduran tour operator, from any of these four.** **[U]** — every
  one of them requires a direct quote request.

### A cruise-specific route that may fit better than a local generalist

- **excursioninsurance.com** sells specifically to tour operators who need to
  qualify for the cruise lines' own "Tour Operators Gateway" vetting system,
  underwritten through **Lloyd's of London**, which writes in **over 200
  countries and territories** — i.e., this product is built for exactly the
  worldwide-jurisdiction requirement cruise lines and OTAs ask for, rather
  than for a single country's domestic market. **[V]** —
  <https://excursioninsurance.com/tour-operating-insurance-company/>,
  <https://excursioninsurance.com/frequent-asked-questions/> (seen 2026-09-14)
- It bundles the three coverages cruise lines ask for — **contingent general
  liability, contingent auto liability, and contingent watercraft
  liability** — in one policy, with quotes obtained online. **[V]** — same
  sources, plus <https://excursioninsurance.com/get-a-quote> (seen 2026-09-14)
- **Whether Honduras specifically is within their underwriting appetite is
  [U] — not stated in what search extraction surfaced.** This needs a direct
  quote request to confirm, not an assumption from "200+ countries."
- **No specific premium figure for a Honduran or Central American operator
  was found.** **[U]**

### Rough annual cost — US baseline only, flagged clearly as not Honduras-specific

- General liability for a **low-risk** US tour operator (walking, food):
  roughly **$500–$1,200/year** for ~$1M coverage. A commonly cited blended
  average across risk levels is **$350–$700/year per $1M**. **[V, US
  baseline]** — <https://www.xola.com/articles/tour-operator-insurance/>,
  <https://gondola.travel/tour-operator-insurance/> (seen 2026-09-14)
- **Higher-risk/extreme-sports US operators: $10,000–$25,000+/year.** **[V, US
  baseline]** — same sources.
- **Standard general liability policies commonly exclude or sharply limit
  water-based activity**, meaning watercraft needs its own endorsement or a
  separate policy on top of the above, not included in it. **[V, US
  baseline]** — same sources.
- **None of this is a Honduras figure.** Local premiums, driven by a
  different insurance market, currency, and regulatory regime, could be lower
  or higher than the US numbers above — nobody should plan a budget from
  them. **[E] — flagged, not asserted.** The only way to close this gap is a
  direct quote from ASEROSA, a national Honduran insurer, or
  excursioninsurance.com.

---

## 3. What Honduran law requires, independent of any OTA or cruise line

### Business/tourism registration

- Honduras requires tourism service providers to register in the **Registro
  Nacional de Turismo (RNT)**, administered by the **Instituto Hondureño de
  Turismo (IHT)** under Decreto 193-93, in order to legally operate. **[V]** —
  <https://portalunico.iaip.gob.hn/360/64/>,
  <https://tramites.diger.gob.hn/landingPage/DetalleTramite/1134> (seen via
  search extraction, 2026-09-14; direct fetch of the tramites.diger.gob.hn
  page was blocked, see the note at the top)
- Partial requirements found: an operating permit, the company's RTN (tax
  ID), payment of a registration fee, and — for operators not affiliated with
  IATA — three letters of recommendation from businesses previously worked
  with. Processing takes roughly **10–14 business days**. **[V, partial list
  only]** — same sources.
- **Whether RNT registration itself requires proof of liability insurance is
  [U].** Nothing found in the search-extracted material states this either
  way. This is worth asking IHT or CANATURH directly — it may be that
  insurance is required for the boats (see below) but not for the tourism
  registration itself.
- **CANATURH** (Cámara Nacional de Turismo de Honduras), a trade chamber
  separate from IHT, also has its own registration/renewal process requiring
  an operating permit, RTN and fee. **[V, partial]** —
  <http://canaturh.org/como-registrarte-3/>,
  <https://ipg.hn/servicios/registro-nacional-de-turismo/> (seen 2026-09-14)

### Boats — a separate, mandatory requirement independent of any OTA

- Honduras's maritime authority, the **Dirección General de la Marina
  Mercante (DGMM)**, operates through local **Capitanías de Puerto** (Port
  Captain offices). Small vessels must go through a **"Registro de
  Embarcaciones Menores"** (small-vessel registration) process. **[V]** —
  <https://marinamercante.gob.hn/analisis-y-control-maritimo/capitanias-de-puerto/registro-de-embarcaciones-menores/>,
  <https://marinamercante.gob.hn/analisis-y-control-maritimo/capitanias-de-puerto/>
  (seen 2026-09-14)
- Per Honduras's Maritime Transport Regulations, as extracted: **vessels
  dedicated to passenger transport must carry third-party civil liability
  insurance and pass a Port Captain inspection.** **[V]** — same sources.
  **This is a legal requirement that exists whether or not you ever list on
  an OTA** — it applies to the six boat-involved tours in `TOURS`
  (Little French Key, Pigeon Cay, Pristine Snorkeling, Glass-Bottom Boat,
  Mangrove Tunnel, Tiki Boat) regardless of any commercial ambition.
- **The exact policy minimums this Honduran requirement sets are [U]** — not
  found in what search extraction surfaced. Ask the Roatán Capitanía de
  Puerto directly what limit they require to pass inspection.

### Captain/crew certification

- DGMM issues **"Patrón de Lancha"** licenses for small vessels (a request
  category specifically for vessels under 5 Gross Register Tons), through
  the Port Captain process. **[V]** —
  <https://marinamercante.gob.hn/analisis-y-control-maritimo/capitanias-de-puerto/>
  (seen 2026-09-14)
- More generally, Honduran mariner/officer certification follows the
  international **STCW 78** convention, delivered domestically through the
  **Escuela Marítima Centroamericana (EMCA)** at Omoa. **[V]** —
  <https://marinamercante.gob.hn/gente-de-mar/emca-omoa/>,
  <https://marinamercante.gob.hn/gente-de-mar/servicios-de-titulacion-de-gente-de-mar/>
  (seen 2026-09-14)
- **Course length, fees, and whether Roatán's small tourist-panga and
  glass-bottom-boat captains typically hold this credential are all [U].**
  Not found. Ask the Roatán Capitanía de Puerto directly which certificate
  each of your boat operators currently holds, and whether it is current.

### Vehicles

- **Honduras appears not to operate a mandatory nationwide auto-liability
  insurance scheme** (no equivalent of the SOAT systems used elsewhere in
  Latin America) — commercial and personal auto policies are sold voluntarily
  and regulated through the **Comisión Nacional de Bancos y Seguros
  (CNBS)**. **[E] — this is a "did not find evidence it exists" conclusion
  from search extraction, not a confirmed negative. Treat it as a strong
  lead, not a fact, and confirm with a broker.** —
  <https://registrospublicos.cnbs.gob.hn/Polizas/Home/Download/2951?FileName=1+Condiciones+Generales+Seguro+Automoviles.pdf>
  (seen 2026-09-14)
- **The practical consequence, if this holds up: nothing in Honduran law
  automatically gives you the auto liability that Viator, GetYourGuide and
  the cruise lines all ask for.** It has to be bought deliberately, on top of
  whatever registration the vehicle itself requires — it is not a byproduct
  of owning or registering a van.

---

## 4. Whether the existing setup plausibly covers any of this

**I have no visibility into what Jafeth, Oscar or Mireska currently hold.**
Nothing in the repository states it, and nothing about insurance is public
information to search for. **This entire section is a checklist, not a
finding — do not read anything below as a claim about current coverage.**

1. **Ask, plainly: do we currently have any liability, auto, or boat
   insurance policy, with which company, and what does the policy schedule
   actually list as covered** — limits, named perils, and geographic/
   activity scope? A certificate of insurance is not the same document as the
   policy schedule; get the schedule.
2. **If a policy exists, check it explicitly excludes nothing you need.**
   Personal auto and personal boat policies routinely exclude "carriage of
   passengers for hire" — a policy that covers Oscar driving his own truck
   does not automatically cover Oscar driving a van full of paying cruise
   guests.
3. **Confirm every boat actually used is individually named on any marine
   policy.** A policy naming one boat does not extend to a different boat
   borrowed, rented or newly acquired.
4. **Ask IHT or CANATURH's regional office directly (Bay Islands/Roatán)**
   whether the business's RNT registration is current, and whether proof of
   insurance was requested or checked as part of that registration.
5. **Ask the Roatán Capitanía de Puerto directly, for each boat used:** is it
   currently registered under "Registro de Embarcaciones Menores," does it
   have a current safety inspection on file, and does the operating captain
   hold a valid Patrón de Lancha (or higher) certificate.
6. **Get quotes in parallel from ASEROSA (the Roatán-based broker) and from
   excursioninsurance.com**, and compare them side by side. These may turn
   out to be two different, complementary policies rather than one policy
   doing both jobs: a Honduran-admitted policy that IHT/DGMM will recognise
   for local legal compliance, and a Lloyd's worldwide-jurisdiction policy
   that OTAs and cruise lines specifically ask to see. Ask both brokers
   explicitly whether one policy can do both jobs before assuming it can't.
7. **Before signing anything, get it in writing that the policy can name
   GetYourGuide ("GYG Parties") as an additional insured** if and when that
   listing goes ahead — this is a specific contractual requirement (§1
   above), not something every liability policy does automatically.

---

## 5. Recommendations, ranked

1. **Call ASEROSA first.** It is the only Roatán-based, tourism-sector-aware
   broker found, and the first question to ask is simple: "we run six boat
   tours and six land tours off Isla Tropicale and Coxen Hole cruise
   passengers — what do we need, and what does it cost?"
2. **In the same week, request a quote from excursioninsurance.com.** It is
   purpose-built for the exact three-part cover (general liability, auto,
   watercraft) that gates GetYourGuide and every cruise-line relationship —
   confirm whether Honduras is within their appetite as part of the quote
   request itself.
3. **Ask the Roatán Capitanía de Puerto, in person, what each boat and each
   captain currently has on file.** This is the one piece of this document
   that is a matter of public record at a specific local office, not a search
   engine question, and it resolves several **[U]** items above in one visit.
4. **Do not list on GetYourGuide, and do not represent the business as
   "licensed and insured" in marketing** (a claim at least one competitor
   already makes, per `market-research.md` §4.1) **until §4 above is
   answered.** A false claim there is a worse outcome than no claim at all.
5. **Once real cover is confirmed, revisit `docs/pricing.md`** — several
   recommended prices there assume the business can legally and financially
   sustain OTA listing at all; that assumption is only as good as this
   document's open questions being closed.

---

## What this document could not establish

1. **Specific coverage minimums Viator, Carnival or Royal Caribbean actually
   require** beyond the three-part structure (general/auto/watercraft
   liability) — none of their pages, as extracted, publish a number. **[U]**
2. **Whether Honduras is within excursioninsurance.com's (Lloyd's) writing
   appetite.** **[U]**
3. **Any premium figure specific to Honduras**, from any insurer named here.
   **[U]** — every cost figure in this document is a US baseline offered only
   for scale.
4. **Whether Honduran law requires liability insurance as part of RNT
   tourism registration itself**, as distinct from the boat-specific
   requirement that clearly does exist. **[U]**
5. **The exact minimum liability limit the Roatán Capitanía de Puerto
   requires to pass a vessel inspection.** **[U]**
6. **What Jafeth, Oscar and Mireska currently hold.** **[U] by definition —
   not researchable, only askable.** See the checklist in §4.

*Companion documents: `docs/market-research.md` §3.6 (why insurance gates
channel access) and `docs/pricing.md` (the price recommendations that assume
this gate gets resolved).*
