import type { Metadata } from 'next';
import { Newsreader, Pixelify_Sans, Silkscreen, VT323 } from 'next/font/google';
import { GeistSans } from 'geist/font/sans';
import { GeistMono } from 'geist/font/mono';
import './globals.css';
import { ThemeProvider } from 'next-themes';
import Footer from '@/components/Footer';

const newsreader = Newsreader({
  weight: ['400', '500', '600'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  variable: '--font-newsreader',
});
// Caveat as Handwriting

export const metadata: Metadata = {
  title: 'Marian Breitmeyer',
  description: 'Digital Product Designer',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
      >
        <body
          className={`antialiased ${GeistSans.variable} ${GeistMono.variable} ${newsreader.variable} font-sans bg-stone-100 dark:bg-stone-900`}
        >
          {children}

          <Footer />
        </body>
      </ThemeProvider>
    </html>
  );
}
