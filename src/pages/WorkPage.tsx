import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'

interface Project {
  title: string
  description: string
  image: string
  builtWith: string[]
  github?: string
  live?: string
}

const projects: Project[] = [
  {
    title: 'Fundr',
    description: 'A crowdfunding platform that allows users to create and support campaigns seamlessly.',
    image: '/images/fundr.png',
    builtWith: ['ReactJS', 'Tailwind CSS', 'Node.js', 'Supabase'],
    github: '#',
    live: '#'
  },
  {
    title: 'Pizza Ordering System',
    description: 'A Java-based system demonstrating advanced OOP concepts and design patterns.',
    image: '/images/pizza.png',
    builtWith: ['Java'],
    github: '#',
    live: '#'
  },
  {
    title: 'SmartDrive',
    description: 'SmartDrive is a driving school management system meant to streamline the operations of the driving school and enhance the driving school experience for the student driver, instructor, and driving school staff (admin).',
    image: './images/SmartDrive-landingpage.png',
    builtWith: ['ReactJS', 'Tailwind CSS', 'PayPal Gateway', 'Node.js', 'Supabase', 'Git', 'GitHub', 'Axios'],
    github: 'https://github.com/Rvvshid04/smartdrive-frontend',
    live: 'https://rvvshid04.github.io/smartdrive-frontend/'
  },
  {
    title: 'Weather App Dashboard',
    description: 'Developed a full-stack weather app dashboard showing recent weather of cities around the world taken from OpenWeatherMap API. Also integrated Auth0 with Multi-factor Authentication. And implemented data caching.',
    image: './images/weather-app-dashboard.png',
    builtWith: ['Auth0', 'React Vite', 'TailwindCSS', 'ExpressJS'],
    github: 'https://github.com/Rvvshid04/weather-app-fe',
    live: 'https://rvvshid04.github.io/weather-app-fe/'
  },
  {
    title: 'Grifindo Payroll System',
    description: 'Created a C#-based payroll system to streamline employee data management. Designed features for data input, storage in MS SQL Server, and automated calculations to generate accurate payroll reports.',
    image: './images/Grifindo-salarydetails-UI.png',
    builtWith: ['C#', 'Visual Studio', 'MS SQL Server'],
    github: '#',
    live: '#'
  },
  {
    title: 'Photography Website',
    description: 'Developed a fully functional website for Malcolm Lismore\'s photography services as part of a course project. Integrated key features such as a gallery, dynamic service cards with pricing, and a contact form.',
    image: './images/malcom-gallery.png',
    builtWith: ['html5', 'css3', 'JavaScript', 'PHP', 'MySQL', 'Apache Server'],
    github: 'https://github.com/Rvvshid04/malcolm-lismore-photography-website',
    live: '#'
  }
]

const WorkPage = () => {
  const sectionRef = useRef<HTMLDivElement | null>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    document.title = "Work | Raashid Arquil"
  }, [])

  return (
    <>
      <div ref={sectionRef} className="min-h-screen bg-white">
        <div className="w-full lg:w-[60%] mx-auto px-6 md:px-0 pt-24 pb-16">

          {/* Header */}
          <div className={`mt-10 md:mt-18 mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
            <h1 className={`text-4xl md:text-5xl font-extrabold mb-6 text-gray-900 transition-all duration-700 delay-75 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
              Work<span className="text-indigo-500">.</span>
            </h1>
            <p className={`text-xl text-gray-600 max-w-3xl transition-all duration-700 delay-150 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
              I'm currently working on showing proof of work. Good stuff takes time. These are some of my older projects.
            </p>
            {/* Placeholder:A selection of projects I've built, each representing real problems solved and lessons learned. */}
          </div>

          {/* Projects List */}
          <div className="space-y-16">
            {projects.map((project, index) => (
              <div
                key={index}
                className={`flex flex-col md:flex-row gap-8 items-center transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                  }`}
                style={{ transitionDelay: `${index * 110}ms` }}
              >
                {/* Thumbnail */}
                <div className="w-full md:w-1/2">
                  {index < 2 ? (
                    <div className="rounded-xl shadow-md w-full aspect-[16/10] bg-gray-200 p-6 flex items-center justify-center">
                      <div className="w-full max-w-sm space-y-4">
                        <div className="h-6 w-2/3 bg-gray-300 rounded-md" />
                        <div className="h-4 w-full bg-gray-300 rounded-md" />
                        <div className="h-4 w-5/6 bg-gray-300 rounded-md" />
                        <div className="pt-3 flex gap-2">
                          <div className="h-8 w-20 bg-gray-300 rounded-full" />
                          <div className="h-8 w-24 bg-gray-300 rounded-full" />
                          <div className="h-8 w-16 bg-gray-300 rounded-full" />
                        </div>
                      </div>
                    </div>
                  ) : (
                    <img
                      src={project.image}
                      alt={project.title}
                      className="rounded-xl shadow-md w-full object-cover"
                    />
                  )}
                </div>

                {/* Content */}
                <div className="w-full md:w-1/2 space-y-4">

                  <h2 className="text-2xl font-bold text-gray-900">
                    {project.title}
                  </h2>

                  <p className="text-gray-600">
                    {project.description}
                  </p>

                  {/* Tech stack */}
                  <div className="flex flex-wrap gap-2">
                    {project.builtWith.map((tech, i) => (
                      <span
                        key={i}
                        className="px-2.5 py-0.5 text-xs rounded-full bg-indigo-100 text-indigo-800 transition-all duration-200 hover:-translate-y-0.5 hover:scale-105 hover:shadow-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Buttons */}
                  <div className="flex items-center gap-4 pt-2">

                    {/* View Project (internal route) */}
                    <Link
                      to={`/work/${project.title.toLowerCase().replace(/\s+/g, '-')}`}
                      className="px-4 py-2 bg-indigo-500 text-white rounded-lg hover:bg-indigo-600 transition"
                    >
                      View Project
                    </Link>

                    {/* External Links */}
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-600 hover:text-indigo-600"
                      >
                        <FaGithub size={20} />
                      </a>
                    )}

                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-600 hover:text-indigo-600"
                      >
                        <FaExternalLinkAlt size={18} />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </>
  );
};

export default WorkPage;