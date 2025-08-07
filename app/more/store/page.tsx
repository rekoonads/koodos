export default function StorePage() {
  return (
    <div className="min-h-screen bg-black text-white p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">KOODOS Store</h1>
        <div className="bg-gray-900 rounded-lg p-6">
          <p className="text-gray-300 mb-6">
            Shop official KOODOS merchandise and gaming accessories.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-gray-800 rounded-lg p-4 text-center">
              <div className="w-full h-32 bg-gray-700 rounded mb-4 flex items-center justify-center">
                <span className="text-gray-500">KOODOS T-Shirt</span>
              </div>
              <h3 className="font-semibold mb-2">Official KOODOS Tee</h3>
              <p className="text-red-400 font-bold">₹999</p>
            </div>
            <div className="bg-gray-800 rounded-lg p-4 text-center">
              <div className="w-full h-32 bg-gray-700 rounded mb-4 flex items-center justify-center">
                <span className="text-gray-500">Gaming Mug</span>
              </div>
              <h3 className="font-semibold mb-2">KOODOS Gaming Mug</h3>
              <p className="text-red-400 font-bold">₹499</p>
            </div>
            <div className="bg-gray-800 rounded-lg p-4 text-center">
              <div className="w-full h-32 bg-gray-700 rounded mb-4 flex items-center justify-center">
                <span className="text-gray-500">Sticker Pack</span>
              </div>
              <h3 className="font-semibold mb-2">KOODOS Stickers</h3>
              <p className="text-red-400 font-bold">₹199</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}