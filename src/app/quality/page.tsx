import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { CtaBanner } from "@/components/ui/CtaBanner";
import { Reveal } from "@/components/ui/Reveal";
import { PageHero, SectionHeader } from "@/components/ui/SectionHeader";
import { IMAGES } from "@/lib/constants";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Quality & Purity",
  description:
    "Our approach to Shilajit quality — sourcing, selection, purification, handling, packaging, storage, batch consistency and transparency.",
  path: "/quality",
  keywords: ["premium Shilajit", "Shilajit wholesale supplier Pakistan"],
});

const pillars = [
  {
    title: "Source",
    text: "Connected to the mountains of Gilgit with a clear sourcing philosophy and respect for origin.",
  },
  {
    title: "Selection",
    text: "Raw material is reviewed so only suitable material proceeds into purification.",
  },
  {
    title: "Purification",
    text: "Cleaning, filtration and concentration to reduce insoluble impurities.",
  },
  {
    title: "Handling",
    text: "Careful handling practices to protect product integrity during processing.",
  },
  {
    title: "Packaging",
    text: "Sealed packaging appropriate for wholesale storage and retail presentation.",
  },
  {
    title: "Storage",
    text: "Cool, dry, sealed conditions prior to dispatch to help maintain texture.",
  },
  {
    title: "Batch consistency",
    text: "Attention to appearance and texture consistency across wholesale batches.",
  },
  {
    title: "Transparency",
    text: "Clear communication about process and limitations — without invented certifications.",
  },
];

const timeline = [
  "Mountain Source",
  "Selection",
  "Purification",
  "Quality Review",
  "Packaging",
  "Wholesale Dispatch",
];

export default function QualityPage() {
  return (
    <>
      <PageHero
        eyebrow="Quality"
        title="Our Approach to Quality"
        description="Quality should never be a question. A process-led view of how Gilgit Naturals approaches purity and consistency."
      />

      <section className="mx-auto max-w-6xl px-6 py-20 lg:px-8 lg:py-28">
        <div className="grid items-center gap-14 lg:grid-cols-2">
          <Reveal>
            <SectionHeader
              eyebrow="Standards"
              title="Quality built into every stage"
              description="We focus on controllable process quality — not unverifiable marketing claims. Laboratory certificates and regulatory approvals can be added here when independently available."
            />
          </Reveal>
          <Reveal scale className="relative aspect-[5/4] overflow-hidden">
            <Image
              src={IMAGES.product}
              alt="Carefully presented natural product representing quality-focused Shilajit handling"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </Reveal>
        </div>
      </section>

      <section className="bg-cream-dark/40">
        <div className="mx-auto max-w-6xl px-6 py-20 lg:px-8 lg:py-28">
          <Reveal>
            <SectionHeader
              eyebrow="Process"
              title="Quality timeline"
              align="center"
              className="mb-14"
            />
          </Reveal>
          <div className="mx-auto flex max-w-xl flex-col">
            {timeline.map((step, i) => (
              <Reveal key={step} delay={((i % 5) + 1) as 1 | 2 | 3 | 4 | 5}>
                <div className="flex gap-6">
                  <div className="flex flex-col items-center">
                    <div className="flex h-10 w-10 items-center justify-center border border-gold text-xs text-gold">
                      {String(i + 1).padStart(2, "0")}
                    </div>
                    {i < timeline.length - 1 && (
                      <div className="h-10 w-px bg-border" />
                    )}
                  </div>
                  <p className="pt-2 font-serif text-xl text-forest">{step}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20 lg:px-8 lg:py-28">
        <Reveal>
          <SectionHeader
            eyebrow="Eight Pillars"
            title="How we think about purity"
            className="mb-14"
          />
        </Reveal>
        <div className="grid gap-8 md:grid-cols-2">
          {pillars.map((p, i) => (
            <Reveal key={p.title} delay={((i % 4) + 1) as 1 | 2 | 3 | 4}>
              <article className="border-t border-border pt-6">
                <h2 className="font-serif text-2xl text-forest">{p.title}</h2>
                <p className="mt-3 text-sm leading-relaxed text-charcoal-muted">
                  {p.text}
                </p>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <div className="mt-16 grid gap-6 md:grid-cols-2">
            <div className="border border-dashed border-border bg-white p-8">
              <p className="text-[11px] tracking-[0.14em] text-gold uppercase">
                Placeholder
              </p>
              <h3 className="font-serif mt-3 text-xl text-forest">
                Certificates & test reports
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-charcoal-muted">
                Upload space for future laboratory reports or certificates when
                independently obtained. We do not invent certifications.
              </p>
            </div>
            <div className="border border-dashed border-border bg-white p-8">
              <p className="text-[11px] tracking-[0.14em] text-gold uppercase">
                Placeholder
              </p>
              <h3 className="font-serif mt-3 text-xl text-forest">
                Batch documentation
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-charcoal-muted">
                Future location for batch notes or quality review summaries shared
                with wholesale partners upon request.
              </p>
            </div>
          </div>
        </Reveal>

        <div className="mt-12">
          <Button href="/processing">How Shilajit Is Processed</Button>
        </div>
      </section>

      <CtaBanner
        title="Quality you can discuss openly"
        description="Ask about process, packaging and supply — then request a wholesale quote."
      />
    </>
  );
}
