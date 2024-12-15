
import Image from "next/image";
// components/HeroSection.js
export default function HeroSection() {
  return (
    <section className="bg-white">
      <div className="relative overflow-x-hidden">
        {/* Container for the image */}
        <div className="relative w-full">
          <Image
            src="/images/home-hero.jpeg"
            alt="Furniture Collection"
            width={1440}
            height={100}
            loading="eager"
            className="w-full h-auto"
          />
        </div>

        {/* Left content */}
        <div className="heroText bg-[#FFF3E3] hidden md:block w-[34rem] absolute top-[25%] left-[50%] transform -translate-x-[50%] rounded-[6px] p-[4rem]">
          <p className="text-gray-500 uppercase font-medium text-sm mb-2">
            New Arrival
          </p>
          <h1 className="text-4xl font-bold text-[#B88E2F] mb-4">
            Discover Our <br /> New Collection
          </h1>
          <p className="text-gray-600 mb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus, luctus nec ullamcorper mattis.
          </p>
          <button className="px-6 py-2 bg-[#B88E2F] text-white font-semibold rounded">
            Buy Now
          </button>
        </div>

        {/* Mobile content */}
        <div className="md:hidden absolute bottom-[20%] left-1/2 transform -translate-x-1/2 w-full p-4 bg-[#FFF3E3] text-center rounded-lg">
          <p className="text-gray-500 uppercase font-medium text-sm mb-2">
            New Arrival
          </p>
          <h1 className="text-2xl font-bold text-[#B88E2F] mb-4">
            Discover Our <br /> New Collection
          </h1>
          <p className="text-gray-600 mb-6 text-sm">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus, luctus nec ullamcorper mattis.
          </p>
          <button className="px-6 py-2 bg-[#B88E2F] text-white font-semibold rounded">
            Buy Now
          </button>
        </div>
      </div>
    </section>
  );
}
