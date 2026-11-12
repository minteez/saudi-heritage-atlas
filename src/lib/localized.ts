/**
 * Bilingual content primitives for the Saudi Heritage Atlas.
 *
 * Every user-visible content field is a `Loc`: an object carrying both the
 * English and the Arabic rendering. TypeScript makes both keys mandatory, so a
 * record that never received its Arabic text fails the type check instead of
 * silently showing English to an Arabic reader.
 */

export type Lang = "en" | "ar";

/** A value available in both languages. `A` differs from `T` only where the
 *  English side is a closed union (evidence labels) and the Arabic side is prose. */
export type Loc<T = string, A = T> = { en: T; ar: A };

export const isLoc = (value: unknown): value is Loc =>
  typeof value === "object" && value !== null && "en" in value && "ar" in value;

/** Resolve a bilingual value for a language. Falls back to English when the
 *  Arabic side is missing, and warns in development so the gap is visible. */
export function pick<T, A>(value: Loc<T, A> | T, lang: Lang): T | A {
  if (!isLoc(value)) return value as T;
  const out = value[lang];
  if (out === undefined || out === null || (typeof out === "string" && out.trim() === "")) {
    if (import.meta.env?.DEV) console.warn(`[i18n] missing "${lang}" text, falling back to en:`, value.en);
    return value.en;
  }
  return out;
}

/** True when a string contains at least one Arabic letter. Used by the
 *  translation audit to catch Arabic fields that were filled with English. */
export const hasArabic = (text: string) => /[\u0600-\u06FF]/.test(text);

/** Flatten an array of bilingual values into one searchable string per language. */
export const indexBoth = (values: (Loc | string | undefined)[]) =>
  values
    .map((v) => (typeof v === "string" ? v : v ? `${v.en} ${v.ar}` : ""))
    .join(" ")
    .toLowerCase();

/**
 * Fold Arabic for matching: strip tashkeel and tatweel, unify alef/ya/ta
 * marbuta variants so "الدرعية" and "الدرعيه" or a fully vowelled query match.
 */
export function foldArabic(text: string): string {
  return text
    .replace(/[\u064B-\u0652\u0670\u0640]/g, "")
    .replace(/[أإآٱ]/g, "ا")
    .replace(/ى/g, "ي")
    .replace(/ة/g, "ه")
    .replace(/ؤ/g, "و")
    .replace(/ئ/g, "ي")
    .toLowerCase();
}

/** Language-agnostic fold used by the search index. */
export const fold = (text: string) => foldArabic(text);

const ARABIC_NUM = "ar-EG-u-nu-arab";

/** Locale-aware number: 1,932 in English, ١٩٣٢ in Arabic. */
export const num = (n: number, lang: Lang) =>
  new Intl.NumberFormat(lang === "ar" ? ARABIC_NUM : "en-GB").format(n);

/** Locale-aware Gregorian date: 15 January 1902 / ١٥ يناير ١٩٠٢. */
export const fmtDate = (date: Date, lang: Lang) =>
  new Intl.DateTimeFormat(lang === "ar" ? `${ARABIC_NUM}-ca-gregory` : "en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
    calendar: "gregory",
  }).format(date);

/** Gregorian date with the calendar named, for pages that also show Hijri. */
export const fmtDateCleared = (date: Date, lang: Lang) =>
  `${fmtDate(date, lang)} ${lang === "ar" ? "ميلادي" : "CE"}`;
