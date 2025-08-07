export default function PodcastsPage() {
  return (
    <div className="min-h-screen bg-black text-white p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">KOODOS Podcasts</h1>
        <div className="bg-gray-900 rounded-lg p-6">
          <p className="text-gray-300 mb-6">
            Listen to KOODOS podcasts featuring gaming discussions, industry insights, and exclusive interviews.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gray-800 rounded-lg p-4">
              <h3 className="text-xl font-semibold mb-2">Gaming Weekly</h3>
              <p className="text-gray-400 text-sm mb-3">Weekly gaming news and reviews</p>
              <button className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition-colors">
                Listen Now
              </button>
            </div>
            <div className="bg-gray-800 rounded-lg p-4">
              <h3 className="text-xl font-semibold mb-2">Tech Talk</h3>
              <p className="text-gray-400 text-sm mb-3">Latest technology discussions</p>
              <button className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition-colors">
                Listen Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}