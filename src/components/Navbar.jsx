export default function Navbar({ activePage, setActivePage, pages }) {
  const labels = {
    about: 'About',
    resume: 'Resume',
    projects: 'Projects',
    blog: 'Blog',
    contact: 'Contact',
  }

  return (
    <nav className="navbar">
      <ul className="navbar-list">
        {pages.map(page => (
          <li key={page} className="navbar-item">
            <button
              className={`navbar-link${activePage === page ? ' active' : ''}`}
              onClick={() => setActivePage(page)}
              data-nav-link
            >
              {labels[page]}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  )
}
