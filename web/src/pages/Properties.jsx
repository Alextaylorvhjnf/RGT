import { useMemo, useState } from 'react'
import SectionHeading from '../components/SectionHeading.jsx'
import PropertyCard from '../components/PropertyCard.jsx'
import Reveal from '../components/Reveal.jsx'
import { properties, locations, propertyTypes } from '../data/properties.js'

const priceOptions = [
  { value: 0, label: 'No minimum' },
  { value: 2000000, label: '$2M+' },
  { value: 3000000, label: '$3M+' },
  { value: 4000000, label: '$4M+' },
  { value: 5000000, label: '$5M+' },
]
const maxPriceOptions = [
  { value: Infinity, label: 'No maximum' },
  { value: 3000000, label: 'Up to $3M' },
  { value: 4000000, label: 'Up to $4M' },
  { value: 5000000, label: 'Up to $5M' },
  { value: 7000000, label: 'Up to $7M' },
]

const sortOptions = [
  { value: 'featured', label: 'Featured first' },
  { value: 'price-asc', label: 'Price: low to high' },
  { value: 'price-desc', label: 'Price: high to low' },
  { value: 'area-desc', label: 'Largest first' },
]

const initial = {
  query: '',
  location: 'all',
  type: 'all',
  minPrice: 0,
  maxPrice: Infinity,
  beds: 0,
  baths: 0,
  sort: 'featured',
}

export default function Properties() {
  const [filters, setFilters] = useState(initial)

  const set = (key) => (e) =>
    setFilters((f) => ({ ...f, [key]: key === 'minPrice' || key === 'maxPrice' || key === 'beds' || key === 'baths' ? Number(e.target.value) : e.target.value }))

  const results = useMemo(() => {
    const q = filters.query.trim().toLowerCase()
    let list = properties.filter((p) => {
      if (q && !`${p.name} ${p.location} ${p.country} ${p.type}`.toLowerCase().includes(q)) return false
      if (filters.location !== 'all' && p.location !== filters.location) return false
      if (filters.type !== 'all' && p.type !== filters.type) return false
      if (p.price < filters.minPrice || p.price > filters.maxPrice) return false
      if (p.beds < filters.beds || p.baths < filters.baths) return false
      return true
    })
    switch (filters.sort) {
      case 'price-asc':
        list = [...list].sort((a, b) => a.price - b.price)
        break
      case 'price-desc':
        list = [...list].sort((a, b) => b.price - a.price)
        break
      case 'area-desc':
        list = [...list].sort((a, b) => b.area - a.area)
        break
      default:
        list = [...list].sort((a, b) => Number(b.featured) - Number(a.featured))
    }
    return list
  }, [filters])

  const isFiltered = JSON.stringify({ ...filters, sort: undefined }) !== JSON.stringify({ ...initial, sort: undefined })
  const clear = () => setFilters(initial)

  return (
    <div className="page page-properties">
      <div className="page-hero">
        <div className="container">
          <span className="section-label">Portfolio</span>
          <h1>Explore Properties</h1>
          <p>Browse our curated portfolio — refine by location, type, price and size to find your perfect match.</p>
        </div>
      </div>

      <div className="container">
        <form className="filter-bar" onSubmit={(e) => e.preventDefault()} aria-label="Property filters">
          <div className="filter-field filter-search">
            <label htmlFor="f-search">Search</label>
            <input id="f-search" type="search" placeholder="Name, city or type…" value={filters.query} onChange={set('query')} />
          </div>
          <div className="filter-field">
            <label htmlFor="f-location">Location</label>
            <select id="f-location" value={filters.location} onChange={set('location')}>
              <option value="all">All locations</option>
              {locations.map((l) => (
                <option key={l} value={l}>{l}</option>
              ))}
            </select>
          </div>
          <div className="filter-field">
            <label htmlFor="f-type">Property type</label>
            <select id="f-type" value={filters.type} onChange={set('type')}>
              <option value="all">All types</option>
              {propertyTypes.map((t) => (
                <option key={t} value={t}>{t}</option>
              ))}
            </select>
          </div>
          <div className="filter-field">
            <label htmlFor="f-min">Min price</label>
            <select id="f-min" value={filters.minPrice} onChange={set('minPrice')}>
              {priceOptions.map((o) => (
                <option key={o.label} value={o.value}>{o.label}</option>
              ))}
            </select>
          </div>
          <div className="filter-field">
            <label htmlFor="f-max">Max price</label>
            <select id="f-max" value={filters.maxPrice} onChange={set('maxPrice')}>
              {maxPriceOptions.map((o) => (
                <option key={o.label} value={o.value}>{o.label}</option>
              ))}
            </select>
          </div>
          <div className="filter-field">
            <label htmlFor="f-beds">Bedrooms</label>
            <select id="f-beds" value={filters.beds} onChange={set('beds')}>
              {[0, 3, 4, 5, 6].map((n) => (
                <option key={n} value={n}>{n === 0 ? 'Any' : `${n}+`}</option>
              ))}
            </select>
          </div>
          <div className="filter-field">
            <label htmlFor="f-baths">Bathrooms</label>
            <select id="f-baths" value={filters.baths} onChange={set('baths')}>
              {[0, 3, 4, 5].map((n) => (
                <option key={n} value={n}>{n === 0 ? 'Any' : `${n}+`}</option>
              ))}
            </select>
          </div>
          <div className="filter-field">
            <label htmlFor="f-sort">Sort by</label>
            <select id="f-sort" value={filters.sort} onChange={set('sort')}>
              {sortOptions.map((o) => (
                <option key={o.value} value={o.value}>{o.label}</option>
              ))}
            </select>
          </div>
        </form>

        <div className="results-row">
          <p className="results-count" role="status">
            {results.length} {results.length === 1 ? 'property' : 'properties'} found
          </p>
          {isFiltered && (
            <button type="button" className="link-btn" onClick={clear}>
              Clear filters
            </button>
          )}
        </div>

        {results.length > 0 ? (
          <div className="property-grid">
            {results.map((p, i) => (
              <Reveal key={p.id} delay={(i % 3) * 70}>
                <PropertyCard property={p} eager={i < 3} />
              </Reveal>
            ))}
          </div>
        ) : (
          <div className="empty-state">
            <h3>No properties match your filters</h3>
            <p>Try broadening your search — or tell us what you’re looking for and we’ll find it off-market.</p>
            <button type="button" className="btn btn-navy" onClick={clear}>
              Clear Filters
            </button>
          </div>
        )}
      </div>
    </div>
  )
}
