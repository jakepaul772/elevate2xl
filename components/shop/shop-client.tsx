'use client'

import { useMemo, useState } from 'react'
import { Search } from 'lucide-react'
import { CATEGORY_LABELS, products, type Category, type Product } from '@/lib/products'
import { ProductCard } from '@/components/product/product-card'
import { StaggerGroup, StaggerItem } from '@/components/motion/reveal'
import { cn } from '@/lib/utils'

type SortKey = 'featured' | 'price-asc' | 'price-desc' | 'name'

type VariantGroup = {
  key: string
  category: string
  baseName: string
  variants: Product[]
  minPrice: number
  bestSeller: boolean
}

const CATEGORY_TABS: { key: Category | 'all'; label: string }[] = [
  { key: 'all', label: 'All' },
  { key: 'peptides', label: CATEGORY_LABELS.peptides },
  { key: 'liquids', label: CATEGORY_LABELS.liquids },
  { key: 'capsules', label: CATEGORY_LABELS.capsules },
]

const SORTS: { key: SortKey; label: string }[] = [
  { key: 'featured', label: 'Featured' },
  { key: 'price-asc', label: 'Price: Low to High' },
  { key: 'price-desc', label: 'Price: High to Low' },
  { key: 'name', label: 'Name: A–Z' },
]

function groupProducts(list: Product[]): VariantGroup[] {
  const map = new Map<string, VariantGroup>()
  for (const p of list) {
    const key = `${p.category}::${p.baseName}`
    let g = map.get(key)
    if (!g) {
      g = { key, category: p.category, baseName: p.baseName, variants: [], minPrice: Infinity, bestSeller: false }
      map.set(key, g)
    }
    g.variants.push(p)
    g.minPrice = Math.min(g.minPrice, p.price)
    if (p.bestSeller) g.bestSeller = true
  }
  // keep dosage order stable (ascending price within each group looks odd for GLPs,
  // so preserve original catalog order instead)
  return Array.from(map.values())
}

export function ShopClient({ initialCategory }: { initialCategory: Category | 'all' }) {
  const [category, setCategory] = useState<Category | 'all'>(initialCategory)
  const [query, setQuery] = useState('')
  const [sort, setSort] = useState<SortKey>('featured')

  const filteredGroups = useMemo(() => {
    let list: Product[] = [...products]
    if (category !== 'all') list = list.filter((p) => p.category === category)
    if (query.trim()) {
      const q = query.trim().toLowerCase()
      list = list.filter(
        (p) =>
          p.name.toLowerCase().includes(q) ||
          p.baseName.toLowerCase().includes(q) ||
          (p.searchKeywords ?? []).some((k) => k.toLowerCase().includes(q)),
      )
    }

    const groups = groupProducts(list)

    switch (sort) {
      case 'price-asc':
        groups.sort((a, b) => a.minPrice - b.minPrice)
        break
      case 'price-desc':
        groups.sort((a, b) => b.minPrice - a.minPrice)
        break
      case 'name':
        groups.sort((a, b) => a.baseName.localeCompare(b.baseName))
        break
      default:
        groups.sort((a, b) => Number(b.bestSeller) - Number(a.bestSeller))
    }
    return groups
  }, [category, query, sort])

  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6">
      <header className="max-w-2xl">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-pink">Catalog</p>
        <h1 className="mt-3 font-display text-4xl font-bold tracking-tight text-mist sm:text-5xl">
          Shop research materials
        </h1>
        <p className="mt-4 leading-relaxed text-muted-foreground">
          {products.length} products across peptides, liquids, and capsules — every lot third-party tested for identity
          and purity.
        </p>
      </header>

      {/* Controls */}
      <div className="mt-10 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        <div className="no-scrollbar -mx-1 flex gap-2 overflow-x-auto px-1">
          {CATEGORY_TABS.map((tab) => (
            <button
              key={tab.key}
              type="button"
              onClick={() => setCategory(tab.key)}
              className={cn(
                'shrink-0 rounded-full px-4 py-2 text-sm font-semibold transition-all duration-200',
                category === tab.key
                  ? 'bg-primary text-primary-foreground'
                  : 'border border-border text-muted-foreground hover:text-mist',
              )}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
          <div className="relative">
            <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <input
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search products…"
              className="glass h-11 w-full rounded-full pl-10 pr-4 text-sm text-mist placeholder:text-muted-foreground focus:border-pink/50 focus:outline-none sm:w-64"
              aria-label="Search products"
            />
          </div>
          <select
            value={sort}
            onChange={(e) => setSort(e.target.value as SortKey)}
            className="glass h-11 rounded-full px-4 text-sm text-mist focus:border-pink/50 focus:outline-none"
            aria-label="Sort products"
          >
            {SORTS.map((s) => (
              <option key={s.key} value={s.key} className="bg-card text-mist">
                {s.label}
              </option>
            ))}
          </select>
        </div>
      </div>

      <p className="mt-6 text-sm text-muted-foreground">
        Showing <span className="tabular font-semibold text-mist">{filteredGroups.length}</span> products
      </p>

      {filteredGroups.length === 0 ? (
        <div className="glass mt-6 rounded-2xl px-6 py-16 text-center">
          <p className="text-muted-foreground">No products match your search.</p>
        </div>
      ) : (
        <StaggerGroup key={category} className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {filteredGroups.map((group) => (
            <StaggerItem key={group.key}>
              <ProductCard product={group.variants[0]} variants={group.variants} />
            </StaggerItem>
          ))}
        </StaggerGroup>
      )}
    </div>
  )
}
