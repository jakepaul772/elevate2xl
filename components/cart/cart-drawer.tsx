'use client'

import { AnimatePresence, motion } from 'motion/react'
import Link from 'next/link'
import { Minus, Plus, ShoppingBag, Trash2, X } from 'lucide-react'
import { useCart } from '@/components/cart/cart-provider'
import { formatPrice } from '@/lib/products'

export function CartDrawer() {
  const { isOpen, closeCart, detailed, subtotal, setQty, remove, count } = useCart()

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            className="fixed inset-0 z-[90] bg-ink/70 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={closeCart}
            aria-hidden="true"
          />
          <motion.aside
            className="glass-strong fixed inset-y-0 right-0 z-[95] flex w-full max-w-md flex-col border-l border-border"
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            role="dialog"
            aria-modal="true"
            aria-label="Shopping cart"
          >
            <div className="flex items-center justify-between border-b border-border px-5 py-4">
              <h2 className="flex items-center gap-2 font-display text-lg font-semibold text-mist">
                <ShoppingBag className="h-5 w-5 text-pink" />
                Your Cart {count > 0 && <span className="text-muted-foreground">({count})</span>}
              </h2>
              <button
                type="button"
                onClick={closeCart}
                className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border text-mist hover:bg-secondary/50"
                aria-label="Close cart"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            {detailed.length === 0 ? (
              <div className="flex flex-1 flex-col items-center justify-center gap-4 px-6 text-center">
                <div className="glass flex h-16 w-16 items-center justify-center rounded-full">
                  <ShoppingBag className="h-7 w-7 text-muted-foreground" />
                </div>
                <p className="text-muted-foreground">Your cart is empty.</p>
                <Link
                  href="/shop"
                  onClick={closeCart}
                  className="glow-pink-hover rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground"
                >
                  Browse products
                </Link>
              </div>
            ) : (
              <>
                <ul className="flex-1 divide-y divide-border overflow-y-auto px-5">
                  {detailed.map(({ product, qty }) => (
                    <li key={product.slug} className="flex gap-3 py-4">
                      <div className="glass flex h-16 w-16 shrink-0 items-center justify-center rounded-lg">
                        <span className="font-display text-xs font-bold text-pink">
                          {product.baseName.slice(0, 2).toUpperCase()}
                        </span>
                      </div>
                      <div className="min-w-0 flex-1">
                        <p className="truncate text-sm font-semibold text-mist">{product.name}</p>
                        <p className="text-xs text-muted-foreground">{product.size}</p>
                        <div className="mt-2 flex items-center justify-between">
                          <div className="flex items-center gap-1 rounded-full border border-border">
                            <button
                              type="button"
                              onClick={() => setQty(product.slug, qty - 1)}
                              className="inline-flex h-7 w-7 items-center justify-center rounded-full text-mist hover:bg-secondary/60"
                              aria-label={`Decrease ${product.name}`}
                            >
                              <Minus className="h-3.5 w-3.5" />
                            </button>
                            <span className="tabular w-6 text-center text-sm text-mist">{qty}</span>
                            <button
                              type="button"
                              onClick={() => setQty(product.slug, qty + 1)}
                              className="inline-flex h-7 w-7 items-center justify-center rounded-full text-mist hover:bg-secondary/60"
                              aria-label={`Increase ${product.name}`}
                            >
                              <Plus className="h-3.5 w-3.5" />
                            </button>
                          </div>
                          <span className="tabular text-sm font-semibold text-mist">
                            {formatPrice(product.price * qty)}
                          </span>
                        </div>
                      </div>
                      <button
                        type="button"
                        onClick={() => remove(product.slug)}
                        className="self-start text-muted-foreground transition-colors hover:text-destructive"
                        aria-label={`Remove ${product.name}`}
                      >
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </li>
                  ))}
                </ul>

                <div className="border-t border-border px-5 py-5">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">Subtotal</span>
                    <span className="tabular font-display text-xl font-bold text-mist">{formatPrice(subtotal)}</span>
                  </div>
                  <p className="mt-1 text-xs text-muted-foreground">Shipping & taxes calculated at checkout.</p>
                  <Link
                    href="/cart"
                    onClick={closeCart}
                    className="glow-pink glow-pink-hover mt-4 flex h-12 items-center justify-center rounded-full bg-primary text-sm font-semibold text-primary-foreground"
                  >
                    Checkout
                  </Link>
                </div>
              </>
            )}
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  )
}
