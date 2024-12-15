
"use client"

import { useState } from "react"
import Image from "next/image"

interface ProductImage {
  src: string
  alt: string
}

const productImages: ProductImage[] = [
  { src: "/images/sofa-main.png", alt: "Asgaard sofa front view" },
  { src: "/images/sofa2.png", alt: "Asgaard sofa side view" },
  { src: "/images/sofa3.png", alt: "Asgaard sofa detail view" },
  { src: "/images/sofa4.png", alt: "Asgaard sofa back view" },
]

export function ProductGallery() {
  const [selectedImage, setSelectedImage] = useState(0)

  return (
    <div className="flex gap-4 ">
      <div className="flex flex-col gap-4">
        {productImages.map((image, index) => (
          <button
            key={index}
            onClick={() => setSelectedImage(index)}
            className={`relative bg-[#F9F1E7] h-20 w-20 overflow-hidden rounded-lg border-2 ${
              selectedImage === index ? "border-gray-900" : "border-transparent" 
            }`}
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              className=" object-cover"
            />
          </button>
        ))}
      </div>
      <div className="relative aspect-square w-full overflow-hidden rounded-lg bg-[#F9F1E7]">
        <Image
          src={productImages[selectedImage].src}
          alt={productImages[selectedImage].alt}
          fill
          className="object-cover"
        />
      </div>
    </div>
  )
}
