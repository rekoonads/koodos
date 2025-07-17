"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const reviews = [
  {
    id: "1",
    title: "Spider-Man 2 Review: A Web-Slinging Masterpiece",
    excerpt:
      "Insomniac Games delivers another spectacular superhero adventure with improved gameplay and stunning visuals.",
    media: {
      type: "video" as const,
      url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
      thumbnail: "/placeholder.svg?height=300&width=400",
    },
    category: "Game Review",
    rating: 9.5,
    author: "Game Reviewer",
    publishedAt: "2 hours ago",
  },
  {
    id: "2",
    title: "iPhone 15 Pro Max Review: The Ultimate Smartphone Experience",
    excerpt:
      "Apple's latest flagship brings titanium design, improved cameras, and USB-C to the iPhone lineup.",
    media: {
      type: "image" as const,
      url: "/placeholder.svg?height=300&width=400",
    },
    category: "Tech Review",
    rating: 8.8,
    author: "Tech Expert",
    publishedAt: "1 day ago",
  },
  {
    id: "3",
    title: "The Marvels Movie Review: A Mixed Bag of Cosmic Adventures",
    excerpt:
      "The latest MCU entry has its moments but struggles with pacing and character development.",
    media: {
      type: "video" as const,
      url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
      thumbnail: "/placeholder.svg?height=300&width=400",
    },
    category: "Movie Review",
    rating: 6.5,
    author: "Film Critic",
    publishedAt: "3 days ago",
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

export default function Reviews() {
  return (
    <div className="min-h-screen bg-white">
      <section className="bg-gradient-to-r from-green-600 to-green-800 text-white py-8 lg:py-12">
        <div className="px-4 lg:px-8">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-2xl lg:text-4xl font-bold mb-2 lg:mb-4"
          >
            Reviews
          </motion.h1>
          <p className="text-sm lg:text-xl opacity-90">
            In-depth reviews of games, movies, tech, and more
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
                  media={reviews[0].media}
                  title={reviews[0].title}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent pointer-events-none" />
                <div className="absolute bottom-0 left-0 right-0 p-4 lg:p-6 pointer-events-none">
                  <div className="flex items-center gap-2 lg:gap-4 mb-3">
                    <span className="bg-green-600 text-white px-2 lg:px-3 py-1 text-xs font-bold rounded">
                      FEATURED REVIEW
                    </span>
                    <div className="bg-yellow-500 text-black px-2 lg:px-3 py-1 text-xs lg:text-sm font-bold rounded">
                      {reviews[0].rating}/10
                    </div>
                  </div>
                  <h2 className="text-white font-bold text-xl lg:text-3xl leading-tight mb-2">
                    {reviews[0].title}
                  </h2>
                  <p className="text-white/90 text-sm lg:text-lg hidden lg:block">
                    {reviews[0].excerpt}
                  </p>
                </div>
              </div>
            </motion.div>
            <div className="space-y-6">
              {reviews.slice(1).map((review, index) => (
                <motion.article
                  key={review.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex flex-col lg:flex-row gap-4 lg:gap-6 p-4 lg:p-6 border border-gray-200 rounded-lg hover:shadow-lg transition-shadow"
                >
                  <div className="relative w-full h-48 lg:w-48 lg:h-32 flex-shrink-0 overflow-hidden rounded">
                    <MediaDisplay media={review.media} title={review.title} />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 lg:gap-3 mb-2">
                      <span className="text-green-600 text-xs font-semibold uppercase">
                        {review.category}
                      </span>
                      <div className="bg-yellow-500 text-black px-2 py-1 text-xs font-bold rounded">
                        {review.rating}/10
                      </div>
                    </div>
                    <h3 className="text-gray-900 font-bold text-lg lg:text-xl leading-tight mb-3">
                      {review.title}
                    </h3>
                    <p className="text-gray-600 mb-4 text-sm lg:text-base">
                      {review.excerpt}
                    </p>
                    <div className="flex items-center gap-2 lg:gap-4 text-gray-500 text-xs lg:text-sm">
                      <span className="truncate">{review.author}</span>
                      <span className="hidden lg:inline">•</span>
                      <span className="hidden lg:inline">
                        {review.publishedAt}
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
              <h3 className="text-xl font-bold text-gray-900 mb-4 border-b-2 border-green-600 pb-2 inline-block">
                Top Rated
              </h3>
              <div className="space-y-4">
                {reviews.map((review, index) => (
                  <div key={review.id} className="flex items-center gap-3">
                    <div className="bg-yellow-500 text-black px-2 py-1 text-xs font-bold rounded">
                      {review.rating}
                    </div>
                    <div className="flex-1">
                      <h4 className="text-gray-900 font-semibold text-sm leading-tight">
                        {review.title}
                      </h4>
                      <p className="text-gray-500 text-xs mt-1">
                        {review.category}
                      </p>
                    </div>
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
