"use client";
import { useEffect, useState } from 'react';
import MainLayout from '../components/layout/MainLayout';
import { FaFacebook, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';
import { FiMail } from 'react-icons/fi';
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { ContactSkeleton } from "@/components/skeletons/ContactSkeleton";

const contactInfo = {
  facebook: "https://facebook.com/jaoplaqueawards",
  phone: "+1 (555) 123-4567",
  email: "info@jaoplaqueawards.com",
  address: "123 Award Plaza, Suite 100, Los Angeles, CA 90001",
  mapUrl: "https://www.google.com/maps/embed/v1/place?q=jao+plaque&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"
};

const Contact = () => {
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
        <ContactSkeleton />
      </MainLayout>
    );
  }

  return (
    <MainLayout
      title="Contact Us - Jao Plaque Awards"
      description="Get in touch with us for custom awards and plaques. We're here to help create the perfect recognition award for your needs."
    >
      <div className="min-h-screen font-sans bg-background dark:bg-gray-900">
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4 text-foreground dark:text-white">Contact Us</h1>
            <p className="text-muted-foreground dark:text-gray-300">Get in touch with us</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Contact Information */}
            <div className="space-y-6">
              <Card className="dark:bg-gray-800 dark:border-gray-700">
                <CardHeader>
                  <CardTitle className="dark:text-white">Contact Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  {/* Facebook */}
                  <div className="flex items-center space-x-4">
                    <Button size="icon" className="rounded-full dark:bg-blue-500 dark:hover:bg-blue-600">
                      <FaFacebook className="w-5 h-5" />
                    </Button>
                    <div>
                      <p className="text-sm text-muted-foreground dark:text-gray-300">Follow us on Facebook</p>
                      <Button variant="link" className="h-auto p-0 dark:text-blue-400 dark:hover:text-blue-300" asChild>
                        <a href={contactInfo.facebook} target="_blank" rel="noopener noreferrer">
                          @jaoplaqueawards
                        </a>
                      </Button>
                    </div>
                  </div>
                  <Separator className="dark:bg-gray-700" />

                  {/* Phone */}
                  <div className="flex items-center space-x-4">
                    <Button size="icon" className="rounded-full dark:bg-blue-500 dark:hover:bg-blue-600">
                      <FaPhone className="w-5 h-5" />
                    </Button>
                    <div>
                      <p className="text-sm text-muted-foreground dark:text-gray-300">Call us</p>
                      <Button variant="link" className="h-auto p-0 dark:text-blue-400 dark:hover:text-blue-300" asChild>
                        <a href={`tel:${contactInfo.phone}`}>
                          {contactInfo.phone}
                        </a>
                      </Button>
                    </div>
                  </div>
                  <Separator className="dark:bg-gray-700" />

                  {/* Email */}
                  <div className="flex items-center space-x-4">
                    <Button size="icon" className="rounded-full dark:bg-blue-500 dark:hover:bg-blue-600">
                      <FiMail className="w-5 h-5" />
                    </Button>
                    <div>
                      <p className="text-sm text-muted-foreground dark:text-gray-300">Email us</p>
                      <Button variant="link" className="h-auto p-0 dark:text-blue-400 dark:hover:text-blue-300" asChild>
                        <a href={`mailto:${contactInfo.email}`}>
                          {contactInfo.email}
                        </a>
                      </Button>
                    </div>
                  </div>
                  <Separator className="dark:bg-gray-700" />

                  {/* Address */}
                  <div className="flex items-center space-x-4">
                    <Button size="icon" className="rounded-full dark:bg-blue-500 dark:hover:bg-blue-600">
                      <FaMapMarkerAlt className="w-5 h-5" />
                    </Button>
                    <div>
                      <p className="text-sm text-muted-foreground dark:text-gray-300">Visit our store</p>
                      <p className="dark:text-white">{contactInfo.address}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Business Hours */}
              <Card className="dark:bg-gray-800 dark:border-gray-700">
                <CardHeader>
                  <CardTitle className="dark:text-white">Business Hours</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <p className="flex justify-between">
                    <span className="text-muted-foreground dark:text-gray-300">Monday - Friday</span>
                    <span className="dark:text-white">9:00 AM - 6:00 PM PST</span>
                  </p>
                  <Separator className="dark:bg-gray-700" />
                  <p className="flex justify-between">
                    <span className="text-muted-foreground dark:text-gray-300">Saturday</span>
                    <span className="dark:text-white">10:00 AM - 4:00 PM PST</span>
                  </p>
                  <Separator className="dark:bg-gray-700" />
                  <p className="flex justify-between">
                    <span className="text-muted-foreground dark:text-gray-300">Sunday</span>
                    <span className="dark:text-white">Closed</span>
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Map */}
            <Card className="overflow-hidden dark:bg-gray-800 dark:border-gray-700">
              <iframe
                src={contactInfo.mapUrl}
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: '500px' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </Card>
          </div>
        </main>
      </div>
    </MainLayout>
  );
};

export default Contact; 