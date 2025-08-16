"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Mail, CheckCircle, AlertCircle } from "lucide-react"

export function NewsletterSignup() {
  const [email, setEmail] = useState("")
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")
  const [message, setMessage] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!email) {
      setStatus("error")
      setMessage("Please enter your email address")
      return
    }

    setStatus("loading")

    // Simulate API call
    setTimeout(() => {
      setStatus("success")
      setMessage("Thanks for subscribing! Check your email for confirmation.")
      setEmail("")
    }, 1000)
  }

  return (
    <Card className="bg-gradient-to-r from-white to-gray-100 border-0 text-gray-800">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-gray-800">
          <Mail className="w-5 h-5" />
          Stay in the Game
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-gray-600 mb-4">
          Get the latest gaming news, reviews, and exclusive content delivered to your inbox weekly.
        </p>

        <form onSubmit={handleSubmit} className="space-y-3">
          <Input
            type="email"
            placeholder="Enter your email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="bg-white/90 border-gray-300 text-gray-800 placeholder-gray-500 focus:border-gray-600"
            disabled={status === "loading"}
          />

          <Button
            type="submit"
            className="w-full bg-white text-gray-800 hover:bg-gray-50 border border-gray-300"
            disabled={status === "loading"}
          >
            {status === "loading" ? "Subscribing..." : "Subscribe Now"}
          </Button>
        </form>

        {status === "success" && (
          <div className="flex items-center gap-2 mt-3 text-green-200">
            <CheckCircle className="w-4 h-4" />
            <span className="text-sm">{message}</span>
          </div>
        )}

        {status === "error" && (
          <div className="flex items-center gap-2 mt-3 text-red-200">
            <AlertCircle className="w-4 h-4" />
            <span className="text-sm">{message}</span>
          </div>
        )}

        <p className="text-xs text-gray-500 mt-3">
          No spam, unsubscribe at any time. Read our{" "}
          <a href="/privacy" className="underline hover:text-gray-800">
            Privacy Policy
          </a>
        </p>
      </CardContent>
    </Card>
  )
}
