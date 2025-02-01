import React from 'react';
import Head from 'next/head';
import Navbar from '../ui/Navbar';
import { STYLE_VARIANTS } from '../../types/references';

interface MainLayoutProps {
  children: React.ReactNode;
  title?: string;
  description?: string;
}

const MainLayout: React.FC<MainLayoutProps> = ({
  children,
  title = 'Jao Plaque Awards - Custom Awards & Recognition',
  description = 'Premium custom plaques and awards for all occasions. Specializing in wood, acrylic, and glass awards with professional engraving services.',
}) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:type" content="website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="min-h-screen flex flex-col bg-gray-50">
        <Navbar />
        <main className={`flex-grow ${STYLE_VARIANTS.container.default} py-8`}>
          {children}
        </main>
        <footer className="bg-white border-t">
          <div className={`${STYLE_VARIANTS.container.default} py-6`}>
            <p className="text-center text-gray-600">
              © {new Date().getFullYear()} Jao Plaque Awards. All rights reserved.
            </p>
          </div>
        </footer>
      </div>
    </>
  );
};

export default MainLayout; 