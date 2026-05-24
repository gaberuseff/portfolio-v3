import NextAuth from "next-auth";
import { authConfig } from "@/lib/auth.config";

const { auth } = NextAuth(authConfig);

export default auth((req) => {
  const isLoggedIn = !!req.auth;
  const { nextUrl } = req;

  // Protect private pages using precise matching to prevent bypasses
  const isAdminPage = nextUrl.pathname === "/admin" || nextUrl.pathname.startsWith("/admin/");
  const isClientPage =
    nextUrl.pathname === "/projects" || nextUrl.pathname.startsWith("/projects/") ||
    nextUrl.pathname === "/billings" || nextUrl.pathname.startsWith("/billings/");
  const isRedirectPage = nextUrl.pathname === "/redirect" || nextUrl.pathname.startsWith("/redirect/");

  const isProtected = isAdminPage || isClientPage || isRedirectPage;

  if (isProtected && !isLoggedIn) {
    return Response.redirect(new URL("/login", nextUrl));
  }

  // Enforce Role-Based Access Control (RBAC) for logged-in users
  if (isLoggedIn) {
    const role = req.auth?.user?.role;

    // Prevent non-ADMIN users from accessing the admin dashboard
    if (isAdminPage && role !== "ADMIN") {
      return Response.redirect(new URL("/projects", nextUrl));
    }

    // Prevent non-USER users from accessing the client dashboard
    if (isClientPage && role !== "USER") {
      return Response.redirect(new URL("/admin", nextUrl));
    }
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
