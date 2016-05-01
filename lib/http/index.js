'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UnsupportedMediaTypeHttpError = exports.UnauthorizedHttpError = exports.TooManyRequestsHttpError = exports.ServiceUnavailableHttpError = exports.PreconditionRequiredHttpError = exports.PreconditionFailedHttpError = exports.NotAcceptableHttpError = exports.MethodNotAllowedHttpError = exports.LengthRequiredHttpError = exports.GoneHttpError = exports.FlattenError = exports.FatalErrorError = exports.ConflictHttpError = exports.BadRequestHttpError = exports.AccessDeniedHttpError = exports.NotFoundHttpError = exports.HttpError = undefined;

var _generator = require('../generator');

var _generator2 = _interopRequireDefault(_generator);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var HttpError = exports.HttpError = (0, _generator2.default)('HttpError');
var NotFoundHttpError = exports.NotFoundHttpError = (0, _generator2.default)('NotFoundHttpError', HttpError);
var AccessDeniedHttpError = exports.AccessDeniedHttpError = (0, _generator2.default)('AccessDeniedHttpError', HttpError);
var BadRequestHttpError = exports.BadRequestHttpError = (0, _generator2.default)('BadRequestHttpError', HttpError);
var ConflictHttpError = exports.ConflictHttpError = (0, _generator2.default)('ConflictHttpError', HttpError);
var FatalErrorError = exports.FatalErrorError = (0, _generator2.default)('FatalErrorError', HttpError);
var FlattenError = exports.FlattenError = (0, _generator2.default)('FlattenError', HttpError);
var GoneHttpError = exports.GoneHttpError = (0, _generator2.default)('GoneHttpError', HttpError);
var LengthRequiredHttpError = exports.LengthRequiredHttpError = (0, _generator2.default)('LengthRequiredHttpError', HttpError);
var MethodNotAllowedHttpError = exports.MethodNotAllowedHttpError = (0, _generator2.default)('MethodNotAllowedHttpError', HttpError);
var NotAcceptableHttpError = exports.NotAcceptableHttpError = (0, _generator2.default)('NotAcceptableHttpError', HttpError);
var PreconditionFailedHttpError = exports.PreconditionFailedHttpError = (0, _generator2.default)('PreconditionFailedHttpError', HttpError);
var PreconditionRequiredHttpError = exports.PreconditionRequiredHttpError = (0, _generator2.default)('PreconditionRequiredHttpError', HttpError);
var ServiceUnavailableHttpError = exports.ServiceUnavailableHttpError = (0, _generator2.default)('ServiceUnavailableHttpError', HttpError);
var TooManyRequestsHttpError = exports.TooManyRequestsHttpError = (0, _generator2.default)('TooManyRequestsHttpError', HttpError);
var UnauthorizedHttpError = exports.UnauthorizedHttpError = (0, _generator2.default)('UnauthorizedHttpError', HttpError);
var UnsupportedMediaTypeHttpError = exports.UnsupportedMediaTypeHttpError = (0, _generator2.default)('UnsupportedMediaTypeHttpError', HttpError);
