
  const discussions = [
      title: "The Future of Gaming: VR vs Traditional Gaming",
      author: "TechVisionary",
      replies: 89,
      views: 1247,
      category: "Technology",
      isHot: true,
      lastActivity: "15 minutes ago",
      title: "Indie Games That Deserve More Recognition",
      author: "IndieSupporter",
      replies: 34,
      views: 567,
      category: "Indie Games",
      isHot: false,
      lastActivity: "1 hour ago",
      title: "Console Wars: PS5 vs Xbox Series X in 2024",
      author: "ConsoleGuru",
      replies: 156,
      views: 2341,
      category: "Console Gaming",
      isHot: true,
      lastActivity: "30 minutes ago",
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="ml-64">
        <main className="p-6">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h1 className="text-3xl font-bold text-gray-900 mb-2">Discussions</h1>
                <p className="text-gray-600">
                  Engage in meaningful conversations about gaming topics that matter to you.
                </p>
              </div>
              <Button className="bg-purple-600 hover:bg-purple-700">Start Discussion</Button>
            </div>

            <div className="space-y-4">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center space-x-3 mb-2">
                            <Badge variant="destructive" className="flex items-center space-x-1">
                              <span>Hot</span>
                            </Badge>
                        </div>
                        <div className="flex items-center space-x-4 text-sm text-gray-500">
                          <div className="flex items-center space-x-1">
                          </div>
                          <div className="flex items-center space-x-1">
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
