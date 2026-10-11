import { useState, useEffect, useCallback, useRef } from 'react'
import { IconChevronLeft, IconChevronRight, IconClose, IconExpand } from './Icons.jsx'

export default function Gallery({ images, name }) {
  const [index, setIndex] = useState(0)
  const [lightbox, setLightbox] = useState(false)
  const closeRef = useRef(null)

  const prev = useCallback(() => setIndex((i) => (i - 1 + images.length) % images.length), [images.length])
  const next = useCallback(() => setIndex((i) => (i + 1) % images.length), [images.length])

  useEffect(() => {
    setIndex(0)
  }, [images])

  useEffect(() => {
    if (!lightbox) return
    closeRef.current?.focus()
    const onKey = (e) => {
      if (e.key === 'Escape') setLightbox(false)
      if (e.key === 'ArrowLeft') prev()
      if (e.key === 'ArrowRight') next()
    }
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [lightbox, prev, next])

  return (
    <div className="gallery">
      <div className="gallery-main">
        <img key={index} src={images[index]} alt={`${name} — image ${index + 1} of ${images.length}`} decoding="async" />
        <button type="button" className="gallery-expand" aria-label="Open fullscreen viewer" onClick={() => setLightbox(true)}>
          <IconExpand /> Fullscreen
        </button>
      </div>
      <div className="gallery-thumbs" role="tablist" aria-label="Gallery thumbnails">
        {images.map((src, i) => (
          <button
            key={i}
            type="button"
            role="tab"
            aria-selected={i === index}
            aria-label={`Show image ${i + 1}`}
            className={`gallery-thumb ${i === index ? 'is-active' : ''}`}
            onClick={() => setIndex(i)}
          >
            <img src={src} alt="" loading="lazy" decoding="async" />
          </button>
        ))}
      </div>

      {lightbox && (
        <div className="lightbox" role="dialog" aria-modal="true" aria-label={`${name} fullscreen gallery`}>
          <button ref={closeRef} type="button" className="lightbox-close" aria-label="Close viewer" onClick={() => setLightbox(false)}>
            <IconClose />
          </button>
          <button type="button" className="lightbox-arrow lightbox-prev" aria-label="Previous image" onClick={prev}>
            <IconChevronLeft size={22} />
          </button>
          <figure className="lightbox-stage">
            <img key={index} src={images[index]} alt={`${name} — image ${index + 1}`} />
            <figcaption>
              {index + 1} / {images.length}
            </figcaption>
          </figure>
          <button type="button" className="lightbox-arrow lightbox-next" aria-label="Next image" onClick={next}>
            <IconChevronRight size={22} />
          </button>
        </div>
      )}
    </div>
  )
}
