import * as trpc from "@trpc/server";
import * as trpcNext from "@trpc/server/adapters/next";
import { createContext } from "../../../server/context";
import { appRouter } from "../../../server/routers/appRouter";

// export API handler
export default trpcNext.createNextApiHandler({
  router: appRouter,
  createContext,
});
