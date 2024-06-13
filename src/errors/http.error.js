// src/errors/http.error.js

import { HTTP_STATUS } from '../constants/http-status.constant.js';

class BadRequest extends Error {
  constructor(message = BadRequest.name) {
    this.message = message;
    this.status = HTTP_STATUS.BAD_REQUEST;
  }
}

class Unauthorized extends Error {
  constructor(message = Unauthorized.name) {
    this.message = message;
    this.status = HTTP_STATUS.UNAUTHORIZED;
  }
}

class Forbidden extends Error {
  constructor(message = Forbidden.name) {
    this.message = message;
    this.status = HTTP_STATUS.FORBIDDEN;
  }
}

class NotFound extends Error {
  constructor(message = NotFound.name) {
    this.message = message;
    this.status = HTTP_STATUS.NOT_FOUND;
  }
}

class Conflict extends Error {
  constructor(message = Conflict.name) {
    this.message = message;
    this.status = HTTP_STATUS.CONFLICT;
  }
}

class InternalServerError extends Error {
  constructor(message = InternalServerError.name) {
    this.message = message;
    this.status = HTTP_STATUS.INTERNAL_SERVER_ERROR;
  }
}

export const HttpError = {
  BadRequest,
  Unauthorized,
  Forbidden,
  NotFound,
  Conflict,
  InternalServerError,
};
