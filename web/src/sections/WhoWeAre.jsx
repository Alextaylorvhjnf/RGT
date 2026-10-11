import { Link } from 'react-router-dom'
import Reveal from '../components/Reveal.jsx'
import { IconArrowRight } from '../components/Icons.jsx'

export default function WhoWeAre() {
  return (
    <section className="section who" id="about">
      <div className="container who-grid">
        <Reveal className="who-copy">
          <span className="section-label">About Us</span>
          <h2 className="section-title">Who We Are</h2>
          <p className="who-text">
            At Horizon Properties, we connect people with extraordinary homes and smart investments. Integrity,
            transparency, and client satisfaction are at the heart of everything we do.
          </p>
          <p className="who-text">
            From architectural estates to city penthouses, our advisors guide you through every step — with honest
            advice, careful valuation and a portfolio that is curated, never generic.
          </p>
          <Link to="/about" className="btn btn-navy">
            Learn More <IconArrowRight size={15} />
          </Link>
        </Reveal>

        <Reveal className="who-media" delay={120}>
          <div className="who-main img-zoom">
            <img
              src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80"
              alt="Luxury modern home with pool and glass facade"
              loading="lazy"
              decoding="async"
            />
          </div>
          <div className="who-side img-zoom">
            <img
              src="https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=700&q=80"
              alt="Evening view of a modern residence and pool"
              loading="lazy"
              decoding="async"
            />
          </div>
          <Link to="/properties" className="who-arrow" aria-label="Explore our properties">
            <IconArrowRight size={20} />
          </Link>
        </Reveal>
      </div>
    </section>
  )
}
