"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { MessageCircle, Reply, Flag, MoreHorizontal, ThumbsUp, ThumbsDown, Award, Shield, Verified } from "lucide-react"

interface EnhancedCommentSectionProps {
  articleId: string
}

export function EnhancedCommentSection({ articleId }: EnhancedCommentSectionProps) {
  const [newComment, setNewComment] = useState("")
  const [replyTo, setReplyTo] = useState<string | null>(null)
  const [sortBy, setSortBy] = useState<"newest" | "oldest" | "popular">("newest")

  // Mock enhanced comments data
  const comments = [
    {
      id: "1",
      author: {
        name: "GameMaster2024",
        avatar: "/gamer-avatar-1.png",
        badges: ["verified", "top-contributor"],
        level: 15,
      },
      content:
        "Great review! I've been waiting for this expansion and your insights really help. The improvements to the AI sound particularly interesting. Can't wait to dive in!",
      publishedAt: "2024-01-15T12:30:00Z",
      likes: 24,
      dislikes: 2,
      isLiked: false,
      isDisliked: false,
      replies: [
        {
          id: "1-1",
          author: {
            name: "CyberFan",
            avatar: "/gamer-avatar-2.png",
            badges: ["verified"],
            level: 8,
          },
          content: "Totally agree! The AI improvements make such a difference in immersion. Worth the wait!",
          publishedAt: "2024-01-15T13:15:00Z",
          likes: 8,
          dislikes: 0,
          isLiked: true,
          isDisliked: false,
        },
      ],
    },
    {
      id: "2",
      author: {
        name: "TechReviewer",
        avatar: "/gamer-avatar-3.png",
        badges: ["expert", "hardware-guru"],
        level: 22,
      },
      content:
        "I'm still on the fence about this one. The technical issues you mentioned are concerning. How bad are they really? Are we talking about occasional glitches or game-breaking bugs?",
      publishedAt: "2024-01-15T11:45:00Z",
      likes: 15,
      dislikes: 1,
      isLiked: false,
      isDisliked: false,
      replies: [],
    },
  ]

  const getBadgeIcon = (badge: string) => {
    switch (badge) {
      case "verified":
        return <Verified className="w-3 h-3 text-blue-500" />
      case "top-contributor":
        return <Award className="w-3 h-3 text-yellow-500" />
      case "expert":
        return <Shield className="w-3 h-3 text-purple-500" />
      case "hardware-guru":
        return <Shield className="w-3 h-3 text-green-500" />
      default:
        return null
    }
  }

  const handleSubmitComment = () => {
    if (newComment.trim()) {
      console.log("Submitting comment:", newComment)
      setNewComment("")
      setReplyTo(null)
    }
  }

  const handleLike = (commentId: string, isReply = false) => {
    console.log("Liking comment:", commentId, isReply)
  }

  const handleDislike = (commentId: string, isReply = false) => {
    console.log("Disliking comment:", commentId, isReply)
  }

  return (
    <TooltipProvider>
      <section className="bg-white rounded-lg p-6 border">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-bold text-gray-900 flex items-center gap-2">
            <MessageCircle className="w-5 h-5" />
            Comments ({comments.length})
          </h2>

          <div className="flex gap-2">
            <Button variant={sortBy === "newest" ? "default" : "outline"} size="sm" onClick={() => setSortBy("newest")}>
              Newest
            </Button>
            <Button
              variant={sortBy === "popular" ? "default" : "outline"}
              size="sm"
              onClick={() => setSortBy("popular")}
            >
              Popular
            </Button>
            <Button variant={sortBy === "oldest" ? "default" : "outline"} size="sm" onClick={() => setSortBy("oldest")}>
              Oldest
            </Button>
          </div>
        </div>

        {/* Comment Form */}
        <div className="mb-8 p-4 bg-gray-50 rounded-lg">
          <Textarea
            placeholder="Join the discussion! Share your thoughts about this article..."
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
            className="mb-3 border-gray-300"
            rows={3}
          />
          <div className="flex justify-between items-center">
            <p className="text-sm text-gray-500">Be respectful and constructive in your comments</p>
            <Button onClick={handleSubmitComment} disabled={!newComment.trim()}>
              Post Comment
            </Button>
          </div>
        </div>

        {/* Comments List */}
        <div className="space-y-6">
          {comments.map((comment) => (
            <div key={comment.id} className="border-b border-gray-100 pb-6 last:border-b-0">
              <div className="flex items-start gap-3">
                <div className="relative">
                  <Image
                    src={comment.author.avatar || "/placeholder.svg"}
                    alt={comment.author.name}
                    width={40}
                    height={40}
                    className="rounded-full"
                  />
                  <Badge
                    variant="secondary"
                    className="absolute -bottom-1 -right-1 text-xs px-1 py-0 bg-blue-100 text-blue-800"
                  >
                    {comment.author.level}
                  </Badge>
                </div>

                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="font-medium text-gray-900">{comment.author.name}</span>
                    <div className="flex gap-1">
                      {comment.author.badges.map((badge) => (
                        <Tooltip key={badge}>
                          <TooltipTrigger>{getBadgeIcon(badge)}</TooltipTrigger>
                          <TooltipContent>
                            <p className="capitalize">{badge.replace("-", " ")}</p>
                          </TooltipContent>
                        </Tooltip>
                      ))}
                    </div>
                    <span className="text-sm text-gray-500">{new Date(comment.publishedAt).toLocaleDateString()}</span>
                  </div>

                  <p className="text-gray-700 mb-3 leading-relaxed">{comment.content}</p>

                  <div className="flex items-center gap-4 text-sm">
                    <button
                      className={`flex items-center gap-1 transition-colors ${
                        comment.isLiked ? "text-green-600" : "text-gray-500 hover:text-green-600"
                      }`}
                      onClick={() => handleLike(comment.id)}
                    >
                      <ThumbsUp className="w-4 h-4" />
                      <span>{comment.likes}</span>
                    </button>

                    <button
                      className={`flex items-center gap-1 transition-colors ${
                        comment.isDisliked ? "text-red-600" : "text-gray-500 hover:text-red-600"
                      }`}
                      onClick={() => handleDislike(comment.id)}
                    >
                      <ThumbsDown className="w-4 h-4" />
                      <span>{comment.dislikes}</span>
                    </button>

                    <button
                      className="flex items-center gap-1 text-gray-500 hover:text-blue-500 transition-colors"
                      onClick={() => setReplyTo(comment.id)}
                    >
                      <Reply className="w-4 h-4" />
                      Reply
                    </button>

                    <button className="flex items-center gap-1 text-gray-500 hover:text-yellow-500 transition-colors">
                      <Flag className="w-4 h-4" />
                      Report
                    </button>

                    <button className="text-gray-500 hover:text-gray-700 transition-colors ml-auto">
                      <MoreHorizontal className="w-4 h-4" />
                    </button>
                  </div>

                  {/* Replies */}
                  {comment.replies.length > 0 && (
                    <div className="mt-4 ml-6 space-y-4 border-l-2 border-gray-100 pl-4">
                      {comment.replies.map((reply) => (
                        <div key={reply.id} className="flex items-start gap-3">
                          <div className="relative">
                            <Image
                              src={reply.author.avatar || "/placeholder.svg"}
                              alt={reply.author.name}
                              width={32}
                              height={32}
                              className="rounded-full"
                            />
                            <Badge
                              variant="secondary"
                              className="absolute -bottom-1 -right-1 text-xs px-1 py-0 bg-blue-100 text-blue-800"
                            >
                              {reply.author.level}
                            </Badge>
                          </div>

                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-1">
                              <span className="font-medium text-gray-900 text-sm">{reply.author.name}</span>
                              <div className="flex gap-1">
                                {reply.author.badges.map((badge) => (
                                  <Tooltip key={badge}>
                                    <TooltipTrigger>{getBadgeIcon(badge)}</TooltipTrigger>
                                    <TooltipContent>
                                      <p className="capitalize">{badge.replace("-", " ")}</p>
                                    </TooltipContent>
                                  </Tooltip>
                                ))}
                              </div>
                              <span className="text-xs text-gray-500">
                                {new Date(reply.publishedAt).toLocaleDateString()}
                              </span>
                            </div>

                            <p className="text-gray-700 text-sm mb-2 leading-relaxed">{reply.content}</p>

                            <div className="flex items-center gap-3 text-xs">
                              <button
                                className={`flex items-center gap-1 transition-colors ${
                                  reply.isLiked ? "text-green-600" : "text-gray-500 hover:text-green-600"
                                }`}
                                onClick={() => handleLike(reply.id, true)}
                              >
                                <ThumbsUp className="w-3 h-3" />
                                <span>{reply.likes}</span>
                              </button>

                              <button
                                className={`flex items-center gap-1 transition-colors ${
                                  reply.isDisliked ? "text-red-600" : "text-gray-500 hover:text-red-600"
                                }`}
                                onClick={() => handleDislike(reply.id, true)}
                              >
                                <ThumbsDown className="w-3 h-3" />
                                <span>{reply.dislikes}</span>
                              </button>

                              <button className="text-gray-500 hover:text-yellow-500 transition-colors">
                                <Flag className="w-3 h-3" />
                              </button>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Reply Form */}
                  {replyTo === comment.id && (
                    <div className="mt-4 ml-6 p-3 bg-gray-50 rounded-lg">
                      <Textarea placeholder={`Reply to ${comment.author.name}...`} className="mb-2" rows={2} />
                      <div className="flex gap-2">
                        <Button size="sm" onClick={() => setReplyTo(null)}>
                          Post Reply
                        </Button>
                        <Button variant="outline" size="sm" onClick={() => setReplyTo(null)}>
                          Cancel
                        </Button>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Load More Comments */}
        <div className="text-center mt-8">
          <Button variant="outline">Load More Comments</Button>
        </div>
      </section>
    </TooltipProvider>
  )
}
