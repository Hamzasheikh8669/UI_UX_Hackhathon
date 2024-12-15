"use client";

import React, { useState, useEffect, useRef } from "react";
import { FiUser, FiSearch, FiHeart, FiShoppingCart } from "react-icons/fi";
import { AiOutlineMenu } from "react-icons/ai";
import { GrFormClose } from "react-icons/gr";
import ShoppingCart from "@/components/shopping-cart";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showCart, setShowCart] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const cartRef = useRef<HTMLDivElement>(null);

  // Toggle menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Close menu or cart when clicking outside
  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (
        menuRef.current && !menuRef.current.contains(event.target as Node)
      ) {
        setIsMenuOpen(false);
      }
      if (cartRef.current && !cartRef.current.contains(event.target as Node)) {
        setShowCart(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-4 flex justify-between items-center py-4">
        {/* Logo Section */}
        <div className="flex items-center">
          <div className="text-2xl font-bold text-black flex items-center">
            <Image 
              src="/images/logo.png" 
              width={50} 
              height={50} 
              alt="Furniro" 
              priority 
            />
            <span className="ml-2">Furniro</span>
          </div>
        </div>

        {/* Desktop Menu Items */}
        <ul className="hidden md:flex space-x-6 text-sm font-medium text-gray-700">
          <li className="hover:text-black cursor-pointer">
            <Link href="/">Home</Link>
          </li>
          <li className="hover:text-black cursor-pointer">
            <Link href="/shop">Shop</Link>
          </li>
          <li className="hover:text-black cursor-pointer">
            <Link href="/blog">Blog</Link>
          </li>
          <li className="hover:text-black cursor-pointer">
            <Link href="/contact">Contact</Link>
          </li>
        </ul>

        {/* Icons Section */}
        <div className="hidden md:flex items-center space-x-4 text-xl text-gray-700 hover:text-black cursor-pointer">
          <FiUser />
          <FiSearch />
          <FiHeart />
          <div>
            {/* Cart Icon */}
            <button
              onClick={() => setShowCart((prev) => !prev)}
              className="relative text-gray-900"
              aria-label="Toggle shopping cart"
            >
              <FiShoppingCart className="text-2xl" />
              {/* Optional Badge for Item Count */}
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full px-2 py-1">
                3
              </span>
            </button>

            {/* Conditionally Render the ShoppingCart Component */}
            {showCart && (
              <div
                ref={cartRef}
                className="fixed top-0 right-0 w-80 h-full bg-white shadow-lg z-50"
              >
                <ShoppingCart />
                <button
                  className="absolute top-2 right-2 text-gray-500 hover:text-gray-900"
                  onClick={() => setShowCart(false)}
                >
                  <GrFormClose className="text-2xl" />
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button
            type="button"
            onClick={toggleMenu}
            className="text-gray-700 focus:outline-none hover:text-black"
          >
            {isMenuOpen ? <GrFormClose size={24} /> : <AiOutlineMenu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div
          ref={menuRef}
          className="md:hidden bg-white shadow-lg"
        >
          <ul className="space-y-4 py-4 px-4 text-sm font-medium text-gray-700">
            <li className="hover:text-black cursor-pointer">
              <Link href="/">Home</Link>
            </li>
            <li className="hover:text-black cursor-pointer">
              <Link href="/shop">Shop</Link>
            </li>
            <li className="hover:text-black cursor-pointer">
              <Link href="/blog">Blog</Link>
            </li>
            <li className="hover:text-black cursor-pointer">
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
          <div className="flex justify-center space-x-6 py-4 text-xl text-gray-700 hover:text-black">
            <FiUser />
            <FiSearch />
            <FiHeart />
            <Link href="/components/shopping-cart">
              <FiShoppingCart />
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;