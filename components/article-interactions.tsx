"use client";

import { useState, useEffect } from "react";
import { Heart, ThumbsUp, Laugh, Frown, MessageCircle, Share2 } from "lucide-react";

interface ArticleInteractionsProps {
  articleId: string;
}

export function ArticleInteractions({ articleId }: ArticleInteractionsProps) {
  const [reactions, setReactions] = useState({
    like: 0,
    love: 0,
    laugh: 0,
    sad: 0
  });

  const reactionTypes = [
    { type: "like", icon: ThumbsUp, label: "Like" },
    { type: "love", icon: Heart, label: "Love" },
    { type: "laugh", icon: Laugh, label: "Laugh" },
    { type: "sad", icon: Frown, label: "Sad" },
  ];

  const handleReaction = (type: string) => {
    alert("Please sign in to react to articles");
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: document.title,
        url: window.location.href,
      });
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert("Link copied to clipboard!");
    }
  };

  return (
    <div className="border-t border-gray-200 pt-6 mt-8">
      <div className="flex items-center gap-4 mb-6">
        {reactionTypes.map(({ type, icon: Icon, label }) => (
          <button
            key={type}
            onClick={() => handleReaction(type)}
            className="flex items-center gap-2 px-3 py-2 border rounded-lg hover:bg-gray-50 transition-colors"
          >
            <Icon className="h-4 w-4" />
            <span>{reactions[type as keyof typeof reactions]}</span>
          </button>
        ))}
        
        <button 
          onClick={handleShare}
          className="flex items-center gap-2 px-3 py-2 border rounded-lg hover:bg-gray-50 transition-colors ml-auto"
        >
          <Share2 className="h-4 w-4" />
          Share
        </button>
      </div>

      <div className="space-y-4">
        <button className="flex items-center gap-2 px-3 py-2 border rounded-lg hover:bg-gray-50 transition-colors">
          <MessageCircle className="h-4 w-4" />
          Comments (0)
        </button>
        <p className="text-gray-600 text-sm">Please sign in to comment and react</p>
      </div>
    </div>
  );
}