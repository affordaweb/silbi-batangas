'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, X, Heart } from 'lucide-react'

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About Us' },
  { href: '/programs', label: 'Programs' },
  { href: '/events', label: 'Events' },
  { href: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-violet-100 shadow-sm">
      {/* Rainbow strip */}
      <div className="h-1 w-full bg-linear-to-r from-red-500 via-yellow-400 via-green-500 via-blue-500 to-violet-600" />
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5 group">
          <div className="w-9 h-9 rounded-xl bg-linear-to-br from-violet-600 to-pink-500 flex items-center justify-center shadow-md group-hover:shadow-violet-300 transition-shadow">
            <Heart className="w-5 h-5 text-white fill-white" />
          </div>
          <div>
            <span className="font-heading font-bold text-violet-700 text-lg leading-none block">SILBI</span>
            <span className="text-xs text-zinc-400 leading-none">Batangas City</span>
          </div>
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="px-4 py-2 text-sm font-medium text-zinc-600 hover:text-violet-700 hover:bg-violet-50 rounded-lg transition-all"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="ml-3 px-5 py-2.5 bg-linear-to-r from-violet-600 to-pink-500 text-white text-sm font-semibold rounded-xl hover:shadow-lg hover:shadow-violet-200 transition-all hover:-translate-y-0.5"
          >
            Get Involved
          </Link>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden p-2 rounded-lg text-zinc-600 hover:bg-violet-50"
          aria-label="Toggle menu"
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-white border-t border-violet-100 px-4 py-4 space-y-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="block px-4 py-3 text-sm font-medium text-zinc-700 hover:text-violet-700 hover:bg-violet-50 rounded-xl transition-all"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            onClick={() => setOpen(false)}
            className="block mt-3 px-4 py-3 bg-linear-to-r from-violet-600 to-pink-500 text-white text-sm font-semibold rounded-xl text-center"
          >
            Get Involved
          </Link>
        </div>
      )}
    </header>
  )
}
