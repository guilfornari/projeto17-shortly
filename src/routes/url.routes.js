import { Router } from "express";
import { validateSchema } from "../middlewares/validateSchema.middleware.js";
import { urlSchema } from "../schemas/url.schema.js";
import { authValidation } from "../middlewares/authValidation.middleware.js";
import { createUrl } from "../controllers/url.controllers.js";

const urlRouter = Router();

urlRouter.use(authValidation);

urlRouter.post("/urls/shorten", validateSchema(urlSchema), createUrl);

export default urlRouter;