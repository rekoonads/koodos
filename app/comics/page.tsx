"use client"

import { motion } from "framer-motion"
import Image from "next/image"

const comicsNews = [
  {
    id: "1",
    title: "Marvel's Spider-Man 2 Comic Tie-In Reveals New Storylines",
    excerpt: "The upcoming comic series bridges the gap between the first game and its sequel.",
    image: "/placeholder.svg?height=300&width=400",
    category: "Marvel Comics",
    author: "Comics Editor",
    publishedAt: "4 hours ago",
    readTime: "5 min read",
  },
  {
    id: "2",
    title: "DC's Batman: The Long Halloween Adaptation Coming to Games",
    excerpt: "The acclaimed comic storyline is being adapted into an interactive experience.",
    image: "/placeholder.svg?height=300&width=400",
    category: "DC Comics",
    author: "Adaptation News",
    publishedAt: "1 day ago",
    readTime: "7 min read",
  },
  {
    id: "3",
    title: "Top 10 Indie Comics That Would Make Great Video Games",
    excerpt: "Exploring independent comic properties with untapped gaming potential.",
    image: "/placeholder.svg?height=300&width=400",
    category: "Indie Comics",
    author: "Comics Curator",
    publishedAt: "2 days ago",
    readTime: "12 min read",
  },
]

export default function ComicsHub() {
  return (
    <div className="min-h-screen bg-white">
      <section className="bg-gradient-to-r from-amber-600 to-amber-800 text-white py-12">
        <div className="px-8">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl font-bold mb-4"
          >
            Comics Hub
          </motion.h1>
          <p className="text-xl opacity-90">Where comics meet gaming culture</p>
        </div>
      </section>

      <section className="px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="relative h-80 overflow-hidden rounded-lg"
          >
            <Image
              src="/placeholder.svg?height=400&width=600"
              alt="Featured Comics Story"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <span className="bg-white text-black px-3 py-1 text-xs font-bold rounded mb-3 inline-block">
                FEATURED
              </span>
              <h2 className="text-white font-bold text-2xl leading-tight">
                The Witcher Comics: Expanding Geralt's World Beyond Games
              </h2>
            </div>
          </motion.div>
          
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-gray-900 border-b-2 border-black pb-2 inline-block">
              Latest Comics News
            </h3>
            {comicsNews.map((comic, index) => (
              <motion.div
                key={comic.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="flex gap-4 p-4 hover:bg-gray-50 rounded-lg transition-colors"
              >
                <div className="relative w-24 h-16 flex-shrink-0 overflow-hidden rounded">
                  <Image src={comic.image} alt={comic.title} fill className="object-cover" />
                </div>
                <div className="flex-1">
                  <span className="text-black text-xs font-semibold uppercase">{comic.category}</span>
                  <h4 className="text-gray-900 font-semibold text-sm leading-tight mt-1">{comic.title}</h4>
                  <p className="text-gray-600 text-xs mt-1">{comic.author} • {comic.publishedAt}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="bg-black text-white p-6 rounded-lg text-center"
          >
            <h3 className="text-lg font-bold mb-2">Marvel</h3>
            <p className="text-gray-300 text-sm mb-4">Superhero comics and gaming crossovers</p>
            <div className="w-12 h-12 bg-red-600 rounded-full mx-auto flex items-center justify-center">
              <span className="text-white font-bold">M</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="bg-gray-800 text-white p-6 rounded-lg text-center"
          >
            <h3 className="text-lg font-bold mb-2">DC Comics</h3>
            <p className="text-gray-300 text-sm mb-4">Batman, Superman, and more</p>
            <div className="w-12 h-12 bg-blue-600 rounded-full mx-auto flex items-center justify-center">
              <span className="text-white font-bold">DC</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-gray-700 text-white p-6 rounded-lg text-center"
          >
            <h3 className="text-lg font-bold mb-2">Indie Comics</h3>
            <p className="text-gray-300 text-sm mb-4">Independent creators and stories</p>
            <div className="w-12 h-12 bg-purple-600 rounded-full mx-auto flex items-center justify-center">
              <span className="text-white font-bold">I</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-gray-900 text-white p-6 rounded-lg text-center"
          >
            <h3 className="text-lg font-bold mb-2">Game Adaptations</h3>
            <p className="text-gray-300 text-sm mb-4">Comics based on video games</p>
            <div className="w-12 h-12 bg-green-600 rounded-full mx-auto flex items-center justify-center">
              <span className="text-white font-bold">G</span>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}