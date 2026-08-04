'use client'

import type { ReactNode } from 'react'
import { Navbar } from '@/components/layout/navbar'
import { Footer } from '@/components/layout/footer'
import { AgeGate } from '@/components/layout/age-gate'
import { CartDrawer } from '@/components/cart/cart-drawer'
import { PageTransition } from '@/components/motion/page-transition'

export function SiteChrome({ children }: { children: ReactNode }) {
  return (
    <>
      <AgeGate />
      <Navbar />
      <CartDrawer />
      <main className="min-h-screen pt-20">
        <PageTransition>{children}</PageTransition>
      </main>
      <Footer />
    </>
  )
}
