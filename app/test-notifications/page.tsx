"use client"

import { toast } from "@/hooks/use-toast"
import { Button } from "@/components/ui/button"

export default function TestNotifications() {
  const showSuccessToast = () => {
    toast({
      variant: "success",
      title: "Success!",
      description: "This is a success notification that works on mobile and desktop.",
    })
  }

  const showDefaultToast = () => {
    toast({
      title: "Information",
      description: "This is a default notification with responsive design.",
    })
  }

  const showErrorToast = () => {
    toast({
      variant: "destructive",
      title: "Error occurred",
      description: "This is an error notification that adapts to screen size.",
    })
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6">Test Notifications</h1>
      <div className="space-y-4">
        <Button onClick={showSuccessToast} className="w-full sm:w-auto">
          Show Success Toast
        </Button>
        <Button onClick={showDefaultToast} variant="outline" className="w-full sm:w-auto">
          Show Default Toast
        </Button>
        <Button onClick={showErrorToast} variant="destructive" className="w-full sm:w-auto">
          Show Error Toast
        </Button>
      </div>
      <div className="mt-8 p-4 bg-gray-100 rounded-lg">
        <h2 className="font-semibold mb-2">Features implemented:</h2>
        <ul className="list-disc list-inside space-y-1 text-sm">
          <li>Dynamic notifications that only show when user is logged in</li>
          <li>Mobile-responsive notification dropdown</li>
          <li>Toast notifications for login/signup events</li>
          <li>Proper positioning and sizing for all screen sizes</li>
          <li>Auto-dismiss after 5 seconds</li>
          <li>Support for multiple notification types</li>
        </ul>
      </div>
    </div>
  )
}