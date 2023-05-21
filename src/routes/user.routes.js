import { Router } from "express";
import { getRanking, getUser } from "../controllers/user.controllers.js";
import { authValidation } from "../middlewares/authValidation.middleware.js";


const userRouter = Router();

userRouter.get("/ranking", getRanking);
userRouter.get("/users/me", authValidation, getUser);

export default userRouter;