"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const discussions = [
  {
    id: "1",
    title: "Exclusive Interview: Hideo Kojima on Death Stranding 2",
    excerpt:
      "The legendary game designer shares insights about his upcoming sequel and the future of gaming.",
    media: {
      type: "video" as const,
      url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
      thumbnail: "/placeholder.svg?height=300&width=400",
    },
    category: "Developer Interview",
    author: "Gaming Journalist",
    publishedAt: "2 hours ago",
    readTime: "15 min read",
  },
  {
    id: "2",
    title: "Round Table: The Future of VR Gaming",
    excerpt:
      "Industry experts discuss where virtual reality is heading and what it means for gamers.",
    media: {
      type: "image" as const,
      url: "/placeholder.svg?height=300&width=400",
    },
    category: "Panel Discussion",
    author: "VR Specialist",
    publishedAt: "1 day ago",
    readTime: "20 min read",
  },
  {
    id: "3",
    title: "Community Spotlight: Indie Developer Success Stories",
    excerpt:
      "We talk to independent developers who made it big in the competitive gaming industry.",
    media: {
      type: "video" as const,
      url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
      thumbnail: "/placeholder.svg?height=300&width=400",
    },
    category: "Community",
    author: "Indie Reporter",
    publishedAt: "2 days ago",
    readTime: "12 min read",
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

export default function Discussions() {
  return (
    <div className="min-h-screen bg-white">
      <section className="bg-gradient-to-r from-teal-600 to-teal-800 text-white py-12">
        <div className="px-8">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl font-bold mb-4"
          >
            Discussions
          </motion.h1>
          <p className="text-xl opacity-90">
            In-depth interviews and community conversations
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
              title="Featured Discussion"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent pointer-events-none" />
            <div className="absolute bottom-0 left-0 right-0 p-6 pointer-events-none">
              <span className="bg-white text-black px-3 py-1 text-xs font-bold rounded mb-3 inline-block">
                FEATURED INTERVIEW
              </span>
              <h2 className="text-white font-bold text-2xl leading-tight">
                Behind the Scenes: How Baldur's Gate 3 Became Game of the Year
              </h2>
            </div>
          </motion.div>

          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-gray-900 border-b-2 border-black pb-2 inline-block">
              Latest Discussions
            </h3>
            {discussions.map((discussion, index) => (
              <motion.div
                key={discussion.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="flex gap-4 p-4 hover:bg-gray-50 rounded-lg transition-colors"
              >
                <div className="relative w-24 h-16 flex-shrink-0 overflow-hidden rounded">
                  <MediaDisplay
                    media={discussion.media}
                    title={discussion.title}
                  />
                </div>
                <div className="flex-1">
                  <span className="text-black text-xs font-semibold uppercase">
                    {discussion.category}
                  </span>
                  <h4 className="text-gray-900 font-semibold text-sm leading-tight mt-1">
                    {discussion.title}
                  </h4>
                  <p className="text-gray-600 text-xs mt-1">
                    {discussion.author} • {discussion.publishedAt}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="bg-black text-white p-6 rounded-lg"
          >
            <h3 className="text-xl font-bold mb-4">Developer Interviews</h3>
            <p className="text-gray-300 mb-4">
              Exclusive conversations with game creators
            </p>
            <button className="bg-white text-black px-4 py-2 rounded font-semibold hover:bg-gray-200 transition-colors">
              View All
            </button>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="bg-gray-800 text-white p-6 rounded-lg"
          >
            <h3 className="text-xl font-bold mb-4">Panel Discussions</h3>
            <p className="text-gray-300 mb-4">
              Industry roundtables and debates
            </p>
            <button className="bg-white text-black px-4 py-2 rounded font-semibold hover:bg-gray-200 transition-colors">
              Join Discussion
            </button>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-gray-700 text-white p-6 rounded-lg"
          >
            <h3 className="text-xl font-bold mb-4">Community Voices</h3>
            <p className="text-gray-300 mb-4">
              Stories from the gaming community
            </p>
            <button className="bg-white text-black px-4 py-2 rounded font-semibold hover:bg-gray-200 transition-colors">
              Share Story
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
