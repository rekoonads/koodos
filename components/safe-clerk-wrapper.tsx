"use client"

import React, { type ReactNode } from "react"
import { useDemoUser } from "./clerk-error-boundary"
import { useUser } from "@clerk/nextjs"

interface SafeClerkWrapperProps {
  children: ReactNode
  fallback?: ReactNode
}

export function SafeClerkWrapper({ children, fallback }: SafeClerkWrapperProps) {
  const [hasClerkError, setHasClerkError] = React.useState(false)
  const { user: clerkUser } = useUser()
  const demoUser = useDemoUser()

  React.useEffect(() => {
    // Check if we're in demo mode (Clerk failed)
    const isDemoMode = document.querySelector('[data-demo-auth="true"]')
    if (isDemoMode) {
      setHasClerkError(true)
    }
  }, [])

  if (hasClerkError) {
    return fallback || <div>{children}</div>
  }

  try {
    return <>{children}</>
  } catch (error) {
    console.log("[v0] Clerk component error caught:", error)
    return fallback || <div>{children}</div>
  }
}

// Safe versions of Clerk hooks
export function useSafeUser() {
  const [hasClerkError, setHasClerkError] = React.useState(false)
  const { user: clerkUser } = useUser()
  const demoUser = useDemoUser()

  React.useEffect(() => {
    const isDemoMode = document.querySelector('[data-demo-auth="true"]')
    if (isDemoMode) {
      setHasClerkError(true)
    }
  }, [])

  if (hasClerkError) {
    return { user: demoUser.user, isSignedIn: demoUser.isSignedIn }
  }

  return { user: clerkUser, isSignedIn: !!clerkUser }
}
