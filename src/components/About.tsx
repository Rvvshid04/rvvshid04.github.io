import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { FaFileDownload } from 'react-icons/fa'

const About = () => {
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
      { threshold: 0.25 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section id="about" ref={sectionRef} className="py-20 bg-[#0f172a]">
      <div className="w-full lg:w-[60%] mx-auto px-6 md:px-0">
        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* Left side - About text */}
          <div className={`md:w-1/2 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
            <h2 className="text-3xl md:text-4xl font-extrabold mb-6 text-white">
              About Me<span className="text-indigo-500">.</span>
            </h2>
            <div className="space-y-4 text-gray-300">

              <p className="text-lg">
                I am a software engineering graduate from Kingston University, based in Sri Lanka.
                I am especially interested in React development, problem solving, and creating projects
                that balance thoughtful design with reliable functionality.
              </p>
            </div>
            <div
              className={`mt-8 flex flex-wrap items-center gap-6 transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                }`}
            >
              <a
                href="/cv.pdf"
                download
                target="_blank"
                aria-label="Download CV"
                className="inline-flex items-center gap-2 px-6 py-3 border-2 border-indigo-500 text-indigo-300 rounded-lg hover:bg-indigo-500 hover:text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-indigo-500/30"
              >
                <FaFileDownload className="w-4 h-4" />
                <span className="font-medium">Download CV</span>
              </a>

              {/* More about me link */}
              <Link
                to="/about"
                className="group inline-flex items-center gap-2 text-base font-medium text-indigo-400 hover:text-indigo-300 transition-colors duration-200"
                aria-label="Read more about Raashid"
              >
                More about me
                <span className="inline-block text-lg transition-transform duration-300 group-hover:translate-x-2">→</span>
              </Link>
            </div>
          </div>

          {/* Right side - Portrait image */}
          <div
            className={`md:w-1/2 flex justify-center relative transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0 rotate-0 scale-100' : 'opacity-0 translate-y-10 -rotate-6 scale-95'
              }`}
          >
            <div className="relative overflow-hidden rounded-full shadow-xl w-64 h-64 md:w-72 md:h-72 border-4 border-indigo-500/40 transition-all duration-500 hover:scale-[1.03] hover:-translate-y-2 hover:shadow-indigo-500/30">
              <div className="w-full h-full bg-gray-400 flex items-center justify-center">
                <img src="./images/linkedin-pic.jpg" alt="Portrait of Raashid" className="w-full h-full object-cover" />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a]/30 to-transparent" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About 