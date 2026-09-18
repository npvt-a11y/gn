import Link from "next/link";
import { PageHero } from "@/components/ui/SectionHeader";
import { CONTACT, SITE_NAME, SITE_URL } from "@/lib/constants";
import { createMetadata } from "@/lib/seo";

type TermsSection = {
  title: string;
  paragraphs?: string[];
  bullets?: string[];
};

const sections: TermsSection[] = [
  {
    title: "1. About Gilgit Naturals",
    paragraphs: [
      "Gilgit Naturals is a business offering Shilajit and selected natural products sourced from Gilgit-Baltistan, Pakistan. These Terms & Conditions apply to visitors, customers, wholesale buyers, and other users of the Gilgit Naturals website.",
    ],
  },
  {
    title: "2. Use of Our Website",
    paragraphs: ["You agree to use this website only for lawful purposes. You must not:"],
    bullets: [
      "Use the website for fraudulent or unlawful activities.",
      "Attempt to gain unauthorized access to the website or our systems.",
      "Interfere with the security or operation of the website.",
      "Copy, reproduce, or commercially exploit website content without permission.",
      "Submit false, misleading, or fraudulent information.",
      "Use the website in a way that could damage Gilgit Naturals or its customers.",
    ],
  },
  {
    title: "3. Eligibility",
    paragraphs: [
      "By purchasing our products, you confirm that you are at least 18 years of age, or that you have the consent of a parent or legal guardian to make the purchase.",
    ],
  },
  {
    title: "4. Product Information",
    paragraphs: [
      "We make reasonable efforts to keep product descriptions, photographs, specifications, prices, and other information accurate and current. Natural products may vary between batches due to their natural characteristics and sourcing conditions.",
    ],
    bullets: [
      "Product appearance may vary slightly from photographs.",
      "Natural products may vary in color, texture, aroma, or consistency.",
      "Product availability may change without notice.",
      "We reserve the right to correct errors or update product information.",
    ],
  },
  {
    title: "5. Shilajit and Health Information",
    paragraphs: [
      "Information on this website about Shilajit and other products is provided for general educational and informational purposes. It is not medical advice, diagnosis, or treatment. Gilgit Naturals does not claim that its products diagnose, treat, cure, or prevent any disease or medical condition.",
      "Consult a qualified healthcare professional before using any supplement or natural product, particularly if you are pregnant, breastfeeding, taking medication, have an existing medical condition, or have concerns about possible interactions. Use products according to the applicable product instructions.",
    ],
  },
  {
    title: "6. Orders and Acceptance",
    paragraphs: [
      "Submitting an order or inquiry through the website does not necessarily constitute final acceptance. We may accept or decline an order, request additional information, confirm availability, correct pricing or product information, or cancel an order where necessary.",
      "An order is considered confirmed only after Gilgit Naturals communicates confirmation to the customer.",
    ],
  },
  {
    title: "7. Prices and Payment",
    paragraphs: [
      "Prices displayed on the website are subject to change without prior notice. Unless otherwise stated, prices may not include delivery, shipping, customs duties, taxes, or other applicable charges.",
      "Wholesale and bulk pricing may vary depending on the product, quantity, packaging, private-label requirements, destination, and shipping arrangements. Wholesale buyers may contact Gilgit Naturals for a quotation.",
    ],
  },
  {
    title: "8. Wholesale Orders",
    paragraphs: [
      "Wholesale and bulk orders may be subject to minimum order quantities, customized pricing, packaging requirements, and separate payment or delivery arrangements.",
      "Wholesale quotations are valid for the period specified in the quotation. If no validity period is specified, Gilgit Naturals may modify the quotation based on changes in product availability, costs, or other circumstances. Customers are responsible for providing accurate business, shipping, product, and contact information.",
    ],
  },
  {
    title: "9. Shipping and Delivery",
    paragraphs: [
      "We may use third-party courier or logistics providers. Delivery times are estimates and may be affected by courier delays, weather, public holidays, address issues, customs procedures, security restrictions, or other circumstances beyond our reasonable control.",
      "Gilgit Naturals is not responsible for delays caused by third-party delivery providers or circumstances beyond our reasonable control. Customers are responsible for providing a complete and accurate delivery address and contact information.",
    ],
  },
  {
    title: "10. International Orders",
    paragraphs: [
      "International customers are responsible for ensuring that ordered products are permitted for import into their country or region. Customers may be responsible for customs duties, import taxes, clearance charges, documentation requirements, and other fees imposed by the destination country.",
      "Gilgit Naturals does not guarantee that a product will be permitted for import into every jurisdiction.",
    ],
  },
  {
    title: "11. Returns and Refunds",
    paragraphs: [
      "Except where a mandatory right of withdrawal applies, returns are accepted within 5 days of delivery for eligible, unopened, unused products in their original packaging.",
      "For products that arrive damaged or with an opened seal, contact Gilgit Naturals as soon as possible and provide appropriate proof, such as photographs or videos. Products that have been used, altered, contaminated, or damaged after delivery may not be eligible for return or refund, except where delivered damaged, defective, or incorrect. Unless otherwise stated, delivery charges may not be refundable.",
    ],
  },
  {
    title: "12. Damaged or Incorrect Orders",
    paragraphs: [
      "If you receive a damaged, defective, or incorrect product, contact Gilgit Naturals promptly after delivery. We may request order information, photographs or videos of the package and product, shipping information, or other information reasonably necessary to investigate the issue.",
      "After reviewing the claim, we may provide an appropriate replacement, refund, or other resolution where applicable.",
    ],
  },
  {
    title: "13. Intellectual Property",
    paragraphs: [
      "All content on the Gilgit Naturals website, including logos, brand names, product photographs, graphics, text, website design, videos, product descriptions, and page layouts, is owned by or licensed to Gilgit Naturals unless otherwise stated.",
      "You may not reproduce, modify, distribute, publish, sell, or commercially exploit our content without prior written permission.",
    ],
  },
  {
    title: "14. User-Submitted Information",
    paragraphs: [
      "If you submit reviews, testimonials, photographs, feedback, comments, or other material, you confirm that you have the right to submit it and that it does not violate another person’s rights or applicable law.",
      "Where legally permitted, you grant Gilgit Naturals permission to use submitted content for legitimate business, marketing, or website purposes. We reserve the right to remove content that violates these Terms & Conditions or applicable law.",
    ],
  },
  {
    title: "15. Privacy",
    paragraphs: [
      "Our collection and use of personal information is governed by our Privacy Policy, which forms part of these Terms & Conditions.",
    ],
  },
  {
    title: "16. Website Availability",
    paragraphs: [
      "We aim to keep the website available and functioning properly, but we do not guarantee uninterrupted or error-free access. The website may occasionally be unavailable because of maintenance, technical problems, hosting issues, security incidents, updates, or circumstances outside our control.",
    ],
  },
  {
    title: "17. Third-Party Services and Links",
    paragraphs: [
      "The website may contain links to third-party websites, payment providers, courier services, social media platforms, or other external services. Gilgit Naturals does not control these services and is not responsible for their content, availability, security, or policies. Your use of third-party services may be subject to their own terms and policies.",
    ],
  },
  {
    title: "18. Limitation of Liability",
    paragraphs: [
      "To the maximum extent permitted by applicable law, Gilgit Naturals’ total liability arising out of or relating to an order will not exceed the amount paid by the customer for the relevant product. Implied warranties, including merchantability and fitness for a particular purpose, are disclaimed to the extent permitted by law.",
      "To the extent permitted by applicable law, Gilgit Naturals will not be responsible for losses or damages arising from misuse of products, failure to follow product instructions, incorrect customer information, third-party delays, customs or import restrictions, website interruptions, or events beyond our reasonable control.",
      "Nothing in these Terms & Conditions excludes or limits liability where prohibited by applicable law or limits non-excludable statutory consumer rights.",
    ],
  },
  {
    title: "19. Force Majeure",
    paragraphs: [
      "Gilgit Naturals will not be responsible for delays or failure to perform obligations caused by circumstances beyond our reasonable control, including natural disasters, severe weather, government actions, transportation disruptions, strikes, internet or infrastructure failures, war, civil unrest, or other unforeseen events.",
    ],
  },
  {
    title: "20. Changes to These Terms",
    paragraphs: [
      "We may update these Terms & Conditions from time to time. Changes become effective when published on this page, and the Last Updated date will be revised accordingly. For material changes that affect your rights, we may provide reasonable notice by email or website notice.",
      "Your continued use of the website after changes are published constitutes acceptance of the updated Terms & Conditions to the extent permitted by applicable law.",
    ],
  },
  {
    title: "21. Governing Law",
    paragraphs: [
      "These Terms & Conditions are interpreted in accordance with the applicable laws of Pakistan, subject to any mandatory rights or protections that apply to customers under applicable law.",
      "Before pursuing formal legal proceedings, the parties agree to attempt to resolve disputes through good-faith negotiation by contacting the email address below. Disputes will be handled by courts or other appropriate authorities having jurisdiction under applicable law.",
    ],
  },
  {
    title: "22. Contact Us",
    paragraphs: [
      "For questions regarding these Terms & Conditions, orders, wholesale inquiries, or our products, please contact Gilgit Naturals:",
    ],
  },
];

export const metadata = createMetadata({
  title: "Terms & Conditions",
  description: `Terms and conditions for using the ${SITE_NAME} website, placing orders, and submitting wholesale inquiries.`,
  path: "/terms",
});

export default function TermsPage() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Terms & Conditions"
        description="The terms that govern use of the Gilgit Naturals website, product orders, customer inquiries, and wholesale supply discussions."
      />
      <section className="mx-auto max-w-3xl px-6 py-16 lg:px-8 lg:pb-28">
        <article className="legal-content space-y-10 text-sm leading-relaxed text-charcoal-muted">
          <p className="border-b border-border pb-6 text-xs tracking-[0.08em] text-charcoal-muted uppercase">
            Last updated: September 17, 2026
          </p>
          <p>
            Welcome to <strong>{SITE_NAME}</strong>. By accessing or using our
            website, purchasing our products, or submitting an inquiry, you
            agree to be bound by these Terms &amp; Conditions. Please read them
            carefully before using the website or placing an order.
          </p>
          {sections.map((section) => (
            <section key={section.title}>
              <h2 className="font-serif text-2xl text-forest">
                {section.title}
              </h2>
              <div className="mt-4 space-y-4">
                {section.paragraphs?.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
                {section.bullets && (
                  <ul>
                    {section.bullets.map((bullet) => (
                      <li key={bullet}>{bullet}</li>
                    ))}
                  </ul>
                )}
                {section.title === "15. Privacy" && (
                  <p>
                    Read our{" "}
                    <Link
                      className="text-forest underline underline-offset-2"
                      href="/privacy-policy"
                    >
                      Privacy Policy
                    </Link>
                    .
                  </p>
                )}
                {section.title === "22. Contact Us" && (
                  <address className="not-italic">
                    <strong>{SITE_NAME}</strong>
                    <br />
                    Gilgit, Pakistan
                    <br />
                    Email:{" "}
                    <a
                      className="text-forest underline underline-offset-2"
                      href={`mailto:${CONTACT.email}`}
                    >
                      {CONTACT.email}
                    </a>
                    <br />
                    Phone:{" "}
                    <a
                      className="text-forest underline underline-offset-2"
                      href={`tel:${CONTACT.phone}`}
                    >
                      {CONTACT.phone}
                    </a>
                    <br />
                    Website:{" "}
                    <a
                      className="text-forest underline underline-offset-2"
                      href={SITE_URL}
                    >
                      {SITE_URL}
                    </a>
                    <p className="mt-4">
                      For general inquiries, please use our{" "}
                      <Link
                        className="text-forest underline underline-offset-2"
                        href="/contact"
                      >
                        Contact page
                      </Link>
                      .
                    </p>
                  </address>
                )}
              </div>
            </section>
          ))}
          <p className="border-t border-border pt-8 text-sm text-charcoal-muted">
            By accessing or using the Gilgit Naturals website, you acknowledge
            that you have read, understood, and agreed to these Terms &amp;
            Conditions.
          </p>
        </article>
      </section>
    </>
  );
}
