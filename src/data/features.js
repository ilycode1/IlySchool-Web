// ================================================================
// FITUR UTAMA
// Ditampilkan di section Features sebagai grid card
// icon → nama ikon dari lucide-react (string, bukan komponen)
// ================================================================
export const MAIN_FEATURES = [
  // --- GRUP 1: Informasi & Profil ---
  {
    id: 'hero-banner',
    group: 'Informasi & Profil',
    icon: 'Image',
    title: 'Hero Banner & Slider',
    description:
      'Tampilan pertama yang memukau — slider foto sekolah dengan animasi profesional.',
  },
  {
    id: 'profile',
    group: 'Informasi & Profil',
    icon: 'BookOpen',
    title: 'Profil Lengkap Sekolah',
    description:
      'Sejarah, visi misi, sambutan kepala sekolah — semua tersaji rapi dan profesional.',
  },
  {
    id: 'org-structure',
    group: 'Informasi & Profil',
    icon: 'Network',
    title: 'Struktur Organisasi',
    description:
      'Bagan organisasi sekolah yang jelas — dari kepala sekolah hingga koordinator.',
  },
  {
    id: 'teachers',
    group: 'Informasi & Profil',
    icon: 'Users',
    title: 'Profil Guru & Staf',
    description:
      'Galeri profil tenaga pendidik yang membangun kepercayaan orang tua calon siswa.',
  },
  {
    id: 'facilities',
    group: 'Informasi & Profil',
    icon: 'Building2',
    title: 'Fasilitas & Program Unggulan',
    description:
      'Tampilkan keunggulan sekolah — lab, perpustakaan, lapangan, dan program khusus.',
  },
  {
    id: 'achievements',
    group: 'Informasi & Profil',
    icon: 'Trophy',
    title: 'Prestasi Sekolah',
    description:
      'Pamerkan pencapaian siswa dan institusi — dari tingkat kota hingga nasional.',
  },

  // --- GRUP 2: Konten & Komunikasi ---
  {
    id: 'news',
    group: 'Konten & Komunikasi',
    icon: 'Newspaper',
    title: 'Pengumuman & Berita',
    description:
      'Informasi PPDB, kegiatan, dan pengumuman penting selalu up-to-date.',
  },
  {
    id: 'gallery',
    group: 'Konten & Komunikasi',
    icon: 'GalleryHorizontal',
    title: 'Galeri Foto Kegiatan',
    description:
      'Dokumentasi kegiatan sekolah yang menarik — orang tua bisa lihat aktivitas anak.',
  },
  {
    id: 'students',
    group: 'Konten & Komunikasi',
    icon: 'GraduationCap',
    title: 'Kesiswaan & Ekstrakulikuler',
    description:
      'Daftar ekskul, kegiatan siswa, dan postingan yang dikategorikan rapi.',
  },
  {
    id: 'testimonials',
    group: 'Konten & Komunikasi',
    icon: 'MessageSquareQuote',
    title: 'Testimoni & Alumni',
    description:
      'Cerita sukses alumni dan ulasan orang tua yang membangun reputasi sekolah.',
  },
  {
    id: 'calendar',
    group: 'Konten & Komunikasi',
    icon: 'CalendarDays',
    title: 'Kalender Akademik',
    description:
      'Jadwal kegiatan dan agenda penting sekolah yang bisa diakses kapan saja.',
  },

  // --- GRUP 3: Teknis & Keamanan ---
  {
    id: 'ssl',
    group: 'Teknis & Keamanan',
    icon: 'Shield',
    title: 'SSL  Gratis',
    description:
      'Website sekolah Anda aman dengan enkripsi HTTPS — tidak ada biaya tambahan.',
  },
  {
    id: 'responsive',
    group: 'Teknis & Keamanan',
    icon: 'Smartphone',
    title: 'Responsif di Semua Perangkat',
    description:
      'Tampil sempurna di HP, tablet, dan desktop — lebih dari 70% pengunjung dari HP.',
  },
  {
    id: 'whatsapp',
    group: 'Teknis & Keamanan',
    icon: 'MessageCircle',
    title: 'Tombol WhatsApp Langsung',
    description:
      'Orang tua bisa langsung hubungi sekolah dengan satu klik — tanpa cari nomor dulu.',
  },
  {
    id: 'maps',
    group: 'Teknis & Keamanan',
    icon: 'MapPin',
    title: 'Embed Google Maps',
    description:
      'Lokasi sekolah langsung terintegrasi — calon siswa mudah menemukan sekolah Anda.',
  },
  {
    id: 'social',
    group: 'Teknis & Keamanan',
    icon: 'Share2',
    title: 'Integrasi Media Sosial',
    description:
      'Terhubung ke Instagram, Facebook, YouTube, dan TikTok sekolah dalam satu tempat.',
  },
]

// ================================================================
// KEUNGGULAN PRODUK
// Ditampilkan di section ProductOverview sebagai 4 pilar utama
// Lebih ringkas dari MAIN_FEATURES — hanya highlight utama
// ================================================================
export const PRODUCT_PILLARS = [
  {
    id: 'design',
    icon: 'Palette',
    title: 'Desain Profesional',
    description:
      '10 pilihan template yang dirancang khusus untuk berbagai jenis sekolah di Indonesia.',
    color: 'primary',
  },
  {
    id: 'speed',
    icon: 'Zap',
    title: 'Cepat & Mudah',
    description:
      'Website sekolah Anda siap dalam 3 hari kerja. Tidak perlu tahu coding sama sekali.',
    color: 'secondary',
  },
  {
    id: 'secure',
    icon: 'ShieldCheck',
    title: 'Aman & Terpercaya',
    description:
      'SSL  gratis di semua paket. Data sekolah Anda terlindungi penuh.',
    color: 'accent',
  },
  {
    id: 'support',
    icon: 'HeadphonesIcon',
    title: 'Ada yang Bantu',
    description:
      'Setiap perubahan konten bisa diajukan langsung. Tim kami siap membantu kapan saja.',
    color: 'primary',
  },
]

// ================================================================
// CHECKLIST FITUR PER GRUP
// Versi ringkas untuk ditampilkan sebagai checklist di Features section
// ================================================================
export const FEATURE_GROUPS = [
  {
    id: 'info',
    title: 'Informasi & Profil',
    icon: 'BookOpen',
    items: [
      'Hero banner & slider foto',
      'Sejarah & visi misi sekolah',
      'Sambutan kepala sekolah',
      'Struktur organisasi',
      'Profil guru & tenaga pendidik',
      'Fasilitas & program unggulan',
      'Prestasi sekolah',
    ],
  },
  {
    id: 'content',
    title: 'Konten & Komunikasi',
    icon: 'Newspaper',
    items: [
      'Pengumuman & berita terkini',
      'Galeri foto kegiatan',
      'Kesiswaan & ekstrakulikuler',
      'Testimoni orang tua & alumni',
      'Kalender akademik & agenda',
    ],
  },
  {
    id: 'technical',
    title: 'Teknis & Keamanan',
    icon: 'Shield',
    items: [
      'SSL  (https://)',
      'Responsif di semua perangkat',
      'Tombol WhatsApp langsung',
      'Embed Google Maps',
      'Form kontak & buku tamu',
      'Integrasi media sosial',
    ],
  },
]
