
import Image from "next/image";

// components/BrowseSection.js
export default function BrowseSection() {
  const categories = [
    { name: "Dining", img: "/images/dining.png" },
    { name: "Living", img: "/images/living.png" },
    { name: "Bedroom", img: "/images/bedroom.png" },
  ];

  return (
    <section className="bg-gray-100 py-12">
      <div className="container mx-auto px-4 lg:px-20 text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-2">Browse The Range</h2>
        <p className="text-gray-600 mb-10">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category, index) => (
            <div key={index} className="bg-white shadow overflow-hidden group">
              <Image
                src={category.img} // Make sure the path is correct
                alt={category.name}
                width={500} // Set a width for the image
                height={400} // Set a height for the image
                className="w-full h-64 object-cover rounded-lg group-hover:scale-105 transition-transform duration-300"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold text-gray-800">{category.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
