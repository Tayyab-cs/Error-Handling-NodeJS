class AppError extends Error {
  constructor(errorCode, message, statusCode) {
    super(message);
    this.errorCode = errorCode;
    this.message = message;
    this.statusCode = statusCode;
  }
}

export { AppError };
