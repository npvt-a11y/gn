import Link from "next/link";
import { Button } from "./Button";

type CtaBannerProps = {
  title: string;
  description: string;
  primaryHref?: string;
  primaryLabel?: string;
  secondaryHref?: string;
  secondaryLabel?: string;
};

export function CtaBanner({
  title,
  description,
  primaryHref = "/request-quote",
  primaryLabel = "Request Wholesale Quote",
  secondaryHref,
  secondaryLabel,
}: CtaBannerProps) {
  return (
    <section className="bg-forest">
      <div className="mx-auto max-w-6xl px-6 py-20 text-center lg:px-8 lg:py-24">
        <p className="eyebrow mb-4 text-gold-light">Wholesale</p>
        <h2 className="font-serif mx-auto max-w-2xl text-3xl text-cream md:text-4xl">
          {title}
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-cream/70">
          {description}
        </p>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <Link
            href={primaryHref}
            className="inline-flex items-center justify-center bg-cream px-7 py-3.5 text-[0.8125rem] font-medium tracking-[0.06em] text-forest uppercase transition-all duration-400 hover:-translate-y-px hover:bg-white"
          >
            {primaryLabel}
          </Link>
          {secondaryHref && secondaryLabel && (
            <Button href={secondaryHref} variant="gold" className="!text-cream !border-gold/50 hover:!border-cream">
              {secondaryLabel}
            </Button>
          )}
        </div>
      </div>
    </section>
  );
}
