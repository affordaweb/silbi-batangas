import Link from 'next/link'
import { Heart, MapPin, Mail, Phone } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-zinc-950 text-zinc-400">
      {/* Rainbow strip */}
      <div className="h-1 w-full bg-linear-to-r from-red-500 via-yellow-400 via-green-500 via-blue-500 to-violet-600" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-9 h-9 rounded-xl bg-linear-to-br from-violet-600 to-pink-500 flex items-center justify-center">
                <Heart className="w-5 h-5 text-white fill-white" />
              </div>
              <div>
                <span className="font-heading font-bold text-white text-lg leading-none block">SILBI Batangas City</span>
                <span className="text-xs text-zinc-500 leading-none">LGBTQIA+ Community Organization</span>
              </div>
            </div>
            <p className="text-sm text-zinc-400 leading-relaxed max-w-sm mb-5">
              Samahan ng Ikatlong Lahi ng Batangas, Inc. — serving the LGBTQIA+ community of Batangas City through HIV advocacy, community programs, and rights protection.
            </p>
            <div className="flex flex-col gap-2.5 text-sm">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-violet-400 flex-shrink-0" />
                <span>Batangas City, CALABARZON, Philippines</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-violet-400 flex-shrink-0" />
                <span>silbibatangascity@gmail.com</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-heading font-semibold text-white text-sm uppercase tracking-wider mb-4">Organization</h3>
            <ul className="space-y-2.5 text-sm">
              {[
                { href: '/about', label: 'About SILBI' },
                { href: '/programs', label: 'Programs & Services' },
                { href: '/events', label: 'Events' },
                { href: '/contact', label: 'Contact Us' },
              ].map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="hover:text-violet-400 transition-colors">{l.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h3 className="font-heading font-semibold text-white text-sm uppercase tracking-wider mb-4">Programs</h3>
            <ul className="space-y-2.5 text-sm">
              {[
                'HIV Testing & Counseling',
                'Community Outreach',
                'Legal Assistance',
                'Mental Health Support',
                'Youth Programs',
              ].map((p) => (
                <li key={p} className="text-zinc-500">{p}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-zinc-800 mt-12 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-600">
          <p>© {new Date().getFullYear()} LGBTQIA-SILBI Batangas City Inc. All rights reserved.</p>
          <p className="flex items-center gap-1">
            Made with <Heart className="w-3 h-3 text-pink-500 fill-pink-500" /> for the community
          </p>
        </div>
      </div>
    </footer>
  )
}
