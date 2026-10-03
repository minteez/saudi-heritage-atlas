export interface Collection {
  slug: string;
  name: string;
  nameAr: string;
  status: "published" | "expanding";
  intro: string;
  planned: string[];
  sources: string[];
  articles?: string[];
}

export const collections: Collection[] = [
  { slug: "archaeology", name: "Archaeology", nameAr: "الآثار", status: "published", intro: "From Palaeolithic tools to Nabataean tombs, the Arabian Peninsula holds one of the deepest archaeological records in the region.", planned: ["Dadan & Lihyan", "Qaryat al-Faw", "Mustatils", "Tarut Island"], sources: ["unesco-hegra", "unesco-hail", "groucutt-2018"], articles: ["hegra"] },
  { slug: "architecture", name: "Architecture", nameAr: "العمارة", status: "published", intro: "Najdi mud-brick, Hijazi coral stone, Asiri stone towers and Gulf coral-and-gypsum houses — architecture shaped by climate and materials.", planned: ["Rawashin of Jeddah", "Najran mud towers", "Contemporary Saudi architecture"], sources: ["unesco-diriyah", "unesco-jeddah"], articles: ["diriyah", "masmak"] },
  { slug: "sacred-places", name: "Religion & Sacred Places", nameAr: "الدين والأماكن المقدسة", status: "expanding", intro: "The history and architecture of Al-Masjid Al-Haram and Al-Masjid An-Nabawi, presented respectfully and with clear sourcing.", planned: ["Expansions of Al-Masjid Al-Haram", "History of Al-Masjid An-Nabawi", "Pilgrimage routes"], sources: ["darah"] },
  { slug: "muhammad-sadiq", name: "Muhammad Sadiq Collection", nameAr: "مجموعة محمد صادق", status: "expanding", intro: "Muhammad Sadiq Bey, an Egyptian army officer and surveyor, made some of the earliest known photographs of Madinah (1861) and Makkah (1880).", planned: ["Photographs of Madinah", "Photographs of Makkah", "Travel accounts"], sources: ["darah"] },
  { slug: "aramco-world", name: "AramcoWorld Collection", nameAr: "مجموعة أرامكو وورلد", status: "expanding", intro: "A guide to decades of AramcoWorld reporting on Arabian culture, with links to the original articles rather than reproductions.", planned: ["January–February 1999 issue", "Articles on Najd", "Photography archive"], sources: ["aramcoworld"] },
  { slug: "food", name: "Food Atlas", nameAr: "أطلس الطعام", status: "expanding", intro: "Regional food cultures, from Najdi jareesh to Hijazi dishes, Gulf seafood and southern highland breads.", planned: ["Coffee & dates", "Regional dishes by province", "Hospitality customs"], sources: ["heritage"] },
  { slug: "music-dance", name: "Music & Dance", nameAr: "الموسيقى والرقص", status: "expanding", intro: "Ardah, mizmar, khatwah, sea songs of the Gulf and many regional traditions.", planned: ["Al-Ardah Al-Najdiyah", "Mizmar", "Fijiri sea songs"], sources: ["heritage"] },
  { slug: "arts-crafts", name: "Arts & Crafts", nameAr: "الفنون والحرف", status: "expanding", intro: "Sadu weaving, Al-Qatt Al-Asiri, calligraphy, pottery and metalwork.", planned: ["Al-Sadu", "Al-Qatt Al-Asiri", "Palm-frond crafts"], sources: ["heritage"] },
  { slug: "clothing", name: "Clothing", nameAr: "الأزياء", status: "expanding", intro: "Regional dress traditions across the Kingdom, beyond a single national costume.", planned: ["Regional women's dress", "Headwear", "Textiles"], sources: ["heritage"] },
  { slug: "geography", name: "Geography", nameAr: "الجغرافيا", status: "expanding", intro: "Deserts, mountains, volcanic harrats, coasts and coral reefs.", planned: ["Rub' al Khali", "Harrats", "Red Sea reefs", "Wildlife"], sources: ["gastat"] },
  { slug: "people", name: "People", nameAr: "الشخصيات", status: "expanding", intro: "Biographies of rulers, scholars, poets, artists, scientists and ordinary lives.", planned: ["King Abdulaziz", "Poets of Najd", "Women in Saudi history"], sources: ["darah"] },
  { slug: "museums", name: "Museums & Archives", nameAr: "المتاحف والأرشيف", status: "expanding", intro: "A directory of museums and archives documenting Saudi heritage.", planned: ["National Museum", "Darah archives", "Regional museums"], sources: ["national-museum", "darah"] },
  { slug: "society", name: "Society & Lifestyle", nameAr: "المجتمع ونمط الحياة", status: "expanding", intro: "Daily life, family, markets, festivals and social change.", planned: ["Souqs", "Majlis culture", "Festivals"], sources: [] },
  { slug: "language", name: "Literature & Language", nameAr: "الأدب واللغة", status: "expanding", intro: "Arabic dialects, Nabati poetry and modern literature.", planned: ["Dialect map", "Nabati poetry", "Modern novelists"], sources: [] },
  { slug: "economy", name: "Economy & Oil", nameAr: "الاقتصاد والنفط", status: "expanding", intro: "Pearling, caravan trade, agriculture and the oil era.", planned: ["Pearling", "Dammam No. 7", "Vision 2030"], sources: ["aramcoworld"] },
  { slug: "transport", name: "Transport & Urbanization", nameAr: "النقل والتحضر", status: "expanding", intro: "From caravans and the Hejaz Railway to modern cities.", planned: ["Hejaz Railway", "Riyadh's growth"], sources: [] },
  { slug: "heritage-protection", name: "Heritage Protection", nameAr: "حماية التراث", status: "expanding", intro: "How heritage sites are documented, restored and protected.", planned: ["UNESCO sites", "Restoration projects"], sources: ["heritage"] },
];

export const getCollection = (slug: string) => collections.find((c) => c.slug === slug);
