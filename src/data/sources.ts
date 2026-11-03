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
  "unesco-coffee": {
    id: "unesco-coffee", title: "Arabic coffee, a symbol of generosity",
    publisher: "UNESCO Intangible Cultural Heritage", type: "UNESCO",
    url: "https://ich.unesco.org/en/RL/arabic-coffee-a-symbol-of-generosity-02111",
  },
  "unesco-qatt": {
    id: "unesco-qatt", title: "Al-Qatt Al-Asiri, female traditional interior wall decoration in Asir, Saudi Arabia",
    publisher: "UNESCO Intangible Cultural Heritage", type: "UNESCO",
    url: "https://ich.unesco.org/en/RL/al-qatt-al-asiri-female-traditional-interior-wall-decoration-in-asir-saudi-arabia-01261",
  },
  "unesco-sadu": {
    id: "unesco-sadu", title: "Traditional weaving of Al Sadu",
    publisher: "UNESCO Intangible Cultural Heritage", type: "UNESCO",
    url: "https://ich.unesco.org/en/RL/traditional-weaving-of-al-sadu-02158",
  },
  "unesco-ardah": {
    id: "unesco-ardah", title: "Alardah Alnajdiyah, dance, drumming and poetry in Saudi Arabia",
    publisher: "UNESCO Intangible Cultural Heritage", type: "UNESCO",
    url: "https://ich.unesco.org/en/RL/alardah-alnajdiyah-dance-drumming-and-poetry-in-saudi-arabia-01196",
  },
  "unesco-date-palm": {
    id: "unesco-date-palm", title: "Date palm, knowledge, skills, traditions and practices",
    publisher: "UNESCO Intangible Cultural Heritage", type: "UNESCO",
    url: "https://ich.unesco.org/en/RL/date-palm-knowledge-skills-traditions-and-practices-01902",
  },
  "bisht-inventory": {
    id: "bisht-inventory", title: "Knowledge and practices associated with the traditional craft of Bisht",
    publisher: "Saudi national inventory, hosted by UNESCO", type: "Government",
    url: "https://ich.unesco.org/doc/download.php?versionID=77383",
    note: "National inventory documentation; not, by itself, a claim of UNESCO inscription.",
  },
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

export const getSources = (ids: string[]) => ids.map((i) => sources[i]).filter((s): s is Source => !!s);
