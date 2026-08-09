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
  searchKeywords?: string[];
}

export type Category = string;

export const CATEGORY_LABELS: Record<string, string> = {
  Peptides: 'Peptides',
  Supplies: 'Supplies',
  'Research Compounds': 'Research Compounds'
};

export function shortDose(dosage: string): string {
  const noUnit = dosage.replace(/mg|ml/gi, '').trim();
  return noUnit.replace(/^0(\.\d+)$/, '$1');
}
export function shortDose(dosage: string): string {
  const noUnit = dosage.replace(/mg|ml/gi, '').trim();
  return noUnit.replace(/^0(\.\d+)$/, '$1');
}

export function storageFor(product: Product): string {
  return 'Store refrigerated at 2°C – 8°C';
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
  return products.slice(0, limit);
}

export const products: Product[] = [
  // --- Semaglutide -> SXL ---
  {
    id: 'sxl-025',
    name: 'SXL 0.25mg',
    baseName: 'SXL',
    slug: 'sxl-025mg',
    category: 'Peptides',
    price: 150,
    dosage: '0.25mg',
    description: 'Research grade SXL peptide.',
    inStock: true,
    purity: '99.2%',
    searchKeywords: ['semaglutide', 'sxl', 'glp', 'glp-1', '0.25']
  },
  {
    id: 'sxl-05',
    name: 'SXL 0.5mg',
    baseName: 'SXL',
    slug: 'sxl-05mg',
    category: 'Peptides',
    price: 175,
    dosage: '0.5mg',
    description: 'Research grade SXL peptide.',
    inStock: true,
    purity: '99.2%',
    searchKeywords: ['semaglutide', 'sxl', 'glp', 'glp-1', '0.5']
  },
  {
    id: 'sxl-1',
    name: 'SXL 1mg',
    baseName: 'SXL',
    slug: 'sxl-1mg',
    category: 'Peptides',
    price: 210,
    dosage: '1mg',
    description: 'Research grade SXL peptide.',
    inStock: true,
    purity: '99.2%',
    searchKeywords: ['semaglutide', 'sxl', 'glp', 'glp-1', '1mg']
  },
  {
    id: 'sxl-2',
    name: 'SXL 2mg',
    baseName: 'SXL',
    slug: 'sxl-2mg',
    category: 'Peptides',
    price: 290,
    dosage: '2mg',
    description: 'Research grade SXL peptide.',
    inStock: true,
    purity: '99.2%',
    searchKeywords: ['semaglutide', 'sxl', 'glp', 'glp-1', '2mg']
  },

  // --- Tirzepatide -> TXL ---
  {
    id: 'txl-10',
    name: 'TXL 10mg',
    baseName: 'TXL',
    slug: 'txl-10mg',
    category: 'Peptides',
    price: 200,
    dosage: '10mg',
    description: 'Research grade TXL peptide.',
    inStock: true,
    purity: '99.2%',
    searchKeywords: ['tirzepatide', 'txl', 'glp', '10mg']
  },
  {
    id: 'txl-20',
    name: 'TXL 20mg',
    baseName: 'TXL',
    slug: 'txl-20mg',
    category: 'Peptides',
    price: 280,
    dosage: '20mg',
    description: 'Research grade TXL peptide.',
    inStock: true,
    purity: '99.2%',
    searchKeywords: ['tirzepatide', 'txl', 'glp', '20mg']
  },
  {
    id: 'txl-30',
    name: 'TXL 30mg',
    baseName: 'TXL',
    slug: 'txl-30mg',
    category: 'Peptides',
    price: 350,
    dosage: '30mg',
    description: 'Research grade TXL peptide.',
    inStock: true,
    purity: '99.2%',
    searchKeywords: ['tirzepatide', 'txl', 'glp', '30mg']
  },
  {
    id: 'txl-60',
    name: 'TXL 60mg',
    baseName: 'TXL',
    slug: 'txl-60mg',
    category: 'Peptides',
    price: 550,
    dosage: '60mg',
    description: 'Research grade TXL peptide.',
    inStock: true,
    purity: '99.2%',
    searchKeywords: ['tirzepatide', 'txl', 'glp', '60mg']
  },

  // --- Retatrutide -> RXL ---
  {
    id: 'rxl-10',
    name: 'RXL 10mg',
    baseName: 'RXL',
    slug: 'rxl-10mg',
    category: 'Peptides',
    price: 199,
    dosage: '10mg',
    description: 'Research grade RXL peptide.',
    inStock: true,
    purity: '99.2%',
    searchKeywords: ['retatrutide', 'reta', 'rxl', 'glp', '10mg']
  },
  {
    id: 'rxl-20',
    name: 'RXL 20mg',
    baseName: 'RXL',
    slug: 'rxl-20mg',
    category: 'Peptides',
    price: 229,
    dosage: '20mg',
    description: 'Research grade RXL peptide.',
    inStock: true,
    purity: '99.2%',
    searchKeywords: ['retatrutide', 'reta', 'rxl', 'glp', '20mg']
  },
  {
    id: 'rxl-30',
    name: 'RXL 30mg',
    baseName: 'RXL',
    slug: 'rxl-30mg',
    category: 'Peptides',
    price: 320,
    dosage: '30mg',
    description: 'Research grade RXL peptide.',
    inStock: true,
    purity: '99.2%',
    searchKeywords: ['retatrutide', 'reta', 'rxl', 'glp', '30mg']
  },
  {
    id: 'rxl-60',
    name: 'RXL 60mg',
    baseName: 'RXL',
    slug: 'rxl-60mg',
    category: 'Peptides',
    price: 449,
    dosage: '60mg',
    description: 'Research grade RXL peptide.',
    inStock: true,
    purity: '99.2%',
    searchKeywords: ['retatrutide', 'reta', 'rxl', 'glp', '60mg']
  },

  // --- Other Compounds & Supplies ---
  {
    id: 'tb-500-10',
    name: 'TB-500 10mg',
    baseName: 'TB-500',
    slug: 'tb-500-10mg',
    category: 'Peptides',
    price: 85,
    dosage: '10mg',
    description: 'Research grade TB-500.',
    inStock: true,
    purity: '99.2%',
    searchKeywords: ['tb-500', 'tb500']
  },
  {
    id: 'ipamorelin',
    name: 'Ipamorelin',
    baseName: 'Ipamorelin',
    slug: 'ipamorelin',
    category: 'Peptides',
    price: 65,
    dosage: '5mg',
    description: 'Research grade Ipamorelin.',
    inStock: true,
    purity: '99.2%',
    searchKeywords: ['ipamorelin']
  },
  {
    id: 'bac-water',
    name: 'BAC Water',
    baseName: 'BAC Water',
    slug: 'bac-water',
    category: 'Supplies',
    price: 30,
    dosage: '30ml',
    description: 'Bacteriostatic Water.',
    inStock: true,
    purity: 'USP',
    searchKeywords: ['bac water', 'bacteriostatic water', 'water']
  },
  {
    id: 'nad-500',
    name: 'NAD+ 500',
    baseName: 'NAD+',
    slug: 'nad-500',
    category: 'Research Compounds',
    price: 99,
    dosage: '500mg',
    description: 'Research grade NAD+.',
    inStock: true,
    purity: '99.2%',
    searchKeywords: ['nad', 'nad+']
  },
  {
    id: 'klow',
    name: 'KLOW',
    baseName: 'KLOW',
    slug: 'klow',
    category: 'Peptides',
    price: 149,
    dosage: '70mg',
    description: 'Research grade KLOW blend.',
    inStock: true,
    purity: '99.2%',
    searchKeywords: ['klow']
  },
  {
    id: 'kpv',
    name: 'KPV',
    baseName: 'KPV',
    slug: 'kpv',
    category: 'Peptides',
    price: 45,
    dosage: '10mg',
    description: 'Research grade KPV peptide.',
    inStock: true,
    purity: '99.2%',
    searchKeywords: ['kpv']
  }
];
