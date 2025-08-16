"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { Heart, Bookmark, Share2, MessageCircle, Eye } from "lucide-react"

interface SocialInteractionsProps {
  articleId: string
  initialLikes?: number
  initialBookmarks?: number
  initialShares?: number
  initialComments?: number
  initialViews?: number
  showViews?: boolean
}

export function SocialInteractions({
  articleId,
  initialLikes = 0,
  initialBookmarks = 0,
  initialShares = 0,
  initialComments = 0,
  initialViews = 0,
  showViews = true,
}: SocialInteractionsProps) {
  const [likes, setLikes] = useState(initialLikes)
  const [bookmarks, setBookmarks] = useState(initialBookmarks)
  const [shares, setShares] = useState(initialShares)
  const [isLiked, setIsLiked] = useState(false)
  const [isBookmarked, setIsBookmarked] = useState(false)

  const handleLike = () => {
    setIsLiked(!isLiked)
    setLikes(isLiked ? likes - 1 : likes + 1)
  }

  const handleBookmark = () => {
    setIsBookmarked(!isBookmarked)
    setBookmarks(isBookmarked ? bookmarks - 1 : bookmarks + 1)
  }

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: "Check out this article on KOODOS",
        url: window.location.href,
      })
    } else {
      navigator.clipboard.writeText(window.location.href)
    }
    setShares(shares + 1)
  }

  return (
    <TooltipProvider>
      <div className="flex items-center gap-4 py-4 border-y border-gray-200">
        {/* Like Button */}
        <Tooltip>
          <TooltipTrigger asChild>
            <Button
              variant="ghost"
              size="sm"
              onClick={handleLike}
              className={`flex items-center gap-2 ${
                isLiked ? "text-red-600 hover:text-red-700" : "text-gray-600 hover:text-red-600"
              }`}
            >
              <Heart className={`w-4 h-4 ${isLiked ? "fill-current" : ""}`} />
              <span className="font-medium">{likes}</span>
            </Button>
          </TooltipTrigger>
          <TooltipContent>
            <p>{isLiked ? "Unlike" : "Like"} this article</p>
          </TooltipContent>
        </Tooltip>

        {/* Bookmark Button */}
        <Tooltip>
          <TooltipTrigger asChild>
            <Button
              variant="ghost"
              size="sm"
              onClick={handleBookmark}
              className={`flex items-center gap-2 ${
                isBookmarked ? "text-blue-600 hover:text-blue-700" : "text-gray-600 hover:text-blue-600"
              }`}
            >
              <Bookmark className={`w-4 h-4 ${isBookmarked ? "fill-current" : ""}`} />
              <span className="font-medium">{bookmarks}</span>
            </Button>
          </TooltipTrigger>
          <TooltipContent>
            <p>{isBookmarked ? "Remove bookmark" : "Bookmark"} this article</p>
          </TooltipContent>
        </Tooltip>

        {/* Share Button */}
        <Tooltip>
          <TooltipTrigger asChild>
            <Button
              variant="ghost"
              size="sm"
              onClick={handleShare}
              className="flex items-center gap-2 text-gray-600 hover:text-green-600"
            >
              <Share2 className="w-4 h-4" />
              <span className="font-medium">{shares}</span>
            </Button>
          </TooltipTrigger>
          <TooltipContent>
            <p>Share this article</p>
          </TooltipContent>
        </Tooltip>

        {/* Comments */}
        <div className="flex items-center gap-2 text-gray-600">
          <MessageCircle className="w-4 h-4" />
          <span className="font-medium">{initialComments}</span>
        </div>

        {/* Views */}
        {showViews && (
          <div className="flex items-center gap-2 text-gray-500 ml-auto">
            <Eye className="w-4 h-4" />
            <span className="text-sm">{initialViews.toLocaleString()} views</span>
          </div>
        )}
      </div>
    </TooltipProvider>
  )
}
