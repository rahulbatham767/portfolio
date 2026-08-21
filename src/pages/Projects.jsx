import { useState } from 'react'
import { projects, filterCategories } from '../constants'

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('all')
  const [selectOpen, setSelectOpen] = useState(false)

  const filtered = projects.filter(p =>
    activeFilter === 'all' || p.category === activeFilter
  )

  const handleFilter = (cat) => {
    setActiveFilter(cat.toLowerCase())
    setSelectOpen(false)
  }

  return (
    <article className="portfolio active" data-page="portfolio">
      <header>
        <h2 className="h2 article-title">Projects</h2>
      </header>

      <section className="projects">
        {/* Filter buttons — desktop */}
        <ul className="filter-list">
          {filterCategories.map(cat => (
            <li key={cat} className="filter-item">
              <button
                className={`${activeFilter === cat.toLowerCase() ? 'active' : ''}`}
                onClick={() => handleFilter(cat)}
                data-filter-btn
              >
                {cat}
              </button>
            </li>
          ))}
        </ul>

        {/* Select dropdown — mobile */}
        <div className="filter-select-box">
          <button
            className={`filter-select${selectOpen ? ' active' : ''}`}
            onClick={() => setSelectOpen(prev => !prev)}
          >
            <div className="select-value">
              {filterCategories.find(c => c.toLowerCase() === activeFilter) || 'All'}
            </div>
            <div className="select-icon">
              <ion-icon name="chevron-down"></ion-icon>
            </div>
          </button>

          <ul className="select-list">
            {filterCategories.map(cat => (
              <li key={cat} className="select-item">
                <button onClick={() => handleFilter(cat)}>{cat}</button>
              </li>
            ))}
          </ul>
        </div>

        {/* Project grid */}
        <ul className="project-list">
          {filtered.map(proj => (
            <li
              key={proj.id}
              className="project-item active"
              data-filter-item
              data-category={proj.category}
            >
              <div className="project-card-wrapper">
                <a
                  href={proj.link}
                  target={proj.isExternal ? '_blank' : '_self'}
                  rel={proj.isExternal ? 'noopener noreferrer' : undefined}
                  className="project-img-link"
                >
                  <figure className="project-img">
                    <div className="project-item-icon-box">
                      <ion-icon name={proj.isExternal ? 'open-outline' : 'eye-outline'}></ion-icon>
                    </div>
                    {proj.video ? (
                      <video
                        src={proj.video}
                        poster={proj.image}
                        autoPlay
                        loop
                        muted
                        playsInline
                        style={{ width: '100%', height: '210px', minHeight: '210px', maxHeight: '210px', objectFit: 'cover', borderRadius: '16px', display: 'block' }}
                      />
                    ) : (
                      <img src={proj.image} alt={proj.title} loading="lazy" style={{ width: '100%', height: '210px', objectFit: 'cover', borderRadius: '16px' }} />
                    )}
                  </figure>
                </a>

                <div className="project-card-content">
                  <div className="project-header-row">
                    <h3 className="project-title">
                      <a
                        href={proj.link}
                        target={proj.isExternal ? '_blank' : '_self'}
                        rel={proj.isExternal ? 'noopener noreferrer' : undefined}
                      >
                        {proj.title}
                      </a>
                    </h3>
                  </div>

                  {proj.summary && (
                    <p className="project-summary-text">{proj.summary}</p>
                  )}

                  <div className="project-tags-list">
                    {proj.tags.split(' · ').map((tag, idx) => (
                      <span key={idx} className="project-tag-pill">{tag}</span>
                    ))}
                  </div>

                  <div className="project-actions-row">
                    {proj.isExternal && (
                      <a
                        href={proj.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-action-btn primary"
                        title="Live Demo"
                      >
                        <ion-icon name="globe-outline"></ion-icon>
                        <span>Live Demo</span>
                      </a>
                    )}
                    {proj.github && (
                      <a
                        href={proj.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-action-btn secondary"
                        title="View Source on GitHub"
                      >
                        <ion-icon name="logo-github"></ion-icon>
                        <span>Source</span>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </section>
    </article>
  )
}
