const { body } = require('express-validator');

// Validations for user operations

const register = [
  body("name")
    .not()
    .isEmpty()
    .withMessage("Name is required")
    .isLength({ min: 8, max: 255 })
    .withMessage("Name must be min 8 chars long")
    .isAlpha()
    .withMessage("Name must be min 8 chars long")
    .trim()
    .escape(),
  body("email")
    .not()
    .isEmpty()
    .withMessage("Email is required")
    .isEmail()
    .withMessage("Email must be valid")
    .normalizeEmail()
    .trim()
    .escape(),
  body("password")
    .not()
    .isEmpty()
    .withMessage("Password is required")
    .matches(/\d/)
    .withMessage("Password must contain min 1 number")
    .matches(/[A-Z]/)
    .withMessage("Password must contain min 1 uppercase letter")
    .isLength({ min: 8, max: 255 })
    .withMessage("Password must be min 8 chars length")
    .trim()
    .escape(),
  body("role")
    .not()
    .isEmpty()
    .withMessage("Role is required")
]

const login = [
  body("email")
    .not()
    .isEmpty()
    .withMessage("Email is required")
    .isEmail()
    .withMessage("Email must be valid")
    .normalizeEmail()
    .trim()
    .escape(),
  body("password")
    .not()
    .isEmpty()
    .withMessage("Password is required")
    .matches(/\d/)
    .withMessage("Password must contain min 1 number")
    .matches(/[A-Z]/)
    .withMessage("Password must contain min 1 uppercase letter")
    .isLength({ min: 8, max: 255 })
    .withMessage("Password must be min 8 chars length")
    .trim()
    .escape(),
]

module.exports = {
  register,
  login
}