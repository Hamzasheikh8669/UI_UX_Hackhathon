
"use client"

import { useState } from "react"
import { Star, Minus, Plus } from 'lucide-react'
import { FaLinkedin } from "react-icons/fa6";
import { IoLogoFacebook } from "react-icons/io5";
import { AiFillTwitterCircle } from "react-icons/ai";

import { Button } from "@/components/ui/button"

export function ProductInfo() {
  const [quantity, setQuantity] = useState(1)

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-medium">Asgaard sofa</h1>
        <p className="mt-2 text-2xl">Rs. 250,000.00</p>
      </div>

      <div className="flex items-center space-x-1">
        {[1, 2, 3, 4].map((_, i) => (
          <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
        ))}
        <Star className="h-4 w-4 fill-yellow-400/50 text-yellow-400" />
        <span className="ml-2 text-sm text-gray-500">5 Customer Reviews</span>
      </div>

      <p className="text-gray-600">
        Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced sound.
      </p>

      <div className="space-y-4">
        <div>
          <h3 className="mb-2 text-sm font-medium">Size</h3>
          <div className="flex space-x-2">
            {["L", "XL", "XS"].map((size) => (
              <Button key={size} variant="outline" size="sm">
                {size}
              </Button>
            ))}
          </div>
        </div>

        <div>
          <h3 className="mb-2 text-sm font-medium">Color</h3>
          <div className="flex space-x-2">
            <button className="h-8 w-8 rounded-full bg-purple-600" />
            <button className="h-8 w-8 rounded-full bg-black" />
            <button className="h-8 w-8 rounded-full bg-amber-800" />
          </div>
        </div>

        <div className="flex items-center space-x-4">
          <div className="flex items-center rounded border">
            <button
              onClick={() => setQuantity(Math.max(1, quantity - 1))}
              className="p-2 hover:bg-gray-100"
            >
              <Minus className="h-4 w-4" />
            </button>
            <span className="w-12 text-center">{quantity}</span>
            <button
              onClick={() => setQuantity(quantity + 1)}
              className="p-2 hover:bg-gray-100"
            >
              <Plus className="h-4 w-4" />
            </button>
          </div>
          <Button className="flex-1">Add To Cart</Button>
          <Button variant="outline">+ Compare</Button>
        </div>

        <div className="space-y-2 border-t pt-4">
          <p className="flex items-center text-sm text-gray-600">
            <span className="w-20 font-medium">SKU</span>
            <span>:</span>
            <span className="ml-2">SS001</span>
          </p>
          <p className="flex items-center text-sm text-gray-600">
            <span className="w-20 font-medium">Category</span>
            <span>:</span>
            <span className="ml-2">Sofas</span>
          </p>
          <p className="flex items-center text-sm text-gray-600">
            <span className="w-20 font-medium">Tags</span>
            <span>:</span>
            <span className="ml-2">Sofa, Chair, Home, Shop</span>
          </p>
          <p className="flex items-center text-sm text-gray-600">
            <span className="w-20 font-medium">Share</span>
            <span>:</span>
            <span className="ml-2 flex space-x-2">
              <IoLogoFacebook className="h-4 w-4" />
              <FaLinkedin className="h-4 w-4" />
              <AiFillTwitterCircle  className="h-4 w-4" />
            </span>
          </p>
        </div>
      </div>
    </div>
  )
}
