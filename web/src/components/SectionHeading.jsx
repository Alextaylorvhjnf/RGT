import Reveal from './Reveal.jsx'

export default function SectionHeading({ label, title, align = 'center', children }) {
  return (
    <Reveal className={`section-heading section-heading-${align}`}>
      <span className="section-label">{label}</span>
      <h2 className="section-title">{title}</h2>
      {children}
    </Reveal>
  )
}
