"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Heart, MessageCircle, Bookmark, Share2, Trophy, Clock } from "lucide-react"

export function UserActivityFeed() {
  const [filter, setFilter] = useState<"all" | "likes" | "comments" | "bookmarks">("all")

  // Mock activity data
  const activities = [
    {
      id: "1",
      type: "like",
      user: {
        name: "GameMaster2024",
        avatar: "/gamer-avatar-1.png",
      },
      target: {
        type: "article",
        title: "The Future of Gaming: What to Expect in 2024",
        slug: "future-of-gaming-2024",
      },
      timestamp: "2024-01-15T14:30:00Z",
    },
    {
      id: "2",
      type: "comment",
      user: {
        name: "TechReviewer",
        avatar: "/gamer-avatar-3.png",
      },
      target: {
        type: "review",
        title: "Cyberpunk 2077: Phantom Liberty Review",
        slug: "cyberpunk-2077-phantom-liberty-review",
      },
      content: "Great review! The AI improvements sound amazing.",
      timestamp: "2024-01-15T13:45:00Z",
    },
    {
      id: "3",
      type: "bookmark",
      user: {
        name: "CyberFan",
        avatar: "/gamer-avatar-2.png",
      },
      target: {
        type: "guide",
        title: "Best Gaming Laptops of 2024",
        slug: "best-gaming-laptops-2024",
      },
      timestamp: "2024-01-15T12:20:00Z",
    },
    {
      id: "4",
      type: "achievement",
      user: {
        name: "GameMaster2024",
        avatar: "/gamer-avatar-1.png",
      },
      achievement: {
        name: "Top Contributor",
        description: "Reached 100 helpful comments",
        icon: "🏆",
      },
      timestamp: "2024-01-15T11:00:00Z",
    },
  ]

  const getActivityIcon = (type: string) => {
    switch (type) {
      case "like":
        return <Heart className="w-4 h-4 text-red-500" />
      case "comment":
        return <MessageCircle className="w-4 h-4 text-blue-500" />
      case "bookmark":
        return <Bookmark className="w-4 h-4 text-yellow-500" />
      case "share":
        return <Share2 className="w-4 h-4 text-green-500" />
      case "achievement":
        return <Trophy className="w-4 h-4 text-purple-500" />
      default:
        return <Clock className="w-4 h-4 text-gray-500" />
    }
  }

  const getActivityText = (activity: any) => {
    switch (activity.type) {
      case "like":
        return `liked "${activity.target.title}"`
      case "comment":
        return `commented on "${activity.target.title}"`
      case "bookmark":
        return `bookmarked "${activity.target.title}"`
      case "share":
        return `shared "${activity.target.title}"`
      case "achievement":
        return `earned the "${activity.achievement.name}" achievement`
      default:
        return "had some activity"
    }
  }

  const filteredActivities = activities.filter((activity) => {
    if (filter === "all") return true
    return activity.type === filter
  })

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          <span>Community Activity</span>
          <div className="flex gap-2">
            <Button variant={filter === "all" ? "default" : "outline"} size="sm" onClick={() => setFilter("all")}>
              All
            </Button>
            <Button variant={filter === "likes" ? "default" : "outline"} size="sm" onClick={() => setFilter("likes")}>
              Likes
            </Button>
            <Button
              variant={filter === "comments" ? "default" : "outline"}
              size="sm"
              onClick={() => setFilter("comments")}
            >
              Comments
            </Button>
            <Button
              variant={filter === "bookmarks" ? "default" : "outline"}
              size="sm"
              onClick={() => setFilter("bookmarks")}
            >
              Bookmarks
            </Button>
          </div>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {filteredActivities.map((activity) => (
            <div key={activity.id} className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg">
              <Image
                src={activity.user.avatar || "/placeholder.svg"}
                alt={activity.user.name}
                width={32}
                height={32}
                className="rounded-full"
              />

              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  {getActivityIcon(activity.type)}
                  <span className="font-medium text-gray-900">{activity.user.name}</span>
                  <span className="text-gray-600 text-sm">{getActivityText(activity)}</span>
                </div>

                {activity.content && <p className="text-gray-700 text-sm mb-2">"{activity.content}"</p>}

                {activity.achievement && (
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-lg">{activity.achievement.icon}</span>
                    <div>
                      <div className="font-medium text-sm">{activity.achievement.name}</div>
                      <div className="text-xs text-gray-600">{activity.achievement.description}</div>
                    </div>
                  </div>
                )}

                <div className="flex items-center justify-between">
                  <span className="text-xs text-gray-500">{new Date(activity.timestamp).toLocaleDateString()}</span>

                  {activity.target && (
                    <Link
                      href={`/${activity.target.type === "article" ? "articles" : activity.target.type === "review" ? "reviews" : "guides"}/${activity.target.slug}`}
                      className="text-xs text-blue-600 hover:text-blue-800"
                    >
                      View {activity.target.type}
                    </Link>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-6">
          <Button variant="outline" size="sm">
            Load More Activity
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
