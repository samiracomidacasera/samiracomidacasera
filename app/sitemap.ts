import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.samiracomidacasera.es";
  const locales = ["es", "en", "fr"] as const;
  const routes: Array<{ path: string; changeFrequency: "weekly" | "monthly"; priority: number }> = [
    { path: "", changeFrequency: "weekly", priority: 1.0 },
    { path: "/about", changeFrequency: "monthly", priority: 0.8 },
    { path: "/contact", changeFrequency: "monthly", priority: 0.8 },
  ];

  const sitemapEntries: MetadataRoute.Sitemap = [];

  for (const locale of locales) {
    for (const route of routes) {
      sitemapEntries.push({
        url: `${baseUrl}/${locale}${route.path}`,
        lastModified: new Date(),
        changeFrequency: route.changeFrequency,
        priority: route.priority,
        alternates: {
          languages: {
            es: `${baseUrl}/es${route.path}`,
            en: `${baseUrl}/en${route.path}`,
            fr: `${baseUrl}/fr${route.path}`,
            "x-default": `${baseUrl}/es${route.path}`,
          },
        },
      });
    }
  }

  return sitemapEntries;
}

