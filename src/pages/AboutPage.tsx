import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { FaFileDownload, FaHackerrank, FaBehance, FaCertificate } from 'react-icons/fa'
import { SiLeetcode } from 'react-icons/si'

/* ─── Data ─────────────────────────────────────────────────────────────── */

const platforms = [
  {
    name: 'HackerRank',
    description: 'Coding challenges & problem-solving',
    href: 'https://www.hackerrank.com/profile/raashid_arq',
    icon: <FaHackerrank className="text-3xl" />,
    color: '#2EC866',
    bg: 'hover:bg-[#2EC866]/8',
    border: 'hover:border-[#2EC866]/40',
  },
  {
    name: 'LeetCode',
    description: 'Algorithms & data structures journey',
    href: 'https://leetcode.com/u/Rvvshid04/',
    icon: <SiLeetcode className="text-3xl" />,
    color: '#FFA116',
    bg: 'hover:bg-[#FFA116]/8',
    border: 'hover:border-[#FFA116]/40',
  },
  {
    name: 'Behance',
    description: 'Design portfolio & creative work',
    href: 'https://www.behance.net/raashidarquil',
    icon: <FaBehance className="text-3xl" />,
    color: '#0057FF',
    bg: 'hover:bg-[#0057FF]/8',
    border: 'hover:border-[#0057FF]/40',
  },
]

const certifications = [
  {
    title: 'Postman API Fundamentals Student Expert',
    issuer: 'Postman',
    date: '2025',
    icon: <FaCertificate />,
    accent: '#e78d33ff',
    tag: 'API',
  },
  // {
  //   title: 'CS50x: Introduction to Computer Science',
  //   issuer: 'Harvard University (edX)',
  //   date: '2023',
  //   icon: <FaMedal />,
  //   accent: '#0ea5e9',
  //   tag: 'Fundamentals',
  // },
  // {
  //   title: 'Google UX Design Certificate',
  //   issuer: 'Google (Coursera)',
  //   date: '2024',
  //   icon: <FaAward />,
  //   accent: '#10b981',
  //   tag: 'Design',
  // },
  // {
  //   title: 'JavaScript Algorithms & Data Structures',
  //   issuer: 'freeCodeCamp',
  //   date: '2023',
  //   icon: <FaStar />,
  //   accent: '#f59e0b',
  //   tag: 'Engineering',
  // },
]

/* ─── Hooks ────────────────────────────────────────────────────────────── */

const useInView = (threshold = 0.15) => {
  const ref = useRef<HTMLElement | null>(null)
  const [visible, setVisible] = useState(false)
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); obs.disconnect() } },
      { threshold }
    )
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [threshold])
  return { ref, visible }
}

/* ─── Component ────────────────────────────────────────────────────────── */

const AboutPage = () => {
  const hero = useInView(0.1)
  const platforms_section = useInView(0.1)
  const certs_section = useInView(0.1)
  const [imgHovered, setImgHovered] = useState(false)

  useEffect(() => {
    document.title = "About | Raashid Arquil"
  }, [])

  return (
    <main className="bg-white font-sans min-h-screen pt-24 pb-24">

      {/* ── Hero: photo + bio ─────────────────────────────────────────── */}
      <section
        ref={hero.ref}
        id="about-hero"
        aria-labelledby="about-heading"
        className="w-full lg:w-[60%] mx-auto px-6 md:px-0 mb-24"
      >
        <div className={`mt-10 md:mt-18 mb-12 transition-all duration-700 ${hero.visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
          <h1 id="about-heading" className="text-4xl md:text-5xl font-extrabold text-text transition-all duration-700">
            About Me<span className="text-primary">.</span>
          </h1>
        </div>

        <div className="flex flex-col md:flex-row md:items-start items-center gap-14">

          {/* Photo — left */}
          <div
            className={`flex-shrink-0 transition-all duration-700 ${hero.visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            onMouseEnter={() => setImgHovered(true)}
            onMouseLeave={() => setImgHovered(false)}
          >
            <div
              className="relative w-64 h-64 md:w-72 md:h-72 rounded-2xl overflow-hidden border-2 border-primary/20 shadow-xl shadow-primary/10 transition-all duration-500"
              style={{
                transform: imgHovered
                  ? 'scale(1.035) translateY(-4px)'
                  : 'scale(1) translateY(0)',
                boxShadow: imgHovered
                  ? '0 24px 48px -8px rgba(79,70,229,0.22)'
                  : '0 8px 32px -4px rgba(79,70,229,0.10)',
              }}
            >
              <img
                src="/images/linkedin-pic.jpg"
                alt="Portrait of Raashid Arquil"
                className="w-full h-full object-cover"
              />
              {/* Subtle gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-primary/10 pointer-events-none" />
            </div>
          </div>

          {/* Bio — right */}
          <div
            className={`transition-all duration-700 delay-150 ${hero.visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
          >
            <div className="space-y-4 text-text-light text-[1.05rem] leading-relaxed">
              <p>
                I'm a software engineering graduate from <span className="text-text font-medium">Kingston University</span>, currently based in Sri Lanka. My work is primarily centered around web app development, with a current focus on JavaScript.
              </p>
              <p>
                Right now, I’m focused on personal growth — building direction, strengthening my fundamentals, and staying consistent in small, meaningful ways.
              </p>
              <p>
                Currently exploring new opportunities — if something interesting crosses your desk, feel free to{' '}
                <Link to="/contact" className="text-primary underline underline-offset-2 hover:text-primary/80 transition-colors">
                  reach out
                </Link>
                .
              </p>
            </div>

            <div
              className={`mt-8 transition-all duration-700 delay-300 ${hero.visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                }`}
            >
              <a
                href="/cv.pdf"
                download
                target="_blank"
                rel="noopener noreferrer"
                id="about-download-cv"
                aria-label="Download CV"
                className="inline-flex items-center gap-2 px-6 py-3 border-2 border-primary text-primary rounded-lg font-semibold hover:bg-primary hover:text-white transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-primary/20"
              >
                <FaFileDownload className="w-4 h-4" />
                Download CV
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── Platform links ────────────────────────────────────────────── */}
      <section
        ref={platforms_section.ref}
        id="about-platforms"
        aria-labelledby="platforms-heading"
        className="w-full lg:w-[60%] mx-auto px-6 md:px-0 mb-24"
      >
        <div
          className={`mb-10 transition-all duration-700 ${platforms_section.visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
        >
          <h2 id="platforms-heading" className="text-3xl font-extrabold text-text mb-2">
            Find me on<span className="text-primary">.</span>
          </h2>
          <p className="text-text-light">Where I practice, create, and share.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {platforms.map((p, i) => (
            <a
              key={p.name}
              href={p.href}
              target="_blank"
              rel="noopener noreferrer"
              id={`about-platform-${p.name.toLowerCase().replace(/\s/g, '-')}`}
              className={`group flex items-center gap-4 p-5 bg-background-light rounded-xl border border-primary/10 ${p.bg} ${p.border} transition-all duration-300 hover:-translate-y-1 hover:shadow-lg`}
              style={{
                transitionDelay: `${platforms_section.visible ? i * 80 : 0}ms`,
              }}
            >
              <span
                className="flex-shrink-0 w-12 h-12 rounded-lg flex items-center justify-center transition-colors duration-300"
                style={{ color: p.color, background: `${p.color}14` }}
              >
                {p.icon}
              </span>
              <div>
                <h3 className="font-semibold text-text text-base">{p.name}</h3>
                <p className="text-sm text-text-light leading-snug">{p.description}</p>
              </div>
              <span className="ml-auto text-text-light/40 group-hover:text-primary group-hover:translate-x-1 transition-all duration-200 text-lg">→</span>
            </a>
          ))}
        </div>
      </section>

      {/* ── Certifications & Awards ──────────────────────────────────── */}
      <section
        ref={certs_section.ref}
        id="about-certifications"
        aria-labelledby="certs-heading"
        className="w-full lg:w-[60%] mx-auto px-6 md:px-0"
      >
        <div
          className={`mb-10 transition-all duration-700 ${certs_section.visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
        >
          <h2 id="certs-heading" className="text-3xl font-extrabold text-text mb-2">
            Certifications &amp; Awards<span className="text-primary">.</span>
          </h2>
          <p className="text-text-light">A few things I've earned along the way.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {certifications.map((cert, i) => (
            <div
              key={cert.title}
              className={`group relative flex gap-4 p-6 bg-background-light rounded-xl border border-primary/10 hover:border-primary/25 hover:shadow-lg transition-all duration-500 hover:-translate-y-0.5 ${certs_section.visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
              style={{ transitionDelay: `${certs_section.visible ? 100 + i * 90 : 0}ms`, transitionDuration: '600ms' }}
            >
              {/* Accent strip */}
              <div
                className="absolute left-0 top-4 bottom-4 w-0.5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ background: cert.accent }}
              />

              {/* Icon */}
              <div
                className="flex-shrink-0 w-11 h-11 rounded-lg flex items-center justify-center text-lg"
                style={{ color: cert.accent, background: `${cert.accent}14` }}
              >
                {cert.icon}
              </div>

              {/* Text */}
              <div className="flex-1 min-w-0">
                <div className="flex items-start justify-between gap-2 mb-1">
                  <h3 className="font-semibold text-text text-base leading-snug">{cert.title}</h3>
                  <span
                    className="flex-shrink-0 text-xs font-semibold px-2.5 py-0.5 rounded-full border"
                    style={{ color: cert.accent, background: `${cert.accent}12`, borderColor: `${cert.accent}30` }}
                  >
                    {cert.tag}
                  </span>
                </div>
                <p className="text-sm text-text-light">{cert.issuer}</p>
                <p className="text-xs text-text-light/60 mt-1">{cert.date}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

    </main>
  )
}

export default AboutPage
