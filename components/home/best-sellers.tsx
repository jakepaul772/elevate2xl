'use client'

import Link from 'next/link'
import { useRef } from 'react'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import { getBestSellers } from '@/lib/products'
import { ProductCard } from '@/components/product/product-card'
import { Reveal } from '@/components/motion/reveal'

export function BestSellers() {
  const scroller = useRef<HTMLDivElement>(null)
  const items = getBestSellers()

  function scrollBy(dir: 1 | -1) {
    scroller.current?.scrollBy({ left: dir * 320, behavior: 'smooth' })
  }

  return (
    <section className="bg-ink/50 py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <Reveal>
          <div className="flex items-end justify-between gap-4">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-pink">Most researched</p>
              <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-mist sm:text-4xl">
                Best sellers
              </h2>
            </div>
            <div className="hidden gap-2 sm:flex">
              <button
                type="button"
                onClick={() => scrollBy(-1)}
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border text-mist transition-colors hover:bg-secondary/50"
                aria-label="Scroll left"
              >
                <ArrowLeft className="h-4 w-4" />
              </button>
              <button
                type="button"
                onClick={() => scrollBy(1)}
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border text-mist transition-colors hover:bg-secondary/50"
                aria-label="Scroll right"
              >
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </Reveal>

        <div
          ref={scroller}
          className="no-scrollbar mt-10 flex snap-x snap-mandatory gap-5 overflow-x-auto pb-2"
        >
          {items.map((product) => (
            <div key={product.slug} className="w-[280px] shrink-0 snap-start">
              <ProductCard product={product} />
            </div>
          ))}
        </div>

        <Reveal delay={0.1}>
          <div className="mt-8 flex justify-center">
            <Link
              href="/shop"
              className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-semibold text-mist transition-colors hover:bg-secondary/50"
            >
              View all products
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
