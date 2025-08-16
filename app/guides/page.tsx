import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Clock, BookOpen, Target, Award, Users, ArrowRight, Star, TrendingUp } from "lucide-react"
import Link from "next/link"
import { BannerCarousel } from "@/components/banner-carousel"

export default function GuidesPage() {
  const guides = [
    {
      title: "Complete Beginner's Guide to PC Gaming",
      category: "Beginner",
      readTime: "15 min read",
      excerpt:
        "Everything you need to know to start your PC gaming journey, from hardware basics to game recommendations.",
      image: "/pc-gaming-guide.png",
      difficulty: "Beginner",
      views: "45K",
      rating: 4.8,
      author: "Gaming Expert",
      featured: true,
    },
    {
      title: "Advanced Combat Techniques in Elden Ring",
      category: "Advanced",
      readTime: "8 min read",
      excerpt: "Master the most challenging boss fights with these expert combat strategies and build recommendations.",
      image: "/elden-ring-guide.png",
      difficulty: "Advanced",
      views: "32K",
      rating: 4.9,
      author: "Souls Master",
      featured: true,
    },
    {
      title: "Complete Walkthrough: Baldur's Gate 3 Act 1",
      category: "Walkthrough",
      readTime: "25 min read",
      excerpt: "Step-by-step guide through the first act with all major choices, companions, and secret areas covered.",
      image: "/baldurs-gate-guide.png",
      difficulty: "Intermediate",
      views: "67K",
      rating: 4.7,
      author: "RPG Guide",
      featured: false,
    },
    {
      title: "Cyberpunk 2077: Phantom Liberty Complete Guide",
      category: "Walkthrough",
      readTime: "20 min read",
      excerpt: "Navigate Night City's expansion with our comprehensive guide to all missions and endings.",
      image: "/cyberpunk-phantom-liberty.png",
      difficulty: "Intermediate",
      views: "28K",
      rating: 4.6,
      author: "Cyber Expert",
      featured: false,
    },
    {
      title: "Spider-Man 2: All Collectibles & Upgrades",
      category: "Collectibles",
      readTime: "12 min read",
      excerpt: "Find every collectible and unlock all upgrades in Insomniac's web-slinging adventure.",
      image: "/spider-man-2-ps5.png",
      difficulty: "Beginner",
      views: "41K",
      rating: 4.8,
      author: "Spidey Fan",
      featured: false,
    },
    {
      title: "Building the Ultimate Gaming Setup 2024",
      category: "Hardware",
      readTime: "18 min read",
      excerpt: "Create the perfect gaming environment with our comprehensive setup guide and recommendations.",
      image: "/gaming-setup.png",
      difficulty: "Intermediate",
      views: "53K",
      rating: 4.9,
      author: "Setup Pro",
      featured: true,
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Banner Carousel */}
      <div className="px-4 sm:px-6 lg:px-8 py-8">
        <BannerCarousel />
      </div>
      
      {/* Hero Section */}
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
                <BookOpen className="w-10 h-10 mr-4 text-green-400" />
                <span className="text-green-300 font-semibold tracking-wide text-lg">KOODOS GUIDES</span>
                <BookOpen className="w-10 h-10 ml-4 text-green-400" />
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-6 lg:mb-8">
                Expert{" "}
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
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">Featured Guides</h2>
            <Link href="/guides/all" className="text-green-600 hover:text-green-800 font-medium flex items-center">
              View All Guides <ArrowRight className="w-4 h-4 ml-1" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {guides.map((guide, index) => (
              <Link key={index} href={`/guides/${index + 1}`} className="group">
                <Card className="bg-white hover:shadow-xl transition-all duration-300 group-hover:scale-[1.02] border border-gray-200 hover:border-green-300 overflow-hidden">
                  <CardHeader className="p-0">
                    <div className="relative">
                      <img
                        src={guide.image || "/placeholder.svg"}
                        alt={guide.title}
                        className="w-full h-48 object-cover"
                      />
                      <div className="absolute top-3 left-3 flex gap-2">
                        <Badge className="bg-green-600 text-white font-medium">
                          {guide.category}
                        </Badge>
                        {guide.featured && (
                          <Badge className="bg-yellow-600 text-white font-medium">Featured</Badge>
                        )}
                      </div>
                      <div className="absolute top-3 right-3 bg-black/70 text-white text-xs px-2 py-1 rounded flex items-center gap-1 backdrop-blur-sm">
                        <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                        <span className="font-medium">{guide.rating}</span>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <Badge
                        variant={
                          guide.difficulty === "Beginner"
                            ? "secondary"
                            : guide.difficulty === "Advanced"
                              ? "destructive"
                              : "default"
                        }
                        className="text-xs"
                      >
                        {guide.difficulty}
                      </Badge>
                      <div className="flex items-center space-x-1 text-gray-500">
                        <Clock className="w-4 h-4" />
                        <span className="text-xs">{guide.readTime}</span>
                      </div>
                    </div>
                    <CardTitle className="text-lg mb-3 group-hover:text-green-600 transition-colors">
                      {guide.title}
                    </CardTitle>
                    <p className="text-gray-600 text-sm mb-4 line-clamp-2">{guide.excerpt}</p>
                    <div className="flex items-center justify-between text-xs text-gray-500">
                      <div className="flex items-center gap-1">
                        <Users className="w-3 h-3" />
                        <span>{guide.author}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <TrendingUp className="w-3 h-3" />
                        <span>{guide.views}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
