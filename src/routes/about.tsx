import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/PageHeader";
import { VERSION } from "@/components/SiteFooter";

export const Route = createFileRoute("/about")({
  head: () => ({ meta: [
    { title: "About — Saudi Heritage Atlas" },
    { name: "description", content: "About the Saudi Heritage Atlas and its developer, Minteez." },
    { property: "og:title", content: "About — Saudi Heritage Atlas" },
    { property: "og:description", content: "About the atlas and its developer." },
  ] }),
  component: () => (
    <>
      <PageHeader eyebrow="About" title="About Saudi Heritage Atlas" crumbs={[{ label: "About" }]} intro="An independent, sourced, continuously expanding digital atlas of Saudi Arabia's history, regions and culture." />
      <div className="mx-auto max-w-3xl space-y-12 px-5 py-14 text-lg leading-relaxed">
        <section>
          <h2 className="text-3xl">About the developer</h2>
          <p className="mt-3"><strong>Minteez</strong> is a student, website developer, prompt engineer, public speaker, mathematics enthusiast, computer enthusiast, cybersecurity aspirant and digital creator. He is originally from Coorg (Kodagu), Karnataka, India, and currently lives in Saudi Arabia.</p>
          <blockquote className="mt-6 border-s-2 border-primary ps-5 font-display text-2xl italic">“Coming from Coorg and living in Saudi Arabia inspired this project: a way to explore, understand and document the country around me while building something that connects geography, history, culture and technology.”</blockquote>
        </section>
        <section id="corrections"><h2 className="text-3xl">Corrections</h2><p className="mt-3">Spotted an error? Contact the developer via Instagram or YouTube with the page and source.</p></section>
        <section id="changelog"><h2 className="text-3xl">Changelog</h2><p className="mt-3">v{VERSION} — Initial atlas: map, timeline, 13 provinces, featured articles, collections, search.</p></section>
        <section id="copyright"><h2 className="text-3xl">Copyright & privacy</h2><p className="mt-3">Illustrative images are AI-generated and labelled as such. No personal data is collected; language preference is stored on your device.</p></section>
      </div>
    </>
  ),
});
