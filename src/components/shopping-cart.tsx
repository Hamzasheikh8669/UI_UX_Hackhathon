"use client"

import Image from "next/image"
import { Lock, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation"

interface CartItem {
  id: string
  name: string
  image: string
  quantity: number
  price: number
  productPageUrl: string // Product page URL for linking
}

const cartItems: CartItem[] = [
  {
    id: "1",
    name: "Asgaard sofa",
    image: "/images/sofa-main.png",
    quantity: 1,
    price: 250000.0,
    productPageUrl: "/products/asgaard-sofa",
  },
  {
    id: "2",
    name: "Casaliving Wood",
    image: "/images/cart2.jpeg",
    quantity: 1,
    price: 270000.0,
    productPageUrl: "", // Empty link handled gracefully
  },
]

export default function ShoppingCart1() {
  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  )
  const router = useRouter()

  const handleFirstProductClick = () => {
    const firstProduct = cartItems[0]
    if (firstProduct.productPageUrl) {
      router.push(firstProduct.productPageUrl)
    }
  }

  return (
    <div className="absolute top-12 right-0 z-50 w-80 sm:w-96 rounded-lg bg-white p-4 shadow-lg">
      <div className="mb-4 flex items-center justify-between">
        <h1 className="text-lg font-medium">Shopping Cart</h1>
        <Lock className="h-5 w-5 text-gray-400" />
      </div>

      <div className="divide-y">
        {cartItems.map((item, index) => (
          <div
            key={item.id}
            className={`flex items-center gap-4 py-4 ${
              index === 0 ? "cursor-pointer" : ""
            }`}
            onClick={index === 0 && item.productPageUrl ? handleFirstProductClick : undefined}
          >
            <div className="relative h-16 w-16 flex-shrink-0 overflow-hidden rounded-lg bg-[#F9F1E7]">
              <Image
                src={item.image}
                alt={item.name}
                fill
                className="object-cover"
                sizes="(max-width: 640px) 64px, 80px"
                priority
              />
            </div>
            <div className="flex flex-1 justify-between">
              <div>
                <h3 className="text-sm font-medium">{item.name}</h3>
                <p className="mt-1 text-xs text-gray-600">
                  {item.quantity} x{" "}
                  <span className="text-[#B88E2F]">
                    Rs. {item.price.toLocaleString()}
                  </span>
                </p>
              </div>
              <button className="text-gray-400 hover:text-gray-500">
                <X className="h-5 w-5" />
                <span className="sr-only">Remove item</span>
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-4 border-t pt-4">
        <div className="flex justify-between">
          <span className="font-medium">Subtotal</span>
          <span className="text-[#B88E2F]">
            Rs. {subtotal.toLocaleString()}
          </span>
        </div>
      </div>

      <div className="mt-4 grid grid-cols-1 gap-2">
        <Button
          variant="outline"
          className="w-full"
          onClick={() => router.push("/cart")}
        >
          Cart
        </Button>
        <Button
          variant="outline"
          className="w-full"
          onClick={() => router.push("/checkout")}
        >
          Checkout
        </Button>
        <Button
          variant="outline"
          className="w-full"
          onClick={() => router.push("/Comparison")}
        >
          Comparison
        </Button>
      </div>
    </div>
  )
}
