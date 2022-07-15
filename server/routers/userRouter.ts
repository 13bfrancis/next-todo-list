import { createRouter } from "../context";

export const userRouter = createRouter().query("getUserInfo", {
  resolve({ ctx }) {
    return ctx.session?.user?.name ?? "no user";
  },
});
