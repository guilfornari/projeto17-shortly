import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import authRouter from "./routes/auth.routes.js";
import urlRouter from "./routes/url.routes.js";

const app = express();
app.use(cors());
app.use(express.json());

app.use(authRouter);
app.use(urlRouter);

dotenv.config();
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));