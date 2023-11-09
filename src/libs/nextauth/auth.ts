import type { NextAuthOptions } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import { loginService } from '../services/restAPI/login.service';

declare module 'next-auth' {
  // eslint-disable-next-line no-unused-vars
  interface Session {
    accessToken?: string;
  }
}

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: 'Sign in',
      credentials: {
        email: {
          label: 'Email',
          type: 'email',
          placeholder: 'example@example.com',
        },
        password: { label: 'Password', type: 'password' },
      },
      // eslint-disable-next-line no-unused-vars
      async authorize(credentials) {
        const response = await loginService(credentials as any);
        if (response.data) {
          return response.data;
        }
        return null;
      },
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
  pages: {
    signIn: '/login',
    signOut: '/login',
  },
  session: {
    strategy: 'jwt',
    maxAge: 1 * 24 * 60 * 60, // 1 day
  },
  callbacks: {
    async redirect({ baseUrl }) {
      return baseUrl;
    },
    async jwt({ token, user }) {
      // Persist the OAuth access_token to the token right after signin
      if (user) {
        const u = user as unknown as any;
        return { ...token, accessToken: u.accessToken };
      }
      return {
        ...token,
      };
    },
    async session({ session, token }) {
      // Send properties to the client, like an access_token from a provider.
      const s = session as unknown as any;
      s.accessToken = token.accessToken;
      return {
        ...s,
        ...session,
      };
    },
  },
};
