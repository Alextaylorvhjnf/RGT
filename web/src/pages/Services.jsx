import Reveal from '../components/Reveal.jsx'
import CTASection from '../sections/CTASection.jsx'
import { services } from '../data/site.js'
import { IconArrowRight } from '../components/Icons.jsx'
import { Link } from 'react-router-dom'

export default function Services() {
  return (
    <div className="page">
      <div className="page-hero">
        <div className="container">
          <span className="section-label">Our Services</span>
          <h1>Expertise at Every Step</h1>
          <p>Six disciplines, one team — covering the full journey of buying, selling and investing in exceptional property.</p>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <div className="services-grid services-grid-2">
            {services.map((s, i) => (
              <Reveal className="service-item" key={s.title} delay={i * 60}>
                <span className="service-index">{String(i + 1).padStart(2, '0')}</span>
                <h3>{s.title}</h3>
                <p>{s.description}</p>
                <Link to="/contact" className="service-link" aria-label={`Enquire about ${s.title}`}>
                  <IconArrowUpRightMini />
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </div>
  )
}

function IconArrowUpRightMini() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
      <path d="M7 17 17 7M9 7h8v8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}
