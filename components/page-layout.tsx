import Sidebar from "@/components/sidebar"
import type { ReactNode } from "react"

interface PageLayoutProps {
  children: ReactNode
  title: string
  description?: string
}

export default function PageLayout({ children, title, description }: PageLayoutProps) {
  return (
    <div className="flex min-h-screen bg-gray-900">
      <Sidebar />
      <main className="flex-1 ml-64">
        <div className="p-8">
          <div className="mb-8">
            <h1 className="text-4xl font-bold text-white mb-2">{title}</h1>
            {description && <p className="text-gray-400 text-lg">{description}</p>}
          </div>
          {children}
        </div>
      </main>
    </div>
  )
}
