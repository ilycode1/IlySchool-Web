// src/App.jsx
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import { Helmet } from 'react-helmet-async'
import Navbar from '@/components/shared/Navbar'
import Footer from '@/components/shared/Footer'
import WhatsAppButton from '@/components/shared/WhatsAppButton'
import Home from '@/pages/Home'
import TemplatePreview from '@/pages/TemplatePreview'
import Blog from '@/pages/Blog'
import BlogDetail from '@/pages/BlogDetail'
import PrivacyPolicy from '@/pages/PrivacyPolicy'
import TermsConditions from '@/pages/TermsConditions'
import { SEO_CONFIG, DEFAULT_SEO } from '@/config/seo'
import { BRAND_NAME } from '@/config/constants'

// ================================================================
// ScrollToTop
// Reset scroll ke atas setiap kali URL berubah
// Harus di dalam BrowserRouter agar bisa pakai useLocation
// ================================================================
const ScrollToTop = () => {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' })
  }, [pathname])

  // Tidak render apapun — hanya efek samping
  return null
}

// ================================================================
// Layout
// Wrapper yang berisi Navbar, konten halaman, Footer
// Dipakai di semua route agar Navbar dan Footer selalu ada
// ================================================================
const Layout = ({ children }) => (
  <>
    <Navbar />
    {children}
    <Footer />
    <WhatsAppButton />
  </>
)

// ================================================================
// NotFound — Halaman 404
// ================================================================
const NotFound = () => (
  <div className="min-h-screen flex items-center justify-center bg-surface">
    <div className="text-center max-w-sm mx-auto px-4">
      {/* Angka 404 besar */}
      <p className="font-heading font-bold text-8xl text-gray-200 mb-4">404</p>
      <h1 className="font-heading font-bold text-2xl text-gray-800 mb-2">
        Halaman tidak ditemukan
      </h1>
      <p className="text-gray-500 text-sm leading-relaxed mb-8">
        Halaman yang Anda cari tidak ada atau sudah dipindahkan. Kembali ke
        beranda untuk melanjutkan.
      </p>
      <a
        href="/"
        className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-xl font-heading font-medium text-sm hover:bg-primary-light transition-colors"
      >
        Kembali ke Beranda
      </a>
    </div>
  </div>
)

// ================================================================
// App — Root component dengan routing setup
// ================================================================
const App = () => {
  return (
    <BrowserRouter>
      {/* ── DEFAULT SEO (fallback semua halaman) ──────────── */}
      <Helmet>
        <title>{DEFAULT_SEO.title}</title>
        <meta name="description" content={DEFAULT_SEO.description} />
        <meta name="robots" content="index, follow" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content={DEFAULT_SEO.ogImage} />
        <meta name="twitter:card" content="summary_large_image" />
        {/* Favicon */}
        <link rel="icon" type="image/svg+xml" href="/favicon.ico" />
      </Helmet>

      {/* ScrollToTop harus di dalam BrowserRouter */}
      <ScrollToTop />

      <Routes>
        {/* ── HOME ────────────────────────────────────────── */}
        <Route
          path="/"
          element={
            <Layout>
              {/* SEO spesifik halaman home */}
              <Helmet>
                <title>{SEO_CONFIG.home.title}</title>
                <meta
                  name="description"
                  content={SEO_CONFIG.home.description}
                />
                <meta name="keywords" content={SEO_CONFIG.home.keywords} />
                <meta property="og:title" content={SEO_CONFIG.home.ogTitle} />
                <meta
                  property="og:description"
                  content={SEO_CONFIG.home.ogDescription}
                />
                <link rel="canonical" href={SEO_CONFIG.home.canonical} />
              </Helmet>
              <Home />
            </Layout>
          }
        />

        {/* ── TEMPLATE PREVIEW ────────────────────────────── */}
        <Route
          path="/template/:id"
          element={<TemplatePreview />}
        />

        {/* ── BLOG LISTING ────────────────────────────────── */}
        <Route
          path="/blog"
          element={
            <Layout>
              <Helmet>
                <title>{SEO_CONFIG.blog.title}</title>
                <meta name="description" content={SEO_CONFIG.blog.description} />
                <meta name="keywords" content={SEO_CONFIG.blog.keywords} />
                <meta property="og:title" content={SEO_CONFIG.blog.ogTitle} />
                <meta property="og:description" content={SEO_CONFIG.blog.ogDescription} />
                <link rel="canonical" href={SEO_CONFIG.blog.canonical} />
              </Helmet>
              <Blog />
            </Layout>
          }
        />

        {/* ── BLOG DETAIL ─────────────────────────────────── */}
        <Route
          path="/blog/:slug"
          element={
            <Layout>
              <BlogDetail />
            </Layout>
          }
        />

        {/* ── KEBIJAKAN PRIVASI ────────────────────────────── */}
        <Route
          path="/kebijakan-privasi"
          element={
            <Layout>
              <PrivacyPolicy />
            </Layout>
          }
        />

        {/* ── SYARAT & KETENTUAN ───────────────────────────── */}
        <Route
          path="/syarat-ketentuan"
          element={
            <Layout>
              <TermsConditions />
            </Layout>
          }
        />

        {/* ── 404 NOT FOUND ───────────────────────────────── */}
        <Route
          path="*"
          element={
            <Layout>
              <Helmet>
                <title>404 — Halaman Tidak Ditemukan | {BRAND_NAME}</title>
              </Helmet>
              <NotFound />
            </Layout>
          }
        />
      </Routes>
    </BrowserRouter>
  )
}

export default App
