import type { MetadataRoute } from "next";
import { site } from "@/config/site";
import { services } from "@/lib/services";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const base = site.url;

  const serviceEntries = services.map((s) => ({
    url: `${base}/servicios/${s.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  return [
    {
      url: base,
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: 1,
    },
    ...serviceEntries,
  ];
}
