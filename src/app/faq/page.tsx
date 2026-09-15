import { Button } from "@/components/ui/Button";
import { CtaBanner } from "@/components/ui/CtaBanner";
import { FaqAccordion } from "@/components/ui/FaqAccordion";
import { Reveal } from "@/components/ui/Reveal";
import { PageHero } from "@/components/ui/SectionHeader";
import { faqs } from "@/lib/content";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "FAQ",
  description:
    "Frequently asked questions about Gilgit Naturals Shilajit — origin, purification, storage, wholesale, private label, delivery and contact.",
  path: "/faq",
});

export default function FaqPage() {
  return (
    <>
      <PageHero
        eyebrow="Help"
        title="Frequently Asked Questions"
        description="Concise answers for business buyers and customers evaluating Gilgit Naturals."
      />

      <section className="mx-auto max-w-3xl px-6 py-16 lg:px-8 lg:py-24">
        <Reveal>
          <FaqAccordion items={faqs} />
        </Reveal>
        <Reveal>
          <div className="mt-14 text-center">
            <p className="text-sm text-charcoal-muted">
              Still have questions?
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-4">
              <Button href="/contact">Contact Us</Button>
              <Button href="/request-quote" variant="secondary">
                Request Wholesale Quote
              </Button>
            </div>
          </div>
        </Reveal>
      </section>

      <CtaBanner
        title="Ready for a wholesale conversation?"
        description="Share your quantity and business type for a tailored response."
      />
    </>
  );
}
