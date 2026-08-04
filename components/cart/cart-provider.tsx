'use client'

import { createContext, useContext, useEffect, useMemo, useState, useCallback, type ReactNode } from 'react'
import { products, type Product } from '@/lib/products'

export type CartItem = {
  slug: string
  qty: number
}

type CartContextValue = {
  items: CartItem[]
  count: number
  subtotal: number
  isOpen: boolean
  add: (slug: string, qty?: number) => void
  remove: (slug: string) => void
  setQty: (slug: string, qty: number) => void
  clear: () => void
  openCart: () => void
  closeCart: () => void
  detailed: { product: Product; qty: number }[]
}

const CartContext = createContext<CartContextValue | null>(null)
const STORAGE_KEY = 'e2xl-cart-v1'

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([])
  const [isOpen, setIsOpen] = useState(false)
  const [hydrated, setHydrated] = useState(false)

  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY)
      if (raw) setItems(JSON.parse(raw))
    } catch {
      // ignore malformed storage
    }
    setHydrated(true)
  }, [])

  useEffect(() => {
    if (!hydrated) return
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(items))
    } catch {
      // ignore quota errors
    }
  }, [items, hydrated])

  const add = useCallback((slug: string, qty = 1) => {
    setItems((prev) => {
      const existing = prev.find((i) => i.slug === slug)
      if (existing) {
        return prev.map((i) => (i.slug === slug ? { ...i, qty: Math.min(99, i.qty + qty) } : i))
      }
      return [...prev, { slug, qty: Math.min(99, qty) }]
    })
    setIsOpen(true)
  }, [])

  const remove = useCallback((slug: string) => {
    setItems((prev) => prev.filter((i) => i.slug !== slug))
  }, [])

  const setQty = useCallback((slug: string, qty: number) => {
    setItems((prev) =>
      qty <= 0
        ? prev.filter((i) => i.slug !== slug)
        : prev.map((i) => (i.slug === slug ? { ...i, qty: Math.min(99, qty) } : i)),
    )
  }, [])

  const clear = useCallback(() => setItems([]), [])
  const openCart = useCallback(() => setIsOpen(true), [])
  const closeCart = useCallback(() => setIsOpen(false), [])

  const detailed = useMemo(() => {
    return items
      .map((i) => {
        const product = products.find((p) => p.slug === i.slug)
        return product ? { product, qty: i.qty } : null
      })
      .filter((v): v is { product: Product; qty: number } => v !== null)
  }, [items])

  const count = useMemo(() => items.reduce((n, i) => n + i.qty, 0), [items])
  const subtotal = useMemo(() => detailed.reduce((sum, d) => sum + d.product.price * d.qty, 0), [detailed])

  const value: CartContextValue = {
    items,
    count,
    subtotal,
    isOpen,
    add,
    remove,
    setQty,
    clear,
    openCart,
    closeCart,
    detailed,
  }

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

export function useCart() {
  const ctx = useContext(CartContext)
  if (!ctx) throw new Error('useCart must be used within CartProvider')
  return ctx
}
