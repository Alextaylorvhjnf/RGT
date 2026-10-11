import { useState, useEffect } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { LogoMark, IconPhone } from './Icons.jsx'

const links = [
  { to: '/', label: 'Home' },
  { to: '/properties', label: 'Properties' },
  { to: '/about', label: 'About Us' },
  { to: '/services', label: 'Services' },
  { to: '/team', label: 'Team' },
  { to: '/contact', label: 'Contact' },
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const { pathname } = useLocation()

  const isHome = pathname === '/'
  const solid = scrolled || !isHome

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMenuOpen(false)
  }, [pathname])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  return (
    <header className={`site-header ${solid ? 'is-solid' : 'is-transparent'}`}>
      <div className="header-inner">
        <Link to="/" className="brand" aria-label="Horizon Properties — home">
          <LogoMark />
          <span className="brand-text">
            HORIZON <em>PROPERTIES</em>
          </span>
        </Link>

        <nav className="main-nav" aria-label="Primary">
          {links.map((l) => (
            <NavLink key={l.to} to={l.to} end={l.to === '/'} className={({ isActive }) => (isActive ? 'nav-link is-active' : 'nav-link')}>
              {l.label}
            </NavLink>
          ))}
        </nav>

        <div className="header-actions">
          <a href="tel:+15552467890" className="btn btn-outline-light header-phone">
            <IconPhone size={15} />
            <span>(555) 246-7890</span>
          </a>
          <button
            type="button"
            className={`menu-toggle ${menuOpen ? 'is-open' : ''}`}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            onClick={() => setMenuOpen((o) => !o)}
          >
            <span></span>
            <span></span>
          </button>
        </div>
      </div>

      <div id="mobile-menu" className={`mobile-menu ${menuOpen ? 'is-open' : ''}`} aria-hidden={!menuOpen}>
        <nav aria-label="Mobile">
          {links.map((l, i) => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.to === '/'}
              className={({ isActive }) => (isActive ? 'mobile-link is-active' : 'mobile-link')}
              style={{ transitionDelay: menuOpen ? `${80 + i * 40}ms` : '0ms' }}
            >
              {l.label}
            </NavLink>
          ))}
        </nav>
        <a href="tel:+15552467890" className="btn btn-gold mobile-menu-call">
          <IconPhone size={15} />
          <span>(555) 246-7890</span>
        </a>
      </div>
    </header>
  )
}
