import { Button } from "@/components/ui/Button";
import { CtaBanner } from "@/components/ui/CtaBanner";
import { Reveal } from "@/components/ui/Reveal";
import { PageHero, SectionHeader } from "@/components/ui/SectionHeader";
import { TestimonialCard } from "@/components/ui/TestimonialCard";
import { reviews, type Review } from "@/lib/content";
import { createMetadata } from "@/lib/seo";

function ReviewGrid({ reviews }: { reviews: Review[] }) {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {reviews.map((review, index) => (
        <Reveal key={review.id} delay={((index % 3) + 1) as 1 | 2 | 3}>
          <TestimonialCard {...review} />
        </Reveal>
      ))}
    </div>
  );
}

export const metadata = createMetadata({
  title: "Gilgit Naturals Reviews | Shilajit Customer & Wholesale Feedback",
  description:
    "Read customer feedback about Gilgit Naturals Shilajit, packaging, customer service and wholesale inquiries from customers across Pakistan.",
  path: "/reviews",
});

export default function ReviewsPage() {
  const retailReviews = reviews.filter((review) => review.category === "retail");
  const wholesaleReviews = reviews.filter(
    (review) => review.category === "wholesale"
  );

  return (
    <>
      <PageHero
        eyebrow="Customer Feedback"
        title="Gilgit Naturals Customer Reviews"
        description="Real feedback matters. Explore customer experiences with Gilgit Naturals products, packaging, service, and wholesale orders."
      >
        <p className="max-w-xl border-l-2 border-gold pl-4 text-sm leading-relaxed text-charcoal-muted">
          Customer feedback is independently submitted and published with permission.
        </p>
      </PageHero>

      <section className="mx-auto max-w-6xl px-6 py-16 lg:px-8 lg:py-24">
        <Reveal>
          <SectionHeader eyebrow="Retail" title="Retail Customer Reviews" className="mb-10" />
        </Reveal>
        <ReviewGrid reviews={retailReviews} />
      </section>

      <section className="bg-cream-dark/40">
        <div className="mx-auto max-w-6xl px-6 py-16 lg:px-8 lg:py-24">
          <Reveal>
            <SectionHeader eyebrow="Wholesale & Bulk" title="Wholesale & Bulk Buyer Feedback" className="mb-10" />
          </Reveal>
          <ReviewGrid reviews={wholesaleReviews} />
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16 lg:px-8 lg:py-24">
        <Reveal>
          <SectionHeader eyebrow="Product Experience" title="Product & Packaging Feedback" description="Customer feedback highlights clear product information, careful packaging, responsive communication, and delivery coordination." className="mb-10" />
        </Reveal>
        <div className="grid gap-4 md:grid-cols-4">
          {["Gilgit-Baltistan sourcing", "Professional packaging", "Responsive customer support", "Retail and wholesale supply"].map((point, index) => (
            <Reveal key={point} delay={((index % 4) + 1) as 1 | 2 | 3 | 4}>
              <div className="h-full border-t-2 border-gold bg-white p-6">
                <p className="font-serif text-xl text-forest">{point}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="border-t border-border bg-white">
        <div className="mx-auto max-w-3xl px-6 py-20 text-center lg:px-8">
          <Reveal>
            <p className="eyebrow mb-4">Your Experience</p>
            <h2 className="font-serif text-3xl text-forest md:text-4xl">Have You Purchased From Gilgit Naturals?</h2>
            <p className="mx-auto mt-5 max-w-md text-sm leading-relaxed text-charcoal-muted">
              We value genuine customer feedback. If you have purchased from us, we&apos;d love to hear about your experience.
            </p>
            <div className="mt-10">
              <Button href="/contact">Share Your Review</Button>
            </div>
          </Reveal>
        </div>
      </section>

      <CtaBanner
        title="Looking for Shilajit in bulk?"
        description="Speak with Gilgit Naturals about wholesale quantities, packaging requirements and regular supply."
        secondaryHref="/contact"
        secondaryLabel="Contact Us"
      />
    </>
  );
}
