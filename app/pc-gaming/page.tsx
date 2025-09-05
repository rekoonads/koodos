import React from 'react'
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Cpu, Monitor, Mouse, Keyboard, Settings, TrendingUp } from 'lucide-react'

const PCGamingPage = () => {
  const pcContent = [
    {
      title: "RTX 4090 Gaming Performance",
      category: "Hardware Review",
      description: "Ultimate 4K gaming performance with the latest NVIDIA flagship GPU",
      color: "from-green-600 to-blue-600",
      icon: Cpu,
    },
    {
      title: "Budget Gaming PC Build 2024",
      category: "PC Builds",
      description: "Build a powerful gaming PC for under $800 with these components",
      color: "from-blue-600 to-purple-600",
      icon: Mouse,
    },
    {
      title: "Gaming Monitor Buying Guide",
      category: "Hardware Guide",
      description: "Everything you need to know about choosing the perfect gaming monitor",
      color: "from-purple-600 to-pink-600",
      icon: Monitor,
    },
    {
      title: "SSD vs HDD for Gaming",
      category: "Performance",
      description: "How storage affects gaming performance and load times",
      color: "from-orange-600 to-red-600",
      icon: Keyboard,
    },
    {
      title: "Windows Gaming Optimization",
      category: "Optimization",
      description: "Maximize your PC's gaming performance with these tweaks",
      color: "from-teal-600 to-cyan-600",
      icon: Settings,
    },
    {
      title: "PC Gaming Trends 2024",
      category: "Industry",
      description: "The latest trends shaping the PC gaming landscape",
      color: "from-indigo-600 to-purple-600",
      icon: TrendingUp,
    },
  ]

  return (
    <div className="min-h-screen bg-black">
      <div className="flex">
        <div className="flex-1 ml-64">
          <main className="bg-gray-900 min-h-screen relative">
            <div className="relative bg-gradient-to-r from-blue-900/50 via-purple-900/50 to-cyan-900/50 py-16 px-6">
              <div className="max-w-4xl mx-auto text-center">
                <div className="flex items-center justify-center gap-4 mb-4">
                  <h1 className="text-4xl font-bold text-white">PC Gaming</h1>
                </div>
                <p className="text-xl text-gray-200 mb-6">
                  Master race headquarters - Hardware reviews, builds, optimization, and exclusive PC gaming content
                </p>
              </div>
            </div>

            <div className="px-6 py-8 relative z-10">
              <div className="border-b-2 border-blue-500 pb-2 inline-block mb-6">
                <h2 className="text-2xl font-bold text-white">PC Gaming Content</h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {pcContent.map((content, index) => (
                  <Card
                    key={index}
                    className="bg-gray-800 border border-gray-700 hover:shadow-lg hover:shadow-blue-500/20 transition-all group overflow-hidden"
                  >
                    <CardHeader className="pb-3">
                      <div className="flex items-center gap-3 mb-2">
                        <div className={`p-2 rounded-full bg-gradient-to-r ${content.color}`}>
                          <content.icon className="w-6 h-6 text-white" />
                        </div>
                        <CardTitle className="text-white group-hover:text-blue-300 transition-colors">
                          {content.title}
                        </CardTitle>
                      </div>
                      <Badge variant="secondary">{content.category}</Badge>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-400">{content.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  )
}

export default PCGamingPage