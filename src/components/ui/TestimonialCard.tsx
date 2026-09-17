import { clsx } from "clsx";

type TestimonialCardProps = {
  name: string;
  city: string;
  text: string;
  type?: string;
  rating?: number;
  className?: string;
};

export function TestimonialCard({
  name,
  city,
  text,
  type,
  rating = 5,
  className,
}: TestimonialCardProps) {
  return (
    <article
      className={clsx(
        "flex h-full flex-col border border-border bg-white p-8 transition-colors duration-400 hover:border-gold/40",
        className
      )}
    >
      <div className="mb-6 flex items-center justify-between">
        <div
          className="flex gap-1 text-gold"
          aria-label={`${rating} out of 5 stars`}
        >
          {Array.from({ length: 5 }, (_, index) => (
            <span key={index} aria-hidden="true">
              {index < rating ? "★" : "☆"}
            </span>
          ))}
        </div>
      </div>
      <p className="flex-1 text-[0.95rem] leading-relaxed text-charcoal-muted">
        &ldquo;{text}&rdquo;
      </p>
      <div className="mt-8 flex items-center gap-3 border-t border-border pt-5">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-forest text-xs font-medium text-cream">
          {name
            .split(" ")
            .map((part) => part[0])
            .join("")
            .replace(".", "")}
        </div>
        <div>
          <p className="text-sm font-medium text-forest">{name}</p>
          <p className="mt-1 text-xs tracking-wide text-charcoal-muted">
            {city}
            {type ? ` · ${type}` : ""}
          </p>
        </div>
      </div>
    </article>
  );
}
