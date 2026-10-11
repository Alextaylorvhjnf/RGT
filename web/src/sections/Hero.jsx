import { Link } from 'react-router-dom'
import { IconArrowRight } from '../components/Icons.jsx'

export default function Hero() {
  return (
    <section className="hero" aria-label="Introduction">
      <div className="hero-bg">
        <img
          src="https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=2000&q=80"
          alt="Modern luxury villa with glowing interiors and an infinity pool at blue hour"
          fetchpriority="high"
          decoding="async"
        />
        <div className="hero-overlay" aria-hidden="true"></div>
      </div>
      <div className="hero-content">
        <span className="hero-eyebrow">Horizon Properties</span>
        <h1 className="hero-title">
          Discover Exceptional
          <br />
          Homes &amp; Investments
        </h1>
        <p className="hero-sub">
          Premium properties in prime locations. Find your dream home or the perfect investment with confidence.
        </p>
        <div className="hero-actions">
          <Link to="/properties" className="btn btn-gold">
            Browse Properties <IconArrowRight size={15} />
          </Link>
          <Link to="/contact" className="btn btn-outline-light">
            Talk to an Advisor
          </Link>
        </div>
      </div>
      <div className="hero-fade" aria-hidden="true"></div>
    </section>
  )
}
