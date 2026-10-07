import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHeader } from "@/components/PageHeader";
import { provinces } from "@/data/provinces";

export const Route = createFileRoute("/provinces/")({
  head: () => ({ meta: [
    { title: "The 13 Provinces — Saudi Heritage Atlas" },
    { name: "description", content: "Explore the thirteen administrative regions of Saudi Arabia and their landscapes and heritage." },
    { property: "og:title", content: "The 13 Provinces — Saudi Heritage Atlas" },
    { property: "og:description", content: "The thirteen regions of Saudi Arabia." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary" },
  ] }),
  component: () => (
    <>
      <PageHeader eyebrow="Province atlas" title="Thirteen regions, thirteen worlds" crumbs={[{ label: "Provinces" }]} />
      <div className="mx-auto grid max-w-7xl gap-px bg-border px-0 md:grid-cols-3">
        {provinces.map((p) => (
          <Link key={p.slug} to="/provinces/$slug" params={{ slug: p.slug }} className="bg-background p-8 hover:bg-card">
            <p className="eyebrow">Capital · {p.capital}</p>
            <h2 className="mt-2 text-3xl">{p.name}</h2>
            <p className="font-arabic text-lg text-muted-foreground">{p.nameAr}</p>
            <p className="mt-3 text-sm text-muted-foreground">{p.landscape}</p>
          </Link>
        ))}
      </div>
    </>
  ),
});
