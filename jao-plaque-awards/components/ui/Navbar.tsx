import React, { useState, useCallback, useRef, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { ARIA_LABELS, STYLE_VARIANTS, TEST_IDS } from '../../types/references';

interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
}

const navItems: NavItem[] = [
  { label: 'Home', href: '/' },
  {
    label: 'Awards',
    href: '/awards',
    children: [
      { label: 'Wood Awards', href: '/awards/wood' },
      { label: 'Acrylic Awards', href: '/awards/acrylic' },
      { label: 'Glass Awards', href: '/awards/glass' },
    ],
  },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
];

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const router = useRouter();

  const isActive = useCallback((path: string) => router.pathname === path, [router.pathname]);
  const isActiveParent = useCallback(
    (item: NavItem) => 
      item.children?.some(child => router.pathname.startsWith(child.href)) || 
      router.pathname === item.href,
    [router.pathname]
  );

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setActiveDropdown(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  const handleDropdownClick = (label: string) => {
    setActiveDropdown(activeDropdown === label ? null : label);
  };

  const handleDropdownEnter = (label: string) => {
    if (window.innerWidth >= 640) { // sm breakpoint
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
      setActiveDropdown(label);
    }
  };

  const handleDropdownLeave = () => {
    if (window.innerWidth >= 640) { // sm breakpoint
      timeoutRef.current = setTimeout(() => {
        setActiveDropdown(null);
      }, 150); // Small delay to allow moving to dropdown menu
    }
  };

  const handleDropdownItemClick = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setActiveDropdown(null);
  };

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <nav 
      className="bg-white shadow-lg"
      aria-label={ARIA_LABELS.navigation.main}
      data-testid={TEST_IDS.navigation.main}
    >
      <div className={STYLE_VARIANTS.container.default}>
        <div className="flex justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link 
              href="/" 
              className="text-xl font-bold text-gray-800 hover:text-blue-600 transition-colors"
              aria-label="Jao Plaque Awards Home"
            >
              Jao Plaque Awards
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden sm:flex sm:items-center sm:space-x-4">
            {navItems.map((item) => (
              <div
                key={item.label}
                className="relative"
                ref={item.children ? dropdownRef : undefined}
              >
                {item.children ? (
                  <div
                    onMouseEnter={() => handleDropdownEnter(item.label)}
                    onMouseLeave={handleDropdownLeave}
                  >
                    <button
                      onClick={() => handleDropdownClick(item.label)}
                      className={`group inline-flex items-center px-3 py-2 text-sm font-medium rounded-md ${
                        isActiveParent(item)
                          ? 'text-blue-600'
                          : 'text-gray-600 hover:text-blue-600'
                      }`}
                      aria-expanded={activeDropdown === item.label}
                      aria-haspopup="true"
                    >
                      {item.label}
                      <svg
                        className={`ml-2 h-4 w-4 transition-transform duration-200 ${
                          activeDropdown === item.label ? 'rotate-180' : ''
                        }`}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </button>

                    {/* Dropdown Menu */}
                    {activeDropdown === item.label && (
                      <div
                        className="absolute z-10 -ml-4 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 transform opacity-100 scale-100 transition-all duration-200"
                        role="menu"
                        aria-orientation="vertical"
                        data-testid={TEST_IDS.navigation.dropdown}
                        onMouseEnter={() => handleDropdownEnter(item.label)}
                        onMouseLeave={handleDropdownLeave}
                      >
                        <div className="py-1" role="none">
                          {item.children.map((child) => (
                            <Link
                              key={child.label}
                              href={child.href}
                              className={`block px-4 py-2 text-sm ${
                                isActive(child.href)
                                  ? 'text-blue-600 bg-gray-50'
                                  : 'text-gray-700 hover:bg-gray-50 hover:text-blue-600'
                              }`}
                              role="menuitem"
                              onClick={handleDropdownItemClick}
                            >
                              {child.label}
                            </Link>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    href={item.href}
                    className={`px-3 py-2 text-sm font-medium rounded-md ${
                      isActive(item.href)
                        ? 'text-blue-600'
                        : 'text-gray-600 hover:text-blue-600'
                    }`}
                  >
                    {item.label}
                  </Link>
                )}
              </div>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="sm:hidden flex items-center">
            <button
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100"
              aria-controls="mobile-menu"
              aria-expanded={isMenuOpen}
              aria-label={ARIA_LABELS.buttons.menu}
              onClick={toggleMenu}
              data-testid={TEST_IDS.button.menu}
            >
              <span className="sr-only">Open main menu</span>
              {!isMenuOpen ? (
                <svg className="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg className="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="sm:hidden" id="mobile-menu">
          <div className="pt-2 pb-3 space-y-1">
            {navItems.map((item) => (
              <div key={item.label}>
                {item.children ? (
                  <>
                    <button
                      onClick={() => handleDropdownClick(item.label)}
                      className={`w-full text-left px-3 py-2 text-base font-medium ${
                        isActiveParent(item)
                          ? 'text-blue-600 bg-blue-50'
                          : 'text-gray-600 hover:text-blue-600 hover:bg-blue-50'
                      }`}
                      aria-expanded={activeDropdown === item.label}
                    >
                      <span className="flex items-center justify-between">
                        {item.label}
                        <svg
                          className={`ml-2 h-4 w-4 transition-transform duration-200 ${
                            activeDropdown === item.label ? 'rotate-180' : ''
                          }`}
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>
                      </span>
                    </button>
                    {activeDropdown === item.label && (
                      <div className="pl-4">
                        {item.children.map((child) => (
                          <Link
                            key={child.label}
                            href={child.href}
                            className={`block px-3 py-2 text-base font-medium ${
                              isActive(child.href)
                                ? 'text-blue-600 bg-blue-50'
                                : 'text-gray-600 hover:text-blue-600 hover:bg-blue-50'
                            }`}
                            onClick={() => {
                              setActiveDropdown(null);
                              setIsMenuOpen(false);
                            }}
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <Link
                    href={item.href}
                    className={`block px-3 py-2 text-base font-medium ${
                      isActive(item.href)
                        ? 'text-blue-600 bg-blue-50'
                        : 'text-gray-600 hover:text-blue-600 hover:bg-blue-50'
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar; 