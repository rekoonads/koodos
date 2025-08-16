import { Sidebar } from "@/components/sidebar"
import { Header } from "@/components/header"
import { Card, CardContent, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { MessageSquare, TrendingUp, Clock } from "lucide-react"

export default function DiscussionsPage() {
  const discussions = [
    {
      title: "The Future of Gaming: VR vs Traditional Gaming",
      author: "TechVisionary",
      replies: 89,
      views: 1247,
      category: "Technology",
      isHot: true,
      lastActivity: "15 minutes ago",
    },
    {
      title: "Indie Games That Deserve More Recognition",
      author: "IndieSupporter",
      replies: 34,
      views: 567,
      category: "Indie Games",
      isHot: false,
      lastActivity: "1 hour ago",
    },
    {
      title: "Console Wars: PS5 vs Xbox Series X in 2024",
      author: "ConsoleGuru",
      replies: 156,
      views: 2341,
      category: "Console Gaming",
      isHot: true,
      lastActivity: "30 minutes ago",
    },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <Sidebar />
      <div className="ml-64">
        <Header />
        <main className="p-6">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h1 className="text-3xl font-bold text-gray-900 mb-2">Discussions</h1>
                <p className="text-gray-600">
                  Engage in meaningful conversations about gaming topics that matter to you.
                </p>
              </div>
              <Button className="bg-purple-600 hover:bg-purple-700">Start Discussion</Button>
            </div>

            <div className="space-y-4">
              {discussions.map((discussion, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow cursor-pointer">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center space-x-3 mb-2">
                          <Badge variant="outline">{discussion.category}</Badge>
                          {discussion.isHot && (
                            <Badge variant="destructive" className="flex items-center space-x-1">
                              <TrendingUp className="w-3 h-3" />
                              <span>Hot</span>
                            </Badge>
                          )}
                        </div>
                        <CardTitle className="text-xl mb-2">{discussion.title}</CardTitle>
                        <div className="flex items-center space-x-4 text-sm text-gray-500">
                          <span>by {discussion.author}</span>
                          <div className="flex items-center space-x-1">
                            <MessageSquare className="w-4 h-4" />
                            <span>{discussion.replies} replies</span>
                          </div>
                          <span>{discussion.views} views</span>
                          <div className="flex items-center space-x-1">
                            <Clock className="w-4 h-4" />
                            <span>{discussion.lastActivity}</span>
                          </div>
                        </div>
                      </div>
                    </div>
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
