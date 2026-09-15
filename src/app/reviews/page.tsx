import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { CtaBanner } from "@/components/ui/CtaBanner";
import { Reveal } from "@/components/ui/Reveal";
import { PageHero, SectionHeader } from "@/components/ui/SectionHeader";
import { TestimonialCard } from "@/components/ui/TestimonialCard";
import { reviews } from "@/lib/content";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Reviews",
  description:
    "Customer and wholesale reviews for Gilgit Naturals. Placeholder testimonials until verified reviews are published.",
  path: "/reviews",
});

export default function ReviewsPage() {
  const wholesale = reviews.filter((r) => r.category === "wholesale");
  const retail = reviews.filter((r) => r.category === "retail");
  const general = reviews.filter((r) => r.category === "general");

  return (
    <>
      <PageHero
        eyebrow="Testimonials"
        title="Customer Reviews"
        description="Feedback from wholesale partners and customers. Reviews marked as placeholders can be replaced with verified testimonials."
      />

      <section className="mx-auto max-w-6xl px-6 py-16 lg:px-8 lg:py-24">
        <Reveal>
          <SectionHeader
            eyebrow="Wholesale"
            title="Wholesale Customer Reviews"
            className="mb-10"
          />
        </Reveal>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {wholesale.map((r, i) => (
            <Reveal key={r.id} delay={((i % 3) + 1) as 1 | 2 | 3}>
              <TestimonialCard {...r} />
            </Reveal>
          ))}
        </div>
      </section>

      <section className="bg-cream-dark/40">
        <div className="mx-auto max-w-6xl px-6 py-16 lg:px-8 lg:py-24">
          <Reveal>
            <SectionHeader
              eyebrow="Retail"
              title="Retail Customer Reviews"
              className="mb-10"
            />
          </Reveal>
          <div className="grid gap-6 md:grid-cols-2">
            {retail.map((r, i) => (
              <Reveal key={r.id} delay={((i % 2) + 1) as 1 | 2}>
                <TestimonialCard {...r} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {general.length > 0 && (
        <section className="mx-auto max-w-6xl px-6 py-16 lg:px-8 lg:py-24">
          <Reveal>
            <SectionHeader
              eyebrow="General"
              title="More Feedback"
              className="mb-10"
            />
          </Reveal>
          <div className="grid gap-6 md:grid-cols-2">
            {general.map((r) => (
              <Reveal key={r.id}>
                <TestimonialCard {...r} />
              </Reveal>
            ))}
          </div>
        </section>
      )}

      <section className="border-t border-border bg-white">
        <div className="mx-auto max-w-3xl px-6 py-20 text-center lg:px-8">
          <Reveal>
            <p className="eyebrow mb-4">Share</p>
            <h2 className="font-serif text-3xl text-forest md:text-4xl">
              Want to Share Your Experience?
            </h2>
            <p className="mx-auto mt-5 max-w-md text-sm leading-relaxed text-charcoal-muted">
              We welcome honest feedback from wholesale partners and customers.
              Submit a review through our contact channel.
            </p>
            <div className="mt-10">
              <Button href="/contact">Submit a Review</Button>
            </div>
            <p className="mt-6 text-xs text-charcoal-muted/70">
              Or email us via the{" "}
              <Link href="/contact" className="underline underline-offset-2">
                Contact page
              </Link>
              .
            </p>
          </Reveal>
        </div>
      </section>

      <CtaBanner
        title="Join businesses sourcing with confidence"
        description="Request a wholesale quote when you are ready to discuss supply."
      />
    </>
  );
}
