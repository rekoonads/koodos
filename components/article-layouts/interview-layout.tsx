import { Badge } from "@/components/ui/badge"
import { Quote } from "lucide-react"

interface InterviewLayoutProps {
  article: any
  interviewData?: any
  theme: any
}

export function InterviewLayout({ article, interviewData, theme }: InterviewLayoutProps) {
  const mockInterviewData = {
    interviewee: "Hideo Kojima",
    position: "Game Director",
    company: "Kojima Productions",
    duration: "45 minutes",
    location: "Tokyo, Japan",
    keyQuotes: [
      "The future of gaming lies in connecting human emotions through interactive storytelling.",
      "Technology should serve the narrative, not the other way around.",
    ],
  }

  const data = interviewData || mockInterviewData

  return (
    <div className="interview-layout">
      {/* Interview Header */}
      <div
        className={`relative bg-gradient-to-br ${theme.gradientFrom} ${theme.gradientTo} text-white rounded-xl p-8 mb-8`}
      >
        <div className="absolute inset-0 bg-black/20 rounded-xl"></div>
        <div className="relative">
          <Badge className={`${theme.accentColor} text-white mb-4`}>Exclusive Interview</Badge>
          <h1 className="text-3xl font-bold mb-4">{article.title}</h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
            <div>
              <h3 className="text-lg font-semibold mb-2">Interview Details</h3>
              <div className="space-y-2 text-sm opacity-90">
                <p>
                  <strong>Interviewee:</strong> {data.interviewee}
                </p>
                <p>
                  <strong>Position:</strong> {data.position}
                </p>
                <p>
                  <strong>Company:</strong> {data.company}
                </p>
                <p>
                  <strong>Duration:</strong> {data.duration}
                </p>
                <p>
                  <strong>Location:</strong> {data.location}
                </p>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">Key Topics</h3>
              <div className="flex flex-wrap gap-2">
                <span className="bg-white/20 px-3 py-1 rounded-full text-sm">Game Development</span>
                <span className="bg-white/20 px-3 py-1 rounded-full text-sm">Industry Trends</span>
                <span className="bg-white/20 px-3 py-1 rounded-full text-sm">Future Vision</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Key Quotes */}
      <div className={`${theme.bgColor} rounded-lg p-6 mb-8`}>
        <h3 className={`text-xl font-bold ${theme.textColor} mb-4 flex items-center gap-2`}>
          <Quote className="w-5 h-5" />
          Key Quotes
        </h3>
        <div className="space-y-4">
          {data.keyQuotes.map((quote: string, index: number) => (
            <blockquote key={index} className="border-l-4 border-gray-300 pl-4 italic text-gray-700">
              "{quote}"
            </blockquote>
          ))}
        </div>
      </div>
    </div>
  )
}
