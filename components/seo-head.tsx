"use client"

import { useEffect, useState } from 'react'
import Head from 'next/head'

interface SeoHeadProps {
  slug: string
  fallback?: {
    title?: string
    description?: string
  }
}

export function SeoHead({ slug, fallback }: SeoHeadProps) {
  const [meta, setMeta] = useState(null)

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/seo/meta/${slug}`)
      .then(res => res.json())
      .then(data => setMeta(data))
      .catch(() => setMeta(fallback))
  }, [slug, fallback])

  if (!meta) return null

  return (
    <Head>
      <title>{meta.title}</title>
      <meta name="description" content={meta.meta_description} />
      {meta.keywords?.length > 0 && (
        <meta name="keywords" content={meta.keywords.join(', ')} />
      )}
      <meta property="og:title" content={meta.title} />
      <meta property="og:description" content={meta.meta_description} />
      <meta name="twitter:title" content={meta.title} />
      <meta name="twitter:description" content={meta.meta_description} />
    </Head>
  )
}