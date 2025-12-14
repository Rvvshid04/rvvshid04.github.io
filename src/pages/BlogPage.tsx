import BlogCard from '../components/BlogCard'


const BlogPage = () => {

  return (
    <div className="min-h-screen bg-white pt-24 pb-16">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 text-gray-900">
            Blog<span className="text-indigo-500">.</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Insights, tutorials, and thoughts on software development, technology trends, marketing, and the arts.
          </p>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
  
        </div>

      </div>
    </div>
  )
}

export default BlogPage 