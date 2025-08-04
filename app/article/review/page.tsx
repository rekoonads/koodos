"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Play, ChevronLeft, ChevronRight } from "lucide-react";

interface ReviewArticle {
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
  rating?: number;
  reviewScore?: number;
}

// API functions
async function fetchReviews(): Promise<ReviewArticle[]> {
  try {
    const response = await fetch(
      "http://localhost:3001/api/news?category=reviews&limit=10",
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
        cache: 'no-cache'
      }
    );

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const result = await response.json();
    
    if (result && result.articles && Array.isArray(result.articles)) {
      const posts = result.articles;
      return posts.map((post: any) => ({
        id: post.id,
        title: post.title,
        excerpt:
          post.excerpt ||
          (post.content ? post.content.replace(/<[^>]*>/g, "").substring(0, 150) + "..." : "No excerpt available"),
        media: {
          type: (post.featuredImage && (post.featuredImage.includes('youtube.com') || post.featuredImage.includes('youtu.be') || post.featuredImage.includes('.mp4'))) ? "video" as const : "image" as const,
          url: post.featuredImage || "/placeholder.svg?height=300&width=400",
          thumbnail: post.featuredImage || "/placeholder.svg?height=300&width=400",
        },
        category: post.category ? post.category.charAt(0).toUpperCase() + post.category.slice(1) : 'Reviews',
        author: post.author,
        publishedAt: formatPublishedDate(new Date(post.publishedAt || post.createdAt)),
        readTime: estimateReadTime(post.content),
        slug: post.slug,
        views: post.views,
        rating: post.rating,
        reviewScore: post.reviewScore,
      }));
    }
    return [];
  } catch (error) {
    console.error("Failed to fetch reviews:", error);
    return [];
  }
}

function estimateReadTime(content: string | null | undefined): string {
  if (!content) return "1 min read";
  const wordsPerMinute = 200;
  const textContent = content.replace(/<[^>]*>/g, "");
  const wordCount = textContent.split(/\s+/).length;
  const minutes = Math.ceil(wordCount / wordsPerMinute);
  return `${minutes} min read`;
}

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

function MediaDisplay({ media, title, className = "" }: { media: { type: string; url: string; thumbnail?: string }; title: string; className?: string }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [showPlayButton, setShowPlayButton] = useState(true);

  if (media.type === "video") {
    const isYouTube = media.url.includes('youtube.com') || media.url.includes('youtu.be');
    
    if (isYouTube) {
      let videoId = '';
      if (media.url.includes('youtube.com/watch?v=')) {
        videoId = media.url.split('v=')[1].split('&')[0];
      } else if (media.url.includes('youtu.be/')) {
        videoId = media.url.split('youtu.be/')[1].split('?')[0];
      }
      
      if (videoId) {
        return (
          <div className={`relative w-full h-full ${className}`}>
            {showPlayButton && (
              <div 
                className="absolute inset-0 flex items-center justify-center bg-black/20 hover:bg-black/30 transition-all duration-300 cursor-pointer z-10"
                onClick={() => setShowPlayButton(false)}
              >
                <div className="group flex items-center justify-center w-20 h-20 bg-black/70 hover:bg-red-600 rounded-full transition-all duration-300 transform hover:scale-110">
                  <Play className="h-8 w-8 text-white ml-1 group-hover:text-white transition-colors" fill="currentColor" />
                </div>
              </div>
            )}
            <iframe
              className="w-full h-full"
              src={`https://www.youtube.com/embed/${videoId}?rel=0&autoplay=${showPlayButton ? '0' : '1'}`}
              title={title}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        );
      }
    }
    
    return (
      <div className={`relative w-full h-full ${className}`}>
        <video
          className="w-full h-full object-cover"
          controls
          preload="metadata"
          poster={media.thumbnail}
          onPlay={() => setIsPlaying(true)}
          onPause={() => setIsPlaying(false)}
        >
          <source src={media.url} type="video/mp4" />
        </video>
        
        {!isPlaying && (
          <div className="absolute inset-0 flex items-center justify-center bg-black/20 hover:bg-black/30 transition-all duration-300">
            <button 
              className="group flex items-center justify-center w-20 h-20 bg-black/70 hover:bg-red-600 rounded-full transition-all duration-300 transform hover:scale-110"
              onClick={(e) => {
                const video = e.currentTarget.parentElement?.querySelector('video');
                if (video) {
                  video.play();
                  setIsPlaying(true);
                }
              }}
            >
              <Play className="h-8 w-8 text-white ml-1 group-hover:text-white transition-colors" fill="currentColor" />
            </button>
          </div>
        )}
      </div>
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

export default function ReviewsPage() {
  const [reviews, setReviews] = useState<ReviewArticle[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function loadReviews() {
      try {
        setLoading(true);
        const articles = await fetchReviews();
        setReviews(articles);
      } catch (err) {
        console.error("Error loading reviews:", err);
        setError("Failed to load review articles");
      } finally {
        setLoading(false);
      }
    }

    loadReviews();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-white">
        <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-8 lg:py-12">
          <div className="px-4 lg:px-8">
            <div className="animate-pulse">
              <div className="h-8 lg:h-12 bg-blue-500 rounded mb-2 lg:mb-4 w-64"></div>
              <div className="h-4 lg:h-6 bg-blue-500 rounded w-96"></div>
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
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Unable to Load Reviews</h1>
          <p className="text-gray-600 mb-8">{error}</p>
          <button
            onClick={() => window.location.reload()}
            className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            Try Again
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-8 lg:py-12">
        <div className="px-4 lg:px-8">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-2xl lg:text-4xl font-bold mb-2 lg:mb-4"
          >
            Reviews
          </motion.h1>
          <p className="text-sm lg:text-xl opacity-90">
            In-depth reviews of games, tech, and entertainment
          </p>
        </div>
      </section>

      {/* Reviews Content */}
      <section className="px-4 lg:px-8 py-6 lg:py-8">
        {reviews.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {reviews.map((review, index) => (
              <motion.article
                key={review.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow border"
              >
                <Link href={`/article/news/${review.slug}`}>
                  <div className="relative aspect-video overflow-hidden cursor-pointer">
                    <MediaDisplay
                      media={review.media}
                      title={review.title}
                    />
                    {review.reviewScore && (
                      <div className="absolute top-2 right-2 bg-blue-600 text-white px-2 py-1 rounded text-sm font-bold">
                        {review.reviewScore}/10
                      </div>
                    )}
                  </div>
                </Link>
                <div className="p-6">
                  <span className="text-blue-600 text-xs font-semibold uppercase">
                    Review
                  </span>
                  <Link href={`/article/news/${review.slug}`}>
                    <h3 className="text-gray-900 font-bold text-lg leading-tight mt-2 mb-3 hover:text-blue-600 transition-colors cursor-pointer">
                      {review.title}
                    </h3>
                  </Link>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                    {review.excerpt}
                  </p>
                  <div className="flex items-center justify-between text-gray-500 text-xs">
                    <div className="flex items-center gap-2">
                      <span>{review.author}</span>
                      <span>•</span>
                      <span>{review.publishedAt}</span>
                    </div>
                    <span>{review.views.toLocaleString()} views</span>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">No Reviews Yet</h2>
            <p className="text-gray-600">Check back later for the latest reviews!</p>
          </div>
        )}
      </section>
    </div>
  );
}