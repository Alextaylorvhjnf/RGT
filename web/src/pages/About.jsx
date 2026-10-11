import Reveal from '../components/Reveal.jsx'
import SectionHeading from '../components/SectionHeading.jsx'
import { Link } from 'react-router-dom'
import { IconArrowRight } from '../components/Icons.jsx'
import { stats, whyChoose } from '../data/site.js'
import TeamSection from '../sections/TeamSection.jsx'
import CTASection from '../sections/CTASection.jsx'

const values = whyChoose

export default function About() {
  return (
    <div className="page">
      <div className="page-hero">
        <div className="container">
          <span className="section-label">About Us</span>
          <h1>A Considered Approach to Property</h1>
          <p>
            Horizon Properties is a boutique agency for architectural homes, investment assets and premium
            developments.
          </p>
        </div>
      </div>

      <section className="section">
        <div className="container about-story">
          <Reveal>
            <div className="who-main img-zoom tall">
              <img
                src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1400&q=80"
                alt="Architectural residence at dusk with warm interior lighting"
                loading="lazy"
                decoding="async"
              />
            </div>
          </Reveal>
          <Reveal className="about-story-copy" delay={120}>
            <span className="section-label">Our Story</span>
            <h2 className="section-title">Built on Trust, Guided by Design</h2>
            <p className="who-text">
              Founded in 2008, Horizon Properties grew from a simple conviction: exceptional property deserves
              exceptional presentation and honest advice. We represent a deliberately small portfolio, personally
              inspected by our team.
            </p>
            <p className="who-text">
              Today our advisors serve families, investors and developers across the country's most desirable
              markets — with the same care on every transaction, large or small.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section why">
        <div className="container">
          <SectionHeading label="Our Principles" title="What Sets Us Apart" />
          <div className="why-list why-list-2col">
            {values.map((item, i) => (
              <Reveal className="why-item" key={item.title} delay={i * 70}>
                <span className="why-check"><IconCheckless /></span>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section stats-band">
        <div className="container why-stats why-stats-4">
          {stats.map((s) => (
            <div className="stat" key={s.label}>
              <span className="stat-value">{s.value}</span>
              <span className="stat-label">{s.label}</span>
            </div>
          ))}
        </div>
      </section>

      <TeamSection />

      <section className="section cta-section">
        <div className="container">
          <Reveal className="cta-band">
            <div className="cta-left">
              <div>
                <h2>Considering a Move?</h2>
                <p>Start with a confidential conversation — no obligation, just clear guidance.</p>
              </div>
            </div>
            <Link to="/contact" className="btn btn-navy">
              Get in Touch <IconArrowRight size={15} />
            </Link>
          </Reveal>
        </div>
      </section>
    </div>
  )
}

function IconCheckless() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <path d="m5 12 5 5L20 7" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}
