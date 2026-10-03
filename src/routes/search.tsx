import { createFileRoute, Link } from "@tanstack/react-router";
import { z } from "zod";
import { PageHeader } from "@/components/PageHeader";
import { articles } from "@/data/articles";
import { provinces } from "@/data/provinces";
import { events } from "@/data/timeline";
import { collections } from "@/data/collections";

export const Route = createFileRoute("/search")({
  validateSearch: (s) => z.object({ q: z.string().optional().default("") }).parse(s),
  head: () => ({ meta: [
    { title: "Search — Saudi Heritage Atlas" },
    { name: "description", content: "Search places, people, events and collections in the Saudi Heritage Atlas." },
    { property: "og:title", content: "Search — Saudi Heritage Atlas" },
    { property: "og:description", content: "Search the Saudi Heritage Atlas." },
  ] }),
  component: SearchPage,
});

function SearchPage() {
  const { q } = Route.useSearch();
  const nav = Route.useNavigate();
  const m = (s: string) => q.length > 1 && s.toLowerCase().includes(q.toLowerCase());
  const res = [
    ...articles.filter((a) => m(a.title + a.lede + a.titleAr)).map((a) => ({ k: "Article", t: a.title, link: <Link to="/articles/$slug" params={{ slug: a.slug }}>{a.title}</Link> })),
    ...provinces.filter((p) => m(p.name + p.nameAr + p.overview + p.capital)).map((p) => ({ k: "Province", t: p.name, link: <Link to="/provinces/$slug" params={{ slug: p.slug }}>{p.name}</Link> })),
    ...events.filter((e) => m(e.title + e.summary + e.date)).map((e) => ({ k: "Event · " + e.date, t: e.title, link: <Link to="/history" hash={e.id}>{e.title}</Link> })),
    ...collections.filter((c) => m(c.name + c.intro + c.planned.join(" "))).map((c) => ({ k: "Collection", t: c.name, link: <Link to="/collections" hash={c.slug}>{c.name}</Link> })),
  ];
  return (
    <>
      <PageHeader eyebrow="Search" title="Search the atlas" crumbs={[{ label: "Search" }]} />
      <div className="mx-auto max-w-4xl px-5 py-10">
        <input autoFocus value={q} onChange={(e) => nav({ search: { q: e.target.value }, replace: true })} placeholder="Diriyah, Hegra, 1932, Asir…" className="w-full border-b-2 border-foreground bg-transparent py-3 font-display text-3xl outline-none" />
        <ul className="mt-8">
          {res.map((r) => (<li key={r.k + r.t} className="border-b border-border py-4"><p className="eyebrow">{r.k}</p><p className="mt-1 text-xl hover:text-primary">{r.link}</p></li>))}
        </ul>
        {q.length > 1 && !res.length && <p className="mt-8 text-muted-foreground">No results yet — the atlas is still growing.</p>}
      </div>
    </>
  );
}
