import { NextRequest, NextResponse } from 'next/server'
import { createClient } from '@/utils/supabase/server'
import { cookies } from 'next/headers'

export async function GET(request: NextRequest) {
  const cookieStore = await cookies()
  const supabase = createClient(cookieStore)
  
  const { searchParams } = new URL(request.url)
  const page = parseInt(searchParams.get('page') || '1')
  const limit = parseInt(searchParams.get('limit') || '10')
  const category = searchParams.get('category')
  const status = searchParams.get('status') || 'published'
  
  let query = supabase
    .from('articles')
    .select(`
      *,
      author:users(username, email),
      category:categories(name, slug),
      tags:article_tags(tag:tags(name, slug))
    `)
    .eq('status', status)
    .order('created_at', { ascending: false })
    .range((page - 1) * limit, page * limit - 1)

  if (category) {
    query = query.eq('categories.slug', category)
  }

  const { data: articles, error } = await query

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 })
  }

  return NextResponse.json({ articles, page, limit })
}

export async function POST(request: NextRequest) {
  const cookieStore = await cookies()
  const supabase = createClient(cookieStore)
  
  const { data: { user } } = await supabase.auth.getUser()
  
  if (!user) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  const body = await request.json()
  const { title, content, excerpt, category_id, tags, status = 'draft' } = body

  const slug = title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')

  const { data: article, error } = await supabase
    .from('articles')
    .insert({
      title,
      slug,
      content,
      excerpt,
      category_id,
      status,
      author_id: user.id
    })
    .select()
    .single()

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 })
  }

  return NextResponse.json({ article }, { status: 201 })
}