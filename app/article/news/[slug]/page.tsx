"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import Head from "next/head";
import VideoPlayer from '@/components/video-player';
import { CommentsSection } from '@/components/comments-section';
import {
  ArrowLeft,
  Calendar,
  User,
  Eye,
  Share2,
  Facebook,
  Twitter,
  Linkedin,
} from "lucide-react";

interface NewsArticle {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  featuredImage?: string;
  videoUrl?: string;
  thumbnail?: string;
  category: string;
  author: string;
  views: number;
  slug: string;
  tags: string[];
  createdAt: string;
  updatedAt: string;
  meta_title?: string;
  meta_description?: string;
  meta_keywords?: string;
}

interface PageProps {
  params: Promise<{ slug: string }>;
}

// API functions
async function fetchArticleBySlug(slug: string): Promise<NewsArticle | null> {
  try {
    const response = await fetch(`https://admin.koodos.in/api/public/articles/${slug}`, {
      cache: 'no-store'
    });

    if (!response.ok) {
      if (response.status === 404) {
        return null;
      }
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const article = await response.json();
    return article;
  } catch (error) {
    console.error("Failed to fetch article:", error);
    return null;
  }
}

async function fetchRelatedArticles(
  category: string,
  currentSlug: string
): Promise<NewsArticle[]> {
  try {
    const response = await fetch(`https://admin.koodos.in/api/public/articles?status=PUBLISHED&limit=3`, {
      cache: 'no-store'
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const result = await response.json();
    const articles = result.articles || [];
    
    // Filter out the current article
    return articles.filter(
      (article: NewsArticle) => article.slug !== currentSlug
    ).slice(0, 3);
  } catch (error) {
    console.error("Failed to fetch related articles:", error);
    return [];
  }
}

function formatDate(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

function estimateReadTime(content: string): string {
  const wordsPerMinute = 200;
  const textContent = content.replace(/<[^>]*>/g, ""); // Remove HTML tags
  const wordCount = textContent.split(/\s+/).length;
  const minutes = Math.ceil(wordCount / wordsPerMinute);
  return `${minutes} min read`;
}

export default function BlogPost({ params }: PageProps) {
  const [article, setArticle] = useState<NewsArticle | null>(null);
  const [relatedArticles, setRelatedArticles] = useState<NewsArticle[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [slug, setSlug] = useState<string>("");

  useEffect(() => {
    async function loadParams() {
      const resolvedParams = await params;
      setSlug(resolvedParams.slug);
    }
    loadParams();
  }, [params]);

  useEffect(() => {
    if (!slug) return;

    async function loadArticle() {
      try {
        setLoading(true);
        setError(null);

        const articleData = await fetchArticleBySlug(slug);

        if (!articleData) {
          setError("Article not found");
          return;
        }

        setArticle(articleData);

        // Load related articles
        const related = await fetchRelatedArticles(articleData.category, slug);
        setRelatedArticles(related);
      } catch (err) {
        console.error("Error loading article:", err);
        setError("Failed to load article");
      } finally {
        setLoading(false);
      }
    }

    loadArticle();
  }, [slug]);

  const shareUrl = typeof window !== "undefined" ? window.location.href : "";
  const shareTitle = article?.title || "";

  if (loading) {
    return (
      <div className="min-h-screen bg-white">
        {/* Header */}
        <section className="bg-gradient-to-r from-red-600 to-red-800 text-white py-8">
          <div className="px-4 lg:px-8">
            <div className="animate-pulse">
              <div className="h-8 bg-red-500 rounded w-64 mb-4"></div>
              <div className="h-4 bg-red-500 rounded w-96"></div>
            </div>
          </div>
        </section>

        {/* Content Skeleton */}
        <div className="px-4 lg:px-8 py-8">
          <div className="max-w-4xl mx-auto">
            <div className="animate-pulse space-y-6">
              <div className="h-64 bg-gray-300 rounded-lg"></div>
              <div className="space-y-4">
                <div className="h-8 bg-gray-300 rounded"></div>
                <div className="h-4 bg-gray-300 rounded w-3/4"></div>
                <div className="h-4 bg-gray-300 rounded"></div>
                <div className="h-4 bg-gray-300 rounded w-1/2"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (error || !article) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Article Not Found
          </h1>
          <p className="text-gray-600 mb-8">
            The article you're looking for doesn't exist or has been removed.
          </p>
          <Link
            href="/article/news"
            className="bg-red-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-700 transition-colors inline-flex items-center gap-2"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to News
          </Link>
        </div>
      </div>
    );
  }

  return (
    <>
      <Head>
        <title>{article?.meta_title || article?.title || 'Article'}</title>
        <meta name="description" content={article?.meta_description || article?.excerpt || ''} />
        <meta name="keywords" content={article?.meta_keywords || ''} />
        <meta property="og:title" content={article?.title || ''} />
        <meta property="og:description" content={article?.excerpt || ''} />
        <meta property="og:image" content={article?.featuredImage || ''} />
        <meta property="og:type" content="article" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={article?.title || ''} />
        <meta name="twitter:description" content={article?.excerpt || ''} />
        <meta name="twitter:image" content={article?.featuredImage || ''} />
      </Head>
      <div className="min-h-screen bg-white">
      {/* Header */}
      <section className="bg-gradient-to-r from-red-600 to-red-800 text-white py-8">
        <div className="px-4 lg:px-8">
          <div className="flex items-center gap-4 mb-4">
            <Link
              href="/article/news"
              className="text-white hover:text-red-200 transition-colors inline-flex items-center gap-2"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to News
            </Link>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <span className="bg-red-500 text-white px-3 py-1 text-sm font-bold rounded mb-4 inline-block">
              {article.category.charAt(0).toUpperCase() +
                article.category.slice(1).replace("-", " ")}
            </span>
            <h1 className="text-2xl lg:text-4xl font-bold mb-4 leading-tight">
              {article.title}
            </h1>
            {article.excerpt && (
              <p className="text-lg lg:text-xl opacity-90 leading-relaxed">
                {article.excerpt}
              </p>
            )}
          </motion.div>
        </div>
      </section>

      {/* Article Content */}
      <article className="px-4 lg:px-8 py-8">
        <div className="max-w-4xl mx-auto">
          {/* Article Meta */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-wrap items-center gap-4 text-gray-600 text-sm mb-8 pb-6 border-b"
          >
            <div className="flex items-center gap-2">
              <User className="h-4 w-4" />
              <span>{article.author}</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              <span>{formatDate(article.createdAt)}</span>
            </div>
            <div className="flex items-center gap-2">
              <Eye className="h-4 w-4" />
              <span>{article.views.toLocaleString()} views</span>
            </div>
            <div className="flex items-center gap-2">
              <span>{estimateReadTime(article.content)}</span>
            </div>
          </motion.div>

          {/* Featured Media */}
          {(article.featuredImage || article.videoUrl) && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="relative aspect-video w-full overflow-hidden rounded-lg mb-8"
            >
              {article.videoUrl ? (
                <VideoPlayer 
                  src={article.videoUrl} 
                  poster={article.thumbnail || article.featuredImage}
                  className="w-full h-full"
                />
              ) : (
                <Image
                  src={article.featuredImage || "/placeholder.svg"}
                  alt={article.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
                  priority
                />
              )}
            </motion.div>
          )}

          {/* Article Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="prose prose-lg max-w-none mb-12"
            style={{
              color: "#374151",
              lineHeight: "1.8",
            }}
          >
            <div
              dangerouslySetInnerHTML={{ __html: article.content }}
              className="prose prose-gray max-w-none prose-headings:font-bold prose-headings:text-gray-900 prose-h1:text-3xl prose-h2:text-2xl prose-h3:text-xl prose-p:text-gray-700 prose-p:leading-relaxed prose-a:text-red-600 hover:prose-a:text-red-700 prose-strong:text-gray-900 prose-ul:text-gray-700 prose-ol:text-gray-700 prose-li:text-gray-700 prose-blockquote:border-l-red-600 prose-blockquote:text-gray-700 prose-code:bg-gray-100 prose-code:text-gray-800 prose-code:px-1 prose-code:rounded"
            />
          </motion.div>

          {/* Tags */}
          {article.tags && article.tags.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="mb-8"
            >
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Tags</h3>
              <div className="flex flex-wrap gap-2">
                {article.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm hover:bg-gray-200 transition-colors"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </motion.div>
          )}

          {/* Share Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="border-t border-b py-6 mb-12"
          >
            <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
              <Share2 className="h-5 w-5" />
              Share this article
            </h3>
            <div className="flex gap-4">
              <a
                href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
                  shareUrl
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
              >
                <Facebook className="h-4 w-4" />
                Facebook
              </a>
              <a
                href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(
                  shareUrl
                )}&text=${encodeURIComponent(shareTitle)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-sky-500 text-white px-4 py-2 rounded-lg hover:bg-sky-600 transition-colors"
              >
                <Twitter className="h-4 w-4" />
                Twitter
              </a>
              <a
                href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
                  shareUrl
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-blue-700 text-white px-4 py-2 rounded-lg hover:bg-blue-800 transition-colors"
              >
                <Linkedin className="h-4 w-4" />
                LinkedIn
              </a>
            </div>
          </motion.div>
        </div>
      </article>

      {/* Related Articles */}
      {relatedArticles.length > 0 && (
        <section className="px-4 lg:px-8 py-12 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-2xl lg:text-3xl font-bold text-gray-900 mb-8"
            >
              Related Articles
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedArticles.map((relatedArticle, index) => (
                <motion.article
                  key={relatedArticle.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
                >
                  <Link href={`/article/news/${relatedArticle.slug}`}>
                    <div className="relative aspect-video overflow-hidden cursor-pointer">
                      <Image
                        src={relatedArticle.featuredImage || "/placeholder.svg"}
                        alt={relatedArticle.title}
                        fill
                        className="object-cover hover:scale-105 transition-transform duration-300"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                    </div>
                  </Link>
                  <div className="p-6">
                    <span className="text-red-600 text-xs font-semibold uppercase">
                      {relatedArticle.category.replace("-", " ")}
                    </span>
                    <Link href={`/article/news/${relatedArticle.slug}`}>
                      <h3 className="text-gray-900 font-bold text-lg leading-tight mt-2 mb-3 hover:text-red-600 transition-colors cursor-pointer">
                        {relatedArticle.title}
                      </h3>
                    </Link>
                    <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                      {relatedArticle.excerpt}
                    </p>
                    <div className="flex items-center gap-4 text-gray-500 text-xs">
                      <span>{relatedArticle.author}</span>
                      <span>•</span>
                      <span>{formatDate(relatedArticle.createdAt)}</span>
                      <span>•</span>
                      <span>{relatedArticle.views.toLocaleString()} views</span>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Newsletter Signup */}
      <section className="px-4 lg:px-8 py-12 bg-red-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            <h2 className="text-2xl lg:text-3xl font-bold mb-4">
              Stay Updated
            </h2>
            <p className="text-lg opacity-90 mb-8">
              Get the latest gaming news and updates delivered to your inbox
            </p>
            <form className="max-w-md mx-auto flex gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 text-gray-900 rounded-lg border border-gray-300 focus:ring-2 focus:ring-white focus:border-transparent"
                required
              />
              <button
                type="submit"
                className="bg-white text-red-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Subscribe
              </button>
            </form>
          </motion.div>
        </div>
      </section>
      
      {/* Comments Section */}
      <section className="px-4 lg:px-8 py-8">
        <div className="max-w-4xl mx-auto">
          <CommentsSection articleId={article.id} />
        </div>
      </section>
    </div>
    </>
  );
}
