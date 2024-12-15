
"use client"

import Image from "next/image"
import Link from "next/link"
import { Star, ChevronDown } from 'lucide-react'

interface ComparisonSection {
  title: string
  specs: {
    label: string
    value1: string
    value2: string
  }[]
}

const comparisonData: ComparisonSection[] = [
  {
    title: "General",
    specs: [
      { label: "Style Package", value1: "1 (sectional sofa)", value2: "1 (head+table, 2 single)" },
      { label: "Model Number", value1: "7CH-Unassembled", value2: "7CH-Unassembled" },
      { label: "Secondary Material", value1: "Solid Wood", value2: "Solid Wood" },
      { label: "Configuration", value1: "L-shaped", value2: "L-shaped" },
      { label: "Upholstery Material", value1: "Fabric + Cotton", value2: "Fabric + Cotton" },
      { label: "Upholstery Color", value1: "Bright Grey & Iron", value2: "Bright Grey & Iron" },
    ]
  },
  {
    title: "Product",
    specs: [
      { label: "Filling Material", value1: "Foam", value2: "None" },
      { label: "Finish Type", value1: "Bright Grey & Iron", value2: "Bright Grey & Iron" },
      { label: "Adjustable Headrest", value1: "No", value2: "Yes" },
      { label: "Maximum Load Capacity", value1: "280 KG", value2: "300 KG" },
      { label: "Origin of Manufacture", value1: "India", value2: "India" },
    ]
  },
  {
    title: "Dimensions",
    specs: [
      { label: "Width", value1: "265.32 cm", value2: "265.32 cm" },
      { label: "Height", value1: "76 cm", value2: "76 cm" },
      { label: "Depth", value1: "167.38 cm", value2: "167.38 cm" },
      { label: "Weight", value1: "45 KG", value2: "45 KG" },
      { label: "Seat Height", value1: "40.52 cm", value2: "41.52 cm" },
      { label: "Leg Height", value1: "5.46 cm", value2: "5.46 cm" },
    ]
  },
  {
    title: "Warranty",
    specs: [
      { 
        label: "Warranty Summary", 
        value1: "1 Year Manufacturing Warranty", 
        value2: "1.2 Year Manufacturing Warranty" 
      },
      {
        label: "Warranty Service Type",
        value1: "For Warranty Claims or Any Product Related Issues Please Email at operations@trevifurniture.com",
        value2: "For Warranty Claims or Any Product Related Issues Please Email at support@xyz.com"
      },
      {
        label: "Covered in Warranty",
        value1: "Warranty Against Manufacturing Defect",
        value2: "Warranty of the product is limited to manufacturing defects only."
      },
      {
        label: "Not Covered in Warranty",
        value1: "The Warranty Does Not Cover Damages Due To Usage Of The Product Beyond Its Intended Use And Wear & Tear In The Natural Course Of Product Usage.",
        value2: "The Warranty Does Not Cover Damages Due To Usage Of The Product Beyond Its Intended Use And Wear & Tear In The Natural Course Of Product Usage."
      },
      {
        label: "Domestic Warranty",
        value1: "1 Year",
        value2: "3 Months"
      },
    ]
  }
]

export default function ProductComparison() {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Product Header Grid */}
      <div className="grid grid-cols-4 gap-8 mb-12">
        {/* Go to Product Column */}
        <div>
          <h2 className="text-2xl font-semibold mb-3 leading-tight">
            Go to Product page for more Products
          </h2>
          <Link 
            href="/products" 
            className="text-sm text-gray-500 hover:text-gray-700 border-b border-gray-500"
          >
            View More
          </Link>
        </div>

        {/* Asgaard Sofa Column */}
        <div className="space-y-4">
          <div className="relative aspect-[4/3] w-full bg-[#FFF9F1] rounded-lg overflow-hidden">
            <Image
              src="/images/sofa-main.png"
              alt="Asgaard Sofa"
              fill
              className="object-cover"
            />
          </div>
          <div>
            <h3 className="font-medium text-lg mb-1">Asgaard Sofa</h3>
            <p className="text-base mb-2">Rs. 250,000.00</p>
            <div className="flex items-center gap-1.5">
              <span className="font-medium">4.7</span>
              <div className="flex gap-0.5">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star
                    key={star}
                    className={`h-4 w-4 ${
                      star <= Math.floor(4.7) ? "fill-yellow-400 text-yellow-400" : "fill-gray-200 text-gray-200"
                    }`}
                  />
                ))}
              </div>
              <span className="text-sm text-gray-400">204 Review</span>
            </div>
          </div>
        </div>

        {/* Outdoor Sofa Set Column */}
        <div className="space-y-4">
          <div className="relative aspect-[4/3] w-full bg-[#FFF9F1] rounded-lg overflow-hidden">
            <Image
              src="/images/sofa1.png"
              alt="Outdoor Sofa Set"
              fill
              className="object-cover"
            />
          </div>
          <div>
            <h3 className="font-medium text-lg mb-1">Outdoor Sofa Set</h3>
            <p className="text-base mb-2">Rs. 224,000.00</p>
            <div className="flex items-center gap-1.5">
              <span className="font-medium">4.2</span>
              <div className="flex gap-0.5">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star
                    key={star}
                    className={`h-4 w-4 ${
                      star <= Math.floor(4.2) ? "fill-yellow-400 text-yellow-400" : "fill-gray-200 text-gray-200"
                    }`}
                  />
                ))}
              </div>
              <span className="text-sm text-gray-400">145 Review</span>
            </div>
          </div>
        </div>

        {/* Add A Product Column */}
        <div>
          <h3 className="text-2xl font-semibold mb-3 leading-tight">Add A Product</h3>
          <button className="w-full flex items-center justify-between px-4 py-2.5 bg-[#B88E2F] text-white rounded">
            <span className="text-sm font-medium">Choose a Product</span>
            <ChevronDown className="h-4 w-4" />
          </button>
        </div>
      </div>

      {/* Comparison Sections */}
      {comparisonData.map((section, sectionIndex) => (
        <div key={`section-${sectionIndex}`} className="mt-20 first:mt-12">
          <h4 className="font-semibold text-2xl text-[#000000] mb-8">{section.title}</h4>
          <div className="grid grid-cols-[1.2fr,1.4fr,1.4fr,1fr] gap-x-16">
            {/* Labels Column */}
            <div className="space-y-6">
              {section.specs.map((spec, specIndex) => (
                <div 
                  key={`label-${sectionIndex}-${specIndex}`} 
                  className="text-[#9F9F9F] text-base leading-normal"
                >
                  {spec.label}
                </div>
              ))}
            </div>

            {/* Product 1 Specs */}
            <div className="space-y-6">
              {section.specs.map((spec, specIndex) => (
                <div 
                  key={`spec1-${sectionIndex}-${specIndex}`} 
                  className="text-[#000000] text-base leading-normal"
                >
                  {spec.value1}
                </div>
              ))}
            </div>

            {/* Product 2 Specs */}
            <div className="space-y-6">
              {section.specs.map((spec, specIndex) => (
                <div 
                  key={`spec2-${sectionIndex}-${specIndex}`} 
                  className="text-[#000000] text-base leading-normal"
                >
                  {spec.value2}
                </div>
              ))}
            </div>

            {/* Empty Column */}
            <div></div>
          </div>
        </div>
      ))}

      {/* Add to Cart Buttons */}
      <div className="grid grid-cols-[1fr,1.5fr,1.5fr,1fr] gap-8 mt-16">
        <div></div>
        <button className="w-full bg-[#B88E2F] text-white py-3 px-4 rounded text-base font-bold hover:bg-[#A17D2A] transition-colors">
          Add To Cart
        </button>
        <button className="w-full bg-[#B88E2F] text-white py-3 px-4 rounded text-base font-bold hover:bg-[#A17D2A] transition-colors">
          Add To Cart
        </button>
        <div></div>
      </div>
    </div>
  )
}
