import SectionHeading from '../components/SectionHeading.jsx'
import Reveal from '../components/Reveal.jsx'
import { IconMail } from '../components/Icons.jsx'
import { team } from '../data/site.js'

export default function TeamSection() {
  return (
    <section className="section team" id="team">
      <div className="container">
        <SectionHeading label="Our Team" title="Meet the Advisors">
          <p className="section-sub">Four specialists, one standard — personal, precise and genuinely on your side.</p>
        </SectionHeading>

        <div className="team-grid">
          {team.map((member, i) => (
            <Reveal className="team-card" key={member.name} delay={i * 70}>
              <div className="team-photo img-zoom">
                <img src={member.image} alt={`Portrait of ${member.name}`} loading="lazy" decoding="async" />
                <a className="team-mail" href={`mailto:${member.email}`} aria-label={`Email ${member.name}`}>
                  <IconMail size={16} />
                </a>
              </div>
              <h3>{member.name}</h3>
              <p>{member.role}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
