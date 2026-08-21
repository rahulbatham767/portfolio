import { useEffect, useRef } from 'react'
import { experience, education, certifications, skills, skillCategories } from '../constants'

function SkillBar({ label, percent }) {
  const fillRef = useRef()

  useEffect(() => {
    const el = fillRef.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.style.setProperty('--fill', `${percent}%`)
          el.classList.add('skill-progress-fill')
          obs.disconnect()
        }
      },
      { threshold: 0.3 }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [percent])

  return (
    <li className="skills-item">
      <div className="title-wrapper">
        <h5 className="h5">{label}</h5>
        <data value={percent}>{percent}%</data>
      </div>
      <div className="skill-progress-bg">
        <div
          ref={fillRef}
          className="skill-progress-fill"
          style={{ width: 0, height: '100%', background: 'var(--text-gradient-yellow)', borderRadius: 'inherit' }}
        />
      </div>
    </li>
  )
}

export default function Resume() {
  return (
    <article className="resume active" data-page="resume">
      <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '15px' }}>
        <h2 className="h2 article-title">Resume</h2>
      </header>

      <section className="about-text" style={{ marginBottom: 25 }}>
        <p>
          Full-stack developer &amp; blockchain engineer experienced in building Self-Sovereign Identity platforms, real-time web applications, biometric mobile modules, and REST APIs.
        </p>
      </section>

      {/* Experience */}
      <section className="timeline">
        <div className="title-wrapper">
          <div className="icon-box">
            <ion-icon name="briefcase-outline"></ion-icon>
          </div>
          <h3 className="h3">Experience</h3>
        </div>

        <ol className="timeline-list">
          {experience.map((exp, i) => (
            <li key={i} className="timeline-item">
              <h4 className="h4 timeline-item-title">{exp.role}</h4>
              <p style={{ color: 'var(--orange-yellow-crayola)', fontSize: 'var(--fs-7)', fontWeight: '500', marginBottom: 6 }}>
                {exp.company} {exp.location ? `· ${exp.location}` : ''}
              </p>
              <span className="timeline-period">{exp.period}</span>
              {exp.bullets && (
                <ul className="timeline-text">
                  {exp.bullets.map((b, j) => (
                    <li key={j} style={{ marginBottom: '6px' }}>{b}</li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ol>
      </section>

      {/* Education */}
      <section className="timeline">
        <div className="title-wrapper">
          <div className="icon-box">
            <ion-icon name="school-outline"></ion-icon>
          </div>
          <h3 className="h3">Education</h3>
        </div>

        <ol className="timeline-list">
          {education.map((edu, i) => (
            <li key={i} className="timeline-item">
              <h4 className="h4 timeline-item-title">{edu.degree}</h4>
              <p style={{ color: 'var(--orange-yellow-crayola)', fontSize: 'var(--fs-7)', fontWeight: '500', marginBottom: 6 }}>
                {edu.institution}
              </p>
              <span className="timeline-period">{edu.period}</span>
              <p className="timeline-text">{edu.detail}</p>
            </li>
          ))}
        </ol>
      </section>

      {/* Certifications */}
      <section className="timeline">
        <div className="title-wrapper">
          <div className="icon-box">
            <ion-icon name="ribbon-outline"></ion-icon>
          </div>
          <h3 className="h3">Certifications</h3>
        </div>

        <ol className="timeline-list">
          {certifications.map((cert, i) => (
            <li key={i} className="timeline-item">
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '8px' }}>
                <div>
                  <h4 className="h4 timeline-item-title">{cert.name}</h4>
                  <p style={{ color: 'var(--orange-yellow-crayola)', fontSize: 'var(--fs-7)', fontWeight: '500', marginBottom: 4 }}>
                    {cert.issuer}{cert.date ? ` · ${cert.date}` : ''}
                  </p>
                </div>
                {cert.verifyUrl && (
                  <a
                    href={cert.verifyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cert-verify-link"
                    title="Verify Certificate"
                  >
                    <span>Verify</span>
                    <ion-icon name="open-outline"></ion-icon>
                  </a>
                )}
              </div>
              <p className="timeline-text" style={{ fontSize: 'var(--fs-8)', color: 'var(--light-gray-70)', marginTop: 4 }}>
                Credential ID: <code style={{ color: 'var(--white-2)', background: 'var(--onyx)', padding: '2px 6px', borderRadius: '4px' }}>{cert.id}</code>
              </p>
            </li>
          ))}
        </ol>
      </section>

      {/* Skills Matrix */}
      <section className="skill">
        <h3 className="h3 skills-title">Technical Proficiency</h3>
        <ul className="skills-list content-card" style={{ marginBottom: '30px' }}>
          {skills.map((s, i) => (
            <SkillBar key={i} label={s.label} percent={s.percent} />
          ))}
        </ul>

        {skillCategories && (
          <div className="skill-categories-grid">
            {skillCategories.map((cat, i) => (
              <div key={i} className="skill-category-card">
                <div className="skill-category-header">
                  <div className="skill-cat-icon">
                    <ion-icon name={cat.icon}></ion-icon>
                  </div>
                  <h4 className="h4 skill-cat-title">{cat.title}</h4>
                </div>
                <div className="skill-badges-wrapper">
                  {cat.skills.map((s, j) => (
                    <span key={j} className="skill-badge">{s}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}
      </section>
    </article>
  )
}
