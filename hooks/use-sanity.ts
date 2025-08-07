"use client"

import { useState, useEffect } from "react"
import { client, queries } from "@/lib/sanity"

export function useArticles(category?: string) {
  const [articles, setArticles] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    async function fetchArticles() {
      try {
        setLoading(true)
        const query = category ? queries.articlesByCategory : queries.allArticles
        const params = category ? { category } : {}
        const data = await client.fetch(query, params)
        setArticles(data)
      } catch (err: any) {
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }

    fetchArticles()
  }, [category])

  return { articles, loading, error }
}

export function useArticle(slug: string) {
  const [article, setArticle] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    async function fetchArticle() {
      try {
        setLoading(true)
        const data = await client.fetch(queries.articleBySlug, { slug })
        setArticle(data)
      } catch (err: any) {
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }

    if (slug) {
      fetchArticle()
    }
  }, [slug])

  return { article, loading, error }
}

export function useFeaturedArticles() {
  const [articles, setArticles] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    async function fetchFeaturedArticles() {
      try {
        setLoading(true)
        const data = await client.fetch(queries.featuredArticles)
        setArticles(data)
      } catch (err: any) {
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }

    fetchFeaturedArticles()
  }, [])

  return { articles, loading, error }
}
