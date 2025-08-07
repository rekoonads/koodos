"use client"

import HeroBanner from "@/components/hero-banner"
import LatestNews from "@/components/latest-news"
import LatestReviews from "@/components/latest-reviews"

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <HeroBanner />
      <LatestNews />
      <LatestReviews />
    </div>
  )
}
