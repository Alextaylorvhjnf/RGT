import Hero from '../sections/Hero.jsx'
import WhoWeAre from '../sections/WhoWeAre.jsx'
import FeaturedProperties from '../sections/FeaturedProperties.jsx'
import ServicesSection from '../sections/ServicesSection.jsx'
import WhyChoose from '../sections/WhyChoose.jsx'
import TeamSection from '../sections/TeamSection.jsx'
import CTASection from '../sections/CTASection.jsx'

export default function Home() {
  return (
    <>
      <Hero />
      <WhoWeAre />
      <FeaturedProperties />
      <ServicesSection />
      <WhyChoose />
      <TeamSection />
      <CTASection />
    </>
  )
}
