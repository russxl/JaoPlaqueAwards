import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import MainLayout from '../../app/components/layout/MainLayout';
import { STYLE_VARIANTS } from '../../types/references';
import { AwardsSkeleton } from '@/app/components/skeletons/AwardsSkeleton';

const GlassAwards: React.FC = () => {
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
      name: 'Crystal Pinnacle',
      image: '/images/awards/glass/1.jpg',
      description: 'Clear crystal with geometric cuts',
    },
    {
      id: 2,
      name: 'Azure Wave',
      image: '/images/awards/glass/2.jpg',
      description: 'Blue-tinted glass with wave pattern',
    },
    {
      id: 3,
      name: 'Diamond Summit',
      image: '/images/awards/glass/3.jpg',
      description: 'Multi-faceted crystal peak design',
    },
    {
      id: 4,
      name: 'Celestial Star',
      image: '/images/awards/glass/4.jpg',
      description: 'Star-shaped crystal with etching',
    },
    {
      id: 5,
      name: 'Royal Column',
      image: '/images/awards/glass/5.jpg',
      description: 'Elegant crystal column with base',
    },
    {
      id: 6,
      name: 'Infinity Spiral',
      image: '/images/awards/glass/6.jpg',
      description: 'Spiral design with metallic accents',
    },
  ];

  return (
    <MainLayout
      title="Glass Awards & Trophies - Jao Plaque Awards"
      description="Discover our collection of premium glass awards and crystal trophies. Elegant designs that capture and reflect light for stunning recognition pieces."
    >
      {/* Hero Section */}
      <section className="bg-muted dark:bg-gray-900">
        <div className={`${STYLE_VARIANTS.container.default} py-12 sm:py-16`}>
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <h1 className="text-4xl font-extrabold text-gray-900 dark:text-white sm:text-5xl">
                Glass Awards & Trophies
              </h1>
              <p className="mt-4 text-xl text-gray-500 dark:text-gray-300 max-w-3xl mx-auto">
                Elegant crystal and glass awards that capture light and attention. Our glass collection 
                combines sophisticated design with premium materials for truly stunning recognition pieces.
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
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="mt-4 text-lg font-medium text-gray-900 dark:text-white">Crystal Clear Quality</h3>
              <p className="mt-2 text-base text-gray-500 dark:text-gray-300">
                Premium crystal glass with exceptional clarity and brilliance.
              </p>
            </div>

            <div className="bg-muted dark:bg-gray-700 p-6 rounded-lg">
              <div className="text-blue-600 dark:text-blue-400">
                <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
                </svg>
              </div>
              <h3 className="mt-4 text-lg font-medium text-gray-900 dark:text-white">Custom Designs</h3>
              <p className="mt-2 text-base text-gray-500 dark:text-gray-300">
                Personalized engravings and custom shapes available.
              </p>
            </div>

            <div className="bg-muted dark:bg-gray-700 p-6 rounded-lg">
              <div className="text-blue-600 dark:text-blue-400">
                <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
              </div>
              <h3 className="mt-4 text-lg font-medium text-gray-900 dark:text-white">Premium Finish</h3>
              <p className="mt-2 text-base text-gray-500 dark:text-gray-300">
                Expert polishing and finishing for maximum brilliance.
              </p>
            </div>
          </div>
        </div>
      </section>

   

      {/* Sample Designs Section */}
      <section className="py-12 bg-background dark:bg-gray-800">
        <div className={STYLE_VARIANTS.container.default}>
          <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white text-center mb-8">
            Crystal & Glass Showcase
          </h2>
          <p className="text-lg text-gray-500 dark:text-gray-300 text-center mb-12 max-w-3xl mx-auto">
            Discover our exquisite collection of crystal and glass awards, each piece designed to capture and reflect light in stunning ways.
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
      <section className="bg-blue-700 dark:bg-blue-800 mx-0 lg:mx-12">
        <div className={`${STYLE_VARIANTS.container.default} py-12 sm:py-16`}>
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
              Ready to Create Your Custom Glass Award?
            </h2>
            <p className="mt-4 text-lg leading-6 text-blue-100">
              Contact us today to discuss your design ideas and let us create a stunning glass award that perfectly captures your achievement.
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

export default GlassAwards; 