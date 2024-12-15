
"use client";

import Link from "next/link";
import Image from "next/image";
import { ChevronRight } from "lucide-react";
import Pagination from "@/components/pagination";
import Features from "@/components/features";
import { BlogPostCard } from "@/components/blog-post-card";
import { BlogSidebar } from "@/components/blog-sidebar";

const blogPosts = [
  {
    title: "Going all-in with millennial design",
    excerpt:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    image: "/images/blog1.jpeg",
    date: "15 Dec 2023",
    author: "Admin",
    comments: 3,
    slug: "millennial-design",
  },
  {
    title: "Exploring new ways of decorating",
    excerpt:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    image: "/images/blog2.jpeg",
    date: "12 Dec 2023",
    author: "Admin",
    comments: 4,
    slug: "new-decorating",
  },
  {
    title: "Handmade pieces that took time to make",
    excerpt:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    image: "/images/blog3.jpeg",
    date: "10 Dec 2023",
    author: "Admin",
    comments: 2,
    slug: "handmade-pieces",
  },
];

export default function Blog() {
  return (
    <div>
      {/* Hero Section with Breadcrumb */}
      <div className="relative h-64 bg-[#F9F1E7] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <Image
          src="/images/shop.png"
          alt="Shop Hero"
          layout="fill"
          objectFit="cover"
          className="opacity-50"
          priority
        />

        {/* Overlay Content */}
        <div className="  relative text-center space-y-4">
          <Image
            src="/images/logo.png"
            width={77}
            height={77}
            className="pt"
            alt="Furniro"
          />
          <h1 className="text-4xl font-medium text-gray-900">Blog</h1>
          <nav className="flex items-center justify-center space-x-2 text-sm">
            <Link href="/" className="text-gray-600 hover:text-gray-900">
              Home
            </Link>
            <ChevronRight className="h-4 w-4 text-gray-400" />
            <span className="text-gray-900">Blog</span>
          </nav>
        </div>
      </div>
      <div className="container mx-auto px-4 py-12">
        <div className="grid gap-12 lg:grid-cols-[1fr_300px]">
          <main className="space-y-12">
            {blogPosts.map((post, index) => (
              <BlogPostCard key={index} {...post} />
            ))}
          </main>
          <BlogSidebar />
        </div>
      </div>
      <div className="space-y-12">
        {/* Other shop content */}
        <Pagination currentPage={1} totalPages={3} />
        <Features />
      </div>
    </div>
  );
}
