import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { CtaBanner } from "@/components/ui/CtaBanner";
import { Reveal } from "@/components/ui/Reveal";
import { PageHero, SectionHeader } from "@/components/ui/SectionHeader";
import { IMAGES } from "@/lib/constants";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Our Shilajit",
  description:
    "Discover Gilgit Naturals Shilajit — origin, appearance, texture, purification, packaging and wholesale formats from the mountains of Gilgit.",
  path: "/our-shilajit",
  keywords: ["Gilgit Shilajit", "premium Shilajit", "Shilajit resin wholesale"],
});

const sections = [
  {
    title: "What our Shilajit is",
    text: "Purified Shilajit resin supplied for wholesale partners who need a consistent, carefully handled product rooted in Gilgit mountain origin.",
  },
  {
    title: "Origin",
    text: "Sourced in connection with the high mountain environments of Gilgit in northern Pakistan — a region long associated with Shilajit.",
  },
  {
    title: "Appearance",
    text: "Deep brown to near-black resin with a dense, polished look when properly purified and packaged.",
  },
  {
    title: "Texture",
    text: "Firm in cooler conditions; softens with gentle warmth. This temperature response is a natural characteristic of Shilajit resin.",
  },
  {
    title: "Traditional use",
    text: "Historically associated with traditional wellness practices in mountainous regions. Traditional use is cultural context — not medical advice.",
  },
  {
    title: "Purification",
    text: "Raw material is selected, cleaned, filtered and concentrated to remove insoluble impurities before packaging.",
  },
  {
    title: "Packaging",
    text: "Wholesale packaging options can be discussed based on quantity and business needs — from jars to bulk containers.",
  },
  {
    title: "Storage",
    text: "Store sealed in a cool, dry place away from direct sunlight. Avoid moisture contamination during handling.",
  },
  {
    title: "Wholesale formats",
    text: "Small wholesale, medium wholesale, bulk supply and private-label discussions are available on request.",
  },
];

export default function OurShilajitPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Product"
        title="Our Shilajit"
        description="A premium product page for businesses evaluating authenticity, handling and wholesale suitability."
      >
        <div className="flex flex-wrap gap-4">
          <Button href="/wholesale">Explore Wholesale Supply</Button>
          <Button href="/what-is-shilajit" variant="secondary">
            Learn About Shilajit
          </Button>
        </div>
      </PageHero>

      <section className="mx-auto max-w-6xl px-6 py-20 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
          <Reveal scale className="relative aspect-[4/5] overflow-hidden">
            <Image
              src={IMAGES.productClose}
              alt="Close-up of dark natural resin representing purified Gilgit Shilajit"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
              priority
            />
          </Reveal>
          <Reveal scale className="relative aspect-[4/5] overflow-hidden">
            <Image
              src={IMAGES.texture}
              alt="Natural earthy texture suggesting mountain-origin mineral resin"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-20 lg:px-8 lg:pb-28">
        <Reveal>
          <SectionHeader
            eyebrow="Product Detail"
            title="Understanding Our Shilajit"
            className="mb-14"
          />
        </Reveal>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {sections.map((s, i) => (
            <Reveal key={s.title} delay={((i % 5) + 1) as 1 | 2 | 3 | 4 | 5}>
              <article className="h-full border-t border-gold/40 pt-6">
                <h2 className="font-serif text-xl text-forest">{s.title}</h2>
                <p className="mt-3 text-sm leading-relaxed text-charcoal-muted">
                  {s.text}
                </p>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <aside className="mt-16 border border-border bg-cream-dark/50 p-8 md:p-10">
            <p className="text-[11px] tracking-[0.14em] text-gold uppercase">
              Disclaimer
            </p>
            <p className="mt-4 text-sm leading-relaxed text-charcoal-muted">
              Information about traditional uses is for educational and cultural
              context only. It is not medical advice. Gilgit Naturals does not
              present Shilajit as a cure, treatment or diagnosis for any disease
              or medical condition.
            </p>
          </aside>
        </Reveal>
      </section>

      <CtaBanner
        title="Interested in wholesale supply?"
        description="Request pricing and packaging options tailored to your business."
      />
    </>
  );
}
