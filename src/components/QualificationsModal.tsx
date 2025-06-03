import { useState } from 'react'
import { FaGraduationCap, FaTimes, FaEye } from 'react-icons/fa'

interface QualificationsModalProps {
  isOpen: boolean
  onClose: () => void
}

const qualifications = [
  {
    title: "BSc (Hon) in Computer Science (Software Engineering) – Top Up",
    institution: "Kingston University",
    date: "September 2024 – 2025",
    description: "Relevant Coursework: Programming III, Software Development Practices, Individual Project, Advanced Data Modelling",
    location: "Kingston upon Thames, United Kingdom",
    type: "academic",
    achievements: [
      "Currently enrolled"
    ]
  },
  {
    title: "Pearson BTEC Level 5 Higher Nationals Diploma in Computing (Software Engineering)",
    institution: "ESOFT Metro Campus",
    date: "October 2022 – September 2024",
    description: "Relevant Coursework: Networking, Database Design and Development, Security, SDLC, Computing Research Project (Pearson Set), Business Process Support, Systems Analysis and Design, User Experience and Interface Design, Discrete Mathematics, Data Structures and Algorithms, Applied Programming and Design Principles.",
    location: "Kandy, Sri Lanka",
    type: "academic",
    achievements: [
      "Completed all modules"
    ]
  },
  {
    title: "Level 7 Postgraduate Diploma in Professional Marketing",
    institution: "Chartered Institute of Marketing (CIM)",
    date: "October 2022 – March 2024",
    description: "Relevant Coursework: Applied Marketing, Planning Campaigns, Digital Marketing Techniques, Marketing & Digital Strategy, Innovation in Marketing, Managing Brands, Global Marketing Decisions, Corporate Digital Communications, Creating Entrepreneurial Change.",
    location: "Berkshire, UK",
    type: "academic",
    achievements: [
      "Completed with distinction"
    ]
  },
  {
    title: "Edexcel IGCSE & NCC Education International Foundation Diploma (Distinction)",
    institution: "Gateway College Kandy",
    date: "August 2019 – August 2022",
    description: "",
    location: "Kandy, Sri Lanka",
    type: "academic",
    achievements: [
      "Distinction"
    ]
  },
  {
    title: "Certificate Placeholder 1",
    institution: "Institution Placeholder 1",
    date: "2024",
    description: "This is a placeholder certificate description. Replace with actual certificate details.",
    location: "Online",
    type: "certificate",
    verification: "#",
    skills: [
      "Skill Placeholder 1",
      "Skill Placeholder 2",
      "Skill Placeholder 3"
    ],
    certificateImage: "https://placehold.co/600x400/gray/white?text=Certificate+1"
  },
  {
    title: "Certificate Placeholder 2",
    institution: "Institution Placeholder 2",
    date: "2024",
    description: "This is a placeholder certificate description. Replace with actual certificate details.",
    location: "Online",
    type: "certificate",
    verification: "#",
    skills: [
      "Skill Placeholder 1",
      "Skill Placeholder 2",
      "Skill Placeholder 3"
    ],
    certificateImage: "https://placehold.co/600x400/gray/white?text=Certificate+2"
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
                {qualification.description && qualification.description.includes('Relevant Coursework:') ? (
                  (() => {
                    const [, rest] = qualification.description.split('Relevant Coursework:');
                    const courseworkItems = rest ? rest.split(',').map(item => item.trim()).filter(Boolean) : [];
                    return (
                      <div className="mb-2">
                        <span className="font-semibold text-gray-900">Relevant Coursework:</span>
                        <ul className="list-disc list-inside text-xs text-gray-600 mt-1 ml-4">
                          {courseworkItems.map((item, idx) => (
                            <li key={idx}>{item}</li>
                          ))}
                        </ul>
                      </div>
                    );
                  })()
                ) : (
                  <p className="text-gray-600 mb-2">{qualification.description}</p>
                )}
                <p className="text-sm text-gray-500 mb-3">{qualification.location}</p>
                
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