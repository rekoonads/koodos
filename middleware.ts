import { authMiddleware } from '@clerk/nextjs'

export default authMiddleware({
  // Routes that can be accessed while signed out
  publicRoutes: [
    '/',
    '/about',
    '/anime',
    '/careers',
    '/comics',
    '/cookies',
    '/cosplay',
    '/esports',
    '/features',
    '/gaming',
    '/guides',
    '/india',
    '/interviews',
    '/lists',
    '/mobile',
    '/more',
    '/news',
    '/nintendo-switch',
    '/opinions',
    '/pc',
    '/privacy',
    '/ps5',
    '/reviews',
    '/science',
    '/science-1',
    '/tech',
    '/terms',
    '/videos',
    '/wiki',
    '/xbox',
    '/article/(.*)',
    '/post/(.*)',
    '/api/(.*)',
    '/test-notifications'
  ],
  // Routes that require authentication
  ignoredRoutes: [],
  // After sign in, redirect to home
  afterSignInUrl: '/',
  // After sign up, redirect to home
  afterSignUpUrl: '/'
})

export const config = {
  matcher: ['/((?!.+\\.[\\w]+$|_next).*)', '/', '/(api|trpc)(.*)'],
}