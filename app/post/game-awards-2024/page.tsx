"use client"

import Post from "@/components/Post"

export default function GameAwards2024Page() {
  const postData = {
    id: "game-awards-2024",
    title: "The Game Awards 2024: All Winners and Biggest Announcements",
    content: `
      <p>The Game Awards 2024 delivered spectacular moments, surprising winners, and major game announcements.</p>
      
      <h2>Game of the Year Winner</h2>
      <p>Baldur's Gate 3 took home the Game of the Year award, beating strong contenders including Zelda and Spider-Man 2.</p>
      
      <h2>Major Announcements</h2>
      <p>The show featured world premieres including new titles from major studios and surprise indie game reveals.</p>
    `,
    excerpt: "The Game Awards 2024 delivered spectacular moments and major announcements.",
    featuredImage: "/placeholder.svg?height=600&width=1200",
    author: {
      name: "Awards Reporter",
      avatar: "/placeholder.svg?height=64&width=64"
    },
    publishedAt: "2024-01-13",
    category: "Industry",
    tags: ["Game Awards", "2024", "Winners", "Gaming"],
    views: 3200,
    likes: 245,
    comments: 128,
    slug: "game-awards-2024"
  }

  return <Post {...postData} />
}