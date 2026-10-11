import { Link } from 'react-router-dom'
import Reveal from '../components/Reveal.jsx'
import { IconKey, IconArrowRight } from '../components/Icons.jsx'

export default function CTASection() {
  return (
    <section className="section cta-section">
      <div className="container">
        <Reveal className="cta-band">
          <div className="cta-left">
            <span className="cta-icon" aria-hidden="true">
              <IconKey />
            </span>
            <div>
              <h2>Ready to Find Your Perfect Property?</h2>
              <p>Let our experts guide you to the right home or investment.</p>
            </div>
          </div>
          <Link to="/contact" className="btn btn-navy">
            Get in Touch <IconArrowRight size={15} />
          </Link>
        </Reveal>
      </div>
    </section>
  )
}
