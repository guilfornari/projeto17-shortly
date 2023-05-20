import { Router } from "express";
import { authValidation } from "../middlewares/authValidation.middleware.js";
import { getUser } from "../controllers/user.controllers.js";

const userRouter = Router();

userRouter.get("/",);

userRouter.use(authValidation);

userRouter.get("/users/me", getUser);

export default userRouter;