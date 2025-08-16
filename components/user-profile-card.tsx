"use client"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { useUser } from "@clerk/nextjs"
import { Trophy, Star, MessageSquare } from "lucide-react"

interface UserProfileCardProps {
  showStats?: boolean
  compact?: boolean
}

export function UserProfileCard({ showStats = true, compact = false }: UserProfileCardProps) {
  const { user } = useUser()

  const mockStats = {
    reviews: 42,
    likes: 1337,
    comments: 256,
    level: "Expert Reviewer",
  }

  if (compact) {
    return (
      <div className="flex items-center space-x-3">
        <Avatar className="w-8 h-8">
          <AvatarImage src={user?.imageUrl || "/diverse-gaming-avatars.png"} alt={user?.fullName || "User"} />
          <AvatarFallback>{user?.fullName?.charAt(0) || "U"}</AvatarFallback>
        </Avatar>
        <div>
          <p className="font-medium text-gray-900">{user?.fullName || "Demo User"}</p>
          <p className="text-sm text-gray-600">@{user?.username || "demo_gamer"}</p>
        </div>
      </div>
    )
  }

  return (
    <Card className="bg-white shadow-sm">
      <CardContent className="p-6">
        <div className="flex items-center space-x-4">
          <Avatar className="w-16 h-16">
            <AvatarImage src={user?.imageUrl || "/diverse-gaming-avatars.png"} alt={user?.fullName || "User"} />
            <AvatarFallback className="text-xl">{user?.fullName?.charAt(0) || "U"}</AvatarFallback>
          </Avatar>

          <div className="flex-1">
            <h3 className="text-xl font-bold text-gray-900">{user?.fullName || "Demo User"}</h3>
            <p className="text-gray-600">@{user?.username || "demo_gamer"}</p>

            <div className="flex items-center space-x-2 mt-2">
              <Badge variant="secondary" className="bg-purple-100 text-purple-800">
                <Trophy className="w-3 h-3 mr-1" />
                {mockStats.level}
              </Badge>
            </div>
          </div>
        </div>

        {showStats && (
          <div className="grid grid-cols-3 gap-4 mt-4 pt-4 border-t">
            <div className="text-center">
              <div className="flex items-center justify-center space-x-1">
                <Star className="w-4 h-4 text-yellow-500" />
                <span className="font-bold text-gray-900">{mockStats.reviews}</span>
              </div>
              <div className="text-xs text-gray-600">Reviews</div>
            </div>
            <div className="text-center">
              <div className="font-bold text-gray-900">{mockStats.likes}</div>
              <div className="text-xs text-gray-600">Likes</div>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center space-x-1">
                <MessageSquare className="w-4 h-4 text-blue-500" />
                <span className="font-bold text-gray-900">{mockStats.comments}</span>
              </div>
              <div className="text-xs text-gray-600">Comments</div>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  )
}
