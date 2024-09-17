import express from "express";

import { AuthRouter } from "src/routes";
import { BASE_PATH_AUTH_API, PORT } from "src/constants";

const app = express();

app.use(`/${BASE_PATH_AUTH_API}`, AuthRouter);

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
