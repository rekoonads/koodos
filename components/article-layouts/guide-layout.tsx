import { Badge } from "@/components/ui/badge"
import { CheckCircle, Clock, Target, Lightbulb } from "lucide-react"

interface GuideLayoutProps {
  article: any
  guideData?: any
  theme: any
}

export function GuideLayout({ article, guideData, theme }: GuideLayoutProps) {
  const mockGuideData = {
    difficulty: "Intermediate",
    estimatedTime: "30-45 minutes",
    requirements: ["Basic gaming knowledge", "PC or Console", "Internet connection"],
    steps: [
      { title: "Getting Started", description: "Initial setup and preparation" },
      { title: "Core Mechanics", description: "Understanding the fundamental systems" },
      { title: "Advanced Techniques", description: "Pro tips and strategies" },
      { title: "Troubleshooting", description: "Common issues and solutions" },
    ],
  }

  const data = guideData || mockGuideData

  return (
    <div className="guide-layout">
      {/* Guide Header */}
      <div
        className={`relative bg-gradient-to-br ${theme.gradientFrom} ${theme.gradientTo} text-white rounded-xl p-8 mb-8`}
      >
        <div className="absolute inset-0 bg-black/20 rounded-xl"></div>
        <div className="relative">
          <Badge className={`${theme.accentColor} text-white mb-4`}>Step-by-Step Guide</Badge>
          <h1 className="text-3xl font-bold mb-4">{article.title}</h1>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
            <div className="bg-white/10 rounded-lg p-4">
              <Target className="w-6 h-6 mb-2" />
              <h4 className="font-semibold">Difficulty</h4>
              <p className="text-sm opacity-90">{data.difficulty}</p>
            </div>
            <div className="bg-white/10 rounded-lg p-4">
              <Clock className="w-6 h-6 mb-2" />
              <h4 className="font-semibold">Time Required</h4>
              <p className="text-sm opacity-90">{data.estimatedTime}</p>
            </div>
            <div className="bg-white/10 rounded-lg p-4">
              <CheckCircle className="w-6 h-6 mb-2" />
              <h4 className="font-semibold">Steps</h4>
              <p className="text-sm opacity-90">{data.steps.length} Steps</p>
            </div>
          </div>
        </div>
      </div>

      {/* Requirements */}
      <div
        className={`${theme.bgColor} rounded-lg p-6 mb-8 border-l-4 ${theme.borderColor.replace("border-", "border-l-")}`}
      >
        <h3 className={`text-lg font-bold ${theme.textColor} mb-3 flex items-center gap-2`}>
          <Lightbulb className="w-5 h-5" />
          What You'll Need
        </h3>
        <ul className="space-y-2">
          {data.requirements.map((req: string, index: number) => (
            <li key={index} className="flex items-center gap-2 text-gray-700">
              <CheckCircle className="w-4 h-4 text-green-600" />
              {req}
            </li>
          ))}
        </ul>
      </div>

      {/* Guide Steps Preview */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
        {data.steps.map((step: any, index: number) => (
          <div key={index} className="bg-white rounded-lg p-6 border border-gray-200 shadow-sm">
            <div
              className={`w-8 h-8 ${theme.accentColor} text-white rounded-full flex items-center justify-center text-sm font-bold mb-3`}
            >
              {index + 1}
            </div>
            <h4 className="font-semibold text-gray-900 mb-2">{step.title}</h4>
            <p className="text-gray-600 text-sm">{step.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
