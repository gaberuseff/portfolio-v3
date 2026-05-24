export const authConfig = {
  providers: [], // Credentials providers are added in auth.js to avoid loading edge-incompatible modules here
  callbacks: {
    // 🌟 خطوة الإنقاذ الأولى في الـ JWT
    async jwt({token, user}) {
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
};
