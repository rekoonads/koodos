"use client"

import { GameReviewLayout } from "@/components/article-layouts/game-review-layout"
import { MovieReviewLayout } from "@/components/article-layouts/movie-review-layout"
import { TechReviewLayout } from "@/components/article-layouts/tech-review-layout"
import { NewsArticleLayout } from "@/components/article-layouts/news-article-layout"
import { InterviewLayout } from "@/components/article-layouts/interview-layout"
import { GuideLayout } from "@/components/article-layouts/guide-layout"
import { OpinionLayout } from "@/components/article-layouts/opinion-layout"
import { VideoLayout } from "@/components/article-layouts/video-layout"

interface TemplateEngineProps {
  article: any
  categoryData?: any
}

// Category theme configurations
export const categoryThemes = {
  "Game Reviews": {
    primaryColor: "purple",
    gradientFrom: "from-purple-900",
    gradientTo: "to-pink-900",
    accentColor: "bg-purple-600",
    textColor: "text-purple-800",
    borderColor: "border-purple-200",
    bgColor: "bg-purple-50",
  },
  "Movie Reviews": {
    primaryColor: "red",
    gradientFrom: "from-red-900",
    gradientTo: "to-pink-900",
    accentColor: "bg-red-600",
    textColor: "text-red-800",
    borderColor: "border-red-200",
    bgColor: "bg-red-50",
  },
  "Tech Reviews": {
    primaryColor: "blue",
    gradientFrom: "from-blue-900",
    gradientTo: "to-cyan-900",
    accentColor: "bg-blue-600",
    textColor: "text-blue-800",
    borderColor: "border-blue-200",
    bgColor: "bg-blue-50",
  },
  Gaming: {
    primaryColor: "indigo",
    gradientFrom: "from-indigo-900",
    gradientTo: "to-purple-900",
    accentColor: "bg-indigo-600",
    textColor: "text-indigo-800",
    borderColor: "border-indigo-200",
    bgColor: "bg-indigo-50",
  },
  Tech: {
    primaryColor: "cyan",
    gradientFrom: "from-slate-900",
    gradientTo: "to-cyan-900",
    accentColor: "bg-cyan-600",
    textColor: "text-cyan-800",
    borderColor: "border-cyan-200",
    bgColor: "bg-cyan-50",
  },
  Interviews: {
    primaryColor: "emerald",
    gradientFrom: "from-emerald-900",
    gradientTo: "to-teal-900",
    accentColor: "bg-emerald-600",
    textColor: "text-emerald-800",
    borderColor: "border-emerald-200",
    bgColor: "bg-emerald-50",
  },
  Guides: {
    primaryColor: "orange",
    gradientFrom: "from-orange-900",
    gradientTo: "to-red-900",
    accentColor: "bg-orange-600",
    textColor: "text-orange-800",
    borderColor: "border-orange-200",
    bgColor: "bg-orange-50",
  },
  Opinions: {
    primaryColor: "violet",
    gradientFrom: "from-violet-900",
    gradientTo: "to-purple-900",
    accentColor: "bg-violet-600",
    textColor: "text-violet-800",
    borderColor: "border-violet-200",
    bgColor: "bg-violet-50",
  },
  Videos: {
    primaryColor: "rose",
    gradientFrom: "from-rose-900",
    gradientTo: "to-pink-900",
    accentColor: "bg-rose-600",
    textColor: "text-rose-800",
    borderColor: "border-rose-200",
    bgColor: "bg-rose-50",
  },
  Default: {
    primaryColor: "gray",
    gradientFrom: "from-gray-900",
    gradientTo: "to-slate-900",
    accentColor: "bg-gray-600",
    textColor: "text-gray-800",
    borderColor: "border-gray-200",
    bgColor: "bg-gray-50",
  },
}

export function TemplateEngine({ article, categoryData }: TemplateEngineProps) {
  const getTemplate = () => {
    const category = article.category || "Default"
    const theme = categoryThemes[category as keyof typeof categoryThemes] || categoryThemes.Default

    switch (category) {
      case "Game Reviews":
        return <GameReviewLayout article={article} gameData={categoryData} theme={theme} />
      case "Movie Reviews":
        return <MovieReviewLayout article={article} movieData={categoryData} theme={theme} />
      case "Tech Reviews":
        return <TechReviewLayout article={article} techData={categoryData} theme={theme} />
      case "Gaming":
      case "Latest Updates":
        return <NewsArticleLayout article={article} theme={theme} />
      case "Interviews":
        return <InterviewLayout article={article} interviewData={categoryData} theme={theme} />
      case "Guides":
      case "Game Guides":
      case "Tech Tutorials":
        return <GuideLayout article={article} guideData={categoryData} theme={theme} />
      case "Opinions":
      case "Editorials":
        return <OpinionLayout article={article} theme={theme} />
      case "Videos":
      case "Trailers":
      case "Podcasts":
        return <VideoLayout article={article} videoData={categoryData} theme={theme} />
      default:
        return <NewsArticleLayout article={article} theme={categoryThemes.Default} />
    }
  }

  return <div className="article-template">{getTemplate()}</div>
}
