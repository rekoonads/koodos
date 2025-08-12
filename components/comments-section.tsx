"use client"

import { useState, useEffect } from "react"
import { useUser, useAuth } from "@clerk/nextjs"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Heart, MessageCircle, ThumbsUp, Laugh, Frown, Angry } from "lucide-react"

interface Comment {
  id: string
  content: string
  author: string
  created_at: string
  likes: number
  user_id: string
  replies?: Comment[]
}

interface Reaction {
  type: string
  _count: { type: number }
}

interface CommentsSectionProps {
  articleId: string
}

export function CommentsSection({ articleId }: CommentsSectionProps) {
  const { user, isSignedIn } = useUser()
  const { getToken } = useAuth()
  const [comments, setComments] = useState<Comment[]>([])
  const [reactions, setReactions] = useState<Reaction[]>([])
  const [newComment, setNewComment] = useState("")
  const [loading, setLoading] = useState(false)

  const reactionTypes = [
    { type: "LIKE", icon: ThumbsUp, label: "Like" },
    { type: "LOVE", icon: Heart, label: "Love" },
    { type: "LAUGH", icon: Laugh, label: "Laugh" },
    { type: "ANGRY", icon: Angry, label: "Angry" },
    { type: "SAD", icon: Frown, label: "Sad" }
  ]

  useEffect(() => {
    fetchComments()
    fetchReactions()
  }, [articleId])

  const fetchComments = async () => {
    try {
      const response = await fetch(`https://admin.koodos.in/api/comments?article_id=${articleId}`)
      if (response.ok) {
        const data = await response.json()
        setComments(data)
      }
    } catch (error) {
      console.error("Failed to fetch comments:", error)
    }
  }

  const fetchReactions = async () => {
    try {
      const response = await fetch(`https://admin.koodos.in/api/reactions?article_id=${articleId}`)
      if (response.ok) {
        const data = await response.json()
        setReactions(data)
      }
    } catch (error) {
      console.error("Failed to fetch reactions:", error)
    }
  }

  const handleSubmitComment = async () => {
    if (!isSignedIn || !newComment.trim()) {
      console.log('Cannot submit comment:', { isSignedIn, hasContent: !!newComment.trim() })
      return
    }

    setLoading(true)
    try {
      const token = await getToken()
      console.log('Token obtained:', !!token)
      
      const response = await fetch("https://admin.koodos.in/api/comments", {
        method: "POST",
        headers: { 
          "Content-Type": "application/json",
          ...(token && { "Authorization": `Bearer ${token}` })
        },
        body: JSON.stringify({
          content: newComment,
          article_id: articleId
        })
      })

      console.log('Comment response status:', response.status)
      
      if (response.ok) {
        setNewComment("")
        fetchComments()
        console.log('Comment posted successfully')
      } else {
        const errorData = await response.json()
        console.error('Comment failed:', errorData)
        alert(`Failed to post comment: ${errorData.error || 'Unknown error'}`)
      }
    } catch (error) {
      console.error("Failed to post comment:", error)
      alert('Failed to post comment. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  const handleReaction = async (type: string) => {
    if (!isSignedIn) {
      console.log('User not signed in for reaction')
      return
    }

    try {
      const token = await getToken()
      console.log('Reaction token obtained:', !!token)
      
      const response = await fetch("https://admin.koodos.in/api/reactions", {
        method: "POST",
        headers: { 
          "Content-Type": "application/json",
          ...(token && { "Authorization": `Bearer ${token}` })
        },
        body: JSON.stringify({ type, article_id: articleId })
      })

      console.log('Reaction response status:', response.status)
      
      if (response.ok) {
        fetchReactions()
        console.log('Reaction processed successfully')
      } else {
        const errorData = await response.json()
        console.error('Reaction failed:', errorData)
      }
    } catch (error) {
      console.error("Failed to react:", error)
    }
  }

  return (
    <div className="mt-12 border-t pt-8">
      <h3 className="text-2xl font-bold mb-6">Comments & Reactions</h3>
      
      {/* Reactions */}
      <div className="flex flex-wrap gap-2 mb-6">
        {reactionTypes.map(({ type, icon: Icon, label }) => {
          const reaction = reactions.find(r => r.type === type)
          const count = reaction?._count?.type || 0
          return (
            <Button
              key={type}
              variant="outline"
              size="sm"
              onClick={() => handleReaction(type)}
              disabled={!isSignedIn}
              className="flex items-center gap-1"
            >
              <Icon className="h-4 w-4" />
              {label} {count}
            </Button>
          )
        })}
      </div>

      {/* Comment Form */}
      {isSignedIn ? (
        <div className="mb-8">
          <Textarea
            placeholder="Share your thoughts..."
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
            className="mb-3"
          />
          <Button 
            onClick={handleSubmitComment}
            disabled={loading || !newComment.trim()}
          >
            {loading ? "Posting..." : "Post Comment"}
          </Button>
        </div>
      ) : (
        <div className="mb-8 p-4 bg-gray-50 rounded-lg text-center">
          <p className="text-gray-600">Please sign in to comment and react</p>
        </div>
      )}

      {/* Comments List */}
      <div className="space-y-4">
        {comments.map((comment) => (
          <div key={comment.id} className="border rounded-lg p-4">
            <div className="flex items-center justify-between mb-2">
              <span className="font-medium">{comment.author}</span>
              <span className="text-sm text-gray-500">
                {new Date(comment.created_at).toLocaleDateString()}
              </span>
            </div>
            <p className="text-gray-700 mb-2">{comment.content}</p>
            <div className="flex items-center gap-2 text-sm text-gray-500">
              <button className="flex items-center gap-1 hover:text-red-600">
                <Heart className="h-4 w-4" />
                {comment.likes}
              </button>
              <button className="flex items-center gap-1 hover:text-blue-600">
                <MessageCircle className="h-4 w-4" />
                Reply
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}