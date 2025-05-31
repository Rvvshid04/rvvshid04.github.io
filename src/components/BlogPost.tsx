import { Link } from 'react-router-dom'
import { FaArrowLeft, FaCalendarAlt, FaClock, FaTag, FaBookmark, FaShare, FaCheck } from 'react-icons/fa'
import { useState } from 'react'
import { BlogPost as BlogPostType } from '../data/blogPosts'
import NotionMarkdown from './NotionMarkdown'

interface BlogPostProps {
  post: BlogPostType
}

const BlogPost = ({ post }: BlogPostProps) => {
  const [isBookmarked, setIsBookmarked] = useState(false)
  const [showShareTooltip, setShowShareTooltip] = useState(false)
  const [showBookmarkTooltip, setShowBookmarkTooltip] = useState(false)

  const handleShare = async () => {
    try {
      await navigator.share({
        title: post.title,
        text: post.excerpt,
        url: window.location.href,
      })
    } catch (error) {
      // Fallback for browsers that don't support Web Share API
      navigator.clipboard.writeText(window.location.href)
      setShowShareTooltip(true)
      setTimeout(() => setShowShareTooltip(false), 2000)
    }
  }

  const handleBookmark = () => {
    setIsBookmarked(!isBookmarked)
    setShowBookmarkTooltip(true)
    setTimeout(() => setShowBookmarkTooltip(false), 2000)
  }

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 pt-24">
        {/* Navigation */}
        <div className="py-6 flex items-center justify-between">
          <Link
            to="/blog"
            className="group inline-flex items-center gap-2 text-gray-600 hover:text-indigo-500 transition-colors duration-300"
          >
            <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center group-hover:bg-indigo-100 transition-colors duration-300">
              <FaArrowLeft className="w-4 h-4" />
            </div>
            <span className="font-medium">Back to Blog</span>
          </Link>
          <div className="relative">
            <button
              onClick={handleShare}
              className="group p-2 rounded-full hover:bg-gray-100 transition-colors duration-300"
              aria-label="Share post"
            >
              <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center group-hover:bg-indigo-100 transition-colors duration-300">
                <FaShare className="w-4 h-4 text-gray-600 group-hover:text-indigo-600" />
              </div>
            </button>
            {showShareTooltip && (
              <div className="absolute right-0 top-full mt-2 px-3 py-1.5 bg-gray-900 text-white text-sm rounded-md whitespace-nowrap">
                Link copied to clipboard!
              </div>
            )}
          </div>
        </div>

        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6 text-gray-900">
            {post.title}
          </h1>
          <div className="flex flex-wrap items-center gap-6 text-gray-600 mb-6">
            <div className="flex items-center gap-3">
              <img
                src={post.author.avatar}
                alt={post.author.name}
                className="w-12 h-12 rounded-full"
              />
              <div>
                <p className="font-medium text-gray-900">{post.author.name}</p>
                <p className="text-sm">{post.author.role}</p>
              </div>
            </div>
            <div className="flex items-center gap-1">
              <FaCalendarAlt className="w-4 h-4" />
              <span>{post.date}</span>
            </div>
            <div className="flex items-center gap-1">
              <FaClock className="w-4 h-4" />
              <span>{post.readTime}</span>
            </div>
          </div>
          <div className="flex flex-wrap gap-2">
            {post.tags.map(tag => (
              <span
                key={tag}
                className="inline-flex items-center gap-1 px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm font-medium hover:bg-gray-200 transition-colors duration-300"
              >
                <FaTag className="w-3 h-3" />
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Cover Image */}
        <div className="relative h-[400px] mb-12 rounded-xl overflow-hidden">
          <img
            src={post.coverImage}
            alt={post.title}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Content */}
        <div className="prose prose-lg max-w-none">
          <NotionMarkdown content={post.content} />
        </div>

        {/* References */}
        {post.references.length > 0 && (
          <div className="mt-16 border-t border-gray-200 pt-8">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 rounded-full bg-indigo-100 flex items-center justify-center">
                <svg className="w-4 h-4 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-gray-900">References</h2>
            </div>
            <div className="grid gap-4">
              {post.references.map((ref, index) => (
                <a
                  key={index}
                  href={ref.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-start gap-3 p-4 rounded-lg border border-gray-200 hover:border-indigo-200 hover:bg-indigo-50/50 transition-colors duration-200"
                >
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 group-hover:bg-indigo-100 group-hover:text-indigo-600 transition-colors duration-200">
                    {index + 1}
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900 group-hover:text-indigo-600 transition-colors duration-200">
                      {ref.title}
                    </h3>
                    <p className="text-sm text-gray-500 mt-1 break-all">
                      {ref.url}
                    </p>
                  </div>
                </a>
              ))}
            </div>
          </div>
        )}

        {/* Further Reading - Optional */}
        {post.furtherReading && post.furtherReading.length > 0 && (
          <div className="mt-12 border-t border-gray-200 pt-8">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center">
                <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-gray-900">Further Reading</h2>
            </div>
            <div className="grid gap-4">
              {post.furtherReading.map((item, index) => (
                <a
                  key={index}
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-start gap-3 p-4 rounded-lg border border-gray-200 hover:border-green-200 hover:bg-green-50/50 transition-colors duration-200"
                >
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 group-hover:bg-green-100 group-hover:text-green-600 transition-colors duration-200">
                    {index + 1}
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900 group-hover:text-green-600 transition-colors duration-200">
                      {item.title}
                    </h3>
                    <p className="text-sm text-gray-500 mt-1 break-all">
                      {item.url}
                    </p>
                  </div>
                </a>
              ))}
            </div>
          </div>
        )}

        {/* Bottom Spacing */}
        <div className="h-24"></div>
      </div>
    </div>
  )
}

export default BlogPost 