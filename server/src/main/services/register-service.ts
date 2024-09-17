import jwt from "jsonwebtoken";

import { prisma } from "src/lib/prisma";
import { BASE_JWT_SECRET } from "src/constants";

export const RegisterService = async (
  name: string,
  email: string,
  password: string
) => {
  const existingUser = await prisma.account.findFirst({
    where: { email },
  });

  if (existingUser) {
    return { status: 400, message: "Usuário já existe" };
  }

  const newUser = await prisma.account.create({
    data: { name, email, password, date: new Date() },
  });

  const token = jwt.sign({ userId: newUser.id }, BASE_JWT_SECRET, {
    expiresIn: "1h",
  });

  return { status: 201, token, message: "Usuário registrado com sucesso" };
};
