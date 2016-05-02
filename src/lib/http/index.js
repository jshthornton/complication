import ExtendableError from '../ExtendableError';

export class HttpError extends ExtendableError {
  constructor(code, message) {
    super(message);
    this.code = code;
  }
}

function makeHttpSubError(code) {
  return class extends HttpError {
    constructor(message) {
      super(code, message);
    }
  }
}

// 4XX
export const BadRequestHttpError = makeHttpSubError(400);
export const UnauthorizedHttpError = makeHttpSubError(401);
export const NotFoundHttpError = makeHttpSubError(404);
export const MethodNotAllowedHttpError = makeHttpSubError(405);
export const ConflictHttpError = makeHttpSubError(409);
export const GoneHttpError = makeHttpSubError(410);

// 5xx
export const InternalServerError = makeHttpSubError(500);
export const BadGatewayHttpError = makeHttpSubError(502);
export const ServiceUnavailableHttpError = makeHttpSubError(503);