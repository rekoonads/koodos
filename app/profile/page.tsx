"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useUser } from "@clerk/nextjs"
import { Header } from "@/components/header"
import { Sidebar } from "@/components/sidebar"
import { Footer } from "@/components/footer"
import { Settings, Heart, MessageSquare, Calendar, MapPin, LinkIcon, Edit3, Star, GamepadIcon } from "lucide-react"

export default function ProfilePage() {
  const { user } = useUser()
  const [isEditing, setIsEditing] = useState(false)

  // Mock user data for demo
  const profileData = {
    name: user?.fullName || "Demo User",
    username: user?.username || "demo_gamer",
    email: user?.emailAddresses?.[0]?.emailAddress || "demo@koodos.in",
    bio: "Passionate gamer and reviewer. Love RPGs, indie games, and competitive esports.",
    location: "San Francisco, CA",
    website: "https://gaming-blog.com",
    joinDate: "January 2023",
    stats: {
      reviews: 42,
      likes: 1337,
      comments: 256,
      followers: 89,
      following: 156,
    },
    badges: ["Verified Reviewer", "Top Contributor", "Early Adopter"],
    recentActivity: [
      { type: "review", game: "Cyberpunk 2077: Phantom Liberty", rating: 4.5, date: "2 days ago" },
      { type: "comment", game: "Baldur's Gate 3", content: "Amazing character development!", date: "3 days ago" },
      { type: "like", game: "Elden Ring", date: "1 week ago" },
    ],
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <Sidebar />
      <Header />

      <main className="ml-64 pt-16 p-6">
        <div className="max-w-6xl mx-auto space-y-6">
          {/* Profile Header */}
          <Card className="bg-white shadow-sm">
            <CardContent className="p-6">
              <div className="flex items-start justify-between">
                <div className="flex items-center space-x-6">
                  <Avatar className="w-24 h-24">
                    <AvatarImage src={user?.imageUrl || "/diverse-gaming-avatars.png"} alt={profileData.name} />
                    <AvatarFallback className="text-2xl">{profileData.name.charAt(0)}</AvatarFallback>
                  </Avatar>

                  <div className="space-y-2">
                    <div>
                      <h1 className="text-3xl font-bold text-gray-900">{profileData.name}</h1>
                      <p className="text-gray-600">@{profileData.username}</p>
                    </div>

                    <p className="text-gray-700 max-w-md">{profileData.bio}</p>

                    <div className="flex items-center space-x-4 text-sm text-gray-600">
                      <div className="flex items-center space-x-1">
                        <MapPin className="w-4 h-4" />
                        <span>{profileData.location}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <LinkIcon className="w-4 h-4" />
                        <a href={profileData.website} className="text-purple-600 hover:underline">
                          {profileData.website}
                        </a>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Calendar className="w-4 h-4" />
                        <span>Joined {profileData.joinDate}</span>
                      </div>
                    </div>

                    <div className="flex space-x-2">
                      {profileData.badges.map((badge, index) => (
                        <Badge key={index} variant="secondary" className="bg-purple-100 text-purple-800">
                          {badge}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>

                <Button onClick={() => setIsEditing(!isEditing)} className="bg-purple-600 hover:bg-purple-700">
                  <Edit3 className="w-4 h-4 mr-2" />
                  Edit Profile
                </Button>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-5 gap-4 mt-6 pt-6 border-t">
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-900">{profileData.stats.reviews}</div>
                  <div className="text-sm text-gray-600">Reviews</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-900">{profileData.stats.likes}</div>
                  <div className="text-sm text-gray-600">Likes</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-900">{profileData.stats.comments}</div>
                  <div className="text-sm text-gray-600">Comments</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-900">{profileData.stats.followers}</div>
                  <div className="text-sm text-gray-600">Followers</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-900">{profileData.stats.following}</div>
                  <div className="text-sm text-gray-600">Following</div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Profile Content Tabs */}
          <Tabs defaultValue="activity" className="space-y-4">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="activity">Recent Activity</TabsTrigger>
              <TabsTrigger value="reviews">My Reviews</TabsTrigger>
              <TabsTrigger value="favorites">Favorites</TabsTrigger>
              <TabsTrigger value="settings">Settings</TabsTrigger>
            </TabsList>

            <TabsContent value="activity" className="space-y-4">
              {profileData.recentActivity.map((activity, index) => (
                <Card key={index} className="bg-white shadow-sm">
                  <CardContent className="p-4">
                    <div className="flex items-center space-x-3">
                      {activity.type === "review" && <Star className="w-5 h-5 text-yellow-500" />}
                      {activity.type === "comment" && <MessageSquare className="w-5 h-5 text-blue-500" />}
                      {activity.type === "like" && <Heart className="w-5 h-5 text-red-500" />}

                      <div className="flex-1">
                        <div className="flex items-center justify-between">
                          <div>
                            <span className="font-medium text-gray-900">
                              {activity.type === "review" && `Reviewed ${activity.game}`}
                              {activity.type === "comment" && `Commented on ${activity.game}`}
                              {activity.type === "like" && `Liked ${activity.game}`}
                            </span>
                            {activity.rating && (
                              <div className="flex items-center space-x-1 mt-1">
                                <Star className="w-4 h-4 text-yellow-500 fill-current" />
                                <span className="text-sm text-gray-600">{activity.rating}/5</span>
                              </div>
                            )}
                            {activity.content && <p className="text-sm text-gray-600 mt-1">{activity.content}</p>}
                          </div>
                          <span className="text-sm text-gray-500">{activity.date}</span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </TabsContent>

            <TabsContent value="reviews">
              <Card className="bg-white shadow-sm">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <GamepadIcon className="w-5 h-5" />
                    <span>My Game Reviews</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">Your game reviews will appear here.</p>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="favorites">
              <Card className="bg-white shadow-sm">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Heart className="w-5 h-5" />
                    <span>Favorite Games</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">Your favorite games will appear here.</p>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="settings">
              <Card className="bg-white shadow-sm">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Settings className="w-5 h-5" />
                    <span>Account Settings</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">Profile settings and preferences will appear here.</p>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </main>

      <Footer />
    </div>
  )
}
