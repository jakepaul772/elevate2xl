'use client'

import Link from 'next/link'
import { Plus, Check } from 'lucide-react'
import { useState } from 'react'
import { formatPrice, shortDose, storageFor, type Product } from '@/lib/products'
import { useCart } from '@/components/cart/cart-provider'
import { Logo } from '@/components/brand/logo'
import { cn } from '@/lib/utils'

export function ProductCard({ product }: { product: Product }) {
  const { add } = useCart()
  const [added, setAdded] = useState(false)

  function quickAdd(e: React.MouseEvent) {
    e.preventDefault()
    e.stopPropagation()
    add(product.slug, 1)
    setAdded(true)
    setTimeout(() => setAdded(false), 1200)
  }

  // Extract storage info for this product's category
  const storageInfo = storageFor(product.category)

  return (
    <Link
      href={`/product/${product.slug}`}
      className="group label-gradient glow-pink-hover relative flex flex-col overflow-hidden rounded-2xl p-6 transition-colors hover:border-pink/40"
    >
      {/* Label Header: Logo + DNA strand decoration */}
      <div className="mb-6 flex items-center justify-between">
        <Logo showWord={true} markClassName="h-6 w-6" className="text-xs" />
        <div className="h-1 w-20 rounded-full bg-gradient-to-r from-pink/60 to-pink/20" />
      </div>

      {/* Main Product Name - Large & Bold */}
      <div className="mb-4">
        <h2 className="font-display text-5xl font-bold text-mist leading-tight">
          {product.baseName.replace(/[^A-Za-z0-9]/g, '').slice(0, 4).toUpperCase()}{' '}
          {shortDose(product.dosage)}
        </h2>
      </div>

      {/* Product Details Section */}
      <div className="mb-6 space-y-2 border-t border-pink/20 pt-4">
        <div className="flex items-baseline justify-between">
          <span className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
            {product.baseName}
          </span>
          <span className="text-xs font-medium text-muted-foreground">
            {product.purity}% PURITY
          </span>
        </div>
        <p className="text-lg font-semibold text-mist">{product.size}</p>
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
        <span className="font-display text-2xl font-bold text-mist">{formatPrice(product.price)}</span>
        <button
          type="button"
          onClick={quickAdd}
          className={cn(
            'inline-flex h-10 items-center gap-2 rounded-full px-4 text-sm font-semibold transition-all duration-200',
            added ? 'bg-mist text-ink' : 'bg-primary text-primary-foreground hover:brightness-110',
          )}
          aria-label={`Add ${product.name} to cart`}
        >
          {added ? <Check className="h-5 w-5" /> : <Plus className="h-5 w-5" />}
          {added ? 'Added' : 'Add'}
        </button>
      </div>
    </Link>
  )
}
