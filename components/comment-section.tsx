"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { MessageCircle, Heart, Reply, Flag } from "lucide-react"

interface CommentSectionProps {
  articleId: string
}

export function CommentSection({ articleId }: CommentSectionProps) {
  const [newComment, setNewComment] = useState("")
  const [replyTo, setReplyTo] = useState<string | null>(null)

  // Mock comments data
  const comments = [
    {
      id: "1",
      author: {
        name: "GameMaster2024",
        avatar: "/gamer-avatar-1.png",
      },
      content:
        "Great review! I've been waiting for this expansion and your insights really help. The improvements to the AI sound particularly interesting.",
      publishedAt: "2024-01-15T12:30:00Z",
      likes: 12,
      replies: [
        {
          id: "1-1",
          author: {
            name: "CyberFan",
            avatar: "/gamer-avatar-2.png",
          },
          content: "Totally agree! The AI improvements make such a difference in immersion.",
          publishedAt: "2024-01-15T13:15:00Z",
          likes: 3,
        },
      ],
    },
    {
      id: "2",
      author: {
        name: "TechReviewer",
        avatar: "/gamer-avatar-3.png",
      },
      content:
        "I'm still on the fence about this one. The technical issues you mentioned are concerning. How bad are they really?",
      publishedAt: "2024-01-15T11:45:00Z",
      likes: 8,
      replies: [],
    },
  ]

  const handleSubmitComment = () => {
    if (newComment.trim()) {
      // In real app, submit to API
      console.log("Submitting comment:", newComment)
      setNewComment("")
      setReplyTo(null)
    }
  }

  return (
    <section className="bg-white rounded-lg p-6 border">
      <h2 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
        <MessageCircle className="w-5 h-5" />
        Comments ({comments.length})
      </h2>

      {/* Comment Form */}
      <div className="mb-8">
        <Textarea
          placeholder="Share your thoughts about this article..."
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          className="mb-3"
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
              <Image
                src={comment.author.avatar || "/placeholder.svg"}
                alt={comment.author.name}
                width={40}
                height={40}
                className="rounded-full"
              />

              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <span className="font-medium text-gray-900">{comment.author.name}</span>
                  <span className="text-sm text-gray-500">{new Date(comment.publishedAt).toLocaleDateString()}</span>
                </div>

                <p className="text-gray-700 mb-3">{comment.content}</p>

                <div className="flex items-center gap-4 text-sm">
                  <button className="flex items-center gap-1 text-gray-500 hover:text-red-500 transition-colors">
                    <Heart className="w-4 h-4" />
                    <span>{comment.likes}</span>
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
                </div>

                {/* Replies */}
                {comment.replies.length > 0 && (
                  <div className="mt-4 ml-6 space-y-4">
                    {comment.replies.map((reply) => (
                      <div key={reply.id} className="flex items-start gap-3">
                        <Image
                          src={reply.author.avatar || "/placeholder.svg"}
                          alt={reply.author.name}
                          width={32}
                          height={32}
                          className="rounded-full"
                        />

                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-1">
                            <span className="font-medium text-gray-900 text-sm">{reply.author.name}</span>
                            <span className="text-xs text-gray-500">
                              {new Date(reply.publishedAt).toLocaleDateString()}
                            </span>
                          </div>

                          <p className="text-gray-700 text-sm mb-2">{reply.content}</p>

                          <div className="flex items-center gap-3 text-xs">
                            <button className="flex items-center gap-1 text-gray-500 hover:text-red-500 transition-colors">
                              <Heart className="w-3 h-3" />
                              <span>{reply.likes}</span>
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {/* Reply Form */}
                {replyTo === comment.id && (
                  <div className="mt-4 ml-6">
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
    </section>
  )
}
