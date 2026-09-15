import { Button } from "@/components/ui/Button";
import { CtaBanner } from "@/components/ui/CtaBanner";
import { Reveal } from "@/components/ui/Reveal";
import { PageHero, SectionHeader } from "@/components/ui/SectionHeader";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Benefits & Traditional Uses",
  description:
    "Traditional uses of Shilajit and what modern research is investigating — presented carefully without exaggerated medical claims.",
  path: "/benefits",
});

const traditional = [
  "Traditionally used as a general tonic in some regional wellness practices",
  "Traditionally associated with vitality and restorative routines",
  "Historically referenced in classical wellness texts of South and Central Asia",
  "Traditionally used in purified form as part of cultural health practices",
];

const research = [
  "Research has investigated aspects of Shilajit’s composition and bioactive compounds",
  "Some studies have explored physical performance and fatigue-related outcomes",
  "Evidence remains limited for many popular claims and should not be overstated",
  "More rigorous research is needed before strong conclusions can be drawn",
];

export default function BenefitsPage() {
  return (
    <>
      <PageHero
        eyebrow="Information"
        title="Benefits & Traditional Uses"
        description="A trustworthy separation of traditional knowledge and modern research interest — without supplement-style exaggeration."
      />

      <section className="mx-auto max-w-6xl px-6 py-20 lg:px-8 lg:py-28">
        <div className="grid gap-12 lg:grid-cols-2">
          <Reveal>
            <SectionHeader
              eyebrow="Tradition"
              title="Traditional Uses"
              description="Cultural and historical context. These descriptions reflect traditional use — not proven medical outcomes."
              className="mb-10"
            />
            <ul className="space-y-5">
              {traditional.map((item) => (
                <li
                  key={item}
                  className="border-l border-gold pl-5 text-sm leading-relaxed text-charcoal-muted"
                >
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={2}>
            <SectionHeader
              eyebrow="Research"
              title="What Modern Research Is Investigating"
              description="Careful wording for a professional audience. We do not invent study results or clinical guarantees."
              className="mb-10"
            />
            <ul className="space-y-5">
              {research.map((item) => (
                <li
                  key={item}
                  className="border-l border-border pl-5 text-sm leading-relaxed text-charcoal-muted"
                >
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        <Reveal>
          <aside className="mt-16 border border-border bg-cream-dark/50 p-8 md:p-10">
            <p className="text-[11px] tracking-[0.14em] text-gold uppercase">
              Medical disclaimer
            </p>
            <p className="mt-4 max-w-3xl text-sm leading-relaxed text-charcoal-muted">
              This page is for educational purposes only and does not constitute
              medical advice, diagnosis or treatment. Shilajit is not presented
              as a cure for any disease. Consult a qualified healthcare
              professional before using any supplement, especially if you are
              pregnant, nursing, taking medication or have a medical condition.
            </p>
          </aside>
        </Reveal>

        <div className="mt-12 flex flex-wrap gap-4">
          <Button href="/quality">Explore Quality Standards</Button>
          <Button href="/knowledge" variant="secondary">
            Read Knowledge Articles
          </Button>
        </div>
      </section>

      <CtaBanner
        title="Looking for transparent product information?"
        description="Review our quality approach, then request a wholesale conversation when you are ready."
        primaryHref="/quality"
        primaryLabel="Learn About Quality"
        secondaryHref="/request-quote"
        secondaryLabel="Request Quote"
      />
    </>
  );
}
