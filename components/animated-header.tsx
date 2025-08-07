"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { motion, AnimatePresence } from "framer-motion"
import { Search, Menu, X, Bell, User, Settings, LogOut, UserCircle } from "lucide-react"
import { Input } from "@/components/ui/input"
import { SignedIn, SignedOut, UserButton, useUser, useClerk, SignInButton, SignUpButton } from "@clerk/nextjs"
import { useAuthNotifications } from "@/hooks/use-auth-notifications"
import { LogoutConfirmation } from "@/components/logout-confirmation"

const mainNavItems = [
  { label: "Home", href: "/" },
  { label: "News", href: "/article/news" },
  { label: "Reviews", href: "/article/review" },
  { label: "Gaming", href: "/gaming" },
  { label: "Tech", href: "/tech" },
  { label: "Videos", href: "/article/video" },
]

export default function AnimatedHeader() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const [isProfileOpen, setIsProfileOpen] = useState(false)
  const [isNotificationOpen, setIsNotificationOpen] = useState(false)
  const [showLogoutConfirm, setShowLogoutConfirm] = useState(false)
  const [notifications, setNotifications] = useState<Array<{id: number, title: string, message: string, time: string, unread: boolean}>>([]) 
  const [mounted, setMounted] = useState(false)
  const pathname = usePathname()
  const { user, isSignedIn } = useUser()
  const { signOut } = useClerk()
  useAuthNotifications()

  useEffect(() => {
    setMounted(true)
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Load notifications for authenticated users
  useEffect(() => {
    if (isSignedIn && user) {
      // Simulate loading user-specific notifications
      const userNotifications = [
        { id: 1, title: "Welcome to KOODOS!", message: "Explore the latest gaming content", time: "Recently", unread: true },
        { id: 2, title: "New article published", message: "Check out the latest gaming review", time: "Earlier today", unread: true },
        { id: 3, title: "Weekly newsletter", message: "Your gaming digest is ready", time: "Yesterday", unread: false }
      ]
      setNotifications(userNotifications)
    } else {
      setNotifications([])
    }
  }, [isSignedIn, user])

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 lg:sticky z-30 transition-all duration-300 ${
          isScrolled ? "bg-black/95 backdrop-blur-md shadow-lg border-b border-gray-800" : "bg-black/90 border-b border-gray-700"
        }`}
      >
        <div className="px-4 lg:px-6 py-3 lg:py-4">
          <div className="flex items-center justify-between lg:justify-end">
            {/* Mobile Logo */}
            <div className="lg:hidden ml-16">
              <Link href="/" className="flex items-center gap-2">
                <div className="w-8 h-8 bg-white rounded flex items-center justify-center">
                  <span className="text-black font-bold text-sm">K</span>
                </div>
                <span className="text-white font-bold text-lg">KOODOS</span>
              </Link>
            </div>
            {/* Right Side Actions */}
            <div className="flex items-center gap-3">
              {/* Search */}
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setIsSearchOpen(!isSearchOpen)}
                className="p-2 text-gray-300 hover:text-white transition-colors"
              >
                <Search className="w-5 h-5" />
              </motion.button>

              {/* Notifications - Only for signed in users */}
              {isSignedIn && (
                <div className="relative">
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => setIsNotificationOpen(!isNotificationOpen)}
                    className="p-2 text-gray-300 hover:text-white transition-colors relative"
                  >
                    <Bell className="w-5 h-5" />
                    {notifications.filter(n => n.unread).length > 0 && (
                      <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full text-xs flex items-center justify-center text-white font-bold">
                        {notifications.filter(n => n.unread).length}
                      </span>
                    )}
                  </motion.button>
                  
                  <AnimatePresence>
                    {isNotificationOpen && (
                      <>
                        <div className="fixed inset-0 z-40" onClick={() => setIsNotificationOpen(false)} />
                        <motion.div
                          initial={{ opacity: 0, scale: 0.95, y: -10 }}
                          animate={{ opacity: 1, scale: 1, y: 0 }}
                          exit={{ opacity: 0, scale: 0.95, y: -10 }}
                          transition={{ duration: 0.15 }}
                          className="absolute right-0 top-12 w-80 max-w-[calc(100vw-2rem)] bg-white border border-gray-200 rounded-xl shadow-2xl z-50 overflow-hidden"
                        >
                          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 px-4 py-3 border-b border-gray-100">
                            <div className="flex items-center justify-between">
                              <h3 className="font-semibold text-gray-900">Notifications</h3>
                              <span className="text-xs text-gray-500 bg-blue-100 px-2 py-1 rounded-full">{notifications.filter(n => n.unread).length}</span>
                            </div>
                          </div>
                          <div className="max-h-96 overflow-y-auto">
                            {notifications.length > 0 ? (
                              notifications.map((notification, index) => (
                                <motion.div
                                  key={notification.id}
                                  initial={{ opacity: 0, x: -20 }}
                                  animate={{ opacity: 1, x: 0 }}
                                  transition={{ delay: index * 0.05 }}
                                  className={`p-4 border-b border-gray-50 hover:bg-gray-50 cursor-pointer transition-colors ${notification.unread ? 'bg-blue-50/50' : ''}`}
                                >
                                  <div className="flex items-start gap-3">
                                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                                      <Bell className="w-4 h-4 text-blue-600" />
                                    </div>
                                    <div className="flex-1 min-w-0">
                                      <div className="flex items-center gap-2">
                                        <h4 className="font-medium text-gray-900 text-sm">{notification.title}</h4>
                                        {notification.unread && <div className="w-2 h-2 bg-blue-500 rounded-full"></div>}
                                      </div>
                                      <p className="text-gray-600 text-xs mt-1">{notification.message}</p>
                                      <span className="text-gray-400 text-xs mt-1 block">{notification.time}</span>
                                    </div>
                                  </div>
                                </motion.div>
                              ))
                            ) : (
                              <div className="p-8 text-center text-gray-500">
                                <Bell className="w-10 h-10 mx-auto mb-2 opacity-30" />
                                <p className="text-sm text-gray-400">No notifications</p>
                              </div>
                            )}
                          </div>
                          {notifications.length > 0 && (
                            <div className="bg-gray-50 px-4 py-3 border-t border-gray-100">
                              <button className="w-full text-center text-blue-600 text-sm font-medium hover:text-blue-700 transition-colors">View all notifications</button>
                            </div>
                          )}
                        </motion.div>
                      </>
                    )}
                  </AnimatePresence>
                </div>
              )}

              {/* Profile */}
              <SignedIn>
                <div className="relative">
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => setIsProfileOpen(!isProfileOpen)}
                    className="p-2 text-gray-300 hover:text-white transition-colors flex items-center gap-2"
                  >
                    {user?.imageUrl ? (
                      <img src={user.imageUrl} alt="Profile" className="w-6 h-6 rounded-full" />
                    ) : (
                      <div className="w-6 h-6 bg-white text-black rounded-full flex items-center justify-center font-bold text-xs">
                        {user?.firstName?.charAt(0) || user?.fullName?.charAt(0) || 'U'}
                      </div>
                    )}
                  </motion.button>
                  
                  <AnimatePresence>
                    {isProfileOpen && (
                      <>
                        <div className="fixed inset-0 z-40" onClick={() => setIsProfileOpen(false)} />
                        <motion.div
                          initial={{ opacity: 0, scale: 0.95, y: -10 }}
                          animate={{ opacity: 1, scale: 1, y: 0 }}
                          exit={{ opacity: 0, scale: 0.95, y: -10 }}
                          transition={{ duration: 0.15 }}
                          className="absolute right-0 top-12 w-80 max-w-[calc(100vw-2rem)] bg-white border border-gray-200 rounded-xl shadow-2xl z-50 overflow-hidden max-h-96 overflow-y-auto"
                        >
                        <div className="p-4 border-b border-gray-200">
                          <div className="flex items-center gap-3">
                            {user?.imageUrl ? (
                              <img src={user.imageUrl} alt="Profile" className="w-12 h-12 rounded-full" />
                            ) : (
                              <div className="w-12 h-12 bg-gray-200 text-gray-700 rounded-full flex items-center justify-center font-bold">
                                {user?.firstName?.charAt(0) || user?.fullName?.charAt(0) || 'U'}
                              </div>
                            )}
                            <div className="flex-1 min-w-0">
                              <h3 className="font-semibold text-gray-900 text-sm truncate">{user?.fullName || 'User'}</h3>
                              <p className="text-gray-600 text-xs truncate">{user?.primaryEmailAddress?.emailAddress}</p>
                              <p className="text-gray-500 text-xs">Member since {user?.createdAt ? new Date(user.createdAt).toLocaleDateString() : 'Unknown'}</p>
                              <p className="text-green-600 text-xs">● Online now</p>
                            </div>
                          </div>
                          
                          {/* User Stats */}
                          <div className="mt-3 grid grid-cols-3 gap-2 text-center">
                            <div className="bg-gray-50 rounded p-2">
                              <p className="text-xs font-semibold text-gray-900">127</p>
                              <p className="text-xs text-gray-600">Articles</p>
                            </div>
                            <div className="bg-gray-50 rounded p-2">
                              <p className="text-xs font-semibold text-gray-900">23</p>
                              <p className="text-xs text-gray-600">Comments</p>
                            </div>
                            <div className="bg-gray-50 rounded p-2">
                              <p className="text-xs font-semibold text-gray-900">89</p>
                              <p className="text-xs text-gray-600">Likes</p>
                            </div>
                          </div>
                          
                          {/* Interests */}
                          <div className="mt-3">
                            <p className="text-xs font-medium text-gray-700 mb-1">Interests</p>
                            <div className="flex flex-wrap gap-1">
                              {['Gaming', 'Tech', 'Reviews'].map((interest) => (
                                <span key={interest} className="px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded-full">
                                  {interest}
                                </span>
                              ))}
                            </div>
                          </div>
                          
                          {/* Recent Activity */}
                          <div className="mt-3">
                            <p className="text-xs font-medium text-gray-700 mb-1">Recent Activity</p>
                            <div className="space-y-1">
                              <p className="text-xs text-gray-600">• Commented on Spider-Man 2 Review</p>
                              <p className="text-xs text-gray-600">• Liked Gaming News Article</p>
                            </div>
                          </div>
                        </div>
                        <div>
                          <Link href="/profile" onClick={() => setIsProfileOpen(false)} className="flex items-center gap-3 px-4 py-3 text-gray-700 hover:bg-gray-50 transition-colors">
                            <User className="w-4 h-4" />
                            <span>My Profile</span>
                          </Link>
                          <Link href="/profile/settings" onClick={() => setIsProfileOpen(false)} className="flex items-center gap-3 px-4 py-3 text-gray-700 hover:bg-gray-50 transition-colors">
                            <Settings className="w-4 h-4" />
                            <span>Settings</span>
                          </Link>
                          <button 
                            onClick={() => {
                              setIsProfileOpen(false)
                              setShowLogoutConfirm(true)
                            }}
                            className="flex items-center gap-3 px-4 py-3 text-red-600 hover:bg-red-50 transition-colors w-full text-left"
                          >
                            <LogOut className="w-4 h-4" />
                            <span>Sign Out</span>
                          </button>
                        </div>
                        </motion.div>
                      </>
                    )}
                  </AnimatePresence>
                </div>
              </SignedIn>
              
              <SignedOut>
                <div className="relative">
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => setIsProfileOpen(!isProfileOpen)}
                    className="p-2 text-gray-300 hover:text-white transition-colors"
                  >
                    <UserCircle className="w-6 h-6" />
                  </motion.button>
                  
                  <AnimatePresence>
                    {isProfileOpen && (
                      <>
                        <div className="fixed inset-0 z-40" onClick={() => setIsProfileOpen(false)} />
                        <motion.div
                          initial={{ opacity: 0, scale: 0.95, y: -10 }}
                          animate={{ opacity: 1, scale: 1, y: 0 }}
                          exit={{ opacity: 0, scale: 0.95, y: -10 }}
                          transition={{ duration: 0.15 }}
                          className="absolute right-0 top-12 w-64 max-w-[calc(100vw-2rem)] bg-white border border-gray-200 rounded-xl shadow-2xl z-50 overflow-hidden"
                        >
                          <div className="p-4 space-y-2">
                            <SignInButton mode="modal">
                              <button onClick={() => setIsProfileOpen(false)} className="flex items-center justify-center gap-2 w-full bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                                <User className="w-4 h-4" />
                                <span>Sign In</span>
                              </button>
                            </SignInButton>
                            <SignUpButton mode="modal">
                              <button onClick={() => setIsProfileOpen(false)} className="flex items-center justify-center gap-2 w-full bg-gray-600 text-white px-4 py-2 rounded-lg hover:bg-gray-700 transition-colors">
                                <User className="w-4 h-4" />
                                <span>Sign Up</span>
                              </button>
                            </SignUpButton>
                          </div>
                        </motion.div>
                      </>
                    )}
                  </AnimatePresence>
                </div>
              </SignedOut>
            </div>
          </div>
          
          {/* Click outside to close dropdowns */}
          {(isProfileOpen || isNotificationOpen) && (
            <div 
              className="fixed inset-0 z-40" 
              onClick={() => {
                setIsProfileOpen(false)
                setIsNotificationOpen(false)
              }}
            />
          )}
          
          <LogoutConfirmation 
            isOpen={showLogoutConfirm} 
            onClose={() => setShowLogoutConfirm(false)} 
          />

        </div>

        {/* Search Bar - Collapse Component */}
        <AnimatePresence>
          {isSearchOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="border-t border-gray-800 overflow-hidden"
            >
              <div className="px-4 lg:px-6 py-4">
                <div className="relative max-w-md mx-auto">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                  <Input
                    placeholder="Search articles, reviews, news..."
                    className="pl-10 bg-gray-900 border-gray-700 text-white placeholder-gray-400 focus:border-white w-full"
                    autoFocus
                  />
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>
      


        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden border-t border-gray-800 overflow-hidden"
            >
              <nav className="px-6 py-4 space-y-2">
                {mainNavItems.map((item, index) => (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05, duration: 0.3 }}
                  >
                    <Link
                      href={item.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={`block py-2 text-sm font-medium transition-colors ${
                        pathname === item.href ? "text-white" : "text-gray-300 hover:text-white"
                      }`}
                    >
                      {item.label}
                    </Link>
                  </motion.div>
                ))}
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
    </>
  )
}
