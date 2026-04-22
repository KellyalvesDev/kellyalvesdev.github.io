import { useEffect, useState } from 'react'
import './Nav.css'

function Nav() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToContato = () => {
    document.getElementById('contato').scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <nav className={`nav ${scrolled ? 'scrolled' : ''}`} id="nav">
      <div className="nav-inner">
        <span className="nav-logo">KP</span>
        <ul className="nav-links">
          <li><a href="#sobre">Sobre</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#projetos">Projetos</a></li>
          <li><a href="#contato">Contato</a></li>
        </ul>
        <button className="btn-cta" onClick={scrollToContato}>Fale comigo</button>
      </div>
    </nav>
  )
}

export default Nav
