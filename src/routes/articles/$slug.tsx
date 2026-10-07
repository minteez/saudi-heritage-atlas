import { createFileRoute, notFound } from "@tanstack/react-router";
import { PageHeader } from "@/components/PageHeader";
import { SourceList } from "@/components/SourceList";
import { getArticle } from "@/data/articles";

export const Route = createFileRoute("/articles/$slug")({
  loader: ({ params }) => {
    const a = getArticle(params.slug);
    if (!a) throw notFound();
    return a;
  },
  head: ({ loaderData }) => ({ meta: loaderData ? [
    { title: `${loaderData.title} — Saudi Heritage Atlas` },
    { name: "description", content: loaderData.lede },
    { property: "og:title", content: loaderData.title },
    { property: "og:description", content: loaderData.lede },
    { property: "og:type", content: "article" },
    { name: "twitter:card", content: "summary_large_image" },
  ] : [{ title: "Not found" }] }),
  component: ArticlePage,
});

function ArticlePage() {
  const a = Route.useLoaderData();
  return (
    <article>
      <PageHeader eyebrow={a.kicker} title={a.title} crumbs={[{ label: "Collections", to: "/collections" }, { label: a.title }]} intro={a.lede} />
      <figure className="mx-auto max-w-7xl px-5 pt-10">
        <img src={a.image} alt={a.title} className="aspect-[21/9] w-full object-cover" />
        <figcaption className="mt-2 text-xs text-muted-foreground">{a.imageCredit}</figcaption>
      </figure>
      <div className="mx-auto grid max-w-5xl gap-12 px-5 py-12 md:grid-cols-[1fr_240px]">
        <div className="space-y-8 text-lg leading-relaxed">
          {a.sections.map((s) => {
            const paragraphs = Array.isArray(s.body) ? s.body : [s.body];
            return (
              <section key={s.heading}>
                <h2 className="text-3xl">{s.heading}</h2>
                <div className="mt-3 space-y-4">
                  {paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
                </div>
              </section>
            );
          })}
          <SourceList ids={a.sources} />
        </div>
        <aside className="h-fit border border-border bg-card p-5 text-sm">
          <p className="eyebrow">At a glance</p>
          <dl className="mt-3 space-y-2">{a.facts.map(([k, v]) => <div key={k}><dt className="text-muted-foreground">{k}</dt><dd>{v}</dd></div>)}</dl>
        </aside>
      </div>
    </article>
  );
}
