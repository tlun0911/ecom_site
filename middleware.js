import { clerkMiddleware } from "@clerk/nextjs/server";

export default clerkMiddleware();

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico).*)", // Skip Next.js internals and static files
    "/api/(.*)", // Match all API routes
  ],
};
