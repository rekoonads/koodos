"use client"

import Post from "@/components/Post"

export default function PlayStationPriceIncreasePage() {
  const postData = {
    id: "ps5-price-increase",
    title: "PlayStation 5: Sony Is Reportedly Going To Increase the Prices of Its First-Party Games in India",
    content: `
      <p>Sony Interactive Entertainment is reportedly planning to increase the prices of its first-party PlayStation 5 games in India, according to industry sources familiar with the matter.</p>
      
      <h2>Price Increase Details</h2>
      <p>The price hike is expected to affect all major first-party titles including upcoming releases like Spider-Man 2, God of War Ragnarök, and Horizon Forbidden West. Current games priced at ₹3,999 may see an increase to ₹4,499 or higher.</p>
      
      <h2>Market Impact</h2>
      <p>This move comes as Sony continues to establish PlayStation as a premium gaming brand in India. The price increase aligns with global pricing strategies but may impact accessibility for Indian gamers.</p>
      
      <h2>Industry Response</h2>
      <p>Gaming retailers and distributors are preparing for the change, with some suggesting that pre-orders for upcoming titles should be placed before the price adjustment takes effect.</p>
      
      <h2>What This Means for Gamers</h2>
      <p>Indian PlayStation fans may need to budget more for first-party exclusives, though third-party games are expected to maintain current pricing structures.</p>
    `,
    excerpt: "Sony Interactive Entertainment is reportedly planning to increase the prices of its first-party PlayStation 5 games in India.",
    featuredImage: "/placeholder.svg?height=600&width=1200",
    author: {
      name: "Gaming Reporter",
      avatar: "/placeholder.svg?height=64&width=64",
      bio: "Covering the Indian gaming industry with focus on console gaming and market trends."
    },
    publishedAt: "2024-01-15",
    category: "Gaming News",
    tags: ["PlayStation", "Sony", "India", "Gaming", "Pricing"],
    views: 2450,
    likes: 156,
    comments: 89,
    slug: "playstation-5-price-increase"
  }

  return <Post {...postData} />
}