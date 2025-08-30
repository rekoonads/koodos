  Star,
  Users,
  Calendar,
  Camera,
  Palette,
  BookOpen,
  Sparkles,
  ArrowRight,
  TrendingUp,
  Eye,
  Clock,
  MessageCircle,
  ThumbsUp,
  Play,

const animeReviews = [
    id: 1,
    title: "Attack on Titan Final Season Review",
    rating: 9.5,
    studio: "Studio MAPPA",
    genre: "Action, Drama",
    status: "Completed",
    episodes: 24,
    image: "/anime-aot-final.png",
    description:
      "An epic conclusion to one of anime's greatest stories with breathtaking animation and emotional depth that delivers a satisfying end to the decade-long journey.",
    author: "Anime Critic",
    publishDate: "3 days ago",
    readTime: "8 min read",
    views: "89K",
    likes: "4.2K",
    comments: "892",
    tags: ["Shonen", "Dark Fantasy", "Military"],
    year: 2023,
    director: "Yuichiro Hayashi",
    trending: true,
    id: 2,
    title: "Demon Slayer: Hashira Training Arc",
    rating: 8.8,
    studio: "Ufotable",
    genre: "Action, Supernatural",
    status: "Ongoing",
    episodes: 12,
    image: "/anime-demon-slayer.png",
    description:
      "Stunning animation brings the training arc to life with incredible fight sequences and character development that sets up the final battle perfectly.",
    author: "Sarah Johnson",
    publishDate: "1 week ago",
    readTime: "12 min read",
    views: "67K",
    likes: "3.8K",
    comments: "567",
    tags: ["Shonen", "Supernatural", "Historical"],
    year: 2024,
    director: "Haruo Sotozaki",
    trending: true,
    id: 3,
    title: "Jujutsu Kaisen Season 2",
    rating: 9.2,
    studio: "Studio MAPPA",
    genre: "Action, Supernatural",
    status: "Completed",
    episodes: 23,
    image: "/anime-jjk-s2.png",
    description:
      "Dark and intense continuation of the beloved series with the Shibuya Incident arc delivering some of the most impactful moments in modern anime.",
    author: "Mike Rodriguez",
    publishDate: "2 weeks ago",
    readTime: "15 min read",
    views: "156K",
    likes: "7.3K",
    comments: "1.2K",
    tags: ["Shonen", "Urban Fantasy", "School"],
    year: 2023,
    director: "Sunghoo Park",
    trending: true,
    id: 4,
    title: "Frieren: Beyond Journey's End",
    rating: 9.7,
    studio: "Madhouse",
    genre: "Fantasy, Drama",
    status: "Ongoing",
    episodes: 28,
    image: "/anime-frieren.png",
    description:
      "A masterpiece of storytelling that explores themes of mortality, friendship, and the passage of time through the eyes of an immortal elf.",
    author: "Emma Wilson",
    publishDate: "4 days ago",
    readTime: "10 min read",
    views: "234K",
    likes: "12.5K",
    comments: "2.1K",
    tags: ["Fantasy", "Slice of Life", "Adventure"],
    year: 2023,
    director: "Keiichiro Saito",
    trending: true,
]

const cosplayFeatures = [
    id: 1,
    title: "Nezuko Kamado Cosplay Tutorial - Complete Guide",
    cosplayer: "SakuraCosplay",
    difficulty: "Intermediate",
    views: "45K",
    image: "/cosplay-nezuko.png",
    category: "Tutorial",
    description:
      "Step-by-step guide to creating the perfect Nezuko cosplay including makeup, costume construction, and prop making.",
    likes: "2.1K",
    comments: "345",
    duration: "25 min",
    materials: ["Fabric", "Makeup", "Bamboo Prop"],
    publishDate: "5 days ago",
    featured: true,
    id: 2,
    title: "Convention Spotlight: Anime Expo 2024 Best Cosplays",
    cosplayer: "Various Artists",
    difficulty: "Showcase",
    views: "128K",
    image: "/cosplay-convention.png",
    category: "Event",
    description:
      "Highlighting the most impressive cosplays from Anime Expo 2024, featuring incredible craftsmanship and creativity.",
    likes: "5.7K",
    comments: "892",
    duration: "18 min",
    materials: ["Convention Coverage"],
    publishDate: "1 week ago",
    featured: true,
    id: 3,
    title: "Gojo Satoru Cosplay Breakdown - Advanced Techniques",
    cosplayer: "CosplayKing",
    difficulty: "Advanced",
    views: "67K",
    image: "/cosplay-gojo.png",
    category: "Tutorial",
    description:
      "Advanced cosplay techniques for recreating Gojo's iconic look including LED effects and detailed costume work.",
    likes: "3.4K",
    comments: "456",
    duration: "35 min",
    materials: ["LEDs", "Contact Lenses", "Wig Styling"],
    publishDate: "3 days ago",
    featured: false,
    id: 4,
    title: "Makima Chainsaw Man Cosplay - Character Study",
    cosplayer: "AnimeQueen",
    difficulty: "Intermediate",
    views: "89K",
    image: "/cosplay-makima.png",
    category: "Character Study",
    description:
      "Deep dive into Makima's character design and how to capture her intimidating presence through cosplay.",
    likes: "4.1K",
    comments: "623",
    duration: "22 min",
    materials: ["Business Suit", "Contact Lenses", "Makeup"],
    publishDate: "1 week ago",
    featured: false,
]

const mangaSpotlight = [
    id: 1,
    title: "One Piece",
    chapter: "Chapter 1095",
    rating: 9.8,
    author: "Eiichiro Oda",
    status: "Ongoing",
    genre: "Adventure, Comedy",
    weeklyReads: "2.5M",
    totalChapters: 1095,
    id: 2,
    title: "My Hero Academia",
    chapter: "Chapter 405",
    rating: 8.9,
    author: "Kohei Horikoshi",
    status: "Ongoing",
    genre: "Superhero, School",
    weeklyReads: "1.8M",
    totalChapters: 405,
    id: 3,
    title: "Chainsaw Man",
    chapter: "Chapter 145",
    rating: 9.4,
    author: "Tatsuki Fujimoto",
    status: "Ongoing",
    genre: "Horror, Action",
    weeklyReads: "2.1M",
    totalChapters: 145,
    id: 4,
    title: "Jujutsu Kaisen",
    chapter: "Chapter 245",
    rating: 9.1,
    author: "Gege Akutami",
    status: "Ongoing",
    genre: "Supernatural, School",
    weeklyReads: "1.9M",
    totalChapters: 245,
]

const seasonalAnime = [
    title: "Solo Leveling",
    studio: "A-1 Pictures",
    status: "Winter 2024",
    genre: "Action, Fantasy",
    hype: "Very High",
    title: "Dungeon Meshi",
    studio: "Studio Trigger",
    status: "Winter 2024",
    genre: "Fantasy, Comedy",
    hype: "High",
    title: "Mashle Season 2",
    studio: "A-1 Pictures",
    status: "Winter 2024",
    genre: "Comedy, Magic",
    hype: "High",
    title: "Bucchigiri?!",
    studio: "Studio MAPPA",
    status: "Winter 2024",
    genre: "Action, School",
    hype: "Medium",
]

const animeNews = [
    title: "Studio Ghibli Announces New Film Project",
    excerpt: "Hayao Miyazaki returns with another masterpiece in development.",
    timeAgo: "2 hours ago",
    category: "Industry News",
    views: "45K",
    title: "Attack on Titan Final Movie Confirmed",
    excerpt: "The epic conclusion will receive a theatrical release in 2024.",
    timeAgo: "1 day ago",
    category: "Anime News",
    views: "89K",
    title: "Crunchyroll Expands Anime Library",
    excerpt: "New licensing deals bring classic and modern anime to the platform.",
    timeAgo: "3 days ago",
    category: "Streaming",
    views: "32K",
]

  return (
    <div className="bg-white min-h-screen">
      <div className="relative bg-gradient-to-br from-pink-900 via-rose-800 to-purple-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('/anime-pattern.png')] opacity-10"></div>
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-32 h-32 bg-pink-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-40 h-40 bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-rose-500/15 rounded-full blur-2xl animate-pulse delay-500"></div>
        </div>
        <div className="relative px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <div className="flex items-center justify-center mb-4">
                <span className="text-pink-300 font-semibold tracking-wide text-base">KOODOS ANIME & MANGA</span>
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 lg:mb-6">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-rose-400 to-purple-400">
                  Anime & Manga
                </span>
              </h1>
              <p className="text-base sm:text-lg lg:text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
                Your ultimate destination for anime reviews, manga coverage, cosplay features, and otaku culture
              </p>

              <div className="flex flex-wrap justify-center gap-3 mb-8">
                <div className="group bg-gradient-to-r from-pink-600 to-rose-500 hover:from-pink-500 hover:to-rose-400 px-6 py-3 rounded-xl font-semibold transition-all duration-300 cursor-pointer transform hover:scale-105 shadow-lg hover:shadow-pink-500/25">
                  <span className="flex items-center">
                    Anime Coverage
                  </span>
                </div>
                <div className="group bg-gradient-to-r from-purple-600 to-pink-500 hover:from-purple-500 hover:to-pink-400 px-6 py-3 rounded-xl font-semibold transition-all duration-300 cursor-pointer transform hover:scale-105 shadow-lg hover:shadow-purple-500/25">
                  <span className="flex items-center">
                    Cosplay
                  </span>
                </div>
                <div className="group bg-gradient-to-r from-rose-600 to-purple-500 hover:from-rose-500 hover:to-purple-400 px-6 py-3 rounded-xl font-semibold transition-all duration-300 cursor-pointer transform hover:scale-105 shadow-lg hover:shadow-rose-500/25">
                  <span className="flex items-center">
                    Manga Reviews
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 lg:gap-6 max-w-3xl mx-auto">
                <div className="text-center">
                  <div className="text-2xl lg:text-3xl font-bold text-pink-400 mb-1">300+</div>
                  <div className="text-xs lg:text-sm text-gray-400">Anime Reviews</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl lg:text-3xl font-bold text-rose-400 mb-1">150+</div>
                  <div className="text-xs lg:text-sm text-gray-400">Cosplay Features</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl lg:text-3xl font-bold text-purple-400 mb-1">500+</div>
                  <div className="text-xs lg:text-sm text-gray-400">Manga Chapters</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl lg:text-3xl font-bold text-pink-400 mb-1">25K+</div>
                  <div className="text-xs lg:text-sm text-gray-400">Otaku Community</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center">
                <div className="h-1 bg-gradient-to-r from-red-500 to-pink-500 rounded-full w-16 mr-4"></div>
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">Latest Anime News</h2>
              </div>
              <Link href="/anime-manga/news" className="text-red-600 hover:text-red-800 font-medium flex items-center">
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="bg-gradient-to-br from-pink-50 to-rose-50 border border-pink-200 hover:border-pink-300 p-6 rounded-xl transition-all duration-300 hover:shadow-lg group-hover:scale-[1.02]">
                    <div className="flex items-center justify-between mb-3">
                      <span className="bg-pink-600 text-white text-xs px-3 py-1 rounded-full font-medium">
                      </span>
                    </div>
                    <h3 className="font-bold text-gray-900 mb-3 group-hover:text-pink-600 transition-colors">
                    </h3>
                    <div className="flex items-center justify-between text-xs text-gray-500">
                      <div className="flex items-center gap-1">
                      </div>
                    </div>
                  </div>
                </Link>
            </div>
          </div>

          <div className="grid grid-cols-1 xl:grid-cols-4 gap-8 lg:gap-12 mb-16">
            <div className="xl:col-span-3">
              <div className="flex items-center mb-8">
                <div className="h-1 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full w-16 mr-4"></div>
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">Latest Anime Reviews</h2>
              </div>

              <div className="space-y-8">
                    <Card className="group bg-white border border-gray-200 hover:border-pink-300 hover:shadow-2xl hover:shadow-pink-500/10 transition-all duration-500 overflow-hidden">
                      <div className="grid grid-cols-1 lg:grid-cols-3 gap-0">
                        <div className="lg:col-span-1">
                          <div className="aspect-video lg:aspect-square bg-gradient-to-br from-pink-100 to-purple-100 relative overflow-hidden">
                            <div className="absolute inset-0 bg-gradient-to-br from-pink-500/20 to-purple-500/20 flex items-center justify-center">
                              <span className="text-gray-600 font-medium">Anime Poster</span>
                            </div>
                            <div className="absolute top-4 right-4">
                              <div className="px-4 py-2 rounded-xl border-2 bg-white/90 border-pink-300 text-pink-600">
                                <div className="flex items-center space-x-1">
                                </div>
                              </div>
                            </div>
                            <div className="absolute bottom-4 left-4 flex gap-2">
                                <Badge className="bg-red-600 text-white font-bold px-3 py-1">Trending</Badge>
                            </div>
                          </div>
                        </div>

                        <CardContent className="lg:col-span-2 p-6 lg:p-8">
                          <div className="flex items-start justify-between mb-4">
                            <div className="flex items-center space-x-3">
                            </div>
                            <div className="flex items-center space-x-4 text-sm text-gray-500">
                              <div className="flex items-center space-x-1">
                              </div>
                              <div className="flex items-center space-x-1">
                              </div>
                            </div>
                          </div>

                          <CardTitle className="text-xl lg:text-2xl mb-4 text-gray-900 group-hover:text-pink-600 transition-colors leading-tight">
                          </CardTitle>


                          <div className="flex flex-wrap gap-2 mb-4">
                              </span>
                          </div>

                          <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                            <div className="flex items-center gap-3">
                              <span>
                              </span>
                              <span>
                              </span>
                              <span>
                              </span>
                            </div>
                          </div>

                          <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-6 text-sm text-gray-500">
                              <div className="flex items-center space-x-2">
                              </div>
                              <div className="flex items-center space-x-2">
                              </div>
                              <div className="flex items-center space-x-2">
                              </div>
                            </div>
                          </div>
                        </CardContent>
                      </div>
                    </Card>
                  </Link>
              </div>
            </div>

            <div className="xl:col-span-1 space-y-8">
              <div className="bg-gradient-to-br from-pink-50 to-purple-50 rounded-2xl p-6 lg:p-8 border border-pink-200 sticky top-8">
                <div className="flex items-center mb-6">
                  <h3 className="text-xl font-bold text-gray-900">Trending Manga</h3>
                </div>

                <div className="space-y-4">
                      <div className="flex items-center justify-between p-4 bg-white rounded-xl border border-pink-100 hover:border-pink-200 transition-colors group">
                        <div className="flex items-center space-x-3">
                          <div className="w-8 h-8 bg-gradient-to-br from-pink-500 to-purple-500 rounded-lg flex items-center justify-center text-white font-bold text-sm">
                          </div>
                          <div>
                            <div className="font-semibold text-gray-900 text-sm group-hover:text-pink-600 transition-colors">
                            </div>
                            <div className="text-xs text-gray-500">
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center space-x-1 text-pink-600">
                        </div>
                      </div>
                    </Link>
                </div>
              </div>

              <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-6 border border-purple-200">
                <div className="flex items-center mb-6">
                  <h3 className="text-xl font-bold text-gray-900">Seasonal Anime</h3>
                </div>

                <div className="space-y-4">
                      <div className="flex items-center justify-between mb-2">
                        <span
                            anime.hype === "Very High"
                              ? "bg-red-100 text-red-600"
                              : anime.hype === "High"
                                ? "bg-orange-100 text-orange-600"
                                : "bg-blue-100 text-blue-600"
                        >
                        </span>
                      </div>
                      <div className="text-xs text-gray-500">
                      </div>
                    </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mb-16">
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center">
                <div className="h-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full w-16 mr-4"></div>
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">Cosplay Showcase</h2>
              </div>
              <Link
                href="/anime-manga/cosplay"
                className="text-purple-600 hover:text-purple-800 font-medium flex items-center"
              >
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 lg:gap-8">
                  <Card className="group hover:shadow-2xl transition-all duration-500 cursor-pointer border border-gray-200 hover:border-purple-200 overflow-hidden">
                    <div className="relative overflow-hidden">
                      <div className="aspect-square bg-gradient-to-br from-purple-100 to-pink-100 relative">
                        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-pink-500/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                            ) : (
                          </div>
                        </div>
                        <div className="absolute top-4 left-4 flex gap-2">
                            <Badge className="bg-purple-600 text-white text-xs font-medium">Featured</Badge>
                        </div>
                        <div className="absolute top-4 right-4">
                          <div className="flex items-center space-x-1 bg-black/70 text-white px-2 py-1 rounded text-xs">
                          </div>
                        </div>
                          <div className="absolute bottom-4 right-4 bg-black/70 text-white px-2 py-1 rounded text-xs">
                          </div>
                      </div>
                    </div>

                    <CardContent className="p-6">
                      <CardTitle className="text-lg mb-3 group-hover:text-purple-600 transition-colors leading-tight line-clamp-2">
                      </CardTitle>


                      <div className="flex items-center justify-between text-sm text-gray-500 mb-3">
                        <Badge
                            cosplay.difficulty === "Advanced"
                              ? "bg-red-100 text-red-800"
                              : cosplay.difficulty === "Intermediate"
                                ? "bg-yellow-100 text-yellow-800"
                                : cosplay.difficulty === "Showcase"
                                  ? "bg-blue-100 text-blue-800"
                                  : "bg-green-100 text-green-800"
                        >
                        </Badge>
                      </div>

                      <div className="flex flex-wrap gap-1 mb-3">
                          </span>
                      </div>

                      <div className="flex items-center justify-between pt-3 border-t border-gray-100">
                        <div className="flex items-center space-x-3 text-xs text-gray-500">
                          <div className="flex items-center space-x-1">
                          </div>
                          <div className="flex items-center space-x-1">
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
