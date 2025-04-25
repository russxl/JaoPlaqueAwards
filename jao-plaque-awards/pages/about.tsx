import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import MainLayout from '@/app/components/layout/MainLayout';
import { AboutSkeleton } from '@/app/components/skeletons/AboutSkeleton';

const About: React.FC = () => {
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
        <AboutSkeleton />
      </MainLayout>
    );
  }

  const teamMembers = [
    {
      name: 'John Doe',
      role: 'Founder & CEO',
      image: '/images/team/john-doe.jpg',
      bio: 'With over 20 years of experience in custom awards, John leads our company with passion and dedication.',
    },
    {
      name: 'Jane Smith',
      role: 'Lead Designer',
      image: '/images/team/jane-smith.jpg',
      bio: 'Jane brings creativity and innovation to every award design, ensuring each piece tells a unique story.',
    },
    {
      name: 'Mike Johnson',
      role: 'Master Craftsman',
      image: '/images/team/mike-johnson.jpg',
      bio: 'Mike&apos;s attention to detail and craftsmanship expertise ensures the highest quality in every award.',
    },
  ];

  return (
    <MainLayout
      title="About Us - Jao Plaque Awards"
      description="Learn about our history, mission, and the team behind Jao Plaque Awards. Dedicated to creating exceptional recognition awards since 2000."
    >
      {/* Hero Section */}
      <section className="bg-muted dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          <div className="text-center">
            <h1 className="text-4xl font-extrabold text-gray-900 dark:text-white sm:text-5xl">
              About Jao Plaque Awards
            </h1>
            <p className="mt-4 text-xl text-gray-500 dark:text-gray-300 max-w-3xl mx-auto">
              Crafting excellence into every award since 2000. We take pride in creating
              meaningful recognition pieces that celebrate achievements and inspire greatness.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="py-12 bg-background dark:bg-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white">
                Our Mission & Values
              </h2>
              <p className="mt-4 text-lg text-gray-500 dark:text-gray-300">
                At JAO Plaque Awards & General Merchandise is to provide high-quality, affordable prints, awards, and souvenirs that inspire greatness and bring people together. We aim to be the top destination for exceptional products, supported by and serving our community.
              </p>
              <div className="mt-8 space-y-4">
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <svg
                      className="h-6 w-6 text-blue-600 dark:text-blue-400"
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
                  <p className="ml-3 text-lg text-gray-500 dark:text-gray-300">
                    Commitment to quality craftsmanship
                  </p>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <svg
                      className="h-6 w-6 text-blue-600 dark:text-blue-400"
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
                  <p className="ml-3 text-lg text-gray-500 dark:text-gray-300">
                    Innovation in design and materials
                  </p>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <svg
                      className="h-6 w-6 text-blue-600 dark:text-blue-400"
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
                  <p className="ml-3 text-lg text-gray-500 dark:text-gray-300">
                    Exceptional customer service
                  </p>
                </div>
              </div>
            </div>
            <div className="relative h-96">
              <Image
                src="/images/workshop.jpg"
                alt="Our workshop"
                fill
                className="object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-12 bg-muted dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white">
              Meet Our Team
            </h2>
            <p className="mt-4 text-lg text-gray-500 dark:text-gray-300 max-w-2xl mx-auto">
              Our talented team brings together years of experience and passion
              for creating exceptional awards.
            </p>
          </div>
          <div className="mt-12 grid gap-12 lg:grid-cols-3 lg:gap-8">
            {teamMembers.map((member) => (
              <div key={member.name} className="space-y-4">
                <div className="aspect-w-3 aspect-h-3">
                  <Image
                    src={member.image}
                    alt={member.name}
                    width={300}
                    height={300}
                    className="object-cover rounded-lg"
                  />
                </div>
                <div className="space-y-2">
                  <div className="text-lg leading-6 font-medium space-y-1">
                    <h3 className="text-gray-900 dark:text-white">{member.name}</h3>
                    <p className="text-blue-600 dark:text-blue-400">{member.role}</p>
                  </div>
                  <div className="text-base">
                    <p className="text-gray-500 dark:text-gray-300">{member.bio}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* History Section */}
      <section className="py-12 bg-background dark:bg-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white">
              Our History
            </h2>
            <p className="mt-4 text-lg text-gray-500 dark:text-gray-300">
              At JAO Plaque Awards, we began our journey in December 2020, amidst the challenges of the pandemic. Our founder, who previously worked as a sales agent for an awards supplier, saw an opportunity in this industry and teamed up with their family and partner to learn how to create quality, unique awards. Recognizing the potential for growth in this field, we decided to bring this business to the Rizal area and have been proud to serve clients in surrounding communities.
            </p>
           
            <div className="mt-8 flex flex-col sm:flex-row justify-center items-center space-y-6 sm:space-y-0">
              <div className="inline-flex items-center">
                <span className="text-2xl font-bold text-blue-600 dark:text-blue-400">3+</span>
                <span className="ml-2 text-gray-500 dark:text-gray-300">Years of Excellence</span>
              </div>
              <div className="inline-flex items-center sm:ml-8">
                <span className="text-2xl font-bold text-blue-600 dark:text-blue-400">1,000+</span>
                <span className="ml-2 text-gray-500 dark:text-gray-300">Awards Crafted</span>
              </div>
              <div className="inline-flex items-center sm:ml-8">
                <span className="text-2xl font-bold text-blue-600 dark:text-blue-400">500+</span>
                <span className="ml-2 text-gray-500 dark:text-gray-300">Happy Clients</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-muted dark:bg-gray-900">
        <div className="container mx-auto px-6 sm:px-6 lg:px-8 py-8 sm:py-16">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Ready to Create Something Special?</h2>
            <p className="mt-4 text-xl text-gray-600 dark:text-gray-300">
              Let&apos;s work together to create the perfect award for your recognition needs.
            </p>
            <div className="mt-8">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-400"
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

export default About; 