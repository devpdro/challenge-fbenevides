import { Request, Response } from "express";
import { registerService } from "src/main/services";

export const registerController = async (req: Request, res: Response) => {
  console.log(req.body);
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ message: "Email e senha são obrigatórios" });
  }

  try {
    const result = await registerService(email, password);
    res
      .status(result.status)
      .json({ token: result.token, message: result.message });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Erro interno do servidor" });
  }
};
