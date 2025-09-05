import React from 'react'
import Link from 'next/link'
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Tag, TrendingUp } from 'lucide-react'

const TagsPage = () => {
  const tagCloud = [
    { name: 'RPG', count: 120 },
    { name: 'Action', count: 95 },
    { name: 'Indie', count: 80 },
    { name: 'Strategy', count: 60 },
    { name: 'Simulation', count: 50 },
    { name: 'Sports', count: 40 },
    { name: 'Racing', count: 35 },
    { name: 'Fighting', count: 30 },
    { name: 'Puzzle', count: 25 },
    { name: 'Horror', count: 20 },
  ]

  const trendingTags = [
    { name: 'Cyberpunk', trend: '+25%' },
    { name: 'Baldur\'s Gate 3', trend: '+50%' },
    { name: 'Elden Ring', trend: '+15%' },
    { name: 'Starfield', trend: '+10%' },
    { name: 'Final Fantasy', trend: '+5%' },
    { name: 'Call of Duty', trend: '+8%' },
  ]

  const categories = [
    {
      name: 'Genres',
      tags: ['Action', 'RPG', 'Strategy', 'Simulation', 'Sports', 'Racing', 'Indie', 'Fighting', 'Puzzle', 'Horror'],
    },
    {
      name: 'Platforms',
      tags: ['PC', 'PlayStation', 'Xbox', 'Nintendo Switch', 'Mobile'],
    },
    {
      name: 'Topics',
      tags: ['Esports', 'Hardware', 'Game Development', 'Streaming', 'VR/AR'],
    },
  ]

  return (
    <div className="min-h-screen bg-black">
      <main className="ml-64 bg-gray-50 min-h-screen">
        <div className="bg-gradient-to-r from-indigo-600 to-purple-600 py-12 px-6">
          <div className="max-w-6xl mx-auto text-center">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Tag className="w-8 h-8 text-white" />
              <h1 className="text-4xl font-bold text-white">Browse by Tags</h1>
            </div>
            <p className="text-indigo-100 text-lg">
              Discover gaming content organized by topics, genres, platforms, and more
            </p>
          </div>
        </div>

        <div className="max-w-6xl mx-auto px-6 py-8">
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Tag className="w-5 h-5" />
                Tag Cloud
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-4 items-center justify-center py-8">
                {tagCloud.map((tag, index) => (
                  <Link href={`/tags/${tag.name.toLowerCase().replace(/ /g, '-')}`} key={index}>
                    <Badge
                      className="text-lg px-4 py-2"
                      style={{
                        fontSize: `${1 + (tag.count / 100) * 1.5}rem`,
                        opacity: 0.6 + (tag.count / 100) * 0.4,
                      }}
                    >
                      {tag.name}
                    </Badge>
                  </Link>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <TrendingUp className="w-5 h-5" />
                Trending Tags
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {trendingTags.map((tag, index) => (
                  <Link
                    href={`/tags/${tag.name.toLowerCase().replace(/ /g, '-')}`}
                    key={index}
                    className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                  >
                    <div>
                      <p className="font-semibold">{tag.name}</p>
                    </div>
                    <Badge variant="secondary" className="bg-green-100 text-green-800">
                      {tag.trend}
                    </Badge>
                  </Link>
                ))}
              </div>
            </CardContent>
          </Card>

          <div className="grid md:grid-cols-2 gap-6">
            {categories.map((category, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    {category.name}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {category.tags.map((tag, tagIndex) => (
                      <Link href={`/tags/${tag.toLowerCase().replace(/ /g, '-')}`} key={tagIndex}>
                        <Badge variant="outline" className="hover:bg-blue-50 cursor-pointer">
                          {tag}
                        </Badge>
                      </Link>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </main>
    </div>
  )
}

export default TagsPage