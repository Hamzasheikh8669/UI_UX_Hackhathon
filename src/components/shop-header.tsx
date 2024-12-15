"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ChevronRight, SlidersHorizontal, Grid, List } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ShopHeader() {
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const totalItems = 32;
  const itemsPerPage = 16;
  const currentPage = 1;

  return (
    <div>
      {/* Hero Section with Breadcrumb */}
      <div className="relative h-64 bg-[#F9F1E7] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <Image
          src="/images/shop.png" // Correct src for static image in public folder
          alt="Shop Hero"
          layout="fill"
          objectFit="cover"
          className="opacity-50"
          priority
        />

        {/* Overlay Content */}
        <div className="relative text-center space-y-4">
          <h1 className="text-4xl font-medium text-gray-900">Shop</h1>
          <nav className="flex items-center justify-center space-x-2 text-sm">
            <Link href="/" className="text-gray-600 hover:text-gray-900">
              Home
            </Link>
            <ChevronRight className="h-4 w-4 text-gray-400" />
            <span className="text-gray-900">Shop</span>
          </nav>
        </div>
      </div>

      {/* Filter Bar */}
      <div className="border-b bg-[#F9F1E7]">
        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-wrap items-center justify-between gap-4">
            {/* Left Section: Filter and View Mode */}
            <div className="flex items-center space-x-4">
              <Button variant="ghost" className="flex items-center space-x-2">
                <SlidersHorizontal className="h-4 w-4" />
                <span>Filter</span>
              </Button>
              <div className="hidden sm:flex items-center space-x-2">
                <Button
                  variant={viewMode === "grid" ? "default" : "ghost"}
                  onClick={() => setViewMode("grid")}
                >
                  <Grid className="h-4 w-4" />
                </Button>
                <Button
                variant={viewMode === "list" ? "default" : "ghost"}
                  onClick={() => setViewMode("list")}
                >
                  <List className="h-4 w-4" />
                </Button>
              </div>
              <p className="text-sm text-gray-600">
                Showing {(currentPage - 1) * itemsPerPage + 1}-
                {Math.min(currentPage * itemsPerPage, totalItems)} of {totalItems} results
              </p>
            </div>

            {/* Right Section: Pagination and Sorting */}
            <div className="flex items-center space-x-4">
              {/* Items Per Page Selector */}
              <div className="flex items-center space-x-2">
                <span className="text-sm text-gray-600">Show</span>
              </div>

              {/* Sorting Selector */}
              <div className="flex items-center space-x-2">
                <span className="text-sm text-gray-600">Sort by</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}