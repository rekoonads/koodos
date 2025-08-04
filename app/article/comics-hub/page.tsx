"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

async function fetchComics() {
  try {
    const response = await fetch("http://localhost:3001/api/news?category=comics-hub&limit=10", {
      method: "GET", headers: { "Content-Type": "application/json" }, cache: 'no-cache'
    });
    if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
    const result = await response.json();
    if (result && result.articles && Array.isArray(result.articles)) {
      return result.articles.map((post: any) => ({
        id: post.id, title: post.title,
        excerpt: post.excerpt || (post.content ? post.content.replace(/<[^>]*>/g, "").substring(0, 150) + "..." : "No excerpt available"),
        media: { type: "image" as const, url: post.featuredImage || "/placeholder.svg?height=300&width=400" },
        author: post.author, publishedAt: new Date(post.publishedAt || post.createdAt).toLocaleDateString(),
        slug: post.slug, views: post.views,
      }));
    }
    return [];
  } catch (error) { console.error("Failed to fetch comics:", error); return []; }
}

export default function ComicsHubPage() {
  const [comics, setComics] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadComics() {
      const articles = await fetchComics();
      setComics(articles);
      setLoading(false);
    }
    loadComics();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-white">
        <section className="bg-gradient-to-r from-orange-600 to-orange-800 text-white py-8 lg:py-12">
          <div className="px-4 lg:px-8"><div className="animate-pulse">
            <div className="h-8 lg:h-12 bg-orange-500 rounded mb-2 lg:mb-4 w-64"></div>
            <div className="h-4 lg:h-6 bg-orange-500 rounded w-96"></div>
          </div></div>
        </section>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <section className="bg-gradient-to-r from-orange-600 to-orange-800 text-white py-8 lg:py-12">
        <div className="px-4 lg:px-8">
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="text-2xl lg:text-4xl font-bold mb-2 lg:mb-4">Comics Hub</motion.h1>
          <p className="text-sm lg:text-xl opacity-90">Comic book news, reviews, and discussions</p>
        </div>
      </section>
      <section className="px-4 lg:px-8 py-6 lg:py-8">
        {comics.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {comics.map((comic, index) => (
              <motion.article key={comic.id} initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.1 }} className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow border">
                <Link href={`/article/news/${comic.slug}`}>
                  <div className="relative aspect-video overflow-hidden cursor-pointer bg-gray-100">
                    <Image src={comic.media.url} alt={comic.title} fill className="object-cover" />
                  </div>
                </Link>
                <div className="p-6">
                  <span className="text-orange-600 text-xs font-semibold uppercase">Comics</span>
                  <Link href={`/article/news/${comic.slug}`}>
                    <h3 className="text-gray-900 font-bold text-lg leading-tight mt-2 mb-3 hover:text-orange-600 transition-colors cursor-pointer">{comic.title}</h3>
                  </Link>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-3">{comic.excerpt}</p>
                  <div className="flex items-center justify-between text-gray-500 text-xs">
                    <div className="flex items-center gap-2">
                      <span>{comic.author}</span><span>•</span><span>{comic.publishedAt}</span>
                    </div>
                    <span>{comic.views.toLocaleString()} views</span>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">No Comics Content Yet</h2>
            <p className="text-gray-600">Check back later for the latest comic news!</p>
          </div>
        )}
      </section>
    </div>
  );
}