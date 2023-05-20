import express from "express";
import cors from "cors";
import authRouter from "./routes/auth.routes.js";
import dotenv from "dotenv";

const app = express();
app.use(cors());
app.use(express.json());

app.use(authRouter);

dotenv.config();
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));