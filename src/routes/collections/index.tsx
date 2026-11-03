import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHeader } from "@/components/PageHeader";
import { collections } from "@/data/collections";
import { getArticle } from "@/data/articles";
import { getCollectionPage } from "@/data/collection-pages";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export const Route = createFileRoute("/collections/")({
  head: () => ({ meta: [
    { title: "Collections — Saudi Heritage Atlas" },
    { name: "description", content: "Archaeology, architecture, food, music, crafts, clothing and more — the growing collections of the atlas." },
    { property: "og:title", content: "Collections — Saudi Heritage Atlas" },
    { property: "og:description", content: "The growing collections of the Saudi Heritage Atlas." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary" },
  ] }),
  component: () => (
    <>
      <PageHeader eyebrow="Museum" title="Collections" crumbs={[{ label: "Collections" }]} intro="Material traces and living traditions, from ancient cities to the craft of everyday life." />
      <div className="mx-auto max-w-7xl space-y-px px-5 py-12">
        {collections.map((c) => {
          const page = getCollectionPage(c.slug);
          return (
          <section key={c.slug} id={c.slug} className="grid gap-4 border-b border-border py-8 md:grid-cols-[280px_1fr]">
            <div>
              <h2 className="text-3xl">{c.name}</h2>
              <p className="font-arabic text-muted-foreground">{c.nameAr}</p>
              {c.status === "expanding" && <p className="mt-2 text-xs uppercase tracking-wider text-primary">Being expanded</p>}
            </div>
            <div>
              {page && <Link to="/collections/$slug" params={{ slug: c.slug }}><img src={page.image} alt={page.imageAlt} width={1536} height={1024} loading="lazy" className="mb-5 aspect-[21/9] w-full object-cover" /></Link>}
              <p>{c.intro}</p>
              {page ? <Button asChild variant="link" className="mt-3 px-0"><Link to="/collections/$slug" params={{ slug: c.slug }}>Explore {c.name}<ArrowRight /></Link></Button> : <p className="mt-3 text-sm text-muted-foreground">Planned: {c.planned.join(" · ")}</p>}
              <div className="mt-3 flex flex-wrap gap-4 text-sm">
                {c.articles?.map((s) => <Link key={s} to="/articles/$slug" params={{ slug: s }} className="text-primary underline">{getArticle(s)?.title}</Link>)}
              </div>
            </div>
          </section>
        ); })}
      </div>
    </>
  ),
});
