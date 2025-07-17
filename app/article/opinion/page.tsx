"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const communityPosts = [
  {
    id: "1",
    title: "Why Gaming Communities Are More Important Than Ever",
    excerpt:
      "In an increasingly digital world, gaming communities provide connection and belonging.",
    media: {
      type: "video" as const,
      url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
      thumbnail: "/placeholder.svg?height=300&width=400",
    },
    category: "Community Opinion",
    author: "Community Manager",
    publishedAt: "2 hours ago",
    comments: 45,
    likes: 128,
  },
  {
    id: "2",
    title: "The Rise of Cozy Games: Why We Need More Relaxing Experiences",
    excerpt:
      "Exploring the growing trend of peaceful, stress-free gaming experiences.",
    media: {
      type: "image" as const,
      url: "/placeholder.svg?height=300&width=400",
    },
    category: "Gaming Culture",
    author: "Lifestyle Gamer",
    publishedAt: "1 day ago",
    comments: 32,
    likes: 89,
  },
  {
    id: "3",
    title: "Accessibility in Gaming: Progress and Challenges Ahead",
    excerpt:
      "How the industry is making games more inclusive for players with disabilities.",
    media: {
      type: "video" as const,
      url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
      thumbnail: "/placeholder.svg?height=300&width=400",
    },
    category: "Accessibility",
    author: "Accessibility Advocate",
    publishedAt: "3 days ago",
    comments: 67,
    likes: 203,
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

export default function Community() {
  return (
    <div className="min-h-screen bg-white">
      <section className="bg-gradient-to-r from-violet-600 to-violet-800 text-white py-12">
        <div className="px-8">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl font-bold mb-4"
          >
            Community
          </motion.h1>
          <p className="text-xl opacity-90">
            Voices, opinions, and discussions from our gaming community
          </p>
        </div>
      </section>
      <section className="px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="mb-8"
            >
              <div className="relative h-96 overflow-hidden rounded-lg mb-6">
                <MediaDisplay
                  media={{
                    type: "video" as const,
                    url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
                    thumbnail: "/placeholder.svg?height=400&width=800",
                  }}
                  title="Featured Community Post"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent pointer-events-none" />
                <div className="absolute bottom-0 left-0 right-0 p-6 pointer-events-none">
                  <span className="bg-white text-black px-3 py-1 text-xs font-bold rounded mb-3 inline-block">
                    COMMUNITY SPOTLIGHT
                  </span>
                  <h2 className="text-white font-bold text-3xl leading-tight mb-2">
                    How Gaming Helped Me Through Difficult Times: A Personal
                    Story
                  </h2>
                  <div className="flex items-center gap-4 text-white/80 text-sm">
                    <span>Community Member</span>
                    <span>•</span>
                    <span>156 comments</span>
                    <span>•</span>
                    <span>342 likes</span>
                  </div>
                </div>
              </div>
            </motion.div>
            <div className="space-y-6">
              {communityPosts.map((post, index) => (
                <motion.article
                  key={post.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex gap-6 p-6 border border-gray-200 rounded-lg hover:shadow-lg transition-shadow"
                >
                  <div className="relative w-48 h-32 flex-shrink-0 overflow-hidden rounded">
                    <MediaDisplay media={post.media} title={post.title} />
                  </div>
                  <div className="flex-1">
                    <span className="text-black text-xs font-semibold uppercase">
                      {post.category}
                    </span>
                    <h3 className="text-gray-900 font-bold text-xl leading-tight mt-2 mb-3">
                      {post.title}
                    </h3>
                    <p className="text-gray-600 mb-4">{post.excerpt}</p>
                    <div className="flex items-center gap-6 text-gray-500 text-sm">
                      <span>{post.author}</span>
                      <span>•</span>
                      <span>{post.publishedAt}</span>
                      <span>•</span>
                      <span>{post.comments} comments</span>
                      <span>•</span>
                      <span>{post.likes} likes</span>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="bg-gray-50 p-6 rounded-lg"
            >
              <h3 className="text-xl font-bold text-gray-900 mb-4 border-b-2 border-black pb-2 inline-block">
                Community Guidelines
              </h3>
              <div className="space-y-3 text-sm text-gray-600">
                <p>• Be respectful to all community members</p>
                <p>• No harassment or toxic behavior</p>
                <p>• Keep discussions gaming-related</p>
                <p>• No spam or self-promotion</p>
                <p>• Report inappropriate content</p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
              className="bg-black text-white p-6 rounded-lg"
            >
              <h3 className="text-xl font-bold mb-4">Join the Discussion</h3>
              <p className="text-sm opacity-90 mb-4">
                Share your gaming stories and connect with fellow gamers
              </p>
              <button className="w-full bg-white text-black py-2 rounded font-semibold hover:bg-gray-200 transition-colors mb-3">
                Create Post
              </button>
              <button className="w-full border border-white text-white py-2 rounded font-semibold hover:bg-white hover:text-black transition-colors">
                Join Community
              </button>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-gray-800 text-white p-6 rounded-lg"
            >
              <h3 className="text-xl font-bold mb-4">Trending Topics</h3>
              <div className="space-y-2">
                {[
                  "#GameOfTheYear2024",
                  "#IndieGameLove",
                  "#GamingAccessibility",
                  "#RetroGaming",
                  "#GameDev",
                ].map((tag, index) => (
                  <div
                    key={index}
                    className="text-sm opacity-90 hover:opacity-100 cursor-pointer"
                  >
                    {tag}
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
