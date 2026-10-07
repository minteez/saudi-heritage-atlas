import diriyah from "@/assets/hero-diriyah.jpg";
import hegra from "@/assets/hero-hegra.jpg";
import jeddah from "@/assets/hero-jeddah.jpg";

export interface Article {
  slug: string;
  title: string;
  titleAr: string;
  kicker: string;
  image: string;
  imageCredit: string;
  lede: string;
  facts: [string, string][];
  sections: { heading: string; body: string | string[] }[];
  sources: string[];
}

export const articles: Article[] = [
  {
    slug: "diriyah",
    title: "Diriyah and At-Turaif",
    titleAr: "الدرعية وحي الطريف",
    kicker: "First Saudi State · Riyadh Province",
    image: diriyah,
    imageCredit: "Illustrative image, AI-generated. Not a documentary photograph.",
    lede: "On the banks of Wadi Hanifah, Diriyah became the seat of the First Saudi State in the 18th century. Its At-Turaif district preserves an exceptional ensemble of Najdi palaces, houses and defensive works built from the earth of central Arabia.",
    facts: [["Region", "Wadi Hanifah, Riyadh Province"], ["Saudi state founded", "1727"], ["Fall of At-Turaif", "1818"], ["UNESCO inscription", "2010"], ["Primary materials", "Mud brick, stone and palm wood"]],
    sections: [
      { heading: "A settlement shaped by the wadi", body: ["Diriyah developed along Wadi Hanifah, a fertile corridor of wells, date gardens and seasonal watercourses west of modern Riyadh. The settlement’s position joined agricultural resources to routes crossing the Najd plateau, creating the conditions for a durable political and religious centre.", "The historic oasis was not one continuous mass of buildings. Communities occupied distinct quarters along the valley, while At-Turaif rose on a limestone escarpment above the wadi. Its elevated position offered protection and gave the ruling district a commanding presence over the gardens and settlements below."] },
      { heading: "The First Saudi State", body: ["In 1727 Imam Muhammad bin Saud assumed power in Diriyah, a date recognized as the foundation of the First Saudi State. From this capital, authority expanded across much of the Arabian Peninsula during the 18th and early 19th centuries.", "At-Turaif became the state’s political heart. It contained royal residences, administrative spaces and the Imam Muhammad bin Saud Mosque. The growth of these institutions transformed a local Najdi settlement into a capital whose influence extended far beyond Wadi Hanifah."] },
      { heading: "Building in the Najdi tradition", body: ["UNESCO identifies At-Turaif as an outstanding example of the Najdi architectural and decorative style. Builders formed thick load-bearing walls from sun-dried mud brick, often set on stone foundations, and used tamarisk or palm trunks to span roofs. Earthen plaster helped protect exposed surfaces and could be renewed as part of regular maintenance.", "Palaces and houses were organized around courtyards that brought light and air into inward-looking interiors. Small openings, shaded passages and substantial walls moderated the extremes of the desert climate. Triangular ventilation openings, geometric decoration and crenellated rooflines gave the district a distinctive visual language.", "Salwa Palace, the largest complex at At-Turaif, grew through several building phases. Rather than a single monumental block, it is a connected sequence of reception rooms, courtyards, domestic areas and circulation spaces that records the expansion of the ruling household."] },
      { heading: "Siege, destruction and a new capital", body: ["In 1818 an Ottoman-Egyptian army commanded by Ibrahim Pasha besieged Diriyah at the end of a prolonged military campaign. The surrender and destruction of the capital brought the First Saudi State to an end and left much of At-Turaif in ruins.", "A Second Saudi State was established in 1824 with Riyadh as its capital. Diriyah remained historically important, but the ruined palaces of At-Turaif were no longer the centre of government. Their abandonment also preserved archaeological evidence of the district’s earlier form."] },
      { heading: "Conservation and World Heritage", body: ["At-Turaif was inscribed on the UNESCO World Heritage List in 2010. The designation recognizes both its association with the First Saudi State and its exceptional testimony to Najdi architecture at the centre of the Arabian Peninsula.", "Conserving earthen architecture requires a different approach from repairing stone monuments. Walls must be stabilized with compatible materials, drainage must be controlled and new work must remain distinguishable without disrupting the site’s character. The wider Diriyah programme has made the district accessible through museums, paths and interpreted ruins while continuing archaeological research and conservation."] },
    ],
    sources: ["unesco-diriyah", "founding", "darah"],
  },
  {
    slug: "masmak",
    title: "Masmak Fortress",
    titleAr: "قصر المصمك",
    kicker: "Unification · Riyadh",
    image: diriyah,
    imageCredit: "Illustrative image, AI-generated. Not a documentary photograph.",
    lede: "A compact mud-brick fortress in the heart of old Riyadh, Masmak is closely associated with Abdulaziz bin Abdulrahman Al Saud’s recapture of the city in 1902 and the long campaign that led to the unification of Saudi Arabia.",
    facts: [["Location", "Old Riyadh"], ["Built", "Late 19th century"], ["Recapture of Riyadh", "15 January 1902"], ["Primary material", "Mud brick"], ["Current use", "Museum"]],
    sections: [
      { heading: "A stronghold in old Riyadh", body: ["Masmak—its name is commonly understood to refer to a strong, thick or fortified building—was constructed in the late 19th century. At the time, Riyadh was a walled oasis town of earthen houses, gardens, mosques and markets rather than the expansive capital seen today.", "The fortress stood near the centre of political life. Its enclosure could secure stores and arms, accommodate a garrison and project authority over the surrounding town. The building’s survival provides a rare physical link to Riyadh before its rapid 20th-century transformation."] },
      { heading: "The recapture of Riyadh", body: ["Before dawn on 15 January 1902, Abdulaziz bin Abdulrahman Al Saud entered Riyadh with a small group of companions. After approaching from Kuwait and waiting near the oasis, the party moved into the town and attacked the fortress as its governor emerged.", "The successful recapture restored Al Saud rule in Riyadh. The episode is often presented as a dramatic turning point, but it was the opening of a much longer political and military process. Over the following three decades Abdulaziz consolidated authority across Najd, Al-Ahsa, the Hijaz and other regions before the Kingdom of Saudi Arabia was proclaimed in 1932."] },
      { heading: "Architecture of defence", body: ["Masmak is built primarily of mud brick, the adaptable material that defined traditional construction in central Arabia. Its high, largely blank outer walls form an irregular enclosure reinforced by four cylindrical corner towers. Narrow openings allowed observation while limiting exposure from outside.", "The heavy palm-wood entrance leads through a defensive passage into an open courtyard. Around it are rooms associated with reception, residence, storage and worship. A well within the enclosure supported the occupants, while roofed spaces and thick walls moderated summer heat.", "The gate has become one of the fortress’s most recognizable elements. Its robust construction and the historic action around the entrance make it both an architectural feature and an object through which the events of 1902 are remembered."] },
      { heading: "From fortress to museum", body: ["As Riyadh expanded and construction methods changed, Masmak outlived its original defensive role. The fortress was repaired and adapted as a museum devoted to the recapture of Riyadh and the unification period.", "Historic photographs, maps, models and objects help place the building within the former walled city. Yet the most important exhibit is the architecture itself: visitors move through the gate, courtyard, towers and rooms at the scale experienced by those who occupied the fortress."] },
      { heading: "A national place of memory", body: ["Masmak’s significance extends beyond its fabric. In public memory it marks the return of Abdulaziz to his ancestral capital and the beginning of the events that shaped the modern state.", "That symbolic role makes careful interpretation essential. The fortress tells a focused story about Riyadh in 1902, while the broader unification unfolded across many regions and communities over thirty years. Reading the site at both scales connects one landmark to the Kingdom’s larger history."] },
    ],
    sources: ["darah"],
  },
  {
    slug: "hegra",
    title: "Hegra (Al-Hijr)",
    titleAr: "الحِجر",
    kicker: "Ancient Arabia · AlUla",
    image: hegra,
    imageCredit: "Illustrative image, AI-generated. Not a documentary photograph.",
    lede: "The largest conserved Nabataean site south of Petra, Hegra preserves a desert city, ancient wells and more than a hundred monumental tombs cut into sandstone outcrops along the caravan routes of north-west Arabia.",
    facts: [["Location", "AlUla, Madinah Province"], ["Main florescence", "1st century BCE–1st century CE"], ["Monumental tombs", "111"], ["Culture", "Nabataean"], ["UNESCO inscription", "2008—Saudi Arabia’s first"]],
    sections: [
      { heading: "A Nabataean city in north-west Arabia", body: ["Hegra, also known as al-Hijr and Mada’in Salih, occupied a broad plain ringed by isolated sandstone masses. The Nabataeans developed it as their principal southern city, roughly 500 kilometres south of their capital at Petra.", "The visible rock-cut tombs dominate the landscape, but Hegra was a living settlement as well as a cemetery. Archaeology has identified traces of a residential zone, a fortified area, religious spaces, agricultural activity and a sophisticated system for obtaining and storing water."] },
      { heading: "At the crossroads of trade", body: ["Hegra prospered near routes connecting southern Arabia with the Levant, Egypt and the Mediterranean. Caravans transported aromatics and other valuable goods across great distances, while local routes linked the oasis communities of north-west Arabia.", "The Nabataeans drew wealth from this movement and developed a culture that combined Arabian traditions with artistic and architectural ideas circulating across the Hellenistic and Roman worlds. Inscriptions reveal a multilingual environment in which Nabataean Aramaic was prominent and other languages were also present."] },
      { heading: "Monuments cut from sandstone", body: ["UNESCO records 111 monumental tombs at Hegra, 94 of them with decorated façades. Craftspeople carved many from the top downward, removing the cliff face in a carefully planned sequence. Crow-stepped elements, columns, pediments and eagles create imposing fronts while the burial chambers behind them are comparatively restrained.", "The tomb inscriptions are unusually informative. Many name the person who commissioned a monument, establish ownership, record a date and warn against unauthorized reuse. They turn the façades into legal and social documents, preserving family relationships and Nabataean conventions alongside architecture.", "Qasr al-Farid, the ‘Lonely Castle,’ is Hegra’s best-known monument. Its tall façade stands alone in a sandstone outcrop and was left unfinished, allowing the process of carving to be read directly in the rock."] },
      { heading: "Water in an arid landscape", body: ["Hegra’s success depended on groundwater. Dozens of wells were cut into the plain, some using earlier water sources, enabling permanent settlement and cultivation in an environment of low rainfall.", "Channels, cisterns and the careful placement of wells demonstrate practical knowledge of the local geology. This managed landscape is as important to understanding Hegra as its monumental art: commerce and construction depended on a stable oasis economy."] },
      { heading: "Before and after the Nabataeans", body: ["Human activity at Hegra predates the city’s Nabataean florescence. Rock surfaces preserve drawings and inscriptions from different periods, offering evidence of travellers and communities who crossed the landscape long before the monumental tombs were built.", "Rome annexed the Nabataean kingdom in 106 CE, incorporating Hegra into the province of Arabia. Occupation continued, but the city gradually lost its earlier importance as patterns of trade changed. Centuries later, the Qur’an’s references to al-Hijr and the people of Thamud gave the place a powerful religious and cultural resonance."] },
      { heading: "Research, conservation and access", body: ["In 2008 Hegra became Saudi Arabia’s first property inscribed on the UNESCO World Heritage List. The inscription recognizes the exceptional preservation of its Late Antiquity architecture, inscriptions, wells and earlier rock art.", "Archaeological missions continue to study the settlement and its surrounding landscape. Managed access, monitoring of fragile sandstone and controls on development are central to preserving the site while allowing visitors to understand Hegra as a complete cultural landscape rather than a collection of isolated façades."] },
    ],
    sources: ["unesco-hegra"],
  },
  {
    slug: "historic-jeddah",
    title: "Historic Jeddah",
    titleAr: "جدة التاريخية",
    kicker: "Architecture · Makkah Province",
    image: jeddah,
    imageCredit: "Illustrative image, AI-generated. Not a documentary photograph.",
    lede: "For centuries Jeddah connected the Indian Ocean world with Makkah. Within its historic centre, coral-stone tower houses, shaded lanes, merchants’ compounds and projecting wooden rawashin preserve the character of a Red Sea port shaped by pilgrimage and trade.",
    facts: [["Historic role", "Port and gateway to Makkah"], ["Port established", "646 CE"], ["UNESCO inscription", "2014"], ["Primary materials", "Coral stone and timber"], ["Local name", "Al-Balad"]],
    sections: [
      { heading: "The gate to Makkah", body: ["In 646 CE Caliph Uthman ibn Affan established Jeddah as the port for Makkah. Its harbour became the maritime threshold through which pilgrims from Africa, Asia and the wider Islamic world continued their journey to the Holy City.", "Pilgrimage gave Jeddah a role unlike that of an ordinary trading port. The city received people, ideas, languages and goods from across the Indian Ocean and Red Sea. Consulates, merchants, shipowners and service communities developed around this seasonal movement."] },
      { heading: "A Red Sea trading city", body: ["Jeddah’s commercial importance grew as ships brought textiles, spices, grains, coffee and manufactured goods to its markets. Cargoes were transferred between sea routes and inland caravans, linking oceanic exchange to Makkah and the western Arabian hinterland.", "The opening of the Suez Canal in 1869 and the arrival of steam navigation intensified these connections. Prosperous merchant families enlarged their houses and invested in the urban fabric now associated with Al-Balad, the historic centre."] },
      { heading: "Coral-stone tower houses", body: ["Historic Jeddah’s defining buildings are multi-storey houses constructed from blocks of coral limestone known locally as manqabi stone. Timber courses inserted into the masonry helped distribute loads and gave the walls some flexibility, while lime plaster protected the porous stone.", "Building upward made efficient use of limited space within the former city walls. The houses combined reception areas, family rooms, service spaces and terraces across several levels. Their height and close arrangement created a dense skyline quite distinct from the low earthen architecture of inland Najd.", "Prominent surviving houses, including Bayt Nassif, Bayt al-Matbouli and Bayt Noor Wali, reveal variations in scale and decoration. They also record the status and cosmopolitan networks of families involved in trade and pilgrimage."] },
      { heading: "Rawashin: shade, air and privacy", body: ["Projecting wooden windows called rawashin are both practical climate devices and the most recognizable feature of Jeddah’s streets. Their lattice screens shade openings, permit air to circulate and allow occupants to look outward while maintaining privacy.", "Large rawashin animate entire façades with repeating panels, carved details and shutters. Because good structural timber was not abundant locally, wood arrived through the same trading networks that sustained the city. Architecture therefore made Jeddah’s maritime connections visible in its materials."] },
      { heading: "Streets, markets and public life", body: ["The value of Historic Jeddah lies not only in individual houses. Narrow lanes, small squares, mosques, markets and merchants’ compounds form an urban ensemble adapted to walking, shade and social exchange.", "Traditional souqs were organized around trades and commodities, while neighbourhood mosques anchored daily life. The pattern of buildings and open spaces shows how commerce, domestic life and pilgrimage services occupied the same compact city."] },
      { heading: "Change, conservation and continuity", body: ["The demolition of Jeddah’s walls in 1947 signalled a period of rapid expansion beyond the old city. As residents and businesses moved to newer districts, many historic buildings suffered from vacancy, fire, decay and alterations incompatible with coral-stone construction.", "Historic Jeddah was inscribed on the UNESCO World Heritage List in 2014. Conservation programmes now combine documentation, emergency stabilization and the repair of houses, mosques and public spaces. The central challenge is to retain a living neighbourhood—one with residents, crafts and commerce—rather than preserve the district only as a collection of monuments."] },
    ],
    sources: ["unesco-jeddah"],
  },
];

export const getArticle = (slug: string) => articles.find((a) => a.slug === slug);
