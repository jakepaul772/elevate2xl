import type { Metadata } from 'next'
import { ShopClient } from '@/components/shop/shop-client'
import type { Category } from '@/lib/products'

export const metadata: Metadata = {
  title: 'Shop',
  description: 'Browse premium research peptides, liquids, and capsules — filterable and sortable, all third-party tested.',
}

const VALID: (Category | 'all')[] = ['all', 'peptides', 'liquids', 'capsules']

export default async function ShopPage({
  searchParams,
}: {
  searchParams: Promise<{ category?: string }>
}) {
  const { category } = await searchParams
  const initial = VALID.includes(category as Category) ? (category as Category) : 'all'
  return <ShopClient initialCategory={initial} />
}
