import { useState } from 'react'
import BlogCard from '../components/BlogCard'
import { blogPosts } from '../data/blogPosts'

const BlogPage = () => {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedTag, setSelectedTag] = useState<string | null>(null)

  // Get all unique tags from blog posts
  const allTags = Array.from(new Set(blogPosts.flatMap(post => post.tags)))

  // Filter posts based on search query and selected tag
  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesTag = !selectedTag || post.tags.includes(selectedTag)
    return matchesSearch && matchesTag
  })

  return (
    <div className="min-h-screen bg-white pt-24 pb-16">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 text-gray-900">
            Blog<span className="text-indigo-500">.</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Insights, tutorials, and thoughts on web development, cloud computing, and technology trends.
          </p>
        </div>

        {/* Search and Filter */}
        <div className="mb-8 space-y-4">
          <div className="relative">
            <input
              type="text"
              placeholder="Search articles..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
            />
          </div>
          <div className="flex flex-wrap gap-2">
            {allTags.map(tag => (
              <button
                key={tag}
                onClick={() => setSelectedTag(selectedTag === tag ? null : tag)}
                className={`px-3 py-1 rounded-full text-sm font-medium transition-colors duration-300 ${
                  selectedTag === tag
                    ? 'bg-indigo-500 text-white'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {tag}
              </button>
            ))}
          </div>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map(post => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>

        {/* No Results Message */}
        {filteredPosts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-600 text-lg">
              No articles found matching your search criteria.
            </p>
          </div>
        )}
      </div>
    </div>
  )
}

export default BlogPage 