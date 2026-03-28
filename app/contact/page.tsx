import type { Metadata } from 'next'
import Link from 'next/link'
import { Heart, MapPin, Mail, Shield, Users } from 'lucide-react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import ContactForm from '@/components/ContactForm'

export const metadata: Metadata = {
  title: { absolute: 'Contact SILBI Batangas City — Reach Our LGBTQIA+ Community Organization' },
  description: 'Contact LGBTQIA-SILBI Batangas City Inc. for HIV testing, legal assistance, mental health support, volunteering, or general inquiries. All messages are confidential.',
  alternates: { canonical: '/contact' },
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://silbi-batangas.vercel.app' },
    { '@type': 'ListItem', position: 2, name: 'Contact', item: 'https://silbi-batangas.vercel.app/contact' },
  ],
}

const contactInfo = [
  {
    icon: MapPin,
    title: 'Location',
    value: 'Batangas City, CALABARZON, Philippines',
  },
  {
    icon: Mail,
    title: 'Email',
    value: 'silbibatangascity@gmail.com',
  },
  {
    icon: Shield,
    title: 'Confidentiality',
    value: 'All communications are treated with full confidentiality.',
  },
  {
    icon: Users,
    title: 'Community',
    value: 'Open to all LGBTQIA+ individuals, allies, and partners.',
  },
]

export default function ContactPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <Navbar />
      <main className="pt-17">

        {/* Hero */}
        <section className="relative overflow-hidden bg-zinc-950 text-white py-20 md:py-28">
          
          
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <nav className="flex items-center gap-2 text-sm text-violet-300 mb-8">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <span>/</span>
              <span className="text-white">Contact</span>
            </nav>
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-violet-400/40 bg-violet-800/50 text-violet-200 text-sm font-medium mb-6">
                <Heart className="w-4 h-4 fill-pink-400 text-pink-400" />
                We&apos;re Here for You
              </div>
              <h1 className="font-heading text-5xl sm:text-6xl font-bold leading-tight mb-6">
                Get in{' '}
                <span className="text-violet-300">
                  Touch
                </span>
              </h1>
              <p className="text-xl text-violet-200 leading-relaxed">
                Whether you need support, have a question, want to volunteer, or are looking to partner — we want to hear from you. All messages are confidential.
              </p>
            </div>
          </div>
        </section>

        {/* Contact section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

              {/* Left: info + trust */}
              <div>
                <h2 className="font-heading text-3xl font-bold text-zinc-900 mb-3">
                  Reach Out to SILBI
                </h2>
                <p className="text-zinc-500 leading-relaxed mb-8">
                  We are based in Batangas City and serve the LGBTQIA+ community across Batangas Province. Whether you&apos;re in the city or in surrounding municipalities — reach out and we will do our best to help.
                </p>

                <div className="space-y-4 mb-10">
                  {contactInfo.map((item) => {
                    const Icon = item.icon
                    return (
                      <div key={item.title} className="flex items-start gap-4 p-4 rounded-2xl bg-zinc-50 border border-zinc-100">
                        <div className="w-10 h-10 rounded-xl bg-violet-100 flex items-center justify-center flex-shrink-0">
                          <Icon className="w-5 h-5 text-violet-600" />
                        </div>
                        <div>
                          <div className="text-xs font-bold uppercase tracking-widest text-violet-500 mb-0.5">{item.title}</div>
                          <div className="text-sm text-zinc-700">{item.value}</div>
                        </div>
                      </div>
                    )
                  })}
                </div>

                {/* Safe space notice */}
                <div className="p-6 rounded-2xl bg-violet-700 text-white">
                  <Heart className="w-7 h-7 fill-white text-white mb-3" />
                  <h3 className="font-heading text-lg font-bold mb-2">A Safe Space for Everyone</h3>
                  <p className="text-violet-100 text-sm leading-relaxed">
                    SILBI is an inclusive, affirming organization. We welcome every LGBTQIA+ person regardless of identity, status, or background. If you are in crisis or need urgent help, please reach out immediately.
                  </p>
                </div>
              </div>

              {/* Right: form */}
              <div className="bg-white rounded-3xl border border-zinc-100 p-8 shadow-xl shadow-violet-100/30">
                <h3 className="font-heading text-2xl font-bold text-zinc-900 mb-2">Send Us a Message</h3>
                <p className="text-zinc-500 text-sm mb-8">Fill out the form below and our team will respond as soon as possible.</p>
                <ContactForm />
              </div>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  )
}
