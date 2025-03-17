import React from 'react';
import { FaFacebook, FaTiktok, FaInstagram } from "react-icons/fa";
import { SiShopee } from "react-icons/si";
import Image from 'next/image';
import Link from 'next/link';

const Footer: React.FC = () => {
  return (
    <footer className="bg-background dark:bg-gray-800 py-4">
      <div className="px-12 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 items-center gap-12">
          {/* Company Credit */}
          <div className="text-center md:text-right px-4">
            <p className="text-foreground dark:text-gray-200">
              © {new Date().getFullYear()} Jao Plaque Awards. All rights reserved.
            </p>
          </div>

          {/* Logo in the middle */}
          <div className="flex justify-center px-4">
            <Link href="/" className="text-xl font-bold text-foreground dark:text-white">
              <Image
                src="/images/logo/JAO_Logo (1) (1).png"
                alt="JAO Logo"
                width={120}
                height={40}
                className="object-contain dark:invert"
                priority
              />
            </Link>
          </div>

          {/* Social Media Icons */}
          <div className="flex justify-center space-x-6">
            <a href="#" className="text-foreground dark:text-gray-200 hover:text-primary transition-colors">
              <FaInstagram size={24} />
            </a>
            <a href="#" className="text-foreground dark:text-gray-200 hover:text-primary transition-colors">
              <FaFacebook size={24} />
            </a>
            <a href="#" className="text-foreground dark:text-gray-200 hover:text-primary transition-colors">
              <SiShopee size={24} />
            </a>
            <a href="#" className="text-foreground dark:text-gray-200 hover:text-primary transition-colors">
              <FaTiktok size={24} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 