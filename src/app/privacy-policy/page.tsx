import Link from "next/link";
import { PageHero } from "@/components/ui/SectionHeader";
import { CONTACT, SITE_NAME, SITE_URL } from "@/lib/constants";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Privacy Policy",
  description: `Privacy Policy for ${SITE_NAME}. Learn how we collect, use, disclose, and protect personal information.`,
  path: "/privacy-policy",
});

const sections = [
  {
    title: "1. Who We Are",
    content: (
      <p>
        <strong>Gilgit Naturals PVT LTD</strong> is operated from Gilgit,
        Pakistan. You can contact us using the details in Section 14 below.
      </p>
    ),
  },
  {
    title: "2. Information We Collect",
    content: (
      <>
        <p>We collect the following categories of information:</p>
        <ul>
          <li>
            <strong>Contact information:</strong> name, email address, phone
            number, and shipping or billing address.
          </li>
          <li>
            <strong>Order information:</strong> products purchased, order
            history, quantities, and wholesale or business details where
            applicable.
          </li>
          <li>
            <strong>Payment information:</strong> payment method details
            processed securely through applicable third-party payment
            providers. We do not store full card numbers.
          </li>
          <li>
            <strong>Communications:</strong> messages, inquiries, reviews,
            testimonials, and other content you submit to us.
          </li>
          <li>
            <strong>Technical information:</strong> IP address, browser type,
            device information, and website usage data collected through
            cookies and similar technologies.
          </li>
        </ul>
      </>
    ),
  },
  {
    title: "3. How We Use Your Information",
    content: (
      <>
        <p>We use your information to:</p>
        <ul>
          <li>Process and fulfill orders, including shipping documentation.</li>
          <li>Communicate about orders, inquiries, and customer support.</li>
          <li>Resolve disputes, returns, complaints, and service requests.</li>
          <li>Process wholesale and bulk-order quotations.</li>
          <li>Improve our website, products, and services.</li>
          <li>
            Send marketing communications where you have consented or where
            otherwise permitted by law. You may opt out at any time.
          </li>
          <li>Detect, prevent, and address fraud, security issues, or unlawful activity.</li>
          <li>Comply with legal, tax, and regulatory obligations.</li>
        </ul>
      </>
    ),
  },
  {
    title: "4. Legal Basis for Processing",
    content: (
      <>
        <p>
          Where applicable data-protection law requires a legal basis, we rely
          on:
        </p>
        <ul>
          <li>
            <strong>Performance of a contract</strong> to process orders and
            provide products or services.
          </li>
          <li>
            <strong>Legitimate interests</strong> to operate, secure, and
            improve our website and business.
          </li>
          <li>
            <strong>Consent</strong> for marketing communications and
            non-essential cookies, which you may withdraw.
          </li>
          <li>
            <strong>Legal obligation</strong> to comply with tax, customs, and
            regulatory requirements.
          </li>
        </ul>
      </>
    ),
  },
  {
    title: "5. Sharing Your Information",
    content: (
      <>
        <p>We do not sell your personal information. We may share it with:</p>
        <ul>
          <li>Courier and logistics providers for delivery.</li>
          <li>Payment processors for secure payment handling.</li>
          <li>Customs and regulatory authorities where required.</li>
          <li>
            Website, hosting, email, communication, and technology providers
            supporting our operations.
          </li>
          <li>Professional advisers, including legal and accounting advisers.</li>
          <li>Authorities where required by law or to protect legal rights.</li>
        </ul>
        <p>
          We seek to share only information reasonably necessary for the
          relevant purpose. Information submitted through website forms may be
          processed by Google Apps Script and stored in a restricted-access
          Google Sheet for inquiry management. The website is hosted through
          Vercel. These providers process information under their own terms and
          privacy policies.
        </p>
      </>
    ),
  },
  {
    title: "6. International Data Transfers",
    content: (
      <p>
        As we may ship internationally and use service providers located
        outside Pakistan, your information may be transferred to and processed
        in other countries with different data-protection laws. Where required
        by applicable law, we use appropriate safeguards for international
        transfers, such as Standard Contractual Clauses or an applicable
        adequacy decision.
      </p>
    ),
  },
  {
    title: "7. Data Retention",
    content: (
      <p>
        We retain personal information only for as long as necessary to fulfill
        the purposes described in this Policy, including processing orders,
        maintaining legal, tax, and accounting records, resolving disputes, and
        enforcing agreements. Retention periods vary by information type and
        applicable legal requirements.
      </p>
    ),
  },
  {
    title: "8. Data Security",
    content: (
      <p>
        We take reasonable technical and organizational measures to protect
        personal information against unauthorized access, loss, misuse, or
        alteration. However, no method of transmission or electronic storage is
        completely secure, and absolute security cannot be guaranteed.
      </p>
    ),
  },
  {
    title: "9. Cookies and Tracking Technologies",
    content: (
      <p>
        Our website may use cookies and similar technologies to operate the
        site, remember preferences, maintain security, and analyze website
        traffic. You can control cookies through your browser settings;
        disabling some cookies may affect website functionality.
      </p>
    ),
  },
  {
    title: "10. Your Rights",
    content: (
      <>
        <p>Depending on your location, you may have the right to:</p>
        <ul>
          <li>Request access to personal information we hold about you.</li>
          <li>Request correction of inaccurate or incomplete information.</li>
          <li>Request deletion, subject to legal exceptions.</li>
          <li>Object to or restrict certain processing.</li>
          <li>Request a portable copy of your information where applicable.</li>
          <li>Withdraw consent where processing is based on consent.</li>
          <li>
            Lodge a complaint with your local data-protection authority where
            you believe your rights have been violated.
          </li>
        </ul>
        <p>
          To exercise these rights, contact us using the details in Section 14.
          We may verify your identity before responding and will respond within
          the timeframe required by applicable law.
        </p>
      </>
    ),
  },
  {
    title: "11. Children’s Privacy",
    content: (
      <p>
        Our website and products are not directed at children, and we do not
        knowingly collect personal information from anyone under 18 where
        prohibited by applicable law. If you believe a child has provided
        personal information to us, please contact us so we can take
        appropriate action.
      </p>
    ),
  },
  {
    title: "12. Third-Party Links",
    content: (
      <p>
        Our website may contain links to third-party websites, payment
        providers, or services. Gilgit Naturals is not responsible for the
        privacy practices, security, or content of those third parties. We
        encourage you to review their privacy policies separately.
      </p>
    ),
  },
  {
    title: "13. Changes to This Privacy Policy",
    content: (
      <p>
        We may update this Privacy Policy from time to time. Changes become
        effective when published on this page, and the “Last Updated” date will
        be revised accordingly. For material changes, we may provide reasonable
        notice, such as by email or a notice on our website.
      </p>
    ),
  },
  {
    title: "14. Contact Us",
    content: (
      <>
        <p>
          If you have questions, concerns, or requests regarding this Privacy
          Policy or your personal information, please contact us:
        </p>
        <address className="mt-4 not-italic">
          <strong>{SITE_NAME}</strong>
          <br />
          Gilgit, Pakistan
          <br />
          Email:{" "}
          <a className="text-forest underline underline-offset-2" href={`mailto:${CONTACT.email}`}>
            {CONTACT.email}
          </a>
          <br />
          Phone:{" "}
          <a className="text-forest underline underline-offset-2" href={`tel:${CONTACT.phone}`}>
            {CONTACT.phone}
          </a>
          <br />
          Website:{" "}
          <a className="text-forest underline underline-offset-2" href={SITE_URL}>
            {SITE_URL}
          </a>
        </address>
        <p className="mt-4">
          You can also use the{" "}
          <Link className="text-forest underline underline-offset-2" href="/contact">
            Contact page
          </Link>
          .
        </p>
      </>
    ),
  },
];

export default function PrivacyPage() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Privacy Policy"
        description="How Gilgit Naturals collects, uses, discloses, and protects personal information."
      />
      <section className="mx-auto max-w-3xl px-6 py-16 lg:px-8 lg:pb-28">
        <article className="space-y-10 text-sm leading-relaxed text-charcoal-muted">
          <p className="border-b border-border pb-6 text-xs tracking-[0.08em] text-charcoal-muted uppercase">
            Last updated: September 17, 2026
          </p>
          <p>
            This Privacy Policy explains how <strong>{SITE_NAME}</strong>{" "}
            (&ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;) collects,
            uses, discloses, and protects your personal information when you
            visit our website, place an order, submit an inquiry, or otherwise
            interact with us. By using our website or providing information,
            you agree to the practices described in this Privacy Policy,
            together with our Terms &amp; Conditions.
          </p>
          {sections.map((section) => (
            <section key={section.title}>
              <h2 className="font-serif text-2xl text-forest">
                {section.title}
              </h2>
              <div className="policy-content mt-4 space-y-4">
                {section.content}
              </div>
            </section>
          ))}
        </article>
      </section>
    </>
  );
}
