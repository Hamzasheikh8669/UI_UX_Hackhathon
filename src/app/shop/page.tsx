import ProductCard from "@/components/product-card";
import ShopHeader from "@/components/shop-header";
import Pagination from "@/components/pagination";
import Features from "@/components/features";

export default function ShopHero() {
  const products = [
    {
      id: 1, // Changed 'Id' to 'id' to follow standard naming convention
      name: "Syltherine",
      description: "Stylish cafe chair",
      price: 2500000,
      image: "/images/img1.png",
      tag: "-30%",
    },
    {
      id: 2,
      name: "Leviosa",
      description: "Stylish cafe chair",
      price: 2500000,
      image: "/images/img2.png",
    },
    {
      id: 3,
      name: "Lolito",
      description: "Luxury big sofa",
      price: 7000000,
      image: "/images/img3.png",
      tag: "-30%",
    },
    {
      id: 4,
      name: "Respira",
      description: "Outdoor bar table and stool",
      price: 500000,
      image: "/images/img4.jpeg",
      tag: "New",
    },
    {
      id: 5,
      name: "Syltherine",
      description: "Stylish cafe chair",
      price: 2500000,
      image: "/images/img1.png",
      tag: "-30%",
    },
    {
      id: 6,
      name: "Leviosa",
      description: "Stylish cafe chair",
      price: 2500000,
      image: "/images/img2.png",
    },
    {
      id: 7,
      name: "Lolito",
      description: "Luxury big sofa",
      price: 7000000,
      image: "/images/img3.png",
      tag: "-30%",
    },
    {
      id: 8,
      name: "Respira",
      description: "Outdoor bar table and stool",
      price: 500000,
      image: "/images/img4.jpeg",
      tag: "New",
    },
    {
      id: 9,
      name: "Syltherine",
      description: "Stylish cafe chair",
      price: 2500000,
      image: "/images/img1.png",
      tag: "-30%",
    },
    {
      id: 10,
      name: "Leviosa",
      description: "Stylish cafe chair",
      price: 2500000,
      image: "/images/img2.png",
    },
    {
      id: 11,
      name: "Lolito",
      description: "Luxury big sofa",
      price: 7000000,
      image: "/images/img3.png",
      tag: "-30%",
    },
    {
      id: 12,
      name: "Respira",
      description: "Outdoor bar table and stool",
      price: 500000,
      image: "/images/img4.jpeg",
      tag: "New",
    },
    {
      id: 13,
      name: "Syltherine",
      description: "Stylish cafe chair",
      price: 2500000,
      image: "/images/img1.png",
      tag: "-30%",
    },
    {
      id: 14,
      name: "Leviosa",
      description: "Stylish cafe chair",
      price: 2500000,
      image: "/images/img2.png",
    },
    {
      id: 15,
      name: "Lolito",
      description: "Luxury big sofa",
      price: 7000000,
      image: "/images/img3.png",
      tag: "-30%",
    },
    {
      id: 16,
      name: "Respira",
      description: "Outdoor bar table and stool",
      price: 500000,
      image: "/images/img4.jpeg",
      tag: "New",
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
              <ProductCard key={product.id} {...product} />
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
