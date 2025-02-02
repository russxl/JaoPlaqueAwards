import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import MainLayout from '../../components/layout/MainLayout';
import { STYLE_VARIANTS } from '../../types/references';
import { AwardsSkeleton } from '@/components/skeletons/AwardsSkeleton';

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

  const awards = [
    {
      id: 1,
      name: 'Crystal Peak Award',
      description: 'Elegant crystal glass award with a dramatic peak design and polished finish.',
      image: '/images/awards/glass/crystal-peak.jpg',
      price: '$149.99',
      features: ['Premium crystal glass', 'Polished finish', 'Custom engraving available', 'Presentation box included'],
    },
    {
      id: 2,
      name: 'Sapphire Wave Trophy',
      description: 'Stunning blue-tinted glass award with a flowing wave design.',
      image: '/images/awards/glass/sapphire-wave.jpg',
      price: '$199.99',
      features: ['Blue-tinted crystal', 'Wave design', 'LED base option', 'Deluxe gift box'],
    },
    {
      id: 3,
      name: 'Diamond Pinnacle',
      description: 'Premium diamond-cut glass award with multiple facets for maximum brilliance.',
      image: '/images/awards/glass/diamond-pinnacle.jpg',
      price: '$249.99',
      features: ['Diamond-cut edges', 'Multi-faceted design', 'Premium weight', 'Luxury packaging'],
    },
  ];

  const sampleDesigns = [
    {
      id: 1,
      name: 'Crystal Pinnacle',
      image: '/images/awards/glass/samples/crystal-pinnacle.jpg',
      description: 'Clear crystal with geometric cuts',
    },
    {
      id: 2,
      name: 'Azure Wave',
      image: '/images/awards/glass/samples/azure-wave.jpg',
      description: 'Blue-tinted glass with wave pattern',
    },
    {
      id: 3,
      name: 'Diamond Summit',
      image: '/images/awards/glass/samples/diamond-summit.jpg',
      description: 'Multi-faceted crystal peak design',
    },
    {
      id: 4,
      name: 'Celestial Star',
      image: '/images/awards/glass/samples/celestial-star.jpg',
      description: 'Star-shaped crystal with etching',
    },
    {
      id: 5,
      name: 'Royal Column',
      image: '/images/awards/glass/samples/royal-column.jpg',
      description: 'Elegant crystal column with base',
    },
    {
      id: 6,
      name: 'Infinity Spiral',
      image: '/images/awards/glass/samples/infinity-spiral.jpg',
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

      {/* Products Section */}
      <section className="py-12 bg-muted dark:bg-gray-900">
        <div className={STYLE_VARIANTS.container.default}>
          <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white text-center mb-12">
            Featured Glass Awards
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
      <section className="bg-blue-700 dark:bg-blue-800">
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