"use client";

import { motion } from "framer-motion";
import Image from "next/image";

interface NewsArticle {
  id: string;
  title: string;
  excerpt: string;
  media: {
    type: "image" | "video";
    url: string;
    thumbnail?: string;
  };
  category: string;
  author: string;
  publishedAt: string;
  readTime: string;
}

const newsArticles: NewsArticle[] = [
  {
    id: "1",
    title: "Breaking: Microsoft Acquires Major Gaming Studio for $2.5 Billion",
    excerpt:
      "The acquisition marks Microsoft's largest gaming investment this year, expanding their first-party portfolio significantly.",
    media: {
      type: "video",
      url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
      thumbnail: "/placeholder.svg?height=300&width=400",
    },
    category: "Industry News",
    author: "Business Reporter",
    publishedAt: "30 minutes ago",
    readTime: "3 min read",
  },
  {
    id: "2",
    title: "Steam Deck 2 Officially Announced with OLED Display",
    excerpt:
      "Valve's next-generation handheld gaming device promises better performance and battery life.",
    media: {
      type: "image",
      url: "/placeholder.svg?height=300&width=400",
    },
    category: "Hardware",
    author: "Gaming News",
    publishedAt: "1 hour ago",
    readTime: "5 min read",
  },
  {
    id: "3",
    title: "Epic Games Store Adds 50 New Free Games for Holiday Season",
    excerpt:
      "The digital storefront continues its aggressive expansion with major AAA titles available at no cost.",
    media: {
      type: "video",
      url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
      thumbnail: "/placeholder.svg?height=300&width=400",
    },
    category: "Digital Stores",
    author: "Platform News",
    publishedAt: "2 hours ago",
    readTime: "4 min read",
  },
  {
    id: "4",
    title: "Sony PlayStation VR2 Sales Exceed Expectations in India",
    excerpt:
      "The virtual reality headset has found strong adoption among Indian gamers despite premium pricing.",
    media: {
      type: "image",
      url: "/placeholder.svg?height=300&width=400",
    },
    category: "Market Report",
    author: "Market Analyst",
    publishedAt: "3 hours ago",
    readTime: "6 min read",
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

export default function News() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <section className="bg-gradient-to-r from-red-600 to-red-800 text-white py-8 lg:py-12">
        <div className="px-4 lg:px-8">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-2xl lg:text-4xl font-bold mb-2 lg:mb-4"
          >
            Latest News
          </motion.h1>
          <p className="text-sm lg:text-xl opacity-90">
            Breaking news and updates from the world of gaming and entertainment
          </p>
        </div>
      </section>

      {/* Breaking News Banner */}
      <section className="bg-red-600 text-white py-2">
        <div className="px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-2 lg:gap-4"
          >
            <span className="bg-white text-red-600 px-2 py-1 text-xs font-bold rounded flex-shrink-0">
              BREAKING
            </span>
            <p className="text-xs lg:text-sm truncate">
              Major gaming announcement expected at tonight's industry event
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main News Content */}
      <section className="px-4 lg:px-8 py-6 lg:py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
          {/* Main Story */}
          <div className="lg:col-span-2">
            <motion.article
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="mb-8"
            >
              <div className="relative h-64 lg:h-96 overflow-hidden rounded-lg mb-6">
                <MediaDisplay
                  media={newsArticles[0].media}
                  title={newsArticles[0].title}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent pointer-events-none" />
                <div className="absolute bottom-0 left-0 right-0 p-4 lg:p-6 pointer-events-none">
                  <span className="bg-red-600 text-white px-3 py-1 text-xs font-bold rounded mb-3 inline-block">
                    BREAKING NEWS
                  </span>
                  <h2 className="text-white font-bold text-xl lg:text-3xl leading-tight mb-2">
                    {newsArticles[0].title}
                  </h2>
                  <p className="text-white/90 text-sm lg:text-lg hidden lg:block">
                    {newsArticles[0].excerpt}
                  </p>
                  <div className="flex items-center gap-2 lg:gap-4 mt-4 text-white/80 text-xs lg:text-sm">
                    <span className="truncate">{newsArticles[0].author}</span>
                    <span className="hidden lg:inline">•</span>
                    <span className="hidden lg:inline">
                      {newsArticles[0].publishedAt}
                    </span>
                    <span className="hidden lg:inline">•</span>
                    <span className="hidden lg:inline">
                      {newsArticles[0].readTime}
                    </span>
                  </div>
                </div>
              </div>
            </motion.article>

            {/* Secondary Stories */}
            <div className="space-y-6">
              {newsArticles.slice(1, 3).map((article, index) => (
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
                    <span className="text-red-600 text-xs font-semibold uppercase">
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

          {/* Sidebar */}
          <div className="space-y-6 lg:space-y-8">
            {/* Trending Now */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="bg-gray-50 p-4 lg:p-6 rounded-lg"
            >
              <h3 className="text-xl font-bold text-gray-900 mb-4 border-b-2 border-red-600 pb-2 inline-block">
                Trending Now
              </h3>
              <div className="space-y-4">
                {newsArticles.slice(2).map((article, index) => (
                  <div key={article.id} className="flex gap-3">
                    <span className="text-red-600 font-bold text-lg">
                      {index + 1}
                    </span>
                    <div>
                      <h4 className="text-gray-900 font-semibold text-sm leading-tight">
                        {article.title}
                      </h4>
                      <p className="text-gray-500 text-xs mt-1">
                        {article.publishedAt}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Newsletter Signup */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-red-600 text-white p-4 lg:p-6 rounded-lg"
            >
              <h3 className="text-xl font-bold mb-2">Stay Updated</h3>
              <p className="text-sm opacity-90 mb-4">
                Get the latest news delivered to your inbox
              </p>
              <div className="space-y-3">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-3 py-2 text-gray-900 rounded-lg border border-gray-300 focus:ring-2 focus:ring-white focus:border-transparent"
                />
                <button className="w-full bg-white text-red-600 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
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
