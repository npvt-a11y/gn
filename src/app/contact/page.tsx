import { ContactForm, contactFields } from "@/components/forms/Forms";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { PageHero, SectionHeader } from "@/components/ui/SectionHeader";
import { CONTACT } from "@/lib/constants";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Contact",
  description:
    "Contact Gilgit Naturals for wholesale Shilajit inquiries, general questions and business supply conversations across Pakistan.",
  path: "/contact",
});

const channels = [
  { label: "WhatsApp", value: CONTACT.whatsapp },
  { label: "Phone", value: CONTACT.phone },
  { label: "Email", value: CONTACT.email },
  { label: "Instagram", value: CONTACT.instagram },
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Let's Talk"
        description="Reach out for wholesale supply questions, product information or partnership conversations."
      >
        <Button href="/request-quote">Wholesale Inquiry</Button>
      </PageHero>

      <section className="mx-auto max-w-6xl px-6 py-20 lg:px-8 lg:py-28">
        <div className="grid gap-16 lg:grid-cols-2">
          <Reveal>
            <SectionHeader
              eyebrow="Channels"
              title="How to reach us"
              description="Contact details are placeholders until confirmed. Replace with your live numbers and handles."
              className="mb-10"
            />
            <ul className="space-y-6">
              {channels.map((c) => (
                <li key={c.label} className="border-b border-border pb-5">
                  <p className="text-[11px] tracking-[0.14em] text-gold uppercase">
                    {c.label}
                  </p>
                  <p className="mt-2 text-base text-forest">{c.value}</p>
                </li>
              ))}
            </ul>
            <p className="mt-8 text-sm text-charcoal-muted">
              Location: {CONTACT.location}
            </p>
          </Reveal>

          <Reveal delay={2}>
            <div className="border border-border bg-white p-6 md:p-10">
              <h2 className="font-serif text-2xl text-forest">Send a message</h2>
              <p className="mt-3 mb-8 text-sm text-charcoal-muted">
                For wholesale pricing, use the dedicated quote form for faster
                routing.
              </p>
              <ContactForm
                fields={contactFields}
                submitLabel="Send Message"
                successTitle="Message received"
              />
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
