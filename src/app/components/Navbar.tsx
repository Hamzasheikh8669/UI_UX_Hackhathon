"use client";

import { useState } from "react";
import { Icon } from "@iconify/react";
import Link from "next/link";
import Image from "next/image";

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="w-full py-[30px] px-[20px] md:pl-[54px] md:pr-[100px] bg-white">
      <header className="flex justify-between items-center mx-auto h-fit">
        {/* Logo Section */}
        <div className="flex items-center">
          <Image
            src="/images/Meubel House_Logos-05.png"
            alt="logo"
            className="w-[50px] h-[32px]"
            width={100}
            height={100}
          />
          <h1 className="text-[24px] md:text-[34px] font-bold">Furniro</h1>
        </div>

        {/* Burger Icon */}
        <div
          className="flex flex-col justify-between w-8 h-6 cursor-pointer md:hidden"
          onClick={toggleMenu}
        >
        <span
          style={{
            transform: isOpen ? "rotate(45deg) translate(10px, 5px)" : "",
          }}
          className="h-[3px] w-[100%] bg-[#000] transition-all duration-[.3s]"
        ></span>
        <span
          style={{ opacity: isOpen ? 0 : 1 }}
          className="h-[3px] w-[100%] bg-[#000] transition-all duration-[.3s]"
        ></span>
        <span
          style={{ transform: isOpen ? "rotate(-45deg) translate(10px, -5px)" : "" }}
          className="h-[3px] w-[100%] bg-[#000] transition-all duration-[.3s]"
        ></span>
        </div>

        {/* Navigation Menu */}
        <nav
          className={`absolute md:relative left-0 w-full md:w-auto bg-white md:bg-transparent md:flex items-center ${
            isOpen ? "block" : "hidden"
          }`}
        >
          <ul className="flex flex-col md:flex-row md:gap-[75px] text-[16px] font-medium p-4 md:p-0">
            <li>
              <Link href="#" className="block py-2 md:py-0 hover:text-gray-500">
                Home
              </Link>
            </li>
            <li>
              <Link href="#" className="block py-2 md:py-0 hover:text-gray-500">
                Shop
              </Link>
            </li>
            <li>
              <Link href="#" className="block py-2 md:py-0 hover:text-gray-500">
                About
              </Link>
            </li>
            <li>
              <Link href="#" className="block py-2 md:py-0 hover:text-gray-500">
                Contact
              </Link>
            </li>
          </ul>
        </nav>

        {/* Icons Section */}
        <div className="hidden md:flex items-center gap-[45px]">
          <Link href="#">
            <Icon
              icon="mdi:account-alert-outline"
              className="w-7 h-7 text-black"
            />
          </Link>
          <Link href="#">
            <Icon icon="si:search-line" className="w-7 h-7 text-black" />
          </Link>
          <Link href="#">
            <Icon icon="solar:heart-linear" className="w-7 h-7 text-black" />
          </Link>
          <Link href="#">
            <Icon
              icon="streamline:shopping-cart-2"
              className="w-7 h-7 text-black"
            />
          </Link>
        </div>
      </header>
    </div>
  );
}