import { ReactNode } from "react"
import { Clock, User, Eye, Share2 } from "lucide-react"

interface BaseTemplateProps {
  title: string
  category: string
  author: string
  publishedAt: string
  readTime: string
  views?: string
  children: ReactNode
  categoryColor?: string
}

export default function BaseTemplate({
  title,
  category,
  author,
  publishedAt,
  readTime,
  views = "0",
  children,
  categoryColor = "bg-red-600"
}: BaseTemplateProps) {
  return (
    <article className="min-h-screen bg-black text-white">
      <div className="max-w-4xl mx-auto px-6 py-8">
        <div className="mb-4">
          <span className={`${categoryColor} text-white px-3 py-1 text-sm font-semibold rounded`}>
            {category}
          </span>
        </div>
        <h1 className="text-4xl font-bold mb-6 leading-tight">{title}</h1>
        <div className="flex items-center gap-6 text-gray-400 text-sm mb-8 pb-6 border-b border-gray-800">
          <div className="flex items-center gap-2">
            <User className="w-4 h-4" />
            <span>{author}</span>
          </div>
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4" />
            <span>{publishedAt}</span>
          </div>
          <div className="flex items-center gap-2">
            <Eye className="w-4 h-4" />
            <span>{views} views</span>
          </div>
          <span>{readTime}</span>
          <button className="flex items-center gap-2 hover:text-white transition-colors">
            <Share2 className="w-4 h-4" />
            <span>Share</span>
          </button>
        </div>
        <div className="prose prose-invert max-w-none">
          {children}
        </div>
      </div>
    </article>
  )
}