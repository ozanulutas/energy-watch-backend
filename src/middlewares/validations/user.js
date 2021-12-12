const { body } = require('express-validator');

// Validations for user operations

const register = [
  body("name")
    .not()
    .isEmpty()
    .withMessage("name is required")
    .isLength({ min: 8, max: 255 })
    .withMessage("name must be min 8 chars long")
    .isAlpha()
    .withMessage("name must only contain letters")
    .trim()
    .escape(),
  body("email")
    .not()
    .isEmpty()
    .withMessage("email is required")
    .isEmail()
    .withMessage("email must be valid")
    .normalizeEmail()
    .trim()
    .escape(),
  body("password")
    .not()
    .isEmpty()
    .withMessage("password is required")
    .matches(/\d/)
    .withMessage("password must contain min 1 number")
    .matches(/[A-Z]/)
    .withMessage("password must contain min 1 uppercase letter")
    .isLength({ min: 8, max: 255 })
    .withMessage("password must be min 8 chars length")
    .trim()
    .escape(),
  body("role")
    .not()
    .isEmpty()
    .withMessage("role is required")
]

const login = [
  body("email")
    .not()
    .isEmpty()
    .withMessage("email is required")
    .isEmail()
    .withMessage("email must be valid")
    .normalizeEmail()
    .trim()
    .escape(),
  body("password")
    .not()
    .isEmpty()
    .withMessage("password is required")
    .matches(/\d/)
    .withMessage("password must contain min 1 number")
    .matches(/[A-Z]/)
    .withMessage("password must contain min 1 uppercase letter")
    .isLength({ min: 8, max: 255 })
    .withMessage("password must be min 8 chars length")
    .trim()
    .escape(),
]

module.exports = {
  register,
  login
}