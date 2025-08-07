import { createClient } from "@sanity/client"
import imageUrlBuilder from "@sanity/image-url"

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "your-project-id",
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
  useCdn: true,
  apiVersion: "2023-05-03",
})

const builder = imageUrlBuilder(client)

export const urlFor = (source: any) => builder.image(source)

// GROQ queries
export const queries = {
  allArticles: `*[_type == "article"] | order(publishedAt desc) {
    _id,
    title,
    slug,
    excerpt,
    mainImage,
    category,
    author->{name, image},
    publishedAt,
    readTime
  }`,

  articleBySlug: `*[_type == "article" && slug.current == $slug][0] {
    _id,
    title,
    slug,
    excerpt,
    mainImage,
    category,
    author->{name, image, bio},
    publishedAt,
    readTime,
    body,
    tags
  }`,

  articlesByCategory: `*[_type == "article" && category == $category] | order(publishedAt desc) {
    _id,
    title,
    slug,
    excerpt,
    mainImage,
    category,
    author->{name, image},
    publishedAt,
    readTime
  }`,

  featuredArticles: `*[_type == "article" && featured == true] | order(publishedAt desc)[0...3] {
    _id,
    title,
    slug,
    excerpt,
    mainImage,
    category,
    gradient
  }`,
}
