import { createClient } from "@supabase/supabase-js"

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// Real-time subscriptions for live features
export function subscribeToComments(
  contentId: string,
  contentType: "article" | "review",
  callback: (payload: any) => void,
) {
  return supabase
    .channel(`comments-${contentType}-${contentId}`)
    .on(
      "postgres_changes",
      {
        event: "*",
        schema: "public",
        table: "comments",
        filter: `${contentType}Id=eq.${contentId}`,
      },
      callback,
    )
    .subscribe()
}

export function subscribeToLikes(
  contentId: string,
  contentType: "article" | "review",
  callback: (payload: any) => void,
) {
  return supabase
    .channel(`likes-${contentType}-${contentId}`)
    .on(
      "postgres_changes",
      {
        event: "UPDATE",
        schema: "public",
        table: contentType === "article" ? "articles" : "reviews",
        filter: `id=eq.${contentId}`,
      },
      callback,
    )
    .subscribe()
}

// Analytics and metrics
export async function trackPageView(path: string, userId?: string, metadata?: Record<string, any>) {
  try {
    await supabase.from("page_views").insert({
      path,
      user_id: userId,
      metadata,
      timestamp: new Date().toISOString(),
    })
  } catch (error) {
    console.error("Error tracking page view:", error)
  }
}
