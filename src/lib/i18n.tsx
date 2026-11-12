import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from "react";
import { useRouterState } from "@tanstack/react-router";

import { en, type UIKey } from "@/locales/en";
import { ar } from "@/locales/ar";
import { pick, type Lang, type Loc } from "@/lib/localized";
import { getArticle } from "@/data/articles";
import { getProvince } from "@/data/provinces";
import { getCollection } from "@/data/collections";

export type { Lang, Loc };
export type { UIKey };

const DICTS: Record<Lang, Record<UIKey, string>> = { en, ar };

/** Static routes and their document-title keys; dynamic routes are resolved below. */
const DOC_KEYS: Record<string, string> = {
  "/": "doc.home",
  "/history": "doc.history",
  "/map": "doc.map",
  "/provinces": "doc.provinces",
  "/collections": "doc.collections",
  "/sources": "doc.sources",
  "/about": "doc.about",
  "/search": "doc.search",
};

/**
 * Document title + description for the active language. Route `head()` stays
 * English for crawlers and first paint; this keeps the tab and the social
 * preview honest once the reader switches language.
 */
function documentMeta(pathname: string, lang: Lang): { title: string; description: string } | null {
  const suffix = DICTS[lang]["doc.suffix"];
  const staticKey = DOC_KEYS[pathname];
  if (staticKey) {
    return {
      title: DICTS[lang][`${staticKey}.title` as UIKey],
      description: DICTS[lang][`${staticKey}.description` as UIKey],
    };
  }

  const article = getArticle(pathname.split("/")[2] ?? "");
  if (pathname.startsWith("/articles/") && article) {
    return { title: `${pick(article.title, lang)}${suffix}`, description: pick(article.lede, lang) };
  }
  const province = getProvince(pathname.split("/")[2] ?? "");
  if (pathname.startsWith("/provinces/") && province) {
    return { title: `${pick(province.name, lang)}${suffix}`, description: pick(province.overview, lang) };
  }
  const collection = getCollection(pathname.split("/")[2] ?? "");
  if (pathname.startsWith("/collections/") && collection) {
    return { title: `${pick(collection.name, lang)}${suffix}`, description: pick(collection.intro, lang) };
  }

  return null;
}

function setMeta(attr: "name" | "property", key: string, content: string) {
  let tag = document.head.querySelector<HTMLMetaElement>(`meta[${attr}="${key}"]`);
  if (!tag) {
    tag = document.createElement("meta");
    tag.setAttribute(attr, key);
    document.head.appendChild(tag);
  }
  tag.setAttribute("content", content);
}

type Ctx = {
  lang: Lang;
  dir: "rtl" | "ltr";
  setLang: (l: Lang) => void;
  /** Interface string for the active language. */
  t: (key: UIKey, vars?: Record<string, string | number>) => string;
  /** Content value for the active language. */
  L: <T, A>(value: Loc<T, A> | T) => T | A;
};

const LangCtx = createContext<Ctx>({
  lang: "en",
  dir: "ltr",
  setLang: () => {},
  t: (key) => en[key] ?? key,
  L: (value) => pick(value, "en"),
});

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("en");
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  // First visit follows the browser; an explicit choice always wins.
  useEffect(() => {
    const saved = localStorage.getItem("sha-lang");
    if (saved === "ar" || saved === "en") return setLangState(saved);
    if ((navigator.language || "").toLowerCase().startsWith("ar")) setLangState("ar");
  }, []);

  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
  }, [lang]);

  useEffect(() => {
    const meta = documentMeta(pathname, lang);
    if (!meta) return;
    document.title = meta.title;
    setMeta("name", "description", meta.description);
    setMeta("property", "og:title", meta.title);
    setMeta("property", "og:description", meta.description);
  }, [lang, pathname]);

  const value = useMemo<Ctx>(
    () => ({
      lang,
      dir: lang === "ar" ? "rtl" : "ltr",
      setLang: (l: Lang) => {
        setLangState(l);
        localStorage.setItem("sha-lang", l);
      },
      t: (key, vars) => {
        const raw = DICTS[lang][key];
        if (raw === undefined) {
          if (import.meta.env?.DEV) console.warn(`[i18n] missing "${lang}" key: ${key}`);
          return (en[key] ?? key) as string;
        }
        return vars ? raw.replace(/\{(\w+)\}/g, (_, k) => String(vars[k] ?? `{${k}}`)) : raw;
      },
      L: (value) => pick(value, lang),
    }),
    [lang],
  );

  return <LangCtx.Provider value={value}>{children}</LangCtx.Provider>;
}

export const useLang = () => useContext(LangCtx);
