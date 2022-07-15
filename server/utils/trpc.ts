import { createReactQueryHooks } from "@trpc/react";
import { AppRouter } from "../routers/appRouter";

export const trpc = createReactQueryHooks<AppRouter>();
