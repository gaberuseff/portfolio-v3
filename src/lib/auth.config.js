export const authConfig = {
  trustHost: true,
  providers: [],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.role = user.role;
        token.status = user.status;
        token.phone_number = user.phone_number;
        token.country = user.country;
      }
      return token;
    },

    async session({session, token}) {
      if (token && session.user) {
        session.user.id = token.id;
        session.user.role = token.role;
        session.user.status = token.status;
        session.user.phone_number = token.phone_number;
        session.user.country = token.country;
      }
      return session;
    },
  },
  session: {strategy: "jwt"},
  pages: {signIn: "/login"},
};
