"use client"

import { useState } from "react"
import { useClerk } from "@clerk/nextjs"
import { Button } from "@/components/ui/button"
import { clearAuthCache } from "@/lib/auth-utils"
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog"

interface LogoutConfirmationProps {
  isOpen: boolean
  onClose: () => void
}

export function LogoutConfirmation({ isOpen, onClose }: LogoutConfirmationProps) {
  const { signOut } = useClerk()
  const [isLoading, setIsLoading] = useState(false)

  const handleLogout = async () => {
    setIsLoading(true)
    try {
      // Clear authentication cache first
      clearAuthCache()
      // Sign out from Clerk
      await signOut()
      onClose()
      // Force page reload to ensure clean state
      window.location.href = '/'
    } catch (error) {
      console.error("Logout error:", error)
      // Even if sign out fails, clear cache and redirect
      clearAuthCache()
      window.location.href = '/'
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <AlertDialog open={isOpen} onOpenChange={onClose}>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Are you sure you want to log out?</AlertDialogTitle>
          <AlertDialogDescription>
            You will be redirected to the login page.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel onClick={onClose}>Cancel</AlertDialogCancel>
          <AlertDialogAction onClick={handleLogout} disabled={isLoading}>
            {isLoading ? "Logging out..." : "Logout"}
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}