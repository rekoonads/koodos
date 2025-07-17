"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const guides = [
  {
    id: "1",
    title: "Complete Baldur's Gate 3 Character Build Guide",
    excerpt:
      "Master every class and create the perfect character for your playstyle.",
    media: {
      type: "video" as const,
      url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
      thumbnail: "/placeholder.svg?height=300&width=400",
    },
    category: "RPG Guide",
    difficulty: "Intermediate",
    author: "RPG Expert",
    publishedAt: "3 hours ago",
    readTime: "30 min read",
  },
  {
    id: "2",
    title: "Cyberpunk 2077: All Legendary Weapons Locations",
    excerpt:
      "Find every legendary weapon in Night City with our comprehensive map guide.",
    media: {
      type: "image" as const,
      url: "/placeholder.svg?height=300&width=400",
    },
    category: "Collectibles",
    difficulty: "Beginner",
    author: "Guide Writer",
    publishedAt: "1 day ago",
    readTime: "15 min read",
  },
  {
    id: "3",
    title: "Elden Ring Boss Strategies: From Margit to Malenia",
    excerpt:
      "Detailed strategies for defeating every major boss in the Lands Between.",
    media: {
      type: "video" as const,
      url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
      thumbnail: "/placeholder.svg?height=300&width=400",
    },
    category: "Boss Guide",
    difficulty: "Advanced",
    author: "Souls Veteran",
    publishedAt: "2 days ago",
    readTime: "45 min read",
  },
];

interface MediaDisplayProps {
  media: {
    type: "image" | "video";
    url: string;
    thumbnail?: string;
  };
  title: string;
  className?: string;
}

function MediaDisplay({ media, title, className = "" }: MediaDisplayProps) {
  if (media.type === "video") {
    return (
      <video
        className={`w-full h-full object-cover ${className}`}
        controls
        preload="metadata"
        poster={media.thumbnail}
        aria-label={`Video: ${title}`}
      >
        <source src={media.url} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    );
  }

  return (
    <Image
      src={media.url || "/placeholder.svg"}
      alt={title}
      fill
      className={`object-cover ${className}`}
    />
  );
}

export default function GameGuides() {
  return (
    <div className="min-h-screen bg-white">
      <section className="bg-gradient-to-r from-emerald-600 to-emerald-800 text-white py-12">
        <div className="px-8">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl font-bold mb-4"
          >
            Game Guides
          </motion.h1>
          <p className="text-xl opacity-90">
            Complete walkthroughs, tips, and strategies
          </p>
        </div>
      </section>
      <section className="px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="relative h-80 overflow-hidden rounded-lg"
          >
            <MediaDisplay
              media={{
                type: "video" as const,
                url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
                thumbnail: "/placeholder.svg?height=400&width=600",
              }}
              title="Featured Guide"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent pointer-events-none" />
            <div className="absolute bottom-0 left-0 right-0 p-6 pointer-events-none">
              <span className="bg-white text-black px-3 py-1 text-xs font-bold rounded mb-3 inline-block">
                FEATURED GUIDE
              </span>
              <h2 className="text-white font-bold text-2xl leading-tight">
                Spider-Man 2: Complete Trophy Guide & Roadmap
              </h2>
            </div>
          </motion.div>

          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-gray-900 border-b-2 border-black pb-2 inline-block">
              Popular Guides
            </h3>
            {guides.map((guide, index) => (
              <motion.div
                key={guide.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="flex gap-4 p-4 hover:bg-gray-50 rounded-lg transition-colors"
              >
                <div className="relative w-24 h-16 flex-shrink-0 overflow-hidden rounded">
                  <MediaDisplay media={guide.media} title={guide.title} />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-black text-xs font-semibold uppercase">
                      {guide.category}
                    </span>
                    <span
                      className={`px-2 py-1 text-xs rounded ${
                        guide.difficulty === "Beginner"
                          ? "bg-green-100 text-green-800"
                          : guide.difficulty === "Intermediate"
                          ? "bg-yellow-100 text-yellow-800"
                          : "bg-red-100 text-red-800"
                      }`}
                    >
                      {guide.difficulty}
                    </span>
                  </div>
                  <h4 className="text-gray-900 font-semibold text-sm leading-tight">
                    {guide.title}
                  </h4>
                  <p className="text-gray-600 text-xs mt-1">
                    {guide.author} • {guide.readTime}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="bg-black text-white p-6 rounded-lg text-center"
          >
            <h3 className="text-lg font-bold mb-2">Walkthroughs</h3>
            <p className="text-gray-300 text-sm mb-4">Complete game guides</p>
            <div className="bg-green-100 text-green-800 px-2 py-1 text-xs rounded">
              Beginner
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="bg-gray-800 text-white p-6 rounded-lg text-center"
          >
            <h3 className="text-lg font-bold mb-2">Boss Strategies</h3>
            <p className="text-gray-300 text-sm mb-4">Defeat tough enemies</p>
            <div className="bg-red-100 text-red-800 px-2 py-1 text-xs rounded">
              Advanced
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-gray-700 text-white p-6 rounded-lg text-center"
          >
            <h3 className="text-lg font-bold mb-2">Collectibles</h3>
            <p className="text-gray-300 text-sm mb-4">Find hidden items</p>
            <div className="bg-yellow-100 text-yellow-800 px-2 py-1 text-xs rounded">
              Intermediate
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-gray-900 text-white p-6 rounded-lg text-center"
          >
            <h3 className="text-lg font-bold mb-2">Tips & Tricks</h3>
            <p className="text-gray-300 text-sm mb-4">Pro gaming advice</p>
            <div className="bg-yellow-100 text-yellow-800 px-2 py-1 text-xs rounded">
              Intermediate
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
