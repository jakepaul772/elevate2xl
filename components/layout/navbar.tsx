'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import { Menu, ShoppingBag, X } from 'lucide-react'
import { Logo } from '@/components/brand/logo'
import { useCart } from '@/components/cart/cart-provider'
import { cn } from '@/lib/utils'

const LINKS = [
  { href: '/shop', label: 'Shop' },
  { href: '/about', label: 'Science' },
  { href: '/faq', label: 'FAQ' },
  { href: '/contact', label: 'Contact' },
]

export function Navbar() {
  const pathname = usePathname()
  const { count, openCart } = useCart()
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
  }, [pathname])

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div
        className={cn(
          'transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]',
          scrolled ? 'glass-strong border-b border-border' : 'border-b border-transparent',
        )}
      >
        <nav
          className={cn(
            'mx-auto flex max-w-7xl items-center justify-between px-4 transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] sm:px-6',
            scrolled ? 'h-14' : 'h-20',
          )}
          aria-label="Primary"
        >
          <Link href="/" className="shrink-0" aria-label="ELEVATE2XL home">
            <Logo markClassName={cn('transition-all', scrolled ? 'h-7 w-7' : 'h-8 w-8')} />
          </Link>

          <div className="hidden items-center gap-1 md:flex">
            {LINKS.map((link) => {
              const active = pathname === link.href || (link.href !== '/' && pathname.startsWith(link.href))
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    'relative rounded-full px-4 py-2 text-sm font-medium transition-colors duration-200',
                    active ? 'text-mist' : 'text-muted-foreground hover:text-mist',
                  )}
                >
                  {link.label}
                  {active && <span className="absolute inset-x-4 -bottom-0.5 h-px bg-pink" />}
                </Link>
              )
            })}
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={openCart}
              className="glow-pink-hover relative inline-flex h-10 items-center gap-2 rounded-full bg-primary px-4 text-sm font-semibold text-primary-foreground"
            >
              <ShoppingBag className="h-4 w-4" />
              <span className="hidden sm:inline">Cart</span>
              {count > 0 && (
                <span className="tabular inline-flex h-5 min-w-5 items-center justify-center rounded-full bg-mist px-1.5 text-xs font-bold text-ink">
                  {count}
                </span>
              )}
            </button>
            <button
              type="button"
              onClick={() => setMobileOpen((v) => !v)}
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border text-mist md:hidden"
              aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={mobileOpen}
            >
              {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </nav>

        {mobileOpen && (
          <div className="glass-strong border-t border-border md:hidden">
            <div className="mx-auto flex max-w-7xl flex-col px-4 py-2 sm:px-6">
              {LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="rounded-lg px-3 py-3 text-base font-medium text-mist/90 transition-colors hover:bg-secondary/60"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
