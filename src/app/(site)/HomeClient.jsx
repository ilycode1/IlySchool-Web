'use client'

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

export default function HomeClient() {
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
