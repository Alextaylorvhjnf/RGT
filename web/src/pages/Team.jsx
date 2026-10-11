import TeamSection from '../sections/TeamSection.jsx'
import CTASection from '../sections/CTASection.jsx'

export default function Team() {
  return (
    <div className="page">
      <div className="page-hero">
        <div className="container">
          <span className="section-label">Our Team</span>
          <h1>Meet the Advisors</h1>
          <p>Four specialists, one standard — personal, precise and genuinely on your side of the table.</p>
        </div>
      </div>
      <TeamSection />
      <CTASection />
    </div>
  )
}
