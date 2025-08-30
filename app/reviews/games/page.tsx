"use client"

export default function GameReviewsPage() {
  const gameReviews = [
    {
      title: "Cyberpunk 2077: Phantom Liberty Review",
      rating: 8.5,
      category: "RPG",
      excerpt: "A stellar expansion that redeems the cyberpunk experience with compelling storytelling and improved gameplay mechanics.",
      image: "/cyberpunk-phantom-liberty.png",
      date: "2 days ago",
      author: "Alex Chen",
    },
    {
      title: "Spider-Man 2 PS5 Review",
      rating: 9.2,
      category: "Action",
      excerpt: "Insomniac delivers another web-slinging masterpiece with enhanced combat and stunning visuals.",
      image: "/spider-man-2-ps5.png",
      date: "1 week ago",
      author: "Sarah Johnson",
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      <div className="relative bg-gradient-to-br from-purple-900 via-indigo-900 to-blue-900 text-white overflow-hidden">
        <div className="relative px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-24">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-indigo-400 to-blue-400">
                Game Reviews
              </span>
            </h1>
            <p className="text-lg sm:text-xl lg:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto">
              In-depth reviews of the latest games with expert analysis and ratings
            </p>
          </div>
        </div>
      </div>
      <div className="px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {gameReviews.map((review, index) => (
              <div key={index} className="bg-white rounded-xl overflow-hidden shadow-lg border border-gray-200">
                <div className="p-6">
                  <h3 className="font-bold text-gray-900 mb-3">{review.title}</h3>
                  <p className="text-gray-600 text-sm mb-4">{review.excerpt}</p>
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <span>{review.author}</span>
                    <span>{review.date}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}