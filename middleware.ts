import { authMiddleware } from "@clerk/nextjs";

export default authMiddleware({
  publicRoutes: ["/", "/about", "/anime", "/careers", "/comics", "/cookies", "/cosplay", "/esports", "/features", "/gaming", "/guides", "/india", "/interviews", "/lists", "/mobile", "/more", "/news", "/nintendo-switch", "/opinions", "/pc", "/privacy", "/ps5", "/reviews", "/science", "/science-1", "/tech", "/terms", "/videos", "/wiki", "/xbox", "/article", "/post", "/api", "/test-notifications"]
});

export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};