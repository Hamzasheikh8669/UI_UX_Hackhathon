
import { Trophy, Truck, Headphones } from 'lucide-react'
import { BsPatchCheck } from "react-icons/bs";


const features = [
  {
    icon: Trophy,
    title: "High Quality",
    description: "crafted from top materials",
  },
  {
    icon: BsPatchCheck,
    title: "Warranty Protection",
    description: "Over 2 years",
  },
  {
    icon: Truck,
    title: "Free Shipping",
    description: "Order over 150 $",
  },
  {
    icon: Headphones,
    title: "24 / 7 Support",
    description: "Dedicated support",
  },
]

export default function Features() {
  return (
    <div className="bg-[#F9F1E7] py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex items-center justify-center gap-4 text-center lg:text-left lg:justify-start"
            >
              <div className="flex h-12 w-12 shrink-0 items-center justify-center">
                <feature.icon className="h-8 w-8 text-gray-800" />
              </div>
              <div>
                <h3 className="text-lg font-medium text-gray-900">
                  {feature.title}
                </h3>
                <p className="mt-1 text-sm text-gray-600">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}