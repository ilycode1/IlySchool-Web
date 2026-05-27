import Navbar from '@/components/shared/Navbar'
import Footer from '@/components/shared/Footer'
import WhatsAppButton from '@/components/shared/WhatsAppButton'

export default function SiteLayout({ children }) {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
      <WhatsAppButton />
    </>
  )
}
