import { prisma } from './prisma'

async function main() {
  // Create categories
  const categories = await Promise.all([
    (prisma.category as any).upsert({
      where: { slug: 'news' },
      update: {},
      create: { name: 'News', slug: 'news', description: 'Latest gaming and tech news', color: '#3b82f6' }
    }),
    (prisma.category as any).upsert({
      where: { slug: 'gaming' },
      update: {},
      create: { name: 'Gaming', slug: 'gaming', description: 'Gaming content and reviews', color: '#8b5cf6' }
    }),
    (prisma.category as any).upsert({
      where: { slug: 'tech' },
      update: {},
      create: { name: 'Technology', slug: 'tech', description: 'Technology reviews and news', color: '#10b981' }
    }),
    (prisma.category as any).upsert({
      where: { slug: 'anime' },
      update: {},
      create: { name: 'Anime', slug: 'anime', description: 'Anime and manga content', color: '#f59e0b' }
    }),
    (prisma.category as any).upsert({
      where: { slug: 'movies' },
      update: {},
      create: { name: 'Movies', slug: 'movies', description: 'Movie reviews and news', color: '#ef4444' }
    })
  ])

  // Create sample user
  const user = await (prisma.user as any).upsert({
    where: { email: 'admin@koodos.com' },
    update: {},
    create: {
      clerkId: 'sample_clerk_id',
      email: 'admin@koodos.com',
      name: 'KOODOS Admin',
      role: 'ADMIN'
    }
  })

  // Create sample tags
  const tags = await Promise.all([
    (prisma.tag as any).upsert({
      where: { slug: 'gaming' },
      update: {},
      create: { name: 'Gaming', slug: 'gaming' }
    }),
    (prisma.tag as any).upsert({
      where: { slug: 'review' },
      update: {},
      create: { name: 'Review', slug: 'review' }
    }),
    (prisma.tag as any).upsert({
      where: { slug: 'news' },
      update: {},
      create: { name: 'News', slug: 'news' }
    })
  ])

  console.log('Database seeded successfully!')
}

main()
  .catch((e) => {
    // Sanitize error message to prevent log injection
    const sanitizeLogMessage = (message: any) => {
      if (typeof message === 'string') {
        return message.replace(/[\r\n]/g, ' ').replace(/[\x00-\x1f\x7f-\x9f]/g, '');
      }
      return JSON.stringify(message).replace(/[\r\n]/g, ' ').replace(/[\x00-\x1f\x7f-\x9f]/g, '');
    };
    console.error('Database seeding failed:', sanitizeLogMessage(e))
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })