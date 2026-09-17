import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { CtaBanner } from "@/components/ui/CtaBanner";
import { Reveal } from "@/components/ui/Reveal";
import { PageHero, SectionHeader } from "@/components/ui/SectionHeader";
import { IMAGES } from "@/lib/constants";
import { createMetadata } from "@/lib/seo";
import { AddToCartButton } from "@/components/cart/AddToCartButton";

export const metadata = createMetadata({
  title: "Gilgit Shilajit Resin",
  description:
    "Shop Gilgit Naturals Shilajit resin in 10g, 20g and 50g retail pack sizes, with wholesale quantities and packaging available on request.",
  path: "/our-shilajit",
  keywords: [
    "Gilgit Shilajit",
    "Shilajit resin",
    "Shilajit Pakistan",
    "Shilajit wholesale",
    "Shilajit pack sizes",
  ],
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

const packSizes = [
  {
    size: "10g",
    label: "Trial size",
    description: "A practical introduction to Gilgit Naturals Shilajit resin.",
  },
  {
    size: "20g",
    label: "Everyday size",
    description: "A balanced format for regular personal use or gifting.",
  },
  {
    size: "50g",
    label: "Value size",
    description: "A larger retail format for customers who order regularly.",
  },
];

const productGuidance = [
  {
    title: "What is included?",
    content:
      "Each pack contains Shilajit resin in the selected size. Product packaging, batch information, and any applicable usage guidance should be checked on the pack received.",
  },
  {
    title: "Nutrition information",
    content:
      "Shilajit resin is sold as a concentrated natural product rather than a conventional food serving with a standard nutrition panel. Gilgit Naturals does not publish invented calories, mineral values, or nutrient percentages. Contact us for available batch documentation before ordering.",
  },
  {
    title: "How should it be used?",
    content:
      "Use only according to the instructions supplied with the product or provided by Gilgit Naturals for the specific batch. Do not exceed the stated serving guidance. If dosage information is not included with your pack, contact us before use rather than guessing.",
  },
  {
    title: "Who should ask a professional first?",
    content:
      "Speak with a qualified healthcare professional before using Shilajit if you are pregnant or breastfeeding, take medication, have an existing medical condition, or have concerns about supplements or possible interactions. This product page is not medical advice.",
  },
  {
    title: "Storage and handling",
    content:
      "Keep the container sealed in a cool, dry place away from direct sunlight and moisture. Use a clean, dry utensil and avoid introducing water or other materials into the jar.",
  },
];

export default function OurShilajitPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Product"
        title="Gilgit Shilajit Resin"
        description="Carefully handled Shilajit resin from the mountain region of Gilgit, presented in retail-ready pack sizes for customers and wholesale buyers."
      >
        <div className="flex flex-wrap gap-4">
          <Button href="/request-quote">Request a Quote</Button>
          <Button href="/what-is-shilajit" variant="secondary">
            Learn About Shilajit
          </Button>
        </div>
      </PageHero>

      <section className="mx-auto max-w-6xl px-6 py-16 lg:px-8 lg:py-24">
        <div className="grid items-center gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:gap-20">
          <Reveal scale className="relative aspect-[4/5] overflow-hidden bg-cream-dark">
            <Image
              src={IMAGES.product}
              alt="Gilgit Naturals Shilajit product jar"
              fill
              className="img-zoom object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
              priority
            />
          </Reveal>
          <Reveal>
            <p className="eyebrow">Premium resin</p>
            <h2 className="mt-4 font-serif text-4xl leading-tight text-forest md:text-5xl">
              A considered product for everyday rituals and thoughtful retail.
            </h2>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-charcoal-muted">
              Our Shilajit resin is presented in clean, sealed packaging with
              clear product information. Choose a retail pack below or contact
              us for wholesale quantities and packaging discussions.
            </p>
            <div className="mt-8 grid grid-cols-2 gap-3 border-y border-border py-5 sm:grid-cols-4">
              {["Gilgit origin", "Resin format", "Sealed pack", "Quote available"].map(
                (item) => (
                  <p
                    key={item}
                    className="text-[10px] tracking-[0.12em] text-gold uppercase"
                  >
                    {item}
                  </p>
                )
              )}
            </div>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button href="/request-quote">Request a Quote</Button>
              <Button href="/contact" variant="secondary">
                Contact Us
              </Button>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-cream-dark/40">
        <div className="mx-auto max-w-6xl px-6 py-16 lg:px-8 lg:py-24">
          <Reveal>
            <SectionHeader
              eyebrow="Retail Formats"
              title="Choose your pack size"
              description="Choose a pack size to start an order on WhatsApp. We will confirm current pricing, availability, delivery options, and payment details."
              className="mb-12"
            />
          </Reveal>
          <div className="grid gap-5 md:grid-cols-3">
            {packSizes.map((pack, index) => (
              <Reveal
                key={pack.size}
                delay={((index + 1) as 1 | 2 | 3)}
              >
                <article className="flex h-full flex-col border border-border bg-white p-7 transition-all duration-500 hover:-translate-y-1 hover:border-gold/60 hover:shadow-[0_12px_30px_rgba(26,58,42,0.06)]">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="text-[11px] tracking-[0.14em] text-gold uppercase">
                        {pack.label}
                      </p>
                      <h3 className="mt-3 font-serif text-4xl text-forest">
                        {pack.size}
                      </h3>
                    </div>
                    <span className="border border-border px-2 py-1 text-[10px] tracking-[0.1em] text-charcoal-muted uppercase">
                      Resin
                    </span>
                  </div>
                  <p className="mt-5 flex-1 text-sm leading-relaxed text-charcoal-muted">
                    {pack.description}
                  </p>
                  <div className="mt-7 border-t border-border pt-5">
                    <p className="text-sm font-medium text-forest">
                      Price on request
                    </p>
                    <AddToCartButton size={pack.size} />
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16 lg:px-8 lg:py-24">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <Reveal>
            <SectionHeader
              eyebrow="Product Guide"
              title="Know what you are buying"
              description="Clear product information helps customers choose a format with confidence. Open each section for practical details."
            />
          </Reveal>
          <Reveal>
            <div className="divide-y divide-border border-y border-border">
              {productGuidance.map((item, index) => (
                <details
                  key={item.title}
                  className="group"
                  open={index === 0}
                >
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-5 font-serif text-xl text-forest marker:hidden">
                    {item.title}
                    <span
                      aria-hidden="true"
                      className="text-2xl font-light text-gold transition-transform duration-300 group-open:rotate-45"
                    >
                      +
                    </span>
                  </summary>
                  <p className="max-w-2xl pb-5 pr-10 text-sm leading-relaxed text-charcoal-muted">
                    {item.content}
                  </p>
                </details>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-20 lg:px-8 lg:pb-28">
        <Reveal>
          <SectionHeader
            eyebrow="Product Detail"
            title="Product details"
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
