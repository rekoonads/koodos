export default function CommunityPage() {
  return (
    <div className="min-h-screen bg-black text-white p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">KOODOS Community</h1>
        <div className="bg-gray-900 rounded-lg p-6">
          <p className="text-gray-300 mb-6">
            Join the KOODOS gaming community and connect with fellow gamers.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gray-800 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-3">Discord Server</h3>
              <p className="text-gray-400 mb-4">
                Join our Discord for real-time gaming discussions and community events.
              </p>
              <button className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700 transition-colors">
                Join Discord
              </button>
            </div>
            <div className="bg-gray-800 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-3">Forums</h3>
              <p className="text-gray-400 mb-4">
                Participate in detailed gaming discussions on our community forums.
              </p>
              <button className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition-colors">
                Visit Forums
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}