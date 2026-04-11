// src/data/blog.js
// ================================================================
// DATA BLOG
// Untuk tambah artikel baru: copy salah satu objek di bawah,
// ganti semua fieldnya, tambahkan ke array BLOG_POSTS.
// slug harus unik dan hanya boleh huruf kecil + tanda hubung.
// ================================================================

export const BLOG_POSTS = [
  {
    id: 1,
    slug: 'kenapa-sekolah-butuh-website',
    title: 'Kenapa Sekolah Harus Punya Website di Era Digital Ini?',
    excerpt:
      'Orang tua zaman sekarang mencari informasi sekolah lewat Google sebelum mendaftar. Kalau sekolah Anda tidak ditemukan, calon siswa bisa langsung beralih ke sekolah lain.',
    category: 'Tips Digital',
    author: 'Tim ilyschool',
    publishedAt: '2026-03-10',
    readTime: 5,
    thumbnail: '/assets/images/blog/blog1.webp',
    tags: ['website sekolah', 'digital', 'tips'],
    // SEO
    metaTitle: 'Kenapa Sekolah Harus Punya Website? | ilyschool Blog',
    metaDescription:
      'Pelajari 5 alasan utama mengapa sekolah wajib memiliki website profesional di era digital ini. Dari kepercayaan orang tua hingga PPDB online.',
    // Konten artikel — tambah/edit paragraf di sini
    content: [
      {
        type: 'paragraph',
        text: 'Di era digital ini, keputusan orang tua memilih sekolah tidak lagi hanya dari mulut ke mulut. Lebih dari 70% orang tua mengaku mencari informasi sekolah melalui internet sebelum mendaftarkan anaknya. Pertanyaannya: apakah sekolah Anda bisa ditemukan?',
      },
      {
        type: 'heading',
        text: '1. Kepercayaan Dimulai dari Tampilan Online',
      },
      {
        type: 'paragraph',
        text: 'Kesan pertama terjadi secara online. Orang tua yang menemukan website sekolah yang rapi, profesional, dan informatif akan langsung merasa lebih percaya dibanding sekolah yang tidak punya website sama sekali — atau lebih buruk, punya website tapi terbengkalai.',
      },
      {
        type: 'heading',
        text: '2. PPDB Lebih Mudah dan Terorganisir',
      },
      {
        type: 'paragraph',
        text: 'Proses Penerimaan Peserta Didik Baru (PPDB) yang dilakukan secara online memangkas antrian panjang, meminimalisir kertas, dan memberikan pengalaman yang lebih baik bagi orang tua calon siswa.',
      },
      {
        type: 'heading',
        text: '3. Informasi Sekolah Selalu Up-to-Date',
      },
      {
        type: 'paragraph',
        text: 'Jadwal ujian, pengumuman kegiatan, prestasi siswa — semua bisa diakses kapan saja dan di mana saja. Orang tua tidak perlu lagi menunggu selebaran atau SMS berantai.',
      },
      {
        type: 'heading',
        text: '4. Meningkatkan Kredibilitas di Mata Stakeholder',
      },
      {
        type: 'paragraph',
        text: 'Website yang profesional tidak hanya menarik calon siswa baru, tapi juga meningkatkan kepercayaan dinas pendidikan, mitra sekolah, hingga donatur yang ingin mendukung program sekolah.',
      },
      {
        type: 'heading',
        text: '5. Investasi Kecil, Dampak Besar',
      },
      {
        type: 'paragraph',
        text: 'Dengan harga mulai Rp 100.000 per tahun, sekolah sudah bisa tampil profesional di internet. Ini jauh lebih murah dibanding mencetak brosur atau memasang spanduk — dan jangkauannya jauh lebih luas.',
      },
      {
        type: 'closing',
        text: 'ilyschool hadir untuk memastikan setiap sekolah di Indonesia bisa tampil profesional secara digital, tanpa anggaran besar dan tanpa kerumitan teknis. Mulai sekarang, sebelum calon siswa Anda memilih sekolah lain.',
      },
    ],
  },

  {
    id: 2,
    slug: 'tips-konten-website-sekolah',
    title: '7 Konten Wajib yang Harus Ada di Website Sekolah',
    excerpt:
      'Punya website saja tidak cukup. Konten yang tepat akan membuat orang tua betah dan calon siswa tertarik mendaftar. Ini daftarnya.',
    category: 'Tips Konten',
    author: 'Tim ilyschool',
    publishedAt: '2026-03-20',
    readTime: 6,
    thumbnail: '/assets/images/blog/blog2.webp',
    tags: ['konten', 'website sekolah', 'tips'],
    metaTitle: '7 Konten Wajib Website Sekolah | ilyschool Blog',
    metaDescription:
      '7 jenis konten yang wajib ada di website sekolah Anda agar orang tua percaya dan calon siswa tertarik mendaftar.',
    content: [
      {
        type: 'paragraph',
        text: 'Banyak sekolah yang sudah punya website, tapi kontennya kosong atau tidak di-update. Website seperti ini justru bisa merusak kepercayaan. Berikut 7 konten yang wajib ada.',
      },
      {
        type: 'heading',
        text: '1. Profil dan Sejarah Sekolah',
      },
      {
        type: 'paragraph',
        text: 'Ceritakan perjalanan sekolah Anda — kapan berdiri, visi misi, dan apa yang membuat sekolah Anda berbeda. Orang tua ingin mengenal sekolah sebelum mempercayakan anaknya.',
      },
      {
        type: 'heading',
        text: '2. Informasi PPDB',
      },
      {
        type: 'paragraph',
        text: 'Jadwal pendaftaran, persyaratan, biaya, dan cara mendaftar harus mudah ditemukan. Ini adalah halaman yang paling dicari orang tua saat musim PPDB.',
      },
      {
        type: 'heading',
        text: '3. Galeri Kegiatan',
      },
      {
        type: 'paragraph',
        text: 'Foto dan video kegiatan sekolah menunjukkan suasana belajar yang hidup. Orang tua bisa membayangkan bagaimana anaknya akan belajar dan berkembang di sana.',
      },
      {
        type: 'heading',
        text: '4. Prestasi Siswa',
      },
      {
        type: 'paragraph',
        text: 'Tampilkan pencapaian siswa — olimpiade, lomba, beasiswa. Ini adalah bukti nyata kualitas pendidikan yang diberikan sekolah Anda.',
      },
      {
        type: 'heading',
        text: '5. Profil Guru dan Staf',
      },
      {
        type: 'paragraph',
        text: 'Orang tua ingin tahu siapa yang akan mengajar anaknya. Profil singkat guru dengan foto dan latar pendidikan membangun kepercayaan yang kuat.',
      },
      {
        type: 'heading',
        text: '6. Kontak dan Lokasi',
      },
      {
        type: 'paragraph',
        text: 'Nomor telepon, WhatsApp, email, dan peta lokasi yang jelas. Semakin mudah dihubungi, semakin besar kemungkinan calon siswa baru mendaftar.',
      },
      {
        type: 'heading',
        text: '7. Berita dan Pengumuman',
      },
      {
        type: 'paragraph',
        text: 'Update rutin tentang kegiatan sekolah menunjukkan bahwa website aktif dikelola. Ini juga membantu SEO sehingga sekolah lebih mudah ditemukan di Google.',
      },
      {
        type: 'closing',
        text: 'Semua konten di atas bisa dikelola sendiri dengan fitur CMS di paket ilyschool Aktif dan Unggul — tanpa perlu keahlian teknis sama sekali.',
      },
    ],
  },

  {
    id: 3,
    slug: 'perbedaan-domain-sch-id-dan-subdomain',
    title: 'Domain .sch.id vs Subdomain: Mana yang Lebih Baik untuk Sekolah?',
    excerpt:
      'Banyak yang bingung soal perbedaan domain .sch.id dengan subdomain gratis. Simak penjelasan lengkapnya agar Anda bisa memilih sesuai kebutuhan sekolah.',
    category: 'Edukasi',
    author: 'Tim ilyschool',
    publishedAt: '2026-04-01',
    readTime: 4,
    thumbnail: '/assets/images/blog/blog3.webp',
    tags: ['domain', 'website sekolah', 'edukasi'],
    metaTitle: 'Domain .sch.id vs Subdomain untuk Sekolah | ilyschool Blog',
    metaDescription:
      'Penjelasan lengkap perbedaan domain .sch.id dan subdomain gratis untuk website sekolah. Mana yang cocok untuk kebutuhan sekolah Anda?',
    content: [
      {
        type: 'paragraph',
        text: 'Ketika membangun website sekolah, salah satu keputusan penting adalah memilih jenis domain. Ada dua pilihan utama: domain .sch.id resmi atau subdomain gratis seperti namasekolah.ilyschool.com.',
      },
      {
        type: 'heading',
        text: 'Apa itu Domain .sch.id?',
      },
      {
        type: 'paragraph',
        text: 'Domain .sch.id adalah domain resmi untuk institusi pendidikan di Indonesia yang dikeluarkan oleh Pandi (Pengelola Nama Domain Internet Indonesia). Contoh: sman1depok.sch.id. Untuk mendapatkannya, sekolah perlu melampirkan dokumen resmi seperti SK pendirian sekolah.',
      },
      {
        type: 'heading',
        text: 'Apa itu Subdomain?',
      },
      {
        type: 'paragraph',
        text: 'Subdomain adalah alamat web yang menumpang pada domain utama. Misalnya, namasekolah.ilyschool.com adalah subdomain dari ilyschool.com. Ini lebih cepat didapat dan tidak memerlukan dokumen.',
      },
      {
        type: 'heading',
        text: 'Kapan Pilih .sch.id?',
      },
      {
        type: 'list',
        items: [
          'Sekolah negeri atau swasta yang sudah memiliki badan hukum resmi',
          'Ingin terlihat lebih kredibel dan resmi di mata orang tua',
          'Membutuhkan alamat web untuk keperluan dinas atau akreditasi',
          'Anggaran tersedia (biaya domain .sch.id berkisar Rp 100.000–200.000/tahun)',
        ],
      },
      {
        type: 'heading',
        text: 'Kapan Pilih Subdomain?',
      },
      {
        type: 'list',
        items: [
          'Ingin segera online tanpa proses administrasi yang panjang',
          'Anggaran terbatas — subdomain di ilyschool gratis',
          'Sekolah baru yang belum memiliki dokumen lengkap',
          'Untuk uji coba tampilan sebelum migrasi ke domain resmi',
        ],
      },
      {
        type: 'closing',
        text: 'Di ilyschool, Anda bisa mulai dengan subdomain gratis (Paket Hadir) dan upgrade ke domain .sch.id kapan saja (Paket Aktif & Unggul) — tanpa kehilangan konten yang sudah ada.',
      },
    ],
  },
]

// ================================================================
// HELPERS
// ================================================================

// Ambil semua post, diurutkan dari yang terbaru
export const getAllPosts = () =>
  [...BLOG_POSTS].sort(
    (a, b) => new Date(b.publishedAt) - new Date(a.publishedAt)
  )

// Ambil post berdasarkan slug
export const getPostBySlug = (slug) =>
  BLOG_POSTS.find((p) => p.slug === slug) || null

// Ambil semua kategori unik
export const getAllCategories = () => [
  'Semua',
  ...new Set(BLOG_POSTS.map((p) => p.category)),
]

// Format tanggal ke bahasa Indonesia
export const formatDate = (dateStr) =>
  new Date(dateStr).toLocaleDateString('id-ID', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })
