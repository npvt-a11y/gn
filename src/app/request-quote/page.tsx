import { ContactForm, wholesaleFields } from "@/components/forms/Forms";
import { Reveal } from "@/components/ui/Reveal";
import { PageHero, SectionHeader } from "@/components/ui/SectionHeader";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Request a Wholesale Quote",
  description:
    "Request wholesale Shilajit pricing from Gilgit Naturals. Tell us about your business, quantity and packaging needs.",
  path: "/request-quote",
  keywords: ["Shilajit wholesale supplier Pakistan", "bulk Shilajit Pakistan"],
});

export default function RequestQuotePage() {
  return (
    <>
      <PageHero
        eyebrow="Wholesale"
        title="Request a Wholesale Quote"
        description="Tell us about your business and requirements. We will review your inquiry and respond with supply guidance."
      />

      <section className="mx-auto max-w-3xl px-6 py-16 lg:px-8 lg:py-24">
        <Reveal>
          <SectionHeader
            eyebrow="Inquiry Form"
            title="Business details"
            description="Provide as much detail as you can — quantity estimates and packaging preferences help us respond meaningfully."
            className="mb-12"
          />
        </Reveal>
        <Reveal>
          <div className="border border-border bg-white p-6 md:p-10">
            <ContactForm
              fields={wholesaleFields}
              submitLabel="Send Wholesale Inquiry"
              successTitle="Your wholesale inquiry has been received"
              successMessage="Thank you. A member of the Gilgit Naturals team will review your requirements and follow up using the contact details you provided."
            />
          </div>
        </Reveal>
        <p className="mt-8 text-center text-xs leading-relaxed text-charcoal-muted">
          Pricing is provided on request. We do not publish invented price lists.
          Minimum quantities depend on packaging and availability.
        </p>
      </section>
    </>
  );
}
