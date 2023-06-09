import { Router } from "express";
import { validateSchema } from "../middlewares/validateSchema.middleware.js";
import { urlSchema } from "../schemas/url.schema.js";
import { authValidation } from "../middlewares/authValidation.middleware.js";
import { createUrl, deleteUrl, getOneUrl, redirectTo } from "../controllers/url.controllers.js";

const urlRouter = Router();

urlRouter.get("/urls/:id", getOneUrl);
urlRouter.get("/urls/open/:shortUrl", redirectTo);
urlRouter.post("/urls/shorten", validateSchema(urlSchema), authValidation, createUrl);
urlRouter.delete("/urls/:id", authValidation, deleteUrl);

export default urlRouter;