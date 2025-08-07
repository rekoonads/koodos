import BaseTemplate from "./base-template"
import { Star, ThumbsUp, ThumbsDown } from "lucide-react"

interface ReviewTemplateProps {
  title: string
  author: string
  publishedAt: string
  readTime: string
  content: string
  rating: number
  pros?: string[]
  cons?: string[]
  verdict: string
}

export default function ReviewTemplate({
  title,
  author,
  publishedAt,
  readTime,
  content,
  rating,
  pros = [],
  cons = [],
  verdict
}: ReviewTemplateProps) {
  return (
    <BaseTemplate
      title={title}
      category="REVIEW"
      author={author}
      publishedAt={publishedAt}
      readTime={readTime}
      categoryColor="bg-yellow-600"
    >
      <div className="bg-gray-900 rounded-lg p-6 mb-8">
        <div className="flex items-center gap-4 mb-4">
          <span className="text-2xl font-bold">KOODOS Score</span>
          <div className="flex items-center gap-2">
            <span className="text-4xl font-bold text-yellow-400">{rating}</span>
            <span className="text-gray-400">/10</span>
          </div>
        </div>
        <div className="flex">
          {[...Array(10)].map((_, i) => (
            <Star
              key={i}
              className={`w-5 h-5 ${i < rating ? "text-yellow-400 fill-current" : "text-gray-600"}`}
            />
          ))}
        </div>
      </div>

      <div className="text-lg leading-relaxed mb-8" dangerouslySetInnerHTML={{ __html: content }} />

      {(pros.length > 0 || cons.length > 0) && (
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          {pros.length > 0 && (
            <div className="bg-green-900/20 border border-green-800 rounded-lg p-6">
              <div className="flex items-center gap-2 mb-4">
                <ThumbsUp className="w-5 h-5 text-green-400" />
                <h3 className="font-semibold text-green-400">PROS</h3>
              </div>
              <ul className="space-y-2">
                {pros.map((pro, i) => (
                  <li key={i} className="text-gray-300">• {pro}</li>
                ))}
              </ul>
            </div>
          )}
          
          {cons.length > 0 && (
            <div className="bg-red-900/20 border border-red-800 rounded-lg p-6">
              <div className="flex items-center gap-2 mb-4">
                <ThumbsDown className="w-5 h-5 text-red-400" />
                <h3 className="font-semibold text-red-400">CONS</h3>
              </div>
              <ul className="space-y-2">
                {cons.map((con, i) => (
                  <li key={i} className="text-gray-300">• {con}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      )}

      <div className="bg-gray-900 rounded-lg p-6">
        <h3 className="font-semibold text-white mb-3">VERDICT</h3>
        <p className="text-gray-300 leading-relaxed">{verdict}</p>
      </div>
    </BaseTemplate>
  )
}