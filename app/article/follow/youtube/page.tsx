export default function YouTubePage() {
  return (
    <div className="min-h-screen bg-black text-white p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">KOODOS on YouTube</h1>
        <div className="bg-gray-900 rounded-lg p-6">
          <p className="text-gray-300 mb-4">
            Subscribe to KOODOS on YouTube for video reviews, gameplay, and gaming content.
          </p>
          <a 
            href="https://youtube.com/@koodos" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block bg-red-600 text-white px-6 py-3 rounded-lg hover:bg-red-700 transition-colors"
          >
            Subscribe to KOODOS
          </a>
        </div>
      </div>
    </div>
  )
}