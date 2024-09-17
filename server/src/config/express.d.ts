import { CustomJwtPayload } from "./jwt";

declare global {
  namespace Express {
    interface Request {
      user?: CustomJwtPayload;
    }
  }
}
