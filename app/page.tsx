import { BannerCarousel } from "@/components/banner-carousel";
import { HorizontalArticleGallery } from "@/components/horizontal-article-gallery";
import { KoodosLatestNews } from "@/components/koodos-sections";
import { KoodosLatestReviews } from "@/components/koodos-sections";

// Fetch featured articles from backend API
const getFeaturedArticles = async () => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_URL || 'http://localhost:3002'}/api/public/articles?featured=true&limit=10`,
      { next: { revalidate: 300 } } // Cache for 5 minutes
    )

    if (!response.ok) {
      return []
    }

    const data = await response.json()
    return data.articles || []
  } catch (error) {
    console.error('Error fetching featured articles:', error)
    return []
  }
}

// Fetch latest news from backend API
const getLatestNews = async () => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_URL || 'http://localhost:3002'}/api/public/articles?category=news&limit=6`,
      { next: { revalidate: 300 } } // Cache for 5 minutes
    )

    if (!response.ok) {
      return []
    }

    const data = await response.json()
    return data.articles || []
  } catch (error) {
    console.error('Error fetching latest news:', error)
    return []
  }
}

// Fetch latest reviews from backend API
const getLatestReviews = async () => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_URL || 'http://localhost:3002'}/api/public/articles?category=reviews&limit=6`,
      { next: { revalidate: 300 } } // Cache for 5 minutes
    )

    if (!response.ok) {
      return []
    }

    const data = await response.json()
    return data.articles || []
  } catch (error) {
    console.error('Error fetching latest reviews:', error)
    return []
  }
}

export default async function HomePage() {
  // Fetch data in parallel
  const [featuredArticles, latestNews, latestReviews] = await Promise.all([
    getFeaturedArticles(),
    getLatestNews(),
    getLatestReviews(),
  ])

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Banner Section */}
      <section className="px-4 sm:px-6 lg:px-8 mb-8">
        <BannerCarousel />
      </section>

      {/* Main Content */}
      <div className="px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Featured Articles Section */}
        <section className="gaming-section-header">
          <div className="text-center mb-8">
            <h1 className="gaming-title text-4xl lg:text-5xl mb-4 gaming-gradient-text">
              Featured Articles
            </h1>
            <p className="gaming-body text-lg text-muted-foreground max-w-2xl mx-auto">
              Discover the latest gaming news, reviews, and insights from our expert team
            </p>
          </div>
          <HorizontalArticleGallery 
            articles={featuredArticles}
            title="Featured Articles"
            hasMore={featuredArticles.length >= 10}
            loading={false}
          />
        </section>

        {/* Latest News Section */}
        <section className="gaming-section-header">
          <div className="text-center mb-8">
            <h2 className="gaming-title text-3xl lg:text-4xl mb-4 gaming-gradient-text">
              Latest News
            </h2>
            <p className="gaming-body text-lg text-muted-foreground max-w-2xl mx-auto">
              Stay updated with the hottest gaming industry news and announcements
            </p>
          </div>
          <KoodosLatestNews articles={latestNews} />
        </section>

        {/* Latest Reviews Section */}
        <section className="gaming-section-header">
          <div className="text-center mb-8">
            <h2 className="gaming-title text-3xl lg:text-4xl mb-4 gaming-gradient-text">
              Latest Reviews
            </h2>
            <p className="gaming-body text-lg text-muted-foreground max-w-2xl mx-auto">
              In-depth reviews of the latest games, movies, and tech products
            </p>
          </div>
          <KoodosLatestReviews articles={latestReviews} />
        </section>
      </div>
    </div>
  );
}
