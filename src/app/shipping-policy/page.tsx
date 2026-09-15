import { Button } from "@/components/ui/Button";
import { PageHero } from "@/components/ui/SectionHeader";
import { SITE_NAME } from "@/lib/constants";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Shipping & Wholesale Policy",
  description: `Shipping and wholesale policy for ${SITE_NAME} — delivery expectations, wholesale process and private-label discussions.`,
  path: "/shipping-policy",
});

export default function ShippingPolicyPage() {
  return (
    <>
      <PageHero
        eyebrow="Policies"
        title="Shipping & Wholesale Policy"
        description="How delivery and wholesale supply conversations generally work. Specific order terms are confirmed per inquiry."
      />
      <section className="mx-auto max-w-3xl px-6 py-16 lg:px-8 lg:pb-28">
        <div className="space-y-12 text-sm leading-relaxed text-charcoal-muted">
          <div>
            <h2 className="font-serif text-2xl text-forest">Shipping</h2>
            <p className="mt-4">
              {SITE_NAME} aims to support Pakistan-wide delivery. Timelines and
              courier arrangements depend on destination city, order size and
              packaging. Estimated delivery details are shared when your order is
              reviewed.
            </p>
          </div>

          <div id="wholesale">
            <h2 className="font-serif text-2xl text-forest">Wholesale Policy</h2>
            <p className="mt-4">
              Wholesale supply is intended for retailers, resellers, pharmacies,
              gyms, wellness businesses, online sellers and brands. Minimum
              quantities, packaging options and pricing are confirmed on request
              — we do not publish invented price lists on this website.
            </p>
            <ul className="mt-5 list-disc space-y-2 pl-5">
              <li>Inquiries should include business type, city and quantity</li>
              <li>Private-label options may be discussed based on volume</li>
              <li>Payment methods are confirmed during order discussion</li>
              <li>Product storage guidance should be followed after delivery</li>
            </ul>
          </div>

          <div>
            <h2 className="font-serif text-2xl text-forest">Order changes</h2>
            <p className="mt-4">
              Change and cancellation terms are confirmed as part of each
              commercial agreement. Contact us promptly if your requirements
              change after an inquiry.
            </p>
          </div>

          <Button href="/request-quote">Request Wholesale Quote</Button>
        </div>
      </section>
    </>
  );
}
