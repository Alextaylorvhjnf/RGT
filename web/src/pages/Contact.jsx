import { useState } from 'react'
import Reveal from '../components/Reveal.jsx'
import { IconPhone, IconMail, IconPin, IconArrowRight } from '../components/Icons.jsx'
import { office } from '../data/site.js'

export default function Contact() {
  const [sent, setSent] = useState(false)
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' })
  const set = (k) => (e) => setForm({ ...form, [k]: e.target.value })

  return (
    <div className="page">
      <div className="page-hero">
        <div className="container">
          <span className="section-label">Contact</span>
          <h1>Let’s Start the Conversation</h1>
          <p>Ask about a property, request a valuation or plan your search — we reply within one business day.</p>
        </div>
      </div>

      <section className="section contact-section">
        <div className="container contact-grid">
          <Reveal className="contact-card">
            <h2>Office</h2>
            <ul className="contact-list">
              <li>
                <span className="contact-ico"><IconPhone size={16} /></span>
                <div>
                  <strong>Phone</strong>
                  <a href={`tel:${office.phone.replace(/[^\d+]/g, '')}`}>{office.phone}</a>
                </div>
              </li>
              <li>
                <span className="contact-ico"><IconMail size={16} /></span>
                <div>
                  <strong>Email</strong>
                  <a href={`mailto:${office.email}`}>{office.email}</a>
                </div>
              </li>
              <li>
                <span className="contact-ico"><IconPin size={16} /></span>
                <div>
                  <strong>Office</strong>
                  <span>{office.address}</span>
                </div>
              </li>
              <li>
                <span className="contact-ico"><IconPin size={16} /></span>
                <div>
                  <strong>Hours</strong>
                  <span>{office.hours}</span>
                </div>
              </li>
            </ul>
            <p className="contact-note">
              Prefer to talk first? Call us during office hours and you’ll reach an advisor, not a call center.
            </p>
          </Reveal>

          <Reveal className="contact-form-wrap" delay={100}>
            {sent ? (
              <div className="form-success" role="status">
                <h3>Message sent</h3>
                <p>Thank you — one of our advisors will be in touch within one business day.</p>
              </div>
            ) : (
              <form
                className="contact-form"
                onSubmit={(e) => {
                  e.preventDefault()
                  setSent(true)
                }}
              >
                <h2>Send a Message</h2>
                <div className="form-row">
                  <label>
                    Full name
                    <input type="text" required value={form.name} onChange={set('name')} autoComplete="name" />
                  </label>
                  <label>
                    Email
                    <input type="email" required value={form.email} onChange={set('email')} autoComplete="email" />
                  </label>
                </div>
                <label>
                  Phone <span className="optional">(optional)</span>
                  <input type="tel" value={form.phone} onChange={set('phone')} autoComplete="tel" />
                </label>
                <label>
                  Message
                  <textarea
                    rows="5"
                    required
                    placeholder="Tell us what you’re looking for…"
                    value={form.message}
                    onChange={set('message')}
                  />
                </label>
                <button type="submit" className="btn btn-navy">
                  Send Message <IconArrowRight size={15} />
                </button>
              </form>
            )}
          </Reveal>
        </div>
      </section>
    </div>
  )
}
