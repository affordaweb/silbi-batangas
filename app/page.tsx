import type { Metadata } from 'next'
import Link from 'next/link'
import { Heart, Users, Ribbon, Shield, Megaphone, CalendarDays, ArrowRight, CheckCircle, Star } from 'lucide-react'
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
    color: 'rose',
  },
  {
    icon: Users,
    title: 'Community Outreach',
    description: 'Livelihood support, relief operations, feeding programs, and community-building initiatives for LGBTQIA+ members.',
    color: 'violet',
  },
  {
    icon: Shield,
    title: 'Rights & Legal Support',
    description: 'Guided by Ordinance No. 12 (Batangas City Anti-Discrimination Ordinance), we help community members access legal protection.',
    color: 'sky',
  },
  {
    icon: Heart,
    title: 'Mental Health & Wellness',
    description: 'Safe spaces, peer support groups, and referrals to mental health professionals for LGBTQIA+ individuals.',
    color: 'emerald',
  },
]

const stats = [
  { value: '20+', label: 'Years of Service' },
  { value: '5,000+', label: 'Lives Touched' },
  { value: '100+', label: 'Events Organized' },
  { value: '1', label: 'Anti-Discrimination Ordinance Won' },
]

const upcomingEvents = [
  {
    month: 'JUN',
    day: '28',
    title: 'Batangas Pride March 2026',
    description: 'Annual Pride celebration honoring the LGBTQIA+ community of Batangas City. March, performances, and community gathering.',
    tag: 'Pride Month',
    tagColor: 'violet',
  },
  {
    month: 'AUG',
    day: '15',
    title: 'Aura-Ala-Eh Beauty Pageant',
    description: "SILBI's iconic annual pageant celebrating LGBTQIA+ talent, beauty, and community spirit. A night to remember.",
    tag: 'Flagship Event',
    tagColor: 'rose',
  },
  {
    month: 'DEC',
    day: '1',
    title: 'World AIDS Day 2026',
    description: 'Community commemoration with free HIV testing, awareness activities, and a candlelight remembrance ceremony.',
    tag: 'HIV Advocacy',
    tagColor: 'sky',
  },
]

const homepageSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'SILBI Batangas City — LGBTQIA+ Community Organization',
  description: 'LGBTQIA-SILBI Batangas City Inc. — empowering the LGBTQIA+ community through HIV advocacy, outreach programs, and rights protection.',
  url: 'https://silbi-batangas.vercel.app',
}

const colorMap: Record<string, { bg: string; icon: string }> = {
  rose: { bg: 'bg-rose-50', icon: 'text-rose-500' },
  violet: { bg: 'bg-violet-50', icon: 'text-violet-500' },
  sky: { bg: 'bg-sky-50', icon: 'text-sky-500' },
  emerald: { bg: 'bg-emerald-50', icon: 'text-emerald-500' },
}

const eventTagColors: Record<string, string> = {
  violet: 'bg-violet-100 text-violet-700',
  rose: 'bg-rose-100 text-rose-700',
  sky: 'bg-sky-100 text-sky-700',
}

export default function HomePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(homepageSchema) }} />
      <Navbar />
      <main className="pt-17">

        {/* Hero */}
        <section className="relative overflow-hidden bg-gradient-to-br from-violet-950 via-violet-900 to-pink-900 text-white min-h-[92vh] flex items-center">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-pink-500/20 rounded-full blur-[120px] pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-violet-400/20 rounded-full blur-[100px] pointer-events-none" />
          <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-red-500 via-yellow-400 via-green-500 via-blue-500 to-violet-400" />

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-violet-400/40 bg-violet-800/50 backdrop-blur-sm text-violet-200 text-sm font-medium mb-8">
                  <Heart className="w-4 h-4 fill-pink-400 text-pink-400" />
                  Batangas City, Philippines
                </div>

                <h1 className="font-heading text-5xl sm:text-6xl lg:text-7xl font-extrabold leading-[1.05] mb-6">
                  Pride.{' '}
                  <span className="bg-gradient-to-r from-pink-400 to-amber-400 bg-clip-text text-transparent">
                    Service.
                  </span>
                  <br />
                  Community.
                </h1>

                <p className="text-lg sm:text-xl text-violet-200 leading-relaxed mb-10 max-w-lg">
                  <strong className="text-white">Samahan ng Ikatlong Lahi ng Batangas, Inc.</strong> — over two decades of empowering the LGBTQIA+ community through HIV advocacy, outreach, and rights protection.
                </p>

                <div className="flex flex-wrap gap-4">
                  <Link
                    href="/programs"
                    className="inline-flex items-center gap-2 px-7 py-4 bg-gradient-to-r from-pink-500 to-violet-600 text-white font-semibold rounded-2xl hover:shadow-2xl hover:shadow-pink-500/30 transition-all hover:-translate-y-0.5 text-sm"
                  >
                    Our Programs <ArrowRight className="w-4 h-4" />
                  </Link>
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 px-7 py-4 bg-white/10 border border-white/20 backdrop-blur-sm text-white font-semibold rounded-2xl hover:bg-white/20 transition-all text-sm"
                  >
                    Get Involved
                  </Link>
                </div>

                <div className="mt-12 flex flex-wrap gap-4">
                  {['20+ Years Serving Batangas', 'HIV Advocacy Leader', 'Community-Run'].map((t) => (
                    <div key={t} className="flex items-center gap-1.5 text-sm text-violet-300">
                      <CheckCircle className="w-4 h-4 text-emerald-400" />
                      {t}
                    </div>
                  ))}
                </div>
              </div>

              {/* Stats cards — desktop */}
              <div className="hidden lg:grid grid-cols-2 gap-4">
                {stats.map((stat) => (
                  <div
                    key={stat.label}
                    className="p-7 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/15 transition-all hover:-translate-y-1"
                  >
                    <div className="font-heading text-4xl font-extrabold text-white mb-2">{stat.value}</div>
                    <div className="text-sm text-violet-200">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Mobile stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-12 lg:hidden">
              {stats.map((stat) => (
                <div key={stat.label} className="p-4 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 text-center">
                  <div className="font-heading text-2xl font-extrabold text-white">{stat.value}</div>
                  <div className="text-xs text-violet-300 mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* About strip */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-violet-100 text-violet-700 text-sm font-semibold mb-5">
                  <Star className="w-4 h-4 fill-violet-500 text-violet-500" />
                  Who We Are
                </div>
                <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-zinc-900 mb-5 leading-tight">
                  {"Batangas' Voice for "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-pink-500">
                    LGBTQIA+ Rights
                  </span>
                </h2>
                <p className="text-zinc-500 leading-relaxed mb-5">
                  Founded in the early 2000s, LGBTQIA-SILBI Batangas City Inc. — the <em>Samahan ng Ikatlong Lahi ng Batangas</em> — has been the primary organization advocating for LGBTQIA+ rights, health, and welfare in Batangas City and the surrounding region.
                </p>
                <p className="text-zinc-500 leading-relaxed mb-7">
                  Our work spans HIV prevention and testing, community outreach, livelihood programs, mental health support, and the fight for legislative protection — including the landmark Batangas City <strong>Ordinance No. 12</strong>, an anti-discrimination ordinance protecting LGBTQIA+ residents.
                </p>
                <Link
                  href="/about"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-violet-600 hover:bg-violet-700 text-white font-semibold rounded-xl transition-all text-sm shadow-md shadow-violet-200"
                >
                  Learn Our Story <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="col-span-2 p-6 rounded-2xl bg-gradient-to-br from-violet-600 to-pink-600 text-white">
                  <div className="font-heading text-3xl font-extrabold mb-1">Ordinance No. 12</div>
                  <div className="text-violet-100 text-sm">Batangas City Anti-Discrimination Ordinance — a landmark victory for LGBTQIA+ rights in the province.</div>
                </div>
                <div className="p-5 rounded-2xl bg-rose-50 border border-rose-100">
                  <Ribbon className="w-7 h-7 text-rose-500 mb-2" />
                  <div className="font-heading font-bold text-zinc-900 text-sm">HIV Advocacy</div>
                  <div className="text-xs text-zinc-500 mt-1">Testing, counseling & prevention</div>
                </div>
                <div className="p-5 rounded-2xl bg-violet-50 border border-violet-100">
                  <Megaphone className="w-7 h-7 text-violet-500 mb-2" />
                  <div className="font-heading font-bold text-zinc-900 text-sm">Community Voice</div>
                  <div className="text-xs text-zinc-500 mt-1">Rights protection & advocacy</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Programs */}
        <section className="py-20 bg-zinc-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-pink-100 text-pink-700 text-sm font-semibold mb-4">
                <Heart className="w-4 h-4" />
                What We Do
              </div>
              <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-zinc-900 mb-4">
                Programs & Services
              </h2>
              <p className="text-zinc-500 text-base max-w-2xl mx-auto">
                Comprehensive support for every member of our community — health, rights, livelihood, and belonging.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {programs.map((program) => {
                const Icon = program.icon
                const colors = colorMap[program.color]
                return (
                  <div
                    key={program.title}
                    className="group p-7 rounded-2xl border border-zinc-100 bg-white hover:border-violet-200 hover:-translate-y-1 hover:shadow-xl hover:shadow-violet-100/50 transition-all duration-300"
                  >
                    <div className={`w-14 h-14 rounded-xl ${colors.bg} flex items-center justify-center mb-5`}>
                      <Icon className={`w-7 h-7 ${colors.icon}`} />
                    </div>
                    <h3 className="font-heading text-xl font-bold text-zinc-900 mb-3">{program.title}</h3>
                    <p className="text-zinc-500 text-sm leading-relaxed">{program.description}</p>
                  </div>
                )
              })}
            </div>

            <div className="text-center mt-10">
              <Link
                href="/programs"
                className="inline-flex items-center gap-2 px-7 py-3.5 bg-violet-600 hover:bg-violet-700 text-white font-semibold rounded-xl transition-all text-sm shadow-md shadow-violet-200"
              >
                View All Programs <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>

        {/* Events */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-10 gap-4">
              <div>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-100 text-amber-700 text-sm font-semibold mb-3">
                  <CalendarDays className="w-4 h-4" />
                  Mark Your Calendar
                </div>
                <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-zinc-900">Upcoming Events</h2>
              </div>
              <Link
                href="/events"
                className="inline-flex items-center gap-2 px-5 py-2.5 border border-violet-200 text-violet-600 font-semibold rounded-xl hover:bg-violet-50 transition-all text-sm"
              >
                All Events <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="space-y-4">
              {upcomingEvents.map((event) => (
                <div
                  key={event.title}
                  className="group flex items-start gap-5 p-6 rounded-2xl border border-zinc-100 hover:border-violet-200 hover:shadow-lg hover:shadow-violet-100/50 transition-all duration-300 bg-white"
                >
                  <div className="flex-shrink-0 w-16 h-16 rounded-2xl bg-gradient-to-br from-violet-600 to-pink-600 flex flex-col items-center justify-center text-white">
                    <span className="text-xs font-bold uppercase tracking-wide">{event.month}</span>
                    <span className="font-heading text-2xl font-extrabold leading-none">{event.day}</span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-wrap items-center gap-2 mb-1.5">
                      <h3 className="font-heading text-lg font-bold text-zinc-900">{event.title}</h3>
                      <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${eventTagColors[event.tagColor]}`}>
                        {event.tag}
                      </span>
                    </div>
                    <p className="text-zinc-500 text-sm leading-relaxed">{event.description}</p>
                  </div>
                  <ArrowRight className="w-5 h-5 text-zinc-300 group-hover:text-violet-500 flex-shrink-0 mt-1 transition-colors" />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-gradient-to-br from-violet-900 via-violet-800 to-pink-900 text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-pink-500/20 rounded-full blur-[100px] pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-violet-400/20 rounded-full blur-[80px] pointer-events-none" />
          <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <Heart className="w-12 h-12 text-pink-400 fill-pink-400 mx-auto mb-6" />
            <h2 className="font-heading text-4xl sm:text-5xl font-extrabold mb-5">
              Be Part of the{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-amber-400">
                Community
              </span>
            </h2>
            <p className="text-violet-200 text-lg leading-relaxed mb-10 max-w-2xl mx-auto">
              Whether you need support, want to volunteer, or wish to partner with us — every act of solidarity makes our community stronger.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white text-violet-700 font-bold rounded-2xl hover:shadow-2xl hover:shadow-white/20 transition-all hover:-translate-y-0.5"
              >
                Reach Out to Us <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/programs"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white/10 border border-white/20 text-white font-semibold rounded-2xl hover:bg-white/20 transition-all"
              >
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
