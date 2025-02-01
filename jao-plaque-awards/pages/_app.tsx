import React from 'react';
import { AppProps } from 'next/app';
import { Geist, Geist_Mono } from "next/font/google";
import '../styles/globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <div className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
      <Component {...pageProps} />
    </div>
  );
};

export default MyApp; 