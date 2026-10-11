import { useState } from 'react'
import { Link } from 'react-router-dom'
import { LogoMark, IconPhone, IconMail, IconPin, IconArrowRight } from './Icons.jsx'
import { office } from '../data/site.js'

const nav = [
  { to: '/', label: 'Home' },
  { to: '/properties', label: 'Properties' },
  { to: '/about', label: 'About Us' },
  { to: '/services', label: 'Services' },
  { to: '/team', label: 'Team' },
  { to: '/contact', label: 'Contact' },
]

const socials = [
  { label: 'Instagram', href: 'https://instagram.com', d: 'M12 7.8A4.2 4.2 0 1 0 12 16.2 4.2 4.2 0 0 0 12 7.8Zm0 6.9a2.7 2.7 0 1 1 0-5.4 2.7 2.7 0 0 1 0 5.4ZM17 5.9a1 1 0 1 0 0 2 1 1 0 0 0 0-2ZM12 3.9c-2.2 0-2.5 0-3.4 0-2.3.1-3.6 1.4-3.7 3.7-.1.9 0 1.2 0 3.4s0 2.5 0 3.4c.1 2.3 1.4 3.6 3.7 3.7.9.1 1.2 0 3.4 0s2.5 0 3.4 0c2.3-.1 3.6-1.4 3.7-3.7.1-.9 0-1.2 0-3.4s0-2.5 0-3.4c-.1-2.3-1.4-3.6-3.7-3.7-.9-.1-1.2 0-3.4 0Zm0 1.5c2.1 0 2.4 0 3.3.1 1.6 0 2.4.9 2.5 2.5 0 .8 0 1.1 0 3.2s0 2.4-.1 3.3c0 1.6-.9 2.4-2.5 2.5-.8 0-1.1 0-3.2 0s-2.4 0-3.3-.1c-1.6 0-2.4-.9-2.5-2.5 0-.8 0-1.1 0-3.2s0-2.4.1-3.3c0-1.6.9-2.4 2.5-2.5.8-.1 1.1-.1 3.2-.1Z' },
  { label: 'LinkedIn', href: 'https://linkedin.com', d: 'M6.9 8.6H4.2V20h2.7V8.6ZM5.5 4a1.7 1.7 0 1 0 0 3.4A1.7 1.7 0 0 0 5.5 4Zm7.6 6.4c-1.3 0-2.2.7-2.6 1.4V8.6H7.8V20h2.7v-5.9c0-1.5.7-2.4 1.9-2.4 1.2 0 1.7.8 1.7 2.4V20h2.7v-6.4c0-2.3-1.2-3.7-3.2-3.7Z' },
  { label: 'X', href: 'https://x.com', d: 'M17.8 4h2.7l-6 6.8L21.5 20h-5.5l-4.3-5.6L6.7 20H4l6.4-7.2L3.6 4h5.6l3.9 5.1L17.8 4Zm-1 14.4h1.5L8.5 5.5H6.9l9.9 12.9Z' },
]

export default function Footer() {
  const [subscribed, setSubscribed] = useState(false)
  const [email, setEmail] = useState('')

  const onSubscribe = (e) => {
    e.preventDefault()
    if (email.trim()) {
      setSubscribed(true)
      setEmail('')
    }
  }

  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <Link to="/" className="brand" aria-label="Horizon Properties — home">
              <LogoMark />
              <span className="brand-text">
                HORIZON <em>PROPERTIES</em>
              </span>
            </Link>
            <p>
              Connecting people with extraordinary homes and smart investments — premium properties in prime
              locations, presented with care.
            </p>
            <div className="footer-socials">
              {socials.map((s) => (
                <a key={s.label} href={s.href} target="_blank" rel="noreferrer" aria-label={s.label}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d={s.d} />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          <nav className="footer-col" aria-label="Footer">
            <h3>Explore</h3>
            <ul>
              {nav.map((l) => (
                <li key={l.to}>
                  <Link to={l.to}>{l.label}</Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="footer-col">
            <h3>Contact</h3>
            <ul className="footer-contact">
              <li>
                <IconPhone size={15} />
                <a href={`tel:${office.phone.replace(/[^\d+]/g, '')}`}>{office.phone}</a>
              </li>
              <li>
                <IconMail size={15} />
                <a href={`mailto:${office.email}`}>{office.email}</a>
              </li>
              <li>
                <IconPin size={15} />
                <span>{office.address}</span>
              </li>
            </ul>
          </div>

          <div className="footer-col footer-news">
            <h3>Newsletter</h3>
            <p>Monthly market insights and off-market listings, straight to your inbox.</p>
            {subscribed ? (
              <p className="footer-subscribed" role="status">Thank you — you’re on the list.</p>
            ) : (
              <form className="footer-form" onSubmit={onSubscribe}>
                <label htmlFor="newsletter-email" className="sr-only">Email address</label>
                <input
                  id="newsletter-email"
                  type="email"
                  required
                  placeholder="Your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <button type="submit" aria-label="Subscribe to newsletter">
                  <IconArrowRight size={16} />
                </button>
              </form>
            )}
          </div>
        </div>

        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} Horizon Properties. All rights reserved.</p>
          <p>Premium real estate, handled with care.</p>
        </div>
      </div>
    </footer>
  )
}
