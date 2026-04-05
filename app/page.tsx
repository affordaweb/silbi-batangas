import type { Metadata } from 'next'
import Link from 'next/link'
import { Heart, Users, Ribbon, Shield, Megaphone, CalendarDays, ArrowRight, CheckCircle, Sparkles } from 'lucide-react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: { absolute: 'SILBI Batangas City — LGBTQIA+ Pride, Service & Community' },
  description: 'LGBTQIA-SILBI Batangas City Inc. champions pride, service, and community. HIV advocacy, outreach programs, legal assistance, and events for the LGBTQIA+ community of Batangas City.',
  alternates: { canonical: '/' },
}

const programs = [
  {
    icon: Ribbon,
    title: 'HIV Testing & Advocacy',
    description: 'Free HIV testing, counseling, referrals, and awareness campaigns to protect our community and reduce stigma.',
  },
  {
    icon: Users,
    title: 'Community Outreach',
    description: 'Livelihood support, relief operations, feeding programs, and community-building initiatives for LGBTQIA+ members.',
  },
  {
    icon: Shield,
    title: 'Rights & Legal Support',
    description: 'Guided by Ordinance No. 12 (Batangas City Anti-Discrimination Ordinance), we help community members access legal protection.',
  },
  {
    icon: Heart,
    title: 'Mental Health & Wellness',
    description: 'Safe spaces, peer support groups, and referrals to mental health professionals for LGBTQIA+ individuals.',
  },
]

const stats = [
  { value: '10+', label: 'Years of Service' },
  { value: '400+', label: 'Members' },
  { value: '80+', label: 'Pride Marchers (2024)' },
  { value: '1', label: 'Anti-Discrimination Ordinance' },
]

const upcomingEvents = [
  {
    month: 'JUN',
    day: '28',
    title: 'Batangas Pride March 2026',
    description: 'Annual Pride celebration honoring the LGBTQIA+ community of Batangas City.',
    tag: 'Pride Month',
  },
  {
    month: 'AUG',
    day: '15',
    title: 'Aura-Ala-Eh',
    description: "SILBI's flagship hair and makeup artistry competition — celebrating LGBTQIA+ creative excellence with cash prizes and national competition slots.",
    tag: 'Flagship Event',
  },
  {
    month: 'DEC',
    day: '1',
    title: 'World AIDS Day 2026',
    description: 'Community commemoration with free HIV testing, awareness activities, and a remembrance ceremony.',
    tag: 'HIV Advocacy',
  },
]

const homepageSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'SILBI Batangas City — LGBTQIA+ Community Organization',
  description: 'LGBTQIA-SILBI Batangas City Inc. — empowering the LGBTQIA+ community through HIV advocacy, outreach programs, and rights protection.',
  url: 'https://silbi-batangas.vercel.app',
}

export default function HomePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(homepageSchema) }} />
      <Navbar />
      <main className="pt-[72px]">

        {/* Hero Section - Luxury Dark */}
        <section className="luxury-gradient-bg text-white py-32 md:py-44 relative overflow-hidden">
          {/* Animated glow orbs */}
          <div className="luxury-glow-orb luxury-glow-orb-1" />
          <div className="luxury-glow-orb luxury-glow-orb-2" />
          <div className="luxury-glow-orb luxury-glow-orb-3" />
          
          {/* Subtle dotted pattern */}
          <div className="absolute inset-0 luxury-dots-pattern pointer-events-none" />

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
              <div className="animate-fade-up">
                <div className="section-label-white mb-6">
                  <Sparkles className="w-4 h-4" />
                  Batangas City, Philippines
                </div>
                <h1 className="font-heading text-5xl sm:text-6xl lg:text-7xl leading-[1.05] mb-8 text-white">
                  Pride.<br />
                  <span className="gradient-text-luxury italic">Service.</span><br />
                  Community.
                </h1>
                <p className="text-violet-200/80 text-lg leading-relaxed mb-12 max-w-lg">
                  <strong className="text-white">Samahan ng Ikatlong Lahi ng Batangas, Inc.</strong> — established in 2015, empowering the LGBTQIA+ community of Batangas City through HIV advocacy, outreach, and rights protection.
                </p>
                <div className="flex flex-wrap gap-5">
                  <Link
                    href="/programs"
                    className="btn-luxury-primary text-base"
                  >
                    Our Programs <ArrowRight className="w-4 h-4" />
                  </Link>
                  <Link
                    href="/contact"
                    className="btn-luxury-outline-white text-base"
                  >
                    Get Involved
                  </Link>
                </div>
                <div className="mt-12 flex flex-wrap gap-6">
                  {['20+ Years', 'HIV Advocacy', 'Community-Run'].map((item) => (
                    <div key={item} className="flex items-center gap-2 text-sm text-violet-200/70">
                      <CheckCircle className="w-4 h-4 text-accent-light" />
                      {item}
                    </div>
                  ))}
                </div>
              </div>

              {/* Stats Cards - Glassmorphism */}
              <div className="grid grid-cols-2 gap-5 animate-fade-up" style={{ animationDelay: '0.2s' }}>
                {stats.map((stat) => (
                  <div key={stat.label} className="card-luxury-dark">
                    <div className="font-heading text-4xl text-white mb-2 gradient-text-luxury">{stat.value}</div>
                    <div className="text-sm text-violet-200/60">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* About Section - Clean White */}
        <section className="py-24 bg-white relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
              <div>
                <div className="section-label">Who We Are</div>
                <h2 className="section-title mb-6">
                  {"Batangas' Voice for"}<br />
                  <span className="gradient-text-luxury italic">LGBTQIA+ Rights</span>
                </h2>
                <p className="text-warm-gray-500 leading-relaxed mb-5">
                  Founded in July 2015, LGBTQIA-SILBI Batangas City Inc. — the <em className="text-warm-gray-700">Samahan ng Ikatlong Lahi ng Batangas</em> — has been the primary organization advocating for LGBTQIA+ rights, health, and welfare in Batangas City.
                </p>
                <p className="text-warm-gray-500 leading-relaxed mb-8">
                  Our work spans HIV prevention and testing, community outreach, livelihood programs, mental health support, and the fight for legislative protection — including the landmark Batangas City <strong className="text-warm-gray-800">Ordinance No. 12</strong>.
                </p>
                <Link
                  href="/about"
                  className="btn-luxury-secondary text-base"
                >
                  Learn Our Story <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
              <div className="grid grid-cols-2 gap-5">
                <div className="col-span-2 card-luxury-accent bg-gradient-to-br from-primary-700 to-primary-900 text-white">
                  <div className="font-heading text-3xl mb-3">Ordinance No. 12</div>
                  <div className="text-primary-100 text-sm leading-relaxed">Batangas City Anti-Discrimination Ordinance — a landmark victory for LGBTQIA+ rights in the province, protecting residents from discrimination in employment, housing, and public services.</div>
                </div>
                <div className="card-luxury bg-primary-50 border-primary-100">
                  <div className="icon-wrap-luxury bg-white">
                    <Ribbon className="w-5 h-5" />
                  </div>
                  <div className="font-semibold text-warm-gray-800 text-sm">HIV Advocacy</div>
                  <div className="text-xs text-warm-gray-500 mt-1">Testing, counseling & prevention</div>
                </div>
                <div className="card-luxury bg-primary-50 border-primary-100">
                  <div className="icon-wrap-luxury bg-white">
                    <Megaphone className="w-5 h-5" />
                  </div>
                  <div className="font-semibold text-warm-gray-800 text-sm">Community Voice</div>
                  <div className="text-xs text-warm-gray-500 mt-1">Rights protection & advocacy</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Programs Section - Soft Lavender */}
        <section className="py-24 bg-primary-50 relative overflow-hidden">
          {/* Decorative elements */}
          <div className="absolute top-0 left-0 w-96 h-96 bg-primary-200/20 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent-light/15 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
            <div className="mb-14">
              <div className="section-label">What We Do</div>
              <h2 className="section-title">Programs & Services</h2>
              <p className="section-subtitle">
                Comprehensive support systems designed to uplift, protect, and celebrate our LGBTQIA+ community.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {programs.map((program, index) => {
                const Icon = program.icon
                return (
                  <div
                    key={program.title}
                    className="card-luxury group cursor-pointer"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="icon-wrap-luxury">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="font-heading text-xl text-warm-gray-800 mb-3 group-hover:text-primary-700 transition-colors">
                      {program.title}
                    </h3>
                    <p className="text-warm-gray-500 text-sm leading-relaxed">
                      {program.description}
                    </p>
                  </div>
                )
              })}
            </div>

            <div className="mt-10">
              <Link
                href="/programs"
                className="btn-luxury-primary text-base"
              >
                View All Programs <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>

        {/* Events Section - Clean White */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between mb-12 gap-5">
              <div>
                <div className="section-label">
                  <CalendarDays className="w-4 h-4" />
                  Mark Your Calendar
                </div>
                <h2 className="section-title">Upcoming Events</h2>
              </div>
              <Link href="/events" className="text-base text-primary-600 hover:text-primary-800 font-medium flex items-center gap-2 transition-colors group">
                All Events 
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            <div className="space-y-3">
              {upcomingEvents.map((event) => (
                <div key={event.title} className="group card-luxury py-6 px-6 flex items-start gap-6 hover:bg-primary-50/50 transition-colors">
                  <div className="flex-shrink-0 w-16 text-center flex flex-col items-center justify-center">
                    <div className="text-xs font-bold text-primary-600 uppercase tracking-widest">{event.month}</div>
                    <div className="font-heading text-4xl text-warm-gray-800 leading-none mt-1">{event.day}</div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-wrap items-center gap-3 mb-1.5">
                      <h3 className="font-semibold text-warm-gray-800 text-lg group-hover:text-primary-700 transition-colors">
                        {event.title}
                      </h3>
                      <span className="text-xs px-3 py-1 rounded-full bg-primary-100 text-primary-700 font-medium">
                        {event.tag}
                      </span>
                    </div>
                    <p className="text-warm-gray-500 text-sm">{event.description}</p>
                  </div>
                  <ArrowRight className="w-5 h-5 text-warm-gray-300 group-hover:text-primary-500 flex-shrink-0 mt-1 transition-all group-hover:translate-x-1" />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section - Luxury Dark */}
        <section className="luxury-gradient-bg text-white py-28 relative overflow-hidden">
          <div className="luxury-glow-orb luxury-glow-orb-1" />
          <div className="luxury-glow-orb luxury-glow-orb-2" />
          
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
            <h2 className="font-heading text-4xl sm:text-5xl mb-6">Be Part of the Community</h2>
            <div className="divider-luxury" />
            <p className="text-violet-200/70 text-lg leading-relaxed mb-12 max-w-xl mx-auto">
              Whether you need support, want to volunteer, or wish to partner with us — every act of solidarity makes our community stronger.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-5">
              <Link href="/contact" className="btn-luxury-white text-base">
                Reach Out to Us <ArrowRight className="w-4 h-4" />
              </Link>
              <Link href="/programs" className="btn-luxury-outline-white text-base">
                View Programs
              </Link>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  )
}