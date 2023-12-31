import type { Metadata } from 'next';
import { Raleway } from 'next/font/google';
import Provider from './components/Provider';

import ReduxProvider from '../redux/provider';
import Header from './components/Header';

const raleway = Raleway({ subsets: ['latin'], weight: '500' });
export const metadata: Metadata = {
  title: 'PaintingApp',
  description: 'Generated by create next app',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ru">
      <body className={raleway.className}>
        <Provider>
          <ReduxProvider>
            <Header />
            {children}
          </ReduxProvider>
        </Provider>
      </body>
    </html>
  );
}
