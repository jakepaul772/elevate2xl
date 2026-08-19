export interface Product {
  id: string;
  name: string;
  baseName: string;
  slug: string;
  category: string;
  price: number;
  dosage: string;
  description: string;
  inStock: boolean;
  purity: string;
  bestSeller: boolean;
  searchKeywords?: string[];
}

export type Category = string;

export const CATEGORY_LABELS: Record<string, string> = {
  peptides: 'Peptides',
  liquids: 'Liquids',
  capsules: 'Capsules'
};

export function formatPrice(price: number): string {
  return `$${price.toFixed(2)}`;
}

export function shortDose(dosage: string): string {
  const noUnit = dosage.replace(/mg|ml/gi, '').trim();
  return noUnit.replace(/^0(\.\d+)$/, '$1');
}

export function storageFor(category: string): string {
  switch (category) {
    case 'liquids':
      return 'Refrigerate at 2–8°C. Keep the bottle upright, tightly sealed, and away from direct light.';
    case 'capsules':
      return 'Store in a cool, dry place below 25°C. Keep the container sealed and away from moisture and light.';
    default:
      return 'Store lyophilized vial at -20°C. After reconstitution, refrigerate at 2–8°C and use within 30 days. Protect from light.';
  }
}

export function getProduct(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function getRelated(product: Product, limit = 3): Product[] {
  return products.filter((p) => p.category === product.category && p.id !== product.id).slice(0, limit);
}

export function getVariants(product: Product): Product[] {
  return products.filter((p) => p.category === product.category);
}

export function getBestSellers(limit = 4): Product[] {
  return products.filter((p) => p.bestSeller).slice(0, limit);
}

export const products: Product[] = [
  // --- Peptides ---
  {
    id: 'sxl-0-25mg',
    name: 'SXL 0.25mg',
    baseName: 'SXL',
    slug: 'sxl-0-25mg',
    category: 'peptides',
    price: 99,
    dosage: '0.25mg',
    description: 'Research grade SXL.',
    inStock: true,
    purity: '99.5',
    bestSeller: false,
    searchKeywords: ['semaglutide', 'sema', 'sxl', 'glp', 'glp-1']
  },
  {
    id: 'sxl-0-5mg',
    name: 'SXL 0.5mg',
    baseName: 'SXL',
    slug: 'sxl-0-5mg',
    category: 'peptides',
    price: 179,
    dosage: '0.5mg',
    description: 'Research grade SXL.',
    inStock: true,
    purity: '99.5',
    bestSeller: true,
    searchKeywords: ['semaglutide', 'sema', 'sxl', 'glp', 'glp-1']
  },
  {
    id: 'sxl-1mg',
    name: 'SXL 1mg',
    baseName: 'SXL',
    slug: 'sxl-1mg',
    category: 'peptides',
    price: 249,
    dosage: '1mg',
    description: 'Research grade SXL.',
    inStock: true,
    purity: '99.5',
    bestSeller: false,
    searchKeywords: ['semaglutide', 'sema', 'sxl', 'glp', 'glp-1']
  },
  {
    id: 'sxl-2mg',
    name: 'SXL 2mg',
    baseName: 'SXL',
    slug: 'sxl-2mg',
    category: 'peptides',
    price: 349,
    dosage: '2mg',
    description: 'Research grade SXL.',
    inStock: true,
    purity: '99.5',
    bestSeller: false,
    searchKeywords: ['semaglutide', 'sema', 'sxl', 'glp', 'glp-1']
  },
  {
    id: 'txl-10mg',
    name: 'TXL 10mg',
    baseName: 'TXL',
    slug: 'txl-10mg',
    category: 'peptides',
    price: 259,
    dosage: '10mg',
    description: 'Research grade TXL.',
    inStock: true,
    purity: '99.7',
    bestSeller: true,
    searchKeywords: ['tirzepatide', 'tirz', 'txl', 'glp', 'glp-1']
  },
  {
    id: 'txl-20mg',
    name: 'TXL 20mg',
    baseName: 'TXL',
    slug: 'txl-20mg',
    category: 'peptides',
    price: 279,
    dosage: '20mg',
    description: 'Research grade TXL.',
    inStock: true,
    purity: '99.7',
    bestSeller: false,
    searchKeywords: ['tirzepatide', 'tirz', 'txl', 'glp', 'glp-1']
  },
  {
    id: 'txl-30mg',
    name: 'TXL 30mg',
    baseName: 'TXL',
    slug: 'txl-30mg',
    category: 'peptides',
    price: 299,
    dosage: '30mg',
    description: 'Research grade TXL.',
    inStock: true,
    purity: '99.7',
    bestSeller: false,
    searchKeywords: ['tirzepatide', 'tirz', 'txl', 'glp', 'glp-1']
  },
  {
    id: 'txl-60mg',
    name: 'TXL 60mg',
    baseName: 'TXL',
    slug: 'txl-60mg',
    category: 'peptides',
    price: 349,
    dosage: '60mg',
    description: 'Research grade TXL.',
    inStock: true,
    purity: '99.7',
    bestSeller: false,
    searchKeywords: ['tirzepatide', 'tirz', 'txl', 'glp', 'glp-1']
  },
  {
    id: 'rxl-10mg',
    name: 'RXL 10mg',
    baseName: 'RXL',
    slug: 'rxl-10mg',
    category: 'peptides',
    price: 199,
    dosage: '10mg',
    description: 'Research grade RXL.',
    inStock: true,
    purity: '99.6',
    bestSeller: true,
    searchKeywords: ['retatrutide', 'reta', 'rxl', 'glp', 'glp-1']
  },
  {
    id: 'rxl-20mg',
    name: 'RXL 20mg',
    baseName: 'RXL',
    slug: 'rxl-20mg',
    category: 'peptides',
    price: 229,
    dosage: '20mg',
    description: 'Research grade RXL.',
    inStock: true,
    purity: '99.6',
    bestSeller: false,
    searchKeywords: ['retatrutide', 'reta', 'rxl', 'glp', 'glp-1']
  },
  {
    id: 'rxl-30mg',
    name: 'RXL 30mg',
    baseName: 'RXL',
    slug: 'rxl-30mg',
    category: 'peptides',
    price: 299,
    dosage: '30mg',
    description: 'Research grade RXL.',
    inStock: true,
    purity: '99.6',
    bestSeller: false,
    searchKeywords: ['retatrutide', 'reta', 'rxl', 'glp', 'glp-1']
  },
  {
    id: 'rxl-60mg',
    name: 'RXL 60mg',
    baseName: 'RXL',
    slug: 'rxl-60mg',
    category: 'peptides',
    price: 449,
    dosage: '60mg',
    description: 'Research grade RXL.',
    inStock: true,
    purity: '99.6',
    bestSeller: false,
    searchKeywords: ['retatrutide', 'reta', 'rxl', 'glp', 'glp-1']
  },
];
