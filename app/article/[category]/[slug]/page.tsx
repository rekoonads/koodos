import { redirect } from 'next/navigation'

interface PageProps {
  params: { category: string; slug: string }
}

export default function CategoryArticlePage({ params }: PageProps) {
  redirect(`/article/news/${params.slug}`)
}