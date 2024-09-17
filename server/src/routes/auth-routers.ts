import { Router } from "express";

import { signInController, registerController } from "src/controllers";
import { verifyTokenMiddleware } from "src/middlewares";
import { validateToken } from "src/main/services";

const router = Router();

router.post("/login", signInController);
router.post("/register", registerController);

router.get("/validate", verifyTokenMiddleware, (req, res) => {
  const tokenVerify = (req.headers.authorization as string).split(" ")[1];
  validateToken(tokenVerify as string);
  res.status(200).json({ message: "Token válido" });
});

export default router;
