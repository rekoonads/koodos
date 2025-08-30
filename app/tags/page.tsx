
  // Mock tag cloud data
  const tagCloud = [
  ]

  const trendingTags = [
  ]

  const categories = [
  ]

  return (
    <div className="min-h-screen bg-black">

      <main className="ml-64 bg-gray-50 min-h-screen">
        <div className="bg-gradient-to-r from-indigo-600 to-purple-600 py-12 px-6">
          <div className="max-w-6xl mx-auto text-center">
            <div className="flex items-center justify-center gap-3 mb-4">
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
                Tag Cloud
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-4 items-center justify-center py-8">
                  <Link
                  >
                  </Link>
              </div>
            </CardContent>
          </Card>

          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                Trending Tags
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                  <Link
                    className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                  >
                    <div>
                    </div>
                    <Badge variant="secondary" className="bg-green-100 text-green-800">
                    </Badge>
                  </Link>
              </div>
            </CardContent>
          </Card>

          <div className="grid md:grid-cols-2 gap-6">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                        <Badge variant="outline" className="hover:bg-blue-50 cursor-pointer">
                        </Badge>
                      </Link>
                  </div>
                </CardContent>
              </Card>
          </div>
        </div>
      </main>
    </div>
  )
