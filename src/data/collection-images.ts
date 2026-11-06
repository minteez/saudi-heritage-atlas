// Illustrative (AI-generated) cover images for collections that do not yet have a reading page.
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

export const collectionImages: Record<string, { src: string; alt: string }> = {
  "sacred-places": { src: sacred, alt: "Marble arcades of a mosque courtyard at dawn" },
  "muhammad-sadiq": { src: photography, alt: "A 19th-century plate camera beside sepia photographs" },
  "aramco-world": { src: magazines, alt: "A stack of magazines with desert photography covers" },
  geography: { src: geography, alt: "Red sand dunes at golden hour" },
  people: { src: people, alt: "Old manuscripts, a coffee pot and a folded bisht on a carved chest" },
  museums: { src: museums, alt: "Museum gallery with pottery and inscribed stones" },
  society: { src: society, alt: "A traditional majlis with coffee pots and patterned rugs" },
  language: { src: language, alt: "Arabic calligraphy written with a reed pen" },
  economy: { src: economy, alt: "A pearling dhow at sunset with a string of pearls" },
  transport: { src: transport, alt: "A desert railway station with an old steam locomotive" },
  "heritage-protection": { src: conservation, alt: "Scaffolding against a mud-brick wall under restoration" },
};
