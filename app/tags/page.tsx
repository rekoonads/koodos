import { Sidebar } from "@/components/sidebar"
import { TagFilters } from "@/components/tag-filters"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { TagIcon, TrendingUp, Hash } from "lucide-react"
import Link from "next/link"

export default function TagsPage() {
  // Mock tag cloud data
  const tagCloud = [
    { name: "RPG", count: 45, size: "text-2xl", color: "text-blue-600" },
    { name: "PC Gaming", count: 38, size: "text-xl", color: "text-green-600" },
    { name: "Hardware", count: 32, size: "text-lg", color: "text-purple-600" },
    { name: "Reviews", count: 28, size: "text-lg", color: "text-red-600" },
    { name: "Gaming Industry", count: 25, size: "text-base", color: "text-yellow-600" },
    { name: "Technology", count: 22, size: "text-base", color: "text-indigo-600" },
    { name: "Esports", count: 20, size: "text-base", color: "text-pink-600" },
    { name: "Indie Games", count: 18, size: "text-sm", color: "text-teal-600" },
    { name: "PlayStation", count: 16, size: "text-sm", color: "text-blue-500" },
    { name: "Xbox", count: 15, size: "text-sm", color: "text-green-500" },
    { name: "Nintendo", count: 14, size: "text-sm", color: "text-red-500" },
    { name: "Mobile Gaming", count: 12, size: "text-sm", color: "text-orange-500" },
  ]

  const trendingTags = [
    { name: "Cyberpunk 2077", count: 15, growth: "+25%" },
    { name: "Steam Deck", count: 12, growth: "+40%" },
    { name: "AI Gaming", count: 10, growth: "+60%" },
    { name: "VR Gaming", count: 8, growth: "+30%" },
    { name: "Cloud Gaming", count: 7, growth: "+50%" },
  ]

  const categories = [
    { name: "Genres", tags: ["RPG", "Action", "Strategy", "Simulation", "Sports"], icon: "🎮" },
    { name: "Platforms", tags: ["PC", "PlayStation", "Xbox", "Nintendo", "Mobile"], icon: "💻" },
    { name: "Topics", tags: ["Reviews", "News", "Guides", "Hardware", "Industry"], icon: "📰" },
    { name: "Companies", tags: ["Sony", "Microsoft", "Nintendo", "Valve", "Epic Games"], icon: "🏢" },
  ]

  return (
    <div className="min-h-screen bg-black">
      <Sidebar />

      <main className="ml-64 bg-gray-50 min-h-screen">
        <div className="bg-gradient-to-r from-indigo-600 to-purple-600 py-12 px-6">
          <div className="max-w-6xl mx-auto text-center">
            <div className="flex items-center justify-center gap-3 mb-4">
              <TagIcon className="w-8 h-8 text-white" />
              <h1 className="text-4xl font-bold text-white">Browse by Tags</h1>
            </div>
            <p className="text-indigo-100 text-lg">
              Discover gaming content organized by topics, genres, platforms, and more
            </p>
          </div>
        </div>

        <div className="max-w-6xl mx-auto px-6 py-8">
          <TagFilters />

          {/* Tag Cloud */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Hash className="w-5 h-5" />
                Tag Cloud
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-4 items-center justify-center py-8">
                {tagCloud.map((tag) => (
                  <Link
                    key={tag.name}
                    href={`/tags/${tag.name.toLowerCase().replace(/\s+/g, "-")}`}
                    className={`${tag.size} ${tag.color} hover:opacity-70 transition-opacity font-medium`}
                  >
                    {tag.name}
                  </Link>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Trending Tags */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <TrendingUp className="w-5 h-5" />
                Trending Tags
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {trendingTags.map((tag) => (
                  <Link
                    key={tag.name}
                    href={`/tags/${tag.name.toLowerCase().replace(/\s+/g, "-")}`}
                    className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                  >
                    <div>
                      <span className="font-medium text-gray-900">{tag.name}</span>
                      <span className="text-sm text-gray-500 ml-2">({tag.count})</span>
                    </div>
                    <Badge variant="secondary" className="bg-green-100 text-green-800">
                      {tag.growth}
                    </Badge>
                  </Link>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Categories */}
          <div className="grid md:grid-cols-2 gap-6">
            {categories.map((category) => (
              <Card key={category.name}>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <span className="text-2xl">{category.icon}</span>
                    {category.name}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {category.tags.map((tag) => (
                      <Link key={tag} href={`/tags/${tag.toLowerCase().replace(/\s+/g, "-")}`}>
                        <Badge variant="outline" className="hover:bg-blue-50 cursor-pointer">
                          {tag}
                        </Badge>
                      </Link>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </main>
    </div>
  )
}
