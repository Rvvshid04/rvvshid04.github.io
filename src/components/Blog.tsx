// import BlogCard from './BlogCard'
import { blogPosts } from '../data/blogPosts'

const Blog = () => {
  return (
    <section id="blog" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4 text-gray-900">
            Blog<span className="text-indigo-500">.</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Insights, tutorials, and thoughts on software development, cloud computing, and technology trends.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {blogPosts.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Blog 



