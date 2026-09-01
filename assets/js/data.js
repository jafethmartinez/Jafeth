/* =====================================================================
   SITE CONFIG  —  ✏️  EDIT THIS BLOCK FIRST
   Taken from your Wix site. Everything below appears across the whole
   site — change it here once and every page updates.
   ===================================================================== */
const SITE = {
  name: "Roatan Roots Travel",
  tagline: "Unparalleled local insights and tropical adventures await you in the heart of Honduras",
  // Jafeth's number — digits only, no + or spaces. (+1 689 287 0134)
  whatsapp: "16892870134",
  phone: "+1 689-287-0134",
  email: "emilmartinez938@yahoo.com",
  base: "Roatán, Bay Islands, Honduras",
  // ✏️ Add your real links, or leave "" to hide the icon
  facebook: "",
  instagram: "",
  tripadvisor: ""
};

/* =====================================================================
   THE TEAM
   ✏️ Add photos: drop them in assets/img/ and put the filename in `photo`
   ===================================================================== */
const TEAM = [
  { name: "Jafeth Martinez",  role: "CEO",      phone: "689-287-0134",   note: "iMessage and WhatsApp", email: "emilmartinez938@yahoo.com", photo: "team-jafeth.jpg" },
  { name: "Oscar Martinez",   role: "Co-owner", phone: "+504 9989-2430", note: "", email: "", photo: "team-oscar.jpg" },
  { name: "Mireska Martinez", role: "Co-owner", phone: "+504 9783-5574", note: "", email: "", photo: "team-mireska.jpg" }
];

/* =====================================================================
   TRAVEL TIPS  —  your words, from the Wix site
   ===================================================================== */
const TIPS = [
  { title: "Arrival Essentials", body: "Roatán is best accessed via the island's only airport. We recommend booking your flight in advance to secure your spot on the island's most popular tour boats." },
  { title: "Local Insights",    body: "Our local guides are the best resource for finding the most secluded spots and understanding the unique culture of the island's residents." },
  { title: "Water Safety",      body: "Always wear a life jacket when swimming or kayaking. The waters are calm and safe for snorkeling, but the currents can be strong in certain areas." },
  { title: "Local Cuisine",     body: "Roatán's food scene is vibrant. Try the local specialties like 'Cocina Hondureña' and fresh seafood at the island's most popular beachfront restaurants." }
];

/* =====================================================================
   PICKUP POINTS
   ===================================================================== */
const PICKUPS = [
  { id: "mahogany", label: "Mahogany Bay Cruise Center", note: "We meet you just past the welcome center, outside the port gate." },
  { id: "coxen",    label: "Port of Roatán (Coxen Hole)", note: "We meet you at the taxi plaza, immediately outside the terminal." },
  { id: "hotel",    label: "Hotel / resort pickup",       note: "West Bay, West End, Sandy Bay and Coxen Hole hotels included." },
  { id: "airport",  label: "Roatán Airport (RTB)",        note: "Ideal if you're flying in for the week." }
];

/* =====================================================================
   TOURS  —  all 11 attractions from your Wix site.

   ⚠️  TWO FIELDS ON EVERY TOUR STILL NEED YOU:
       price / kids  — PLACEHOLDERS. Not your rates. Replace them all.
       minutes       — my estimate of door-to-door time. This is what the
                       Port Time Planner uses to promise a cruise guest
                       they'll get back to their ship. Correct every one.

   The `blurb` is YOUR copy from the Wix site, word for word.
   The highlights / includes / itinerary lists I drafted around it —
   read them and fix anything that isn't how you actually run the tour.
   ===================================================================== */
const TOURS = [
  {
    id: "little-french-key",
    active: true,
    name: "Little French Key",
    tagline: "Roatán's secret paradise escape — a private island just off the south coast",
    category: "Island",
    art: "beach",
    // The aerial is the hero + the card image on the tours page.
    photo: "lfk-aerial.jpg",
    gallery: [
      "lfk-aerial.jpg",
      "lfk-overwater-swing.jpg",
      "lfk-palapas.jpg",
      "lfk-lagoon.jpg",
      "lfk-cabanas.jpg",
      "lfk-horseback.jpg",
      "lfk-heart-view.jpg",
      "lfk-loungers.jpg",
      "lfk-umbrella.jpg",
      "lfk-peacock.jpg"
    ],
    minutes: 360,
    price: 129, kids: 79,
    group: "Any group size",
    blurb: "Escape the ordinary with a short boat ride to one of Roatán's gems. Little French Key is a private sanctuary located just off the southern coast near French Cay, where turquoise waters meet powdery white sand. This isn't just a beach; it's a private island dedicated to relaxation and adventure. It sits right on the Mesoamerican Barrier Reef—the world's second-largest—making the surrounding waters a haven for swimmers and snorkelers.",
    extra: "Forget the crowds of public beaches. This destination is designed for exclusivity, featuring over-water swings, shaded beach beds, and hammocks. It is the perfect backdrop for your vacation photography. While it is a top choice for cruise ship visitors due to easy logistics, we can also arrange extended stays for those wanting more time in paradise.",
    verdict: "If you are dreaming of crystal-clear water, diverse marine activities, and a peaceful atmosphere for your island photos, Little French Key is an excellent choice for your Roatán itinerary.",
    highlights: [
      "Relax on secluded, pristine beaches",
      "Snorkel through vibrant coral gardens",
      "Kayak or paddleboard across calm lagoons",
      "Experience horseback riding through the surf",
      "Rent jet skis or book a beachside massage",
      "Enjoy a tropical cocktail at the famous swim-up bar",
      "Dine on fresh Caribbean cuisine at waterfront spots"
    ],
    includes: ["Boat transfer to the island", "Island day pass", "Round-trip ground transport", "Bilingual guide"],
    excludes: ["Lunch and drinks", "Jet ski rental", "Massage", "Gratuities"],
    bring: ["Swimsuit", "Towel", "Reef-safe sunscreen", "Camera", "Cash for food, drinks and extras"],
    itinerary: [
      "Pickup at your ship or hotel",
      "20 minutes from Mahogany Bay, or 30 from the Port of Roatán, to the dock",
      "A brief 5-minute boat crossing to reach the key",
      "Free time — swim, snorkel, kayak, horseback ride",
      "Lunch and the swim-up bar",
      "Boat and ground transfer back"
    ],
    good: ["Longer port days", "Families", "Couples", "Anyone who wants everything in one place"],
    note: "The island is home to various rescued and exotic animals. Because guest experiences vary, we encourage visitors to read recent reviews to ensure the wildlife interactions align with their personal travel values."
  },
  {
    id: "cultural-getaways",
    active: true,
    name: "Cultural Getaways",
    tagline: "The Garifuna community of Punta Gorda, on its own terms",
    category: "Culture",
    art: "culture",
    // The Garífuna Arrival Day landing is the hero + tours-page card image.
    photo: "cultural-arrival-day.jpg",
    focus: "center 70%",
    gallery: [
      "cultural-arrival-day.jpg",
      "cultural-museum-drums.jpg",
      "cultural-food.jpg",
      "cultural-guifiti.jpg",
      "cultural-village.jpg"
    ],
    videos: [
      { file: "cultural-dance.mp4",  poster: "cultural-dance-poster.jpg",
        caption: "The Punta dance in Punta Gorda" },
      { file: "cultural-drums.mp4",  poster: "cultural-drums-poster.jpg",
        caption: "Garífuna drumming — music as living history" },
      { file: "cultural-museum.mp4", poster: "cultural-museum-poster.jpg",
        caption: "Inside the community museum" }
    ],
    minutes: 300,
    price: 69, kids: 45,
    group: "Up to 14 guests",
    blurb: "If you want to discover the vibrant heart of the island beyond its sandy shores, Punta Gorda is your essential first stop. As the oldest Garífuna settlement in Honduras, this village offers a deep connection to a heritage that is as resilient as it is beautiful.",
    extra: "Located on the scenic eastern coast, Punta Gorda was established in 1797. After being exiled from St. Vincent, the Garífuna people arrived in dugout canoes, preserving a unique fusion of African and Indigenous Caribbean traditions that remain the lifeblood of the community today. From the moment you arrive, the pulse of the drums will draw you in. For the Garífuna, music is a living history — traditional beats accompany soulful songs in their native tongue and the energetic Punta dance. These movements are a celebration of joy and survival, so if someone invites you to join in, embrace the moment.",
    verdict: "This village offers a rare opportunity to engage with a culture that has flourished for over two centuries. When you visit, you aren't just a tourist — you are a guest in a story that has been told for 225 years. Come with an open heart, leave with a new rhythm in your step.",
    highlights: [
      "Punta Gorda — the oldest Garífuna settlement in Honduras, established 1797",
      "Traditional drumming and the energetic Punta dance",
      "Machuca — savory mashed plantains in a creamy coconut seafood broth",
      "Tapado — a hearty seafood stew simmered in fresh coconut milk",
      "Local catch — fresh fish, conch and lobster with traditional herbs and cassava bread",
      "Meet artisans, watch the fishermen, hear stories from the elders"
    ],
    includes: ["Round-trip transport", "Bilingual local guide", "Museum entry", "Food and drink tasting", "Water"],
    excludes: ["Full lunch", "Craft purchases", "Gratuities"],
    bring: ["Camera", "Cash for crafts", "Comfortable walking shoes"],
    itinerary: [
      "Pickup at your ship or hotel",
      "Drive east across the island with commentary",
      "Arrive in Punta Gorda",
      "Museum visit and community welcome",
      "Traditional dance performance",
      "Food and drink tasting",
      "Return transfer"
    ],
    good: ["Culture and history travellers", "Repeat visitors", "Non-swimmers"],
    note: "Plan your visit around April 12th to witness Garífuna Arrival Day. This vibrant festival reenacts the historic canoe landing and fills the streets with parades, drumming and incredible food."
  },
  {
    id: "glass-bottom-boat",
    active: true,
    name: "Glass-Bottom Boat",
    tagline: "See the reef without getting wet",
    category: "Family",
    art: "boat",
    photo: "glass-boat-aerial.jpg",
    gallery: [
      "glass-boat-aerial.jpg",
      "glass-window-fish.jpg",
      "glass-interior.jpg",
      "glass-guests.jpg"
    ],
    videos: [
      { file: "glass-bottom-reef.mp4", poster: "glass-video-poster.jpg",
        caption: "The reef passing beneath the glass" }
    ],
    minutes: 150,
    price: 59, kids: 39,
    group: "Up to 16 guests",
    blurb: "Explore the wonders of the deep without getting wet on our semi-submarine tour. See vibrant coral reefs and exotic sea creatures through crystal-clear glass panels.",
    highlights: [
      "Semi-submarine with crystal-clear glass panels",
      "Coral reef and marine life viewing",
      "Guide narrating what passes underneath",
      "No swimming required, minimal walking",
      "Shaded and comfortable throughout"
    ],
    includes: ["Semi-submarine tour", "Guide", "Round-trip transport", "Bottled water"],
    excludes: ["Food and drinks", "Gratuities"],
    bring: ["Camera", "Hat", "Sunglasses"],
    itinerary: [
      "Pickup at your ship or hotel",
      "Board the semi-submarine",
      "Guided reef viewing through the glass panels",
      "Return to dock",
      "Transfer back"
    ],
    good: ["Non-swimmers", "Grandparents and young children", "Short port days", "Guests with mobility needs"]
  },
  {
    id: "snorkeling",
    active: true,
    name: "Pristine Snorkeling",
    tagline: "The world's second-largest barrier reef, up close",
    category: "Water",
    art: "reef",
    photo: "snorkel-shallows.jpg",
    focus: "center 65%",
    gallery: ["snorkel-shallows.jpg"],
    videos: [
      { file: "snorkel-reef.mp4", poster: "snorkel-video-poster.jpg",
        caption: "The reef wall on one of our snorkel stops" }
    ],
    minutes: 180,
    price: 65, kids: 45,
    group: "Up to 10 guests",
    blurb: "Explore Roatán's vibrant coral reef up close with guided snorkeling at some of the island's best spots. Encounter colorful marine life in crystal-clear waters.",
    highlights: [
      "Guided snorkelling on the Mesoamerican Barrier Reef",
      "The island's best spots, chosen on the day for conditions",
      "In-water guide who points out what you're seeing",
      "All gear included",
      "Non-swimmers supported with flotation vests"
    ],
    includes: ["Mask, snorkel, fins and vest", "In-water guide", "Boat and captain", "Bottled water"],
    excludes: ["Underwater camera rental", "Gratuities"],
    bring: ["Reef-safe sunscreen only", "Towel", "Swimsuit worn under your clothes"],
    itinerary: [
      "Meet your guide",
      "Safety and snorkel briefing",
      "First reef site",
      "Surface break and water",
      "Second reef site",
      "Return"
    ],
    good: ["Short port days", "First-time and nervous snorkelers", "Reef lovers"]
  },
  {
    id: "nurse-sharks",
    active: true,
    name: "Pigeon Cay: Snorkeling with Nurse Sharks",
    tagline: "A remote white-sand cay off the East End, with sharks swimming beneath you",
    category: "Water",
    art: "reef",
    // The drone shot is the hero + the card image on the tours page.
    photo: "pigeon-cay-drone.jpg",
    // ✏️ Real photos from the tour. Files live in assets/img/.
    //    The first one is the card image on the tours page.
    //    If a file is missing the site falls back to the illustration,
    //    so nothing ever shows as broken.
    gallery: [
      "pigeon-cay-drone.jpg",
      "nurse-shark.jpg",
      "snorkelers-sharks.jpg",
      "stingray-guide.jpg"
    ],
    video: "nurse-sharks.mp4",
    videoCaption: "Nurse sharks at Pigeon Cay — filmed on one of our trips",
    minutes: 360,
    price: 115, kids: 85,
    group: "Up to 8 guests",
    blurb: "If you want one experience in Roatán that you'll still be talking about years later, snorkeling with nurse sharks at Pigeon Cay should be high on your list. You take a boat out toward Roatán's remote East End, leaving the busy tourist areas behind. The water keeps getting clearer and brighter until you arrive at Pigeon Cay, a tiny white-sand cay surrounded by shallow turquoise Caribbean water and reef. Then you put on your mask, step into the water — and there are nurse sharks swimming underneath and around you.",
    extra: "Nurse sharks are generally calm, bottom-dwelling sharks, and the experience is guided. You can snorkel above them while they cruise along the sandy bottom, and sometimes they pass surprisingly close underneath you. You don't need to be a scuba diver — this is warm, shallow, clear water. Pigeon Cay itself is part of the attraction: not a developed beach with hotels everywhere, but a remote little patch of white sand surrounded by that crazy blue Caribbean water. It feels much more like discovering somewhere than simply arriving at another tourist attraction.",
    verdict: "You can visit beautiful beaches anywhere on the island. You can eat good food anywhere. You can snorkel beautiful coral in several places. But being able to say \"I went to a tiny cay in Honduras and snorkeled in crystal-clear water with nurse sharks swimming underneath me\" — that's different.",
    highlights: [
      "A scenic boat ride through crystal-clear lagoons to the remote Pigeon Cay",
      "Snorkel above wild nurse sharks in shallow, clear water",
      "Stingrays and reef life at the same site",
      "No scuba certification needed — it's all shallow snorkelling",
      "Combined with reef snorkelling and East End boat stops",
      "Suitable for all ages"
    ],
    includes: ["Boat and crew", "Snorkel gear and vest", "Safety briefing", "In-water guides"],
    excludes: ["Photo and video package", "Gratuities"],
    bring: ["Swimsuit", "Towel", "Reef-safe sunscreen"],
    itinerary: [
      "Pickup at your ship or hotel",
      "Check-in and full safety briefing",
      "Scenic boat ride through the lagoons toward the East End",
      "Arrive at Pigeon Cay",
      "Guided snorkel with the nurse sharks and stingrays",
      "Reef snorkelling and other marine-life stops",
      "Return boat ride and transfer back"
    ],
    good: ["Families", "Adventurous guests", "Photographers", "Longer port days"],
    note: "These are wild animals, so sightings can never be guaranteed 100% — though operators currently describe sightings at Pigeon Cay as common. Always follow your guide's instructions rather than touching, chasing or crowding the sharks. This trip runs 5–7 hours depending on the itinerary, so check it against your all-aboard time."
  },
  {
    id: "mangrove-tour",
    active: true,
    name: "Mangrove Tunnel Tour",
    tagline: "Secret mangrove tunnels on an authentic panga boat",
    category: "Nature",
    art: "jungle",
    photo: "mangrove-boat.jpg",
    gallery: ["mangrove-boat.jpg"],
    videos: [
      { file: "mangrove-tunnel.mp4", poster: "mangrove-poster.jpg",
        caption: "Gliding through the mangrove tunnels by panga" }
    ],
    minutes: 180,
    price: 59, kids: 39,
    group: "Up to 12 guests",
    blurb: "Glide through secret mangrove tunnels on an authentic panga boat.",
    highlights: [
      "Narrow mangrove tunnels most visitors never see",
      "Traditional panga boat",
      "Birdlife and marine nursery habitat",
      "Calm, shaded water — no swimming required",
      "Gentle pace, minimal walking"
    ],
    includes: ["Panga boat and captain", "Local guide", "Bottled water", "Round-trip transport"],
    excludes: ["Food and drinks", "Gratuities"],
    bring: ["Camera", "Hat", "Insect repellent", "Sunscreen"],
    itinerary: [
      "Pickup at your ship or hotel",
      "Drive to the boat launch",
      "Panga through the mangrove tunnels",
      "Birdwatching and photo stops",
      "Return boat and transfer"
    ],
    good: ["Non-swimmers", "Birdwatchers and photographers", "Older guests and young children"]
  },
  {
    id: "animal-encounters",
    active: true,
    name: "Animal Encounters",
    tagline: "Sloths, monkeys and parrots at the island sanctuaries",
    category: "Wildlife",
    art: "wildlife",
    photo: "animal-sloth-hold.jpg",
    focus: "center 60%",
    gallery: [
      "animal-sloth-hold.jpg",
      "animal-capuchins.jpg",
      "animal-macaws.jpg",
      "animal-sloth-meet.jpg",
      "animal-monkey-shoulder.jpg",
      "animal-small-creature.jpg",
      "animal-monkey-pair.jpg",
      "animal-sloth-tree.jpg",
      "animal-guests.jpg"
    ],
    minutes: 210,
    price: 79, kids: 55,
    group: "Up to 14 guests",
    blurb: "Get ready for a heartwarming experience as you meet Roatán's most famous residents—the sloths, monkeys, and colorful parrots of our island sanctuaries.",
    highlights: [
      "Hold a sloth under the care of sanctuary staff",
      "Capuchin monkeys and colourful parrots",
      "Guided by keepers who know each animal",
      "Shaded jungle setting",
      "Photos taken by your guide throughout"
    ],
    includes: ["Sanctuary admission", "Round-trip transport", "Guide", "Bottled water"],
    excludes: ["Sanctuary photo package", "Food and drinks", "Gratuities"],
    bring: ["Camera", "Insect repellent", "Sunscreen"],
    itinerary: [
      "Pickup at your ship or hotel",
      "Drive to the sanctuary",
      "Guided encounters — sloths, monkeys, parrots",
      "Time on the grounds",
      "Return transfer"
    ],
    good: ["Families with kids", "Photographers", "Anyone who wants wildlife without a hike"]
  },
  {
    id: "parasailing",
    active: true,
    name: "Sky-High Parasailing",
    tagline: "A bird's-eye view of the Caribbean, above West Bay",
    category: "Adventure",
    art: "boat",
    photo: "para-flight.jpg",
    gallery: [
      "para-flight.jpg",
      "para-couple-air.jpg",
      "para-solo-air.jpg",
      "para-boat.jpg",
      "para-ready.jpg"
    ],
    minutes: 120,
    price: 89, kids: 69,
    group: "Up to 6 guests",
    blurb: "Experience ultimate freedom and panoramic island views as you glide through the sky above West Bay. A unique bird's-eye view of the Caribbean.",
    highlights: [
      "Parasail flight over West Bay",
      "Panoramic views of the reef and coastline",
      "Take off and land dry from the boat deck",
      "Single or tandem flights",
      "Our shortest tour — easy to fit into a tight port day"
    ],
    includes: ["Parasail flight", "Harness and life vest", "Boat and crew", "Safety briefing"],
    excludes: ["Photo package", "Gratuities"],
    bring: ["Sunglasses with a strap", "Sunscreen", "Light clothing"],
    itinerary: [
      "Meet at the West Bay dock",
      "Safety briefing and harness fitting",
      "Board the boat",
      "Your flight",
      "Return to dock"
    ],
    good: ["Tight port days", "Couples", "Guests who want a thrill without a full day"],
    note: "Weight limits apply for single and tandem flights. Flights are weather-dependent — if wind conditions cancel your flight, you pay nothing."
  },
  {
    id: "gumbalimba-park",
    active: true,
    name: "Gumbalimba Park",
    tagline: "Roatán's favourite nature destination, right by West Bay",
    category: "Wildlife",
    art: "wildlife",
    // Photographs supplied by Gumbalimba Park; the owners confirmed permission to use them.
    photo: "gumbalimba-bridge.jpg",
    gallery: [
      "gumbalimba-bridge.jpg",
      "gumbalimba-entrance.jpg",
      "gumbalimba-capuchins.jpg",
      "gumbalimba-monkey-guest.jpg",
      "gumbalimba-cave.jpg",
      "gumbalimba-cave-guests.jpg",
      "gumbalimba-relief-map.jpg"
    ],
    minutes: 300,
    price: 85, kids: 60,
    group: "Up to 14 guests",
    blurb: "Discover Roatán's favorite nature destination. This immersive park combines wildlife encounters, tropical gardens, and history into one unforgettable adventure right by West Bay.",
    highlights: [
      "Capuchin monkey and macaw encounters",
      "Tropical botanical gardens",
      "Island and pirate history exhibits",
      "Suspension bridge and jungle trails",
      "Beach access right by West Bay"
    ],
    includes: ["Park admission", "Round-trip transport", "Guide", "Beach access", "Bottled water"],
    excludes: ["Lunch", "Park photo package", "Gratuities"],
    bring: ["Camera", "Reef-safe sunscreen", "Insect repellent", "Cash for lunch"],
    itinerary: [
      "Pickup at your ship or hotel",
      "Drive to the park",
      "Guided wildlife encounters",
      "Botanical gardens and history trail",
      "Beach and swim time",
      "Return transfer"
    ],
    good: ["Families with kids", "First-time visitors", "Photographers"]
  },
  {
    id: "yacht-tour",
    active: true,
    name: "Exclusive Yacht Tour",
    tagline: "A private yacht, snorkelling and sunset views",
    category: "Private",
    art: "boat",
    photo: "yacht-underway.jpg",
    // ✏️ `focus` shifts the crop of a tall photo in the wide hero/card box.
    //    "center 15%" pulls the view up so the whole boat shows.
    //    Lower % = show more of the top. Default when unset is "center 50%".
    focus: "center 15%",
    gallery: [
      "yacht-underway.jpg",
      "yacht-helm.jpg",
      "yacht-lounge.jpg",
      "yacht-cockpit.jpg",
      "yacht-cabin.jpg",
      "yacht-marina.jpg",
      "yacht-sunset.jpg"
    ],
    minutes: 360,
    price: 0, kids: null,
    priceNote: "Quoted per group — tell us your dates and party size",
    group: "Private charter",
    blurb: "Set sail on a private yacht for an unforgettable day of luxury, snorkeling, and sunset views. The ultimate high-end tropical experience for families and groups.",
    highlights: [
      "Private yacht charter for your group only",
      "Snorkelling stops at the reef",
      "Sunset on the water",
      "Crew and captain throughout",
      "Itinerary built around you"
    ],
    includes: ["Private yacht and crew", "Snorkel gear", "Fuel", "Round-trip transport"],
    excludes: ["Catering and drinks (ask us — we can arrange it)", "Gratuities"],
    bring: ["Swimsuit", "Towel", "Reef-safe sunscreen", "Light layer for the evening"],
    itinerary: [
      "We plan the day with you in advance",
      "Pickup at your ship, hotel or the airport",
      "Board the yacht",
      "Snorkel stops and time on the water",
      "Sunset",
      "Return to dock and transfer back"
    ],
    good: ["Special occasions", "Families and groups", "Guests staying on the island"]
  },
  {
    id: "zip-line",
    active: true,
    name: "Zip Line — Randy's Jungles Top",
    tagline: "Dense foliage, big views, and a lot of adrenaline",
    category: "Adventure",
    art: "adventure",
    photo: "",
    minutes: 240,
    price: 85, kids: 60,
    group: "Up to 12 guests",
    blurb: "Brave the Randy's Jungles Top Zip Line for an exhilarating ride through dense foliage and vibrant landscapes. This heart-pounding attraction offers a unique blend of nature and adrenaline for thrill-seekers of all skill levels.",
    highlights: [
      "Multi-line canopy course through dense jungle",
      "Treetop platforms with island views",
      "Suits all skill levels, including first-timers",
      "All safety gear and briefing included",
      "Round-trip transport"
    ],
    includes: ["Zip line circuit", "Harness, helmet and gloves", "Certified guides", "Round-trip transport"],
    excludes: ["Food and drinks", "Photo package", "Gratuities"],
    bring: ["Closed-toe shoes (required)", "Comfortable clothes", "Sunscreen"],
    itinerary: [
      "Pickup at your ship or hotel",
      "Drive to the course",
      "Safety briefing and gear fitting",
      "Zip line circuit with your guides",
      "Return transfer"
    ],
    good: ["Active guests", "Teens and older kids", "First-time zipliners"],
    note: "Weight and age limits apply. Closed-toe shoes are required — no sandals on the course."
  }
];
