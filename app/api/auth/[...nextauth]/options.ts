import type { NextAuthOptions } from 'next-auth'; // импортируем типы для аутентификации
import GoogleProvider from 'next-auth/providers/google';
import CredentialsProvider from 'next-auth/providers/credentials';
import User from '@/models/User';
import { connectDB } from '@/lib/database';

export const options: NextAuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.CLIENT_ID || '',
      clientSecret: process.env.CLIENT_SECRET || '',
    }),

   
  ],
  callbacks: {
    async session({ session } : any) {
      const sessionUser = await User.findOne({ email: session?.user?.email });
      session.user.id = sessionUser?._id?.toString();

      console.log('session', session);
      return session;
    },
    async signIn({ profile } : any) {
      try {
        await connectDB();
        const exisingUser = await User.findOne({ email: profile.email });
        if (!exisingUser) {
          await User.create({
            email: profile.email,
            username: profile.name.replace(' ', '').toLowerCase(),
            image: profile.picture,
          });
        }
        return true;
      } catch (err) {
        console.log(err);
        return false;
      }
    },
  },
};
