"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"

type Theme = "light" | "dark" | "gaming"

interface ThemeContextType {
  theme: Theme
  setTheme: (theme: Theme) => void
  colors: {
    primary: string
    secondary: string
    accent: string
    background: string
    surface: string
    text: string
    textSecondary: string
  }
}

const themes = {
  light: {
    primary: "#6c47ff",
    secondary: "#8b5cf6",
    accent: "#ec4899",
    background: "#ffffff",
    surface: "#f8fafc",
    text: "#1f2937",
    textSecondary: "#6b7280",
  },
  dark: {
    primary: "#6c47ff",
    secondary: "#8b5cf6",
    accent: "#ec4899",
    background: "#0f172a",
    surface: "#1e293b",
    text: "#f1f5f9",
    textSecondary: "#94a3b8",
  },
  gaming: {
    primary: "#00ff88",
    secondary: "#ff0080",
    accent: "#00d4ff",
    background: "#0a0a0a",
    surface: "#1a1a1a",
    text: "#ffffff",
    textSecondary: "#a0a0a0",
  },
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<Theme>("dark")

  useEffect(() => {
    const savedTheme = localStorage.getItem("koodos-theme") as Theme
    if (savedTheme && themes[savedTheme]) {
      setTheme(savedTheme)
    }
  }, [])

  useEffect(() => {
    localStorage.setItem("koodos-theme", theme)

    // Apply CSS custom properties
    const root = document.documentElement
    const colors = themes[theme]

    Object.entries(colors).forEach(([key, value]) => {
      root.style.setProperty(`--color-${key}`, value)
    })
  }, [theme])

  return <ThemeContext.Provider value={{ theme, setTheme, colors: themes[theme] }}>{children}</ThemeContext.Provider>
}

export function useTheme() {
  const context = useContext(ThemeContext)
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider")
  }
  return context
}
