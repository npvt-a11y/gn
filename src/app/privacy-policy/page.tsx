import { PageHero } from "@/components/ui/SectionHeader";
import { CONTACT, SITE_NAME, SITE_URL } from "@/lib/constants";
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
        description="How Gilgit Naturals collects, uses and protects information shared through this website."
      />
      <section className="mx-auto max-w-3xl px-6 py-16 lg:px-8 lg:pb-28">
        <div className="space-y-10 text-sm leading-relaxed text-charcoal-muted">
          <p className="border-b border-border pb-6 text-xs tracking-[0.08em] text-charcoal-muted uppercase">
            Effective date: September 17, 2026
          </p>

          <div>
            <h2 className="font-serif text-2xl text-forest">
              1. Information We Collect
            </h2>
            <p className="mt-4">
              At <strong>{SITE_NAME}</strong>, we respect your privacy and are
              committed to protecting the personal information you provide when
              you visit our website, contact us, request a wholesale quotation,
              or place an order.
            </p>
            <h3 className="mt-6 font-medium text-forest">
              Information you provide
            </h3>
            <p className="mt-3">
              Depending on how you use the website, this may include your full
              name, phone number, email address, delivery or billing address,
              business name, business information, product and quantity
              requirements, packaging preferences, and any other information
              you voluntarily provide.
            </p>
            <h3 className="mt-6 font-medium text-forest">
              Information collected automatically
            </h3>
            <p className="mt-3">
              Website hosting and security services may process technical
              information such as your IP address, browser and device type,
              operating system, pages visited, referring website, and the date
              and time of visits. This information helps maintain security,
              improve performance, and understand website usage.
            </p>
          </div>

          <div>
            <h2 className="font-serif text-2xl text-forest">
              2. How We Use Your Information
            </h2>
            <p className="mt-4">We may use information we collect to:</p>
            <ul className="mt-3 list-disc space-y-2 pl-5">
              <li>Respond to inquiries and messages.</li>
              <li>Provide wholesale quotations and product information.</li>
              <li>Process and manage orders, delivery, and customer support.</li>
              <li>Discuss quantities, packaging, and private-label requirements.</li>
              <li>Improve our website, products, and services.</li>
              <li>Maintain website security and prevent misuse or fraud.</li>
              <li>Comply with applicable legal and regulatory requirements.</li>
            </ul>
            <p className="mt-4">
              We do not use your personal information for unrelated purposes
              unless permitted or required by applicable law.
            </p>
          </div>

          <div>
            <h2 className="font-serif text-2xl text-forest">
              3. Wholesale Inquiries
            </h2>
            <p className="mt-4">
              If you submit a wholesale or bulk-order inquiry, we may use the
              information you provide to contact you about product availability,
              quantities and pricing, packaging, private-label requirements,
              shipping, delivery, and other information needed to respond to
              your business inquiry.
            </p>
          </div>

          <div>
            <h2 className="font-serif text-2xl text-forest">
              4. Forms and Third-Party Services
            </h2>
            <p className="mt-4">
              Website inquiry forms send the information you submit to our
              Google Apps Script form-processing service, which records inquiry
              details in a restricted-access Google Sheet used by Gilgit
              Naturals to respond to customers. Google may process information
              under its own privacy policies and terms.
            </p>
            <p className="mt-4">
              The website is hosted through Vercel. We may also use third-party
              services for hosting, website security, analytics, communication,
              payment processing, and shipping or delivery. These providers
              process information according to their own policies and applicable
              law.
            </p>
            <p className="mt-4">
              We do not sell or rent your personal information to third
              parties.
            </p>
          </div>

          <div>
            <h2 className="font-serif text-2xl text-forest">
              5. Cookies and Similar Technologies
            </h2>
            <p className="mt-4">
              Our website may use cookies and similar technologies for essential
              functionality, website security, remembering preferences, and
              understanding website usage. You can control or disable cookies
              through your browser settings, although some functionality may be
              affected.
            </p>
          </div>

          <div>
            <h2 className="font-serif text-2xl text-forest">
              6. Payment Information
            </h2>
            <p className="mt-4">
              If payments are processed through a third-party provider, that
              provider may handle your payment information directly. Gilgit
              Naturals does not intentionally store complete payment card
              details on this website unless specifically stated at the time of
              payment. Review the relevant provider&apos;s privacy and security
              policies before submitting payment information.
            </p>
          </div>

          <div>
            <h2 className="font-serif text-2xl text-forest">
              7. Sharing and Security
            </h2>
            <p className="mt-4">
              We may share information when reasonably necessary to operate our
              business, including with delivery and courier companies, payment
              providers, website and technology providers, professional
              advisers, or government and law-enforcement authorities where
              required by law. We seek to share only information reasonably
              necessary for the relevant purpose.
            </p>
            <p className="mt-4">
              We take reasonable administrative, technical, and organizational
              measures to protect personal information against unauthorized
              access, misuse, loss, alteration, or disclosure. No internet
              transmission or electronic storage method can be guaranteed to be
              completely secure.
            </p>
          </div>

          <div>
            <h2 className="font-serif text-2xl text-forest">
              8. Retention and Your Choices
            </h2>
            <p className="mt-4">
              We retain personal information only for as long as reasonably
              necessary to respond to inquiries, fulfill orders, maintain
              business records, resolve disputes, provide support, and comply
              with legal obligations.
            </p>
            <p className="mt-4">
              Depending on applicable law, you may request access to, correction
              of, or deletion of personal information we hold about you. You may
              also object to or restrict certain processing or withdraw consent
              where processing is based on consent. We may need to verify your
              identity before completing a request.
            </p>
          </div>

          <div>
            <h2 className="font-serif text-2xl text-forest">
              9. Children and External Links
            </h2>
            <p className="mt-4">
              This website is not intentionally directed toward children. We do
              not knowingly collect children&apos;s personal information where
              prohibited by applicable law.
            </p>
            <p className="mt-4">
              Our website may link to third-party websites or services.
              {` ${SITE_NAME}`} is not responsible for their privacy practices,
              security, or content. Review their privacy policies before using
              those services.
            </p>
          </div>

          <div>
            <h2 className="font-serif text-2xl text-forest">
              10. Changes to This Policy
            </h2>
            <p className="mt-4">
              We may update this Privacy Policy to reflect changes in our
              business, website, services, or applicable legal requirements. The
              effective date at the top of this page will be updated when
              changes are made.
            </p>
          </div>

          <div>
            <h2 className="font-serif text-2xl text-forest">
              11. Contact Us
            </h2>
            <p className="mt-4">
              For privacy questions or requests, contact {SITE_NAME} through
              our <a className="text-forest underline" href="/contact">Contact page</a>{" "}
              or:
            </p>
            <ul className="mt-3 space-y-1">
              <li>{SITE_NAME}</li>
              <li>{CONTACT.location}</li>
              <li>{CONTACT.email}</li>
              <li>{CONTACT.phone}</li>
              <li>{SITE_URL}</li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
