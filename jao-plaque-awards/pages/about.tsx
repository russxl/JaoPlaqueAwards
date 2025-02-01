import React from 'react';
import Image from 'next/image';
import MainLayout from '../components/layout/MainLayout';

const About: React.FC = () => {
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
      <section className="bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          <div className="text-center">
            <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl">
              About Jao Plaque Awards
            </h1>
            <p className="mt-4 text-xl text-gray-500 max-w-3xl mx-auto">
              Crafting excellence into every award since 2000. We take pride in creating
              meaningful recognition pieces that celebrate achievements and inspire greatness.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-extrabold text-gray-900">
                Our Mission & Values
              </h2>
              <p className="mt-4 text-lg text-gray-500">
                At Jao Plaque Awards, we believe in the power of recognition to inspire
                and motivate. Our mission is to create exceptional awards that capture
                the significance of achievement and create lasting memories.
              </p>
              <div className="mt-8 space-y-4">
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <svg
                      className="h-6 w-6 text-blue-600"
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
                  <p className="ml-3 text-lg text-gray-500">
                    Commitment to quality craftsmanship
                  </p>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <svg
                      className="h-6 w-6 text-blue-600"
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
                  <p className="ml-3 text-lg text-gray-500">
                    Innovation in design and materials
                  </p>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <svg
                      className="h-6 w-6 text-blue-600"
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
                  <p className="ml-3 text-lg text-gray-500">
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
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900">
              Meet Our Team
            </h2>
            <p className="mt-4 text-lg text-gray-500 max-w-2xl mx-auto">
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
                    <h3 className="text-gray-900">{member.name}</h3>
                    <p className="text-blue-600">{member.role}</p>
                  </div>
                  <div className="text-base">
                    <p className="text-gray-500">{member.bio}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* History Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-extrabold text-gray-900">
              Our History
            </h2>
            <p className="mt-4 text-lg text-gray-500">
              Founded in 2000, Jao Plaque Awards has grown from a small family
              business to a leading provider of custom awards and recognition
              products. Our commitment to quality and customer satisfaction has
              earned us the trust of countless organizations and individuals
              across the country.
            </p>
            <div className="mt-8">
              <div className="inline-flex items-center">
                <span className="text-2xl font-bold text-blue-600">20+</span>
                <span className="ml-2 text-gray-500">Years of Excellence</span>
              </div>
              <div className="inline-flex items-center ml-8">
                <span className="text-2xl font-bold text-blue-600">10,000+</span>
                <span className="ml-2 text-gray-500">Awards Crafted</span>
              </div>
              <div className="inline-flex items-center ml-8">
                <span className="text-2xl font-bold text-blue-600">5,000+</span>
                <span className="ml-2 text-gray-500">Happy Clients</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default About; 