import { Request, Response } from "express";
import { RegisterService } from "src/main/services";

export const RegisterController = async (req: Request, res: Response) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    return res
      .status(400)
      .json({ message: "Nome, email e senha são obrigatórios" });
  }

  try {
    const result = await RegisterService(name, email, password);
    res
      .status(result.status)
      .json({ token: result.token, message: result.message });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Erro interno do servidor" });
  }
};
