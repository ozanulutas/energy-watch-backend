const { body } = require('express-validator');
const { customCol } = require("../../services");
const validationHandlers = require("./validation-handlers")

// Validations for consumption operations

// Returns validation handlers 
module.exports = async () => {
  try {
    // Gets user specificied cols
    const customCols = await customCol.getByTblId(2)

    // Prepares an array of validation handlers
    const validations = customCols.map(col => {
      return validationHandlers[col.type](col.name, col.type)
    })

    const baseValidations = [
      body("department")
        .not()
        .isEmpty()
        .withMessage("department is required")
        .trim()
        .escape(),
      body("start_date")
        .not()
        .isEmpty()
        .withMessage("start_date is required")
        .isDate()
        .withMessage("start_date type must be date and format must be 'YYYY-MM-DD'")
        .trim()
        .escape(),
      body("end_date")
        .not()
        .isEmpty()
        .withMessage("end_date is required")
        .isDate()
        .withMessage("end_date type must be date and format must be 'YYYY-MM-DD'")
        .trim()
        .escape(),
      body("fee")
        .not()
        .isEmpty()
        .withMessage("fee is required")
        .isNumeric()
        .withMessage("fee type must be numeric")
        .trim()
        .escape(),
      body("discounted_price")
        .not()
        .isEmpty()
        .withMessage("discounted_price is required")
        .isNumeric()
        .withMessage("discounted_price type must be numeric")
        .trim()
        .escape(),
      body("consumption")
        .not()
        .isEmpty()
        .withMessage("consumption is required")
        .isNumeric()
        .withMessage("consumption type must be numeric")
        .trim()
        .escape(),
      body("facility_id")
        .not()
        .isEmpty()
        .withMessage("facility_id is required")
        .isInt()
        .withMessage("facility_id type must be integer")
        .trim()
        .escape(),
    ]

    return [
      ...baseValidations,
      ...validations
    ]

  } catch (error) {
    console.log(error.message);
  }
}
