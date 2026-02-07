class ApiError extends Error {
  constructor(
    HttpStatusCode,
    message = "Something went wrong",
    error = [],
    statck = "",
  ) {
    super(message);
    this.statusCode = this.statusCode;
    ((this.data = null), (this.message = message));
    this.success = false;
    this.errors = this.errors;

    if (statck) {
      this.stack = statck;
    } else {
      Error.captureStackTrace(this, this.constructor);
    }
  }
}

export { ApiError };
