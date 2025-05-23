import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import MainLayout from '../../app/components/layout/MainLayout';
import { STYLE_VARIANTS } from '../../types/references';
import { AwardsSkeleton } from '@/app/components/skeletons/AwardsSkeleton';

const AcrylicAwards: React.FC = () => {
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
      name: 'Modern Hexagon',
      image: '/images/awards/acrylic/1.jpg',
      description: 'Contemporary hexagonal design with LED base',
    },
    {
      id: 2,
      name: 'Frost Peak',
      image: '/images/awards/acrylic/2.jpg',
      description: 'Frosted acrylic with geometric patterns',
    },
    {
      id: 3,
      name: 'Rainbow Arc',
      image: '/images/awards/acrylic/3.jpg',
      description: 'Multi-colored acrylic with curved design',
    },
    {
      id: 4,
      name: 'Tech Cube',
      image: '/images/awards/acrylic/4.jpg',
      description: 'Clear acrylic cube with 3D etching',
    },
    {
      id: 5,
      name: 'Prism Tower',
      image: '/images/awards/acrylic/5.jpg',
      description: 'Layered acrylic with prismatic effect',
    },
    {
      id: 6,
      name: 'Digital Wave',
      image: '/images/awards/acrylic/6.jpg',
      description: 'Modern wave design with digital pattern',
    },
  ];

  return (
    <MainLayout
      title="Acrylic Awards & Trophies - Jao Plaque Awards"
      description="Explore our modern collection of acrylic awards and trophies. Contemporary designs that combine clarity with style for impressive recognition pieces."
    >
      {/* Hero Section */}
      <section className="bg-muted dark:bg-gray-900">
        <div className={`${STYLE_VARIANTS.container.default} py-12 sm:py-16`}>
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <h1 className="text-4xl font-extrabold text-gray-900 dark:text-white sm:text-5xl">
                Acrylic Awards & Trophies
              </h1>
              <p className="mt-4 text-xl text-gray-500 dark:text-gray-300 max-w-3xl mx-auto">
                Contemporary acrylic awards that blend modern aesthetics with crystal-clear quality. 
                Perfect for corporate recognition, sports achievements, and special occasions.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Features Section */}
      <section className="py-12 bg-background dark:bg-gray-800">
        <div className={STYLE_VARIANTS.container.default}>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <div className="bg-muted dark:bg-gray-700 p-6 rounded-lg">
              <div className="text-blue-600 dark:text-blue-400">
                <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="mt-4 text-lg font-medium text-gray-900 dark:text-white">Modern Aesthetics</h3>
              <p className="mt-2 text-base text-gray-500 dark:text-gray-300">
                Contemporary designs that make a bold statement.
              </p>
            </div>

            <div className="bg-muted dark:bg-gray-700 p-6 rounded-lg">
              <div className="text-blue-600 dark:text-blue-400">
                <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                </svg>
              </div>
              <h3 className="mt-4 text-lg font-medium text-gray-900 dark:text-white">Color Options</h3>
              <p className="mt-2 text-base text-gray-500 dark:text-gray-300">
                Available in clear, frosted, and vibrant colors.
              </p>
            </div>

            <div className="bg-muted dark:bg-gray-700 p-6 rounded-lg">
              <div className="text-blue-600 dark:text-blue-400">
                <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
                </svg>
              </div>
              <h3 className="mt-4 text-lg font-medium text-gray-900 dark:text-white">Custom Engraving</h3>
              <p className="mt-2 text-base text-gray-500 dark:text-gray-300">
                Precision laser engraving for perfect personalization.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      
      {/* Sample Designs Section */}
      <section className="py-12 bg-background dark:bg-gray-800">
        <div className={STYLE_VARIANTS.container.default}>
          <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white text-center mb-8">
            Contemporary Acrylic Collection
          </h2>
          <p className="text-lg text-gray-500 dark:text-gray-300 text-center mb-12 max-w-3xl mx-auto">
            Explore our innovative acrylic award designs, featuring modern aesthetics and creative use of light and transparency.
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
      <section className="bg-blue-700 dark:bg-blue-800">
        <div className={`${STYLE_VARIANTS.container.default} py-12 sm:py-16`}>
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
              Create Your Custom Acrylic Award
            </h2>
            <p className="mt-4 text-lg leading-6 text-blue-100">
              Let us help you design the perfect acrylic award that combines modern style with meaningful recognition.
            </p>
            <div className="mt-8">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-blue-700 dark:text-blue-900 bg-white hover:bg-blue-50 dark:hover:bg-gray-100"
              >
                Contact Us Today
              </Link>
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default AcrylicAwards; 