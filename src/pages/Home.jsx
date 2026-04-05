// src/pages/Home.jsx
// Halaman utama — wrapper untuk semua section landing page
// Dipisah dari App.jsx agar routing lebih bersih

import useScrollspy from '@/hooks/useScrollspy'
import {
  Hero,
  PainPoint,
  ProductOverview,
  TemplateShowcase,
  Features,
  Pricing,
  HowItWorks,
  Testimonials,
  FAQ,
  FinalCTA,
} from '@/sections'

const Home = () => {
  // Aktifkan scrollspy di halaman ini
  useScrollspy()

  return (
    <main>
      <Hero />
      <PainPoint />
      <ProductOverview />
      <TemplateShowcase />
      <Features />
      <Pricing />
      <HowItWorks />
      <Testimonials />
      <FAQ />
      <FinalCTA />
    </main>
  )
}

export default Home
