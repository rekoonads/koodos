"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const deepDives = [
  {
    id: "1",
    title: "The Evolution of AI in Gaming: From NPCs to Neural Networks",
    excerpt:
      "A comprehensive look at how artificial intelligence has transformed gaming over the decades.",
    media: {
      type: "video" as const,
      url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
      thumbnail: "/placeholder.svg?height=300&width=400",
    },
    category: "Technology Deep Dive",
    author: "AI Researcher",
    publishedAt: "1 hour ago",
    readTime: "25 min read",
  },
  {
    id: "2",
    title: "Breaking Down the Economics of Free-to-Play Games",
    excerpt:
      "An in-depth analysis of monetization strategies and their impact on game design.",
    media: {
      type: "image" as const,
      url: "/placeholder.svg?height=300&width=400",
    },
    category: "Industry Analysis",
    author: "Business Analyst",
    publishedAt: "6 hours ago",
    readTime: "18 min read",
  },
  {
    id: "3",
    title: "The Psychology Behind Gaming Addiction: Understanding the Science",
    excerpt:
      "Exploring the neurological and psychological factors that make games so engaging.",
    media: {
      type: "video" as const,
      url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
      thumbnail: "/placeholder.svg?height=300&width=400",
    },
    category: "Research Feature",
    author: "Psychology Expert",
    publishedAt: "1 day ago",
    readTime: "22 min read",
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

export default function DeepDives() {
  return (
    <div className="min-h-screen bg-white">
      <section className="bg-gradient-to-r from-orange-600 to-orange-800 text-white py-8 lg:py-12">
        <div className="px-4 lg:px-8">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-2xl lg:text-4xl font-bold mb-2 lg:mb-4"
          >
            Deep Dives
          </motion.h1>
          <p className="text-sm lg:text-xl opacity-90">
            Comprehensive analysis and investigative features
          </p>
        </div>
      </section>
      <section className="px-4 lg:px-8 py-6 lg:py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="mb-8"
            >
              <div className="relative h-64 lg:h-96 overflow-hidden rounded-lg mb-6">
                <MediaDisplay
                  media={{
                    type: "video" as const,
                    url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
                    thumbnail: "/placeholder.svg?height=400&width=800",
                  }}
                  title="Featured Deep Dive"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent pointer-events-none" />
                <div className="absolute bottom-0 left-0 right-0 p-4 lg:p-6 pointer-events-none">
                  <span className="bg-white text-black px-3 py-1 text-xs font-bold rounded mb-3 inline-block">
                    FEATURED ANALYSIS
                  </span>
                  <h2 className="text-white font-bold text-xl lg:text-3xl leading-tight mb-2">
                    The Hidden Impact of Crunch Culture on Game Development
                  </h2>
                  <p className="text-white/90 text-sm lg:text-lg hidden lg:block">
                    An investigative look into working conditions in the gaming
                    industry
                  </p>
                </div>
              </div>
            </motion.div>
            <div className="space-y-6">
              {deepDives.map((article, index) => (
                <motion.article
                  key={article.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex flex-col lg:flex-row gap-4 lg:gap-6 p-4 lg:p-6 border border-gray-200 rounded-lg hover:shadow-lg transition-shadow"
                >
                  <div className="relative w-full h-48 lg:w-48 lg:h-32 flex-shrink-0 overflow-hidden rounded">
                    <MediaDisplay media={article.media} title={article.title} />
                  </div>
                  <div className="flex-1">
                    <span className="text-black text-xs font-semibold uppercase">
                      {article.category}
                    </span>
                    <h3 className="text-gray-900 font-bold text-lg lg:text-xl leading-tight mt-2 mb-3">
                      {article.title}
                    </h3>
                    <p className="text-gray-600 mb-4 text-sm lg:text-base">
                      {article.excerpt}
                    </p>
                    <div className="flex items-center gap-2 lg:gap-4 text-gray-500 text-xs lg:text-sm">
                      <span className="truncate">{article.author}</span>
                      <span className="hidden lg:inline">•</span>
                      <span className="hidden lg:inline">
                        {article.publishedAt}
                      </span>
                      <span className="hidden lg:inline">•</span>
                      <span className="hidden lg:inline">
                        {article.readTime}
                      </span>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
          <div className="space-y-6 lg:space-y-8">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="bg-gray-50 p-4 lg:p-6 rounded-lg"
            >
              <h3 className="text-xl font-bold text-gray-900 mb-4 border-b-2 border-black pb-2 inline-block">
                Research Categories
              </h3>
              <div className="space-y-3">
                {[
                  "Technology Analysis",
                  "Industry Reports",
                  "Cultural Impact",
                  "Economic Studies",
                  "Social Research",
                ].map((category, index) => (
                  <div
                    key={index}
                    className="p-3 bg-black text-white rounded hover:bg-gray-800 transition-colors cursor-pointer"
                  >
                    <h4 className="font-semibold text-sm">{category}</h4>
                  </div>
                ))}
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-black text-white p-4 lg:p-6 rounded-lg"
            >
              <h3 className="text-xl font-bold mb-2">Research Newsletter</h3>
              <p className="text-sm opacity-90 mb-4">
                Get weekly deep dives delivered to your inbox
              </p>
              <div className="space-y-3">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-3 py-2 text-gray-900 rounded-lg border border-gray-300 focus:ring-2 focus:ring-white focus:border-transparent"
                />
                <button className="w-full bg-white text-black py-2 rounded-lg font-semibold hover:bg-gray-200 transition-colors">
                  Subscribe
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
