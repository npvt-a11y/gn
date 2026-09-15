import { PageHero } from "@/components/ui/SectionHeader";
import { SITE_NAME } from "@/lib/constants";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Terms & Conditions",
  description: `Terms and conditions for using the ${SITE_NAME} website and wholesale inquiry services.`,
  path: "/terms",
});

export default function TermsPage() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Terms & Conditions"
        description="General terms for website use and wholesale inquiries. Have this reviewed before commercial launch."
      />
      <section className="mx-auto max-w-3xl px-6 py-16 lg:px-8 lg:pb-28">
        <div className="space-y-10 text-sm leading-relaxed text-charcoal-muted">
          <div>
            <h2 className="font-serif text-2xl text-forest">Website use</h2>
            <p className="mt-4">
              Content on this website is provided for informational and business
              inquiry purposes. Product information is not medical advice.
            </p>
          </div>
          <div>
            <h2 className="font-serif text-2xl text-forest">
              Wholesale inquiries
            </h2>
            <p className="mt-4">
              Submitting an inquiry does not create a binding purchase agreement.
              Pricing, availability, quantities and delivery terms are confirmed
              separately during commercial discussion.
            </p>
          </div>
          <div>
            <h2 className="font-serif text-2xl text-forest">Accuracy</h2>
            <p className="mt-4">
              We aim to keep information accurate and current. Educational content
              may be updated over time. Traditional use descriptions are cultural
              context only.
            </p>
          </div>
          <div>
            <h2 className="font-serif text-2xl text-forest">Liability</h2>
            <p className="mt-4">
              To the extent permitted by applicable law, {SITE_NAME} is not liable
              for decisions made solely based on website educational content.
              Commercial terms govern supply relationships.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
