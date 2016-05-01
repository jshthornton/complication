export default (name) => {
  const GeneratedError = function(message, base = Error) {
    this.message = message;
    this.stack = base().stack;
  };

  GeneratedError.prototype = Object.create(base.prototype);
  GeneratedError.prototype.name = name;
};