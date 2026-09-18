import { clsx } from "clsx";
import type { ReactNode } from "react";

type SectionHeaderProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
  light?: boolean;
};

export function SectionHeader({
  eyebrow,
  title,
  description,
  align = "left",
  className,
  light = false,
}: SectionHeaderProps) {
  return (
    <div
      className={clsx(
        align === "center" && "mx-auto max-w-2xl text-center",
        className
      )}
    >
      {eyebrow && (
        <p className={clsx("eyebrow mb-4", light && "text-gold-light")}>
          {eyebrow}
        </p>
      )}
      <h2
        className={clsx(
          "font-serif text-3xl leading-tight md:text-4xl lg:text-[2.75rem]",
          light ? "text-cream" : "text-forest"
        )}
      >
        {title}
      </h2>
      {description && (
        <p
          className={clsx(
            "mt-5 max-w-xl text-base leading-relaxed md:text-lg",
            align === "center" && "mx-auto",
            light ? "text-cream/75" : "text-charcoal-muted"
          )}
        >
          {description}
        </p>
      )}
      <div
        className={clsx(
          "divider-gold mt-6",
          align === "center" && "mx-auto"
        )}
      />
    </div>
  );
}

type PageHeroProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  children?: ReactNode;
  className?: string;
  light?: boolean;
};

export function PageHero({
  eyebrow,
  title,
  description,
  children,
  className,
  light = false,
}: PageHeroProps) {
  return (
    <section
      className={clsx(
        "border-b border-border pt-32 pb-16 md:pt-40 md:pb-20",
        light ? "bg-forest text-cream" : "bg-cream-dark/40",
        className
      )}
    >
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        {eyebrow && <p className={clsx("eyebrow mb-5", light && "text-gold-light")}>{eyebrow}</p>}
        <h1 className={clsx("font-serif max-w-3xl text-4xl leading-[1.15] md:text-5xl lg:text-6xl", light ? "text-cream" : "text-forest")}>
          {title}
        </h1>
        {description && (
          <p className={clsx("mt-6 max-w-2xl text-base leading-relaxed md:text-lg", light ? "text-cream/70" : "text-charcoal-muted")}>
            {description}
          </p>
        )}
        {children && <div className="mt-8">{children}</div>}
      </div>
    </section>
  );
}
