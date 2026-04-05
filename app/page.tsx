import type { Metadata } from 'next'
import Image from 'next/image'
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

// Community photos from SILBI events and activities
const communityPhotos = [
  {
    src: 'https://scontent.fmnl30-1.fna.fbcdn.net/v/t39.30808-6/610971507_122200615928363888_550435625614358058_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=dd6889&_nc_eui2=AeHpnihPMnxfKUa1VE4SJXWjM8LIdIJi2OUzwsh0gmLY5TOhxonVD1cFmuhL9__p1J0&_nc_ohc=4C6u9AkQD8kQ7kNvwHIxwKL&_nc_oc=AdrBJtq6xQ7tuwMwiKGM3SuQ4Lv5bVLBTYHn3ktlPG6x9hspCEEjWpZzedEErWaX75U&_nc_zt=23&_nc_ht=scontent.fmnl30-1.fna&_nc_gid=vIyKa8mAFG6ZlLTGfIH7zw&_nc_ss=7a3a8&oh=00_Af31I0f21N-9hvojFdGTHTpu5IsIh1OVYKhzvYqyAEgZEQ&oe=69D7B217',
    alt: 'SILBI Batangas community gathering',
  },
  {
    src: 'https://scontent.fmnl30-3.fna.fbcdn.net/v/t39.30808-6/608927093_122200615598363888_3855345760959684008_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=dd6889&_nc_eui2=AeEjwxzP5v5uNkml14iGQ8P6tnO_94_bWnq2c7_3j9taeiyMKL2b6SPSCiUTPNN9XIc&_nc_ohc=sWm9oLSQngsQ7kNvwFXysVt&_nc_oc=AdrxaX-ZJ-Yu0rne_DUywoNrq3u6nRJH1ds-89UrufLvabzPxOykS78zvI_ZUJnSxkI&_nc_zt=23&_nc_ht=scontent.fmnl30-3.fna&_nc_gid=Uj44OEoItMr4AjaXkNAOjA&_nc_ss=7a3a8&oh=00_Af0PaZjZiymcGEpoJJNDuX7LXZAvgMg-nCpUeN8u5mMsYg&oe=69D7A126',
    alt: 'Pride celebration event',
  },
  {
    src: 'https://scontent.fmnl30-2.fna.fbcdn.net/v/t39.30808-6/600304243_122198358134363888_599989043554930694_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=dd6889&_nc_eui2=AeH9a1ILcVCwYFYcsDQ3C4_1LHJ0mi0rwBAscnSaLSvAEEtdH7qXLZyjQqvQpXJboLg&_nc_ohc=RwwXo2v8lNsQ7kNvwH2b1iC&_nc_oc=AdpsY_zgMuH5oqQrZxKZ74xji-W-zNjV4ug1iqRT8iF9wpClOU9oAZpRlwh87YQNs4M&_nc_zt=23&_nc_ht=scontent.fmnl30-2.fna&_nc_gid=Wq24Wj29rqDo93Ksl6rm5Q&_nc_ss=7a3a8&oh=00_Af1XHG3HfXF2o3rwwI-9s4Ke6aXmBCldfr1vMEv18K9Iqg&oe=69D7A029',
    alt: 'Community outreach program',
  },
  {
    src: 'https://scontent.fmnl30-1.fna.fbcdn.net/v/t39.30808-6/600251011_122198358062363888_3084036396025018211_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=dd6889&_nc_eui2=AeECkcfoRhfG0PRpPDWmYWuAkP8yY9GvZzGQ_zJj0a9nMfy7_9g3V7b2Oy4rL93lpLc&_nc_ohc=o50bZNEfmiAQ7kNvwHDTabl&_nc_oc=Adr38u1c5xS-xr4m2SPH0xjNdZNojf3VzsXyVVPDqb9YugJPN4Md8215NEACZAlcWJU&_nc_zt=23&_nc_ht=scontent.fmnl30-1.fna&_nc_gid=uUOOcuJJo8ln7EtOkdolkw&_nc_ss=7a3a8&oh=00_Af1p_972Eg8xFAMiTnfAVHiLBR58zaXOkBpgwImJwuJz6A&oe=69D7A6E0',
    alt: 'SILBI members at event',
  },
  {
    src: 'https://scontent.fmnl30-3.fna.fbcdn.net/v/t39.30808-6/602007861_122198358044363888_6916170435435317843_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=dd6889&_nc_eui2=AeFR5WjIK_KnVsWicJATytI72Knr_ORF1ELYqev85EXUQqU2JZeeIqL7WYrSWedTrok&_nc_ohc=lfbIbwQgwKoQ7kNvwHxPzVR&_nc_oc=AdoXrsY9Qg2vRFUTU-V9KNYmeVKjbCN2EoEuWt9aLWwI5X91phyNhQFGnzIHmojah_8&_nc_zt=23&_nc_ht=scontent.fmnl30-3.fna&_nc_gid=pM1GZ6gM1z_DdbsqzigtuQ&_nc_ss=7a3a8&oh=00_Af2OZmjzBRe3NjHW6ZPWDIn8-fu4mKOgL7Rsfkr-GNQAKA&oe=69D7AEA0',
    alt: 'HIV advocacy workshop',
  },
  {
    src: 'https://scontent.fmnl30-3.fna.fbcdn.net/v/t39.30808-6/602346142_122198357990363888_7155287960675820069_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=dd6889&_nc_eui2=AeFp8ywhzMOqgxCsMZrOr9dHx5A2a4Srm3jHkDZrhKubeB9znjc6VW4jtulcbDLuMig&_nc_ohc=QOvJ69P14QEQ7kNvwHy_7Iw&_nc_oc=Adpvz3C3HN977pFGaDOoYLJ3X8PO8VuqTNEypM6abfzRM8maieF8u2oVeSHEdYBiejI&_nc_zt=23&_nc_ht=scontent.fmnl30-3.fna&_nc_gid=2W2chJcVaXYXwKMhqwgOZw&_nc_ss=7a3a8&oh=00_Af3Lc5DeOTnclSBUt753SqYBweCUzU4-UhrKbY2Kdn5cuQ&oe=69D7A6A9',
    alt: 'Community support group',
  },
]

const homepageSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'SILBI Batangas City — LGBTQIA+ Community Organization',
  description: 'LGBTQIA-SILBI Batangas City Inc. — empowering the LGBTQIA+ community through HIV advocacy, outreach programs, and rights protection.',
  url: 'https://v2-sigma.vercel.app',
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

          {/* Floating elements */}
          <div className="absolute top-20 left-10 w-2 h-2 bg-accent-light rounded-full animate-float opacity-60" style={{ animationDelay: '0s' }} />
          <div className="absolute top-40 right-20 w-1 h-1 bg-accent rounded-full animate-float opacity-40" style={{ animationDelay: '2s' }} />
          <div className="absolute bottom-32 left-1/4 w-1.5 h-1.5 bg-accent-light rounded-full animate-float opacity-50" style={{ animationDelay: '4s' }} />

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
              <div className="animate-fade-up">
                <div className="section-label-white mb-6">
                  <Sparkles className="w-4 h-4" />
                  Batangas City, Philippines
                </div>
                <h1 className="font-heading text-5xl sm:text-6xl lg:text-7xl leading-[1.05] mb-8 text-white">
                  Pride.<br />
                  <span className="gradient-text-luxury italic animate-pulse">Service.</span><br />
                  Community.
                </h1>
                <p className="text-violet-200/80 text-lg leading-relaxed mb-12 max-w-lg">
                  <strong className="text-white">Samahan ng Ikatlong Lahi ng Batangas, Inc.</strong> — established in 2015, empowering the LGBTQIA+ community of Batangas City through HIV advocacy, outreach, and rights protection.
                </p>
                <div className="flex flex-wrap gap-5">
                  <Link
                    href="/programs"
                    className="btn-luxury-primary text-base group"
                  >
                    Our Programs <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                  <Link
                    href="/contact"
                    className="btn-luxury-outline-white text-base group"
                  >
                    Get Involved <Heart className="w-4 h-4 group-hover:scale-110 transition-transform" />
                  </Link>
                </div>
                <div className="mt-12 flex flex-wrap gap-6">
                  {['20+ Years', 'HIV Advocacy', 'Community-Run'].map((item, index) => (
                    <div key={item} className="flex items-center gap-2 text-sm text-violet-200/70 animate-fade-in" style={{ animationDelay: `${0.5 + index * 0.1}s` }}>
                      <CheckCircle className="w-4 h-4 text-accent-light" />
                      {item}
                    </div>
                  ))}
                </div>
              </div>

              {/* Stats Cards - Glassmorphism */}
              <div className="grid grid-cols-2 gap-5 animate-fade-up" style={{ animationDelay: '0.2s' }}>
                {stats.map((stat, index) => (
                  <div key={stat.label} className="card-luxury-dark group hover:scale-105 transition-transform duration-300" style={{ animationDelay: `${0.3 + index * 0.1}s` }}>
                    <div className="font-heading text-4xl text-white mb-2 gradient-text-luxury group-hover:scale-110 transition-transform">{stat.value}</div>
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

        {/* Community Gallery Section */}
        <section className="py-24 bg-white relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-14">
              <div className="section-label">Our Community</div>
              <h2 className="section-title">Moments of Pride & Service</h2>
              <p className="section-subtitle mx-auto">
                Capturing the spirit, joy, and solidarity of the LGBTQIA+ community of Batangas City.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {communityPhotos.map((photo, index) => (
                <div
                  key={index}
                  className={`relative group overflow-hidden rounded-2xl ${
                    index === 0 ? 'md:col-span-2 md:row-span-2' : ''
                  }`}
                >
                  <Image
                    src={photo.src}
                    alt={photo.alt}
                    width={index === 0 ? 800 : 400}
                    height={index === 0 ? 800 : 400}
                    className="w-full h-full object-cover aspect-square transition-transform duration-500 group-hover:scale-110"
                    loading={index < 3 ? 'eager' : 'lazy'}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <p className="text-white text-sm font-medium">{photo.alt}</p>
                  </div>
                </div>
              ))}
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

        {/* Testimonials Section - Soft Background */}
        <section className="py-24 bg-gradient-to-br from-primary-50 via-white to-accent-light/5 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary-200/10 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent-light/10 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2" />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
            <div className="text-center mb-16">
              <div className="section-label">Community Voices</div>
              <h2 className="section-title">What Our Community Says</h2>
              <p className="section-subtitle mx-auto">
                Real stories from the people we&apos;ve served and supported.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  quote: "SILBI gave me the courage to live authentically. Their HIV testing program saved my life, and their community support helped me find my place in Batangas.",
                  author: "Alex M.",
                  role: "Community Member",
                  location: "Batangas City"
                },
                {
                  quote: "As a young LGBTQIA+ person, SILBI provided the safe space I needed. Their youth programs and mentorship changed everything for me.",
                  author: "Jordan L.",
                  role: "Youth Program Participant",
                  location: "Batangas City"
                },
                {
                  quote: "SILBI's legal assistance helped me secure housing without discrimination. Ordinance No. 12 is real because of their advocacy work.",
                  author: "Maria S.",
                  role: "Community Advocate",
                  location: "Batangas City"
                }
              ].map((testimonial, index) => (
                <div
                  key={index}
                  className="card-luxury bg-white/80 backdrop-blur-sm border-primary-100/50 hover:border-primary-200/70 transition-all duration-300 group"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="mb-6">
                    <div className="flex gap-1 mb-4">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} className="w-4 h-4 text-accent fill-current" viewBox="0 0 24 24">
                          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                        </svg>
                      ))}
                    </div>
                    <blockquote className="text-warm-gray-700 italic leading-relaxed">
                      &ldquo;{testimonial.quote}&rdquo;
                    </blockquote>
                  </div>
                  <div className="border-t border-primary-100 pt-4">
                    <div className="font-semibold text-warm-gray-800">{testimonial.author}</div>
                    <div className="text-sm text-primary-600 font-medium">{testimonial.role}</div>
                    <div className="text-xs text-warm-gray-500">{testimonial.location}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Partners Section - Clean White */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <div className="section-label">Our Partners</div>
              <h2 className="section-title">Together We Make Change</h2>
              <p className="section-subtitle mx-auto">
                We collaborate with local government, healthcare providers, and community organizations to serve our LGBTQIA+ community better.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
              {[
                { name: "Batangas City Government", logo: "🏛️" },
                { name: "Batangas Medical Center", logo: "🏥" },
                { name: "City Health Office", logo: "⚕️" },
                { name: "Provincial DOH", logo: "🩺" }
              ].map((partner) => (
                <div key={partner.name} className="group">
                  <div className="card-luxury bg-primary-50/50 border-primary-100/50 hover:border-primary-200/70 hover:bg-primary-50/80 transition-all duration-300 text-center py-8">
                    <div className="text-4xl mb-3">{partner.logo}</div>
                    <div className="font-semibold text-warm-gray-800 text-sm">{partner.name}</div>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center mt-12">
              <p className="text-warm-gray-500 text-sm mb-6">
                Interested in partnering with SILBI? We&apos;d love to hear from you.
              </p>
              <Link href="/contact" className="btn-luxury-secondary text-sm">
                Become a Partner <ArrowRight className="w-4 h-4" />
              </Link>
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
