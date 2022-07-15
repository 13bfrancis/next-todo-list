import { createRouter } from "../context";
import { userRouter } from "./userRouter";

export const appRouter = createRouter().merge("user.", userRouter);

export type AppRouter = typeof appRouter;
