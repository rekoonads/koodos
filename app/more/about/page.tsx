"use client"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="relative bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 text-white overflow-hidden">
        <div className="relative px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-24">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400">
                About KOODOS
              </span>
            </h1>
            <p className="text-lg sm:text-xl lg:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto">
              Learn more about our gaming community and mission
            </p>
          </div>
        </div>
      </div>
      <div className="px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="prose prose-lg mx-auto text-gray-600">
            <p>KOODOS is your ultimate destination for gaming news, reviews, and community discussions.</p>
          </div>
        </div>
      </div>
    </div>
  )
}