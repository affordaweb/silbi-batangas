import type { Metadata } from 'next'
import Link from 'next/link'
import { Heart, Shield, Users, Star, ArrowRight, CheckCircle, Ribbon, Award } from 'lucide-react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: { absolute: 'About SILBI Batangas City — Our Story, Mission & Vision' },
  description: 'Learn about LGBTQIA-SILBI Batangas City Inc. — our history since 2015, mission, vision, leadership, and the programs empowering the LGBTQIA+ community of Batangas City.',
  alternates: { canonical: '/about' },
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://v2-sigma.vercel.app' },
    { '@type': 'ListItem', position: 2, name: 'About', item: 'https://v2-sigma.vercel.app/about' },
  ],
}

const milestones = [
  { year: 'July 2015', title: 'SILBI Established', description: 'LGBTQIA-SILBI Batangas City Inc. — the Samahan ng Ikatlong Lahi ng Batangas — was formally established, with founding president Raul "Ariane" Gamboa leading the organization.' },
  { year: 'December 4, 2017', title: 'Officers Formally Sworn In', description: 'SILBI officers took their oath before Batangas City Mayor Beverley Dimacuha, marking the organization\'s formal recognition by the city government with over 400 founding members.' },
  { year: '2018', title: 'HIV Advocacy Partnerships', description: 'SILBI partnered with the City Health Office, Provincial DOH, and Batangas Medical Center Wellness Home on HIV/AIDS awareness campaigns and candlelight memorials.' },
  { year: '2019', title: 'Aura-Ala-Eh Launched', description: 'SILBI launched its flagship Aura-Ala-Eh hair and makeup artistry competition at the Batangas City Sports Coliseum, celebrating LGBTQIA+ creative talent with cash prizes and national competition slots.' },
  { year: '2022', title: 'City Accreditation Granted', description: 'The Batangas City Council formally accredited SILBI through a council resolution, cementing the organization\'s standing as an official civil society partner of the city government.' },
  { year: 'June 2024', title: '9th Batangan Pride March', description: 'SILBI, under President Loubrix Bay, led 80 members to the 9th Batangan Pride March at FPJ Arena, San Jose, Batangas — competing in festival, makeup, and hair coloring events.' },
  { year: 'June 2025', title: 'First-Ever Batangas City Pride Celebration', description: '"Rampa Na, Kahit Ano Ka, Love Ka!" — SILBI organized the first official Pride Month celebration in Batangas City, with a Pride Walk from the Provincial Capitol to the BCCC, Bahaghari Awards, and guest of honor Rep. Perci Cendana of Akbayan.' },
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
                A Decade of{' '}
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

        {/* Leadership */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-10">
              <p className="text-violet-600 text-sm font-medium uppercase tracking-widest mb-3">Our Leaders</p>
              <h2 className="font-heading text-3xl sm:text-4xl text-zinc-900">Leadership</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-2xl">
              <div className="p-7 rounded-2xl bg-violet-700 text-white">
                <div className="text-xs font-semibold uppercase tracking-widest text-violet-300 mb-1">Current President</div>
                <div className="font-heading text-2xl text-white mb-1">Jordan Luna Magtibay</div>
                <p className="text-violet-200 text-sm leading-relaxed">The newly elected president of LGBTQIA-SILBI Batangas City Inc., leading the organization&apos;s programs, advocacy, and community service for the community of Batangas City.</p>
              </div>
              <div className="p-7 rounded-2xl bg-violet-50 border border-violet-100">
                <div className="text-xs font-semibold uppercase tracking-widest text-violet-500 mb-1">Founding President</div>
                <div className="font-heading text-2xl text-zinc-900 mb-1">Raul &ldquo;Ariane&rdquo; Gamboa</div>
                <p className="text-zinc-500 text-sm leading-relaxed">Founded SILBI and served as its first formally sworn president in December 2017. A hairstylist, makeup artist, and fashion designer who built the organization from the ground up.</p>
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

