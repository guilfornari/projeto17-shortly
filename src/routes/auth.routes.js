import { Router } from "express";
import { validateSchema } from "../middlewares/validateSchema.middleware.js";

const authRouter = Router();

authRouter.post("/", validateSchema(),);
authRouter.post("/",);

export default authRouter;