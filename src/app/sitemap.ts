import type { MetadataRoute } from "next";
import { getAllArticleSlugs } from "@/lib/articles";
import { SITE_URL } from "@/lib/constants";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "",
    "/wholesale",
    "/our-shilajit",
    "/what-is-shilajit",
    "/benefits",
    "/quality",
    "/sourcing",
    "/processing",
    "/request-quote",
    "/reviews",
    "/faq",
    "/about",
    "/contact",
    "/knowledge",
    "/privacy-policy",
    "/terms",
    "/shipping-policy",
  ];

  const pages = staticRoutes.map((path) => ({
    url: `${SITE_URL}${path}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: path === "" ? 1 : 0.7,
  }));

  const articles = getAllArticleSlugs().map((slug) => ({
    url: `${SITE_URL}/knowledge/${slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [...pages, ...articles];
}
