import { Router } from "express";
import { getRanking, getUser } from "../controllers/user.controllers.js";
import { authValidation } from "../middlewares/authValidation.middleware.js";


const userRouter = Router();

userRouter.get("/ranking", getRanking);

userRouter.use(authValidation);

userRouter.get("/users/me", getUser);

export default userRouter;