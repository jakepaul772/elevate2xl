'use client'

import Link from 'next/link'
import { Plus, Check } from 'lucide-react'
import { useState } from 'react'
import { CATEGORY_LABELS, formatPrice, type Product } from '@/lib/products'
import { useCart } from '@/components/cart/cart-provider'
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

  return (
    <Link
      href={`/product/${product.slug}`}
      className="group glass glow-pink-hover relative flex flex-col overflow-hidden rounded-2xl p-5 transition-colors hover:border-pink/40"
    >
      <div className="flex items-center justify-between">
        <span className="text-[11px] font-semibold uppercase tracking-[0.16em] text-muted-foreground">
          {CATEGORY_LABELS[product.category]}
        </span>
        {product.bestSeller && (
          <span className="rounded-full bg-pink/15 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide text-pink">
            Best Seller
          </span>
        )}
      </div>

      {/* Visual: molecule glyph tile */}
      <div className="relative mt-4 flex h-32 items-center justify-center overflow-hidden rounded-xl bg-gradient-to-br from-secondary/70 to-ink">
        <div className="absolute -right-6 -top-6 h-24 w-24 rounded-full bg-pink/20 blur-2xl transition-opacity duration-300 group-hover:opacity-100" />
        <span className="font-display text-4xl font-bold text-mist/90">
          {product.baseName.replace(/[^A-Za-z0-9]/g, '').slice(0, 3).toUpperCase()}
        </span>
        <span className="absolute bottom-2 right-3 rounded-full bg-ink/70 px-2 py-0.5 text-[10px] font-medium text-mist/70">
          {product.purity}% pure
        </span>
      </div>

      <h3 className="mt-4 text-pretty font-display text-base font-semibold leading-tight text-mist">
        {product.baseName}
      </h3>
      <p className="text-sm text-muted-foreground">{product.size}</p>

      <div className="mt-4 flex items-center justify-between">
        <span className="tabular font-display text-lg font-bold text-mist">{formatPrice(product.price)}</span>
        <button
          type="button"
          onClick={quickAdd}
          className={cn(
            'inline-flex h-9 items-center gap-1.5 rounded-full px-3.5 text-sm font-semibold transition-all duration-200',
            added ? 'bg-mist text-ink' : 'bg-primary text-primary-foreground hover:brightness-110',
          )}
          aria-label={`Add ${product.name} to cart`}
        >
          {added ? <Check className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
          {added ? 'Added' : 'Add'}
        </button>
      </div>
    </Link>
  )
}
