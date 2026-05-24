import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";
import db from "@/lib/prisma";
import {authConfig} from "./auth.config";

export const {handlers, auth, signIn, signOut} = NextAuth({
  ...authConfig,
  
  providers: [
    Credentials({
      name: "Credentials",
      
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          throw new Error("Missing credentials");
        }

        const email = credentials.email.toLowerCase().trim();

        // 1. جلب المستخدم من قاعدة البيانات
        const user = await db.user.findUnique({
          where: {email},
        });

        if (!user || !user.password) {
          throw new Error("Invalid email or password");
        }

        // 2. فحص الباسورد
        const isPasswordValid = await bcrypt.compare(
          credentials.password,
          user.password,
        );
        if (!isPasswordValid) {
          throw new Error("Invalid email or password");
        }

        // 3. الفحص المباشر من متغير بريزما (هنا القيمة موجودة ومضمونة 100%)
        if (user.status !== "ACTIVE") {
          throw new Error("ACCOUNT_NOT_VERIFIED");
        }

        // 4. 🔥 السر هنا: نخرج الكائن بنظام إلحاق صريح لحماية الحقول من الفلترة
        return {
          id: user.id,
          name: user.name,
          email: user.email,
          role: user.role, // نكتبها صراحة بيدك
          status: user.status, // نكتبها صراحة بيدك
          phone_number: user.phone_number,
          country: user.country,
        };
      },
    }),
  ],
});
