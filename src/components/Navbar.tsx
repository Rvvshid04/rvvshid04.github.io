import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { FaBars, FaTimes } from 'react-icons/fa'

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

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href === '/') {
      // For Home button, just close mobile menu if open
      setIsOpen(false)
      return
    }
    
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
          ? 'bg-white/90 backdrop-blur-md shadow-md py-3' 
          : 'bg-transparent py-4'
      }`}
      role="navigation" 
      aria-label="Main navigation"
    >
      <div className="max-w-5xl mx-auto px-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          {/* <Link 
            to="/" 
            className="text-xl font-bold text-gray-900 hover:text-indigo-500 transition-colors duration-300"
            aria-label="Go to home page"
          >
            Raashid<span className="text-indigo-500">.</span>
          </Link> */}

          <Link
            to="/"
            className="flex items-center hover:opacity-80 transition duration-300"
            aria-label="Go to home page"
          >
            <img src="/images/RA-Logo-1.svg" alt="Raashid logo" className="h-8 w-auto" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8" role="menubar" aria-label="Main menu">
            
            <Link
              to='/'
              className={`relative transition-colors duration-300 group ${
                location.pathname === "/"
                  ? "text-indigo-500"
                  : "text-gray-600 hover:text-indigo-500"
              }`}>
                Home
                <span className={`absolute -bottom-1 left-0 h-0.5 bg-indigo-500 transition-all duration-300 ${
                  location.pathname === "/"
                    ? "w-full"
                    : "w-0 group-hover:w-full"
                }`}  />
              </Link>

            <Link
              to='/work'
              className={`relative transition-colors duration-300 group ${
                location.pathname === "/work"
                  ? "text-indigo-500"
                  : "text-gray-600 hover:text-indigo-500"
              }`}>
                Work
                <span className={`absolute -bottom-1 left-0 h-0.5 bg-indigo-500 transition-all duration-300 ${
                  location.pathname === "/work"
                    ? "w-full"
                    : "w-0 group-hover:w-full"
                }`} />
              </Link>

            <Link
              to='/blog'
              className={`relative transition-colors duration-300 group ${
                location.pathname === "/blog"
                  ? "text-indigo-500"
                  : "text-gray-600 hover:text-indigo-500"
              }`}>
                Blog
                <span className={`absolute -bottom-1 left-0 h-0.5 bg-indigo-500 transition-all duration-300 ${
                  location.pathname === "/blog"
                    ? "w-full"
                    : "w-0 group-hover:w-full"
                }`} />
              </Link>

              <a
              href='/contact'
              className={`relative transition-colors duration-300 group ${
                location.pathname === "/contact"
                  ? "text-indigo-500"
                  : "text-gray-600 hover:text-indigo-500"
              }`}>
                Contact
                <span className={`absolute -bottom-1 left-0 h-0.5 bg-indigo-500 transition-all duration-300 ${
                  location.pathname === "/contact"
                    ? "w-full"
                    : "w-0 group-hover:w-full"
                }`}  />
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
                <Link
                  to='/'
                  className={`block px-3 py-2 text-gray-600 hover:text-indigo-500 hover:bg-gray-50 rounded-md transition-colors duration-300 ${
                    location.pathname === '/blog' ? 'text-indigo-500 bg-gray-50' : ''
                  }`}
                  onClick={(e) => handleNavClick(e, '/blog')}
                  role="menuitem"
                >
                  Home
                </Link>
                <Link
                  to='/work'
                  className={`block px-3 py-2 text-gray-600 hover:text-indigo-500 hover:bg-gray-50 rounded-md transition-colors duration-300 ${
                    location.pathname === '/work' ? 'text-indigo-500 bg-gray-50' : ''
                  }`}
                  onClick={(e) => handleNavClick(e, '/work')}
                  role="menuitem"
                >
                  Work
                </Link>
                <Link
                  to='/blog'
                  className={`block px-3 py-2 text-gray-600 hover:text-indigo-500 hover:bg-gray-50 rounded-md transition-colors duration-300 ${
                    location.pathname === '/blog' ? 'text-indigo-500 bg-gray-50' : ''
                  }`}
                  onClick={(e) => handleNavClick(e, '/blog')}
                  role="menuitem"
                >
                  Blog
                </Link>
                <a
                  href='/contact'
                  className={`block px-3 py-2 text-gray-600 hover:text-indigo-500 hover:bg-gray-50 rounded-md transition-colors duration-300 ${
                    location.pathname === '/contact' ? 'text-indigo-500 bg-gray-50' : ''
                  }`}
                  onClick={(e) => handleNavClick(e, '#contact')}
                  role="menuitem"
                >
                  Contact
                </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar 