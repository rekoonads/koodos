export async function getPageMeta(slug: string) {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/seo/meta/${slug}`)
    const data = await response.json()
    return {
      title: data.title,
      description: data.meta_description || data.current_meta,
      keywords: data.keywords?.join(', ')
    }
  } catch {
    return null
  }
}

export function generateMetaTags(meta: any) {
  return {
    title: meta?.title,
    description: meta?.description,
    keywords: meta?.keywords,
    openGraph: {
      title: meta?.title,
      description: meta?.description,
    },
    twitter: {
      title: meta?.title,
      description: meta?.description,
    }
  }
}