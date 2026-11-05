import { createFileRoute, notFound } from "@tanstack/react-router";
import { PageHeader } from "@/components/PageHeader";
import { SourceList } from "@/components/SourceList";
import { getProvince } from "@/data/provinces";
import { provinceDetails } from "@/data/province-details";

export const Route = createFileRoute("/provinces/$slug")({
  loader: ({ params }) => {
    const p = getProvince(params.slug);
    if (!p) throw notFound();
    return p;
  },
  head: ({ loaderData }) => ({ meta: loaderData ? [
    { title: `${loaderData.name} Province — Saudi Heritage Atlas` },
    { name: "description", content: loaderData.overview },
    { property: "og:title", content: `${loaderData.name} — Saudi Heritage Atlas` },
    { property: "og:description", content: loaderData.overview },
    { property: "og:type", content: "article" },
    { name: "twitter:card", content: "summary" },
  ] : [{ title: "Not found" }] }),
  component: Province,
});

function Province() {
  const p = Route.useLoaderData();
  const d = provinceDetails[p.slug];
  return (
    <>
      <PageHeader eyebrow={`Capital · ${p.capital}`} title={p.name} crumbs={[{ label: "Provinces", to: "/provinces" }, { label: p.name }]} intro={p.overview} />
      <div className="mx-auto grid max-w-5xl gap-12 px-5 py-16 md:grid-cols-[1fr_260px]">
        <div>
          {d && (
            <nav className="mb-12 flex flex-wrap gap-x-5 gap-y-2 border-b border-border pb-4 text-sm">
              {d.sections.map((x) => <a key={x.id} href={`#${x.id}`} className="text-muted-foreground hover:text-primary">{x.title}</a>)}
            </nav>
          )}
          {d?.sections.map((x) => (
            <section key={x.id} id={x.id} className="mb-12 scroll-mt-24">
              <h2 className="text-3xl">{x.title}</h2>
              {(Array.isArray(x.body) ? x.body : [x.body]).map((t, i) => <p key={i} className="mt-4 leading-relaxed">{t}</p>)}
            </section>
          ))}
          {d && (
            <section className="mb-12">
              <h2 className="text-3xl">Places to know</h2>
              <ul className="mt-4">{d.keyPlaces.map((k) => <li key={k.name} className="border-b border-border py-3"><span className="font-display text-lg">{k.name}</span><span className="block text-sm text-muted-foreground">{k.note}</span></li>)}</ul>
            </section>
          )}
          <h2 className="text-3xl">Highlights</h2>
          <ul className="mt-4 space-y-2">{p.highlights.map((h) => <li key={h} className="border-b border-border py-2">{h}</li>)}</ul>
          <SourceList ids={p.sources} />
        </div>
        <aside className="h-fit md:sticky md:top-24 border border-border bg-card p-5 text-sm">
          <p className="eyebrow">Facts</p>
          <dl className="mt-3 space-y-2">
            <div><dt className="text-muted-foreground">Arabic name</dt><dd className="font-arabic text-lg">{p.nameAr}</dd></div>
            <div><dt className="text-muted-foreground">Capital</dt><dd>{p.capital}</dd></div>
            <div><dt className="text-muted-foreground">Landscape</dt><dd>{p.landscape}</dd></div>
            {d && <div><dt className="text-muted-foreground">Living traditions</dt><dd>{d.traditions.join(" · ")}</dd></div>}
          </dl>
        </aside>
      </div>
    </>
  );
}
