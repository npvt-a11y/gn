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
    "Discover how Gilgit Naturals approaches Shilajit quality, processing, laboratory testing, packaging, storage and batch consistency.",
  path: "/quality",
  keywords: [
    "premium Shilajit",
    "Shilajit wholesale supplier Pakistan",
    "Gilgit Shilajit",
    "Shilajit quality",
    "PCSIR Shilajit test",
  ],
});

const pillars = [
  {
    title: "Source",
    text: "Connected to the mountains of Gilgit with a clear sourcing philosophy and respect for natural origin.",
  },
  {
    title: "Selection",
    text: "Raw material is reviewed before processing so suitable material can proceed into purification.",
  },
  {
    title: "Purification",
    text: "Cleaning, filtration and controlled processing are used to reduce unwanted insoluble material.",
  },
  {
    title: "Handling",
    text: "Careful handling practices are followed throughout processing to help protect product integrity.",
  },
  {
    title: "Packaging",
    text: "Sealed packaging is used to support product protection during storage, transportation and wholesale supply.",
  },
  {
    title: "Storage",
    text: "Product is kept in suitable sealed conditions prior to dispatch to help maintain its characteristic texture.",
  },
  {
    title: "Batch consistency",
    text: "Attention is given to appearance, texture and handling consistency across wholesale batches.",
  },
  {
    title: "Transparency",
    text: "We aim to communicate what has actually been tested and documented without making unsupported certification claims.",
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

const testResults = [
  {
    parameter: "Fulvic Acid",
    result: "2.49%",
  },
  {
    parameter: "Lead",
    result: "Not Detected",
  },
  {
    parameter: "Cadmium",
    result: "Not Detected",
  },
  {
    parameter: "Copper",
    result: "6.75 mg/kg",
  },
  {
    parameter: "pH (10% Solution)",
    result: "5.87",
  },
  {
    parameter: "Colour",
    result: "Dark Brown",
  },
  {
    parameter: "Odour",
    result: "Typical of salajeet",
  },
  {
    parameter: "Water Solubility",
    result: ">150 g/100 ml",
  },
  {
    parameter: "Volatile Matter at 105°C",
    result: "11.93%",
  },
  {
    parameter: "Moisture",
    result: "19.19%",
  },
  {
    parameter: "Ash",
    result: "10.08%",
  },
];

export default function QualityPage() {
  return (
    <>
      <PageHero
        eyebrow="Quality"
        title="Our Approach to Quality"
        description="Quality should never be a question. We take a process-led approach to sourcing, purification, handling, laboratory testing and transparency."
      />

      <section className="mx-auto max-w-6xl px-6 py-20 lg:px-8 lg:py-28">
        <div className="grid items-center gap-14 lg:grid-cols-2">
          <Reveal>
            <SectionHeader
              eyebrow="Standards"
              title="Quality built into every stage"
              description="From mountain sourcing to final packaging, we focus on the parts of the process we can control and document. Where independent laboratory documentation is available, we present the reported results directly."
            />
          </Reveal>

          <Reveal scale className="relative aspect-[5/4] overflow-hidden">
            <Image
              src={IMAGES.product}
              alt="Gilgit Naturals Shilajit product"
              fill
              className="img-zoom object-cover"
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
              <Reveal
                key={step}
                delay={((i % 5) + 1) as 1 | 2 | 3 | 4 | 5}
              >
                <div className="flex gap-6">
                  <div className="flex flex-col items-center">
                    <div className="flex h-10 w-10 items-center justify-center border border-gold text-xs text-gold">
                      {String(i + 1).padStart(2, "0")}
                    </div>

                    {i < timeline.length - 1 && (
                      <div className="h-10 w-px bg-border" />
                    )}
                  </div>

                  <p className="pt-2 font-serif text-xl text-forest">
                    {step}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20 lg:px-8 lg:py-28">
        <Reveal>
          <SectionHeader
            eyebrow="Independent Testing"
            title="PCSIR Laboratory Test Report"
            description="A Salajeet sample from Gilgit Naturals was examined by the Pakistan Council of Scientific & Industrial Research, Laboratories Complex, Lahore."
            className="mb-12"
          />
        </Reveal>

        <Reveal>
          <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr]">
            <div className="overflow-hidden border border-border bg-white">
              <div className="border-b border-border bg-cream-dark/30 px-6 py-4">
                <p className="text-[11px] tracking-[0.14em] text-gold uppercase">
                  Original Laboratory Document
                </p>
              </div>

              <div className="bg-white p-4 sm:p-6">
                <div className="quality-report-document">
                  <Image
                    src="/images/pcsir-shilajit-report.jpg"
                    alt="Original PCSIR laboratory test report for Gilgit Naturals Salajeet"
                    width={1200}
                    height={1700}
                    className="h-auto w-full"
                    priority
                  />
                </div>
              </div>
            </div>

            <div>
              <div className="border border-border bg-white p-6 sm:p-8">
                <p className="text-[11px] tracking-[0.14em] text-gold uppercase">
                  Report Details
                </p>

                <div className="mt-6 divide-y divide-border border-y border-border">
                  <div className="flex justify-between gap-6 py-4">
                    <span className="text-sm text-charcoal-muted">
                      Laboratory
                    </span>
                    <span className="text-right text-sm text-forest">
                      PCSIR Laboratories Complex, Lahore
                    </span>
                  </div>

                  <div className="flex justify-between gap-6 py-4">
                    <span className="text-sm text-charcoal-muted">
                      Report No.
                    </span>
                    <span className="text-right text-sm text-forest">
                      FBRC/SF/ANAL./REP./497
                    </span>
                  </div>

                  <div className="flex justify-between gap-6 py-4">
                    <span className="text-sm text-charcoal-muted">
                      Client
                    </span>
                    <span className="text-right text-sm text-forest">
                      Gilgit Naturals SMC Private Limited
                    </span>
                  </div>

                  <div className="flex justify-between gap-6 py-4">
                    <span className="text-sm text-charcoal-muted">
                      Sample
                    </span>
                    <span className="text-right text-sm text-forest">
                      Salajeet
                    </span>
                  </div>

                  <div className="flex justify-between gap-6 py-4">
                    <span className="text-sm text-charcoal-muted">
                      Report Date
                    </span>
                    <span className="text-right text-sm text-forest">
                      July 04, 2024
                    </span>
                  </div>

                  <div className="flex justify-between gap-6 py-4">
                    <span className="text-sm text-charcoal-muted">
                      Testing Date
                    </span>
                    <span className="text-right text-sm text-forest">
                      11–24 June 2024
                    </span>
                  </div>

                  <div className="flex justify-between gap-6 py-4">
                    <span className="text-sm text-charcoal-muted">
                      Non-compliance
                    </span>
                    <span className="text-right text-sm font-medium text-forest">
                      Nil
                    </span>
                  </div>
                </div>
              </div>

              <div className="mt-6 border border-border bg-white p-6 sm:p-8">
                <p className="text-[11px] tracking-[0.14em] text-gold uppercase">
                  Selected Results
                </p>

                <div className="mt-5 grid gap-px overflow-hidden border border-border bg-border sm:grid-cols-2">
                  {testResults.map((item) => (
                    <div
                      key={item.parameter}
                      className="bg-white p-4"
                    >
                      <p className="text-xs text-charcoal-muted">
                        {item.parameter}
                      </p>

                      <p className="mt-1 font-serif text-lg text-forest">
                        {item.result}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6 bg-cream-dark/40 p-6">
                <p className="text-[11px] tracking-[0.14em] text-gold uppercase">
                  Transparency
                </p>

                <p className="mt-3 text-sm leading-relaxed text-charcoal-muted">
                  This page presents the reported findings from the PCSIR
                  laboratory document. The report covers the parameters
                  listed in the original document and should not be
                  interpreted as a blanket certification of every aspect
                  of product safety or authenticity.
                </p>
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-20 lg:px-8 lg:pb-28">
        <Reveal>
          <SectionHeader
            eyebrow="Eight Pillars"
            title="How we think about purity"
            className="mb-14"
          />
        </Reveal>

        <div className="grid gap-8 md:grid-cols-2">
          {pillars.map((pillar, i) => (
            <Reveal
              key={pillar.title}
              delay={((i % 4) + 1) as 1 | 2 | 3 | 4}
            >
              <article className="border-t border-border pt-6 transition-transform duration-500 hover:-translate-y-1">
                <h2 className="font-serif text-2xl text-forest">
                  {pillar.title}
                </h2>

                <p className="mt-3 text-sm leading-relaxed text-charcoal-muted">
                  {pillar.text}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-20 lg:px-8 lg:pb-28">
        <Reveal>
          <div className="border border-border bg-white p-8 sm:p-10">
            <div className="max-w-2xl">
              <p className="text-[11px] tracking-[0.14em] text-gold uppercase">
                Wholesale Transparency
              </p>

              <h2 className="mt-3 font-serif text-3xl text-forest">
                Documentation for serious buyers
              </h2>

              <p className="mt-4 text-sm leading-relaxed text-charcoal-muted">
                We believe wholesale partners should be able to ask
                questions about sourcing, processing, testing, packaging
                and supply. Where documentation is available, we aim to
                provide clear information rather than relying on
                unsupported claims.
              </p>
            </div>

            <div className="mt-8">
              <Button href="/processing">
                How Shilajit Is Processed
              </Button>
            </div>
          </div>
        </Reveal>
      </section>

      <CtaBanner
        title="Quality you can discuss openly"
        description="Ask about sourcing, process, laboratory documentation and wholesale supply."
      />
    </>
  );
}
