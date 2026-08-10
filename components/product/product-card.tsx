'use client'

import Link from 'next/link'
import { Plus, Check, ChevronDown } from 'lucide-react'
import { useState } from 'react'
import { formatPrice, storageFor, type Product } from '@/lib/products'
import { useCart } from '@/components/cart/cart-provider'
import { Logo } from '@/components/brand/logo'
import { cn } from '@/lib/utils'

// Full display name: strip any parenthetical suffix (e.g. "(Ostarine)"),
// keep dashes/plus/slashes intact, uppercase. No more 4-letter truncation.
function displayCode(baseName: string): string {
  return baseName.replace(/\s*\([^)]*\)\s*$/, '').toUpperCase()
}

export function ProductCard({ product, variants }: { product: Product; variants?: Product[] }) {
  const { add } = useCart()
  const [added, setAdded] = useState(false)

  const options = variants && variants.length > 0 ? variants : [product]
  const [selectedIdx, setSelectedIdx] = useState(() =>
    Math.max(
      0,
      options.findIndex((v) => v.slug === product.slug),
    ),
  )
  const current = options[selectedIdx] ?? options[0]
  const hasVariants = options.length > 1

  function quickAdd(e: React.MouseEvent) {
    e.preventDefault()
    e.stopPropagation()
    add(current.slug, 1)
    setAdded(true)
    setTimeout(() => setAdded(false), 1200)
  }

  function onSelectChange(e: React.ChangeEvent<HTMLSelectElement>) {
    setSelectedIdx(Number(e.target.value))
  }

  function stopNav(e: React.SyntheticEvent) {
    e.preventDefault()
    e.stopPropagation()
  }

  const storageInfo = storageFor(current.category)

  return (
    <Link
      href={`/product/${current.slug}`}
      className="group label-gradient glow-pink-hover relative flex flex-col overflow-hidden rounded-2xl p-6 transition-colors hover:border-pink/40"
    >
      {/* Label Header: Logo + DNA strand decoration */}
      <div className="mb-6 flex items-center justify-between">
        <Logo showWord={true} markClassName="h-6 w-6" className="text-xs" />
        <div className="h-1 w-20 rounded-full bg-gradient-to-r from-pink/60 to-pink/20" />
      </div>

      {/* Main Product Name */}
      <div className="mb-4">
        <h2 className="font-display text-3xl font-bold text-mist leading-snug break-words">
          {displayCode(current.baseName)}
        </h2>
      </div>

      {/* Product Details Section */}
      <div className="mb-6 space-y-2 border-t border-pink/20 pt-4">
        <div className="flex items-baseline justify-between gap-2">
          <span className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
            {current.baseName}
          </span>
          <span className="shrink-0 text-xs font-medium text-muted-foreground">
            {current.purity}% PURITY
          </span>
        </div>

        {hasVariants ? (
          <div className="relative" onClick={stopNav}>
            <select
              value={selectedIdx}
              onChange={onSelectChange}
              onClick={stopNav}
              className="glass w-full appearance-none rounded-lg border border-pink/20 bg-ink/40 px-3 py-2 pr-8 text-lg font-semibold text-mist outline-none focus:border-pink/50"
              aria-label={`Select ${current.baseName} dosage`}
            >
              {options.map((v, i) => (
                <option key={v.slug} value={i} className="bg-card text-mist">
                  {v.dosage}
                </option>
              ))}
            </select>
            <ChevronDown className="pointer-events-none absolute right-2.5 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          </div>
        ) : (
          <p className="text-lg font-semibold text-mist">{current.dosage}</p>
        )}
      </div>

      {/* Storage Instructions */}
      <div className="mb-6 rounded-lg bg-ink/40 p-3 border border-pink/10">
        <div className="flex items-start gap-2">
          <span className="text-pink text-lg mt-0.5">❄️</span>
          <p className="text-xs leading-relaxed text-muted-foreground">{storageInfo}</p>
        </div>
      </div>

      {/* Branding Footer */}
      <div className="mb-4 flex items-center justify-between text-xs text-muted-foreground">
        <span className="font-semibold uppercase tracking-wider">RESEARCH USE ONLY</span>
        <span>WWW.E2XL.ORG</span>
      </div>

      {/* Bottom Decoration Line */}
      <div className="mb-4 h-1 w-full rounded-full bg-gradient-to-r from-pink/60 via-pink/30 to-secondary/40" />

      {/* Price & Add Button */}
      <div className="flex items-center justify-between mt-auto pt-4 border-t border-pink/10">
        <span className="font-display text-2xl font-bold text-mist">{formatPrice(current.price)}</span>
        <button
          type="button"
          onClick={quickAdd}
          className={cn(
            'inline-flex h-10 items-center gap-2 rounded-full px-4 text-sm font-semibold transition-all duration-200',
            added ? 'bg-mist text-ink' : 'bg-primary text-primary-foreground hover:brightness-110',
          )}
          aria-label={`Add ${current.name} to cart`}
        >
          {added ? <Check className="h-5 w-5" /> : <Plus className="h-5 w-5" />}
          {added ? 'Added' : 'Add'}
        </button>
      </div>
    </Link>
  )
}
