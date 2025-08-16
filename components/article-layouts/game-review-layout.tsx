"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Star, Play, ThumbsUp, ThumbsDown, Trophy, Gamepad2 } from "lucide-react"
import { VideoPlayer } from "@/components/video-player"

interface GameReviewProps {
  article: any
  gameData: {
    rating: number
    platforms: string[]
    genre: string[]
    developer: string
    publisher: string
    releaseDate: string
    screenshots: string[]
    gameplayVideo: string
    pros: string[]
    cons: string[]
    scores: {
      graphics: number
      gameplay: number
      story: number
      sound: number
      replayability: number
    }
  }
}

export function GameReviewLayout({ article, gameData }: GameReviewProps) {
  const [activeScreenshot, setActiveScreenshot] = useState(0)

  const overallScore = Object.values(gameData.scores).reduce((a, b) => a + b, 0) / Object.values(gameData.scores).length

  return (
    <div className="space-y-8">
      {/* Game Info Card */}
      <Card className="bg-gradient-to-r from-purple-600 to-pink-600 text-white">
        <CardContent className="p-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <div className="flex items-center space-x-4 mb-4">
                <div className="bg-white/20 p-3 rounded-lg">
                  <Gamepad2 className="w-8 h-8" />
                </div>
                <div>
                  <h2 className="text-3xl font-bold">{article.title}</h2>
                  <p className="text-white/80">{gameData.developer}</p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 mb-6">
                <div>
                  <p className="text-white/80 text-sm">Publisher</p>
                  <p className="font-semibold">{gameData.publisher}</p>
                </div>
                <div>
                  <p className="text-white/80 text-sm">Release Date</p>
                  <p className="font-semibold">{gameData.releaseDate}</p>
                </div>
              </div>

              <div className="mb-6">
                <p className="text-white/80 text-sm mb-2">Platforms</p>
                <div className="flex flex-wrap gap-2">
                  {gameData.platforms.map((platform) => (
                    <Badge key={platform} className="bg-white/20 text-white border-white/30">
                      {platform}
                    </Badge>
                  ))}
                </div>
              </div>

              <div>
                <p className="text-white/80 text-sm mb-2">Genres</p>
                <div className="flex flex-wrap gap-2">
                  {gameData.genre.map((genre) => (
                    <Badge key={genre} className="bg-white/20 text-white border-white/30">
                      {genre}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex flex-col items-center justify-center">
              <div className="text-center mb-6">
                <div className="text-6xl font-bold mb-2">{gameData.rating}</div>
                <div className="flex items-center justify-center mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-6 h-6 ${
                        i < Math.floor(gameData.rating / 2) ? "fill-yellow-400 text-yellow-400" : "text-white/40"
                      }`}
                    />
                  ))}
                </div>
                <p className="text-white/80">Out of 10</p>
              </div>

              <div className="bg-white/20 rounded-lg p-4 w-full">
                <div className="flex items-center justify-center space-x-4">
                  <Trophy className="w-6 h-6 text-yellow-400" />
                  <span className="font-semibold">Editor's Choice</span>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Gameplay Video */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Play className="w-5 h-5" />
            <span>Gameplay Video</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <VideoPlayer src={gameData.gameplayVideo} poster={article.featuredImage} title="Gameplay Video" />
        </CardContent>
      </Card>

      {/* Screenshots Gallery */}
      <Card>
        <CardHeader>
          <CardTitle>Screenshots</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="aspect-video rounded-lg overflow-hidden">
              <img
                src={gameData.screenshots[activeScreenshot] || "/placeholder.svg?height=400&width=800"}
                alt={`Screenshot ${activeScreenshot + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="grid grid-cols-4 gap-2">
              {gameData.screenshots.map((screenshot, index) => (
                <button
                  key={index}
                  onClick={() => setActiveScreenshot(index)}
                  className={`aspect-video rounded-lg overflow-hidden border-2 transition-colors ${
                    activeScreenshot === index ? "border-purple-500" : "border-gray-200"
                  }`}
                >
                  <img
                    src={screenshot || "/placeholder.svg?height=100&width=200"}
                    alt={`Screenshot ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Review Scores */}
      <Card>
        <CardHeader>
          <CardTitle>Review Breakdown</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {Object.entries(gameData.scores).map(([category, score]) => (
              <div key={category} className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="font-medium capitalize">{category}</span>
                  <span className="text-sm text-gray-600">{score}/10</span>
                </div>
                <Progress value={score * 10} className="h-2" />
              </div>
            ))}
            <div className="pt-4 border-t">
              <div className="flex justify-between items-center">
                <span className="font-bold text-lg">Overall Score</span>
                <span className="text-2xl font-bold text-purple-600">{overallScore.toFixed(1)}/10</span>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Pros and Cons */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2 text-green-600">
              <ThumbsUp className="w-5 h-5" />
              <span>Pros</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              {gameData.pros.map((pro, index) => (
                <li key={index} className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0" />
                  <span>{pro}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2 text-red-600">
              <ThumbsDown className="w-5 h-5" />
              <span>Cons</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              {gameData.cons.map((con, index) => (
                <li key={index} className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0" />
                  <span>{con}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
