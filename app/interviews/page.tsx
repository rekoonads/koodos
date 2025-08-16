import { Footer } from "@/components/footer"

export default function InterviewsPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="ml-64">
        <div className="relative bg-gradient-to-br from-emerald-900 via-teal-900 to-cyan-900 text-white">
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="relative px-8 py-16">
            <div className="max-w-4xl">
              <h1 className="text-5xl font-bold mb-4">Exclusive Interviews</h1>
              <p className="text-xl text-emerald-200 mb-8">
                In-depth conversations with developers, celebrities, and esports professionals
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="bg-emerald-600 px-4 py-2 rounded-lg font-semibold">Developers</div>
                <div className="bg-teal-600 px-4 py-2 rounded-lg font-semibold">Celebrities</div>
                <div className="bg-cyan-600 px-4 py-2 rounded-lg font-semibold">Esports Players</div>
              </div>
            </div>
          </div>
        </div>

        <div className="px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="bg-emerald-50 border-l-4 border-emerald-600 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-emerald-800 mb-3">Game Developers</h3>
              <p className="text-emerald-700 mb-4">Behind-the-scenes insights from game creators</p>
              <div className="space-y-2">
                <div className="bg-white p-3 rounded border">Hideo Kojima Interview</div>
                <div className="bg-white p-3 rounded border">Indie Developer Spotlight</div>
                <div className="bg-white p-3 rounded border">Studio Head Discussions</div>
              </div>
            </div>

            <div className="bg-teal-50 border-l-4 border-teal-600 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-teal-800 mb-3">Celebrities</h3>
              <p className="text-teal-700 mb-4">Entertainment industry personalities and their gaming interests</p>
              <div className="space-y-2">
                <div className="bg-white p-3 rounded border">Actor Gaming Habits</div>
                <div className="bg-white p-3 rounded border">Director Influences</div>
                <div className="bg-white p-3 rounded border">Celebrity Gamers</div>
              </div>
            </div>

            <div className="bg-cyan-50 border-l-4 border-cyan-600 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-cyan-800 mb-3">Esports Players</h3>
              <p className="text-cyan-700 mb-4">Professional gamers share their strategies and experiences</p>
              <div className="space-y-2">
                <div className="bg-white p-3 rounded border">World Champions</div>
                <div className="bg-white p-3 rounded border">Rising Stars</div>
                <div className="bg-white p-3 rounded border">Retired Legends</div>
              </div>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </div>
  )
}
