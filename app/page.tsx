"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const featuredArticles = [
  {
    id: "1",
    title:
      "PlayStation 5: Sony Is Reportedly Going To Increase the Prices of Its First-Party Games in India",
    media: {
      type: "video" as const,
      url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
      thumbnail: "/placeholder.svg?height=300&width=400",
    },
    category: "Gaming",
  },
  {
    id: "2",
    title:
      "Nintendo Switch 2 Should Reportedly Be Available in India Through Unofficial Channels From June 8",
    media: {
      type: "image" as const,
      url: "/placeholder.svg?height=300&width=400",
    },
    category: "Gaming",
  },
  {
    id: "3",
    title:
      "GDC 2025: The Indian Video Games Industry Was Represented by... Real-Money Gaming Again",
    media: {
      type: "video" as const,
      url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
      thumbnail: "/placeholder.svg?height=300&width=400",
    },
    category: "Industry",
  },
];

const articles = [
  {
    id: "1",
    title: "The Future of Gaming: AI and Machine Learning Revolution",
    excerpt:
      "How artificial intelligence is transforming game development and player experiences.",
    media: {
      type: "video" as const,
      url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
      thumbnail: "/placeholder.svg?height=300&width=400",
    },
    category: "Technology",
    author: "Tech Expert",
    publishedAt: "2 hours ago",
    readTime: "8 min read",
  },
  {
    id: "2",
    title: "Indie Game Spotlight: Hidden Gems You Need to Play",
    excerpt:
      "Discover amazing independent games that are pushing creative boundaries.",
    media: {
      type: "image" as const,
      url: "/placeholder.svg?height=300&width=400",
    },
    category: "Indie",
    author: "Indie Curator",
    publishedAt: "4 hours ago",
    readTime: "12 min read",
  },
  {
    id: "3",
    title: "Esports in India: The Rise of Professional Gaming",
    excerpt:
      "From PUBG Mobile to Valorant, Indian esports is gaining international recognition.",
    media: {
      type: "video" as const,
      url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
      thumbnail: "/placeholder.svg?height=300&width=400",
    },
    category: "Esports",
    author: "Esports Reporter",
    publishedAt: "6 hours ago",
    readTime: "10 min read",
  },
  {
    id: "4",
    title: "Next-Gen Console Wars: Performance Analysis",
    excerpt:
      "Comparing the latest gaming consoles and their impact on the industry.",
    media: {
      type: "image" as const,
      url: "/placeholder.svg?height=300&width=400",
    },
    category: "Hardware",
    author: "Hardware Reviewer",
    publishedAt: "8 hours ago",
    readTime: "15 min read",
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

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-64 lg:h-96 overflow-hidden bg-black">
        <div className="absolute inset-0">
          <MediaDisplay
            media={{
              type: "video" as const,
              url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
              thumbnail: "/placeholder.svg?height=400&width=800",
            }}
            title="Hero Background"
            className="opacity-30"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-gray-900/80" />
        <div className="relative z-10 flex items-center h-full px-4 lg:px-8">
          <div className="text-white max-w-4xl">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-2xl md:text-4xl lg:text-5xl font-bold mb-4"
            >
              KOODOS India
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-sm md:text-lg lg:text-xl mb-6"
            >
              Gaming • Entertainment • Technology • Reviews
            </motion.p>
          </div>
        </div>
      </section>

      {/* Main Featured Story */}
      <section className="px-4 lg:px-8 py-6 lg:py-8 border-b">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="relative h-64 lg:h-80 overflow-hidden rounded-lg"
          >
            <MediaDisplay
              media={featuredArticles[0].media}
              title={featuredArticles[0].title}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent pointer-events-none" />
            <div className="absolute bottom-0 left-0 right-0 p-6 pointer-events-none">
              <span className="bg-white text-black px-3 py-1 text-xs font-bold rounded mb-3 inline-block">
                FEATURED
              </span>
              <h2 className="text-white font-bold text-lg lg:text-2xl leading-tight">
                {featuredArticles[0].title}
              </h2>
            </div>
          </motion.div>
          <div className="space-y-4">
            {featuredArticles.slice(1).map((article, index) => (
              <motion.div
                key={article.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="flex gap-4 p-4 hover:bg-gray-50 rounded-lg transition-colors"
              >
                <div className="relative w-20 h-14 lg:w-24 lg:h-16 flex-shrink-0 overflow-hidden rounded">
                  <MediaDisplay media={article.media} title={article.title} />
                </div>
                <div className="flex-1">
                  <span className="text-black text-xs font-semibold uppercase">
                    {article.category}
                  </span>
                  <h3 className="text-gray-900 font-semibold text-xs lg:text-sm leading-tight mt-1">
                    {article.title}
                  </h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Latest News Grid */}
      <section className="px-4 lg:px-8 py-6 lg:py-8">
        <motion.h2
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          className="text-xl lg:text-2xl font-bold text-gray-900 mb-4 lg:mb-6 border-b-2 border-black pb-2 inline-block"
        >
          Latest News
        </motion.h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
          {articles.map((article, index) => (
            <Link key={article.id} href={`/post/future-of-gaming-2024`}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow cursor-pointer group"
              >
                <div className="relative h-40 lg:h-48 overflow-hidden">
                  <MediaDisplay
                    media={article.media}
                    title={article.title}
                    className="group-hover:scale-105 transition-transform duration-300"
                  />
                  {article.media.type === "video" && (
                    <div className="absolute top-2 right-2 bg-black/70 text-white px-2 py-1 text-xs rounded pointer-events-none">
                      VIDEO
                    </div>
                  )}
                </div>
                <div className="p-3 lg:p-4">
                  <span className="text-black text-xs font-semibold uppercase">
                    {article.category}
                  </span>
                  <h3 className="text-gray-900 font-semibold text-sm lg:text-sm leading-tight mt-2 mb-2 group-hover:text-red-600 transition-colors">
                    {article.title}
                  </h3>
                  <p className="text-gray-600 text-xs mb-3 hidden lg:block">
                    {article.excerpt}
                  </p>
                  <div className="flex items-center justify-between text-xs text-gray-500">
                    <span className="truncate">{article.author}</span>
                    <span className="ml-2">{article.publishedAt}</span>
                  </div>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
