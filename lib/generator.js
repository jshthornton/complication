"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (name) {
  var GeneratedError = function GeneratedError(message) {
    var base = arguments.length <= 1 || arguments[1] === undefined ? Error : arguments[1];

    this.message = message;
    this.stack = base().stack;
  };

  GeneratedError.prototype = Object.create(base.prototype);
  GeneratedError.prototype.name = name;
};
