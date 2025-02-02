import type { AppProps } from 'next/app';
import { useEffect } from 'react';
import { getInitialDarkMode } from '@/lib/darkMode';
import { inter } from '../lib/fonts';
import '../styles/globals.css';

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    // Apply initial dark mode on mount
    const isDark = getInitialDarkMode();
    if (isDark) {
      document.documentElement.classList.add('dark');
    }
  }, []);

  return (
    <main className={`${inter.className}`}>
      <Component {...pageProps} />
    </main>
  );
} 