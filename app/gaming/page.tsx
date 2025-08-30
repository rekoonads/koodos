
const featuredGames = [
    id: 1,
    title: "Cyberpunk 2077: Phantom Liberty",
    description:
      "The ultimate expansion that redefines Night City with new characters, storylines, and gameplay mechanics.",
    rating: 4.8,
    platform: "PC, PS5, Xbox",
    genre: "RPG",
    releaseDate: "Sep 2023",
    image: "/cyberpunk-phantom-liberty.png",
    price: "$29.99",
    discount: "20% OFF",
    views: "125K",
    likes: 3420,
    comments: 892,
    author: "Alex Chen",
    readTime: "12 min read",
    category: "Game Review",
    id: 2,
    title: "Spider-Man 2 PS5",
    description: "Web-slinging perfection with dual protagonists and enhanced combat mechanics that set new standards.",
    rating: 4.9,
    platform: "PS5 Exclusive",
    genre: "Action-Adventure",
    releaseDate: "Oct 2023",
    image: "/spider-man-2-ps5.png",
    price: "$69.99",
    discount: "New Release",
    views: "89K",
    likes: 2156,
    comments: 445,
    author: "Sarah Johnson",
    readTime: "15 min read",
    category: "Game Review",
    id: 3,
    title: "Baldur's Gate 3",
    description: "The definitive RPG experience with unparalleled choice and consequence that redefines modern RPGs.",
    rating: 4.9,
    platform: "PC, PS5, Xbox",
    genre: "RPG",
    releaseDate: "Aug 2023",
    image: "/baldurs-gate-3-rpg.png",
    price: "$59.99",
    discount: "GOTY Edition",
    views: "156K",
    likes: 4521,
    comments: 1203,
    author: "Emma Wilson",
    readTime: "20 min read",
    category: "Game Review",
    id: 4,
    title: "Alan Wake 2",
    description: "A masterpiece of psychological horror that blends reality and nightmare in unprecedented ways.",
    rating: 4.7,
    platform: "PC, PS5, Xbox",
    genre: "Horror",
    releaseDate: "Oct 2023",
    image: "/alan-wake-2-horror.png",
    price: "$49.99",
    discount: "15% OFF",
    views: "78K",
    likes: 1892,
    comments: 567,
    author: "Mike Rodriguez",
    readTime: "18 min read",
    category: "Game Review",
]

const trendingNews = [
    id: 1,
    title: "PlayStation 5 Pro Officially Announced with 8K Gaming Support",
    excerpt: "Sony reveals enhanced console specifications and launch lineup for holiday 2024.",
    timeAgo: "2 hours ago",
    views: "45K",
    comments: 234,
    category: "Hardware News",
    id: 2,
    title: "Xbox Game Pass Ultimate Gets Cloud Gaming Boost",
    excerpt: "Microsoft announces major improvements to streaming quality and game library expansion.",
    timeAgo: "4 hours ago",
    views: "32K",
    comments: 156,
    category: "Service Update",
    id: 3,
    title: "Nintendo Direct February 2024: All Major Announcements",
    excerpt: "New Mario game, Zelda DLC, and third-party surprises revealed in latest presentation.",
    timeAgo: "1 day ago",
    views: "89K",
    comments: 567,
    category: "Gaming News",
]

const upcomingReleases = [
    title: "Final Fantasy VII Rebirth",
    releaseDate: "Feb 29, 2024",
    platform: "PS5 Exclusive",
    preOrder: true,
    title: "Skull and Bones",
    releaseDate: "Feb 16, 2024",
    platform: "Multi-platform",
    preOrder: true,
    title: "Granblue Fantasy Relink",
    releaseDate: "Feb 1, 2024",
    platform: "PC, PS5",
    preOrder: false,
    title: "Helldivers 2",
    releaseDate: "Feb 8, 2024",
    platform: "PC, PS5",
    preOrder: true,
]

  return (
    <div className="min-h-screen bg-background">
      <div className="px-4 sm:px-6 lg:px-8 py-8">
      </div>
      
      <div className="relative bg-gradient-to-br from-slate-900 via-purple-900 to-blue-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('/gaming-pattern.png')] opacity-10"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
        <div className="relative px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
          <div className="max-w-7xl mx-auto">
            <div className="text-center lg:text-left">
              <div className="flex items-center justify-center lg:justify-start mb-4">
                <span className="text-purple-300 font-semibold">KOODOS GAMING</span>
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 lg:mb-6">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
                  Central
                </span>
              </h1>
              <p className="text-lg sm:text-xl text-gray-300 mb-8 max-w-2xl mx-auto lg:mx-0">
                Your ultimate destination for gaming news, reviews, and insights across all platforms
              </p>

              <div className="flex flex-wrap justify-center lg:justify-start gap-3 mb-8">
                <div className="group bg-green-600 hover:bg-green-500 px-4 py-2 rounded-lg font-semibold transition-all duration-300 cursor-pointer transform hover:scale-105">
                  <span className="flex items-center">
                    <span className="w-2 h-2 bg-white rounded-full mr-2"></span>
                    Xbox
                  </span>
                </div>
                <div className="group bg-blue-600 hover:bg-blue-500 px-4 py-2 rounded-lg font-semibold transition-all duration-300 cursor-pointer transform hover:scale-105">
                  <span className="flex items-center">
                    <span className="w-2 h-2 bg-white rounded-full mr-2"></span>
                    PlayStation
                  </span>
                </div>
                <div className="group bg-red-600 hover:bg-red-500 px-4 py-2 rounded-lg font-semibold transition-all duration-300 cursor-pointer transform hover:scale-105">
                  <span className="flex items-center">
                    <span className="w-2 h-2 bg-white rounded-full mr-2"></span>
                    Nintendo
                  </span>
                </div>
                <div className="group bg-gray-700 hover:bg-gray-600 px-4 py-2 rounded-lg font-semibold transition-all duration-300 cursor-pointer transform hover:scale-105">
                  <span className="flex items-center">
                    <span className="w-2 h-2 bg-white rounded-full mr-2"></span>
                    PC
                  </span>
                </div>
                <div className="group bg-orange-600 hover:bg-orange-500 px-4 py-2 rounded-lg font-semibold transition-all duration-300 cursor-pointer transform hover:scale-105">
                  <span className="flex items-center">
                    <span className="w-2 h-2 bg-white rounded-full mr-2"></span>
                    Mobile
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-2xl mx-auto lg:mx-0">
                <div className="text-center">
                  <div className="text-2xl font-bold text-purple-400">500+</div>
                  <div className="text-sm text-gray-400">Game Reviews</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-400">50K+</div>
                  <div className="text-sm text-gray-400">Gamers</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-400">24/7</div>
                  <div className="text-sm text-gray-400">Coverage</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-yellow-400">100+</div>
                  <div className="text-sm text-gray-400">Exclusives</div>
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
              <h2 className="text-3xl lg:text-4xl font-bold text-white">Featured Games</h2>
              <Link href="/reviews" className="text-purple-600 hover:text-purple-800 font-medium flex items-center">
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
                  <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group-hover:scale-[1.02]">
                    <div className="relative">
                      <img
                        className="w-full h-48 object-cover"
                      <div className="absolute top-3 left-3">
                        <span className="bg-red-600 text-white text-xs px-2 py-1 rounded font-medium">
                        </span>
                      </div>
                      <div className="absolute top-3 right-3 bg-black/70 text-white text-xs px-2 py-1 rounded flex items-center gap-1 backdrop-blur-sm">
                      </div>
                      <div className="absolute bottom-3 left-3 right-3 flex justify-between items-center">
                        <span className="bg-black/70 text-white text-xs px-2 py-1 rounded backdrop-blur-sm">
                        </span>
                        <div className="flex items-center gap-2">
                          <span className="bg-green-600 text-white text-xs px-2 py-1 rounded font-medium">
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="p-4">
                      <div className="flex items-center gap-2 mb-2">
                      </div>
                      <h3 className="font-bold text-gray-900 mb-2 line-clamp-2 group-hover:text-purple-600 transition-colors">
                      </h3>
                      <div className="flex items-center justify-between text-xs text-gray-500 mb-2">
                        <div className="flex items-center gap-1">
                        </div>
                        <div className="flex items-center gap-1">
                        </div>
                      </div>
                      <div className="flex items-center justify-between text-xs text-gray-500">
                        <div className="flex items-center gap-2">
                          <div className="flex items-center gap-1">
                          </div>
                          <div className="flex items-center gap-1">
                          </div>
                        </div>
                        <div className="flex items-center gap-1">
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
            </div>
          </div>

          <div className="mb-16">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-3xl lg:text-4xl font-bold text-white">Trending Gaming News</h2>
              <Link href="/latest-updates" className="text-blue-600 hover:text-blue-800 font-medium flex items-center">
              </Link>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                  <div className="bg-gradient-to-br from-blue-50 to-indigo-100 border border-blue-200 hover:border-blue-300 p-6 rounded-xl transition-all duration-300 hover:shadow-lg group-hover:scale-[1.02]">
                    <div className="flex items-center justify-between mb-3">
                      <span className="bg-blue-600 text-white text-xs px-3 py-1 rounded-full font-medium">
                      </span>
                    </div>
                    <h3 className="font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                    </h3>
                    <div className="flex items-center justify-between text-xs text-gray-500">
                      <div className="flex items-center gap-2">
                        <div className="flex items-center gap-1">
                        </div>
                        <div className="flex items-center gap-1">
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
            </div>
          </div>

          <div className="mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-8">Upcoming Releases</h2>
            <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl p-6 lg:p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs text-purple-600 bg-purple-100 px-2 py-1 rounded font-medium">
                      </span>
                        <span className="text-xs text-green-600 bg-green-100 px-2 py-1 rounded">Pre-Order</span>
                    </div>
                    <div className="flex items-center justify-between">
                    </div>
                  </div>
              </div>
            </div>
          </div>

          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">Platform Coverage</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Comprehensive gaming content across all major platforms and devices
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8 mb-16">
            <div className="group bg-gradient-to-br from-green-50 to-green-100 border border-green-200 hover:border-green-300 p-6 lg:p-8 rounded-xl transition-all duration-300 hover:shadow-lg">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center mr-4">
                </div>
                <h3 className="text-xl lg:text-2xl font-bold text-green-800">Xbox Gaming</h3>
              </div>
              <p className="text-green-700 mb-6">Latest Xbox news, Game Pass updates, and exclusive reviews</p>
              <div className="space-y-3">
                <div className="bg-white p-4 rounded-lg border border-green-200 hover:border-green-300 transition-colors group-hover:shadow-sm">
                  <div className="flex items-center justify-between">
                    <span className="font-medium">Halo Infinite Season Update</span>
                  </div>
                  <div className="text-sm text-gray-600 mt-1">New maps and weapons revealed</div>
                </div>
                <div className="bg-white p-4 rounded-lg border border-green-200 hover:border-green-300 transition-colors group-hover:shadow-sm">
                  <div className="flex items-center justify-between">
                    <span className="font-medium">Forza Motorsport Review</span>
                    <div className="flex items-center">
                      <span className="text-sm ml-1">9.2</span>
                    </div>
                  </div>
                  <div className="text-sm text-gray-600 mt-1">Racing perfection achieved</div>
                </div>
                <div className="bg-white p-4 rounded-lg border border-green-200 hover:border-green-300 transition-colors group-hover:shadow-sm">
                  <div className="flex items-center justify-between">
                    <span className="font-medium">Game Pass February Additions</span>
                  </div>
                  <div className="text-sm text-gray-600 mt-1">15 new games this month</div>
                </div>
              </div>
            </div>

            <div className="group bg-gradient-to-br from-blue-50 to-blue-100 border border-blue-200 hover:border-blue-300 p-6 lg:p-8 rounded-xl transition-all duration-300 hover:shadow-lg">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mr-4">
                </div>
                <h3 className="text-xl lg:text-2xl font-bold text-blue-800">PlayStation</h3>
              </div>
              <p className="text-blue-700 mb-6">PS5 exclusives, PlayStation Plus, and Sony gaming news</p>
              <div className="space-y-3">
                <div className="bg-white p-4 rounded-lg border border-blue-200 hover:border-blue-300 transition-colors group-hover:shadow-sm">
                  <div className="flex items-center justify-between">
                    <span className="font-medium">Spider-Man 2 Deep Dive</span>
                    <div className="flex items-center">
                      <span className="text-sm ml-1">9.5</span>
                    </div>
                  </div>
                  <div className="text-sm text-gray-600 mt-1">Web-slinging at its finest</div>
                </div>
                <div className="bg-white p-4 rounded-lg border border-blue-200 hover:border-blue-300 transition-colors group-hover:shadow-sm">
                  <div className="flex items-center justify-between">
                    <span className="font-medium">PS Plus Premium Games</span>
                  </div>
                  <div className="text-sm text-gray-600 mt-1">Monthly lineup revealed</div>
                </div>
                <div className="bg-white p-4 rounded-lg border border-blue-200 hover:border-blue-300 transition-colors group-hover:shadow-sm">
                  <div className="flex items-center justify-between">
                    <span className="font-medium">PSVR2 Game Reviews</span>
                  </div>
                  <div className="text-sm text-gray-600 mt-1">VR gaming revolution</div>
                </div>
              </div>
            </div>

            <div className="group bg-gradient-to-br from-red-50 to-red-100 border border-red-200 hover:border-red-300 p-6 lg:p-8 rounded-xl transition-all duration-300 hover:shadow-lg md:col-span-2 xl:col-span-1">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-red-600 rounded-lg flex items-center justify-center mr-4">
                </div>
                <h3 className="text-xl lg:text-2xl font-bold text-red-800">Nintendo Switch</h3>
              </div>
              <p className="text-red-700 mb-6">Nintendo exclusives, indie gems, and portable gaming</p>
              <div className="space-y-3">
                <div className="bg-white p-4 rounded-lg border border-red-200 hover:border-red-300 transition-colors group-hover:shadow-sm">
                  <div className="flex items-center justify-between">
                    <span className="font-medium">Tears of the Kingdom Guide</span>
                  </div>
                  <div className="text-sm text-gray-600 mt-1">Complete walkthrough available</div>
                </div>
                <div className="bg-white p-4 rounded-lg border border-red-200 hover:border-red-300 transition-colors group-hover:shadow-sm">
                  <div className="flex items-center justify-between">
                    <span className="font-medium">Mario Wonder Review</span>
                    <div className="flex items-center">
                      <span className="text-sm ml-1">9.8</span>
                    </div>
                  </div>
                  <div className="text-sm text-gray-600 mt-1">Wonder-ful platforming</div>
                </div>
                <div className="bg-white p-4 rounded-lg border border-red-200 hover:border-red-300 transition-colors group-hover:shadow-sm">
                  <div className="flex items-center justify-between">
                    <span className="font-medium">Switch Indie Spotlight</span>
                  </div>
                  <div className="text-sm text-gray-600 mt-1">Hidden gems discovered</div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-slate-50 to-gray-100 rounded-2xl p-6 lg:p-12 mb-16">
            <div className="text-center mb-8">
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">Featured Gaming Content</h2>
              <p className="text-lg text-gray-600">Our most popular and trending gaming articles</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
              <div className="group bg-white rounded-xl p-6 lg:p-8 shadow-md hover:shadow-xl transition-all duration-300">
                <div className="w-full h-48 lg:h-56 bg-gradient-to-br from-purple-500 via-pink-500 to-red-500 rounded-xl mb-6 relative overflow-hidden">
                  <div className="absolute inset-0 bg-black/20"></div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="flex items-center justify-between text-white">
                      <span className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-sm">GOTY 2024</span>
                      <div className="flex items-center">
                        <span className="text-sm">9.8</span>
                      </div>
                    </div>
                  </div>
                </div>
                <h3 className="text-xl lg:text-2xl font-bold mb-3 group-hover:text-purple-600 transition-colors">
                  Game of the Year 2024
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Our comprehensive review of this year's best games across all platforms, featuring in-depth analysis
                  and expert opinions.
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium">
                      Featured
                    </span>
                    <span className="text-gray-500 text-sm">2 days ago</span>
                  </div>
                </div>
              </div>

              <div className="group bg-white rounded-xl p-6 lg:p-8 shadow-md hover:shadow-xl transition-all duration-300">
                <div className="w-full h-48 lg:h-56 bg-gradient-to-br from-blue-500 via-cyan-500 to-teal-500 rounded-xl mb-6 relative overflow-hidden">
                  <div className="absolute inset-0 bg-black/20"></div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="flex items-center justify-between text-white">
                      <span className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-sm">Comparison</span>
                      <div className="flex items-center">
                        <span className="text-sm">15K views</span>
                      </div>
                    </div>
                  </div>
                </div>
                <h3 className="text-xl lg:text-2xl font-bold mb-3 group-hover:text-blue-600 transition-colors">
                  Next-Gen Console Comparison
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  PS5 vs Xbox Series X vs Nintendo Switch - Which console is right for your gaming needs? Complete
                  buyer's guide.
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                      Comparison
                    </span>
                    <span className="text-gray-500 text-sm">1 week ago</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
