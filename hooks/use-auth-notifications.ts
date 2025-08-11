"use client"

import { useEffect } from "react"
import { useUser } from "@clerk/nextjs"
import { toast } from "@/hooks/use-toast"

export function useAuthNotifications() {
  const { isSignedIn, user, isLoaded } = useUser()

  useEffect(() => {
    if (!isLoaded) return

    // Show welcome notification only on first sign in during session
    if (isSignedIn && user) {
      const welcomeKey = `welcome-shown-${user.id}`
      const hasShownWelcome = sessionStorage.getItem(welcomeKey)
      
      if (!hasShownWelcome) {
        // Small delay to ensure UI is ready
        setTimeout(() => {
          toast({
            title: "Welcome back!",
            description: `Hello ${user.firstName || user.fullName || 'there'}! You're successfully signed in.`,
          })
        }, 1000)
        sessionStorage.setItem(welcomeKey, 'true')
      }
    }
  }, [isSignedIn, user?.id, isLoaded])

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