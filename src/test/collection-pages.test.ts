import { describe, expect, it } from "vitest";
import { collectionPages } from "@/data/collection-pages";
import { getCollection } from "@/data/collections";
import { sources } from "@/data/sources";
import { provinces } from "@/data/provinces";

describe("Published collection integrity", () => {
  it.each(collectionPages)("resolves every source and onward destination for $slug", (page) => {
    expect(getCollection(page.slug)?.status).toBe("published");
    for (const section of page.sections) {
      expect(section.sources.length).toBeGreaterThan(0);
      for (const id of section.sources) expect(sources[id]?.url).toMatch(/^https:\/\//);
    }
    for (const slug of page.related) expect(collectionPages.some((entry) => entry.slug === slug)).toBe(true);
    for (const slug of page.provinces) expect(provinces.some((entry) => entry.slug === slug)).toBe(true);
  });
});