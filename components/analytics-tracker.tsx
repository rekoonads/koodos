'use client'

import { useEffect } from 'react'
import { usePathname } from 'next/navigation'

export default function AnalyticsTracker() {
  const pathname = usePathname()

  useEffect(() => {
    const trackPageView = async () => {
      try {
        // Generate or get session ID
        let sessionId = localStorage.getItem('sessionId')
        if (!sessionId) {
          sessionId = Math.random().toString(36).substring(2) + Date.now().toString(36)
          localStorage.setItem('sessionId', sessionId)
        }

        // Get client IP
        const ipResponse = await fetch('https://api.ipify.org?format=json')
        const { ip } = await ipResponse.json()

        // Get admin dashboard URL
        const adminUrl = process.env.NEXT_PUBLIC_ADMIN_URL || 'http://localhost:3000'
        
        // Track page view to admin dashboard
        await fetch(`${adminUrl}/api/analytics`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            sessionId,
            path: pathname,
            title: document.title,
            referrer: document.referrer,
            userAgent: navigator.userAgent,
            ipAddress: ip,
          }),
        })

        // Track user behavior data
        await fetch(`${adminUrl}/api/user-data`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            sessionId,
            action: 'page_view',
            target: pathname,
            category: getPageCategory(pathname),
            contentId: pathname,
            contentType: 'page',
          }),
        })
      } catch (error) {
        console.error('Analytics tracking failed:', error)
      }
    }

    trackPageView()
  }, [pathname])

  useEffect(() => {
    // Track clicks
    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      const sessionId = localStorage.getItem('sessionId')
      if (!sessionId) return

      const adminUrl = process.env.NEXT_PUBLIC_ADMIN_URL || 'http://localhost:3000'
      fetch(`${adminUrl}/api/user-data`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          sessionId,
          action: 'click',
          target: target.tagName + (target.className ? '.' + target.className.split(' ')[0] : ''),
          category: getPageCategory(pathname),
          value: target.textContent?.slice(0, 100)
        })
      }).catch(console.error)
    }

    // Track scroll depth
    let maxScroll = 0
    const handleScroll = () => {
      const scrollPercent = Math.round((window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100)
      if (scrollPercent > maxScroll) {
        maxScroll = scrollPercent
        const sessionId = localStorage.getItem('sessionId')
        if (sessionId && scrollPercent % 25 === 0) { // Track at 25%, 50%, 75%, 100%
          const adminUrl = process.env.NEXT_PUBLIC_ADMIN_URL || 'http://localhost:3000'
          fetch(`${adminUrl}/api/user-data`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              sessionId,
              action: 'scroll',
              target: pathname,
              category: getPageCategory(pathname),
              scrollDepth: scrollPercent
            })
          }).catch(console.error)
        }
      }
    }

    document.addEventListener('click', handleClick)
    window.addEventListener('scroll', handleScroll)

    return () => {
      document.removeEventListener('click', handleClick)
      window.removeEventListener('scroll', handleScroll)
    }
  }, [pathname])

  return null
}

function getPageCategory(path: string): string {
  if (path.includes('/article/news')) return 'news'
  if (path.includes('/article/reviews')) return 'reviews'
  if (path.includes('/article/videos')) return 'videos'
  if (path.includes('/game')) return 'gaming'
  if (path.includes('/tech')) return 'technology'
  if (path.includes('/anime')) return 'anime'
  if (path.includes('/comics')) return 'comics'
  return 'general'
}