import ProductCard from "@/components/product-card";
import ShopHeader from "@/components/shop-header";
import Pagination from "@/components/pagination";
import Features from "@/components/features";

export default function ShopHero() {
  const products = [
    {
      Id: 1,
      name: "Syltherine",
      description: "Stylish cafe chair",
      price: 2500000,
      image: "/images/img1.png",
      tag: "-30%" as const,
    },
    {
      Id: 2,
      name: "Leviosa",
      description: "Stylish cafe chair",
      price: 2500000,
      image: "/images/img2.png",
    },
    {
      Id: 3,
      name: "Lolito",
      description: "Luxury big sofa",
      price: 7000000,
      image: "/images/img3.png",
      tag: "-30%" as const,
    },
    {
      Id: 4,
      name: "Respira",
      description: "Outdoor bar table and stool",
      price: 500000,
      image: "/images/img4.jpeg",
      tag: "New" as const,
    },
    {
      Id: 5,
      name: "Syltherine",
      description: "Stylish cafe chair",
      price: 2500000,
      image: "/images/img1.png",
      tag: "-30%" as const,
    },
    {
      Id: 6,
      name: "Leviosa",
      description: "Stylish cafe chair",
      price: 2500000,
      image: "/images/img2.png",
    },
    {
      Id: 7,
      name: "Lolito",
      description: "Luxury big sofa",
      price: 7000000,
      image: "/images/img3.png",
      tag: "-30%" as const,
    },
    {
      Id: 8,
      name: "Respira",
      description: "Outdoor bar table and stool",
      price: 500000,
      image: "/images/img4.jpeg",
      tag: "New" as const,
    },
    {
      Id: 9,
      name: "Syltherine",
      description: "Stylish cafe chair",
      price: 2500000,
      image: "/images/img1.png",
      tag: "-30%" as const,
    },
    {
      Id: 10,
      name: "Leviosa",
      description: "Stylish cafe chair",
      price: 2500000,
      image: "/images/img2.png",
    },
    {
      Id: 11,
      name: "Lolito",
      description: "Luxury big sofa",
      price: 7000000,
      image: "/images/img3.png",
      tag: "-30%" as const,
    },
    {
      Id: 12,
      name: "Respira",
      description: "Outdoor bar table and stool",
      price: 500000,
      image: "/images/img4.jpeg",
      tag: "New" as const,
    },
    {
      Id: 13,
      name: "Syltherine",
      description: "Stylish cafe chair",
      price: 2500000,
      image: "/images/img1.png",
      tag: "-30%" as const,
    },
    {
      Id: 14,
      name: "Leviosa",
      description: "Stylish cafe chair",
      price: 2500000,
      image: "/images/img2.png",
    },
    {
      Id: 15,
      name: "Lolito",
      description: "Luxury big sofa",
      price: 7000000,
      image: "/images/img3.png",
      tag: "-30%" as const,
    },
    {
      Id: 16,
      name: "Respira",
      description: "Outdoor bar table and stool",
      price: 500000,
      image: "/images/img4.jpeg",
      tag: "New" as const,
    },

  
  ];

  return (
    <>
    <ShopHeader />
      <section className="py-12 lg:py-16">
        <div className="container mx-auto px-4 lg:px-20 text-center">
          {/* Responsive Grid for Products */}
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {products.map((product) => (
              <ProductCard key={product.name} {...product} />
            ))}
          </div>
        </div>
      </section>
      <div className="space-y-12">
      {/* Other shop content */}
      <Pagination currentPage={1} totalPages={3} />
      <Features />
      </div>
    
    </>
  );
}