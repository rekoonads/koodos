"use client"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Star } from "lucide-react"
import Image from "next/image"

interface PageProps {
  params: {
    slug: string
  }
}

async function getReview(slug: string) {
  // Mock review data
  return {
    id: "1",
    title: "Cyberpunk 2077: Phantom Liberty Review",
    slug: "cyberpunk-2077-phantom-liberty-review",
    excerpt: "CD Projekt RED's ambitious expansion finally delivers on the promise of Night City",
    author: {
      name: "Sarah Martinez",
      avatar: "/game-reviewer.png",
      bio: "Lead Game Reviewer specializing in RPGs and open-world games",
    },
    publishedAt: "2024-01-10T14:00:00Z",
    readTime: "8 min read",
    views: 25000,
    rating: 4.5,
    maxRating: 5,
    game: {
      title: "Cyberpunk 2077: Phantom Liberty",
      developer: "CD Projekt RED",
      publisher: "CD Projekt",
      releaseDate: "2023-09-26",
      platforms: ["PC", "PlayStation 5", "Xbox Series X/S"],
      genre: ["RPG", "Action", "Open World"],
      price: "$29.99",
    },
    scores: {
      story: 4.8,
      gameplay: 4.2,
      graphics: 4.7,
      sound: 4.6,
      replayValue: 4.0,
    },
    pros: [
      "Exceptional storytelling and character development",
      "Stunning visual improvements",
      "Engaging side quests with meaningful choices",
      "Improved AI and combat mechanics",
    ],
    cons: [
      "Still some minor technical issues",
      "Requires high-end hardware for best experience",
      "Limited to specific areas of Night City",
    ],
    featuredImage: "/cyberpunk-phantom-liberty.png",
    content: `
      <p>CD Projekt RED's ambitious expansion to Cyberpunk 2077 finally delivers on the promise of Night City. Phantom Liberty is a masterclass in storytelling and world-building.</p>
      
      <h2>Story & Characters</h2>
      <p>The narrative follows V as they become entangled in a web of political intrigue involving the President of the New United States. Keanu Reeves returns as Johnny Silverhand, delivering some of his best performances in the series.</p>
      
      <h2>Gameplay Improvements</h2>
      <p>The expansion introduces significant gameplay improvements, including a revamped skill system and enhanced AI behavior that makes combat more engaging than ever.</p>
      
      <h2>Visual Fidelity</h2>
      <p>Night City has never looked better. The expansion showcases stunning visual improvements that truly bring the cyberpunk aesthetic to life.</p>
    `,
  }
}

export default async function ReviewPage({ params }: PageProps) {
  const review = await getReview(params.slug)

  return (
    <div className="min-h-screen bg-background">
      <main className="max-w-4xl mx-auto px-6 py-8">
        <article>
          <header className="mb-8">
            <Badge variant="secondary" className="bg-red-100 text-red-800 mb-4">
              Game Review
            </Badge>

            <h1 className="text-4xl font-bold text-gray-900 mb-4">{review.title}</h1>

            <div className="flex items-center gap-4 mb-6">
              <div className="flex items-center gap-2">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-5 h-5 ${
                        i < Math.floor(review.rating)
                          ? "text-yellow-400 fill-current"
                          : i < review.rating
                            ? "text-yellow-400 fill-current opacity-50"
                            : "text-gray-300"
                      }`}
                    />
                  ))}
                </div>
                <span className="text-2xl font-bold text-gray-900">
                  {review.rating}/{review.maxRating}
                </span>
              </div>
            </div>

            <div className="bg-white rounded-lg p-6 mb-8 border">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-4">Game Information</h3>
                  <div className="space-y-2 text-sm">
                    <div><strong>Developer:</strong> {review.game.developer}</div>
                    <div><strong>Publisher:</strong> {review.game.publisher}</div>
                    <div><strong>Release Date:</strong> {review.game.releaseDate}</div>
                    <div><strong>Price:</strong> {review.game.price}</div>
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-4">Platforms & Genre</h3>
                  <div className="space-y-3">
                    <div>
                      <span className="font-medium text-sm">Platforms:</span>
                      <div className="flex flex-wrap gap-1 mt-1">
                        {review.game.platforms.map((platform) => (
                          <Badge key={platform} variant="outline" className="text-xs">
                            {platform}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    <div>
                      <span className="font-medium text-sm">Genre:</span>
                      <div className="flex flex-wrap gap-1 mt-1">
                        {review.game.genre.map((genre) => (
                          <Badge key={genre} variant="outline" className="text-xs">
                            {genre}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative w-full h-96 mb-8 rounded-lg overflow-hidden">
              <Image
                src={review.featuredImage}
                alt={review.title}
                fill
                className="object-cover"
              />
            </div>
          </header>

          <div className="bg-white rounded-lg p-6 mb-8 border">
            <h3 className="font-semibold text-gray-900 mb-4">Score Breakdown</h3>
            <div className="grid md:grid-cols-2 gap-4">
              {Object.entries(review.scores).map(([category, score]) => (
                <div key={category} className="flex items-center justify-between">
                  <span className="capitalize font-medium">{category}:</span>
                  <div className="flex items-center gap-2">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-4 h-4 ${
                            i < Math.floor(score) ? "text-yellow-400 fill-current" : "text-gray-300"
                          }`}
                        />
                      ))}
                    </div>
                    <span className="font-bold">{score}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="prose prose-lg max-w-none mb-8">
            <div dangerouslySetInnerHTML={{ __html: review.content }} />
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-green-50 rounded-lg p-6 border border-green-200">
              <h3 className="font-semibold text-green-800 mb-4">Pros</h3>
              <ul className="space-y-2">
                {review.pros.map((pro, index) => (
                  <li key={index} className="flex items-start gap-2 text-sm">
                    <span className="text-green-500 mt-1">+</span>
                    {pro}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-red-50 rounded-lg p-6 border border-red-200">
              <h3 className="font-semibold text-red-800 mb-4">Cons</h3>
              <ul className="space-y-2">
                {review.cons.map((con, index) => (
                  <li key={index} className="flex items-start gap-2 text-sm">
                    <span className="text-red-500 mt-1">-</span>
                    {con}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </article>
      </main>
    </div>
  )
}