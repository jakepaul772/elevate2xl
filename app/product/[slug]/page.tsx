import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getProduct, getRelated, getVariants, products, formatPrice } from '@/lib/products'
import { ProductDetail } from '@/components/product/product-detail'
import { RelatedProducts } from '@/components/product/related-products'

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const product = getProduct(slug)
  if (!product) return { title: 'Product not found' }
  return {
    title: product.name,
    description: `${product.name} — ${product.purity}% purity, third-party tested. ${formatPrice(product.price)}. For research use only.`,
  }
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const product = getProduct(slug)
  if (!product) notFound()

  const variants = getVariants(product)
  const related = getRelated(product, 4)

  return (
    <>
      <ProductDetail product={product} variants={variants} />
      <RelatedProducts items={related} />
    </>
  )
}
