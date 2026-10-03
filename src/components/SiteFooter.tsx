import { Link } from "@tanstack/react-router";

export const VERSION = "1.0.0";

export function SiteFooter() {
  return (
    <footer className="mt-24 bg-ink text-ink-foreground pattern-bg">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-16 md:grid-cols-4">
        <div className="md:col-span-1">
          <h3 className="font-display text-2xl">Saudi Heritage Atlas</h3>
          <p className="mt-3 text-sm opacity-70">
            A living digital atlas documenting Saudi Arabia's history, geography, architecture, culture, people and heritage.
          </p>
          <p className="mt-6 text-xs opacity-50">Version {VERSION}</p>
        </div>
        <div>
          <p className="eyebrow">Website</p>
          <ul className="mt-4 space-y-2 text-sm opacity-80">
            <li><Link to="/about">About</Link></li>
            <li><Link to="/sources">Sources & methodology</Link></li>
            <li><Link to="/about" hash="corrections">Corrections</Link></li>
            <li><Link to="/about" hash="changelog">Changelog</Link></li>
            <li><Link to="/about" hash="copyright">Copyright & privacy</Link></li>
          </ul>
        </div>
        <div>
          <p className="eyebrow">Credits</p>
          <p className="mt-4 text-sm opacity-80">Concept, Research Direction & Development: <strong>Minteez</strong></p>
          <p className="mt-2 text-sm opacity-80">Built with Lovable</p>
        </div>
        <div>
          <p className="eyebrow">About the developer</p>
          <p className="mt-4 text-sm opacity-80">
            Minteez is a student, website developer and digital creator from Coorg (Kodagu), Karnataka, India, currently living in Saudi Arabia.
          </p>
          <ul className="mt-4 flex flex-wrap gap-4 text-sm">
            <li><a className="underline underline-offset-4" href="https://www.instagram.com/sudo.minteez" target="_blank" rel="noreferrer">Instagram</a></li>
            <li><a className="underline underline-offset-4" href="https://www.youtube.com/@thecubermint" target="_blank" rel="noreferrer">YouTube</a></li>
            <li><a className="underline underline-offset-4" href="https://minteez.lovable.app" target="_blank" rel="noreferrer">Portfolio</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-ink-foreground/10 px-5 py-5 text-center text-xs opacity-50">
        Independent educational project. Not affiliated with any government body.
      </div>
    </footer>
  );
}
