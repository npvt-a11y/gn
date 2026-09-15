import Link from "next/link";
import type { Article } from "@/lib/articles";

export function BlogCard({ article }: { article: Article }) {
  return (
    <Link
      href={`/knowledge/${article.slug}`}
      className="group flex h-full flex-col border border-border bg-white p-8 transition-all duration-500 hover:border-gold/50"
    >
      <div className="flex items-center gap-3 text-[11px] tracking-[0.14em] text-gold uppercase">
        <span>{article.category}</span>
        <span className="text-border">·</span>
        <span className="text-charcoal-muted">{article.readTime}</span>
      </div>
      <h3 className="font-serif mt-4 text-2xl leading-snug text-forest transition-colors group-hover:text-forest-light">
        {article.title}
      </h3>
      <p className="mt-4 flex-1 text-sm leading-relaxed text-charcoal-muted">
        {article.excerpt}
      </p>
      <span className="mt-8 text-xs font-medium tracking-[0.12em] text-forest uppercase transition-transform duration-400 group-hover:translate-x-1">
        Read article →
      </span>
    </Link>
  );
}
