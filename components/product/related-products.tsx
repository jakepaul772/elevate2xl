import type { Product } from '@/lib/products'
import { ProductCard } from '@/components/product/product-card'
import { Reveal, StaggerGroup, StaggerItem } from '@/components/motion/reveal'

export function RelatedProducts({ items }: { items: Product[] }) {
  if (items.length === 0) return null
  return (
    <section className="mx-auto max-w-7xl px-4 pb-20 sm:px-6">
      <Reveal>
        <h2 className="font-display text-2xl font-bold tracking-tight text-mist sm:text-3xl">You may also research</h2>
      </Reveal>
      <StaggerGroup className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {items.map((product) => (
          <StaggerItem key={product.slug}>
            <ProductCard product={product} />
          </StaggerItem>
        ))}
      </StaggerGroup>
    </section>
  )
}
