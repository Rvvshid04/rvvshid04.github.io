import { useState } from 'react'
import { FaTrophy } from 'react-icons/fa'
import AchievementsModal from './AchievementsModal'

const About = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <section id="about" className="py-20 bg-[#0f172a]">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* Left side - About text */}
          <div className="md:w-1/2">
            <h2 className="text-3xl md:text-4xl font-extrabold mb-6 text-white">
              About Me<span className="text-indigo-500">.</span>
            </h2>
            <div className="space-y-4 text-gray-300">
             
              <p className="text-lg">
                I'm a software engineering undergraduate at Kingston University, based in Kandy, Sri Lanka. My expertise lies in full-stack development with React, Node.js, and Python, along with data analytics using Pandas and Power BI.
              </p>
              <p className="text-lg">
                With a Postgraduate Diploma in Marketing from CIM, I bring a unique blend of technical and strategic thinking. I'm currently expanding my skills in cloud technologies (AWS, Docker), advanced frontend frameworks (Vue.js, Redux), and backend technologies (Spring Boot, Django).
              </p>
              <p className="text-lg">
                I'm passionate about creating efficient, user-friendly solutions and am always eager to learn new technologies. Whether you're looking for a developer with marketing insights or want to collaborate on interesting projects, I'd love to connect!
              </p>
            </div>
            <div className="flex flex-wrap gap-4 mt-8">
              <button
                onClick={() => setIsModalOpen(true)}
                className="inline-flex items-center gap-2 px-6 py-3 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                aria-label="View achievements"
              >
                <FaTrophy className="w-5 h-5 animate-bounce" />
                <span>Achievements +</span>
              </button>
            </div>
          </div>

          {/* Right side - Portrait image */}
          <div className="md:w-1/2 relative group">
            <div className="relative overflow-hidden rounded-lg shadow-xl">
              <div className="w-full h-[500px] bg-gray-400 flex items-center justify-center">
                {/* Placeholder for portrait image */}
                <span className="text-gray-200 text-2xl">Portrait Placeholder</span>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
            <div className="absolute -bottom-4 -right-4 w-32 h-32 border-2 border-indigo-500 rounded-lg transform rotate-12 group-hover:rotate-0 transition-transform duration-500" />
          </div>
        </div>
      </div>
      <AchievementsModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </section>
  )
}

export default About 