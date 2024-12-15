
"use client"

import { useState } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from 'lucide-react'

const slides = [
  {
    title: "Inner Peace",
    image: "/images/room1.png",
  },
  {
    title: "Minimal Design",
    image: "/images/room2.png",
  },
  {
    title: "Modern Space",
    image: "/images/room3.png",
  },
]

export default function InspirationSection() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  return (
    <section className="py-12 lg:py-16">
      <div className="bg-[#FCF8F3] container px-4 md:px-6">
        <div className="grid gap-12 lg:grid-cols-2">
          <div className="flex flex-col justify-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              50+ Beautiful rooms inspiration
            </h2>
            <p className="mt-4 text-gray-500">
              Our designer already made a lot of beautiful prototype of rooms that inspire you
            </p>
            <button className="mt-8 inline-flex w-fit items-center justify-center rounded-md bg-[#B88E2F] px-8 py-2 text-sm font-medium text-white transition-colors hover:bg-[#A17D2A] focus:outline-none focus:ring-2 focus:ring-[#B88E2F] focus:ring-offset-2">
              Learn more
            </button>
          </div>
          <div className="relative">
            <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
              <Image
                src={slides[currentSlide].image}
                alt={slides[currentSlide].title}
                fill
                className="object-cover"
              />
              <div className="absolute bottom-6 left-6">
                <h3 className="text-xl font-bold text-white">{slides[currentSlide].title}</h3>
              </div>
            </div>
            <div className="absolute bottom-6 right-6 flex items-center gap-2">
              <button
                onClick={prevSlide}
                className="rounded-full bg-white p-2 text-gray-900 shadow-lg hover:bg-gray-100"
                aria-label="Previous slide"
              >
                <ChevronLeft className="h-6 w-6" />
              </button>
              <button
                onClick={nextSlide}
                className="rounded-full bg-white p-2 text-gray-900 shadow-lg hover:bg-gray-100"
                aria-label="Next slide"
              >
                <ChevronRight className="h-6 w-6" />
              </button>
            </div>
            <div className="absolute bottom-6 left-1/2 flex -translate-x-1/2 gap-2">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`h-2 w-2 rounded-full ${
                    currentSlide === index ? "bg-white" : "bg-white/50"
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
