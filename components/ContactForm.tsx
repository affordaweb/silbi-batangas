'use client'

import { useState, FormEvent } from 'react'

const SITE_NAME = 'silbibatangas'
const API_URL = 'https://contact-form-lake-theta.vercel.app/api/contact'

export default function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle')
  const [errorMsg, setErrorMsg] = useState('')

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus('submitting')
    setErrorMsg('')

    const form = e.currentTarget
    const data = new FormData(form)

    try {
      const res = await fetch(API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: data.get('name'),
          email: data.get('email'),
          message: data.get('message'),
          website: SITE_NAME,
          _honeypot: data.get('_honeypot') ?? '',
          phone: data.get('phone'),
          topic: data.get('topic'),
        }),
      })

      const json = await res.json()

      if (json.ok) {
        setStatus('success')
        form.reset()
      } else {
        setErrorMsg(json.error || 'Submission failed.')
        setStatus('error')
      }
    } catch {
      setErrorMsg('Network error. Please try again.')
      setStatus('error')
    }
  }

  if (status === 'success') {
    return (
      <div className="text-center py-12">
        <div className="w-16 h-16 rounded-full bg-emerald-100 flex items-center justify-center mx-auto mb-4">
          <svg className="w-8 h-8 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-xl font-bold text-zinc-900 mb-2">Message Received!</h3>
        <p className="text-zinc-500 text-sm">We&apos;ll get back to you as soon as possible. Thank you for reaching out.</p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <input type="text" name="_honeypot" style={{ display: 'none' }} tabIndex={-1} autoComplete="off" />

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="name" className="block text-sm font-semibold text-zinc-700 mb-2">
            Full Name <span className="text-rose-500">*</span>
          </label>
          <input
            type="text" id="name" name="name" required
            placeholder="Juan dela Cruz"
            className="w-full px-4 py-3 rounded-xl border border-zinc-200 text-sm focus:outline-none focus:ring-2 focus:ring-violet-500/40 focus:border-violet-500 transition-all"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-semibold text-zinc-700 mb-2">
            Email Address <span className="text-rose-500">*</span>
          </label>
          <input
            type="email" id="email" name="email" required
            placeholder="juan@example.com"
            className="w-full px-4 py-3 rounded-xl border border-zinc-200 text-sm focus:outline-none focus:ring-2 focus:ring-violet-500/40 focus:border-violet-500 transition-all"
          />
        </div>
      </div>

      <div>
        <label htmlFor="phone" className="block text-sm font-semibold text-zinc-700 mb-2">
          Phone Number <span className="text-zinc-400 font-normal">(optional)</span>
        </label>
        <input
          type="tel" id="phone" name="phone"
          placeholder="+63 9XX XXX XXXX"
          className="w-full px-4 py-3 rounded-xl border border-zinc-200 text-sm focus:outline-none focus:ring-2 focus:ring-violet-500/40 focus:border-violet-500 transition-all"
        />
      </div>

      <div>
        <label htmlFor="topic" className="block text-sm font-semibold text-zinc-700 mb-2">
          What can we help you with?
        </label>
        <select
          id="topic" name="topic"
          className="w-full px-4 py-3 rounded-xl border border-zinc-200 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-violet-500/40 focus:border-violet-500 transition-all"
        >
          <option value="">Select a topic...</option>
          <option value="hiv-testing">HIV Testing & Counseling</option>
          <option value="legal-support">Legal Assistance & Rights</option>
          <option value="mental-health">Mental Health Support</option>
          <option value="community-outreach">Community Outreach</option>
          <option value="events">Events & Programs</option>
          <option value="volunteer">Volunteering</option>
          <option value="partnership">Sponsorship / Partnership</option>
          <option value="general">General Inquiry</option>
        </select>
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-semibold text-zinc-700 mb-2">
          Your Message <span className="text-rose-500">*</span>
        </label>
        <textarea
          id="message" name="message" required rows={5}
          placeholder="How can SILBI help you? All messages are kept confidential."
          className="w-full px-4 py-3 rounded-xl border border-zinc-200 text-sm resize-none focus:outline-none focus:ring-2 focus:ring-violet-500/40 focus:border-violet-500 transition-all"
        />
      </div>

      <button
        type="submit"
        disabled={status === 'submitting'}
        className="w-full py-4 px-8 bg-gradient-to-r from-violet-600 to-pink-500 hover:from-violet-700 hover:to-pink-600 text-white font-semibold rounded-xl transition-all disabled:opacity-60 disabled:cursor-not-allowed shadow-md hover:shadow-lg"
      >
        {status === 'submitting' ? 'Sending...' : 'Send Message'}
      </button>

      {status === 'error' && (
        <p className="text-center text-sm text-rose-500">{errorMsg}</p>
      )}
    </form>
  )
}
