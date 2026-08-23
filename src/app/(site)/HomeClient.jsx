'use client'

import useScrollspy from '@/hooks/useScrollspy'
import {
  Hero,
  PromoBanner,
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
      <PromoBanner id="promo" />
      <PainPoint />
      <ProductOverview />
      <TemplateShowcase />
      <Features />
      <PromoBanner id="promo-pricing" background="surface" />
      <Pricing />
      <HowItWorks />
      <Testimonials />
      <FAQ />
      <FinalCTA />
    </main>
  )
}
