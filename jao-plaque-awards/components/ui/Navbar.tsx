import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { FaSun, FaMoon } from 'react-icons/fa';
import { getInitialDarkMode, toggleDarkMode } from '@/lib/darkMode';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAwardsDropdownOpen, setIsAwardsDropdownOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    // Get initial dark mode preference
    setIsDarkMode(getInitialDarkMode());
  }, []);

  const handleDarkModeToggle = () => {
    const newDarkMode = toggleDarkMode();
    setIsDarkMode(newDarkMode);
  };

  const awards = [
    { name: 'Wood Awards', href: '/awards/wood' },
    { name: 'Glass Awards', href: '/awards/glass' },
    { name: 'Acrylic Awards', href: '/awards/acrylic' },
  ];

  return (
    <div className="bg-white dark:bg-gray-800 text-black dark:text-white">
      <nav className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-6 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex-shrink-0">
              <Link href="/" className="flex items-center">
                <Image
                  src="/images/logo/JAO_Logo (1) (1).png"
                  alt="Jao Plaque Awards Logo"
                  width={100}
                  height={35}
                  className="object-contain dark:invert"
                  priority
                />
              </Link>
            </div>
            
            {/* Mobile menu button */}
            <div className="flex items-center gap-2 md:hidden">
              <Button
                variant="ghost"
                onClick={handleDarkModeToggle}
                size="sm"
                className="mr-1"
                aria-label="Toggle dark mode"
              >
                {isDarkMode ? <FaSun className="w-4 h-4" /> : <FaMoon className="w-4 h-4" />}
              </Button>
              <Button
                variant="ghost"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                size="sm"
                aria-label="Toggle menu"
              >
                <svg
                  className="h-5 w-5"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  {isMenuOpen ? (
                    <path d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </Button>
            </div>
            
            {/* Desktop menu */}
            <div className="hidden md:flex items-center space-x-4">
              <Link href="/about">
                <Button variant="ghost">About</Button>
              </Link>
              <div className="relative">
                <Button 
                  variant="ghost" 
                  onClick={() => setIsAwardsDropdownOpen(!isAwardsDropdownOpen)}
                  className="flex items-center gap-1"
                >
                  Awards
                  <svg 
                    className={`w-4 h-4 transition-transform ${isAwardsDropdownOpen ? 'rotate-180' : ''}`} 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </Button>
                {isAwardsDropdownOpen && (
                  <div className="absolute top-full left-0 mt-2 w-48 rounded-md shadow-lg bg-background border">
                    <div className="py-1">
                      {awards.map((award) => (
                        <Link 
                          key={award.href} 
                          href={award.href}
                          className="block px-4 py-2 text-sm hover:bg-muted transition-colors"
                        >
                          {award.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
              <Link href="/contact">
                <Button variant="default">Contact Us</Button>
              </Link>
              <Button
                variant="ghost"
                onClick={handleDarkModeToggle}
                aria-label="Toggle dark mode"
              >
                {isDarkMode ? <FaSun className="w-5 h-5" /> : <FaMoon className="w-5 h-5" />}
              </Button>
            </div>

            {/* Mobile menu */}
            {isMenuOpen && (
              <div className="absolute top-16 left-0 right-0 bg-background border-b md:hidden shadow-lg">
                <div className="px-4 py-3 space-y-2 max-h-[calc(100vh-4rem)] overflow-y-auto">
                  <Link href="/about">
                    <Button variant="ghost" className="w-full justify-start text-base">
                      About
                    </Button>
                  </Link>
                  <div className="space-y-1 pl-2 border-l-2 border-muted">
                    {awards.map((award) => (
                      <Link key={award.href} href={award.href}>
                        <Button variant="ghost" className="w-full justify-start text-base">
                          {award.name}
                        </Button>
                      </Link>
                    ))}
                  </div>
                  <Link href="/contact">
                    <Button variant="default" className="w-full justify-start text-base">
                      Contact Us
                    </Button>
                  </Link>
                </div>
              </div>
            )}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;