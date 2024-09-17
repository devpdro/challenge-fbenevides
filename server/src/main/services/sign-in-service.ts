import jwt from "jsonwebtoken";

import { prisma } from "src/lib/prisma";
import { BASE_JWT_SECRET } from "src/constants";

export const signInService = async (email: string, password: string) => {
  const user = await prisma.account.findFirst({
    where: { email },
  });

  if (!user) {
    return { status: 401, message: "Credenciais inválidas" };
  }

  if (password !== user.password) {
    return { status: 401, message: "Credenciais inválidas" };
  }

  const token = jwt.sign({ userId: user.id }, BASE_JWT_SECRET, {
    expiresIn: "1h",
  });

  return { status: 200, token };
};
