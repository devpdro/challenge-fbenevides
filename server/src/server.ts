import express from "express";

import { authRouter } from "src/routes";
import { verifyTokenMiddleware } from "src/middlewares";
import { corsMiddleware } from "src/lib";
import { BASE_PATH_AUTH_API, PORT } from "src/constants";

const app = express();

app.use(corsMiddleware);

app.use(express.json());
app.use(verifyTokenMiddleware);
app.use(`/${BASE_PATH_AUTH_API}`, authRouter);

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
