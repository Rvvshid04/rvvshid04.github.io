import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'

const Hero = () => {
  return (
    <section id="home" className="min-h-screen bg-white pt-20 flex items-center relative">
      {/* Subtle grid pattern */}
      <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(to_right,#4f46e51f_1px,transparent_1px),linear-gradient(to_bottom,#4f46e51f_1px,transparent_1px)] bg-[size:4rem_4rem]" />

      <div className="max-w-6xl mx-auto px-4 py-20 w-full relative z-10">
        <div className="flex flex-col items-center text-center">
          {/* Text content */}
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-6xl font-extrabold mb-6 text-gray-900">
              Hi, I'm <span className="text-indigo-500">Raashid Arquil</span>
            </h1>
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-gray-700">
              Full Stack Developer | Market Analyst
            </h2>
            
            {/* Social Links */}
            <div className="flex justify-center gap-6 mb-8">
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
            <div className="flex justify-center gap-4">
              <a
                href="#projects"
                className="px-6 py-3 bg-indigo-500 text-white rounded-lg hover:bg-indigo-600 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                View My Work
              </a>
              <a
                href="#contact"
                className="px-6 py-3 border-2 border-indigo-500 text-indigo-500 rounded-lg hover:bg-indigo-500 hover:text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                Contact Me
              </a>
            </div>
          </div>
        </div>
      </div>
  </section>
)
}

export default Hero 