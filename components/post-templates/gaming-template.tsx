import BaseTemplate from "./base-template"
import { Gamepad2, Monitor, Cpu, HardDrive } from "lucide-react"

interface GamingTemplateProps {
  title: string
  author: string
  publishedAt: string
  readTime: string
  content: string
  platform?: string
  specs?: {
    cpu?: string
    gpu?: string
    ram?: string
    storage?: string
  }
  gameInfo?: {
    developer?: string
    publisher?: string
    releaseDate?: string
    genre?: string
  }
}

export default function GamingTemplate({
  title,
  author,
  publishedAt,
  readTime,
  content,
  platform,
  specs,
  gameInfo
}: GamingTemplateProps) {
  return (
    <BaseTemplate
      title={title}
      category="GAMING"
      author={author}
      publishedAt={publishedAt}
      readTime={readTime}
      categoryColor="bg-purple-600"
    >
      {platform && (
        <div className="bg-gray-900 rounded-lg p-4 mb-6 flex items-center gap-3">
          <Gamepad2 className="w-5 h-5 text-purple-400" />
          <span className="font-semibold">Platform: {platform}</span>
        </div>
      )}

      <div className="text-lg leading-relaxed mb-8" dangerouslySetInnerHTML={{ __html: content }} />

      {specs && (
        <div className="bg-gray-900 rounded-lg p-6 mb-8">
          <h3 className="font-semibold text-white mb-4 flex items-center gap-2">
            <Monitor className="w-5 h-5" />
            System Requirements
          </h3>
          <div className="grid md:grid-cols-2 gap-4">
            {specs.cpu && (
              <div className="flex items-center gap-3">
                <Cpu className="w-4 h-4 text-gray-400" />
                <span className="text-gray-300">CPU: {specs.cpu}</span>
              </div>
            )}
            {specs.gpu && (
              <div className="flex items-center gap-3">
                <Monitor className="w-4 h-4 text-gray-400" />
                <span className="text-gray-300">GPU: {specs.gpu}</span>
              </div>
            )}
            {specs.ram && (
              <div className="flex items-center gap-3">
                <HardDrive className="w-4 h-4 text-gray-400" />
                <span className="text-gray-300">RAM: {specs.ram}</span>
              </div>
            )}
            {specs.storage && (
              <div className="flex items-center gap-3">
                <HardDrive className="w-4 h-4 text-gray-400" />
                <span className="text-gray-300">Storage: {specs.storage}</span>
              </div>
            )}
          </div>
        </div>
      )}

      {gameInfo && (
        <div className="bg-gray-900 rounded-lg p-6">
          <h3 className="font-semibold text-white mb-4">Game Information</h3>
          <div className="grid md:grid-cols-2 gap-4 text-sm">
            {gameInfo.developer && (
              <div>
                <span className="text-gray-400">Developer:</span>
                <span className="text-white ml-2">{gameInfo.developer}</span>
              </div>
            )}
            {gameInfo.publisher && (
              <div>
                <span className="text-gray-400">Publisher:</span>
                <span className="text-white ml-2">{gameInfo.publisher}</span>
              </div>
            )}
            {gameInfo.releaseDate && (
              <div>
                <span className="text-gray-400">Release Date:</span>
                <span className="text-white ml-2">{gameInfo.releaseDate}</span>
              </div>
            )}
            {gameInfo.genre && (
              <div>
                <span className="text-gray-400">Genre:</span>
                <span className="text-white ml-2">{gameInfo.genre}</span>
              </div>
            )}
          </div>
        </div>
      )}
    </BaseTemplate>
  )
}