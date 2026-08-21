import { useState, useRef, useEffect } from 'react'
import { personalInfo, services, highlights } from '../constants'
import HighlightModal from '../components/HighlightModal'

function useReveal() {
  const ref = useRef()
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('visible')
          obs.disconnect()
        }
      },
      { threshold: 0.15 }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])
  return ref
}

function RevealSection({ children, className = '', as: Component = 'div', ...props }) {
  const ref = useReveal()
  return <Component ref={ref} className={`reveal ${className}`} {...props}>{children}</Component>
}

function useHorizontalWheelScroll() {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const onWheel = (e) => {
      if (e.deltaY !== 0) {
        e.preventDefault()
        el.scrollLeft += e.deltaY * 1.2
      }
    }

    el.addEventListener('wheel', onWheel, { passive: false })
    return () => el.removeEventListener('wheel', onWheel)
  }, [])

  return ref
}

export default function About() {
  const [selectedHighlight, setSelectedHighlight] = useState(null)
  const highlightsListRef = useHorizontalWheelScroll()

  const scrollByAmount = (amount) => {
    if (highlightsListRef.current) {
      highlightsListRef.current.scrollBy({ left: amount, behavior: 'smooth' })
    }
  }

  return (
    <article className="about active" data-page="about">
      <header>
        <h2 className="h2 article-title">About me</h2>
      </header>

      <section className="about-text">
        {personalInfo.about.map((para, i) => (
          <p key={i} dangerouslySetInnerHTML={{ __html: para }} />
        ))}
      </section>

      {/* Services */}
      <section className="service">
        <h3 className="h3 service-title">What I'm doing</h3>
        <ul className="service-list">
          {services.map((svc, i) => (
            <RevealSection as="li" key={i} className="service-item">
              <div className="service-icon-box">
                <img src={svc.icon} alt={svc.title} width="40" />
              </div>
              <div className="service-content-box">
                <h4 className="h4 service-item-title">{svc.title}</h4>
                <p className="service-item-text">{svc.description}</p>
              </div>
            </RevealSection>
          ))}
        </ul>
      </section>

      {/* Highlights & Key Experience */}
      <section className="testimonials">
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '20px' }}>
          <h3 className="h3 testimonials-title" style={{ marginBottom: 0 }}>
            Highlights &amp; Key Experience
          </h3>

          <div style={{ display: 'flex', gap: '8px' }}>
            <button
              onClick={() => scrollByAmount(-350)}
              style={{
                background: 'var(--onyx)',
                color: 'var(--orange-yellow-crayola)',
                width: '34px',
                height: '34px',
                borderRadius: '8px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                border: '1px solid var(--jet)',
                transition: 'background 0.2s, color 0.2s'
              }}
              title="Scroll left"
              aria-label="Scroll left"
            >
              <ion-icon name="chevron-back-outline"></ion-icon>
            </button>

            <button
              onClick={() => scrollByAmount(350)}
              style={{
                background: 'var(--onyx)',
                color: 'var(--orange-yellow-crayola)',
                width: '34px',
                height: '34px',
                borderRadius: '8px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                border: '1px solid var(--jet)',
                transition: 'background 0.2s, color 0.2s'
              }}
              title="Scroll right"
              aria-label="Scroll right"
            >
              <ion-icon name="chevron-forward-outline"></ion-icon>
            </button>
          </div>
        </div>

        <ul
          ref={highlightsListRef}
          className="testimonials-list has-scrollbar"
        >
          {highlights.map((h) => (
            <li key={h.id} className="testimonials-item">
              <div
                className="content-card"
                role="button"
                tabIndex={0}
                title="Click to view full details"
                onClick={() => setSelectedHighlight(h)}
                onKeyDown={(e) => e.key === 'Enter' && setSelectedHighlight(h)}
              >
                <figure className="testimonials-avatar-box">
                  <img src={h.avatar} alt={h.title} width="60" />
                </figure>
                <h4 className="h4 testimonials-item-title">{h.title}</h4>
                <div className="testimonials-text">
                  <p>{h.summary}</p>
                </div>
                {h.tags && (
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginTop: '12px' }}>
                    {h.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        style={{
                          fontSize: '11px',
                          padding: '2px 8px',
                          borderRadius: '12px',
                          background: 'var(--onyx)',
                          color: 'var(--orange-yellow-crayola)',
                          fontWeight: '500'
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                    {h.tags.length > 3 && (
                      <span
                        style={{
                          fontSize: '11px',
                          padding: '2px 6px',
                          borderRadius: '12px',
                          background: 'var(--onyx)',
                          color: 'var(--light-gray-70)'
                        }}
                      >
                        +{h.tags.length - 3}
                      </span>
                    )}
                  </div>
                )}
              </div>
            </li>
          ))}
        </ul>
      </section>

      {/* Highlight Modal */}
      {selectedHighlight && (
        <HighlightModal
          highlight={selectedHighlight}
          onClose={() => setSelectedHighlight(null)}
        />
      )}
    </article>
  )
}
