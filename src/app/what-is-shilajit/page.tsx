import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { CtaBanner } from "@/components/ui/CtaBanner";
import { Reveal } from "@/components/ui/Reveal";
import { PageHero, SectionHeader } from "@/components/ui/SectionHeader";
import { IMAGES } from "@/lib/constants";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "What Is Shilajit?",
  description:
    "Learn what Shilajit is, where it comes from, how it forms in mountain regions, traditional history, and how to evaluate quality — an educational guide from Gilgit Naturals.",
  path: "/what-is-shilajit",
  keywords: ["what is shilajit", "Gilgit Shilajit", "Shilajit supplier"],
});

export default function WhatIsShilajitPage() {
  return (
    <>
      <PageHero
        eyebrow="Education"
        title="What Is Shilajit?"
        description="An accessible, SEO-friendly guide to understanding Shilajit — without unsupported scientific claims."
      />

      <section className="mx-auto max-w-6xl px-6 py-20 lg:px-8 lg:py-28">
        <div className="grid items-start gap-14 lg:grid-cols-2 lg:gap-20">
          <Reveal>
            <SectionHeader
              eyebrow="Definition"
              title="A mountain-origin mineral resin"
              description="Shilajit is a naturally occurring, mineral-rich substance found in high mountain regions. Over long periods, organic plant material decomposes within rocky environments and forms a dense exudate that appears on rock faces in warmer seasons."
            />
          </Reveal>
          <Reveal scale className="relative aspect-[5/4] overflow-hidden">
            <Image
              src={IMAGES.mountainsAlt}
              alt="Alpine mountain ridges illustrating high-altitude environments where Shilajit forms"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </Reveal>
        </div>
      </section>

      <section className="bg-white border-y border-border">
        <div className="mx-auto max-w-6xl px-6 py-20 lg:px-8 lg:py-28">
          <Reveal>
            <SectionHeader
              eyebrow="Formation"
              title="How Shilajit naturally forms"
              className="mb-12"
            />
          </Reveal>
          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                step: "01",
                title: "Organic matter",
                text: "Plant material becomes trapped within mountain rock systems over extended timescales.",
              },
              {
                step: "02",
                title: "Transformation",
                text: "Decomposition, microbial activity and temperature cycles contribute to gradual transformation.",
              },
              {
                step: "03",
                title: "Exudate",
                text: "A dark, sticky substance may appear on rock faces — raw material for careful collection and purification.",
              },
            ].map((item, i) => (
              <Reveal key={item.step} delay={(i + 1) as 1 | 2 | 3}>
                <div className="border border-border p-8">
                  <p className="text-xs tracking-[0.16em] text-gold">{item.step}</p>
                  <h3 className="font-serif mt-4 text-2xl text-forest">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-charcoal-muted">
                    {item.text}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-6 py-20 lg:px-8 lg:py-28">
        <Reveal>
          <h2 className="font-serif text-3xl text-forest md:text-4xl">
            Why mountainous regions?
          </h2>
          <div className="divider-gold mt-6" />
          <div className="prose-brand mt-8 space-y-5 text-base">
            <p>
              High-altitude environments provide the geography associated with
              Shilajit: rocky terrain, elevation, seasonal temperature variation
              and remote collection areas. Gilgit-Baltistan in northern Pakistan
              is one such region traditionally linked with Shilajit.
            </p>
            <p>
              Composition is often described at a high level as a complex mixture
              of organic compounds and minerals. Exact composition can vary by
              source and processing. We avoid unsupported laboratory claims.
            </p>
          </div>
        </Reveal>

        <Reveal>
          <h2 className="font-serif mt-16 text-3xl text-forest md:text-4xl">
            Raw vs purified Shilajit
          </h2>
          <div className="divider-gold mt-6" />
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            <div className="border border-border bg-cream-dark/40 p-7">
              <h3 className="text-sm font-medium tracking-wide text-forest">
                Raw
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-charcoal-muted">
                Material as collected — may contain grit, debris and impurities.
                Not typically suitable for direct use without processing.
              </p>
            </div>
            <div className="border border-border bg-white p-7">
              <h3 className="text-sm font-medium tracking-wide text-forest">
                Purified
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-charcoal-muted">
                Cleaned, filtered and concentrated into a more consistent resin
                — the form commonly supplied to wholesale customers.
              </p>
            </div>
          </div>
        </Reveal>

        <Reveal>
          <h2 className="font-serif mt-16 text-3xl text-forest md:text-4xl">
            How consumers should evaluate quality
          </h2>
          <div className="divider-gold mt-6" />
          <ul className="mt-8 space-y-4 text-sm leading-relaxed text-charcoal-muted">
            <li>• Ask about origin and purification approach</li>
            <li>• Observe appearance, texture and packaging professionalism</li>
            <li>• Prefer transparent suppliers over exaggerated claims</li>
            <li>• Request storage and handling guidance</li>
            <li>• Treat medical miracle claims as a warning sign</li>
          </ul>
        </Reveal>

        <Reveal>
          <div className="mt-16 border border-gold/30 bg-white p-8 md:p-10">
            <p className="eyebrow mb-4">In simple terms</p>
            <p className="font-serif text-2xl leading-snug text-forest md:text-3xl">
              Shilajit is a dark mountain resin formed over time in rocky
              highlands. It is collected, purified and supplied — and should be
              judged by origin clarity, processing care and honest communication.
            </p>
          </div>
        </Reveal>

        <div className="mt-12 flex flex-wrap gap-4">
          <Button href="/benefits">Benefits & Traditional Uses</Button>
          <Button href="/processing" variant="secondary">
            How It Is Processed
          </Button>
        </div>
      </section>

      <CtaBanner
        title="Sourcing for your business?"
        description="Explore wholesale supply options rooted in Gilgit origin and quality-focused handling."
        primaryHref="/wholesale"
        primaryLabel="Explore Wholesale Supply"
      />
    </>
  );
}
