import React from 'react'

const FollowPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <div className="ml-64">
        <div className="relative bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900 text-white">
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="relative px-8 py-16">
            <div className="max-w-4xl">
              <h1 className="text-5xl font-bold mb-4">Follow KOODOS</h1>
              <p className="text-xl text-blue-200 mb-8">
                Stay connected with us across all platforms and never miss an update
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="bg-blue-600 px-4 py-2 rounded-lg font-semibold">Social Media</div>
                <div className="bg-indigo-600 px-4 py-2 rounded-lg font-semibold">Newsletter</div>
              </div>
            </div>
          </div>
        </div>

        <div className="px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-blue-800 mb-3">Social Media</h3>
              <p className="text-blue-700 mb-4">Connect with us on your favorite platforms</p>
              <div className="space-y-3">
                <div className="bg-white p-4 rounded border flex items-center justify-between">
                  <span className="font-medium">Twitter/X</span>
                  <span className="text-blue-600">@KOODOS</span>
                </div>
                <div className="bg-white p-4 rounded border flex items-center justify-between">
                  <span className="font-medium">Instagram</span>
                  <span className="text-blue-600">@koodos_official</span>
                </div>
                <div className="bg-white p-4 rounded border flex items-center justify-between">
                  <span className="font-medium">YouTube</span>
                  <span className="text-blue-600">KOODOS Gaming</span>
                </div>
                <div className="bg-white p-4 rounded border flex items-center justify-between">
                  <span className="font-medium">Discord</span>
                  <span className="text-blue-600">Join Server</span>
                </div>
              </div>
            </div>

            <div className="bg-indigo-50 border-l-4 border-indigo-600 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-indigo-800 mb-3">Newsletter</h3>
              <p className="text-indigo-700 mb-4">Get weekly updates delivered to your inbox</p>
              <div className="space-y-4">
                <div className="bg-white p-4 rounded border">
                  <h4 className="font-semibold mb-2">Weekly Gaming Digest</h4>
                  <p className="text-sm text-gray-600">Latest reviews, news, and exclusive content</p>
                </div>
                <div className="bg-white p-4 rounded border">
                  <h4 className="font-semibold mb-2">Tech Updates</h4>
                  <p className="text-sm text-gray-600">Hardware releases and technology news</p>
                </div>
                <div className="bg-white p-4 rounded border">
                  <h4 className="font-semibold mb-2">Exclusive Content</h4>
                  <p className="text-sm text-gray-600">Subscriber-only articles and early access</p>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default FollowPage