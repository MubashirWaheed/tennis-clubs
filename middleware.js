import { withAuth } from "next-auth/middleware";
import { NextResponse } from "next/server";

export function middleware(req) {
  let token;
  if (req.cookies.get("next-auth.session-token")) {
    token = req.cookies.get("next-auth.csrf-token").value;
  }

  const path = req.nextUrl.pathname;
  const isPublicPath = path === "/signin" || path === "/register";

  if (isPublicPath && token) {
    return NextResponse.redirect(new URL("/", req.nextUrl));
  }

  if (!isPublicPath && !token) {
    return NextResponse.redirect(new URL("/signin", req.nextUrl));
  }
  // get logged in user and store in the
}

export const config = {
  matcher: ["/register", "/signin", "/", "/events", "/register/:path*"],
};
