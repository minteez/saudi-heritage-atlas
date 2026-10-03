export type Layer = "cities" | "archaeology" | "heritage" | "routes";

export interface Place {
  id: string;
  name: string;
  nameAr: string;
  lon: number;
  lat: number;
  layer: Layer;
  note: string;
  article?: string;
}

export const places: Place[] = [
  { id: "riyadh", name: "Riyadh", nameAr: "الرياض", lon: 46.72, lat: 24.71, layer: "cities", note: "Capital since 1824 (Second Saudi State) and of the Kingdom.", article: "masmak" },
  { id: "jeddah", name: "Jeddah", nameAr: "جدة", lon: 39.17, lat: 21.54, layer: "cities", note: "Historic Red Sea port and gateway for pilgrims." },
  { id: "makkah", name: "Makkah", nameAr: "مكة المكرمة", lon: 39.83, lat: 21.42, layer: "cities", note: "Holiest city in Islam." },
  { id: "madinah", name: "Madinah", nameAr: "المدينة المنورة", lon: 39.61, lat: 24.47, layer: "cities", note: "City of the Prophet's Mosque." },
  { id: "dammam", name: "Dammam", nameAr: "الدمام", lon: 50.1, lat: 26.43, layer: "cities", note: "Gulf city at the centre of the oil era." },
  { id: "abha", name: "Abha", nameAr: "أبها", lon: 42.5, lat: 18.22, layer: "cities", note: "Highland capital of Asir." },
  { id: "tabuk", name: "Tabuk", nameAr: "تبوك", lon: 36.57, lat: 28.38, layer: "cities", note: "Northwestern regional capital." },
  { id: "hail", name: "Hail", nameAr: "حائل", lon: 41.69, lat: 27.52, layer: "cities", note: "Historic seat of the Al Rashid." },
  { id: "hegra", name: "Hegra", nameAr: "الحجر", lon: 37.95, lat: 26.79, layer: "archaeology", note: "Nabataean city, UNESCO 2008." },
  { id: "tayma", name: "Tayma", nameAr: "تيماء", lon: 38.55, lat: 27.63, layer: "archaeology", note: "Ancient oasis on the incense route." },
  { id: "jubbah", name: "Jubbah", nameAr: "جبة", lon: 40.93, lat: 28.02, layer: "archaeology", note: "Rock art, UNESCO 2015." },
  { id: "faw", name: "Qaryat al-Faw", nameAr: "قرية الفاو", lon: 45.13, lat: 19.77, layer: "archaeology", note: "Ancient caravan city on the edge of the Empty Quarter." },
  { id: "hima", name: "Hima", nameAr: "حمى", lon: 44.2, lat: 18.25, layer: "archaeology", note: "Rock-art landscape, UNESCO 2021." },
  { id: "diriyah", name: "Diriyah", nameAr: "الدرعية", lon: 46.3, lat: 24.95, layer: "heritage", note: "At-Turaif, UNESCO 2010.", article: "diriyah" },
  { id: "albalad", name: "Historic Jeddah", nameAr: "جدة التاريخية", lon: 38.9, lat: 21.8, layer: "heritage", note: "Coral-stone houses, UNESCO 2014." },
  { id: "ahsa", name: "Al-Ahsa Oasis", nameAr: "واحة الأحساء", lon: 49.6, lat: 25.38, layer: "heritage", note: "Cultural landscape, UNESCO 2018." },
  { id: "rijal", name: "Rijal Alma", nameAr: "رجال ألمع", lon: 42.27, lat: 18.21, layer: "heritage", note: "Stone tower village of Asir." },
];

// Approximate schematic outline of Saudi Arabia (lon, lat). Not survey-accurate.
export const outline: [number, number][] = [
  [34.95, 29.35], [36.07, 29.19], [36.75, 29.86], [37.66, 30.33], [37.0, 31.5], [38.0, 31.8], [39.2, 32.15],
  [40.4, 31.9], [42.0, 31.1], [44.7, 29.2], [46.5, 29.1], [47.4, 28.5], [48.4, 28.5],
  [48.8, 27.6], [49.3, 27.1], [50.1, 26.6], [50.2, 25.8], [50.6, 25.0], [50.8, 24.75], [51.6, 24.25],
  [52.6, 22.9], [55.2, 22.7], [55.6, 22.0], [55.0, 20.0], [52.0, 19.0], [49.0, 18.6],
  [47.5, 17.1], [46.4, 17.2], [44.0, 17.4], [43.3, 17.5], [43.0, 16.7], [42.8, 16.4],
  [42.5, 17.0], [41.5, 18.6], [40.7, 19.8], [39.7, 20.8], [39.1, 21.5], [38.6, 23.0], [37.4, 24.3],
  [36.6, 25.6], [35.6, 27.1], [35.0, 28.1], [34.6, 28.1],
];

export const W = 1000;
export const H = 800;
const LON0 = 34, LON1 = 56.5, LAT0 = 15.5, LAT1 = 33;
export const project = (lon: number, lat: number): [number, number] => [
  ((lon - LON0) / (LON1 - LON0)) * W,
  ((LAT1 - lat) / (LAT1 - LAT0)) * H,
];

// Darb Zubaydah (Kufa → Makkah), schematic
export const routes = [
  { id: "zubaydah", name: "Darb Zubaydah", points: [[43.5, 31.6], [42.2, 29.8], [41.7, 27.5], [41.2, 25.6], [40.6, 23.4], [39.83, 21.42]] as [number, number][] },
  { id: "incense", name: "Incense route", points: [[44.13, 17.49], [43.0, 19.8], [41.0, 21.5], [39.61, 24.47], [37.95, 26.79], [38.55, 27.63], [36.6, 29.4]] as [number, number][] },
];
