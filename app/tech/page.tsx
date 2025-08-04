"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const techNews = [
  {
    id: "1",
    title: "iPhone 15 Pro Max Review: Apple's Most Advanced Smartphone",
    excerpt:
      "The latest iPhone brings titanium design, improved cameras, and USB-C connectivity.",
    media: {
      type: "video" as const,
      url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
      thumbnail: "/placeholder.svg?height=300&width=400",
    },
    category: "Mobile",
    author: "Tech Reviewer",
    publishedAt: "1 hour ago",
  },
  {
    id: "2",
    title: "NVIDIA RTX 4090 Ti Rumored for 2024 Launch",
    excerpt:
      "Leaked specifications suggest massive performance improvements for next-gen gaming.",
    media: {
      type: "image" as const,
      url: "/placeholder.svg?height=300&width=400",
    },
    category: "Hardware",
    author: "Hardware Expert",
    publishedAt: "3 hours ago",
  },
  {
    id: "3",
    title: "ChatGPT-5 Expected to Launch with Revolutionary AI Capabilities",
    excerpt:
      "OpenAI's next-generation language model promises unprecedented AI performance.",
    media: {
      type: "video" as const,
      url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
      thumbnail: "/placeholder.svg?height=300&width=400",
    },
    category: "AI",
    author: "AI Specialist",
    publishedAt: "5 hours ago",
  },
];

const techCategories = [
  {
    name: "Smartphones",
    color: "bg-black",
    media: {
      type: "video" as const,
      url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
      thumbnail: "/placeholder.svg?height=300&width=400",
    },
  },
  {
    name: "Laptops",
    color: "bg-gray-800",
    media: {
      type: "image" as const,
      url: "/placeholder.svg?height=300&width=400",
    },
  },
  {
    name: "AI & Machine Learning",
    color: "bg-gray-700",
    media: {
      type: "video" as const,
      url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
      thumbnail: "/placeholder.svg?height=300&width=400",
    },
  },
  {
    name: "Gaming Hardware",
    color: "bg-gray-900",
    media: {
      type: "image" as const,
      url: "/placeholder.svg?height=300&width=400",
    },
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

export default function Tech() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <section className="bg-gradient-to-r from-purple-600 to-purple-800 text-white py-12">
        <div className="px-8">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl font-bold mb-4"
          >
            Technology
          </motion.h1>
          <p className="text-xl opacity-90">
            Latest tech news, reviews, and innovations
          </p>
        </div>
      </section>
      {/* Featured Story */}
      <section className="px-8 py-8 border-b">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
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
              title="Featured Tech Story"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent pointer-events-none" />
            <div className="absolute bottom-0 left-0 right-0 p-6 pointer-events-none">
              <span className="bg-white text-black px-3 py-1 text-xs font-bold rounded mb-3 inline-block">
                FEATURED
              </span>
              <h2 className="text-white font-bold text-2xl leading-tight">
                CES 2024: The Most Innovative Tech Products Unveiled
              </h2>
            </div>
          </motion.div>
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-gray-900 border-b-2 border-black pb-2 inline-block">
              Trending in Tech
            </h3>
            {techNews.map((article, index) => (
              <motion.div
                key={article.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="flex gap-4 p-4 hover:bg-gray-50 rounded-lg transition-colors"
              >
                <div className="relative w-24 h-16 flex-shrink-0 overflow-hidden rounded">
                  <MediaDisplay media={article.media} title={article.title} />
                </div>
                <div className="flex-1">
                  <span className="text-black text-xs font-semibold uppercase">
                    {article.category}
                  </span>
                  <h4 className="text-gray-900 font-semibold text-sm leading-tight mt-1">
                    {article.title}
                  </h4>
                  <p className="text-gray-600 text-xs mt-1">
                    {article.author} • {article.publishedAt}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      {/* Tech Categories */}
      <section className="px-8 py-8">
        <motion.h2
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          className="text-2xl font-bold text-gray-900 mb-6"
        >
          Tech Categories
        </motion.h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {techCategories.map((category, index) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className={`${category.color} text-white p-6 rounded-lg text-center font-semibold hover:opacity-90 transition-opacity cursor-pointer relative overflow-hidden group`}
            >
              <div className="absolute inset-0 opacity-20">
                <MediaDisplay media={category.media} title={category.name} />
              </div>
              <div className="relative z-10">{category.name}</div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
