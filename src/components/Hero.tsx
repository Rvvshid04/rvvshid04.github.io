import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'

const Hero = () => {
  const sectionRef = useRef<HTMLElement | null>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.2 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section id="home" ref={sectionRef} className="min-h-screen bg-white pt-20 flex items-center relative">
      {/* Subtle grid pattern */}
      <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(to_right,#4f46e51f_1px,transparent_1px),linear-gradient(to_bottom,#4f46e51f_1px,transparent_1px)] bg-[size:4rem_4rem]" />

      <div className="w-full lg:w-[60%] mx-auto px-6 md:px-0 py-20 relative z-10">
        <div className="flex flex-col items-center text-center">
          {/* Text content */}
          <div className={`max-w-2xl transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <h1 className={`text-4xl md:text-6xl font-extrabold mb-6 text-gray-900 transition-all duration-700 delay-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
              <span className="text-indigo-500">Raashid Arquil</span>
            </h1>
            <h2 className={`text-2xl md:text-3xl font-bold mb-6 text-gray-700 transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
              Full Stack Developer
            </h2>
            
            {/* Social Links */}
            <div className={`flex justify-center gap-6 mb-8 transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
              <a
                href="https://github.com/Rvvshid04"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-indigo-500 transition-colors duration-300 transform hover:scale-110"
              >
                <FaGithub size={24} />
              </a>
              <a
                href="https://linkedin.com/in/raashid-arquil"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-indigo-500 transition-colors duration-300 transform hover:scale-110"
              >
                <FaLinkedin size={24} />
              </a>
              <a
                href="https://x.com/rvvshid_arq"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-indigo-500 transition-colors duration-300 transform hover:scale-110"
              >
                <FaTwitter size={24} />
              </a>
            </div>

            {/* CTA Buttons */}
            <div className={`flex justify-center gap-4 transition-all duration-700 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
              <Link
                to="/work"
                className="px-6 py-3 bg-indigo-500 text-white rounded-lg hover:bg-indigo-600 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                View My Work
              </Link>
              <Link
                to="/contact"
                className="px-6 py-3 border-2 border-indigo-500 text-indigo-500 rounded-lg hover:bg-indigo-500 hover:text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                Contact Me
              </Link>
            </div>
          </div>
        </div>
      </div>
  </section>
)
}

export default Hero 