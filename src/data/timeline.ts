export type Evidence =
  | "Archaeological evidence"
  | "Historical record"
  | "Religious tradition"
  | "Scholarly interpretation"
  | "Government information";

export interface Era {
  id: string;
  name: string;
  nameAr: string;
  range: string;
}

export const eras: Era[] = [
  { id: "prehistoric", name: "Prehistoric Arabia", nameAr: "ما قبل التاريخ", range: "Palaeolithic – Neolithic" },
  { id: "ancient", name: "Ancient Arabia", nameAr: "الجزيرة العربية القديمة", range: "c. 3rd millennium BCE – 6th c. CE" },
  { id: "islamic", name: "Early Islamic Arabia", nameAr: "صدر الإسلام", range: "6th – 8th c. CE" },
  { id: "ottoman", name: "Ottoman-era Arabia", nameAr: "العهد العثماني", range: "16th – 20th c." },
  { id: "first", name: "First Saudi State", nameAr: "الدولة السعودية الأولى", range: "1727 – 1818" },
  { id: "second", name: "Second Saudi State", nameAr: "الدولة السعودية الثانية", range: "1824 – 1891" },
  { id: "third", name: "Unification", nameAr: "التوحيد", range: "1902 – 1932" },
  { id: "modern", name: "Modern Saudi Arabia", nameAr: "المملكة الحديثة", range: "1932 – present" },
];

export interface TimelineEvent {
  id: string;
  era: string;
  date: string;
  title: string;
  summary: string;
  evidence: Evidence;
  place?: string;
  sources: string[];
}

export const events: TimelineEvent[] = [
  {
    id: "al-wusta",
    era: "prehistoric",
    date: "c. 85,000 years ago",
    title: "Early Homo sapiens at Al-Wusta",
    summary:
      "A fossil finger bone found at Al-Wusta in the Nefud desert is among the oldest directly dated Homo sapiens fossils outside Africa and the Levant, from a time when the region held freshwater lakes.",
    evidence: "Archaeological evidence",
    place: "Nefud desert",
    sources: ["groucutt-2018"],
  },
  {
    id: "hail-rock-art",
    era: "prehistoric",
    date: "Neolithic onward",
    title: "Rock art of Jubbah and Shuwaymis",
    summary:
      "Thousands of petroglyphs depicting humans and animals record millennia of life in the Hail region. Inscribed on the UNESCO World Heritage List in 2015.",
    evidence: "Archaeological evidence",
    place: "Hail",
    sources: ["unesco-hail"],
  },
  {
    id: "tayma",
    era: "ancient",
    date: "6th c. BCE",
    title: "Nabonidus at Tayma",
    summary:
      "Babylonian sources record that King Nabonidus spent around a decade at the oasis of Tayma, a major station on the incense routes.",
    evidence: "Historical record",
    place: "Tayma",
    sources: ["heritage"],
  },
  {
    id: "hegra",
    era: "ancient",
    date: "1st c. BCE – 1st c. CE",
    title: "Nabataean Hegra",
    summary:
      "The southernmost major Nabataean city, with over a hundred monumental rock-cut tombs. Saudi Arabia's first UNESCO World Heritage Site (2008).",
    evidence: "Archaeological evidence",
    place: "AlUla",
    sources: ["unesco-hegra"],
  },
  {
    id: "hijra",
    era: "islamic",
    date: "622 CE",
    title: "The Hijra to Madinah",
    summary:
      "The migration of the Prophet Muhammad from Makkah to Yathrib (Madinah) marks the beginning of the Islamic Hijri calendar.",
    evidence: "Religious tradition",
    place: "Makkah – Madinah",
    sources: ["darah"],
  },
  {
    id: "ottoman-hijaz",
    era: "ottoman",
    date: "1517",
    title: "Ottoman suzerainty over the Hijaz",
    summary:
      "Following the Ottoman conquest of Mamluk Egypt, the Sharifs of Makkah recognised Ottoman authority over the Hijaz.",
    evidence: "Historical record",
    place: "Hijaz",
    sources: ["darah"],
  },
  {
    id: "founding",
    era: "first",
    date: "1727",
    title: "Imam Muhammad bin Saud in Diriyah",
    summary:
      "Imam Muhammad bin Saud assumed rule in Diriyah, the date now commemorated as Founding Day (22 February), marking the start of the First Saudi State.",
    evidence: "Government information",
    place: "Diriyah",
    sources: ["founding", "darah"],
  },
  {
    id: "diriyah-fall",
    era: "first",
    date: "1818",
    title: "Siege and fall of Diriyah",
    summary:
      "Ottoman-Egyptian forces under Ibrahim Pasha besieged and destroyed Diriyah, ending the First Saudi State.",
    evidence: "Historical record",
    place: "Diriyah",
    sources: ["unesco-diriyah", "darah"],
  },
  {
    id: "second-state",
    era: "second",
    date: "1824",
    title: "Imam Turki bin Abdullah takes Riyadh",
    summary:
      "Imam Turki bin Abdullah re-established Saudi rule with Riyadh as the new capital — the Second Saudi State.",
    evidence: "Historical record",
    place: "Riyadh",
    sources: ["darah"],
  },
  {
    id: "second-end",
    era: "second",
    date: "1891",
    title: "End of the Second Saudi State",
    summary: "After internal conflict and the rise of the Al Rashid of Hail, the Second Saudi State came to an end.",
    evidence: "Historical record",
    place: "Najd",
    sources: ["darah"],
  },
  {
    id: "masmak",
    era: "third",
    date: "1902",
    title: "Recapture of Riyadh",
    summary:
      "Abdulaziz bin Abdulrahman Al Saud took Riyadh, with Masmak Fortress at the centre of events — the beginning of three decades of unification.",
    evidence: "Historical record",
    place: "Riyadh",
    sources: ["darah"],
  },
  {
    id: "hijaz-1925",
    era: "third",
    date: "1925",
    title: "Hijaz joins the Saudi realm",
    summary: "With the surrender of Jeddah in December 1925, the Hijaz came under the rule of Abdulaziz.",
    evidence: "Historical record",
    place: "Jeddah",
    sources: ["darah"],
  },
  {
    id: "kingdom-1932",
    era: "modern",
    date: "23 September 1932",
    title: "Kingdom of Saudi Arabia proclaimed",
    summary: "The unified territories were named the Kingdom of Saudi Arabia, a date marked annually as National Day.",
    evidence: "Government information",
    place: "Riyadh",
    sources: ["darah"],
  },
  {
    id: "dammam-7",
    era: "modern",
    date: "1938",
    title: "Oil at Dammam Well No. 7",
    summary: "Commercial quantities of oil were found at Dammam No. 7, transforming the Eastern Province and the national economy.",
    evidence: "Historical record",
    place: "Dhahran",
    sources: ["aramcoworld"],
  },
  {
    id: "turaif-unesco",
    era: "modern",
    date: "2010",
    title: "At-Turaif inscribed by UNESCO",
    summary: "The mud-brick heart of the First Saudi State was inscribed on the World Heritage List.",
    evidence: "Government information",
    place: "Diriyah",
    sources: ["unesco-diriyah"],
  },
  {
    id: "ahsa-unesco",
    era: "modern",
    date: "2018",
    title: "Al-Ahsa Oasis inscribed",
    summary: "One of the world's largest oases, with gardens, canals, springs and historic buildings, joined the World Heritage List.",
    evidence: "Government information",
    place: "Al-Ahsa",
    sources: ["unesco-ahsa"],
  },
];
