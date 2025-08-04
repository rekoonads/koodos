"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Play } from "lucide-react";

interface VideoArticle {
  id: string;
  title: string;
  excerpt: string;
  media: { type: "image" | "video"; url: string; thumbnail?: string; };
  category: string;
  author: string;
  publishedAt: string;
  readTime: string;
  slug?: string;
  views: number;
}

async function fetchVideos(): Promise<VideoArticle[]> {
  try {
    const response = await fetch("http://localhost:3001/api/news?category=videos&limit=10", {
      method: "GET",
      headers: { "Content-Type": "application/json" },
      cache: 'no-cache'
    });

    if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);

    const result = await response.json();
    
    if (result && result.articles && Array.isArray(result.articles)) {
      return result.articles.map((post: any) => ({
        id: post.id,
        title: post.title,
        excerpt: post.excerpt || (post.content ? post.content.replace(/<[^>]*>/g, "").substring(0, 150) + "..." : "No excerpt available"),
        media: {
          type: (post.featuredImage && (post.featuredImage.includes('youtube.com') || post.featuredImage.includes('youtu.be') || post.featuredImage.includes('.mp4'))) ? "video" as const : "image" as const,
          url: post.featuredImage || "/placeholder.svg?height=300&width=400",
          thumbnail: post.featuredImage || "/placeholder.svg?height=300&width=400",
        },
        category: "Videos",
        author: post.author,
        publishedAt: new Date(post.publishedAt || post.createdAt).toLocaleDateString(),
        readTime: `${Math.ceil((post.content?.replace(/<[^>]*>/g, "").split(/\s+/).length || 0) / 200)} min read`,
        slug: post.slug,
        views: post.views,
      }));
    }
    return [];
  } catch (error) {
    console.error("Failed to fetch videos:", error);
    return [];
  }
}

export default function VideosPage() {
  const [videos, setVideos] = useState<VideoArticle[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadVideos() {
      const articles = await fetchVideos();
      setVideos(articles);
      setLoading(false);
    }
    loadVideos();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-white">
        <section className="bg-gradient-to-r from-purple-600 to-purple-800 text-white py-8 lg:py-12">
          <div className="px-4 lg:px-8">
            <div className="animate-pulse">
              <div className="h-8 lg:h-12 bg-purple-500 rounded mb-2 lg:mb-4 w-64"></div>
              <div className="h-4 lg:h-6 bg-purple-500 rounded w-96"></div>
            </div>
          </div>
        </section>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <section className="bg-gradient-to-r from-purple-600 to-purple-800 text-white py-8 lg:py-12">
        <div className="px-4 lg:px-8">
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="text-2xl lg:text-4xl font-bold mb-2 lg:mb-4">
            Videos
          </motion.h1>
          <p className="text-sm lg:text-xl opacity-90">Gaming videos, streams, and multimedia content</p>
        </div>
      </section>

      <section className="px-4 lg:px-8 py-6 lg:py-8">
        {videos.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {videos.map((video, index) => (
              <motion.article key={video.id} initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.1 }} className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow border">
                <Link href={`/article/news/${video.slug}`}>
                  <div className="relative aspect-video overflow-hidden cursor-pointer bg-gray-100">
                    <Image src={video.media.url} alt={video.title} fill className="object-cover" />
                    <div className="absolute inset-0 flex items-center justify-center bg-black/20 hover:bg-black/30 transition-all">
                      <div className="bg-purple-600 hover:bg-purple-700 rounded-full p-4 transition-colors">
                        <Play className="h-8 w-8 text-white ml-1" fill="currentColor" />
                      </div>
                    </div>
                  </div>
                </Link>
                <div className="p-6">
                  <span className="text-purple-600 text-xs font-semibold uppercase">Video</span>
                  <Link href={`/article/news/${video.slug}`}>
                    <h3 className="text-gray-900 font-bold text-lg leading-tight mt-2 mb-3 hover:text-purple-600 transition-colors cursor-pointer">{video.title}</h3>
                  </Link>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-3">{video.excerpt}</p>
                  <div className="flex items-center justify-between text-gray-500 text-xs">
                    <div className="flex items-center gap-2">
                      <span>{video.author}</span>
                      <span>•</span>
                      <span>{video.publishedAt}</span>
                    </div>
                    <span>{video.views.toLocaleString()} views</span>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">No Videos Yet</h2>
            <p className="text-gray-600">Check back later for the latest videos!</p>
          </div>
        )}
      </section>
    </div>
  );
}