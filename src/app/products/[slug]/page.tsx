
import { Breadcrumb } from "@/components/breadcrumb";
import { ProductGallery } from "@/components/product-gallery";
import { ProductInfo } from "@/components/product-info";
import { ProductTabs } from "@/components/product-tabs";
import ProductCard from "@/components/product-card";

export default function ProductPage() {
  const products = [
    {
      name: "Syltherine",
      description: "Stylish cafe chair",
      price: 2500000,
      image: "/images/img1.png",
      tag: "-30%" as const,
    },
    {
      name: "Leviosa",
      description: "Stylish cafe chair",
      price: 2500000,
      image: "/images/img2.png",
    },
    {
      name: "Lolito",
      description: "Luxury big sofa",
      price: 7000000,
      image: "/images/img3.png",
      tag: "-30%" as const,
    },
    {
      name: "Respira",
      description: "Outdoor bar table and stool",
      price: 500000,
      image: "/images/img4.jpeg",
      tag: "New" as const,
    },
  ];

  return (
    <div>
      {/* Main Product Section */}
      <div className="min-h-screen bg-white">
        <Breadcrumb />
        <div className="container mx-auto px-4 py-8 md:px-6">
          <div className="grid gap-8 lg:grid-cols-2">
            <ProductGallery />
            <ProductInfo />
          </div>
          <ProductTabs />
        </div>
      </div>

      {/* Related Products Section */}
      <section className="py-12 lg:py-16 bg-gray-50">
        <div className="container mx-auto px-4 lg:px-20 text-center">
          {/* Title */}
          <h2 className="mb-8 text-2xl font-bold text-gray-900 lg:text-3xl">
            Related Products
          </h2>

          {/* Grid Layout */}
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {products.map((product) => (
              <ProductCard key={product.name} {...product} />
            ))}
          </div>

          {/* Show More Button */}
          <div className="mt-12 text-center">
            <button className="inline-flex items-center justify-center border border-[#B88E2F] bg-white px-8 py-2 text-sm font-medium text-[#B88E2F] transition-colors hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2">
              Show More
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
