import type { MetadataRoute } from "next";

import { site } from "@/content/site";
import { stories } from "@/content/stories";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: site.url, changeFrequency: "daily", priority: 1 },
    ...stories.map((story) => ({
      url: `${site.url}/stories/${story.slug}`,
      lastModified: story.date,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
  ];
}
