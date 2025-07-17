"use client"

import { motion } from "framer-motion"
import { Twitter, Facebook, Youtube, Instagram, Twitch, MessageCircle } from "lucide-react"

const socialPlatforms = [
  {
    name: "Twitter",
    handle: "@KOODOS_Gaming",
    followers: "125K",
    icon: Twitter,
    color: "bg-blue-500",
    description: "Latest gaming news and quick updates"
  },
  {
    name: "YouTube",
    handle: "KOODOS Gaming",
    followers: "89K",
    icon: Youtube,
    color: "bg-red-600",
    description: "Video reviews, gameplay, and tutorials"
  },
  {
    name: "Instagram",
    handle: "@koodos_gaming",
    followers: "67K",
    icon: Instagram,
    color: "bg-pink-600",
    description: "Behind-the-scenes and gaming lifestyle"
  },
  {
    name: "Facebook",
    handle: "KOODOS Gaming",
    followers: "45K",
    icon: Facebook,
    color: "bg-blue-700",
    description: "Community discussions and events"
  },
  {
    name: "Twitch",
    handle: "KOODOS_Live",
    followers: "23K",
    icon: Twitch,
    color: "bg-purple-600",
    description: "Live gaming streams and events"
  },
  {
    name: "Discord",
    handle: "KOODOS Community",
    followers: "15K",
    icon: MessageCircle,
    color: "bg-indigo-600",
    description: "Join our gaming community chat"
  },
]

export default function Social() {
  return (
    <div className="min-h-screen bg-white">
      <section className="bg-gradient-to-r from-rose-600 to-rose-800 text-white py-8 lg:py-12">
        <div className="px-4 lg:px-8">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-2xl lg:text-4xl font-bold mb-2 lg:mb-4"
          >
            Follow KOODOS
          </motion.h1>
          <p className="text-sm lg:text-xl opacity-90">Stay connected across all our social platforms</p>
        </div>
      </section>

      <section className="px-4 lg:px-8 py-8 lg:py-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">Join Our Gaming Community</h2>
          <p className="text-sm lg:text-lg text-gray-600 max-w-2xl mx-auto">
            Connect with fellow gamers, get the latest updates, and be part of the KOODOS community across all platforms
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {socialPlatforms.map((platform, index) => (
            <motion.div
              key={platform.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white border-2 border-gray-200 rounded-lg p-6 hover:shadow-lg transition-all duration-300 hover:border-black"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className={`${platform.color} p-3 rounded-full`}>
                  <platform.icon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">{platform.name}</h3>
                  <p className="text-gray-600">{platform.handle}</p>
                </div>
              </div>
              
              <p className="text-gray-600 mb-4">{platform.description}</p>
              
              <div className="flex items-center justify-between">
                <span className="text-2xl font-bold text-black">{platform.followers}</span>
                <button className={`${platform.color} text-white px-4 py-2 rounded-lg font-semibold hover:opacity-90 transition-opacity`}>
                  Follow
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="bg-black text-white rounded-lg p-8 text-center"
        >
          <h3 className="text-2xl font-bold mb-4">Never Miss an Update</h3>
          <p className="text-gray-300 mb-6">
            Subscribe to our newsletter for weekly gaming news, exclusive content, and community highlights
          </p>
          <div className="max-w-md mx-auto flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg text-gray-900 border border-gray-300 focus:ring-2 focus:ring-white focus:border-transparent"
            />
            <button className="bg-white text-black px-6 py-3 rounded-lg font-semibold hover:bg-gray-200 transition-colors whitespace-nowrap">
              Subscribe
            </button>
          </div>
        </motion.div>
      </section>
    </div>
  )
}