import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import MainLayout from '../components/layout/MainLayout';
import { HomeSkeleton } from '@/components/skeletons/HomeSkeleton';
import { Button } from '@/components/ui/button';

const Home: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);

  const clientLogos = [
    { src: '/images/clients/company-one.svg', alt: 'Company One Logo', name: 'Company One' },
    { src: '/images/clients/company-two.svg', alt: 'Company Two Logo', name: 'Company Two' },
    { src: '/images/clients/company-three.svg', alt: 'Company Three Logo', name: 'Company Three' },
    { src: '/images/clients/company-four.svg', alt: 'Company Four Logo', name: 'Company Four' },
    { src: '/images/clients/company-five.svg', alt: 'Company Five Logo', name: 'Company Five' },
    { src: '/images/clients/company-six.svg', alt: 'Company Six Logo', name: 'Company Six' },
  ];

  // Duplicate logos 4 times for a smoother infinite scroll
  const duplicatedLogos = [...clientLogos, ...clientLogos, ...clientLogos, ...clientLogos];

  useEffect(() => {
    // Simulate loading
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <MainLayout>
        <HomeSkeleton />
      </MainLayout>
    );
  }

  return (
    <MainLayout>
      <div className="relative w-full h-[80vh] sm:h-screen">
        <div className="absolute inset-0">
          <Image
            src="/images/hero/hero-award.jpg"
            alt="Collection of premium awards and trophies"
            fill
            className="object-cover object-[center_30%] sm:object-center"
            priority
            quality={100}
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>

        {/* Content */}
        <div className="relative h-full z-10">
          <div className="container h-full flex items-center justify-center mx-auto px-6 sm:px-6 lg:px-8">
            <div className="max-w-2xl text-center">
              <p className="text-blue-400 font-medium text-base">Crafting Excellence Since 2020</p>
              {/* Title */}
              <div className="mt-4 sm:mt-5 max-w-2xl">
                <h1 className="scroll-m-20 text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
                  Premium Custom Awards & Recognition
                </h1>
              </div>
              {/* Description */}
              <div className="mt-4 sm:mt-6 max-w-3xl">
                <p className="text-lg sm:text-xl text-gray-200">
                  Transform achievements into lasting memories with our premium custom awards. 
                  From elegant wood plaques to stunning crystal trophies.
                </p>
              </div>
              {/* Buttons */}
              <div className="mt-8 sm:mt-10 gap-4 flex  sm:flex-row justify-center items-center">
                <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-500 text-base w-full sm:w-auto">
                  <Link href="/contact">Get Started</Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="bg-transparent text-white border-white hover:bg-white/10 text-base w-full sm:w-auto">
                  <Link href="/about">Learn More</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div> 

      <div className="container mx-auto px-6 sm:px-6 lg:px-8 py-8 sm:py-16 space-y-8 sm:space-y-16">
        {/* Featured Categories */}
        <section className="py-8 sm:py-16 bg-background dark:bg-gray-800 rounded-2xl mt-8 sm:mt-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 dark:text-white text-center mb-8 sm:mb-12">
              Our Award Categories
            </h2>
            <div className="grid grid-cols-1 gap-y-8 sm:grid-cols-2 gap-x-6 lg:grid-cols-3">
              {/* Wood Awards */}
              <div className="group relative">
                <div className="relative h-96">
                  <Image
                    src="/images/awards/wood/421242199_907613681372251_7925596225026725364_n.jpg"
                    alt="Wood plaque award"
                    fill
                    className="object-cover"
                    quality={95}
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
                <h3 className="mt-4 sm:mt-6 text-sm text-gray-500 dark:text-gray-400">
                  <Link href="/awards/wood" className="relative">
                    <span className="absolute inset-0" />
                    Wood Awards
                  </Link>
                </h3>
                <p className="text-base font-semibold text-gray-900 dark:text-white">Timeless elegance crafted from premium hardwoods</p>
              </div>

              {/* Acrylic Awards */}
              <div className="group relative">
                <div className="relative h-96">
                  <Image
                    src="/images/awards/acrylic/457045122_1070631835070434_8721150671937125992_n.jpg"
                    alt="Acrylic award"
                    fill
                    className="object-cover"
                    quality={95}
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
                <h3 className="mt-4 sm:mt-6 text-sm text-gray-500 dark:text-gray-400">
                  <Link href="/awards/acrylic" className="relative">
                    <span className="absolute inset-0" />
                    Acrylic Awards
                  </Link>
                </h3>
                <p className="text-base font-semibold text-gray-900 dark:text-white">Modern designs with crystal-clear clarity</p>
              </div>

              {/* Glass Awards */}
              <div className="group relative">
                <div className="relative h-96">
                  <Image
                    src="/images/awards/glass/435505105_966033095530309_6737523218719137883_n.jpg"
                    alt="Glass award"
                    fill
                    className="object-cover"
                    quality={95}
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
                <h3 className="mt-4 sm:mt-6 text-sm text-gray-500 dark:text-gray-400">
                  <Link href="/awards/glass" className="relative">
                    <span className="absolute inset-0" />
                    Glass Awards
                  </Link>
                </h3>
                <p className="text-base font-semibold text-gray-900 dark:text-white">Sophisticated glass creations that shine</p>
              </div>
            </div>
          </div>
        </section>

        {/* Client Logos Section */}
        <section className="py-8 sm:py-16 bg-muted dark:bg-gray-900 overflow-hidden rounded-2xl">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-center text-primary dark:text-blue-400 mb-8 sm:mb-12">
              Trusted by Leading Organizations
            </h2>
            <div className="relative w-full">
              <div className="absolute inset-y-0 left-0 w-8 bg-gradient-to-r from-muted dark:from-gray-900 to-transparent z-10" />
              <div className="absolute inset-y-0 right-0 w-8 bg-gradient-to-l from-muted dark:from-gray-900 to-transparent z-10" />
              <div className="relative overflow-hidden">
                <div className="flex space-x-6 sm:space-x-8 animate-scroll whitespace-nowrap">
                  {duplicatedLogos.map((logo, index) => (
                    <div 
                      key={index}
                      className="flex-none w-[150px] sm:w-[200px] h-[80px] sm:h-[100px] relative bg-background dark:bg-gray-800 rounded-lg shadow-sm p-4 flex items-center justify-center group hover:shadow-md transition-shadow duration-300"
                    >
                      <Image
                        src={logo.src}
                        alt={logo.alt}
                        width={120}
                        height={0}
                        className="object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300"
                      />
                      <div className="absolute inset-0 bg-background/80 dark:bg-gray-800/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <p className="text-primary dark:text-blue-400 font-medium text-sm">{logo.name}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="bg-blue-700 dark:bg-blue-800 rounded-2xl">
          <div className="container mx-auto px-6 sm:px-6 lg:px-8 py-8 sm:py-16">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white">
                Ready to Create Your Custom Award?
              </h2>
              <p className="mt-4 text-base sm:text-lg leading-relaxed text-blue-100">
                Contact us today to discuss your requirements and let us help you create the perfect recognition award.
              </p>
              <div className="mt-6 sm:mt-8">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center w-full sm:w-auto px-6 py-3 border border-transparent text-base font-medium rounded-md text-blue-700 dark:text-blue-900 bg-white hover:bg-blue-50 dark:hover:bg-gray-100"
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </MainLayout>
  );
};

export default Home; 