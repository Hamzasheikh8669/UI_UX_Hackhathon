
"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@radix-ui/react-select";

interface FormData {
  firstName: string;
  lastName: string;
  companyName: string;
  country: string;
  streetAddress: string;
  townCity: string;
  province: string;
  zipCode: string;
  phone: string;
  email: string;
  additionalInfo: string;
  paymentMethod: "bank" | "cash";
}

export default function CheckoutForm() {
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    companyName: "",
    country: "",
    streetAddress: "",
    townCity: "",
    province: "",
    zipCode: "",
    phone: "",
    email: "",
    additionalInfo: "",
    paymentMethod: "bank",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="grid gap-12 lg:grid-cols-[1fr_400px]">
        {/* Billing Details Form */}
        <div>
          <h2 className="mb-8 text-2xl font-medium">Billing details</h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid gap-6 sm:grid-cols-2">
              <div>
                <label className="mb-2 block text-sm">First Name</label>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  className="w-full rounded border border-gray-300 px-4 py-2 focus:border-[#B88E2F] focus:outline-none"
                  required
                />
              </div>
              <div>
                <label className="mb-2 block text-sm">Last Name</label>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  className="w-full rounded border border-gray-300 px-4 py-2 focus:border-[#B88E2F] focus:outline-none"
                  required
                />
              </div>
            </div>

            <div>
              <label className="mb-2 block text-sm">
                Company Name (Optional)
              </label>
              <input
                type="text"
                name="companyName"
                value={formData.companyName}
                onChange={handleChange}
                className="w-full rounded border border-gray-300 px-4 py-2 focus:border-[#B88E2F] focus:outline-none"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm">Country / Region</label>
              <Select
                name="country"
                onValueChange={(value) =>
                  handleChange({
                    target: { name: "country", value },
                  } as React.ChangeEvent<HTMLSelectElement>)
                }
              >
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select a country" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="sri-lanka">Sri Lanka</SelectItem>
                  <SelectItem value="india">India</SelectItem>
                  <SelectItem value="usa">United States</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <label className="mb-2 block text-sm">Street address</label>
              <input
                type="text"
                name="streetAddress"
                value={formData.streetAddress}
                onChange={handleChange}
                className="w-full rounded border border-gray-300 px-4 py-2 focus:border-[#B88E2F] focus:outline-none"
                required
              />
            </div>

            <div>
              <label className="mb-2 block text-sm">Town / City</label>
              <input
                type="text"
                name="townCity"
                value={formData.townCity}
                onChange={handleChange}
                className="w-full rounded border border-gray-300 px-4 py-2 focus:border-[#B88E2F] focus:outline-none"
                required
              />
            </div>

            <div>
              <label className="mb-2 block text-sm">Province</label>
              <Select
                name="province"
                onValueChange={(value) =>
                  handleChange({
                    target: { name: "province", value },
                  } as React.ChangeEvent<HTMLSelectElement>)
                }
              >
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select a province" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="western">Western Province</SelectItem>
                  <SelectItem value="central">Central Province</SelectItem>
                  <SelectItem value="southern">Southern Province</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <label className="mb-2 block text-sm">ZIP code</label>
              <input
                type="text"
                name="zipCode"
                value={formData.zipCode}
                onChange={handleChange}
                className="w-full rounded border border-gray-300 px-4 py-2 focus:border-[#B88E2F] focus:outline-none"
                required
              />
            </div>

            <div>
              <label className="mb-2 block text-sm">Phone</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full rounded border border-gray-300 px-4 py-2 focus:border-[#B88E2F] focus:outline-none"
                required
              />
            </div>

            <div>
              <label className="mb-2 block text-sm">Email address</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full rounded border border-gray-300 px-4 py-2 focus:border-[#B88E2F] focus:outline-none"
                required
              />
            </div>

            <div>
              <label className="mb-2 block text-sm">
                Additional information
              </label>
              <textarea
                name="additionalInfo"
                value={formData.additionalInfo}
                onChange={handleChange}
                rows={4}
                className="w-full rounded border border-gray-300 px-4 py-2 focus:border-[#B88E2F] focus:outline-none"
              />
            </div>
          </form>
        </div>

        {/* Order Summary */}
        <div>
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-sm">Product</span>
              <span className="text-sm">Subtotal</span>
            </div>
            <div className="flex justify-between items-center text-sm">
              <span>Asgaard sofa × 1</span>
              <span>Rs. 250,000.00</span>
            </div>
            <div className="flex justify-between items-center text-sm pt-4 border-t border-gray-200">
              <span>Subtotal</span>
              <span>Rs. 250,000.00</span>
            </div>
            <div className="flex justify-between items-center">
              <span>Total</span>
              <span className="text-[#B88E2F] font-medium">Rs. 250,000.00</span>
            </div>

            <div className="space-y-4 mt-8">
              <div className="flex items-start gap-3">
                <input
                  type="radio"
                  id="bank"
                  name="paymentMethod"
                  value="bank"
                  checked={formData.paymentMethod === "bank"}
                  onChange={handleChange}
                  className="mt-1"
                />
                <div>
                  <label htmlFor="bank" className="font-medium">
                    Direct Bank Transfer
                  </label>
                  <p className="text-sm text-gray-600 mt-1">
                    Make your payment directly into our bank account. Please use
                    your Order ID as the payment reference. Your order will not
                    be shipped until the funds have cleared in our account.
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <input
                  type="radio"
                  id="cash"
                  name="paymentMethod"
                  value="cash"
                  checked={formData.paymentMethod === "cash"}
                  onChange={handleChange}
                />
                <label htmlFor="cash">Cash On Delivery</label>
              </div>
            </div>

            <p className="text-sm text-gray-600 mt-4">
              Your personal data will be used to support your experience
              throughout this website, to manage access to your account, and for
              other purposes described in our{" "}
              <Link
                href="/privacy-policy"
                className="text-[#B88E2F] hover:underline"
              >
                privacy policy
              </Link>
              .
            </p>

            <button
              type="submit"
              onClick={handleSubmit}
              className="w-full mt-6 px-8 py-3 border border-gray-300 rounded text-sm hover:bg-gray-50 transition-colors"
            >
              Place order
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
