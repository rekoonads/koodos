import React from 'react'
import {
  Facebook,
  Twitter,
  Instagram,
  Youtube,
  Twitch,
  MessageCircle,
} from 'lucide-react'

const SocialPage = () => {
  const socialPlatforms = [
    {
      name: "Facebook",
      icon: Facebook,
      url: "https://facebook.com/koodos",
      followers: "25K",
      description: "Daily gaming news and community discussions",
      color: "bg-blue-600",
    },
    {
      name: "Twitter",
      icon: Twitter,
      url: "https://twitter.com/koodos",
      followers: "45K",
      description: "Real-time gaming updates and breaking news",
      color: "bg-sky-500",
    },
    {
      name: "Instagram",
      icon: Instagram,
      url: "https://instagram.com/koodos",
      followers: "30K",
      description: "Gaming screenshots, behind-the-scenes content",
      color: "bg-pink-600",
    },
    {
      name: "YouTube",
      icon: Youtube,
      url: "https://youtube.com/koodos",
      followers: "100K",
      description: "Game reviews, tutorials, and live streams",
      color: "bg-red-600",
    },
    {
      name: "Twitch",
      icon: Twitch,
      url: "https://twitch.tv/koodos",
      followers: "15K",
      description: "Live gaming streams and community events",
      color: "bg-purple-600",
    },
    {
      name: "Discord",
      icon: MessageCircle,
      url: "https://discord.gg/koodos",
      followers: "8K",
      description: "Join our gaming community for discussions",
      color: "bg-indigo-600",
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      <div className="px-4 sm:px-6 lg:px-8 py-8">
      </div>

      <div className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('/social-pattern.png')] opacity-10"></div>
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-32 h-32 bg-blue-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-40 h-40 bg-purple-500/10 rounded-full blur-3xl"></div>
        </div>
        <div className="relative px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-24">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <div className="flex items-center justify-center mb-6">
                <span className="text-blue-300 font-semibold tracking-wide text-lg">FOLLOW KOODOS</span>
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-6 lg:mb-8">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">
                  Media
                </span>
              </h1>
              <p className="text-lg sm:text-xl lg:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
                Stay connected with us across all social media platforms for the latest gaming content
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 lg:gap-8 max-w-4xl mx-auto">
                <div className="text-center">
                  <div className="text-3xl lg:text-5xl font-bold text-blue-400 mb-2">223K+</div>
                  <div className="text-sm lg:text-base text-gray-400">Total Followers</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl lg:text-5xl font-bold text-purple-400 mb-2">6</div>
                  <div className="text-sm lg:text-base text-gray-400">Platforms</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl lg:text-5xl font-bold text-pink-400 mb-2">24/7</div>
                  <div className="text-sm lg:text-base text-gray-400">Updates</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl lg:text-5xl font-bold text-blue-400 mb-2">Live</div>
                  <div className="text-sm lg:text-base text-gray-400">Streams</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {socialPlatforms.map((platform, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300">
                <div className={`p-6 ${platform.color}`}>
                  <div className="flex items-center justify-between mb-4">
                    <platform.icon className="w-10 h-10 text-white" />
                    <span className="text-white font-bold text-xl">{platform.followers}</span>
                  </div>
                  <h3 className="text-white text-2xl font-bold">{platform.name}</h3>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 mb-4">{platform.description}</p>
                  <a
                    href={platform.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-block ${platform.color} text-white px-6 py-2 rounded-full font-semibold hover:opacity-90 transition-opacity`}
                  >
                    Follow
                  </a>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">Join Our Gaming Community</h2>
            <p className="text-gray-600 max-w-3xl mx-auto text-lg leading-relaxed">
              Connect with fellow gamers, get exclusive content, participate in discussions, and be the first to know
              about gaming news and reviews.
            </p>
          </div>
        </div>
      </div>

    </div>
  )
}

export default SocialPage