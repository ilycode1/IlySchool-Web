// src/utils/formatWhatsApp.js
import { WHATSAPP_NUMBER, WA_DEFAULT_MESSAGE } from '@/config/constants'

// ================================================================
// generateWALink
// Membuat link wa.me lengkap dengan pesan yang sudah di-encode
//
// Parameter:
// message (opsional) → pesan custom, kalau kosong pakai default
//
// Contoh penggunaan:
// generateWALink()
// → 'https://wa.me/6281234567890?text=Halo%20ilyschool...'
//
// generateWALink('Saya tertarik Paket Hadir')
// → 'https://wa.me/6281234567890?text=Saya%20tertarik...'
// ================================================================
export const generateWALink = (message = '') => {
  const encodedMessage = message
    ? encodeURIComponent(message)
    : WA_DEFAULT_MESSAGE

  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`
}

// ================================================================
// generateWALinkByPlan
// Generate link WA dengan pesan spesifik per nama paket
//
// Contoh penggunaan:
// generateWALinkByPlan('Hadir')
// → link WA dengan pesan menyebut Paket Hadir
// ================================================================
export const generateWALinkByPlan = (planName) => {
  const message = `Halo ilyschool, saya tertarik dengan Paket ${planName}. Boleh info lebih lanjut?`
  return generateWALink(message)
}

// ================================================================
// generateWALinkByTemplate
// Generate link WA dengan pesan menyebut template tertentu
//
// Contoh penggunaan:
// generateWALinkByTemplate('Royal Blue')
// ================================================================
export const generateWALinkByTemplate = (templateName) => {
  const message = `Halo ilyschool, saya tertarik dengan template "${templateName}". Bisa konsultasi lebih lanjut?`
  return generateWALink(message)
}
