import { useState } from 'react'
import { FaTrophy, FaTimes, FaEye, FaChevronLeft, FaChevronRight, FaHackerrank, FaBehance } from 'react-icons/fa'
import { SiLeetcode } from 'react-icons/si'

interface AchievementsModalProps {
  isOpen: boolean
  onClose: () => void
}

const achievements = [
  {
    title: "Achievement Placeholder 1",
    organization: "Organization Placeholder 1",
    description: "This is a placeholder achievement description. Replace with actual achievement details.",
    date: "January 2024",
    images: [
      "https://placehold.co/600x400/gray/white?text=Achievement+1"
    ]
  },
  {
    title: "Achievement Placeholder 2",
    organization: "Organization Placeholder 2",
    description: "This is a placeholder achievement description. Replace with actual achievement details.",
    date: "February 2024",
    images: [
      "https://placehold.co/600x400/gray/white?text=Achievement+2"
    ]
  },
  {
    title: "Achievement Placeholder 3",
    organization: "Organization Placeholder 3",
    description: "This is a placeholder achievement description. Replace with actual achievement details.",
    date: "March 2024",
    images: [
      "https://placehold.co/600x400/gray/white?text=Achievement+3"
    ]
  }
]

const Lightbox = ({ images, isOpen, onClose }: { images: string[], isOpen: boolean, onClose: () => void }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  if (!isOpen) return null

  const handlePrevious = () => {
    setCurrentImageIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1))
  }

  const handleNext = () => {
    setCurrentImageIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1))
  }

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
            src={images[currentImageIndex]}
            alt="Certificate"
            className="w-full h-auto rounded-lg shadow-2xl"
          />
          {images.length > 1 && (
            <>
              <button
                onClick={handlePrevious}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 text-white p-3 rounded-full hover:bg-black/70 transition-colors"
                aria-label="Previous image"
              >
                <FaChevronLeft size={20} />
              </button>
              <button
                onClick={handleNext}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 text-white p-3 rounded-full hover:bg-black/70 transition-colors"
                aria-label="Next image"
              >
                <FaChevronRight size={20} />
              </button>
            </>
          )}
        </div>
        <div className="text-white text-center mt-4">
          Image {currentImageIndex + 1} of {images.length}
        </div>
      </div>
    </div>
  )
}

const AchievementsModal = ({ isOpen, onClose }: AchievementsModalProps) => {
  const [selectedAchievement, setSelectedAchievement] = useState<number | null>(null)
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
                  <button
                    onClick={() => setSelectedAchievement(index)}
                    className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-lg hover:bg-primary/20 transition-colors"
                    aria-label={`View images for ${achievement.title}`}
                  >
                    <FaEye />
                    <span>View Images</span>
                  </button>
                </div>
              ))}
            </div>
          ) : (
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <a
                  href="https://www.hackerrank.com/arma2"
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
                  href="https://leetcode.com/arma2"
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
                  href="https://www.behance.net/arma2"
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

      {/* Lightbox */}
      {selectedAchievement !== null && (
        <Lightbox
          images={achievements[selectedAchievement].images}
          isOpen={true}
          onClose={() => setSelectedAchievement(null)}
        />
      )}
    </div>
  )
}

export default AchievementsModal 