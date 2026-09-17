import Image from "next/image";
import { ContactForm, inquiryFields } from "@/components/forms/Forms";
import { Button } from "@/components/ui/Button";
import { CtaBanner } from "@/components/ui/CtaBanner";
import { Reveal } from "@/components/ui/Reveal";
import { PageHero, SectionHeader } from "@/components/ui/SectionHeader";
import { IMAGES } from "@/lib/constants";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Wholesale Shilajit Supply",
  description:
    "Wholesale Shilajit supply for retailers, resellers, pharmacies, gyms and wellness businesses in Pakistan. Request pricing for bulk and private-label options.",
  path: "/wholesale",
  keywords: ["wholesale shilajit Pakistan", "bulk Shilajit Pakistan"],
});

const audiences = [
  "Retailers",
  "Resellers",
  "Supplement stores",
  "Pharmacies",
  "Gyms",
  "Wellness businesses",
  "Online sellers",
  "Private-label brands",
];

const tiers = [
  {
    title: "Small Wholesale",
    description:
      "Suitable for new retailers and specialty stores building initial inventory.",
  },
  {
    title: "Medium Wholesale",
    description:
      "For established businesses with regular restocking and growing demand.",
  },
  {
    title: "Bulk Supply",
    description:
      "Larger volume supply for distributors and high-throughput retail operations.",
  },
  {
    title: "Private Label",
    description:
      "Discuss packaging and branding options for businesses ready to scale.",
  },
];

const whyPoints = [
  {
    title: "Direct sourcing",
    text: "Connected to Gilgit mountain origin with clear sourcing philosophy.",
  },
  {
    title: "Business-focused supply",
    text: "Built for wholesale partners who need professionalism and consistency.",
  },
  {
    title: "Flexible quantities",
    text: "Options discussed based on your business stage and requirements.",
  },
  {
    title: "Professional communication",
    text: "Clear responses to inquiries — no pressure tactics or exaggeration.",
  },
  {
    title: "Quality-focused handling",
    text: "Careful purification, packaging and storage before dispatch.",
  },
  {
    title: "Pakistan-wide delivery",
    text: "Delivery details confirmed according to your city and order size.",
  },
];

export default function WholesalePage() {
  return (
    <>
      <PageHero
        eyebrow="Wholesale"
        title="Wholesale Shilajit Supply for Growing Businesses"
        description="Reliable bulk Shilajit for businesses that need authenticity, consistency and a professional supplier relationship."
      >
        <Button href="/request-quote">Request Wholesale Quote</Button>
      </PageHero>

      <section className="mx-auto max-w-6xl px-6 py-20 lg:px-8 lg:py-28">
        <Reveal>
          <SectionHeader
            eyebrow="Who We Serve"
            title="Built for Business Buyers"
            description="Gilgit Naturals supplies Shilajit to organizations that care about product quality and dependable wholesale relationships."
            className="mb-12"
          />
        </Reveal>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          {audiences.map((item, i) => (
            <Reveal key={item} delay={((i % 5) + 1) as 1 | 2 | 3 | 4 | 5}>
              <div className="border border-border bg-white px-5 py-6 text-center">
                <p className="text-sm font-medium text-forest">{item}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="bg-cream-dark/40">
        <div className="mx-auto max-w-6xl px-6 py-20 lg:px-8 lg:py-28">
          <Reveal>
            <SectionHeader
              eyebrow="Options"
              title="Wholesale Options"
              description="Pricing is provided on request based on quantity, packaging and business needs. No invented price lists."
              className="mb-12"
            />
          </Reveal>
          <div className="grid gap-6 md:grid-cols-2">
            {tiers.map((tier, i) => (
              <Reveal key={tier.title} delay={((i % 4) + 1) as 1 | 2 | 3 | 4}>
                <article className="flex h-full flex-col border border-border bg-white p-8 md:p-10">
                  <h3 className="font-serif text-2xl text-forest">{tier.title}</h3>
                  <p className="mt-4 flex-1 text-sm leading-relaxed text-charcoal-muted">
                    {tier.description}
                  </p>
                  <div className="mt-8">
                    <Button href="/request-quote" variant="gold">
                      Request Pricing
                    </Button>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20 lg:px-8 lg:py-28">
        <div className="grid gap-14 lg:grid-cols-2 lg:gap-20">
          <Reveal>
            <SectionHeader
              eyebrow="Why Gilgit Naturals"
              title="Why Buy Wholesale From Gilgit Naturals?"
            />
            <div className="mt-10 space-y-8">
              {whyPoints.map((p) => (
                <div key={p.title} className="border-l border-gold pl-5">
                  <h3 className="text-sm font-medium tracking-wide text-forest">
                    {p.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-charcoal-muted">
                    {p.text}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>
          <Reveal scale className="relative min-h-[420px] overflow-hidden">
            <Image
              src={IMAGES.mountains}
              alt="Mountain peaks representing authentic Gilgit Shilajit sourcing for wholesale"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </Reveal>
        </div>
      </section>

      <section className="border-t border-border bg-white">
        <div className="mx-auto max-w-3xl px-6 py-20 lg:px-8 lg:py-28">
          <Reveal>
            <SectionHeader
              eyebrow="Inquiry"
              title="Wholesale Inquiry"
              description="Share your business details and requirements. We will respond with guidance on supply options."
              align="center"
              className="mb-12"
            />
          </Reveal>
          <Reveal>
            <ContactForm
              fields={inquiryFields}
              submitLabel="Request Wholesale Quote"
              successTitle="Wholesale inquiry received"
              successMessage="Thank you for your wholesale inquiry. We will review your requirements and respond using the contact details provided."
            />
          </Reveal>
        </div>
      </section>

      <CtaBanner
        title="Ready to discuss supply?"
        description="Request a dedicated wholesale quote with quantity and packaging preferences."
        secondaryHref="/contact"
        secondaryLabel="Contact Us"
      />
    </>
  );
}
