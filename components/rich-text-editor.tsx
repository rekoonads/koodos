"use client"

import { useEditor, EditorContent } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'

interface RichTextEditorProps {
  content?: string
  onChange?: (content: string) => void
  placeholder?: string
  className?: string
}

export default function RichTextEditor({ 
  content = '', 
  onChange, 
  placeholder = 'Start writing...',
  className = ''
}: RichTextEditorProps) {
  const editor = useEditor({
    extensions: [
      StarterKit.configure({
        underline: false,
      })
    ],
    content,
    onUpdate: ({ editor }) => {
      onChange?.(editor.getHTML())
    },
    editorProps: {
      attributes: {
        class: 'prose prose-sm sm:prose lg:prose-lg xl:prose-2xl mx-auto focus:outline-none min-h-[200px] p-4',
      },
    },
  })

  if (!editor) {
    return <div className="animate-pulse bg-gray-100 h-48 rounded-lg"></div>
  }

  return (
    <div className={`border border-gray-300 rounded-lg overflow-hidden ${className}`}>
      <div className="border-b border-gray-200 p-2 flex gap-1 bg-gray-50">
        <button
          onClick={() => editor.chain().focus().toggleBold().run()}
          className={`px-3 py-1 rounded text-sm font-medium ${
            editor.isActive('bold') ? 'bg-gray-800 text-white' : 'bg-white text-gray-700 hover:bg-gray-100'
          }`}
        >
          Bold
        </button>
        <button
          onClick={() => editor.chain().focus().toggleItalic().run()}
          className={`px-3 py-1 rounded text-sm font-medium ${
            editor.isActive('italic') ? 'bg-gray-800 text-white' : 'bg-white text-gray-700 hover:bg-gray-100'
          }`}
        >
          Italic
        </button>
        <button
          onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
          className={`px-3 py-1 rounded text-sm font-medium ${
            editor.isActive('heading', { level: 2 }) ? 'bg-gray-800 text-white' : 'bg-white text-gray-700 hover:bg-gray-100'
          }`}
        >
          H2
        </button>
        <button
          onClick={() => editor.chain().focus().toggleBulletList().run()}
          className={`px-3 py-1 rounded text-sm font-medium ${
            editor.isActive('bulletList') ? 'bg-gray-800 text-white' : 'bg-white text-gray-700 hover:bg-gray-100'
          }`}
        >
          List
        </button>
      </div>
      <EditorContent editor={editor} />
    </div>
  )
}