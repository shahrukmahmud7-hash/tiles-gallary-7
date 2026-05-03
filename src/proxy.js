import { NextResponse } from "next/server";
import { auth } from "./lib/auth";
import { headers } from "next/headers";

export async function proxy(request) {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  const { pathname } = request.nextUrl;

  const isPrivate =
    pathname.startsWith("/my-profile") ||
    pathname.startsWith("/all-tiles/"); 
    
  const isAuthPage =
    pathname.startsWith("/login") ||
    pathname.startsWith("/register");

  if (!session && isPrivate) {
    const loginUrl = new URL("/login", request.url);
    loginUrl.searchParams.set("redirect", pathname);
    return NextResponse.redirect(loginUrl);
  }

  if (session && isAuthPage) {
    return NextResponse.redirect(new URL("/", request.url));
  }
}

export const config = {
  matcher: [
    "/my-profile",
    "/all-tiles/:path*",
    "/login",
    "/register",
  ],
};