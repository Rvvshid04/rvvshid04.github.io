import { Link } from 'react-router-dom'
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'

const projects = [
  {
    title: 'Halcyon Theme',
    description: 'A minimal, dark blue theme for VS Code, Sublime Text, Atom, iTerm, and more. Available on Visual Studio Marketplace, Package Control, Atom Package Manager, and npm.',
    image: '/images/projects/halcyon.png',
    tags: ['VS Code', 'Sublime Text', 'Atom', 'iTerm2', 'Hyper'],
    github: 'https://github.com/Rvvshid04/halcyon-vscode',
    external: 'https://brittanychiang.com/halcyon-theme',
  },
  {
    title: 'Personal Website v4',
    description: 'My fourth iteration of my personal website. Built with Next.js, Tailwind CSS, and deployed on Vercel.',
    image: '/images/projects/personal-website-v4.png',
    tags: ['Next.js', 'Tailwind CSS', 'Vercel'],
    github: 'https://github.com/Rvvshid04/v4',
    external: 'https://brittanychiang.com',
  },
  {
    title: 'Task Management App',
    description: 'A full-stack task management application built with React, Node.js, and MongoDB. Features include user authentication, task creation, assignment, and real-time updates.',
    image: '/images/projects/task-management.png',
    tags: ['React', 'Node.js', 'MongoDB', 'Socket.io'],
    github: 'https://github.com/Rvvshid04/task-management',
    external: 'https://task-management-app.vercel.app',
  },
  {
    title: 'E-commerce Platform',
    description: 'A modern e-commerce platform built with Next.js, Stripe, and Sanity CMS. Features include product management, shopping cart, and secure payments.',
    image: '/images/projects/ecommerce.png',
    tags: ['Next.js', 'Stripe', 'Sanity CMS'],
    github: 'https://github.com/Rvvshid04/ecommerce',
    external: 'https://ecommerce-platform.vercel.app',
  }
]

const FeaturedProjects = () => {
  return (
    <section id="projects" className="py-20 bg-white font-sans">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-extrabold mb-2 text-gray-900">Featured Projects<span className="text-primary">.</span></h2>
        <p className="text-gray-600 text-lg mb-8">Here are some of my recent projects. Each project represents a unique challenge and learning opportunity.</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, i) => (
            <div key={i} className="bg-[#1e293b] rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="relative group">
                <img src={project.image} alt={project.title} className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105" />
                <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="flex gap-4">
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-white hover:text-primary transition-colors duration-300 transform hover:scale-110">
                      <FaGithub size={24} />
                    </a>
                    <a href={project.external} target="_blank" rel="noopener noreferrer" className="text-white hover:text-primary transition-colors duration-300 transform hover:scale-110">
                      <FaExternalLinkAlt size={24} />
                    </a>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-white group-hover:text-primary transition-colors duration-300">{project.title}</h3>
                <p className="text-gray-300 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, j) => (
                    <span key={j} className="text-sm text-gray-300 bg-[#334155] px-3 py-1 rounded-full hover:bg-[#475569] transition-colors duration-300">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center items-center mt-12">
          <Link
            to="/projects"
            className="bg-background-light px-6 py-4 rounded-lg flex items-center gap-3 text-lg text-text border border-primary/10 hover:bg-primary/10 transition-all"
          >
            View All Projects
            <FaExternalLinkAlt className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}

export default FeaturedProjects 