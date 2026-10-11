import { useState } from 'react'
import { Link } from 'react-router-dom'
import { IconPin, IconBed, IconBath, IconArea, IconHeart, IconExpand } from './Icons.jsx'
import { useFavorites } from '../context/FavoritesContext.jsx'

export default function PropertyCard({ property, eager = false }) {
  const { isFavorite, toggleFavorite } = useFavorites()
  const fav = isFavorite(property.id)

  return (
    <article className="pcard">
      <Link to={`/properties/${property.id}`} className="pcard-media" aria-label={`View ${property.name}`}>
        <img
          src={property.images[0]}
          alt={`${property.name} — ${property.location}, ${property.country}`}
          loading={eager ? 'eager' : 'lazy'}
          decoding="async"
        />
      </Link>
      <button
        type="button"
        className={`pcard-fav ${fav ? 'is-active' : ''}`}
        aria-label={fav ? `Remove ${property.name} from favorites` : `Save ${property.name} to favorites`}
        aria-pressed={fav}
        onClick={() => toggleFavorite(property.id)}
      >
        <IconHeart filled={fav} />
      </button>
      <span className="pcard-type">{property.type}</span>
      <div className="pcard-body">
        <div className="pcard-titles">
          <h3 className="pcard-name">
            <Link to={`/properties/${property.id}`}>{property.name}</Link>
          </h3>
          <p className="pcard-location">
            <IconPin size={14} />
            <span>
              {property.location}, {property.country}
            </span>
          </p>
        </div>
        <div className="pcard-meta">
          <span className="pcard-price">${(property.price / 1e6).toFixed(2)}M</span>
          <span className="pcard-specs">
            <span>
              <IconBed size={14} /> {property.beds}
            </span>
            <span>
              <IconBath size={14} /> {property.baths}
            </span>
            <span>
              <IconArea size={14} /> {property.area.toLocaleString()} ft²
            </span>
          </span>
        </div>
      </div>
    </article>
  )
}
