"use client"

import { useState, useEffect, useCallback } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { MessageCircle, Reply, Flag, MoreHorizontal, ThumbsUp, ThumbsDown, Award, Shield, Verified, Heart, Smile, Angry, Annoyed, Laugh } from "lucide-react"
import { useUser } from "@clerk/nextjs"
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover"

interface EnhancedCommentSectionProps {
  articleId: string
}

// Types based on Prisma schema
type ReactionType = "LIKE" | "LOVE" | "HAHA" | "WOW" | "SAD" | "ANGRY";

interface Reaction {
  id: string;
  type: ReactionType;
  userId: string;
}

interface CommentAuthor {
  id: string;
  name: string | null;
  avatar: string | null;
}

interface Comment {
  id: string;
  content: string;
  createdAt: string;
  author: CommentAuthor;
  reactions: Reaction[];
  replies: Comment[];
}

export function EnhancedCommentSection({ articleId }: EnhancedCommentSectionProps) {
  const { user, isSignedIn } = useUser();
  const [comments, setComments] = useState<Comment[]>([]);
  const [newComment, setNewComment] = useState("");
  const [replyTo, setReplyTo] = useState<string | null>(null);
  const [sortBy, setSortBy] = useState<"newest" | "oldest" | "popular">("newest");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchComments = useCallback(async () => {
    try {
      setLoading(true);
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/comments?articleId=${articleId}`);
      if (!response.ok) {
        throw new Error("Failed to fetch comments");
      }
      const data = await response.json();
      setComments(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : "An unknown error occurred");
    } finally {
      setLoading(false);
    }
  }, [articleId]);

  useEffect(() => {
    fetchComments();
  }, [fetchComments]);

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

  const handleSubmitComment = async (parentId?: string) => {
    if (!newComment.trim() || !isSignedIn) return;

    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/comments`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ 
          content: newComment, 
          articleId, 
          parentId 
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to post comment");
      }

      setNewComment("");
      setReplyTo(null);
      fetchComments(); // Refetch comments to show the new one
    } catch (err) {
      setError(err instanceof Error ? err.message : "An unknown error occurred");
    }
  };

  const handleReaction = async (commentId: string, type: ReactionType) => {
    if (!isSignedIn) return;

    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/reactions`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ commentId, type }),
      });

      if (!response.ok) {
        throw new Error("Failed to submit reaction");
      }

      fetchComments(); // Refetch comments to show the new reaction
    } catch (err) {
      setError(err instanceof Error ? err.message : "An unknown error occurred");
    }
  };

  const reactionEmojis: Record<ReactionType, React.ReactNode> = {
    LIKE: <ThumbsUp className="w-4 h-4" />,
    LOVE: <Heart className="w-4 h-4" />,
    HAHA: <Laugh className="w-4 h-4" />,
    WOW: <Smile className="w-4 h-4" />,
    SAD: <Annoyed className="w-4 h-4" />,
    ANGRY: <Angry className="w-4 h-4" />,
  };

  const renderComment = (comment: Comment, isReply = false) => {
    const reactionCounts = comment.reactions.reduce((acc, reaction) => {
      acc[reaction.type] = (acc[reaction.type] || 0) + 1;
      return acc;
    }, {} as Record<ReactionType, number>);

    return (
      <div key={comment.id} className={`border-b border-gray-100 pb-6 last:border-b-0 ${isReply ? 'ml-6' : ''}`}>
        <div className="flex items-start gap-3">
          <div className="relative">
            <Image
              src={comment.author.avatar || "/placeholder.svg"}
              alt={comment.author.name || 'User'}
              width={isReply ? 32 : 40}
              height={isReply ? 32 : 40}
              className="rounded-full"
            />
          </div>

          <div className="flex-1">
            <div className="flex items-center gap-2 mb-2">
              <span className="font-medium text-gray-900">{comment.author.name || 'Anonymous'}</span>
              <span className="text-sm text-gray-500">{new Date(comment.createdAt).toLocaleDateString()}</span>
            </div>

            <p className="text-gray-700 mb-3 leading-relaxed">{comment.content}</p>

            <div className="flex items-center gap-4 text-sm">
              <Popover>
                <PopoverTrigger asChild>
                  <Button variant="outline" size="sm" disabled={!isSignedIn}>React</Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto">
                  <div className="flex gap-2">
                    {Object.keys(reactionEmojis).map((type) => (
                      <button key={type} onClick={() => handleReaction(comment.id, type as ReactionType)}>
                        {reactionEmojis[type as ReactionType]}
                      </button>
                    ))}
                  </div>
                </PopoverContent>
              </Popover>

              {Object.entries(reactionCounts).map(([type, count]) => (
                <div key={type} className="flex items-center gap-1">
                  {reactionEmojis[type as ReactionType]}
                  <span className="text-xs">{count}</span>
                </div>
              ))}

              {!isReply && (
                <button
                  className="flex items-center gap-1 text-gray-500 hover:text-blue-500 transition-colors"
                  onClick={() => setReplyTo(comment.id)}
                  disabled={!isSignedIn}
                >
                  <Reply className="w-4 h-4" />
                  Reply
                </button>
              )}
            </div>

            {/* Replies */}
            {comment.replies && comment.replies.length > 0 && (
              <div className="mt-4 space-y-4">
                {comment.replies.map((reply) => renderComment(reply, true))}
              </div>
            )}

            {/* Reply Form */}
            {replyTo === comment.id && (
              <div className="mt-4 p-3 bg-gray-50 rounded-lg">
                <Textarea 
                  placeholder={`Reply to ${comment.author.name}...`} 
                  className="mb-2" 
                  rows={2} 
                  value={newComment}
                  onChange={(e) => setNewComment(e.target.value)}
                  disabled={!isSignedIn}
                />
                <div className="flex gap-2">
                  <Button size="sm" onClick={() => handleSubmitComment(comment.id)} disabled={!isSignedIn || !newComment.trim()}>
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
    );
  };

  if (loading) return <p>Loading comments...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <TooltipProvider>
      <section className="bg-white rounded-lg p-6 border">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-bold text-gray-900 flex items-center gap-2">
            <MessageCircle className="w-5 h-5" />
            Comments ({comments.length})
          </h2>
        </div>

        {/* Comment Form */}
        <div className="mb-8 p-4 bg-gray-50 rounded-lg">
          {!isSignedIn ? (
            <p>Please <a href="/sign-in" className="underline">sign in</a> to join the discussion.</p>
          ) : (
            <>
              <Textarea
                placeholder="Join the discussion! Share your thoughts about this article..."
                value={newComment}
                onChange={(e) => setNewComment(e.target.value)}
                className="mb-3 border-gray-300"
                rows={3}
              />
              <div className="flex justify-between items-center">
                <p className="text-sm text-gray-500">Be respectful and constructive in your comments</p>
                <Button onClick={() => handleSubmitComment()} disabled={!newComment.trim()}>
                  Post Comment
                </Button>
              </div>
            </>
          )}
        </div>

        {/* Comments List */}
        <div className="space-y-6">
          {comments.map((comment) => renderComment(comment))}
        </div>

        {/* Load More Comments */}
        <div className="text-center mt-8">
          <Button variant="outline">Load More Comments</Button>
        </div>
      </section>
    </TooltipProvider>
  )
}
