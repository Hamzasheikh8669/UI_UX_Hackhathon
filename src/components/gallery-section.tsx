
import Image from "next/image";

const galleryImages = [
  {
    src: "/images/g1.png",
    alt: "Workspace setup with laptop and vintage radio",
    width: 800,
    height: 800,
    className: "col-span-2 row-span-2",
  },
  {
    src: "/images/g2.png",
    alt: "Minimalist dining area",
    width: 800,
    height: 1200,
    className: "col-span-2 row-span-3",
  },
  {
    src: "/images/g3.png",
    alt: "Modern bedroom",
    width: 800,
    height: 800,
    className: "col-span-2 row-span-2",
  },
  {
    src: "/images/g4.png",
    alt: "Sunny home office space",
    width: 800,
    height: 800,
    className: "col-span-2 row-span-2",
  },
  {
    src: "/images/g5.png",
    alt: "Vintage armchair",
    width: 400,
    height: 800,
    className: "col-span-1 row-span-2",
  },
  {
    src: "/images/g6.png",
    alt: "Decorative tables with plants",
    width: 400,
    height: 400,
    className: "col-span-1 row-span-1",
  },
  {
    src: "/images/g7.png",
    alt: "Small framed artwork",
    width: 400,
    height: 400,
    className: "col-span-1 row-span-1",
  },
  {
    src: "/images/g8.png",
    alt: "Kitchen backsplash detail",
    width: 400,
    height: 400,
    className: "col-span-1 row-span-1",
  },
];

export default function GallerySection() {
  return (
    <section className="py-16 lg:py-24 bg-gray-50">
      <div className="container mx-auto px-4 md:px-8">
        {/* Section Header */}
        <div className="mb-12 text-center">
          <h2 className="text-2xl font-medium text-gray-900 lg:text-3xl">
            Share your setup with
          </h2>
          <p className="mt-2 text-3xl font-bold text-gray-900 lg:text-4xl">
            #FuniroFurniture
          </p>
        </div>

        {/* Responsive Image Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 md:gap-6">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className={`relative overflow-hidden ${image.className}`}
            >
              <Image
                src={image.src}
                alt={image.alt}
                width={image.width}
                height={image.height}
                className="object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
