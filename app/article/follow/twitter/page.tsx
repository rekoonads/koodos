export default function TwitterPage() {
  return (
    <div className="min-h-screen bg-black text-white p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">Follow KOODOS on Twitter</h1>
        <div className="bg-gray-900 rounded-lg p-6">
          <p className="text-gray-300 mb-4">
            Stay updated with the latest gaming news, reviews, and discussions from KOODOS on Twitter.
          </p>
          <a 
            href="https://twitter.com/koodos" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition-colors"
          >
            Follow @KOODOS
          </a>
        </div>
      </div>
    </div>
  )
}