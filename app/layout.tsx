import type { Metadata } from 'next';
import { Raleway } from 'next/font/google';
import './globals.css';

const raleway = Raleway({ subsets: ['latin'], weight: '500' });

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={raleway.className}>{children}</body>
    </html>
  );
}
