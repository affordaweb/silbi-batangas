import type { Metadata } from 'next'
import { Inter, DM_Serif_Display } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

const dmSerif = DM_Serif_Display({
  subsets: ['latin'],
  variable: '--font-dm-serif',
  weight: ['400'],
  style: ['normal', 'italic'],
})

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL ?? 'https://v2-sigma.vercel.app'

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: 'SILBI Batangas City — LGBTQIA+ Community Organization',
    template: '%s | SILBI Batangas City',
  },
  description: 'LGBTQIA-SILBI Batangas City Inc. — empowering the LGBTQIA+ community through HIV advocacy, community programs, and rights protection in Batangas City, Philippines.',
  keywords: ['SILBI Batangas', 'LGBTQIA Batangas', 'LGBTQ Batangas City', 'HIV advocacy Batangas', 'Samahan ng Ikatlong Lahi Batangas', 'LGBTQ Philippines', 'pride Batangas'],
  authors: [{ name: 'LGBTQIA-SILBI Batangas City Inc.' }],
  alternates: { canonical: BASE_URL },
  openGraph: {
    type: 'website',
    locale: 'en_PH',
    url: BASE_URL,
    siteName: 'SILBI Batangas City',
    title: 'SILBI Batangas City — LGBTQIA+ Community Organization',
    description: 'Empowering the LGBTQIA+ community of Batangas City through HIV advocacy, programs, and rights protection since the early 2000s.',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'SILBI Batangas City — LGBTQIA+ Community Organization' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SILBI Batangas City — LGBTQIA+ Community Organization',
    description: 'Empowering the LGBTQIA+ community of Batangas City through HIV advocacy, programs, and rights protection.',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 },
  },
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/favicon.ico', sizes: '32x32', type: 'image/x-icon' },
    ],
    apple: [{ url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' }],
  },
}

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'NGO',
  name: 'LGBTQIA-SILBI Batangas City Inc.',
  alternateName: 'Samahan ng Ikatlong Lahi ng Batangas, Inc.',
  url: BASE_URL,
  logo: `${BASE_URL}/logo.png`,
  description: 'LGBTQIA community organization in Batangas City, Philippines focused on HIV advocacy, community service, and LGBTQ+ rights protection.',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Batangas City',
    addressRegion: 'CALABARZON',
    addressCountry: 'PH',
  },
  contactPoint: {
    '@type': 'ContactPoint',
    contactType: 'general inquiries',
    url: `${BASE_URL}/contact`,
    availableLanguage: ['English', 'Filipino'],
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-PH" className={`${inter.variable} ${dmSerif.variable} h-full`}>
      <head>
        <meta name="theme-color" content="#7c3aed" />
        <meta name="color-scheme" content="light" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
      </head>
      <body className="min-h-full flex flex-col antialiased">
        {children}
      </body>
    </html>
  )
}

