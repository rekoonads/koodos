import React from 'react'
import {
  Card,
  CardContent,
  CardHeader,
} from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Star, Clock } from 'lucide-react'

const GameGuidesPage = () => {
  const gameGuides = [
    {
      title: "Baldur's Gate 3: Complete Romance Guide",
      game: "Baldur's Gate 3",
      difficulty: "Intermediate",
      readTime: "12 min read",
      rating: 4.8,
      excerpt: "Master all romance options and relationship mechanics in Baldur's Gate 3.",
      image: "/bg3-romance-guide.png",
    },
    {
      title: "Elden Ring: All Secret Boss Locations",
      game: "Elden Ring",
      difficulty: "Advanced",
      readTime: "18 min read",
      rating: 4.9,
      excerpt: "Find every hidden boss in the Lands Between with detailed maps and strategies.",
      image: "/elden-ring-bosses.png",
    },
    {
      title: "Cyberpunk 2077: Best Build Guide",
      game: "Cyberpunk 2077",
      difficulty: "Beginner",
      readTime: "8 min read",
      rating: 4.6,
      excerpt: "Create the most powerful character builds for different playstyles.",
      image: "/cyberpunk-builds.png",
    },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="ml-64">
        <main className="p-6">
          <div className="max-w-6xl mx-auto">
            <h1 className="text-3xl font-bold text-gray-900 mb-6">Game Guides</h1>
            <p className="text-gray-600 mb-8">
              Detailed guides for specific games to help you master every aspect of your favorite titles.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {gameGuides.map((guide, index) => (
                <Card key={index} className="overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
                  <CardHeader className="p-0">
                    <img
                      src={guide.image}
                      alt={guide.title}
                      className="w-full h-48 object-cover"
                    />
                  </CardHeader>
                  <CardContent className="p-6">
                    <h2 className="text-xl font-semibold text-gray-800 mb-2">{guide.title}</h2>
                    <p className="text-gray-600 mb-4">{guide.excerpt}</p>
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center space-x-1">
                        <Star className="w-4 h-4 text-yellow-500" />
                        <span>{guide.rating}</span>
                      </div>
                      <p className="text-sm text-gray-500">{guide.game}</p>
                    </div>
                    <div className="flex items-center justify-between text-xs text-gray-500">
                      <div className="flex items-center space-x-1">
                        <Clock className="w-4 h-4" />
                        <span>{guide.readTime}</span>
                      </div>
                      <Badge
                        variant={
                          guide.difficulty === "Beginner"
                            ? "secondary"
                            : guide.difficulty === "Advanced"
                              ? "destructive"
                              : "default"
                        }
                      >
                        {guide.difficulty}
                      </Badge>
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

export default GameGuidesPage