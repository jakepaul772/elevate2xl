import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import { products } from '@/lib/products'
import { Reveal, StaggerGroup, StaggerItem } from '@/components/motion/reveal'

const CATEGORIES = [
  {
    key: 'peptides' as const,
    title: 'Peptides',
    desc: 'Lyophilized research peptides in precision-dosed vials.',
  },
  {
    key: 'liquids' as const,
    title: 'Liquids',
    desc: 'Pre-mixed research solutions in dropper bottles.',
  },
  {
    key: 'capsules' as const,
    title: 'Capsules',
    desc: 'Encapsulated compounds for controlled oral studies.',
  },
]

export function FeaturedCategories() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-24">
      <Reveal>
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-pink">Explore the catalog</p>
        <h2 className="mt-3 max-w-2xl text-balance font-display text-3xl font-bold tracking-tight text-mist sm:text-4xl">
          Three families. One standard of quality.
        </h2>
      </Reveal>

      <StaggerGroup className="mt-10 grid gap-5 md:grid-cols-3">
        {CATEGORIES.map((cat) => {
          const count = products.filter((p) => p.category === cat.key).length
          return (
            <StaggerItem key={cat.key}>
              <Link
                href={`/shop?category=${cat.key}`}
                className="group glass glow-pink-hover relative flex h-full min-h-56 flex-col justify-between overflow-hidden rounded-2xl p-7 transition-colors hover:border-pink/40"
              >
                <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-pink/15 blur-3xl transition-opacity duration-300 group-hover:opacity-100" />
                <div className="relative flex items-start justify-between">
                  <span className="font-display text-2xl font-bold text-mist">{cat.title}</span>
                  <ArrowUpRight className="h-6 w-6 text-muted-foreground transition-all duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-pink" />
                </div>
                <div className="relative">
                  <p className="text-sm leading-relaxed text-muted-foreground">{cat.desc}</p>
                  <p className="mt-4 text-xs font-semibold uppercase tracking-wide text-mist/70">
                    {count} products
                  </p>
                </div>
              </Link>
            </StaggerItem>
          )
        })}
      </StaggerGroup>
    </section>
  )
}
