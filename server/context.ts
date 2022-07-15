import * as trpc from "@trpc/server";
import * as trpcNext from "@trpc/server/adapters/next";
import { unstable_getServerSession } from "next-auth";
import { nextAuthOptions } from "../pages/api/auth/[...nextauth]";
import { prisma } from "../utils/db";

// The app's context - is generated for each incoming request
export async function createContext(opts?: trpcNext.CreateNextContextOptions) {
  const session =
    opts?.req &&
    opts.res &&
    (await unstable_getServerSession(opts.req, opts.res, nextAuthOptions));

  return {
    opts,
    prisma,
    session,
  };
}
type Context = trpc.inferAsyncReturnType<typeof createContext>;

// Helper function to create a router with your app's context
export function createRouter() {
  return trpc.router<Context>();
}
