import React from 'react'
import Link from 'next/link'
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { ChevronRight, Eye, Star, User, Clock, Heart, MessageSquare, TrendingUp, BookOpen, FlaskConical, PenTool } from 'lucide-react'

const ScienceComicsPage = () => {
  const scienceArticles = [
    {
      id: 1,
      title: "Quantum Computing Breakthrough: IBM's 1000-Qubit Processor",
      category: "Technology",
      readTime: "8 min read",
      views: "45K",
      date: "2 days ago",
      description:
        "Revolutionary advancement in quantum computing brings us closer to solving complex problems that are impossible for classical computers, including drug discovery and climate modeling.",
      image: "/science-quantum-computing.png",
      difficulty: "Advanced",
      author: "Dr. Sarah Chen",
      likes: "2.1K",
      comments: "345",
      tags: ["Quantum Computing", "IBM", "Technology", "Physics"],
      institution: "MIT",
      publishedIn: "Nature Physics",
      trending: true,
    },
    {
      id: 2,
      title: "Mars Rover Discovers Evidence of Ancient Microbial Life",
      category: "Space",
      readTime: "12 min read",
      views: "128K",
      date: "1 week ago",
      description:
        "Perseverance rover findings suggest Mars may have harbored life billions of years ago, with organic compounds and mineral formations indicating past biological activity.",
      image: "/science-mars-rover.png",
      difficulty: "Intermediate",
      author: "Dr. Michael Rodriguez",
      likes: "5.7K",
      comments: "892",
      tags: ["Mars", "Astrobiology", "NASA", "Space Exploration"],
      institution: "NASA JPL",
      publishedIn: "Science",
      trending: true,
    },
    {
      id: 3,
      title: "CRISPR Gene Editing: New Treatment for Genetic Diseases",
      category: "Biology",
      readTime: "10 min read",
      views: "67K",
      date: "3 days ago",
      description:
        "Latest developments in gene therapy offer hope for treating inherited disorders, with successful trials showing promise for sickle cell disease and beta-thalassemia.",
      image: "/science-crispr.png",
      difficulty: "Advanced",
      author: "Dr. Emma Wilson",
      likes: "3.4K",
      comments: "567",
      tags: ["CRISPR", "Gene Therapy", "Medicine", "Biotechnology"],
      institution: "Harvard Medical School",
      publishedIn: "Cell",
      trending: true,
    },
    {
      id: 4,
      title: "Climate Change: Antarctic Ice Sheet Melting Accelerates",
      category: "Environment",
      readTime: "15 min read",
      views: "89K",
      date: "5 days ago",
      description:
        "New satellite data reveals alarming acceleration in Antarctic ice loss, with implications for global sea level rise and coastal communities worldwide.",
      image: "/science-climate-change.png",
      difficulty: "Intermediate",
      author: "Dr. James Park",
      likes: "4.2K",
      comments: "1.1K",
      tags: ["Climate Change", "Antarctica", "Sea Level", "Environment"],
      institution: "NOAA",
      publishedIn: "Nature Climate Change",
      trending: false,
    },
  ]

  const comicReviews = [
    {
      id: 1,
      title: "The Sandman Universe: Dead Boy Detectives #1",
      publisher: "DC Comics",
      writer: "Pornsak Pichetshote",
      artist: "Jeff Stokely",
      colorist: "Tamra Bonvillain",
      rating: 8.5,
      genre: "Horror, Mystery",
      description:
        "A haunting return to the world of Neil Gaiman's Sandman with compelling characters and atmospheric storytelling that captures the essence of the original series.",
      image: "/comic-dead-boy-detectives.png",
      price: "$3.99",
      pages: 22,
      releaseDate: "Jan 2024",
      likes: "1.8K",
      comments: "234",
      reviews: "156",
      trending: false,
    },
    {
      id: 2,
      title: "Saga Volume 11",
      publisher: "Image Comics",
      writer: "Brian K. Vaughan",
      artist: "Fiona Staples",
      colorist: "Fiona Staples",
      rating: 9.8,
      genre: "Sci-Fi, Fantasy",
      description:
        "The epic space opera continues with emotional depth and stunning art that reminds us why Saga is considered one of the greatest comics of our time.",
      image: "/comic-saga-v11.png",
      price: "$16.99",
      pages: 144,
      releaseDate: "Feb 2024",
      likes: "7.3K",
      comments: "892",
      reviews: "445",
      trending: true,
    },
    {
      id: 3,
      title: "X-Men: From the Ashes #1",
      publisher: "Marvel Comics",
      writer: "Gerry Duggan",
      artist: "Pepe Larraz",
      colorist: "Marte Gracia",
      rating: 8.2,
      genre: "Superhero, Action",
      description:
        "A fresh start for Marvel's mutants with new challenges ahead, featuring dynamic art and compelling character development that sets up exciting storylines.",
      image: "/comic-xmen-ashes.png",
      price: "$4.99",
      pages: 28,
      releaseDate: "Jan 2024",
      likes: "3.1K",
      comments: "456",
      reviews: "289",
      trending: true,
    },
    {
      id: 4,
      title: "Invincible Iron Man #15",
      publisher: "Marvel Comics",
      writer: "Gerry Duggan",
      artist: "Andrea Di Vito",
      colorist: "Bryan Valenza",
      rating: 7.9,
      genre: "Superhero, Sci-Fi",
      description:
        "Tony Stark faces new technological challenges while dealing with personal demons in this action-packed issue that balances character development with spectacular visuals.",
      image: "/comic-iron-man.png",
      price: "$3.99",
      pages: 20,
      releaseDate: "Feb 2024",
      likes: "2.4K",
      comments: "312",
      reviews: "178",
      trending: false,
    },
  ]

  const trendingTopics = [
    {
      id: 1,
      title: "Climate Change Solutions",
      category: "Environment",
      trend: "+15%",
      articles: 45,
      weeklyReads: "234K",
      description: "Latest research on renewable energy and carbon capture technologies",
    },
    {
      id: 2,
      title: "AI Ethics",
      category: "Technology",
      trend: "+23%",
      articles: 67,
      weeklyReads: "189K",
      description: "Discussions on responsible AI development and regulation",
    },
    {
      id: 3,
      title: "Space Exploration",
      category: "Astronomy",
      trend: "+8%",
      articles: 32,
      weeklyReads: "156K",
      description: "Updates on Mars missions and deep space discoveries",
    },
    {
      id: 4,
      title: "Genetic Engineering",
      category: "Biology",
      trend: "+12%",
      articles: 28,
      weeklyReads: "98K",
      description: "Advances in CRISPR and gene therapy applications",
    },
  ]

  const researchPapers = [
    {
      title: "Quantum Entanglement in Biological Systems",
      journal: "Nature Physics",
      authors: "Dr. Lisa Zhang, Dr. Robert Kim",
      citations: 1247,
      impact: "High",
    },
    {
      title: "Machine Learning for Drug Discovery",
      journal: "Science",
      authors: "Dr. Maria Santos, Dr. David Chen",
      citations: 892,
      impact: "Very High",
    },
    {
      title: "Renewable Energy Storage Solutions",
      journal: "Nature Energy",
      authors: "Dr. John Wilson, Dr. Sarah Lee",
      citations: 634,
      impact: "High",
    },
  ]

  const upcomingComics = [
    {
      title: "Batman: The Brave and the Bold #1",
      publisher: "DC Comics",
      releaseDate: "March 15, 2024",
      writer: "Tom King",
      preOrder: true,
    },
    {
      title: "Spider-Man: Shadow of the Green Goblin #1",
      publisher: "Marvel Comics",
      releaseDate: "March 22, 2024",
      writer: "Dan Slott",
      preOrder: true,
    },
    {
      title: "The Walking Dead: All Out War Anniversary Edition",
      publisher: "Image Comics",
      releaseDate: "April 5, 2024",
      writer: "Robert Kirkman",
      preOrder: false,
    },
  ]

  return (
    <div className="bg-white min-h-screen">
      <div className="relative bg-gradient-to-br from-emerald-900 via-teal-800 to-cyan-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('/science-pattern.png')] opacity-10"></div>
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-32 h-32 bg-emerald-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-40 h-40 bg-cyan-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 right-1/3 w-24 h-24 bg-teal-500/15 rounded-full blur-2xl animate-pulse delay-500"></div>
        </div>
        <div className="relative px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-24">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <div className="flex items-center justify-center mb-6">
                <span className="text-emerald-300 font-semibold tracking-wide text-lg">KOODOS SCIENCE & COMICS</span>
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-6 lg:mb-8">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400">
                  Science & Comics
                </span>
              </h1>
              <p className="text-lg sm:text-xl lg:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
                Exploring the intersection of scientific discovery, technology breakthroughs, and comic book culture
              </p>

              <div className="flex flex-wrap justify-center gap-4 mb-12">
                <div className="group bg-gradient-to-r from-emerald-600 to-teal-500 hover:from-emerald-500 hover:to-teal-400 px-6 py-3 rounded-xl font-semibold transition-all duration-300 cursor-pointer transform hover:scale-105 shadow-lg hover:shadow-emerald-500/25">
                  <span className="flex items-center">
                    <FlaskConical className="w-5 h-5 mr-2" />
                    Science
                  </span>
                </div>
                <div className="group bg-gradient-to-r from-teal-600 to-cyan-500 hover:from-teal-500 hover:to-cyan-400 px-6 py-3 rounded-xl font-semibold transition-all duration-300 cursor-pointer transform hover:scale-105 shadow-lg hover:shadow-teal-500/25">
                  <span className="flex items-center">
                    <BookOpen className="w-5 h-5 mr-2" />
                    Comics
                  </span>
                </div>
                <div className="group bg-gradient-to-r from-cyan-600 to-emerald-500 hover:from-cyan-500 hover:to-emerald-400 px-6 py-3 rounded-xl font-semibold transition-all duration-300 cursor-pointer transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25">
                  <span className="flex items-center">
                    <PenTool className="w-5 h-5 mr-2" />
                    Research
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 lg:gap-8 max-w-4xl mx-auto">
                <div className="text-center">
                  <div className="text-3xl lg:text-5xl font-bold text-emerald-400 mb-2">200+</div>
                  <div className="text-sm lg:text-base text-gray-400">Science Articles</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl lg:text-5xl font-bold text-teal-400 mb-2">150+</div>
                  <div className="text-sm lg:text-base text-gray-400">Comic Reviews</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl lg:text-5xl font-bold text-cyan-400 mb-2">50+</div>
                  <div className="text-sm lg:text-base text-gray-400">Research Papers</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl lg:text-5xl font-bold text-emerald-400 mb-2">15K+</div>
                  <div className="text-sm lg:text-base text-gray-400">Readers</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center">
                <div className="h-1 bg-gradient-to-r from-blue-500 to-emerald-500 rounded-full w-16 mr-4"></div>
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">Featured Research</h2>
              </div>
              <Link
                href="/science-comics/research"
                className="text-blue-600 hover:text-blue-800 font-medium flex items-center"
              >
                View All <ChevronRight className="w-4 h-4 ml-1" />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {researchPapers.map((paper, index) => (
                <Link href="#" key={index}>
                  <div className="bg-gradient-to-br from-blue-50 to-emerald-50 border border-blue-200 hover:border-blue-300 p-6 rounded-xl transition-all duration-300 hover:shadow-lg group-hover:scale-[1.02]">
                    <div className="flex items-center justify-between mb-3">
                      <span className="bg-blue-600 text-white text-xs px-3 py-1 rounded-full font-medium">
                        {paper.journal}
                      </span>
                      <span
                        className={`text-xs px-2 py-1 rounded-full ${
                          paper.impact === "Very High"
                            ? "bg-red-100 text-red-600"
                            : paper.impact === "High"
                              ? "bg-orange-100 text-orange-600"
                              : "bg-green-100 text-green-600"
                        }`}
                      >
                        {paper.impact} Impact
                      </span>
                    </div>
                    <h3 className="font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                      {paper.title}
                    </h3>
                    <div className="flex items-center justify-between text-xs text-gray-500">
                      <div className="flex items-center gap-1">
                        <User className="w-3 h-3" />
                        {paper.authors}
                      </div>
                      <span>{paper.citations} Citations</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 xl:grid-cols-4 gap-8 lg:gap-12 mb-16">
            <div className="xl:col-span-3">
              <div className="flex items-center mb-8">
                <div className="h-1 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-full w-16 mr-4"></div>
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">Latest Science Articles</h2>
              </div>

              <div className="space-y-8">
                {scienceArticles.map((article) => (
                  <Link href="#" key={article.id}>
                    <div className="group bg-white border border-gray-200 hover:border-emerald-300 hover:shadow-2xl hover:shadow-emerald-500/10 transition-all duration-500 overflow-hidden rounded-2xl">
                      <div className="grid grid-cols-1 lg:grid-cols-3 gap-0">
                        <div className="lg:col-span-1">
                          <div className="aspect-video lg:aspect-square bg-gradient-to-br from-emerald-100 to-cyan-100 relative overflow-hidden">
                            <img src={article.image} alt={article.title} className="w-full h-full object-cover" />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                            <div className="absolute top-4 left-4 flex gap-2">
                              <span className="bg-emerald-600 text-white text-xs px-3 py-1 rounded-full font-medium">
                                {article.category}
                              </span>
                              {article.trending && (
                                <span className="bg-red-600 text-white text-xs px-3 py-1 rounded-full font-medium">
                                  Trending
                                </span>
                              )}
                            </div>
                            <div className="absolute bottom-4 right-4">
                              <span
                                className={`text-xs px-2 py-1 rounded-full ${
                                  article.difficulty === "Advanced"
                                    ? "bg-red-100 text-red-600"
                                    : article.difficulty === "Intermediate"
                                      ? "bg-yellow-100 text-yellow-600"
                                      : "bg-green-100 text-green-600"
                                }`}
                              >
                                {article.difficulty}
                              </span>
                            </div>
                          </div>
                        </div>

                        <div className="lg:col-span-2 p-6 lg:p-8">
                          <div className="flex items-start justify-between mb-4">
                            <div className="flex items-center space-x-3">
                              <User className="w-4 h-4 text-gray-500" />
                              <span className="text-sm text-gray-500">{article.author}</span>
                            </div>
                            <div className="flex items-center space-x-4 text-sm text-gray-500">
                              <div className="flex items-center space-x-1">
                                <Clock className="w-4 h-4" />
                                <span>{article.readTime}</span>
                              </div>
                              <div className="flex items-center space-x-1">
                                <Eye className="w-4 h-4" />
                                <span>{article.views}</span>
                              </div>
                            </div>
                          </div>

                          <h3 className="text-xl lg:text-2xl font-bold mb-4 text-gray-900 group-hover:text-emerald-600 transition-colors leading-tight">
                            {article.title}
                          </h3>

                          <p className="text-gray-600 mb-4 line-clamp-3">{article.description}</p>

                          <div className="flex flex-wrap gap-2 mb-4">
                            {article.tags.map((tag) => (
                              <span key={tag} className="text-xs bg-gray-200 text-gray-800 px-2 py-1 rounded-full">{tag}</span>
                            ))}
                          </div>

                          <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-6 text-sm text-gray-500">
                              <div className="flex items-center space-x-2">
                                <Heart className="w-4 h-4" />
                                <span>{article.likes}</span>
                              </div>
                              <div className="flex items-center space-x-2">
                                <MessageSquare className="w-4 h-4" />
                                <span>{article.comments}</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            <div className="xl:col-span-1 space-y-8">
              <div className="bg-gradient-to-br from-emerald-50 to-cyan-50 rounded-2xl p-6 lg:p-8 border border-emerald-200 sticky top-8">
                <div className="flex items-center mb-6">
                  <h3 className="text-xl font-bold text-gray-900">Trending Topics</h3>
                </div>

                <div className="space-y-4">
                  {trendingTopics.map((topic) => (
                    <Link href="#" key={topic.id}>
                      <div className="flex items-center justify-between p-4 bg-white rounded-xl border border-emerald-100 hover:border-emerald-200 transition-colors group">
                        <div className="flex items-center space-x-3">
                          <div className="w-8 h-8 bg-gradient-to-br from-emerald-500 to-cyan-500 rounded-lg flex items-center justify-center text-white font-bold text-sm">
                            {topic.trend}
                          </div>
                          <div>
                            <div className="font-semibold text-gray-900 text-sm group-hover:text-emerald-600 transition-colors">
                              {topic.title}
                            </div>
                            <div className="text-xs text-gray-500">{topic.weeklyReads} reads</div>
                          </div>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>

              <div className="bg-gradient-to-br from-cyan-50 to-emerald-50 rounded-2xl p-6 border border-cyan-200">
                <div className="flex items-center mb-6">
                  <h3 className="text-xl font-bold text-gray-900">Upcoming Comics</h3>
                </div>

                <div className="space-y-4">
                  {upcomingComics.map((comic, index) => (
                    <div key={index} className="bg-white p-4 rounded-xl shadow-sm">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-xs text-cyan-600 bg-cyan-100 px-2 py-1 rounded font-medium">
                          {comic.publisher}
                        </span>
                        {comic.preOrder && (
                          <span className="text-xs text-green-600 bg-green-100 px-2 py-1 rounded">Pre-Order</span>
                        )}
                      </div>
                      <h4 className="font-semibold text-gray-900 mb-1">{comic.title}</h4>
                      <div className="text-xs text-gray-500">
                        {comic.releaseDate}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="mb-16">
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center">
                <div className="h-1 bg-gradient-to-r from-cyan-500 to-emerald-500 rounded-full w-16 mr-4"></div>
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">Comic Book Reviews</h2>
              </div>
              <Link
                href="/science-comics/comics"
                className="text-cyan-600 hover:text-cyan-800 font-medium flex items-center"
              >
                View All <ChevronRight className="w-4 h-4 ml-1" />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 lg:gap-8">
              {comicReviews.map((review) => (
                <Link href="#" key={review.id}>
                  <div className="group hover:shadow-2xl transition-all duration-500 cursor-pointer border border-gray-200 hover:border-cyan-200 overflow-hidden rounded-2xl bg-white">
                    <div className="relative overflow-hidden">
                      <div className="aspect-[3/4] bg-gradient-to-br from-cyan-100 to-emerald-100 relative">
                        <img src={review.image} alt={review.title} className="w-full h-full object-cover" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                        <div className="absolute top-4 left-4 flex gap-2">
                          <span className="bg-white/90 text-gray-800 text-xs font-medium px-2 py-1 rounded">
                            {review.publisher}
                          </span>
                          {review.trending && (
                            <span className="bg-cyan-600 text-white text-xs font-medium px-2 py-1 rounded">
                              Trending
                            </span>
                          )}
                        </div>
                        <div className="absolute top-4 right-4">
                          <div className="flex items-center space-x-1 bg-black/70 text-white px-2 py-1 rounded text-xs">
                            <Star className="w-3 h-3" />
                            <span>{review.rating}</span>
                          </div>
                        </div>
                        <div className="absolute bottom-4 right-4 bg-black/70 text-white px-2 py-1 rounded text-xs">
                          {review.price}
                        </div>
                      </div>
                    </div>

                    <div className="p-6">
                      <h3 className="text-lg font-bold mb-3 group-hover:text-cyan-600 transition-colors leading-tight line-clamp-2">
                        {review.title}
                      </h3>

                      <div className="flex items-center justify-between text-sm text-gray-500 mb-3">
                        <p>{review.genre}</p>
                      </div>

                      <div className="text-xs text-gray-500 mb-3">
                        <div>
                          By {review.writer} & {review.artist}
                        </div>
                      </div>

                      <div className="flex items-center justify-between pt-3 border-t border-gray-100">
                        <div className="flex items-center space-x-3 text-xs text-gray-500">
                          <div className="flex items-center space-x-1">
                            <Heart className="w-3 h-3" />
                            <span>{review.likes}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <MessageSquare className="w-3 h-3" />
                            <span>{review.comments}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default ScienceComicsPage