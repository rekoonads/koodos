import React from 'react'
import Link from 'next/link'
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { ChevronRight, Eye, Star, User, Clock } from 'lucide-react'

const GuidesPage = () => {
  const guides = [
    {
      id: 1,
      title: "The Ultimate Guide to Starting a Gaming Channel",
      category: { slug: 'guides', name: 'Content Creation' },
      slug: 'gaming-channel-guide',
      featuredImage: '/public/placeholder.jpg',
      isFeatured: true,
      viewsCount: 1500,
      type: 'Beginner',
      excerpt: 'Everything you need to know to start and grow a successful gaming channel on YouTube or Twitch.',
      author: 'John Doe',
    },
    {
      id: 2,
      title: "Mastering Advanced Combat in Elden Ring",
      category: { slug: 'guides', name: 'Game Guide' },
      slug: 'elden-ring-combat-guide',
      featuredImage: '/public/placeholder.jpg',
      isFeatured: false,
      viewsCount: 2500,
      type: 'Advanced',
      excerpt: 'Learn advanced combat techniques, parrying, and strategies to defeat the toughest bosses in Elden Ring.',
      author: 'Jane Smith',
    },
    {
      id: 3,
      title: "Building Your First Gaming PC: A Step-by-Step Guide",
      category: { slug: 'guides', name: 'Hardware' },
      slug: 'building-gaming-pc-guide',
      featuredImage: '/public/placeholder.jpg',
      isFeatured: true,
      viewsCount: 3500,
      type: 'Intermediate',
      excerpt: 'A comprehensive guide to selecting components and building your own gaming PC from scratch.',
      author: 'Peter Jones',
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      <div className="px-4 sm:px-6 lg:px-8 py-8">
      </div>

      <div className="relative bg-gradient-to-br from-slate-900 via-green-900 to-emerald-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('/guide-pattern.png')] opacity-10"></div>
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-32 h-32 bg-green-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-40 h-40 bg-emerald-500/10 rounded-full blur-3xl"></div>
        </div>
        <div className="relative px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-24">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <div className="flex items-center justify-center mb-6">
                <span className="text-green-300 font-semibold tracking-wide text-lg">KOODOS GUIDES</span>
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-6 lg:mb-8">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-emerald-400 to-teal-400">
                  Guides
                </span>
              </h1>
              <p className="text-lg sm:text-xl lg:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
                Comprehensive walkthroughs, tutorials, and expert tips to master your favorite games
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 lg:gap-8 max-w-4xl mx-auto">
                <div className="text-center">
                  <div className="text-3xl lg:text-5xl font-bold text-green-400 mb-2">200+</div>
                  <div className="text-sm lg:text-base text-gray-400">Expert Guides</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl lg:text-5xl font-bold text-emerald-400 mb-2">4.8</div>
                  <div className="text-sm lg:text-base text-gray-400">Average Rating</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl lg:text-5xl font-bold text-teal-400 mb-2">500K+</div>
                  <div className="text-sm lg:text-base text-gray-400">Monthly Readers</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl lg:text-5xl font-bold text-green-400 mb-2">24/7</div>
                  <div className="text-sm lg:text-base text-gray-400">Support</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl lg:text-4xl font-bold text-white">Featured Guides</h2>
            <Link href="/guides/all" className="text-green-600 hover:text-green-800 font-medium flex items-center">
              View All Guides <ChevronRight className="w-4 h-4 ml-1" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {guides.map((guide) => (
              <Link key={guide.id} href={`/article/${guide.category?.slug || 'guides'}/${guide.slug}`} className="group">
                <Card className="bg-white hover:shadow-xl transition-all duration-300 group-hover:scale-[1.02] border border-gray-200 hover:border-green-300 overflow-hidden">
                  <CardHeader className="p-0">
                    <div className="relative">
                      <img
                        src={guide.featuredImage || '/placeholder.jpg'}
                        alt={guide.title}
                        className="w-full h-48 object-cover"
                      />
                      <div className="absolute top-3 left-3 flex gap-2">
                        <Badge className="bg-green-600 text-white font-medium">
                          {guide.category?.name || 'Guide'}
                        </Badge>
                        {guide.isFeatured && (
                          <Badge className="bg-yellow-600 text-white font-medium">Featured</Badge>
                        )}
                      </div>
                      <div className="absolute top-3 right-3 bg-black/70 text-white text-xs px-2 py-1 rounded flex items-center gap-1 backdrop-blur-sm">
                        <Eye className="w-3 h-3" />
                        {guide.viewsCount || 0}
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <Badge variant="secondary" className="text-xs">
                        {guide.type || 'Guide'}
                      </Badge>
                      <div className="flex items-center space-x-1 text-gray-500">
                        <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                        <span className="text-sm">4.8</span>
                      </div>
                    </div>
                    <CardTitle className="text-lg mb-3 text-white group-hover:text-green-400 transition-colors">
                      {guide.title}
                    </CardTitle>
                    <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                      {guide.excerpt}
                    </p>
                    <div className="flex items-center justify-between text-xs text-gray-500">
                      <div className="flex items-center gap-1">
                        <User className="w-3 h-3" />
                        {guide.author}
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        5 min read
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </div>

    </div>
  )
}

export default GuidesPage