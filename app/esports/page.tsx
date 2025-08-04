"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const esportsGames = [
  {
    name: "Valorant",
    media: {
      type: "video" as const,
      url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
      thumbnail: "/placeholder.svg?height=300&width=400",
    },
  },
  {
    name: "CS2",
    media: {
      type: "image" as const,
      url: "/placeholder.svg?height=300&width=400",
    },
  },
  {
    name: "PUBG Mobile",
    media: {
      type: "video" as const,
      url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
      thumbnail: "/placeholder.svg?height=300&width=400",
    },
  },
  {
    name: "Free Fire",
    media: {
      type: "image" as const,
      url: "/placeholder.svg?height=300&width=400",
    },
  },
  {
    name: "League of Legends",
    media: {
      type: "video" as const,
      url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
      thumbnail: "/placeholder.svg?height=300&width=400",
    },
  },
  {
    name: "Dota 2",
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

export default function Esports() {
  return (
    <div className="min-h-screen bg-white">
      <section className="bg-gradient-to-r from-yellow-600 to-yellow-800 text-white py-12">
        <div className="px-8">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl font-bold mb-4"
          >
            Esports
          </motion.h1>
          <p className="text-xl opacity-90">
            Competitive gaming news, tournaments, and player profiles
          </p>
        </div>
      </section>
      <section className="px-8 py-8">
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
              title="Esports Featured"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent pointer-events-none" />
            <div className="absolute bottom-0 left-0 right-0 p-6 pointer-events-none">
              <span className="bg-orange-600 text-white px-3 py-1 text-xs font-bold rounded mb-3 inline-block">
                TOURNAMENT
              </span>
              <h2 className="text-white font-bold text-2xl leading-tight">
                Valorant Champions 2024: India's Best Teams Compete
              </h2>
            </div>
          </motion.div>

          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-gray-900 border-b-2 border-orange-600 pb-2 inline-block">
              Popular Games
            </h3>
            <div className="grid grid-cols-2 gap-4">
              {esportsGames.map((game, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="relative p-4 bg-gradient-to-br from-orange-500 to-red-500 text-white rounded-lg text-center font-semibold overflow-hidden group"
                >
                  <div className="absolute inset-0 opacity-20">
                    <MediaDisplay media={game.media} title={game.name} />
                  </div>
                  <div className="relative z-10">{game.name}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
