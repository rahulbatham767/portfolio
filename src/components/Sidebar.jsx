import { useState } from "react";
import { personalInfo } from "../constants";

export default function Sidebar() {
  const [expanded, setExpanded] = useState(false);

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
              <p className="contact-title">Email</p>
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
              <p className="contact-title">Phone</p>
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
              >
                ipodify.tech
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
              title="LinkedIn"
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
              title="GitHub"
            >
              <ion-icon name="logo-github"></ion-icon>
            </a>
          </li>
        </ul>
      </div>
    </aside>
  );
}
