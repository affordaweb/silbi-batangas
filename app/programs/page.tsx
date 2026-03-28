import type { Metadata } from 'next'
import Link from 'next/link'
import { Heart, Ribbon, Users, Shield, Brain, BookOpen, Utensils, Home, ArrowRight, CheckCircle, Phone } from 'lucide-react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: { absolute: 'Programs & Services — SILBI Batangas City LGBTQIA+ Support' },
  description: 'Explore SILBI Batangas City programs: HIV testing and counseling, community outreach, legal assistance, mental health support, livelihood programs, and youth services.',
  alternates: { canonical: '/programs' },
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://silbi-batangas.vercel.app' },
    { '@type': 'ListItem', position: 2, name: 'Programs', item: 'https://silbi-batangas.vercel.app/programs' },
  ],
}

const programs = [
  {
    icon: Ribbon,
    title: 'HIV Testing & Advocacy',
    color: 'rose',
    tagline: 'Know Your Status. End the Stigma.',
    description: 'One of our flagship programs — we provide free HIV testing, pre- and post-test counseling, linkage to treatment, and community education campaigns to reduce HIV stigma and prevent new infections.',
    features: [
      'Free HIV testing (rapid and laboratory)',
      'Pre- and post-test counseling',
      'Referral to treatment centers and ARV access',
      'Community HIV awareness campaigns',
      'World AIDS Day annual commemoration',
      'Mobile testing outreach to far-flung communities',
    ],
  },
  {
    icon: Users,
    title: 'Community Outreach & Livelihood',
    color: 'violet',
    tagline: 'Building Stronger Communities Together.',
    description: 'From relief operations during calamities to livelihood training and feeding programs, SILBI ensures LGBTQIA+ members are not forgotten in community support systems.',
    features: [
      'Relief goods distribution during disasters',
      'Livelihood skills training',
      'Community feeding programs',
      'Cooperative and mutual aid support',
      'Barangay-level coordination',
      'Peer-to-peer support networks',
    ],
  },
  {
    icon: Shield,
    title: 'Rights & Legal Assistance',
    color: 'sky',
    tagline: 'Your Rights Are Our Fight.',
    description: 'Leveraging Batangas City Ordinance No. 12 (Anti-Discrimination Ordinance) and national anti-discrimination laws, we help community members understand and access their legal rights.',
    features: [
      'Know-your-rights workshops and seminars',
      'Legal referral and paralegal support',
      'Ordinance No. 12 awareness and implementation',
      'Documentation of discrimination cases',
      'Coordination with LGU and law enforcement',
      'Advocacy for the SOGIESC Equality Act',
    ],
  },
  {
    icon: Brain,
    title: 'Mental Health & Wellness',
    color: 'emerald',
    tagline: 'Your Mental Health Matters.',
    description: 'Safe, affirming spaces for LGBTQIA+ individuals to process their experiences. We connect members with mental health professionals who understand LGBTQIA+ needs and provide peer support groups.',
    features: [
      'Peer support group sessions',
      'Referral to LGBTQ-affirming counselors',
      'Mental health first aid training',
      'Crisis intervention support',
      'Online safe space communities',
      'Wellness activities and retreats',
    ],
  },
  {
    icon: BookOpen,
    title: 'Youth & Education Programs',
    color: 'amber',
    tagline: 'Empowering the Next Generation.',
    description: 'Young LGBTQIA+ Batanguenos deserve to grow up knowing they are valued. We run youth-focused education programs, scholarship referrals, and safe spaces for LGBTQIA+ youth.',
    features: [
      'LGBTQIA+ youth safe space circles',
      'Anti-bullying and inclusion workshops (schools)',
      'Scholarship referral and educational support',
      'Leadership development for LGBTQIA+ youth',
      'Career mentorship programs',
    ],
  },
  {
    icon: Home,
    title: 'Support Services & Referrals',
    color: 'pink',
    tagline: 'We Connect You to Help.',
    description: 'Not every need can be met by SILBI alone — we maintain a robust referral network connecting members to health facilities, social services, legal aid, and government agencies.',
    features: [
      'Emergency assistance coordination',
      'Social welfare referrals (DSWD, LGU)',
      'Shelter and housing assistance referrals',
      'Drug and alcohol recovery support',
      'STI treatment referrals',
    ],
  },
]

const colorMap: Record<string, { bg: string; icon: string; border: string; badge: string }> = {
  rose: { bg: 'bg-rose-50', icon: 'text-rose-500', border: 'border-rose-100 hover:border-rose-300', badge: 'bg-rose-100 text-rose-700' },
  violet: { bg: 'bg-violet-50', icon: 'text-violet-500', border: 'border-violet-100 hover:border-violet-300', badge: 'bg-violet-100 text-violet-700' },
  sky: { bg: 'bg-sky-50', icon: 'text-sky-500', border: 'border-sky-100 hover:border-sky-300', badge: 'bg-sky-100 text-sky-700' },
  emerald: { bg: 'bg-emerald-50', icon: 'text-emerald-500', border: 'border-emerald-100 hover:border-emerald-300', badge: 'bg-emerald-100 text-emerald-700' },
  amber: { bg: 'bg-amber-50', icon: 'text-amber-500', border: 'border-amber-100 hover:border-amber-300', badge: 'bg-amber-100 text-amber-700' },
  pink: { bg: 'bg-pink-50', icon: 'text-pink-500', border: 'border-pink-100 hover:border-pink-300', badge: 'bg-pink-100 text-pink-700' },
}

export default function ProgramsPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <Navbar />
      <main className="pt-17">

        {/* Hero */}
        <section className="relative overflow-hidden bg-violet-900 text-white py-20 md:py-28">
          
          
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <nav className="flex items-center gap-2 text-sm text-violet-300 mb-8">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <span>/</span>
              <span className="text-white">Programs</span>
            </nav>
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-violet-400/40 bg-violet-800/50 text-violet-200 text-sm font-medium mb-6">
                <Heart className="w-4 h-4 fill-pink-400 text-pink-400" />
                What We Do
              </div>
              <h1 className="font-heading text-5xl sm:text-6xl font-bold leading-tight mb-6">
                Programs &{' '}
                <span className="text-violet-300">
                  Services
                </span>
              </h1>
              <p className="text-xl text-violet-200 leading-relaxed">
                From HIV testing to legal assistance, mental health support to livelihood programs — SILBI offers comprehensive services for the LGBTQIA+ community of Batangas City.
              </p>
            </div>
          </div>
        </section>

        {/* Programs Grid */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {programs.map((program) => {
                const Icon = program.icon
                const colors = colorMap[program.color]
                return (
                  <div
                    key={program.title}
                    className={`group flex flex-col p-8 rounded-2xl border bg-white hover:-translate-y-1 hover:shadow-xl transition-all duration-300 ${colors.border}`}
                  >
                    <div className="flex items-start gap-4 mb-5">
                      <div className={`w-14 h-14 rounded-xl ${colors.bg} flex items-center justify-center flex-shrink-0`}>
                        <Icon className={`w-7 h-7 ${colors.icon}`} />
                      </div>
                      <div>
                        <span className={`text-xs font-bold uppercase tracking-widest px-2.5 py-1 rounded-full ${colors.badge} mb-2 inline-block`}>
                          {program.tagline}
                        </span>
                        <h2 className="font-heading text-2xl font-bold text-zinc-900">{program.title}</h2>
                      </div>
                    </div>
                    <p className="text-zinc-500 text-sm leading-relaxed mb-5">{program.description}</p>
                    <ul className="space-y-2 flex-1">
                      {program.features.map((f) => (
                        <li key={f} className="flex items-start gap-2.5 text-sm text-zinc-600">
                          <CheckCircle className={`w-4 h-4 flex-shrink-0 mt-0.5 ${colors.icon}`} />
                          {f}
                        </li>
                      ))}
                    </ul>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* CTA / Need Help */}
        <section className="py-16 bg-violet-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="rounded-3xl bg-violet-700 text-white p-10 md:p-14 text-center relative overflow-hidden">
              <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-white/10 rounded-full blur-[80px]" />
              <div className="relative">
                <Phone className="w-12 h-12 text-white mx-auto mb-5 opacity-90" />
                <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">Need Help or Support?</h2>
                <p className="text-violet-100 text-lg leading-relaxed mb-8 max-w-xl mx-auto">
                  Reach out to us directly. Our team is here to listen, assist, and connect you to the right program or resource.
                </p>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-white text-violet-700 font-bold rounded-2xl hover:shadow-2xl hover:shadow-white/20 transition-all hover:-translate-y-0.5"
                >
                  Contact SILBI <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  )
}
