export interface BlogPost {
  id: string
  title: string
  excerpt: string
  coverImage: string
  date: string
  readTime: string
  tags: string[]
  author: {
    name: string
    avatar: string
    role: string
  }
  content: string
  references: {
    title: string
    url: string
  }[]
  furtherReading: {
    title: string
    url: string
  }[]
}

export const blogPosts: BlogPost[] = [
  {
    id: 'placeholder-1',
    title: 'Blog Post Placeholder 1',
    excerpt: 'This is a placeholder excerpt for the first blog post. Replace with your real blog content.',
    coverImage: 'https://via.placeholder.com/600x300/94a3b8/ffffff?text=Blog+1',
    date: 'March 15, 2024',
    readTime: '5 min read',
    tags: ['Placeholder', 'Demo'],
    author: {
      name: 'Demo Author',
      avatar: 'https://via.placeholder.com/150',
      role: 'Demo Role'
    },
    content: 'This is a placeholder content for the first blog post. Replace with your real blog content.',
    references: [],
    furtherReading: []
  },
  {
    id: 'placeholder-2',
    title: 'Blog Post Placeholder 2',
    excerpt: 'This is a placeholder excerpt for the second blog post. Replace with your real blog content.',
    coverImage: 'https://via.placeholder.com/600x300/94a3b8/ffffff?text=Blog+2',
    date: 'March 10, 2024',
    readTime: '5 min read',
    tags: ['Placeholder', 'Demo'],
    author: {
      name: 'Demo Author',
      avatar: 'https://via.placeholder.com/150',
      role: 'Demo Role'
    },
    content: 'This is a placeholder content for the second blog post. Replace with your real blog content.',
    references: [],
    furtherReading: []
  },
  {
    id: 'placeholder-3',
    title: 'Blog Post Placeholder 3',
    excerpt: 'This is a placeholder excerpt for the third blog post. Replace with your real blog content.',
    coverImage: 'https://via.placeholder.com/600x300/94a3b8/ffffff?text=Blog+3',
    date: 'March 5, 2024',
    readTime: '5 min read',
    tags: ['Placeholder', 'Demo'],
    author: {
      name: 'Demo Author',
      avatar: 'https://via.placeholder.com/150',
      role: 'Demo Role'
    },
    content: 'This is a placeholder content for the third blog post. Replace with your real blog content.',
    references: [],
    furtherReading: []
  }
] 