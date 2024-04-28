import Header from '@/components/header';
import './globals.css';
import { Inter } from 'next/font/google';
import ActiveSectionContextProvider from '@/context/active-section-context';
import Footer from '@/components/footer';
import ThemeSwitch from '@/components/theme-switch';
import ThemeContextProvider from '@/context/theme-context';
import { Toaster } from 'react-hot-toast';
import StarsCanvas from '@/components/StarBackground';
const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Infas N.M.',
  description: 'Computer Engineering undergraduate | University of Ruhuna',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body
        className={`${inter.className} bg-gradient-to-br from-gray-900 via-gray-800 to-black text-gray-200 text-opacity-90 relative pt-28 sm:pt-36 dark:text-gray-50 dark:text-opacity-90`}
      >
        <div className="bg-[#11263b] absolute top-[-1rem] -z-10 left-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem]  md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem]"></div>

        <ThemeContextProvider>
          <ActiveSectionContextProvider>
            <StarsCanvas />
            <Header />
            {children}
            <Footer />
            <Toaster position="top-right" />
          </ActiveSectionContextProvider>
        </ThemeContextProvider>
      </body>
    </html>
  );
}
