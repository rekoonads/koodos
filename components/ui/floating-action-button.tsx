"use client"

import type React from "react"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Plus, MessageCircle, Heart, Share2, Bookmark } from "lucide-react"

interface FloatingAction {
  icon: React.ComponentType<{ className?: string }>
  label: string
  onClick: () => void
  color?: string
}

export function FloatingActionButton() {
  const [isOpen, setIsOpen] = useState(false)

  const actions: FloatingAction[] = [
    {
      icon: MessageCircle,
      label: "Quick Comment",
      onClick: () => console.log("Quick comment"),
      color: "#3b82f6",
    },
    {
      icon: Heart,
      label: "Like",
      onClick: () => console.log("Like"),
      color: "#ef4444",
    },
    {
      icon: Share2,
      label: "Share",
      onClick: () => console.log("Share"),
      color: "#10b981",
    },
    {
      icon: Bookmark,
      label: "Bookmark",
      onClick: () => console.log("Bookmark"),
      color: "#f59e0b",
    },
  ]

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="flex flex-col gap-3 mb-3"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.2 }}
          >
            {actions.map((action, index) => (
              <motion.div
                key={action.label}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ delay: index * 0.05 }}
                className="flex items-center gap-3"
              >
                <span className="bg-gray-900 text-white px-3 py-1 rounded-lg text-sm whitespace-nowrap">
                  {action.label}
                </span>
                <Button
                  size="sm"
                  className="w-12 h-12 rounded-full shadow-lg"
                  style={{ backgroundColor: action.color }}
                  onClick={action.onClick}
                >
                  <action.icon className="w-5 h-5" />
                </Button>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
        <Button
          size="lg"
          className="w-14 h-14 rounded-full bg-purple-600 hover:bg-purple-700 shadow-lg"
          onClick={() => setIsOpen(!isOpen)}
        >
          <motion.div animate={{ rotate: isOpen ? 45 : 0 }} transition={{ duration: 0.2 }}>
            <Plus className="w-6 h-6" />
          </motion.div>
        </Button>
      </motion.div>
    </div>
  )
}
