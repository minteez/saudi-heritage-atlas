import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";

export function PageHeader({ eyebrow, title, intro, crumbs = [] }: { eyebrow: string; title: string; intro?: ReactNode; crumbs?: { label: string; to?: string }[] }) {
  return (
    <div className="border-b border-border pattern-bg">
      <div className="mx-auto max-w-7xl px-5 pb-12 pt-10">
        <nav className="text-xs text-muted-foreground" aria-label="Breadcrumb">
          <Link to="/" className="hover:text-foreground">Atlas</Link>
          {crumbs.map((c) => (
            <span key={c.label}> / {c.to ? <a href={c.to} className="hover:text-foreground">{c.label}</a> : c.label}</span>
          ))}
        </nav>
        <p className="eyebrow mt-8">{eyebrow}</p>
        <h1 className="mt-3 max-w-4xl text-5xl leading-[1.05] md:text-7xl">{title}</h1>
        {intro && <p className="mt-6 max-w-2xl text-lg text-muted-foreground">{intro}</p>}
      </div>
    </div>
  );
}
