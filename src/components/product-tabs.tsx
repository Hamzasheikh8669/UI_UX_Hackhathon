
"use client"

import { useState } from "react"
import Image from "next/image"

const tabs = [
  {
    id: "description",
    label: "Description",
    content: (
      <div className="prose max-w-none">
        <p className="mb-6 text-gray-600">
          Embodying the raw, wayward spirit of rock &rsquo;n&lsquo; roll, the Kilburn portable active stereo speaker takes the unmistakable look and sound of Marshall, unplugs the chords, and takes the show on the road.
        </p>
        <p className="mb-6 text-gray-600">
          Weighing in under 7 pounds, the Kilburn is a lightweight piece of vintage styled engineering. Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced sound which boasts a clear midrange and extended highs for a sound that is both articulate and pronounced. The analogue knobs allow you to fine tune the controls to your personal preferences while the guitar-influenced leather strap enables easy and stylish travel.
        </p>
        <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2">
          <Image
            src="/images/sofa5.png"
            alt="Asgaard sofa detail 1"
            width={600}
            height={400}
            className="bg-[#F9F1E7] rounded-lg"
          />
          <Image
            src="/images/sofa6.png"
            alt="Asgaard sofa detail 2"
            width={600}
            height={400}
            className="bg-[#F9F1E7] rounded-lg"
          />
        </div>
      </div>
    ),
  },
  {
    id: "additional",
    label: "Additional Information",
    content: <div>Additional information content</div>,
  },
  {
    id: "reviews",
    label: "Reviews [5]",
    content: <div>Reviews content</div>,
  },
]

export function ProductTabs() {
  const [activeTab, setActiveTab] = useState("description")

  return (
    <div className="mt-16">
      <div className="border-b">
        <div className="flex space-x-8">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`border-b-2 pb-4 text-base font-medium ${
                activeTab === tab.id
                  ? "border-gray-900 text-gray-900"
                  : "border-transparent text-gray-600 hover:text-gray-900"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>
      <div className="py-8">
        {tabs.find((tab) => tab.id === activeTab)?.content}
      </div>
    </div>
  )
}
