import { useState } from 'react'
import { FaGraduationCap, FaTimes, FaEye } from 'react-icons/fa'

interface QualificationsModalProps {
  isOpen: boolean
  onClose: () => void
}

const qualifications = [
  // Academic Qualifications
  {
    title: "BSc (Hons) Software Engineering",
    institution: "Kingston University",
    date: "2021 - Present",
    description: "Currently pursuing a degree in Software Engineering with a focus on modern development practices and emerging technologies. Key modules include Advanced Programming, Software Architecture, Cloud Computing, and Data Structures & Algorithms.",
    location: "London, UK",
    type: "academic",
    gpa: "3.8/4.0",
    achievements: [
      "Dean's List for Academic Excellence (2022, 2023)",
      "Best Final Year Project Award",
      "Student Representative for Software Engineering Department"
    ]
  },
  {
    title: "Postgraduate Diploma in Marketing",
    institution: "Chartered Institute of Marketing (CIM)",
    date: "2020 - 2021",
    description: "Completed advanced marketing studies covering strategic marketing, digital marketing, and marketing analytics. Specialized in digital transformation and data-driven marketing strategies.",
    location: "Online",
    type: "academic",
    gpa: "Distinction",
    achievements: [
      "Top 5% in Digital Marketing Strategy",
      "Published research paper on AI in Marketing",
      "Led marketing campaign for university tech startup"
    ]
  },
  {
    title: "Advanced Diploma in Computer Science",
    institution: "Sri Lanka Institute of Information Technology",
    date: "2018 - 2020",
    description: "Comprehensive study of computer science fundamentals including programming, databases, networking, and software development methodologies.",
    location: "Colombo, Sri Lanka",
    type: "academic",
    gpa: "3.9/4.0",
    achievements: [
      "Best Student Award",
      "Led development of college management system",
      "Organized tech workshops for junior students"
    ]
  },

  // Professional Certificates
  {
    title: "AWS Certified Solutions Architect - Professional",
    institution: "Amazon Web Services",
    date: "2023",
    description: "Advanced certification demonstrating expertise in designing distributed systems on AWS. Covers advanced architectural patterns, security, and cost optimization.",
    location: "Online",
    type: "certificate",
    verification: "https://aws.amazon.com/verification",
    skills: [
      "Cloud Architecture",
      "Security & Compliance",
      "High Availability Design",
      "Cost Optimization"
    ],
    certificateImage: "https://images.unsplash.com/photo-1606159068539-43f36b99d1b5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
  },
  {
    title: "Professional Scrum Master I (PSM I)",
    institution: "Scrum.org",
    date: "2023",
    description: "Certification validating knowledge of Scrum framework and ability to facilitate Scrum teams. Focuses on servant leadership, facilitation, and coaching.",
    location: "Online",
    type: "certificate",
    verification: "https://scrum.org/verify",
    skills: [
      "Agile Methodologies",
      "Team Facilitation",
      "Sprint Planning",
      "Scrum Ceremonies"
    ],
    certificateImage: "https://images.unsplash.com/photo-1606159068539-43f36b99d1b5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
  },
  {
    title: "Google Cloud Professional Developer",
    institution: "Google Cloud",
    date: "2023",
    description: "Certification demonstrating expertise in building scalable and reliable applications using Google Cloud technologies. Covers cloud-native development and microservices architecture.",
    location: "Online",
    type: "certificate",
    verification: "https://cloud.google.com/certification",
    skills: [
      "Cloud-Native Development",
      "Microservices",
      "Container Orchestration",
      "Serverless Architecture"
    ],
    certificateImage: "https://images.unsplash.com/photo-1606159068539-43f36b99d1b5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
  },
  {
    title: "Microsoft Certified: Azure Solutions Architect Expert",
    institution: "Microsoft",
    date: "2023",
    description: "Expert-level certification for designing and implementing solutions that run on Microsoft Azure. Focuses on compute, network, storage, and security solutions.",
    location: "Online",
    type: "certificate",
    verification: "https://microsoft.com/verify",
    skills: [
      "Azure Architecture",
      "Cloud Security",
      "DevOps Integration",
      "Hybrid Cloud Solutions"
    ],
    certificateImage: "https://images.unsplash.com/photo-1606159068539-43f36b99d1b5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
  },
  {
    title: "Oracle Certified Professional, Java SE 11 Developer",
    institution: "Oracle",
    date: "2022",
    description: "Professional certification for Java developers demonstrating expertise in Java SE 11 development. Covers advanced Java features, concurrency, and performance optimization.",
    location: "Online",
    type: "certificate",
    verification: "https://oracle.com/certification",
    skills: [
      "Java SE 11",
      "Concurrency",
      "Performance Tuning",
      "Security Best Practices"
    ],
    certificateImage: "https://images.unsplash.com/photo-1606159068539-43f36b99d1b5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
  }
]

const Lightbox = ({ image, isOpen, onClose }: { image: string, isOpen: boolean, onClose: () => void }) => {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center">
      <div 
        className="fixed inset-0 bg-black/90 backdrop-blur-sm"
        onClick={onClose}
        aria-hidden="true"
      />
      <div className="relative max-w-4xl w-full mx-4">
        <button
          onClick={onClose}
          className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors"
          aria-label="Close lightbox"
        >
          <FaTimes size={24} />
        </button>
        <div className="relative">
          <img
            src={image}
            alt="Certificate"
            className="w-full h-auto rounded-lg shadow-2xl"
          />
        </div>
      </div>
    </div>
  )
}

const QualificationsModal = ({ isOpen, onClose }: QualificationsModalProps) => {
  const [activeTab, setActiveTab] = useState<'academic' | 'certificates'>('academic')
  const [selectedCertificate, setSelectedCertificate] = useState<string | null>(null)

  if (!isOpen) return null

  const filteredQualifications = qualifications.filter(q => 
    activeTab === 'academic' ? q.type === 'academic' : q.type === 'certificate'
  )

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/50 backdrop-blur-sm transition-opacity"
        onClick={onClose}
        aria-hidden="true"
      />
      
      {/* Modal */}
      <div 
        className="relative bg-white rounded-xl shadow-2xl max-w-2xl w-full mx-4 max-h-[90vh] flex flex-col transform transition-all duration-300 ease-out scale-100 opacity-100"
        role="dialog"
        aria-modal="true"
        aria-labelledby="qualifications-title"
      >
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b flex-shrink-0">
          <div className="flex items-center gap-3">
            <FaGraduationCap className="text-indigo-500 text-2xl" />
            <h2 id="qualifications-title" className="text-2xl font-bold text-gray-900">Qualifications & Certificates</h2>
          </div>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 transition-colors"
            aria-label="Close modal"
          >
            <FaTimes size={24} />
          </button>
        </div>

        {/* Tabs */}
        <div className="border-b flex-shrink-0">
          <div className="flex">
            <button
              onClick={() => setActiveTab('academic')}
              className={`px-6 py-3 font-medium text-sm ${
                activeTab === 'academic'
                  ? 'text-primary border-b-2 border-primary'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              Academic
            </button>
            <button
              onClick={() => setActiveTab('certificates')}
              className={`px-6 py-3 font-medium text-sm ${
                activeTab === 'certificates'
                  ? 'text-primary border-b-2 border-primary'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              Professional Certificates
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto">
          <div className="space-y-6">
            {filteredQualifications.map((qualification, index) => (
              <div 
                key={index}
                className="p-4 bg-gray-50 rounded-lg border border-gray-100 hover:border-primary/20 transition-colors"
              >
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-lg font-semibold text-gray-900">{qualification.title}</h3>
                  <span className="text-sm text-gray-500">{qualification.date}</span>
                </div>
                <p className="text-primary font-medium mb-2">{qualification.institution}</p>
                <p className="text-gray-600 mb-2">{qualification.description}</p>
                <p className="text-sm text-gray-500 mb-3">{qualification.location}</p>
                
                {qualification.type === 'academic' && qualification.gpa && (
                  <p className="text-sm font-medium text-gray-700 mb-3">GPA: {qualification.gpa}</p>
                )}
                
                {qualification.type === 'certificate' && qualification.verification && (
                  <div className="flex gap-3 mb-3">
                    {qualification.certificateImage && (
                      <button
                        onClick={() => setSelectedCertificate(qualification.certificateImage)}
                        className="inline-flex items-center gap-2 text-sm text-primary hover:underline"
                      >
                        <FaEye className="w-4 h-4" />
                        View Certificate
                      </button>
                    )}
                  </div>
                )}

                {qualification.achievements && (
                  <div className="mt-3">
                    <h4 className="text-sm font-semibold text-gray-700 mb-2">Key Achievements:</h4>
                    <ul className="list-disc list-inside space-y-1">
                      {qualification.achievements.map((achievement, i) => (
                        <li key={i} className="text-sm text-gray-600">{achievement}</li>
                      ))}
                    </ul>
                  </div>
                )}

                {qualification.skills && (
                  <div className="mt-3">
                    <h4 className="text-sm font-semibold text-gray-700 mb-2">Skills Gained:</h4>
                    <div className="flex flex-wrap gap-2">
                      {qualification.skills.map((skill, i) => (
                        <span 
                          key={i}
                          className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Lightbox */}
      {selectedCertificate && (
        <Lightbox
          image={selectedCertificate}
          isOpen={true}
          onClose={() => setSelectedCertificate(null)}
        />
      )}
    </div>
  )
}

export default QualificationsModal 