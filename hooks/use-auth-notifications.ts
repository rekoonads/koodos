"use client"

import { useEffect } from "react"
import { useUser } from "@clerk/nextjs"
import { toast } from "@/hooks/use-toast"

export function useAuthNotifications() {
  const { isSignedIn, user, isLoaded } = useUser()

  useEffect(() => {
    if (!isLoaded) return

    // Show welcome notification on sign in
    if (isSignedIn && user) {
      const hasShownWelcome = sessionStorage.getItem('welcome-shown')
      if (!hasShownWelcome) {
        toast({
          variant: "success",
          title: "Welcome back!",
          description: `Hello ${user.firstName || user.fullName || 'there'}! You're successfully signed in.`,
        })
        sessionStorage.setItem('welcome-shown', 'true')
      }
    }
  }, [isSignedIn, user, isLoaded])

  // Function to show signup success notification
  const showSignupSuccess = (userName?: string) => {
    toast({
      variant: "success",
      title: "Account created successfully!",
      description: `Welcome to KOODOS, ${userName || 'new member'}! Start exploring amazing content.`,
    })
  }

  return { showSignupSuccess }
}