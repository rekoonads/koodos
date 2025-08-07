"use client"

import { useState, useEffect } from "react"
import AnimatedSidebar from "@/components/animated-sidebar"
import AnimatedHeader from "@/components/animated-header"
import AnimatedFooter from "@/components/animated-footer"
import { Toaster } from "@/components/ui/toaster"
import { useAuthNotifications } from "@/hooks/use-auth-notifications"

export default function LayoutWrapper({ children }: { children: React.ReactNode }) {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const [mounted, setMounted] = useState(false)
  useAuthNotifications()

  useEffect(() => {
    setMounted(true)
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024)
    }
    
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  if (!mounted) {
    return (
      <div className="min-h-screen">
        <div className="transition-all duration-300 ml-64">
          <main className="bg-white pt-16 lg:pt-0">{children}</main>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen">
      <AnimatedSidebar onCollapseChange={setSidebarCollapsed} />
      <div className={`transition-all duration-300 ${
        isMobile 
          ? 'ml-0' 
          : sidebarCollapsed 
          ? 'ml-16' 
          : 'ml-64'
      }`}>
        <AnimatedHeader />
        <main className="bg-white pt-16 lg:pt-0">{children}</main>
        <AnimatedFooter />
      </div>
      <Toaster />
    </div>
  )
}