export class AppError extends Error {
  constructor(error, message, statusCode = 400) {
    super();
    this.error = error;
    this.message = message;
    this.statusCode = statusCode;
  }
}
