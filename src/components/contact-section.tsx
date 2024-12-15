"use client"

import { useState } from "react"
import { MapPin, Phone, Clock } from 'lucide-react'

interface FormData {
  name: string
  email: string
  subject: string
  message: string
}

export default function ContactSection() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log(formData)
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  return (
    <section className="py-16 lg:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-medium mb-2">Get In Touch With Us</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            For More Information About Our Product & Services. Please Feel Free To Drop Us
            An Email. Our Staff Always Be There To Help You Out. Do Not Hesitate!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <MapPin className="h-6 w-6 text-gray-600" />
              </div>
              <div>
                <h3 className="font-medium mb-1">Address</h3>
                <p className="text-gray-600">
                  235 5th St Avenue, New<br />
                  York NY10000, United<br />
                  States
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <Phone className="h-6 w-6 text-gray-600" />
              </div>
              <div>
                <h3 className="font-medium mb-1">Phone</h3>
                <p className="text-gray-600">
                  Mobile: +(84) 546-6789<br />
                  Hotline: +(84) 456-6789
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <Clock className="h-6 w-6 text-gray-600" />
              </div>
              <div>
                <h3 className="font-medium mb-1">Working Time</h3>
                <p className="text-gray-600">
                  Monday-Friday: 9:00 - 22:00<br />
                  Saturday-Sunday: 9:00 - 21:00
                </p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your name"
                className="w-full px-4 py-3 rounded border border-gray-300 focus:border-[#B88E2F] focus:outline-none"
                required
              />
            </div>
            <div>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email address"
                className="w-full px-4 py-3 rounded border border-gray-300 focus:border-[#B88E2F] focus:outline-none"
                required
              />
            </div>
            <div>
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="Subject"
                className="w-full px-4 py-3 rounded border border-gray-300 focus:border-[#B88E2F] focus:outline-none"
                required
              />
            </div>
            <div>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Message"
                rows={4}
                className="w-full px-4 py-3 rounded border border-gray-300 focus:border-[#B88E2F] focus:outline-none resize-none"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-[#B88E2F] text-white font-medium py-3 px-6 rounded hover:bg-[#A17D2A] transition-colors"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}