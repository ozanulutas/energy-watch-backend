const { body } = require('express-validator');

// Map of data type and it's validation handlers with error messages
module.exports = {
  integer: (name, type) => body(name).isInt().withMessage(`${name} must be ${type}`),
  boolean: (name, type) => body(name).isBoolean().withMessage(`${name} must be ${type}`),
};