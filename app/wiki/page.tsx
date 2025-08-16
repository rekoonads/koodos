import { Footer } from "@/components/footer"

export default function WikiPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="ml-64">
        <div className="relative bg-gradient-to-br from-amber-900 via-yellow-900 to-orange-900 text-white">
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="relative px-8 py-16">
            <div className="max-w-4xl">
              <h1 className="text-5xl font-bold mb-4">KOODOS Wiki</h1>
              <p className="text-xl text-amber-200 mb-8">Comprehensive knowledge base for games, movies, and esports</p>
              <div className="flex flex-wrap gap-4">
                <div className="bg-amber-600 px-4 py-2 rounded-lg font-semibold">Game Wiki</div>
                <div className="bg-yellow-600 px-4 py-2 rounded-lg font-semibold">Movie Wiki</div>
                <div className="bg-orange-600 px-4 py-2 rounded-lg font-semibold">Esports Wiki</div>
              </div>
            </div>
          </div>
        </div>

        <div className="px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="bg-amber-50 border-l-4 border-amber-600 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-amber-800 mb-3">Game Database</h3>
              <p className="text-amber-700 mb-4">Comprehensive information about games across all platforms</p>
              <div className="space-y-2">
                <div className="bg-white p-3 rounded border">Game Profiles</div>
                <div className="bg-white p-3 rounded border">Developer Info</div>
                <div className="bg-white p-3 rounded border">Release History</div>
                <div className="bg-white p-3 rounded border">System Requirements</div>
              </div>
            </div>

            <div className="bg-yellow-50 border-l-4 border-yellow-600 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-yellow-800 mb-3">Movie Database</h3>
              <p className="text-yellow-700 mb-4">Detailed information about films and entertainment</p>
              <div className="space-y-2">
                <div className="bg-white p-3 rounded border">Movie Profiles</div>
                <div className="bg-white p-3 rounded border">Cast & Crew</div>
                <div className="bg-white p-3 rounded border">Box Office Data</div>
                <div className="bg-white p-3 rounded border">Awards & Recognition</div>
              </div>
            </div>

            <div className="bg-orange-50 border-l-4 border-orange-600 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-orange-800 mb-3">Esports Database</h3>
              <p className="text-orange-700 mb-4">Complete esports information and statistics</p>
              <div className="space-y-2">
                <div className="bg-white p-3 rounded border">Player Profiles</div>
                <div className="bg-white p-3 rounded border">Team Information</div>
                <div className="bg-white p-3 rounded border">Tournament History</div>
                <div className="bg-white p-3 rounded border">Statistics & Records</div>
              </div>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </div>
  )
}
