import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { FaArrowLeft, FaCalendarAlt, FaClock, FaTag } from 'react-icons/fa'
import NotionMarkdown from '../components/NotionMarkdown'
import { getBlogPostMetaBySlug, loadBlogPostContentBySlug } from '../data/blogPosts'

const BlogPostPage = () => {
  const { slug = '' } = useParams()
  const [content, setContent] = useState<string>('')
  const [isLoading, setIsLoading] = useState(true)

  const post = getBlogPostMetaBySlug(slug)

  useEffect(() => {
    let isMounted = true

    const fetchContent = async () => {
      setIsLoading(true)
      const markdown = await loadBlogPostContentBySlug(slug)

      if (isMounted) {
        setContent(markdown ?? '')
        setIsLoading(false)
      }
    }

    fetchContent()

    return () => {
      isMounted = false
    }
  }, [slug])

  if (!post) {
    return (
      <div className="min-h-screen bg-white pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Post not found.</h1>
          <Link to="/blog" className="text-indigo-600 hover:text-indigo-500">
            Back to blog
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-white pt-24 pb-16">
      <div className="max-w-4xl mx-auto px-4">
        <Link
          to="/blog"
          className="group inline-flex items-center gap-2 text-gray-600 hover:text-indigo-500 transition-colors duration-300 mb-8"
        >
          <span className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center group-hover:bg-indigo-100 transition-colors duration-300">
            <FaArrowLeft className="w-4 h-4" />
          </span>
          <span className="font-medium">Back to Blog</span>
        </Link>

        <h1 className="text-4xl md:text-5xl font-extrabold mb-6 text-gray-900">{post.title}</h1>

        <div className="flex flex-wrap items-center gap-4 text-gray-600 mb-6">
          <span className="inline-flex items-center gap-2">
            <FaCalendarAlt className="w-4 h-4" />
            {post.date}
          </span>
          <span className="inline-flex items-center gap-2">
            <FaClock className="w-4 h-4" />
            {post.readTime}
          </span>
        </div>

        <div className="flex flex-wrap gap-2 mb-8">
          {post.tags.map((tag) => (
            <span
              key={tag}
              className="inline-flex items-center gap-1 px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium"
            >
              <FaTag className="w-3 h-3" />
              {tag}
            </span>
          ))}
        </div>

        <img src={post.coverImage} alt={post.title} className="w-full h-72 md:h-96 object-cover rounded-xl mb-10" />

        {!isLoading && content ? (
          <article className="prose prose-lg max-w-none">
            <NotionMarkdown content={content} />
          </article>
        ) : (
          <p className="text-gray-500">Loading article...</p>
        )}
      </div>
    </div>
  )
}

export default BlogPostPage
