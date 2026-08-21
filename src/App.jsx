import { useState } from 'react'
import Sidebar from './components/Sidebar'
import Navbar from './components/Navbar'
import About from './pages/About'
import Resume from './pages/Resume'
import Projects from './pages/Projects'
import Blog from './pages/Blog'
import Contact from './pages/Contact'

const PAGES = ['about', 'resume', 'projects', 'blog', 'contact']

export default function App() {
  const [activePage, setActivePage] = useState('about')

  const renderPage = () => {
    switch (activePage) {
      case 'about':   return <About />
      case 'resume':  return <Resume />
      case 'projects': return <Projects />
      case 'blog':    return <Blog />
      case 'contact': return <Contact />
      default:        return <About />
    }
  }

  return (
    <main>
      <Sidebar />
      <div className="main-content">
        <Navbar activePage={activePage} setActivePage={setActivePage} pages={PAGES} />
        {renderPage()}
      </div>
    </main>
  )
}
