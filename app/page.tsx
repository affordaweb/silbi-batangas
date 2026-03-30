import type { Metadata } from 'next'
import Link from 'next/link'
import { Heart, Users, Ribbon, Shield, Megaphone, CalendarDays, ArrowRight, CheckCircle } from 'lucide-react'
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
      <main className="pt-16">

        {/* Hero */}
        <section className="bg-violet-900 text-white py-28 md:py-36 relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-violet-700/40 via-transparent to-transparent pointer-events-none" />
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <p className="text-violet-400 text-sm font-medium uppercase tracking-widest mb-5">Batangas City, Philippines</p>
                <h1 className="font-heading text-5xl sm:text-6xl lg:text-7xl leading-[1.1] mb-6 text-white">
                  Pride.<br />
                  <em className="text-violet-300">Service.</em><br />
                  Community.
                </h1>
                <p className="text-zinc-400 text-lg leading-relaxed mb-10 max-w-md">
                  <strong className="text-white">Samahan ng Ikatlong Lahi ng Batangas, Inc.</strong> — established in 2015, empowering the LGBTQIA+ community of Batangas City through HIV advocacy, outreach, and rights protection.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link
                    href="/programs"
                    className="inline-flex items-center gap-2 px-7 py-3.5 bg-violet-700 hover:bg-violet-600 text-white font-medium rounded-lg transition-all text-sm"
                  >
                    Our Programs <ArrowRight className="w-4 h-4" />
                  </Link>
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 px-7 py-3.5 border border-zinc-700 text-zinc-300 hover:border-zinc-500 hover:text-white font-medium rounded-lg transition-all text-sm"
                  >
                    Get Involved
                  </Link>
                </div>
                <div className="mt-10 flex flex-wrap gap-5">
                  {['20+ Years', 'HIV Advocacy', 'Community-Run'].map((t) => (
                    <div key={t} className="flex items-center gap-1.5 text-sm text-violet-300">
                      <CheckCircle className="w-4 h-4 text-violet-400" />
                      {t}
                    </div>
                  ))}
                </div>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-4">
                {stats.map((stat) => (
                  <div key={stat.label} className="p-7 rounded-xl bg-violet-800/60 border border-violet-700/50 backdrop-blur-sm">
                    <div className="font-heading text-4xl text-white mb-2">{stat.value}</div>
                    <div className="text-sm text-violet-300">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* About strip */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <p className="text-violet-600 text-sm font-medium uppercase tracking-widest mb-4">Who We Are</p>
                <h2 className="font-heading text-4xl sm:text-5xl text-zinc-900 mb-6 leading-tight">
                  {"Batangas' Voice for"}<br />
                  <em>LGBTQIA+ Rights</em>
                </h2>
                <p className="text-zinc-500 leading-relaxed mb-5">
                  Founded in July 2015, LGBTQIA-SILBI Batangas City Inc. — the <em>Samahan ng Ikatlong Lahi ng Batangas</em> — has been the primary organization advocating for LGBTQIA+ rights, health, and welfare in Batangas City.
                </p>
                <p className="text-zinc-500 leading-relaxed mb-8">
                  Our work spans HIV prevention and testing, community outreach, livelihood programs, mental health support, and the fight for legislative protection — including the landmark Batangas City <strong className="text-zinc-900">Ordinance No. 12</strong>.
                </p>
                <Link
                  href="/about"
                  className="inline-flex items-center gap-2 px-6 py-3 border border-zinc-200 text-zinc-700 hover:border-violet-300 hover:text-violet-700 font-medium rounded-lg transition-all text-sm"
                >
                  Learn Our Story <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="col-span-2 p-7 rounded-xl bg-violet-700 text-white">
                  <div className="font-heading text-3xl mb-2">Ordinance No. 12</div>
                  <div className="text-violet-200 text-sm leading-relaxed">Batangas City Anti-Discrimination Ordinance — a landmark victory for LGBTQIA+ rights in the province, protecting residents from discrimination in employment, housing, and public services.</div>
                </div>
                <div className="p-5 rounded-xl bg-violet-50 border border-violet-100">
                  <Ribbon className="w-6 h-6 text-violet-600 mb-3" />
                  <div className="font-semibold text-zinc-900 text-sm">HIV Advocacy</div>
                  <div className="text-xs text-zinc-500 mt-1">Testing, counseling & prevention</div>
                </div>
                <div className="p-5 rounded-xl bg-violet-50 border border-violet-100">
                  <Megaphone className="w-6 h-6 text-violet-600 mb-3" />
                  <div className="font-semibold text-zinc-900 text-sm">Community Voice</div>
                  <div className="text-xs text-zinc-500 mt-1">Rights protection & advocacy</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Programs */}
        <section className="py-20 bg-violet-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-12">
              <p className="text-violet-600 text-sm font-medium uppercase tracking-widest mb-3">What We Do</p>
              <h2 className="font-heading text-4xl sm:text-5xl text-zinc-900">Programs & Services</h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {programs.map((program) => {
                const Icon = program.icon
                return (
                  <div
                    key={program.title}
                    className="p-7 rounded-xl border border-violet-100 bg-white hover:border-violet-300 hover:-translate-y-0.5 hover:shadow-md transition-all duration-200"
                  >
                    <Icon className="w-6 h-6 text-violet-600 mb-4" />
                    <h3 className="font-semibold text-zinc-900 text-lg mb-2">{program.title}</h3>
                    <p className="text-zinc-500 text-sm leading-relaxed">{program.description}</p>
                  </div>
                )
              })}
            </div>

            <div className="mt-8">
              <Link
                href="/programs"
                className="inline-flex items-center gap-2 px-6 py-3 bg-violet-700 hover:bg-violet-600 text-white font-medium rounded-lg transition-all text-sm"
              >
                View All Programs <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>

        {/* Events */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between mb-10 gap-4">
              <div>
                <p className="text-violet-600 text-sm font-medium uppercase tracking-widest mb-3">
                  <CalendarDays className="w-4 h-4 inline mr-1" />Mark Your Calendar
                </p>
                <h2 className="font-heading text-4xl sm:text-5xl text-zinc-900">Upcoming Events</h2>
              </div>
              <Link href="/events" className="text-sm text-violet-600 hover:text-violet-800 font-medium flex items-center gap-1">
                All Events <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="divide-y divide-zinc-100">
              {upcomingEvents.map((event) => (
                <div key={event.title} className="group flex items-start gap-6 py-6 hover:bg-zinc-50 -mx-4 px-4 rounded-xl transition-colors">
                  <div className="flex-shrink-0 w-14 text-center">
                    <div className="text-xs font-semibold text-violet-600 uppercase tracking-widest">{event.month}</div>
                    <div className="font-heading text-3xl text-zinc-900 leading-none mt-0.5">{event.day}</div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-wrap items-center gap-2 mb-1">
                      <h3 className="font-semibold text-zinc-900">{event.title}</h3>
                      <span className="text-xs px-2 py-0.5 rounded-full bg-violet-100 text-violet-700 font-medium">{event.tag}</span>
                    </div>
                    <p className="text-zinc-500 text-sm">{event.description}</p>
                  </div>
                  <ArrowRight className="w-4 h-4 text-zinc-300 group-hover:text-violet-500 flex-shrink-0 mt-1 transition-colors" />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-violet-700 text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="font-heading text-4xl sm:text-5xl mb-5">Be Part of the Community</h2>
            <p className="text-violet-200 text-lg leading-relaxed mb-10 max-w-xl mx-auto">
              Whether you need support, want to volunteer, or wish to partner with us — every act of solidarity makes our community stronger.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-4 bg-white text-violet-700 font-semibold rounded-lg hover:bg-zinc-100 transition-all text-sm">
                Reach Out to Us <ArrowRight className="w-4 h-4" />
              </Link>
              <Link href="/programs" className="inline-flex items-center gap-2 px-8 py-4 border border-violet-500 text-white font-medium rounded-lg hover:bg-violet-600 transition-all text-sm">
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
