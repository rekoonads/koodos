// For your koodos.in website - app/article/news/page.tsx
"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { fetchNews, fetchCategories, type NewsArticle } from "@/lib/api";

// Helper functions
function estimateReadTime(content: string): string {
  const wordsPerMinute = 200;
  const textContent = content.replace(/<[^>]*>/g, "");
  const wordCount = textContent.split(/\s+/).length;
  const minutes = Math.ceil(wordCount / wordsPerMinute);
  return `${minutes} min read`;
}

function formatPublishedDate(date: string): string {
  const now = new Date();
  const publishedDate = new Date(date);
  const diffInHours = Math.floor(
    (now.getTime() - publishedDate.getTime()) / (1000 * 60 * 60)
  );

  if (diffInHours < 1) {
    const diffInMinutes = Math.floor(
      (now.getTime() - publishedDate.getTime()) / (1000 * 60)
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
  src: string;
  title: string;
  className?: string;
}

function MediaDisplay({ src, title, className = "" }: MediaDisplayProps) {
  return (
    <Image
      src={src || "/placeholder.svg?height=300&width=400"}
      alt={title}
      fill
      className={`object-cover ${className}`}
    />
  );
}

export default function News() {
  const [newsData, setNewsData] = useState<{
    featured?: NewsArticle;
    articles: NewsArticle[];
    total: number;
  }>({ articles: [], total: 0 });
  const [categories, setCategories] = useState<
    Array<{ name: string; count: number; displayName: string }>
  >([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function loadData() {
      try {
        setLoading(true);

        // Fetch news with featured article
        const newsResponse = await fetchNews({ limit: 10, featured: true });
        if (newsResponse.success && newsResponse.data) {
          setNewsData(newsResponse.data);
        } else {
          setError(newsResponse.error || "Failed to load news");
        }

        // Fetch categories
        const categoriesResponse = await fetchCategories();
        if (categoriesResponse.success && categoriesResponse.data) {
          setCategories(categoriesResponse.data);
        }
      } catch (err) {
        setError("Failed to load data");
        console.error("Error loading data:", err);
      } finally {
        setLoading(false);
      }
    }

    loadData();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-white">
        {/* Loading skeleton - same structure as your original */}
        <section className="bg-gradient-to-r from-red-600 to-red-800 text-white py-8 lg:py-12">
          <div className="px-4 lg:px-8">
            <div className="animate-pulse">
              <div className="h-8 lg:h-12 bg-red-500 rounded mb-2 lg:mb-4 w-64"></div>
              <div className="h-4 lg:h-6 bg-red-500 rounded w-96"></div>
            </div>
          </div>
        </section>
        <div className="px-4 lg:px-8 py-6 lg:py-8">
          <div className="animate-pulse">
            <div className="h-64 lg:h-96 bg-gray-300 rounded-lg mb-6"></div>
            <div className="space-y-4">
              {[1, 2, 3].map((i) => (
                <div key={i} className="h-32 bg-gray-200 rounded"></div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Unable to Load News
          </h2>
          <p className="text-gray-600 mb-4">{error}</p>
          <button
            onClick={() => window.location.reload()}
            className="bg-red-600 text-white px-6 py-2 rounded-lg hover:bg-red-700 transition-colors"
          >
            Try Again
          </button>
        </div>
      </div>
    );
  }

  const { featured, articles } = newsData;

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
      {featured && (
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
              <p className="text-xs lg:text-sm truncate">{featured.title}</p>
            </motion.div>
          </div>
        </section>
      )}

      {/* Main News Content */}
      <section className="px-4 lg:px-8 py-6 lg:py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
          {/* Main Story */}
          <div className="lg:col-span-2">
            {featured && (
              <motion.article
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="mb-8"
              >
                <Link href={`/article/${featured.slug}`} className="block">
                  <div className="relative h-64 lg:h-96 overflow-hidden rounded-lg mb-6 cursor-pointer hover:opacity-95 transition-opacity">
                    <MediaDisplay
                      src={featured.featuredImage || ""}
                      title={featured.title}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent pointer-events-none" />
                    <div className="absolute bottom-0 left-0 right-0 p-4 lg:p-6 pointer-events-none">
                      <span className="bg-red-600 text-white px-3 py-1 text-xs font-bold rounded mb-3 inline-block">
                        BREAKING NEWS
                      </span>
                      <h2 className="text-white font-bold text-xl lg:text-3xl leading-tight mb-2">
                        {featured.title}
                      </h2>
                      <p className="text-white/90 text-sm lg:text-lg hidden lg:block">
                        {featured.excerpt}
                      </p>
                      <div className="flex items-center gap-2 lg:gap-4 mt-4 text-white/80 text-xs lg:text-sm">
                        <span className="truncate">{featured.author}</span>
                        <span className="hidden lg:inline">•</span>
                        <span className="hidden lg:inline">
                          {formatPublishedDate(featured.createdAt)}
                        </span>
                        <span className="hidden lg:inline">•</span>
                        <span className="hidden lg:inline">
                          {estimateReadTime(featured.content)}
                        </span>
                        <span className="hidden lg:inline">•</span>
                        <span className="hidden lg:inline">
                          {featured.views.toLocaleString()} views
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.article>
            )}

            {/* Secondary Stories */}
            <div className="space-y-6">
              {articles.slice(0, 2).map((article, index) => (
                <motion.article
                  key={article.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex flex-col lg:flex-row gap-4 lg:gap-6 p-4 lg:p-6 border border-gray-200 rounded-lg hover:shadow-lg transition-shadow"
                >
                  <Link href={`/article/${article.slug}`} className="block">
                    <div className="relative w-full h-48 lg:w-48 lg:h-32 flex-shrink-0 overflow-hidden rounded cursor-pointer hover:opacity-95 transition-opacity">
                      <MediaDisplay
                        src={article.featuredImage || ""}
                        title={article.title}
                      />
                    </div>
                  </Link>
                  <div className="flex-1">
                    <span className="text-red-600 text-xs font-semibold uppercase">
                      {article.category.charAt(0).toUpperCase() +
                        article.category.slice(1).replace("-", " ")}
                    </span>
                    <Link href={`/article/${article.slug}`}>
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
                        {formatPublishedDate(article.createdAt)}
                      </span>
                      <span className="hidden lg:inline">•</span>
                      <span className="hidden lg:inline">
                        {estimateReadTime(article.content)}
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
                {articles.slice(0, 5).map((article, index) => (
                  <Link key={article.id} href={`/article/${article.slug}`}>
                    <div className="flex gap-3 cursor-pointer hover:bg-white p-2 rounded transition-colors">
                      <span className="text-red-600 font-bold text-lg">
                        {index + 1}
                      </span>
                      <div>
                        <h4 className="text-gray-900 font-semibold text-sm leading-tight hover:text-red-600 transition-colors">
                          {article.title}
                        </h4>
                        <p className="text-gray-500 text-xs mt-1">
                          {formatPublishedDate(article.createdAt)} •{" "}
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
            {categories.length > 0 && (
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
                  {categories.map((category) => (
                    <div
                      key={category.name}
                      className="flex justify-between items-center py-1"
                    >
                      <span className="text-gray-700 hover:text-red-600 cursor-pointer transition-colors">
                        {category.displayName}
                      </span>
                      <span className="text-gray-500 text-sm">
                        ({category.count})
                      </span>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
