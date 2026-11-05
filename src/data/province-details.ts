// Long-form province profiles. Each section body is one paragraph or a paragraph list.
export interface ProvinceSection {
  id: string;
  title: string;
  body: string | string[];
}

export interface ProvinceDetail {
  sections: ProvinceSection[];
  keyPlaces: { name: string; note: string }[];
  traditions: string[];
}

export const provinceDetails: Record<string, ProvinceDetail> = {
  riyadh: {
    sections: [
      { id: "landscape", title: "Plateau and wadi", body: "The region lies on the Najd plateau. The Tuwaiq escarpment runs north–south through it, and Wadi Hanifah carried seasonal water that made settlements and palm gardens possible along its banks." },
      { id: "history", title: "Seat of three Saudi states", body: [
        "Diriyah, on Wadi Hanifah, was the seat of the First Saudi State, founded in 1727. After Diriyah was besieged and destroyed in 1818, Riyadh became the capital of the Second Saudi State from 1824.",
        "In 1902 Abdulaziz Al Saud recovered Riyadh at Masmak Fortress, the event usually taken as the beginning of the unification that led to the Kingdom in 1932.",
      ] },
      { id: "architecture", title: "Najdi building", body: "Traditional Najdi buildings use sun-dried mud brick on stone footings, with palm-trunk and tamarisk roofs, thick walls, small openings and triangular wall vents. At-Turaif in Diriyah, a UNESCO World Heritage Site since 2010, is the best-known surviving ensemble." },
      { id: "culture", title: "Living culture", body: "Central Arabia is the home of Al-Ardah Al-Najdiyah, a performance of drumming, poetry and sword-bearing ranks inscribed by UNESCO in 2015. Najdi cooking includes dishes such as kabsa and jareesh, served with Arabic coffee and dates." },
    ],
    keyPlaces: [
      { name: "At-Turaif, Diriyah", note: "UNESCO 2010; mud-brick seat of the First Saudi State." },
      { name: "Masmak Fortress", note: "Site of the 1902 recovery of Riyadh; now a museum." },
      { name: "National Museum", note: "National history galleries in the King Abdulaziz Historical Center." },
    ],
    traditions: ["Al-Ardah Al-Najdiyah", "Najdi mud-brick building", "Arabic coffee"],
  },
  makkah: {
    sections: [
      { id: "landscape", title: "Coast, plain and mountain", body: "The region stretches from the Red Sea shore across the Tihamah coastal plain into the Hijaz mountains, where Taif sits at a cooler altitude among orchards and rose farms." },
      { id: "history", title: "The sacred city and its port", body: [
        "Makkah is the holiest city in Islam and the destination of the Hajj and Umrah. For centuries the pilgrimage shaped the economy, population and hospitality of the whole region.",
        "Jeddah became the city's sea gateway in 646 CE. Its merchant houses and markets connected the Hijaz to the Indian Ocean and Mediterranean trade.",
      ] },
      { id: "architecture", title: "Coral stone and rawashin", body: "Historic Jeddah's tower houses were built of coral stone from the Red Sea shore, with carved wooden rawashin (projecting latticed windows) that shaded rooms and caught breezes. The district has been a UNESCO World Heritage Site since 2014." },
      { id: "culture", title: "A meeting of peoples", body: "Pilgrims who settled over generations brought foods, words and crafts from across the Muslim world, giving Hijazi culture its mixed character. Taif's rose-water distilling is a well-known seasonal tradition." },
    ],
    keyPlaces: [
      { name: "Al-Masjid Al-Haram", note: "The Great Mosque surrounding the Kaaba." },
      { name: "Historic Jeddah (Al-Balad)", note: "UNESCO 2014; coral-stone houses and markets." },
      { name: "Taif", note: "Highland city known for roses and summer retreats." },
    ],
    traditions: ["Hospitality to pilgrims", "Taif rose water", "Hijazi cuisine"],
  },
  madinah: {
    sections: [
      { id: "landscape", title: "Lava fields and oases", body: "Volcanic harrat fields surround fertile oases. To the north, the sandstone valleys of AlUla preserve one of the richest archaeological landscapes in Arabia." },
      { id: "history", title: "City of the Prophet", body: [
        "Madinah, formerly Yathrib, received the Prophet Muhammad in 622 CE, the Hijra that begins the Islamic calendar. The Prophet's Mosque is the second holiest site in Islam.",
        "Long before, AlUla was the centre of the kingdoms of Dadan and Lihyan, and later of the Nabataean city of Hegra on the incense trade route.",
      ] },
      { id: "architecture", title: "Tombs carved in rock", body: "Hegra contains 111 monumental tombs carved into sandstone outcrops in the 1st century BCE and 1st century CE. It became Saudi Arabia's first UNESCO World Heritage Site in 2008. AlUla's old town preserves a mud-brick settlement of narrow lanes." },
      { id: "culture", title: "Living culture", body: "The oases are known for date cultivation, including the prized Ajwa dates of Madinah. The Hijaz Railway station in Madinah recalls the early 20th-century line from Damascus." },
    ],
    keyPlaces: [
      { name: "Al-Masjid An-Nabawi", note: "The Prophet's Mosque." },
      { name: "Hegra, AlUla", note: "UNESCO 2008; Nabataean tombs." },
      { name: "Dadan", note: "Capital of the ancient kingdoms of Dadan and Lihyan." },
    ],
    traditions: ["Date cultivation", "Hospitality to visitors", "Oasis agriculture"],
  },
  eastern: {
    sections: [
      { id: "landscape", title: "Gulf shore and great oasis", body: "The Eastern Province runs along the Arabian Gulf, inland to the Al-Ahsa oasis and south into the sands of the Rub' al Khali. It is the largest province by area." },
      { id: "history", title: "Dilmun, pearls and oil", body: [
        "The coast belonged to ancient Gulf trading networks; Tarut Island has yielded finds associated with the Dilmun civilisation.",
        "For centuries pearling and date farming sustained the region. In 1938 oil was found in commercial quantities at Dammam No. 7, transforming the economy of the Kingdom.",
      ] },
      { id: "architecture", title: "Oasis and coast", body: "Al-Ahsa, a UNESCO World Heritage Site since 2018, preserves gardens, canals, springs, historic buildings and archaeological sites. Coastal towns used gypsum and coral stone, with wind-catching openings." },
      { id: "culture", title: "Living culture", body: "Sea songs, crafts such as weaving palm fronds, and Al-Ahsa's traditional markets reflect the region's maritime and oasis heritage. The Hasawi bisht has long been associated with Al-Ahsa." },
    ],
    keyPlaces: [
      { name: "Al-Ahsa Oasis", note: "UNESCO 2018; among the world's largest oases." },
      { name: "Tarut Island", note: "Ancient Gulf settlement and fort." },
      { name: "Dammam No. 7", note: "The 1938 'Prosperity Well'." },
    ],
    traditions: ["Pearling heritage", "Palm-frond crafts", "Bisht making"],
  },
  qassim: {
    sections: [
      { id: "landscape", title: "Farming heartland", body: "Al-Qassim lies in northern Najd, among sand belts and wadis with good groundwater. It is one of the Kingdom's major agricultural regions." },
      { id: "history", title: "Trading towns", body: "Buraydah and Unaizah grew as market and caravan towns linking Najd with Iraq, Syria and the Hijaz. Merchants from the region, known as the 'Uqailat', travelled widely in the camel trade." },
      { id: "architecture", title: "Old towns", body: "Unaizah and other towns retain mud-brick quarters, mosques and markets in the Najdi style, some now restored as heritage districts." },
      { id: "culture", title: "Living culture", body: "Buraydah's seasonal date market is one of the largest in the region. Dates, wheat dishes and Najdi coffee customs remain central to hospitality." },
    ],
    keyPlaces: [
      { name: "Buraydah date market", note: "Major seasonal date trade." },
      { name: "Unaizah old town", note: "Mud-brick heritage quarter." },
    ],
    traditions: ["Date trade", "Najdi hospitality", "Camel caravan heritage"],
  },
  asir: {
    sections: [
      { id: "landscape", title: "The Sarawat highlands", body: "Asir rises steeply from the Tihamah plain to mountains above 2,000 metres. Higher rainfall supports juniper woodland and terraced farming." },
      { id: "history", title: "Mountain trade routes", body: "Highland villages controlled routes between Yemen and the Hijaz. The region's towns kept strong local identities and tribal traditions." },
      { id: "architecture", title: "Stone and mud towers", body: "Rijal Alma's multi-storey stone houses and Abha's mud buildings with slate bands (to shed rain) are distinctive. Interiors were often decorated with Al-Qatt Al-Asiri painting." },
      { id: "culture", title: "Al-Qatt Al-Asiri", body: "Women traditionally painted interior walls with bold geometric patterns. The practice was inscribed by UNESCO in 2017. Flower crowns worn by men in parts of the region are another local tradition." },
    ],
    keyPlaces: [
      { name: "Rijal Alma", note: "Stone tower village and museum." },
      { name: "Abha", note: "Highland capital of Asir." },
    ],
    traditions: ["Al-Qatt Al-Asiri", "Terraced farming", "Highland dress and flower crowns"],
  },
  tabuk: {
    sections: [
      { id: "landscape", title: "Sandstone and sea", body: "The Hisma desert's sandstone formations, mountains and the northern Red Sea coast along the Gulf of Aqaba define the region." },
      { id: "history", title: "Road from the north", body: "Tabuk lay on the Syrian pilgrimage route to Makkah and later on the Hijaz Railway. The Prophet led an expedition to Tabuk in 630 CE." },
      { id: "architecture", title: "Forts and stations", body: "Tabuk Castle, rebuilt in the Ottoman period, served pilgrims. Hijaz Railway stations survive across the region." },
      { id: "culture", title: "Living culture", body: "Bedouin traditions of poetry, coffee and camel herding remain strong; the coast supports fishing communities." },
    ],
    keyPlaces: [
      { name: "Tabuk Castle", note: "Pilgrim fort on the Syrian route." },
      { name: "Hisma desert", note: "Sandstone landscape with rock inscriptions." },
    ],
    traditions: ["Bedouin poetry", "Camel herding", "Coastal fishing"],
  },
  hail: {
    sections: [
      { id: "landscape", title: "Between two mountains", body: "Hail sits between the Aja and Salma ranges on the southern edge of the Nefud desert." },
      { id: "history", title: "Rock art and emirate", body: [
        "Jubbah and Shuwaymis preserve thousands of years of rock carvings of people and animals; they were inscribed by UNESCO in 2015.",
        "In the 19th century Hail was the seat of the Al Rashid emirate until it joined the Saudi state in 1921.",
      ] },
      { id: "architecture", title: "Forts of Hail", body: "Qishlah and A'arif forts recall the town's role as a regional capital." },
      { id: "culture", title: "Living culture", body: "Hail is associated with Hatim al-Tai, the pre-Islamic poet remembered across Arabia as a model of generosity." },
    ],
    keyPlaces: [
      { name: "Jubbah", note: "UNESCO rock art." },
      { name: "Shuwaymis", note: "UNESCO rock art." },
      { name: "A'arif Fort", note: "Hilltop fort overlooking Hail." },
    ],
    traditions: ["Generosity of Hatim al-Tai", "Bedouin poetry"],
  },
  "northern-borders": {
    sections: [
      { id: "landscape", title: "Gravel plains", body: "Wide gravel plains and seasonal valleys border Iraq and Jordan." },
      { id: "history", title: "Darb Zubaydah", body: "The Abbasid pilgrimage road from Kufa to Makkah crossed this region. It is named after Zubaydah, wife of Caliph Harun al-Rashid, who funded wells and stations along it." },
      { id: "architecture", title: "Stations and cisterns", body: "Archaeological stations with cisterns and walls mark stages of the road." },
      { id: "culture", title: "Living culture", body: "Pastoral Bedouin life, spring desert camping and poetry remain part of local identity." },
    ],
    keyPlaces: [{ name: "Darb Zubaydah stations", note: "Abbasid pilgrimage route." }],
    traditions: ["Desert camping", "Herding"],
  },
  jazan: {
    sections: [
      { id: "landscape", title: "Coast, islands, mountains", body: "Jazan joins the hot Tihamah coast, the Farasan Islands and the Fayfa mountains." },
      { id: "history", title: "Red Sea crossings", body: "Close to Yemen and the African coast, Jazan has long been part of Red Sea exchange. The Farasan Islands preserve Ottoman-era and earlier remains." },
      { id: "architecture", title: "Huts and stone houses", body: "Coastal communities built reed and thatch huts suited to heat; Fayfa's mountain villages use stone houses on terraces." },
      { id: "culture", title: "Living culture", body: "Mango and coffee farming, the Farasan Hareed fish festival and distinctive coastal music are local traditions." },
    ],
    keyPlaces: [
      { name: "Farasan Islands", note: "Archipelago and marine reserve." },
      { name: "Jabal Fayfa", note: "Terraced mountain villages." },
    ],
    traditions: ["Hareed festival", "Mountain coffee farming"],
  },
  najran: {
    sections: [
      { id: "landscape", title: "Oasis on the edge", body: "Najran's valley lies between southern mountains and the Empty Quarter." },
      { id: "history", title: "Incense road", body: "An ancient stop on the incense route, Najran includes the Al-Ukhdood archaeological site. The Hima Cultural Area, with rock art and inscriptions, was inscribed by UNESCO in 2021." },
      { id: "architecture", title: "Mud towers", body: "Multi-storey mud-brick houses and the Emirate Palace show a strong building tradition." },
      { id: "culture", title: "Living culture", body: "Crafts such as daggers (janbiya), leatherwork and pottery continue in local markets." },
    ],
    keyPlaces: [
      { name: "Al-Ukhdood", note: "Ancient city site." },
      { name: "Hima Cultural Area", note: "UNESCO 2021 rock art." },
    ],
    traditions: ["Mud-tower building", "Janbiya craft"],
  },
  "al-bahah": {
    sections: [
      { id: "landscape", title: "Forested highlands", body: "Al-Bahah, the smallest province, sits in the Sarawat mountains with juniper forests and steep escarpments." },
      { id: "history", title: "Tribal villages", body: "Villages of the Ghamid and Zahran tribes defended valleys and farmland with stone towers." },
      { id: "architecture", title: "Dhee Ain", body: "The marble village of Dhee Ain, built on a rocky hill above banana and palm gardens, is the region's best-known heritage site." },
      { id: "culture", title: "Living culture", body: "Honey production, terrace farming and mountain dances remain important." },
    ],
    keyPlaces: [{ name: "Dhee Ain", note: "Stone village on a marble hill." }],
    traditions: ["Honey", "Terrace farming"],
  },
  "al-jawf": {
    sections: [
      { id: "landscape", title: "Northern basin", body: "A basin on the edge of the Nefud, now known for olive groves." },
      { id: "history", title: "Dumat al-Jandal", body: "Dumat al-Jandal is mentioned in Assyrian records as 'Adummatu' and was a junction of routes between Arabia, Syria and Iraq." },
      { id: "architecture", title: "Marid and Omar mosque", body: "Marid Castle and the Mosque of Omar, with its stone minaret, are major historic monuments. The Rajajil standing stones are prehistoric." },
      { id: "culture", title: "Living culture", body: "Olive oil production and Sadu weaving are part of the region's heritage." },
    ],
    keyPlaces: [
      { name: "Dumat al-Jandal", note: "Ancient oasis town." },
      { name: "Marid Castle", note: "Stone fortress." },
      { name: "Rajajil", note: "Prehistoric standing stones." },
    ],
    traditions: ["Olive farming", "Sadu weaving"],
  },
};
