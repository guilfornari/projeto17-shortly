import { Router } from "express";
import { validateSchema } from "../middlewares/validateSchema.middleware.js";
import { singUpSchema } from "../schemas/auth.schema.js";
import { signUp } from "../controllers/auth.controllers.js";

const authRouter = Router();

authRouter.post("/signup", validateSchema(singUpSchema), signUp);
authRouter.post("/signin",);

export default authRouter;