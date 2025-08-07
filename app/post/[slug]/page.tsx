import TemplateSelector, { PostData } from "@/components/post-templates/template-selector"

// Mock data - replace with actual data fetching
const getPostData = (slug: string): PostData => {
  const mockPosts: Record<string, PostData> = {
    "game-awards-2024": {
      title: "The Game Awards 2024: All Winners and Highlights",
      author: "KOODOS Gaming Team",
      publishedAt: "2 hours ago",
      readTime: "8 min read",
      content: `
        <p>The Game Awards 2024 delivered an unforgettable night of gaming excellence, celebrating the industry's biggest achievements and most anticipated upcoming titles.</p>
        
        <h2>Game of the Year Winner</h2>
        <p>Baldur's Gate 3 took home the coveted Game of the Year award, beating out strong competition from Spider-Man 2, The Legend of Zelda: Tears of the Kingdom, and other nominees.</p>
        
        <h2>Major Announcements</h2>
        <p>The show featured several world premieres and major announcements that had the gaming community buzzing with excitement.</p>
      `,
      category: "news",
      tags: ["Game Awards", "Gaming", "Awards", "2024"],
      breaking: true
    },
    "baldurs-gate-3-review": {
      title: "Baldur's Gate 3 Review: A Masterpiece of RPG Storytelling",
      author: "Sarah Johnson",
      publishedAt: "1 day ago",
      readTime: "12 min read",
      content: `
        <p>Baldur's Gate 3 represents the pinnacle of modern RPG design, combining deep storytelling with unprecedented player freedom.</p>
        
        <h2>Gameplay and Mechanics</h2>
        <p>The turn-based combat system feels both familiar and fresh, offering tactical depth that rewards creative thinking.</p>
        
        <h2>Story and Characters</h2>
        <p>Every character feels alive and meaningful, with branching storylines that genuinely impact your journey.</p>
      `,
      category: "review",
      rating: 9,
      pros: [
        "Exceptional storytelling and character development",
        "Deep tactical combat system",
        "Incredible player freedom and choice consequences",
        "Outstanding voice acting and presentation"
      ],
      cons: [
        "Steep learning curve for newcomers",
        "Some technical issues at launch",
        "Overwhelming amount of content can feel daunting"
      ],
      verdict: "Baldur's Gate 3 is a triumphant return to form for classic RPGs, offering an experience that will consume hundreds of hours and leave you wanting more. Despite minor technical hiccups, this is essential gaming."
    },
    "ps5-exclusive-games": {
      title: "PlayStation 5 Exclusive Games: The Ultimate Gaming Experience",
      author: "Mike Chen",
      publishedAt: "3 days ago",
      readTime: "10 min read",
      content: `
        <p>The PlayStation 5 continues to showcase its power with exclusive titles that push the boundaries of gaming.</p>
        
        <h2>Technical Prowess</h2>
        <p>From lightning-fast loading times to stunning 4K visuals, PS5 exclusives demonstrate the console's capabilities.</p>
        
        <h2>Must-Play Exclusives</h2>
        <p>Spider-Man 2, Demon's Souls, and Ratchet & Clank: Rift Apart showcase what next-gen gaming can achieve.</p>
      `,
      category: "gaming",
      platform: "PlayStation 5",
      specs: {
        cpu: "AMD Zen 2, 8 cores at 3.5GHz",
        gpu: "AMD RDNA 2, 10.28 TFLOPs",
        ram: "16GB GDDR6",
        storage: "825GB SSD"
      }
    }
  }

  return mockPosts[slug] || {
    title: "Post Not Found",
    author: "KOODOS Team",
    publishedAt: "Unknown",
    readTime: "0 min read",
    content: "<p>The requested post could not be found.</p>",
    category: "general"
  }
}

export default async function PostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const postData = getPostData(slug)
  
  return <TemplateSelector data={postData} />
}