import { Badge } from "@/components/ui/badge"
import { Calendar, Clock, User } from "lucide-react"

interface NewsArticleLayoutProps {
  article: any
  theme: any
}

export function NewsArticleLayout({ article, theme }: NewsArticleLayoutProps) {
  return (
    <div className="news-article-layout">
      {/* Hero Section */}
      <div
        className={`relative bg-gradient-to-br ${theme.gradientFrom} ${theme.gradientTo} text-white rounded-xl p-8 mb-8`}
      >
        <div className="absolute inset-0 bg-black/20 rounded-xl"></div>
        <div className="relative">
          <Badge className={`${theme.accentColor} text-white mb-4`}>{article.category}</Badge>
          <h1 className="text-3xl font-bold mb-4">{article.title}</h1>
          <p className="text-lg opacity-90 mb-6">{article.excerpt}</p>

          <div className="flex flex-wrap items-center gap-4 text-sm">
            <div className="flex items-center gap-2">
              <User className="w-4 h-4" />
              <span>{article.author.name}</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              <span>{new Date(article.publishedAt).toLocaleDateString()}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <span>{article.readTime}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Key Points */}
      <div
        className={`${theme.bgColor} rounded-lg p-6 mb-8 border-l-4 ${theme.borderColor.replace("border-", "border-l-")}`}
      >
        <h3 className={`text-lg font-bold ${theme.textColor} mb-3`}>Key Highlights</h3>
        <ul className="space-y-2 text-gray-700">
          <li>• Breaking news in the gaming industry</li>
          <li>• Latest updates and announcements</li>
          <li>• Expert analysis and insights</li>
          <li>• Community reactions and impact</li>
        </ul>
      </div>
    </div>
  )
}
