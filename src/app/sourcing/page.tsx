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
  keywords: ["Gilgit Shilajit", "wholesale shilajit Pakistan"],
});

export default function SourcingPage() {
  return (
    <>
      <PageHero
        eyebrow="Origin"
        title="Sourced From the Mountains of Gilgit"
        description="A storytelling page about geography, tradition and the connection between source and final wholesale product."
      />

      <section className="relative min-h-[50vh] overflow-hidden">
        <Image
          src={IMAGES.valley}
          alt="Cinematic mountain valley landscape of northern Pakistan near Gilgit-Baltistan"
          fill
          className="object-cover"
          sizes="100vw"
          priority
        />
        <div className="absolute inset-0 bg-forest/45" />
      </section>

      <section className="mx-auto max-w-3xl px-6 py-20 lg:px-8 lg:py-28">
        <Reveal>
          <SectionHeader
            eyebrow="Geography"
            title="Gilgit’s mountainous landscape"
            description="Gilgit-Baltistan sits among some of the world’s most dramatic mountain systems in northern Pakistan. High elevation, rocky terrain and remote valleys shape the environment traditionally associated with Shilajit."
          />
          <div className="prose-brand mt-10 space-y-5 text-base">
            <p>
              We do not claim exclusive rights to an entire mountain range or
              invent geographic myths. Our positioning is straightforward: Gilgit
              Naturals is connected to Gilgit-origin Shilajit and treats sourcing
              as a responsibility — not a marketing slogan.
            </p>
            <p>
              Traditional association with Shilajit in these highlands informs
              how local knowledge and careful collection practices are respected
              within a modern wholesale supply model.
            </p>
          </div>
        </Reveal>

        <Reveal>
          <h2 className="font-serif mt-16 text-3xl text-forest">
            Our sourcing philosophy
          </h2>
          <div className="divider-gold mt-6" />
          <ul className="mt-8 space-y-4 text-sm leading-relaxed text-charcoal-muted">
            <li>• Prioritize authenticity of origin communication</li>
            <li>• Prefer careful selection over volume-at-any-cost</li>
            <li>• Maintain transparency about process limitations</li>
            <li>• Build long-term supply relationships, not one-off hype</li>
          </ul>
        </Reveal>

        <Reveal>
          <div className="mt-16 border border-border bg-white p-8 md:p-10">
            <p className="eyebrow mb-4">Region map</p>
            <h3 className="font-serif text-2xl text-forest">
              Gilgit-Baltistan · Northern Pakistan
        <div className="mt-8 aspect-[16/10] overflow-hidden border border-border bg-cream-dark/60">
  <Image
    src="/images/map.jpg"
    alt="Gilgit-Baltistan, Northern Pakistan"
    width={1600}
    height={1000}
    className="h-full w-full object-contain"
  />
</div>
                >
                  <rect
                    x="10"
                    y="10"
                    width="180"
                    height="120"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="0.8"
                    opacity="0.25"
                  />
                  <path
                    d="M30 100 L55 55 L75 80 L100 35 L130 70 L155 45 L175 90 L30 100Z"
                    fill="currentColor"
                    opacity="0.08"
                    stroke="currentColor"
                    strokeWidth="1"
                  />
                  <circle cx="100" cy="58" r="4" fill="#a68b5b" />
                  <text
                    x="100"
                    y="78"
                    textAnchor="middle"
                    fontSize="8"
                    fill="currentColor"
                    opacity="0.7"
                  >
                    Gilgit
                  </text>
                </svg>
                <p className="mt-4 max-w-sm text-xs leading-relaxed text-charcoal-muted">
                  Simplified illustrative map for orientation. Not a
                  survey-grade geographic document.
                </p>
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal>
          <div className="mt-12">
            <p className="text-sm leading-relaxed text-charcoal-muted">
              Source → processing → quality → wholesale customer. That chain is
              the heart of Gilgit Naturals.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button href="/processing">How It Is Processed</Button>
              <Button href="/quality" variant="secondary">
                Quality Standards
              </Button>
            </div>
          </div>
        </Reveal>
      </section>

      <CtaBanner
        title="From Gilgit to your business"
        description="Request a wholesale conversation grounded in origin and quality."
      />
    </>
  );
}
