"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

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
  slug?: string;
  views: number;
}

// API functions
async function fetchNews(): Promise<NewsArticle[]> {
  try {
    const response = await fetch(
      "https://admindash-pi-three.vercel.app/api/public/news?limit=10&featured=true",
      {
        method: "GET",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
        },
        next: { revalidate: 300 },
      }
    );

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const result = await response.json();
    if (result.success) {
      // Transform database posts to match the NewsArticle interface
      const posts = result.data.articles || [];
      return posts.map((post: any) => ({
        id: post.id,
        title: post.title,
        excerpt:
          post.excerpt ||
          post.content.replace(/<[^>]*>/g, "").substring(0, 150) + "...",
        media: {
          type: "image" as const,
          url: post.featuredImage || "/placeholder.svg?height=300&width=400",
        },
        category:
          post.category.charAt(0).toUpperCase() +
          post.category.slice(1).replace("-", " "),
        author: post.author,
        publishedAt: formatPublishedDate(new Date(post.createdAt)),
        readTime: estimateReadTime(post.content),
        slug: post.slug,
        views: post.views,
      }));
    }
    return [];
  } catch (error) {
    console.error("Failed to fetch news:", error);
    return [];
  }
}

// Helper function to estimate read time
function estimateReadTime(content: string): string {
  const wordsPerMinute = 200;
  const textContent = content.replace(/<[^>]*>/g, ""); // Remove HTML tags
  const wordCount = textContent.split(/\s+/).length;
  const minutes = Math.ceil(wordCount / wordsPerMinute);
  return `${minutes} min read`;
}

// Helper function to format published date
function formatPublishedDate(date: Date): string {
  const now = new Date();
  const diffInHours = Math.floor(
    (now.getTime() - date.getTime()) / (1000 * 60 * 60)
  );

  if (diffInHours < 1) {
    const diffInMinutes = Math.floor(
      (now.getTime() - date.getTime()) / (1000 * 60)
    );
    return `${diffInMinutes} minutes ago`;
  } else if (diffInHours < 24) {
    return `${diffInHours} hours ago`;
  } else {
    const diffInDays = Math.floor(diffInHours / 24);
    return `${diffInDays} days ago`;
  }
}

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

export default function KoodosNews() {
  const [newsArticles, setNewsArticles] = useState<NewsArticle[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function loadNews() {
      try {
        setLoading(true);
        const articles = await fetchNews();
        setNewsArticles(articles);
      } catch (err) {
        console.error("Error loading news:", err);
        setError("Failed to load news articles");
      } finally {
        setLoading(false);
      }
    }

    loadNews();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-white">
        {/* Header Skeleton */}
        <section className="bg-gradient-to-r from-red-600 to-red-800 text-white py-8 lg:py-12">
          <div className="px-4 lg:px-8">
            <div className="animate-pulse">
              <div className="h-8 lg:h-12 bg-red-500 rounded mb-2 lg:mb-4 w-64"></div>
              <div className="h-4 lg:h-6 bg-red-500 rounded w-96"></div>
            </div>
          </div>
        </section>

        {/* Content Skeleton */}
        <section className="px-4 lg:px-8 py-6 lg:py-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
            <div className="lg:col-span-2">
              <div className="animate-pulse mb-8">
                <div className="h-64 lg:h-96 bg-gray-300 rounded-lg mb-6"></div>
              </div>
            </div>
            <div className="space-y-6">
              <div className="bg-gray-50 p-4 lg:p-6 rounded-lg">
                <div className="animate-pulse space-y-4">
                  <div className="h-6 bg-gray-300 rounded w-32"></div>
                  {[1, 2, 3, 4, 5].map((i) => (
                    <div key={i} className="flex gap-3">
                      <div className="w-6 h-6 bg-gray-300 rounded"></div>
                      <div className="flex-1 space-y-2">
                        <div className="h-4 bg-gray-300 rounded"></div>
                        <div className="h-3 bg-gray-300 rounded w-24"></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">
            Unable to Load News
          </h1>
          <p className="text-gray-600 mb-8">{error}</p>
          <button
            onClick={() => window.location.reload()}
            className="bg-red-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-700 transition-colors"
          >
            Try Again
          </button>
        </div>
      </div>
    );
  }

  // Get the latest breaking news (most recent post)
  const breakingNews = newsArticles[0];

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
      {breakingNews && (
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
              <Link
                href={`/article/news/${breakingNews.slug}`}
                className="hover:underline"
              >
                <p className="text-xs lg:text-sm truncate">
                  {breakingNews.title}
                </p>
              </Link>
            </motion.div>
          </div>
        </section>
      )}

      {/* Main News Content */}
      <section className="px-4 lg:px-8 py-6 lg:py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
          {/* Main Story */}
          <div className="lg:col-span-2">
            {breakingNews && (
              <motion.article
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="mb-8"
              >
                <Link
                  href={`/article/news/${breakingNews.slug}`}
                  className="block"
                >
                  <div className="relative h-64 lg:h-96 overflow-hidden rounded-lg mb-6 cursor-pointer hover:opacity-95 transition-opacity">
                    <MediaDisplay
                      media={breakingNews.media}
                      title={breakingNews.title}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent pointer-events-none" />
                    <div className="absolute bottom-0 left-0 right-0 p-4 lg:p-6 pointer-events-none">
                      <span className="bg-red-600 text-white px-3 py-1 text-xs font-bold rounded mb-3 inline-block">
                        BREAKING NEWS
                      </span>
                      <h2 className="text-white font-bold text-xl lg:text-3xl leading-tight mb-2">
                        {breakingNews.title}
                      </h2>
                      <p className="text-white/90 text-sm lg:text-lg hidden lg:block">
                        {breakingNews.excerpt}
                      </p>
                      <div className="flex items-center gap-2 lg:gap-4 mt-4 text-white/80 text-xs lg:text-sm">
                        <span className="truncate">{breakingNews.author}</span>
                        <span className="hidden lg:inline">•</span>
                        <span className="hidden lg:inline">
                          {breakingNews.publishedAt}
                        </span>
                        <span className="hidden lg:inline">•</span>
                        <span className="hidden lg:inline">
                          {breakingNews.readTime}
                        </span>
                        <span className="hidden lg:inline">•</span>
                        <span className="hidden lg:inline">
                          {breakingNews.views.toLocaleString()} views
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.article>
            )}

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
                  <Link
                    href={`/article/news/${article.slug}`}
                    className="block"
                  >
                    <div className="relative w-full h-48 lg:w-48 lg:h-32 flex-shrink-0 overflow-hidden rounded cursor-pointer hover:opacity-95 transition-opacity">
                      <MediaDisplay
                        media={article.media}
                        title={article.title}
                      />
                    </div>
                  </Link>
                  <div className="flex-1">
                    <span className="text-red-600 text-xs font-semibold uppercase">
                      {article.category}
                    </span>
                    <Link href={`/article/news/${article.slug}`}>
                      <h3 className="text-gray-900 font-bold text-lg lg:text-xl leading-tight mt-2 mb-3 hover:text-red-600 transition-colors cursor-pointer">
                        {article.title}
                      </h3>
                    </Link>
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
                      <span className="hidden lg:inline">•</span>
                      <span className="hidden lg:inline">
                        {article.views.toLocaleString()} views
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
                {newsArticles.slice(0, 5).map((article, index) => (
                  <Link key={article.id} href={`/article/news/${article.slug}`}>
                    <div className="flex gap-3 cursor-pointer hover:bg-white p-2 rounded transition-colors">
                      <span className="text-red-600 font-bold text-lg">
                        {index + 1}
                      </span>
                      <div>
                        <h4 className="text-gray-900 font-semibold text-sm leading-tight hover:text-red-600 transition-colors">
                          {article.title}
                        </h4>
                        <p className="text-gray-500 text-xs mt-1">
                          {article.publishedAt} •{" "}
                          {article.views.toLocaleString()} views
                        </p>
                      </div>
                    </div>
                  </Link>
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
              <form className="space-y-3">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-3 py-2 text-gray-900 rounded-lg border border-gray-300 focus:ring-2 focus:ring-white focus:border-transparent"
                  required
                />
                <button
                  type="submit"
                  className="w-full bg-white text-red-600 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                >
                  Subscribe
                </button>
              </form>
            </motion.div>

            {/* Categories */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-gray-50 p-4 lg:p-6 rounded-lg"
            >
              <h3 className="text-xl font-bold text-gray-900 mb-4 border-b-2 border-red-600 pb-2 inline-block">
                Categories
              </h3>
              <div className="space-y-2">
                {Array.from(
                  new Set(newsArticles.map((article) => article.category))
                ).map((category) => {
                  const count = newsArticles.filter(
                    (article) => article.category === category
                  ).length;
                  return (
                    <div
                      key={category}
                      className="flex justify-between items-center py-1"
                    >
                      <span className="text-gray-700 hover:text-red-600 cursor-pointer transition-colors">
                        {category}
                      </span>
                      <span className="text-gray-500 text-sm">({count})</span>
                    </div>
                  );
                })}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Load More Section */}
      {newsArticles.length > 3 && (
        <section className="px-4 lg:px-8 pb-8">
          <div className="text-center">
            <button className="bg-red-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-red-700 transition-colors">
              Load More Articles
            </button>
          </div>
        </section>
      )}
    </div>
  );
}
