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
            <img
  src="/images/pcsir-shilajit-report.jpg"
  alt="PCSIR laboratory test report for Gilgit Naturals Salajeet"
  className="h-auto w-full"
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
         <div className="border border-border bg-white p-8">
  <div className="mb-6">
    <p className="text-[11px] tracking-[0.14em] text-gold uppercase">
      Independent Laboratory Analysis
    </p>

    <h3 className="mt-3 font-serif text-2xl text-forest">
      PCSIR Test Report
    </h3>

    <p className="mt-3 text-sm leading-relaxed text-charcoal-muted">
      Our Salajeet sample was tested by the Pakistan Council of Scientific
      & Industrial Research (PCSIR), Laboratories Complex, Lahore.
    </p>
  </div>

  {/* Original Laboratory Report */}
  <div className="overflow-hidden border border-border bg-cream-dark/20">
    <img
      src="/images/pcsir-shilajit-report.jpg"
      alt="PCSIR laboratory test report for Gilgit Naturals Salajeet"
      className="h-auto w-full"
    />
  </div>

  {/* Report Information */}
  <div className="mt-6 grid gap-4 sm:grid-cols-2">
    <div className="border border-border p-4">
      <p className="text-[10px] tracking-[0.12em] text-charcoal-muted uppercase">
        Laboratory
      </p>
      <p className="mt-1 text-sm text-forest">
        PCSIR Laboratories Complex, Lahore
      </p>
    </div>

    <div className="border border-border p-4">
      <p className="text-[10px] tracking-[0.12em] text-charcoal-muted uppercase">
        Report Number
      </p>
      <p className="mt-1 text-sm text-forest">
        FBRC/SF/ANAL./REP./497
      </p>
    </div>

    <div className="border border-border p-4">
      <p className="text-[10px] tracking-[0.12em] text-charcoal-muted uppercase">
        Sample
      </p>
      <p className="mt-1 text-sm text-forest">
        Salajeet
      </p>
    </div>

    <div className="border border-border p-4">
      <p className="text-[10px] tracking-[0.12em] text-charcoal-muted uppercase">
        Report Date
      </p>
      <p className="mt-1 text-sm text-forest">
        July 04, 2024
      </p>
    </div>
  </div>

  {/* Key Results */}
  <div className="mt-8">
    <p className="text-[11px] tracking-[0.14em] text-gold uppercase">
      Reported Results
    </p>

    <div className="mt-4 divide-y divide-border border-y border-border">
      <div className="flex items-center justify-between gap-4 py-4">
        <span className="text-sm text-charcoal-muted">
          Fulvic Acid
        </span>
        <span className="font-medium text-forest">
          2.49%
        </span>
      </div>

      <div className="flex items-center justify-between gap-4 py-4">
        <span className="text-sm text-charcoal-muted">
          Lead
        </span>
        <span className="font-medium text-forest">
          Not Detected
        </span>
      </div>

      <div className="flex items-center justify-between gap-4 py-4">
        <span className="text-sm text-charcoal-muted">
          Cadmium
        </span>
        <span className="font-medium text-forest">
          Not Detected
        </span>
      </div>

      <div className="flex items-center justify-between gap-4 py-4">
        <span className="text-sm text-charcoal-muted">
          Copper
        </span>
        <span className="font-medium text-forest">
          6.75 mg/kg
        </span>
      </div>

      <div className="flex items-center justify-between gap-4 py-4">
        <span className="text-sm text-charcoal-muted">
          pH (10% Solution)
        </span>
        <span className="font-medium text-forest">
          5.87
        </span>
      </div>

      <div className="flex items-center justify-between gap-4 py-4">
        <span className="text-sm text-charcoal-muted">
          Moisture
        </span>
        <span className="font-medium text-forest">
          19.19%
        </span>
      </div>

      <div className="flex items-center justify-between gap-4 py-4">
        <span className="text-sm text-charcoal-muted">
          Ash
        </span>
        <span className="font-medium text-forest">
          10.08%
        </span>
      </div>

      <div className="flex items-center justify-between gap-4 py-4">
        <span className="text-sm text-charcoal-muted">
          Water Solubility
        </span>
        <span className="font-medium text-forest">
          &gt;150 g/100 ml
        </span>
      </div>
    </div>
  </div>

  {/* Testing statement */}
  <div className="mt-6 bg-cream-dark/40 p-5">
    <p className="text-[11px] tracking-[0.14em] text-gold uppercase">
      Testing Statement
    </p>

    <p className="mt-3 text-sm leading-relaxed text-charcoal-muted">
      The submitted Salajeet sample was examined for the parameters stated
      in the PCSIR laboratory report. The report records lead and cadmium
      as not detected and reports a fulvic acid content of 2.49%.
    </p>

    <p className="mt-3 text-xs leading-relaxed text-charcoal-muted">
      Statement of Non-compliance: Nil. Testing was conducted from
      11 June 2024 to 24 June 2024 using the methods/specifications
      stated in the laboratory report.
    </p>
  </div>

  {/* Transparency note */}
  <div className="mt-6 flex flex-col gap-3 border-t border-border pt-5 sm:flex-row sm:items-center sm:justify-between">
    <div>
      <p className="text-xs text-charcoal-muted">
        Independent laboratory documentation
      </p>
      <p className="mt-1 text-sm text-forest">
        PCSIR Laboratories Complex, Lahore
      </p>
    </div>

    <span className="inline-flex w-fit border border-gold/40 px-4 py-2 text-[10px] tracking-[0.12em] text-gold uppercase">
      Report No. 497
    </span>
  </div>
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
