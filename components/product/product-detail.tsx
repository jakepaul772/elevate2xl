'use client'

import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { Check, Minus, Plus, ShieldCheck, ShoppingBag, Snowflake, Thermometer } from 'lucide-react'
import { CATEGORY_LABELS, formatPrice, storageFor, type Product } from '@/lib/products'
import { useCart } from '@/components/cart/cart-provider'
import { ComplianceNote } from '@/components/layout/compliance-note'
import { cn } from '@/lib/utils'

export function ProductDetail({ product, variants }: { product: Product; variants: Product[] }) {
  const router = useRouter()
  const { add } = useCart()
  const [qty, setQty] = useState(1)
  const [added, setAdded] = useState(false)

  function handleAdd() {
    add(product.slug, qty)
    setAdded(true)
    setTimeout(() => setAdded(false), 1200)
  }

  const glyph = product.baseName.replace(/[^A-Za-z0-9]/g, '').slice(0, 3).toUpperCase()

  return (
    <div className="mx-auto max-w-7xl px-4 py-10 pb-28 sm:px-6 lg:pb-14">
      {/* Breadcrumb */}
      <nav className="flex items-center gap-2 text-sm text-muted-foreground" aria-label="Breadcrumb">
        <Link href="/shop" className="transition-colors hover:text-mist">
          Shop
        </Link>
        <span aria-hidden="true">/</span>
        <Link href={`/shop?category=${product.category}`} className="transition-colors hover:text-mist">
          {CATEGORY_LABELS[product.category]}
        </Link>
        <span aria-hidden="true">/</span>
        <span className="text-mist">{product.baseName}</span>
      </nav>

      <div className="mt-8 grid gap-10 lg:grid-cols-2">
        {/* Visual */}
        <div className="glass relative flex aspect-square items-center justify-center overflow-hidden rounded-3xl">
          <div className="mesh-hero absolute inset-0 opacity-60" aria-hidden="true" />
          <div className="absolute -left-8 top-10 h-40 w-40 rounded-full bg-pink/20 blur-3xl" aria-hidden="true" />
          <div className="relative text-center">
            <span className="font-display text-7xl font-bold text-mist sm:text-8xl">{glyph}</span>
            <p className="mt-3 text-sm font-medium tracking-wide text-mist/70">{product.size}</p>
          </div>
          <span className="absolute bottom-5 right-5 rounded-full bg-ink/70 px-3 py-1 text-xs font-semibold text-mist">
            {product.purity}% purity
          </span>
        </div>

        {/* Info */}
        <div>
          <div className="flex items-center gap-2">
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-pink">
              {CATEGORY_LABELS[product.category]}
            </span>
            {product.bestSeller && (
              <span className="rounded-full bg-pink/15 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide text-pink">
                Best Seller
              </span>
            )}
          </div>

          <h1 className="mt-3 text-balance font-display text-4xl font-bold tracking-tight text-mist">
            {product.baseName}
          </h1>
          <p className="mt-2 text-lg text-muted-foreground">{product.size}</p>

          <p className="tabular mt-6 font-display text-4xl font-bold text-mist">{formatPrice(product.price)}</p>

          {/* Variant selector */}
          {variants.length > 1 && (
            <div className="mt-8">
              <p className="text-sm font-semibold text-mist">Select size / dose</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {variants.map((v) => (
                  <button
                    key={v.slug}
                    type="button"
                    onClick={() => router.push(`/product/${v.slug}`)}
                    className={cn(
                      'rounded-xl border px-4 py-2.5 text-sm font-semibold transition-all duration-200',
                      v.slug === product.slug
                        ? 'border-pink bg-pink/10 text-mist'
                        : 'border-border text-muted-foreground hover:border-pink/40 hover:text-mist',
                    )}
                  >
                    <span className="block">{v.size}</span>
                    <span className="tabular text-xs text-muted-foreground">{formatPrice(v.price)}</span>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Qty + add */}
          <div className="mt-8 flex items-center gap-3">
            <div className="flex items-center gap-1 rounded-full border border-border p-1">
              <button
                type="button"
                onClick={() => setQty((q) => Math.max(1, q - 1))}
                className="inline-flex h-9 w-9 items-center justify-center rounded-full text-mist hover:bg-secondary/60"
                aria-label="Decrease quantity"
              >
                <Minus className="h-4 w-4" />
              </button>
              <span className="tabular w-8 text-center text-sm font-semibold text-mist">{qty}</span>
              <button
                type="button"
                onClick={() => setQty((q) => Math.min(99, q + 1))}
                className="inline-flex h-9 w-9 items-center justify-center rounded-full text-mist hover:bg-secondary/60"
                aria-label="Increase quantity"
              >
                <Plus className="h-4 w-4" />
              </button>
            </div>
            <button
              type="button"
              onClick={handleAdd}
              className={cn(
                'glow-pink glow-pink-hover inline-flex h-12 flex-1 items-center justify-center gap-2 rounded-full text-base font-semibold transition-all duration-200',
                added ? 'bg-mist text-ink' : 'bg-primary text-primary-foreground',
              )}
            >
              {added ? <Check className="h-5 w-5" /> : <ShoppingBag className="h-5 w-5" />}
              {added ? 'Added to cart' : 'Add to cart'}
            </button>
          </div>

          {/* Specs */}
          <dl className="mt-8 grid grid-cols-2 gap-3">
            <div className="glass rounded-xl p-4">
              <dt className="flex items-center gap-2 text-xs font-medium uppercase tracking-wide text-muted-foreground">
                <ShieldCheck className="h-4 w-4 text-pink" /> Purity
              </dt>
              <dd className="tabular mt-1 font-display text-xl font-bold text-mist">{product.purity}%</dd>
            </div>
            <div className="glass rounded-xl p-4">
              <dt className="flex items-center gap-2 text-xs font-medium uppercase tracking-wide text-muted-foreground">
                <Thermometer className="h-4 w-4 text-pink" /> Testing
              </dt>
              <dd className="mt-1 text-sm font-semibold text-mist">HPLC + MS, 3rd-party</dd>
            </div>
          </dl>

          {/* Storage */}
          <div className="glass mt-4 rounded-xl p-4">
            <p className="flex items-center gap-2 text-sm font-semibold text-mist">
              <Snowflake className="h-4 w-4 text-pink" /> Storage & handling
            </p>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{storageFor(product.category)}</p>
          </div>

          <div className="mt-4">
            <ComplianceNote compact />
          </div>
        </div>
      </div>

      {/* Sticky mobile add bar */}
      <div className="glass-strong fixed inset-x-0 bottom-0 z-40 flex items-center justify-between gap-3 border-t border-border px-4 py-3 lg:hidden">
        <div>
          <p className="text-xs text-muted-foreground">{product.baseName}</p>
          <p className="tabular font-display text-lg font-bold text-mist">{formatPrice(product.price * qty)}</p>
        </div>
        <button
          type="button"
          onClick={handleAdd}
          className={cn(
            'inline-flex h-11 flex-1 items-center justify-center gap-2 rounded-full text-sm font-semibold',
            added ? 'bg-mist text-ink' : 'bg-primary text-primary-foreground',
          )}
        >
          {added ? <Check className="h-4 w-4" /> : <ShoppingBag className="h-4 w-4" />}
          {added ? 'Added' : 'Add to cart'}
        </button>
      </div>
    </div>
  )
}
