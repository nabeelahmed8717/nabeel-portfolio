import type { Metadata } from 'next';
import '@/styles/globals.css';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { ThemeProvider } from '@/components/layout/ThemeProvider';
import { AppShell } from '@/components/layout/AppShell';

export const metadata: Metadata = {
  title: 'Nabeel – Frontend Engineer',
  description:
    'Portfolio of Nabeel, a frontend engineer specializing in React and Next.js.',
  metadataBase: new URL('https://example.com')
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="font-apple">
      <body className="bg-white text-neutral-900 antialiased transition-colors duration-200 dark:bg-neutral-950 dark:text-white font-sans">
        <ThemeProvider>
          <AppShell>
            <Navbar />
            <main className="flex-1">{children}</main>
            <Footer />
          </AppShell>
        </ThemeProvider>
      </body>
    </html>
  );
}

