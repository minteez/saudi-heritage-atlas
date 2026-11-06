// Reading pages for collections added after the first six. Same shape as CollectionPage.
import sacred from "@/assets/collection-sacred.jpg";
import photography from "@/assets/collection-photography.jpg";
import magazines from "@/assets/collection-magazines.jpg";
import geography from "@/assets/collection-geography.jpg";
import people from "@/assets/collection-people.jpg";
import museums from "@/assets/collection-museums.jpg";
import society from "@/assets/collection-society.jpg";
import language from "@/assets/collection-language.jpg";
import economy from "@/assets/collection-economy.jpg";
import transport from "@/assets/collection-transport.jpg";
import conservation from "@/assets/collection-conservation.jpg";
import type { CollectionPage } from "./collection-pages";

export const extraCollectionPages: CollectionPage[] = [
  {
    slug: "sacred-places", image: sacred, imageAlt: "Illustrative marble arcades of a mosque courtyard at dawn",
    subtitle: "The two holy mosques and the routes that lead to them, presented with care.",
    evidence: "Religious tradition · Historical records · Archive documentation",
    provinces: ["makkah", "madinah", "northern-borders"], related: ["muhammad-sadiq", "transport", "architecture"],
    sections: [
      { id: "haram", title: "Al-Masjid Al-Haram", sources: ["darah"], body: [
        "Al-Masjid Al-Haram in Makkah surrounds the Kaaba, toward which Muslims around the world turn in prayer. In Islamic tradition the Kaaba is associated with the Prophet Ibrahim and his son Ismail; this belongs to religious tradition and is presented here as such.",
        "The mosque has been enlarged many times across Islamic history, from early caliphal works to the major Saudi expansions of the 20th and 21st centuries. Each enlargement responded to the growing number of worshippers performing Hajj and Umrah.",
      ] },
      { id: "nabawi", title: "Al-Masjid An-Nabawi", sources: ["darah"], body: [
        "In Madinah, the Prophet Muhammad built a simple mosque of mud brick and palm trunks after the Hijra in 622 CE. It is the second holiest mosque in Islam and contains the Prophet's resting place beneath the Green Dome.",
        "Like the mosque in Makkah, it has been rebuilt and expanded by successive rulers. Visitors to Madinah, whether before or after Hajj, have long shaped the city's hospitality, markets and population.",
      ] },
      { id: "routes", title: "Pilgrimage routes", sources: ["darah", "heritage"], body: [
        "For centuries pilgrims reached the Hijaz by caravan routes from Iraq, Syria, Egypt and Yemen, and by sea through Jeddah. Darb Zubaydah, the Abbasid road from Kufa, was equipped with wells, cisterns and stations whose remains still cross the north of the Kingdom.",
        "Respect is part of this collection's method. Non-Muslims may not enter Makkah, and the atlas describes sacred places through history and architecture without treating worship as spectacle.",
      ] },
    ],
  },
  {
    slug: "muhammad-sadiq", image: photography, imageAlt: "Illustrative 19th-century plate camera beside sepia photographs",
    subtitle: "An army surveyor who made some of the earliest photographs of the holy cities.",
    evidence: "Archive photographs · Travel accounts · Historical research",
    provinces: ["madinah", "makkah"], related: ["sacred-places", "museums"],
    sections: [
      { id: "surveyor", title: "An officer with a camera", sources: ["darah"], body: [
        "Muhammad Sadiq (later Sadiq Bey) was an Egyptian army officer and engineer trained in surveying. On official journeys to Arabia he carried a camera and used the wet collodion process, which required preparing glass plates on the spot.",
        "His photographs of Madinah from 1861 are regarded as among the earliest known photographs of the city. On later journeys, including as treasurer of the Egyptian pilgrim caravan in 1880, he photographed Makkah and the pilgrims at Mina and Arafat.",
      ] },
      { id: "writing", title: "Words alongside images", sources: ["darah"], body: [
        "Sadiq also wrote accounts of his journeys, recording distances, routes, water sources and the organisation of the pilgrimage. His text and images together form a rare documentary record of the Hijaz in the 19th century.",
        "Read today, the accounts reflect the concerns of an official traveller: logistics, measurements and ceremony. They are valuable evidence, but they show one viewpoint rather than the whole experience of the people living in the cities.",
      ] },
      { id: "legacy", title: "Why the photographs matter", sources: ["darah"], body: [
        "Because the holy cities have changed so greatly through expansion, Sadiq's images preserve buildings, streets and landscapes that no longer exist. They are frequently reproduced in histories of Makkah and Madinah.",
        "The atlas does not reproduce the photographs here. Original prints are held in archives and collections; readers are directed to those institutions so that the images keep their dates, captions and provenance.",
      ] },
    ],
  },
  {
    slug: "aramco-world", image: magazines, imageAlt: "Illustrative stack of magazines with desert photography covers",
    subtitle: "A reader's guide to decades of reporting on Arabian culture.",
    evidence: "Contemporary reporting · Magazine archive",
    provinces: ["eastern", "riyadh"], related: ["economy", "society", "people"],
    sections: [
      { id: "magazine", title: "A magazine about culture", sources: ["aramcoworld"], body: [
        "AramcoWorld, published since 1949 and earlier titled Aramco World, has long covered the history and cultures of the Arab and Muslim worlds for a general readership. Its archive spans decades of articles on Arabia's crafts, cities, landscapes and people.",
        "The magazine is free to read online. The atlas links to the original articles rather than reproducing them, so writers and photographers keep their credit and context.",
      ] },
      { id: "reading", title: "Reading an archive critically", sources: ["aramcoworld"], body: [
        "Magazine reporting is contemporary reporting: it records what writers saw and were told at a particular time. Older articles are valuable precisely because they capture places and practices before later change.",
        "They should still be read with their date in mind. Interpretations change, spellings vary and new research may revise earlier claims. In the atlas, such articles are marked as reporting, not as settled scholarship.",
      ] },
      { id: "themes", title: "Themes to explore", sources: ["aramcoworld"], body: [
        "Recurring subjects include traditional architecture, falconry, coffee, the Hijaz Railway, pearling, archaeology and the growth of modern cities. Many articles combine first-person reporting with interviews and archive photographs.",
        "Readers can use the archive's search to follow a theme across decades, comparing how a place such as Al-Ahsa or AlUla has been described over time.",
      ] },
    ],
  },
  {
    slug: "geography", image: geography, imageAlt: "Illustrative red sand dunes at golden hour",
    subtitle: "Sand seas, lava fields, mountains and two coasts.",
    evidence: "Geographical data · Government statistics · UNESCO site documentation",
    provinces: ["eastern", "asir", "madinah", "tabuk"], related: ["economy", "transport", "archaeology"],
    sections: [
      { id: "deserts", title: "Sand seas", sources: ["gastat"], body: [
        "Saudi Arabia covers most of the Arabian Peninsula. The Rub' al Khali, or Empty Quarter, in the south is one of the largest continuous sand deserts in the world; the Nefud lies in the north, and the Dahna, a long arc of red sand, links the two.",
        "Deserts here are not empty. Wells, grazing grounds and seasonal routes made them part of a known landscape for herders and caravans, and archaeology shows lakes once existed in what is now sand.",
      ] },
      { id: "mountains", title: "Mountains and harrats", sources: ["gastat", "unesco-hegra"], body: [
        "Along the west, the Sarawat mountains rise from the Red Sea coast, reaching their highest points in Asir. Cooler temperatures and rain support juniper woodland and terraced farming.",
        "Large volcanic fields called harrats cover parts of the west, including near Madinah and Khaybar. Further north, sandstone outcrops around AlUla and Tabuk form the setting of sites such as Hegra.",
      ] },
      { id: "coasts", title: "Two coasts and the oases", sources: ["gastat", "unesco-ahsa"], body: [
        "The Red Sea coast has coral reefs and islands such as the Farasan archipelago; the Arabian Gulf coast is shallower, with salt flats and a long history of pearling.",
        "Inland, oases fed by groundwater supported settled life. Al-Ahsa, a UNESCO World Heritage Site since 2018, shows how springs, canals and palm gardens shaped an entire cultural landscape.",
      ] },
    ],
  },
  {
    slug: "people", image: people, imageAlt: "Illustrative manuscripts, a coffee pot and a folded bisht on a carved chest",
    subtitle: "Rulers, poets, travellers and the lives behind the history.",
    evidence: "Historical records · Archive documentation · Oral tradition",
    provinces: ["riyadh", "hail", "madinah"], related: ["language", "muhammad-sadiq", "society"],
    sections: [
      { id: "founders", title: "Founders and the state", sources: ["founding", "darah"], body: [
        "Imam Muhammad bin Saud established the First Saudi State at Diriyah in 1727, the date now marked each year as Founding Day on 22 February. Imam Turki bin Abdullah later re-established the state with Riyadh as capital in 1824.",
        "King Abdulaziz Al Saud recovered Riyadh in 1902 and over three decades united the regions that became the Kingdom of Saudi Arabia in 1932. The Darah, the national archive foundation, preserves documents related to his life and reign.",
      ] },
      { id: "poets", title: "Poets and storytellers", sources: ["heritage"], body: [
        "Poetry has long been the most esteemed art of Arabia. Hatim al-Tai of the Hail region, remembered as a model of generosity, belongs to the pre-Islamic tradition; many stories about him are oral tradition rather than documented history.",
        "Nabati poetry in spoken Arabic recorded tribal history, love, praise and wisdom across Najd and beyond. Poets were remembered by name and their verses carried through recitation long before they were printed.",
      ] },
      { id: "everyday", title: "Ordinary lives", sources: ["heritage", "darah"], body: [
        "Much of Arabian history was made by people whose names were never written down: farmers, pearl divers, builders, weavers and the women who sustained households and crafts.",
        "Oral history projects, family documents and personal testimony help recover these lives. The atlas labels such sources clearly, so readers can see when a story rests on memory rather than written records.",
      ] },
    ],
  },
  {
    slug: "museums", image: museums, imageAlt: "Illustrative museum gallery with pottery and inscribed stones",
    subtitle: "Where the Kingdom's heritage is kept, studied and shown.",
    evidence: "Museum information · Archive documentation · Government information",
    provinces: ["riyadh", "makkah", "eastern"], related: ["archaeology", "heritage-protection", "muhammad-sadiq"],
    sections: [
      { id: "national", title: "The National Museum", sources: ["national-museum"], body: [
        "The National Museum in Riyadh opened in 1999 as part of the King Abdulaziz Historical Center. Its galleries move from the formation of the Arabian Peninsula through ancient kingdoms, the rise of Islam and the Saudi states to unification.",
        "The museum is overseen by the Museums Commission of the Ministry of Culture, which also supports regional museums across the Kingdom.",
      ] },
      { id: "archives", title: "Archives", sources: ["darah"], body: [
        "The King Abdulaziz Foundation for Research and Archives, known as the Darah, was established in 1972. It collects manuscripts, documents, photographs and oral history relating to the history of the Arabian Peninsula and the Kingdom.",
        "Archives differ from museums: they preserve records for research rather than display. Many of the facts in this atlas ultimately rest on documents kept in such collections.",
      ] },
      { id: "regional", title: "Regional and site museums", sources: ["national-museum", "heritage"], body: [
        "Museums at heritage sites and in regional capitals tell local stories, from Masmak Fortress in Riyadh to museums in Abha, Al-Ahsa and AlUla. Private and family museums also preserve objects of daily life.",
        "Visiting details, opening hours and exhibitions change; readers should confirm them with each museum directly.",
      ] },
    ],
  },
  {
    slug: "society", image: society, imageAlt: "Illustrative traditional majlis with coffee pots and patterned rugs",
    subtitle: "Markets, the majlis, festivals and everyday life.",
    evidence: "UNESCO intangible heritage · Government information · Contemporary reporting",
    provinces: ["riyadh", "qassim", "eastern"], related: ["food", "music-dance", "language"],
    sections: [
      { id: "majlis", title: "The majlis", sources: ["unesco-coffee"], body: [
        "The majlis, a sitting room for receiving guests, is central to social life. Guests are welcomed with Arabic coffee and dates, served in an order shaped by custom and respect.",
        "UNESCO inscribed Arabic coffee as a symbol of generosity in 2015, recognising the skills and etiquette of its preparation and serving as shared heritage.",
      ] },
      { id: "souqs", title: "Souqs", sources: ["heritage", "unesco-date-palm"], body: [
        "Traditional markets were organised by trade: dates, spices, cloth, metalwork and livestock each had their place. Some, such as Souq Al-Zal in Riyadh and the markets of Al-Ahsa and Historic Jeddah, keep that character today.",
        "Seasonal markets, like Buraydah's date market in Al-Qassim, reflect agricultural calendars and the knowledge of date cultivation also recognised by UNESCO.",
      ] },
      { id: "occasions", title: "Festivals and change", sources: ["founding", "unesco-ardah"], body: [
        "Eid al-Fitr and Eid al-Adha are the main religious festivals. National occasions include Founding Day on 22 February and National Day on 23 September, often marked with performances of Al-Ardah.",
        "Social life has changed rapidly in recent decades with urban growth and new opportunities in work, entertainment and culture. The atlas records both continuity and change, without treating either as the whole story.",
      ] },
    ],
  },
  {
    slug: "language", image: language, imageAlt: "Illustrative Arabic calligraphy written with a reed pen",
    subtitle: "Arabic in its many voices, from Nabati verse to the modern novel.",
    evidence: "Linguistic research · Archaeological evidence · Literary history",
    provinces: ["najran", "madinah", "riyadh"], related: ["people", "society", "archaeology"],
    sections: [
      { id: "scripts", title: "Ancient scripts", sources: ["unesco-hima", "unesco-hegra"], body: [
        "Long before classical Arabic, the peninsula used many scripts. Inscriptions at Hima in Najran and around AlUla include Ancient South Arabian, Thamudic, Dadanitic and Nabataean texts.",
        "Nabataean writing is widely seen by scholars as an ancestor of the Arabic script. Such links are scholarly interpretation drawn from inscriptions, and research continues to refine them.",
      ] },
      { id: "dialects", title: "Dialects", sources: ["heritage"], body: [
        "Arabic is spoken differently across the Kingdom. Najdi, Hijazi, Gulf and southern dialects differ in pronunciation, vocabulary and rhythm, shaped by geography, trade and history.",
        "Modern Standard Arabic is used in writing, education and the media, while dialects carry everyday speech, humour and oral poetry.",
      ] },
      { id: "literature", title: "Poetry and literature", sources: ["heritage"], body: [
        "Nabati poetry in spoken Arabic remains popular, recited in gatherings and broadcast on television. Classical poetry and Quranic recitation shape a strong sense of the beauty of the language.",
        "In the 20th century, Saudi writers developed the short story and the novel, and literary clubs and book fairs now support a growing modern literature.",
      ] },
    ],
  },
  {
    slug: "economy", image: economy, imageAlt: "Illustrative pearling dhow at sunset with a string of pearls",
    subtitle: "Caravans, pearls, dates and oil.",
    evidence: "Historical records · Contemporary reporting · Government information",
    provinces: ["eastern", "qassim", "najran"], related: ["geography", "transport", "aramco-world"],
    sections: [
      { id: "caravans", title: "Caravans and incense", sources: ["unesco-hegra", "unesco-hima"], body: [
        "In antiquity, frankincense and myrrh from southern Arabia travelled north by caravan. Oasis towns such as Najran, Dadan and Hegra grew rich supplying water, protection and markets along the route.",
        "Later, pilgrimage and regional trade kept caravans moving, and merchants from Al-Qassim became known for long-distance camel trading.",
      ] },
      { id: "pearls", title: "Pearls and palms", sources: ["unesco-ahsa", "unesco-date-palm"], body: [
        "On the Gulf coast, pearl diving was the main economy for generations. Crews spent the summer season at sea, and the trade collapsed in the 1930s with the spread of cultured pearls and global depression.",
        "Inland, date palms provided food, building materials and trade goods. Al-Ahsa's palm gardens are among the largest in the world.",
      ] },
      { id: "oil", title: "The oil era", sources: ["aramcoworld"], body: [
        "In 1938, Dammam No. 7 struck oil in commercial quantities, transforming the economy. Revenues funded roads, schools, hospitals and the rapid growth of cities.",
        "In recent years, national plans have aimed to diversify the economy beyond oil, including tourism and culture, which bring new attention to heritage.",
      ] },
    ],
  },
  {
    slug: "transport", image: transport, imageAlt: "Illustrative desert railway station with an old steam locomotive",
    subtitle: "From camel caravans to railways and growing cities.",
    evidence: "Historical records · Built heritage · Government information",
    provinces: ["tabuk", "madinah", "riyadh"], related: ["economy", "sacred-places", "geography"],
    sections: [
      { id: "caravan", title: "Caravan roads", sources: ["darah"], body: [
        "For most of history people crossed Arabia by camel, following routes between wells. Pilgrim roads from Syria, Egypt and Iraq were the busiest, with forts and stations providing water and protection.",
        "These routes linked towns that today belong to different provinces, which is why many heritage sites sit along old roads.",
      ] },
      { id: "railway", title: "The Hijaz Railway", sources: ["heritage"], body: [
        "The Hijaz Railway, built by the Ottoman state, opened to Madinah in 1908. It cut the journey from Damascus from weeks to days.",
        "The line was damaged during the First World War and never reopened in the Hijaz. Stations survive in places such as Tabuk, AlUla and Madinah, where the old station has become a museum.",
      ] },
      { id: "cities", title: "Growing cities", sources: ["gastat"], body: [
        "Riyadh grew from a walled mud-brick town into one of the largest cities in the Middle East within a few decades. Roads, airports and later modern rail lines connected the regions.",
        "Rapid growth replaced many historic quarters, which has made the protection of surviving old towns more urgent.",
      ] },
    ],
  },
  {
    slug: "heritage-protection", image: conservation, imageAlt: "Illustrative scaffolding against a mud-brick wall under restoration",
    subtitle: "How sites are documented, conserved and passed on.",
    evidence: "UNESCO site documentation · Government information",
    provinces: ["riyadh", "makkah", "eastern", "madinah"], related: ["architecture", "archaeology", "museums"],
    sections: [
      { id: "unesco", title: "World Heritage", sources: ["unesco-hegra", "unesco-diriyah", "unesco-jeddah", "unesco-ahsa"], body: [
        "Hegra became Saudi Arabia's first World Heritage Site in 2008, followed by At-Turaif in Diriyah (2010), Historic Jeddah (2014), the rock art of Hail (2015), Al-Ahsa Oasis (2018) and the Hima Cultural Area (2021).",
        "Inscription brings duties: management plans, monitoring and reporting on the site's condition.",
      ] },
      { id: "living", title: "Living heritage", sources: ["unesco-qatt", "unesco-sadu", "unesco-ardah"], body: [
        "Heritage is not only buildings. UNESCO has also recognised practices such as Al-Qatt Al-Asiri, Al Sadu weaving and Al-Ardah Al-Najdiyah.",
        "Protecting living heritage means supporting the people who practise it, so skills continue to be taught and used.",
      ] },
      { id: "conservation", title: "Conservation in practice", sources: ["heritage", "unesco-diriyah"], body: [
        "Earthen buildings need regular repair with compatible materials. Conservation teams record a building before working on it and try to keep original fabric wherever possible.",
        "The Heritage Commission of the Ministry of Culture registers and protects heritage sites, while local communities often hold the knowledge that makes repairs authentic.",
      ] },
    ],
  },
];
