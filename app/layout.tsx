import type { Metadata } from 'next';
import localFont from 'next/font/local';
import { GeistSans } from 'geist/font/sans';
import { GeistMono } from 'geist/font/mono';
import './globals.css';
import { ThemeProvider } from 'next-themes';
import Footer from '@/components/Footer';
import BackgroundGrid from '@/components/BackgroundGrid';
import GradientStrip from '@/components/GradientStrip';

const mondwest = localFont({
  src: [
    {
      path: './fonts/Mondwest-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: './fonts/Mondwest-Bold.woff2',
      weight: '700',
      style: 'italic',
    },
  ],
  variable: '--font-mondwest',
});

export const metadata: Metadata = {
  title: 'Marian Breitmeyer',
  description: 'Digital Product Designer',
  openGraph: {
    images: [
      {
        url: '/share/marian-breitmeyer.jpg',
        width: 1200,
        height: 627,
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`antialiased ${GeistSans.variable} ${GeistMono.variable} ${mondwest.variable} font-sans bg-stone-100 dark:bg-stone-900 relative`}
      >
        <ThemeProvider attribute="class" disableTransitionOnChange>
          {children}

          <Footer />
          <GradientStrip />
          <BackgroundGrid />
        </ThemeProvider>
      </body>
    </html>
  );
}
