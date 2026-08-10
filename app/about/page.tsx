import type { Metadata } from 'next'
import Link from 'next/link'
import { Beaker, Globe2, LineChart, Microscope, PackageCheck, ShieldCheck } from 'lucide-react'
import { PageHeader } from '@/components/layout/page-header'
import { Reveal, StaggerGroup, StaggerItem } from '@/components/motion/reveal'
import { ComplianceNote } from '@/components/layout/compliance-note'

export const metadata: Metadata = {
  title: 'Our Science',
  description:
    'The ELEVATE2XL standard: sourcing, synthesis, and a documented analytical pipeline behind every research peptide.',
}

const STANDARDS = [
  {
    icon: Microscope,
    title: 'Analytical rigor',
    desc: 'HPLC quantifies purity while mass spectrometry confirms molecular identity on every production lot.',
  },
  {
    icon: ShieldCheck,
    title: 'Third-party proof',
    desc: 'Independent, accredited laboratories verify our results. A certificate of analysis backs each batch.',
  },
  {
    icon: Globe2,
    title: 'Vetted sourcing',
    desc: 'Raw materials come from qualified suppliers audited for consistency, traceability, and documentation.',
  },
  {
    icon: PackageCheck,
    title: 'Controlled fulfillment',
    desc: 'Lyophilization, cold storage, and insulated shipping protect peptide integrity from bench to lab.',
  },
]

const STATS = [
  { value: '99%+', label: 'Typical assayed purity' },
  { value: '60+', label: 'Research compounds' },
  { value: '100%', label: 'Lots with a COA' },
]

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="Our Science"
        title="Built for researchers who don't compromise."
        subtitle="ELEVATE2XL exists to remove a variable from your work: the quality of your inputs. Here is how we hold that line."
      />

      {/* Story */}
      <section className="mx-auto max-w-4xl px-4 py-16 sm:px-6">
        <Reveal>
          <div className="space-y-5 text-lg leading-relaxed text-muted-foreground">
            <p>
              ELEVATE2XL began with a simple frustration shared across research labs: inconsistent material quality
              quietly undermining otherwise sound experiments. Purity claims went unverified, storage was an
              afterthought, and documentation rarely followed the vial.
            </p>
            <p>
              We rebuilt that supply chain around a single principle —{' '}
              <span className="font-semibold text-mist">every product is measured, documented, and traceable</span>.
              From synthesis through fulfillment, nothing ships until it has cleared our analytical pipeline and earned
              a certificate of analysis.
            </p>
          </div>
        </Reveal>
      </section>

      {/* Stats */}
      <section className="border-y border-border bg-ink/60">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <StaggerGroup className="grid grid-cols-1 divide-y divide-border sm:grid-cols-3 sm:divide-x sm:divide-y-0">
            {STATS.map((stat) => (
              <StaggerItem key={stat.label}>
                <div className="px-6 py-10 text-center">
                  <p className="tabular font-display text-4xl font-bold text-mist sm:text-5xl">{stat.value}</p>
                  <p className="mt-2 text-sm text-muted-foreground">{stat.label}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </section>

      {/* Standards */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6">
        <Reveal>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-pink">The standard</p>
          <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-mist sm:text-4xl">
            Four commitments behind every vial
          </h2>
        </Reveal>
        <StaggerGroup className="mt-10 grid gap-5 sm:grid-cols-2">
          {STANDARDS.map((s) => (
            <StaggerItem key={s.title}>
              <div className="label-gradient glow-pink-hover h-full rounded-2xl p-7">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-pink/15">
                  <s.icon className="h-5 w-5 text-pink" aria-hidden="true" />
                </div>
                <h3 className="mt-4 font-display text-xl font-semibold text-mist">{s.title}</h3>
                <p className="mt-2 leading-relaxed text-muted-foreground">{s.desc}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </section>

      {/* Pipeline */}
      <section className="mx-auto max-w-7xl px-4 pb-20 sm:px-6">
        <Reveal>
          <div className="label-gradient glow-pink-hover rounded-3xl p-8 sm:p-12">
            <div className="grid gap-8 sm:grid-cols-3">
              {[
                { icon: Beaker, step: 'Synthesis', desc: 'Produced by qualified partners under documented protocols.' },
                { icon: LineChart, step: 'Assay', desc: 'HPLC + MS analysis on every lot, cross-checked by a third party.' },
                { icon: PackageCheck, step: 'Fulfillment', desc: 'Lyophilized, cold-stored, and shipped with a matching COA.' },
              ].map((p, i) => (
                <div key={p.step} className="relative">
                  <span className="tabular font-display text-sm font-bold text-pink">0{i + 1}</span>
                  <p.icon className="mt-3 h-6 w-6 text-mist" aria-hidden="true" />
                  <h3 className="mt-3 font-display text-lg font-semibold text-mist">{p.step}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="mt-10 flex flex-col items-center gap-5 text-center">
            <ComplianceNote className="max-w-2xl text-left" />
            <Link
              href="/shop"
              className="glow-pink glow-pink-hover inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-base font-semibold text-primary-foreground"
            >
              Browse the catalog
            </Link>
          </div>
        </Reveal>
      </section>
    </>
  )
}
