import { ClientOnly, Link, useNavigate } from "@tanstack/react-router";
import { lazy, Suspense, useState } from "react";
import { places, type Layer } from "@/data/places";

const LeafletCanvas = lazy(() => import("./LeafletCanvas"));
import { useLang } from "@/lib/i18n";

const layerMeta: Record<Layer | "provinces", { label: string; cls: string }> = {
  provinces: { label: "Provinces", cls: "fill-accent" },
  cities: { label: "Cities", cls: "fill-foreground" },
  archaeology: { label: "Archaeology", cls: "fill-primary" },
  heritage: { label: "Heritage sites", cls: "fill-sea" },
  routes: { label: "Historic routes", cls: "fill-sand" },
};

export function SaudiMap({ compact = false }: { compact?: boolean }) {
  const { lang } = useLang();
  const [active, setActive] = useState<Record<string, boolean>>({ provinces: false, cities: true, archaeology: true, heritage: true, routes: false });
  const [sel, setSel] = useState<string | null>("diriyah");
  const navigate = useNavigate();
  const selected = places.find((p) => p.id === sel);

  return (
    <div className="grid gap-6 lg:grid-cols-[1fr_300px]">
      <div className="relative overflow-hidden border border-border bg-card">
        <ClientOnly fallback={<div className="h-[520px] lg:h-[640px]" />}>
          <Suspense fallback={<div className="h-[520px] lg:h-[640px]" />}>
            <LeafletCanvas active={active} sel={sel} lang={lang} onSelect={setSel} onProvince={(slug) => navigate({ to: "/provinces/$slug", params: { slug } })} />
          </Suspense>
        </ClientOnly>
        <p className="pointer-events-none absolute bottom-2 start-3 z-[500] text-[10px] text-muted-foreground">Click a marker to explore · scroll-zoom after clicking the map</p>
      </div>
      <aside className="space-y-6">
        <div>
          <p className="eyebrow">Layers</p>
          <div className="mt-3 space-y-2">
            {(Object.keys(layerMeta) as (keyof typeof layerMeta)[]).map((k) => (
              <label key={k} className="flex cursor-pointer items-center gap-3 text-sm">
                <input type="checkbox" checked={!!active[k]} onChange={() => setActive({ ...active, [k]: !active[k] })} className="accent-primary" />
                <svg width="12" height="12"><circle cx="6" cy="6" r="5" className={layerMeta[k].cls} /></svg>
                {layerMeta[k].label}
              </label>
            ))}
          </div>
        </div>
        {selected && (
          <div className="border-t border-border pt-5">
            <p className="eyebrow">{selected.layer}</p>
            <h3 className="mt-2 text-2xl">{lang === "ar" ? selected.nameAr : selected.name}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{selected.note}</p>
            {selected.article && (
              <Link to="/articles/$slug" params={{ slug: selected.article }} className="mt-4 inline-block text-sm text-primary underline underline-offset-4">Read the article →</Link>
            )}
          </div>
        )}
      </aside>
    </div>
  );
}
