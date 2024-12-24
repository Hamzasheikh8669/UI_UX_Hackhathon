
  import ProductCard from "./product-card";

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
  {
    name: "Grifo",
    description: "Night lamp",
    price: 1500000,
    image: "/images/img5.png",
  },
  {
    name: "Muggo",
    description: "Small mug",
    price: 150000,
    image: "/images/img6.png",
    tag: "New" as const,
  },
  {
    name: "Pingky",
    description: "Cute bed set",
    price: 7000000,
    image: "/images/img7.jpeg",
    tag: "-30%" as const,
  },
  {
    name: "Potty",
    description: "Minimalist flower pot",
    price: 500000,
    image: "/images/img8.jpeg",
    tag: "New" as const,
  },
];

export default function ProductSection() {
  return (
    <section className="py-12 lg:py-16">
      <div className="container mx-auto px-4 lg:px-20 text-center">
        {/* Title */}
        <h2 className="mb-8 text-2xl font-bold text-gray-900 lg:text-3xl">Our Products</h2>

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
  );
}
