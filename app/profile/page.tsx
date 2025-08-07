"use client"

import { motion } from "framer-motion"
import { useUser } from "@clerk/nextjs"
import { User, Mail, Calendar, MapPin, Edit } from "lucide-react"
import Link from "next/link"

export default function Profile() {
  const { user } = useUser()

  return (
    <div className="min-h-screen bg-white">
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-8 lg:py-12">
        <div className="px-4 lg:px-8">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-2xl lg:text-4xl font-bold mb-2 lg:mb-4"
          >
            My Profile
          </motion.h1>
          <p className="text-sm lg:text-xl opacity-90">Manage your account and preferences</p>
        </div>
      </section>

      <section className="px-4 lg:px-8 py-6 lg:py-8">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
            {/* Profile Info */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-white border border-gray-200 rounded-lg p-6 mb-6"
              >
                <div className="flex items-center gap-4 mb-6">
                  {user?.imageUrl ? (
                    <img src={user.imageUrl} alt="Profile" className="w-20 h-20 rounded-full" />
                  ) : (
                    <div className="w-20 h-20 bg-gray-200 text-gray-700 rounded-full flex items-center justify-center font-bold text-2xl">
                      {user?.firstName?.charAt(0) || user?.fullName?.charAt(0) || 'U'}
                    </div>
                  )}
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900">{user?.fullName || 'User'}</h2>
                    <p className="text-gray-600">{user?.primaryEmailAddress?.emailAddress}</p>
                    <Link href="/profile/settings" className="inline-flex items-center gap-2 mt-2 text-blue-600 hover:text-blue-700 text-sm">
                      <Edit className="w-4 h-4" />
                      Edit Profile
                    </Link>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-center gap-3 p-3 bg-gray-50 rounded">
                    <Mail className="w-5 h-5 text-gray-400" />
                    <div>
                      <p className="text-sm text-gray-600">Email</p>
                      <p className="font-medium">{user?.primaryEmailAddress?.emailAddress || 'Not provided'}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-gray-50 rounded">
                    <Calendar className="w-5 h-5 text-gray-400" />
                    <div>
                      <p className="text-sm text-gray-600">Member since</p>
                      <p className="font-medium">{user?.createdAt ? new Date(user.createdAt).toLocaleDateString() : 'Unknown'}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-gray-50 rounded">
                    <User className="w-5 h-5 text-gray-400" />
                    <div>
                      <p className="text-sm text-gray-600">Username</p>
                      <p className="font-medium">{user?.username || user?.firstName || 'Not set'}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-green-50 rounded">
                    <div className="w-5 h-5 flex items-center justify-center">
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">Status</p>
                      <p className="font-medium text-green-700">Online now</p>
                    </div>
                  </div>
                </div>
                
                {/* Contact Information */}
                <div className="mt-6">
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">Contact Information</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="p-3 bg-gray-50 rounded">
                      <p className="text-sm text-gray-600 mb-1">Phone</p>
                      <p className="font-medium">{user?.phoneNumbers?.[0]?.phoneNumber || 'Not provided'}</p>
                    </div>
                    <div className="p-3 bg-gray-50 rounded">
                      <p className="text-sm text-gray-600 mb-1">Location</p>
                      <p className="font-medium">India</p>
                    </div>
                  </div>
                </div>
                
                {/* Interests */}
                <div className="mt-6">
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">Interests</h4>
                  <div className="flex flex-wrap gap-2">
                    {['Gaming', 'Technology', 'Reviews', 'Anime', 'Comics', 'Esports'].map((interest) => (
                      <span key={interest} className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
                        {interest}
                      </span>
                    ))}
                  </div>
                </div>
                
                {/* Last Login */}
                <div className="mt-6">
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">Session Information</h4>
                  <div className="p-3 bg-gray-50 rounded">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm text-gray-600">Last login</p>
                        <p className="font-medium">{user?.lastSignInAt ? new Date(user.lastSignInAt).toLocaleString() : 'Current session'}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-sm text-gray-600">Session duration</p>
                        <p className="font-medium text-green-600">Active</p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Activity */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="bg-white border border-gray-200 rounded-lg p-6"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-4">Recent Activity</h3>
                <div className="space-y-4">
                  {[
                    { 
                      action: "Commented on", 
                      item: "Spider-Man 2 Review", 
                      time: "2 hours ago",
                      type: "comment",
                      details: "Great review! The web-swinging mechanics are incredible."
                    },
                    { 
                      action: "Liked", 
                      item: "Gaming News: PlayStation 5 Pro Announced", 
                      time: "1 day ago",
                      type: "like",
                      details: "Showed interest in this article"
                    },
                    { 
                      action: "Shared", 
                      item: "Tech Review: iPhone 15 Pro Max", 
                      time: "3 days ago",
                      type: "share",
                      details: "Shared on social media"
                    },
                    { 
                      action: "Read", 
                      item: "Gaming Guide: Elden Ring Boss Strategies", 
                      time: "1 week ago",
                      type: "read",
                      details: "Completed reading this guide"
                    },
                    { 
                      action: "Bookmarked", 
                      item: "Anime Review: Attack on Titan Final Season", 
                      time: "2 weeks ago",
                      type: "bookmark",
                      details: "Saved for later reading"
                    }
                  ].map((activity, index) => (
                    <div key={index} className="flex items-start gap-3 p-3 hover:bg-gray-50 rounded transition-colors">
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                        activity.type === 'comment' ? 'bg-blue-100 text-blue-600' :
                        activity.type === 'like' ? 'bg-red-100 text-red-600' :
                        activity.type === 'share' ? 'bg-green-100 text-green-600' :
                        activity.type === 'read' ? 'bg-purple-100 text-purple-600' :
                        'bg-yellow-100 text-yellow-600'
                      }`}>
                        {activity.type === 'comment' ? '💬' :
                         activity.type === 'like' ? '❤️' :
                         activity.type === 'share' ? '🔗' :
                         activity.type === 'read' ? '📖' : '🔖'}
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-gray-900">
                          <span className="font-semibold">{activity.action}</span> {activity.item}
                        </p>
                        <p className="text-xs text-gray-600 mt-1">{activity.details}</p>
                        <p className="text-xs text-gray-400 mt-1">{activity.time}</p>
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="mt-4 pt-4 border-t border-gray-200">
                  <button className="w-full text-center text-blue-600 text-sm font-medium hover:text-blue-700 transition-colors">
                    View All Activity
                  </button>
                </div>
              </motion.div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                className="bg-white border border-gray-200 rounded-lg p-6"
              >
                <h3 className="text-lg font-bold text-gray-900 mb-4">Quick Actions</h3>
                <div className="space-y-3">
                  <Link href="/profile/settings" className="block p-3 bg-blue-50 text-blue-700 rounded hover:bg-blue-100 transition-colors">
                    <div className="flex items-center gap-3">
                      <User className="w-4 h-4" />
                      <span className="font-medium">Edit Profile</span>
                    </div>
                  </Link>
                  <Link href="/profile/membership" className="block p-3 bg-gray-50 text-gray-700 rounded hover:bg-gray-100 transition-colors">
                    <div className="flex items-center gap-3">
                      <Calendar className="w-4 h-4" />
                      <span className="font-medium">Membership</span>
                    </div>
                  </Link>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 }}
                className="bg-white border border-gray-200 rounded-lg p-6"
              >
                <h3 className="text-lg font-bold text-gray-900 mb-4">Stats</h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Articles Read</span>
                    <span className="font-bold">127</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Comments</span>
                    <span className="font-bold">23</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Likes Given</span>
                    <span className="font-bold">89</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}