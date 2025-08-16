import { Footer } from "@/components/footer"

export default function SpotlightsPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="ml-64">
        <div className="relative bg-gradient-to-br from-violet-900 via-purple-900 to-fuchsia-900 text-white">
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="relative px-8 py-16">
            <div className="max-w-4xl">
              <h1 className="text-5xl font-bold mb-4">Spotlights</h1>
              <p className="text-xl text-violet-200 mb-8">
                Featured stories, editorials, and deep dives into gaming culture
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="bg-violet-600 px-4 py-2 rounded-lg font-semibold">Editorials</div>
                <div className="bg-purple-600 px-4 py-2 rounded-lg font-semibold">Deep Dives</div>
                <div className="bg-fuchsia-600 px-4 py-2 rounded-lg font-semibold">Featured Stories</div>
              </div>
            </div>
          </div>
        </div>

        <div className="px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="bg-violet-50 border-l-4 border-violet-600 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-violet-800 mb-3">Editorial Pieces</h3>
              <p className="text-violet-700 mb-4">Opinion pieces and thought-provoking commentary</p>
              <div className="space-y-2">
                <div className="bg-white p-3 rounded border">Industry Analysis</div>
                <div className="bg-white p-3 rounded border">Cultural Impact</div>
                <div className="bg-white p-3 rounded border">Future Predictions</div>
              </div>
            </div>

            <div className="bg-purple-50 border-l-4 border-purple-600 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-purple-800 mb-3">Deep Dives</h3>
              <p className="text-purple-700 mb-4">Comprehensive analysis and investigative pieces</p>
              <div className="space-y-2">
                <div className="bg-white p-3 rounded border">Game Development Stories</div>
                <div className="bg-white p-3 rounded border">Technical Breakdowns</div>
                <div className="bg-white p-3 rounded border">Historical Retrospectives</div>
              </div>
            </div>

            <div className="bg-fuchsia-50 border-l-4 border-fuchsia-600 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-fuchsia-800 mb-3">Featured Stories</h3>
              <p className="text-fuchsia-700 mb-4">Highlighted content and special features</p>
              <div className="space-y-2">
                <div className="bg-white p-3 rounded border">Community Highlights</div>
                <div className="bg-white p-3 rounded border">Special Events</div>
                <div className="bg-white p-3 rounded border">Exclusive Content</div>
              </div>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </div>
  )
}
