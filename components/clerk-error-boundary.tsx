"use client"

import React, { Component, type ReactNode } from "react"

interface Props {
  children: ReactNode
}

interface State {
  hasError: boolean
  error?: Error
}

class ClerkErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError(error: Error): State {
    if (
      error.message.includes("Production Keys are only allowed for domain") ||
      error.message.includes("API Error: The Request HTTP Origin header") ||
      error.message.includes("Clerk") ||
      error.message.includes("Authentication") ||
      error.message.includes("Session") ||
      error.name === "ClerkAPIResponseError" ||
      error.stack?.includes("@clerk")
    ) {
      return { hasError: true, error }
    }
    return { hasError: false }
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.log("[v0] Clerk authentication error caught:", error.message)
  }

  render() {
    if (this.state.hasError) {
      return <DemoAuthProvider>{this.props.children}</DemoAuthProvider>
    }

    return this.props.children
  }
}

function DemoAuthProvider({ children }: { children: ReactNode }) {
  const [isSignedIn, setIsSignedIn] = React.useState(false)
  const [user, setUser] = React.useState<any>(null)

  React.useEffect(() => {
    // Check for demo user in localStorage
    const demoUser = localStorage.getItem("demo-user")
    if (demoUser) {
      setUser(JSON.parse(demoUser))
      setIsSignedIn(true)
    }
  }, [])

  const signIn = () => {
    const demoUser = {
      id: "demo-user-1",
      firstName: "Demo",
      lastName: "User",
      fullName: "Demo User",
      username: "demo_gamer",
      emailAddresses: [{ emailAddress: "demo@koodos.in" }],
      imageUrl: "/gaming-journalist.png",
    }
    localStorage.setItem("demo-user", JSON.stringify(demoUser))
    setUser(demoUser)
    setIsSignedIn(true)
  }

  const signOut = () => {
    localStorage.removeItem("demo-user")
    setUser(null)
    setIsSignedIn(false)
  }

  const demoContext = {
    isSignedIn,
    user,
    signIn,
    signOut,
  }

  return (
    <div data-demo-auth="true">
      <DemoAuthContext.Provider value={demoContext}>{children}</DemoAuthContext.Provider>
    </div>
  )
}

const DemoAuthContext = React.createContext<any>(null)

export function DemoSignInButton({ children }: { children?: ReactNode }) {
  const context = React.useContext(DemoAuthContext)

  if (!context) {
    return (
      <button className="px-4 py-2 bg-white text-gray-800 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
        Sign In
      </button>
    )
  }

  return (
    <button
      onClick={context.signIn}
      className="px-4 py-2 bg-white text-gray-800 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
    >
      {children || "Sign In"}
    </button>
  )
}

export function DemoSignUpButton({ children }: { children?: ReactNode }) {
  const context = React.useContext(DemoAuthContext)

  if (!context) {
    return (
      <button className="px-4 py-2 border border-gray-300 text-gray-800 rounded-lg hover:bg-gray-50 transition-colors">
        Sign Up
      </button>
    )
  }

  return (
    <button
      onClick={context.signIn}
      className="px-4 py-2 border border-gray-300 text-gray-800 rounded-lg hover:bg-gray-50 transition-colors"
    >
      {children || "Sign Up"}
    </button>
  )
}

export function DemoUserButton() {
  const context = React.useContext(DemoAuthContext)

  if (!context || !context.isSignedIn) {
    return null
  }

  return (
    <div className="relative group">
      <button className="w-8 h-8 rounded-full overflow-hidden border-2 border-gray-300">
        <img
          src={context.user?.imageUrl || "/gaming-journalist.png"}
          alt="User"
          className="w-full h-full object-cover"
        />
      </button>
      <div className="absolute right-0 top-10 bg-white border border-gray-200 rounded-lg shadow-lg p-2 opacity-0 group-hover:opacity-100 transition-opacity z-50">
        <button onClick={context.signOut} className="px-3 py-1 text-sm text-red-600 hover:bg-red-50 rounded">
          Sign Out
        </button>
      </div>
    </div>
  )
}

export function useDemoUser() {
  const context = React.useContext(DemoAuthContext)

  if (!context) {
    return { isSignedIn: false, user: null }
  }

  return {
    isSignedIn: context.isSignedIn,
    user: context.user,
  }
}

export default ClerkErrorBoundary
