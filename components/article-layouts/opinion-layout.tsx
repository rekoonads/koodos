import { Badge } from "@/components/ui/badge"
import { MessageSquare, User, Calendar } from "lucide-react"

interface OpinionLayoutProps {
  article: any
  theme: any
}

export function OpinionLayout({ article, theme }: OpinionLayoutProps) {
  return (
    <div className="opinion-layout">
      {/* Opinion Header */}
      <div
        className={`relative bg-gradient-to-br ${theme.gradientFrom} ${theme.gradientTo} text-white rounded-xl p-8 mb-8`}
      >
        <div className="absolute inset-0 bg-black/20 rounded-xl"></div>
        <div className="relative">
          <Badge className={`${theme.accentColor} text-white mb-4`}>Opinion Piece</Badge>
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
              <MessageSquare className="w-4 h-4" />
              <span>Opinion</span>
            </div>
          </div>
        </div>
      </div>

      {/* Key Points */}
      <div
        className={`${theme.bgColor} rounded-lg p-6 mb-8 border-l-4 ${theme.borderColor.replace("border-", "border-l-")}`}
      >
        <h3 className={`text-lg font-bold ${theme.textColor} mb-3`}>Key Arguments</h3>
        <ul className="space-y-2 text-gray-700">
          <li>• Editorial perspective on current industry trends</li>
          <li>• Analysis of gaming culture and community impact</li>
          <li>• Personal insights from industry experience</li>
          <li>• Future predictions and recommendations</li>
        </ul>
      </div>
    </div>
  )
}
