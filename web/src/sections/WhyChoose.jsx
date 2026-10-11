import Reveal from '../components/Reveal.jsx'
import { IconCheck } from '../components/Icons.jsx'
import { whyChoose, stats } from '../data/site.js'

export default function WhyChoose() {
  return (
    <section className="section why">
      <div className="container why-grid">
        <Reveal className="why-copy">
          <span className="section-label">Why Choose Horizon</span>
          <h2 className="section-title">
            A quieter, more
            <br />
            considered way
            <br />
            to buy property
          </h2>
          <p className="who-text">
            We believe premium real estate should feel calm and clear — advisors who listen, portfolios that are
            curated, and a process you can trust from first viewing to final signature.
          </p>
          <div className="why-stats">
            {stats.map((s) => (
              <div className="stat" key={s.label}>
                <span className="stat-value">{s.value}</span>
                <span className="stat-label">{s.label}</span>
              </div>
            ))}
          </div>
        </Reveal>

        <div className="why-list">
          {whyChoose.map((item, i) => (
            <Reveal className="why-item" key={item.title} delay={i * 70}>
              <span className="why-check">
                <IconCheck size={14} />
              </span>
              <div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
