import { useState } from "react";
import { eras, events } from "@/data/timeline";
import { getSources } from "@/data/sources";
import { useLang } from "@/lib/i18n";

export function Timeline({ limit }: { limit?: number }) {
  const { lang } = useLang();
  const [era, setEra] = useState<string>("all");
  const list = events.filter((e) => era === "all" || e.era === era).slice(0, limit);

  return (
    <div>
      <div className="flex gap-2 overflow-x-auto pb-3">
        <button onClick={() => setEra("all")} className={`shrink-0 border px-3 py-1.5 text-xs ${era === "all" ? "border-primary bg-primary text-primary-foreground" : "border-border"}`}>All eras</button>
        {eras.map((e) => (
          <button key={e.id} onClick={() => setEra(e.id)} className={`shrink-0 border px-3 py-1.5 text-xs ${era === e.id ? "border-primary bg-primary text-primary-foreground" : "border-border hover:border-primary"}`}>
            {lang === "ar" ? e.nameAr : e.name}
          </button>
        ))}
      </div>
      <ol className="relative mt-8 border-s border-border">
        {list.map((e) => (
          <li key={e.id} id={e.id} className="relative mb-10 ps-8 fade-up">
            <span className="absolute -start-[7px] top-1.5 h-3 w-3 rotate-45 bg-primary" />
            <p className="font-display text-xl text-primary">{e.date}</p>
            <h3 className="mt-1 text-2xl">{e.title}</h3>
            <p className="mt-2 max-w-2xl text-muted-foreground">{e.summary}</p>
            <div className="mt-3 flex flex-wrap items-center gap-3 text-xs">
              <span className="border border-accent px-2 py-0.5 text-accent">{e.evidence}</span>
              {e.place && <span className="text-muted-foreground">{e.place}</span>}
              {getSources(e.sources).map((s) => (
                <a key={s.id} href={s.url} target="_blank" rel="noreferrer" className="text-muted-foreground underline underline-offset-2 hover:text-primary">{s.publisher}</a>
              ))}
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
}
