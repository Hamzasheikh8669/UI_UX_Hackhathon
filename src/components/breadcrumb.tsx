import Link from "next/link"
import { ChevronRight } from 'lucide-react'

export function Breadcrumb() {
  return (
    <div className="flex items-center space-x-2 bg-[#F9F1E7] px-4 py-3 text-sm md:px-6">
      <Link href="/" className="text-gray-600 hover:text-gray-900">
        Home
      </Link>
      <ChevronRight className="h-4 w-4 text-gray-400" />
      <Link href="/shop" className="text-gray-600 hover:text-gray-900">
        Shop
      </Link>
      <ChevronRight className="h-4 w-4 text-gray-400" />
      <span className="text-gray-900">Asgaard sofa</span>
    </div>
  )
}