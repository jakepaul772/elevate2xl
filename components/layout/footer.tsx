import Link from 'next/link'
import { Logo } from '@/components/brand/logo'
import { ComplianceNote } from '@/components/layout/compliance-note'

const COLUMNS = [
  {
    heading: 'Shop',
    links: [
      { href: '/shop?category=peptides', label: 'Peptides' },
      { href: '/shop?category=liquids', label: 'Liquids' },
      { href: '/shop?category=capsules', label: 'Capsules' },
      { href: '/shop', label: 'All Products' },
    ],
  },
  {
    heading: 'Company',
    links: [
      { href: '/about', label: 'Our Science' },
      { href: '/faq', label: 'FAQ' },
      { href: '/contact', label: 'Contact' },
    ],
  },
]

export function Footer() {
  return (
    <footer className="border-t border-border bg-ink">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr]">
          <div className="max-w-sm">
            <Logo />
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              Premium research peptides, liquids, and capsules — third-party tested for identity and purity, shipped
              cold and fast.
            </p>
            <div className="mt-5 flex flex-wrap gap-2 text-xs">
              {['99%+ Purity', '3rd-Party Tested', 'Cold-Chain Shipping'].map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-border px-3 py-1 font-medium tracking-wide text-mist/80"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {COLUMNS.map((col) => (
            <div key={col.heading}>
              <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                {col.heading}
              </h3>
              <ul className="mt-4 space-y-3">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-mist/85 transition-colors duration-200 hover:text-pink"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12">
          <ComplianceNote />
        </div>

        <div className="mt-8 flex flex-col gap-3 border-t border-border pt-6 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} ELEVATE2XL. All rights reserved.</p>
          <p className="tracking-wide">Must be 18 or older. Products not sold for human or veterinary use.</p>
        </div>
      </div>
    </footer>
  )
}
