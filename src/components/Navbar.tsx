import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { FaBars, FaTimes } from 'react-icons/fa'

const navLinks = [
  { label: 'Home',    to: '/' },
  { label: 'About',   to: '/about' },
  { label: 'Work',    to: '/work' },
  { label: 'Blog',    to: '/blog' },
  { label: 'Contact', to: '/contact' },
]

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const isActive = (to: string) =>
    to === '/' ? location.pathname === '/' : location.pathname.startsWith(to)

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/90 backdrop-blur-md shadow-md py-3'
          : 'bg-transparent pt-10 pb-4'
      }`}
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="w-full lg:w-[60%] mx-auto px-6 md:px-0">
        <div className="flex justify-between items-center">

          {/* Logo */}
          <Link
            to="/"
            className="flex items-center hover:opacity-80 transition duration-300"
            aria-label="Go to home page"
          >
            <img src="/images/RA-Logo-1.svg" alt="Raashid logo" className="h-8 w-auto" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8" role="menubar" aria-label="Main menu">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`relative transition-colors duration-300 group ${
                  isActive(link.to)
                    ? 'text-indigo-500'
                    : 'text-gray-600 hover:text-indigo-500'
                }`}
                role="menuitem"
              >
                {link.label}
                <span
                  className={`absolute -bottom-1 left-0 h-0.5 bg-indigo-500 transition-all duration-300 ${
                    isActive(link.to) ? 'w-full' : 'w-0 group-hover:w-full'
                  }`}
                />
              </Link>
            ))}
          </div>

          {/* Mobile toggle */}
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
                  key={link.to}
                  to={link.to}
                  className={`block px-3 py-2 rounded-md transition-colors duration-300 hover:bg-gray-50 hover:text-indigo-500 ${
                    isActive(link.to)
                      ? 'text-indigo-500 bg-gray-50'
                      : 'text-gray-600'
                  }`}
                  role="menuitem"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar