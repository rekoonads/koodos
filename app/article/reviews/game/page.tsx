import { prisma } from "@/lib/prisma"

export default async function GameReviewsPage() {
  return (
    <div className="min-h-screen bg-black text-white p-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">Game Reviews</h1>
        <div className="grid gap-8">
          <div className="bg-gray-900 rounded-lg p-6">
            <h2 className="text-2xl font-bold mb-4">Latest Game Reviews</h2>
            <p className="text-gray-400">Game reviews will be displayed here from the database.</p>
          </div>
        </div>
      </div>
    </div>
  )
}