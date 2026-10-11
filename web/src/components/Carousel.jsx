import { useRef, useState, useEffect, useCallback } from 'react'
import { IconChevronLeft, IconChevronRight } from './Icons.jsx'

export default function Carousel({ children, ariaLabel = 'Property carousel' }) {
  const viewportRef = useRef(null)
  const [dragging, setDragging] = useState(false)
  const drag = useRef({ startX: 0, startScroll: 0, moved: false })

  const updateArrows = useCallback(() => {
    const el = viewportRef.current
    if (!el) return
    const prev = el.querySelector('[data-dir="prev"]')
    const next = el.querySelector('[data-dir="next"]')
    if (prev) prev.disabled = el.scrollLeft <= 4
    if (next) next.disabled = el.scrollLeft >= el.scrollWidth - el.clientWidth - 4
  }, [])

  useEffect(() => {
    const el = viewportRef.current
    if (!el) return
    updateArrows()
    el.addEventListener('scroll', updateArrows, { passive: true })
    window.addEventListener('resize', updateArrows)
    return () => {
      el.removeEventListener('scroll', updateArrows)
      window.removeEventListener('resize', updateArrows)
    }
  }, [updateArrows, children])

  const scrollByCard = (dir) => {
    const el = viewportRef.current
    if (!el) return
    const card = el.querySelector('.carousel-item')
    const step = card ? card.getBoundingClientRect().width + 24 : el.clientWidth * 0.6
    el.scrollBy({ left: dir * step, behavior: 'smooth' })
  }

  const onPointerDown = (e) => {
    if (e.pointerType === 'touch') return
    const el = viewportRef.current
    drag.current = { startX: e.clientX, startScroll: el.scrollLeft, moved: false }
    setDragging(true)
  }
  const onPointerMove = (e) => {
    if (!dragging) return
    const el = viewportRef.current
    const dx = e.clientX - drag.current.startX
    if (Math.abs(dx) > 4) drag.current.moved = true
    el.scrollLeft = drag.current.startScroll - dx
  }
  const endDrag = () => setDragging(false)

  const onClickCapture = (e) => {
    if (drag.current.moved) {
      e.preventDefault()
      e.stopPropagation()
      drag.current.moved = false
    }
  }

  return (
    <div className="carousel">
      <button
        type="button"
        className="carousel-arrow carousel-prev"
        data-dir="prev"
        aria-label="Previous properties"
        onClick={() => scrollByCard(-1)}
      >
        <IconChevronLeft />
      </button>
      <div
        ref={viewportRef}
        className={`carousel-viewport ${dragging ? 'is-dragging' : ''}`}
        role="region"
        aria-label={ariaLabel}
        tabIndex={0}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={endDrag}
        onPointerLeave={endDrag}
        onClickCapture={onClickCapture}
      >
        {children}
      </div>
      <button
        type="button"
        className="carousel-arrow carousel-next"
        data-dir="next"
        aria-label="Next properties"
        onClick={() => scrollByCard(1)}
      >
        <IconChevronRight />
      </button>
    </div>
  )
}
