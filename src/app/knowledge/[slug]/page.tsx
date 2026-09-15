import Link from "next/link";
import { notFound } from "next/navigation";
import { Button } from "@/components/ui/Button";
import { CtaBanner } from "@/components/ui/CtaBanner";
import { Reveal } from "@/components/ui/Reveal";
import {
  articles,
  getAllArticleSlugs,
  getArticle,
} from "@/lib/articles";
import { createMetadata } from "@/lib/seo";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return getAllArticleSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) return {};
  return createMetadata({
    title: article.title,
    description: article.excerpt,
    path: `/knowledge/${article.slug}`,
  });
}

export default async function ArticlePage({ params }: Props) {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) notFound();

  const related = articles.filter((a) => a.slug !== slug).slice(0, 3);

  return (
    <>
      <article>
        <header className="border-b border-border bg-cream-dark/40 pt-32 pb-16 md:pt-40 md:pb-20">
          <div className="mx-auto max-w-3xl px-6 lg:px-8">
            <p className="eyebrow mb-5">{article.category}</p>
            <h1 className="font-serif text-4xl leading-tight text-forest md:text-5xl">
              {article.title}
            </h1>
            <div className="mt-6 flex flex-wrap gap-4 text-xs tracking-wide text-charcoal-muted">
              <span>{article.date}</span>
              <span>·</span>
              <span>{article.readTime} read</span>
            </div>
          </div>
        </header>

        <div className="mx-auto max-w-3xl px-6 py-16 lg:px-8 lg:py-20">
          {article.content.map((block, i) => (
            <Reveal key={i}>
              <section className={i > 0 ? "mt-12" : undefined}>
                {block.heading && (
                  <h2 className="font-serif text-2xl text-forest md:text-3xl">
                    {block.heading}
                  </h2>
                )}
                {block.heading && <div className="divider-gold mt-5 mb-6" />}
                <div className="space-y-5">
                  {block.paragraphs.map((p) => (
                    <p
                      key={p.slice(0, 32)}
                      className="text-base leading-relaxed text-charcoal-muted"
                    >
                      {p}
                    </p>
                  ))}
                </div>
              </section>
            </Reveal>
          ))}

          <div className="mt-14 flex flex-wrap gap-4">
            <Button href="/wholesale">Explore Wholesale</Button>
            <Button href="/knowledge" variant="secondary">
              All Articles
            </Button>
          </div>
        </div>
      </article>

      <section className="border-t border-border bg-white">
        <div className="mx-auto max-w-6xl px-6 py-16 lg:px-8">
          <h2 className="font-serif text-2xl text-forest">Related reading</h2>
          <ul className="mt-8 grid gap-4 md:grid-cols-3">
            {related.map((a) => (
              <li key={a.slug}>
                <Link
                  href={`/knowledge/${a.slug}`}
                  className="block border border-border p-6 transition-colors hover:border-gold/40"
                >
                  <p className="font-serif text-lg text-forest">{a.title}</p>
                  <p className="mt-2 text-xs text-charcoal-muted">{a.readTime}</p>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <CtaBanner
        title="Need bulk supply?"
        description="Turn product knowledge into a wholesale conversation."
      />
    </>
  );
}
