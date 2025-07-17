"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const topLists = [
  {
    id: "1",
    title: "Top 10 Games of 2024: The Year's Best Releases",
    excerpt:
      "Our definitive ranking of the year's most outstanding gaming experiences.",
    media: {
      type: "video" as const,
      url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
      thumbnail: "/placeholder.svg?height=300&width=400",
    },
    category: "Annual Rankings",
    listCount: 10,
    author: "Editorial Team",
    publishedAt: "1 day ago",
  },
  {
    id: "2",
    title: "5 Best Gaming Laptops Under $1000",
    excerpt:
      "Budget-friendly portable gaming machines that don't compromise on performance.",
    media: {
      type: "image" as const,
      url: "/placeholder.svg?height=300&width=400",
    },
    category: "Hardware Lists",
    listCount: 5,
    author: "Hardware Expert",
    publishedAt: "3 days ago",
  },
  {
    id: "3",
    title: "15 Must-Play Indie Games You've Never Heard Of",
    excerpt:
      "Hidden gems from independent developers that deserve your attention.",
    media: {
      type: "video" as const,
      url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
      thumbnail: "/placeholder.svg?height=300&width=400",
    },
    category: "Hidden Gems",
    listCount: 15,
    author: "Indie Curator",
    publishedAt: "1 week ago",
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

export default function TopLists() {
  return (
    <div className="min-h-screen bg-white">
      <section className="bg-gradient-to-r from-cyan-600 to-cyan-800 text-white py-12">
        <div className="px-8">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl font-bold mb-4"
          >
            Top Lists
          </motion.h1>
          <p className="text-xl opacity-90">
            Curated rankings and recommendations
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
              title="Featured List"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent pointer-events-none" />
            <div className="absolute bottom-0 left-0 right-0 p-6 pointer-events-none">
              <span className="bg-white text-black px-3 py-1 text-xs font-bold rounded mb-3 inline-block">
                FEATURED LIST
              </span>
              <h2 className="text-white font-bold text-2xl leading-tight">
                25 Greatest Video Game Soundtracks of All Time
              </h2>
            </div>
          </motion.div>

          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-gray-900 border-b-2 border-black pb-2 inline-block">
              Popular Lists
            </h3>
            {topLists.map((list, index) => (
              <motion.div
                key={list.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="flex gap-4 p-4 hover:bg-gray-50 rounded-lg transition-colors"
              >
                <div className="relative w-24 h-16 flex-shrink-0 overflow-hidden rounded">
                  <MediaDisplay media={list.media} title={list.title} />
                  <div className="absolute top-1 left-1 bg-black text-white px-2 py-1 text-xs font-bold rounded">
                    #{list.listCount}
                  </div>
                </div>
                <div className="flex-1">
                  <span className="text-black text-xs font-semibold uppercase">
                    {list.category}
                  </span>
                  <h4 className="text-gray-900 font-semibold text-sm leading-tight mt-1">
                    {list.title}
                  </h4>
                  <p className="text-gray-600 text-xs mt-1">
                    {list.author} • {list.publishedAt}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="bg-black text-white p-6 rounded-lg"
          >
            <div className="text-3xl font-bold mb-2">#1</div>
            <h3 className="text-lg font-bold mb-2">Game Rankings</h3>
            <p className="text-gray-300 text-sm">
              Best games by genre and year
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="bg-gray-800 text-white p-6 rounded-lg"
          >
            <div className="text-3xl font-bold mb-2">#5</div>
            <h3 className="text-lg font-bold mb-2">Hardware Lists</h3>
            <p className="text-gray-300 text-sm">
              Top gaming gear and accessories
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-gray-700 text-white p-6 rounded-lg"
          >
            <div className="text-3xl font-bold mb-2">#10</div>
            <h3 className="text-lg font-bold mb-2">Hidden Gems</h3>
            <p className="text-gray-300 text-sm">
              Underrated games worth playing
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-gray-900 text-white p-6 rounded-lg"
          >
            <div className="text-3xl font-bold mb-2">#25</div>
            <h3 className="text-lg font-bold mb-2">Retrospectives</h3>
            <p className="text-gray-300 text-sm">
              Classic games that defined gaming
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
