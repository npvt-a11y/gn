import { ContactForm, contactFields } from "@/components/forms/Forms";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { PageHero, SectionHeader } from "@/components/ui/SectionHeader";
import { CONTACT } from "@/lib/constants";
import { createMetadata } from "@/lib/seo";
import Link from "next/link";

export const metadata = createMetadata({
  title: "Contact",
  description:
    "Contact Gilgit Naturals for wholesale Shilajit inquiries, general questions and business supply conversations across Pakistan.",
  path: "/contact",
});

const channels = [
  {
    label: "WhatsApp",
    value: CONTACT.whatsapp,
    href: `https://wa.me/${CONTACT.whatsapp.replace(/\D/g, "")}`,
  },
  { label: "Phone", value: CONTACT.phone, href: `tel:${CONTACT.phone}` },
  { label: "Email", value: CONTACT.email, href: `mailto:${CONTACT.email}` },
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

      <section className="bg-white">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 py-16 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16 lg:px-8 lg:py-24">
          <Reveal className="h-full">
            <SectionHeader
              eyebrow="Channels"
              title="How to reach us"
              description="Choose the channel that works best for your question. We respond to business and wholesale inquiries from Pakistan and beyond."
              className="mb-10"
            />
            <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
              {channels.map((c) => (
                <li
                  key={c.label}
                  className="border border-border bg-cream p-5 transition-colors hover:border-gold/60"
                >
                  <p className="text-[11px] tracking-[0.14em] text-gold uppercase">
                    {c.label}
                  </p>
                  {c.href ? (
                    <Link
                      href={c.href}
                      className="mt-2 block break-words text-base text-forest underline-offset-4 hover:underline"
                    >
                      {c.value}
                    </Link>
                  ) : (
                    <p className="mt-2 text-base text-forest">{c.value}</p>
                  )}
                </li>
              ))}
            </ul>
            <div className="mt-3 border border-border bg-cream-dark/40 p-5">
              <p className="text-[11px] tracking-[0.14em] text-gold uppercase">
                Based in
              </p>
              <p className="mt-2 text-base text-forest">{CONTACT.location}</p>
            </div>
          </Reveal>

          <Reveal delay={2} className="h-full">
            <div className="h-full border border-border bg-cream p-6 shadow-[0_12px_35px_rgba(26,58,42,0.06)] md:p-10">
              <p className="eyebrow">Get in touch</p>
              <h2 className="mt-3 font-serif text-3xl text-forest md:text-4xl">
                Send a message
              </h2>
              <p className="mt-4 mb-8 max-w-md text-sm leading-relaxed text-charcoal-muted">
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
