import type { Metadata } from 'next'
import Link from 'next/link'
import { PageHeader } from '@/components/layout/page-header'
import { FaqAccordion, type FaqItem } from '@/components/faq/faq-accordion'
import { Reveal } from '@/components/motion/reveal'
import { ComplianceNote } from '@/components/layout/compliance-note'

export const metadata: Metadata = {
  title: 'FAQ',
  description: 'Answers about purity, testing, storage, shipping, and the intended research use of ELEVATE2XL products.',
}

const FAQS: FaqItem[] = [
  {
    q: 'What does "for research use only" mean?',
    a: 'All ELEVATE2XL products are sold strictly as research materials for in-vitro and laboratory study. They are not drugs, supplements, foods, or cosmetics, and are not intended for human or veterinary consumption or clinical use.',
  },
  {
    q: 'How is purity verified?',
    a: 'Every production lot is analyzed by high-performance liquid chromatography (HPLC) to quantify purity and by mass spectrometry (MS) to confirm identity. Representative samples are also verified by independent, accredited third-party laboratories.',
  },
  {
    q: 'Can I see a certificate of analysis (COA)?',
    a: 'Yes. Every lot ships with a matching COA, and additional documentation is available on request via our contact page. Each vial carries a lot number that traces back to its full analytical record.',
  },
  {
    q: 'How should I store my products?',
    a: 'Lyophilized peptides are best kept at -20°C and, once reconstituted, refrigerated at 2–8°C for up to 30 days. Liquids should be refrigerated and kept upright. Capsules store best in a cool, dry place. Full guidance appears on each product page.',
  },
  {
    q: 'How fast do orders ship?',
    a: 'In-stock orders are typically dispatched within 24–48 hours. Temperature-sensitive items ship with insulation to preserve cold-chain integrity in transit.',
  },
  {
    q: 'Do you offer bulk or lab pricing?',
    a: 'Yes. For volume orders or recurring lab supply arrangements, reach out through the contact page and our team will put together a quote.',
  },
  {
    q: 'What is your return policy?',
    a: 'Because these are sensitive research materials, unopened products may be returned within 14 days of delivery. Opened or temperature-compromised items cannot be accepted for safety and integrity reasons.',
  },
]

export default function FaqPage() {
  return (
    <>
      <PageHeader
        eyebrow="Support"
        title="Frequently asked questions"
        subtitle="Everything you need to know about our products, testing, and policies. Still curious? Reach out anytime."
      />

      <section className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
        <Reveal>
          <FaqAccordion items={FAQS} />
        </Reveal>

        <Reveal delay={0.1}>
          <div className="mt-10">
            <ComplianceNote />
          </div>
        </Reveal>

        <Reveal delay={0.15}>
          <div className="mt-8 flex flex-col items-center gap-3 text-center">
            <p className="text-muted-foreground">Didn&apos;t find your answer?</p>
            <Link
              href="/contact"
              className="glow-pink-hover inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground"
            >
              Contact our team
            </Link>
          </div>
        </Reveal>
      </section>
    </>
  )
}
