"use client"

import PageLayout from "@/components/page-layout"
import Image from "next/image"
import Link from "next/link"
import { ChevronRight } from "lucide-react"

interface ListCardProps {
  id: string
  title: string
  itemCount: number
  thumbnail: string
  category: string
  publishedAt: string
  author: string
}

function ListCard({ id, title, itemCount, thumbnail, category, publishedAt, author }: ListCardProps) {
  return (
    <Link href={`/lists/${id}`}>
      <article className="group cursor-pointer bg-gray-800 rounded-lg overflow-hidden hover:bg-gray-750 transition-colors">
        <div className="relative h-48">
          <Image
            src={thumbnail || "/placeholder.svg"}
            alt={title}
            fill
            className="object-cover group-hover:scale-105 transition-transform"
          />
          <div className="absolute top-4 left-4">
            <span className="bg-red-600 text-white px-2 py-1 text-xs font-semibold rounded">{category}</span>
          </div>
          <div className="absolute bottom-4 right-4 bg-black/80 text-white px-3 py-1 rounded-full text-sm font-bold">
            {itemCount} Items
          </div>
        </div>
        <div className="p-4">
          <h3 className="text-white font-bold text-lg mb-2 group-hover:text-red-400 transition-colors flex items-center justify-between">
            {title}
            <ChevronRight className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity" />
          </h3>
          <div className="flex items-center justify-between text-xs text-gray-500">
            <span>By {author}</span>
            <span>{publishedAt}</span>
          </div>
        </div>
      </article>
    </Link>
  )
}

const lists = [
  {
    id: "1",
    title: "Top 25 RPGs of All Time",
    itemCount: 25,
    thumbnail: "/placeholder.svg?height=300&width=400",
    category: "Best Of",
    publishedAt: "1 week ago",
    author: "RPG Expert",
  },
  {
    id: "2",
    title: "10 Games That Changed Everything",
    itemCount: 10,
    thumbnail: "/placeholder.svg?height=300&width=400",
    category: "History",
    publishedAt: "3 days ago",
    author: "Gaming Historian",
  },
  {
    id: "3",
    title: "Best Gaming Headsets Under $100",
    itemCount: 15,
    thumbnail: "/placeholder.svg?height=300&width=400",
    category: "Buying Guide",
    publishedAt: "5 days ago",
    author: "Hardware Reviewer",
  },
]

export default function ListsPage() {
  return (
    <PageLayout title="Lists" description="Curated lists, rankings, and buying guides for gamers">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {lists.map((list) => (
          <ListCard key={list.id} {...list} />
        ))}
      </div>
    </PageLayout>
  )
}
