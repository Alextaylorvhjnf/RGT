import { Link } from 'react-router-dom'
import SectionHeading from '../components/SectionHeading.jsx'
import Carousel from '../components/Carousel.jsx'
import PropertyCard from '../components/PropertyCard.jsx'
import { properties } from '../data/properties.js'

export default function FeaturedProperties() {
  const featured = properties.filter((p) => p.featured)

  return (
    <section className="section featured" id="properties">
      <div className="container">
        <SectionHeading label="Featured" title="Featured Properties">
          <p className="section-sub">A selection of the exceptional homes and investments currently in our portfolio.</p>
        </SectionHeading>
      </div>

      <div className="container featured-carousel">
        <Carousel ariaLabel="Featured properties">
          {featured.map((p, i) => (
            <div className="carousel-item" key={p.id}>
              <PropertyCard property={p} eager={i === 0} />
            </div>
          ))}
        </Carousel>
      </div>

      <div className="featured-more">
        <Link to="/properties" className="btn btn-outline">
          View All Properties
        </Link>
      </div>
    </section>
  )
}
