import { BRAND_NAME, BRAND_DOMAIN, EMAIL } from '@/config/constants'

export const metadata = {
  title: 'Kebijakan Privasi',
  description: `Kebijakan privasi ${BRAND_NAME} — bagaimana kami mengumpulkan, menggunakan, dan melindungi data Anda.`,
  robots: { index: false, follow: true },
  alternates: {
    canonical: `https://${BRAND_DOMAIN}/kebijakan-privasi`,
  },
}

const LAST_UPDATED = '1 April 2026'

const Section = ({ title, children }) => (
  <div className="mb-10">
    <h2 className="font-heading text-xl font-bold text-gray-900 mb-4 pb-2 border-b border-gray-100">
      {title}
    </h2>
    <div className="text-gray-600 leading-relaxed space-y-3">{children}</div>
  </div>
)

export default function PrivacyPolicyPage() {
  return (
    <>
      <section className="bg-primary pt-28 pb-12">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="inline-block bg-accent text-gray-900 text-xs font-heading font-bold px-3 py-1 rounded-full mb-4">
            Legal
          </span>
          <h1 className="font-heading text-3xl sm:text-4xl font-bold text-white mb-3">
            Kebijakan Privasi
          </h1>
          <p className="text-white/60 text-sm">
            Terakhir diperbarui: {LAST_UPDATED}
          </p>
        </div>
      </section>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="bg-amber-50 border border-amber-200 rounded-xl p-5 mb-10 text-sm text-amber-800 leading-relaxed">
          Dengan menggunakan layanan {BRAND_NAME}, Anda menyetujui kebijakan
          privasi ini. Harap baca dengan saksama sebelum melanjutkan.
        </div>

        <Section title="1. Informasi yang Kami Kumpulkan">
          <p>
            Kami mengumpulkan informasi yang Anda berikan secara langsung kepada
            kami, termasuk:
          </p>
          <ul className="list-disc list-inside space-y-1 mt-2">
            <li>Nama lengkap dan nama institusi sekolah</li>
            <li>Nomor telepon dan WhatsApp</li>
            <li>Alamat email</li>
            <li>Alamat sekolah</li>
            <li>
              Konten yang Anda kirimkan untuk website sekolah (logo, foto, teks,
              dll)
            </li>
          </ul>
          <p className="mt-3">
            Selain itu, kami secara otomatis mengumpulkan informasi teknis
            seperti alamat IP, jenis browser, dan halaman yang dikunjungi untuk
            keperluan analitik dan keamanan.
          </p>
        </Section>

        <Section title="2. Bagaimana Kami Menggunakan Informasi Anda">
          <p>Informasi yang kami kumpulkan digunakan untuk:</p>
          <ul className="list-disc list-inside space-y-1 mt-2">
            <li>Membangun dan mengelola website sekolah Anda</li>
            <li>Menghubungi Anda terkait layanan dan pesanan</li>
            <li>Memberikan dukungan teknis dan pembaruan konten</li>
            <li>
              Mengirimkan informasi terkait layanan baru (hanya jika Anda
              menyetujui)
            </li>
            <li>Meningkatkan kualitas layanan kami</li>
          </ul>
        </Section>

        <Section title="3. Berbagi Informasi dengan Pihak Ketiga">
          <p>
            Kami <strong>tidak menjual, menyewakan, atau membagikan</strong>{' '}
            data pribadi Anda kepada pihak ketiga untuk tujuan pemasaran tanpa
            persetujuan eksplisit Anda.
          </p>
          <p>Informasi dapat dibagikan kepada pihak ketiga hanya dalam kondisi berikut:</p>
          <ul className="list-disc list-inside space-y-1 mt-2">
            <li>Penyedia layanan hosting dan infrastruktur teknis yang kami gunakan</li>
            <li>Jika diwajibkan oleh hukum atau peraturan yang berlaku di Indonesia</li>
            <li>Untuk melindungi hak, keamanan, dan properti {BRAND_NAME}</li>
          </ul>
        </Section>

        <Section title="4. Keamanan Data">
          <p>
            Kami menerapkan langkah-langkah keamanan teknis dan organisasi yang
            wajar untuk melindungi informasi Anda dari akses, pengungkapan, atau
            penghancuran yang tidak sah, termasuk enkripsi SSL/TLS pada seluruh
            komunikasi data.
          </p>
          <p>
            Namun, tidak ada metode transmisi data melalui internet yang 100%
            aman. Kami tidak dapat menjamin keamanan absolut dari informasi yang
            ditransmisikan kepada kami.
          </p>
        </Section>

        <Section title="5. Penyimpanan Data">
          <p>
            Data Anda disimpan selama masa aktif berlangganan layanan{' '}
            {BRAND_NAME}. Jika Anda tidak memperpanjang langganan, data akan
            disimpan selama 30 hari sebelum dihapus secara permanen, kecuali
            diwajibkan oleh hukum untuk disimpan lebih lama.
          </p>
        </Section>

        <Section title="6. Hak Anda">
          <p>Anda memiliki hak untuk:</p>
          <ul className="list-disc list-inside space-y-1 mt-2">
            <li>Mengakses data pribadi yang kami miliki tentang Anda</li>
            <li>Meminta koreksi atas data yang tidak akurat</li>
            <li>Meminta penghapusan data Anda (sesuai ketentuan yang berlaku)</li>
            <li>Berhenti berlangganan komunikasi pemasaran kapan saja</li>
          </ul>
          <p className="mt-3">
            Untuk menggunakan hak-hak tersebut, hubungi kami di{' '}
            <a
              href={`mailto:${EMAIL}`}
              className="text-primary hover:underline font-medium"
            >
              {EMAIL}
            </a>
            .
          </p>
        </Section>

        <Section title="7. Cookie dan Pelacakan">
          <p>
            Website kami menggunakan cookie untuk meningkatkan pengalaman
            pengguna dan menganalisis trafik. Anda dapat mengatur browser untuk
            menolak cookie, namun beberapa fitur mungkin tidak berfungsi dengan
            optimal.
          </p>
        </Section>

        <Section title="8. Perubahan Kebijakan">
          <p>
            Kami dapat memperbarui kebijakan privasi ini sewaktu-waktu.
            Perubahan signifikan akan diinformasikan melalui email atau
            pemberitahuan di website kami. Penggunaan layanan setelah perubahan
            berarti Anda menyetujui kebijakan yang diperbarui.
          </p>
        </Section>

        <Section title="9. Hubungi Kami">
          <p>
            Jika Anda memiliki pertanyaan mengenai kebijakan privasi ini,
            silakan hubungi kami:
          </p>
          <div className="mt-3 p-4 bg-gray-50 rounded-xl text-sm space-y-1">
            <p>
              <strong>{BRAND_NAME}</strong> — Layanan Website Sekolah Indonesia
            </p>
            <p>
              Email:{' '}
              <a
                href={`mailto:${EMAIL}`}
                className="text-primary hover:underline"
              >
                {EMAIL}
              </a>
            </p>
            <p>Depok, Jawa Barat, Indonesia</p>
          </div>
        </Section>
      </div>
    </>
  )
}
