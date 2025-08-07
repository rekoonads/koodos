import NewsTemplate from "./news-template"
import UniversalReviewTemplate from "./universal-review-template"
import GamingTemplate from "./gaming-template"
import BaseTemplate from "./base-template"

export interface PostData {
  title: string
  author: string
  publishedAt: string
  readTime: string
  content: string
  category: string
  // News specific
  tags?: string[]
  breaking?: boolean
  // Review specific
  rating?: number
  pros?: string[]
  cons?: string[]
  verdict?: string
  reviewType?: "game" | "movie" | "tv" | "tech"
  // Gaming specific
  platform?: string
  specs?: {
    cpu?: string
    gpu?: string
    ram?: string
    storage?: string
  }
  gameInfo?: {
    developer?: string
    publisher?: string
    releaseDate?: string
    genre?: string
  }
}

interface TemplateSelectorProps {
  data: PostData
}

export default function TemplateSelector({ data }: TemplateSelectorProps) {
  const { category } = data

  switch (category.toLowerCase()) {
    case "news":
      return (
        <NewsTemplate
          title={data.title}
          author={data.author}
          publishedAt={data.publishedAt}
          readTime={data.readTime}
          content={data.content}
          tags={data.tags}
          breaking={data.breaking}
        />
      )

    case "review":
      return (
        <UniversalReviewTemplate
          title={data.title}
          author={data.author}
          publishedAt={data.publishedAt}
          readTime={data.readTime}
          content={data.content}
          rating={data.rating || 0}
          pros={data.pros}
          cons={data.cons}
          verdict={data.verdict || ""}
          reviewType={data.reviewType || "game"}
        />
      )

    case "gaming":
      // Gaming hub can contain news or reviews
      if (data.rating && data.verdict) {
        return (
          <UniversalReviewTemplate
            title={data.title}
            author={data.author}
            publishedAt={data.publishedAt}
            readTime={data.readTime}
            content={data.content}
            rating={data.rating}
            pros={data.pros}
            cons={data.cons}
            verdict={data.verdict}
            reviewType="game"
          />
        )
      }
      return (
        <GamingTemplate
          title={data.title}
          author={data.author}
          publishedAt={data.publishedAt}
          readTime={data.readTime}
          content={data.content}
          platform={data.platform}
          specs={data.specs}
          gameInfo={data.gameInfo}
        />
      )

    default:
      return (
        <BaseTemplate
          title={data.title}
          category={data.category}
          author={data.author}
          publishedAt={data.publishedAt}
          readTime={data.readTime}
        >
          <div dangerouslySetInnerHTML={{ __html: data.content }} />
        </BaseTemplate>
      )
  }
}