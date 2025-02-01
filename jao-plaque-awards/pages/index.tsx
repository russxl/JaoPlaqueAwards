import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import MainLayout from '../components/layout/MainLayout';

const Home: React.FC = () => {
  return (
    <MainLayout>
      {/* Hero Section */}
      <section className="relative bg-gray-50 py-16 sm:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-12 lg:gap-8">
            <div className="sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left">
              <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                <span className="block">Celebrate Excellence</span>
                <span className="block text-blue-600">with Custom Awards</span>
              </h1>
              <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
                Crafting premium recognition awards that capture achievements and inspire greatness. Choose from our exquisite collection of wood, acrylic, and glass plaques.
              </p>
              <div className="mt-8 sm:max-w-lg sm:mx-auto sm:text-center lg:text-left">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
                >
                  Get Started
                </Link>
              </div>
            </div>
            <div className="mt-12 relative sm:max-w-lg sm:mx-auto lg:mt-0 lg:max-w-none lg:mx-0 lg:col-span-6 lg:flex lg:items-center">
              <div className="relative mx-auto w-full rounded-lg shadow-lg lg:max-w-md">
                <div className="relative block w-full bg-white rounded-lg overflow-hidden">
                  <Image
                    src="/images/hero-award.jpg"
                    alt="Premium award display"
                    width={500}
                    height={300}
                    className="w-full"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Categories */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-12">
            Our Award Categories
          </h2>
          <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3">
            {/* Wood Awards */}
            <div className="group relative">
              <div className="relative w-full h-80 bg-white rounded-lg overflow-hidden group-hover:opacity-75 sm:aspect-w-2 sm:aspect-h-1 sm:h-64 lg:aspect-w-1 lg:aspect-h-1">
                <Image
                  src="/images/wood-award.jpg"
                  alt="Wood plaque award"
                  width={500}
                  height={300}
                  className="w-full h-full object-center object-cover"
                />
              </div>
              <h3 className="mt-6 text-sm text-gray-500">
                <Link href="/awards/wood">
                  <span className="absolute inset-0" />
                  Wood Awards
                </Link>
              </h3>
              <p className="text-base font-semibold text-gray-900">Timeless elegance crafted from premium hardwoods</p>
            </div>

            {/* Acrylic Awards */}
            <div className="group relative">
              <div className="relative w-full h-80 bg-white rounded-lg overflow-hidden group-hover:opacity-75 sm:aspect-w-2 sm:aspect-h-1 sm:h-64 lg:aspect-w-1 lg:aspect-h-1">
                <Image
                  src="/images/acrylic-award.jpg"
                  alt="Acrylic award"
                  width={500}
                  height={300}
                  className="w-full h-full object-center object-cover"
                />
              </div>
              <h3 className="mt-6 text-sm text-gray-500">
                <Link href="/awards/acrylic">
                  <span className="absolute inset-0" />
                  Acrylic Awards
                </Link>
              </h3>
              <p className="text-base font-semibold text-gray-900">Modern designs with crystal-clear clarity</p>
            </div>

            {/* Glass Awards */}
            <div className="group relative">
              <div className="relative w-full h-80 bg-white rounded-lg overflow-hidden group-hover:opacity-75 sm:aspect-w-2 sm:aspect-h-1 sm:h-64 lg:aspect-w-1 lg:aspect-h-1">
                <Image
                  src="/images/glass-award.jpg"
                  alt="Glass award"
                  width={500}
                  height={300}
                  className="w-full h-full object-center object-cover"
                />
              </div>
              <h3 className="mt-6 text-sm text-gray-500">
                <Link href="/awards/glass">
                  <span className="absolute inset-0" />
                  Glass Awards
                </Link>
              </h3>
              <p className="text-base font-semibold text-gray-900">Sophisticated glass creations that shine</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-blue-700">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
              Ready to Create Your Custom Award?
            </h2>
            <p className="mt-4 text-lg leading-6 text-blue-100">
              Contact us today to discuss your requirements and let us help you create the perfect recognition award.
            </p>
            <div className="mt-8">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-blue-700 bg-white hover:bg-blue-50"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default Home; 