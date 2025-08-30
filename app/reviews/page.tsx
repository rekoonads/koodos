import { getPageMeta, generateMetaTags } from "@/lib/seo-meta"
import { ReviewsPageClient } from "@/components/reviews-page-client"
import { Metadata } from "next"

export async function generateMetadata(): Promise<Metadata> {
  const meta = await getPageMeta('reviews')
  return generateMetaTags(meta) || {
    title: 'Reviews - Koodos Gaming',
    description: 'Expert game reviews, movie reviews, tech reviews and more. In-depth analysis and ratings.'
  }
}

export default function ReviewsPage() {
  return <ReviewsPageClient />
}