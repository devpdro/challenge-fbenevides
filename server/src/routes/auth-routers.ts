import { Router } from "express";

import { signInController, registerController } from "src/controllers";

const router = Router();

router.post("/login", signInController);
router.post("/register", registerController);

export default router;
