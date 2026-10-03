import { createFileRoute, notFound } from "@tanstack/react-router";
import { PageHeader } from "@/components/PageHeader";
import { SourceList } from "@/components/SourceList";
import { getProvince } from "@/data/provinces";

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
  ] : [{ title: "Not found" }] }),
  component: Province,
});

function Province() {
  const p = Route.useLoaderData();
  return (
    <>
      <PageHeader eyebrow={`Capital · ${p.capital}`} title={p.name} crumbs={[{ label: "Provinces", to: "/provinces" }, { label: p.name }]} intro={p.overview} />
      <div className="mx-auto grid max-w-5xl gap-12 px-5 py-16 md:grid-cols-[1fr_260px]">
        <div>
          <h2 className="text-3xl">Highlights</h2>
          <ul className="mt-4 space-y-2">{p.highlights.map((h) => <li key={h} className="border-b border-border py-2">{h}</li>)}</ul>
          <p className="mt-10 border-s-2 border-primary ps-4 text-sm text-muted-foreground">This province profile is being expanded with history, food, dress, dialect and architecture.</p>
          <SourceList ids={p.sources} />
        </div>
        <aside className="h-fit border border-border bg-card p-5 text-sm">
          <p className="eyebrow">Facts</p>
          <dl className="mt-3 space-y-2">
            <div><dt className="text-muted-foreground">Arabic name</dt><dd className="font-arabic text-lg">{p.nameAr}</dd></div>
            <div><dt className="text-muted-foreground">Landscape</dt><dd>{p.landscape}</dd></div>
          </dl>
        </aside>
      </div>
    </>
  );
}
