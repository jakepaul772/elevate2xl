'use client'

import Link from 'next/link'
import { motion } from 'motion/react'
import { ArrowRight, ShieldCheck } from 'lucide-react'
import { LogoMark } from '@/components/brand/logo'
import { MoleculeField } from '@/components/hero/molecule-field'

const ease = [0.22, 1, 0.36, 1] as const

export function HeroSection() {
  return (
    <section className="relative overflow-hidden">
      <div className="mesh-hero absolute inset-0" aria-hidden="true" />
      <div className="absolute inset-0" aria-hidden="true">
        <MoleculeField className="h-full w-full opacity-70" />
      </div>
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-b from-transparent to-background" />

      <div className="relative mx-auto flex max-w-4xl flex-col items-center px-4 py-24 text-center sm:px-6 sm:py-32">
        <motion.div
          initial={{ opacity: 0, scale: 0.8, rotate: -8 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 0.8, ease }}
          className="glass flex h-20 w-20 items-center justify-center rounded-2xl"
        >
          <LogoMark className="h-11 w-11 text-mist" />
        </motion.div>

        <motion.span
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15, ease }}
          className="mt-8 inline-flex items-center gap-2 rounded-full border border-border bg-secondary/40 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.18em] text-mist/80"
        >
          <ShieldCheck className="h-3.5 w-3.5 text-pink" />
          99%+ Purity · Third-Party Tested
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25, ease }}
          className="mt-6 text-balance font-display text-5xl font-bold leading-[1.02] tracking-tight text-mist sm:text-7xl"
        >
          Research-grade <span className="text-gradient">peptides</span>, engineered for the elite.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.35, ease }}
          className="mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground"
        >
          ELEVATE2XL supplies premium peptides, liquids, and capsules — rigorously assayed for identity and purity, then
          shipped cold and fast to your lab.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.45, ease }}
          className="mt-9 flex flex-col items-center gap-3 sm:flex-row"
        >
          <Link
            href="/shop"
            className="glow-pink glow-pink-hover group inline-flex h-12 items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-base font-semibold text-primary-foreground"
          >
            Shop Peptides
            <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
          </Link>
          <Link
            href="/about"
            className="inline-flex h-12 items-center gap-2 rounded-full border border-border px-7 py-3.5 text-base font-semibold text-mist transition-colors duration-200 hover:bg-secondary/50"
          >
            Our Science
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
