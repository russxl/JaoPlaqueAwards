import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import MainLayout from "../../app/components/layout/MainLayout";
import { STYLE_VARIANTS } from "../../types/references";
import { AwardsSkeleton } from "@/app/components/skeletons/AwardsSkeleton";

const WoodAwards: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <MainLayout>
        <AwardsSkeleton />
      </MainLayout>
    );
  }

  const sampleDesigns = [
    {
      id: 1,
      name: "Corporate Excellence",
      image: "/images/awards/wood/1.jpg",
      description: "Premium rosewood with gold inlay",
    },
    {
      id: 2,
      name: "Achievement Shield",
      image: "/images/awards/wood/2.jpg",
      description: "Walnut shield with metallic accents",
    },
    {
      id: 3,
      name: "Leadership Tower",
      image: "/images/awards/wood/3.jpg",
      description: "Maple wood with modern design",
    },
    {
      id: 4,
      name: "Recognition Flame",
      image: "/images/awards/wood/4.jpg",
      description: "Cherry wood with flame design",
    },
    {
      id: 5,
      name: "Service Award",
      image: "/images/awards/wood/5.jpg",
      description: "Oak with traditional styling",
    },
    {
      id: 6,
      name: "Innovation Star",
      image: "/images/awards/wood/6.jpg",
      description: "Mixed wood with star accent",
    },
  ];

  return (
    <MainLayout
      title="Wood Awards & Plaques - Jao Plaque Awards"
      description="Discover our collection of premium wooden awards and plaques. Handcrafted from the finest materials for lasting recognition."
    >
      {/* Hero Section */}
      <section className="bg-muted dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <h1 className="text-4xl font-extrabold text-gray-900 dark:text-white sm:text-5xl">
                Wood Awards & Plaques
              </h1>
              <p className="mt-4 text-xl text-gray-500 dark:text-gray-300 max-w-3xl mx-auto">
                Timeless elegance crafted from premium hardwoods. Our wooden
                awards combine traditional craftsmanship with modern design.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Sample Designs Section */}
      <section className="py-12 bg-background dark:bg-gray-800">
        <div className={STYLE_VARIANTS.container.default}>
          <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white text-center mb-8">
            Sample Designs
          </h2>
          <p className="text-lg text-gray-500 dark:text-gray-300 text-center mb-12 max-w-3xl mx-auto">
            Explore our collection of handcrafted wooden awards, each piece
            showcasing the natural beauty and warmth of premium hardwoods.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {sampleDesigns.map((design) => (
              <div key={design.id} className="group relative">
                <div className="relative h-96 w-full overflow-hidden rounded-lg bg-background dark:bg-gray-700">
                  <Image
                    src={design.image}
                    alt={design.name}
                    fill
                    className="object-cover object-center group-hover:opacity-75 transition-opacity duration-300"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-6">
                    <h3 className="text-xl font-semibold text-white">
                      {design.name}
                    </h3>
                    <p className="mt-2 text-sm text-gray-200">
                      {design.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-400"
            >
              Request Custom Design
            </Link>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-blue-700">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
              Ready to Create Your Custom Wood Award?
            </h2>
            <p className="mt-4 text-xl text-blue-100">
              Contact us today to discuss your requirements and get a
              personalized quote.
            </p>
            <div className="mt-8">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-blue-700 bg-white hover:bg-blue-50"
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default WoodAwards;
