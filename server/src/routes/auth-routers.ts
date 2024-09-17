import { Router } from "express";

import { SignInController, RegisterController } from "src/controllers";

const router = Router();

router.post("/login", SignInController);
router.post("/register", RegisterController);

export default router;
