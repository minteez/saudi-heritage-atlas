import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/PageHeader";
import { SourceList } from "@/components/SourceList";
import { sources } from "@/data/sources";

export const Route = createFileRoute("/sources")({
  head: () => ({ meta: [
    { title: "Sources & Methodology — Saudi Heritage Atlas" },
    { name: "description", content: "The sources, evidence labels and research methodology behind the Saudi Heritage Atlas." },
    { property: "og:title", content: "Sources & Methodology — Saudi Heritage Atlas" },
    { property: "og:description", content: "Sources and methodology behind the atlas." },
  ] }),
  component: () => (
    <>
      <PageHeader eyebrow="Research" title="Sources & methodology" crumbs={[{ label: "Sources" }]} intro="We prioritise UNESCO, academic, archival and official sources, label every claim by evidence type, and link to originals rather than reproducing copyrighted text." />
      <div className="mx-auto max-w-4xl px-5 py-6"><SourceList ids={Object.keys(sources)} /></div>
    </>
  ),
});
