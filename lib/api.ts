// Frontend API client - only calls external backend
const API_BASE_URL = "http://localhost:3000/api/public";

export interface NewsArticle {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  featuredImage?: string;
  category: string;
  author: string;
  views: number;
  slug?: string;
  tags: string[];
  createdAt: string;
  updatedAt: string;
}

export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: string;
}

export async function fetchNews(options?: {
  limit?: number;
  category?: string;
  featured?: boolean;
}): Promise<
  ApiResponse<{
    featured?: NewsArticle;
    articles: NewsArticle[];
    total: number;
  }>
> {
  try {
    const params = new URLSearchParams();
    if (options?.limit) params.append("limit", options.limit.toString());
    if (options?.category) params.append("category", options.category);
    if (options?.featured) params.append("featured", "true");

    const response = await fetch(`${API_BASE_URL}/news?${params}`, {
      next: { revalidate: 300 }, // Revalidate every 5 minutes
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error("Failed to fetch news:", error);
    return {
      success: false,
      error: "Failed to fetch news articles",
    };
  }
}

export async function fetchArticle(
  slug: string
): Promise<ApiResponse<NewsArticle>> {
  try {
    const response = await fetch(`${API_BASE_URL}/news/${slug}`, {
      next: { revalidate: 300 },
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error("Failed to fetch article:", error);
    return {
      success: false,
      error: "Failed to fetch article",
    };
  }
}

export async function fetchCategories(): Promise<
  ApiResponse<Array<{ name: string; count: number; displayName: string }>>
> {
  try {
    const response = await fetch(`${API_BASE_URL}/categories`, {
      next: { revalidate: 3600 }, // Revalidate every hour
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error("Failed to fetch categories:", error);
    return {
      success: false,
      error: "Failed to fetch categories",
    };
  }
}

export async function getBanners(): Promise<ApiResponse<NewsArticle[]>> {
  try {
    const response = await fetch(`${API_BASE_URL}/banners`, {
      next: { revalidate: 300 },
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const result = await response.json();
    return result;
  } catch (error) {
    console.error("Failed to fetch banners:", error);
    return {
      success: false,
      error: "Failed to fetch banners",
    };
  }
}

export async function getAnalytics(): Promise<ApiResponse<any>> {
  try {
    const response = await fetch('https://admindash-pi-three.vercel.app/api/analytics', {
      next: { revalidate: 300 },
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const result = await response.json();
    return result;
  } catch (error) {
    console.error("Failed to fetch analytics:", error);
    return {
      success: false,
      error: "Failed to fetch analytics",
    };
  }
}
