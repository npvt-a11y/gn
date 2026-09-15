import { clsx } from "clsx";

type TestimonialCardProps = {
  name: string;
  city: string;
  text: string;
  type?: string;
  placeholder?: boolean;
  className?: string;
};

export function TestimonialCard({
  name,
  city,
  text,
  type,
  placeholder,
  className,
}: TestimonialCardProps) {
  return (
    <article
      className={clsx(
        "flex h-full flex-col border border-border bg-white p-8 transition-colors duration-400 hover:border-gold/40",
        className
      )}
    >
      {placeholder && (
        <span className="mb-4 text-[10px] font-medium tracking-[0.15em] text-charcoal-muted/60 uppercase">
          Placeholder review
        </span>
      )}
      <p className="flex-1 text-[0.95rem] leading-relaxed text-charcoal-muted">
        &ldquo;{text}&rdquo;
      </p>
      <div className="mt-8 border-t border-border pt-5">
        <p className="text-sm font-medium text-forest">{name}</p>
        <p className="mt-1 text-xs tracking-wide text-charcoal-muted">
          {city}
          {type ? ` · ${type}` : ""}
        </p>
      </div>
    </article>
  );
}
