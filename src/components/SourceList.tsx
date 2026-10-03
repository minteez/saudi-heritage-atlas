import { getSources } from "@/data/sources";

export function SourceList({ ids }: { ids: string[] }) {
  const list = getSources(ids);
  if (!list.length) return null;
  return (
    <section className="mt-16 border-t border-border pt-8">
      <p className="eyebrow">Sources</p>
      <ol className="mt-4 space-y-3 text-sm">
        {list.map((s, i) => (
          <li key={s.id} className="flex gap-3">
            <span className="text-muted-foreground">{i + 1}.</span>
            <span>
              <a href={s.url} target="_blank" rel="noreferrer" className="underline underline-offset-4 hover:text-primary">{s.title}</a>
              <span className="text-muted-foreground"> — {s.publisher}</span>
              <span className="ms-2 border border-border px-1.5 py-0.5 text-[10px] uppercase tracking-wider text-muted-foreground">{s.type}</span>
            </span>
          </li>
        ))}
      </ol>
    </section>
  );
}
