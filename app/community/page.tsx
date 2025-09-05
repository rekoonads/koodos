import React from 'react'
import {
  Card,
  CardContent,
  CardTitle,
} from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar'
import { MessageSquare, Heart, Bookmark, Users, Edit, BarChart2, Star } from 'lucide-react'

const CommunityPage = () => {
  const communityPosts = [
    {
      title: "What's your Game of the Year 2024?",
      author: "GameMaster_Pro",
      replies: 47,
      likes: 128,
      category: "Discussion",
      timeAgo: "2 hours ago",
      excerpt: "Let's discuss which game deserves the GOTY title this year. My vote goes to Baldur's Gate 3...",
      avatar: "/gamer-avatar-1.png",
      badges: ["verified", "top-contributor"],
      isLiked: false,
      isBookmarked: false,
    },
    {
      title: "Best budget gaming setup under $800?",
      author: "BudgetGamer",
      replies: 23,
      likes: 89,
      category: "Hardware",
      timeAgo: "5 hours ago",
      excerpt: "Looking to build my first gaming PC on a tight budget. Any recommendations for components?",
      avatar: "/gamer-avatar-2.png",
      badges: ["hardware-guru"],
      isLiked: true,
      isBookmarked: false,
    },
    {
      title: "Cyberpunk 2077 Phantom Liberty - Worth it?",
      author: "CyberFan2077",
      replies: 31,
      likes: 156,
      category: "Reviews",
      timeAgo: "1 day ago",
      excerpt: "Just finished the expansion. Here are my thoughts on whether it's worth the price...",
      avatar: "/gamer-avatar-3.png",
      badges: ["expert"],
      isLiked: false,
      isBookmarked: true,
    },
  ]

  const communityStats = [
    {
      value: "1.2M",
      label: "Total Members",
      icon: Users,
    },
    {
      value: "50k",
      label: "Active Discussions",
      icon: Edit,
    },
    {
      value: "2.5M",
      label: "Total Posts",
      icon: BarChart2,
    },
    {
      value: "4.8/5",
      label: "Community Rating",
      icon: Star,
    },
  ]

  return (
    <div className="min-h-screen bg-black">
      <main className="ml-64 bg-gray-50 min-h-screen">
        <div className="bg-gradient-to-r from-purple-600 to-blue-600 py-12 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-8">
              <h1 className="text-4xl font-bold text-white mb-4">KOODOS Community</h1>
              <p className="text-purple-100 text-lg">
                Join the conversation with fellow gamers. Share your thoughts, ask questions, and connect with the
                community.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {communityStats.map((stat, index) => (
                <div key={index} className="text-center text-white">
                  <div className="flex items-center justify-center mb-2">
                    <stat.icon className="w-8 h-8" />
                  </div>
                  <div className="text-2xl font-bold">{stat.value}</div>
                  <div className="text-purple-200">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="max-w-6xl mx-auto px-6 py-8">
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-6">
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-bold text-gray-900">Recent Discussions</h2>
                <Button className="bg-purple-600 hover:bg-purple-700">
                  New Post
                </Button>
              </div>

              <div className="space-y-4">
                {communityPosts.map((post, index) => (
                  <Card key={index} className="bg-white shadow-sm hover:shadow-md transition-shadow duration-300">
                    <CardContent className="p-6">
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex-1">
                          <div className="flex items-center space-x-3 mb-2">
                            <Avatar>
                              <AvatarImage src={post.avatar} />
                              <AvatarFallback>{post.author.charAt(0)}</AvatarFallback>
                            </Avatar>
                            <span className="font-semibold">{post.author}</span>
                            <Badge
                              variant="outline"
                            >
                              {post.category}
                            </Badge>
                            <span className="text-sm text-gray-500">•</span>
                            <span className="text-sm text-gray-500">{post.timeAgo}</span>
                          </div>
                          <CardTitle className="text-xl mb-2 hover:text-purple-600 transition-colors">
                            <a href="#">{post.title}</a>
                          </CardTitle>
                          <p className="text-gray-600">{post.excerpt}</p>
                        </div>
                      </div>

                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-6 text-sm text-gray-500">
                          <div className="flex items-center space-x-1">
                            <MessageSquare className="w-4 h-4" />
                            <span>{post.replies}</span>
                          </div>
                          <button
                            className={`flex items-center space-x-1 hover:text-red-600 transition-colors ${post.isLiked ? 'text-red-600' : ''}`}
                          >
                            <Heart className="w-4 h-4" />
                            <span>{post.likes}</span>
                          </button>
                          <button className="flex items-center space-x-1 hover:text-green-600 transition-colors">
                            <span>Share</span>
                          </button>
                        </div>

                        <div className="flex items-center gap-2">
                          {post.badges.map((badge, i) => (
                            <Badge key={i} variant="secondary">{badge}</Badge>
                          ))}
                          <button className={`hover:text-blue-600 transition-colors ${post.isBookmarked ? 'text-blue-600' : ''}`}>
                            <Bookmark className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            <div className="space-y-6">

              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold text-gray-900 mb-4">Community Guidelines</h3>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li>• Be respectful to all community members</li>
                    <li>• Keep discussions gaming-related</li>
                    <li>• No spam or self-promotion</li>
                    <li>• Use appropriate language</li>
                    <li>• Report inappropriate content</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default CommunityPage