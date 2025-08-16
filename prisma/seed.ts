import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

async function main() {
  // Create categories
  const categories = await Promise.all([
    prisma.category.upsert({
      where: { slug: "latest-news" },
      update: {},
      create: {
        name: "Latest News",
        slug: "latest-news",
        description: "Breaking news and updates from the gaming world",
        color: "#ef4444",
      },
    }),
    prisma.category.upsert({
      where: { slug: "reviews" },
      update: {},
      create: {
        name: "Reviews",
        slug: "reviews",
        description: "In-depth game reviews and ratings",
        color: "#8b5cf6",
      },
    }),
    prisma.category.upsert({
      where: { slug: "gaming-guides" },
      update: {},
      create: {
        name: "Gaming Guides",
        slug: "gaming-guides",
        description: "Tips, tricks, and walkthroughs",
        color: "#06b6d4",
      },
    }),
    prisma.category.upsert({
      where: { slug: "esports" },
      update: {},
      create: {
        name: "Esports",
        slug: "esports",
        description: "Competitive gaming news and tournaments",
        color: "#f59e0b",
      },
    }),
  ])

  // Create tags
  const tags = await Promise.all([
    prisma.tag.upsert({
      where: { slug: "action" },
      update: {},
      create: { name: "Action", slug: "action" },
    }),
    prisma.tag.upsert({
      where: { slug: "rpg" },
      update: {},
      create: { name: "RPG", slug: "rpg" },
    }),
    prisma.tag.upsert({
      where: { slug: "fps" },
      update: {},
      create: { name: "FPS", slug: "fps" },
    }),
  ])

  console.log("Database seeded successfully!")
  console.log({ categories: categories.length, tags: tags.length })
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
