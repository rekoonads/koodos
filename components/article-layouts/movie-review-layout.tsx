"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Play, Calendar, Clock, Users } from "lucide-react"
import { VideoPlayer } from "@/components/video-player"

interface MovieReviewProps {
  article: any
  movieData: {
    rating: number
    imdbRating: number
    rottenTomatoesScore: number
    director: string
    cast: Array<{ name: string; character: string; image: string }>
    genre: string[]
    runtime: string
    releaseDate: string
    trailerUrl: string
    posterImage: string
    scores: {
      acting: number
      direction: number
      cinematography: number
      story: number
      soundtrack: number
    }
  }
}

export function MovieReviewLayout({ article, movieData }: MovieReviewProps) {
  const overallScore =
    Object.values(movieData.scores).reduce((a, b) => a + b, 0) / Object.values(movieData.scores).length

  return (
    <div className="space-y-8">
      {/* Movie Info Banner */}
      <Card className="bg-gradient-to-r from-red-600 to-pink-600 text-white overflow-hidden">
        <CardContent className="p-0">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-0">
            <div className="lg:col-span-2 p-8">
              <div className="mb-6">
                <h2 className="text-4xl font-bold mb-2">{article.title}</h2>
                <p className="text-white/80 text-lg">Directed by {movieData.director}</p>
              </div>

              <div className="grid grid-cols-2 gap-6 mb-6">
                <div>
                  <p className="text-white/80 text-sm mb-1">Release Date</p>
                  <div className="flex items-center space-x-2">
                    <Calendar className="w-4 h-4" />
                    <span className="font-semibold">{movieData.releaseDate}</span>
                  </div>
                </div>
                <div>
                  <p className="text-white/80 text-sm mb-1">Runtime</p>
                  <div className="flex items-center space-x-2">
                    <Clock className="w-4 h-4" />
                    <span className="font-semibold">{movieData.runtime}</span>
                  </div>
                </div>
              </div>

              <div className="mb-6">
                <p className="text-white/80 text-sm mb-2">Genres</p>
                <div className="flex flex-wrap gap-2">
                  {movieData.genre.map((genre) => (
                    <Badge key={genre} className="bg-white/20 text-white border-white/30">
                      {genre}
                    </Badge>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-3 gap-4">
                <div className="text-center">
                  <div className="text-3xl font-bold">{movieData.rating}</div>
                  <div className="text-white/80 text-sm">Our Rating</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold">{movieData.imdbRating}</div>
                  <div className="text-white/80 text-sm">IMDB</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold">{movieData.rottenTomatoesScore}%</div>
                  <div className="text-white/80 text-sm">Rotten Tomatoes</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <img
                src={movieData.posterImage || "/placeholder.svg?height=600&width=400"}
                alt="Movie Poster"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Trailer */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Play className="w-5 h-5" />
            <span>Official Trailer</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <VideoPlayer src={movieData.trailerUrl} poster={movieData.posterImage} title="Official Trailer" />
        </CardContent>
      </Card>

      {/* Cast */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Users className="w-5 h-5" />
            <span>Cast</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {movieData.cast.map((actor, index) => (
              <div key={index} className="text-center">
                <div className="aspect-square rounded-lg overflow-hidden mb-3">
                  <img
                    src={actor.image || "/placeholder.svg?height=200&width=200"}
                    alt={actor.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h4 className="font-semibold text-sm">{actor.name}</h4>
                <p className="text-gray-600 text-xs">{actor.character}</p>
              </div>
            ))}
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
            {Object.entries(movieData.scores).map(([category, score]) => (
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
                <span className="text-2xl font-bold text-red-600">{overallScore.toFixed(1)}/10</span>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
