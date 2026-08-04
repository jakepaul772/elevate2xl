import { Reveal } from '@/components/motion/reveal'

export function PageHeader({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow: string
  title: string
  subtitle?: string
}) {
  return (
    <section className="relative overflow-hidden border-b border-border">
      <div className="mesh-hero absolute inset-0 opacity-40" aria-hidden="true" />
      <div className="relative mx-auto max-w-4xl px-4 py-16 text-center sm:px-6 sm:py-20">
        <Reveal>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-pink">{eyebrow}</p>
          <h1 className="mt-3 text-balance font-display text-4xl font-bold tracking-tight text-mist sm:text-5xl">
            {title}
          </h1>
          {subtitle && (
            <p className="mx-auto mt-5 max-w-2xl text-pretty leading-relaxed text-muted-foreground">{subtitle}</p>
          )}
        </Reveal>
      </div>
    </section>
  )
}
