"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Cpu, Monitor, Zap, DollarSign, Award } from "lucide-react"

interface TechReviewProps {
  article: any
  techData: {
    rating: number
    price: string
    category: string
    brand: string
    model: string
    specifications: Record<string, string>
    benchmarks: Array<{ test: string; score: number; comparison: string }>
    scores: {
      performance: number
      design: number
      value: number
      features: number
      reliability: number
    }
    pros: string[]
    cons: string[]
    images: string[]
  }
}

export function TechReviewLayout({ article, techData }: TechReviewProps) {
  const overallScore = Object.values(techData.scores).reduce((a, b) => a + b, 0) / Object.values(techData.scores).length

  return (
    <div className="space-y-8">
      {/* Product Info */}
      <Card className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <CardContent className="p-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <div className="flex items-center space-x-4 mb-4">
                <div className="bg-white/20 p-3 rounded-lg">
                  <Cpu className="w-8 h-8" />
                </div>
                <div>
                  <h2 className="text-3xl font-bold">
                    {techData.brand} {techData.model}
                  </h2>
                  <p className="text-white/80">{techData.category}</p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 mb-6">
                <div>
                  <p className="text-white/80 text-sm">Price</p>
                  <div className="flex items-center space-x-2">
                    <DollarSign className="w-4 h-4" />
                    <span className="font-semibold text-xl">{techData.price}</span>
                  </div>
                </div>
                <div>
                  <p className="text-white/80 text-sm">Category</p>
                  <Badge className="bg-white/20 text-white border-white/30 mt-1">{techData.category}</Badge>
                </div>
              </div>
            </div>

            <div className="flex flex-col items-center justify-center">
              <div className="text-center mb-6">
                <div className="text-6xl font-bold mb-2">{techData.rating}</div>
                <div className="text-white/80">Out of 10</div>
              </div>

              <div className="bg-white/20 rounded-lg p-4 w-full">
                <div className="flex items-center justify-center space-x-4">
                  <Award className="w-6 h-6 text-yellow-400" />
                  <span className="font-semibold">Recommended</span>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Specifications Table */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Monitor className="w-5 h-5" />
            <span>Technical Specifications</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {Object.entries(techData.specifications).map(([key, value]) => (
              <div key={key} className="flex justify-between items-center py-2 border-b border-gray-100">
                <span className="font-medium text-gray-700">{key}</span>
                <span className="text-gray-900">{value}</span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Benchmark Results */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Zap className="w-5 h-5" />
            <span>Performance Benchmarks</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {techData.benchmarks.map((benchmark, index) => (
              <div key={index} className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="font-medium">{benchmark.test}</span>
                  <div className="text-right">
                    <span className="font-bold text-lg">{benchmark.score}</span>
                    <p className="text-sm text-gray-600">{benchmark.comparison}</p>
                  </div>
                </div>
                <Progress value={(benchmark.score / 100) * 100} className="h-2" />
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Review Scores */}
      <Card>
        <CardHeader>
          <CardTitle>Review Breakdown</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {Object.entries(techData.scores).map(([category, score]) => (
              <div key={category} className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="font-medium capitalize">{category}</span>
                  <span className="text-sm text-gray-600">{score}/10</span>
                </div>
                <Progress value={score * 10} className="h-2" />
              </div>
            ))}
            <div className="pt-4 border-t">
              <div className="flex justify-between items-center">
                <span className="font-bold text-lg">Overall Score</span>
                <span className="text-2xl font-bold text-blue-600">{overallScore.toFixed(1)}/10</span>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Product Images */}
      <Card>
        <CardHeader>
          <CardTitle>Product Gallery</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {techData.images.map((image, index) => (
              <div key={index} className="aspect-square rounded-lg overflow-hidden">
                <img
                  src={image || "/placeholder.svg?height=300&width=300"}
                  alt={`Product image ${index + 1}`}
                  className="w-full h-full object-cover hover:scale-105 transition-transform"
                />
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
