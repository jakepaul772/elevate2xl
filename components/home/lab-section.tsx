import Link from 'next/link'
import { FlaskConical, ScanLine, ShieldCheck, Snowflake } from 'lucide-react'
import { Reveal, StaggerGroup, StaggerItem } from '@/components/motion/reveal'

const STEPS = [
  {
    icon: ScanLine,
    title: 'HPLC + MS assay',
    desc: 'Every batch is analyzed by high-performance liquid chromatography and mass spectrometry to confirm identity and quantify purity.',
  },
  {
    icon: ShieldCheck,
    title: 'Independent verification',
    desc: 'Samples are sent to accredited third-party labs. Certificates of analysis are available for every lot.',
  },
  {
    icon: Snowflake,
    title: 'Cold-chain integrity',
    desc: 'Lyophilized under controlled conditions and shipped with insulation to preserve peptide stability in transit.',
  },
  {
    icon: FlaskConical,
    title: 'Traceable lots',
    desc: 'Each vial carries a lot number linking it back to its full analytical record for complete transparency.',
  },
]

export function LabSection() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-24">
      <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <Reveal>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-pink">Quality & testing</p>
          <h2 className="mt-3 text-balance font-display text-3xl font-bold tracking-tight text-mist sm:text-4xl">
            Purity you can put in a spreadsheet.
          </h2>
          <p className="mt-5 text-pretty leading-relaxed text-muted-foreground">
            Research is only as reliable as its inputs. That is why every ELEVATE2XL product moves through a documented
            analytical pipeline before it ships — no exceptions, no shortcuts.
          </p>
          <Link
            href="/about"
            className="glow-pink-hover mt-7 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground"
          >
            How we test
          </Link>
        </Reveal>

        <StaggerGroup className="grid gap-4 sm:grid-cols-2">
          {STEPS.map((step) => (
            <StaggerItem key={step.title}>
              <div className="glass h-full rounded-2xl p-6">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-pink/15">
                  <step.icon className="h-5 w-5 text-pink" aria-hidden="true" />
                </div>
                <h3 className="mt-4 font-display text-lg font-semibold text-mist">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{step.desc}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>
    </section>
  )
}
