import { Badge } from "@/components/ui/badge"
import { Sidebar } from "@/components/sidebar"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Monitor, Cpu, HardDrive, Zap, Settings, TrendingUp } from "lucide-react"
import { AnimatedBackground } from "@/components/graphics/animated-background"
import { GamingIcons } from "@/components/graphics/gaming-icons"

export default function PCGamingPage() {
  const pcContent = [
    {
      title: "RTX 4090 Gaming Performance",
      category: "Hardware Review",
      icon: <Zap className="w-6 h-6" />,
      description: "Ultimate 4K gaming performance with the latest NVIDIA flagship GPU",
      color: "from-green-600 to-blue-600",
    },
    {
      title: "Budget Gaming PC Build 2024",
      category: "PC Builds",
      icon: <Cpu className="w-6 h-6" />,
      description: "Build a powerful gaming PC for under $800 with these components",
      color: "from-blue-600 to-purple-600",
    },
    {
      title: "Gaming Monitor Buying Guide",
      category: "Hardware Guide",
      icon: <Monitor className="w-6 h-6" />,
      description: "Everything you need to know about choosing the perfect gaming monitor",
      color: "from-purple-600 to-pink-600",
    },
    {
      title: "SSD vs HDD for Gaming",
      category: "Performance",
      icon: <HardDrive className="w-6 h-6" />,
      description: "How storage affects gaming performance and load times",
      color: "from-orange-600 to-red-600",
    },
    {
      title: "Windows Gaming Optimization",
      category: "Optimization",
      icon: <Settings className="w-6 h-6" />,
      description: "Maximize your PC's gaming performance with these tweaks",
      color: "from-teal-600 to-cyan-600",
    },
    {
      title: "PC Gaming Trends 2024",
      category: "Industry",
      icon: <TrendingUp className="w-6 h-6" />,
      description: "The latest trends shaping the PC gaming landscape",
      color: "from-indigo-600 to-purple-600",
    },
  ]

  return (
    <div className="min-h-screen bg-black">
      <div className="flex">
        <Sidebar />
        <div className="flex-1 ml-64">
          <main className="bg-gray-900 min-h-screen relative">
            <AnimatedBackground />
            <div className="relative bg-gradient-to-r from-blue-900/50 via-purple-900/50 to-cyan-900/50 py-16 px-6">
              <div className="max-w-4xl mx-auto text-center">
                <div className="flex items-center justify-center gap-4 mb-4">
                  <Monitor className="w-10 h-10 text-blue-400" />
                  <h1 className="text-4xl font-bold text-white">PC Gaming</h1>
                  <Cpu className="w-10 h-10 text-purple-400" />
                </div>
                <p className="text-xl text-gray-200 mb-6">
                  Master race headquarters - Hardware reviews, builds, optimization, and exclusive PC gaming content
                </p>
                <GamingIcons className="justify-center" />
              </div>
            </div>

            <div className="px-6 py-8 relative z-10">
              <div className="border-b-2 border-blue-500 pb-2 inline-block mb-6">
                <h2 className="text-2xl font-bold text-white">PC Gaming Content</h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {pcContent.map((item, index) => (
                  <Card
                    key={index}
                    className="bg-gray-800 border border-gray-700 hover:shadow-lg hover:shadow-blue-500/20 transition-all group overflow-hidden"
                  >
                    <div className={`h-2 bg-gradient-to-r ${item.color}`} />
                    <CardHeader className="pb-3">
                      <div className="flex items-center gap-3 mb-2">
                        <div className={`p-2 rounded-lg bg-gradient-to-r ${item.color} text-white`}>{item.icon}</div>
                        <Badge className="bg-gray-700 text-gray-300 text-xs">{item.category}</Badge>
                      </div>
                      <CardTitle className="text-white group-hover:text-blue-300 transition-colors">
                        {item.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-300 text-sm">{item.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
            <Footer />
          </main>
        </div>
      </div>
    </div>
  )
}
