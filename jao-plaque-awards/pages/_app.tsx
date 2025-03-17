import type { AppProps } from 'next/app';
import { useEffect } from 'react';
import { getInitialDarkMode } from '@/lib/darkMode';
import { inter } from '../lib/fonts';
import '../styles/globals.css';
import { ConvexProvider, ConvexReactClient } from "convex/react";

const convex = new ConvexReactClient(process.env.NEXT_PUBLIC_CONVEX_URL!);

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    // Apply initial dark mode on mount
    const isDark = getInitialDarkMode();
    if (isDark) {
      document.documentElement.classList.add('dark');
    }
  }, []);

  return (
    <ConvexProvider client={convex}>
      <main className={`${inter.className}`}>
        <Component {...pageProps} />
      </main>
    </ConvexProvider>
  );
}