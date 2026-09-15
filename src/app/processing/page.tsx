import { Button } from "@/components/ui/Button";
import { CtaBanner } from "@/components/ui/CtaBanner";
import { Reveal } from "@/components/ui/Reveal";
import { PageHero, SectionHeader } from "@/components/ui/SectionHeader";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "How Shilajit Is Processed",
  description:
    "From raw material to refined Shilajit — collection, selection, cleaning, purification, filtration, concentration, quality review and packaging.",
  path: "/processing",
});

const steps = [
  {
    title: "Collection",
    text: "Raw material is gathered from mountain rock environments during suitable seasons.",
  },
  {
    title: "Selection",
    text: "Material is reviewed so unsuitable portions are set aside before processing.",
  },
  {
    title: "Cleaning",
    text: "Surface contaminants and obvious debris are addressed as a first hygiene step.",
  },
  {
    title: "Purification",
    text: "The material is carefully processed to separate usable resin from unwanted solids.",
  },
  {
    title: "Filtration",
    text: "Insoluble particles are filtered out to improve cleanliness and consistency.",
  },
  {
    title: "Concentration",
    text: "Excess moisture is reduced to achieve a dense, stable resin texture.",
  },
  {
    title: "Quality Review",
    text: "Appearance, texture and handling characteristics are reviewed before release.",
  },
  {
    title: "Packaging",
    text: "Product is sealed for storage and wholesale dispatch with care for hygiene.",
  },
];

export default function ProcessingPage() {
  return (
    <>
      <PageHero
        eyebrow="Process"
        title="From Raw Material to Refined Shilajit"
        description="A high-level view of processing — clear enough for business buyers, careful enough to avoid overselling."
      />

      <section className="mx-auto max-w-3xl px-6 py-20 lg:px-8 lg:py-28">
        <Reveal>
          <SectionHeader
            eyebrow="Timeline"
            title="Processing stages"
            description="An elegant vertical timeline of how raw mountain material becomes purified wholesale resin."
            className="mb-14"
          />
        </Reveal>

        <div className="relative">
          <div className="absolute top-0 bottom-0 left-[19px] w-px bg-border md:left-[23px]" />
          <ol className="space-y-0">
            {steps.map((step, i) => (
              <Reveal key={step.title} delay={((i % 5) + 1) as 1 | 2 | 3 | 4 | 5}>
                <li className="relative flex gap-6 pb-12 last:pb-0 md:gap-8">
                  <div className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center border border-gold bg-cream text-[11px] tracking-wider text-gold md:h-12 md:w-12">
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <div className="pt-1.5 md:pt-2">
                    <h2 className="font-serif text-2xl text-forest">
                      {step.title}
                    </h2>
                    <p className="mt-3 max-w-lg text-sm leading-relaxed text-charcoal-muted">
                      {step.text}
                    </p>
                  </div>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>

        <Reveal>
          <div className="mt-16 flex flex-wrap gap-4">
            <Button href="/quality">Quality Standards</Button>
            <Button href="/wholesale" variant="secondary">
              Wholesale Supply
            </Button>
          </div>
        </Reveal>
      </section>

      <CtaBanner
        title="Process clarity builds trust"
        description="When you are ready to discuss volumes and packaging, request a wholesale quote."
      />
    </>
  );
}
