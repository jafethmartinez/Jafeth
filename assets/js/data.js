/* =====================================================================
   SITE CONFIG  —  ✏️  EDIT THIS BLOCK FIRST
   Everything below (business name, phone, email) appears across the
   whole site. Change it here once and every page updates.
   ===================================================================== */
const SITE = {
  name: "Explore Roatán",                    // ✏️ your business name (from your Wix draft)
  tagline: "Shore excursions run by locals who live here",
  // ✏️ WhatsApp number in international format, digits only, no + or spaces.
  //    Honduras country code is 504. Example: 50412345678
  whatsapp: "50400000000",
  phone: "+504 0000-0000",                  // ✏️ display phone
  email: "bookings@yourdomain.com",         // ✏️ your booking inbox
  base: "Roatán, Bay Islands, Honduras",
  // ✏️ Set to your real links, or leave "" to hide the icon
  facebook: "",
  instagram: "",
  tripadvisor: ""
};

/* =====================================================================
   PORTS & PICKUP POINTS
   ===================================================================== */
const PICKUPS = [
  { id: "mahogany", label: "Mahogany Bay Cruise Center", note: "We meet you just past the welcome center, outside the port gate." },
  { id: "coxen",    label: "Port of Roatán (Coxen Hole)", note: "We meet you at the taxi plaza, immediately outside the terminal." },
  { id: "hotel",    label: "Hotel / resort pickup",       note: "West Bay, West End, Sandy Bay and Coxen Hole hotels included." },
  { id: "airport",  label: "Roatán Airport (RTB)",        note: "Ideal if you're flying in for the week." }
];

/* =====================================================================
   TOURS
   ---------------------------------------------------------------------
   ✏️  To add a tour: copy any block below and change the fields.
   ✏️  To remove one: delete its block.
   ✏️  To hide one temporarily without deleting: set  active: false

   FIELD NOTES
     id          unique short name, lowercase, used in the page URL
     minutes     total door-to-door time. This is what the Port Time
                 Planner uses to decide if a guest can make it back
                 to their ship — keep it honest.
     price       price PER ADULT in USD
     kids        price per child (under 12), or null if not offered
     art         picks the illustration: reef | beach | jungle |
                 adventure | wildlife | boat | culture
     photo       optional. Drop a photo in assets/img/ and put the
                 filename here, e.g. "west-bay.jpg". Leave "" to use
                 the built-in illustration instead.
   ===================================================================== */
const TOURS = [
  {
    id: "west-bay-beach",
    active: true,
    name: "West Bay Beach & Reef Snorkel",
    tagline: "The postcard beach, plus the reef that starts 30 metres offshore",
    category: "Beach",
    art: "beach",
    photo: "",
    minutes: 240,
    price: 55, kids: 35,
    group: "Up to 12 guests",
    blurb: "West Bay is the beach people picture when they picture Roatán — white sand, calm turquoise water, and a living coral reef close enough to swim to. We handle the transport, set you up with a shaded lounger, and put you in the water at the best entry point.",
    highlights: [
      "Round-trip transport from your ship or hotel",
      "Reserved beach loungers and umbrella",
      "Snorkel gear and vest included",
      "Guided swim out to the reef wall",
      "Time to eat and swim on your own schedule"
    ],
    includes: ["Air-conditioned transport", "Snorkel mask, fins and vest", "Beach chair + umbrella", "Bilingual guide", "Bottled water"],
    excludes: ["Food and drinks", "Gratuities"],
    bring: ["Reef-safe sunscreen", "Towel", "Cash for lunch", "Water shoes if you have them"],
    itinerary: [
      "Meet your guide at the port gate",
      "40-minute scenic drive across the island to West Bay",
      "Snorkel briefing and guided reef swim",
      "Free time to swim, eat and relax",
      "Return transfer with time to spare before all-aboard"
    ],
    good: ["First-time visitors", "Families", "Guests who want beach + reef in one stop"]
  },
  {
    id: "gumbalimba-park",
    active: true,
    name: "Gumbalimba Park: Monkeys, Sloths & Beach",
    tagline: "Capuchins on your shoulder, then straight to the sand",
    category: "Wildlife",
    art: "wildlife",
    photo: "",
    minutes: 300,
    price: 79, kids: 55,
    group: "Up to 14 guests",
    blurb: "Gumbalimba is Roatán's best-known animal park — a shaded jungle trail where capuchin monkeys will happily sit on your shoulder, plus sloths, scarlet macaws and a walk through the botanical grounds. We pair it with beach time so you get the island's two headline experiences in one outing.",
    highlights: [
      "Hands-on capuchin monkey encounter",
      "Sloth and macaw encounters with a park naturalist",
      "Jungle botanical trail and pirate history exhibit",
      "Beach time on the park's private beach",
      "Photos taken by your guide throughout"
    ],
    includes: ["Park admission", "Round-trip transport", "Naturalist guide", "Beach access", "Bottled water"],
    excludes: ["Lunch", "Park photo package", "Gratuities"],
    bring: ["Camera", "Reef-safe sunscreen", "Insect repellent", "Cash for lunch"],
    itinerary: [
      "Pickup at your ship or hotel",
      "Drive to the park through the island's west end",
      "Guided animal encounters — monkeys, sloths, macaws",
      "Botanical trail walk",
      "Beach and swim time",
      "Return transfer"
    ],
    good: ["Families with kids", "Photographers", "Anyone who wants wildlife without a hike"]
  },
  {
    id: "reef-snorkel-boat",
    active: true,
    name: "Two-Stop Reef Snorkel by Boat",
    tagline: "Off the beach and out onto the Mesoamerican Barrier Reef",
    category: "Water",
    art: "reef",
    photo: "",
    minutes: 180,
    price: 65, kids: 45,
    group: "Up to 10 guests",
    blurb: "Roatán sits on the Mesoamerican Barrier Reef — the second largest reef system on the planet. This trip takes you by boat to two different sites away from the crowded beach entries, where the coral is healthier and the fish are used to snorkelers rather than swimmers.",
    highlights: [
      "Two distinct reef sites in one trip",
      "In-water guide who points out what you're looking at",
      "Small boat, small group",
      "Fresh fruit and water aboard",
      "Non-swimmers supported with flotation vests"
    ],
    includes: ["Boat and captain", "In-water snorkel guide", "Mask, snorkel, fins, vest", "Fruit and water"],
    excludes: ["Underwater camera rental", "Gratuities"],
    bring: ["Reef-safe sunscreen only", "Towel", "Motion sickness tablets if you're prone"],
    itinerary: [
      "Meet at the dock",
      "Safety and snorkel briefing",
      "Reef site one — shallow coral garden",
      "Surface break, fruit and water",
      "Reef site two — reef wall drop-off",
      "Return to dock"
    ],
    good: ["Short port days", "Confident and nervous swimmers alike", "Reef lovers"]
  },
  {
    id: "two-tank-dive",
    active: true,
    name: "Certified Two-Tank Dive",
    tagline: "Wall dives and swim-throughs for certified divers",
    category: "Water",
    art: "reef",
    photo: "",
    minutes: 270,
    price: 145, kids: null,
    group: "Up to 6 divers",
    blurb: "Roatán is one of the most affordable world-class dive destinations anywhere, with steep walls, canyons and swim-throughs a short boat ride from shore. Two tanks, two sites, guided by a local divemaster who knows which sites are working that morning.",
    highlights: [
      "Two guided boat dives",
      "Wall, canyon and swim-through sites",
      "Divemaster-led small groups",
      "Full rental gear available",
      "Nitrox available on request"
    ],
    includes: ["Two tanks and weights", "Divemaster guide", "Boat and captain", "Water and fruit"],
    excludes: ["Full gear rental", "Nitrox surcharge", "Gratuities"],
    bring: ["Certification card (required)", "Logbook", "Your own mask if you prefer"],
    itinerary: [
      "Dock check-in and gear fitting",
      "Boat ride to first site",
      "Dive one with divemaster",
      "Surface interval — water and fruit",
      "Dive two at a second site",
      "Return to dock"
    ],
    good: ["Certified divers only", "Guests with a longer port day"],
    note: "A current open-water certification is required. Diving is not recommended within 18 hours of a flight."
  },
  {
    id: "zipline-beach",
    active: true,
    name: "Jungle Zip Line + Beach Break",
    tagline: "Canopy lines over the jungle, then cool off in the sea",
    category: "Adventure",
    art: "adventure",
    photo: "",
    minutes: 240,
    price: 85, kids: 60,
    group: "Up to 12 guests",
    blurb: "A full canopy circuit through the hills above West Bay — multiple lines, platforms in the treetops, and views out over the reef between runs. Once you're back on the ground we take you down to the beach to swim it off.",
    highlights: [
      "Multi-line canopy course with certified guides",
      "Treetop platforms with reef views",
      "All safety gear and briefing included",
      "Beach and swim time afterward",
      "Round-trip transport"
    ],
    includes: ["Zip line circuit", "Harness, helmet and gloves", "Certified guides", "Beach access", "Transport"],
    excludes: ["Food and drinks", "Photo package", "Gratuities"],
    bring: ["Closed-toe shoes (required)", "Swimsuit under clothes", "Sunscreen"],
    itinerary: [
      "Pickup at your ship or hotel",
      "Drive to the canopy course",
      "Safety briefing and gear fitting",
      "Zip line circuit with your guides",
      "Transfer to the beach for swim time",
      "Return transfer"
    ],
    good: ["Active guests", "Teens and older kids", "First-time zipliners"],
    note: "Weight and age limits apply. Closed-toe shoes are required — no sandals on the course."
  },
  {
    id: "little-french-key",
    active: true,
    name: "Little French Key Island Day",
    tagline: "A private island day pass with lunch and rescued wildlife",
    category: "Beach",
    art: "beach",
    photo: "",
    minutes: 360,
    price: 129, kids: 79,
    group: "Any group size",
    blurb: "A small private island off Roatán's east end, reached by a short boat hop. Calm swimming coves, hammocks over the water, kayaks and paddleboards, a rescued-animal sanctuary on site, and a proper sit-down lunch. This is the one to pick when you want a full, unhurried day.",
    highlights: [
      "Private island access with day pass",
      "Lunch included",
      "Kayaks, paddleboards and snorkel gear",
      "Rescued animal sanctuary on the island",
      "Overwater hammocks and shaded cabanas"
    ],
    includes: ["Island day pass", "Boat transfer to the island", "Lunch", "Kayaks and paddleboards", "Round-trip ground transport"],
    excludes: ["Drinks", "Spa treatments", "Gratuities"],
    bring: ["Swimsuit", "Towel", "Reef-safe sunscreen", "Cash for drinks"],
    itinerary: [
      "Pickup at your ship or hotel",
      "Drive to the east end boat dock",
      "Short boat crossing to the island",
      "Free time — swim, kayak, snorkel, hammocks",
      "Lunch",
      "Boat and ground transfer back"
    ],
    good: ["Longer port days", "Couples", "Groups who want everything in one place"]
  },
  {
    id: "dolphin-encounter",
    active: true,
    name: "Dolphin Encounter at Sandy Bay",
    tagline: "Meet the dolphins at the island's marine science institute",
    category: "Wildlife",
    art: "wildlife",
    photo: "",
    minutes: 210,
    price: 119, kids: 89,
    group: "Up to 10 guests",
    blurb: "The Roatán Institute for Marine Sciences at Sandy Bay runs a long-established bottlenose dolphin programme alongside its research and education work. A trainer introduces you to the animals in a shallow natural lagoon and explains the research the institute does on the surrounding reef.",
    highlights: [
      "Shallow-water encounter with trainers",
      "Marine science briefing from institute staff",
      "Natural seawater lagoon setting",
      "Time at Sandy Bay beach afterward",
      "Round-trip transport"
    ],
    includes: ["Encounter admission", "Trainer-led session", "Transport", "Beach time"],
    excludes: ["Photo package", "Lunch", "Gratuities"],
    bring: ["Swimsuit", "Towel", "Reef-safe sunscreen"],
    itinerary: [
      "Pickup at your ship or hotel",
      "Drive to Sandy Bay",
      "Check-in and marine briefing",
      "Dolphin encounter session",
      "Beach time",
      "Return transfer"
    ],
    good: ["Families", "Animal lovers", "Mid-length port days"]
  },
  {
    id: "island-highlights",
    active: true,
    name: "Island Highlights & Garifuna Punta Gorda",
    tagline: "The island as islanders know it, east end to west",
    category: "Culture",
    art: "culture",
    photo: "",
    minutes: 300,
    price: 69, kids: 45,
    group: "Up to 14 guests",
    blurb: "Most visitors see one beach and go home. This tour crosses the island — through Coxen Hole and the hillside neighbourhoods, up to the lookout points, and east to Punta Gorda, the oldest Garifuna community in Honduras, founded in 1797. You'll hear the island's history from someone whose family lived it.",
    highlights: [
      "Punta Gorda Garifuna community visit",
      "Island lookout points and photo stops",
      "Local market and craft stop",
      "History of the Bay Islands from a local guide",
      "Traditional food tasting"
    ],
    includes: ["Round-trip transport", "Bilingual local guide", "Community visit", "Food tasting", "Water"],
    excludes: ["Full lunch", "Craft purchases", "Gratuities"],
    bring: ["Camera", "Cash for crafts", "Comfortable walking shoes"],
    itinerary: [
      "Pickup at your ship or hotel",
      "Drive through Coxen Hole with commentary",
      "Island lookout and photo stop",
      "Punta Gorda — Garifuna community and culture",
      "Food tasting and craft stop",
      "Return transfer"
    ],
    good: ["Repeat visitors", "Culture and history travellers", "Non-swimmers"]
  },
  {
    id: "glass-bottom-iguana",
    active: true,
    name: "Glass Bottom Boat & Iguana Farm",
    tagline: "See the reef without getting wet, then feed the iguanas",
    category: "Family",
    art: "boat",
    photo: "",
    minutes: 180,
    price: 59, kids: 39,
    group: "Up to 16 guests",
    blurb: "Built for guests who'd rather stay dry — a glass bottom boat over the reef with a guide narrating what's passing underneath, followed by the iguana farm at French Cay where hundreds of free-roaming iguanas come to be fed. Easy pace, minimal walking, great with grandparents and small children.",
    highlights: [
      "Glass bottom boat over living reef",
      "Guide narration throughout",
      "Hundreds of free-roaming iguanas",
      "Hand-feeding opportunity",
      "Minimal walking, no swimming required"
    ],
    includes: ["Glass bottom boat trip", "Iguana farm admission", "Iguana feed", "Transport", "Guide"],
    excludes: ["Food and drinks", "Gratuities"],
    bring: ["Camera", "Hat", "Sunscreen"],
    itinerary: [
      "Pickup at your ship or hotel",
      "Board the glass bottom boat",
      "Guided reef viewing",
      "Transfer to the iguana farm",
      "Iguana feeding and free time",
      "Return transfer"
    ],
    good: ["Non-swimmers", "Grandparents and young kids", "Short port days"]
  },
  {
    id: "atv-adventure",
    active: true,
    name: "ATV Jungle & Coast Ride",
    tagline: "Ridge trails, mud, and a beach stop at the end",
    category: "Adventure",
    art: "adventure",
    photo: "",
    minutes: 210,
    price: 99, kids: null,
    group: "Up to 8 machines",
    blurb: "Single and double ATVs on the trails behind the island's north shore — jungle track, ridge climbs with views across to the mainland on a clear day, and a finish at a quiet beach for a swim before you head back.",
    highlights: [
      "Guided ATV trail ride",
      "Ridge-top viewpoint stop",
      "Single or double machines",
      "Beach swim stop",
      "Full safety briefing and gear"
    ],
    includes: ["ATV rental", "Helmet and goggles", "Trail guide", "Fuel", "Beach stop"],
    excludes: ["Damage deposit", "Food and drinks", "Gratuities"],
    bring: ["Closed-toe shoes", "Clothes you don't mind getting muddy", "Driver's licence"],
    itinerary: [
      "Pickup at your ship or hotel",
      "Safety briefing and machine assignment",
      "Guided jungle trail ride",
      "Ridge viewpoint stop",
      "Beach swim stop",
      "Return transfer"
    ],
    good: ["Adventurous guests", "Couples", "Small groups of friends"],
    note: "Drivers must be 18+ with a valid licence. Passengers 8+ on double machines."
  },
  {
    id: "botanical-sunset",
    active: true,
    name: "Carambola Gardens Hike & West End Sunset",
    tagline: "A shaded jungle climb, then the island's best sunset",
    category: "Nature",
    art: "jungle",
    photo: "",
    minutes: 240,
    price: 65, kids: 40,
    group: "Up to 12 guests",
    blurb: "Carambola Botanical Gardens climbs the hillside opposite Sandy Bay — orchids, hardwoods, iguana rock and a lookout over Anthony's Key and the reef. We finish in West End for the sunset and time to walk the beach road.",
    highlights: [
      "Guided botanical garden walk",
      "Hillside lookout over the reef",
      "Orchid and hardwood collections",
      "Free time in West End village",
      "Sunset over the water"
    ],
    includes: ["Garden admission", "Naturalist guide", "Transport", "Water"],
    excludes: ["Food and drinks", "Gratuities"],
    bring: ["Walking shoes", "Insect repellent", "Camera", "Cash for West End"],
    itinerary: [
      "Pickup at your hotel",
      "Drive to Carambola Gardens",
      "Guided garden walk and lookout climb",
      "Transfer to West End",
      "Free time and sunset",
      "Return transfer"
    ],
    good: ["Hotel guests staying on-island", "Nature and photography lovers", "Evening availability"],
    note: "Best suited to guests staying on the island — the sunset timing falls after most ships' all-aboard."
  },
  {
    id: "private-custom",
    active: true,
    name: "Private Island Tour — Build Your Own",
    tagline: "Your own guide and vehicle, your own itinerary",
    category: "Private",
    art: "culture",
    photo: "",
    minutes: 300,
    price: 0, kids: null,
    priceNote: "Quoted per group — tell us your plan and we'll price it",
    group: "1–6 guests, private",
    blurb: "Tell us what you want to see and how long you have, and we'll build the day around it. Popular combinations are beach plus monkeys, or reef snorkel plus island history. Private vehicle, private guide, no other guests, and we build the schedule backwards from your all-aboard time.",
    highlights: [
      "Private vehicle and guide for your group only",
      "Itinerary built around your interests",
      "Flexible start and finish times",
      "Ideal for families and mobility needs",
      "Schedule planned around your ship"
    ],
    includes: ["Private air-conditioned vehicle", "Private bilingual guide", "Fuel and parking", "Bottled water"],
    excludes: ["Attraction admissions", "Food and drinks", "Gratuities"],
    bring: ["Whatever your chosen activities need — we'll tell you when we confirm"],
    itinerary: [
      "We contact you before your visit to plan the day",
      "Pickup at your ship, hotel or the airport",
      "Your chosen stops, at your pace",
      "Return with buffer time built in"
    ],
    good: ["Families", "Guests with mobility needs", "Repeat visitors", "Anyone with a specific plan"]
  }
];
