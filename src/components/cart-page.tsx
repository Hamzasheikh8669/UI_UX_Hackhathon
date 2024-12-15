
"use client";

import { useState } from "react";
import Image from "next/image";
import { Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  image: string;
}

const initialCartItems: CartItem[] = [
  {
    id: "1",
    name: "Asgaard sofa",
    price: 250000.0,
    quantity: 1,
    image: "/images/sofa-main.png",
  },
];

export default function CartPage() {
  const [cartItems, setCartItems] = useState<CartItem[]>(initialCartItems);
  const router = useRouter();

  const updateQuantity = (id: string, quantity: number) => {
    setCartItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, quantity: Math.max(1, quantity) } : item
      )
    );
  };

  const removeItem = (id: string) => {
    setCartItems((items) => items.filter((item) => item.id !== id));
  };

  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
        {/* Cart Items Table */}
        <div className="lg:col-span-2">
          <div className="rounded-lg overflow-hidden">
            {/* Table Header */}
            <div className="hidden sm:grid grid-cols-12 gap-4 bg-[#F9F1E7] p-4 text-sm font-medium">
              <div className="col-span-6">Product</div>
              <div className="col-span-2">Price</div>
              <div className="col-span-2">Quantity</div>
              <div className="col-span-2">Subtotal</div>
            </div>

            {/* Table Body */}
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="grid grid-cols-1 sm:grid-cols-12 gap-4 p-4 items-center border-b"
              >
                <div className="col-span-6 flex items-center space-x-4 sm:flex-row">
                  <div className="relative h-20 w-20 flex-shrink-0 mx-auto sm:mx-0">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      className="object-cover rounded"
                    />
                  </div>
                  <span className="font-medium text-center sm:text-left">
                    {item.name}
                  </span>
                </div>
                <div className="col-span-2 hidden sm:block">
                  Rs. {item.price.toLocaleString()}
                </div>
                <div className="col-span-2">
                  <input
                    type="number"
                    value={item.quantity}
                    onChange={(e) =>
                      updateQuantity(item.id, parseInt(e.target.value))
                    }
                    min="1"
                    className="w-full px-2 py-1 border rounded text-center"
                  />
                </div>
                <div className="col-span-2 flex items-center justify-between sm:justify-center">
                  <span className="hidden sm:block">
                    Rs. {(item.price * item.quantity).toLocaleString()}
                  </span>
                  <button
                    onClick={() => removeItem(item.id)}
                    className="text-gray-400 hover:text-gray-600"
                  >
                    <Trash2 className="h-5 w-5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Cart Totals */}
        <div className="mt-8 lg:mt-0">
          <div className="bg-[#F9F1E7] rounded-lg p-6">
            <h2 className="text-2xl font-medium mb-6">Cart Totals</h2>
            <div className="space-y-4">
              <div className="flex justify-between border-b pb-4">
                <span>Subtotal</span>
                <span>Rs. {subtotal.toLocaleString()}</span>
              </div>
              <div className="flex justify-between font-medium">
                <span>Total</span>
                <span className="text-[#B88E2F]">
                  Rs. {subtotal.toLocaleString()}
                </span>
              </div>
              <div>
      <Button
        className="w-full mt-6 bg-white hover:bg-gray-50 text-gray-900 border border-gray-200"
        onClick={() => router.push("/checkout")}
      >
        Check Out
      </Button>
    </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
