import Image from "next/image"
import Link from "next/link"
import { Calendar, MessageCircle, User } from 'lucide-react'

interface BlogPostProps {
  title: string
  excerpt: string
  image: string
  date: string
  author: string
  comments: number
  slug: string
}

export function BlogPostCard({
  title,
  excerpt,
  image,
  date,
  author,
  comments,
  slug,
}: BlogPostProps) {
  return (
    <article className="space-y-4">
      <div className="relative aspect-[16/9] w-full overflow-hidden rounded-lg">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-300 hover:scale-105"
        />
      </div>
      <div className="space-y-2">
        <div className="flex items-center gap-4 text-sm text-gray-600">
          <div className="flex items-center gap-1">
            <User className="h-4 w-4" />
            <span>{author}</span>
          </div>
          <div className="flex items-center gap-1">
            <Calendar className="h-4 w-4" />
            <span>{date}</span>
          </div>
          <div className="flex items-center gap-1">
            <MessageCircle className="h-4 w-4" />
            <span>{comments}</span>
          </div>
        </div>
        <h2 className="text-xl font-medium">
          <Link href={`/blog/${slug}`} className="hover:text-[#B88E2F]">
            {title}
          </Link>
        </h2>
        <p className="text-gray-600">{excerpt}</p>
        <Link
          href={`/blog/${slug}`}
          className="inline-block text-sm font-medium text-[#B88E2F] hover:underline"
        >
          Read more
        </Link>
      </div>
    </article>
  )
}