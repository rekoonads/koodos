import React from 'react'
import Link from 'next/link'

const SitemapPage = () => {
  const siteLinks = [
    { name: 'Home', href: '/' },
    { name: 'Gaming', href: '/gaming' },
    { name: 'Reviews', href: '/reviews' },
    { name: 'News', href: '/latest-updates' },
    { name: 'Community', href: '/community' },
    { name: 'Guides', href: '/guides' },
    { name: 'PC Gaming', href: '/pc-gaming' },
    { name: 'Nintendo', href: '/gaming/nintendo' },
    { name: 'Xbox', href: '/gaming/xbox' },
    { name: 'PlayStation', href: '/gaming/playstation' },
    { name: 'Tech', href: '/tech' },
    { name: 'Anime & Manga', href: '/anime-manga' },
    { name: 'Science & Comics', href: '/science-comics' },
    { name: 'Contact', href: '/contact' },
    { name: 'About', href: '/about' },
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Terms of Service', href: '/terms' },
  ]

  return (
    <div className="min-h-screen bg-white">
      <div className="ml-64">
        <div className="px-8 py-12">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold text-gray-900 mb-8">Sitemap</h1>
            <p className="text-gray-600 mb-8">Navigate through all pages and sections of KOODOS gaming platform.</p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {siteLinks.map((link, index) => (
                <Link href={link.href} key={index}>
                  <a className="block bg-gray-100 p-4 rounded-lg hover:bg-gray-200 transition-colors">
                    {link.name}
                  </a>
                </Link>
              ))}
            </div>

            <div className="mt-12 p-6 bg-gray-50 rounded-lg">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">About Our Sitemap</h2>
              <p className="text-gray-600">
                This sitemap provides an overview of all the main sections and pages available on KOODOS. We regularly
                update our content with the latest gaming news, reviews, and community discussions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SitemapPage