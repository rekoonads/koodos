export default function FacebookPage() {
  return (
    <div className="min-h-screen bg-black text-white p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">Follow KOODOS on Facebook</h1>
        <div className="bg-gray-900 rounded-lg p-6">
          <p className="text-gray-300 mb-4">
            Join the KOODOS community on Facebook for gaming discussions and exclusive content.
          </p>
          <a 
            href="https://facebook.com/koodos" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Like KOODOS on Facebook
          </a>
        </div>
      </div>
    </div>
  )
}