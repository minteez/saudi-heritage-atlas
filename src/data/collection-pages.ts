import hegra from "@/assets/hero-hegra.jpg";
import jeddah from "@/assets/hero-jeddah.jpg";
import coffee from "@/assets/collection-coffee.jpg";
import weaving from "@/assets/collection-weaving.jpg";
import ardah from "@/assets/collection-ardah.jpg";
import dress from "@/assets/collection-dress.jpg";

export interface CollectionPage {
  slug: string;
  image: string;
  imageAlt: string;
  subtitle: string;
  evidence: string;
  sections: { id: string; title: string; body: string[]; sources: string[] }[];
  provinces: string[];
  related: string[];
}

export const collectionPages: CollectionPage[] = [
  {
    slug: "archaeology", image: hegra, imageAlt: "Illustration of rock-cut tombs at Hegra",
    subtitle: "Traces of people, water, trade and belief across a changing landscape.",
    evidence: "Archaeological evidence · Academic research · UNESCO site documentation",
    provinces: ["madinah", "hail", "najran"], related: ["architecture", "arts-crafts"],
    sections: [
      { id: "deep-time", title: "Arabia in deep time", sources: ["groucutt-2018"], body: [
        "The archaeological story of Arabia begins long before its historic kingdoms. Stone tools, fossils and ancient lake deposits allow researchers to reconstruct episodes when environments and routes through the peninsula differed markedly from today.",
        "At Al-Wusta in the Nefud Desert, a human finger bone dated to approximately 85,000 years ago provides evidence for Homo sapiens in Arabia. The accompanying lake setting matters: the find belongs to a wetter landscape, not simply a modern desert scene projected into the past. One fossil establishes presence at a particular place and time; it does not, by itself, settle every question about migration."
      ] },
      { id: "rock-art", title: "Rock art and changing environments", sources: ["unesco-hail", "unesco-hima"], body: [
        "The Hail World Heritage property encompasses Jabal Umm Sinman at Jubbah and Jabal al-Manjor and Jabal Raat at Shuwaymis. Human and animal figures preserve a long record of relationships with the environment. The images are archaeological evidence, but their precise meanings should not be treated as obvious from appearance alone.",
        "Farther south, the Ḥimā Cultural Area brings together rock art and inscriptions along an ancient route through the Najran region. Multiple scripts and successive marks make it a landscape of repeated passage, rather than the product of one moment or one community."
      ] },
      { id: "hegra", title: "Hegra: monuments and everyday life", sources: ["unesco-hegra"], body: [
        "Hegra is best known for its monumental Nabataean tomb façades. Inscriptions on some tombs preserve names, ownership provisions and dates, connecting carved architecture to people and legal arrangements. The site also contains evidence from before and after the Nabataean period.",
        "Tombs are only one part of the settlement. Wells and other remains help explain how life was sustained in an oasis environment. Reading the city alongside its water systems and trade setting gives a fuller picture than treating the façades as isolated sculptures."
      ] },
      { id: "interpretation", title: "Evidence, not a finished story", sources: ["groucutt-2018", "unesco-hegra"], body: [
        "Archaeological accounts combine excavation, dating, inscriptions and comparison. A date for a material sample is not automatically a date for every nearby structure; an inscription records a particular statement, not an entire society. These distinctions keep attractive narratives from outrunning the evidence.",
        "Conservation protects the context as well as the object. Rock surfaces, settlement layers and relationships between features can carry information that is lost when an artefact is detached from its setting. New research may refine an interpretation without diminishing a site's significance."
      ] },
    ],
  },
  {
    slug: "architecture", image: jeddah, imageAlt: "Illustration of traditional coral-stone houses and wooden rawashin in Historic Jeddah",
    subtitle: "Earth, coral stone and timber: buildings shaped by local life.",
    evidence: "Built heritage · UNESCO site documentation · Architectural interpretation",
    provinces: ["riyadh", "makkah", "asir"], related: ["archaeology", "arts-crafts", "clothing"],
    sections: [
      { id: "najd", title: "Najd: building with earth", sources: ["unesco-diriyah"], body: [
        "At-Turaif in Diriyah preserves a major expression of Najdi earthen architecture. Walls, towers, courtyards and passages belong to a settlement whose political and social importance cannot be separated from its built form.",
        "Earth construction depends on continuing care. Weathering, moisture and repairs are part of a building's history, not merely problems added after its completion. Conservation must therefore address both the surviving fabric and the knowledge required to maintain it."
      ] },
      { id: "hijaz", title: "Jeddah: houses of a trading port", sources: ["unesco-jeddah"], body: [
        "Historic Jeddah's tower houses reflect the wealth and connections of a Red Sea port and gateway to Makkah. Coral-stone construction and projecting wooden rawashin give the district a distinctive architectural character.",
        "The rawashin are not just decoration. Their screens mediate light, ventilation and privacy, while their craftsmanship makes the street frontage an important part of domestic architecture. Houses, markets and routes through the district should be read together as a living urban fabric."
      ] },
      { id: "asir", title: "Asir: the interior as a cultural surface", sources: ["unesco-qatt"], body: [
        "Al-Qatt Al-Asiri brings geometric decoration into house interiors in Asir, particularly guest rooms. UNESCO describes a practice traditionally sustained by women, with knowledge shared through observation and participation.",
        "A building's cultural life is not exhausted by its exterior. Interior decoration, the use of a guest room and the relationships through which skills are passed on belong alongside walls and roofs in an architectural account. Asiri traditions should retain their regional identity rather than become a generic national motif."
      ] },
      { id: "conservation", title: "Keeping places legible", sources: ["unesco-diriyah", "unesco-jeddah"], body: [
        "Restoration, reconstruction and surviving historic fabric are different things. A careful account identifies which is being described, rather than implying that every surface visible today has remained unchanged for centuries.",
        "Architecture also records ordinary life: movement through a lane, the relationship between a market and a house, or the care of a shared interior. Protecting an isolated façade is not the same as sustaining the wider setting that gives it meaning."
      ] },
    ],
  },
  {
    slug: "food", image: coffee, imageAlt: "Illustrative brass dallah, small coffee cups and dates in a majlis",
    subtitle: "Hospitality, oasis knowledge and the traditions gathered around a table.",
    evidence: "Living heritage · UNESCO community documentation",
    provinces: ["eastern", "qassim"], related: ["arts-crafts", "music-dance"],
    sections: [
      { id: "coffee", title: "Coffee as an act of welcome", sources: ["unesco-coffee"], body: [
        "Serving Arabic coffee is a social practice as well as a way of preparing a drink. UNESCO describes it as an expression of generosity and hospitality, with preparation, serving and the gathering of guests forming part of the tradition.",
        "The UNESCO element is shared across several Arab countries, including Saudi Arabia. It should not be presented as an exclusively Saudi invention, or as proof that every household follows one recipe. The significance lies in shared hospitality alongside local and family variations."
      ] },
      { id: "preparation", title: "Objects, skills and conversation", sources: ["unesco-coffee"], body: [
        "UNESCO's account describes roasting and pounding beans before brewing, and serving coffee in small cups. These actions make knowledge visible: the host handles ingredients, tools and timing in front of other people.",
        "A dallah or cup can be collected as an object, but the practice includes much more than its utensils. Conversation, welcome and learning by watching give the same objects their social meaning. A museum account should preserve this distinction between the vessel and the living custom."
      ] },
      { id: "dates", title: "The date palm beyond its fruit", sources: ["unesco-date-palm", "unesco-ahsa"], body: [
        "Date palm heritage encompasses cultivation, skills, traditions and uses of different parts of the tree. UNESCO's multinational element includes Saudi Arabia and treats the palm as a source of community knowledge, not simply as a crop.",
        "Al-Ahsa offers a place-specific counterpart: its World Heritage designation recognizes an evolving oasis cultural landscape. Gardens, water management and settlement make the relationship between food and landscape tangible. This is evidence about a particular oasis, not a description of every agricultural region."
      ] },
      { id: "transmission", title: "A living tradition, not a fixed menu", sources: ["unesco-coffee", "unesco-date-palm"], body: [
        "Food knowledge moves through households, gatherings and work. The same tradition can change in tools or setting while retaining its importance to the people who practise it. Heritage recognition documents that relationship; it does not prescribe an unchanging menu.",
        "Regional dishes deserve accounts grounded in specific places and sources. Coffee and date-palm practices provide a focused starting point here, rather than standing in for the entire food culture of Najd, Hijaz, the eastern oases or the southern highlands."
      ] },
    ],
  },
  {
    slug: "music-dance", image: ardah, imageAlt: "Illustrative Najdi Ardah performers with ceremonial swords and a drummer",
    subtitle: "Poetry, rhythm and collective performance in Najdi Ardah.",
    evidence: "Living performance tradition · UNESCO community documentation",
    provinces: ["riyadh"], related: ["clothing", "arts-crafts", "food"],
    sections: [
      { id: "ardah", title: "More than a dance", sources: ["unesco-ardah"], body: [
        "Alardah Alnajdiyah combines chanted poetry, drumming and rhythmic movement. UNESCO describes its performance at notable occasions, where the gathering itself is part of the cultural meaning.",
        "Calling it only a sword dance leaves out the spoken verse and musical structure. The interaction between words, rhythm and coordinated participation is central to understanding the tradition."
      ] },
      { id: "ensemble", title: "Rows, drums and verse", sources: ["unesco-ardah"], body: [
        "In UNESCO's description, performers form two facing rows, accompanied by drummers. Participants move rhythmically with swords while the verses are chanted. The arrangement makes performance a collective act rather than a display by a single dancer.",
        "A still image can suggest costume and posture but cannot convey the timing of a drumbeat or the delivery of a verse. Documentation of this heritage therefore requires attention to sound and movement as well as visual appearance."
      ] },
      { id: "learning", title: "Learning through participation", sources: ["unesco-ardah"], body: [
        "The tradition includes skills beyond the visible performers. UNESCO notes women's participation in making costumes, drawing attention to work that supports the public event.",
        "Transmission links experienced participants with younger generations. Preservation is not only a matter of recording a performance: it also concerns opportunities to practise, learn the verses and sustain the relationships that make an ensemble possible."
      ] },
      { id: "regional", title: "Keep the regional name", sources: ["unesco-ardah"], body: [
        "The UNESCO element is specifically Alardah Alnajdiyah. Its account should not be generalized to all music and dance in Saudi Arabia or used to erase the distinct traditions of other regions.",
        "A national collection can connect traditions without making them interchangeable. Identifying the place, community and source behind a performance is a necessary first step toward a richer musical atlas."
      ] },
    ],
  },
  {
    slug: "arts-crafts", image: weaving, imageAlt: "Illustrative geometric Al Sadu textile with an artisan's hands",
    subtitle: "Woven fibres, painted rooms and skills passed from hand to hand.",
    evidence: "Living craftsmanship · UNESCO community documentation",
    provinces: ["asir", "eastern"], related: ["architecture", "clothing", "food"],
    sections: [
      { id: "sadu", title: "Al Sadu: a woven landscape", sources: ["unesco-sadu"], body: [
        "Al Sadu is a weaving tradition associated with Bedouin women, natural fibres and a ground loom. UNESCO describes durable, tightly woven textiles whose geometric patterns and repeated symmetry reflect the desert environment.",
        "The tradition is shared across national boundaries. The UNESCO element includes Saudi Arabia, Kuwait and Qatar; a Saudi account should recognize that wider relationship while taking care not to assign every textile to the same community or maker."
      ] },
      { id: "qatt", title: "Al-Qatt Al-Asiri: a room made meaningful", sources: ["unesco-qatt"], body: [
        "Al-Qatt Al-Asiri is a traditional interior wall-decoration practice from Asir. Geometric forms and symbols, commonly applied to a white gypsum base, transform domestic interiors, especially guest rooms.",
        "Traditionally practised by women, it carries regional identity through the home. Observation, collaboration and the participation of relatives across generations help transmit the skill. The painted room is therefore both a finished work and a record of social knowledge."
      ] },
      { id: "palm", title: "Palm materials and practical knowledge", sources: ["unesco-date-palm"], body: [
        "The date-palm heritage element includes knowledge and skills connected with the tree and its uses. Material traditions belong alongside cultivation and food practices in this broader cultural relationship.",
        "A crafted object should be documented with its maker, materials and local setting wherever these are known. A general reference to date-palm heritage does not establish a specific object's age, provenance or design meaning."
      ] },
      { id: "makers", title: "Preserving the maker's knowledge", sources: ["unesco-sadu", "unesco-qatt"], body: [
        "Craft heritage lives in decisions: how fibres are prepared, how a pattern is built, or how a room is painted. Displaying an object without these processes can reduce a skilled practice to a decorative surface.",
        "Respectful interpretation distinguishes a historic object, a contemporary work and a new design inspired by tradition. All can be valuable, but they are not the same evidence. Supporting continued practice is as important as keeping examples in a collection."
      ] },
    ],
  },
  {
    slug: "clothing", image: dress, imageAlt: "Illustrative bisht with gold edging, white thobe and folded checkered headscarf",
    subtitle: "Dress as material knowledge, occasion and regional identity.",
    evidence: "Material culture · Living heritage · Interpretive overview",
    provinces: ["riyadh", "asir"], related: ["arts-crafts", "music-dance", "architecture"],
    sections: [
      { id: "context", title: "Beyond a single national costume", sources: ["heritage", "unesco-ardah"], body: [
        "A clothing collection needs more than a familiar silhouette. Occasion, region, material and the person wearing a garment all affect its meaning. Present-day dress should not automatically be used to reconstruct clothing in another century.",
        "Performance offers a documented example of this context. In Najdi Ardah, costumes belong to an ensemble of poetry, movement and drumming. Their significance comes partly from the occasion and activity in which they are worn."
      ] },
      { id: "work", title: "The work behind the garment", sources: ["unesco-ardah", "unesco-sadu"], body: [
        "UNESCO's Ardah account notes women's role in costume-making. This shifts attention from the public performer to the preparation and skilled work that make the performance possible.",
        "Al Sadu provides a parallel example of textile knowledge: natural fibres, weaving and geometric pattern-making sustained by practitioners. It is a distinct weaving tradition, not a claim that all Saudi garments are made from Al Sadu textiles."
      ] },
      { id: "provenance", title: "Reading an object carefully", sources: ["heritage"], body: [
        "A garment is most informative when its provenance is known. Maker, place, date, fabric, repairs and use can distinguish everyday clothing from ceremonial wear or a contemporary recreation.",
        "The illustration above presents familiar garment forms, not a dated museum object. It cannot establish regional provenance, historical authenticity or the exact construction of a surviving piece. Those claims require object-specific documentation."
      ] },
      { id: "identity", title: "Living identity and changing use", sources: ["unesco-ardah", "heritage"], body: [
        "Dress can express belonging without being uniform. An account of clothing should leave room for regional differences, family choices and changes in the circumstances of daily life.",
        "Separating documented performance costume, collected objects and present-day practice keeps the collection open to richer regional accounts. The aim is not to define one correct appearance, but to understand the knowledge and relationships carried by clothing."
      ] },
    ],
  },
];

export const getCollectionPage = (slug: string) => collectionPages.find((page) => page.slug === slug);