export const TEMPLATES = [
  {
    id: 'royal-blue',
    number: '01',
    name: 'Royal Blue',
    description: 'Profesional dan berwibawa — cocok untuk SMA dan SMP Negeri.',
    suitableFor: ['SMA Negeri', 'SMP Negeri', 'Sekolah Umum'],
    colors: {
      primary: '#1a3c6e',
      secondary: '#2e6db4',
      accent: '#f5a623',
    },
    thumbnail: 'https://placehold.co/800x600/1a3c6e/ffffff?text=Royal+Blue',
    popular: true,
    previewUrl: 'https://royal-blue.ilyschool.com',
  },
  {
    id: 'forest-green',
    number: '02',
    name: 'Forest Green',
    description: 'Natural dan Islami — dirancang khusus untuk Madrasah dan MI.',
    suitableFor: ['Madrasah', 'MI', 'MTs', 'MA'],
    colors: {
      primary: '#1b5e3b',
      secondary: '#2d8653',
      accent: '#c8a84b',
    },
    thumbnail: 'https://placehold.co/800x600/1b5e3b/ffffff?text=Forest+Green',
    popular: true,
  },
  {
    id: 'sage-mint',
    number: '03',
    name: 'Sage Mint',
    description: 'Segar dan ramah anak — sempurna untuk SD dan MI.',
    suitableFor: ['SD', 'MI', 'Sekolah Dasar Islam'],
    colors: {
      primary: '#3a8f6f',
      secondary: '#5bb89a',
      accent: '#ff9f43',
    },
    thumbnail: 'https://placehold.co/800x600/3a8f6f/ffffff?text=Sage+Mint',
    popular: false,
  },
  {
    id: 'slate-professional',
    number: '04',
    name: 'Slate Professional',
    description: 'Modern dan techy — ideal untuk SMK Teknik dan IT.',
    suitableFor: ['SMK Teknik', 'SMK IT', 'Sekolah Vokasi'],
    colors: {
      primary: '#2d3748',
      secondary: '#4a5568',
      accent: '#3182ce',
    },
    thumbnail: 'https://placehold.co/800x600/2d3748/ffffff?text=Slate+Pro',
    popular: false,
  },
  {
    id: 'maroon-gold',
    number: '05',
    name: 'Maroon Gold',
    description: 'Prestisius dan klasik — untuk sekolah yayasan bersejarah.',
    suitableFor: ['SMA Swasta', 'Sekolah Yayasan', 'Sekolah Formal'],
    colors: {
      primary: '#7b1f2e',
      secondary: '#9c2b3f',
      accent: '#c9a84c',
    },
    thumbnail: 'https://placehold.co/800x600/7b1f2e/ffffff?text=Maroon+Gold',
    popular: false,
  },
  {
    id: 'ocean-teal',
    number: '06',
    name: 'Ocean Teal',
    description:
      'Fresh dan dinamis — untuk SMP swasta modern dan internasional.',
    suitableFor: ['SMP Swasta', 'Sekolah Internasional', 'Sekolah Modern'],
    colors: {
      primary: '#0f6e75',
      secondary: '#1a9aa3',
      accent: '#f6c90e',
    },
    thumbnail: 'https://placehold.co/800x600/0f6e75/ffffff?text=Ocean+Teal',
    popular: false,
  },
  {
    id: 'earth-warm',
    number: '07',
    name: 'Earth Warm',
    description:
      'Hangat dan membumi — sempurna untuk pesantren dan boarding school.',
    suitableFor: ['Pesantren', 'Boarding School', 'MTs Swasta'],
    colors: {
      primary: '#7d5a3c',
      secondary: '#a07850',
      accent: '#4caf7d',
    },
    thumbnail: 'https://placehold.co/800x600/7d5a3c/ffffff?text=Earth+Warm',
    popular: false,
  },
  {
    id: 'clean-minimal',
    number: '08',
    name: 'Clean Minimal',
    description: 'Bersih dan universal — cocok untuk semua jenis sekolah.',
    suitableFor: ['Semua Jenis Sekolah', 'Universal'],
    colors: {
      primary: '#2c2c2c',
      secondary: '#555555',
      accent: '#0066cc',
    },
    thumbnail: 'https://placehold.co/800x600/2c2c2c/ffffff?text=Clean+Minimal',
    popular: false,
  },
  {
    id: 'civic-green',
    number: '09',
    name: 'Civic Green',
    description: 'Resmi dan terpercaya — untuk sekolah negeri dan dinas.',
    suitableFor: ['SD Negeri', 'SMP Negeri', 'SMA Negeri'],
    colors: {
      primary: '#2e7d32',
      secondary: '#388e3c',
      accent: '#f9a825',
    },
    thumbnail: 'https://placehold.co/800x600/2e7d32/ffffff?text=Civic+Green',
    popular: false,
  },
  {
    id: 'purple-smart',
    number: '10',
    name: 'Purple Smart',
    description: 'Cerdas dan inovatif — untuk sekolah unggulan dan plus.',
    suitableFor: ['Sekolah Unggulan', 'Sekolah Plus', 'SMA Riset'],
    colors: {
      primary: '#4a2080',
      secondary: '#6b35b8',
      accent: '#f9a825',
    },
    thumbnail: 'https://placehold.co/800x600/4a2080/ffffff?text=Purple+Smart',
    popular: false,
  },
]

// Helper — ambil template berdasarkan id
export const getTemplateById = (id) =>
  TEMPLATES.find((t) => t.id === id) || null

// Helper — ambil template yang popular saja
export const getPopularTemplates = () => TEMPLATES.filter((t) => t.popular)
