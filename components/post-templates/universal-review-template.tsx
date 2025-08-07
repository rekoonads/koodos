import BaseTemplate from "./base-template"
import { Star, ThumbsUp, ThumbsDown, Gamepad2, Film, Tv, Smartphone } from "lucide-react"

interface UniversalReviewTemplateProps {
  title: string
  author: string
  publishedAt: string
  readTime: string
  content: string
  rating: number
  pros?: string[]
  cons?: string[]
  verdict: string
  reviewType: "game" | "movie" | "tv" | "tech"
}

export default function UniversalReviewTemplate({
  title,
  author,
  publishedAt,
  readTime,
  content,
  rating,
  pros = [],
  cons = [],
  verdict,
  reviewType
}: UniversalReviewTemplateProps) {
  const getIcon = () => {
    switch (reviewType) {
      case "game": return <Gamepad2 className="w-6 h-6" />
      case "movie": return <Film className="w-6 h-6" />
      case "tv": return <Tv className="w-6 h-6" />
      case "tech": return <Smartphone className="w-6 h-6" />
    }
  }

  const getColor = () => {
    switch (reviewType) {
      case "game": return "bg-purple-600"
      case "movie": return "bg-red-600"
      case "tv": return "bg-blue-600"
      case "tech": return "bg-green-600"
    }
  }

  return (
    <BaseTemplate
      title={title}
      category={`${reviewType.toUpperCase()} REVIEW`}
      author={author}
      publishedAt={publishedAt}
      readTime={readTime}
      categoryColor={getColor()}
    >
      <div className="bg-gray-900 rounded-lg p-6 mb-8">
        <div className="flex items-center gap-4 mb-4">
          {getIcon()}
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