import { useState } from 'react'
import { FaTrophy, FaTimes, FaHackerrank, FaBehance } from 'react-icons/fa'
import { SiLeetcode } from 'react-icons/si'

interface AchievementsModalProps {
  isOpen: boolean
  onClose: () => void
}

const achievements = [
  {
    title: "Recieved 'Merit' at the Inter Gatway Digital Art Competition 2020",
    organization: "Gateway College",
    description: "Designed a futuristic landscape of Sri Lanka in 2025. Admittedly looking back, it was far-fetched, but still won a 'Merit' didn't I?",
    date: "February 2020"
  },
  {
    title: "Winner of the Intercampus Hackathon 2023, Software Engineering Category",
    organization: "ESOFT METRO CAMPUS",
    description: "Won the hackathon as part of a team of 5, presenting a mental health app prototype called 'eHab', with the idea of monitoring local mental health situations",
    date: "October 2023"
  },
  {
    title: "Achieved 'Distinction' in Innovation in Marketing module",
    organization: "Sri Lanka Institute of Marketing",
    description: "Awarded a certificate at a ceremony by SLIM for gaining a distiction grade in a Level 6 CIM module - Innovation in Marketing",
    date: "December 2023"
  },
  {
    title: "Achieved 'Distinction' in Corporate Digital Communications module",
    organization: "Sri Lanka Institute of Marketing",
    description: "Awarded a certificate at a ceremony by SLIM for gaining a distiction grade in a Level 7 CIM module - Corporate Digital Communication",
    date: "December 2023"
  },
  {
    title: "Passed the French Speaking test in my O/Ls!",
    organization: "Gateway College",
    description: "Take the wins where they come. Speaking French for iGCSEs...I think that'd be around A2? Didn't get a shiny certificate specifically for this but hey...its a win in my book.",
    date: "Probably Early 2021"
  }
]

const AchievementsModal = ({ isOpen, onClose }: AchievementsModalProps) => {
  const [activeTab, setActiveTab] = useState<'achievements' | 'social'>('achievements')

  if (!isOpen) return null

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
        aria-labelledby="achievements-title"
      >
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b flex-shrink-0">
          <div className="flex items-center gap-3">
            <FaTrophy className="text-yellow-500 text-2xl" />
            <h2 id="achievements-title" className="text-2xl font-bold text-gray-900">Achievements & More</h2>
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
              onClick={() => setActiveTab('achievements')}
              className={`px-6 py-3 font-medium text-sm ${
                activeTab === 'achievements'
                  ? 'text-primary border-b-2 border-primary'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              Achievements
            </button>
            <button
              onClick={() => setActiveTab('social')}
              className={`px-6 py-3 font-medium text-sm ${
                activeTab === 'social'
                  ? 'text-primary border-b-2 border-primary'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              Follow My Work
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto">
          {activeTab === 'achievements' ? (
            <div className="space-y-6">
              {achievements.map((achievement, index) => (
                <div 
                  key={index}
                  className="p-4 bg-gray-50 rounded-lg border border-gray-100 hover:border-primary/20 transition-colors"
                >
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-lg font-semibold text-gray-900">{achievement.title}</h3>
                    <span className="text-sm text-gray-500">{achievement.date}</span>
                  </div>
                  <p className="text-primary font-medium mb-2">{achievement.organization}</p>
                  <p className="text-gray-600 mb-4">{achievement.description}</p>
                </div>
              ))}
            </div>
          ) : (
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <a
                  href="https://www.hackerrank.com/profile/raashid_arq"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg border border-gray-100 hover:border-primary/20 transition-colors hover:bg-gray-100"
                >
                  <FaHackerrank className="text-2xl text-[#2EC866]" />
                  <div>
                    <h3 className="font-semibold text-gray-900">HackerRank</h3>
                    <p className="text-sm text-gray-500">View my coding challenges and solutions</p>
                  </div>
                </a>
                <a
                  href="https://leetcode.com/u/Rvvshid04/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg border border-gray-100 hover:border-primary/20 transition-colors hover:bg-gray-100"
                >
                  <SiLeetcode className="text-2xl text-[#FFA116]" />
                  <div>
                    <h3 className="font-semibold text-gray-900">LeetCode</h3>
                    <p className="text-sm text-gray-500">Check out my problem-solving journey</p>
                  </div>
                </a>
                <a
                  href="https://www.behance.net/raashidarquil"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg border border-gray-100 hover:border-primary/20 transition-colors hover:bg-gray-100"
                >
                  <FaBehance className="text-2xl text-[#0057FF]" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Behance</h3>
                    <p className="text-sm text-gray-500">Explore my design portfolio</p>
                  </div>
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default AchievementsModal 