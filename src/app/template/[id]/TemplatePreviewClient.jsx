'use client'

import { useRouter } from 'next/navigation'
import { ArrowLeft, ExternalLink, Eye } from 'lucide-react'
import clsx from 'clsx'
import Button from '@/components/ui/Button'
import Badge from '@/components/ui/Badge'
import { generateWALinkByTemplate } from '@/utils/formatWhatsApp'

const RelatedCard = ({ template, onClick }) => (
  <div
    onClick={onClick}
    className={clsx(
      'cursor-pointer group',
      'rounded-xl overflow-hidden',
      'border border-gray-100 shadow-sm',
      'hover:shadow-md hover:-translate-y-1',
      'transition-all duration-300'
    )}
  >
    <div className="aspect-video overflow-hidden">
      <img
        src={template.thumbnail}
        alt={template.name}
        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
      />
    </div>
    <div className="p-3 bg-white">
      <p className="font-heading font-semibold text-sm text-gray-800">
        {template.name}
      </p>
      <p className="text-xs text-gray-400 mt-0.5">{template.suitableFor[0]}</p>
    </div>
  </div>
)

export default function TemplatePreviewClient({ template, related }) {
  const router = useRouter()

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white border-b border-gray-100 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <button
              onClick={() => router.back()}
              className="flex items-center gap-2 text-gray-600 hover:text-primary transition-colors"
            >
              <ArrowLeft size={18} />
              <span className="text-sm font-heading font-medium">Kembali</span>
            </button>

            <div className="flex items-center gap-3">
              <span className="font-heading font-semibold text-gray-800">
                Template {template.name}
              </span>
              {template.popular && (
                <Badge variant="solid-accent" size="sm">
                  ⭐ Populer
                </Badge>
              )}
            </div>

            <div className="flex items-center gap-2">
              <Button
                variant="outline"
                size="sm"
                href={template.previewUrl}
                external
              >
                <Eye size={14} />
                Lihat Preview
              </Button>
              <Button
                variant="primary"
                size="sm"
                href={generateWALinkByTemplate(template.name)}
                external
              >
                Pilih Template Ini
                <ExternalLink size={14} />
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2">
            <div className="rounded-2xl overflow-hidden shadow-xl border border-gray-200">
              <div className="bg-gray-800 px-4 py-3 flex items-center gap-3">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-400" />
                  <div className="w-3 h-3 rounded-full bg-yellow-400" />
                  <div className="w-3 h-3 rounded-full bg-green-400" />
                </div>
                <div className="flex-1 bg-gray-700 rounded-md px-3 py-1.5 flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-green-400/60 flex-shrink-0" />
                  <span className="text-xs text-gray-400 font-mono truncate">
                    namasekolah.ilyschool.com
                  </span>
                </div>
              </div>

              <iframe
                src={template.previewUrl}
                title={`Preview ${template.name}`}
                className="w-full h-[600px] border-0"
              />
            </div>

            <div className="mt-6 bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
              <h3 className="font-heading font-semibold text-gray-800 mb-4 text-sm uppercase tracking-wider">
                Palet Warna Template
              </h3>
              <div className="flex items-center gap-4">
                {Object.entries(template.colors).map(([name, color]) => (
                  <div key={name} className="flex flex-col items-center gap-2">
                    <div
                      className="w-12 h-12 rounded-xl shadow-sm border border-gray-100"
                      style={{ backgroundColor: color }}
                    />
                    <span className="text-xs text-gray-400 font-mono">
                      {color}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-6">
            <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <span className="text-xs text-gray-400 font-heading">
                    #{template.number}
                  </span>
                  <h2 className="font-heading font-bold text-2xl text-gray-900">
                    {template.name}
                  </h2>
                </div>
                {template.popular && (
                  <Badge variant="solid-accent">⭐ Populer</Badge>
                )}
              </div>

              <p className="text-gray-500 text-sm leading-relaxed mb-6">
                {template.description}
              </p>

              <div className="mb-6">
                <p className="text-xs font-heading font-semibold text-gray-400 uppercase tracking-wider mb-2">
                  Cocok untuk
                </p>
                <div className="flex flex-wrap gap-2">
                  {template.suitableFor.map((type) => (
                    <Badge key={type} variant="primary" size="sm">
                      {type}
                    </Badge>
                  ))}
                </div>
              </div>

              <Button
                variant="primary"
                fullWidth
                size="lg"
                href={generateWALinkByTemplate(template.name)}
                external
              >
                Pilih Template Ini
              </Button>

              <p className="text-center text-xs text-gray-400 mt-3">
                Mulai dari Rp 100.000 / tahun
              </p>
            </div>

            <div className="bg-surface rounded-2xl p-5 border border-gray-100">
              <h4 className="font-heading font-semibold text-gray-800 text-sm mb-3">
                Yang Anda Dapatkan
              </h4>
              {[
                '✓ Template ini langsung aktif',
                '✓ Konten disesuaikan data sekolah',
                '✓ SSL https:// gratis',
                '✓ Responsif di semua perangkat',
                '✓ 12x perubahan konten / tahun',
              ].map((item) => (
                <p
                  key={item}
                  className="text-xs text-gray-500 py-1.5 border-b border-gray-100 last:border-0"
                >
                  {item}
                </p>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-16">
          <h3 className="font-heading font-semibold text-gray-800 text-lg mb-6">
            Template Lainnya
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {related.map((t) => (
              <RelatedCard
                key={t.id}
                template={t}
                onClick={() => router.push(`/template/${t.id}`)}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
