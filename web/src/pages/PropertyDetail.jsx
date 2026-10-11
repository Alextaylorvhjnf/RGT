import { useState, useEffect } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
import Gallery from '../components/Gallery.jsx'
import PropertyCard from '../components/PropertyCard.jsx'
import Reveal from '../components/Reveal.jsx'
import SectionHeading from '../components/SectionHeading.jsx'
import {
  IconPin, IconBed, IconBath, IconArea, IconHeart, IconHome, IconCalendar, IconArrowRight, IconPhone,
} from '../components/Icons.jsx'
import { getProperty, getSimilar } from '../data/properties.js'
import { team } from '../data/site.js'
import { useFavorites } from '../context/FavoritesContext.jsx'

function ViewingModal({ property, agent, onClose }) {
  const [sent, setSent] = useState(false)
  const [form, setForm] = useState({ name: '', email: '', date: '' })

  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && onClose()
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [onClose])

  return (
    <div className="modal-overlay" role="dialog" aria-modal="true" aria-label="Schedule a viewing" onClick={onClose}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <button type="button" className="modal-close" aria-label="Close" onClick={onClose}>✕</button>
        {sent ? (
          <div className="modal-success" role="status">
            <h3>Viewing requested</h3>
            <p>
              Thank you — {agent.name} will confirm a time to visit {property.name} shortly.
            </p>
            <button type="button" className="btn btn-navy" onClick={onClose}>
              Done
            </button>
          </div>
        ) : (
          <form
            onSubmit={(e) => {
              e.preventDefault()
              setSent(true)
            }}
          >
            <h3>Schedule a Viewing</h3>
            <p className="modal-sub">{property.name} — with {agent.name}</p>
            <label>
              Full name
              <input type="text" required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />
            </label>
            <label>
              Email
              <input type="email" required value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} />
            </label>
            <label>
              Preferred date
              <input type="date" required value={form.date} onChange={(e) => setForm({ ...form, date: e.target.value })} />
            </label>
            <button type="submit" className="btn btn-navy modal-submit">
              Request Viewing
            </button>
          </form>
        )}
      </div>
    </div>
  )
}

export default function PropertyDetail() {
  const { id } = useParams()
  const navigate = useNavigate()
  const property = getProperty(id)
  const { isFavorite, toggleFavorite } = useFavorites()
  const [viewing, setViewing] = useState(false)

  if (!property) {
    return (
      <div className="page">
        <div className="container empty-state">
          <h3>Property not found</h3>
          <button type="button" className="btn btn-navy" onClick={() => navigate('/properties')}>
            Back to Properties
          </button>
        </div>
      </div>
    )
  }

  const agent = team[0]
  const fav = isFavorite(property.id)
  const similar = getSimilar(property)

  return (
    <div className="page page-detail">
      <div className="container">
        <nav className="breadcrumb" aria-label="Breadcrumb">
          <Link to="/">
            <IconHome size={14} /> Home
          </Link>
          <span aria-hidden="true">/</span>
          <Link to="/properties">Properties</Link>
          <span aria-hidden="true">/</span>
          <span aria-current="page">{property.name}</span>
        </nav>

        <div className="detail-grid">
          <div className="detail-main">
            <Gallery images={property.images} name={property.name} />

            <div className="detail-head">
              <div>
                <h1>{property.name}</h1>
                <p className="detail-location">
                  <IconPin size={16} />
                  {property.location}, {property.country}
                </p>
              </div>
              <button
                type="button"
                className={`detail-fav ${fav ? 'is-active' : ''}`}
                aria-pressed={fav}
                aria-label={fav ? 'Remove from favorites' : 'Save to favorites'}
                onClick={() => toggleFavorite(property.id)}
              >
                <IconHeart filled={fav} size={20} />
              </button>
            </div>

            <div className="detail-specs">
              <div><IconBed size={17} /><span>{property.beds}</span><small>Bedrooms</small></div>
              <div><IconBath size={17} /><span>{property.baths}</span><small>Bathrooms</small></div>
              <div><IconArea size={17} /><span>{property.area.toLocaleString()}</span><small>Sq ft</small></div>
              <div><IconHome size={17} /><span>{property.type}</span><small>Type</small></div>
            </div>

            <section className="detail-section">
              <h2>About this property</h2>
              <p>{property.description}</p>
              <p>
                Completed in {property.year}, the residence has been maintained to an exceptional standard and is
                offered with a full architectural file and title history on request.
              </p>
            </section>

            <section className="detail-section">
              <h2>Key features</h2>
              <ul className="detail-features">
                {property.features.map((f) => (
                  <li key={f}>{f}</li>
                ))}
              </ul>
            </section>

            <section className="detail-section">
              <h2>Amenities</h2>
              <div className="amenity-tags">
                {property.amenities.map((a) => (
                  <span key={a}>{a}</span>
                ))}
              </div>
            </section>
          </div>

          <aside className="detail-side">
            <div className="detail-card">
              <span className="detail-price">{property.priceLabel}</span>
              <p className="detail-card-sub">Guide price · freehold</p>
              <div className="detail-ctas">
                <button type="button" className="btn btn-navy btn-block" onClick={() => setViewing(true)}>
                  <IconCalendar size={15} /> Schedule a Viewing
                </button>
                <Link to="/contact" className="btn btn-outline btn-block">
                  Contact Agent <IconArrowRight size={15} />
                </Link>
              </div>
              <div className="detail-agent">
                <img src={agent.image} alt={`Portrait of ${agent.name}`} loading="lazy" />
                <div>
                  <strong>{agent.name}</strong>
                  <span>{agent.role}</span>
                  <a href={`tel:${agent.phone.replace(/[^\d+]/g, '')}`}>
                    <IconPhone size={13} /> {agent.phone}
                  </a>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>

      {similar.length > 0 && (
        <section className="section similar">
          <div className="container">
            <SectionHeading label="Keep Exploring" title="Similar Properties" align="left" />
            <div className="property-grid">
              {similar.map((p) => (
                <PropertyCard key={p.id} property={p} />
              ))}
            </div>
          </div>
        </section>
      )}

      {viewing && <ViewingModal property={property} agent={agent} onClose={() => setViewing(false)} />}

      <div className="detail-mobile-cta">
        <span>{property.priceLabel}</span>
        <button type="button" className="btn btn-gold" onClick={() => setViewing(true)}>
          Schedule Viewing
        </button>
      </div>
    </div>
  )
}
