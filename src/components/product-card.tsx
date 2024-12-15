
import Image from "next/image"
import { cn } from "@/lib/utils"

interface ProductCardProps {
  name: string
  description: string
  price: number
  image: string
  tag?: "New" | "Hot" | "-30%"
}

export default function ProductCard({ name, description, price, image, tag }: ProductCardProps) {
  return (
    <div className="group relative flex flex-col">
      <div className="relative aspect-square w-full overflow-hidden rounded-lg bg-gray-100">
        <Image
          src={image}
          alt={name}
          width={400}
          height={400}
          className="object-cover transition-transform duration-300 ease-in-out group-hover:scale-105"
        />
        {tag && (
          <div
            className={cn(
              "absolute right-4 top-4 rounded px-2 py-1 text-sm font-medium text-white",
              tag === "New" && "bg-teal-500",
              tag === "Hot" && "bg-red-500",
              tag === "-30%" && "bg-red-500"
            )}
          >
            {tag}
          </div>
        )}
      </div>
      <div className="mt-4 flex flex-col">
        <h3 className="text-lg font-medium text-gray-900">{name}</h3>
        <p className="mt-1 text-sm text-gray-500">{description}</p>
        <p className="mt-1 text-lg font-medium text-gray-900">Rp {price.toLocaleString()}</p>
      </div>
    </div>
  )
}
