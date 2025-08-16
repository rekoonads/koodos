import { Sidebar } from "@/components/sidebar"
import { Header } from "@/components/header"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Trophy, TrendingUp, Calendar } from "lucide-react"

export default function TopListsPage() {
  const topLists = [
    {
      title: "Top 10 Games of 2024",
      category: "Annual Rankings",
      items: 10,
      views: "45K views",
      lastUpdated: "1 week ago",
      excerpt: "Our definitive ranking of the best games released this year.",
      image: "/top-games-2024-list.png",
      icon: Trophy,
    },
    {
      title: "Best Gaming Laptops Under $1500",
      category: "Hardware",
      items: 8,
      views: "32K views",
      lastUpdated: "3 days ago",
      excerpt: "The most powerful gaming laptops that won't break the bank.",
      image: "/gaming-laptops-list.png",
      icon: TrendingUp,
    },
    {
      title: "Most Anticipated Games of 2025",
      category: "Upcoming",
      items: 15,
      views: "28K views",
      lastUpdated: "2 days ago",
      excerpt: "Games we can't wait to play in the coming year.",
      image: "/anticipated-games-2025.png",
      icon: Calendar,
    },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <Sidebar />
      <div className="ml-64">
        <Header />
        <main className="p-6">
          <div className="max-w-6xl mx-auto">
            <h1 className="text-3xl font-bold text-gray-900 mb-6">Top Lists</h1>
            <p className="text-gray-600 mb-8">
              Curated rankings and lists of the best games, hardware, and gaming content.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {topLists.map((list, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow cursor-pointer">
                  <CardHeader className="p-0 relative">
                    <img
                      src={list.image || "/placeholder.svg"}
                      alt={list.title}
                      className="w-full h-48 object-cover rounded-t-lg"
                    />
                    <div className="absolute top-4 left-4">
                      <div className="bg-black bg-opacity-70 text-white px-2 py-1 rounded flex items-center space-x-1">
                        <list.icon className="w-4 h-4" />
                        <span className="text-sm font-medium">{list.items} Items</span>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-2">
                      <Badge variant="outline">{list.category}</Badge>
                      <span className="text-xs text-gray-500">{list.views}</span>
                    </div>
                    <CardTitle className="text-lg mb-2">{list.title}</CardTitle>
                    <p className="text-gray-600 text-sm mb-3">{list.excerpt}</p>
                    <p className="text-xs text-gray-500">Updated {list.lastUpdated}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
