import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import MainLayout from '../../app/components/layout/MainLayout';
import { STYLE_VARIANTS } from '../../types/references';
import { AwardsSkeleton } from '@/app/components/skeletons/AwardsSkeleton';

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
  const awards = [
    {
      id: 1,
      name: 'Classic Mahogany Plaque',
      description: 'Traditional mahogany plaque with gold trim and customizable engraving.',
      image: '/images/awards/wood/mahogany-plaque.jpg',
      price: '$79.99',
      features: ['Premium mahogany wood', 'Gold or silver trim options', 'Custom size available'],
    },
    {
      id: 2,
      name: 'Executive Walnut Shield',
      description: 'Elegant walnut shield design perfect for corporate recognition.',
      image: '/images/awards/wood/walnut-shield.jpg',
      price: '$99.99',
      features: ['Rich walnut finish', 'Shield design', 'Metal accents'],
    },
    {
      id: 3,
      name: 'Modern Oak Display',
      description: 'Contemporary oak display with floating mount design.',
      image: '/images/awards/wood/oak-display.jpg',
      price: '$129.99',
      features: ['Solid oak construction', 'Floating mount', 'LED lighting option'],
    },
    // Add more awards as needed
  ];

  const sampleDesigns = [
    {
      id: 1,
      name: 'Corporate Excellence',
      image: '/images/awards/wood/samples/corporate-excellence.jpg',
      description: 'Premium rosewood with gold inlay',
    },
    {
      id: 2,
      name: 'Achievement Shield',
      image: '/images/awards/wood/samples/achievement-shield.jpg',
      description: 'Walnut shield with metallic accents',
    },
    {
      id: 3,
      name: 'Leadership Tower',
      image: '/images/awards/wood/samples/leadership-tower.jpg',
      description: 'Maple wood with modern design',
    },
    {
      id: 4,
      name: 'Recognition Flame',
      image: '/images/awards/wood/samples/recognition-flame.jpg',
      description: 'Cherry wood with flame design',
    },
    {
      id: 5,
      name: 'Service Award',
      image: '/images/awards/wood/samples/service-award.jpg',
      description: 'Oak with traditional styling',
    },
    {
      id: 6,
      name: 'Innovation Star',
      image: '/images/awards/wood/samples/innovation-star.jpg',
      description: 'Mixed wood with star accent',
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
                Timeless elegance crafted from premium hardwoods. Our wooden awards
                combine traditional craftsmanship with modern design.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 bg-background dark:bg-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <div className="bg-muted dark:bg-gray-700 p-6 rounded-lg">
              <div className="text-blue-600 dark:text-blue-400">
                <svg
                  className="h-8 w-8"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              <h3 className="mt-4 text-lg font-medium text-gray-900 dark:text-white">Premium Materials</h3>
              <p className="mt-2 text-base text-gray-500 dark:text-gray-300">
                Sourced from sustainable forests, our hardwoods are carefully selected for quality.
              </p>
            </div>
            <div className="bg-muted dark:bg-gray-700 p-6 rounded-lg">
              <div className="text-blue-600 dark:text-blue-400">
                <svg
                  className="h-8 w-8"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4"
                  />
                </svg>
              </div>
              <h3 className="mt-4 text-lg font-medium text-gray-900 dark:text-white">Expert Craftsmanship</h3>
              <p className="mt-2 text-base text-gray-500 dark:text-gray-300">
                Each piece is handcrafted by our skilled artisans with attention to detail.
              </p>
            </div>
            <div className="bg-muted dark:bg-gray-700 p-6 rounded-lg">
              <div className="text-blue-600 dark:text-blue-400">
                <svg
                  className="h-8 w-8"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
                  />
                </svg>
              </div>
              <h3 className="mt-4 text-lg font-medium text-gray-900 dark:text-white">Customization</h3>
              <p className="mt-2 text-base text-gray-500 dark:text-gray-300">
                Fully customizable designs to match your specific requirements.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-12 bg-muted dark:bg-gray-900">
        <div className={STYLE_VARIANTS.container.default}>
          <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white text-center mb-12">
            Featured Wood Awards
          </h2>
          <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3">
            {awards.map((award) => (
              <div key={award.id} className="group">
                <div className="bg-background dark:bg-gray-800 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300">
                  <div className="relative h-80">
                    <Image
                      src={award.image}
                      alt={award.name}
                      fill
                      className="object-cover object-center"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-medium text-gray-900 dark:text-white">{award.name}</h3>
                    <p className="mt-2 text-gray-500 dark:text-gray-300">{award.description}</p>
                    <div className="mt-4">
                      <span className="text-blue-600 dark:text-blue-400 font-medium">{award.price}</span>
                    </div>
                    <div className="mt-4 space-y-2">
                      {award.features.map((feature, index) => (
                        <div key={index} className="flex items-center text-sm text-gray-500 dark:text-gray-300">
                          <svg className="h-4 w-4 text-blue-600 dark:text-blue-400 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
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
            Explore our collection of handcrafted wooden awards, each piece showcasing the natural beauty and warmth of premium hardwoods.
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
                    <h3 className="text-xl font-semibold text-white">{design.name}</h3>
                    <p className="mt-2 text-sm text-gray-200">{design.description}</p>
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
              Contact us today to discuss your requirements and get a personalized quote.
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