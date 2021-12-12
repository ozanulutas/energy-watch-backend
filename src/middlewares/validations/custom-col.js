const { body } = require('express-validator');

// Validations for custom column operations

module.exports = [
  body("name")
    .not()
    .isEmpty()
    .withMessage("name is required")
    .isLength({ min: 1, max: 255 })
    .trim()
    .escape(),
  body("alias")
    .not()
    .isEmpty()
    .withMessage("alias is required")
    .isLength({ min: 1, max: 255 })
    .trim()
    .escape(),
  body("type")
    .not()
    .isEmpty()
    .withMessage("type is required")
    .isLength({ min: 1, max: 100 })
    .trim()
    .escape(),
  body("tbl_id")
    .not()
    .isEmpty()
    .withMessage("tbl_id is required")
    .isInt()
    .withMessage("tbl_id type must be integer")
]
