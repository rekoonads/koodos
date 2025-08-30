"use client"

export default function PCGamingPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="relative bg-gradient-to-br from-green-900 via-teal-900 to-blue-900 text-white overflow-hidden">
        <div className="relative px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-24">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-teal-400 to-blue-400">
                PC Gaming
              </span>
            </h1>
            <p className="text-lg sm:text-xl lg:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto">
              PC gaming news, hardware reviews, and performance guides
            </p>
          </div>
        </div>
      </div>
      <div className="px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-gray-600">PC Gaming content coming soon...</p>
        </div>
      </div>
    </div>
  )
}