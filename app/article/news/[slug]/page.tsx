import { Metadata } from "next";
import BlogPostClient from "./blog-post-client";

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
  params: { slug: string };
}

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

    return await response.json();
  } catch (error) {
    console.error("Failed to fetch article:", error);
    return null;
  }
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  try {
    const article = await fetchArticleBySlug(params.slug);
    
    if (!article) {
      return {
        title: 'Article Not Found',
        description: 'The requested article could not be found.'
      };
    }

    return {
      title: article.meta_title || article.title,
      description: article.meta_description || article.excerpt,
      keywords: article.meta_keywords,
      openGraph: {
        title: article.title,
        description: article.excerpt,
        images: article.featuredImage ? [article.featuredImage] : [],
        type: 'article'
      },
      twitter: {
        card: 'summary_large_image',
        title: article.title,
        description: article.excerpt,
        images: article.featuredImage ? [article.featuredImage] : []
      }
    };
  } catch (error) {
    console.error('Error generating metadata:', error);
    return {
      title: 'Article',
      description: 'Read the latest news and articles.'
    };
  }
}

export default function BlogPost({ params }: PageProps) {
  return <BlogPostClient params={params} />;
}