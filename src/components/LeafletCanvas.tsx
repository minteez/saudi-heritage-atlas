import { useEffect, useRef } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { places, routes } from "@/data/places";
import { provinces } from "@/data/provinces";

const colors: Record<string, string> = {
  cities: "var(--foreground)",
  archaeology: "var(--primary)",
  heritage: "var(--sea)",
  provinces: "var(--accent)",
};

const cssVar = (v: string) => {
  const name = v.slice(4, -1);
  return getComputedStyle(document.documentElement).getPropertyValue(name).trim() || "#8a5a3c";
};

interface Props {
  active: Record<string, boolean>;
  sel: string | null;
  lang: string;
  onSelect: (id: string) => void;
  onProvince: (slug: string) => void;
}

export default function LeafletCanvas({ active, sel, lang, onSelect, onProvince }: Props) {
  const el = useRef<HTMLDivElement>(null);
  const map = useRef<L.Map | null>(null);
  const group = useRef<L.LayerGroup | null>(null);
  const cb = useRef({ onSelect, onProvince });
  cb.current = { onSelect, onProvince };

  useEffect(() => {
    if (!el.current) return;
    const m = L.map(el.current, {
      center: [24, 45],
      zoom: 5,
      minZoom: 4,
      maxZoom: 12,
      maxBounds: [[10, 28], [36, 62]],
      scrollWheelZoom: false,
    });
    L.tileLayer("https://server.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Light_Gray_Base/MapServer/tile/{z}/{y}/{x}", {
      attribution: "Tiles &copy; Esri &mdash; Esri, HERE, Garmin, &copy; OpenStreetMap contributors",
      maxZoom: 16,
    }).addTo(m);
    L.tileLayer("https://server.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Light_Gray_Reference/MapServer/tile/{z}/{y}/{x}", { maxZoom: 16, pane: "shadowPane" }).addTo(m);
    m.on("focus", () => m.scrollWheelZoom.enable());
    m.on("blur", () => m.scrollWheelZoom.disable());
    group.current = L.layerGroup().addTo(m);
    map.current = m;
    return () => { m.remove(); map.current = null; };
  }, []);

  useEffect(() => {
    const g = group.current;
    if (!g) return;
    g.clearLayers();
    if (active["routes"]) {
      routes.forEach((r) => {
        L.polyline(r.points.map(([lon, lat]) => [lat, lon] as [number, number]), {
          color: cssVar("var(--primary)"), weight: 2.5, dashArray: "6 8", opacity: 0.8,
        }).bindTooltip(r.name, { sticky: true }).addTo(g);
      });
    }
    if (active["provinces"]) {
      provinces.forEach((p) => {
        L.marker([p.lat, p.lon], {
          icon: L.divIcon({ className: "", html: `<span class="sha-diamond"></span>`, iconSize: [12, 12] }),
        })
          .bindTooltip(lang === "ar" ? p.nameAr : p.name, { direction: "top" })
          .on("click", () => cb.current.onProvince(p.slug))
          .addTo(g);
      });
    }
    places.filter((p) => active[p.layer]).forEach((p) => {
      const on = p.id === sel;
      L.circleMarker([p.lat, p.lon], {
        radius: on ? 9 : 6,
        color: cssVar(on ? "var(--background)" : colors[p.layer]),
        weight: on ? 3 : 1,
        fillColor: cssVar(colors[p.layer]),
        fillOpacity: 0.95,
      })
        .bindTooltip(lang === "ar" ? p.nameAr : p.name, { direction: "top", offset: [0, -6] })
        .on("click", () => cb.current.onSelect(p.id))
        .addTo(g);
    });
  }, [active, sel, lang]);

  useEffect(() => {
    const p = places.find((x) => x.id === sel);
    if (p && map.current) map.current.panTo([p.lat, p.lon], { animate: true });
  }, [sel]);

  return <div ref={el} className="sha-map h-[520px] w-full lg:h-[640px]" aria-label="Interactive map of Saudi Arabia" />;
}
