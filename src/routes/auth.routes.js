import { Router } from "express";
import { validateSchema } from "../middlewares/validateSchema.middleware.js";
import { signInSchema, singUpSchema } from "../schemas/auth.schema.js";
import { signIn, signUp } from "../controllers/auth.controllers.js";

const authRouter = Router();

authRouter.post("/signup", validateSchema(singUpSchema), signUp);
authRouter.post("/signin", validateSchema(signInSchema), signIn);

export default authRouter;