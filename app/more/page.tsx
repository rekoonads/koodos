import React from 'react'
import Link from 'next/link'

const MorePage = () => {
  const sections = [
    {
      title: 'About KOODOS',
      description: 'Learn about our mission, team, and values',
      links: [
        { title: 'Our Story', href: '/about' },
        { title: 'Editorial Team', href: '/about/team' },
        { title: 'Mission & Values', href: '/about/mission' },
      ],
    },
    {
      title: 'Contact & Support',
      description: 'Get in touch with our editorial team',
      links: [
        { title: 'Editorial Contact', href: '/contact' },
        { title: 'Technical Support', href: '/support' },
        { title: 'Feedback', href: '/feedback' },
      ],
    },
    {
      title: 'Business',
      description: 'Partnership and advertising opportunities',
      links: [
        { title: 'Advertise With Us', href: '/business/advertise' },
        { title: 'Press Inquiries', href: '/business/press' },
        { title: 'Partnerships', href: '/business/partnerships' },
      ],
    },
    {
      title: 'Legal',
      description: 'Terms, policies, and legal information',
      links: [
        { title: 'User Agreement', href: '/terms' },
        { title: 'Privacy Policy', href: '/privacy' },
        { title: 'Cookie Policy', href: '/cookies' },
      ],
    },
    {
      title: 'RSS & Feeds',
      description: 'Subscribe to our content feeds',
      links: [
        { title: 'All Articles RSS', href: '/rss/articles.xml' },
        { title: 'Reviews RSS', href: '/rss/reviews.xml' },
        { title: 'News RSS', href: '/rss/news.xml' },
      ],
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      <div className="ml-64">
        <div className="relative bg-gradient-to-br from-gray-900 via-slate-900 to-zinc-900 text-white">
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="relative px-8 py-16">
            <div className="max-w-4xl">
              <h1 className="text-5xl font-bold mb-4">More Information</h1>
              <p className="text-xl text-gray-200 mb-8">
                Additional resources, policies, and ways to connect with KOODOS
              </p>
            </div>
          </div>
        </div>

        <div className="px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {sections.map((section, index) => (
              <div key={index} className="bg-gray-50 border border-gray-200 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-gray-800 mb-3">{section.title}</h3>
                <p className="text-gray-600 mb-4">{section.description}</p>
                <div className="space-y-2">
                  {section.links.map((link, linkIndex) => (
                    <Link href={link.href} key={linkIndex}>
                      <a className="block bg-white p-3 rounded border hover:bg-gray-100 transition-colors">
                        {link.title}
                      </a>
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  )
}

export default MorePage