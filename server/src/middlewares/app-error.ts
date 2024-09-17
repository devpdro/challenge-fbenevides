export class AppError {
  message: string;
  statusCode: number;
  data: object;

  constructor(message: string, statusCode = 400, data = {}) {
    this.message = message;
    this.statusCode = statusCode;
    this.data = data;
  }
}
