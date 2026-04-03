export const FAQ_ITEMS = [
  {
    id: 1,
    category: 'umum',
    question: 'Apakah saya perlu keahlian coding untuk pakai ilyschool?',
    answer:
      'Sama sekali tidak. Anda cukup mengisi formulir data sekolah yang kami kirimkan, sisanya tim kami yang kerjakan. Untuk Paket Aktif dan Unggul, kami juga menyediakan CMS yang bisa dioperasikan siapa saja tanpa keahlian teknis.',
  },
  {
    id: 2,
    category: 'umum',
    question: 'Berapa lama website sekolah selesai dibuat?',
    answer:
      '2–3 hari kerja setelah data sekolah lengkap diterima. Proses dimulai setelah Anda mengisi Google Form yang kami kirimkan via WhatsApp. Semakin lengkap data yang diberikan, semakin cepat prosesnya.',
  },
  {
    id: 3,
    category: 'fitur',
    question: 'Apa itu "change request" dan bagaimana cara pakainya?',
    answer:
      'Change request adalah permintaan perubahan konten website — misalnya update foto, ganti teks pengumuman, tambah profil guru baru, atau update informasi sekolah. Setiap paket sudah include 12x change request per tahun (1x per bulan). Cara pakainya cukup chat WhatsApp kami dengan detail perubahan yang diinginkan.',
  },
  {
    id: 4,
    category: 'domain',
    question: 'Apakah domain .sch.id langsung aktif setelah daftar?',
    answer:
      'Domain .sch.id didaftarkan atas nama sekolah Anda dan memerlukan dokumen legalitas sekolah (SK pendirian atau akta notaris yayasan). Proses pendaftaran biasanya 3–5 hari kerja setelah dokumen lengkap. Kami bantu seluruh prosesnya tanpa biaya tambahan di Paket Aktif dan Unggul.',
  },
  {
    id: 5,
    category: 'domain',
    question: 'Paket Hadir subdomain-nya seperti apa?',
    answer:
      'Untuk Paket Hadir, website Anda akan menggunakan subdomain gratis dengan format: namasekolah.ilyschool.com. Contoh: smpnegeri4depok.ilyschool.com. Subdomain ini sudah dilengkapi SSL (https://) dan bisa langsung dibagikan ke orang tua dan masyarakat.',
  },
  {
    id: 6,
    category: 'pembayaran',
    question: 'Bagaimana cara perpanjang langganan?',
    answer:
      'Kami akan mengingatkan 30 hari sebelum masa aktif berakhir via WhatsApp. Perpanjangan bisa dilakukan dengan transfer bank atau QRIS. Setelah konfirmasi pembayaran, masa aktif langsung diperpanjang 1 tahun.',
  },
  {
    id: 7,
    category: 'pembayaran',
    question: 'Bisa upgrade paket di tengah tahun berjalan?',
    answer:
      'Bisa. Hubungi kami via WhatsApp dan kami akan hitung selisih harga secara proporsional berdasarkan sisa masa aktif Anda. Upgrade bisa dilakukan kapan saja tanpa kehilangan konten yang sudah ada.',
  },
  {
    id: 8,
    category: 'teknis',
    question: 'Apakah website bisa dilihat dengan baik di HP?',
    answer:
      'Ya. Semua template ilyschool dirancang mobile-first — tampil sempurna di smartphone, tablet, dan desktop. Mengingat lebih dari 70% orang tua mengakses internet via HP, ini adalah prioritas utama kami.',
  },
  {
    id: 9,
    category: 'teknis',
    question: 'Apakah website akan tetap online jika saya tidak update konten?',
    answer:
      'Ya. Website Anda tetap online selama masa langganan aktif, tidak peduli apakah Anda menggunakan change request atau tidak. Server kami menjamin uptime 99.9%.',
  },
  {
    id: 10,
    category: 'layanan',
    question: 'Layanan tambahan apa saja yang tersedia di Paket Unggul?',
    answer:
      'Ada 50+ pilihan layanan tambahan yang bisa dipilih — mulai dari PPDB Online, Portal Orang Tua, WA Blast Notifikasi, Absensi Digital, E-Rapor, Jadwal Pelajaran Online, Surat Digital, hingga Perpustakaan Digital. Di Paket Unggul Anda bisa pilih 3 layanan sesuai kebutuhan sekolah.',
  },
]

// Helper — filter FAQ berdasarkan kategori
export const getFAQByCategory = (category) =>
  category === 'semua'
    ? FAQ_ITEMS
    : FAQ_ITEMS.filter((f) => f.category === category)

// Daftar kategori untuk filter tab
export const FAQ_CATEGORIES = [
  { id: 'semua', label: 'Semua' },
  { id: 'umum', label: 'Umum' },
  { id: 'fitur', label: 'Fitur' },
  { id: 'domain', label: 'Domain' },
  { id: 'pembayaran', label: 'Pembayaran' },
  { id: 'teknis', label: 'Teknis' },
  { id: 'layanan', label: 'Layanan' },
]
