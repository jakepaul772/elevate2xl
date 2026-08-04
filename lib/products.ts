export type Category = 'peptides' | 'liquids' | 'capsules'

export type Product = {
  slug: string
  name: string
  baseName: string
  size: string
  category: Category
  price: number
  purity: number
  group?: string
  bestSeller?: boolean
}

export const CATEGORY_LABELS: Record<Category, string> = {
  peptides: 'Peptides',
  liquids: 'Liquids',
  capsules: 'Capsules',
}

export const CATEGORY_BLURB: Record<Category, string> = {
  peptides: 'Lyophilized research peptides in single- and multi-dose vials.',
  liquids: 'Pre-mixed research solutions in precision-dosed dropper bottles.',
  capsules: 'Encapsulated research compounds for controlled oral studies.',
}

function slugify(input: string): string {
  return input
    .toLowerCase()
    .replace(/\+/g, ' plus ')
    .replace(/%/g, ' pct ')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '')
}

type Seed = {
  base: string
  size: string
  price: number
  category: Category
  purity: number
  group?: string
  bestSeller?: boolean
}

const seeds: Seed[] = [
  // PEPTIDES
  { base: 'Tesamorelin', size: '10mg', price: 70, category: 'peptides', purity: 99.2 },
  { base: 'CJC / Ipamorelin', size: '10mg', price: 60, category: 'peptides', purity: 99.4, bestSeller: true },
  { base: 'CJC-1295 w/o DAC', size: '5mg', price: 70, category: 'peptides', purity: 99.1 },
  { base: 'CJC-1295 w/ DAC', size: '5mg', price: 80, category: 'peptides', purity: 99.1 },
  { base: 'BPC-157', size: '10mg', price: 90, category: 'peptides', purity: 99.6, group: 'bpc-157-pep', bestSeller: true },
  { base: 'TB-500', size: '10mg', price: 89, category: 'peptides', purity: 99.3, bestSeller: true },
  { base: 'Wolverine (BPC+TB)', size: '10mg', price: 85, category: 'peptides', purity: 99.2 },
  { base: 'GLOW', size: '70mg', price: 119, category: 'peptides', purity: 99.0, bestSeller: true },
  { base: 'Semaglutide', size: '2.5mg', price: 99, category: 'peptides', purity: 99.5, group: 'semaglutide' },
  { base: 'Semaglutide', size: '5mg', price: 179, category: 'peptides', purity: 99.5, group: 'semaglutide', bestSeller: true },
  { base: 'Semaglutide', size: '10mg', price: 249, category: 'peptides', purity: 99.5, group: 'semaglutide' },
  { base: 'Tirzepatide', size: '10mg', price: 259, category: 'peptides', purity: 99.7, group: 'tirzepatide', bestSeller: true },
  { base: 'Tirzepatide', size: '30mg', price: 299, category: 'peptides', purity: 99.7, group: 'tirzepatide' },
  { base: 'Tirzepatide', size: '60mg', price: 349, category: 'peptides', purity: 99.7, group: 'tirzepatide' },
  { base: 'Retatrutide', size: '10mg', price: 259, category: 'peptides', purity: 99.6, group: 'retatrutide', bestSeller: true },
  { base: 'Retatrutide', size: '30mg', price: 299, category: 'peptides', purity: 99.6, group: 'retatrutide' },
  { base: 'Melanotan II', size: '10mg', price: 60, category: 'peptides', purity: 99.0 },
  { base: 'PT-141', size: '10mg', price: 64, category: 'peptides', purity: 99.2 },
  { base: 'Selank', size: '10mg', price: 60, category: 'peptides', purity: 99.1 },
  { base: 'Semax', size: '10mg', price: 59, category: 'peptides', purity: 99.1 },
  { base: 'MOTS-c', size: '10mg', price: 70, category: 'peptides', purity: 99.3 },
  { base: 'NAD+', size: '500mg', price: 75, category: 'peptides', purity: 99.4, group: 'nad' },
  { base: 'NAD+', size: '1000mg', price: 199, category: 'peptides', purity: 99.4, group: 'nad' },
  { base: 'Sermorelin', size: '5mg', price: 99, category: 'peptides', purity: 99.2, group: 'sermorelin' },
  { base: 'Sermorelin', size: '10mg', price: 79, category: 'peptides', purity: 99.2, group: 'sermorelin' },
  { base: 'PEG-MGF', size: '2mg', price: 90, category: 'peptides', purity: 99.0 },
  { base: 'Oxytocin', size: '5mg', price: 50, category: 'peptides', purity: 99.1 },
  { base: 'MT2', size: '10mg', price: 60, category: 'peptides', purity: 99.0 },
  { base: 'LL-37', size: '5mg', price: 135, category: 'peptides', purity: 99.3 },
  { base: 'IGF-1 LR3', size: '1mg', price: 149, category: 'peptides', purity: 99.5 },
  { base: 'GnRH', size: '100mcg', price: 47, category: 'peptides', purity: 99.0 },
  { base: 'Epitalon', size: '10mg', price: 80, category: 'peptides', purity: 99.2 },
  { base: 'Fragment 176-191', size: '5mg', price: 80, category: 'peptides', purity: 99.1 },
  { base: 'GHK-Cu', size: '50mg', price: 80, category: 'peptides', purity: 99.4, group: 'ghk-cu' },
  { base: 'GHK-Cu', size: '100mg', price: 110, category: 'peptides', purity: 99.4, group: 'ghk-cu' },
  { base: 'GHRP-2', size: '5mg', price: 32, category: 'peptides', purity: 99.0 },
  { base: 'GHRP-6', size: '10mg', price: 32, category: 'peptides', purity: 99.0 },
  { base: 'Glutathione', size: '1500mg', price: 149, category: 'peptides', purity: 99.5 },
  { base: 'Bacteriostatic Water', size: '30ml', price: 20, category: 'peptides', purity: 99.9 },

  // LIQUIDS
  { base: 'Iver / Fen', size: '60ml', price: 199, category: 'liquids', purity: 99.0 },
  { base: 'MK-677', size: '25mg · 30ml', price: 99, category: 'liquids', purity: 99.2, bestSeller: true },
  { base: 'Tadalafil', size: '30ml', price: 49, category: 'liquids', purity: 99.1 },
  { base: 'Vardenafil', size: '10mg · 30ml', price: 60, category: 'liquids', purity: 99.1 },
  { base: 'Sildenafil', size: '50mg · 30ml', price: 49, category: 'liquids', purity: 99.1 },
  { base: 'Tada 30mg / Sild 50mg', size: '30ml', price: 84, category: 'liquids', purity: 99.0 },
  { base: 'Anastrozole', size: '1mg · 30ml', price: 49, category: 'liquids', purity: 99.2 },
  { base: 'Tamoxifen Citrate', size: '20mg · 30ml', price: 65, category: 'liquids', purity: 99.2 },
  { base: 'Letrozole', size: '2.5mg · 30ml', price: 58, category: 'liquids', purity: 99.2 },
  { base: 'T3', size: '100mcg · 30ml', price: 49, category: 'liquids', purity: 99.1 },
  { base: 'RAD-140', size: '10mg · 30ml', price: 85, category: 'liquids', purity: 99.3 },
  { base: 'Pramipexole', size: '2mg · 30ml', price: 74, category: 'liquids', purity: 99.1 },
  { base: 'MK-2866 (Ostarine)', size: '33mg · 30ml', price: 90, category: 'liquids', purity: 99.3 },
  { base: 'Ketotifen Fumarate', size: '1mg · 30ml', price: 57, category: 'liquids', purity: 99.1 },
  { base: 'GW-501516', size: '10mg · 30ml', price: 90, category: 'liquids', purity: 99.3 },
  { base: 'Exemestane', size: '25mg · 30ml', price: 80, category: 'liquids', purity: 99.2 },
  { base: 'Clomiphene', size: '40mg · 30ml', price: 58, category: 'liquids', purity: 99.2 },
  { base: 'Clenbuterol', size: '200mcg · 30ml', price: 80, category: 'liquids', purity: 99.1 },

  // CAPSULES
  { base: 'Tesofensine', size: '500mcg · 60ct', price: 199, category: 'capsules', purity: 99.2 },
  { base: 'LGD-4033', size: '10mg · 30ct', price: 80, category: 'capsules', purity: 99.3, bestSeller: true },
  { base: 'AOD-9604', size: '500mcg · 60ct', price: 199, category: 'capsules', purity: 99.2 },
  { base: 'Bello Capello', size: '60ct', price: 80, category: 'capsules', purity: 99.0 },
  { base: 'MK-677', size: '12.5mg · 60ct', price: 79, category: 'capsules', purity: 99.2 },
  { base: 'BPC-157', size: '500mcg · 60ct', price: 80, category: 'capsules', purity: 99.5, group: 'bpc-157-cap' },
]

export const products: Product[] = seeds.map((s) => {
  const name = `${s.base} ${s.size}`.trim()
  return {
    slug: slugify(name),
    name,
    baseName: s.base,
    size: s.size,
    category: s.category,
    price: s.price,
    purity: s.purity,
    group: s.group,
    bestSeller: s.bestSeller,
  }
})

export function getProduct(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug)
}

export function getVariants(product: Product): Product[] {
  if (!product.group) return [product]
  return products.filter((p) => p.group === product.group)
}

export function getRelated(product: Product, count = 4): Product[] {
  return products
    .filter((p) => p.category === product.category && p.slug !== product.slug && p.group !== product.group)
    .slice(0, count)
}

export function getBestSellers(): Product[] {
  return products.filter((p) => p.bestSeller)
}

export function storageFor(category: Category): string {
  switch (category) {
    case 'peptides':
      return 'Store lyophilized vial at -20°C. After reconstitution, refrigerate at 2–8°C and use within 30 days. Protect from light.'
    case 'liquids':
      return 'Refrigerate at 2–8°C. Keep the bottle upright, tightly sealed, and away from direct light.'
    case 'capsules':
      return 'Store in a cool, dry place below 25°C. Keep the container sealed and away from moisture and light.'
  }
}

export function formatPrice(value: number): string {
  return `$${value.toFixed(2)}`
}
