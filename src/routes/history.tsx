import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/PageHeader";
import { Timeline } from "@/components/Timeline";

export const Route = createFileRoute("/history")({
  head: () => ({ meta: [
    { title: "History Timeline — Saudi Heritage Atlas" },
    { name: "description", content: "A sourced timeline of Arabian and Saudi history from prehistory to the modern Kingdom." },
    { property: "og:title", content: "History Timeline — Saudi Heritage Atlas" },
    { property: "og:description", content: "A sourced timeline of Arabian and Saudi history." },
  ] }),
  component: () => (
    <>
      <PageHeader eyebrow="History" title="Saudi Arabia through time" crumbs={[{ label: "History" }]} intro="Each entry is labelled by evidence type — archaeological, historical record, religious tradition or government information — and linked to its source." />
      <div className="mx-auto max-w-5xl px-5 py-16"><Timeline /></div>
    </>
  ),
});
