import { PageHero } from "@/components/ui/SectionHeader";
import { SITE_NAME } from "@/lib/constants";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Privacy Policy",
  description: `Privacy Policy for ${SITE_NAME}. How we handle inquiry information and website data.`,
  path: "/privacy-policy",
});

export default function PrivacyPage() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Privacy Policy"
        description="A clear outline of how inquiry and website information may be handled. Replace with counsel-reviewed policy text before launch."
      />
      <section className="mx-auto max-w-3xl px-6 py-16 lg:px-8 lg:pb-28">
        <div className="space-y-10 text-sm leading-relaxed text-charcoal-muted">
          <div>
            <h2 className="font-serif text-2xl text-forest">Overview</h2>
            <p className="mt-4">
              {SITE_NAME} respects your privacy. This page describes, in general
              terms, how information submitted through contact and wholesale
              inquiry forms may be used. This is a placeholder policy for website
              launch preparation.
            </p>
          </div>
          <div>
            <h2 className="font-serif text-2xl text-forest">
              Information you provide
            </h2>
            <p className="mt-4">
              When you submit a form, you may share your name, business details,
              phone number, email address, city and message content. This
              information is used to respond to inquiries and discuss wholesale
              supply.
            </p>
          </div>
          <div>
            <h2 className="font-serif text-2xl text-forest">How we use it</h2>
            <p className="mt-4">
              Inquiry details are used for business communication related to your
              request. We do not sell personal information. Marketing use, if any,
              should only occur with appropriate consent under applicable law.
            </p>
          </div>
          <div>
            <h2 className="font-serif text-2xl text-forest">Contact</h2>
            <p className="mt-4">
              For privacy-related questions, use the Contact page. Update this
              section with a dedicated privacy email when available.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
