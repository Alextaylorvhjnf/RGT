const img = (id, w = 900) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=80`

export const team = [
  {
    name: 'Daniel Morgan',
    role: 'Managing Director',
    image: img('photo-1560250097-0b93528c311a', 700),
    email: 'daniel@horizonproperties.com',
    phone: '(555) 246-7890',
  },
  {
    name: 'Olivia Carter',
    role: 'Luxury Property Advisor',
    image: img('photo-1573496359142-b8d87734a5a2', 700),
    email: 'olivia@horizonproperties.com',
    phone: '(555) 246-7891',
  },
  {
    name: 'James Wilson',
    role: 'Investment Consultant',
    image: img('photo-1507003211169-0a1dd7228f2d', 700),
    email: 'james@horizonproperties.com',
    phone: '(555) 246-7892',
  },
  {
    name: 'Sophia Bennett',
    role: 'Senior Property Specialist',
    image: img('photo-1438761681033-6461ffad8d80', 700),
    email: 'sophia@horizonproperties.com',
    phone: '(555) 246-7893',
  },
]

export const services = [
  {
    title: 'Luxury Home Sales',
    description:
      'Discreet, well-marketed sales for exceptional homes — from first valuation to final handover, handled with editorial-quality presentation.',
  },
  {
    title: 'Property Investment',
    description:
      'Data-led acquisition strategy for investors, identifying prime assets with durable yields and long-term capital growth.',
  },
  {
    title: 'Property Marketing',
    description:
      'Cinematic photography, film and staging that positions every property in its best light across premium channels.',
  },
  {
    title: 'Real Estate Advisory',
    description:
      'Independent advice on acquisitions, portfolios and market timing — grounded in decades of local intelligence.',
  },
  {
    title: 'Property Valuation',
    description:
      'Rigorous, transparent valuations for sales, financing and estate planning, backed by comparable market evidence.',
  },
  {
    title: 'Relocation Services',
    description:
      'End-to-end relocation support for executives and families, from neighbourhood shortlists to settling-in services.',
  },
]

export const whyChoose = [
  {
    title: 'Local expertise, global reach',
    description: 'Deep knowledge of every market we serve, connected to an international network of buyers and investors.',
  },
  {
    title: 'Curated, never generic',
    description: 'Every property in our portfolio is personally inspected and selected for design, location and long-term value.',
  },
  {
    title: 'Transparent by design',
    description: 'Clear guidance on pricing, process and timing — no pressure, no surprises, at every step of the transaction.',
  },
  {
    title: 'End-to-end service',
    description: 'From financing introductions to interior staging and legal coordination, one team manages the entire journey.',
  },
]

export const stats = [
  { value: '2,400+', label: 'Properties sold' },
  { value: '$1.8B', label: 'Total sales volume' },
  { value: '18', label: 'Years of experience' },
  { value: '98%', label: 'Client satisfaction' },
]

export const office = {
  phone: '(555) 246-7890',
  email: 'hello@horizonproperties.com',
  address: '1200 Congress Avenue, Suite 400, Austin, TX 78701',
  hours: 'Monday – Saturday, 9:00 – 18:00',
}
