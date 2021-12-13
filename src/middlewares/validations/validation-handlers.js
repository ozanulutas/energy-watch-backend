const { body } = require('express-validator');

// Map of data type and it's validation handlers with error messages
module.exports = {
  integer: (name, type) => body(name).isInt().optional().escape().withMessage(`${name} must be ${type}`),
  boolean: (name, type) => body(name).isBoolean().optional().escape().withMessage(`${name} must be ${type}`),
};