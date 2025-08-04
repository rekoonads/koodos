"use client"

import { useState, useEffect } from "react"
import { createClient } from "@/utils/supabase/client"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import RichTextEditor from "@/components/rich-text-editor"
import { useRouter } from "next/navigation"

interface Category {
  id: string
  name: string
  slug: string
}

export default function NewArticlePage() {
  const [title, setTitle] = useState("")
  const [excerpt, setExcerpt] = useState("")
  const [content, setContent] = useState("")
  const [categoryId, setCategoryId] = useState("")
  const [status, setStatus] = useState("draft")
  const [categories, setCategories] = useState<Category[]>([])
  const [loading, setLoading] = useState(false)
  const [saving, setSaving] = useState(false)
  const router = useRouter()

  useEffect(() => {
    fetchCategories()
  }, [])

  const fetchCategories = async () => {
    const supabase = createClient()
    const { data } = await supabase.from('categories').select('*').order('name')
    if (data) setCategories(data)
  }

  const handleSave = async (publishStatus: string) => {
    if (!title.trim()) {
      alert('Please enter a title')
      return
    }

    setSaving(true)
    
    try {
      const response = await fetch('/api/articles', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          title,
          excerpt,
          content,
          category_id: categoryId || null,
          status: publishStatus
        })
      })

      if (response.ok) {
        const { article } = await response.json()
        router.push('/admin/articles')
      } else {
        alert('Failed to save article')
      }
    } catch (error) {
      alert('Error saving article')
    } finally {
      setSaving(false)
    }
  }

  return (
    <div className="p-8 max-w-4xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-bold">Create New Article</h1>
        <p className="text-gray-600">Write and publish your content</p>
      </div>

      <div className="space-y-6">
        <Card>
          <CardHeader>
            <CardTitle>Article Details</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <Label htmlFor="title">Title</Label>
              <Input
                id="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Enter article title"
              />
            </div>

            <div>
              <Label htmlFor="excerpt">Excerpt</Label>
              <Input
                id="excerpt"
                value={excerpt}
                onChange={(e) => setExcerpt(e.target.value)}
                placeholder="Brief description of the article"
              />
            </div>

            <div>
              <Label htmlFor="category">Category</Label>
              <Select value={categoryId} onValueChange={setCategoryId}>
                <SelectTrigger>
                  <SelectValue placeholder="Select a category" />
                </SelectTrigger>
                <SelectContent>
                  {categories.map((category) => (
                    <SelectItem key={category.id} value={category.id}>
                      {category.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Content</CardTitle>
          </CardHeader>
          <CardContent>
            <RichTextEditor
              content={content}
              onChange={setContent}
              placeholder="Start writing your article..."
              className="min-h-[400px]"
            />
          </CardContent>
        </Card>

        <div className="flex justify-between">
          <Button
            variant="outline"
            onClick={() => router.back()}
            disabled={saving}
          >
            Cancel
          </Button>
          
          <div className="space-x-2">
            <Button
              variant="outline"
              onClick={() => handleSave('draft')}
              disabled={saving}
            >
              {saving ? 'Saving...' : 'Save as Draft'}
            </Button>
            <Button
              onClick={() => handleSave('published')}
              disabled={saving}
            >
              {saving ? 'Publishing...' : 'Publish'}
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}