"use client"

import { useState } from "react"
import Link from "next/link"

export default function Footer() {
  const [email, setEmail] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle newsletter subscription
    console.log("Subscribing email:", email)
    setEmail("")
  }

  return (
    <footer className="border-t border-gray-200 py-16">
      <div className="container mx-auto px-4">
        <div className="grid gap-x-8 gap-y-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Funiro Column */}
          <div className="space-y-6">
            <h2 className="text-3xl font-bold">Funiro.</h2>
            <address className="not-italic text-base text-gray-600 leading-relaxed">
              400 University Drive Suite 200 Coral<br />Gables,<br />FL 33134 USA
            </address>
          </div>

          {/* Links Column */}
          <div className="space-y-6">
            <h3 className="text-base font-medium text-gray-500">Links</h3>
            <nav className="flex flex-col space-y-4">
              <Link href="#" className="text-base text-gray-600 hover:text-gray-900">Home</Link>
              <Link href="#" className="text-base text-gray-600 hover:text-gray-900">Shop</Link>
              <Link href="#" className="text-base text-gray-600 hover:text-gray-900">About</Link>
              <Link href="#" className="text-base text-gray-600 hover:text-gray-900">Contact</Link>
            </nav>
          </div>

          {/* Help Column */}
          <div className="space-y-6">
            <h3 className="text-base font-medium text-gray-500">Help</h3>
            <nav className="flex flex-col space-y-4">
              <Link href="#" className="text-base text-gray-600 hover:text-gray-900">Payment Options</Link>
              <Link href="#" className="text-base text-gray-600 hover:text-gray-900">Returns</Link>
              <Link href="#" className="text-base text-gray-600 hover:text-gray-900">Privacy Policies</Link>
            </nav>
          </div>

          {/* Newsletter Column */}
          <div className="space-y-6">
            <h3 className="text-base font-medium text-gray-500">Newsletter</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="flex flex-col space-y-2">
                <input
                  type="email"
                  placeholder="Enter Your Email Address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="border-b border-gray-300 pb-2 text-base placeholder-gray-500 focus:border-gray-900 focus:outline-none"
                  required
                />
                <button
                  type="submit"
                  className="self-start text-base font-medium text-gray-900 hover:text-gray-700"
                >
                  SUBSCRIBE
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-16 pt-8 border-t border-gray-200">
          <p className="text-base text-gray-600">2023 furino. All rights reserved</p>
        </div>
      </div>
    </footer>
  )
}