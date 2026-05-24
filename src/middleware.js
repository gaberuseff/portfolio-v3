import NextAuth from "next-auth";
import { authConfig } from "@/lib/auth.config";

const { auth } = NextAuth(authConfig);

export default auth((req) => {
  const isLoggedIn = !!req.auth;
  const { nextUrl } = req;

  // Protect private pages
  const isProtected =
    nextUrl.pathname.startsWith("/admin") ||
    nextUrl.pathname.startsWith("/projects") ||
    nextUrl.pathname.startsWith("/billings") ||
    nextUrl.pathname.startsWith("/redirect");

  if (isProtected && !isLoggedIn) {
    return Response.redirect(new URL("/login", nextUrl));
  }

  // Redirect logged-in users away from auth pages
  const isAuthPage =
    nextUrl.pathname.startsWith("/login") ||
    nextUrl.pathname.startsWith("/signup") ||
    nextUrl.pathname.startsWith("/verify-email");

  if (isAuthPage && isLoggedIn) {
    return Response.redirect(new URL("/redirect", nextUrl));
  }
});

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
