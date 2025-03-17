import React from 'react';
import Head from 'next/head';
import Navbar from '../ui/Navbar';
import Footer from '../ui/Footer';
import Chatbot from '@/app/components/Chatbot';
import { Button } from '../ui/button';
import { useState } from 'react';
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
  const [isChatbotOpen, setIsChatbotOpen] = useState(false);

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
      <div className="min-h-screen flex flex-col bg-background dark:bg-gray-900">
        <Navbar />
        <main className="flex-grow relative">
          {children}
        </main>
        <div className="fixed bottom-4 right-4 z-50">
          {!isChatbotOpen ? (
            <Button
              onClick={() => setIsChatbotOpen(true)}
              className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-md px-4 py-2 z-50"
            >
              Open Chat
            </Button>
          ) : (
            <Chatbot onClose={() => setIsChatbotOpen(false)} />
          )}
        </div>
        <Footer />
      </div>
    </>
  );
};

export default MainLayout;