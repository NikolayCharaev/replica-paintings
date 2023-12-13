'use client';
import { SessionProvider } from 'next-auth/react';
import { FC } from 'react';

interface IProviderProps {
  children: React.ReactNode;
}

const Provider: FC<IProviderProps> = ({ children }) => {
  return <SessionProvider>{children}</SessionProvider>;
};

export default Provider;
