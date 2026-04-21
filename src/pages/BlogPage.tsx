import { Link } from 'react-router-dom'
import { blogPosts } from '../data/blogPosts'

const BlogPage = () => {
  return (
    <div className="min-h-screen bg-white pt-24 pb-20">
      <div className="max-w-5xl mx-auto px-6 md:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 text-gray-900">
            Blog<span className="text-indigo-500">.</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Short notes and practical lessons from my projects, experiments, and development journey.
          </p>
        </div>

        {/* Blog Post List */}
        <div className="divide-y divide-gray-100">
          {blogPosts.map((post) => (
            <article
              key={post.slug}
              className="py-7 md:py-8"
            >
              <Link to={`/blog/${post.slug}`} className="block group">
                <div className="flex items-start justify-between gap-6">
                  <div className="min-w-0">
                    <h2 className="text-xl md:text-1xl font-semibold tracking-tight text-gray-900 group-hover:text-indigo-600 transition-colors duration-200 leading-tight">
                      {post.title}
                    </h2>
                    <p className="mt-2 text-[1.05rem] text-gray-600 leading-relaxed">
                      {post.excerpt}
                    </p>
                    <p className="mt-3 text-sm font-medium text-indigo-600 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                      Read Article --&gt;
                    </p>
                  </div>
                  <div className="shrink-0 text-right">
                    <p className="hidden sm:block text-sm md:text-[0.95rem] text-gray-500 pt-1">
                      {post.date}
                    </p>
                    <div className="hidden sm:flex flex-wrap justify-end gap-2 mt-3 max-w-[14rem]">
                      {post.tags.map((tag) => (
                        <span key={tag} className="px-2 py-1 bg-indigo-50 text-indigo-700 text-xs font-medium rounded-full">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                <p className="sm:hidden mt-2 text-sm text-gray-500">{post.date}</p>
                <div className="sm:hidden flex flex-wrap gap-2 mt-3">
                  {post.tags.map((tag) => (
                    <span key={tag} className="px-2 py-1 bg-indigo-50 text-indigo-700 text-xs font-medium rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </div>
  )
}

export default BlogPage 