import express from "express";

import { PORT } from "src/constants";

const app = express();

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
