export type SourceType =
  | "UNESCO"
  | "Government"
  | "Academic"
  | "Archive"
  | "Magazine"
  | "Museum";

export interface Source {
  id: string;
  title: string;
  publisher: string;
  type: SourceType;
  url: string;
  note?: string;
}

export const sources: Record<string, Source> = {
  "unesco-hegra": {
    id: "unesco-hegra",
    title: "Hegra Archaeological Site (al-Hijr / Madâin Sâlih)",
    publisher: "UNESCO World Heritage Centre",
    type: "UNESCO",
    url: "https://whc.unesco.org/en/list/1293/",
  },
  "unesco-diriyah": {
    id: "unesco-diriyah",
    title: "At-Turaif District in ad-Dir'iyah",
    publisher: "UNESCO World Heritage Centre",
    type: "UNESCO",
    url: "https://whc.unesco.org/en/list/1329/",
  },
  "unesco-jeddah": {
    id: "unesco-jeddah",
    title: "Historic Jeddah, the Gate to Makkah",
    publisher: "UNESCO World Heritage Centre",
    type: "UNESCO",
    url: "https://whc.unesco.org/en/list/1361/",
  },
  "unesco-hail": {
    id: "unesco-hail",
    title: "Rock Art in the Hail Region of Saudi Arabia",
    publisher: "UNESCO World Heritage Centre",
    type: "UNESCO",
    url: "https://whc.unesco.org/en/list/1472/",
  },
  "unesco-ahsa": {
    id: "unesco-ahsa",
    title: "Al-Ahsa Oasis, an Evolving Cultural Landscape",
    publisher: "UNESCO World Heritage Centre",
    type: "UNESCO",
    url: "https://whc.unesco.org/en/list/1563/",
  },
  "unesco-hima": {
    id: "unesco-hima",
    title: "Ḥimā Cultural Area",
    publisher: "UNESCO World Heritage Centre",
    type: "UNESCO",
    url: "https://whc.unesco.org/en/list/1619/",
  },
  "groucutt-2018": {
    id: "groucutt-2018",
    title: "Homo sapiens in Arabia by 85,000 years ago",
    publisher: "Groucutt et al., Nature Ecology & Evolution (2018)",
    type: "Academic",
    url: "https://www.nature.com/articles/s41559-018-0518-2",
  },
  darah: {
    id: "darah",
    title: "King Abdulaziz Foundation for Research and Archives (Darah)",
    publisher: "Darat al-Malik Abdulaziz",
    type: "Archive",
    url: "https://www.darah.org.sa/",
  },
  heritage: {
    id: "heritage",
    title: "Heritage Commission",
    publisher: "Ministry of Culture, Saudi Arabia",
    type: "Government",
    url: "https://heritage.moc.gov.sa/",
  },
  aramcoworld: {
    id: "aramcoworld",
    title: "AramcoWorld magazine archive",
    publisher: "Aramco Americas",
    type: "Magazine",
    url: "https://www.aramcoworld.com/",
  },
  "national-museum": {
    id: "national-museum",
    title: "National Museum of Saudi Arabia",
    publisher: "Museums Commission",
    type: "Museum",
    url: "https://museums.moc.gov.sa/",
  },
  founding: {
    id: "founding",
    title: "Founding Day (22 February 1727)",
    publisher: "Saudi Press Agency",
    type: "Government",
    url: "https://www.spa.gov.sa/",
  },
  gastat: {
    id: "gastat",
    title: "Saudi Census and regional statistics",
    publisher: "General Authority for Statistics (GASTAT)",
    type: "Government",
    url: "https://www.stats.gov.sa/",
  },
};

export const getSources = (ids: string[]) => ids.map((i) => sources[i]).filter(Boolean);
