export interface Product {
  id: string;
  name: string;
  slug: string;
  category: string;
  price: number;
  dosage: string;
  description: string;
  inStock: boolean;
  purity: string;
  searchKeywords?: string[];
}

export const products: Product[] = [
  // --- Semaglutide -> SXL ---
  {
    id: 'sxl-025',
    name: 'SXL 0.25mg',
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
