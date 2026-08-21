import { useEffect, useCallback } from 'react'

export default function HighlightModal({ highlight, onClose }) {
  const handleKeyDown = useCallback(
    (e) => { if (e.key === 'Escape') onClose() },
    [onClose]
  )

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = ''
    }
  }, [handleKeyDown])

  return (
    <div
      className="highlight-modal-backdrop"
      onClick={(e) => { if (e.target === e.currentTarget) onClose() }}
      role="dialog"
      aria-modal="true"
      aria-labelledby="highlight-modal-title"
    >
      <div className="highlight-modal">
        <button
          className="highlight-modal-close"
          onClick={onClose}
          aria-label="Close modal"
        >
          <ion-icon name="close-outline"></ion-icon>
        </button>

        <div className="highlight-modal-header">
          <img
            src={highlight.avatar}
            alt={highlight.title}
            className="highlight-modal-avatar"
          />
          <div className="highlight-modal-meta">
            <h3 id="highlight-modal-title">{highlight.title}</h3>
            {highlight.date && <span>{highlight.date}</span>}
          </div>
        </div>

        <div className="highlight-modal-body">
          <p>{highlight.description}</p>

          {highlight.tags?.length > 0 && (
            <div className="highlight-modal-tags">
              {highlight.tags.map(tag => (
                <span key={tag} className="highlight-modal-tag">{tag}</span>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
