import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { CtaBanner } from "@/components/ui/CtaBanner";
import { Reveal } from "@/components/ui/Reveal";
import { PageHero, SectionHeader } from "@/components/ui/SectionHeader";
import { IMAGES } from "@/lib/constants";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "About Gilgit Naturals",
  description:
    "Why Gilgit Naturals exists — authenticity, responsible sourcing, transparency, quality and long-term relationships with wholesale partners in Pakistan.",
  path: "/about",
});

const values = [
  {
    title: "Authenticity",
    text: "Origin matters. We communicate Gilgit connection honestly and without geographic exaggeration.",
  },
  {
    title: "Responsibility",
    text: "Sourcing and handling should respect the material, the process and the businesses that depend on consistency.",
  },
  {
    title: "Transparency",
    text: "We prefer clear process explanations over invented certifications or miracle claims.",
  },
  {
    title: "Quality",
    text: "Purification, packaging and storage are treated as core product responsibilities.",
  },
  {
    title: "Accessibility",
    text: "Premium quality should be approachable for serious wholesale partners — not locked behind hype.",
  },
  {
    title: "Relationships",
    text: "We aim to build long-term supply partnerships with retailers and wellness businesses.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Story"
        title="Why Gilgit Naturals Exists"
        description="A brand built around authentic mountain-origin Shilajit, transparent information and professional wholesale supply."
      />

      <section className="mx-auto max-w-6xl px-6 py-20 lg:px-8 lg:py-28">
        <div className="grid items-center gap-14 lg:grid-cols-2">
          <Reveal>
            <div className="prose-brand space-y-5 text-base">
              <p>
                Gilgit Naturals began from a simple belief: businesses searching
                for Shilajit deserve a supplier that looks and operates like a
                serious company — clear about origin, careful about quality and
                honest about what can and cannot be claimed.
              </p>
              <p>
                Too many product pages rely on noise. We chose editorial clarity
                instead: education, process, sourcing and a wholesale pathway
                designed for retailers, pharmacies, gyms and wellness brands
                across Pakistan.
              </p>
              <p>
                Authenticity without theatrics. Premium without pretension.
                That is the standard we hold ourselves to.
              </p>
            </div>
          </Reveal>
          <Reveal scale className="relative aspect-[4/5] overflow-hidden">
            <Image
              src={IMAGES.mountains}
              alt="Northern Pakistan mountain landscape representing the Gilgit Naturals origin story"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </Reveal>
        </div>
      </section>

      <section className="bg-forest">
        <div className="mx-auto grid max-w-6xl gap-12 px-6 py-20 md:grid-cols-2 lg:px-8 lg:py-28">
          <Reveal>
            <p className="eyebrow text-gold-light">Mission</p>
            <h2 className="font-serif mt-4 text-3xl text-cream">
              Supply authentic Gilgit-origin Shilajit with clarity and care.
            </h2>
            <p className="mt-5 text-sm leading-relaxed text-cream/70">
              Help businesses source purified Shilajit through a professional,
              transparent wholesale relationship.
            </p>
          </Reveal>
          <Reveal delay={2}>
            <p className="eyebrow text-gold-light">Vision</p>
            <h2 className="font-serif mt-4 text-3xl text-cream">
              Become Pakistan’s most trusted professional Shilajit supply partner.
            </h2>
            <p className="mt-5 text-sm leading-relaxed text-cream/70">
              Known for origin integrity, process discipline and respectful
              business communication.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20 lg:px-8 lg:py-28">
        <Reveal>
          <SectionHeader
            eyebrow="Values"
            title="What guides our work"
            className="mb-14"
          />
        </Reveal>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {values.map((v, i) => (
            <Reveal key={v.title} delay={((i % 5) + 1) as 1 | 2 | 3 | 4 | 5}>
              <article className="border-t border-gold/40 pt-6">
                <h3 className="font-serif text-xl text-forest">{v.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-charcoal-muted">
                  {v.text}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
        <div className="mt-14">
          <Button href="/sourcing">Our Sourcing Story</Button>
        </div>
      </section>

      <CtaBanner
        title="Work with a supplier that values clarity"
        description="Request a wholesale quote or reach out through the contact page."
        secondaryHref="/contact"
        secondaryLabel="Contact Us"
      />
    </>
  );
}
