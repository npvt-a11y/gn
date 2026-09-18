import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { CtaBanner } from "@/components/ui/CtaBanner";
import {
  IconBox,
  IconEye,
  IconMountain,
  IconShield,
  IconTruck,
  TrustItem,
} from "@/components/ui/Icons";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { TestimonialCard } from "@/components/ui/TestimonialCard";
import { reviews } from "@/lib/content";
import { IMAGES } from "@/lib/constants";
import { createMetadata } from "@/lib/seo";
import { formatPKR, PRODUCT_PRICES } from "@/lib/store";

export const metadata = createMetadata({
  title: "Gilgit Naturals",
  description:
    "Premium wholesale Shilajit supplier from the mountains of Gilgit. Authentic bulk Shilajit for retailers, resellers, pharmacies, gyms and wellness businesses across Pakistan.",
  path: "/",
  keywords: [
    "Shilajit resin wholesale",
    "Shilajit for retailers",
    "Shilajit bulk supplier",
  ],
});

const trustItems = [
  { icon: <IconMountain className="h-7 w-7" />, title: "Direct Mountain Sourcing" },
  { icon: <IconBox className="h-7 w-7" />, title: "Wholesale Supply" },
  { icon: <IconShield className="h-7 w-7" />, title: "Quality-Focused Processing" },
  { icon: <IconEye className="h-7 w-7" />, title: "Transparent Information" },
  { icon: <IconTruck className="h-7 w-7" />, title: "Pakistan-Wide Delivery" },
];

export default function HomePage() {
  const previewReviews = reviews.slice(0, 3);

  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[92vh] overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={IMAGES.hero}
            alt="Snow-covered Himalayan mountain peaks representing Gilgit origin Shilajit sourcing"
            fill
            priority
            className="object-cover hero-image-drift"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-forest/90 via-forest/70 to-forest/35" />
          <div className="absolute inset-0 bg-gradient-to-t from-forest/50 via-transparent to-transparent" />
        </div>

        <div className="relative mx-auto flex min-h-[92vh] max-w-6xl flex-col justify-end px-6 pb-20 pt-36 lg:px-8 lg:pb-28">
          <p className="eyebrow mb-5 animate-fade-up text-gold-light">
            Wholesale Shilajit
          </p>
          <h1 className="font-serif max-w-3xl text-4xl leading-[1.12] text-cream animate-fade-up stagger-1 md:text-5xl lg:text-6xl">
            Authentic Shilajit.
            <br />
            Sourced from the Mountains of Gilgit.
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-cream/75 animate-fade-up stagger-2 md:text-lg">
            Premium Shilajit supply for retailers, resellers, wellness
            businesses and brands looking for a reliable source.
          </p>
          <div className="mt-10 flex flex-wrap gap-4 animate-fade-up stagger-3">
            <Link
              href="/request-quote"
              className="inline-flex items-center justify-center bg-cream px-7 py-3.5 text-[0.8125rem] font-medium tracking-[0.06em] text-forest uppercase transition-all duration-400 hover:-translate-y-px hover:bg-white"
            >
              Request Wholesale Quote
            </Link>
            <Button
              href="/our-shilajit"
              variant="gold"
              className="!border-cream/40 !text-cream hover:!border-cream"
            >
              Explore Our Shilajit
            </Button>
          </div>
          <p className="mt-10 text-xs tracking-[0.14em] text-cream/55 uppercase animate-fade-up stagger-4">
            Direct sourcing · Wholesale supply · Quality-focused
          </p>
        </div>
      </section>

      {/* Trust strip */}
      <section className="border-b border-border bg-white">
        <div className="mx-auto max-w-6xl px-6 py-16 lg:px-8">
          <Reveal>
            <p className="mb-12 text-center text-[11px] tracking-[0.18em] text-gold uppercase">
              Why Businesses Choose Gilgit Naturals
            </p>
          </Reveal>
          <div className="grid grid-cols-2 gap-10 md:grid-cols-5 md:gap-6">
            {trustItems.map((item, i) => (
              <Reveal key={item.title} delay={(i + 1) as 1 | 2 | 3 | 4 | 5}>
                <TrustItem icon={item.icon} title={item.title} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Retail product endorsement */}
      <section className="bg-forest text-cream">
        <div className="mx-auto max-w-6xl px-6 py-24 lg:px-8 lg:py-32">
          <Reveal>
            <SectionHeader
              eyebrow="Retail Collection"
              title="Gilgit Shilajit, ready to order"
              description="Choose the format that suits you. Add a pack to your cart, then complete your Cash on Delivery order with clear pricing and delivery charges."
              light
              align="center"
              className="mb-14"
            />
          </Reveal>
          <div className="grid gap-5 md:grid-cols-3">
            {[
              { size: "10g", label: "Trial size", text: "A considered introduction to Gilgit Naturals Shilajit resin." },
              { size: "20g", label: "Everyday size", text: "A balanced format for regular personal use or gifting." },
              { size: "50g", label: "Value size", text: "A larger format for customers who order regularly." },
            ].map((pack, index) => (
              <Reveal key={pack.size} delay={((index + 1) as 1 | 2 | 3)}>
                <article className="flex h-full flex-col border border-white/15 bg-forest-muted p-7 transition-all duration-500 hover:-translate-y-1 hover:border-gold/70 hover:bg-forest-light">
                  <p className="text-[11px] tracking-[0.14em] text-gold-light uppercase">{pack.label}</p>
                  <div className="mt-4 flex items-end justify-between gap-3">
                    <h3 className="font-serif text-4xl text-cream">{pack.size}</h3>
                    <p className="text-lg font-medium text-gold-light">{formatPKR(PRODUCT_PRICES[pack.size])}</p>
                  </div>
                  <p className="mt-5 flex-1 text-sm leading-relaxed text-cream/65">{pack.text}</p>
                  <Button href="/our-shilajit" variant="gold" className="mt-7 !border-gold/70 !text-cream hover:!bg-gold hover:!text-forest">
                    View Product
                  </Button>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Wholesale intro */}
      <section className="mx-auto max-w-6xl px-6 py-24 lg:px-8 lg:py-32">
        <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
          <Reveal>
            <SectionHeader
              eyebrow="For Business"
              title="Shilajit for Businesses That Care About Quality"
              description="Gilgit Naturals supplies Shilajit to businesses that need consistency, authenticity and dependable wholesale supply — retailers, pharmacies, gyms, wellness brands and private-label partners across Pakistan."
            />
            <div className="mt-10">
              <Button href="/wholesale">Explore Wholesale Supply</Button>
            </div>
          </Reveal>
          <Reveal scale className="relative aspect-[4/5] overflow-hidden">
            <Image
              src={IMAGES.product}
              alt="Natural wellness product jar representing premium Shilajit packaging"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </Reveal>
        </div>
      </section>

      {/* Education preview */}
      <section className="bg-cream-dark/50">
        <div className="mx-auto max-w-6xl px-6 py-24 lg:px-8 lg:py-32">
          <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
            <Reveal scale className="relative order-2 aspect-[5/4] overflow-hidden lg:order-1">
              <Image
                src={IMAGES.mountainsAlt}
                alt="High mountain landscape illustrating the natural environment of Shilajit"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </Reveal>
            <Reveal className="order-1 lg:order-2">
              <SectionHeader
                eyebrow="Education"
                title="What Exactly Is Shilajit?"
                description="A naturally occurring mineral-rich substance formed in high mountain environments. Collected carefully, purified thoughtfully, and supplied with transparency for businesses that value authenticity."
              />
              <ul className="mt-8 space-y-3 text-sm text-charcoal-muted">
                <li className="flex gap-3">
                  <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-gold" />
                  Natural origin in mountainous rock systems
                </li>
                <li className="flex gap-3">
                  <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-gold" />
                  Organic mineral-rich material with traditional use
                </li>
                <li className="flex gap-3">
                  <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-gold" />
                  Collected and purified before wholesale supply
                </li>
              </ul>
              <div className="mt-10">
                <Button href="/what-is-shilajit" variant="secondary">
                  Learn About Shilajit
                </Button>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Quality */}
      <section className="mx-auto max-w-6xl px-6 py-24 lg:px-8 lg:py-32">
        <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
          <Reveal>
            <SectionHeader
              eyebrow="Quality"
              title="Quality Should Never Be a Question."
              description="From sourcing and purification to handling, packaging, storage and batch consistency — our approach prioritizes care and transparency at every stage."
            />
            <div className="mt-10">
              <Button href="/quality">Explore Our Quality Standards</Button>
            </div>
          </Reveal>
          <Reveal scale className="relative aspect-square overflow-hidden">
            <Image
              src={IMAGES.productClose}
              alt="Close-up of natural resin texture representing purified Shilajit quality"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </Reveal>
        </div>
      </section>

      {/* Sourcing */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={IMAGES.valley}
            alt="Mountain valley in northern Pakistan representing Gilgit sourcing region"
            fill
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-forest/80" />
        </div>
        <div className="relative mx-auto max-w-6xl px-6 py-28 lg:px-8 lg:py-36">
          <Reveal>
            <SectionHeader
              eyebrow="Sourcing"
              title="From the Mountains of Gilgit to Your Business"
              description="Gilgit → sourcing → processing → quality → wholesale customer. A clear path from mountain origin to business supply."
              light
            />
            <div className="mt-10">
              <Link
                href="/sourcing"
                className="inline-flex items-center justify-center border border-gold/50 px-7 py-3.5 text-[0.8125rem] font-medium tracking-[0.06em] text-cream uppercase transition-all duration-400 hover:border-cream"
              >
                Our Sourcing Story
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Reviews preview */}
      <section className="mx-auto max-w-6xl px-6 py-24 lg:px-8 lg:py-32">
        <Reveal>
          <SectionHeader
            eyebrow="Reviews"
            title="Trusted by Customers Across Pakistan"
            description="Feedback from businesses and customers across Pakistan."
            align="center"
            className="mb-14"
          />
        </Reveal>
        <div className="grid gap-6 md:grid-cols-3">
          {previewReviews.map((r, i) => (
            <Reveal key={r.id} delay={(i + 1) as 1 | 2 | 3}>
              <TestimonialCard {...r} />
            </Reveal>
          ))}
        </div>
        <Reveal>
          <div className="mt-12 text-center">
            <Button href="/reviews" variant="secondary">
              Read All Reviews
            </Button>
          </div>
        </Reveal>
      </section>

      <CtaBanner
        title="Looking for a Reliable Shilajit Supplier?"
        description="Tell us what you need and we'll help you find the right wholesale option for your business."
        secondaryHref="/contact"
        secondaryLabel="Contact Us"
      />
    </>
  );
}
