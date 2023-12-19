import type { NextAuthOptions } from 'next-auth'; // импортируем типы для аутентификации
import GoogleProvider from 'next-auth/providers/google';
import VkProvider from "next-auth/providers/vk";
import User from '@/models/User';
import { connectDB } from '@/lib/database';

export const options: NextAuthOptions = {
  providers: [
    GoogleProvider({
      //@ts-ignore
      clientId: process.env.CLIENT_ID,
      //@ts-ignore
      clientSecret: process.env.CLIENT_SECRET,
    }),
    VkProvider({
      clientId: process.env.VK_CLIENT_ID,
      clientSecret: process.env.VK_CLIENT_SECRET
    })
  ],
  callbacks: {
    async session({ session }: any) {
      const sessionUser = await User.findOne({ email: session?.user?.email });
      session.user.id = sessionUser?._id?.toString();

      return session;
    },
    async signIn({ profile }: any) {
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
