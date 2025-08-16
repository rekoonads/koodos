"use client"

import { useState } from "react"
import { Search, Bell, User } from "lucide-react"
import { SafeClerkWrapper } from "./safe-clerk-wrapper"

export function TopHeader() {
  const [showNotifications, setShowNotifications] = useState(false)
  const [showProfile, setShowProfile] = useState(false)

  const notifications = [
    { id: 1, text: "New review: Cyberpunk 2077 Phantom Liberty", time: "2 min ago", unread: true },
    { id: 2, text: "Your comment received 5 likes", time: "1 hour ago", unread: true },
    { id: 3, text: "Weekly gaming newsletter is ready", time: "3 hours ago", unread: false },
    { id: 4, text: "New article: Best Gaming Laptops 2024", time: "1 day ago", unread: false },
  ]

  const unreadCount = notifications.filter((n) => n.unread).length

  return (
    <div className="fixed top-0 right-0 left-64 z-40 bg-background/95 backdrop-blur-md border-b border-border shadow-sm">
      <div className="flex items-center justify-end px-6 py-4 gap-4">
        {/* Search Icon */}
        <button className="p-2.5 text-muted-foreground hover:text-foreground hover:bg-accent rounded-xl transition-all duration-200 group">
          <Search className="w-5 h-5 group-hover:scale-110 transition-transform" />
        </button>

        {/* Notifications */}
        <div className="relative">
          <button
            onClick={() => setShowNotifications(!showNotifications)}
            className="relative p-2.5 text-muted-foreground hover:text-foreground hover:bg-accent rounded-xl transition-all duration-200 group"
          >
            <Bell className="w-5 h-5 group-hover:scale-110 transition-transform" />
            {unreadCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-destructive text-destructive-foreground text-xs rounded-full w-5 h-5 flex items-center justify-center font-semibold">
                {unreadCount}
              </span>
            )}
          </button>

          {showNotifications && (
            <div className="absolute right-0 top-full mt-2 w-80 bg-card border border-border rounded-xl shadow-2xl backdrop-blur-md">
              <div className="p-4 border-b border-border">
                <h3 className="text-card-foreground font-semibold gaming-subtitle">Notifications</h3>
              </div>
              <div className="max-h-64 overflow-y-auto">
                {notifications.map((notification) => (
                  <div
                    key={notification.id}
                    className={`p-3 border-b border-border hover:bg-accent cursor-pointer transition-colors ${
                      notification.unread ? "bg-accent/50" : ""
                    }`}
                  >
                    <p className="text-sm text-card-foreground">{notification.text}</p>
                    <p className="text-xs text-muted-foreground mt-1">{notification.time}</p>
                  </div>
                ))}
              </div>
              <div className="p-3 border-t border-border">
                <button className="text-sm text-primary hover:text-primary/80 font-medium">View all notifications</button>
              </div>
            </div>
          )}
        </div>

        {/* User Profile */}
        <div className="relative">
          <SafeClerkWrapper
            fallback={
              <button
                onClick={() => setShowProfile(!showProfile)}
                className="p-2.5 text-muted-foreground hover:text-foreground hover:bg-accent rounded-xl transition-all duration-200 group"
              >
                <User className="w-5 h-5 group-hover:scale-110 transition-transform" />
              </button>
            }
          >
            {/* Clerk components will be wrapped safely */}
            <button
              onClick={() => setShowProfile(!showProfile)}
              className="p-2.5 text-muted-foreground hover:text-foreground hover:bg-accent rounded-xl transition-all duration-200 group"
            >
              <User className="w-5 h-5 group-hover:scale-110 transition-transform" />
            </button>
          </SafeClerkWrapper>

          {showProfile && (
            <div className="absolute right-0 top-full mt-2 w-48 bg-card border border-border rounded-xl shadow-2xl backdrop-blur-md">
              <div className="p-2">
                <button className="w-full text-left px-3 py-2 text-sm text-card-foreground hover:text-primary hover:bg-accent rounded-lg transition-colors">
                  Sign In
                </button>
                <button className="w-full text-left px-3 py-2 text-sm text-card-foreground hover:text-primary hover:bg-accent rounded-lg transition-colors">
                  Sign Up
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
