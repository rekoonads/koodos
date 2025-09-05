"use client"

import React, { useState } from 'react'
import { useUser } from '@clerk/nextjs'
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from '@/components/ui/tabs'
import { Edit, AtSign, MapPin, Link as LinkIcon, Star, Heart, MessageSquare } from 'lucide-react'

const ProfilePage = () => {
  const { user } = useUser()
  const [isEditing, setIsEditing] = useState(false)

  // Mock user data for demo
  const userProfile = {
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
      {
        action: 'commented on',
        target: 'Cyberpunk 2077 Review',
        time: '2 hours ago',
      },
      {
        action: 'liked',
        target: 'Baldur\'s Gate 3 Guide',
        time: '1 day ago',
      },
      {
        action: 'posted a new review for',
        target: 'Alan Wake 2',
        time: '3 days ago',
      },
    ],
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <main className="ml-64 pt-16 p-6">
        <div className="max-w-6xl mx-auto space-y-6">
          <Card className="bg-white shadow-sm">
            <CardContent className="p-6">
              <div className="flex items-start justify-between">
                <div className="flex items-center space-x-6">
                  <Avatar className="w-24 h-24">
                    <AvatarImage src={user?.imageUrl} />
                    <AvatarFallback>{userProfile.name.charAt(0)}</AvatarFallback>
                  </Avatar>

                  <div className="space-y-2">
                    <div>
                      <h1 className="text-2xl font-bold text-gray-900">{userProfile.name}</h1>
                      <p className="text-gray-600">@{userProfile.username}</p>
                    </div>

                    <p className="text-gray-700">{userProfile.bio}</p>

                    <div className="flex items-center space-x-4 text-sm text-gray-600">
                      <div className="flex items-center space-x-1">
                        <MapPin className="w-4 h-4" />
                        <span>{userProfile.location}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <LinkIcon className="w-4 h-4" />
                        <a href={userProfile.website} target="_blank" rel="noopener noreferrer" className="hover:underline">
                          {userProfile.website}
                        </a>
                      </div>
                      <div className="flex items-center space-x-1">
                        <AtSign className="w-4 h-4" />
                        <span>{userProfile.email}</span>
                      </div>
                    </div>

                    <div className="flex space-x-2">
                      {userProfile.badges.map((badge, index) => (
                        <Badge key={index} variant="secondary">{badge}</Badge>
                      ))}
                    </div>
                  </div>
                </div>

                <Button onClick={() => setIsEditing(!isEditing)}>
                  <Edit className="w-4 h-4 mr-2" />
                  {isEditing ? 'Save Profile' : 'Edit Profile'}
                </Button>
              </div>

              <div className="grid grid-cols-5 gap-4 mt-6 pt-6 border-t">
                <div className="text-center">
                  <p className="text-xl font-bold">{userProfile.stats.reviews}</p>
                  <div className="text-sm text-gray-600">Reviews</div>
                </div>
                <div className="text-center">
                  <p className="text-xl font-bold">{userProfile.stats.likes}</p>
                  <div className="text-sm text-gray-600">Likes</div>
                </div>
                <div className="text-center">
                  <p className="text-xl font-bold">{userProfile.stats.comments}</p>
                  <div className="text-sm text-gray-600">Comments</div>
                </div>
                <div className="text-center">
                  <p className="text-xl font-bold">{userProfile.stats.followers}</p>
                  <div className="text-sm text-gray-600">Followers</div>
                </div>
                <div className="text-center">
                  <p className="text-xl font-bold">{userProfile.stats.following}</p>
                  <div className="text-sm text-gray-600">Following</div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Tabs defaultValue="activity" className="space-y-4">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="activity">Recent Activity</TabsTrigger>
              <TabsTrigger value="reviews">My Reviews</TabsTrigger>
              <TabsTrigger value="favorites">Favorites</TabsTrigger>
              <TabsTrigger value="settings">Settings</TabsTrigger>
            </TabsList>

            <TabsContent value="activity" className="space-y-4">
              {userProfile.recentActivity.map((activity, index) => (
                <Card key={index} className="bg-white shadow-sm">
                  <CardContent className="p-4">
                    <div className="flex items-center space-x-3">
                      <div className="flex-1">
                        <div className="flex items-center justify-between">
                          <div>
                            <span className="font-medium text-gray-900">
                              You {activity.action}
                            </span>
                            <a href="#" className="ml-1 font-semibold text-blue-600 hover:underline">{activity.target}</a>
                            <div className="flex items-center space-x-1 mt-1">
                              <span className="text-xs text-gray-500">{activity.time}</span>
                            </div>
                          </div>
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
                    <Star className="w-5 h-5" />
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
                    <Edit className="w-5 h-5" />
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
    </div>
  )
}

export default ProfilePage