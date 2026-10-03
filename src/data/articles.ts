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
  sections: { heading: string; body: string }[];
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
    lede: "On the banks of Wadi Hanifah, Diriyah became the seat of the First Saudi State in the 18th century. Its At-Turaif district is one of the finest surviving examples of Najdi mud-brick architecture.",
    facts: [["Founded as Saudi seat", "1727"], ["Destroyed", "1818"], ["UNESCO", "2010"], ["Material", "Mud brick, stone, palm"]],
    sections: [
      { heading: "A capital on Wadi Hanifah", body: "Diriyah grew around the date gardens and wells of Wadi Hanifah. In 1727 Imam Muhammad bin Saud assumed rule here, the moment now commemorated as Founding Day." },
      { heading: "Architecture of At-Turaif", body: "UNESCO describes At-Turaif as an outstanding example of the Najdi architectural and decorative style, with palaces and houses built of mud brick on stone foundations, using geometric triangular openings and crenellated parapets." },
      { heading: "Siege and afterlife", body: "In 1818 Ottoman-Egyptian forces under Ibrahim Pasha besieged and destroyed Diriyah. The capital of the later Saudi state moved to Riyadh, and At-Turaif remained a ruin until modern conservation." },
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
    lede: "A clay-and-mud-brick fortress in old Riyadh, Masmak is closely associated with the 1902 recapture of the city by Abdulaziz bin Abdulrahman Al Saud.",
    facts: [["Built", "Late 19th century"], ["Key event", "1902"], ["Today", "Museum"]],
    sections: [
      { heading: "1902", body: "The capture of Riyadh in January 1902 opened three decades of campaigns that culminated in the proclamation of the Kingdom in 1932." },
      { heading: "Building", body: "The fortress features thick mud-brick walls, watchtowers and a heavy palm-wood gate. It now operates as a museum on the history of unification." },
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
    lede: "The largest conserved site of the Nabataean civilization south of Petra, Hegra has more than a hundred monumental tombs carved into sandstone outcrops.",
    facts: [["Period", "1st c. BCE – 1st c. CE"], ["UNESCO", "2008 (first in KSA)"], ["Culture", "Nabataean"]],
    sections: [
      { heading: "Tombs and inscriptions", body: "According to UNESCO, the site includes 111 monumental tombs, many with decorated facades and Nabataean inscriptions, as well as wells and pre-Nabataean inscriptions and rock drawings." },
      { heading: "On the incense routes", body: "Hegra lay on the caravan routes that carried aromatics from southern Arabia north to the Mediterranean world." },
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
    lede: "From the 7th century Jeddah served as the main port of the Red Sea and gateway for pilgrims travelling to Makkah. Its tower houses of coral stone and wooden rawashin are inscribed on the World Heritage List.",
    facts: [["UNESCO", "2014"], ["Material", "Coral stone, timber"]],
    sections: [
      { heading: "Coral-stone tower houses", body: "Merchants built tall houses of coral stone with large wooden latticed windows (rawashin) that catch sea breezes and provide shade." },
    ],
    sources: ["unesco-jeddah"],
  },
];

export const getArticle = (slug: string) => articles.find((a) => a.slug === slug);
