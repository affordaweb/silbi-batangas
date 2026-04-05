import Link from 'next/link'
import { MapPin, Mail, Heart } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="luxury-gradient-bg text-white relative overflow-hidden">
      {/* Subtle glow orbs for depth */}
      <div className="luxury-glow-orb luxury-glow-orb-1 opacity-30" />
      <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-accent/10 rounded-full blur-3xl" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-primary-500 to-primary-700 flex items-center justify-center shadow-lg shadow-primary-500/40">
                <span className="font-heading text-white font-bold text-xl italic">S</span>
              </div>
              <div>
                <span className="font-heading text-white text-xl leading-none block font-semibold">SILBI Batangas City</span>
                <span className="text-xs text-violet-200/60 leading-none tracking-wide">LGBTQIA+ Community Organization</span>
              </div>
            </div>
            <p className="text-sm text-violet-200/60 leading-relaxed max-w-md mb-6">
              Samahan ng Ikatlong Lahi ng Batangas, Inc. — serving the LGBTQIA+ community of Batangas City through HIV advocacy, community programs, and rights protection since 2015.
            </p>
            
            {/* Contact Info */}
            <div className="flex flex-col gap-3 text-sm">
              <div className="flex items-center gap-2.5 text-violet-200/70">
                <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center">
                  <MapPin className="w-4 h-4 text-accent-light" />
                </div>
                <span>Batangas City, CALABARZON, Philippines</span>
              </div>
              <div className="flex items-center gap-2.5 text-violet-200/70">
                <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center">
                  <Mail className="w-4 h-4 text-accent-light" />
                </div>
                <a href="mailto:silbibatangascity@gmail.com" className="hover:text-white transition-colors">
                  silbibatangascity@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-2.5 text-violet-200/70">
                <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center">
                  <svg className="w-4 h-4 text-accent-light" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </div>
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
            <h3 className="text-white text-sm font-bold uppercase tracking-widest mb-6 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-accent" />
              Organization
            </h3>
            <ul className="space-y-3 text-sm">
              {[
                { href: '/about', label: 'About SILBI' },
                { href: '/programs', label: 'Programs & Services' },
                { href: '/events', label: 'Events Calendar' },
                { href: '/contact', label: 'Contact Us' },
              ].map((link) => (
                <li key={link.href}>
                  <Link 
                    href={link.href} 
                    className="text-violet-200/60 hover:text-white transition-colors flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-violet-500/40 group-hover:bg-accent transition-colors" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h3 className="text-white text-sm font-bold uppercase tracking-widest mb-6 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-accent" />
              Our Work
            </h3>
            <ul className="space-y-3 text-sm">
              {[
                'HIV Testing & Counseling',
                'Community Outreach',
                'Legal Assistance',
                'Mental Health Support',
                'Youth Programs',
              ].map((program) => (
                <li key={program} className="flex items-center gap-2 text-violet-200/50">
                  <Heart className="w-3.5 h-3.5 text-accent/60 flex-shrink-0" />
                  {program}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 mt-14 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-violet-200/40">
            © {currentYear} LGBTQIA-SILBI Batangas City Inc. All rights reserved.
          </p>
          <div className="flex items-center gap-2 text-xs text-violet-200/40">
            <span>Made with</span>
            <Heart className="w-3.5 h-3.5 text-accent/60" />
            <span>for the community</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
