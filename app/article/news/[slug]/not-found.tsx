import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-gray-900 mb-4">404</h1>
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">
          Article Not Found
        </h2>
        <p className="text-gray-600 mb-8 max-w-md">
          The article you're looking for doesn't exist or has been removed. It
          might have been moved or deleted.
        </p>
        <Link
          href="/koodos-news"
          className="bg-red-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-700 transition-colors inline-flex items-center gap-2"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to News
        </Link>
      </div>
    </div>
  );
}
