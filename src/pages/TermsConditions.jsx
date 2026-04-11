// src/pages/TermsConditions.jsx
import { Helmet } from 'react-helmet-async'
import { BRAND_NAME, BRAND_DOMAIN, EMAIL } from '@/config/constants'

const LAST_UPDATED = '1 April 2026'

const Section = ({ title, children }) => (
  <div className="mb-10">
    <h2 className="font-heading text-xl font-bold text-gray-900 mb-4 pb-2 border-b border-gray-100">
      {title}
    </h2>
    <div className="text-gray-600 leading-relaxed space-y-3">{children}</div>
  </div>
)

const TermsConditions = () => (
  <>
    <Helmet>
      <title>Syarat & Ketentuan | {BRAND_NAME}</title>
      <meta
        name="description"
        content={`Syarat dan ketentuan penggunaan layanan ${BRAND_NAME} — platform website sekolah profesional Indonesia.`}
      />
      <meta name="robots" content="noindex, follow" />
      <link rel="canonical" href={`https://${BRAND_DOMAIN}/syarat-ketentuan`} />
    </Helmet>

    {/* Hero */}
    <section className="bg-primary pt-28 pb-12">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <span className="inline-block bg-accent text-gray-900 text-xs font-heading font-bold px-3 py-1 rounded-full mb-4">
          Legal
        </span>
        <h1 className="font-heading text-3xl sm:text-4xl font-bold text-white mb-3">
          Syarat & Ketentuan
        </h1>
        <p className="text-white/60 text-sm">
          Terakhir diperbarui: {LAST_UPDATED}
        </p>
      </div>
    </section>

    {/* Konten */}
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-14">

      <div className="bg-blue-50 border border-blue-200 rounded-xl p-5 mb-10 text-sm text-blue-800 leading-relaxed">
        Dengan menggunakan layanan {BRAND_NAME}, Anda dianggap telah membaca,
        memahami, dan menyetujui seluruh syarat dan ketentuan yang berlaku.
      </div>

      <Section title="1. Definisi">
        <ul className="space-y-2">
          <li><strong>"{BRAND_NAME}"</strong> merujuk pada platform dan layanan website sekolah yang dioperasikan oleh IlyCode Softwarelabs.</li>
          <li><strong>"Pengguna"</strong> merujuk pada pihak yang menggunakan layanan {BRAND_NAME}, dalam hal ini institusi sekolah atau perwakilannya.</li>
          <li><strong>"Layanan"</strong> merujuk pada pembuatan, pengelolaan, dan hosting website sekolah yang disediakan oleh {BRAND_NAME}.</li>
          <li><strong>"Konten"</strong> merujuk pada semua materi yang dikirimkan Pengguna kepada kami, termasuk teks, gambar, logo, dan dokumen.</li>
        </ul>
      </Section>

      <Section title="2. Penggunaan Layanan">
        <p>Dengan menggunakan layanan {BRAND_NAME}, Pengguna menyatakan bahwa:</p>
        <ul className="list-disc list-inside space-y-1 mt-2">
          <li>Informasi yang diberikan adalah akurat dan mewakili institusi sekolah yang sah</li>
          <li>Pengguna memiliki wewenang untuk mewakili sekolah dalam perjanjian ini</li>
          <li>Pengguna berusia minimal 18 tahun atau bertindak atas nama lembaga</li>
          <li>Pengguna tidak akan menggunakan layanan untuk tujuan yang melanggar hukum</li>
        </ul>
      </Section>

      <Section title="3. Paket Layanan dan Pembayaran">
        <p>
          {BRAND_NAME} menawarkan beberapa paket layanan dengan harga yang tertera di halaman resmi.
          Harga dapat berubah sewaktu-waktu dengan pemberitahuan terlebih dahulu.
        </p>
        <ul className="list-disc list-inside space-y-1 mt-2">
          <li>Pembayaran dilakukan di muka sebelum pengerjaan dimulai</li>
          <li>Masa aktif langganan dihitung sejak tanggal website di-<em>launch</em></li>
          <li>Perpanjangan layanan dilakukan sebelum masa aktif berakhir</li>
          <li>Harga promo berlaku selama stok/kuota tersedia dan dapat berakhir tanpa pemberitahuan</li>
        </ul>
      </Section>

      <Section title="4. Kebijakan Pengembalian Dana">
        <p>
          Mengingat sifat layanan kami yang berbasis jasa digital, pengembalian dana (refund)
          hanya dapat dilakukan dalam kondisi berikut:
        </p>
        <ul className="list-disc list-inside space-y-1 mt-2">
          <li>Website belum mulai dikerjakan dan permintaan pembatalan diajukan dalam 24 jam setelah pembayaran</li>
          <li>Terjadi kegagalan teknis dari pihak kami yang mengakibatkan website tidak dapat di-<em>launch</em></li>
        </ul>
        <p className="mt-3">
          Setelah proses pengerjaan dimulai, pembayaran tidak dapat dikembalikan. Kami
          berkomitmen menyelesaikan website sesuai dengan brief yang telah disepakati.
        </p>
      </Section>

      <Section title="5. Hak Kekayaan Intelektual">
        <p>
          Konten yang dikirimkan oleh Pengguna (logo, foto, teks sekolah) tetap menjadi
          milik Pengguna. Dengan mengirimkan konten, Pengguna memberikan izin kepada{' '}
          {BRAND_NAME} untuk menggunakan konten tersebut semata-mata untuk keperluan
          membangun dan mengelola website sekolah.
        </p>
        <p>
          Template desain, kode, dan aset visual yang dibuat oleh {BRAND_NAME} adalah
          milik IlyCode Softwarelabs. Pengguna mendapatkan lisensi penggunaan selama masa
          aktif berlangganan.
        </p>
      </Section>

      <Section title="6. Tanggung Jawab Konten">
        <p>
          Pengguna bertanggung jawab penuh atas konten yang dikirimkan dan dipublikasikan
          di website sekolah, termasuk memastikan bahwa konten tersebut:
        </p>
        <ul className="list-disc list-inside space-y-1 mt-2">
          <li>Tidak melanggar hak cipta atau hak kekayaan intelektual pihak lain</li>
          <li>Tidak mengandung konten yang menyesatkan, berbahaya, atau melanggar hukum</li>
          <li>Sesuai dengan nilai-nilai pendidikan dan norma yang berlaku</li>
        </ul>
        <p className="mt-3">
          {BRAND_NAME} berhak menolak atau menghapus konten yang melanggar ketentuan ini
          tanpa pemberitahuan sebelumnya.
        </p>
      </Section>

      <Section title="7. Uptime dan Ketersediaan Layanan">
        <p>
          Kami berkomitmen menjaga website sekolah Anda tetap online dengan target uptime
          99,5% per tahun. Namun, {BRAND_NAME} tidak bertanggung jawab atas downtime yang
          disebabkan oleh:
        </p>
        <ul className="list-disc list-inside space-y-1 mt-2">
          <li>Gangguan pada penyedia hosting pihak ketiga</li>
          <li>Pemeliharaan terjadwal yang telah diinformasikan sebelumnya</li>
          <li>Kejadian di luar kendali (force majeure)</li>
        </ul>
      </Section>

      <Section title="8. Penghentian Layanan">
        <p>
          {BRAND_NAME} berhak menghentikan layanan kepada Pengguna jika:
        </p>
        <ul className="list-disc list-inside space-y-1 mt-2">
          <li>Pengguna melanggar syarat dan ketentuan ini</li>
          <li>Masa berlangganan telah berakhir dan tidak diperpanjang</li>
          <li>Konten yang dipublikasikan melanggar hukum yang berlaku di Indonesia</li>
        </ul>
      </Section>

      <Section title="9. Batasan Tanggung Jawab">
        <p>
          Sejauh diizinkan oleh hukum yang berlaku, {BRAND_NAME} dan IlyCode Softwarelabs
          tidak bertanggung jawab atas kerugian tidak langsung, insidental, atau konsekuensial
          yang timbul dari penggunaan atau ketidakmampuan menggunakan layanan kami.
        </p>
      </Section>

      <Section title="10. Perubahan Syarat & Ketentuan">
        <p>
          Kami berhak memperbarui syarat dan ketentuan ini sewaktu-waktu. Perubahan signifikan
          akan diinformasikan minimal 14 hari sebelum berlaku melalui email terdaftar atau
          pemberitahuan di website.
        </p>
      </Section>

      <Section title="11. Hukum yang Berlaku">
        <p>
          Syarat dan ketentuan ini diatur oleh dan ditafsirkan sesuai dengan hukum Republik
          Indonesia. Setiap perselisihan yang timbul akan diselesaikan melalui musyawarah
          mufakat, dan jika tidak tercapai kesepakatan, akan diselesaikan melalui jalur
          hukum yang berlaku di Indonesia.
        </p>
      </Section>

      <Section title="12. Hubungi Kami">
        <p>Untuk pertanyaan mengenai syarat dan ketentuan ini:</p>
        <div className="mt-3 p-4 bg-gray-50 rounded-xl text-sm space-y-1">
          <p><strong>{BRAND_NAME}</strong> — Layanan Website Sekolah Indonesia</p>
          <p>Email: <a href={`mailto:${EMAIL}`} className="text-primary hover:underline">{EMAIL}</a></p>
          <p>Depok, Jawa Barat, Indonesia</p>
        </div>
      </Section>
    </div>
  </>
)

export default TermsConditions
