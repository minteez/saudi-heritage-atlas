import { createContext, useContext, useEffect, useState, type ReactNode } from "react";

export type Lang = "en" | "ar";

const dict = {
  history: { en: "History", ar: "التاريخ" },
  map: { en: "Map", ar: "الخريطة" },
  provinces: { en: "Provinces", ar: "المناطق" },
  collections: { en: "Collections", ar: "المجموعات" },
  sources: { en: "Sources", ar: "المصادر" },
  about: { en: "About", ar: "عن الأطلس" },
  search: { en: "Search", ar: "بحث" },
  searchPlaceholder: { en: "Search places, people, events…", ar: "ابحث عن أماكن وأشخاص وأحداث…" },
  title: { en: "Saudi Heritage Atlas", ar: "أطلس التراث السعودي" },
  subtitle: {
    en: "A living atlas of Saudi Arabia — its history, people, landscapes, architecture, culture, and memory.",
    ar: "أطلس حيّ للمملكة العربية السعودية — تاريخها وناسها ومناظرها الطبيعية وعمارتها وثقافتها وذاكرتها.",
  },
  exploreHistory: { en: "Explore the History", ar: "استكشف التاريخ" },
  exploreMap: { en: "Explore the Map", ar: "استكشف الخريطة" },
  exploreProvinces: { en: "Explore the Provinces", ar: "استكشف المناطق" },
  exploreHeritage: { en: "Explore Heritage", ar: "استكشف التراث" },
  exploreArchive: { en: "Explore the Archive", ar: "استكشف الأرشيف" },
  expanding: { en: "This collection is being expanded.", ar: "هذه المجموعة قيد التوسعة." },
  readMore: { en: "Read more", ar: "اقرأ المزيد" },
} as const;

type Key = keyof typeof dict;

const Ctx = createContext<{ lang: Lang; setLang: (l: Lang) => void; t: (k: Key) => string }>({
  lang: "en",
  setLang: () => {},
  t: (k) => dict[k].en,
});

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("en");
  useEffect(() => {
    const saved = localStorage.getItem("sha-lang");
    if (saved === "ar" || saved === "en") setLangState(saved);
  }, []);
  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
  }, [lang]);
  const setLang = (l: Lang) => {
    setLangState(l);
    localStorage.setItem("sha-lang", l);
  };
  return <Ctx.Provider value={{ lang, setLang, t: (k) => dict[k][lang] }}>{children}</Ctx.Provider>;
}

export const useLang = () => useContext(Ctx);
