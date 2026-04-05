// src/App.jsx
import Navbar from '@/components/shared/Navbar'
import Footer from '@/components/shared/Footer'
import WhatsAppButton from '@/components/shared/WhatsAppButton'
import useScrollspy from '@/hooks/useScrollspy'

// ── Satu baris import semua section ────────────────────────────
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

function App() {
  useScrollspy()

  return (
    <div className="min-h-screen">
      <Navbar />
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
      <Footer />
      <WhatsAppButton />
    </div>
  )
}

export default App
