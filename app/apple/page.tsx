import { Sidebar } from "@/components/sidebar"
import { Header } from "@/components/header"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Smartphone, Laptop, Gamepad2 } from "lucide-react"

export default function ApplePage() {
  const appleContent = [
    {
      title: "Best iOS Games of 2024",
      category: "Mobile Gaming",
      excerpt: "Discover the top iOS games that are pushing the boundaries of mobile gaming this year.",
      icon: Smartphone,
      image: "/ios-games-2024.png",
    },
    {
      title: "Gaming on Mac: M3 Chip Performance Review",
      category: "Mac Gaming",
      excerpt: "How Apple's latest M3 chip performs with popular games and what it means for Mac gamers.",
      icon: Laptop,
      image: "/mac-m3-gaming.png",
    },
    {
      title: "Apple Arcade Hidden Gems",
      category: "Apple Arcade",
      excerpt: "Underrated Apple Arcade games that deserve your attention and subscription.",
      icon: Gamepad2,
      image: "/apple-arcade-gems.png",
    },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <Sidebar />
      <div className="ml-64">
        <Header />
        <main className="p-6">
          <div className="max-w-6xl mx-auto">
            <h1 className="text-3xl font-bold text-gray-900 mb-6">Apple Corner</h1>
            <p className="text-gray-600 mb-8">
              Everything about gaming on Apple devices - iOS, macOS, Apple Arcade, and more.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {appleContent.map((content, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow cursor-pointer">
                  <CardHeader className="p-0">
                    <img
                      src={content.image || "/placeholder.svg"}
                      alt={content.title}
                      className="w-full h-48 object-cover rounded-t-lg"
                    />
                  </CardHeader>
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-2 mb-3">
                      <content.icon className="w-5 h-5 text-gray-600" />
                      <Badge variant="outline">{content.category}</Badge>
                    </div>
                    <CardTitle className="text-lg mb-2">{content.title}</CardTitle>
                    <p className="text-gray-600 text-sm">{content.excerpt}</p>
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
