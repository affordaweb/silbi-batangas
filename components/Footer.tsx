import Link from 'next/link'
import { MapPin, Mail } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-zinc-950 text-zinc-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-8 h-8 rounded-lg bg-violet-700 flex items-center justify-center">
                <span className="font-heading text-white font-bold text-sm italic">S</span>
              </div>
              <div>
                <span className="font-heading text-white text-lg leading-none block">SILBI Batangas City</span>
                <span className="text-xs text-zinc-500 leading-none">LGBTQIA+ Community Organization</span>
              </div>
            </div>
            <p className="text-sm text-zinc-500 leading-relaxed max-w-sm mb-5">
              Samahan ng Ikatlong Lahi ng Batangas, Inc. — serving the LGBTQIA+ community of Batangas City through HIV advocacy, community programs, and rights protection.
            </p>
            <div className="flex flex-col gap-2.5 text-sm">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-violet-500 flex-shrink-0" />
                <span>Batangas City, CALABARZON, Philippines</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-violet-500 flex-shrink-0" />
                <span>silbibatangascity@gmail.com</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4 text-violet-500 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                <a
                  href="https://www.facebook.com/p/LGBTQIA-Silbi-Batangas-City-Inc-61560916667674/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  LGBTQIA-Silbi Batangas City Inc.
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white text-sm font-semibold uppercase tracking-wider mb-4">Organization</h3>
            <ul className="space-y-2.5 text-sm">
              {[
                { href: '/about', label: 'About SILBI' },
                { href: '/programs', label: 'Programs & Services' },
                { href: '/events', label: 'Events' },
                { href: '/contact', label: 'Contact Us' },
              ].map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="hover:text-white transition-colors">{l.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h3 className="text-white text-sm font-semibold uppercase tracking-wider mb-4">Programs</h3>
            <ul className="space-y-2.5 text-sm">
              {[
                'HIV Testing & Counseling',
                'Community Outreach',
                'Legal Assistance',
                'Mental Health Support',
                'Youth Programs',
              ].map((p) => (
                <li key={p} className="text-zinc-600">{p}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-zinc-900 mt-12 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-700">
          <p>© {new Date().getFullYear()} LGBTQIA-SILBI Batangas City Inc. All rights reserved.</p>
          <p>Made with care for the community</p>
        </div>
      </div>
    </footer>
  )
}
