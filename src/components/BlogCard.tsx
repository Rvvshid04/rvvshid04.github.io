import { Link } from 'react-router-dom'
import { BlogPost } from '../data/blogPosts'

interface BlogCardProps {
  post: BlogPost
}

const BlogCard = ({ post }: BlogCardProps) => {
  if (!post || !post.id) {
    return (
      <div className="bg-red-100 text-red-700 p-4 rounded-lg shadow">
        <p>Blog post data is missing or invalid.</p>
      </div>
    );
  }

  return (
    <article className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
      <Link to={`/blog/${post.id}`} className="block">
        <div className="relative h-48 overflow-hidden">
          <img
            src={post.coverImage}
            alt={post.title}
            className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300"
          />
        </div>
        <div className="p-6">
          <div className="flex items-center gap-2 mb-4">
            <img
              src={post.author.avatar}
              alt={post.author.name}
              className="w-8 h-8 rounded-full"
            />
            <div>
              <p className="text-sm font-medium text-gray-900">{post.author.name}</p>
              <p className="text-xs text-gray-500">{post.date} · {post.readTime}</p>
            </div>
          </div>
          <h3 className="text-xl font-bold mb-2 text-gray-900 hover:text-indigo-500 transition-colors duration-300">
            {post.title}
          </h3>
          <p className="text-gray-600 mb-4 line-clamp-2">
            {post.excerpt}
          </p>
          <div className="flex flex-wrap gap-2">
            {post.tags.map(tag => (
              <span
                key={tag}
                className="px-2 py-1 bg-gray-100 text-gray-600 text-xs font-medium rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </Link>
    </article>
  )
}

export default BlogCard 