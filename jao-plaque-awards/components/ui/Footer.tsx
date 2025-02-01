import React from 'react';
import { FaFacebook, FaTiktok, FaInstagram } from "react-icons/fa";
import { SiShopee } from "react-icons/si";
import Image from 'next/image';
import Link from 'next/link';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white py-4">
      <div className="px-12 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 items-center gap-12">
          {/* Company Credit */}
          <div className="text-center md:text-right px-4">
            <p className="text-black">
              © {new Date().getFullYear()} Jao Plaque Awards. All rights reserved.
            </p>
          </div>

          {/* Logo in the middle */}
          <div className="flex justify-center px-4">
            <Link href="/" className="text-xl font-bold text-black">
              <Image
                src="/JAO_Logo (1).png"
                alt="JAO Logo"
                width={120}
                height={40}
                className="object-contain"
                priority
              />
            </Link>
          </div>

          {/* Social Media Icons */}
          <div className="flex justify-center space-x-6">
            <a href="#" className="text-black hover:text-primary transition-colors">
              <FaInstagram size={24} />
            </a>
            <a href="#" className="text-black hover:text-primary transition-colors">
              <FaFacebook size={24} />
            </a>
            <a href="#" className="text-black hover:text-primary transition-colors">
              <SiShopee size={24} />
            </a>
            <a href="#" className="text-black hover:text-primary transition-colors">
              <FaTiktok size={24} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 