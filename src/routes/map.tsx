import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/PageHeader";
import { SaudiMap } from "@/components/SaudiMap";

export const Route = createFileRoute("/map")({
  head: () => ({ meta: [
    { title: "Interactive Map — Saudi Heritage Atlas" },
    { name: "description", content: "Explore Saudi cities, archaeological sites, heritage sites and historic routes on a layered map." },
    { property: "og:title", content: "Interactive Map — Saudi Heritage Atlas" },
    { property: "og:description", content: "Layered map of Saudi cities, archaeology and heritage." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary" },
  ] }),
  component: () => (
    <>
      <PageHeader eyebrow="Atlas" title="Interactive map" crumbs={[{ label: "Map" }]} intro="Toggle layers to see provinces, cities, archaeology, heritage sites and historic routes." />
      <div className="mx-auto max-w-7xl px-5 py-12"><SaudiMap /></div>
    </>
  ),
});
