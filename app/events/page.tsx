import type { Metadata } from 'next'
import Link from 'next/link'
import { Heart, CalendarDays, MapPin, ArrowRight, Star, Ribbon } from 'lucide-react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: { absolute: 'Events — SILBI Batangas City LGBTQIA+ Events & Activities' },
  description: 'Join SILBI Batangas City events: Pride March, Aura-Ala-Eh Beauty Pageant, World AIDS Day, community outreach, and more. Stay connected with the LGBTQIA+ community of Batangas.',
  alternates: { canonical: '/events' },
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://silbi-batangas.vercel.app' },
    { '@type': 'ListItem', position: 2, name: 'Events', item: 'https://silbi-batangas.vercel.app/events' },
  ],
}

const upcomingEvents = [
  {
    month: 'JUN',
    day: '28',
    year: '2026',
    title: 'Batangas Pride March 2026',
    description: "SILBI's annual Pride March through the streets of Batangas City — a joyful, colorful celebration of LGBTQIA+ identity and community. Everyone is welcome.",
    location: 'Batangas City, Philippines',
    category: 'Pride Month',
    categoryColor: 'violet',
    featured: true,
  },
  {
    month: 'AUG',
    day: '15',
    year: '2026',
    title: 'Aura-Ala-Eh Beauty Pageant 2026',
    description: "SILBI's flagship annual pageant — a night of glamour, talent, and community pride. The Aura-Ala-Eh pageant has been a cornerstone of LGBTQIA+ culture in Batangas for nearly two decades.",
    location: 'Batangas City, Philippines',
    category: 'Flagship Event',
    categoryColor: 'rose',
    featured: true,
  },
  {
    month: 'DEC',
    day: '1',
    year: '2026',
    title: 'World AIDS Day Commemoration 2026',
    description: 'A solemn and hopeful gathering to remember those lost to AIDS, celebrate survivors, and renew our commitment to HIV prevention. Free HIV testing and counseling available.',
    location: 'Batangas City, Philippines',
    category: 'HIV Advocacy',
    categoryColor: 'sky',
    featured: false,
  },
]

const pastHighlights = [
  {
    title: 'Aura-Ala-Eh 2025',
    description: "One of the most memorable editions of SILBI's iconic annual beauty pageant, celebrating LGBTQIA+ talent and community bonds.",
    category: 'Pageant',
  },
  {
    title: 'Batangas Pride March 2025',
    description: 'Hundreds marched through Batangas City in solidarity, joy, and pride — one of the largest LGBTQIA+ gatherings in the province.',
    category: 'Pride',
  },
  {
    title: 'World AIDS Day 2025',
    description: 'Free HIV testing, candlelight ceremony, and community education marked this important annual event.',
    category: 'Advocacy',
  },
  {
    title: 'Community Livelihood Fair 2025',
    description: 'Skills workshops, livelihood exhibits, and mutual aid activities supporting LGBTQIA+ community members.',
    category: 'Outreach',
  },
]

const categoryColors: Record<string, string> = {
  violet: 'bg-violet-100 text-violet-700',
  rose: 'bg-rose-100 text-rose-700',
  sky: 'bg-sky-100 text-sky-700',
  amber: 'bg-amber-100 text-amber-700',
}

export default function EventsPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <Navbar />
      <main className="pt-17">

        {/* Hero */}
        <section className="relative overflow-hidden bg-gradient-to-br from-violet-950 via-violet-900 to-pink-900 text-white py-20 md:py-28">
          <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-pink-500/20 rounded-full blur-[100px] pointer-events-none" />
          <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-red-500 via-yellow-400 via-green-500 via-blue-500 to-violet-400" />
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <nav className="flex items-center gap-2 text-sm text-violet-300 mb-8">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <span>/</span>
              <span className="text-white">Events</span>
            </nav>
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-violet-400/40 bg-violet-800/50 text-violet-200 text-sm font-medium mb-6">
                <CalendarDays className="w-4 h-4" />
                Community Calendar
              </div>
              <h1 className="font-heading text-5xl sm:text-6xl font-extrabold leading-tight mb-6">
                Events &{' '}
                <span className="bg-gradient-to-r from-pink-400 to-amber-400 bg-clip-text text-transparent">
                  Activities
                </span>
              </h1>
              <p className="text-xl text-violet-200 leading-relaxed">
                From Pride marches and beauty pageants to HIV advocacy and community outreach — there is always something happening at SILBI. Join us.
              </p>
            </div>
          </div>
        </section>

        {/* Featured upcoming events */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-3 mb-10">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-100 text-amber-700 text-sm font-semibold">
                <Star className="w-4 h-4 fill-amber-500 text-amber-500" />
                Upcoming Events — 2026
              </div>
            </div>

            <div className="space-y-6">
              {upcomingEvents.map((event) => (
                <div
                  key={event.title}
                  className={`group rounded-3xl border overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${event.featured ? 'border-violet-200 bg-gradient-to-r from-violet-50 to-pink-50 hover:shadow-violet-100/60' : 'border-zinc-100 bg-white hover:border-violet-200 hover:shadow-violet-100/50'}`}
                >
                  <div className="p-8 flex flex-col md:flex-row gap-6 items-start">
                    {/* Date badge */}
                    <div className="flex-shrink-0 w-20 h-20 rounded-2xl bg-gradient-to-br from-violet-600 to-pink-600 flex flex-col items-center justify-center text-white shadow-lg shadow-violet-300/30">
                      <span className="text-xs font-bold uppercase tracking-wider">{event.month}</span>
                      <span className="font-heading text-3xl font-extrabold leading-none">{event.day}</span>
                      <span className="text-xs text-violet-200">{event.year}</span>
                    </div>
                    <div className="flex-1">
                      <div className="flex flex-wrap items-center gap-2 mb-2">
                        <h2 className="font-heading text-2xl font-bold text-zinc-900">{event.title}</h2>
                        <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${categoryColors[event.categoryColor]}`}>
                          {event.category}
                        </span>
                        {event.featured && (
                          <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-amber-100 text-amber-700">
                            ★ Featured
                          </span>
                        )}
                      </div>
                      <p className="text-zinc-500 leading-relaxed mb-4">{event.description}</p>
                      <div className="flex items-center gap-1.5 text-sm text-zinc-400">
                        <MapPin className="w-4 h-4" />
                        {event.location}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Aura-Ala-Eh spotlight */}
        <section className="py-16 bg-zinc-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="rounded-3xl bg-gradient-to-br from-rose-600 to-pink-700 text-white p-10 md:p-14 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-white/10 rounded-full blur-[80px]" />
              <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
                <div>
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 text-white text-sm font-semibold mb-5">
                    <Star className="w-4 h-4 fill-amber-300 text-amber-300" />
                    SILBI Flagship Event
                  </div>
                  <h2 className="font-heading text-4xl md:text-5xl font-extrabold mb-5">Aura-Ala-Eh</h2>
                  <p className="text-rose-100 text-lg leading-relaxed mb-6">
                    More than a beauty pageant — Aura-Ala-Eh is SILBI&apos;s annual celebration of LGBTQIA+ identity, artistry, and community pride. Since its founding, it has been the most anticipated LGBTQIA+ event in Batangas City.
                  </p>
                  <p className="text-rose-100 leading-relaxed">
                    Contestants from the LGBTQIA+ community compete in evening wear, talent, and question-and-answer rounds — with proceeds supporting SILBI&apos;s community programs.
                  </p>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  {['Community-Run', 'Annual Tradition', 'Talent & Beauty', 'Fundraiser for Programs'].map((tag) => (
                    <div key={tag} className="p-5 rounded-2xl bg-white/15 backdrop-blur-sm text-center">
                      <div className="text-white font-heading font-bold text-sm">{tag}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Past Highlights */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10">
              <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-zinc-900 mb-4">Past Event Highlights</h2>
              <p className="text-zinc-500 max-w-xl mx-auto">Moments that made our community stronger.</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {pastHighlights.map((h) => (
                <div key={h.title} className="p-6 rounded-2xl border border-zinc-100 hover:border-violet-200 hover:-translate-y-1 hover:shadow-lg transition-all duration-300 bg-white">
                  <span className="text-xs font-bold uppercase tracking-widest text-violet-500 mb-3 block">{h.category}</span>
                  <h3 className="font-heading text-lg font-bold text-zinc-900 mb-2">{h.title}</h3>
                  <p className="text-zinc-500 text-xs leading-relaxed">{h.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-zinc-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <Ribbon className="w-10 h-10 text-rose-500 mx-auto mb-5" />
            <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-zinc-900 mb-4">
              Want to Volunteer or Sponsor?
            </h2>
            <p className="text-zinc-500 text-lg mb-8 max-w-xl mx-auto">
              Our events thrive because of community support. Reach out to learn how you can help — as a volunteer, sponsor, or partner organization.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-violet-600 hover:bg-violet-700 text-white font-bold rounded-2xl transition-all hover:-translate-y-0.5 shadow-md shadow-violet-200"
            >
              Get in Touch <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </section>

      </main>
      <Footer />
    </>
  )
}
