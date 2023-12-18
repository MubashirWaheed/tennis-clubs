import { getToken } from "next-auth/jwt";
import { NextResponse } from "next/server";

export async function middleware(req) {
  const test = await getToken({ req });
  console.log("logged user data as token: ", test);
  console.log("request: ", req);
  // console.log("req: ", req.cookies.get("next-auth.session-token"));
  let token;
  if (req.cookies.get("next-auth.session-token")) {
    token = req.cookies.get("next-auth.csrf-token").value;
  }

  // console.log("NEXT URL: ", req.nextUrl);
  const path = req.nextUrl.pathname;

  const isPublicPath = path === "/signin" || path === "/register";

  if (isPublicPath && test) {
    return NextResponse.redirect(new URL("/", req.nextUrl));
  }

  if (!isPublicPath && !test) {
    // console.log("redirectinh to the signin page............");
    // console.log("isPublicPath: ", isPublicPath);
    // console.log("TOken: ", token);
    return NextResponse.redirect(new URL("/signin", req.nextUrl));
  }
}

export const config = {
  matcher: ["/register", "/signin", "/", "/events", "/register/:path*"],
};
