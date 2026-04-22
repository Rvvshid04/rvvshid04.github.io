import { useEffect, useRef, useState } from 'react'

//import { FaLock } from 'react-icons/fa'


  //{ name: 'Django', url: '#', colors: { bg: 'bg-[#092e20]', text: 'text-white', border: 'border-white/20', hover: 'hover:bg-[#071a14]' }, isLocked: true },
  //{ name: 'Spring Boot', url: '#', colors: { bg: 'bg-[#6db33f]', text: 'text-white', border: 'border-white/20', hover: 'hover:bg-[#5a9e32]' }, isLocked: true },
  //{ name: '.NET', url: '#', colors: { bg: 'bg-[#512bd4]', text: 'text-white', border: 'border-white/20', hover: 'hover:bg-[#3e1a9a]' }, isLocked: true },
  //{ name: 'Vue.js', url: '#', colors: { bg: 'bg-[#41b883]', text: 'text-white', border: 'border-white/20', hover: 'hover:bg-[#34a06f]' }, isLocked: true },
  //{ name: 'Redux', url: '#', colors: { bg: 'bg-[#764abc]', text: 'text-white', border: 'border-white/20', hover: 'hover:bg-[#5e3a94]' }, isLocked: true },
  //{ name: 'Sass', url: '#', colors: { bg: 'bg-[#cc6699]', text: 'text-white', border: 'border-white/20', hover: 'hover:bg-[#b3597a]' }, isLocked: true },
    //{ name: 'MongoDB', url: '#', colors: { bg: 'bg-[#47a248]', text: 'text-white', border: 'border-white/20', hover: 'hover:bg-[#3d8b3d]' }, isLocked: true },
  //{ name: 'Redis', url: '#', colors: { bg: 'bg-[#dc382d]', text: 'text-white', border: 'border-white/20', hover: 'hover:bg-[#b32e25]' }, isLocked: true },
  //{ name: 'Firebase', url: '#', colors: { bg: 'bg-[#ffca28]', text: 'text-black', border: 'border-black/20', hover: 'hover:bg-[#e6b825]' }, isLocked: true },
 //{ name: 'Docker', url: '#', colors: { bg: 'bg-[#2496ed]', text: 'text-white', border: 'border-white/20', hover: 'hover:bg-[#1d7ed8]' }, isLocked: true },
  //{ name: 'AWS', url: '#', colors: { bg: 'bg-[#232f3e]', text: 'text-white', border: 'border-white/20', hover: 'hover:bg-[#1a2530]' }, isLocked: true },
  //{ name: 'Nginx', url: '#', colors: { bg: 'bg-[#009639]', text: 'text-white', border: 'border-white/20', hover: 'hover:bg-[#007a2e]' }, isLocked: true },
  //{ name: 'Linux', url: '#', colors: { bg: 'bg-[#fcc624]', text: 'text-black', border: 'border-black/20', hover: 'hover:bg-[#e6b320]' }, isLocked: true },
  //{ name: 'Jest', url: '#', colors: { bg: 'bg-[#c21325]', text: 'text-white', border: 'border-white/20', hover: 'hover:bg-[#a30f1f]' }, isLocked: true },
  
  interface Skill {
    name: string
    colors: {
      bg: string
      text: string
      border: string
      hover: string
    }
  }
  
  interface SkillCategory {
    title: string
    skills: Skill[]
  }


  const skillCategories: SkillCategory[] = [
    {
      title: "Languages",
      skills: [
        { name: "JavaScript", colors: { bg: "bg-[#f7df1e]", text: "text-black", border: "border-black/20", hover: "hover:bg-[#f7df1e] hover:ring-2 hover:ring-black/20" } },
        { name: "TypeScript", colors: { bg: "bg-[#3178c6]", text: "text-white", border: "border-white/20", hover: "hover:bg-[#2563eb]" } },
        { name: "Python", colors: { bg: "bg-[#3776ab]", text: "text-white", border: "border-white/20", hover: "hover:bg-[#2d5f8a]" } },
        { name: "Java", colors: { bg: "bg-[#007396]", text: "text-white", border: "border-white/20", hover: "hover:bg-[#005b7a]" } },
        { name: "PHP", colors: { bg: "bg-[#777bb4]", text: "text-white", border: "border-white/20", hover: "hover:bg-[#5f6290]" } },
        { name: "C#", colors: { bg: "bg-[#68217a]", text: "text-white", border: "border-white/20", hover: "hover:bg-[#4f1760]" } }
      ]
    },
  
    {
      title: "Frontend",
      skills: [
        { name: "HTML5", colors: { bg: "bg-[#e34f26]", text: "text-white", border: "border-white/20", hover: "hover:bg-[#d13e1f]" } },
        { name: "CSS3", colors: { bg: "bg-[#264de4]", text: "text-white", border: "border-white/20", hover: "hover:bg-[#1e3a8a]" } },
        { name: "React", colors: { bg: "bg-[#282c34]", text: "text-[#61dafb]", border: "border-[#61dafb]/20", hover: "hover:bg-[#61dafb]/10" } },
        { name: "Tailwind CSS", colors: { bg: "bg-[#0ea5e9]", text: "text-white", border: "border-white/20", hover: "hover:bg-[#0284c7]" } },
        { name: "Bootstrap", colors: { bg: "bg-[#7952b3]", text: "text-white", border: "border-white/20", hover: "hover:bg-[#6f42c1]" } }
      ]
    },
  
    {
      title: "Backend",
      skills: [
        { name: "Node.js", colors: { bg: "bg-[#339933]", text: "text-white", border: "border-white/20", hover: "hover:bg-[#2d862d]" } },
        { name: "Express.js", colors: { bg: "bg-[#000000]", text: "text-white", border: "border-white/20", hover: "hover:bg-white hover:text-black hover:border-black/20" } }
      ]
    },
  
    {
      title: "Databases",
      skills: [
        { name: "MySQL", colors: { bg: "bg-[#4479a1]", text: "text-white", border: "border-white/20", hover: "hover:bg-[#366a8a]" } },
        { name: "PostgreSQL", colors: { bg: "bg-[#336791]", text: "text-white", border: "border-white/20", hover: "hover:bg-[#2a5478]" } },
        { name: "Oracle DB", colors: { bg: "bg-[#f80000]", text: "text-white", border: "border-white/20", hover: "hover:bg-[#cc0000]" } },
        { name: "Supabase", colors: { bg: "bg-[#3ecf8e]", text: "text-white", border: "border-white/20", hover: "hover:bg-[#2eb77d]" } }
      ]
    },
  
    // {
    //   title: "Cloud & DevOps",
    //   skills: [
    //     {
    //       name: "Working on it 💪",
    //       colors: {
    //         bg: "bg-gray-700",
    //         text: "text-white",
    //         border: "border-white/20",
    //         hover: "hover:bg-gray-600"
    //       }
    //     }
    //   ]
    // },
  
    {
      title: "Tools & Services",
      skills: [
        { name: "Git", colors: { bg: "bg-[#f05032]", text: "text-white", border: "border-white/20", hover: "hover:bg-[#e03e2e]" } },
        { name: "GitHub",  colors: { bg: "bg-[#181717]", text: "text-white", border: "border-white/20", hover: "hover:bg-[#0d0c0c]" } },
        { name: "GitHub Actions", colors: { bg: "bg-[#2088ff]", text: "text-white", border: "border-white/20", hover: "hover:bg-[#1769aa]" } },
        { name: "VS Code", colors: { bg: "bg-[#007acc]", text: "text-white", border: "border-white/20", hover: "hover:bg-[#0066aa]" } },
        { name: "Postman", colors: { bg: "bg-[#ff6c37]", text: "text-white", border: "border-white/20", hover: "hover:bg-[#e65a2b]" } },
        { name: "Figma", colors: { bg: "bg-[#1e1e1e]", text: "text-white", border: "border-white/20", hover: "hover:bg-white hover:text-black hover:border-black/20" } },
        { name: "Notion", colors: { bg: "bg-black", text: "text-white", border: "border-white/20", hover: "hover:bg-gray-800" } },
        { name: "Render", colors: { bg: "bg-[#3c3c3c]", text: "text-white", border: "border-white/20", hover: "hover:bg-black" } },
        { name: "npm", colors: { bg: "bg-[#cb3837]", text: "text-white", border: "border-white/20", hover: "hover:bg-[#b32e2e]" } }
      ]
    },
  
    {
      title: "Data / Analytics",
      skills: [
        { name: "Pandas", colors: { bg: "bg-[#150458]", text: "text-white", border: "border-white/20", hover: "hover:bg-[#0f0340]" } },
        { name: "Matplotlib", colors: { bg: "bg-[#11557c]", text: "text-white", border: "border-white/20", hover: "hover:bg-[#0d4263]" } },
        { name: "Power BI", colors: { bg: "bg-[#f2c811]", text: "text-black", border: "border-black/20", hover: "hover:bg-[#d9b30f]" } }
      ]
    }
  ]

const Skills = () => {
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
      { threshold: 0.15 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section id="skills" ref={sectionRef} className="py-20 bg-[#0f172a] font-sans">
      <div className="w-full lg:w-[60%] mx-auto px-6 md:px-0">

        <h2 className={`text-3xl md:text-4xl font-extrabold mb-12 text-white transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
          Tech Stack<span className="text-primary">.</span>
        </h2>

        <div className="space-y-10">
          {skillCategories.map((category, i) => (
            <div
              key={i}
              className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <h3 className="text-xl font-semibold text-white mb-4">
                {category.title}
              </h3>

              <div className="flex flex-wrap gap-4">
                {category.skills.map((skill, j) => (
                  <a
                    key={j}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`group flex items-center gap-2 ${skill.colors.bg} ${skill.colors.text} px-4 py-2 rounded-lg border ${skill.colors.border} ${skill.colors.hover} transition-all duration-300 hover:scale-105 hover:shadow-lg`}
                  >
                    <span className="text-base font-medium">
                      {skill.name}
                    </span>
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default Skills 