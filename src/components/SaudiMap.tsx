import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { outline, places, project, routes, W, H, type Layer } from "@/data/places";
import { provinces } from "@/data/provinces";
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
  const path = outline.map((p, i) => `${i ? "L" : "M"}${project(...p).join(",")}`).join(" ") + " Z";
  const selected = places.find((p) => p.id === sel);

  return (
    <div className="grid gap-6 lg:grid-cols-[1fr_300px]">
      <div className="relative border border-border bg-card pattern-bg">
        <svg viewBox={`0 0 ${W} ${H}`} className="h-auto w-full" role="img" aria-label="Schematic map of Saudi Arabia">
          <rect width={W} height={H} className="fill-transparent" />
          <text x={80} y={560} className="fill-sea/60 text-[18px] italic" transform="rotate(-55 80 560)">Red Sea</text>
          <text x={850} y={250} className="fill-sea/60 text-[18px] italic">Arabian Gulf</text>
          <path d={path} className="fill-secondary stroke-foreground/50" strokeWidth={1.5} />
          {active.routes && routes.map((r) => (
            <polyline key={r.id} points={r.points.map((p) => project(...p).join(",")).join(" ")} className="fill-none stroke-primary/70" strokeWidth={2} strokeDasharray="6 6" />
          ))}
          {active.provinces && provinces.map((p) => {
            const [x, y] = project(p.lon, p.lat);
            return (
              <Link key={p.slug} to="/provinces/$slug" params={{ slug: p.slug }}>
                <g className="cursor-pointer">
                  <rect x={x - 5} y={y - 5} width={10} height={10} transform={`rotate(45 ${x} ${y})`} className="fill-accent" />
                  <text x={x + 10} y={y - 8} className="fill-accent text-[14px]">{lang === "ar" ? p.nameAr : p.name}</text>
                </g>
              </Link>
            );
          })}
          {places.filter((p) => active[p.layer]).map((p) => {
            const [x, y] = project(p.lon, p.lat);
            const on = sel === p.id;
            return (
              <g key={p.id} className="cursor-pointer" onClick={() => setSel(p.id)}>
                <circle cx={x} cy={y} r={on ? 11 : 6} className={`${layerMeta[p.layer].cls} transition-all`} opacity={on ? 0.25 : 0} />
                <circle cx={x} cy={y} r={5} className={layerMeta[p.layer].cls} />
                {!compact && <text x={x + 9} y={y + 4} className="fill-foreground text-[13px]">{lang === "ar" ? p.nameAr : p.name}</text>}
              </g>
            );
          })}
        </svg>
        <p className="absolute bottom-2 start-3 text-[10px] text-muted-foreground">Schematic map — boundaries approximate</p>
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
