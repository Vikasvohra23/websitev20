import { useState, useEffect, useCallback } from 'react'
import { GALLERY_CATEGORIES } from '../data/constants'
import { GALLERY_IMAGES } from '../data/galleryData'
import { Reveal, SectionLabel } from './Shared'

/* ── Placeholder tile shown until real images are added ───── */
function PlaceholderTile({ caption, category }) {
  const icons = {
    president: '🏛️', epch: '🎨', maharaja: '🚂',
    office: '🏢', industrial: '⚙️', vacuum: '📦'
  }
  return (
    <div className="gallery-placeholder">
      <div className="gallery-placeholder__icon">{icons[category] || '📷'}</div>
      <span style={{ fontSize:'0.65rem', textAlign:'center', lineHeight:1.4, color:'var(--muted)', opacity:0.5 }}>
        {caption}
      </span>
      <span style={{ fontSize:'0.5rem', letterSpacing:'0.15em', textTransform:'uppercase', color:'var(--gold)', opacity:0.4, marginTop:4 }}>
        Add image in src/assets/gallery/{category}/
      </span>
    </div>
  )
}

/* ── Helper: Check if file is video ─────────────────────── */
function isVideoFile(src) {
  // Accept files that may include Vite/webpack query hashes (e.g. .MOV?v=123)
  return src && /\.(mp4|mov)(?:\?.*)?$/i.test(src)
}

/* ── Video Thumbnail with Preview ──────────────────────────
   Autoplays muted + looped inline as a "live" thumbnail, per
   iOS Safari / Android Chrome autoplay policy requirements:
   muted + playsInline + autoPlay must all be set, and preload
   kept light since these are off-screen until scrolled into view. ── */
function VideoThumbnail({ src, caption }) {
  const [failed, setFailed] = useState(false)

  if (failed) {
    return (
      <div className="gallery-placeholder">
        <div className="gallery-placeholder__icon">🎬</div>
        <span style={{ fontSize:'0.65rem', textAlign:'center', lineHeight:1.4, color:'var(--muted)', opacity:0.5 }}>
          {caption}
        </span>
        <span style={{ fontSize:'0.5rem', letterSpacing:'0.15em', textTransform:'uppercase', color:'var(--gold)', opacity:0.4, marginTop:4 }}>
          Video file missing — add to public/gallery/videos/
        </span>
      </div>
    )
  }

  return (
    <div style={{ position: 'relative', width: '100%', height: '100%' }}>
      <video
        src={src}
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        aria-label={caption}
        onError={() => setFailed(true)}
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          objectPosition: 'center',
          display: 'block'
        }}
      />
      <div style={{
        position: 'absolute',
        inset: 0,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'rgba(0,0,0,0.18)',
        fontSize: '2.5rem',
        pointerEvents: 'none',
      }}>
        ▶️
      </div>
    </div>
  )
}

/* ── Lightbox ─────────────────────────────────────────────── */
function Lightbox({ images, index, onClose, onPrev, onNext }) {
  const img = images[index]
  const isVideo = img?.src && /\.(mp4|mov)$/i.test(img.src)

  // Keyboard nav
  useEffect(() => {
    const handler = e => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowLeft')  onPrev()
      if (e.key === 'ArrowRight') onNext()
    }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [onClose, onPrev, onNext])

  if (!img?.src) return null

  return (
    <div className="overlay" onClick={onClose}>
      <div className="lightbox" onClick={e => e.stopPropagation()}>
        <button className="lightbox__close" onClick={onClose} aria-label="Close">✕</button>
        <button className="lightbox__nav lightbox__nav--prev" onClick={onPrev} aria-label="Previous">‹</button>
        {isVideo ? (
          <video src={img.src} controls muted playsInline preload="metadata" style={{ maxWidth: '100%', maxHeight: '80vh', objectFit: 'contain' }} />
        ) : (
          <img src={img.src} alt={img.caption} />
        )}
        <button className="lightbox__nav lightbox__nav--next" onClick={onNext} aria-label="Next">›</button>
        {img.caption && (
          <div className="lightbox__caption">{img.caption}</div>
        )}
      </div>
    </div>
  )
}

/* ── Gallery ──────────────────────────────────────────────── */
export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState('all')
  const [lightboxIndex,  setLightboxIndex]  = useState(null)

  const filtered = activeCategory === 'all'
    ? GALLERY_IMAGES
    : GALLERY_IMAGES.filter(img => img.category === activeCategory)

  // Only real images are navigable in lightbox
  const realImages = filtered.filter(img => img.src)

  const openLightbox = useCallback((img) => {
    if (!img.src) return
    const idx = realImages.findIndex(r => r.id === img.id)
    setLightboxIndex(idx)
  }, [realImages])

  const closeLightbox = useCallback(() => setLightboxIndex(null), [])
  const prevImage = useCallback(() => setLightboxIndex(i => (i - 1 + realImages.length) % realImages.length), [realImages.length])
  const nextImage = useCallback(() => setLightboxIndex(i => (i + 1) % realImages.length), [realImages.length])

  return (
    <section id="gallery" className="section sec-off">
      <Reveal><SectionLabel text="Our Work" /></Reveal>
      <Reveal delay={80}>
        <h2>Every project <em>tells a story.</em></h2>
      </Reveal>
      <Reveal delay={140}>
        <p style={{ marginTop:'0.8rem', maxWidth:520 }}>
          A glimpse of the work we've done — from presidential heritage to industrial precision,
          luxury trains to export packing.
        </p>
      </Reveal>

      {/* Category filters */}
      <Reveal delay={200}>
        <div className="gallery-filters">
          <button
            className={`filter-btn${activeCategory === 'all' ? ' active' : ''}`}
            onClick={() => setActiveCategory('all')}
          >
            All Work
          </button>
          {GALLERY_CATEGORIES.map(cat => (
            <button
              key={cat.id}
              className={`filter-btn${activeCategory === cat.id ? ' active' : ''}`}
              onClick={() => setActiveCategory(cat.id)}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </Reveal>

      {/* Active category description */}
      {activeCategory !== 'all' && (
        <Reveal>
          <div style={{ marginBottom:'1.5rem', padding:'0.8rem 1.2rem', borderLeft:'2px solid var(--gold)', background:'rgba(201,168,76,0.04)' }}>
            <div style={{ fontSize:'0.58rem', letterSpacing:'0.22em', textTransform:'uppercase', color:'var(--gold)', marginBottom:3 }}>
              {GALLERY_CATEGORIES.find(c => c.id === activeCategory)?.label}
            </div>
            <div style={{ fontSize:'0.8rem', color:'var(--muted)' }}>
              {GALLERY_CATEGORIES.find(c => c.id === activeCategory)?.desc}
            </div>
          </div>
        </Reveal>
      )}

      {/* Grid */}
      <div className="gallery-grid">
        {filtered.map((img, i) => (
          <Reveal key={img.id} delay={i * 30}>
            <div
              className="gallery-item"
              onClick={() => openLightbox(img)}
              role={img.src ? 'button' : 'presentation'}
              tabIndex={img.src ? 0 : -1}
              onKeyDown={e => e.key === 'Enter' && openLightbox(img)}
              aria-label={img.src ? `View: ${img.caption}` : undefined}
            >
              {img.src ? (
                <>
                  {isVideoFile(img.src) ? (
                    <VideoThumbnail src={img.src} caption={img.caption} />
                  ) : (
                    <img src={img.src} alt={img.caption} loading="lazy" />
                  )}
                  <div className="gallery-item__overlay">
                    <span className="gallery-item__caption">{img.caption}</span>
                  </div>
                </>
              ) : (
                <PlaceholderTile caption={img.caption} category={img.category} />
              )}
            </div>
          </Reveal>
        ))}
      </div>

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <Lightbox
          images={realImages}
          index={lightboxIndex}
          onClose={closeLightbox}
          onPrev={prevImage}
          onNext={nextImage}
        />
      )}
    </section>
  )
}
