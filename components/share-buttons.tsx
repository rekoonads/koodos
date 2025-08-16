"use client"

import { Button } from "@/components/ui/button"
import { Share2, Twitter, Facebook, Link2, Mail } from "lucide-react"
import { useState } from "react"

interface ShareButtonsProps {
  title: string
  url: string
}

export function ShareButtons({ title, url }: ShareButtonsProps) {
  const [copied, setCopied] = useState(false)

  const shareData = {
    title,
    url,
    text: `Check out this article: ${title}`,
  }

  const handleShare = async (platform: string) => {
    switch (platform) {
      case "twitter":
        window.open(
          `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareData.text)}&url=${encodeURIComponent(url)}`,
          "_blank",
        )
        break
      case "facebook":
        window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`, "_blank")
        break
      case "email":
        window.open(
          `mailto:?subject=${encodeURIComponent(title)}&body=${encodeURIComponent(`${shareData.text}\n\n${url}`)}`,
        )
        break
      case "copy":
        try {
          await navigator.clipboard.writeText(url)
          setCopied(true)
          setTimeout(() => setCopied(false), 2000)
        } catch (err) {
          console.error("Failed to copy:", err)
        }
        break
      case "native":
        if (navigator.share) {
          try {
            await navigator.share(shareData)
          } catch (err) {
            console.error("Error sharing:", err)
          }
        }
        break
    }
  }

  return (
    <div className="bg-white rounded-lg p-6 mb-12 border">
      <h3 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
        <Share2 className="w-5 h-5" />
        Share this article
      </h3>

      <div className="flex flex-wrap gap-3">
        <Button variant="outline" size="sm" onClick={() => handleShare("twitter")} className="flex items-center gap-2">
          <Twitter className="w-4 h-4" />
          Twitter
        </Button>

        <Button variant="outline" size="sm" onClick={() => handleShare("facebook")} className="flex items-center gap-2">
          <Facebook className="w-4 h-4" />
          Facebook
        </Button>

        <Button variant="outline" size="sm" onClick={() => handleShare("email")} className="flex items-center gap-2">
          <Mail className="w-4 h-4" />
          Email
        </Button>

        <Button variant="outline" size="sm" onClick={() => handleShare("copy")} className="flex items-center gap-2">
          <Link2 className="w-4 h-4" />
          {copied ? "Copied!" : "Copy Link"}
        </Button>

        {navigator.share && (
          <Button variant="outline" size="sm" onClick={() => handleShare("native")} className="flex items-center gap-2">
            <Share2 className="w-4 h-4" />
            Share
          </Button>
        )}
      </div>
    </div>
  )
}
