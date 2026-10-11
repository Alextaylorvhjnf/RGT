import { Link } from 'react-router-dom'
import Reveal from '../components/Reveal.jsx'
import SectionHeading from '../components/SectionHeading.jsx'
import { IconArrowUpRight } from '../components/Icons.jsx'
import { services } from '../data/site.js'

export default function ServicesSection() {
  return (
    <section className="section services" id="services">
      <div className="container">
        <SectionHeading label="Our Services" title="Expertise at Every Step" align="left">
          <p className="section-sub">
            Six disciplines, one team — covering the full journey of buying, selling and investing in exceptional
            property.
          </p>
        </SectionHeading>

        <div className="services-grid">
          {services.map((s, i) => (
            <Reveal className="service-item" key={s.title} delay={i * 60}>
              <span className="service-index">{String(i + 1).padStart(2, '0')}</span>
              <h3>{s.title}</h3>
              <p>{s.description}</p>
              <Link to="/services" className="service-link" aria-label={`Read more about ${s.title}`}>
                <IconArrowUpRight size={16} />
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
