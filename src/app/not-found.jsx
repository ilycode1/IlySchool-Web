import Link from 'next/link'

export const metadata = {
  title: '404 — Halaman Tidak Ditemukan',
}

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-surface">
      <div className="text-center max-w-sm mx-auto px-4">
        <p className="font-heading font-bold text-8xl text-gray-200 mb-4">404</p>
        <h1 className="font-heading font-bold text-2xl text-gray-800 mb-2">
          Halaman tidak ditemukan
        </h1>
        <p className="text-gray-500 text-sm leading-relaxed mb-8">
          Halaman yang Anda cari tidak ada atau sudah dipindahkan. Kembali ke
          beranda untuk melanjutkan.
        </p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-xl font-heading font-medium text-sm hover:bg-primary-light transition-colors"
        >
          Kembali ke Beranda
        </Link>
      </div>
    </div>
  )
}
