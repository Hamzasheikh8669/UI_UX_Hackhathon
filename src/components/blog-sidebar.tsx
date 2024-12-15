
import Image from "next/image"
import Link from "next/link"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const categories = [
  { name: "Chairs", count: 3 },
  { name: "Design", count: 5 },
  { name: "Decorations", count: 7 },
  { name: "Furniture", count: 4 },
  { name: "Wood", count: 2 },
]

const recentPosts = [
  {
    title: "Going all-in with millennial design",
    image: "/images/blog-post1.jpeg",
    slug: "millennial-design",
  },
  {
    title: "Exploring new ways of decorating",
    image: "/images/blog-post2.jpeg",
    slug: "new-decorating",
  },
  {
    title: "Modern trends in furniture design",
    image: "/images/blog-post3.jpeg",
    slug: "modern-trends",
  },
  {
    title: "Creative coffee table designs",
    image: "/images/blog-post4.jpeg",
    slug: "coffee-table-designs",
  },
  {
    title: "Colorful office redesign",
    image: "/images/blog-post5.jpeg",
    slug: "colorful-office-redesign",
  },
]

export function BlogSidebar() {
  return (
    <aside className="space-y-8">
      <div>
        <h2 className="mb-4 text-xl font-medium">Categories</h2>
        <Accordion type="single" collapsible className="w-full">
          {categories.map((category, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-sm">
                <span className="flex-1 text-left">{category.name}</span>
                <span className="ml-2 text-gray-500">({category.count})</span>
              </AccordionTrigger>
              <AccordionContent>
                <Link
                  href={`/category/${category.name.toLowerCase()}`}
                  className="text-sm text-gray-600 hover:text-[#B88E2F]"
                >
                  View all posts in {category.name}
                </Link>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>

      <div>
        <h2 className="mb-4 text-xl font-medium">Recent Posts</h2>
        <div className="space-y-4">
          {recentPosts.map((post, index) => (
            <Link
              key={index}
              href={`/blog/${post.slug}`}
              className="flex items-start gap-3 group"
            >
              <div className="relative h-16 w-16 flex-shrink-0 overflow-hidden rounded">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-sm group-hover:text-[#B88E2F]">{post.title}</h3>
            </Link>
          ))}
        </div>
      </div>
    </aside>
  )
}
