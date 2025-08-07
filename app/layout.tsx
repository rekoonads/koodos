import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import LayoutWrapper from "@/components/layout-wrapper"
import ClientClerkProvider from "@/components/clerk-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "KOODOS - Interactive Entertainment",
  description: "Your ultimate destination for gaming news, reviews, and entertainment content",
  generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-white text-gray-900`}>
        <ClientClerkProvider>
          <LayoutWrapper>
            {children}
          </LayoutWrapper>
        </ClientClerkProvider>
      </body>
    </html>
  )
}
