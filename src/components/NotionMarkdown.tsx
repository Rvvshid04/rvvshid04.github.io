import ReactMarkdown from 'react-markdown'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism'
import remarkGfm from 'remark-gfm'
import { Components } from 'react-markdown'

interface NotionMarkdownProps {
  content: string
}

const NotionMarkdown = ({ content }: NotionMarkdownProps) => {
  const components: Components = {
    h1: ({ node, ...props }) => (
      <h1 className="text-4xl font-bold mt-8 mb-4 text-gray-900" {...props} />
    ),
    h2: ({ node, ...props }) => (
      <h2 className="text-3xl font-bold mt-8 mb-4 text-gray-900" {...props} />
    ),
    h3: ({ node, ...props }) => (
      <h3 className="text-2xl font-bold mt-6 mb-3 text-gray-900" {...props} />
    ),
    p: ({ node, ...props }) => (
      <p className="text-lg leading-relaxed mb-4 text-gray-700" {...props} />
    ),
    ul: ({ node, ...props }) => (
      <ul className="list-disc pl-6 mb-4 space-y-2 text-gray-700" {...props} />
    ),
    ol: ({ node, ...props }) => (
      <ol className="list-decimal pl-6 mb-4 space-y-2 text-gray-700" {...props} />
    ),
    li: ({ node, ...props }) => (
      <li className="text-lg leading-relaxed" {...props} />
    ),
    blockquote: ({ node, ...props }) => (
      <blockquote className="border-l-4 border-gray-300 pl-4 italic my-4 text-gray-600" {...props} />
    ),
    code: ({ node, inline, className, children, ...props }: any) => {
      const match = /language-(\w+)/.exec(className || '')
      return !inline && match ? (
        <div className="relative group">
          <div className="absolute right-2 top-2 opacity-0 group-hover:opacity-100 transition-opacity">
            <button
              onClick={() => {
                navigator.clipboard.writeText(String(children).replace(/\n$/, ''))
              }}
              className="px-2 py-1 text-xs bg-gray-800 text-white rounded hover:bg-gray-700 transition-colors"
            >
              Copy
            </button>
          </div>
          <SyntaxHighlighter
            style={vscDarkPlus as any}
            language={match[1]}
            PreTag="div"
            className="rounded-lg !bg-gray-900 !p-4 !my-4"
            {...props}
          >
            {String(children).replace(/\n$/, '')}
          </SyntaxHighlighter>
        </div>
      ) : (
        <code className="bg-gray-100 rounded px-1.5 py-0.5 text-sm font-mono text-gray-800" {...props}>
          {children}
        </code>
      )
    },
    a: ({ node, ...props }) => (
      <a className="text-indigo-600 hover:text-indigo-500 underline" {...props} />
    ),
    img: ({ node, ...props }) => (
      <img className="rounded-lg my-4 max-w-full" {...props} />
    ),
    hr: ({ node, ...props }) => (
      <hr className="my-8 border-gray-200" {...props} />
    ),
    table: ({ node, ...props }) => (
      <div className="overflow-x-auto my-4">
        <table className="min-w-full divide-y divide-gray-200" {...props} />
      </div>
    ),
    th: ({ node, ...props }) => (
      <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider" {...props} />
    ),
    td: ({ node, ...props }) => (
      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700" {...props} />
    ),
  }

  return (
    <ReactMarkdown
      remarkPlugins={[remarkGfm]}
      components={components}
    >
      {content}
    </ReactMarkdown>
  )
}

export default NotionMarkdown 