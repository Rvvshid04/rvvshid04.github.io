# Blog Authoring Guide

To add a new article:

1. Copy `POST_TEMPLATE.md`
2. Rename it to a URL-friendly slug, e.g. `my-new-post.md`
3. Paste and edit your full article content
4. Add a metadata entry in `src/data/blogPosts.ts`:
   - `slug` must match the markdown filename (without `.md`)
   - Fill title, excerpt, date, readTime, tags, coverImage

If `slug` and filename match, the article page will load automatically at:

`/blog/<slug>`
