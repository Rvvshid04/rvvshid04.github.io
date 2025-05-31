import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { FaBars, FaTimes, FaFileDownload } from 'react-icons/fa'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/#about' },
    { name: 'Projects', href: '/#projects' },
    { name: 'Blog', href: '/blog' },
    { name: 'Skills', href: '/#skills' },
    { name: 'Contact', href: '/#contact' },
  ]

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith('/#')) {
      e.preventDefault()
      setIsOpen(false)
      const element = document.querySelector(href.substring(1))
      if (element) {
        const navHeight = 64
        const elementPosition = element.getBoundingClientRect().top
        const offsetPosition = elementPosition + window.pageYOffset - navHeight

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        })
      }
    }
  }

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/90 backdrop-blur-md shadow-md py-2' 
          : 'bg-transparent py-4'
      }`}
      role="navigation" 
      aria-label="Main navigation"
    >
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link 
            to="/" 
            className="text-xl font-bold text-gray-900 hover:text-indigo-500 transition-colors duration-300"
            aria-label="Go to home page"
          >
            Raashid<span className="text-indigo-500">.</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8" role="menubar" aria-label="Main menu">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className={`relative text-gray-600 hover:text-indigo-500 transition-colors duration-300 group ${
                  location.pathname === link.href ? 'text-indigo-500' : ''
                }`}
                onClick={(e) => handleNavClick(e, link.href)}
                role="menuitem"
                aria-label={`Go to ${link.name.toLowerCase()} section`}
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-indigo-500 transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
            <a
              href="/cv.pdf"
              download
              className="inline-flex items-center gap-2 px-4 py-2 border-2 border-indigo-500 text-indigo-500 rounded-lg hover:bg-indigo-500 hover:text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
              role="menuitem"
              aria-label="Download CV"
            >
              <FaFileDownload className="w-4 h-4" />
              <span>CV</span>
            </a>
          </div>

          {/* Mobile Navigation Button */}
          <button
            className="md:hidden text-gray-600 hover:text-indigo-500 transition-colors duration-300"
            onClick={() => setIsOpen(!isOpen)}
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
          >
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        {isOpen && (
          <div 
            id="mobile-menu"
            className="md:hidden"
            role="menu"
            aria-label="Mobile menu"
            aria-hidden={!isOpen}
          >
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white rounded-lg shadow-lg mt-2">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  className={`block px-3 py-2 text-gray-600 hover:text-indigo-500 hover:bg-gray-50 rounded-md transition-colors duration-300 ${
                    location.pathname === link.href ? 'text-indigo-500 bg-gray-50' : ''
                  }`}
                  onClick={(e) => handleNavClick(e, link.href)}
                  role="menuitem"
                  aria-label={`Go to ${link.name.toLowerCase()} section`}
                >
                  {link.name}
                </Link>
              ))}
              <a
                href="/cv.pdf"
                download
                className="flex items-center gap-2 px-3 py-2 border-2 border-indigo-500 text-indigo-500 hover:bg-indigo-500 hover:text-white rounded-md transition-colors duration-300"
                role="menuitem"
                aria-label="Download CV"
              >
                <FaFileDownload className="w-4 h-4" />
                <span>Download CV</span>
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar 