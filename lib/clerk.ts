import { auth, currentUser } from '@clerk/nextjs/server'

export { auth, currentUser }

export const getAuthUser = async () => {
  const user = await currentUser()
  return user
}

export const requireAuth = async () => {
  const { userId } = await auth()
  if (!userId) {
    throw new Error('Unauthorized')
  }
  return userId
}