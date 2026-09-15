import { BlogCard } from "@/components/ui/BlogCard";
import { CtaBanner } from "@/components/ui/CtaBanner";
import { Reveal } from "@/components/ui/Reveal";
import { PageHero } from "@/components/ui/SectionHeader";
import { articles } from "@/lib/articles";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Shilajit Knowledge",
  description:
    "Educational articles on Shilajit — purification, quality identification, storage, traditional wellness and buying in bulk for businesses.",
  path: "/knowledge",
  keywords: ["Shilajit supplier", "bulk Shilajit Pakistan"],
});

export default function KnowledgePage() {
  return (
    <>
      <PageHero
        eyebrow="Knowledge"
        title="Shilajit Knowledge"
        description="Editorial guides for businesses and curious buyers — practical, careful and free of exaggerated claims."
      />

      <section className="mx-auto max-w-6xl px-6 py-16 lg:px-8 lg:py-24">
        <div className="grid gap-6 md:grid-cols-2">
          {articles.map((article, i) => (
            <Reveal key={article.slug} delay={((i % 4) + 1) as 1 | 2 | 3 | 4}>
              <BlogCard article={article} />
            </Reveal>
          ))}
        </div>
      </section>

      <CtaBanner
        title="From knowledge to supply"
        description="When education turns into a sourcing decision, request a wholesale quote."
      />
    </>
  );
}
