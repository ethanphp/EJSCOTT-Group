import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";
import { towns } from "@/lib/towns";
import { industries } from "@/lib/industries";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return [
    { url: SITE_URL, lastModified, changeFrequency: "monthly", priority: 1 },
    { url: `${SITE_URL}/web-design`, lastModified, changeFrequency: "monthly", priority: 0.9 },
    { url: `${SITE_URL}/websites-for`, lastModified, changeFrequency: "monthly", priority: 0.9 },
    { url: `${SITE_URL}/refer`, lastModified, changeFrequency: "yearly", priority: 0.5 },
    ...towns.map((t) => ({
      url: `${SITE_URL}/web-design/${t.slug}`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
    ...industries.map((i) => ({
      url: `${SITE_URL}/websites-for/${i.slug}`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
  ];
}
