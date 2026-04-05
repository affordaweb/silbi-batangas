'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X, Sparkles } from 'lucide-react'

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About Us' },
  { href: '/programs', label: 'Programs' },
  { href: '/events', label: 'Events' },
  { href: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md shadow-luxury-md border-b border-primary-100/30'
          : 'bg-white/80 backdrop-blur-sm border-b border-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-[72px] flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group" aria-label="SILBI Batangas City Home">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary-600 to-primary-800 flex items-center justify-center shadow-lg shadow-primary-500/30 group-hover:shadow-primary-500/50 transition-all duration-300">
            <span className="font-heading text-white font-bold text-lg italic">S</span>
          </div>
          <div>
            <span className="font-heading text-warm-gray-800 text-xl leading-none block font-semibold">SILBI</span>
            <span className="text-xs text-warm-gray-400 leading-none tracking-wide">Batangas City</span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => {
            const isActive = pathname === link.href
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`relative px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 ${
                  isActive
                    ? 'text-primary-600 font-semibold'
                    : 'text-warm-gray-500 hover:text-warm-gray-800'
                }`}
              >
                {link.label}
                {isActive && (
                  <span className="absolute bottom-0 left-3 right-3 h-0.5 bg-gradient-to-r from-primary-500 to-primary-400 rounded-full" />
                )}
              </Link>
            )
          })}
          
          {/* CTA Button */}
          <Link
            href="/contact"
            className="ml-4 btn-luxury-primary text-sm px-6 py-2.5 shadow-lg"
          >
            <Sparkles className="w-4 h-4" />
            Get Involved
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden p-2.5 rounded-xl text-warm-gray-500 hover:bg-warm-gray-100 hover:text-warm-gray-700 transition-colors"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
        >
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </nav>

      {/* Mobile Menu Overlay */}
      {open && (
        <div
          className="fixed inset-0 z-40 md:hidden"
          role="dialog"
          aria-modal="true"
          aria-label="Mobile navigation"
        >
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-warm-gray-900/40 backdrop-blur-sm"
            onClick={() => setOpen(false)}
          />
          
          {/* Menu Panel */}
          <div className="absolute top-0 right-0 h-full w-80 max-w-[85vw] bg-white flex flex-col shadow-2xl">
            {/* Header */}
            <div className="flex items-center justify-between p-5 border-b border-warm-gray-100">
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-primary-600 to-primary-800 flex items-center justify-center">
                  <span className="font-heading text-white font-bold text-sm italic">S</span>
                </div>
                <span className="font-heading text-warm-gray-800 text-lg font-semibold">SILBI</span>
              </div>
              <button
                onClick={() => setOpen(false)}
                className="w-9 h-9 flex items-center justify-center rounded-full bg-warm-gray-100 hover:bg-warm-gray-200 transition-colors"
                aria-label="Close menu"
              >
                <X className="w-4 h-4 text-warm-gray-600" />
              </button>
            </div>

            {/* Navigation Links */}
            <nav className="flex-1 overflow-y-auto p-5" aria-label="Mobile navigation">
              <ul className="space-y-1.5">
                {navLinks.map((link) => {
                  const isActive = pathname === link.href
                  return (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        onClick={() => setOpen(false)}
                        className={`flex items-center px-4 py-3.5 rounded-xl text-sm font-medium transition-all duration-200 ${
                          isActive
                            ? 'bg-primary-50 text-primary-600 font-semibold'
                            : 'text-warm-gray-600 hover:text-warm-gray-900 hover:bg-warm-gray-50'
                        }`}
                      >
                        {link.label}
                      </Link>
                    </li>
                  )
                })}
              </ul>
            </nav>

            {/* Footer CTA */}
            <div className="p-5 border-t border-warm-gray-100 space-y-3">
              <Link
                href="/contact"
                onClick={() => setOpen(false)}
                className="btn-luxury-primary w-full justify-center text-sm"
              >
                <Sparkles className="w-4 h-4" />
                Get Involved
              </Link>
              <p className="text-center text-xs text-warm-gray-400">
                Join our community of pride & service
              </p>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}