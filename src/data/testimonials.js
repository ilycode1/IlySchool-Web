export const TESTIMONIALS = [
  {
    id: 1,
    name: 'Drs. Hendra Kusuma, M.Pd.',
    role: 'Kepala Sekolah',
    school: 'SMP Negeri 4 Depok',
    avatar: 'https://placehold.co/80x80/1a3c6e/ffffff?text=HK',
    rating: 5,
    quote:
      'Prosesnya cepat dan hasilnya melebihi ekspektasi kami. Orang tua murid langsung bisa akses informasi sekolah dari HP tanpa harus telepon ke TU.',
    template: 'royal-blue',
  },
  {
    id: 2,
    name: 'Ustadzah Aminah Rahayu, S.Pd.',
    role: 'Kepala Madrasah',
    school: 'MI Al-Hidayah Bogor',
    avatar: 'https://placehold.co/80x80/1b5e3b/ffffff?text=AR',
    rating: 5,
    quote:
      'Kami madrasah kecil dengan anggaran terbatas. Dengan harga Rp 100.000, kami sudah punya website yang terlihat profesional dan membuat wali murid lebih percaya.',
    template: 'forest-green',
  },
  {
    id: 3,
    name: 'Bpk. Ridwan Santoso, S.Kom.',
    role: 'Wakasek Bidang Humas',
    school: 'SMK Nusa Karya Bekasi',
    avatar: 'https://placehold.co/80x80/2d3748/ffffff?text=RS',
    rating: 5,
    quote:
      'Yang paling kami suka adalah bisa minta perubahan konten kapan saja. Tim ilyschool responsif dan hasilnya selalu rapi. Sangat memudahkan operator kami.',
    template: 'slate-professional',
  },
  {
    id: 4,
    name: 'Ibu Sari Dewi Rahayu',
    role: 'Orang Tua Siswa',
    school: 'SMA Nusantara Bangsa Depok',
    avatar: 'https://placehold.co/80x80/0f6e75/ffffff?text=SD',
    rating: 5,
    quote:
      'Saya jadi lebih mudah pantau informasi sekolah anak saya. Pengumuman PPDB, jadwal ujian, semua ada di website. Tidak perlu bolak-balik ke sekolah.',
    template: 'ocean-teal',
  },
  {
    id: 5,
    name: 'Ust. Ahmad Fauzi, Lc.',
    role: 'Pimpinan Pesantren',
    school: 'Pesantren Darul Hikmah Bogor',
    avatar: 'https://placehold.co/80x80/7d5a3c/ffffff?text=AF',
    rating: 5,
    quote:
      'Desain Earth Warm sangat cocok dengan karakter pesantren kami. Hangat, profesional, dan tidak terkesan terlalu corporate. Alhamdulillah hasilnya memuaskan.',
    template: 'earth-warm',
  },
]

// Helper — hitung rata-rata rating
export const getAverageRating = () => {
  const total = TESTIMONIALS.reduce((sum, t) => sum + t.rating, 0)
  return (total / TESTIMONIALS.length).toFixed(1)
}
