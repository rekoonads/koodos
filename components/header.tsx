"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Bell } from "lucide-react"
import { SignInButton, SignUpButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs"

function ClerkEnabledHeader() {
  const [notifications, setNotifications] = useState(3)

  return (
    <div className="flex items-center space-x-4">
      <SignedIn>
        <div className="relative">
          <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white">
            <Bell className="w-5 h-5" />
          </Button>
          {notifications > 0 && (
            <Badge className="absolute -top-1 -right-1 w-5 h-5 p-0 flex items-center justify-center bg-red-500 text-white text-xs">
              {notifications}
            </Badge>
          )}
        </div>
        <UserButton
          appearance={{
            elements: {
              avatarBox: "w-8 h-8",
              userButtonPopoverCard: "bg-gray-800 border-gray-700",
              userButtonPopoverActionButton: "text-gray-300 hover:text-white hover:bg-gray-700",
            },
          }}
        />
      </SignedIn>
      <SignedOut>
        <div className="flex items-center space-x-2">
          <SignInButton>
            <Button variant="ghost" size="sm" className="text-gray-300 hover:text-white">
              Sign In
            </Button>
          </SignInButton>
          <SignUpButton>
            <Button size="sm" className="bg-white hover:bg-gray-100 text-gray-800">
              Sign Up
            </Button>
          </SignUpButton>
        </div>
      </SignedOut>
    </div>
  )
}

export function Header() {
  return null
}
