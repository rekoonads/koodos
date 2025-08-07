export default function InstagramPage() {
  return (
    <div className="min-h-screen bg-black text-white p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">KOODOS on Instagram</h1>
        <div className="bg-gray-900 rounded-lg p-6">
          <p className="text-gray-300 mb-4">
            Follow KOODOS on Instagram for behind-the-scenes content and gaming highlights.
          </p>
          <a 
            href="https://instagram.com/koodos" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-3 rounded-lg hover:from-purple-600 hover:to-pink-600 transition-colors"
          >
            Follow @KOODOS
          </a>
        </div>
      </div>
    </div>
  )
}