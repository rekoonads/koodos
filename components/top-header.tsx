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
    <div className="fixed top-0 right-0 left-64 z-40 bg-gradient-to-r from-white via-white to-gray-50/95 backdrop-blur-md border-b border-gray-200/50 shadow-sm">
      <div className="flex items-center justify-between px-6 py-4">
        {/* Left side - Search */}
        <div className="flex-1 max-w-md">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input
              type="text"
              placeholder="Search articles, reviews, guides..."
              className="w-full pl-10 pr-4 py-2.5 bg-gray-50/80 border border-gray-200/50 rounded-xl text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-300 transition-all duration-200"
            />
          </div>
        </div>

        {/* Right side - Actions */}
        <div className="flex items-center gap-3">
        {/* Notifications */}
          <div className="relative">
            <button
              onClick={() => setShowNotifications(!showNotifications)}
              className="relative p-2.5 text-gray-500 hover:text-gray-700 hover:bg-gray-100/80 rounded-xl transition-all duration-200 group border border-gray-200/50 hover:border-gray-300/50"
            >
              <Bell className="w-5 h-5" />
              {unreadCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-semibold shadow-sm">
                  {unreadCount}
                </span>
              )}
            </button>

            {showNotifications && (
              <div className="absolute right-0 top-full mt-3 w-80 bg-white/95 backdrop-blur-md border border-gray-200/50 rounded-xl shadow-xl">
                <div className="p-4 border-b border-gray-200/50 bg-gradient-to-r from-gray-50/50 to-white">
                  <h3 className="text-gray-900 font-semibold gaming-subtitle">Notifications</h3>
                </div>
                <div className="max-h-64 overflow-y-auto">
                  {notifications.map((notification) => (
                    <div
                      key={notification.id}
                      className={`p-4 border-b border-gray-200/30 hover:bg-gray-50/50 cursor-pointer transition-all duration-200 ${
                        notification.unread ? "bg-blue-50/30 border-l-2 border-l-blue-400" : ""
                      }`}
                    >
                      <p className="text-sm text-gray-900 font-medium">{notification.text}</p>
                      <p className="text-xs text-gray-500 mt-1">{notification.time}</p>
                    </div>
                  ))}
                </div>
                <div className="p-4 border-t border-gray-200/50 bg-gradient-to-r from-white to-gray-50/50">
                  <button className="text-sm text-blue-600 hover:text-blue-800 font-medium transition-colors">View all notifications</button>
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
                  className="p-2.5 text-gray-500 hover:text-gray-700 hover:bg-gray-100/80 rounded-xl transition-all duration-200 border border-gray-200/50 hover:border-gray-300/50"
                >
                  <User className="w-5 h-5" />
                </button>
              }
            >
              <button
                onClick={() => setShowProfile(!showProfile)}
                className="p-2.5 text-gray-500 hover:text-gray-700 hover:bg-gray-100/80 rounded-xl transition-all duration-200 border border-gray-200/50 hover:border-gray-300/50"
              >
                <User className="w-5 h-5" />
              </button>
            </SafeClerkWrapper>

            {showProfile && (
              <div className="absolute right-0 top-full mt-3 w-48 bg-white/95 backdrop-blur-md border border-gray-200/50 rounded-xl shadow-xl">
                <div className="p-3 bg-gradient-to-r from-gray-50/50 to-white rounded-t-xl">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                      <User className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-900">Guest User</p>
                      <p className="text-xs text-gray-500">Join KOODOS</p>
                    </div>
                  </div>
                </div>
                <div className="p-2 border-t border-gray-200/50">
                  <a href="/sign-in" className="block w-full text-left px-3 py-2.5 text-sm text-gray-700 hover:text-blue-600 hover:bg-blue-50/50 rounded-lg transition-all duration-200 font-medium">
                    Sign In
                  </a>
                  <a href="/sign-up" className="block w-full text-left px-3 py-2.5 text-sm text-gray-700 hover:text-blue-600 hover:bg-blue-50/50 rounded-lg transition-all duration-200 font-medium">
                    Sign Up
                  </a>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
