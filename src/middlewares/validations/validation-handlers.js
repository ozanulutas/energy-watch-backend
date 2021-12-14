const { body } = require('express-validator');

// Map of data type and it's validation handlers with error messages
module.exports = {
  integer: (name, type) => body(name).isInt().optional({ nullable: true }).escape().withMessage(`${name} must be ${type}`),
  boolean: (name, type) => body(name).isBoolean().optional({ nullable: true }).escape().withMessage(`${name} must be ${type}`),
  date: (name, type) => body(name).isDate().optional({ nullable: true }).escape().withMessage(`${name} must be ${type}`),
  text: (name, type) => body(name).isAlphanumeric().optional({ nullable: true }).escape().withMessage(`${name} must be ${type}`),
  double: (name, type) => body(name).isNumeric().optional({ nullable: true }).escape().withMessage(`${name} must be ${type}`),
};