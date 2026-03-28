import type { MetadataRoute } from 'next'

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL ?? 'https://silbi-batangas.vercel.app'

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    { path: '', priority: 1.0, freq: 'weekly' as const },
    { path: '/about', priority: 0.9, freq: 'monthly' as const },
    { path: '/programs', priority: 0.9, freq: 'monthly' as const },
    { path: '/events', priority: 0.9, freq: 'weekly' as const },
    { path: '/contact', priority: 0.8, freq: 'monthly' as const },
  ]

  return routes.map((r) => ({
    url: `${BASE_URL}${r.path}`,
    lastModified: new Date(),
    changeFrequency: r.freq,
    priority: r.priority,
  }))
}
