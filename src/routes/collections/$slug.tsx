import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SourceList } from "@/components/SourceList";
import { getCollection } from "@/data/collections";
import { getCollectionPage } from "@/data/collection-pages";
import { getArticle } from "@/data/articles";
import { provinces } from "@/data/provinces";
import { getSources } from "@/data/sources";

export const Route = createFileRoute("/collections/$slug")({
  loader: ({ params }) => {
    const collection = getCollection(params.slug);
    const page = getCollectionPage(params.slug);
    if (!collection || !page) throw notFound();
    return { collection, page };
  },
  head: ({ loaderData }) => {
    const title = loaderData ? `${loaderData.collection.name} — Saudi Heritage Atlas` : "Collection unavailable — Saudi Heritage Atlas";
    const description = loaderData?.page.subtitle ?? "This collection is not available in the Saudi Heritage Atlas.";
    return { meta: [
      { title }, { name: "description", content: description },
      { property: "og:title", content: title }, { property: "og:description", content: description },
      { property: "og:type", content: "article" }, { name: "twitter:card", content: "summary_large_image" },
    ] };
  },
  notFoundComponent: () => <div className="mx-auto max-w-4xl px-5 py-20"><h1 className="text-4xl">Collection not available</h1><Button asChild variant="link" className="mt-6 px-0"><Link to="/collections"><ArrowLeft /> All collections</Link></Button></div>,
  component: CollectionReadingPage,
});

function CollectionReadingPage() {
  const { collection, page } = Route.useLoaderData();
  const linkedArticles = (collection.articles ?? []).flatMap((slug) => {
    const article = getArticle(slug);
    return article ? [article] : [];
  });
  return (
    <article>
      <section className="relative isolate overflow-hidden bg-ink text-ink-foreground">
        <img src={page.image} alt={page.imageAlt} width={1536} height={1024} className="absolute inset-0 -z-20 h-full w-full object-cover" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-t from-ink via-ink/50 to-ink/20" />
        <div className="mx-auto flex min-h-[440px] max-w-7xl flex-col justify-between px-5 py-8 md:min-h-[480px] md:py-10">
          <nav aria-label="Breadcrumb" className="flex flex-wrap gap-2 text-xs"><Link to="/">Atlas</Link><span>/</span><Link to="/collections">Collections</Link><span>/</span><span>{collection.name}</span></nav>
          <div className="mt-24 max-w-3xl">
            <p className="font-arabic text-xl opacity-80" lang="ar" dir="rtl">{collection.nameAr}</p>
            <h1 className="mt-3 text-5xl leading-tight md:text-7xl">{collection.name}</h1>
            <p className="mt-5 max-w-2xl text-lg">{page.subtitle}</p>
          </div>
        </div>
      </section>
      <p className="mx-auto max-w-7xl px-5 pt-3 text-xs text-muted-foreground">Illustrative image, AI-generated. Not a documentary photograph.</p>
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-12 lg:grid-cols-[230px_minmax(0,1fr)] lg:gap-16">
        <aside className="self-start lg:sticky lg:top-24">
          <p className="eyebrow">In this collection</p>
          <nav aria-label="On this page" className="mt-4 flex flex-col gap-3 text-sm">
            {page.sections.map((section, index) => <a key={section.id} href={`#${section.id}`} className="flex gap-3 hover:text-primary"><span className="text-muted-foreground">0{index + 1}</span>{section.title}</a>)}
            <a href="#collection-sources" className="border-t border-border pt-3 hover:text-primary">Sources & references</a>
          </nav>
          <div className="mt-8 border-t border-border pt-5">
            <p className="eyebrow">Regional connections</p>
            <div className="mt-3 flex flex-col gap-2 text-sm">{provinces.filter((province) => page.provinces.includes(province.slug)).map((province) => <Link key={province.slug} to="/provinces/$slug" params={{ slug: province.slug }} className="hover:text-primary">{province.name} ↗</Link>)}</div>
          </div>
        </aside>
        <div className="min-w-0 max-w-3xl">
          <p className="text-xs text-muted-foreground">{page.evidence}</p>
          <p className="mt-5 border-b border-border pb-8 text-xl leading-relaxed">{collection.intro}</p>
          <div className="mt-10 space-y-12">
            {page.sections.map((section) => <section key={section.id} id={section.id} className="scroll-mt-24">
              <h2 className="text-3xl leading-tight">{section.title}</h2>
              <div className="mt-5 space-y-4 text-lg leading-relaxed">{section.body.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</div>
              <p className="mt-4 text-xs leading-relaxed text-muted-foreground">References: {getSources(section.sources).map((source, index) => <span key={source.id}>{index > 0 && " · "}<a href={source.url} target="_blank" rel="noreferrer" className="underline underline-offset-2 hover:text-primary">{source.title}</a></span>)}</p>
            </section>)}
          </div>
          {linkedArticles.length > 0 && <section className="mt-12 border-t border-border pt-8"><p className="eyebrow">Explore in depth</p><div className="mt-5 grid gap-6 sm:grid-cols-2">{linkedArticles.map((article) => <Link key={article.slug} to="/articles/$slug" params={{ slug: article.slug }} className="group"><img src={article.image} alt={article.title} width={1536} height={1024} loading="lazy" className="aspect-[16/10] w-full object-cover" /><h3 className="mt-3 text-2xl group-hover:text-primary">{article.title} ↗</h3></Link>)}</div></section>}
          <div id="collection-sources" className="scroll-mt-24"><SourceList ids={collection.sources} /></div>
        </div>
      </div>
      <section className="border-y border-border bg-card">
        <div className="mx-auto max-w-7xl px-5 py-10"><p className="eyebrow">Continue through the atlas</p><div className="mt-5 flex flex-wrap gap-x-8 gap-y-4">{page.related.map((slug) => {
          const related = getCollection(slug);
          return related ? <Button key={slug} asChild variant="link" className="h-auto whitespace-normal px-0 text-lg"><Link to="/collections/$slug" params={{ slug }}>{related.name}<ArrowRight /></Link></Button> : null;
        })}</div></div>
      </section>
    </article>
  );
}