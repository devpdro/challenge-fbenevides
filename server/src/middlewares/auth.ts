import { type Request, type Response, type NextFunction } from "express";

import { ValidateToken } from "src/main/services";
import { AppError } from "src/middlewares";

const excludedRoutes = ["/auth/login", "/auth/register", "/auth/validate"];

export const verifyTokenMiddleware = async (
  request: Request,
  response: Response,
  next: NextFunction
) => {
  try {
    if (excludedRoutes.includes(request.path)) {
      next();
      return;
    }

    const authorizationHeader = request.headers["authorization"];

    if (!authorizationHeader) {
      return response.status(401).json({ message: "Nenhum token válido" });
    }

    const token = authorizationHeader.split(" ")[1];
    ValidateToken(token);

    next();
  } catch (error: any) {
    const { statusCode, ...rest } = error as AppError;
    if (!statusCode) {
      return response.status(500).json({ message: "Erro do Servidor Interno" });
    }

    return response.status(statusCode).json(rest);
  }
};
