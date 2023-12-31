'use client';

import { SessionProvider } from 'next-auth/react';

type Props = {
  children?: React.ReactNode;
};

export default function NextAuthProvider({ children }: Props) {
  return (
    <SessionProvider
      refetchInterval={5 * 60}
      // Re-fetches session when window is focused
      refetchOnWindowFocus={true}
    >
      {children}
    </SessionProvider>
  );
}
