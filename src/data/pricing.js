export const PRICING_PLANS = [
  {
    id: 'hadir',
    name: 'Hadir',
    label: 'Untuk memulai',
    price: 100000,
    originalPrice: 250000,
    discount: '60%',
    tagline: 'Langkah pertama sekolah Anda tampil di internet.',
    description:
      'Mulai hadir secara digital dengan website profesional — tanpa ribet, tanpa modal besar.',
    popular: false,
    ctaLabel: 'Mulai via WhatsApp',
    ctaType: 'whatsapp',

    // pesan WA spesifik per paket
    waMessage:
      'Halo ilyschool, saya tertarik dengan Paket Hadir (Rp 100.000/tahun). Boleh info lebih lanjut?',

    features: [
      { text: 'Website HTML/CSS/JS profesional', included: true },
      { text: 'Subdomain gratis (namasekolah.ilyschool.com)', included: true },
      { text: 'SSL  (https://)', included: true },
      { text: '10 pilihan template desain', included: true },
      { text: '12x perubahan konten per tahun', included: true },
      { text: 'Perubahan tambahan Rp 50.000/request', included: true },
      { text: 'Domain .sch.id', included: false },
      { text: 'CMS — kelola konten mandiri', included: false },
      { text: 'Layanan tambahan (PPDB, dll)', included: false },
    ],
  },

  {
    id: 'aktif',
    name: 'Aktif',
    label: 'Paling banyak dipilih',
    price: 750000,
    originalPrice: 1000000,
    discount: '25%',
    tagline: 'Kelola website mandiri, tanpa perlu keahlian teknis.',
    description:
      'Tidak hanya tampil — sekolah Anda kini aktif berkomunikasi dengan orang tua & calon siswa baru.',
    popular: true,
    ctaLabel: 'Pilih Paket Ini via WhatsApp',
    ctaType: 'whatsapp',

    waMessage:
      'Halo ilyschool, saya tertarik dengan Paket Aktif (Rp 750.000/tahun). Boleh info lebih lanjut?',

    features: [
      { text: 'Semua fitur Paket Hadir', included: true },
      { text: 'Domain resmi .sch.id', included: true },
      { text: 'SSL  (https://)', included: true },
      { text: 'CMS — kelola konten mandiri', included: true },
      { text: '10 pilihan template desain', included: true },
      { text: '12x perubahan konten per tahun', included: true },
      { text: 'Perubahan tambahan Rp 70.000/request', included: true },
      { text: 'Layanan tambahan (PPDB, dll)', included: false },
    ],
  },

  {
    id: 'unggul',
    name: 'Unggul',
    label: 'Fitur paling lengkap',
    price: 1500000,
    originalPrice: 2000000,
    discount: '25%',
    tagline: 'Pusat ekosistem digital sekolah Anda.',
    description:
      'Lebih dari sekadar profil — jadikan website sebagai pusat ekosistem digital sekolah Anda.',
    popular: false,
    ctaLabel: 'Konsultasi Gratis via WhatsApp',
    ctaType: 'whatsapp',

    waMessage:
      'Halo ilyschool, saya tertarik dengan Paket Unggul (Rp 1.500.000/tahun). Boleh konsultasi dulu?',

    features: [
      { text: 'Semua fitur Paket Aktif', included: true },
      { text: 'Domain resmi .sch.id', included: true },
      { text: 'SSL  (https://)', included: true },
      { text: 'CMS lengkap & fleksibel', included: true },
      { text: '10 pilihan template desain', included: true },
      { text: '12x perubahan konten per tahun', included: true },
      { text: 'Perubahan tambahan Rp 90.000/request', included: true },
      { text: '3 layanan tambahan pilihan', included: true },
      { text: 'Pilihan dari 50+ layanan tersedia', included: true },
    ],

    // daftar layanan tambahan yang bisa dipilih
    // ditampilkan sebagai dropdown/tooltip di pricing card
    additionalServices: [
      'PPDB Online',
      'Portal Orang Tua',
      'WA Blast Notifikasi',
      'Absensi Digital',
      'E-Rapor',
      'Jadwal Pelajaran Online',
      'Dan 44 layanan lainnya...',
    ],
  },
]

// ================================================================
// HELPER — format harga ke Rupiah
// Dipakai di komponen pricing untuk tampilkan angka
// ================================================================
export const formatRupiah = (angka) => {
  // Intl.NumberFormat → API browser bawaan untuk format angka
  // 'id-ID'          → locale Indonesia
  // style: 'currency'→ format sebagai mata uang
  // currency: 'IDR'  → Rupiah
  // maximumFractionDigits: 0 → tidak tampilkan desimal
  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    maximumFractionDigits: 0,
  }).format(angka)
}
