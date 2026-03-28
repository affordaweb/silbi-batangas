import type { Metadata } from 'next'
import Link from 'next/link'
import { Heart, Shield, Users, Star, ArrowRight, CheckCircle, Ribbon, Award } from 'lucide-react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: { absolute: 'About SILBI Batangas City — Our Story, Mission & Vision' },
  description: 'Learn about LGBTQIA-SILBI Batangas City Inc. — our history, mission, vision, and the programs that have empowered the LGBTQIA+ community of Batangas City for over 20 years.',
  alternates: { canonical: '/about' },
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://silbi-batangas.vercel.app' },
    { '@type': 'ListItem', position: 2, name: 'About', item: 'https://silbi-batangas.vercel.app/about' },
  ],
}

const milestones = [
  { year: 'Early 2000s', title: 'SILBI Founded', description: 'Samahan ng Ikatlong Lahi ng Batangas, Inc. was established as a community-based organization for LGBTQIA+ individuals in Batangas City.' },
  { year: '2007', title: 'Aura-Ala-Eh Pageant Launched', description: 'The flagship annual pageant began, becoming a beloved celebration of LGBTQIA+ talent, beauty, and community pride in Batangas.' },
  { year: '2010s', title: 'HIV Advocacy Formalized', description: 'SILBI partnered with health agencies to expand HIV testing, counseling, and awareness programs across Batangas City and nearby municipalities.' },
  { year: '2015', title: 'Ordinance No. 12 Passed', description: "Batangas City enacted its Anti-Discrimination Ordinance, a landmark victory that SILBI actively campaigned for — protecting LGBTQIA+ residents' rights in housing, employment, and public services." },
  { year: '2020–Present', title: 'Community Resilience', description: 'Through pandemic relief, online advocacy, and continuous programs, SILBI remains the steadfast voice for the LGBTQIA+ community in Batangas City.' },
]

const values = [
  { icon: Heart, title: 'Inclusivity', description: 'We welcome every person regardless of gender identity, sexual orientation, or background.' },
  { icon: Shield, title: 'Dignity & Rights', description: 'We uphold the inherent dignity of every LGBTQIA+ individual and fight for equal rights.' },
  { icon: Users, title: 'Community First', description: 'Our programs are built by the community, for the community — rooted in lived experience.' },
  { icon: Ribbon, title: 'Health & Wellness', description: 'We prioritize the physical and mental health of every person we serve.' },
  { icon: Award, title: 'Excellence in Service', description: "SILBI (meaning 'service' in Filipino) is our name and our commitment — we serve with excellence." },
  { icon: Star, title: 'Pride', description: 'We celebrate who we are — openly, boldly, and joyfully.' },
]

export default function AboutPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <Navbar />
      <main className="pt-17">

        {/* Hero */}
        <section className="relative overflow-hidden bg-violet-900 text-white py-24 md:py-32">
          
          
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <nav className="flex items-center gap-2 text-sm text-violet-300 mb-8">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <span>/</span>
              <span className="text-white">About Us</span>
            </nav>
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-violet-400/40 bg-violet-800/50 text-violet-200 text-sm font-medium mb-6">
                <Heart className="w-4 h-4 fill-pink-400 text-pink-400" />
                Our Story
              </div>
              <h1 className="font-heading text-5xl sm:text-6xl font-bold leading-tight mb-6">
                20+ Years of{' '}
                <span className="text-violet-300">
                  Pride & Service
                </span>
              </h1>
              <p className="text-xl text-violet-200 leading-relaxed">
                We are LGBTQIA-SILBI Batangas City Inc. — the <em>Samahan ng Ikatlong Lahi ng Batangas</em>. Born from the community, built for the community, dedicated to ensuring every LGBTQIA+ person in Batangas City lives with dignity, health, and pride.
              </p>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="p-8 rounded-2xl bg-gradient-to-br from-violet-600 to-violet-800 text-white">
                <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center mb-5">
                  <Heart className="w-6 h-6 fill-white text-white" />
                </div>
                <h2 className="font-heading text-2xl font-bold mb-4">Our Mission</h2>
                <p className="text-violet-100 leading-relaxed">
                  To empower and uplift the LGBTQIA+ community of Batangas City through inclusive programs, HIV advocacy, rights protection, and community service — ensuring that no one is left behind.
                </p>
              </div>
              <div className="p-8 rounded-2xl bg-gradient-to-br from-pink-600 to-rose-800 text-white">
                <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center mb-5">
                  <Star className="w-6 h-6 fill-white text-white" />
                </div>
                <h2 className="font-heading text-2xl font-bold mb-4">Our Vision</h2>
                <p className="text-rose-100 leading-relaxed">
                  A Batangas City where every LGBTQIA+ individual lives freely, safely, and with full recognition of their rights — a community where pride is celebrated, health is protected, and love is love.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* History / Timeline */}
        <section className="py-20 bg-violet-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-14">
              <h2 className="font-heading text-3xl sm:text-4xl font-bold text-zinc-900 mb-4">Our Journey</h2>
              <p className="text-zinc-500 max-w-2xl mx-auto">From a small community group to a recognized LGBTQIA+ organization — here are the milestones that shaped SILBI.</p>
            </div>
            <div className="relative">
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-violet-400 to-pink-400" />
              <div className="space-y-10">
                {milestones.map((m, i) => (
                  <div key={i} className="relative flex gap-8">
                    <div className="flex-shrink-0 w-16 flex flex-col items-center">
                      <div className="w-4 h-4 rounded-full bg-violet-700 border-2 border-white shadow-md z-10 mt-1" />
                    </div>
                    <div className="flex-1 pb-4">
                      <span className="text-xs font-bold text-violet-600 uppercase tracking-widest">{m.year}</span>
                      <h3 className="font-heading text-xl font-bold text-zinc-900 mt-1 mb-2">{m.title}</h3>
                      <p className="text-zinc-500 text-sm leading-relaxed">{m.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Ordinance spotlight */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="rounded-3xl bg-violet-700 text-white p-10 md:p-14 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-white/10 rounded-full blur-[80px]" />
              <div className="relative max-w-2xl">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 text-white text-sm font-semibold mb-6">
                  <Shield className="w-4 h-4" />
                  Legislative Victory
                </div>
                <h2 className="font-heading text-3xl md:text-4xl font-bold mb-5">Ordinance No. 12</h2>
                <p className="text-violet-100 text-lg leading-relaxed mb-6">
                  The Batangas City Anti-Discrimination Ordinance — championed with the advocacy of SILBI — protects LGBTQIA+ residents from discrimination in employment, housing, education, and public services across Batangas City.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
                  {['Employment protection', 'Housing discrimination ban', 'Public services access'].map((item) => (
                    <div key={item} className="flex items-center gap-2 text-sm">
                      <CheckCircle className="w-4 h-4 text-emerald-300 flex-shrink-0" />
                      <span className="text-violet-100">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-20 bg-violet-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="font-heading text-3xl sm:text-4xl font-bold text-zinc-900 mb-4">Our Values</h2>
              <p className="text-zinc-500 max-w-xl mx-auto">The principles that guide everything we do.</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {values.map((v) => {
                const Icon = v.icon
                return (
                  <div key={v.title} className="p-7 bg-white rounded-2xl border border-zinc-100 hover:border-violet-200 hover:-translate-y-1 hover:shadow-xl hover:shadow-violet-100/50 transition-all duration-300">
                    <div className="w-12 h-12 rounded-xl bg-violet-100 flex items-center justify-center mb-4">
                      <Icon className="w-6 h-6 text-violet-600" />
                    </div>
                    <h3 className="font-heading text-lg font-bold text-zinc-900 mb-2">{v.title}</h3>
                    <p className="text-zinc-500 text-sm leading-relaxed">{v.description}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-zinc-900 mb-5">Join Our Community</h2>
            <p className="text-zinc-500 text-lg mb-8 max-w-xl mx-auto">
              Whether you need support, want to volunteer, or wish to learn more — we welcome you.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-7 py-4 bg-violet-600 hover:bg-violet-700 text-white font-semibold rounded-2xl transition-all hover:-translate-y-0.5 shadow-md shadow-violet-200"
              >
                Get in Touch <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/programs"
                className="inline-flex items-center gap-2 px-7 py-4 border border-violet-200 text-violet-600 font-semibold rounded-2xl hover:bg-violet-50 transition-all"
              >
                Our Programs
              </Link>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  )
}
