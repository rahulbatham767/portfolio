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
              <a
                href={proj.link}
                target={proj.isExternal ? '_blank' : '_self'}
                rel={proj.isExternal ? 'noopener noreferrer' : undefined}
              >
                <figure className="project-img">
                  <div className="project-item-icon-box">
                    <ion-icon name={proj.isExternal ? 'globe-outline' : 'eye-outline'}></ion-icon>
                  </div>
                  {proj.video ? (
                    <video
                      src={proj.video}
                      poster={proj.image}
                      autoPlay
                      loop
                      muted
                      playsInline
                      style={{ width: '100%', height: '200px', minHeight: '200px', maxHeight: '200px', objectFit: 'cover', borderRadius: '16px', display: 'block' }}
                    />
                  ) : (
                    <img src={proj.image} alt={proj.title} loading="lazy" />
                  )}
                </figure>
                <h3 className="project-title">{proj.title}</h3>
                <p className="project-category">{proj.tags}</p>
              </a>
            </li>
          ))}
        </ul>
      </section>
    </article>
  )
}
