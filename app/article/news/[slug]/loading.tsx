export default function Loading() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header Skeleton */}
      <section className="bg-gradient-to-r from-red-600 to-red-800 text-white py-8">
        <div className="px-4 lg:px-8">
          <div className="animate-pulse">
            <div className="h-6 bg-red-500 rounded w-32 mb-4"></div>
            <div className="h-4 bg-red-500 rounded w-24 mb-4"></div>
            <div className="h-8 lg:h-12 bg-red-500 rounded mb-4"></div>
            <div className="h-4 bg-red-500 rounded w-3/4"></div>
          </div>
        </div>
      </section>

      {/* Content Skeleton */}
      <div className="px-4 lg:px-8 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="animate-pulse space-y-6">
            {/* Meta info skeleton */}
            <div className="flex gap-4 pb-6 border-b">
              <div className="h-4 bg-gray-300 rounded w-24"></div>
              <div className="h-4 bg-gray-300 rounded w-32"></div>
              <div className="h-4 bg-gray-300 rounded w-20"></div>
            </div>

            {/* Featured image skeleton */}
            <div className="aspect-video bg-gray-300 rounded-lg"></div>

            {/* Content skeleton */}
            <div className="space-y-4">
              <div className="h-4 bg-gray-300 rounded"></div>
              <div className="h-4 bg-gray-300 rounded w-5/6"></div>
              <div className="h-4 bg-gray-300 rounded w-4/6"></div>
              <div className="h-4 bg-gray-300 rounded"></div>
              <div className="h-4 bg-gray-300 rounded w-3/4"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
