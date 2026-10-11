const img = (id, w = 1400) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=80`

export const properties = [
  {
    id: 'lakeside-modern-villa',
    name: 'Lakeside Modern Villa',
    location: 'Austin',
    country: 'Texas, USA',
    price: 2350000,
    priceLabel: '$2.35 Million',
    type: 'Villa',
    beds: 5,
    baths: 4,
    area: 5200,
    year: 2021,
    featured: true,
    images: [
      img('photo-1600585154340-be6161a56a0c', 1600),
      img('photo-1600607687939-ce8a6c25118c'),
      img('photo-1600607688066-890987f18a86'),
      img('photo-1600566753190-17f0baa2a6c3'),
    ],
    description:
      'Set on a private stretch of lakefront, this architect-designed villa pairs floor-to-ceiling glass with warm oak interiors. An open-plan living space flows onto a heated infinity pool and lakeside terrace, creating a rare balance of intimacy and outlook.',
    features: [
      'Private lakefront frontage with boat dock',
      'Floor-to-ceiling double-glazed glass walls',
      'Chef’s kitchen with integrated appliances',
      'Infinity pool with lake-view sun deck',
      'Whole-home smart automation',
      'Three-car gallery garage',
    ],
    amenities: ['Heated infinity pool', 'Home theater', 'Wine cellar', 'Gym & sauna', 'Outdoor kitchen', 'Smart home'],
  },
  {
    id: 'pacific-glass-house',
    name: 'Pacific Glass House',
    location: 'Malibu',
    country: 'California, USA',
    price: 4800000,
    priceLabel: '$4.8 Million',
    type: 'Villa',
    beds: 4,
    baths: 4,
    area: 4650,
    year: 2020,
    featured: true,
    images: [
      img('photo-1613490493576-7fde63acd811', 1600),
      img('photo-1600596542815-ffad4c1539a9', 1600),
      img('photo-1512917774080-9991f1c4c750', 1600),
      img('photo-1600585154084-4e5fe7c39198'),
    ],
    description:
      'A cantilevered glass residence suspended above the Pacific. Every principal room frames an unbroken ocean horizon, while a floating steel staircase and travertine terrace give the home a quiet, gallery-like calm.',
    features: [
      'Panoramic whitewater ocean views',
      'Cantilevered steel and glass structure',
      'Travertine infinity-edge pool',
      'Primary suite with private ocean terrace',
      'Designed landscaping by a local studio',
      'Solar array and battery storage',
    ],
    amenities: ['Ocean-view pool', 'Spa bathroom', 'Outdoor shower', 'Wine storage', 'Solar power', 'Beach access'],
  },
  {
    id: 'desert-horizon-estate',
    name: 'Desert Horizon Estate',
    location: 'Scottsdale',
    country: 'Arizona, USA',
    price: 3150000,
    priceLabel: '$3.15 Million',
    type: 'Estate',
    beds: 5,
    baths: 5,
    area: 6100,
    year: 2019,
    featured: true,
    images: [
      img('photo-1580587771525-78b9dba3b914', 1600),
      img('photo-1564013799919-ab600027ffc6', 1600),
      img('photo-1600047509807-ba8f99d2cdde'),
      img('photo-1583608205776-bfd35f0d9f83', 1600),
    ],
    description:
      'Carved into the Sonoran hillside, this estate frames desert sunsets through walls of glass. Raked overhangs shelter shaded courtyards, and a negative-edge pool dissolves into the mountain silhouette.',
    features: [
      'Gated 2-acre desert parcel',
      'Negative-edge pool with fire lounge',
      'Guest casita with private entry',
      'Desert-modern landscape design',
      'Clerestory windows for natural light',
      'Evaporative climate control',
    ],
    amenities: ['Resort pool', 'Casita', 'Fire lounge', 'Golf nearby', 'Gated community', 'Solar shading'],
  },
  {
    id: 'oceanfront-residence',
    name: 'Oceanfront Residence',
    location: 'Miami',
    country: 'Florida, USA',
    price: 5200000,
    priceLabel: '$5.2 Million',
    type: 'Penthouse',
    beds: 4,
    baths: 5,
    area: 4300,
    year: 2022,
    featured: true,
    images: [
      img('photo-1600566753086-00f18fb6b3ea', 1600),
      img('photo-1522708323590-d24dbb6b0267', 1600),
      img('photo-1560448204-e02f11c3d0e2', 1600),
      img('photo-1600585154526-990dced4db0d', 1600),
    ],
    description:
      'Perched on a private oceanfront line, this full-floor residence opens to 270-degree Atlantic views. A sculptural white interior, deep terraces and five-star building services define effortless coastal luxury.',
    features: [
      'Full-floor private lift entry',
      '270-degree Atlantic panoramas',
      'Wraparound 1,200 sq ft terrace',
      'Private beach club membership',
      'Concierge and valet services',
      'Storm-resistant glazing',
    ],
    amenities: ['Private beach', 'Concierge', 'Rooftop spa', 'Fitness center', 'Valet parking', 'Smart climate'],
  },
  {
    id: 'modern-hillside-retreat',
    name: 'Modern Hillside Retreat',
    location: 'Los Angeles',
    country: 'California, USA',
    price: 3750000,
    priceLabel: '$3.75 Million',
    type: 'House',
    beds: 4,
    baths: 3,
    area: 3900,
    year: 2018,
    featured: false,
    images: [
      img('photo-1568605114967-8130f3a36994', 1600),
      img('photo-1600573472592-401b489a3cdc', 1600),
      img('photo-1600210491892-03d54c0aaf87', 1600),
      img('photo-1600585152220-90363fe7e115', 1600),
    ],
    description:
      'A serene hillside retreat above the city, composed of cantilevered timber volumes and quiet concrete. Twilight views stretch from downtown to the ocean from a terrace wrapped in native planting.',
    features: [
      'Cantilevered timber-and-steel volumes',
      'City-to-ocean twilight views',
      'Cedar-lined sauna and plunge pool',
      'Native, low-water landscaping',
      'Detached studio / office pavilion',
      'Two-car carport with EV charging',
    ],
    amenities: ['Plunge pool', 'Sauna', 'Studio pavilion', 'EV charging', 'City views', 'Smart lighting'],
  },
  {
    id: 'palm-garden-residence',
    name: 'Palm Garden Residence',
    location: 'Beverly Hills',
    country: 'California, USA',
    price: 6400000,
    priceLabel: '$6.4 Million',
    type: 'Estate',
    beds: 6,
    baths: 7,
    area: 8400,
    year: 2023,
    featured: false,
    images: [
      img('photo-1600047509358-9dc75507daeb', 1600),
      img('photo-1600566752355-35792bedcfea', 1600),
      img('photo-1600566752229-250ed79470f8', 1600),
      img('photo-1600121848594-d8644e57abab', 1600),
    ],
    description:
      'A newly completed estate behind private gates, built around a century-old palm garden. Limestone, bronze and hand-troweled plaster give the interiors a warm, editorial elegance, with a resort-scale pool court at its heart.',
    features: [
      'Gated 1.4-acre palm garden',
      'Resort-scale pool and pool house',
      'Limestone and bronze interiors',
      'Screening room and lounge',
      'Staff quarters and guest wing',
      'Full-property automation',
    ],
    amenities: ['Pool house', 'Screening room', 'Guest wing', 'Wine room', 'Tennis court', 'Smart home'],
  },
  {
    id: 'contemporary-lake-house',
    name: 'Contemporary Lake House',
    location: 'Lake Tahoe',
    country: 'Nevada, USA',
    price: 2950000,
    priceLabel: '$2.95 Million',
    type: 'House',
    beds: 4,
    baths: 3,
    area: 3400,
    year: 2017,
    featured: false,
    images: [
      img('photo-1570129477492-45c003edd2be', 1600),
      img('photo-1600596542815-ffad4c1539a9', 1600),
      img('photo-1600585154526-990dced4db0d', 1600),
      img('photo-1522708323590-d24dbb6b0267', 1600),
    ],
    description:
      'A warm, contemporary take on the mountain lake house — blackened timber cladding, a double-height stone hearth and windows that frame pines and water in every season.',
    features: [
      'Blackened timber exterior cladding',
      'Double-height stone fireplace',
      'Lake and pine-line views',
      'Ski-in access in winter months',
      'Cedar hot tub on the deck',
      'Mudroom and gear storage',
    ],
    amenities: ['Hot tub', 'Ski access', 'Fireplace', 'Heated floors', 'Lake views', 'Gear room'],
  },
  {
    id: 'architectural-downtown-penthouse',
    name: 'Architectural Downtown Penthouse',
    location: 'Austin',
    country: 'Texas, USA',
    price: 1850000,
    priceLabel: '$1.85 Million',
    type: 'Penthouse',
    beds: 3,
    baths: 3,
    area: 2800,
    year: 2021,
    featured: false,
    images: [
      img('photo-1560448204-603b3fc33ddc', 1600),
      img('photo-1600607687644-c7171b42498f', 1600),
      img('photo-1560448204-e02f11c3d0e2', 1600),
      img('photo-1600607688969-a5bfcd646154', 1600),
    ],
    description:
      'A light-filled penthouse crowning an architecturally significant tower. White oak floors, a sculpted plaster stair and a 900 sq ft terrace overlooking Lady Bird Lake make it a rare urban hold.',
    features: [
      'Penthouse level with lake outlook',
      'Sculpted plaster staircase',
      'White oak and stone interiors',
      '900 sq ft private terrace',
      'Concierge-served boutique tower',
      'Two reserved parking spaces',
    ],
    amenities: ['Sky terrace', 'Concierge', 'Fitness center', 'Pool deck', 'EV parking', 'Storage unit'],
  },
]

export const locations = [...new Set(properties.map((p) => p.location))].sort()
export const propertyTypes = [...new Set(properties.map((p) => p.type))].sort()

export function getProperty(id) {
  return properties.find((p) => p.id === id)
}

export function getSimilar(property, limit = 3) {
  return properties
    .filter((p) => p.id !== property.id)
    .sort((a, b) => {
      const score = (x) => (x.type === property.type ? 0 : 1) + Math.abs(x.price - property.price) / 1e9
      return score(a) - score(b)
    })
    .slice(0, limit)
}
