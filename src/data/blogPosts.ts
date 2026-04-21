export interface BlogPostMeta {
  slug: string
  title: string
  excerpt: string
  coverImage: string
  date: string
  readTime: string
  tags: string[]
}

export const blogPosts: BlogPostMeta[] = [
  {
    slug: 'AI-Generated-Blog-Post-As-A-Placeholder',
    title: 'AI Generated Placeholder Blog',
    excerpt:
      'A practical checklist I use to keep my React pages quick, maintainable, and pleasant to navigate.',
    coverImage: '/images/weather-app-dashboard.png',
    date: 'April 21, 2026',
    readTime: '4 min read',
    tags: ['React', 'Performance', 'Frontend']
  }
]

const blogPostContentLoaders = import.meta.glob('../content/blog/*.md', {
  query: '?raw',
  import: 'default'
}) as Record<string, () => Promise<string>>

export const getBlogPostMetaBySlug = (slug: string) =>
  blogPosts.find((post) => post.slug === slug)

export const loadBlogPostContentBySlug = async (slug: string) => {
  const path = `../content/blog/${slug}.md`
  const loader = blogPostContentLoaders[path]

  if (!loader) {
    return null
  }

  const markdown = await loader()
  return markdown
}