import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import diriyah from "@/assets/hero-diriyah.jpg";
import hegra from "@/assets/hero-hegra.jpg";
import jeddah from "@/assets/hero-jeddah.jpg";
import asir from "@/assets/hero-asir.jpg";
import { useLang } from "@/lib/i18n";
import { SaudiMap } from "@/components/SaudiMap";
import { Timeline } from "@/components/Timeline";
import { provinces } from "@/data/provinces";
import { articles } from "@/data/articles";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Saudi Heritage Atlas — History, Places & Culture of Saudi Arabia" },
      { name: "description", content: "An interactive atlas, timeline and museum of Saudi Arabia's history, regions, architecture and heritage." },
      { property: "og:title", content: "Saudi Heritage Atlas" },
      { property: "og:description", content: "An interactive atlas, timeline and museum of Saudi Arabia's history and heritage." },
    ],
  }),
  component: Home,
});

const slides = [
  { src: diriyah, label: "Diriyah · Najd" },
  { src: hegra, label: "Hegra · AlUla" },
  { src: jeddah, label: "Historic Jeddah · Hijaz" },
  { src: asir, label: "Highland villages · Asir" },
];

function Home() {
  const { t } = useLang();
  const [i, setI] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setI((x) => (x + 1) % slides.length), 6000);
    return () => clearInterval(id);
  }, []);

  return (
    <>
      <section className="relative h-[88vh] min-h-[560px] overflow-hidden bg-ink text-ink-foreground">
        {slides.map((s, k) => (
          <img key={s.label} src={s.src} alt={s.label} width={1920} height={1088}
            className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-[1500ms] ${k === i ? "opacity-60 ken-burns" : "opacity-0"}`} />
        ))}
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/30 to-transparent" />
        <div className="relative mx-auto flex h-full max-w-7xl flex-col justify-end px-5 pb-16">
          <p className="eyebrow fade-up">{slides[i]?.label}</p>
          <h1 className="mt-4 max-w-5xl text-6xl leading-[0.95] md:text-8xl fade-up">{t("title")}</h1>
          <p className="mt-6 max-w-2xl text-lg opacity-80 fade-up">{t("subtitle")}</p>
          <div className="mt-8 flex flex-wrap gap-3 text-sm">
            <Link to="/history" className="bg-primary px-5 py-3 text-primary-foreground">{t("exploreHistory")}</Link>
            <Link to="/map" className="border border-ink-foreground/40 px-5 py-3">{t("exploreMap")}</Link>
            <Link to="/provinces" className="border border-ink-foreground/40 px-5 py-3">{t("exploreProvinces")}</Link>
            <Link to="/collections" className="border border-ink-foreground/40 px-5 py-3">{t("exploreHeritage")}</Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-20">
        <p className="eyebrow">Interactive atlas</p>
        <h2 className="mt-3 mb-8 text-4xl md:text-5xl">One land, many regions</h2>
        <SaudiMap />
      </section>

      <section className="border-y border-border bg-card pattern-bg">
        <div className="mx-auto max-w-7xl px-5 py-20">
          <p className="eyebrow">Saudi Arabia through time</p>
          <h2 className="mt-3 mb-8 text-4xl md:text-5xl">From the Palaeolithic to today</h2>
          <Timeline limit={6} />
          <Link to="/history" className="text-primary underline underline-offset-4">Full timeline →</Link>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-20">
        <p className="eyebrow">Featured heritage</p>
        <div className="mt-8 grid gap-8 md:grid-cols-2">
          {articles.map((a) => (
            <Link key={a.slug} to="/articles/$slug" params={{ slug: a.slug }} className="group">
              <div className="overflow-hidden"><img src={a.image} alt={a.title} loading="lazy" className="aspect-[16/10] w-full object-cover transition-transform duration-700 group-hover:scale-105" /></div>
              <p className="eyebrow mt-4">{a.kicker}</p>
              <h3 className="mt-2 text-3xl">{a.title}</h3>
            </Link>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 pb-10">
        <p className="eyebrow">Thirteen provinces</p>
        <div className="mt-6 grid grid-cols-2 gap-px border border-border bg-border md:grid-cols-4">
          {provinces.map((p) => (
            <Link key={p.slug} to="/provinces/$slug" params={{ slug: p.slug }} className="bg-background p-5 hover:bg-card">
              <p className="font-display text-xl">{p.name}</p>
              <p className="font-arabic text-muted-foreground">{p.nameAr}</p>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
