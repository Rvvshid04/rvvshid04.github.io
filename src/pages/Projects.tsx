import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'

interface Project {
  year: string
  title: string
  builtWith: string[]
  github?: string
  live?: string
}

const projects: Project[] = [
  {
    year: '2024',
    title: 'Fundr',
    builtWith: ['ReactJS', 'Tailwind CSS', 'Node.js (Express.js)', 'Supabase (PostgreSQL)', 'Git', 'GitHub', 'Axios'],
    github: '#',
    live: '#'
  },
  {
    year: '2024',
    title: 'Pizza Ordering System',
    builtWith: ['Java (Advanced concepts - Design Patterns)'],
    github: '#',
    live: '#'
  },
  {
    year: '2023',
    title: 'Grifindo Payroll System',
    builtWith: ['C#', 'Visual Studio', 'MS SQL Server'],
    github: '#',
    live: '#'
  },
  {
    year: '2023',
    title: 'Photography Website',
    builtWith: ['html5', 'css3', 'JavaScript', 'PHP', 'MySQL', 'Apache Server (WAMP stack)'],
    github: 'https://github.com/Rvvshid04/malcolm-lismore-photography-website',
    live: '#'
  },
  {
    year: '2022',
    title: 'eHab (Hackathon Winning Project)',
    builtWith: ['Figma', 'PowerPoint'],
    github: '#',
    live: '#'
  },
  {
    year: '2021',
    title: 'Computer Hardware Workshop',
    builtWith: ['PowerPoint', 'Word'],
    github: '#',
    live: '#'
  }
]

const Projects = () => {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 pt-24 pb-16">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6 text-gray-900">
            Projects<span className="text-primary">.</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A collection of my work and personal projects. Each project represents a unique challenge
            and learning opportunity, showcasing my skills in various technologies and frameworks.
          </p>
        </div>

        {/* Projects Table */}
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead>
              <tr>
                <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Year
                </th>
                <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Title
                </th>
                <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Built With
                </th>
                <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Link
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {projects.map((project, index) => (
                <tr key={index} className="hover:bg-gray-50 transition-colors duration-200">
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {project.year}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    {project.title}
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex flex-wrap gap-2">
                      {project.builtWith.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-indigo-100 text-indigo-800"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    <div className="flex items-center gap-3">
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-600 hover:text-indigo-600 transition-colors duration-200"
                        >
                          <FaGithub className="w-5 h-5" />
                        </a>
                      )}
                      {project.live && (
                        <a
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-600 hover:text-indigo-600 transition-colors duration-200"
                        >
                          <FaExternalLinkAlt className="w-5 h-5" />
                        </a>
                      )}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default Projects 