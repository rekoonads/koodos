import BaseTemplate from "./base-template"
import { Newspaper, TrendingUp } from "lucide-react"

interface NewsTemplateProps {
  title: string
  author: string
  publishedAt: string
  readTime: string
  content: string
  tags?: string[]
  breaking?: boolean
}

export default function NewsTemplate({
  title,
  author,
  publishedAt,
  readTime,
  content,
  tags = [],
  breaking = false
}: NewsTemplateProps) {
  return (
    <BaseTemplate
      title={title}
      category={breaking ? "BREAKING NEWS" : "NEWS"}
      author={author}
      publishedAt={publishedAt}
      readTime={readTime}
      categoryColor={breaking ? "bg-red-600 animate-pulse" : "bg-blue-600"}
    >
      {breaking && (
        <div className="bg-red-600 text-white p-4 rounded-lg mb-6 flex items-center gap-3">
          <TrendingUp className="w-5 h-5" />
          <span className="font-semibold">Breaking News</span>
        </div>
      )}
      
      <div className="text-lg leading-relaxed mb-8" dangerouslySetInnerHTML={{ __html: content }} />
      
      {tags.length > 0 && (
        <div className="border-t border-gray-800 pt-6">
          <h3 className="text-sm font-semibold text-gray-400 mb-3">TAGS</h3>
          <div className="flex flex-wrap gap-2">
            {tags.map((tag) => (
              <span key={tag} className="bg-gray-800 text-gray-300 px-3 py-1 text-sm rounded-full hover:bg-gray-700 cursor-pointer">
                #{tag}
              </span>
            ))}
          </div>
        </div>
      )}
    </BaseTemplate>
  )
}