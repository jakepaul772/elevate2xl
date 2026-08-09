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
  Liquids: 'Liquids',
  Capsules: 'Capsules'
};

export function formatPrice(price: number): string {
  return `$${price.toFixed(2)}`;
}

export function shortDose(dosage: string): string {
  const noUnit = dosage.replace(/mg|ml/gi, '').trim();
  return noUnit.replace(/^0(\.\d+)$/, '$1');
}

export function storageFor(product: Product): string {
  switch (product.category) {
    case 'Liquids':
      return 'Refrigerate at 2–8°C. Keep the bottle upright, tightly sealed, and away from direct light.';
    case 'Capsules':
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
  return products.slice(0, limit);
}

export const products: Product[] = [
  // --- Peptides ---
  {
    id: 'tesamorelin-10mg',
    name: 'Tesamorelin 10mg',
    baseName: 'Tesamorelin',
    slug: 'tesamorelin-10mg',
    category: 'Peptides',
    price: 70,
    dosage: '10mg',
    description: 'Research grade Tesamorelin.',
    inStock: true,
    purity: '99.2%',
    searchKeywords: ['tesamorelin']
  },
  {
    id: 'cjc-ipamorelin-10mg',
    name: 'CJC / Ipamorelin 10mg',
    baseName: 'CJC / Ipamorelin',
    slug: 'cjc-ipamorelin-10mg',
    category: 'Peptides',
    price: 60,
    dosage: '10mg',
    description: 'Research grade CJC / Ipamorelin.',
    inStock: true,
    purity: '99.4%',
    searchKeywords: ['cjc / ipamorelin']
  },
  {
    id: 'cjc-1295-w-o-dac-5mg',
    name: 'CJC-1295 w/o DAC 5mg',
    baseName: 'CJC-1295 w/o DAC',
    slug: 'cjc-1295-w-o-dac-5mg',
    category: 'Peptides',
    price: 70,
    dosage: '5mg',
    description: 'Research grade CJC-1295 w/o DAC.',
    inStock: true,
    purity: '99.1%',
    searchKeywords: ['cjc-1295 w/o dac']
  },
  {
    id: 'cjc-1295-w-dac-5mg',
    name: 'CJC-1295 w/ DAC 5mg',
    baseName: 'CJC-1295 w/ DAC',
    slug: 'cjc-1295-w-dac-5mg',
    category: 'Peptides',
    price: 80,
    dosage: '5mg',
    description: 'Research grade CJC-1295 w/ DAC.',
    inStock: true,
    purity: '99.1%',
    searchKeywords: ['cjc-1295 w/ dac']
  },
  {
    id: 'bpc-157-10mg',
    name: 'BPC-157 10mg',
    baseName: 'BPC-157',
    slug: 'bpc-157-10mg',
    category: 'Peptides',
    price: 90,
    dosage: '10mg',
    description: 'Research grade BPC-157.',
    inStock: true,
    purity: '99.6%',
    searchKeywords: ['bpc-157']
  },
  {
    id: 'tb-500-10mg',
    name: 'TB-500 10mg',
    baseName: 'TB-500',
    slug: 'tb-500-10mg',
    category: 'Peptides',
    price: 99,
    dosage: '10mg',
    description: 'Research grade TB-500.',
    inStock: true,
    purity: '99.3%',
    searchKeywords: ['tb-500']
  },
  {
    id: 'wolverine-bpc-plus-tb-10mg',
    name: 'Wolverine (BPC+TB) 10mg',
    baseName: 'Wolverine (BPC+TB)',
    slug: 'wolverine-bpc-plus-tb-10mg',
    category: 'Peptides',
    price: 85,
    dosage: '10mg',
    description: 'Research grade Wolverine (BPC+TB).',
    inStock: true,
    purity: '99.2%',
    searchKeywords: ['wolverine (bpc+tb)']
  },
  {
    id: 'glow-70mg',
    name: 'GLOW 70mg',
    baseName: 'GLOW',
    slug: 'glow-70mg',
    category: 'Peptides',
    price: 119,
    dosage: '70mg',
    description: 'Research grade GLOW.',
    inStock: true,
    purity: '99.0%',
    searchKeywords: ['glow']
  },
  {
    id: 'sxl-0-25mg',
    name: 'SXL 0.25mg',
    baseName: 'SXL',
    slug: 'sxl-0-25mg',
    category: 'Peptides',
    price: 99,
    dosage: '0.25mg',
    description: 'Research grade SXL.',
    inStock: true,
    purity: '99.5%',
    searchKeywords: ['sxl']
  },
  {
    id: 'sxl-0-5mg',
    name: 'SXL 0.5mg',
    baseName: 'SXL',
    slug: 'sxl-0-5mg',
    category: 'Peptides',
    price: 179,
    dosage: '0.5mg',
    description: 'Research grade SXL.',
    inStock: true,
    purity: '99.5%',
    searchKeywords: ['sxl']
  },
  {
    id: 'sxl-1mg',
    name: 'SXL 1mg',
    baseName: 'SXL',
    slug: 'sxl-1mg',
    category: 'Peptides',
    price: 249,
    dosage: '1mg',
    description: 'Research grade SXL.',
    inStock: true,
    purity: '99.5%',
    searchKeywords: ['sxl']
  },
  {
    id: 'sxl-2mg',
    name: 'SXL 2mg',
    baseName: 'SXL',
    slug: 'sxl-2mg',
    category: 'Peptides',
    price: 349,
    dosage: '2mg',
    description: 'Research grade SXL.',
    inStock: true,
    purity: '99.5%',
    searchKeywords: ['sxl']
  },
  {
    id: 'txl-10mg',
    name: 'TXL 10mg',
    baseName: 'TXL',
    slug: 'txl-10mg',
    category: 'Peptides',
    price: 259,
    dosage: '10mg',
    description: 'Research grade TXL.',
    inStock: true,
    purity: '99.7%',
    searchKeywords: ['txl']
  },
  {
    id: 'txl-20mg',
    name: 'TXL 20mg',
    baseName: 'TXL',
    slug: 'txl-20mg',
    category: 'Peptides',
    price: 279,
    dosage: '20mg',
    description: 'Research grade TXL.',
    inStock: true,
    purity: '99.7%',
    searchKeywords: ['txl']
  },
  {
    id: 'txl-30mg',
    name: 'TXL 30mg',
    baseName: 'TXL',
    slug: 'txl-30mg',
    category: 'Peptides',
    price: 299,
    dosage: '30mg',
    description: 'Research grade TXL.',
    inStock: true,
    purity: '99.7%',
    searchKeywords: ['txl']
  },
  {
    id: 'txl-60mg',
    name: 'TXL 60mg',
    baseName: 'TXL',
    slug: 'txl-60mg',
    category: 'Peptides',
    price: 349,
    dosage: '60mg',
    description: 'Research grade TXL.',
    inStock: true,
    purity: '99.7%',
    searchKeywords: ['txl']
  },
  {
    id: 'rxl-10mg',
    name: 'RXL 10mg',
    baseName: 'RXL',
    slug: 'rxl-10mg',
    category: 'Peptides',
    price: 199,
    dosage: '10mg',
    description: 'Research grade RXL.',
    inStock: true,
    purity: '99.6%',
    searchKeywords: ['rxl']
  },
  {
    id: 'rxl-20mg',
    name: 'RXL 20mg',
    baseName: 'RXL',
    slug: 'rxl-20mg',
    category: 'Peptides',
    price: 229,
    dosage: '20mg',
    description: 'Research grade RXL.',
    inStock: true,
    purity: '99.6%',
    searchKeywords: ['rxl']
  },
  {
    id: 'rxl-30mg',
    name: 'RXL 30mg',
    baseName: 'RXL',
    slug: 'rxl-30mg',
    category: 'Peptides',
    price: 299,
    dosage: '30mg',
    description: 'Research grade RXL.',
    inStock: true,
    purity: '99.6%',
    searchKeywords: ['rxl']
  },
  {
    id: 'rxl-60mg',
    name: 'RXL 60mg',
    baseName: 'RXL',
    slug: 'rxl-60mg',
    category: 'Peptides',
    price: 449,
    dosage: '60mg',
    description: 'Research grade RXL.',
    inStock: true,
    purity: '99.6%',
    searchKeywords: ['rxl']
  },
  {
    id: 'melanotan-ii-10mg',
    name: 'Melanotan II 10mg',
    baseName: 'Melanotan II',
    slug: 'melanotan-ii-10mg',
    category: 'Peptides',
    price: 60,
    dosage: '10mg',
    description: 'Research grade Melanotan II.',
    inStock: true,
    purity: '99.0%',
    searchKeywords: ['melanotan ii']
  },
  {
    id: 'pt-141-10mg',
    name: 'PT-141 10mg',
    baseName: 'PT-141',
    slug: 'pt-141-10mg',
    category: 'Peptides',
    price: 64,
    dosage: '10mg',
    description: 'Research grade PT-141.',
    inStock: true,
    purity: '99.2%',
    searchKeywords: ['pt-141']
  },
  {
    id: 'selank-10mg',
    name: 'Selank 10mg',
    baseName: 'Selank',
    slug: 'selank-10mg',
    category: 'Peptides',
    price: 60,
    dosage: '10mg',
    description: 'Research grade Selank.',
    inStock: true,
    purity: '99.1%',
    searchKeywords: ['selank']
  },
  {
    id: 'semax-10mg',
    name: 'Semax 10mg',
    baseName: 'Semax',
    slug: 'semax-10mg',
    category: 'Peptides',
    price: 59,
    dosage: '10mg',
    description: 'Research grade Semax.',
    inStock: true,
    purity: '99.1%',
    searchKeywords: ['semax']
  },
  {
    id: 'mots-c-10mg',
    name: 'MOTS-c 10mg',
    baseName: 'MOTS-c',
    slug: 'mots-c-10mg',
    category: 'Peptides',
    price: 70,
    dosage: '10mg',
    description: 'Research grade MOTS-c.',
    inStock: true,
    purity: '99.3%',
    searchKeywords: ['mots-c']
  },
  {
    id: 'nad-plus-500mg',
    name: 'NAD+ 500mg',
    baseName: 'NAD+',
    slug: 'nad-plus-500mg',
    category: 'Peptides',
    price: 99,
    dosage: '500mg',
    description: 'Research grade NAD+.',
    inStock: true,
    purity: '99.4%',
    searchKeywords: ['nad+']
  },
  {
    id: 'nad-plus-1000mg',
    name: 'NAD+ 1000mg',
    baseName: 'NAD+',
    slug: 'nad-plus-1000mg',
    category: 'Peptides',
    price: 199,
    dosage: '1000mg',
    description: 'Research grade NAD+.',
    inStock: true,
    purity: '99.4%',
    searchKeywords: ['nad+']
  },
  {
    id: 'sermorelin-5mg',
    name: 'Sermorelin 5mg',
    baseName: 'Sermorelin',
    slug: 'sermorelin-5mg',
    category: 'Peptides',
    price: 99,
    dosage: '5mg',
    description: 'Research grade Sermorelin.',
    inStock: true,
    purity: '99.2%',
    searchKeywords: ['sermorelin']
  },
  {
    id: 'sermorelin-10mg',
    name: 'Sermorelin 10mg',
    baseName: 'Sermorelin',
    slug: 'sermorelin-10mg',
    category: 'Peptides',
    price: 79,
    dosage: '10mg',
    description: 'Research grade Sermorelin.',
    inStock: true,
    purity: '99.2%',
    searchKeywords: ['sermorelin']
  },
  {
    id: 'peg-mgf-2mg',
    name: 'PEG-MGF 2mg',
    baseName: 'PEG-MGF',
    slug: 'peg-mgf-2mg',
    category: 'Peptides',
    price: 90,
    dosage: '2mg',
    description: 'Research grade PEG-MGF.',
    inStock: true,
    purity: '99.0%',
    searchKeywords: ['peg-mgf']
  },
  {
    id: 'oxytocin-5mg',
    name: 'Oxytocin 5mg',
    baseName: 'Oxytocin',
    slug: 'oxytocin-5mg',
    category: 'Peptides',
    price: 50,
    dosage: '5mg',
    description: 'Research grade Oxytocin.',
    inStock: true,
    purity: '99.1%',
    searchKeywords: ['oxytocin']
  },
  {
    id: 'mt2-10mg',
    name: 'MT2 10mg',
    baseName: 'MT2',
    slug: 'mt2-10mg',
    category: 'Peptides',
    price: 60,
    dosage: '10mg',
    description: 'Research grade MT2.',
    inStock: true,
    purity: '99.0%',
    searchKeywords: ['mt2']
  },
  {
    id: 'll-37-5mg',
    name: 'LL-37 5mg',
    baseName: 'LL-37',
    slug: 'll-37-5mg',
    category: 'Peptides',
    price: 135,
    dosage: '5mg',
    description: 'Research grade LL-37.',
    inStock: true,
    purity: '99.3%',
    searchKeywords: ['ll-37']
  },
  {
    id: 'igf-1-lr3-1mg',
    name: 'IGF-1 LR3 1mg',
    baseName: 'IGF-1 LR3',
    slug: 'igf-1-lr3-1mg',
    category: 'Peptides',
    price: 149,
    dosage: '1mg',
    description: 'Research grade IGF-1 LR3.',
    inStock: true,
    purity: '99.5%',
    searchKeywords: ['igf-1 lr3']
  },
  {
    id: 'gnrh-100mcg',
    name: 'GnRH 100mcg',
    baseName: 'GnRH',
    slug: 'gnrh-100mcg',
    category: 'Peptides',
    price: 47,
    dosage: '100mcg',
    description: 'Research grade GnRH.',
    inStock: true,
    purity: '99.0%',
    searchKeywords: ['gnrh']
  },
  {
    id: 'epitalon-10mg',
    name: 'Epitalon 10mg',
    baseName: 'Epitalon',
    slug: 'epitalon-10mg',
    category: 'Peptides',
    price: 80,
    dosage: '10mg',
    description: 'Research grade Epitalon.',
    inStock: true,
    purity: '99.2%',
    searchKeywords: ['epitalon']
  },
  {
    id: 'fragment-176-191-5mg',
    name: 'Fragment 176-191 5mg',
    baseName: 'Fragment 176-191',
    slug: 'fragment-176-191-5mg',
    category: 'Peptides',
    price: 80,
    dosage: '5mg',
    description: 'Research grade Fragment 176-191.',
    inStock: true,
    purity: '99.1%',
    searchKeywords: ['fragment 176-191']
  },
  {
    id: 'ghk-cu-50mg',
    name: 'GHK-Cu 50mg',
    baseName: 'GHK-Cu',
    slug: 'ghk-cu-50mg',
    category: 'Peptides',
    price: 80,
    dosage: '50mg',
    description: 'Research grade GHK-Cu.',
    inStock: true,
    purity: '99.4%',
    searchKeywords: ['ghk-cu']
  },
  {
    id: 'ghk-cu-100mg',
    name: 'GHK-Cu 100mg',
    baseName: 'GHK-Cu',
    slug: 'ghk-cu-100mg',
    category: 'Peptides',
    price: 110,
    dosage: '100mg',
    description: 'Research grade GHK-Cu.',
    inStock: true,
    purity: '99.4%',
    searchKeywords: ['ghk-cu']
  },
  {
    id: 'ghrp-2-5mg',
    name: 'GHRP-2 5mg',
    baseName: 'GHRP-2',
    slug: 'ghrp-2-5mg',
    category: 'Peptides',
    price: 35,
    dosage: '5mg',
    description: 'Research grade GHRP-2.',
    inStock: true,
    purity: '99.0%',
    searchKeywords: ['ghrp-2']
  },
  {
    id: 'ghrp-2-10mg',
    name: 'GHRP-2 10mg',
    baseName: 'GHRP-2',
    slug: 'ghrp-2-10mg',
    category: 'Peptides',
    price: 45,
    dosage: '10mg',
    description: 'Research grade GHRP-2.',
    inStock: true,
    purity: '99.0%',
    searchKeywords: ['ghrp-2']
  },
  {
    id: 'ghrp-6-5mg',
    name: 'GHRP-6 5mg',
    baseName: 'GHRP-6',
    slug: 'ghrp-6-5mg',
    category: 'Peptides',
    price: 35,
    dosage: '5mg',
    description: 'Research grade GHRP-6.',
    inStock: true,
    purity: '99.0%',
    searchKeywords: ['ghrp-6']
  },
  {
    id: 'ghrp-6-10mg',
    name: 'GHRP-6 10mg',
    baseName: 'GHRP-6',
    slug: 'ghrp-6-10mg',
    category: 'Peptides',
    price: 45,
    dosage: '10mg',
    description: 'Research grade GHRP-6.',
    inStock: true,
    purity: '99.0%',
    searchKeywords: ['ghrp-6']
  },
  {
    id: 'glutathione-1500mg',
    name: 'Glutathione 1500mg',
    baseName: 'Glutathione',
    slug: 'glutathione-1500mg',
    category: 'Peptides',
    price: 149,
    dosage: '1500mg',
    description: 'Research grade Glutathione.',
    inStock: true,
    purity: '99.5%',
    searchKeywords: ['glutathione']
  },
  {
    id: 'ipamorelin-5mg',
    name: 'Ipamorelin 5mg',
    baseName: 'Ipamorelin',
    slug: 'ipamorelin-5mg',
    category: 'Peptides',
    price: 65,
    dosage: '5mg',
    description: 'Research grade Ipamorelin.',
    inStock: true,
    purity: '99.3%',
    searchKeywords: ['ipamorelin']
  },
  {
    id: '5-amino-1mq-10mg',
    name: '5-Amino-1MQ 10mg',
    baseName: '5-Amino-1MQ',
    slug: '5-amino-1mq-10mg',
    category: 'Peptides',
    price: 30,
    dosage: '10mg',
    description: 'Research grade 5-Amino-1MQ.',
    inStock: true,
    purity: '99.0%',
    searchKeywords: ['5-amino-1mq']
  },
  {
    id: 'kpv-10mg',
    name: 'KPV 10mg',
    baseName: 'KPV',
    slug: 'kpv-10mg',
    category: 'Peptides',
    price: 45,
    dosage: '10mg',
    description: 'Research grade KPV.',
    inStock: true,
    purity: '99.0%',
    searchKeywords: ['kpv']
  },
  {
    id: 'klow-70mg',
    name: 'KLOW 70mg',
    baseName: 'KLOW',
    slug: 'klow-70mg',
    category: 'Peptides',
    price: 149,
    dosage: '70mg',
    description: 'Research grade KLOW.',
    inStock: true,
    purity: '99.0%',
    searchKeywords: ['klow']
  },
  {
    id: 'bac-water-30ml',
    name: 'BAC Water 30ml',
    baseName: 'BAC Water',
    slug: 'bac-water-30ml',
    category: 'Peptides',
    price: 30,
    dosage: '30ml',
    description: 'Research grade BAC Water.',
    inStock: true,
    purity: '99.9%',
    searchKeywords: ['bac water']
  },

  // --- Liquids ---
  {
    id: 'iver-fen-60ml',
    name: 'Iver / Fen 60ml',
    baseName: 'Iver / Fen',
    slug: 'iver-fen-60ml',
    category: 'Liquids',
    price: 199,
    dosage: '60ml',
    description: 'Research grade Iver / Fen.',
    inStock: true,
    purity: '99.0%',
    searchKeywords: ['iver / fen']
  },
  {
    id: 'mk-677-25mg-30ml',
    name: 'MK-677 25mg · 30ml',
    baseName: 'MK-677',
    slug: 'mk-677-25mg-30ml',
    category: 'Liquids',
    price: 99,
    dosage: '25mg · 30ml',
    description: 'Research grade MK-677.',
    inStock: true,
    purity: '99.2%',
    searchKeywords: ['mk-677']
  },
  {
    id: 'tadalafil-30ml',
    name: 'Tadalafil 30ml',
    baseName: 'Tadalafil',
    slug: 'tadalafil-30ml',
    category: 'Liquids',
    price: 49,
    dosage: '30ml',
    description: 'Research grade Tadalafil.',
    inStock: true,
    purity: '99.1%',
    searchKeywords: ['tadalafil']
  },
  {
    id: 'vardenafil-10mg-30ml',
    name: 'Vardenafil 10mg · 30ml',
    baseName: 'Vardenafil',
    slug: 'vardenafil-10mg-30ml',
    category: 'Liquids',
    price: 60,
    dosage: '10mg · 30ml',
    description: 'Research grade Vardenafil.',
    inStock: true,
    purity: '99.1%',
    searchKeywords: ['vardenafil']
  },
  {
    id: 'sildenafil-50mg-30ml',
    name: 'Sildenafil 50mg · 30ml',
    baseName: 'Sildenafil',
    slug: 'sildenafil-50mg-30ml',
    category: 'Liquids',
    price: 49,
    dosage: '50mg · 30ml',
    description: 'Research grade Sildenafil.',
    inStock: true,
    purity: '99.1%',
    searchKeywords: ['sildenafil']
  },
  {
    id: 'tada-30mg-sild-50mg-30ml',
    name: 'Tada 30mg / Sild 50mg 30ml',
    baseName: 'Tada 30mg / Sild 50mg',
    slug: 'tada-30mg-sild-50mg-30ml',
    category: 'Liquids',
    price: 84,
    dosage: '30ml',
    description: 'Research grade Tada 30mg / Sild 50mg.',
    inStock: true,
    purity: '99.0%',
    searchKeywords: ['tada 30mg / sild 50mg']
  },
  {
    id: 'anastrozole-1mg-30ml',
    name: 'Anastrozole 1mg · 30ml',
    baseName: 'Anastrozole',
    slug: 'anastrozole-1mg-30ml',
    category: 'Liquids',
    price: 49,
    dosage: '1mg · 30ml',
    description: 'Research grade Anastrozole.',
    inStock: true,
    purity: '99.2%',
    searchKeywords: ['anastrozole']
  },
  {
    id: 'serm-5mg-30ml',
    name: 'SERM 5mg · 30ml',
    baseName: 'SERM',
    slug: 'serm-5mg-30ml',
    category: 'Liquids',
    price: 35,
    dosage: '5mg · 30ml',
    description: 'Research grade SERM.',
    inStock: true,
    purity: '99.2%',
    searchKeywords: ['serm']
  },
  {
    id: 'serm-10mg-30ml',
    name: 'SERM 10mg · 30ml',
    baseName: 'SERM',
    slug: 'serm-10mg-30ml',
    category: 'Liquids',
    price: 45,
    dosage: '10mg · 30ml',
    description: 'Research grade SERM.',
    inStock: true,
    purity: '99.2%',
    searchKeywords: ['serm']
  },
  {
    id: 'letrozole-2-5mg-30ml',
    name: 'Letrozole 2.5mg · 30ml',
    baseName: 'Letrozole',
    slug: 'letrozole-2-5mg-30ml',
    category: 'Liquids',
    price: 58,
    dosage: '2.5mg · 30ml',
    description: 'Research grade Letrozole.',
    inStock: true,
    purity: '99.2%',
    searchKeywords: ['letrozole']
  },
  {
    id: 't3-100mcg-30ml',
    name: 'T3 100mcg · 30ml',
    baseName: 'T3',
    slug: 't3-100mcg-30ml',
    category: 'Liquids',
    price: 49,
    dosage: '100mcg · 30ml',
    description: 'Research grade T3.',
    inStock: true,
    purity: '99.1%',
    searchKeywords: ['t3']
  },
  {
    id: 'rad-140-10mg-30ml',
    name: 'RAD-140 10mg · 30ml',
    baseName: 'RAD-140',
    slug: 'rad-140-10mg-30ml',
    category: 'Liquids',
    price: 85,
    dosage: '10mg · 30ml',
    description: 'Research grade RAD-140.',
    inStock: true,
    purity: '99.3%',
    searchKeywords: ['rad-140']
  },
  {
    id: 'pramipexole-2mg-30ml',
    name: 'Pramipexole 2mg · 30ml',
    baseName: 'Pramipexole',
    slug: 'pramipexole-2mg-30ml',
    category: 'Liquids',
    price: 74,
    dosage: '2mg · 30ml',
    description: 'Research grade Pramipexole.',
    inStock: true,
    purity: '99.1%',
    searchKeywords: ['pramipexole']
  },
  {
    id: 'mk-2866-ostarine-33mg-30ml',
    name: 'MK-2866 (Ostarine) 33mg · 30ml',
    baseName: 'MK-2866 (Ostarine)',
    slug: 'mk-2866-ostarine-33mg-30ml',
    category: 'Liquids',
    price: 90,
    dosage: '33mg · 30ml',
    description: 'Research grade MK-2866 (Ostarine).',
    inStock: true,
    purity: '99.3%',
    searchKeywords: ['mk-2866 (ostarine)']
  },
  {
    id: 'ketotifen-fumarate-1mg-30ml',
    name: 'Ketotifen Fumarate 1mg · 30ml',
    baseName: 'Ketotifen Fumarate',
    slug: 'ketotifen-fumarate-1mg-30ml',
    category: 'Liquids',
    price: 57,
    dosage: '1mg · 30ml',
    description: 'Research grade Ketotifen Fumarate.',
    inStock: true,
    purity: '99.1%',
    searchKeywords: ['ketotifen fumarate']
  },
  {
    id: 'gw-501516-10mg-30ml',
    name: 'GW-501516 10mg · 30ml',
    baseName: 'GW-501516',
    slug: 'gw-501516-10mg-30ml',
    category: 'Liquids',
    price: 90,
    dosage: '10mg · 30ml',
    description: 'Research grade GW-501516.',
    inStock: true,
    purity: '99.3%',
    searchKeywords: ['gw-501516']
  },
  {
    id: 'exemestane-25mg-30ml',
    name: 'Exemestane 25mg · 30ml',
    baseName: 'Exemestane',
    slug: 'exemestane-25mg-30ml',
    category: 'Liquids',
    price: 80,
    dosage: '25mg · 30ml',
    description: 'Research grade Exemestane.',
    inStock: true,
    purity: '99.2%',
    searchKeywords: ['exemestane']
  },
  {
    id: 'clomiphene-40mg-30ml',
    name: 'Clomiphene 40mg · 30ml',
    baseName: 'Clomiphene',
    slug: 'clomiphene-40mg-30ml',
    category: 'Liquids',
    price: 58,
    dosage: '40mg · 30ml',
    description: 'Research grade Clomiphene.',
    inStock: true,
    purity: '99.2%',
    searchKeywords: ['clomiphene']
  },
  {
    id: 'clenbuterol-200mcg-30ml',
    name: 'Clenbuterol 200mcg · 30ml',
    baseName: 'Clenbuterol',
    slug: 'clenbuterol-200mcg-30ml',
    category: 'Liquids',
    price: 80,
    dosage: '200mcg · 30ml',
    description: 'Research grade Clenbuterol.',
    inStock: true,
    purity: '99.1%',
    searchKeywords: ['clenbuterol']
  },

  // --- Capsules ---
  {
    id: 'tesofensine-500mcg-60ct',
    name: 'Tesofensine 500mcg · 60ct',
    baseName: 'Tesofensine',
    slug: 'tesofensine-500mcg-60ct',
    category: 'Capsules',
    price: 199,
    dosage: '500mcg · 60ct',
    description: 'Research grade Tesofensine.',
    inStock: true,
    purity: '99.2%',
    searchKeywords: ['tesofensine']
  },
  {
    id: 'lgd-4033-10mg-30ct',
    name: 'LGD-4033 10mg · 30ct',
    baseName: 'LGD-4033',
    slug: 'lgd-4033-10mg-30ct',
    category: 'Capsules',
    price: 80,
    dosage: '10mg · 30ct',
    description: 'Research grade LGD-4033.',
    inStock: true,
    purity: '99.3%',
    searchKeywords: ['lgd-4033']
  },
  {
    id: 'aod-9604-500mcg-60ct',
    name: 'AOD-9604 500mcg · 60ct',
    baseName: 'AOD-9604',
    slug: 'aod-9604-500mcg-60ct',
    category: 'Capsules',
    price: 199,
    dosage: '500mcg · 60ct',
    description: 'Research grade AOD-9604.',
    inStock: true,
    purity: '99.2%',
    searchKeywords: ['aod-9604']
  },
  {
    id: 'bello-capello-60ct',
    name: 'Bello Capello 60ct',
    baseName: 'Bello Capello',
    slug: 'bello-capello-60ct',
    category: 'Capsules',
    price: 80,
    dosage: '60ct',
    description: 'Research grade Bello Capello.',
    inStock: true,
    purity: '99.0%',
    searchKeywords: ['bello capello']
  },
  {
    id: 'mk-677-12-5mg-60ct',
    name: 'MK-677 12.5mg · 60ct',
    baseName: 'MK-677',
    slug: 'mk-677-12-5mg-60ct',
    category: 'Capsules',
    price: 79,
    dosage: '12.5mg · 60ct',
    description: 'Research grade MK-677.',
    inStock: true,
    purity: '99.2%',
    searchKeywords: ['mk-677']
  },
  {
    id: 'bpc-157-500mcg-60ct',
    name: 'BPC-157 500mcg · 60ct',
    baseName: 'BPC-157',
    slug: 'bpc-157-500mcg-60ct',
    category: 'Capsules',
    price: 80,
    dosage: '500mcg · 60ct',
    description: 'Research grade BPC-157.',
    inStock: true,
    purity: '99.5%',
    searchKeywords: ['bpc-157']
  },
];
