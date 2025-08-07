"use client"

import { motion } from "framer-motion"

export function ArticleCardSkeleton() {
  return (
    <div className="bg-gray-900 rounded-lg overflow-hidden border border-gray-800">
      <div className="relative h-48 bg-gray-800 animate-pulse" />
      <div className="p-6">
        <div className="h-4 bg-gray-800 rounded animate-pulse mb-3" />
        <div className="h-4 bg-gray-800 rounded animate-pulse mb-2 w-3/4" />
        <div className="h-3 bg-gray-800 rounded animate-pulse mb-4 w-1/2" />
        <div className="flex justify-between">
          <div className="h-3 bg-gray-800 rounded animate-pulse w-1/4" />
          <div className="h-3 bg-gray-800 rounded animate-pulse w-1/4" />
        </div>
      </div>
    </div>
  )
}

export function HeroSkeleton() {
  return (
    <div className="relative h-96 bg-gray-800 animate-pulse">
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center">
          <div className="h-8 bg-gray-700 rounded mb-4 w-96" />
          <div className="h-4 bg-gray-700 rounded w-64 mx-auto" />
        </div>
      </div>
    </div>
  )
}

export function LoadingSpinner() {
  return (
    <motion.div
      animate={{ rotate: 360 }}
      transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
      className="w-8 h-8 border-2 border-gray-600 border-t-white rounded-full"
    />
  )
}
