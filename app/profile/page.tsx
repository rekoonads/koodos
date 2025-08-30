"use client"


  const [isEditing, setIsEditing] = useState(false)

  // Mock user data for demo
    name: user?.fullName || "Demo User",
    username: user?.username || "demo_gamer",
    email: user?.emailAddresses?.[0]?.emailAddress || "demo@koodos.in",
    bio: "Passionate gamer and reviewer. Love RPGs, indie games, and competitive esports.",
    location: "San Francisco, CA",
    website: "https://gaming-blog.com",
    joinDate: "January 2023",
      reviews: 42,
      likes: 1337,
      comments: 256,
      followers: 89,
      following: 156,
    badges: ["Verified Reviewer", "Top Contributor", "Early Adopter"],
    recentActivity: [
    ],

  return (
    <div className="min-h-screen bg-gray-100">

      <main className="ml-64 pt-16 p-6">
        <div className="max-w-6xl mx-auto space-y-6">
          <Card className="bg-white shadow-sm">
            <CardContent className="p-6">
              <div className="flex items-start justify-between">
                <div className="flex items-center space-x-6">
                  <Avatar className="w-24 h-24">
                  </Avatar>

                  <div className="space-y-2">
                    <div>
                    </div>


                    <div className="flex items-center space-x-4 text-sm text-gray-600">
                      <div className="flex items-center space-x-1">
                      </div>
                      <div className="flex items-center space-x-1">
                        </a>
                      </div>
                      <div className="flex items-center space-x-1">
                      </div>
                    </div>

                    <div className="flex space-x-2">
                        </Badge>
                    </div>
                  </div>
                </div>

                  Edit Profile
                </Button>
              </div>

              <div className="grid grid-cols-5 gap-4 mt-6 pt-6 border-t">
                <div className="text-center">
                  <div className="text-sm text-gray-600">Reviews</div>
                </div>
                <div className="text-center">
                  <div className="text-sm text-gray-600">Likes</div>
                </div>
                <div className="text-center">
                  <div className="text-sm text-gray-600">Comments</div>
                </div>
                <div className="text-center">
                  <div className="text-sm text-gray-600">Followers</div>
                </div>
                <div className="text-center">
                  <div className="text-sm text-gray-600">Following</div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Tabs defaultValue="activity" className="space-y-4">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="activity">Recent Activity</TabsTrigger>
              <TabsTrigger value="reviews">My Reviews</TabsTrigger>
              <TabsTrigger value="favorites">Favorites</TabsTrigger>
              <TabsTrigger value="settings">Settings</TabsTrigger>
            </TabsList>

            <TabsContent value="activity" className="space-y-4">
                  <CardContent className="p-4">
                    <div className="flex items-center space-x-3">

                      <div className="flex-1">
                        <div className="flex items-center justify-between">
                          <div>
                            <span className="font-medium text-gray-900">
                            </span>
                              <div className="flex items-center space-x-1 mt-1">
                              </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
            </TabsContent>

            <TabsContent value="reviews">
              <Card className="bg-white shadow-sm">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <span>My Game Reviews</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">Your game reviews will appear here.</p>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="favorites">
              <Card className="bg-white shadow-sm">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <span>Favorite Games</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">Your favorite games will appear here.</p>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="settings">
              <Card className="bg-white shadow-sm">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <span>Account Settings</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">Profile settings and preferences will appear here.</p>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </main>

    </div>
  )
