import { Link, useNavigate } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { useLang } from "@/lib/i18n";

export function SiteHeader() {
  const { t, lang, setLang } = useLang();
  const [progress, setProgress] = useState(0);
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const [q, setQ] = useState("");

  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(h > 0 ? window.scrollY / h : 0);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { to: "/history", label: t("history") },
    { to: "/map", label: t("map") },
    { to: "/provinces", label: t("provinces") },
    { to: "/collections", label: t("collections") },
    { to: "/sources", label: t("sources") },
    { to: "/about", label: t("about") },
  ] as const;

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/90 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center gap-6 px-5 py-3">
        <Link to="/" className="flex items-center gap-3">
          <span className="grid h-9 w-9 place-items-center rotate-45 border border-primary">
            <span className="-rotate-45 font-display text-sm text-primary">SA</span>
          </span>
          <span className="font-display text-lg leading-none">{t("title")}</span>
        </Link>
        <nav className="ms-auto hidden items-center gap-5 text-sm lg:flex">
          {links.map((l) => (
            <Link key={l.to} to={l.to} className="text-muted-foreground transition-colors hover:text-foreground" activeProps={{ className: "text-foreground" }}>
              {l.label}
            </Link>
          ))}
        </nav>
        <form
          className="ms-auto hidden md:block lg:ms-0"
          onSubmit={(e) => { e.preventDefault(); navigate({ to: "/search", search: { q } }); }}
        >
          <input
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder={t("searchPlaceholder")}
            aria-label={t("search")}
            className="w-56 border-b border-border bg-transparent py-1 text-sm outline-none placeholder:text-muted-foreground focus:border-primary"
          />
        </form>
        <button
          onClick={() => setLang(lang === "en" ? "ar" : "en")}
          className="border border-border px-2 py-1 text-xs hover:border-primary"
          aria-label="Switch language"
        >
          {lang === "en" ? "العربية" : "English"}
        </button>
        <button className="lg:hidden text-sm" onClick={() => setOpen(!open)} aria-label="Menu">☰</button>
      </div>
      {open && (
        <nav className="flex flex-col gap-3 border-t border-border px-5 py-4 lg:hidden">
          {links.map((l) => (
            <Link key={l.to} to={l.to} onClick={() => setOpen(false)}>{l.label}</Link>
          ))}
          <Link to="/search" search={{ q: "" }} onClick={() => setOpen(false)}>{t("search")}</Link>
        </nav>
      )}
      <div className="h-px bg-primary origin-left transition-transform" style={{ transform: `scaleX(${progress})` }} />
    </header>
  );
}
