import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";
import db from "@/lib/prisma";

export const {handlers, auth, signIn, signOut} = NextAuth({
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
  callbacks: {
    // 🌟 خطوة الإنقاذ الأولى في الـ JWT
    async jwt({token, user}) {
      // في أول تسجيل دخول، الكائن المرتجع من authorize يكون هو الـ user هنا
      if (user) {
        token.id = user.id;
        token.role = user.role; // ننقلها يدويًا للتوكن
        token.status = user.status; // ننقلها يدويًا للتوكن
        token.phone_number = user.phone_number;
        token.country = user.country;
      }
      return token;
    },

    // 🌟 خطوة الإنقاذ الثانية في الـ Session
    async session({session, token}) {
      if (token && session.user) {
        session.user.id = token.id;
        session.user.role = token.role; // ننقلها يدويًا للجلسة العلنية
        session.user.status = token.status; // ننقلها يدويًا للجلسة العلنية
        session.user.phone_number = token.phone_number;
        session.user.country = token.country;
      }
      return session;
    },
  },
  session: {strategy: "jwt"},
  pages: {signIn: "/login"},
});
