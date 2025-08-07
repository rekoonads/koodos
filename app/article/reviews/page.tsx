"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Star, ThumbsUp, ThumbsDown, ShoppingCart } from "lucide-react"

const gameReviews = [
  {
    id: 1,
    title: "Cyberpunk 2077: Phantom Liberty",
    cover: "/placeholder.svg?height=400&width=300",
    rating: 8.5,
    summary: "A redemptive expansion that finally delivers on the original promise",
    pros: ["Engaging storyline", "Improved performance", "Great voice acting"],
    cons: ["Still some bugs", "Limited replay value"],
    verdict: "Phantom Liberty is the Cyberpunk experience we were promised in 2020.",
    price: "$29.99"
  },
  {
    id: 2,
    title: "Spider-Man 2",
    cover: "/placeholder.svg?height=400&width=300",
    rating: 9.2,
    summary: "Web-slinging perfection with dual protagonists",
    pros: ["Fluid combat", "Amazing graphics", "Compelling story"],
    cons: ["Short campaign", "Repetitive side missions"],
    verdict: "The best Spider-Man game to date with incredible attention to detail.",
    price: "$69.99"
  }
]

export default function ReviewsPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-6xl mx-auto px-6 py-8">
        <motion.h1 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold mb-8 text-gray-900"
        >
          Game Reviews
        </motion.h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {gameReviews.map((review, index) => (
            <motion.div
              key={review.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-lg"
            >
              <div className="relative">
                <Image
                  src={review.cover}
                  alt={review.title}
                  width={300}
                  height={400}
                  className="w-full h-64 object-cover"
                />
                <div className="absolute top-4 right-4 bg-yellow-500 text-black px-3 py-2 rounded-full font-bold text-lg flex items-center gap-1">
                  <Star className="w-5 h-5 fill-current" />
                  {review.rating}
                </div>
              </div>

              <div className="p-6">
                <h2 className="text-2xl font-bold mb-2 text-gray-900">{review.title}</h2>
                <p className="text-gray-600 mb-4">{review.summary}</p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                  <div className="bg-green-50 border border-green-200 p-4 rounded-lg">
                    <div className="flex items-center gap-2 mb-2">
                      <ThumbsUp className="w-4 h-4 text-green-400" />
                      <h3 className="font-semibold text-green-700">Pros</h3>
                    </div>
                    <ul className="text-sm space-y-1">
                      {review.pros.map((pro, i) => (
                        <li key={i} className="text-gray-700">• {pro}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="bg-red-50 border border-red-200 p-4 rounded-lg">
                    <div className="flex items-center gap-2 mb-2">
                      <ThumbsDown className="w-4 h-4 text-red-400" />
                      <h3 className="font-semibold text-red-700">Cons</h3>
                    </div>
                    <ul className="text-sm space-y-1">
                      {review.cons.map((con, i) => (
                        <li key={i} className="text-gray-700">• {con}</li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="bg-gray-100 p-4 rounded-lg mb-4">
                  <h3 className="font-semibold mb-2 text-gray-900">Verdict</h3>
                  <p className="text-gray-600 text-sm">{review.verdict}</p>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-green-600">{review.price}</span>
                  <button className="bg-blue-600 hover:bg-blue-700 px-6 py-2 rounded-lg font-semibold flex items-center gap-2 transition-colors">
                    <ShoppingCart className="w-4 h-4" />
                    Buy Now
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}