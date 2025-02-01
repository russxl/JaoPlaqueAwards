import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import MainLayout from '../../components/layout/MainLayout';
import { STYLE_VARIANTS } from '../../types/references';

const AcrylicAwards: React.FC = () => {
  const awards = [
    {
      id: 1,
      name: 'Crystal Clear Star',
      description: 'Modern star-shaped acrylic award with beveled edges and crystal-clear finish.',
      image: '/images/awards/acrylic/crystal-star.jpg',
      price: '$89.99',
      features: ['Premium clear acrylic', 'Beveled edges', 'Freestanding design', 'Gift box included'],
    },
    {
      id: 2,
      name: 'Frost Peak Trophy',
      description: 'Elegant frosted acrylic award with a contemporary mountain peak design.',
      image: '/images/awards/acrylic/frost-peak.jpg',
      price: '$119.99',
      features: ['Frosted finish', 'Modern design', 'LED base compatible', 'Custom size options'],
    },
    {
      id: 3,
      name: 'Color Flame Award',
      description: 'Vibrant colored acrylic award with a dynamic flame design.',
      image: '/images/awards/acrylic/color-flame.jpg',
      price: '$139.99',
      features: ['Multiple color options', 'Flame design', 'High polish finish', 'Deluxe packaging'],
    },
  ];

  const sampleDesigns = [
    {
      id: 1,
      name: 'Modern Hexagon',
      image: '/images/awards/acrylic/samples/modern-hexagon.jpg',
      description: 'Contemporary hexagonal design with LED base',
    },
    {
      id: 2,
      name: 'Frost Peak',
      image: '/images/awards/acrylic/samples/frost-peak.jpg',
      description: 'Frosted acrylic with geometric patterns',
    },
    {
      id: 3,
      name: 'Rainbow Arc',
      image: '/images/awards/acrylic/samples/rainbow-arc.jpg',
      description: 'Multi-colored acrylic with curved design',
    },
    {
      id: 4,
      name: 'Tech Cube',
      image: '/images/awards/acrylic/samples/tech-cube.jpg',
      description: 'Clear acrylic cube with 3D etching',
    },
    {
      id: 5,
      name: 'Prism Tower',
      image: '/images/awards/acrylic/samples/prism-tower.jpg',
      description: 'Layered acrylic with prismatic effect',
    },
    {
      id: 6,
      name: 'Digital Wave',
      image: '/images/awards/acrylic/samples/digital-wave.jpg',
      description: 'Modern wave design with digital pattern',
    },
  ];

  return (
    <MainLayout
      title="Acrylic Awards & Trophies - Jao Plaque Awards"
      description="Explore our modern collection of acrylic awards and trophies. Contemporary designs that combine clarity with style for impressive recognition pieces."
    >
      {/* Hero Section */}
      <section className="bg-gray-50">
        <div className={`${STYLE_VARIANTS.container.default} py-12 sm:py-16`}>
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl">
                Acrylic Awards & Trophies
              </h1>
              <p className="mt-4 text-xl text-gray-500 max-w-3xl mx-auto">
                Contemporary acrylic awards that blend modern aesthetics with crystal-clear quality. 
                Perfect for corporate recognition, sports achievements, and special occasions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 bg-white">
        <div className={STYLE_VARIANTS.container.default}>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="text-blue-600">
                <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="mt-4 text-lg font-medium text-gray-900">Modern Aesthetics</h3>
              <p className="mt-2 text-base text-gray-500">
                Contemporary designs that make a bold statement.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="text-blue-600">
                <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                </svg>
              </div>
              <h3 className="mt-4 text-lg font-medium text-gray-900">Color Options</h3>
              <p className="mt-2 text-base text-gray-500">
                Available in clear, frosted, and vibrant colors.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="text-blue-600">
                <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
                </svg>
              </div>
              <h3 className="mt-4 text-lg font-medium text-gray-900">Custom Engraving</h3>
              <p className="mt-2 text-base text-gray-500">
                Precision laser engraving for perfect personalization.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-12 bg-gray-50">
        <div className={STYLE_VARIANTS.container.default}>
          <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-12">
            Featured Acrylic Awards
          </h2>
          <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3">
            {awards.map((award) => (
              <div key={award.id} className="group">
                <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300">
                  <div className="relative h-80">
                    <Image
                      src={award.image}
                      alt={award.name}
                      fill
                      className="object-cover object-center"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-medium text-gray-900">{award.name}</h3>
                    <p className="mt-2 text-gray-500">{award.description}</p>
                    <div className="mt-4">
                      <span className="text-blue-600 font-medium">{award.price}</span>
                    </div>
                    <div className="mt-4 space-y-2">
                      {award.features.map((feature, index) => (
                        <div key={index} className="flex items-center text-sm text-gray-500">
                          <svg className="h-4 w-4 text-blue-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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
      <section className="py-12 bg-white">
        <div className={STYLE_VARIANTS.container.default}>
          <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-8">
            Contemporary Acrylic Collection
          </h2>
          <p className="text-lg text-gray-500 text-center mb-12 max-w-3xl mx-auto">
            Explore our innovative acrylic award designs, featuring modern aesthetics and creative use of light and transparency.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {sampleDesigns.map((design) => (
              <div key={design.id} className="group relative">
                <div className="relative h-96 w-full overflow-hidden rounded-lg bg-white">
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
              className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
            >
              Request Custom Design
            </Link>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-blue-700">
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
                className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-blue-700 bg-white hover:bg-blue-50"
              >
                Start Your Design
              </Link>
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default AcrylicAwards; 