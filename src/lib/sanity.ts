import type { Article } from "@/lib/articles";

const projectId =
  process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "ihzfnev7";
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || "production";
const apiVersion = "2025-09-17";

type SanityArticle = {
  slug?: string;
  title?: string;
  excerpt?: string;
  category?: string;
  readTime?: string;
  date?: string;
  content?: { heading?: string; paragraphs?: string[] }[];
};

const query = `*[_type == "article" && defined(slug.current) && defined(publishedAt)] | order(publishedAt desc) {
  "slug": slug.current,
  title,
  excerpt,
  category,
  readTime,
  "date": publishedAt,
  content[] { heading, paragraphs }
}`;

export async function getSanityArticles(): Promise<Article[]> {
  const url = `https://${projectId}.api.sanity.io/v${apiVersion}/data/query/${dataset}?query=${encodeURIComponent(query)}`;

  try {
    const response = await fetch(url, {
      next: { revalidate: 60 },
    });
    if (!response.ok) return [];

    const data = (await response.json()) as { result?: SanityArticle[] };
    return (data.result || [])
      .filter(
        (article) =>
          article.slug &&
          article.title &&
          article.excerpt &&
          article.category &&
          article.readTime &&
          article.date &&
          article.content
      )
      .map((article) => ({
        slug: article.slug!,
        title: article.title!,
        excerpt: article.excerpt!,
        category: article.category!,
        readTime: article.readTime!,
        date: article.date!.slice(0, 10),
        content: article.content!.map((block) => ({
          heading: block.heading,
          paragraphs: block.paragraphs || [],
        })),
      }));
  } catch {
    return [];
  }
}

export async function getPublishedArticles() {
  const remoteArticles = await getSanityArticles();
  const { articles: localArticles } = await import("@/lib/articles");
  const remoteBySlug = new Map(
    remoteArticles.map((article) => [article.slug, article])
  );

  return [
    ...localArticles
      .filter((article) => !remoteBySlug.has(article.slug))
      .map((article) => article),
    ...remoteArticles,
  ];
}
