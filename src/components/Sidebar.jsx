import { useState } from "react";
import { personalInfo } from "../constants";

export default function Sidebar() {
  const [expanded, setExpanded] = useState(false);
  const [copiedKey, setCopiedKey] = useState(null);

  const handleCopy = (text, key) => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(text);
      setCopiedKey(key);
      setTimeout(() => setCopiedKey(null), 2000);
    }
  };

  return (
    <aside className={`sidebar${expanded ? " active" : ""}`} data-sidebar>
      <div className="sidebar-info">
        <figure className="avatar-box">
          <img src={personalInfo.avatar} alt={personalInfo.name} width="80" />
        </figure>

        <div className="info-content">
          <h1 className="name" title={personalInfo.name}>
            {personalInfo.name}
          </h1>
          <p className="title">{personalInfo.title}</p>

          <div className="status-badge">
            <span className="status-dot"></span>
            <span className="status-text">{personalInfo.status}</span>
          </div>
        </div>

        <button
          className="info_more-btn"
          onClick={() => setExpanded((prev) => !prev)}
          aria-label="Toggle contacts"
        >
          <span>{expanded ? "Hide Contacts" : "Show Contacts"}</span>
          <ion-icon name={expanded ? "chevron-up" : "chevron-down"}></ion-icon>
        </button>
      </div>

      <div className="sidebar-info_more">
        <div className="separator"></div>

        <ul className="contacts-list">
          <li className="contact-item">
            <div className="icon-box">
              <ion-icon name="mail-outline"></ion-icon>
            </div>
            <div className="contact-info">
              <div className="contact-header-row">
                <p className="contact-title">Email</p>
                <button
                  type="button"
                  className="copy-btn"
                  onClick={() => handleCopy(personalInfo.email, 'email')}
                  title="Copy email address"
                  aria-label="Copy email"
                >
                  <ion-icon name={copiedKey === 'email' ? "checkmark-outline" : "copy-outline"}></ion-icon>
                  {copiedKey === 'email' && <span className="copy-tooltip">Copied!</span>}
                </button>
              </div>
              <a
                href={`mailto:${personalInfo.email}`}
                className="contact-link"
                title={personalInfo.email}
              >
                {personalInfo.email}
              </a>
            </div>
          </li>

          <li className="contact-item">
            <div className="icon-box">
              <ion-icon name="phone-portrait-outline"></ion-icon>
            </div>
            <div className="contact-info">
              <div className="contact-header-row">
                <p className="contact-title">Phone</p>
                <button
                  type="button"
                  className="copy-btn"
                  onClick={() => handleCopy(personalInfo.phone, 'phone')}
                  title="Copy phone number"
                  aria-label="Copy phone"
                >
                  <ion-icon name={copiedKey === 'phone' ? "checkmark-outline" : "copy-outline"}></ion-icon>
                  {copiedKey === 'phone' && <span className="copy-tooltip">Copied!</span>}
                </button>
              </div>
              <a
                href={`tel:${personalInfo.phone.replace(/\s/g, "")}`}
                className="contact-link"
              >
                {personalInfo.phone}
              </a>
            </div>
          </li>

          <li className="contact-item">
            <div className="icon-box">
              <ion-icon name="location-outline"></ion-icon>
            </div>
            <div className="contact-info">
              <p className="contact-title">Location</p>
              <address>{personalInfo.location}</address>
            </div>
          </li>

          <li className="contact-item">
            <div className="icon-box">
              <ion-icon name="globe-outline"></ion-icon>
            </div>
            <div className="contact-info">
              <p className="contact-title">Portfolio</p>
              <a
                href={personalInfo.portfolio}
                target="_blank"
                rel="noopener noreferrer"
                className="contact-link"
                title={personalInfo.portfolio}
              >
                {personalInfo.portfolio.replace(/^https?:\/\//, '').replace(/\/$/, '')}
              </a>
            </div>
          </li>
        </ul>

        <div className="separator"></div>

        <ul className="social-list">
          <li className="social-item">
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
              title="LinkedIn Profile"
              aria-label="LinkedIn"
            >
              <ion-icon name="logo-linkedin"></ion-icon>
            </a>
          </li>
          <li className="social-item">
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
              title="GitHub Profile"
              aria-label="GitHub"
            >
              <ion-icon name="logo-github"></ion-icon>
            </a>
          </li>
        </ul>
      </div>
    </aside>
  );
}
