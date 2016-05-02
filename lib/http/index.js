'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ServiceUnavailableHttpError = exports.BadGatewayHttpError = exports.InternalServerError = exports.GoneHttpError = exports.ConflictHttpError = exports.MethodNotAllowedHttpError = exports.NotFoundHttpError = exports.UnauthorizedHttpError = exports.BadRequestHttpError = exports.HttpError = undefined;

var _ExtendableError2 = require('../ExtendableError');

var _ExtendableError3 = _interopRequireDefault(_ExtendableError2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var HttpError = exports.HttpError = function (_ExtendableError) {
  _inherits(HttpError, _ExtendableError);

  function HttpError(code, message) {
    _classCallCheck(this, HttpError);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(HttpError).call(this, message));

    _this.code = code;
    return _this;
  }

  return HttpError;
}(_ExtendableError3.default);

function makeHttpSubError(code) {
  return function (_HttpError) {
    _inherits(_class, _HttpError);

    function _class(message) {
      _classCallCheck(this, _class);

      return _possibleConstructorReturn(this, Object.getPrototypeOf(_class).call(this, code, message));
    }

    return _class;
  }(HttpError);
}

// 4XX
var BadRequestHttpError = exports.BadRequestHttpError = makeHttpSubError(400);
var UnauthorizedHttpError = exports.UnauthorizedHttpError = makeHttpSubError(401);
var NotFoundHttpError = exports.NotFoundHttpError = makeHttpSubError(404);
var MethodNotAllowedHttpError = exports.MethodNotAllowedHttpError = makeHttpSubError(405);
var ConflictHttpError = exports.ConflictHttpError = makeHttpSubError(409);
var GoneHttpError = exports.GoneHttpError = makeHttpSubError(410);

// 5xx
var InternalServerError = exports.InternalServerError = makeHttpSubError(500);
var BadGatewayHttpError = exports.BadGatewayHttpError = makeHttpSubError(502);
var ServiceUnavailableHttpError = exports.ServiceUnavailableHttpError = makeHttpSubError(503);
