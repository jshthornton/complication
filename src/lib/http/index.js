import generator from '../generator';

export const HttpError = generator('HttpError');
export const NotFoundHttpError = generator('NotFoundHttpError', HttpError);
export const AccessDeniedHttpError = generator('AccessDeniedHttpError', HttpError);
export const BadRequestHttpError = generator('BadRequestHttpError', HttpError);
export const ConflictHttpError = generator('ConflictHttpError', HttpError);
export const FatalErrorError = generator('FatalErrorError', HttpError);
export const FlattenError = generator('FlattenError', HttpError);
export const GoneHttpError = generator('GoneHttpError', HttpError);
export const LengthRequiredHttpError = generator('LengthRequiredHttpError', HttpError);
export const MethodNotAllowedHttpError = generator('MethodNotAllowedHttpError', HttpError);
export const NotAcceptableHttpError = generator('NotAcceptableHttpError', HttpError);
export const PreconditionFailedHttpError = generator('PreconditionFailedHttpError', HttpError);
export const PreconditionRequiredHttpError = generator('PreconditionRequiredHttpError', HttpError);
export const ServiceUnavailableHttpError = generator('ServiceUnavailableHttpError', HttpError);
export const TooManyRequestsHttpError = generator('TooManyRequestsHttpError', HttpError);
export const UnauthorizedHttpError = generator('UnauthorizedHttpError', HttpError);
export const UnsupportedMediaTypeHttpError = generator('UnsupportedMediaTypeHttpError', HttpError);