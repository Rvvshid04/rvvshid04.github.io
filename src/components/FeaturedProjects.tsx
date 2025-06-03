import { Link } from 'react-router-dom'
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'

const projects = [
  {
    title: 'Fundr',
    description: 'Developed a web-based application for crowdsourced fundraising during the final-year SDP module. Contributed to the development of donation processing module, PayPal integration, email authentication, setting up the database, CRUD operations, campaign creation, campaign card listing components, among others.',
    image: 'https://via.placeholder.com/600x300/94a3b8/ffffff?text=Fundr',
    tags: ['ReactJS', 'Tailwind CSS', 'Node.js', 'Supabase', 'Git', 'GitHub', 'Axios'],
    github: '#',
    external: '#',
  },
  {
    title: 'Pizza Ordering System',
    description: 'Developed as part of the "Programming III" coursework, this console-based GUI application allows users to order customizable pizzas. Implemented key design patterns, including Observer, Builder, and Decorator, to enhance code modularity and maintainability.',
    image: 'https://via.placeholder.com/600x300/94a3b8/ffffff?text=Pizza+Ordering+System',
    tags: ['Java', 'Design Patterns'],
    github: '#',
    external: '#',
  },
  {
    title: 'Grifindo Payroll System',
    description: 'Created a C#-based payroll system to streamline employee data management. Designed features for data input, storage in MS SQL Server, and automated calculations to generate accurate payroll reports.',
    image: 'https://via.placeholder.com/600x300/94a3b8/ffffff?text=Grifindo+Payroll+System',
    tags: ['C#', 'Visual Studio', 'MS SQL Server'],
    github: '#',
    external: '#',
  },
  {
    title: 'Photography Website',
    description: 'Developed a fully functional website for Malcolm Lismore\'s photography services as part of a course project. Integrated key features such as a gallery, dynamic service cards with pricing, and a contact form.',
    image: 'https://via.placeholder.com/600x300/94a3b8/ffffff?text=Photography+Website',
    tags: ['html5', 'css3', 'JavaScript', 'PHP', 'MySQL', 'Apache Server'],
    github: '#',
    external: '#',
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