import Image from "next/image"
import Link from "next/link"

interface ArticleCardProps {
  id: string
  title: string
  excerpt: string
  image: string
  category: string
  author: string
  publishedAt: string
  readTime: string
}

export default function ArticleCard({
  id,
  title,
  excerpt,
  image,
  category,
  author,
  publishedAt,
  readTime,
}: ArticleCardProps) {
  return (
    <Link href={`/article/${id}`}>
      <article className="group cursor-pointer bg-gray-800 rounded-lg overflow-hidden hover:bg-gray-750 transition-colors">
        <div className="relative h-40 lg:h-48">
          <Image
            src={image || "/placeholder.svg"}
            alt={title}
            fill
            className="object-cover group-hover:scale-105 transition-transform"
          />
          <div className="absolute top-3 left-3 lg:top-4 lg:left-4">
            <span className="bg-red-600 text-white px-2 py-1 text-xs font-semibold rounded">{category}</span>
          </div>
        </div>
        <div className="p-3 lg:p-4">
          <h3 className="text-white font-bold text-sm lg:text-lg mb-2 group-hover:text-red-400 transition-colors line-clamp-2">{title}</h3>
          <p className="text-gray-400 text-xs lg:text-sm mb-3 line-clamp-2">{excerpt}</p>
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-1 lg:gap-0 text-xs text-gray-500">
            <span className="truncate">By {author}</span>
            <span className="text-xs">
              {publishedAt}{readTime && ` • ${readTime}`}
            </span>
          </div>
        </div>
      </article>
    </Link>
  )
}
