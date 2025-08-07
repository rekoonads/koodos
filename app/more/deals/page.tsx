export default function DealsPage() {
  return (
    <div className="min-h-screen bg-black text-white p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">KOODOS Gaming Deals</h1>
        <div className="bg-gray-900 rounded-lg p-6">
          <p className="text-gray-300 mb-6">
            Discover the best gaming deals curated by KOODOS team.
          </p>
          <div className="space-y-4">
            <div className="bg-gray-800 rounded-lg p-4 flex justify-between items-center">
              <div>
                <h3 className="text-xl font-semibold">Steam Winter Sale</h3>
                <p className="text-gray-400">Up to 90% off on popular games</p>
              </div>
              <div className="text-right">
                <span className="bg-red-600 text-white px-3 py-1 rounded text-sm">90% OFF</span>
              </div>
            </div>
            <div className="bg-gray-800 rounded-lg p-4 flex justify-between items-center">
              <div>
                <h3 className="text-xl font-semibold">PlayStation Store Sale</h3>
                <p className="text-gray-400">Exclusive PS5 game discounts</p>
              </div>
              <div className="text-right">
                <span className="bg-red-600 text-white px-3 py-1 rounded text-sm">75% OFF</span>
              </div>
            </div>
            <div className="bg-gray-800 rounded-lg p-4 flex justify-between items-center">
              <div>
                <h3 className="text-xl font-semibold">Xbox Game Pass</h3>
                <p className="text-gray-400">3 months for ₹50</p>
              </div>
              <div className="text-right">
                <span className="bg-red-600 text-white px-3 py-1 rounded text-sm">LIMITED</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}