import { Footer } from "@/components/footer"

export default function SitemapPage() {
  const siteLinks = [
    { title: "Home", url: "/" },
    { title: "Reviews", url: "/reviews" },
    { title: "Gaming", url: "/gaming" },
    { title: "Tech", url: "/tech" },
    { title: "Videos", url: "/videos" },
    { title: "Community", url: "/community" },
    { title: "Esports", url: "/esports" },
    { title: "Latest Updates", url: "/latest-updates" },
    { title: "Interviews", url: "/interviews" },
    { title: "Spotlights", url: "/spotlights" },
    { title: "Opinions", url: "/opinions" },
    { title: "Wiki", url: "/wiki" },
    { title: "Anime & Manga", url: "/anime-manga" },
    { title: "Science & Comics", url: "/science-comics" },
    { title: "Follow KOODOS", url: "/follow" },
    { title: "More", url: "/more" },
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
                <div key={index} className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                  <a href={link.url} className="text-blue-600 hover:text-blue-800 font-medium transition-colors">
                    {link.title}
                  </a>
                </div>
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
        <Footer />
      </div>
    </div>
  )
}
