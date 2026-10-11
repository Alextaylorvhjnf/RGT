import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { IconArrowRight } from '../components/Icons.jsx'

const VIDEO_SRC = '/media/hero-scrub.mp4'
const POSTER_SRC = '/media/hero-scrub-poster.jpg'
const FALLBACK_IMG =
  'https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=2000&q=80'

/**
 * Scroll-scrubbed cinematic hero.
 *
 * A single requestAnimationFrame loop reads scrollY each frame (no React state
 * on scroll), eases a target time toward `progress * duration`, and only writes
 * video.currentTime when the video is metadata-ready, seekable and not already
 * seeking — so seeks can never pile up and the last decoded frame is preserved.
 */
export default function Hero() {
  const wrapRef = useRef(null)
  const videoRef = useRef(null)
  const contentRef = useRef(null)
  const hintRef = useRef(null)
  const fadeRef = useRef(null)
  const [staticMode, setStaticMode] = useState(false)

  useEffect(() => {
    if (window.matchMedia?.('(prefers-reduced-motion: reduce)').matches) {
      setStaticMode(true)
      return
    }

    const wrap = wrapRef.current
    const video = videoRef.current
    if (!wrap || !video) return

    let raf = 0
    let duration = 0
    let ready = false
    let current = 0 // eased time, kept out of React entirely

    const onMeta = () => {
      duration = Number.isFinite(video.duration) ? video.duration : 0
      if (duration > 0) {
        ready = true
        video.currentTime = 0 // deterministic start on the first frame
      }
    }
    video.addEventListener('loadedmetadata', onMeta)
    if (video.readyState >= 1) onMeta()

    const tick = () => {
      raf = requestAnimationFrame(tick)
      if (!ready) return

      const range = wrap.offsetHeight - window.innerHeight
      const progress = range > 0 ? Math.min(1, Math.max(0, window.scrollY / range)) : 0
      const target = progress * duration

      // decorative layers — direct style writes, no re-render
      const fadeEl = fadeRef.current
      if (fadeEl) {
        fadeEl.style.opacity = Math.max(0, Math.min(1, (progress - 0.88) / 0.12)).toFixed(3)
      }
      const content = contentRef.current
      if (content) {
        const o = Math.max(0, 1 - progress * 2.6)
        content.style.opacity = o.toFixed(3)
        content.style.transform = `translateY(${(progress * -70).toFixed(1)}px)`
        content.style.pointerEvents = o > 0.4 ? 'auto' : 'none'
      }
      const hint = hintRef.current
      if (hint) hint.style.opacity = Math.max(0, 1 - progress * 6).toFixed(3)

      // video scrub — guard every seek so frames can never backlog
      if (video.seeking || video.readyState < 1) return
      if (!video.seekable.length || video.seekable.end(video.seekable.length - 1) <= 0) return
      current += (target - current) * 0.16 // ease toward the scroll target
      if (Math.abs(target - current) < 0.012) current = target // settle exactly
      const t = Math.min(Math.max(current, 0), video.seekable.end(video.seekable.length - 1))
      if (Math.abs(video.currentTime - t) > 0.02) video.currentTime = t
    }
    raf = requestAnimationFrame(tick)

    return () => {
      cancelAnimationFrame(raf)
      video.removeEventListener('loadedmetadata', onMeta)
    }
  }, [])

  const onVideoError = () => setStaticMode(true)

  return (
    <div className={`hero-scroll ${staticMode ? 'is-static' : ''}`} ref={wrapRef}>
      <div className="hero-sticky">
        {staticMode ? (
          <img className="hero-media" src={FALLBACK_IMG} alt="Modern luxury villa with pool at dusk" />
        ) : (
          <video
            ref={videoRef}
            className="hero-media"
            src={VIDEO_SRC}
            poster={POSTER_SRC}
            muted
            playsInline
            preload="auto"
            disablePictureInPicture
            onError={onVideoError}
            aria-hidden="true"
            tabIndex={-1}
          />
        )}
        <div className="hero-overlay" aria-hidden="true"></div>

        <div className="hero-content" ref={contentRef}>
          <span className="hero-eyebrow">Horizon Properties</span>
          <h1 className="hero-title">
            Discover Exceptional
            <br />
            Homes &amp; Investments
          </h1>
          <p className="hero-sub">
            Premium properties in prime locations. Find your dream home or the perfect investment with confidence.
          </p>
          <div className="hero-actions">
            <Link to="/properties" className="btn btn-gold">
              Browse Properties <IconArrowRight size={15} />
            </Link>
            <Link to="/contact" className="btn btn-outline-light">
              Talk to an Advisor
            </Link>
          </div>
        </div>

        <div className="hero-scroll-hint" ref={hintRef}>
          <span className="hero-hint-line" aria-hidden="true"></span>
          Scroll to explore
        </div>

        <div className="hero-fade" ref={fadeRef} aria-hidden="true"></div>
      </div>
    </div>
  )
}
