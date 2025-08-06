/**
 * Authentication utilities for handling login/logout states
 */

export const clearAuthCache = () => {
  if (typeof window !== 'undefined') {
    // Clear any cached authentication data
    localStorage.removeItem('clerk-db-jwt')
    localStorage.removeItem('__clerk_db_jwt')
    sessionStorage.clear()
    
    // Clear any cookies related to authentication
    document.cookie.split(";").forEach((c) => {
      document.cookie = c
        .replace(/^ +/, "")
        .replace(/=.*/, "=;expires=" + new Date().toUTCString() + ";path=/")
    })
  }
}

export const forceSignOut = async () => {
  clearAuthCache()
  // Reload the page to ensure clean state
  if (typeof window !== 'undefined') {
    window.location.href = '/'
  }
}