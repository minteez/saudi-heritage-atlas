export interface Province {
  slug: string;
  name: string;
  nameAr: string;
  capital: string;
  lon: number;
  lat: number;
  landscape: string;
  overview: string;
  highlights: string[];
  sources: string[];
}

export const provinces: Province[] = [
  {
    slug: "riyadh",
    name: "Riyadh",
    nameAr: "منطقة الرياض",
    capital: "Riyadh",
    lon: 46.72,
    lat: 24.71,
    landscape: "Central Najd plateau, Tuwaiq escarpment, wadis",
    overview:
      "Home to the national capital and to Diriyah, seat of the First Saudi State. The region's Najdi mud-brick tradition shaped the architecture of central Arabia.",
    highlights: ["At-Turaif, Diriyah", "Masmak Fortress", "Wadi Hanifah", "Tuwaiq escarpment"],
    sources: ["unesco-diriyah", "darah"],
  },
  {
    slug: "makkah",
    name: "Makkah",
    nameAr: "منطقة مكة المكرمة",
    capital: "Makkah",
    lon: 39.83,
    lat: 21.42,
    landscape: "Red Sea coast, Tihamah plain, Hijaz mountains",
    overview:
      "Contains Makkah, the holiest city in Islam, and Jeddah, historically the port of arrival for pilgrims. Taif lies in the cooler highlands.",
    highlights: ["Al-Masjid Al-Haram", "Historic Jeddah (Al-Balad)", "Taif highlands"],
    sources: ["unesco-jeddah"],
  },
  {
    slug: "madinah",
    name: "Madinah",
    nameAr: "منطقة المدينة المنورة",
    capital: "Madinah",
    lon: 39.61,
    lat: 24.47,
    landscape: "Harrat volcanic fields, oases, sandstone valleys",
    overview:
      "Centred on the city of the Prophet's Mosque. The region also includes AlUla, with the ancient kingdoms of Dadan and Lihyan and Nabataean Hegra.",
    highlights: ["Al-Masjid An-Nabawi", "Hegra, AlUla", "Dadan", "Harrat Khaybar"],
    sources: ["unesco-hegra"],
  },
  {
    slug: "eastern",
    name: "Eastern Province",
    nameAr: "المنطقة الشرقية",
    capital: "Dammam",
    lon: 50.1,
    lat: 26.43,
    landscape: "Arabian Gulf coast, Al-Ahsa oasis, Rub' al Khali margins",
    overview:
      "The largest province by area, with an ancient Gulf maritime culture, the Al-Ahsa oasis, and the oil fields that changed the modern economy.",
    highlights: ["Al-Ahsa Oasis", "Tarut Island", "Dammam No. 7", "Pearling heritage"],
    sources: ["unesco-ahsa", "aramcoworld"],
  },
  {
    slug: "qassim",
    name: "Al-Qassim",
    nameAr: "منطقة القصيم",
    capital: "Buraydah",
    lon: 43.97,
    lat: 26.33,
    landscape: "Agricultural heartland of northern Najd",
    overview: "Known for date cultivation and historic trading towns such as Unaizah and Buraydah.",
    highlights: ["Date markets", "Unaizah old town"],
    sources: ["heritage"],
  },
  {
    slug: "asir",
    name: "Asir",
    nameAr: "منطقة عسير",
    capital: "Abha",
    lon: 42.5,
    lat: 18.22,
    landscape: "Sarawat mountains, terraced highlands, Tihamah",
    overview:
      "A mountainous region with stone and mud towers and the colourful Al-Qatt Al-Asiri wall painting tradition, practised by women.",
    highlights: ["Rijal Alma", "Al-Qatt Al-Asiri", "Sarawat terraces"],
    sources: ["heritage"],
  },
  {
    slug: "tabuk",
    name: "Tabuk",
    nameAr: "منطقة تبوك",
    capital: "Tabuk",
    lon: 36.57,
    lat: 28.38,
    landscape: "Hisma sandstone, northern Red Sea coast, mountains",
    overview: "Borders Jordan and the Gulf of Aqaba; crossed by historic pilgrimage and trade routes from the Levant.",
    highlights: ["Tabuk castle", "Hisma desert", "Northern Red Sea coast"],
    sources: ["heritage"],
  },
  {
    slug: "hail",
    name: "Hail",
    nameAr: "منطقة حائل",
    capital: "Hail",
    lon: 41.69,
    lat: 27.52,
    landscape: "Aja and Salma mountains, Nefud desert edge",
    overview: "Seat of the Al Rashid emirate in the 19th century and home to the UNESCO-listed rock art of Jubbah and Shuwaymis.",
    highlights: ["Jubbah rock art", "Shuwaymis", "Aja mountains"],
    sources: ["unesco-hail"],
  },
  {
    slug: "northern-borders",
    name: "Northern Borders",
    nameAr: "منطقة الحدود الشمالية",
    capital: "Arar",
    lon: 41.04,
    lat: 30.98,
    landscape: "Gravel plains bordering Iraq and Jordan",
    overview: "A frontier region crossed by the historic Darb Zubaydah pilgrimage route.",
    highlights: ["Darb Zubaydah stations"],
    sources: ["heritage"],
  },
  {
    slug: "jazan",
    name: "Jazan",
    nameAr: "منطقة جازان",
    capital: "Jazan",
    lon: 42.55,
    lat: 16.89,
    landscape: "Tihamah coast, Farasan Islands, Fayfa mountains",
    overview: "The southwestern coastal region, with the Farasan archipelago and distinctive coastal and mountain cultures.",
    highlights: ["Farasan Islands", "Jabal Fayfa"],
    sources: ["heritage"],
  },
  {
    slug: "najran",
    name: "Najran",
    nameAr: "منطقة نجران",
    capital: "Najran",
    lon: 44.13,
    lat: 17.49,
    landscape: "Oasis valley at the edge of the Empty Quarter",
    overview: "An ancient oasis on the incense route, known for multi-storey mud towers and the Hima rock-art landscape.",
    highlights: ["Al-Ukhdood", "Hima Cultural Area", "Mud-tower architecture"],
    sources: ["unesco-hima"],
  },
  {
    slug: "al-bahah",
    name: "Al-Bahah",
    nameAr: "منطقة الباحة",
    capital: "Al-Bahah",
    lon: 41.47,
    lat: 20.01,
    landscape: "Sarawat highlands, juniper forests",
    overview: "The smallest province by area, known for stone villages such as Dhee Ain and forested highlands.",
    highlights: ["Dhee Ain village", "Juniper forests"],
    sources: ["heritage"],
  },
  {
    slug: "al-jawf",
    name: "Al-Jawf",
    nameAr: "منطقة الجوف",
    capital: "Sakaka",
    lon: 40.2,
    lat: 29.97,
    landscape: "Northern basin, olive groves, Nefud margins",
    overview: "Home to Dumat al-Jandal, an ancient oasis town at the junction of routes between Arabia, Syria and Iraq.",
    highlights: ["Dumat al-Jandal", "Marid Castle", "Rajajil standing stones"],
    sources: ["heritage"],
  },
];

export const getProvince = (slug: string) => provinces.find((p) => p.slug === slug);
