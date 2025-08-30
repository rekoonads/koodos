
  const nintendoGames = [
      title: "Super Mario Bros. Wonder",
      rating: 9.8,
      category: "Platformer",
      excerpt: "Nintendo's latest 2D Mario adventure brings wonder and innovation to the classic formula with new power-ups and multiplayer features.",
      image: "/mario-nintendo-2024.png",
      date: "1 week ago",
      likes: 678,
      comments: 234,
      author: "Lisa Park",
      readTime: "14 min read",
      platform: "Nintendo Switch",
      genre: "Platformer",
      releaseDate: "Oct 2023",
      title: "The Legend of Zelda: Tears of the Kingdom",
      rating: 9.9,
      category: "Action-Adventure",
      excerpt: "Link's latest adventure expands the open world with new abilities, sky islands, and underground exploration.",
      image: "/elden-ring-guide.png",
      date: "2 weeks ago",
      likes: 892,
      comments: 345,
      author: "David Kim",
      readTime: "18 min read",
      platform: "Nintendo Switch",
      genre: "Action-Adventure",
      releaseDate: "May 2023",
      title: "Pokémon Scarlet & Violet",
      rating: 8.5,
      category: "RPG",
      excerpt: "The latest Pokémon games introduce open-world exploration and new Pokémon with unique abilities.",
      image: "/generic-superhero-game.png",
      date: "3 weeks ago",
      likes: 445,
      comments: 156,
      author: "Emma Wilson",
      readTime: "16 min read",
      platform: "Nintendo Switch",
      genre: "RPG",
      releaseDate: "Nov 2022",
      title: "Metroid Dread",
      rating: 9.2,
      category: "Action",
      excerpt: "Samus returns in this atmospheric 2D Metroid game with intense boss battles and exploration.",
      image: "/alan-wake-2-horror.png",
      date: "1 month ago",
      likes: 567,
      comments: 189,
      author: "Mike Rodriguez",
      readTime: "12 min read",
      platform: "Nintendo Switch",
      genre: "Action",
      releaseDate: "Oct 2021",
  ]

  const upcomingNintendoGames = [
  ]

    if (rating >= 9) return "text-green-400 bg-green-500/20 border-green-500/30"
    if (rating >= 8) return "text-blue-400 bg-blue-500/20 border-blue-500/30"
    if (rating >= 7) return "text-yellow-400 bg-yellow-500/20 border-yellow-500/30"
    if (rating >= 6) return "text-orange-400 bg-orange-500/20 border-orange-500/30"
    return "text-red-400 bg-red-500/20 border-red-500/30"


  return (
    <div className="min-h-screen bg-background">
      <div className="px-4 sm:px-6 lg:px-8 py-8">
      </div>
      
      <div className="relative bg-gradient-to-br from-slate-900 via-red-900 to-pink-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('/nintendo-pattern.png')] opacity-10"></div>
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-32 h-32 bg-red-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-40 h-40 bg-pink-500/10 rounded-full blur-3xl"></div>
        </div>
        <div className="relative px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-24">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <div className="flex items-center justify-center mb-6">
                <span className="text-red-300 font-semibold tracking-wide text-lg">NINTENDO GAMING</span>
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-6 lg:mb-8">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 via-pink-400 to-purple-400">
                  Gaming
                </span>
              </h1>
              <p className="text-lg sm:text-xl lg:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
                Latest Nintendo Switch games, exclusive titles, and Nintendo Direct announcements
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 lg:gap-8 max-w-4xl mx-auto">
                <div className="text-center">
                  <div className="text-3xl lg:text-5xl font-bold text-red-400 mb-2">150+</div>
                  <div className="text-sm lg:text-base text-gray-400">Nintendo Games</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl lg:text-5xl font-bold text-pink-400 mb-2">9.1</div>
                  <div className="text-sm lg:text-base text-gray-400">Average Rating</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl lg:text-5xl font-bold text-purple-400 mb-2">45K+</div>
                  <div className="text-sm lg:text-base text-gray-400">Nintendo Fans</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl lg:text-5xl font-bold text-red-400 mb-2">Switch</div>
                  <div className="text-sm lg:text-base text-gray-400">Exclusive</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 xl:grid-cols-4 gap-8 lg:gap-12 mb-16">
            <div className="xl:col-span-3">
              <div className="flex items-center mb-8">
                <div className="h-1 bg-gradient-to-r from-red-500 to-pink-500 rounded-full w-16 mr-4"></div>
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">Latest Nintendo Games</h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <Card className="bg-white hover:shadow-xl transition-all duration-300 group-hover:scale-[1.02] border border-gray-200 hover:border-red-300 overflow-hidden">
                      <div className="relative">
                        <img
                          className="w-full h-48 object-cover"
                        <div className="absolute top-3 left-3 flex gap-2">
                          <Badge className="bg-red-600 text-white font-medium">
                          </Badge>
                          <Badge className="bg-pink-600 text-white font-medium">
                          </Badge>
                        </div>
                        <div className="absolute top-3 right-3 bg-black/70 text-white text-xs px-2 py-1 rounded flex items-center gap-1 backdrop-blur-sm">
                        </div>
                        <div className="absolute bottom-3 left-3">
                          </Badge>
                        </div>
                      </div>
                      <CardContent className="p-6">
                        <div className="flex items-center justify-between mb-3">
                        </div>
                        <CardTitle className="text-lg mb-3 group-hover:text-red-600 transition-colors line-clamp-2">
                        </CardTitle>
                        <div className="flex items-center justify-between text-xs text-gray-500">
                          <div className="flex items-center gap-3">
                            <div className="flex items-center gap-1">
                            </div>
                            <div className="flex items-center gap-1">
                            </div>
                          </div>
                          <div className="flex items-center gap-2">
                            <div className="flex items-center gap-1">
                            </div>
                            <div className="flex items-center gap-1">
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
              </div>
            </div>

            <div className="xl:col-span-1">
              <div className="bg-gradient-to-br from-red-50 to-pink-50 rounded-2xl p-6 lg:p-8 border border-red-200 sticky top-8">
                <div className="flex items-center mb-6">
                  <h3 className="text-xl font-bold text-gray-900">Upcoming Games</h3>
                </div>

                <div className="space-y-4">
                    <div
                      className="flex items-center justify-between p-4 bg-white rounded-xl border border-red-100 hover:border-red-200 transition-colors"
                    >
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-gradient-to-br from-red-500 to-pink-500 rounded-lg flex items-center justify-center text-white font-bold text-sm">
                        </div>
                        <div>
                        </div>
                      </div>
                      <div className="text-xs text-red-600 font-medium">
                      </div>
                    </div>
                </div>

                <div className="mt-8 p-4 bg-white rounded-xl border border-red-100">
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="font-semibold text-gray-900">Nintendo Stats</h4>
                  </div>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600">Switch Sales</span>
                      <span className="font-semibold text-gray-900">140M+</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600">Avg Rating</span>
                      <span className="font-semibold text-red-600">9.1/10</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600">Exclusive Games</span>
                      <span className="font-semibold text-gray-900">50+</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
