import jwt from "jsonwebtoken";

import { BASE_JWT_SECRET } from "src/constants";

export const ValidateToken = (token: string) => {
  try {
    const decoded = jwt.verify(token, BASE_JWT_SECRET);
    return decoded;
  } catch (error) {
    throw new Error("Token invalido ");
  }
};
