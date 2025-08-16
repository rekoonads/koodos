import { Footer } from "@/components/footer"

export default function OpinionsPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="ml-64">
        <div className="relative bg-gradient-to-br from-rose-900 via-pink-900 to-red-900 text-white">
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="relative px-8 py-16">
            <div className="max-w-4xl">
              <h1 className="text-5xl font-bold mb-4">Opinions</h1>
              <p className="text-xl text-rose-200 mb-8">
                Editorial perspectives and community thoughts on gaming and entertainment
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="bg-rose-600 px-4 py-2 rounded-lg font-semibold">Editorials</div>
                <div className="bg-pink-600 px-4 py-2 rounded-lg font-semibold">Community Thoughts</div>
              </div>
            </div>
          </div>
        </div>

        <div className="px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="bg-rose-50 border-l-4 border-rose-600 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-rose-800 mb-3">Editorial Opinions</h3>
              <p className="text-rose-700 mb-4">Expert commentary and analysis from our editorial team</p>
              <div className="space-y-2">
                <div className="bg-white p-3 rounded border">Industry Trends Analysis</div>
                <div className="bg-white p-3 rounded border">Game Design Philosophy</div>
                <div className="bg-white p-3 rounded border">Technology Impact</div>
                <div className="bg-white p-3 rounded border">Cultural Commentary</div>
              </div>
            </div>

            <div className="bg-pink-50 border-l-4 border-pink-600 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-pink-800 mb-3">Community Voices</h3>
              <p className="text-pink-700 mb-4">Perspectives and discussions from our gaming community</p>
              <div className="space-y-2">
                <div className="bg-white p-3 rounded border">Player Experiences</div>
                <div className="bg-white p-3 rounded border">Community Debates</div>
                <div className="bg-white p-3 rounded border">User-Generated Content</div>
                <div className="bg-white p-3 rounded border">Forum Discussions</div>
              </div>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </div>
  )
}
