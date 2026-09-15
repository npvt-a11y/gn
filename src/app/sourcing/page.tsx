import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { CtaBanner } from "@/components/ui/CtaBanner";
import { Reveal } from "@/components/ui/Reveal";
import { PageHero, SectionHeader } from "@/components/ui/SectionHeader";
import { IMAGES } from "@/lib/constants";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Sourcing from Gilgit",
  description:
    "Sourced from the mountains of Gilgit — the story of geography, traditional association with Shilajit, and our sourcing philosophy.",
  path: "/sourcing",
  keywords: [
    "Gilgit Shilajit",
    "wholesale Shilajit Pakistan",
    "Gilgit-Baltistan Shilajit",
    "Shilajit supplier Pakistan",
  ],
});

export default function SourcingPage() {
  return (
    <>
      {/* Page Hero */}
      <PageHero
        eyebrow="Origin"
        title="Sourced From the Mountains of Gilgit"
        description="A story of geography, tradition and our connection to the origin of Gilgit Shilajit."
      />

   {/* Hero Image */}
<section className="relative min-h-[50vh] overflow-hidden">
  <Image
    src={IMAGES.valley}
    alt="Mountain valley landscape of northern Pakistan near Gilgit-Baltistan"
    fill
    className="object-cover"
    sizes="100vw"
    priority
  />

  {/* Green color treatment */}
  <div className="absolute inset-0 bg-forest/55 mix-blend-color" />
  <div className="absolute inset-0 bg-forest/25 mix-blend-multiply" />
</section>

      {/* Geography */}
      <section className="mx-auto max-w-3xl px-6 py-20 lg:px-8 lg:py-28">
        <Reveal>
          <SectionHeader
            eyebrow="Geography"
            title="Gilgit's mountainous landscape"
            description="Gilgit-Baltistan sits among some of the world's most dramatic mountain systems in northern Pakistan. High elevation, rocky terrain and remote valleys form the geographic setting traditionally associated with Shilajit."
          />

          <div className="prose-brand mt-10 space-y-5 text-base">
            <p>
              Gilgit-Baltistan is known for its dramatic mountain landscapes,
              high-altitude valleys and rugged terrain. For Gilgit Naturals,
              this region is central to our sourcing story and our connection
              with Gilgit-origin Shilajit.
            </p>

            <p>
              We do not claim exclusive rights to an entire mountain range or
              invent geographic myths. Our positioning is straightforward:
              Gilgit Naturals is connected to Gilgit-origin Shilajit and treats
              sourcing as a responsibility — not simply a marketing slogan.
            </p>

            <p>
              Traditional association with Shilajit in these highlands informs
              our respect for local knowledge and careful collection practices
              while we build a modern wholesale supply model.
            </p>
          </div>
        </Reveal>

        {/* Sourcing Philosophy */}
        <Reveal>
          <h2 className="mt-16 font-serif text-3xl text-forest">
            Our sourcing philosophy
          </h2>

          <div className="divider-gold mt-6" />

          <ul className="mt-8 space-y-4 text-sm leading-relaxed text-charcoal-muted">
            <li>
              <span className="text-gold">•</span>{" "}
              Prioritize authenticity of origin communication
            </li>

            <li>
              <span className="text-gold">•</span>{" "}
              Prefer careful selection over volume-at-any-cost
            </li>

            <li>
              <span className="text-gold">•</span>{" "}
              Maintain transparency about process limitations
            </li>

            <li>
              <span className="text-gold">•</span>{" "}
              Build long-term supply relationships, not one-off hype
            </li>
          </ul>
        </Reveal>

        {/* Region Map */}
        <Reveal>
          <div className="mt-16 border border-border bg-white p-8 md:p-10">
            <p className="eyebrow mb-4">Region Map</p>

            <h3 className="font-serif text-2xl text-forest">
              Gilgit-Baltistan · Northern Pakistan
            </h3>

            <div className="mt-8 overflow-hidden border border-border bg-cream-dark/60">
              <Image
                src="/images/map.jpg"
                alt="Map of Gilgit-Baltistan in northern Pakistan"
                width={1600}
                height={1000}
                className="h-auto w-full object-contain"
              />
            </div>

            <p className="mt-4 max-w-xl text-xs leading-relaxed text-charcoal-muted">
              Gilgit-Baltistan is the mountainous region in northern Pakistan
              associated with our sourcing story and the origin of the
              Shilajit we offer.
            </p>
          </div>
        </Reveal>

        {/* From Source to Customer */}
        <Reveal>
          <div className="mt-16 border-t border-border pt-10">
            <p className="text-sm leading-relaxed text-charcoal-muted">
              Source → processing → quality → wholesale customer. That chain is
              the heart of Gilgit Naturals.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Button href="/processing">
                How It Is Processed
              </Button>

              <Button href="/quality" variant="secondary">
                Quality Standards
              </Button>
            </div>
          </div>
        </Reveal>
      </section>

      {/* Wholesale CTA */}
      <CtaBanner
        title="From Gilgit to your business"
        description="Request a wholesale conversation grounded in origin, process and quality."
      />
    </>
  );
}
